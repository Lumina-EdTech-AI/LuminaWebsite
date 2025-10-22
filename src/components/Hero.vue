<template>
  <section id="hero" class="hero">
    <div class="swiper hero-slider">
      <div class="swiper-wrapper">
        <!-- AI技术研究 -->
        <div class="swiper-slide">
          <div class="slide-inner" style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/slider-ai.png')">
            <div class="container">
              <h1 class="slide-title" data-aos="fade-up">{{ i18n.t('hero.slide1.title') }}</h1>
              <p class="slide-subtitle" data-aos="fade-up" data-aos-delay="200">
                {{ i18n.t('hero.slide1.subtitle') }}
              </p>
              <div class="cta-buttons" data-aos="fade-up" data-aos-delay="400">
                <a href="#services" class="btn btn-primary">{{ i18n.t('hero.slide1.cta1') }}</a>
                <a href="#contact" class="btn btn-secondary">{{ i18n.t('hero.slide1.cta2') }}</a>
              </div>
            </div>
          </div>
        </div>

        <!-- 咨询规划 -->
        <div class="swiper-slide">
          <div class="slide-inner" style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/slider-personal.png')">
            <div class="container">
              <h1 class="slide-title" data-aos="fade-up">{{ i18n.t('hero.slide2.title') }}</h1>
              <p class="slide-subtitle" data-aos="fade-up" data-aos-delay="200">
                {{ i18n.t('hero.slide2.subtitle') }}
              </p>
              <div class="cta-buttons" data-aos="fade-up" data-aos-delay="400">
                <a href="#services" class="btn btn-primary">{{ i18n.t('hero.slide2.cta1') }}</a>
                <a href="#contact" class="btn btn-secondary">{{ i18n.t('hero.slide2.cta2') }}</a>
              </div>
            </div>
          </div>
        </div>

        <!-- 个性化服务&数据分析 -->
        <div class="swiper-slide">
          <div class="slide-inner" style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/slider-data.png')">
            <div class="container">
              <h1 class="slide-title" data-aos="fade-up">{{ i18n.t('hero.slide3.title') }}</h1>
              <p class="slide-subtitle" data-aos="fade-up" data-aos-delay="200">
                {{ i18n.t('hero.slide3.subtitle') }}
              </p>
              <div class="cta-buttons" data-aos="fade-up" data-aos-delay="400">
                <a href="#services" class="btn btn-primary">{{ i18n.t('hero.slide3.cta1') }}</a>
                <a href="#contact" class="btn btn-secondary">{{ i18n.t('hero.slide3.cta2') }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 导航按钮 -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      
      <!-- 分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import i18n from '../i18n/index.js'
import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

onMounted(() => {
  // 初始化轮播图
  new Swiper('.hero-slider', {
    modules: [Navigation, Pagination, Autoplay, EffectFade],
    
    // 启用触摸滑动
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    
    // 启用键盘控制
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    
    // 自动播放
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    
    // 循环模式
    loop: true,
    
    // 切换效果
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    speed: 1000,
    
    // 分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
    // 导航按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
})
</script>
