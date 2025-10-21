import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

// 在应用挂载后初始化AOS
app.mount('#app')

// 初始化AOS动画
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
  easing: 'ease-in-out'
})
