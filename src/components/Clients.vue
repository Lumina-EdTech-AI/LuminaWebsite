<template>
  <section id="clients" class="clients">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">{{ i18n.t('clients.title') }}</h2>
      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
        {{ i18n.t('clients.subtitle') }}
      </p>

      <!-- 客户学校 -->
      <div class="clients-section">
        <h3 class="subsection-title" data-aos="fade-up" data-aos-delay="200">{{ i18n.t('clients.schoolsTitle') }}</h3>
        <div class="clients-grid">
          <div class="client-card" data-aos="zoom-in" data-aos-delay="250">
            <div class="client-logo">
              <img src="/images/school-cixi-middle.png" alt="慈溪市实验中学" />
            </div>
            <h4>{{ i18n.t('clients.schools.cixiMiddle') }}</h4>
          </div>
          <div class="client-card" data-aos="zoom-in" data-aos-delay="300">
            <div class="client-logo">
              <img src="/images/school-shanghai-no1.png" alt="上海市第一中学" />
            </div>
            <h4>{{ i18n.t('clients.schools.shanghaiNo1') }}</h4>
          </div>
          <div class="client-card" data-aos="zoom-in" data-aos-delay="350">
            <div class="client-logo">
              <img src="/images/school-ningbo-foreign.png" alt="宁波外国语学校" />
            </div>
            <h4>{{ i18n.t('clients.schools.ningboForeign') }}</h4>
          </div>
          <div class="client-card" data-aos="zoom-in" data-aos-delay="400">
            <div class="client-logo">
              <img src="/images/school-cixi-ciji.png" alt="慈溪市慈吉实验中学" />
            </div>
            <h4>{{ i18n.t('clients.schools.cixiCiji') }}</h4>
          </div>
          <div class="client-card" data-aos="zoom-in" data-aos-delay="450">
            <div class="client-logo">
              <img src="/images/school-cixi-guanghua.png" alt="慈溪市光华中学" />
            </div>
            <h4>{{ i18n.t('clients.schools.cixiGuanghua') }}</h4>
          </div>
        </div>
      </div>

      <!-- 合作伙伴 -->
      <div class="partners-section">
        <h3 class="subsection-title" data-aos="fade-up" data-aos-delay="200">{{ i18n.t('clients.partnersTitle') }}</h3>
        <div class="partners-grid">
          <div class="partner-card" data-aos="fade-up" data-aos-delay="250">
            <div class="partner-logo">
              <img src="/images/partner-jyeoo.png" alt="菁优网" />
            </div>
            <h4>{{ i18n.t('clients.partners.jyeoo') }}</h4>
          </div>
          <div class="partner-card" data-aos="fade-up" data-aos-delay="300">
            <div class="partner-logo">
              <img src="/images/partner-yuanfudao.png" alt="猿辅导" />
            </div>
            <h4>{{ i18n.t('clients.partners.yuanfudao') }}</h4>
          </div>
          <div class="partner-card" data-aos="fade-up" data-aos-delay="350">
            <div class="partner-logo">
              <img src="/images/partner-zuoyebang.png" alt="作业帮" />
            </div>
            <h4>{{ i18n.t('clients.partners.zuoyebang') }}</h4>
          </div>
          <div class="partner-card" data-aos="fade-up" data-aos-delay="400">
            <div class="partner-logo">
              <img src="/images/partner-zxxk.png" alt="学科网" />
            </div>
            <h4>{{ i18n.t('clients.partners.zxxk') }}</h4>
          </div>
          <div class="partner-card" data-aos="fade-up" data-aos-delay="450">
            <div class="partner-logo">
              <img src="/images/partner-doushen.png" alt="豆神教育" />
            </div>
            <h4>{{ i18n.t('clients.partners.doushen') }}</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import i18n from '../i18n/index.js'
</script>
