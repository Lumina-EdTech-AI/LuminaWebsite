#!/bin/bash

cd /root/.openclaw/workspace/LuminaWebsite

echo "=== 项目检查 ==="
echo "目录结构:"
ls -la src/

echo -e "\n=== 依赖检查 ==="
echo "Node版本:"
node --version

echo -e "\nNPM版本:"
npm --version

echo -e "\n=== 安装依赖 ==="
npm install

echo -e "\n=== 启动开发服务器 ==="
echo "在http://localhost:3000打开浏览器"
npm run dev
