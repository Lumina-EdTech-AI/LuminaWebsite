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

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Services,
    About,
    Contact,
    Footer
  }
}
</script>

<style scoped>
.app {
  background-color: #ffffff;
}
</style>
