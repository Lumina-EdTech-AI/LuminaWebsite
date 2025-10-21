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

  const handleWheel = (e) => {
    if (isScrolling) {
      e.preventDefault()
      return
    }

    const delta = e.deltaY
    
    if (delta > 0 && currentSection < sections.length - 1) {
      // 向下滚动
      e.preventDefault()
      scrollToSection(currentSection + 1)
    } else if (delta < 0 && currentSection > 0) {
      // 向上滚动
      e.preventDefault()
      scrollToSection(currentSection - 1)
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
