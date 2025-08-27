import { NextRequest, NextResponse } from 'next/server'
import { RedditService } from '@/lib/services/reddit'
import { GitHubService } from '@/lib/services/github'
import { ProductHuntService } from '@/lib/services/producthunt'

interface RouteParams {
  params: Promise<{
    source: string
  }>
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { source } = await params
    const { searchParams } = new URL(request.url)
    
    console.log(`🚀 开始抓取 ${source} 数据...`)
    
    let result: any
    let service: any

    switch (source) {
      case 'reddit':
        service = new RedditService()
        const subreddit = searchParams.get('subreddit') || 'startups'
        const timeFilter = (searchParams.get('time') as 'day' | 'week' | 'month') || 'week'
        const projects = await service.getStartupPosts(subreddit, timeFilter)
        result = {
          source: 'reddit',
          projects: projects.length,
          subreddit,
          timeFilter,
          success: true
        }
        break

      case 'github':
        service = new GitHubService()
        const query = searchParams.get('query') || 'startup'
        const sort = searchParams.get('sort') || 'stars'
        const githubProjects = await service.searchRepositories(query, sort)
        result = {
          source: 'github',
          projects: githubProjects.length,
          query,
          sort,
          success: true
        }
        break

      case 'product-hunt':
        service = new ProductHuntService()
        const date = searchParams.get('date') || new Date().toISOString().split('T')[0]
        const phProjects = await service.getTopProducts(date)
        result = {
          source: 'product-hunt',
          projects: phProjects.length,
          date,
          success: true
        }
        break

      default:
        return NextResponse.json({
          error: `Unsupported source: ${source}`,
          supportedSources: ['reddit', 'github', 'product-hunt']
        }, { status: 400 })
    }

    console.log(`✅ ${source} 抓取完成: ${result.projects} 个项目`)

    return NextResponse.json({
      message: `Successfully crawled ${result.projects} projects from ${source}`,
      ...result,
      timestamp: new Date().toISOString()
    })

  } catch (error: any) {
    const { source } = await params
    console.error(`❌ ${source} 抓取失败:`, error)
    return NextResponse.json({
      error: `Failed to crawl ${source}`,
      details: error.message,
      source: source
    }, { status: 500 })
  }
}

export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    const { source } = await params
    const body = await request.json().catch(() => ({}))
    
    console.log(`🚀 批量抓取 ${source} 数据...`, body)

    let result: any

    switch (source) {
      case 'reddit':
        const { subreddits = ['startups', 'entrepreneur', 'SideProject'], timeFilter = 'week' } = body
        const redditService = new RedditService()
        
        let totalProjects = 0
        const results = []
        
        for (const subreddit of subreddits) {
          try {
            const projects = await redditService.getStartupPosts(subreddit, timeFilter)
            totalProjects += projects.length
            results.push({ subreddit, projects: projects.length, success: true })
          } catch (error: any) {
            results.push({ subreddit, error: error.message, success: false })
          }
        }
        
        result = {
          source: 'reddit',
          totalProjects,
          subreddits: results,
          success: true
        }
        break

      case 'github':
        const { queries = ['startup', 'saas', 'ai-startup'], sort = 'stars' } = body
        const githubService = new GitHubService()
        
        let totalGithubProjects = 0
        const githubResults = []
        
        for (const query of queries) {
          try {
            const projects = await githubService.searchRepositories(query, sort)
            totalGithubProjects += projects.length
            githubResults.push({ query, projects: projects.length, success: true })
          } catch (error: any) {
            githubResults.push({ query, error: error.message, success: false })
          }
        }
        
        result = {
          source: 'github',
          totalProjects: totalGithubProjects,
          queries: githubResults,
          success: true
        }
        break

      case 'product-hunt':
        const { dates = [new Date().toISOString().split('T')[0]] } = body
        const phService = new ProductHuntService()
        
        let totalPHProjects = 0
        const phResults = []
        
        for (const date of dates) {
          try {
            const projects = await phService.getTopProducts(date)
            totalPHProjects += projects.length
            phResults.push({ date, projects: projects.length, success: true })
          } catch (error: any) {
            phResults.push({ date, error: error.message, success: false })
          }
        }
        
        result = {
          source: 'product-hunt',
          totalProjects: totalPHProjects,
          dates: phResults,
          success: true
        }
        break

      default:
        return NextResponse.json({
          error: `Unsupported source: ${source}`,
          supportedSources: ['reddit', 'github', 'product-hunt']
        }, { status: 400 })
    }

    return NextResponse.json({
      message: `Batch crawl completed for ${source}`,
      ...result,
      timestamp: new Date().toISOString()
    })

  } catch (error: any) {
    const { source } = await params
    console.error(`❌ ${source} 批量抓取失败:`, error)
    return NextResponse.json({
      error: `Failed to batch crawl ${source}`,
      details: error.message,
      source: source
    }, { status: 500 })
  }
}