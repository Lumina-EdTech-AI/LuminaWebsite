import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import i18n from './i18n/index.js'
import { initSEO, watchLanguageChange } from './utils/seo.js'

const app = createApp(App)

// 初始化i18n
i18n.init()

// 初始化SEO
initSEO()

// 监听语言变化并更新SEO
watchLanguageChange()

// 使用路由
app.use(router)

// 在应用挂载后初始化AOS
app.mount('#app')

// 初始化AOS动画
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
  easing: 'ease-in-out'
})
