import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/database'

export async function GET(request: NextRequest) {
  try {
    // 先测试数据库连接
    await prisma.$connect()
    
    const { searchParams } = new URL(request.url)
    const source = searchParams.get('source')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const trending = searchParams.get('trending') === 'true'
    
    // 构建查询条件
    const whereClause = source ? { source } : {}

    // 获取项目数据
    const projects = await prisma.project.findMany({
      where: whereClause,
      include: {
        metrics: true,
        analysis: true
      },
      orderBy: {
        discoveredAt: 'desc'
      },
      take: limit,
      skip: (page - 1) * limit
    })

    // 获取统计数据
    const stats = {
      total: await prisma.project.count({ where: whereClause }),
      reddit: await prisma.project.count({ where: { source: 'reddit' } }),
      github: await prisma.project.count({ where: { source: 'github' } }),
      productHunt: await prisma.project.count({ where: { source: 'product_hunt' } })
    }
    
    return NextResponse.json({
      projects,
      stats,
      pagination: {
        page,
        limit,
        total: stats.total
      }
    })
  } catch (error) {
    console.error('Error fetching projects:', error)
    
    // 如果数据库连接失败，返回空数据而不是错误
    return NextResponse.json({
      projects: [],
      stats: {
        total: 0,
        reddit: 0,
        github: 0,
        productHunt: 0
      },
      pagination: {
        page: 1,
        limit: 20,
        total: 0
      },
      error: 'Database connection failed'
    })
  }
}