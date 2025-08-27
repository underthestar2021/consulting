import { prisma } from '@/lib/database'
import { CredentialsService } from './credentials'
import { unixToDate, nowUTC } from '@/lib/utils/timezone'
import type { Project, ProjectMetrics, ProjectAnalysis } from '../generated/prisma/client'

interface RedditPost {
  id: string
  title: string
  selftext: string
  url: string
  score: number
  num_comments: number
  subreddit: string
  created_utc: number
  author: string
}

export class RedditService {
  private clientId: string | undefined
  private clientSecret: string | undefined
  private accessToken: string | null = null
  private tokenExpiry: number = 0

  constructor() {
    // 先从环境变量读取（向后兼容）
    this.clientId = process.env.REDDIT_CLIENT_ID
    this.clientSecret = process.env.REDDIT_CLIENT_SECRET
  }

  private async loadCredentials(): Promise<boolean> {
    // 如果已有凭证，直接返回
    if (this.clientId && this.clientSecret) {
      return true
    }

    // 从数据库获取凭证
    const credentials = await CredentialsService.getCredentials('reddit')
    if (credentials) {
      this.clientId = credentials.client_id
      this.clientSecret = credentials.client_secret
      console.log('✅ 从数据库加载Reddit凭证成功')
      return true
    }

    console.error('❌ 未找到Reddit API凭证')
    return false
  }

