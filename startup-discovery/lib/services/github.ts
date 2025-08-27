import { prisma } from '@/lib/database'
import { CredentialsService } from './credentials'
import { nowUTC } from '@/lib/utils/timezone'
import type { Project, ProjectMetrics, ProjectAnalysis } from '../generated/prisma/client'

interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  language: string
  topics: string[]
  created_at: string
  updated_at: string
  pushed_at: string
}

export class GitHubService {
  private token: string | undefined
  private baseUrl = 'https://api.github.com'

  constructor() {
    // 不使用环境变量，强制从数据库读取
    // this.token = process.env.GITHUB_TOKEN
  }

  private async loadCredentials(): Promise<boolean> {
    console.log('🔍 正在加载GitHub凭证...')
    
    // 如果已有token，直接返回
    if (this.token) {
      console.log(`✅ 已有环境变量token: ${this.token.substring(0, 6)}...${this.token.slice(-4)}`)
      return true
    }

    // 从数据库获取凭证
    console.log('📊 从数据库获取GitHub凭证...')
    const credentials = await CredentialsService.getCredentials('github')
    
    if (credentials?.token) {
      this.token = credentials.token
      console.log(`✅ 从数据库加载GitHub token成功: ${this.token.substring(0, 6)}...${this.token.slice(-4)}`)
      console.log(`📏 Token长度: ${this.token.length}`)
      console.log(`🔤 Token类型: ${this.token.startsWith('ghp_') ? 'Personal Access Token' : this.token.startsWith('github_pat_') ? 'Fine-grained Token' : 'Unknown'}`)
      return true
    }

    console.warn('⚠️ 未找到GitHub API凭证，将使用无认证模式（限制更严）')
    console.log('💡 凭证对象:', credentials)
    return false
  }

