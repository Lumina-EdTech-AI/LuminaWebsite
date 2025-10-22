import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    open: true, // 自动打开浏览器
    strictPort: false, // 如果端口被占用，自动尝试下一个可用端口
  },
  build: {
    // 启用 gzip 压缩
    rollupOptions: {
      output: {
        manualChunks: {
          // 将大的依赖拆分成单独的 chunk
          'aos': ['aos']
        }
      }
    },
    // 图片资源处理
    assetsInlineLimit: 4096, // 小于 4kb 的图片转为 base64
  }
})
