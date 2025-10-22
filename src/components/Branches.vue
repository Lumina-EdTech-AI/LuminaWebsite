<template>
  <section id="branches" class="branches">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">{{ i18n.t('branches.title') }}</h2>
      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
        {{ i18n.t('branches.subtitle') }}
      </p>
      
      <!-- 办公室图片展示 -->
      <div class="office-images" data-aos="fade-up" data-aos-delay="150">
        <img src="/images/office-1.webp" alt="办公环境" />
        <img src="/images/office-2.jpg" alt="办公环境" />
        <img src="/images/office-3.jpg" alt="办公环境" />
        <img src="/images/office-4.jpg" alt="办公环境" />
        <img src="/images/office-5.jpg" alt="办公环境" />
        <img src="/images/office-6.jpg" alt="办公环境" />
      </div>
    </div>
  </section>
</template>

<script setup>
import i18n from '../i18n/index.js'
</script>
