<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <img src="/images/logo.png" alt="麓鸣Logo" class="logo-img" />
        <h1>{{ i18n.t('header.title') }}</h1>
      </div>
      <nav class="nav">
        <a href="#services" @click.prevent="scrollToSection('services')">{{ i18n.t('header.nav.services') }}</a>
        <a href="#team" @click.prevent="scrollToSection('team')">{{ i18n.t('header.nav.team') }}</a>
        <a href="#about" @click.prevent="scrollToSection('about')">{{ i18n.t('header.nav.about') }}</a>
        <a href="#branches" @click.prevent="scrollToSection('branches')">{{ i18n.t('header.nav.branches') }}</a>
        <a href="#clients" @click.prevent="scrollToSection('clients')">{{ i18n.t('header.nav.clients') }}</a>
        <a href="#contact" @click.prevent="scrollToSection('contact')">{{ i18n.t('header.nav.contact') }}</a>
        
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
import i18n from '../i18n/index.js'

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

const switchLanguage = (lang) => {
  i18n.setLocale(lang)
}
</script>
