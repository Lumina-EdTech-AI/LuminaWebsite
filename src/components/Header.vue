<template>
  <header class="header">
    <div class="container">
      <!-- 左: Logo + 公司名 (可点击返回主页) -->
      <router-link to="/" class="logo-section">
        <img src="/images/logo.png" alt="麓鸣Logo" class="logo-img" />
        <h1 class="company-name">{{ i18n.t('header.title') }}</h1>
      </router-link>

      <!-- 中: Tab导航 -->
      <nav class="nav-tabs">
        <a href="#services" @click.prevent="scrollToSection('services')" class="nav-tab">
          {{ i18n.t('header.nav.services') }}
        </a>
        <div class="nav-tab-group team-dropdown">
          <a href="#team" @click.prevent="toggleTeamDropdown" class="nav-tab">
            {{ i18n.t('header.nav.team') }}
            <span class="dropdown-arrow">▼</span>
          </a>
          <div v-if="showTeamDropdown" class="dropdown-menu">
            <router-link 
              v-for="member in teamMembers"
              :key="member.id"
              :to="`/team/${member.id}`"
              class="dropdown-item"
              @click="showTeamDropdown = false"
            >
              {{ member.name }}
            </router-link>
          </div>
        </div>
        <a href="#about" @click.prevent="scrollToSection('about')" class="nav-tab">
          {{ i18n.t('header.nav.about') }}
        </a>
        <a href="#branches" @click.prevent="scrollToSection('branches')" class="nav-tab">
          {{ i18n.t('header.nav.branches') }}
        </a>
        <a href="#clients" @click.prevent="scrollToSection('clients')" class="nav-tab">
          {{ i18n.t('header.nav.clients') }}
        </a>
        <a href="#contact" @click.prevent="scrollToSection('contact')" class="nav-tab">
          {{ i18n.t('header.nav.contact') }}
        </a>
      </nav>

      <!-- 右: 语言切换 -->
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
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import i18n from '../i18n/index.js'
import { getTeamMember, getAllTeamMembers } from '../data/team-members.js'

const route = useRoute()
const router = useRouter()
const showTeamDropdown = ref(false)
const teamMembers = ref([])

// 获取团队成员列表
onMounted(() => {
  teamMembers.value = getAllTeamMembers()
})

const isHomePage = () => {
  return route.name === 'home' || !route.name || route.path === '/'
}

const scrollToSection = (sectionId) => {
  // 关闭dropdown
  showTeamDropdown.value = false
  
  if (isHomePage()) {
    // 在首页: 直接滚动
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }, 50)
  } else {
    // 在副页面: 先回到首页，然后滚动
    router.push({
      path: '/',
      hash: `#${sectionId}`
    }).then(() => {
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

const toggleTeamDropdown = () => {
  showTeamDropdown.value = !showTeamDropdown.value
}

const switchLanguage = (lang) => {
  i18n.setLocale(lang)
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
  padding: 15px 40px;
  max-width: 1400px;
  margin: 0 auto;
}

/* 左: Logo + 公司名 */
.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: opacity 0.3s;
}

.logo-section:hover {
  opacity: 0.8;
}

.logo-img {
  height: 40px;
  width: auto;
}

.company-name {
  font-size: 1.1rem;
  margin: 0;
  font-weight: 700;
  color: #667eea;
  white-space: nowrap;
}

/* 中: Tab导航 */
.nav-tabs {
  display: flex;
  align-items: center;
  gap: 35px;
  flex: 1;
  margin: 0 40px;
  justify-content: center;
}

.nav-tab {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
}

.nav-tab:hover {
  color: #667eea;
}

/* Team下拉菜单 */
.team-dropdown {
  position: relative;
}

.dropdown-arrow {
  font-size: 0.7rem;
  transition: transform 0.3s;
}

.team-dropdown:hover .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  margin-top: 8px;
  z-index: 1000;
}

.dropdown-item {
  display: block;
  padding: 12px 20px;
  color: #333;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s;
  border-bottom: 1px solid #f0f0f0;
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item:hover {
  background: #f5f5f5;
  color: #667eea;
  padding-left: 25px;
}

/* 右: 语言切换 */
.language-switcher {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
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

@media (max-width: 1024px) {
  .header .container {
    padding: 15px 20px;
  }

  .nav-tabs {
    gap: 15px;
    margin: 0 15px;
  }

  .company-name {
    display: none;
  }
}

@media (max-width: 768px) {
  .header .container {
    flex-wrap: wrap;
    padding: 10px 15px;
  }

  .nav-tabs {
    order: 3;
    width: 100%;
    margin: 10px 0;
    gap: 10px;
    font-size: 0.85rem;
  }

  .language-switcher {
    font-size: 0.8rem;
  }
}
</style>
