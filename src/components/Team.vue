<template>
  <section id="team" class="team">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">{{ i18n.t('team.title') }}</h2>
      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
        {{ i18n.t('team.subtitle') }}
      </p>
      <div class="team-grid">
        <div class="team-member" data-aos="fade-up" data-aos-delay="200">
          <div class="member-photo">
            <img src="/images/team-sissi.png" alt="马佳茜 Sissi Ma" loading="lazy" />
          </div>
          <div class="member-info">
            <h3>{{ i18n.t('team.members.sissi.name') }}</h3>
            <p class="member-role">{{ i18n.t('team.members.sissi.role') }}</p>
            <p class="member-desc">{{ i18n.t('team.members.sissi.desc') }}</p>
          </div>
        </div>
        
        <div class="team-member" data-aos="fade-up" data-aos-delay="300">
          <div class="member-photo">
            <img src="/images/team-benny.png" alt="方旋 Benny Fang" loading="lazy" />
          </div>
          <div class="member-info">
            <h3>{{ i18n.t('team.members.benny.name') }}</h3>
            <p class="member-role">{{ i18n.t('team.members.benny.role') }}</p>
            <p class="member-desc">{{ i18n.t('team.members.benny.desc') }}</p>
          </div>
        </div>
        
        <div class="team-member" data-aos="fade-up" data-aos-delay="400">
          <div class="member-photo">
            <img src="/images/team-david.png" alt="David Fang" loading="lazy" />
          </div>
          <div class="member-info">
            <h3>{{ i18n.t('team.members.david.name') }}</h3>
            <p class="member-role">{{ i18n.t('team.members.david.role') }}</p>
            <p class="member-desc">{{ i18n.t('team.members.david.desc') }}</p>
          </div>
        </div>

        <div class="team-member" data-aos="fade-up" data-aos-delay="500">
          <div class="member-photo">
            <img src="/images/team-qiu.jpg" alt="裘玲霞博士" loading="lazy" />
          </div>
          <div class="member-info">
            <h3>{{ i18n.t('team.members.qiu.name') }}</h3>
            <p class="member-role">{{ i18n.t('team.members.qiu.role') }}</p>
            <p class="member-desc">{{ i18n.t('team.members.qiu.desc') }}</p>
          </div>
        </div>

        <div class="team-member" data-aos="fade-up" data-aos-delay="600">
          <div class="member-photo">
            <img src="/images/team-professor.png" alt="Dr. Robert Anderson" loading="lazy" />
          </div>
          <div class="member-info">
            <h3>{{ i18n.t('team.members.anderson.name') }}</h3>
            <p class="member-role">{{ i18n.t('team.members.anderson.role') }}</p>
            <p class="member-desc">{{ i18n.t('team.members.anderson.desc') }}</p>
          </div>
        </div>

        <div class="team-member" data-aos="fade-up" data-aos-delay="700">
          <div class="member-photo">
            <img src="/images/team-female.png" alt="Dr. Jennifer Mitchell" loading="lazy" />
          </div>
          <div class="member-info">
            <h3>{{ i18n.t('team.members.mitchell.name') }}</h3>
            <p class="member-role">{{ i18n.t('team.members.mitchell.role') }}</p>
            <p class="member-desc">{{ i18n.t('team.members.mitchell.desc') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import i18n from '../i18n/index.js'
</script>
