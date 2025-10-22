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
      </div>
    </div>
  </section>
</template>

<script setup>
import i18n from '../i18n/index.js'
</script>
