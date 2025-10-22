<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <img src="/images/logo-deer.png" alt="麓鸣Logo" class="logo-img" />
        <h1>麓鸣教育集团</h1>
      </div>
      <nav class="nav">
        <a href="#hero" @click.prevent="scrollToSection('hero')">首页</a>
        <a href="#services" @click.prevent="scrollToSection('services')">服务</a>
        <a href="#team" @click.prevent="scrollToSection('team')">团队</a>
        <a href="#about" @click.prevent="scrollToSection('about')">关于我们</a>
        <a href="#branches" @click.prevent="scrollToSection('branches')">全球办公室</a>
        <a href="#clients" @click.prevent="scrollToSection('clients')">客户与合作</a>
        <a href="#contact" @click.prevent="scrollToSection('contact')">联系我们</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>
