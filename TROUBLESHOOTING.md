# 🔧 本地测试故障排查指南

## 问题描述
`npm run dev` 后页面空白

## 快速排查步骤

### 1️⃣ 检查项目结构
```bash
cd /root/.openclaw/workspace/LuminaWebsite
ls -la src/
```

应该看到:
```
src/
├── App.vue
├── main.js
├── components/
├── views/
├── data/
├── router/
├── i18n/
├── styles/
├── utils/
├── composables/
└── images/
```

### 2️⃣ 安装依赖
```bash
npm install
```

确保所有依赖都已安装:
- vue@3.5.22
- vue-router@4.6.3
- aos@2.3.4
- vite@7.1.11
- sass@1.93.2

### 3️⃣ 清理缓存
```bash
rm -rf node_modules package-lock.json
npm install
```

### 4️⃣ 启动开发服务器
```bash
npm run dev
```

应该看到类似输出:
```
  VITE v7.1.11  ready in 234 ms

  ➜  Local:   http://localhost:3000/
  ➜  press h + enter to show help
```

### 5️⃣ 打开浏览器
访问: http://localhost:3000

## 常见问题排查

### 问题: 页面完全空白
**可能原因:**
- [ ] App.vue 没有正确导入
- [ ] router 配置有问题
- [ ] 主样式文件缺失

**解决方案:**
```bash
# 检查App.vue
cat src/App.vue

# 检查main.js
cat src/main.js

# 检查router配置
cat src/router/index.js

# 检查样式
cat src/styles/index.scss
```

### 问题: 控制台有错误
**常见错误及解决:**

❌ "Cannot find module 'vue'"
✅ 解决: `npm install`

❌ "Failed to resolve component"
✅ 解决: 检查组件导入路径

❌ "i18n is not defined"
✅ 解决: 检查i18n初始化 (main.js)

### 问题: 热更新不工作
**解决方案:**
```bash
# 重启开发服务器
npm run dev

# 或手动刷新浏览器 F5
```

## 浏览器开发者工具调试

### 打开控制台 (F12)

1. **Console标签页**
   - 查看JavaScript错误信息
   - 输入 `console.log(i18n)` 测试i18n是否加载

2. **Network标签页**
   - 检查资源是否正确加载
   - 查看是否有404错误

3. **Elements/Inspector标签页**
   - 检查DOM结构
   - `#app` 元素是否存在

## 完整调试步骤

```bash
#!/bin/bash

# 1. 进入项目目录
cd /root/.openclaw/workspace/LuminaWebsite

# 2. 清理所有缓存
rm -rf node_modules dist .vite package-lock.json

# 3. 重新安装依赖
npm install

# 4. 验证依赖安装
npm list vue vue-router aos vite

# 5. 清理Vite缓存
npm run dev -- --force

# 6. 打开浏览器 http://localhost:3000
```

## 项目配置验证

### ✅ vite.config.js
```javascript
port: 3000
vue plugin: installed
```

### ✅ index.html
```html
<div id="app"></div>
<script type="module" src="/src/main.js"></script>
```

### ✅ src/main.js
```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
```

### ✅ src/App.vue
```vue
<template>
  <div class="app">
    <router-view />
  </div>
</template>
```

### ✅ src/router/index.js
```javascript
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  // ... 其他路由
]

export default createRouter({
  history: createWebHistory(),
  routes
})
```

## 测试路由

如果主页加载，尝试访问:
- http://localhost:3000/ → 首页
- http://localhost:3000/team/sissi → 团队成员
- http://localhost:3000/company → 公司介绍
- http://localhost:3000/projects → 项目列表
- http://localhost:3000/projects/lumina-ai-teacher → 项目详情

## 网络问题排查

如果页面加载慢:
```bash
# 检查网络连接
ping google.com

# 清理DNS缓存
sudo dscacheutil -flushcache  # macOS
sudo systemctl restart systemd-resolved  # Linux
ipconfig /flushdns  # Windows
```

## 最后手段: 完全重建

```bash
cd /root/.openclaw/workspace/LuminaWebsite

# 备份当前代码
cp -r . ../LuminaWebsite.backup

# 清理所有缓存
rm -rf node_modules dist .vite .nuxt .turbo

# 重新安装
npm install

# 启动开发服务器
npm run dev
```

## 性能优化

项目启动后，可以优化:

1. **构建优化**
   ```bash
   npm run build
   npm run preview
   ```

2. **依赖分析**
   ```bash
   npm ls --depth=0
   ```

3. **清理未使用的依赖**
   ```bash
   npm prune
   ```

## 文档链接

- 🔗 [Vite文档](https://vitejs.dev/)
- 🔗 [Vue 3文档](https://vuejs.org/)
- 🔗 [Vue Router文档](https://router.vuejs.org/)
- 🔗 [项目GitHub](https://github.com/Lumina-EdTech-AI/LuminaWebsite)

---

如果问题仍未解决，请:
1. 查看 `npm run dev` 的完整错误信息
2. 检查浏览器控制台 (F12) 的错误
3. 提供错误截图和 `npm --version` & `node --version` 的输出

**需要帮助?** 在GitHub Issues中提出问题 📝
