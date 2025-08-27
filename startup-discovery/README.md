# 🚀 StartupScope - 创业项目发现平台

> 基于 AI 驱动的多数据源创业项目发现平台，从 GitHub、Product Hunt、Reddit 等平台实时追踪最具潜力的创业项目

## 📖 项目简介

StartupScope 是一个智能创业项目发现平台，通过集成多个数据源，为创业者和投资者提供：

- **📊 多源项目聚合** - 自动从 GitHub、Product Hunt、Reddit 发现和筛选优质项目
- **🤖 AI 智能分析** - 基于多维度指标的项目评分和趋势预测
- **🔍 智能筛选搜索** - 按技术栈、数据源、时间范围精准筛选
- **📈 实时数据更新** - 持续追踪项目增长和市场变化
- **🔒 安全密钥管理** - 数据库存储 API 密钥，支持动态配置

## 🛠 技术栈

- **前端框架**: Next.js 15.5.0 + React + TypeScript
- **构建工具**: Turbopack (超快构建)
- **样式方案**: Tailwind CSS
- **数据库**: MySQL + Prisma ORM
- **图标库**: Lucide React
- **开发语言**: TypeScript (严格模式)

## 🏗 项目结构

```
startup-discovery/
├── app/                     # Next.js App Router
│   ├── page.tsx            # 主页 - 项目发现
│   ├── trending/           # 热门趋势页面
│   ├── analysis/           # 市场分析页面
│   ├── pricing/            # 定价方案页面
│   ├── project/[id]/       # 项目详情页面
│   └── api/                # API 路由
│       ├── projects/       # 项目查询接口
│       └── crawl/          # 数据抓取接口
├── components/             # React 组件
│   ├── navbar.tsx          # 导航栏
│   └── project-card.tsx    # 项目卡片
├── lib/                    # 核心库文件
│   ├── services/           # 业务服务层
│   │   ├── github.ts       # GitHub API 集成
│   │   ├── producthunt.ts  # Product Hunt API 集成
│   │   ├── reddit.ts       # Reddit API 集成
│   │   ├── credentials.ts  # API密钥管理
│   │   └── database.ts     # 数据库服务
│   ├── utils/              # 工具函数
│   └── database.ts         # 数据库连接
├── types/                  # TypeScript 类型定义
├── prisma/                 # Prisma 配置
│   ├── schema.prisma       # 数据库模式
│   └── migrations/         # 数据库迁移文件
└── lib/generated/          # Prisma 生成文件
```

## 🚀 快速开始

### 1. 环境要求

- Node.js 18+
- MySQL 8.0+
- npm 或 yarn

### 2. 克隆项目

```bash
git clone <repository-url>
cd startup-discovery
```

### 3. 安装依赖

```bash
npm install
```

### 4. 环境配置

创建 `.env` 文件并配置以下环境变量：

```env
# 数据库配置
DATABASE_URL="mysql://username:password@localhost:3306/startup_discovery"

# Next.js 配置
NEXTAUTH_SECRET="your-nextauth-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

### 5. 数据库设置

#### Prisma 数据库初始化

```bash
# 生成 Prisma 客户端
npx prisma generate

# 创建数据库迁移
npx prisma migrate dev --name init

# 应用迁移文件
npx prisma db push

# 查看数据库 (可选)
npx prisma studio
```

#### 数据库迁移操作

```bash
# 创建新的迁移
npx prisma migrate dev --name <migration-name>

# 应用迁移到生产环境
npx prisma migrate deploy

# 重置数据库（开发环境）
npx prisma migrate reset

# 查看迁移状态
npx prisma migrate status

# 生成客户端代码
npx prisma generate
```

### 6. API 密钥配置

系统使用数据库存储 API 密钥，需要在 `data_source_credentials` 表中配置：

#### 6.1 GitHub API 配置

**获取步骤：**
1. 登录 GitHub，访问 [Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. 点击 "Generate new token (classic)"
3. 选择权限：
   - ✅ `public_repo` (访问公共仓库)
   - ✅ `read:user` (读取用户基本信息)
4. 生成 token (格式: `ghp_xxxxxxxxxxxxxxxxxxxx`)

**数据库配置：**
```sql
INSERT INTO data_source_credentials (source_name, api_key, created_at, updated_at) 
VALUES ('github', 'ghp_your_github_token_here', NOW(), NOW());
```

#### 6.2 Product Hunt API 配置

**获取步骤：**
1. 访问 [Product Hunt API 文档](https://api.producthunt.com/v2/docs)
2. 注册 Product Hunt 账号
3. 申请开发者 API 访问权限
4. 获取 Developer Token

**数据库配置：**
```sql
INSERT INTO data_source_credentials (source_name, api_key, created_at, updated_at) 
VALUES ('product_hunt', 'your_product_hunt_token_here', NOW(), NOW());
```

#### 6.3 Reddit API 配置

**获取步骤：**
1. 登录 Reddit，访问 [App Preferences](https://www.reddit.com/prefs/apps)
2. 点击 "Create App" 或 "Create Another App"
3. 应用配置：
   - **应用类型**: `script`
   - **名称**: `StartupScope`
   - **描述**: `Startup discovery platform`
   - **重定向URI**: `http://localhost:3000`
