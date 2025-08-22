# 📋 TODO List - StartupScope 项目

## 🔧 核心 API 开通和配置指南

### 1. GitHub API 配置
- [ ] **获取 GitHub Personal Access Token**
  - 访问 https://github.com/settings/tokens
  - 点击 "Generate new token" → "Generate new token (classic)"
  - 设置 Token 名称，如 "StartupScope API Access"
  - 选择权限范围 (scopes):
    - ✅ `public_repo` - 访问公共仓库
    - ✅ `read:user` - 读取用户基本信息
  - 生成并复制 Token
  - **环境变量设置**: `GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx`

### 2. Reddit API 配置
- [ ] **创建 Reddit 应用**
  - 登录 Reddit 并访问 https://www.reddit.com/prefs/apps
  - 点击 "Create App" 或 "Create Another App"
  - 填写应用信息:
    - **Name**: StartupScope
    - **App type**: Web App
    - **Description**: Startup discovery platform
    - **About URL**: https://your-domain.com
    - **Redirect URI**: https://your-domain.com/auth/callback
  - 创建后记录 Client ID 和 Secret
  - **环境变量设置**: 
    ```
    REDDIT_CLIENT_ID=your_client_id
    REDDIT_CLIENT_SECRET=your_client_secret
    ```

### 3. Product Hunt API 配置
- [ ] **Product Hunt API Access**
  - **当前状态**: 使用公开 GraphQL API，无需认证
  - **API 端点**: `https://api.producthunt.com/v2/api/graphql`
  - **未来升级**: 如需更高请求限额，可申请开发者访问
    - 访问 https://api.producthunt.com/v2/docs
    - 申请 API Key 以提高速率限制

### 4. Supabase 数据库配置
- [ ] **Supabase 项目设置**
  - 访问 https://supabase.com/dashboard
  - 创建新项目或使用现有项目
  - 获取项目配置信息:
    - **项目 URL**: https://your-project-id.supabase.co
    - **Anon Key**: 公开匿名密钥
    - **Service Role Key**: 服务端密钥 (谨慎使用)
  - **环境变量设置**:
    ```
    NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
    SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
    ```
  - 运行数据库架构脚本: `supabase/schema.sql`

### 5. Stripe 支付配置 (可选)
- [ ] **Stripe 开发者账户设置**
  - 访问 https://dashboard.stripe.com/register
  - 创建账户并验证
  - 获取 API 密钥:
    - **可发布密钥**: `pk_test_...` (前端使用)
    - **秘密密钥**: `sk_test_...` (后端使用)
  - **环境变量设置**:
    ```
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxx
    STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxx
    STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxx
    ```

## 🔄 API 集成实施步骤

### 第一阶段: 基础配置
- [ ] **创建 `.env.local` 文件**
  ```bash
  # GitHub API
  GITHUB_TOKEN=your_github_token_here
  
  # Reddit API
  REDDIT_CLIENT_ID=your_reddit_client_id
  REDDIT_CLIENT_SECRET=your_reddit_client_secret
  
  # Supabase
  NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
  NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
  
  # Stripe (可选)
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
  STRIPE_SECRET_KEY=your_stripe_secret_key
  ```

### 第二阶段: 数据集成
- [ ] **替换 Mock 数据**
  - `app/page.tsx:23` - 主页项目列表集成
  - `app/trending/page.tsx:15` - 热门趋势页面集成
  - `lib/services/*.ts` - 启用真实 API 调用

- [ ] **数据库架构部署**
  - 在 Supabase 中执行 `supabase/schema.sql`
  - 配置行级安全策略 (RLS)
  - 设置定时任务同步数据

### 第三阶段: 功能完善
- [ ] **用户认证系统**
  - 实现 `/login` 和 `/signup` 页面
  - 集成 Supabase Auth
  - 添加用户会话管理

- [ ] **数据可视化**
  - `app/analysis/page.tsx:45` - 实现真实图表数据
  - 连接 Recharts 与 API 数据
  - 添加实时数据更新

### 第四阶段: 优化部署
- [ ] **生产环境配置**
  - 设置生产环境 API 密钥
  - 配置 CDN 和缓存策略
  - 实现 API 速率限制处理

## 🛠 技术债务和已知问题

- [x] **修复 Fire 图标问题** - 已替换为 Flame
- [ ] **API 错误处理优化**
  - 网络超时处理
  - API 限额提示
  - 降级到缓存数据

- [ ] **性能优化**
  - 实现请求去重和缓存
  - 图片懒加载优化
  - Bundle 体积优化

## 🚀 优先级指南

### 🔥 高优先级 (立即执行)
1. **GitHub API 配置** - 获取开源项目数据的核心
2. **Supabase 数据库配置** - 数据存储和用户管理基础
3. **创建 `.env.local` 文件** - 本地开发环境配置

### ⚡ 中优先级 (本周完成)  
1. **Reddit API 配置** - 社区讨论数据源
2. **Product Hunt API 优化** - 产品发布数据
3. **替换 Mock 数据** - 连接真实数据源

### 💎 低优先级 (未来迭代)
1. **Stripe 支付集成** - 商业化功能
2. **用户认证系统** - 个性化体验
3. **数据可视化优化** - 高级分析功能

## 📞 技术支持

如遇到 API 配置问题，请参考：
- GitHub API 文档: https://docs.github.com/en/rest
- Reddit API 文档: https://www.reddit.com/dev/api/
- Supabase 文档: https://supabase.com/docs
- Product Hunt API: https://api.producthunt.com/v2/docs

---

**更新时间:** 2025-08-22  
**负责人:** Claude Code  
**项目状态:** 开发中 - API 配置阶段