  private getHeaders() {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'StartupScope-Crawler/1.0'
    }
    if (this.token) {
      console.log(`🔑 使用GitHub token (前6位): ${this.token.substring(0, 6)}...`)
      headers['Authorization'] = `token ${this.token}`
    } else {
      console.log('⚠️ 无GitHub token，使用匿名访问')
    }
    return headers
  }

  async searchRepositories(query: string, sort: string = 'stars'): Promise<Project[]> {
    await this.loadCredentials()
    
    const searchQuery = `${query} in:name,description`
    const url = `${this.baseUrl}/search/repositories?q=${encodeURIComponent(searchQuery)}&sort=${sort}&order=desc&per_page=20`

    try {
      console.log('🔍 GitHub搜索URL:', url)
      
      const response = await fetch(url, {
        headers: this.getHeaders()
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('❌ GitHub API错误:', response.status, errorText)
        throw new Error(`GitHub API error: ${response.status}`)
      }

      const data = await response.json()
      const repos: GitHubRepo[] = data.items || []
      console.log(`✅ GitHub API返回 ${repos.length} 个仓库`)

      // 保存到数据库并返回
      const savedProjects = await Promise.all(
        repos.map(repo => this.saveOrUpdateProject(repo))
      )

      const successfulSaves = savedProjects.filter(Boolean) as Project[]
      console.log(`💾 成功保存 ${successfulSaves.length} 个项目到数据库`)
      
      return successfulSaves
    } catch (error) {
      console.error('Error searching GitHub repositories:', error)
      return []
    }
  }

  async getTrendingRepos(language?: string, since: 'daily' | 'weekly' | 'monthly' = 'daily'): Promise<Project[]> {
    const date = new Date()
    if (since === 'daily') {
      date.setDate(date.getDate() - 1)
    } else if (since === 'weekly') {
      date.setDate(date.getDate() - 7)
    } else {
      date.setMonth(date.getMonth() - 1)
    }

    const query = `created:>${date.toISOString().split('T')[0]}${language ? ` language:${language}` : ''}`
    return this.searchRepositories(query, 'stars')
  }

  async getRepoDetails(owner: string, repo: string): Promise<Project | null> {
    const url = `${this.baseUrl}/repos/${owner}/${repo}`

    try {
      const response = await fetch(url, { headers: this.getHeaders() })

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`)
      }

      const repoData: GitHubRepo = await response.json()
      return this.saveOrUpdateProject(repoData)
    } catch (error) {
      console.error('Error fetching GitHub repo details:', error)
      return null
    }
  }

  private async saveOrUpdateProject(repo: GitHubRepo): Promise<Project | null> {
    try {
      console.log(`💾 正在保存项目: ${repo.full_name}`)
      
      // 检查项目是否已存在
      const existingProject = await prisma.project.findFirst({
        where: {
          source: 'github',
          sourceId: repo.id.toString()
        }
      })

      const projectData = {
        source: 'github' as const,
        sourceId: repo.id.toString(),
        name: repo.name,
        description: repo.description || '',
        url: repo.html_url,
        category: repo.language ? [repo.language] : [],
        tags: repo.topics || [],
        discoveredAt: new Date()
      }

      let project: Project

      if (existingProject) {
        project = await prisma.project.update({
          where: { id: existingProject.id },
          data: projectData
        })
      } else {
        project = await prisma.project.create({
          data: projectData
        })
      }

      // 创建或更新指标
      await prisma.projectMetrics.upsert({
        where: { projectId: project.id },
        update: {
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          issues: repo.open_issues_count
        },
        create: {
          projectId: project.id,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          issues: repo.open_issues_count
        }
      })

      // 创建或更新分析
      const analysisData = this.generateAnalysis(repo)
      await prisma.projectAnalysis.upsert({
        where: { projectId: project.id },
        update: analysisData,
        create: {
          projectId: project.id,
          ...analysisData
        }
      })

      console.log(`✅ 项目保存成功: ${project.name} (ID: ${project.id})`)
      return project
    } catch (error) {
      console.error(`❌ 保存GitHub项目失败 ${repo.full_name}:`, error)
      return null
    }
  }


  private analyzeProject(metrics: { stars: number, forks: number, issues: number, contributors?: number }, repo: GitHubRepo): { score: number, trend: 'rising' | 'stable' | 'declining', market_potential: 'high' | 'medium' | 'low', competition_level: 'high' | 'medium' | 'low', success_probability: number, key_insights: string[], risks: string[], opportunities: string[] } {
    const score = this.calculateScore(metrics)
    const daysSinceUpdate = Math.floor((Date.now() - new Date(repo.pushed_at).getTime()) / (1000 * 60 * 60 * 24))
    
    let trend: 'rising' | 'stable' | 'declining' = 'stable'
    if (daysSinceUpdate < 7 && metrics.stars! > 100) {
      trend = 'rising'
    } else if (daysSinceUpdate > 90) {
      trend = 'declining'
    }

    const marketPotential = this.assessMarketPotential(metrics, repo.topics)
    const competitionLevel = this.assessCompetitionLevel(repo.language || '', metrics)
    const successProbability = this.calculateSuccessProbability(score, marketPotential, competitionLevel)

    return {
      score,
      trend,
      market_potential: marketPotential,
      competition_level: competitionLevel,
      success_probability: successProbability,
      key_insights: this.generateInsights(metrics, repo),
      risks: this.identifyRisks(metrics, daysSinceUpdate),
      opportunities: this.identifyOpportunities(metrics, repo.topics)
    }
  }

  private calculateScore(metrics: { stars: number, forks: number, issues: number, contributors?: number }): number {
    const weights = {
      stars: 0.35,
      forks: 0.25,
      issues: 0.15,
      contributors: 0.25
    }
    
    let score = 0
    if (metrics.stars) score += Math.min(Math.log10(metrics.stars + 1) * 10, 35) * weights.stars
    if (metrics.forks) score += Math.min(Math.log10(metrics.forks + 1) * 10, 25) * weights.forks
    if (metrics.issues) score += Math.min(Math.log10(metrics.issues + 1) * 5, 15) * weights.issues
    if (metrics.contributors) score += Math.min(Math.log10(metrics.contributors + 1) * 10, 25) * weights.contributors
    
    return Math.round(score)
  }

  private assessMarketPotential(metrics: { stars: number, forks: number, issues: number, contributors?: number }, topics: string[]): 'high' | 'medium' | 'low' {
    const hotTopics = ['ai', 'machine-learning', 'blockchain', 'web3', 'defi', 'saas', 'automation']
    const hasHotTopic = topics.some(topic => hotTopics.includes(topic.toLowerCase()))
    
    if (hasHotTopic && metrics.stars! > 500) return 'high'
    if (metrics.stars! > 100 || hasHotTopic) return 'medium'
    return 'low'
  }

  private assessCompetitionLevel(language: string, metrics: { stars: number, forks: number, issues: number, contributors?: number }): 'high' | 'medium' | 'low' {
    const competitiveLanguages = ['JavaScript', 'Python', 'TypeScript', 'Java']
    const isCompetitive = competitiveLanguages.includes(language)
    
    if (isCompetitive && metrics.stars! < 100) return 'high'
    if (isCompetitive || metrics.stars! < 50) return 'medium'
    return 'low'
  }

  private calculateSuccessProbability(score: number, marketPotential: string, competition: string): number {
    let probability = score
    
    if (marketPotential === 'high') probability += 20
    else if (marketPotential === 'medium') probability += 10
    
    if (competition === 'low') probability += 15
    else if (competition === 'high') probability -= 10
    
    return Math.min(Math.max(probability, 0), 100)
  }

  private generateInsights(metrics: { stars: number, forks: number, issues: number, contributors?: number }, repo: GitHubRepo): string[] {
    const insights: string[] = []
    
    if (metrics.stars! > 1000) {
      insights.push('项目获得了显著的社区关注')
    }
    
    if (metrics.forks! > metrics.stars! * 0.2) {
      insights.push('高fork率表明项目有实际应用价值')
    }
    
    if (metrics.contributors! > 10) {
      insights.push('活跃的贡献者社区')
    }
    
    if (repo.topics.includes('ai') || repo.topics.includes('machine-learning')) {
      insights.push('AI/ML领域项目，市场潜力大')
    }
    
    return insights
  }

  private identifyRisks(metrics: { stars: number, forks: number, issues: number, contributors?: number }, daysSinceUpdate: number): string[] {
    const risks: string[] = []
    
    if (daysSinceUpdate > 60) {
      risks.push('项目可能已停止维护')
    }
    
    if (metrics.issues! > metrics.stars! * 0.1) {
      risks.push('存在较多未解决的问题')
    }
    
    if (metrics.contributors! < 2) {
      risks.push('依赖单一维护者，存在维护风险')
    }
    
    return risks
  }

  private generateAnalysis(repo: GitHubRepo) {
    const score = Math.min(Math.log10((repo.stargazers_count || 0) + 1) * 15 + Math.log10((repo.forks_count || 0) + 1) * 10, 100)
    const daysSinceUpdate = Math.floor((Date.now() - new Date(repo.pushed_at).getTime()) / (1000 * 60 * 60 * 24))
    
    return {
      score: Math.round(score),
      trend: daysSinceUpdate < 30 && repo.stargazers_count > 100 ? 'rising' : 'stable',
      marketPotential: repo.stargazers_count > 1000 ? 'high' : repo.stargazers_count > 100 ? 'medium' : 'low',
      competitionLevel: 'medium',
      successProbability: score / 100,
      competitors: [],
      keyInsights: repo.stargazers_count > 500 ? ['项目获得显著关注', '开发活跃'] : ['早期项目'],
      risks: daysSinceUpdate > 90 ? ['可能停止维护'] : ['竞争激烈'],
      opportunities: ['开源项目，可参与贡献', '技术学习价值高']
    }
  }

  private identifyOpportunities(metrics: { stars: number, forks: number, issues: number, contributors?: number }, topics: string[]): string[] {
    const opportunities: string[] = []
    
    if (metrics.stars! < 100 && metrics.forks! > 10) {
      opportunities.push('项目虽小但有实用价值，可能被低估')
    }
    
    if (topics.some(t => ['api', 'sdk', 'library'].includes(t.toLowerCase()))) {
      opportunities.push('作为开发工具有商业化潜力')
    }
    
    if (metrics.stars! > 50 && metrics.stars! < 500) {
      opportunities.push('处于增长期，适合早期参与')
    }
    
    return opportunities
  }
}