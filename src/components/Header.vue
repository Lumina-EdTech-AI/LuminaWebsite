<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <img src="/images/logo.png" alt="麓鸣Logo" class="logo-img" />
        <h1>{{ i18n.t('header.title') }}</h1>
      </div>
      <nav class="nav">
        <!-- 首页链接 -->
        <router-link to="/" class="nav-link">{{ i18n.t('header.nav.home') }}</router-link>
        
        <!-- 其他导航 -->
        <a href="#services" @click.prevent="scrollToSection('services')" class="nav-link">{{ i18n.t('header.nav.services') }}</a>
        <a href="#team" @click.prevent="scrollToSection('team')" class="nav-link">{{ i18n.t('header.nav.team') }}</a>
        <a href="#about" @click.prevent="scrollToSection('about')" class="nav-link">{{ i18n.t('header.nav.about') }}</a>
        <a href="#branches" @click.prevent="scrollToSection('branches')" class="nav-link">{{ i18n.t('header.nav.branches') }}</a>
        <a href="#clients" @click.prevent="scrollToSection('clients')" class="nav-link">{{ i18n.t('header.nav.clients') }}</a>
        <a href="#contact" @click.prevent="scrollToSection('contact')" class="nav-link">{{ i18n.t('header.nav.contact') }}</a>
        
        <!-- 语言切换按钮 -->
        <div class="language-switcher">
          <button 
            @click="switchLanguage('zh')" 
            :class="{ active: i18n.locale.value === 'zh' }"
            class="lang-btn"
          >
            中文
          </button>
          <span class="separator">|</span>
          <button 
            @click="switchLanguage('en')" 
            :class="{ active: i18n.locale.value === 'en' }"
            class="lang-btn"
          >
            EN
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import i18n from '../i18n/index.js'
import { trackLinkClick, trackLanguageChange } from '../utils/analytics.js'

const route = useRoute()
const router = useRouter()
const isHomePage = route.name === 'home' || !route.name

const scrollToSection = (sectionId) => {
  // 跟踪导航点击
  trackLinkClick(`#${sectionId}`, sectionId)
  
  // 如果在首页，直接滚动
  if (isHomePage) {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  } else {
    // 如果在副页面，先回到首页，然后滚动
    router.push({
      name: 'home',
      hash: `#${sectionId}`
    }).then(() => {
      // 等待页面加载完成后滚动
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }
      }, 100)
    })
  }
}

const switchLanguage = (lang) => {
  i18n.setLocale(lang)
  // 跟踪语言切换
  trackLanguageChange(lang)
}
</script>

<style scoped>
.header {
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  text-decoration: none;
  color: #667eea;
}

.logo-img {
  height: 40px;
  width: auto;
}

.logo h1 {
  font-size: 1.1rem;
  margin: 0;
  font-weight: 700;
  color: #667eea;
}

.nav {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-link, .nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s;
  font-size: 0.95rem;
}

.nav-link:hover, .nav a:hover {
  color: #667eea;
}

.nav-link.router-link-active {
  color: #667eea;
  border-bottom: 2px solid #667eea;
  padding-bottom: 5px;
}

.language-switcher {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;
}

.lang-btn {
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.3s;
  padding: 5px 0;
}

.lang-btn:hover {
  color: #667eea;
}

.lang-btn.active {
  color: #667eea;
  border-bottom: 2px solid #667eea;
}

.separator {
  color: #ccc;
}

@media (max-width: 768px) {
  .nav {
    gap: 15px;
    flex-direction: column;
    align-items: flex-start;
  }

  .language-switcher {
    margin-left: 0;
    padding-left: 0;
    border-left: none;
  }

  .logo h1 {
    display: none;
  }
}
</style>