4. 获取 Client ID 和 Client Secret

**数据库配置：**
```sql
INSERT INTO data_source_credentials (
    source_name, 
    api_key, 
    config_json, 
    created_at, 
    updated_at
) VALUES (
    'reddit', 
    'your_reddit_client_id',
    '{"client_secret": "your_reddit_client_secret", "user_agent": "StartupScope/1.0"}',
    NOW(), 
    NOW()
);
```

### 7. 启动应用

```bash
# 开发模式
npm run dev

# 生产构建
npm run build

# 启动生产服务器
npm start
```

访问 http://localhost:3000

## 🔧 API 接口文档

### 项目数据接口

#### 获取项目列表
```http
GET /api/projects?page=1&limit=20&source=github
```

**查询参数：**
- `page`: 页码 (默认: 1)
- `limit`: 每页数量 (默认: 20, 最大: 100)
- `source`: 数据源过滤 (`github`, `product_hunt`, `reddit`, `all`)

**响应示例：**
```json
{
  "projects": [
    {
      "id": "proj_123",
      "name": "awesome-startup",
      "description": "An amazing startup project",
      "url": "https://github.com/user/awesome-startup",
      "source": "github",
      "category": ["Web Development"],
      "tags": ["javascript", "react"],
      "metrics": {
        "stars": 1250,
        "forks": 89,
        "issues": 12
      },
      "analysis": {
        "score": 85,
        "trend": "rising",
        "market_potential": "high",
        "success_probability": 0.78
      }
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 156
  }
}
```

#### 获取项目详情
```http
GET /api/projects/[id]
```

### 数据抓取接口

#### 手动触发全量抓取
```http
GET /api/crawl
```

#### 按数据源抓取
```http
GET /api/crawl/github     # 抓取 GitHub 项目
GET /api/crawl/product_hunt   # 抓取 Product Hunt 项目  
GET /api/crawl/reddit     # 抓取 Reddit 讨论项目
```

#### 批量自定义抓取
```http
POST /api/crawl
Content-Type: application/json

{
  "subreddits": ["startups", "entrepreneur", "SideProject", "webdev"]
}
```

## 📊 数据库 Schema

### 核心表结构

#### Projects (项目表)
```sql
CREATE TABLE projects (
    id VARCHAR(191) PRIMARY KEY,
    source ENUM('github', 'product_hunt', 'reddit') NOT NULL,
    sourceId VARCHAR(191) NOT NULL,
    name VARCHAR(191) NOT NULL,
    description TEXT,
    url VARCHAR(500) NOT NULL,
    category JSON,
    tags JSON,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    discoveredAt DATETIME NOT NULL,
    UNIQUE KEY unique_source_id (source, sourceId),
    INDEX idx_source (source),
    INDEX idx_discovered_at (discoveredAt)
);
```

#### Project Metrics (项目指标表)
```sql
CREATE TABLE project_metrics (
    id VARCHAR(191) PRIMARY KEY,
    projectId VARCHAR(191) NOT NULL,
    stars INT DEFAULT 0,
    forks INT DEFAULT 0,
    issues INT DEFAULT 0,
    contributors INT DEFAULT 0,
    upvotes INT DEFAULT 0,
    comments INT DEFAULT 0,
    views INT DEFAULT 0,
    dailyGrowth DECIMAL(10,2) DEFAULT 0,
    weeklyGrowth DECIMAL(10,2) DEFAULT 0,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (projectId) REFERENCES projects(id) ON DELETE CASCADE
);
```

#### Project Analysis (项目分析表)
```sql
CREATE TABLE project_analysis (
    id VARCHAR(191) PRIMARY KEY,
    projectId VARCHAR(191) NOT NULL,
    score INT NOT NULL DEFAULT 0,
    trend ENUM('rising', 'stable', 'declining') NOT NULL DEFAULT 'stable',
    marketPotential ENUM('high', 'medium', 'low') NOT NULL DEFAULT 'medium',
    competitionLevel ENUM('high', 'medium', 'low') NOT NULL DEFAULT 'medium',
    successProbability DECIMAL(5,2) NOT NULL DEFAULT 0.50,
    competitors JSON,
    keyInsights JSON,
    risks JSON,
    opportunities JSON,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (projectId) REFERENCES projects(id) ON DELETE CASCADE
);
```

#### Data Source Credentials (API密钥表)
```sql
CREATE TABLE data_source_credentials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    source_name VARCHAR(50) NOT NULL UNIQUE,
    api_key TEXT NOT NULL,
    config_json JSON,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_source_active (source_name, is_active)
);
```

## 📱 页面功能说明

| 页面 | 路径 | 功能描述 | 主要特性 |
|------|------|----------|----------|
| 项目发现 | `/` | 展示所有来源的精选项目 | 分页、搜索、筛选 |
| 项目详情 | `/project/[id]` | 显示单个项目的详细信息 | 指标分析、趋势图表 |
| 热门趋势 | `/trending` | 显示增长最快的项目 | 趋势排序、时间筛选 |
| 市场分析 | `/analysis` | 数据可视化和分析报告 | 图表展示、统计数据 |
| 定价方案 | `/pricing` | 展示订阅计划和功能对比 | 订阅管理 |

