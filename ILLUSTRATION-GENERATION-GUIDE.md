# 插画生成方案研究

## 当前方案 ✅
使用Python PIL生成WebP格式插画。

**优点:**
- ✅ 完全本地生成，无需API
- ✅ WebP格式，文件小 (43.7KB)
- ✅ 可控性强

**缺点:**
- ❌ 插画比较简单 (仅渐变+圆形)
- ❌ 不够专业

---

## 推荐方案

### 方案A: Stable Diffusion (推荐) 🎨

**工具:** 使用`diffusers`库 + Hugging Face模型

```python
from diffusers import StableDiffusionPipeline
import torch

pipe = StableDiffusionPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5",
    torch_dtype=torch.float16
)
pipe.to("cuda")  # GPU加速

# 生成教育主题的高质量插画
prompt = "Professional illustration, education platform, modern design, Blue and purple gradient, high quality, 4k"
image = pipe(prompt).images[0]
image.save("illustration.png")
```

**优点:**
- ✅ 高质量专业插画
- ✅ 完全AI生成，高度自定义
- ✅ 开源免费

**缺点:**
- ❌ 需要GPU (内存>6GB)
- ❌ 首次下载模型较大 (~4GB)
- ❌ 生成速度较慢 (30-60秒)

---

### 方案B: Stability AI API 💳

**工具:** 官方API

```python
import requests
from PIL import Image
from io import BytesIO

API_KEY = "your-api-key"
headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
}

payload = {
    "text_prompts": [
        {
            "text": "Professional illustration of an education platform with modern design",
            "weight": 1
        }
    ],
    "cfg_scale": 7,
    "height": 800,
    "width": 1200,
    "samples": 1,
    "steps": 50,
}

response = requests.post(
    "https://api.stability.ai/v1/generation/stable-diffusion-v1-6/text-to-image",
    headers=headers,
    json=payload,
)

if response.status_code == 200:
    data = response.json()
    image_data = data["artifacts"][0]["base64"]
    image = Image.open(BytesIO(base64.b64decode(image_data)))
    image.save("illustration.webp", "WEBP")
```

**优点:**
- ✅ 最高质量输出
- ✅ 无需本地GPU
- ✅ 快速生成

**缺点:**
- ❌ 需要付费 ($0.03/image)
- ❌ 外部依赖

---

### 方案C: 现有免费API 🌐

**选项1: DeepAI**
```python
import requests

response = requests.post(
    "https://api.deepai.org/api/text2img",
    data={
        "text": "education platform illustration",
    },
    headers={"api-key": "YOUR_API_KEY"}
)
```

**选项2: OpenAI DALL-E 3**
```python
from openai import OpenAI

client = OpenAI(api_key="YOUR_API_KEY")
response = client.images.generate(
    model="dall-e-3",
    prompt="Professional education platform illustration",
    size="1024x1024",
    quality="hd",
    n=1,
)
```

---

## 最终建议

### 对于项目：

**方案选择: Stable Diffusion 本地版本 ✅**

**原因:**
1. 完全开源免费
2. 高质量输出
3. 可集成到CI/CD流程
4. 无需外部API依赖

**实施步骤:**

```bash
# 1. 安装依赖
pip install diffusers transformers torch torchvision

# 2. 运行生成脚本
python generate-illustrations.js

# 3. 生成结果自动保存到 public/images/illustrations/
```

---

## 生成脚本模板

```python
from diffusers import StableDiffusionPipeline
from PIL import Image
import torch
import os

# 使用GPU加速 (如果可用)
device = "cuda" if torch.cuda.is_available() else "cpu"

# 加载模型
print("加载Stable Diffusion模型...")
pipe = StableDiffusionPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5",
    torch_dtype=torch.float32 if device == "cpu" else torch.float16,
    safety_checker=None
)
pipe.to(device)

# 定义插画配置
illustrations = [
    {
        "name": "projects",
        "prompt": "Professional illustration of software projects and innovation, modern design, blue purple gradient, clean minimalist style, high quality, professional artwork"
    },
    {
        "name": "services",
        "prompt": "Professional illustration of business consulting and services, modern office, professional team, blue and purple tones, high quality, corporate artwork"
    },
    {
        "name": "company",
        "prompt": "Professional illustration of corporate building and company culture, modern architecture, professional environment, blue purple theme, high quality, business artwork"
    }
]

# 生成插画
output_dir = "public/images/illustrations"
os.makedirs(output_dir, exist_ok=True)

for ill in illustrations:
    print(f"生成 {ill['name']} 插画...")
    
    with torch.no_grad():
        image = pipe(
            ill["prompt"],
            height=800,
            width=1200,
            num_inference_steps=50,
            guidance_scale=7.5,
        ).images[0]
    
    # 保存为WebP格式
    output_path = os.path.join(output_dir, f"{ill['name']}.webp")
    image.save(output_path, "WEBP", quality=85)
    
    size_mb = os.path.getsize(output_path) / 1024 / 1024
    print(f"✅ {ill['name']}.webp ({size_mb:.2f}MB)")

print("\n✅ 所有插画生成完成！")
```

---

## 后续优化

### 可选: 云集成
- **GitHub Actions:** 自动生成插画并提交
- **CI/CD流程:** 每次push时更新插画

```yaml
# .github/workflows/generate-illustrations.yml
name: Generate Illustrations

on: [push]

jobs:
  generate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run illustration generator
        run: python scripts/generate-illustrations.py
      - name: Commit and push
        run: |
          git config --global user.email "bot@example.com"
          git config --global user.name "Bot"
          git add public/images/illustrations/
          git commit -m "chore: update illustrations" || true
          git push
```

---

## 总结

| 方案 | 质量 | 成本 | 复杂度 | 推荐度 |
|------|------|------|--------|--------|
| PIL (当前) | ⭐⭐ | ✅ 免费 | 简单 | ⭐⭐ |
| Stable Diffusion | ⭐⭐⭐⭐⭐ | ✅ 免费 | 中等 | ⭐⭐⭐⭐⭐ |
| Stability API | ⭐⭐⭐⭐⭐ | 💳 付费 | 简单 | ⭐⭐⭐⭐ |
| DALL-E 3 | ⭐⭐⭐⭐⭐ | 💳 付费 | 简单 | ⭐⭐⭐⭐ |

**最终选择:** Stable Diffusion 本地版本 🎨
