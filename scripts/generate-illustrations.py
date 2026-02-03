#!/usr/bin/env python3
"""
LuminaWebsite 插画生成脚本
支持两种方式:
1. PIL (简单快速)
2. Stable Diffusion (高质量)
"""

import os
import sys
from pathlib import Path

# 检测模式
USE_STABLE_DIFFUSION = "--stable" in sys.argv or os.getenv("USE_STABLE_DIFFUSION", "").lower() == "true"

OUTPUT_DIR = Path(__file__).parent / "public" / "images" / "illustrations"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

print(f"📁 输出目录: {OUTPUT_DIR}")
print(f"🎨 模式: {'Stable Diffusion' if USE_STABLE_DIFFUSION else 'PIL (快速模式)'}")

if USE_STABLE_DIFFUSION:
    # ===== Stable Diffusion 模式 =====
    try:
        from diffusers import StableDiffusionPipeline
        import torch
        from PIL import Image
    except ImportError:
        print("❌ 需要安装: pip install diffusers transformers torch")
        sys.exit(1)

    device = "cuda" if torch.cuda.is_available() else "cpu"
    print(f"🔧 设备: {device}")
    
    # 加载模型
    print("⏳ 加载Stable Diffusion模型...")
    pipe = StableDiffusionPipeline.from_pretrained(
        "runwayml/stable-diffusion-v1-5",
        torch_dtype=torch.float32 if device == "cpu" else torch.float16,
        safety_checker=None,
    )
    pipe.to(device)
    
    # 定义插画配置
    illustrations = [
        {
            "name": "projects",
            "prompt": "Professional illustration of educational technology projects and innovation. Modern design with blue and purple gradient colors. Clean minimalist style. High quality, professional artwork, tech industry aesthetic."
        },
        {
            "name": "services",
            "prompt": "Professional illustration of educational consulting and digital services. Modern office environment with professional team collaboration. Blue and purple color scheme. Corporate professional artwork, high quality."
        },
        {
            "name": "company",
            "prompt": "Professional illustration of education company culture and corporate building. Modern architecture. Professional team working together. Blue and purple theme. Business professional artwork, high quality, corporate aesthetic."
        }
    ]
    
    # 生成插画
    print("\n🎨 生成插画...\n")
    for ill in illustrations:
        print(f"生成: {ill['name']}")
        
        with torch.no_grad():
            image = pipe(
                ill["prompt"],
                height=800,
                width=1200,
                num_inference_steps=50,
                guidance_scale=7.5,
            ).images[0]
        
        # 保存为WebP
        output_path = OUTPUT_DIR / f"{ill['name']}.webp"
        image.save(output_path, "WEBP", quality=85)
        
        size_kb = output_path.stat().st_size / 1024
        print(f"  ✅ {ill['name']}.webp ({size_kb:.1f}KB)\n")

else:
    # ===== PIL 模式 (快速) =====
    try:
        from PIL import Image, ImageDraw
    except ImportError:
        print("❌ 需要安装: pip install Pillow")
        sys.exit(1)

    def create_illustration(filename, title, subtitle, bg_color, emoji):
        """创建简单的渐变插画"""
        width, height = 1200, 800
        
        # 创建背景
        img = Image.new('RGB', (width, height), bg_color)
        draw = ImageDraw.Draw(img, 'RGBA')
        
        # 添加渐变效果
        for y in range(height):
            alpha = int(200 * (y / height))
            r = int(bg_color[0] * (1 - y / height * 0.2))
            g = int(bg_color[1] * (1 - y / height * 0.2))
            b = int(bg_color[2] * (1 - y / height * 0.2))
            draw.line([(0, y), (width, y)], fill=(r, g, b))
        
        # 添加装饰圆形
        circle_x, circle_y = width * 0.85, height * 0.15
        circle_size = 150
        draw.ellipse(
            [circle_x - circle_size, circle_y - circle_size,
             circle_x + circle_size, circle_y + circle_size],
            fill=(255, 255, 255, 30),
            outline=(255, 255, 255, 50),
            width=3
        )
        
        # 另一个装饰圆形
        draw.ellipse(
            [100, height - 200, 400, height - 100],
            fill=(255, 255, 255, 20),
            outline=(255, 255, 255, 40),
            width=2
        )
        
        # 添加文字
        try:
            title_font = ImageFont.truetype(
                "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 80
            )
            subtitle_font = ImageFont.truetype(
                "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 36
            )
        except:
            title_font = ImageFont.load_default()
            subtitle_font = ImageFont.load_default()
        
        emoji_text = emoji + " " + title
        draw.text((width // 2, height // 2 - 80), emoji_text, fill=(255, 255, 255),
                 font=title_font, anchor="mm")
        
        draw.text((width // 2, height // 2 + 100), subtitle, fill=(255, 255, 255),
                 font=subtitle_font, anchor="mm")
        
        # 保存为WebP
        webp_path = OUTPUT_DIR / f'{filename}.webp'
        img.save(webp_path, 'WEBP', quality=85)
        
        size_kb = webp_path.stat().st_size / 1024
        print(f"✅ {filename}.webp ({size_kb:.1f}KB)")

    print("\n🎨 生成插画...\n")
    
    create_illustration(
        'projects',
        'Projects',
        'Educational Technology Platform',
        (102, 126, 234),
        '🚀'
    )
    
    create_illustration(
        'services',
        'Services',
        'Global Education Consulting',
        (118, 75, 162),
        '💼'
    )
    
    create_illustration(
        'company',
        'Company',
        'Innovation & Excellence',
        (102, 126, 234),
        '🏢'
    )

print("\n" + "="*50)
print("✅ 插画生成完成！")
print(f"📍 位置: {OUTPUT_DIR}")
print("="*50)
