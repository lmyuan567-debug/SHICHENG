# SHI CHENG TELECOM LIMITED 官方网站

这是 SHI CHENG TELECOM LIMITED 的官方网站项目，基于 Next.js 15 构建。

## 项目信息

- **公司名称**: SHI CHENG TELECOM LIMITED
- **地址**: 香港九龙鸿图道1号2209室
- **电话**: (852) 5124 8496
- **邮箱**: hanshicong049@gmail.com
- **网址**: www.hkshicheng.com

## 技术栈

- **框架**: Next.js 15.5.7
- **UI 组件**: shadcn/ui
- **样式**: Tailwind CSS
- **包管理**: Bun
- **部署**: Netlify

## 本地开发

### 安装依赖

```bash
bun install
```

### 启动开发服务器

```bash
bun run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建项目

```bash
bun run build
```

### 启动生产服务器

```bash
bun start
```

## 部署到 Netlify（通过 GitHub）

### 步骤 1: 推送代码到 GitHub

1. 在 GitHub 创建一个新仓库（例如：`shicheng-telecom`）

2. 在本地项目目录初始化 Git 并推送：

```bash
cd shicheng-telecom
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/shicheng-telecom.git
git push -u origin main
```

### 步骤 2: 连接 Netlify

1. 访问 [Netlify](https://app.netlify.com)
2. 点击 "Add new site" → "Import an existing project"
3. 选择 "GitHub"
4. 授权 Netlify 访问你的 GitHub 账户
5. 选择 `shicheng-telecom` 仓库

### 步骤 3: 配置构建设置

Netlify 会自动检测到 Next.js 项目，但请确认以下设置：

- **Base directory**: (留空)
- **Build command**: `bun run build`
- **Publish directory**: `.next`
- **Node version**: 20 或更高

### 步骤 4: 部署

点击 "Deploy site" 按钮，Netlify 会自动构建和部署你的网站。

## 配置表单邮件通知

部署成功后，需要配置表单邮件通知：

1. 在 Netlify 控制台，进入你的网站
2. 点击 **Forms** 标签页
3. 等待第一次表单提交后，会出现 "enquiry" 表单
4. 点击 **Form notifications** → **Add notification**
5. 选择 **Email notification**
6. 配置：
   - Event: **New form submission**
   - Email: **hanshicong049@gmail.com**
7. 保存设置

## 网站功能

### 主要页面

- **首页**: 公司介绍、合作伙伴、服务展示、运营展示、询价表单
- **关于我们**:
  - 公司介绍
  - 合作伙伴
  - 位置地图
- **服务**:
  - 资产回收
  - 数据清理
  - 寄售服务
- **分级**:
  - New（全新）
  - Refurbished（翻新）
  - Grade A+, A, B+, B, C
  - Damaged/Salvage（损坏/报废）
- **运营**:
  - 数据销毁
  - 退货政策
  - 可追溯性和跟踪

### 表单功能

- 支持 Netlify Forms（自动提交到 Netlify 后台）
- 支持 mailto 备用方案（打开邮件客户端）
- 所有必填字段都有验证
- 提交后显示成功/失败消息

## 环境变量

目前项目不需要任何环境变量。

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 许可证

© 2025 SHI CHENG TELECOM LIMITED. All rights reserved.
