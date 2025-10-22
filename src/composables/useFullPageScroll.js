import { onMounted, onUnmounted } from 'vue'

export function useFullPageScroll() {
  let currentSection = 0
  let isScrolling = false
  const sections = []

  const scrollToSection = (index) => {
    if (index < 0 || index >= sections.length || isScrolling) return
    
    isScrolling = true
    currentSection = index
    
    const targetSection = sections[index]
    targetSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
    
    setTimeout(() => {
      isScrolling = false
    }, 1000)
  }

  const isAtBottom = () => {
    // 检查页面是否滚动到底部
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    return scrollTop + windowHeight >= documentHeight - 10
  }

  const isAtTop = () => {
    // 检查页面是否在顶部
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    return scrollTop <= 10
  }

  const handleWheel = (e) => {
    if (isScrolling) {
      return
    }

    const delta = e.deltaY
    
    if (delta > 0) {
      // 向下滚动 - 只有滚动到页面底部才切换到下一个section
      if (isAtBottom() && currentSection < sections.length - 1) {
        e.preventDefault()
        scrollToSection(currentSection + 1)
      }
    } else if (delta < 0) {
      // 向上滚动 - 只有在页面顶部才切换到上一个section
      if (isAtTop() && currentSection > 0) {
        e.preventDefault()
        scrollToSection(currentSection - 1)
      }
    }
  }

  const updateCurrentSection = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2
    
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect()
      const sectionTop = rect.top + window.scrollY
      const sectionBottom = sectionTop + section.offsetHeight
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentSection = index
      }
    })
  }

  onMounted(() => {
    // 获取所有section
    sections.push(...document.querySelectorAll('section'))
    
    // 添加滚动监听
    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('scroll', updateCurrentSection, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('wheel', handleWheel)
    window.removeEventListener('scroll', updateCurrentSection)
  })

  return {
    scrollToSection
  }
}