  private async getAccessToken(): Promise<string | null> {
    if (this.accessToken && Date.now() < this.tokenExpiry) {
      return this.accessToken
    }

    // 确保凭证已加载
    if (!(await this.loadCredentials())) {
      return null
    }

    try {
      const auth = Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64')
      const response = await fetch('https://www.reddit.com/api/v1/access_token', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials'
      })

      if (!response.ok) {
        throw new Error(`Reddit auth error: ${response.status}`)
      }

      const data = await response.json()
      this.accessToken = data.access_token
      this.tokenExpiry = Date.now() + (data.expires_in * 1000)
      
      return this.accessToken
    } catch (error) {
      console.error('Error getting Reddit access token:', error)
      return null
    }
  }

  async getStartupPosts(subreddit: string = 'startups', timeFilter: 'day' | 'week' | 'month' = 'week'): Promise<Project[]> {
    const token = await this.getAccessToken()
    if (!token) {
      return []
    }

    try {
      const response = await fetch(
        `https://oauth.reddit.com/r/${subreddit}/top?t=${timeFilter}&limit=30`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'User-Agent': 'StartupDiscovery/1.0'
          }
        }
      )

      if (!response.ok) {
        throw new Error(`Reddit API error: ${response.status}`)
      }

      const data = await response.json()
      const posts: RedditPost[] = data.data.children
        .map((child: { data: RedditPost }) => child.data)
        .filter((post: RedditPost) => this.isStartupRelated(post))

      // 保存到数据库并返回
      const savedProjects = await Promise.all(
        posts.map(post => this.saveOrUpdateProject(post))
      )

      return savedProjects.filter(Boolean) as Project[]
    } catch (error) {
      console.error('Error fetching Reddit posts:', error)
      return []
    }
  }

  private isStartupRelated(post: RedditPost): boolean {
    const keywords = ['startup', 'launch', 'mvp', 'saas', 'app', 'product', 'business', 'founder']
    const text = `${post.title} ${post.selftext}`.toLowerCase()
    return keywords.some(keyword => text.includes(keyword))
  }

  private async saveOrUpdateProject(post: RedditPost): Promise<Project | null> {
    try {
      const sourceId = `reddit_${post.id}`
      
      // 检查项目是否已存在
      const existingProject = await prisma.project.findFirst({
        where: {
          source: 'reddit',
          sourceId: post.id
        }
      })

      const projectData = {
        source: 'reddit' as const,
        sourceId: post.id,
        name: this.extractProjectName(post.title),
        description: post.selftext || post.title,
        url: post.url,
        category: [post.subreddit],
        tags: this.extractTags(post),
        discoveredAt: unixToDate(post.created_utc)
      }

      let project: Project

      if (existingProject) {
        // 更新现有项目
        project = await prisma.project.update({
          where: { id: existingProject.id },
          data: projectData
        })
      } else {
        // 创建新项目
        project = await prisma.project.create({
          data: projectData
        })
      }

      // 保存或更新项目指标
      await prisma.projectMetrics.upsert({
        where: { projectId: project.id },
        update: {
          upvotes: post.score,
          comments: post.num_comments
        },
        create: {
          projectId: project.id,
          upvotes: post.score,
          comments: post.num_comments
        }
      })

      // 保存或更新项目分析
      const analysisData = this.generateAnalysis(post)
      await prisma.projectAnalysis.upsert({
        where: { projectId: project.id },
        update: analysisData,
        create: {
          projectId: project.id,
          ...analysisData
        }
      })

      return project
    } catch (error) {
      console.error('Error saving project to database:', error)
      return null
    }
  }

  private transformToProject(post: RedditPost): Project {
    const metrics = {
      upvotes: post.score,
      comments: post.num_comments,
    }

    const analysis = this.analyzePost(metrics, post)

    return {
      id: `reddit_${post.id}`,
      source: 'reddit',
      sourceId: post.id,
      name: this.extractProjectName(post.title),
      description: post.selftext || post.title,
      url: post.url,
      category: [post.subreddit],
      tags: this.extractTags(post),
      createdAt: new Date(),
      updatedAt: new Date(),
      discoveredAt: new Date(post.created_utc * 1000)
    }
  }

  private extractProjectName(title: string): string {
    const match = title.match(/(?:launching|introducing|built|created|made)\s+([^-–—]+)/i)
    if (match) {
      return match[1].trim().split(/[,.!?]/)[0]
    }
    return title.length > 50 ? title.substring(0, 50) + '...' : title
  }

  private extractTags(post: RedditPost): string[] {
    const tags: string[] = []
    const text = `${post.title} ${post.selftext}`.toLowerCase()
    
    const techKeywords = ['ai', 'ml', 'saas', 'api', 'blockchain', 'web3', 'mobile', 'ios', 'android']
    techKeywords.forEach(keyword => {
      if (text.includes(keyword)) {
        tags.push(keyword)
      }
    })
    
    return tags
  }

  private analyzePost(metrics: { upvotes: number, comments: number }, post: RedditPost): { score: number, trend: 'rising' | 'stable' | 'declining', market_potential: 'high' | 'medium' | 'low', competition_level: 'high' | 'medium' | 'low', success_probability: number, competitors: string[], key_insights: string[], risks: string[], opportunities: string[] } {
    const score = this.calculateScore(metrics)
    const engagement = metrics.comments! / Math.max(metrics.upvotes!, 1)
    
    return {
      score,
      trend: metrics.upvotes! > 100 ? 'rising' : 'stable',
      market_potential: this.assessMarketPotential(metrics, engagement),
      competition_level: 'medium',
      success_probability: score,
      competitors: [],
      key_insights: this.generateInsights(metrics, engagement, post),
      risks: this.identifyRisks(metrics, engagement),
      opportunities: this.identifyOpportunities(metrics, post)
    }
  }

  private calculateScore(metrics: { upvotes: number, comments: number }): number {
    let score = 0
    if (metrics.upvotes) {
      score += Math.min(Math.log10(metrics.upvotes + 1) * 20, 50)
    }
    if (metrics.comments) {
      score += Math.min(Math.log10(metrics.comments + 1) * 15, 30)
    }
    return Math.round(score)
  }

  private assessMarketPotential(metrics: { upvotes: number, comments: number }, engagement: number): 'high' | 'medium' | 'low' {
    if (metrics.upvotes! > 500 && engagement > 0.1) return 'high'
    if (metrics.upvotes! > 100 || engagement > 0.05) return 'medium'
    return 'low'
  }

  private generateInsights(metrics: { upvotes: number, comments: number }, engagement: number, post: RedditPost): string[] {
    const insights: string[] = []
    
    if (metrics.upvotes! > 500) {
      insights.push('在Reddit社区获得广泛认可')
    }
    
    if (engagement > 0.1) {
      insights.push('高参与度表明社区兴趣浓厚')
    }
    
    if (post.subreddit === 'startups') {
      insights.push('来自创业社区，可能有实际验证')
    }
    
    return insights
  }

  private identifyRisks(metrics: { upvotes: number, comments: number }, engagement: number): string[] {
    const risks: string[] = []
    
    if (engagement < 0.02) {
      risks.push('互动率低，可能缺乏社区支持')
    }
    
    if (metrics.upvotes! < 50) {
      risks.push('关注度有限，需要更多市场验证')
    }
    
    return risks
  }

  private identifyOpportunities(metrics: { upvotes: number, comments: number }, post: RedditPost): string[] {
    const opportunities: string[] = []
    
    if (metrics.upvotes! > 50 && metrics.upvotes! < 200) {
      opportunities.push('早期项目，有参与机会')
    }
    
    if (post.selftext.toLowerCase().includes('feedback') || post.selftext.toLowerCase().includes('beta')) {
      opportunities.push('项目处于测试阶段，可提供反馈影响发展')
    }
    
    return opportunities
  }

  private generateAnalysis(post: RedditPost) {
    const score = this.calculateScoreFromPost(post)
    const engagement = post.num_comments / Math.max(post.score, 1)
    
    return {
      score,
      trend: post.score > 100 ? 'rising' : 'stable',
      marketPotential: this.assessMarketPotentialFromPost(post, engagement),
      competitionLevel: 'medium',
      successProbability: score / 100,
      competitors: [],
      keyInsights: this.generateInsightsFromPost(post, engagement),
      risks: this.identifyRisksFromPost(post, engagement),
      opportunities: this.identifyOpportunitiesFromPost(post)
    }
  }

  private calculateScoreFromPost(post: RedditPost): number {
    let score = 0
    if (post.score) {
      score += Math.min(Math.log10(post.score + 1) * 20, 50)
    }
    if (post.num_comments) {
      score += Math.min(Math.log10(post.num_comments + 1) * 15, 30)
    }
    return Math.round(score)
  }

  private assessMarketPotentialFromPost(post: RedditPost, engagement: number): 'high' | 'medium' | 'low' {
    if (post.score > 500 && engagement > 0.1) return 'high'
    if (post.score > 100 || engagement > 0.05) return 'medium'
    return 'low'
  }

  private generateInsightsFromPost(post: RedditPost, engagement: number): string[] {
    const insights: string[] = []
    
    if (post.score > 500) {
      insights.push('在Reddit社区获得广泛认可')
    }
    
    if (engagement > 0.1) {
      insights.push('高参与度表明社区兴趣浓厚')
    }
    
    if (post.subreddit === 'startups') {
      insights.push('来自创业社区，可能有实际验证')
    }
    
    return insights
  }

  private identifyRisksFromPost(post: RedditPost, engagement: number): string[] {
    const risks: string[] = []
    
    if (engagement < 0.02) {
      risks.push('互动率低，可能缺乏社区支持')
    }
    
    if (post.score < 50) {
      risks.push('关注度有限，需要更多市场验证')
    }
    
    return risks
  }

  private identifyOpportunitiesFromPost(post: RedditPost): string[] {
    const opportunities: string[] = []
    
    if (post.score > 50 && post.score < 200) {
      opportunities.push('早期项目，有参与机会')
    }
    
    if (post.selftext.toLowerCase().includes('feedback') || post.selftext.toLowerCase().includes('beta')) {
      opportunities.push('项目处于测试阶段，可提供反馈影响发展')
    }
    
    return opportunities
  }
}