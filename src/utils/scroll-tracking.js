// 滚动深度跟踪
import { trackScrollDepth } from './analytics.js'

let scrollTracked = {
  '25': false,
  '50': false,
  '75': false,
  '100': false
}

export function initScrollTracking() {
  let ticking = false
  
  function checkScrollDepth() {
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    
    const scrollPercentage = Math.round((scrollTop + windowHeight) / documentHeight * 100)
    
    // 检查并跟踪各个深度阈值
    const thresholds = ['25', '50', '75', '100']
    thresholds.forEach(threshold => {
      if (scrollPercentage >= parseInt(threshold) && !scrollTracked[threshold]) {
        scrollTracked[threshold] = true
        trackScrollDepth(parseInt(threshold))
      }
    })
    
    ticking = false
  }
  
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(checkScrollDepth)
      ticking = true
    }
  }
  
  window.addEventListener('scroll', onScroll, { passive: true })
  
  // 清理函数
  return () => {
    window.removeEventListener('scroll', onScroll)
  }
}

// 重置滚动跟踪(用于页面切换)
export function resetScrollTracking() {
  scrollTracked = {
    '25': false,
    '50': false,
    '75': false,
    '100': false
  }
}
