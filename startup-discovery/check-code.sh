#!/bin/bash

echo "🔍 代码质量检查开始..."

echo "===================="
echo "📋 1. TypeScript 类型检查"
echo "===================="

# 只检查我们的代码，排除生成的文件和node_modules
npx tsc --noEmit --skipLibCheck \
  --exclude "node_modules/**/*" \
  --exclude "lib/generated/**/*" \
  --exclude ".next/**/*" \
  --exclude "**/*.js"

echo ""
echo "===================="
echo "📋 2. Next.js 构建检查"
echo "===================="

# 尝试构建项目
npm run build 2>&1 | head -20

echo ""
echo "===================="
echo "📋 3. 关键文件语法检查"
echo "===================="

# 检查关键文件的语法
echo "检查 API 路由..."
node -c app/api/projects/route.ts 2>/dev/null && echo "✅ projects route" || echo "❌ projects route"
node -c app/api/crawl/*/route.ts 2>/dev/null && echo "✅ crawl routes" || echo "❌ crawl routes" 

echo "检查服务文件..."
node -c lib/services/*.ts 2>/dev/null && echo "✅ services" || echo "❌ services"

echo ""
echo "===================="
echo "📋 4. 数据库连接测试"
echo "===================="

# 测试数据库连接
curl -s http://localhost:3001/api/projects?limit=1 > /dev/null && echo "✅ 数据库连接正常" || echo "❌ 数据库连接失败"

echo ""
echo "🎯 检查完成！"