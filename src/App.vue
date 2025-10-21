<template>
  <div class="app">
    <Header />
    <Hero />
    <Services />
    <About />
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import { useFullPageScroll } from './composables/useFullPageScroll'

// 启用全屏滚动
useFullPageScroll()
</script>
