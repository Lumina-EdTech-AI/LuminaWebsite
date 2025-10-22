<template>
  <div class="home">
    <Header />
    <Hero />
    <Services />
    <Team />
    <About />
    <Branches />
    <Clients />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Hero from '../components/Hero.vue'
import Services from '../components/Services.vue'
import Team from '../components/Team.vue'
import About from '../components/About.vue'
import Branches from '../components/Branches.vue'
import Clients from '../components/Clients.vue'
import Testimonials from '../components/Testimonials.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'
import { useFullPageScroll } from '../composables/useFullPageScroll'

// 启用全屏滚动
useFullPageScroll()
</script>
