import { prisma } from '@/lib/database'
import { CredentialsService } from './credentials'
import { nowUTC } from '@/lib/utils/timezone'
import type { Project, ProjectMetrics, ProjectAnalysis } from '../generated/prisma/client'

interface ProductHuntTopic {
  name: string
}

interface ProductHuntTopicEdge {
  node: ProductHuntTopic
}

interface ProductHuntPost {
  id: string
  name: string
  tagline: string
  description: string
  url: string
  votesCount: number
  commentsCount: number
  topics: {
    edges: ProductHuntTopicEdge[]
  }
  createdAt: string
  featuredAt: string
}

interface ProductHuntEdge {
  node: ProductHuntPost
}

export class ProductHuntService {
  private baseUrl = 'https://api.producthunt.com/v2/api/graphql'
  private token: string | undefined
  
  constructor() {
    // 强制从数据库读取token
  }

  private async loadCredentials(): Promise<boolean> {
    console.log('🔍 正在加载Product Hunt凭证...')
    
    // 从数据库获取Developer Token
    const credentials = await CredentialsService.getCredentials('product_hunt')
    if (credentials?.token) {
      this.token = credentials.token
      console.log(`✅ 从数据库加载Product Hunt Developer Token成功: ${this.token.substring(0, 8)}...`)
      return true
    }

    console.warn('⚠️ 未找到Product Hunt Developer Token')
    return false
  }

  async getTopProducts(date?: string): Promise<Project[]> {
    await this.loadCredentials()
    
    // 如果没有token，返回示例数据
    if (!this.token) {
      console.warn('⚠️ 没有Product Hunt token，返回示例数据')
      return await this.getMockProducts()
    }

    try {
      // 使用真实的GraphQL API
      return await this.fetchWithGraphQL()
    } catch (error) {
      console.error('❌ Product Hunt API请求失败，返回示例数据:', error)
      return await this.getMockProducts()
    }
  }

