<template>
  <section id="services" class="services">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">{{ i18n.t('services.title') }}</h2>
      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
        {{ i18n.t('services.subtitle') }}
      </p>
      <div class="services-grid">
        <div class="service-card" data-aos="fade-up" data-aos-delay="200">
          <div class="icon">
            <img src="/images/consultation.png" alt="教育咨询服务" loading="lazy" />
          </div>
          <h3>{{ i18n.t('services.items.consultation.title') }}</h3>
          <p>{{ i18n.t('services.items.consultation.desc') }}</p>
        </div>
        <div class="service-card" data-aos="fade-up" data-aos-delay="300">
          <div class="icon">
            <img src="/images/ai.jpg" alt="AI科技研发" loading="lazy" />
          </div>
          <h3>{{ i18n.t('services.items.ai.title') }}</h3>
          <p>{{ i18n.t('services.items.ai.desc') }}</p>
        </div>
        <div class="service-card" data-aos="fade-up" data-aos-delay="400">
          <div class="icon">
            <img src="/images/digital.png" alt="企业数字化赋能" loading="lazy" />
          </div>
          <h3>{{ i18n.t('services.items.digital.title') }}</h3>
          <p>{{ i18n.t('services.items.digital.desc') }}</p>
        </div>
        <div class="service-card" data-aos="fade-up" data-aos-delay="500">
          <div class="icon">
            <img src="/images/international.png" alt="国际课程体系" loading="lazy" />
          </div>
          <h3>{{ i18n.t('services.items.international.title') }}</h3>
          <p>{{ i18n.t('services.items.international.desc') }}</p>
        </div>
        <div class="service-card" data-aos="fade-up" data-aos-delay="600">
          <div class="icon">
            <img src="/images/study-abroad.png" alt="留学规划指导" loading="lazy" />
          </div>
          <h3>{{ i18n.t('services.items.studyAbroad.title') }}</h3>
          <p>{{ i18n.t('services.items.studyAbroad.desc') }}</p>
        </div>
        <div class="service-card" data-aos="fade-up" data-aos-delay="700">
          <div class="icon">
            <img src="/images/tech.jpg" alt="科研项目与竞赛" loading="lazy" />
          </div>
          <h3>{{ i18n.t('services.items.research.title') }}</h3>
          <p>{{ i18n.t('services.items.research.desc') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import i18n from '../i18n/index.js'
</script>
