// SEO 工具函数
import i18n from '../i18n/index.js'

// SEO 元数据配置
export const seoConfig = {
  zh: {
    title: '麓鸣教育集团 - 国际教育咨询与AI科技研发 | Lumina Education',
    description: '麓鸣教育集团扎根上海、香港CBD核心区,提供国际教育咨询、AI科技产品研发、留学规划、企业数字化赋能等服务。国际总部位于加拿大和英国,与斯坦福、MIT等名校深度合作。',
    keywords: '麓鸣教育,教育咨询,AI教育,留学规划,国际课程,A-Level,AP,BTEC,脑机接口,教育科技,企业赋能,上海教育,香港教育,英国留学,加拿大留学',
    ogTitle: '麓鸣教育集团 - 创新AI驱动的国际教育解决方案',
    ogDescription: '依托硅谷AI技术与全球教育资源,为学生、家庭和企业提供从幼儿教育到海外升学的全链条咨询服务',
    author: '麓鸣教育集团',
    siteName: '麓鸣教育集团官网'
  },
  en: {
    title: 'Lumina Education Group - International Education & AI Technology | Study Abroad Consulting',
    description: 'Lumina Education Group, based in Shanghai and Hong Kong CBD, provides international education consulting, AI technology R&D, study abroad planning, and enterprise digitalization. International HQ in Canada and UK, partnering with Stanford, MIT.',
    keywords: 'Lumina Education,education consulting,AI education,study abroad,international curriculum,A-Level,AP,BTEC,brain-computer interface,edtech,enterprise empowerment,Shanghai education,Hong Kong education,UK study abroad,Canada study abroad',
    ogTitle: 'Lumina Education Group - Innovative AI-Driven International Education Solutions',
    ogDescription: 'Leveraging Silicon Valley AI technology and global education resources to provide end-to-end consulting from early childhood education to overseas admission',
    author: 'Lumina Education Group',
    siteName: 'Lumina Education Group Official Website'
  }
}

// 更新页面标题
export function updateTitle(customTitle = null) {
  const locale = i18n.locale.value
  const config = seoConfig[locale]
  document.title = customTitle || config.title
}

// 更新meta标签
export function updateMetaTags(customMeta = {}) {
  const locale = i18n.locale.value
  const config = seoConfig[locale]
  
  // 基础meta标签
  const metaTags = {
    description: customMeta.description || config.description,
    keywords: customMeta.keywords || config.keywords,
    author: config.author,
    'og:title': customMeta.ogTitle || config.ogTitle,
    'og:description': customMeta.ogDescription || config.ogDescription,
    'og:type': 'website',
    'og:site_name': config.siteName,
    'og:locale': locale === 'zh' ? 'zh_CN' : 'en_US',
    'twitter:card': 'summary_large_image',
    'twitter:title': customMeta.ogTitle || config.ogTitle,
    'twitter:description': customMeta.ogDescription || config.ogDescription,
    'robots': 'index, follow',
    'googlebot': 'index, follow',
    'language': locale === 'zh' ? 'Chinese' : 'English'
  }

  // 更新或创建meta标签
  Object.entries(metaTags).forEach(([name, content]) => {
    const isOgTag = name.startsWith('og:')
    const isTwitterTag = name.startsWith('twitter:')
    const attribute = isOgTag || isTwitterTag ? 'property' : 'name'
    
    let metaTag = document.querySelector(`meta[${attribute}="${name}"]`)
    
    if (!metaTag) {
      metaTag = document.createElement('meta')
      metaTag.setAttribute(attribute, name)
      document.head.appendChild(metaTag)
    }
    
    metaTag.setAttribute('content', content)
  })
}

// 更新HTML lang属性
export function updateHtmlLang() {
  const locale = i18n.locale.value
  document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
}

// 生成结构化数据 (JSON-LD)
export function generateStructuredData() {
  const locale = i18n.locale.value
  const config = seoConfig[locale]
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    'name': locale === 'zh' ? '麓鸣教育集团' : 'Lumina Education Group',
    'alternateName': 'Lumina Education',
    'description': config.description,
    'url': window.location.origin,
    'logo': `${window.location.origin}/images/logo.png`,
    'foundingDate': '2020',
    'address': [
      {
        '@type': 'PostalAddress',
        'streetAddress': '香港特别行政区 油尖旺区港威大厦1804',
        'addressLocality': '香港',
        'addressCountry': 'HK'
      },
      {
        '@type': 'PostalAddress',
        'streetAddress': '上海市徐汇区 瑞平路899号 上海阳光滨江中心2209',
        'addressLocality': '上海',
        'addressRegion': '上海市',
        'addressCountry': 'CN'
      },
      {
        '@type': 'PostalAddress',
        'streetAddress': '535 Smithe St',
        'addressLocality': 'Vancouver',
        'addressCountry': 'CA'
      },
      {
        '@type': 'PostalAddress',
        'streetAddress': '14 Wells View Drive',
        'addressLocality': 'London',
        'addressCountry': 'GB'
      }
    ],
    'contactPoint': {
      '@type': 'ContactPoint',
      'email': 'lumina.education.institute@gmail.com',
      'contactType': 'Customer Service',
      'availableLanguage': ['Chinese', 'English']
    },
    'sameAs': [
      // 添加社交媒体链接
    ],
    'areaServed': [
      { '@type': 'Country', 'name': 'China' },
      { '@type': 'Country', 'name': 'Hong Kong' },
      { '@type': 'Country', 'name': 'United Kingdom' },
      { '@type': 'Country', 'name': 'Canada' }
    ],
    'serviceType': locale === 'zh' 
      ? ['教育咨询', 'AI科技研发', '留学规划', '国际课程', '企业赋能']
      : ['Education Consulting', 'AI Technology R&D', 'Study Abroad Planning', 'International Curriculum', 'Enterprise Empowerment']
  }

  // 移除现有的结构化数据
  const existingScript = document.querySelector('script[type="application/ld+json"]')
  if (existingScript) {
    existingScript.remove()
  }

  // 添加新的结构化数据
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(structuredData)
  document.head.appendChild(script)
}

// 初始化所有SEO优化
export function initSEO(customMeta = {}) {
  updateTitle(customMeta.title)
  updateMetaTags(customMeta)
  updateHtmlLang()
  generateStructuredData()
}

// 监听语言变化并更新SEO
export function watchLanguageChange() {
  // 使用i18n的响应式locale
  const stopWatch = i18n.watch(() => i18n.locale.value, () => {
    initSEO()
  })
  
  return stopWatch
}
