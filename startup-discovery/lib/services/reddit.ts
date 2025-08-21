import { Project, ProjectMetrics, ProjectAnalysis } from '@/types/database'

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
    this.clientId = process.env.REDDIT_CLIENT_ID
    this.clientSecret = process.env.REDDIT_CLIENT_SECRET
  }

  private async getAccessToken(): Promise<string | null> {
    if (this.accessToken && Date.now() < this.tokenExpiry) {
      return this.accessToken
    }

    if (!this.clientId || !this.clientSecret) {
      console.error('Reddit API credentials not configured')
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

      return posts.map(post => this.transformToProject(post))
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

  private transformToProject(post: RedditPost): Project {
    const metrics: ProjectMetrics = {
      upvotes: post.score,
      comments: post.num_comments,
    }

    const analysis = this.analyzePost(metrics, post)

    return {
      id: crypto.randomUUID(),
      source: 'reddit',
      source_id: post.id,
      name: this.extractProjectName(post.title),
      description: post.selftext || post.title,
      url: post.url,
      category: [post.subreddit],
      tags: this.extractTags(post),
      metrics,
      analysis,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      discovered_at: new Date(post.created_utc * 1000).toISOString()
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

  private analyzePost(metrics: ProjectMetrics, post: RedditPost): ProjectAnalysis {
    const score = this.calculateScore(metrics)
    const engagement = metrics.comments! / Math.max(metrics.upvotes!, 1)
    
    return {
      score,
      trend: metrics.upvotes! > 100 ? 'rising' : 'stable',
      market_potential: this.assessMarketPotential(metrics, engagement),
      competition_level: 'medium',
      success_probability: score,
      key_insights: this.generateInsights(metrics, engagement, post),
      risks: this.identifyRisks(metrics, engagement),
      opportunities: this.identifyOpportunities(metrics, post)
    }
  }

  private calculateScore(metrics: ProjectMetrics): number {
    let score = 0
    if (metrics.upvotes) {
      score += Math.min(Math.log10(metrics.upvotes + 1) * 20, 50)
    }
    if (metrics.comments) {
      score += Math.min(Math.log10(metrics.comments + 1) * 15, 30)
    }
    return Math.round(score)
  }

  private assessMarketPotential(metrics: ProjectMetrics, engagement: number): 'high' | 'medium' | 'low' {
    if (metrics.upvotes! > 500 && engagement > 0.1) return 'high'
    if (metrics.upvotes! > 100 || engagement > 0.05) return 'medium'
    return 'low'
  }

  private generateInsights(metrics: ProjectMetrics, engagement: number, post: RedditPost): string[] {
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

  private identifyRisks(metrics: ProjectMetrics, engagement: number): string[] {
    const risks: string[] = []
    
    if (engagement < 0.02) {
      risks.push('互动率低，可能缺乏社区支持')
    }
    
    if (metrics.upvotes! < 50) {
      risks.push('关注度有限，需要更多市场验证')
    }
    
    return risks
  }

  private identifyOpportunities(metrics: ProjectMetrics, post: RedditPost): string[] {
    const opportunities: string[] = []
    
    if (metrics.upvotes! > 50 && metrics.upvotes! < 200) {
      opportunities.push('早期项目，有参与机会')
    }
    
    if (post.selftext.toLowerCase().includes('feedback') || post.selftext.toLowerCase().includes('beta')) {
      opportunities.push('项目处于测试阶段，可提供反馈影响发展')
    }
    
    return opportunities
  }
}