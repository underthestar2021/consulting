import { Project, ProjectMetrics, ProjectAnalysis } from '@/types/database'

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

      return posts.map((post: ProductHuntPost) => this.transformToProject(post))
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

  private transformToProject(post: ProductHuntPost): Project {
    const metrics: ProjectMetrics = {
      upvotes: post.votesCount,
      comments: post.commentsCount,
    }

    const topics = post.topics?.edges?.map((edge) => edge.node.name) || []
    const analysis = this.analyzeProduct(metrics, topics)

    return {
      id: crypto.randomUUID(),
      source: 'product_hunt',
      source_id: post.id,
      name: post.name,
      description: `${post.tagline}. ${post.description || ''}`,
      url: post.url,
      category: topics.slice(0, 3),
      tags: topics,
      metrics,
      analysis,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      discovered_at: post.featuredAt || post.createdAt
    }
  }

  private analyzeProduct(metrics: ProjectMetrics, topics: string[]): ProjectAnalysis {
    const score = this.calculateScore(metrics)
    const marketPotential = this.assessMarketPotential(metrics, topics)
    const competitionLevel = this.assessCompetitionLevel(topics)
    
    return {
      score,
      trend: metrics.upvotes! > 100 ? 'rising' : 'stable',
      market_potential: marketPotential,
      competition_level: competitionLevel,
      success_probability: this.calculateSuccessProbability(score, marketPotential),
      key_insights: this.generateInsights(metrics, topics),
      risks: this.identifyRisks(metrics),
      opportunities: this.identifyOpportunities(metrics, topics)
    }
  }

  private calculateScore(metrics: ProjectMetrics): number {
    let score = 0
    if (metrics.upvotes) {
      score += Math.min(metrics.upvotes / 10, 50)
    }
    if (metrics.comments) {
      score += Math.min(metrics.comments / 5, 30)
    }
    return Math.round(score)
  }

  private assessMarketPotential(metrics: ProjectMetrics, topics: string[]): 'high' | 'medium' | 'low' {
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

  private generateInsights(metrics: ProjectMetrics, topics: string[]): string[] {
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

  private identifyRisks(metrics: ProjectMetrics): string[] {
    const risks: string[] = []
    
    if (metrics.comments! < metrics.upvotes! * 0.02) {
      risks.push('互动率较低，可能缺乏用户粘性')
    }
    
    return risks
  }

  private identifyOpportunities(metrics: ProjectMetrics, topics: string[]): string[] {
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