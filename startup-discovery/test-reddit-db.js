// 测试Reddit API + 数据库存储
const { PrismaClient } = require('./lib/generated/prisma/client.js');

async function testRedditAndDB() {
  console.log('🚀 开始测试Reddit API和数据库连接...');
  
  const prisma = new PrismaClient();
  
  try {
    // 1. 测试数据库连接
    console.log('📡 测试数据库连接...');
    await prisma.$connect();
    console.log('✅ 数据库连接成功');
    
    // 2. 测试Reddit API
    console.log('📡 测试Reddit API...');
    const clientId = process.env.REDDIT_CLIENT_ID;
    const clientSecret = process.env.REDDIT_CLIENT_SECRET;
    
    if (!clientId || !clientSecret) {
      throw new Error('Reddit API 凭证缺失');
    }
    
    console.log('🔑 Reddit凭证已配置');
    
    // 获取Reddit访问令牌
    const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
    const tokenResponse = await fetch('https://www.reddit.com/api/v1/access_token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials'
    });
    
    if (!tokenResponse.ok) {
      throw new Error(`Reddit认证失败: ${tokenResponse.status}`);
    }
    
    const tokenData = await tokenResponse.json();
    console.log('✅ Reddit API认证成功');
    
    // 获取Reddit帖子
    const postsResponse = await fetch(
      'https://oauth.reddit.com/r/startups/hot?limit=5',
      {
        headers: {
          'Authorization': `Bearer ${tokenData.access_token}`,
          'User-Agent': 'StartupDiscovery/1.0'
        }
      }
    );
    
    if (!postsResponse.ok) {
      throw new Error(`Reddit API调用失败: ${postsResponse.status}`);
    }
    
    const postsData = await postsResponse.json();
    const posts = postsData.data.children.map(child => child.data);
    
    console.log(`✅ 获取到 ${posts.length} 个Reddit帖子`);
    
    // 3. 测试数据库写入
    for (let i = 0; i < Math.min(2, posts.length); i++) {
      const post = posts[i];
      
      try {
        const project = await prisma.project.create({
          data: {
            source: 'reddit',
            sourceId: post.id,
            name: post.title.substring(0, 100),
            description: post.selftext || post.title,
            url: post.url,
            category: [post.subreddit],
            tags: ['reddit', 'startup'],
            discoveredAt: new Date(post.created_utc * 1000)
          }
        });
        
        console.log(`✅ 项目 "${project.name}" 已保存到数据库`);
      } catch (error) {
        console.error(`❌ 保存项目失败:`, error.message);
      }
    }
    
    // 4. 查询数据库确认
    const projectCount = await prisma.project.count();
    console.log(`📊 数据库中现有 ${projectCount} 个项目`);
    
    console.log('🎉 测试完成！');
    
  } catch (error) {
    console.error('❌ 测试失败:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

testRedditAndDB();