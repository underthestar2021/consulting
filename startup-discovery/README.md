# 🚀 StartupScope - 发现下一个独角兽

> 为创业者和投资者提供每日精选创业项目、市场分析和成功率预测的智能平台

## 📖 项目简介

StartupScope 是一个基于 AI 驱动的创业项目发现平台，通过集成 GitHub、Product Hunt、Reddit 等多个数据源，为用户提供：

- **📊 每日精选项目** - 从多个平台自动发现和筛选优质创业项目
- **🔥 热门趋势分析** - 实时追踪增长最快的创业项目和技术趋势  
- **📈 市场分析报告** - AI 驱动的项目潜力评估和成功率预测
- **💰 投资机会洞察** - 为投资者提供数据驱动的决策支持

## 🛠 技术栈

- **前端框架:** Next.js 15.5.0 + React 19
- **构建工具:** Turbopack (超快构建)
- **样式方案:** Tailwind CSS 4.0
- **图标库:** Lucide React
- **数据库:** Supabase (PostgreSQL)
- **数据源:** GitHub API, Product Hunt API, Reddit API
- **图表库:** Recharts
- **开发语言:** TypeScript

## 🏗 项目结构

```
startup-discovery/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 主页 - 项目发现
│   ├── trending/          # 热门趋势页面
│   ├── analysis/          # 市场分析页面
│   ├── pricing/           # 定价方案页面
│   └── layout.tsx         # 全局布局
├── components/            # React 组件
│   ├── navbar.tsx         # 导航栏
│   └── project-card.tsx   # 项目卡片
├── lib/                   # 核心库文件
│   ├── services/          # API 服务
│   │   ├── github.ts      # GitHub API 集成
│   │   ├── producthunt.ts # Product Hunt API 集成
│   │   └── reddit.ts      # Reddit API 集成
│   ├── supabase.ts        # 数据库配置
│   └── utils.ts           # 工具函数
├── types/                 # TypeScript 类型定义
└── supabase/             # 数据库 schema
```

## 🚀 快速开始

### 1. 克隆项目
```bash
git clone <repository-url>
cd startup-discovery
```

### 2. 安装依赖
```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 3. 环境配置
创建 `.env.local` 文件并配置以下环境变量：

```env
# GitHub API (可选 - 提高请求限额)
GITHUB_TOKEN=your_github_personal_access_token

# Reddit API (可选 - 获取 Reddit 数据)
REDDIT_CLIENT_ID=your_reddit_client_id
REDDIT_CLIENT_SECRET=your_reddit_client_secret

# Supabase 数据库 (可选 - 数据持久化)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. 启动开发服务器
```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用

## 📊 核心功能

### 🎯 项目发现
- 自动从 GitHub 发现热门开源项目
- 从 Product Hunt 获取最新产品发布
- 从 Reddit 社区挖掘创业讨论
- 智能去重和质量筛选

### 📈 数据分析
- **项目评分算法:** 综合 stars、forks、issues、贡献者等指标
- **趋势分析:** 基于增长速度判断项目趋势
- **市场潜力评估:** AI 分析技术栈和应用场景
- **成功概率预测:** 多维度数据建模

### 🔍 智能筛选
- 按技术栈筛选 (AI、区块链、SaaS等)
- 按数据源筛选 (GitHub、Product Hunt、Reddit)
- 按时间范围筛选 (今日、本周、本月)
- 全文搜索项目名称和描述

## 🔑 API 配置说明

### GitHub API
- **获取方式:** https://github.com/settings/tokens
- **权限要求:** `public_repo`, `read:user`
- **请求限制:** 未认证 60次/小时，认证后 5000次/小时
- **用途:** 获取开源项目数据和趋势

### Reddit API  
- **获取方式:** https://www.reddit.com/prefs/apps
- **应用类型:** Script
- **请求限制:** 1000次/10分钟
- **用途:** 从创业相关 subreddit 获取讨论

### Product Hunt API
- **获取方式:** https://api.producthunt.com/v2/docs
- **认证方式:** GraphQL (部分功能无需认证)
- **用途:** 获取最新产品发布和投票数据

## 📱 页面说明

| 页面 | 路径 | 功能描述 |
|------|------|----------|
| 项目发现 | `/` | 展示所有来源的精选项目 |
| 热门趋势 | `/trending` | 显示增长最快的项目 |
| 市场分析 | `/analysis` | 提供数据可视化和报告 |
| 定价方案 | `/pricing` | 展示订阅计划 |

## 🧪 开发命令

```bash
# 开发服务器
npm run dev

# 类型检查
npm run type-check

# 代码检查
npm run lint

# 生产构建
npm run build

# 启动生产服务
npm start
```

## 🐛 问题排查

### 常见问题

1. **API 请求失败**
   - 检查网络连接
   - 验证 API token 是否正确配置
   - 查看 API 请求限制是否超额

2. **构建错误**
   - 确保所有依赖已正确安装
   - 检查 TypeScript 类型错误
   - 验证环境变量配置

3. **样式问题**  
   - 确认 Tailwind CSS 配置正确
   - 检查 PostCSS 插件是否加载

## 📚 开发指南

### 添加新的数据源
1. 在 `lib/services/` 目录创建新的服务类
2. 实现统一的 `Project` 接口转换
3. 在页面组件中集成新服务
4. 更新类型定义和文档

### 自定义分析算法
- 编辑各服务类中的 `analyzeProject` 方法
- 调整评分权重和计算逻辑
- 添加新的洞察和风险识别规则

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🤝 贡献指南

1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📞 联系方式

- **项目地址:** [GitHub Repository]
- **问题反馈:** [Issues Page]
- **功能建议:** [Discussions]

---

⭐ 如果这个项目对你有帮助，请给个 Star！