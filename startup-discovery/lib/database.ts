import { PrismaClient } from './generated/prisma'

// 全局 Prisma 客户端实例，避免开发环境下的热重载创建多个连接
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// 数据库连接测试函数
export async function testConnection() {
  try {
    await prisma.$connect()
    console.log('✅ MySQL 数据库连接成功')
    return true
  } catch (error) {
    console.error('❌ MySQL 数据库连接失败:', error)
    return false
  }
}

// 优雅关闭数据库连接
export async function disconnectDatabase() {
  await prisma.$disconnect()
}