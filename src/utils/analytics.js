// Google Analytics 和百度统计配置
export const analyticsConfig = {
  // Google Analytics 测量ID
  googleAnalyticsId: import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-JFJDCG45LZ',
  
  // 百度统计站点ID
  baiduAnalyticsId: import.meta.env.VITE_BAIDU_SITE_ID || 'YOUR_BAIDU_SITE_ID',
  
  // 是否启用分析(生产环境且配置了ID时启用)
  enabled: import.meta.env.PROD && (import.meta.env.VITE_GA_MEASUREMENT_ID || import.meta.env.VITE_BAIDU_SITE_ID)
}

// 发送页面浏览事件
export function trackPageView(path) {
  if (!analyticsConfig.enabled) return
  
  // Google Analytics
  if (window.gtag) {
    window.gtag('config', analyticsConfig.googleAnalyticsId, {
      page_path: path
    })
  }
  
  // 百度统计
  if (window._hmt) {
    window._hmt.push(['_trackPageview', path])
  }
}

// 发送自定义事件
export function trackEvent(eventName, eventParams = {}) {
  if (!analyticsConfig.enabled) return
  
  // Google Analytics
  if (window.gtag) {
    window.gtag('event', eventName, eventParams)
  }
  
  // 百度统计
  if (window._hmt) {
    window._hmt.push(['_trackEvent', eventParams.category || 'engagement', eventName, eventParams.label])
  }
}

// 跟踪表单提交
export function trackFormSubmit(formName, success = true) {
  trackEvent('form_submit', {
    category: 'form',
    label: formName,
    value: success ? 1 : 0
  })
}

// 跟踪语言切换
export function trackLanguageChange(language) {
  trackEvent('language_change', {
    category: 'user_interaction',
    label: language
  })
}

// 跟踪链接点击
export function trackLinkClick(linkUrl, linkText) {
  trackEvent('link_click', {
    category: 'navigation',
    label: linkText,
    url: linkUrl
  })
}

// 跟踪滚动深度
export function trackScrollDepth(percentage) {
  trackEvent('scroll_depth', {
    category: 'engagement',
    label: `${percentage}%`,
    value: percentage
  })
}
