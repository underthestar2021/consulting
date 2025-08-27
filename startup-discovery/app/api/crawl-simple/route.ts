import { NextResponse } from 'next/server'
import { prisma } from '@/lib/database'

export async function GET() {
  try {
    console.log('🚀 开始简化版Reddit数据抓取...')
    
    // 1. 获取Reddit访问令牌
    const clientId = process.env.REDDIT_CLIENT_ID
    const clientSecret = process.env.REDDIT_CLIENT_SECRET
    
    if (!clientId || !clientSecret) {
      return NextResponse.json({
        error: 'Reddit API credentials not configured'
      }, { status: 500 })
    }
    
    const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
    const tokenResponse = await fetch('https://www.reddit.com/api/v1/access_token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials'
    })
    
    if (!tokenResponse.ok) {
      return NextResponse.json({
        error: `Reddit auth failed: ${tokenResponse.status}`
      }, { status: 500 })
    }
    
    const tokenData = await tokenResponse.json()
    
    // 2. 获取Reddit帖子
    const postsResponse = await fetch(
      'https://oauth.reddit.com/r/startups/hot?limit=10',
      {
        headers: {
          'Authorization': `Bearer ${tokenData.access_token}`,
          'User-Agent': 'StartupDiscovery/1.0'
        }
      }
    )
    
    if (!postsResponse.ok) {
      return NextResponse.json({
        error: `Reddit API failed: ${postsResponse.status}`
      }, { status: 500 })
    }
    
    const postsData = await postsResponse.json()
    const posts = postsData.data.children.map((child: any) => child.data)
    
    // 3. 简单存储到数据库
    let saved = 0
    const errors: string[] = []
    
    for (const post of posts) {
      try {
        // 检查是否已存在
        const existing = await prisma.project.findFirst({
          where: {
            source: 'reddit',
            sourceId: post.id
          }
        })
        
        if (!existing) {
          const project = await prisma.project.create({
            data: {
              source: 'reddit',
              sourceId: post.id,
              name: post.title.substring(0, 200),
              description: (post.selftext || post.title).substring(0, 1000),
              url: post.url,
              category: [post.subreddit],
              tags: ['reddit', 'startup'],
              discoveredAt: new Date(post.created_utc * 1000)
            }
          })
          
          // 创建指标
          await prisma.projectMetrics.create({
            data: {
              projectId: project.id,
              upvotes: post.score || 0,
              comments: post.num_comments || 0
            }
          })
          
          // 创建分析
          const score = Math.min(Math.log10((post.score || 0) + 1) * 20 + Math.log10((post.num_comments || 0) + 1) * 15, 100)
          await prisma.projectAnalysis.create({
            data: {
              projectId: project.id,
              score: Math.round(score),
              trend: post.score > 100 ? 'rising' : 'stable',
              marketPotential: post.score > 500 ? 'high' : post.score > 100 ? 'medium' : 'low',
              competitionLevel: 'medium',
              successProbability: score / 100,
              competitors: [],
              keyInsights: post.score > 100 ? ['在Reddit社区获得认可'] : ['需要更多社区关注'],
              risks: ['社区支持有限'],
              opportunities: ['早期项目，有参与机会']
            }
          })
          
          saved++
        }
      } catch (error: any) {
        errors.push(`Failed to save post ${post.id}: ${error.message}`)
      }
    }
    
    return NextResponse.json({
      success: true,
      message: `Processed ${posts.length} posts, saved ${saved} new projects`,
      stats: {
        total: posts.length,
        saved,
        errors: errors.length
      },
      errors: errors.slice(0, 5) // 只返回前5个错误
    })
    
  } catch (error: any) {
    console.error('Crawl error:', error)
    return NextResponse.json({
      error: 'Crawl failed',
      details: error.message
    }, { status: 500 })
  }
}