  private async fetchWithGraphQL(): Promise<Project[]> {
    const query = `{
      posts(order: VOTES, first: 10) {
        edges {
          node {
            id
            name
            tagline
            description
            url
            votesCount
            commentsCount
            createdAt
            featuredAt
            topics {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }`

    console.log('🌐 调用Product Hunt GraphQL API...')

    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ query })
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('❌ Product Hunt API错误:', response.status, errorText)
      throw new Error(`API request failed: ${response.status}`)
    }

    const data = await response.json()
    
    if (data.errors) {
      console.error('❌ GraphQL错误:', data.errors)
      throw new Error('GraphQL errors: ' + JSON.stringify(data.errors))
    }

    const posts = data.data?.posts?.edges?.map((edge: ProductHuntEdge) => edge.node) || []
    console.log(`✅ 从Product Hunt获取到 ${posts.length} 个产品`)

    // 保存到数据库并返回
    const savedProjects = await Promise.all(
      posts.map((post: ProductHuntPost) => this.saveProductToDatabase(post))
    )

    return savedProjects.filter(Boolean) as Project[]
  }

  private async saveProductToDatabase(post: ProductHuntPost): Promise<Project | null> {
    try {
      console.log(`💾 保存Product Hunt项目: ${post.name}`)
      
      // 检查项目是否已存在
      const existingProject = await prisma.project.findFirst({
        where: {
          source: 'product_hunt',
          sourceId: post.id
        }
      })

      const topics = post.topics?.edges?.map(edge => edge.node.name) || []
      
      const projectData = {
        source: 'product_hunt' as const,
        sourceId: post.id,
        name: post.name,
        description: post.tagline + (post.description ? `. ${post.description}` : ''),
        url: post.url,
        category: topics.slice(0, 3),
        tags: topics,
        discoveredAt: new Date(post.featuredAt || post.createdAt)
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

      // 保存指标
      await prisma.projectMetrics.upsert({
        where: { projectId: project.id },
        update: {
          upvotes: post.votesCount,
          comments: post.commentsCount
        },
        create: {
          projectId: project.id,
          upvotes: post.votesCount,
          comments: post.commentsCount
        }
      })

      // 生成分析
      const analysisData = this.generateProductHuntAnalysis(post, topics)
      await prisma.projectAnalysis.upsert({
        where: { projectId: project.id },
        update: analysisData,
        create: {
          projectId: project.id,
          ...analysisData
        }
      })

      console.log(`✅ Product Hunt项目保存成功: ${project.name}`)
      return project

    } catch (error) {
      console.error(`❌ 保存Product Hunt项目失败 ${post.name}:`, error)
      return null
    }
  }

  private generateProductHuntAnalysis(post: ProductHuntPost, topics: string[]) {
    const score = Math.min(post.votesCount / 5 + (post.commentsCount || 0) * 2, 100)
    
    return {
      score: Math.round(score),
      trend: post.votesCount > 200 ? 'rising' : 'stable',
      marketPotential: post.votesCount > 300 ? 'high' : post.votesCount > 100 ? 'medium' : 'low',
      competitionLevel: 'medium',
      successProbability: Math.min(score / 100, 1),
      competitors: [],
      keyInsights: [
        post.votesCount > 200 ? 'Product Hunt社区高关注度' : '新兴产品',
        topics.some(t => t.toLowerCase().includes('ai')) ? 'AI相关热门领域' : '传统创业领域'
      ],
      risks: post.votesCount < 50 ? ['社区关注度较低'] : ['需要持续用户验证'],
      opportunities: [
        'Product Hunt验证的产品',
        post.votesCount > 100 ? '有一定市场牵引力' : '早期投资机会'
      ]
    }
  }

  private async scrapeProductHunt(date?: string): Promise<Project[]> {
    const targetDate = date || new Date().toISOString().split('T')[0]
    const url = `https://www.producthunt.com/leaderboard/daily/${targetDate}`
    
    console.log(`🌐 开始抓取Product Hunt: ${url}`)
    
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
          'Accept-Encoding': 'gzip, deflate, br',
          'Cache-Control': 'no-cache',
        }
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      const html = await response.text()
      return await this.parseProductHuntHTML(html)
      
    } catch (error) {
      console.error('网页抓取失败:', error)
      throw error
    }
  }

  private async parseProductHuntHTML(html: string): Promise<Project[]> {
    // 由于没有服务器端DOM解析器，我们使用正则表达式来提取基本信息
    // 这是一个简化的解析，实际生产环境建议使用cheerio等库
    
    const products: any[] = []
    
    // 提取产品数据的简化正则模式
    const productPattern = /"name":"([^"]+)".*?"tagline":"([^"]+)".*?"votesCount":(\d+)/g
    let match
    
    while ((match = productPattern.exec(html)) !== null && products.length < 10) {
      products.push({
        id: `ph_${Date.now()}_${products.length}`,
        name: match[1].replace(/\\"/g, '"').replace(/\\\\/g, '\\'),
        tagline: match[2].replace(/\\"/g, '"').replace(/\\\\/g, '\\'),
        description: '',
        url: `https://www.producthunt.com/posts/${match[1].toLowerCase().replace(/\s+/g, '-')}`,
        votesCount: parseInt(match[3]),
        commentsCount: Math.floor(parseInt(match[3]) * 0.1), // 估算评论数
        topics: this.extractTopicsFromTagline(match[2])
      })
    }

    console.log(`✅ 从Product Hunt解析出 ${products.length} 个产品`)
    
    return await Promise.all(products.map(product => this.transformMockToProject(product)))
  }

  private extractTopicsFromTagline(tagline: string): string[] {
    const topics: string[] = []
    const keywords = {
      'AI': ['ai', 'artificial intelligence', 'machine learning', 'neural', 'gpt'],
      'SaaS': ['saas', 'software', 'platform', 'service'],
      'Productivity': ['productivity', 'workflow', 'automation', 'efficiency'],
      'Design': ['design', 'ui', 'ux', 'creative', 'visual'],
      'Marketing': ['marketing', 'growth', 'analytics', 'social media'],
      'Developer Tools': ['developer', 'api', 'code', 'programming']
    }

    const lowerTagline = tagline.toLowerCase()
    
    Object.entries(keywords).forEach(([topic, words]) => {
      if (words.some(word => lowerTagline.includes(word))) {
        topics.push(topic)
      }
    })

    return topics.length > 0 ? topics : ['Tech', 'Startup']
  }

  private async getMockProducts(): Promise<Project[]> {
    const mockProducts = [
      {
        id: 'ph_demo_1',
        name: 'AI Design Studio',
        tagline: 'Generate stunning designs with AI',
        description: 'Create professional designs in seconds using advanced AI algorithms',
        url: 'https://example.com/ai-design',
        votesCount: 245,
        commentsCount: 32,
        topics: ['AI', 'Design', 'Productivity']
      },
      {
        id: 'ph_demo_2', 
        name: 'DevFlow',
        tagline: 'Streamline your development workflow',
        description: 'All-in-one platform for developers to manage projects and collaborate',
        url: 'https://example.com/devflow',
        votesCount: 189,
        commentsCount: 27,
        topics: ['Developer Tools', 'Productivity', 'SaaS']
      }
    ]

    return await Promise.all(mockProducts.map(product => this.transformMockToProject(product)))
  }

  private async transformMockToProject(product: any): Promise<Project> {
    try {
      // 检查是否已存在
      const existingProject = await prisma.project.findFirst({
        where: {
          source: 'product_hunt',
          sourceId: product.id
        }
      })

      const projectData = {
        source: 'product_hunt' as const,
        sourceId: product.id,
        name: product.name,
        description: `${product.tagline}. ${product.description || ''}`,
        url: product.url,
        category: product.topics.slice(0, 3),
        tags: product.topics,
        discoveredAt: nowUTC()
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
          upvotes: product.votesCount,
          comments: product.commentsCount
        },
        create: {
          projectId: project.id,
          upvotes: product.votesCount,
          comments: product.commentsCount
        }
      })

      // 创建或更新分析
      const analysisData = this.generateAnalysis(product)
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
      console.error('Error saving Product Hunt project:', error)
      throw error
    }
  }

  private generateAnalysis(product: any) {
    const score = Math.min(product.votesCount / 5 + product.commentsCount * 2, 100)
    
    return {
      score: Math.round(score),
      trend: product.votesCount > 200 ? 'rising' : 'stable',
      marketPotential: product.votesCount > 300 ? 'high' : product.votesCount > 100 ? 'medium' : 'low',
      competitionLevel: 'medium',
      successProbability: score / 100,
      competitors: [],
      keyInsights: product.votesCount > 200 ? ['Product Hunt社区关注度高'] : ['有潜力的早期产品'],
      risks: ['需要持续市场验证'],
      opportunities: ['B2B潜力', '早期投资机会']
    }
  }

  async getTrendingProducts(daysAgo: number = 1): Promise<Project[]> {
    const query = `
      query {
        posts(order: VOTES, first: 30, postedAfter: "${this.getDateString(daysAgo)}") {
          edges {
            node {
              id
              name
              tagline
              description
              url
              votesCount
              commentsCount
              topics {
                edges {
                  node {
                    name
                  }
                }
              }
              createdAt
              featuredAt
            }
          }
        }
      }
    `

    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query })
      })

      if (!response.ok) {
        throw new Error(`Product Hunt API error: ${response.status}`)
      }

      const data = await response.json()
      const posts = data.data?.posts?.edges?.map((edge: ProductHuntEdge) => edge.node) || []

      const projects: Project[] = []
      for (const post of posts) {
        const project = await this.createProjectFromPost(post)
        if (project) {
          projects.push(project)
        }
      }
      return projects
    } catch (error) {
      console.error('Error fetching Product Hunt products:', error)
      return []
    }
  }

  private getDateString(daysAgo: number): string {
    const date = new Date()
    date.setDate(date.getDate() - daysAgo)
    return date.toISOString().split('T')[0]
  }

  private async createProjectFromPost(post: ProductHuntPost): Promise<Project | null> {
    try {
      console.log(`💾 正在保存Product Hunt项目: ${post.name}`)
      
      // 检查是否已存在
      const existing = await prisma.project.findFirst({
        where: {
          source: 'product_hunt',
          sourceId: post.id
        }
      })

      if (existing) {
        console.log(`📍 项目已存在，跳过: ${post.name}`)
        return existing as Project
      }

      const metrics = {
        upvotes: post.votesCount,
        comments: post.commentsCount,
      }

      const topics = post.topics?.edges?.map((edge) => edge.node.name) || []
      const analysis = this.analyzeProduct(metrics, topics)

      const project = await prisma.project.create({
        data: {
          source: 'product_hunt',
          sourceId: post.id,
          name: post.name,
          description: `${post.tagline}. ${post.description || ''}`,
          url: post.url,
          category: topics.slice(0, 3),
          tags: topics,
          createdAt: nowUTC(),
          updatedAt: nowUTC(),
          discoveredAt: new Date(post.featuredAt || post.createdAt),
          metrics: {
            create: {
              upvotes: post.votesCount,
              comments: post.commentsCount,
            }
          },
          analysis: {
            create: {
              score: analysis.score,
              trend: analysis.trend,
              marketPotential: analysis.market_potential,
              competitionLevel: analysis.competition_level,
              successProbability: analysis.success_probability,
              competitors: analysis.competitors || [],
              keyInsights: analysis.key_insights,
              risks: analysis.risks,
              opportunities: analysis.opportunities
            }
          }
        },
        include: {
          metrics: true,
          analysis: true
        }
      })

      console.log(`✅ 项目已保存: ${project.name}`)
      return project as Project
    } catch (error) {
      console.error(`❌ 保存项目失败 ${post.name}:`, error)
      return null
    }
  }

  private analyzeProduct(metrics: { upvotes: number, comments: number }, topics: string[]): { score: number, trend: 'rising' | 'stable' | 'declining', market_potential: 'high' | 'medium' | 'low', competition_level: 'high' | 'medium' | 'low', success_probability: number, competitors: string[], key_insights: string[], risks: string[], opportunities: string[] } {
    const score = this.calculateScore(metrics)
    const marketPotential = this.assessMarketPotential(metrics, topics)
    const competitionLevel = this.assessCompetitionLevel(topics)
    
    return {
      score,
      trend: metrics.upvotes! > 100 ? 'rising' : 'stable',
      market_potential: marketPotential,
      competition_level: competitionLevel,
      success_probability: this.calculateSuccessProbability(score, marketPotential),
      competitors: [],
      key_insights: this.generateInsights(metrics, topics),
      risks: this.identifyRisks(metrics),
      opportunities: this.identifyOpportunities(metrics, topics)
    }
  }

  private calculateScore(metrics: { upvotes: number, comments: number }): number {
    let score = 0
    if (metrics.upvotes) {
      score += Math.min(metrics.upvotes / 10, 50)
    }
    if (metrics.comments) {
      score += Math.min(metrics.comments / 5, 30)
    }
    return Math.round(score)
  }

  private assessMarketPotential(metrics: { upvotes: number, comments: number }, topics: string[]): 'high' | 'medium' | 'low' {
    const hotTopics = ['AI', 'SaaS', 'Developer Tools', 'Productivity', 'Marketing']
    const hasHotTopic = topics.some(topic => hotTopics.some(hot => topic.toLowerCase().includes(hot.toLowerCase())))
    
    if (metrics.upvotes! > 500 && hasHotTopic) return 'high'
    if (metrics.upvotes! > 100 || hasHotTopic) return 'medium'
    return 'low'
  }

  private assessCompetitionLevel(topics: string[]): 'high' | 'medium' | 'low' {
    const competitiveTopics = ['Social Media', 'E-commerce', 'Marketing']
    const isCompetitive = topics.some(topic => 
      competitiveTopics.some(comp => topic.toLowerCase().includes(comp.toLowerCase()))
    )
    
    return isCompetitive ? 'high' : 'medium'
  }

  private calculateSuccessProbability(score: number, marketPotential: string): number {
    let probability = score
    if (marketPotential === 'high') probability += 30
    else if (marketPotential === 'medium') probability += 15
    
    return Math.min(probability, 100)
  }

  private generateInsights(metrics: { upvotes: number, comments: number }, topics: string[]): string[] {
    const insights: string[] = []
    
    if (metrics.upvotes! > 500) {
      insights.push('产品获得了Product Hunt社区的强烈关注')
    }
    
    if (metrics.comments! > metrics.upvotes! * 0.1) {
      insights.push('高互动率表明用户兴趣浓厚')
    }
    
    if (topics.some(t => t.toLowerCase().includes('ai'))) {
      insights.push('AI相关产品，符合当前市场热点')
    }
    
    return insights
  }

  private identifyRisks(metrics: { upvotes: number, comments: number }): string[] {
    const risks: string[] = []
    
    if (metrics.comments! < metrics.upvotes! * 0.02) {
      risks.push('互动率较低，可能缺乏用户粘性')
    }
    
    return risks
  }

  private identifyOpportunities(metrics: { upvotes: number, comments: number }, topics: string[]): string[] {
    const opportunities: string[] = []
    
    if (metrics.upvotes! > 100 && metrics.upvotes! < 500) {
      opportunities.push('产品处于增长期，有早期投资机会')
    }
    
    if (topics.some(t => ['Developer Tools', 'API', 'SaaS'].includes(t))) {
      opportunities.push('B2B产品，有稳定收入潜力')
    }
    
    return opportunities
  }
}