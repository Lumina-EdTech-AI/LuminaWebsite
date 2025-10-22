// 多语言配置
import { reactive, ref, watch } from 'vue'
import zh from './locales/zh.js'
import en from './locales/en.js'

const messages = {
  zh,
  en
}

// 使用ref使locale具有响应性
const locale = ref('zh')

const i18n = reactive({
  locale, // 响应式locale
  messages,
  t(key) {
    const keys = key.split('.')
    let value = this.messages[this.locale.value]
    for (const k of keys) {
      value = value[k]
      if (!value) return key
    }
    return value
  },
  setLocale(newLocale) {
    this.locale.value = newLocale
    localStorage.setItem('locale', newLocale)
  },
  init() {
    const savedLocale = localStorage.getItem('locale')
    if (savedLocale && messages[savedLocale]) {
      this.locale.value = savedLocale
    }
  },
  watch(getter, callback) {
    return watch(getter, callback)
  }
})

export default i18n
