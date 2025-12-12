# GitHub + Netlify 部署完整指南

## 📋 准备工作

在开始之前，确保你已经：
- ✅ 拥有 GitHub 账号
- ✅ 拥有 Netlify 账号（可以用 GitHub 登录）
- ✅ 安装了 Git（在终端运行 `git --version` 检查）

## 🚀 第一步：推送代码到 GitHub

### 1. 创建 GitHub 仓库

1. 访问 https://github.com 并登录
2. 点击右上角的 `+` → `New repository`
3. 填写仓库信息：
   - **Repository name**: `shicheng-telecom`（或你喜欢的名字）
   - **Description**: `SHI CHENG TELECOM LIMITED 官方网站`
   - **Visibility**: 选择 Public 或 Private
   - **不要勾选** "Initialize this repository with a README"
4. 点击 `Create repository`

### 2. 推送代码到 GitHub

打开终端，进入项目目录，执行以下命令：

```bash
# 进入项目目录
cd shicheng-telecom

# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 创建第一次提交
git commit -m "Initial commit: SHI CHENG TELECOM website"

# 设置主分支名称
git branch -M main

# 添加远程仓库（替换成你的仓库地址）
git remote add origin https://github.com/你的用户名/shicheng-telecom.git

# 推送代码
git push -u origin main
```

**注意**: 将 `你的用户名` 替换为你的 GitHub 用户名。

如果遇到身份验证问题，你可能需要：
- 使用 GitHub Personal Access Token
- 或者使用 SSH 密钥

## 🌐 第二步：部署到 Netlify

### 1. 连接 GitHub 到 Netlify

1. 访问 https://app.netlify.com
2. 使用 GitHub 账号登录（或注册）
3. 点击 `Add new site` → `Import an existing project`
4. 选择 `Deploy with GitHub`
5. 如果是第一次使用，需要授权 Netlify 访问你的 GitHub
6. 在仓库列表中找到 `shicheng-telecom` 并点击

### 2. 配置构建设置

在构建设置页面，确认以下配置：

```
Site settings:
├── Owner: 选择你的团队
├── Branch to deploy: main
└── Site name: 会自动生成，可以修改

Build settings:
├── Base directory: (留空)
├── Build command: bun run build
├── Publish directory: .next
└── Functions directory: (留空)

Advanced build settings:
└── Environment variables: (暂时不需要添加)
```

**重要**：如果 Netlify 没有自动检测到构建命令，手动填写：
- **Build command**: `bun run build`
- **Publish directory**: `.next`

### 3. 部署

1. 点击 `Deploy shicheng-telecom` 按钮
2. 等待构建完成（通常需要 2-5 分钟）
3. 构建成功后，你会看到一个临时域名，例如：`https://random-name-123.netlify.app`

## ✉️ 第三步：配置表单邮件通知

### 等待第一次表单提交

Netlify Forms 需要在网站部署后，第一次有人提交表单才会激活。

1. 访问你的网站
2. 滚动到页面底部的 "ENQUIRY FORM"
3. 填写并提交一次测试表单

### 配置邮件通知

1. 在 Netlify 控制台，进入你的网站
2. 点击顶部导航的 `Forms` 标签
3. 你应该能看到 `enquiry` 表单和刚才的提交记录
4. 点击表单名称旁边的设置按钮（齿轮图标）
5. 在 `Form notifications` 部分，点击 `Add notification`
6. 选择 `Email notification`
7. 配置通知：
   ```
   Event to listen for: New form submission
   Email to notify: hanshicong049@gmail.com
   Email subject line (optional): 新的网站询价 - {{form_name}}
   ```
8. 点击 `Save`

现在，每次有人提交表单，你都会收到邮件通知！

## 🌍 第四步：配置自定义域名（可选）

### 1. 在 Netlify 添加域名

1. 在网站设置中，点击 `Domain management`
2. 点击 `Add custom domain`
3. 输入你的域名：`www.hkshicheng.com`
4. 按照提示验证域名所有权

### 2. 配置 DNS

在你的域名提供商（如 GoDaddy, Namecheap 等）添加以下 DNS 记录：

```
Type: A
Name: @
Value: 75.2.60.5 (Netlify 的 IP)

Type: CNAME
Name: www
Value: your-site-name.netlify.app
```

### 3. 启用 HTTPS

Netlify 会自动为你的自定义域名配置免费的 SSL 证书（Let's Encrypt）。

## 🔄 第五步：后续更新

每次修改代码后，只需要推送到 GitHub：

```bash
# 查看修改的文件
git status

# 添加所有修改
git add .

# 提交修改
git commit -m "描述你的修改"

# 推送到 GitHub
git push
```

Netlify 会自动检测到 GitHub 的更新并重新部署网站！

## 🐛 常见问题

### 问题 1: 构建失败

**解决方案**:
1. 检查 Netlify 的构建日志
2. 确保 `bun run build` 在本地能成功运行
3. 检查是否有语法错误或缺少依赖

### 问题 2: 表单不工作

**解决方案**:
1. 确保表单有 `data-netlify="true"` 属性
2. 确保表单有 `name="enquiry"` 属性
3. 检查 Netlify 控制台的 Forms 标签页

### 问题 3: 邮件通知没有收到

**解决方案**:
1. 检查邮箱的垃圾邮件文件夹
2. 确认邮件地址配置正确
3. 在 Netlify Forms 页面重新配置通知

### 问题 4: 推送到 GitHub 时要求输入密码

**解决方案**:
使用 Personal Access Token 代替密码：
1. 访问 GitHub Settings → Developer settings → Personal access tokens
2. 创建新的 token
3. 使用 token 作为密码

## 📞 获取帮助

如果遇到问题：
- Netlify 文档: https://docs.netlify.com
- Next.js 文档: https://nextjs.org/docs
- GitHub 文档: https://docs.github.com

## ✅ 检查清单

部署完成后，确认以下项目：

- [ ] 网站可以正常访问
- [ ] 所有页面都能正常加载
- [ ] 导航菜单工作正常
- [ ] 表单可以提交
- [ ] 收到表单提交的邮件通知
- [ ] 图片和资源正常显示
- [ ] 移动端显示正常
- [ ] HTTPS 已启用（如果使用自定义域名）

---

**祝贺你！** 🎉 你的网站现在已经成功部署到 Netlify 了！
