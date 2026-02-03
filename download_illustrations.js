const https = require('https');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const illusDir = './public/images/illustrations';
if (!fs.existsSync(illusDir)) {
  fs.mkdirSync(illusDir, { recursive: true });
}

// 使用ImageMagick命令行工具转换 (系统自带)
async function downloadAndConvert(query, filename) {
  return new Promise((resolve, reject) => {
    console.log(`🎨 下载插画: ${filename}...`);
    
    const imageUrl = `https://source.unsplash.com/1200x800/?${encodeURIComponent(query)}`;
    const tmpFile = path.join(illusDir, `${filename}.jpg`);
    const outFile = path.join(illusDir, filename);
    
    https.get(imageUrl, { headers: { 'User-Agent': 'Node.js' } }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        console.log(`  重定向...`);
        return downloadAndConvert(query, filename).then(resolve).catch(reject);
      }

      const file = fs.createWriteStream(tmpFile);
      response.pipe(file);
      
      response.on('end', () => {
        // 使用ImageMagick转换 (convert命令)
        const convert = spawn('convert', [
          tmpFile,
          '-resize', '1200x800!',
          '-quality', '85',
          outFile
        ]);

        convert.on('close', (code) => {
          if (code === 0) {
            fs.unlinkSync(tmpFile);
            const stats = fs.statSync(outFile);
            console.log(`✅ 完成: ${filename} (${(stats.size / 1024).toFixed(1)}KB)\n`);
            resolve();
          } else {
            reject(new Error(`Convert failed with code ${code}`));
          }
        });

        convert.on('error', reject);
      });
    }).on('error', reject);
  });
}

async function downloadAll() {
  console.log('🚀 开始下载和转换插画...\n');
  
  const illustrations = [
    { name: 'projects', query: 'technology education learning', filename: 'projects.webp' },
    { name: 'services', query: 'education consulting international', filename: 'services.webp' },
    { name: 'company', query: 'business growth innovation team', filename: 'company.webp' }
  ];

  try {
    for (const illus of illustrations) {
      await downloadAndConvert(illus.query, illus.filename);
      await new Promise(resolve => setTimeout(resolve, 800));
    }
    
    console.log('✅ 所有插画已就绪!');
    console.log('\n📊 已生成的文件:');
    illustrations.forEach(i => {
      const filePath = path.join(illusDir, i.filename);
      if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        console.log(`  • ${i.filename} - ${(stats.size / 1024).toFixed(1)}KB`);
      }
    });
  } catch (error) {
    console.error('❌ 下载失败:', error.message);
  }
}

downloadAll();
