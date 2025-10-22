<template>
  <section id="hero" class="hero">
    <div class="swiper hero-slider">
      <div class="swiper-wrapper">
        <!-- AI技术研究 -->
        <div class="swiper-slide">
          <div class="slide-inner" style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/slider-ai.png')">
            <div class="container">
              <h1 class="slide-title" data-aos="fade-up">AI技术研究</h1>
              <p class="slide-subtitle" data-aos="fade-up" data-aos-delay="200">
                AI数字人 · AI教师 · AI批改 · AI智能生成试卷等
              </p>
              <div class="cta-buttons" data-aos="fade-up" data-aos-delay="400">
                <a href="#services" class="btn btn-primary">探索更多</a>
                <a href="#contact" class="btn btn-secondary">联系我们</a>
              </div>
            </div>
          </div>
        </div>

        <!-- 咨询规划 -->
        <div class="swiper-slide">
          <div class="slide-inner" style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/slider-personal.png')">
            <div class="container">
              <h1 class="slide-title" data-aos="fade-up">咨询规划</h1>
              <p class="slide-subtitle" data-aos="fade-up" data-aos-delay="200">
                留学咨询 · 学习路径规划 · 出国指导
              </p>
              <div class="cta-buttons" data-aos="fade-up" data-aos-delay="400">
                <a href="#services" class="btn btn-primary">我们的服务</a>
                <a href="#contact" class="btn btn-secondary">立即咨询</a>
              </div>
            </div>
          </div>
        </div>

        <!-- 个性化服务&数据分析 -->
        <div class="swiper-slide">
          <div class="slide-inner" style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/slider-data.png')">
            <div class="container">
              <h1 class="slide-title" data-aos="fade-up">个性化服务 & 数据分析</h1>
              <p class="slide-subtitle" data-aos="fade-up" data-aos-delay="200">
                个性化学习路径 · 智能数据分析 · 精准学习方案
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
