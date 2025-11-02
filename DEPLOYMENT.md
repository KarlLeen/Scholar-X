# Scholar X - 部署指南

## 📦 项目已准备就绪

项目已完成初始化和提交，包含：
- ✅ 64个文件
- ✅ 10,010行代码
- ✅ 完整的Next.js 14 + Supabase架构
- ✅ Light/Dark模式支持
- ✅ 响应式设计

## 🚀 推送到GitHub

由于需要GitHub身份验证，请在终端执行以下命令：

```bash
cd /Users/karl4chill/Documents/projects/ATX/scox

# 如果你使用HTTPS（需要输入用户名和token）
git remote set-url origin https://github.com/KarlLeen/Scholar-X.git
git push -u origin main

# 或者如果你已配置SSH密钥
git remote set-url origin git@github.com:KarlLeen/Scholar-X.git
git push -u origin main
```

## 📱 部署到Vercel

### 方法1：通过Vercel Dashboard（推荐）

1. 访问 [https://vercel.com](https://vercel.com)
2. 点击 "Add New Project"
3. 选择 "Import Git Repository"
4. 选择 `KarlLeen/Scholar-X` 仓库
5. 配置环境变量：

```
NEXT_PUBLIC_SUPABASE_URL=你的Supabase项目URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=你的Supabase匿名密钥
```

6. 点击 "Deploy"

### 方法2：使用Vercel CLI

```bash
# 安装Vercel CLI
npm install -g vercel

# 登录Vercel
vercel login

# 部署
vercel

# 设置环境变量（在Vercel Dashboard或CLI中）
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY

# 生产环境部署
vercel --prod
```

## 🔧 环境变量配置

在Vercel项目设置中添加以下环境变量：

| 变量名 | 说明 | 必填 |
|--------|------|------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase项目URL | 是 |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase匿名密钥 | 是 |

## 📝 部署后检查清单

- [ ] 网站可以正常访问
- [ ] Light/Dark模式切换正常
- [ ] 侧边栏展开/收起功能正常
- [ ] 所有页面路由正常
  - [ ] 首页 (Publications)
  - [ ] Publication详情页
  - [ ] Grants页面
  - [ ] Grant详情页
  - [ ] Profile页面
- [ ] 响应式设计在不同设备上正常
- [ ] 所有图片资源加载正常

## 🎨 项目特性

### 已实现功能
- ✅ **完整的页面结构**
  - 首页（Recently Reviewed Publications）
  - Publication详情页（含PDF查看、版本历史）
  - Grants列表页
  - Grant详情页
  - Profile页面（含4个标签页）

- ✅ **Light/Dark模式**
  - 全局主题切换
  - 所有组件适配
  - 平滑过渡动画

- ✅ **响应式设计**
  - 桌面端优化
  - 移动端适配
  - 灵活的布局系统

- ✅ **交互功能**
  - 侧边栏展开/收起
  - 标签页切换
  - 页面导航

### 技术栈
- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **后端**: Supabase
- **图标**: Lucide React
- **字体**: Inter, Instrument Serif
- **动画**: Framer Motion

## 🔄 后续开发

如需继续开发，请确保：
1. 运行 `npm install` 安装依赖
2. 配置 `.env.local` 文件
3. 运行 `npm run dev` 启动开发服务器

## 📞 支持

如有问题，请查看：
- [Next.js文档](https://nextjs.org/docs)
- [Vercel部署文档](https://vercel.com/docs)
- [Supabase文档](https://supabase.com/docs)

