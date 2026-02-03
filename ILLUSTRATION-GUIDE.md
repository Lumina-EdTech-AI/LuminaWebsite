# 插画生成和格式转换方案分析

## 🎨 插画生成方案

### 选项1: API调用方案（推荐）

#### A. **Stability AI (免费额度充足)** ⭐⭐⭐⭐⭐
```
✓ 免费额度: 每月25张免费图片
✓ API价格: $0.003-0.006/张 (非常便宜)
✓ 质量: 非常高 (Stable Diffusion)
✓ 速度: 快
✓ 支持: Text-to-Image

优点:
- 中国区可用
- 文档完善
- 生成速度快
- 支持自定义参数
- 价格最低

缺点:
- 需要注册账号
- 免费额度有限制
```

**集成代码示例:**
```javascript
const generateImage = async (prompt) => {
  const response = await fetch(
    "https://api.stability.ai/v1/generate/stable-diffusion-3",
    {
      method: "POST",
      headers: {
        "authorization": `Bearer ${STABILITY_API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt,
        output_format: "webp",  // 直接输出WebP!
        steps: 30,
        model: "sd3",
      }),
    }
  );
  
  const data = await response.json();
  return data.artifacts[0].base64;  // 返回Base64 WebP图片
};
```

#### B. **OpenAI DALL-E 3**
```
✓ 免费额度: 无 (付费)
✓ API价格: $0.08/张 (标准), $0.04/张 (高效)
✓ 质量: 极高
✓ 风格: 艺术感强

缺点:
- 价格较高
- 需要付费账户
```

#### C. **Hugging Face API (完全免费)** ⭐⭐⭐⭐
```
✓ 免费额度: 无限
✓ 价格: 免费
✓ 质量: 中等-高等
✓ 延迟: 可能较长(免费推理)

优点:
- 完全免费
- 无限制
- 中国区可用

缺点:
- 响应时间慢 (可能30-60秒)
- 队列等待
```

**集成代码示例:**
```javascript
const generateImageHF = async (prompt) => {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-3",
    {
      headers: { Authorization: `Bearer ${HF_API_TOKEN}` },
      method: "POST",
      body: JSON.stringify({ inputs: prompt }),
    }
  );
  
  const imageBlob = await response.blob();
  return imageBlob;  // 返回Blob
};
```

---

### 选项2: 本地生成方案

#### **Replicate API** ⭐⭐⭐⭐
```
✓ 免费额度: $5试用额度
✓ 价格: $0.001-0.005/张 (极便宜)
✓ 质量: 高
✓ 支持: 30+个模型

优点:
- 支持SDXL、SD3等最新模型
- 中国区可用
- 有免费试用
- API文档详细

缺点:
- 免费额度有限
```

---

## 🖼️ 格式转换方案

### Node.js 格式转换库

#### **方案1: Sharp (推荐)** ⭐⭐⭐⭐⭐
```bash
npm install sharp
```

**使用代码:**
```javascript
const sharp = require('sharp');

// 从URL下载并转换
const convertToWebP = async (imageUrl) => {
  const response = await fetch(imageUrl);
  const buffer = await response.buffer();
  
  const webpBuffer = await sharp(buffer)
    .resize(1200, 800, {
      fit: 'cover',
      position: 'center'
    })
    .webp({ quality: 80 })
    .toBuffer();
  
  return webpBuffer;
};

// 或从Base64转换
const base64ToWebP = async (base64String) => {
  const buffer = Buffer.from(base64String, 'base64');
  
  const webpBuffer = await sharp(buffer)
    .webp({ quality: 80 })
    .toBuffer();
  
  // 保存文件
  const fs = require('fs');
  fs.writeFileSync('image.webp', webpBuffer);
  
  return webpBuffer;
};
```

**优点:**
- 速度快 (C++绑定)
- 功能强大 (resize, compress等)
- 质量好
- 文件大小小 (WebP比PNG小30-40%)

**文件大小对比:**
```
原图 (PNG):    2.5 MB
转换后 (WebP): 0.8 MB  (节省67%)

原图 (JPG):    1.2 MB
转换后 (WebP): 0.5 MB  (节省58%)
```

#### **方案2: ImageMagick**
```bash
npm install imagemagick-cli
```

```javascript
const im = require('imagemagick-cli');

const convertToWebP = async (inputPath, outputPath) => {
  await im.convert([
    inputPath,
    '-resize', '1200x800',
    '-quality', '80',
    outputPath + '.webp'
  ]);
};
```

---

## 🚀 完整集成方案 (推荐)

### 步骤1: 安装依赖
```bash
npm install sharp node-fetch dotenv
```

### 步骤2: 创建生成脚本

**文件: src/utils/illustration-generator.js**
```javascript
const sharp = require('sharp');
const fetch = require('node-fetch');

const STABILITY_API_KEY = process.env.STABILITY_API_KEY;

// 图片提示词库
const illustrations = {
  projects: {
    prompt: 'Modern educational technology platform dashboard, AI learning interface, clean minimalist design, blue and purple gradient, digital art, high resolution, professional',
    style: 'digital art, professional, clean'
  },
  services: {
    prompt: 'Global education consulting, international students, world map with icons, team collaboration, modern design, blue and purple theme, high resolution',
    style: 'digital illustration, educational, professional'
  },
  company: {
    prompt: 'Company history timeline, growth chart, innovation journey, corporate building, modern architecture, blue and purple gradient, professional infographic style',
    style: 'corporate illustration, timeline, professional'
  }
};

