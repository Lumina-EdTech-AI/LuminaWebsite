<template>
  <section id="hero" class="hero">
    <div class="swiper hero-slider">
      <div class="swiper-wrapper">
        <!-- 艺术主题 -->
        <div class="swiper-slide">
          <div class="slide-inner" style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/slider1.png')">
            <div class="container">
              <h1 class="slide-title" data-aos="fade-up">艺术教育创新</h1>
              <p class="slide-subtitle" data-aos="fade-up" data-aos-delay="200">
                通过AI技术，重塑艺术教育的未来
              </p>
              <div class="cta-buttons" data-aos="fade-up" data-aos-delay="400">
                <a href="#services" class="btn btn-primary">探索更多</a>
                <a href="#contact" class="btn btn-secondary">联系我们</a>
              </div>
            </div>
          </div>
        </div>

        <!-- 科技主题 -->
        <div class="swiper-slide">
          <div class="slide-inner" style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/slider2.jpg')">
            <div class="container">
              <h1 class="slide-title" data-aos="fade-up">前沿科技赋能</h1>
              <p class="slide-subtitle" data-aos="fade-up" data-aos-delay="200">
                将最新AI技术应用于教育领域
              </p>
              <div class="cta-buttons" data-aos="fade-up" data-aos-delay="400">
                <a href="#services" class="btn btn-primary">我们的服务</a>
                <a href="#contact" class="btn btn-secondary">立即咨询</a>
              </div>
            </div>
          </div>
        </div>

        <!-- 教育主题 -->
        <div class="swiper-slide">
          <div class="slide-inner" style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/slider3.png')">
            <div class="container">
              <h1 class="slide-title" data-aos="fade-up">卓越教育体验</h1>
              <p class="slide-subtitle" data-aos="fade-up" data-aos-delay="200">
                打造个性化、智能化的学习环境
              </p>
              <div class="cta-buttons" data-aos="fade-up" data-aos-delay="400">
                <a href="#services" class="btn btn-primary">了解详情</a>
                <a href="#contact" class="btn btn-secondary">合作咨询</a>
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
