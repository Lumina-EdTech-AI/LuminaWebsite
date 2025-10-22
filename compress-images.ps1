# 图片批量压缩脚本 (PowerShell)
# 使用方法: 在 PowerShell 中运行 .\compress-images.ps1

Write-Host "=== 图片压缩工具 ===" -ForegroundColor Green
Write-Host ""

$imagesPath = "public\images"

if (-Not (Test-Path $imagesPath)) {
    Write-Host "错误: 找不到 public\images 目录" -ForegroundColor Red
    exit 1
}

Write-Host "检测到的图片文件:" -ForegroundColor Yellow
Get-ChildItem -Path $imagesPath -Include *.jpg,*.png,*.jpeg -Recurse | ForEach-Object {
    $size = [math]::Round($_.Length / 1KB, 2)
    Write-Host "  $($_.Name) - ${size} KB"
}

Write-Host ""
Write-Host "推荐的压缩方法:" -ForegroundColor Cyan
Write-Host ""
Write-Host "方法 1: 在线工具 (最简单) ⭐" -ForegroundColor Green
Write-Host "  1. 访问 https://tinypng.com/"
Write-Host "  2. 拖拽 public/images 目录下的所有图片"
Write-Host "  3. 下载压缩后的图片并替换原文件"
Write-Host ""

Write-Host "方法 2: 使用 NPM 包 (自动化)" -ForegroundColor Green
Write-Host "  运行以下命令:"
Write-Host "  npm install -g imagemin-cli imagemin-pngquant imagemin-mozjpeg" -ForegroundColor Yellow
Write-Host "  imagemin public/images/*.{png,jpg} --plugin=pngquant --plugin=mozjpeg --out-dir=public/images-compressed" -ForegroundColor Yellow
Write-Host ""

Write-Host "方法 3: 安装 Vite 插件 (推荐生产环境)" -ForegroundColor Green
Write-Host "  npm install vite-plugin-imagemin --save-dev" -ForegroundColor Yellow
Write-Host ""

Write-Host "图片尺寸建议:" -ForegroundColor Cyan
Write-Host "  团队头像 (team-*.png): 400x400px"
Write-Host "  服务图标 (*.jpg): 600x400px"
Write-Host "  Logo: 200x60px"
Write-Host "  轮播图 (slider-*.png): 1920x1080px"
Write-Host ""

# 计算当前图片总大小
$totalSize = 0
Get-ChildItem -Path $imagesPath -Include *.jpg,*.png,*.jpeg -Recurse | ForEach-Object {
    $totalSize += $_.Length
}
$totalSizeMB = [math]::Round($totalSize / 1MB, 2)
Write-Host "当前图片总大小: ${totalSizeMB} MB" -ForegroundColor Yellow
Write-Host "优化后预计大小: $([math]::Round($totalSizeMB * 0.3, 2)) MB (节省 70%)" -ForegroundColor Green
Write-Host ""