/**
 * 从Stability AI生成插画
 */
async function generateIllustration(type) {
  const config = illustrations[type];
  
  if (!config) {
    throw new Error(`Unknown illustration type: ${type}`);
  }

  try {
    const response = await fetch(
      'https://api.stability.ai/v1/generate/stable-diffusion-3',
      {
        method: 'POST',
        headers: {
          'authorization': `Bearer ${STABILITY_API_KEY}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          prompt: config.prompt,
          negative_prompt: 'text, watermark, low quality, blurry',
          output_format: 'webp',
          steps: 30,
          model: 'sd3',
          aspect_ratio: '16:9'
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.artifacts[0].base64;
  } catch (error) {
    console.error('生成插画失败:', error);
    throw error;
  }
}

/**
 * 转换为WebP格式并保存
 */
async function convertAndSaveWebP(inputBuffer, outputPath, options = {}) {
  const {
    width = 1200,
    height = 800,
    quality = 80
  } = options;

  try {
    await sharp(inputBuffer)
      .resize(width, height, {
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality })
      .toFile(outputPath);

    console.log(`✓ 已保存: ${outputPath}`);
    return outputPath;
  } catch (error) {
    console.error('转换失败:', error);
    throw error;
  }
}

/**
 * 完整流程: 生成 → 转换 → 保存
 */
async function generateAndSave(type, outputPath) {
  console.log(`🎨 生成${type}插画...`);
  
  const base64 = await generateIllustration(type);
  const buffer = Buffer.from(base64, 'base64');
  
  console.log(`🔄 转换为WebP...`);
  
  await convertAndSaveWebP(buffer, outputPath);
  
  console.log(`✅ 完成: ${outputPath}`);
}

module.exports = {
  generateIllustration,
  convertAndSaveWebP,
  generateAndSave
};
```

### 步骤3: 创建批处理脚本

**文件: scripts/generate-illustrations.js**
```javascript
const path = require('path');
require('dotenv').config();

const { generateAndSave } = require('../src/utils/illustration-generator');

const illustrations = [
  {
    type: 'projects',
    path: 'public/images/illustrations/projects.webp'
  },
  {
    type: 'services',
    path: 'public/images/illustrations/services.webp'
  },
  {
    type: 'company',
    path: 'public/images/illustrations/company.webp'
  }
];

async function generateAll() {
  console.log('🚀 开始生成所有插画...\n');

  for (const illustration of illustrations) {
    try {
      const fullPath = path.join(__dirname, '..', illustration.path);
      await generateAndSave(illustration.type, fullPath);
      console.log('');
    } catch (error) {
      console.error(`❌ ${illustration.type} 生成失败:`, error.message);
    }
  }

  console.log('\n✅ 所有插画生成完成!');
}

generateAll();
```

### 步骤4: 配置环境变量

**文件: .env**
```
STABILITY_API_KEY=your_stability_api_key_here
```

### 步骤5: 运行生成脚本
```bash
npm run generate:illustrations
```

---

## 💰 成本分析

### 月度成本估算 (3张插画)

| 方案 | 成本 | 备注 |
|------|------|------|
| **Stability AI** | $0.01-0.02 | 完全免费额度内 |
| **Hugging Face** | $0 | 完全免费 (但慢) |
| **Replicate** | $0 | 使用$5试用额度 |
| **OpenAI DALL-E** | $0.24-0.32 | 最贵 |

---

## ⚡ 推荐方案总结

### 最佳组合: **Stability AI + Sharp** ⭐⭐⭐⭐⭐

**理由:**
1. ✅ API调用价格最低 ($0.003/张)
2. ✅ 免费额度充足 (25张/月)
3. ✅ Sharp转换速度快
4. ✅ WebP直接输出，省略转换步骤
5. ✅ 中国区可用
6. ✅ 完整自动化方案

**成本:** 基本免费 (如果用完免费额度，3张大约 $0.01)

**质量:** 极高 (Stable Diffusion 3)

---

## 📋 集成检查清单

- [ ] 注册Stability AI账号
- [ ] 获取API Key
- [ ] `npm install sharp node-fetch dotenv`
- [ ] 创建 `illustration-generator.js`
- [ ] 创建 `generate-illustrations.js` 脚本
- [ ] 配置 `.env` 环境变量
- [ ] 创建 `public/images/illustrations/` 目录
- [ ] 运行 `npm run generate:illustrations`
- [ ] 集成到Vue页面 Hero sections
- [ ] 测试响应式显示

---

## 🔗 常用资源

- **Stability AI**: https://www.stability.ai/
- **Sharp文档**: https://sharp.pixelplumbing.com/
- **WebP优化**: https://caniuse.com/webp (浏览器支持度99.6%)
- **Hugging Face**: https://huggingface.co/

---

**推荐行动:** 
1. 先用Stability AI免费额度生成3张试看效果
2. 如果满意，集成自动化脚本
3. 成本很低，月度不超过$1
