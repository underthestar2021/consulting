import { prisma } from '@/lib/database'

export interface DataSourceCredentials {
  [key: string]: string
}

export interface DataSourceConfig {
  [key: string]: any
}

export class CredentialsService {
  private static cache: Map<string, { credentials: DataSourceCredentials; config: DataSourceConfig; timestamp: number }> = new Map()
  private static CACHE_TTL = 5 * 60 * 1000 // 5分钟缓存

  /**
   * 获取数据源的API凭证
   */
  static async getCredentials(sourceName: string): Promise<DataSourceCredentials | null> {
    try {
      // 检查缓存
      const cached = this.cache.get(sourceName)
      if (cached && Date.now() - cached.timestamp < this.CACHE_TTL) {
        return cached.credentials
      }

      // 从数据库获取
      const dataSource = await prisma.dataSource.findUnique({
        where: { 
          name: sourceName,
          isActive: true 
        }
      })

      if (!dataSource) {
        console.error(`❌ 数据源 ${sourceName} 不存在或未激活`)
        return null
      }

      const credentials = dataSource.credentials as DataSourceCredentials
      const config = dataSource.apiConfig as DataSourceConfig

      // 更新缓存
      this.cache.set(sourceName, {
        credentials,
        config,
        timestamp: Date.now()
      })

      console.log(`✅ 成功获取 ${sourceName} API凭证`)
      return credentials

    } catch (error) {
      console.error(`❌ 获取 ${sourceName} 凭证失败:`, error)
      return null
    }
  }

  /**
   * 获取数据源的API配置
   */
  static async getConfig(sourceName: string): Promise<DataSourceConfig | null> {
    try {
      // 检查缓存
      const cached = this.cache.get(sourceName)
      if (cached && Date.now() - cached.timestamp < this.CACHE_TTL) {
        return cached.config
      }

      // 如果缓存过期但存在，先获取凭证（会同时更新配置缓存）
      await this.getCredentials(sourceName)
      
      const updatedCached = this.cache.get(sourceName)
      return updatedCached?.config || null

    } catch (error) {
      console.error(`❌ 获取 ${sourceName} 配置失败:`, error)
      return null
    }
  }

  /**
   * 更新数据源最后抓取时间
   */
  static async updateLastCrawl(sourceName: string): Promise<void> {
    try {
      await prisma.dataSource.update({
        where: { name: sourceName },
        data: { lastCrawl: new Date() }
      })
      console.log(`✅ 更新 ${sourceName} 最后抓取时间`)
    } catch (error) {
      console.error(`❌ 更新 ${sourceName} 最后抓取时间失败:`, error)
    }
  }

  /**
   * 清除缓存
   */
  static clearCache(sourceName?: string): void {
    if (sourceName) {
      this.cache.delete(sourceName)
      console.log(`✅ 清除 ${sourceName} 缓存`)
    } else {
      this.cache.clear()
      console.log(`✅ 清除所有凭证缓存`)
    }
  }

  /**
   * 获取所有活跃的数据源
   */
  static async getActiveSources(): Promise<string[]> {
    try {
      const sources = await prisma.dataSource.findMany({
        where: { isActive: true },
        select: { name: true }
      })
      return sources.map(s => s.name)
    } catch (error) {
      console.error('❌ 获取活跃数据源失败:', error)
      return []
    }
  }

  /**
   * 验证凭证是否完整
   */
  static validateCredentials(sourceName: string, credentials: DataSourceCredentials): boolean {
    switch (sourceName) {
      case 'reddit':
        return !!(credentials.client_id && credentials.client_secret)
      case 'github':
        return !!credentials.token
      case 'product_hunt':
        return !!(credentials.client_id && credentials.client_secret)
      default:
        return false
    }
  }
}