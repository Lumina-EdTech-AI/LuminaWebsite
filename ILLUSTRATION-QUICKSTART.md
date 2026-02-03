# 插画生成 - 快速开始

## 快速模式 (推荐) ⚡

最简单最快的方式，使用PIL生成：

```bash
# 进入项目目录
cd /root/.openclaw/workspace/LuminaWebsite

# 运行生成脚本
python scripts/generate-illustrations.py
```

**特点:**
- ⚡ 5秒完成
- 💾 轻量级 (43KB)
- ✅ 无需额外依赖

**输出:**
```
✅ projects.webp (15KB)
✅ services.webp (14KB)
✅ company.webp (14KB)
```

---

## 高质量模式 🎨

使用Stable Diffusion生成专业插画：

### 前提条件
```bash
# 安装必需包
pip install diffusers transformers torch torchvision

# 注: 首次运行会自动下载模型 (~4GB)
# 需要至少6GB显存 (GPU) 或16GB内存 (CPU)
```

### 运行
```bash
# GPU模式 (推荐，~30秒)
python scripts/generate-illustrations.py --stable

# 或设置环境变量
export USE_STABLE_DIFFUSION=true
python scripts/generate-illustrations.py
```

**特点:**
- 🎨 专业级质量
- 🤖 AI生成
- 💾 仍为WebP格式
- ⏱️ 较慢但更好看

---

## 实际对比

### 快速模式
```
优点: 快速、轻量级、依赖少
缺点: 质量一般 (简单渐变+圆形)
适合: 快速原型、开发测试
```

### 高质量模式
```
优点: 专业级插画、完全AI生成
缺点: 需要GPU、首次下载大、较慢
适合: 生产部署、最终版本
```

---

## 集成建议

### 开发阶段
使用快速模式，快速迭代：
```bash
npm run build  # 构建
python scripts/generate-illustrations.py  # 快速生成插画
```

### 生产部署
使用高质量模式：
```bash
python scripts/generate-illustrations.py --stable  # 高质量
npm run build  # 最终构建
git push  # 推送
```

---

## 自定义插画

编辑 `scripts/generate-illustrations.py` 中的 `illustrations` 列表：

```python
illustrations = [
    {
        "name": "my-illustration",
        "prompt": "Your custom prompt here..."  # 修改这里
    }
]
```

**好的Prompt示例:**
- "Professional illustration of [主题]. Modern design, blue and purple gradient, high quality"
- "Corporate artwork showing [场景]. Professional, clean, minimalist style"
- "[主题] illustration for website. Modern aesthetic, professional quality"

---

## 常见问题

**Q: 为什么生成这么慢?**
A: Stable Diffusion需要50步推理。可以修改脚本中的 `num_inference_steps=50` 改为更低值以加快速度。

**Q: 显存不足怎么办?**
A: 
1. 降低 `num_inference_steps` (如30)
2. 使用CPU模式 (慢但可用)
3. 使用快速PILmode

**Q: 可以用其他模型吗?**
A: 可以！修改脚本中的模型ID：
- `runwayml/stable-diffusion-v1-5` (当前)
- `stabilityai/stable-diffusion-2-1` (更好的质量)
- `dreamlike-art/dreamlike-photoreal-2.0` (写实风格)

---

## 下一步

1. ✅ 快速生成测试
2. ⏳ 可选: 尝试高质量模式
3. 🎨 自定义Prompt获得理想效果
4. 📦 集成到CI/CD流程 (可选)

**现在尝试:**
```bash
cd /root/.openclaw/workspace/LuminaWebsite
python scripts/generate-illustrations.py
```
