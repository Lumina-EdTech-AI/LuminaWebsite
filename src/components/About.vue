<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">{{ i18n.t('about.title') }}</h2>
      <div class="about-content">
        <p data-aos="fade-up" data-aos-delay="100">
          {{ i18n.t('about.intro1') }}
        </p>
        <p data-aos="fade-up" data-aos-delay="200">
          {{ i18n.t('about.intro2') }}
        </p>
        <p data-aos="fade-up" data-aos-delay="300">
          {{ i18n.t('about.intro3') }}
        </p>

        <div class="ai-research" data-aos="fade-up" data-aos-delay="400">
          <h3>{{ i18n.t('about.aiResearch.title') }}</h3>
          <p>{{ i18n.t('about.aiResearch.desc1') }}</p>
          <p>{{ i18n.t('about.aiResearch.desc2') }}</p>
        </div>

        <div class="education-consulting" data-aos="fade-up" data-aos-delay="450">
          <h3>{{ i18n.t('about.eduConsulting.title') }}</h3>
          <p>{{ i18n.t('about.eduConsulting.desc1') }}</p>
          <p>{{ i18n.t('about.eduConsulting.desc2') }}</p>
        </div>

        <div class="values">
          <div class="value" data-aos="zoom-in" data-aos-delay="500">
            <h4>{{ i18n.t('about.values.innovation.title') }}</h4>
            <p>{{ i18n.t('about.values.innovation.desc') }}</p>
          </div>
          <div class="value" data-aos="zoom-in" data-aos-delay="600">
            <h4>{{ i18n.t('about.values.excellence.title') }}</h4>
            <p>{{ i18n.t('about.values.excellence.desc') }}</p>
          </div>
          <div class="value" data-aos="zoom-in" data-aos-delay="700">
            <h4>{{ i18n.t('about.values.global.title') }}</h4>
            <p>{{ i18n.t('about.values.global.desc') }}</p>
          </div>
        </div>

        <div class="explore-more" data-aos="fade-up" data-aos-delay="800">
          <router-link to="/company" class="btn-explore">
            {{ i18n.t('about.exploreMore') }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import i18n from '../i18n/index.js'
</script>

<style scoped>
.explore-more {
  text-align: center;
  margin-top: 50px;
}

.btn-explore {
  display: inline-block;
  padding: 15px 40px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  transition: all 0.3s;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.btn-explore:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
}
</style>
