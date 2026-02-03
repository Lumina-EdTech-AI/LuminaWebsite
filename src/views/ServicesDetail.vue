<template>
  <div class="services-detail">
    <!-- 导航面包屑 -->
    <div class="breadcrumb">
      <div class="container">
        <router-link to="/">{{ i18n.t('common.home') }}</router-link>
        <span>/</span>
        <span>{{ i18n.t('servicesDetail.services') }}</span>
      </div>
    </div>

    <!-- Hero Section -->
    <div class="hero-section" style="background-image: url('/images/illustrations/services.webp'); background-size: cover; background-position: center;">
      <div class="hero-overlay"></div>
      <div class="container" data-aos="fade-up">
        <div class="hero-content">
          <h1>{{ i18n.t('servicesDetail.title') }}</h1>
          <p>{{ i18n.t('servicesDetail.subtitle') }}</p>
        </div>
      </div>
    </div>

    <!-- 服务卡片网格 -->
    <section class="services-grid-section">
      <div class="container">
        <div class="services-grid">
          <!-- 1. 国际教育咨询 -->
          <div class="service-card" data-aos="zoom-in" data-aos-delay="0">
            <div class="service-icon">🌍</div>
            <h2>{{ i18n.t('servicesDetail.eduConsulting.title') }}</h2>
            <p>{{ i18n.t('servicesDetail.eduConsulting.desc') }}</p>
            <div class="service-features">
              <ul>
                <li>{{ i18n.t('servicesDetail.eduConsulting.feature1') }}</li>
                <li>{{ i18n.t('servicesDetail.eduConsulting.feature2') }}</li>
                <li>{{ i18n.t('servicesDetail.eduConsulting.feature3') }}</li>
              </ul>
            </div>
          </div>

          <!-- 2. AI科技研发 -->
          <div class="service-card" data-aos="zoom-in" data-aos-delay="100">
            <div class="service-icon">🤖</div>
            <h2>{{ i18n.t('servicesDetail.aiTech.title') }}</h2>
            <p>{{ i18n.t('servicesDetail.aiTech.desc') }}</p>
            <div class="service-features">
              <ul>
                <li>{{ i18n.t('servicesDetail.aiTech.feature1') }}</li>
                <li>{{ i18n.t('servicesDetail.aiTech.feature2') }}</li>
                <li>{{ i18n.t('servicesDetail.aiTech.feature3') }}</li>
              </ul>
            </div>
          </div>

          <!-- 3. 企业数字化赋能 -->
          <div class="service-card" data-aos="zoom-in" data-aos-delay="200">
            <div class="service-icon">💼</div>
            <h2>{{ i18n.t('servicesDetail.digitalization.title') }}</h2>
            <p>{{ i18n.t('servicesDetail.digitalization.desc') }}</p>
            <div class="service-features">
              <ul>
                <li>{{ i18n.t('servicesDetail.digitalization.feature1') }}</li>
                <li>{{ i18n.t('servicesDetail.digitalization.feature2') }}</li>
                <li>{{ i18n.t('servicesDetail.digitalization.feature3') }}</li>
              </ul>
            </div>
          </div>

          <!-- 4. 国际课程体系 -->
          <div class="service-card" data-aos="zoom-in" data-aos-delay="300">
            <div class="service-icon">📚</div>
            <h2>{{ i18n.t('servicesDetail.curriculum.title') }}</h2>
            <p>{{ i18n.t('servicesDetail.curriculum.desc') }}</p>
            <div class="service-features">
              <ul>
                <li>{{ i18n.t('servicesDetail.curriculum.feature1') }}</li>
                <li>{{ i18n.t('servicesDetail.curriculum.feature2') }}</li>
                <li>{{ i18n.t('servicesDetail.curriculum.feature3') }}</li>
              </ul>
            </div>
          </div>

          <!-- 5. 留学规划指导 -->
          <div class="service-card" data-aos="zoom-in" data-aos-delay="400">
            <div class="service-icon">🎓</div>
            <h2>{{ i18n.t('servicesDetail.studyAbroad.title') }}</h2>
            <p>{{ i18n.t('servicesDetail.studyAbroad.desc') }}</p>
            <div class="service-features">
              <ul>
                <li>{{ i18n.t('servicesDetail.studyAbroad.feature1') }}</li>
                <li>{{ i18n.t('servicesDetail.studyAbroad.feature2') }}</li>
                <li>{{ i18n.t('servicesDetail.studyAbroad.feature3') }}</li>
              </ul>
            </div>
          </div>

          <!-- 6. 科研项目与竞赛 -->
          <div class="service-card" data-aos="zoom-in" data-aos-delay="500">
            <div class="service-icon">🏆</div>
            <h2>{{ i18n.t('servicesDetail.research.title') }}</h2>
            <p>{{ i18n.t('servicesDetail.research.desc') }}</p>
            <div class="service-features">
              <ul>
                <li>{{ i18n.t('servicesDetail.research.feature1') }}</li>
                <li>{{ i18n.t('servicesDetail.research.feature2') }}</li>
                <li>{{ i18n.t('servicesDetail.research.feature3') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 为什么选择我们 -->
    <section class="why-choose-section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">{{ i18n.t('servicesDetail.whyChoose.title') }}</h2>
        <div class="why-grid">
          <div class="why-item" data-aos="fade-up" data-aos-delay="0">
            <div class="why-icon">⭐</div>
            <h3>{{ i18n.t('servicesDetail.whyChoose.item1.title') }}</h3>
            <p>{{ i18n.t('servicesDetail.whyChoose.item1.desc') }}</p>
          </div>
          <div class="why-item" data-aos="fade-up" data-aos-delay="100">
            <div class="why-icon">🎯</div>
            <h3>{{ i18n.t('servicesDetail.whyChoose.item2.title') }}</h3>
            <p>{{ i18n.t('servicesDetail.whyChoose.item2.desc') }}</p>
          </div>
          <div class="why-item" data-aos="fade-up" data-aos-delay="200">
            <div class="why-icon">🌐</div>
            <h3>{{ i18n.t('servicesDetail.whyChoose.item3.title') }}</h3>
            <p>{{ i18n.t('servicesDetail.whyChoose.item3.desc') }}</p>
          </div>
          <div class="why-item" data-aos="fade-up" data-aos-delay="300">
            <div class="why-icon">💪</div>
            <h3>{{ i18n.t('servicesDetail.whyChoose.item4.title') }}</h3>
            <p>{{ i18n.t('servicesDetail.whyChoose.item4.desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我们CTA -->
    <section class="cta-section">
      <div class="container">
        <h2 data-aos="fade-up">{{ i18n.t('servicesDetail.cta.title') }}</h2>
        <p data-aos="fade-up" data-aos-delay="100">{{ i18n.t('servicesDetail.cta.desc') }}</p>
        <router-link to="/contact" class="btn-primary" data-aos="fade-up" data-aos-delay="200">
          {{ i18n.t('servicesDetail.cta.button') }}
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import i18n from '../i18n/index.js'
import { onMounted } from 'vue'
import AOS from 'aos'

onMounted(() => {
  AOS.refresh()
})
</script>

<style scoped>
/* ===== 全局样式 ===== */
.services-detail {
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* ===== 面包屑 ===== */
.breadcrumb {
  padding: 20px 0;
  background: #f5f5f5;
  border-bottom: 1px solid #eee;
  font-size: 0.9rem;
}

.breadcrumb a {
  color: #0066cc;
  text-decoration: none;
}

.breadcrumb span {
  margin: 0 10px;
  color: #999;
}

/* ===== Hero Section ===== */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 100px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(102, 126, 234, 0.4);
  backdrop-filter: blur(1px);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 10;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: bold;
}

.hero-content p {
  font-size: 1.2rem;
  opacity: 0.95;
}

/* ===== 服务卡片网格 ===== */
.services-grid-section {
  padding: 80px 0;
  background: #f9f9f9;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
  color: #1a1a1a;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.service-card {
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
  text-align: center;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.service-card h2 {
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 15px;
}

.service-card p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.service-features ul {
  list-style: none;
  padding: 0;
  text-align: left;
}

.service-features li {
  padding: 8px 0;
  color: #555;
  font-size: 0.9rem;
  border-bottom: 1px solid #f0f0f0;
}

.service-features li:last-child {
  border-bottom: none;
}

.service-features li:before {
  content: "✓ ";
  color: #667eea;
  font-weight: bold;
  margin-right: 8px;
}

/* ===== 为什么选择我们 ===== */
.why-choose-section {
  padding: 80px 0;
  background: white;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 40px;
  margin-top: 50px;
}

.why-item {
  text-align: center;
}

.why-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.why-item h3 {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 12px;
}

.why-item p {
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* ===== CTA Section ===== */
.cta-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 0;
  text-align: center;
}

.cta-section h2 {
  font-size: 2.2rem;
  margin-bottom: 20px;
}

.cta-section p {
  font-size: 1.05rem;
  margin-bottom: 30px;
  opacity: 0.95;
}

.btn-primary {
  display: inline-block;
  padding: 15px 50px;
  background: white;
  color: #667eea;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  transition: all 0.3s;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

/* ===== 响应式 ===== */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .cta-section h2 {
    font-size: 1.5rem;
  }
}
</style>
