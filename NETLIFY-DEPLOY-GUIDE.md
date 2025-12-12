# Netlify 压缩包部署指南

## 📦 压缩包信息

- **文件名**: `shicheng-telecom-netlify.tar.gz`
- **位置**: `/home/project/shicheng-telecom-netlify.tar.gz`
- **大小**: 约 112 KB
- **内容**: 完整项目源代码（不包含 node_modules 和构建文件）

## 🚀 使用压缩包部署到 Netlify

### 方法 1: 通过 Netlify 网页界面部署（推荐）

#### 第 1 步：下载压缩包

压缩包已创建在：`/home/project/shicheng-telecom-netlify.tar.gz`

你可以通过以下方式下载：
1. 在文件浏览器中找到该文件
2. 或者使用命令下载到本地

#### 第 2 步：解压文件（在本地电脑）

```bash
# Windows (使用 7-Zip 或 WinRAR)
# 右键点击文件 → 解压到当前文件夹

# Mac/Linux
tar -xzf shicheng-telecom-netlify.tar.gz
```

#### 第 3 步：上传到 GitHub

```bash
# 进入解压后的项目目录
cd shicheng-telecom

# 初始化 Git 仓库
git init
git add .
git commit -m "Initial commit"
git branch -M main

# 添加远程仓库（替换成你的仓库地址）
git remote add origin https://github.com/你的用户名/shicheng-telecom.git
git push -u origin main
```

#### 第 4 步：连接 Netlify

1. 访问 https://app.netlify.com
2. 点击 `Add new site` → `Import an existing project`
3. 选择 `GitHub`
4. 选择你的仓库 `shicheng-telecom`
5. 配置构建设置：
   - **Build command**: `bun run build`
   - **Publish directory**: `.next`
6. 点击 `Deploy site`

---

### 方法 2: 使用 Netlify CLI 部署

如果你想直接从解压的文件夹部署，可以使用 Netlify CLI：

#### 第 1 步：安装 Netlify CLI

```bash
npm install -g netlify-cli
# 或者
bun install -g netlify-cli
```

#### 第 2 步：解压并进入项目

```bash
tar -xzf shicheng-telecom-netlify.tar.gz
cd shicheng-telecom
```

#### 第 3 步：安装依赖并构建

```bash
bun install
bun run build
```

#### 第 4 步：登录并部署

```bash
# 登录 Netlify
netlify login

# 部署到 Netlify
netlify deploy --prod
```

按照提示选择：
- Create & configure a new site
- 选择你的团队
- 输入站点名称（可选）
- 部署路径：`.next`

---

### 方法 3: 拖放部署（最简单，但功能有限）

**注意**: 这种方法不支持自动重新部署，不推荐用于生产环境。

1. 解压文件
2. 进入项目目录并构建：
   ```bash
   cd shicheng-telecom
   bun install
   bun run build
   ```
3. 访问 https://app.netlify.com/drop
4. 将 `.next` 文件夹拖放到网页上
5. Netlify 会自动部署

---

## ⚙️ Netlify 构建设置

确保在 Netlify 中配置以下设置：

```
Build settings:
├── Base directory: (留空)
├── Build command: bun run build
├── Publish directory: .next
└── Node version: 20 或更高

Environment variables: (不需要)
```

---

## ✉️ 配置表单邮件通知

部署成功后：

1. 访问你的网站
2. 滚动到 "ENQUIRY FORM" 并提交一次测试
3. 在 Netlify 控制台：
   - 进入 `Forms` 标签
   - 找到 `enquiry` 表单
   - 添加邮件通知：
     - Email: **hanshicong049@gmail.com**
     - Event: **New form submission**

---

## 📁 压缩包包含的文件

```
shicheng-telecom/
├── src/                    # 源代码
│   ├── app/               # 页面文件
│   ├── components/        # 组件
│   └── lib/               # 工具函数
├── public/                # 静态资源
├── package.json           # 依赖配置
├── next.config.js         # Next.js 配置
├── tailwind.config.ts     # Tailwind 配置
├── tsconfig.json          # TypeScript 配置
├── netlify.toml           # Netlify 配置
├── README.md              # 项目说明
├── DEPLOYMENT.md          # 详细部署指南
├── QUICK-START.md         # 快速开始
└── NETLIFY-DEPLOY-GUIDE.md # 本文件
```

**不包含**（需要在部署时安装）：
- `node_modules/` - 依赖包（Netlify 会自动安装）
- `.next/` - 构建输出（Netlify 会自动构建）
- `.git/` - Git 历史

---

## 🔍 验证部署

部署成功后，检查以下项目：

- [ ] 网站可以访问
- [ ] 所有 25 个页面正常加载
- [ ] 导航菜单和下拉菜单工作正常
- [ ] 图片正常显示
- [ ] 表单可以提交
- [ ] 收到表单提交的邮件通知
- [ ] 移动端显示正常
- [ ] HTTPS 已启用

---

## 🐛 常见问题

### 问题：构建失败

**解决方案**：
1. 确保使用 Node.js 20 或更高版本
2. 在 Netlify 设置中指定 Build command: `bun run build`
3. 检查 Netlify 构建日志中的错误信息

### 问题：页面 404

**解决方案**：
1. 确保 Publish directory 设置为 `.next`
2. 检查 `netlify.toml` 文件是否正确

### 问题：表单不工作

**解决方案**：
1. 确认网站已部署（不是本地预览）
2. 提交一次表单后等待几分钟
3. 检查 Netlify Forms 页面

---

## 📞 获取帮助

- Netlify 文档: https://docs.netlify.com
- Next.js 文档: https://nextjs.org/docs
- 项目 README: 查看 `README.md`
- 详细部署指南: 查看 `DEPLOYMENT.md`

---

**祝部署顺利！** 🎉
