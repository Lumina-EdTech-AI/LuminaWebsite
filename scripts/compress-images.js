// 图片压缩脚本 (Node.js)
// 使用方法: node scripts/compress-images.js

const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');
const path = require('path');
const fs = require('fs');

const inputDir = 'public/images';
const outputDir = 'public/images-optimized';

async function compressImages() {
  console.log('🎨 开始压缩图片...\n');

  try {
    // 确保输出目录存在
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // 压缩图片
    const files = await imagemin([`${inputDir}/*.{jpg,png,jpeg}`], {
      destination: outputDir,
      plugins: [
        imageminPngquant({
          quality: [0.6, 0.8], // PNG 压缩质量
          speed: 1
        }),
        imageminMozjpeg({
          quality: 80 // JPG 压缩质量
        })
      ]
    });

    console.log('✅ 压缩完成!\n');
    console.log(`处理了 ${files.length} 个文件\n`);

    // 统计压缩效果
    let originalSize = 0;
    let compressedSize = 0;

    files.forEach(file => {
      const originalPath = path.join(inputDir, path.basename(file.destinationPath));
      if (fs.existsSync(originalPath)) {
        const original = fs.statSync(originalPath);
        const compressed = fs.statSync(file.destinationPath);
        originalSize += original.size;
        compressedSize += compressed.size;

        const saved = ((1 - compressed.size / original.size) * 100).toFixed(1);
        console.log(`${path.basename(file.destinationPath)}: ${(original.size / 1024).toFixed(1)}KB → ${(compressed.size / 1024).toFixed(1)}KB (节省 ${saved}%)`);
      }
    });

    const totalSaved = ((1 - compressedSize / originalSize) * 100).toFixed(1);
    console.log(`\n总计: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(compressedSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`节省空间: ${totalSaved}%\n`);

    console.log(`📁 压缩后的图片保存在: ${outputDir}`);
    console.log('💡 请检查图片质量，如果满意，可以替换原图片');

  } catch (error) {
    console.error('❌ 压缩失败:', error.message);
    console.log('\n请确保已安装依赖:');
    console.log('npm install imagemin imagemin-pngquant imagemin-mozjpeg --save-dev');
  }
}

compressImages();