## 🧪 开发和构建命令

```bash
# 开发服务器 (Turbopack)
npm run dev

# 类型检查
npx tsc --noEmit

# ESLint 代码检查
npm run lint

# 生产构建
npm run build

# 启动生产服务
npm start

# Prisma 相关
npx prisma studio          # 数据库管理界面
npx prisma migrate dev      # 创建开发迁移
npx prisma migrate deploy   # 应用生产迁移
npx prisma generate         # 重新生成客户端
```

## 🚀 部署指南

### Vercel 部署 (推荐)

1. **连接仓库**
   - 将项目推送到 GitHub
   - 在 Vercel 中导入项目

2. **环境变量配置**
   ```env
   DATABASE_URL=mysql://user:pass@host:port/dbname
   NEXTAUTH_SECRET=your-production-secret
   NEXTAUTH_URL=https://yourdomain.vercel.app
   ```

3. **构建配置**
   - 构建命令: `npm run build`
   - 输出目录: `.next`
   - Node.js 版本: 18.x

### Docker 部署

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npx prisma generate
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

### 环境变量清单

**必需配置:**
```env
DATABASE_URL="mysql://user:pass@host:port/dbname"
NEXTAUTH_SECRET="random-secret-key-32-chars-min"
```

**可选配置:**
```env
NEXTAUTH_URL="https://yourdomain.com"
NODE_ENV="production"
```

## 🐛 故障排除

### 常见问题解决

#### 1. 数据库连接失败
```bash
# 检查数据库连接
npx prisma db pull

# 重新生成客户端
npx prisma generate

# 同步数据库结构
npx prisma db push
```

#### 2. API 密钥配置错误
- 检查 `data_source_credentials` 表中的配置
- 确认 API 密钥格式正确且有效
- 验证 API 权限和访问限制

#### 3. 构建失败
```bash
# 清理缓存
rm -rf .next node_modules package-lock.json

# 重新安装依赖
npm install

# 检查 TypeScript 错误
npx tsc --noEmit

# 重新构建
npm run build
```

#### 4. Next.js 警告修复
- **Turbopack 根目录警告**: 已在 `next.config.ts` 中配置
- **ESLint 错误**: 已配置忽略生成文件
- **路由参数问题**: 已适配 Next.js 15 的 async params

### API 限制和优化

| 数据源 | 未认证限制 | 认证后限制 | 优化建议 |
|--------|-----------|-----------|----------|
| GitHub | 60/小时 | 5000/小时 | 配置 Personal Access Token |
| Reddit | 10/分钟 | 1000/10分钟 | 配置 OAuth 应用 |
| Product Hunt | 100/小时 | 1000/小时 | 申请开发者 Token |

## 📚 开发指南

### 添加新数据源

1. **创建服务类**
   ```typescript
   // lib/services/newsource.ts
   export class NewSourceService {
     async getStartupProjects(): Promise<Project[]> {
       // 实现数据抓取逻辑
     }
   }
   ```

2. **添加 API 路由**
   ```typescript
   // app/api/crawl/newsource/route.ts
   export async function GET() {
     const service = new NewSourceService()
     const projects = await service.getStartupProjects()
     return NextResponse.json({ projects })
   }
   ```

3. **配置数据库密钥**
   ```sql
   INSERT INTO data_source_credentials (source_name, api_key) 
   VALUES ('newsource', 'your_api_key');
   ```

4. **更新类型定义**
   ```typescript
   // types/database.ts
   export type ProjectSource = 'github' | 'product_hunt' | 'reddit' | 'newsource'
   ```

### 自定义分析算法

编辑各服务类中的分析方法来调整算法：

```typescript
private analyzeProject(metrics: ProjectMetrics): ProjectAnalysis {
  // 自定义评分权重
  const weights = {
    stars: 0.35,    // GitHub stars 权重
    forks: 0.25,    // 分叉数权重
    issues: 0.15,   // Issue 活跃度
    growth: 0.25    // 增长速度
  }
  
  // 计算综合评分
  const score = this.calculateScore(metrics, weights)
  
  // 趋势判断逻辑
  const trend = this.analyzeTrend(metrics)
  
  return { score, trend, /* ... */ }
}
```

## 📄 许可证

MIT License - 查看 [LICENSE](LICENSE) 文件了解详情

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add: 新增了某某功能'`)
4. 推送分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

### 提交规范

- `feat:` 新功能
- `fix:` 修复问题
- `docs:` 文档更新
- `style:` 代码格式调整
- `refactor:` 重构代码
- `test:` 测试相关

## 📞 技术支持

- **项目地址**: [GitHub Repository]
- **问题反馈**: [Issues]
- **功能建议**: [Discussions]
- **技术交流**: [Wiki]

---

**StartupScope** - 发现下一个独角兽项目 🦄

⭐ 如果这个项目对你有帮助，请给个 Star 支持一下！