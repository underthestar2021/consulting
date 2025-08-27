// 清空数据库数据
const { PrismaClient } = require('./lib/generated/prisma/client.js');

async function clearDatabase() {
  const prisma = new PrismaClient();
  
  try {
    console.log('🗑️ 清空数据库...');
    
    // 按依赖顺序删除数据
    await prisma.projectTag.deleteMany();
    await prisma.crawlLog.deleteMany(); 
    await prisma.projectAnalysis.deleteMany();
    await prisma.projectMetrics.deleteMany();
    await prisma.userSavedProject.deleteMany();
    await prisma.project.deleteMany();
    
    console.log('✅ 数据库已清空');
    
  } catch (error) {
    console.error('❌ 清空失败:', error);
  } finally {
    await prisma.$disconnect();
  }
}

clearDatabase();