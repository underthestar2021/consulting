import { prisma } from '@/lib/database'
import type { Project, ProjectMetrics, ProjectAnalysis } from '../generated/prisma/client'

export interface ProjectWithDetails extends Project {
  metrics?: ProjectMetrics | null
  analysis?: ProjectAnalysis | null
}

export class DatabaseService {
  // 获取所有项目（带分页）
  async getProjects(page: number = 1, limit: number = 20): Promise<ProjectWithDetails[]> {
    const skip = (page - 1) * limit
    
    return await prisma.project.findMany({
      include: {
        metrics: true,
        analysis: true
      },
      orderBy: {
        discoveredAt: 'desc'
      },
      skip,
      take: limit
    })
  }

  // 根据ID获取项目详情
  async getProjectById(id: string): Promise<ProjectWithDetails | null> {
    return await prisma.project.findUnique({
      where: { id },
      include: {
        metrics: true,
        analysis: true,
        projectTags: true
      }
    })
  }

  // 根据来源获取项目
  async getProjectsBySource(source: string): Promise<ProjectWithDetails[]> {
    return await prisma.project.findMany({
      where: { source },
      include: {
        metrics: true,
        analysis: true
      },
      orderBy: {
        discoveredAt: 'desc'
      }
    })
  }

  // 获取热门项目（按评分排序）
  async getTrendingProjects(limit: number = 20): Promise<ProjectWithDetails[]> {
    return await prisma.project.findMany({
      include: {
        metrics: true,
        analysis: true
      },
      orderBy: {
        analysis: {
          score: 'desc'
        }
      },
      take: limit
    })
  }

  // 搜索项目
  async searchProjects(query: string): Promise<ProjectWithDetails[]> {
    return await prisma.project.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query
            }
          },
          {
            description: {
              contains: query
            }
          }
        ]
      },
      include: {
        metrics: true,
        analysis: true
      },
      orderBy: {
        discoveredAt: 'desc'
      }
    })
  }

  // 获取项目统计信息
  async getProjectStats() {
    const [totalProjects, redditProjects, githubProjects, productHuntProjects] = await Promise.all([
      prisma.project.count(),
      prisma.project.count({ where: { source: 'reddit' } }),
      prisma.project.count({ where: { source: 'github' } }),
      prisma.project.count({ where: { source: 'product_hunt' } })
    ])

    return {
      total: totalProjects,
      reddit: redditProjects,
      github: githubProjects,
      productHunt: productHuntProjects
    }
  }

  // 获取最近发现的项目
  async getRecentlyDiscovered(days: number = 7): Promise<ProjectWithDetails[]> {
    const since = new Date()
    since.setDate(since.getDate() - days)

    return await prisma.project.findMany({
      where: {
        discoveredAt: {
          gte: since
        }
      },
      include: {
        metrics: true,
        analysis: true
      },
      orderBy: {
        discoveredAt: 'desc'
      }
    })
  }

  // 清理旧数据
  async cleanupOldData(daysToKeep: number = 90): Promise<number> {
    const cutoffDate = new Date()
    cutoffDate.setDate(cutoffDate.getDate() - daysToKeep)

    const result = await prisma.project.deleteMany({
      where: {
        discoveredAt: {
          lt: cutoffDate
        }
      }
    })

    return result.count
  }
}