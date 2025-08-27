import { NextRequest, NextResponse } from 'next/server'
import { RedditService } from '@/lib/services/reddit'

const redditService = new RedditService()

// 手动触发抓取 - GET请求
export async function GET() {
  try {
    console.log('🚀 手动触发Reddit数据抓取...')
    
    const projects = await redditService.getStartupPosts('startups', 'week')
    
    return NextResponse.json({
      success: true,
      message: `Successfully crawled ${projects.length} projects from r/startups`,
      projectCount: projects.length,
      trigger: 'manual'
    })
  } catch (error: any) {
    console.error('Manual crawl error:', error)
    return NextResponse.json(
      { error: 'Manual crawl failed', details: error.message },
      { status: 500 }
    )
  }
}

// 批量抓取 - POST请求
export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}))
    const { subreddits = ['startups', 'entrepreneur', 'SideProject'] } = body
    
    let totalFound = 0
    let totalSaved = 0
    let errors: string[] = []

    console.log(`🔄 开始批量抓取 ${subreddits.length} 个subreddit...`)

    // 遍历多个subreddit
    for (const subreddit of subreddits) {
      try {
        console.log(`📡 抓取 r/${subreddit}...`)
        const projects = await redditService.getStartupPosts(subreddit, 'week')
        
        totalFound += projects.length
        totalSaved += projects.filter(p => p !== null).length
        
        console.log(`✅ r/${subreddit}: 发现 ${projects.length} 个项目`)
      } catch (error: any) {
        const errorMsg = `Failed to crawl r/${subreddit}: ${error}`
        console.error(`❌ ${errorMsg}`)
        errors.push(errorMsg)
      }
    }

    return NextResponse.json({
      success: true,
      summary: {
        totalFound,
        totalSaved,
        subreddits: subreddits.length,
        errors: errors.length
      },
      details: {
        crawledSubreddits: subreddits,
        errors
      }
    })

  } catch (error: any) {
    console.error('Batch crawl error:', error)
    return NextResponse.json(
      { error: 'Batch crawl failed', details: error.message },
      { status: 500 }
    )
  }
}