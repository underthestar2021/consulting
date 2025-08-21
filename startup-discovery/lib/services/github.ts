import { Project, ProjectMetrics, ProjectAnalysis } from '@/types/database'

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
    this.token = process.env.GITHUB_TOKEN
  }

  private getHeaders() {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    }
    if (this.token) {
      headers['Authorization'] = `token ${this.token}`
    }
    return headers
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
    const url = `${this.baseUrl}/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=30`

    try {
      const response = await fetch(url, {
        headers: this.getHeaders()
      })

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`)
      }

      const data = await response.json()
      const repos: GitHubRepo[] = data.items

      return Promise.all(repos.map(repo => this.transformToProject(repo)))
    } catch (error) {
      console.error('Error fetching GitHub trending repos:', error)
      return []
    }
  }

  async getRepoDetails(owner: string, repo: string): Promise<Project | null> {
    const url = `${this.baseUrl}/repos/${owner}/${repo}`

    try {
      const [repoResponse, contributorsResponse] = await Promise.all([
        fetch(url, { headers: this.getHeaders() }),
        fetch(`${url}/contributors?per_page=100`, { headers: this.getHeaders() })
      ])

      if (!repoResponse.ok) {
        throw new Error(`GitHub API error: ${repoResponse.status}`)
      }

      const repoData: GitHubRepo = await repoResponse.json()
      const contributorsData = contributorsResponse.ok ? await contributorsResponse.json() : []

      return this.transformToProject(repoData, contributorsData.length)
    } catch (error) {
      console.error('Error fetching GitHub repo details:', error)
      return null
    }
  }

  private async transformToProject(repo: GitHubRepo, contributorCount?: number): Promise<Project> {
    const metrics: ProjectMetrics = {
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      issues: repo.open_issues_count,
      contributors: contributorCount || 0,
    }

    const analysis = this.analyzeProject(metrics, repo)

    return {
      id: crypto.randomUUID(),
      source: 'github',
      source_id: repo.id.toString(),
      name: repo.name,
      description: repo.description || '',
      url: repo.html_url,
      category: repo.language ? [repo.language] : [],
      tags: repo.topics || [],
      metrics,
      analysis,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      discovered_at: new Date().toISOString()
    }
  }

  private analyzeProject(metrics: ProjectMetrics, repo: GitHubRepo): ProjectAnalysis {
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

  private calculateScore(metrics: ProjectMetrics): number {
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

  private assessMarketPotential(metrics: ProjectMetrics, topics: string[]): 'high' | 'medium' | 'low' {
    const hotTopics = ['ai', 'machine-learning', 'blockchain', 'web3', 'defi', 'saas', 'automation']
    const hasHotTopic = topics.some(topic => hotTopics.includes(topic.toLowerCase()))
    
    if (hasHotTopic && metrics.stars! > 500) return 'high'
    if (metrics.stars! > 100 || hasHotTopic) return 'medium'
    return 'low'
  }

  private assessCompetitionLevel(language: string, metrics: ProjectMetrics): 'high' | 'medium' | 'low' {
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

  private generateInsights(metrics: ProjectMetrics, repo: GitHubRepo): string[] {
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

  private identifyRisks(metrics: ProjectMetrics, daysSinceUpdate: number): string[] {
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

  private identifyOpportunities(metrics: ProjectMetrics, topics: string[]): string[] {
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