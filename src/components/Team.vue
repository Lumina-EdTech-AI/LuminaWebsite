<template>
  <section id="team" class="team">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">{{ i18n.t('team.title') }}</h2>
      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
        {{ i18n.t('team.subtitle') }}
      </p>
      <div class="team-grid">
        <router-link to="/team/sissi" class="team-member team-link" data-aos="fade-up" data-aos-delay="200">
          <div class="member-photo">
            <img src="/images/team-sissi.png" alt="马佳茜 Sissi Ma" loading="lazy" />
            <div class="member-overlay">{{ i18n.t('common.viewProfile') }}</div>
          </div>
          <div class="member-info">
            <h3>{{ i18n.t('team.members.sissi.name') }}</h3>
            <p class="member-role">{{ i18n.t('team.members.sissi.role') }}</p>
            <p class="member-desc">{{ i18n.t('team.members.sissi.desc') }}</p>
          </div>
        </router-link>
        
        <router-link to="/team/benny" class="team-member team-link" data-aos="fade-up" data-aos-delay="300">
          <div class="member-photo">
            <img src="/images/team-benny.png" alt="方旋 Benny Fang" loading="lazy" />
            <div class="member-overlay">{{ i18n.t('common.viewProfile') }}</div>
          </div>
          <div class="member-info">
            <h3>{{ i18n.t('team.members.benny.name') }}</h3>
            <p class="member-role">{{ i18n.t('team.members.benny.role') }}</p>
            <p class="member-desc">{{ i18n.t('team.members.benny.desc') }}</p>
          </div>
        </router-link>
        
        <router-link to="/team/david" class="team-member team-link" data-aos="fade-up" data-aos-delay="400">
          <div class="member-photo">
            <img src="/images/team-david.png" alt="David Fang" loading="lazy" />
            <div class="member-overlay">{{ i18n.t('common.viewProfile') }}</div>
          </div>
          <div class="member-info">
            <h3>{{ i18n.t('team.members.david.name') }}</h3>
            <p class="member-role">{{ i18n.t('team.members.david.role') }}</p>
            <p class="member-desc">{{ i18n.t('team.members.david.desc') }}</p>
          </div>
        </router-link>

        <router-link to="/team/qiu" class="team-member team-link" data-aos="fade-up" data-aos-delay="500">
          <div class="member-photo">
            <img src="/images/team-qiu.jpg" alt="裘玲霞博士" loading="lazy" />
            <div class="member-overlay">{{ i18n.t('common.viewProfile') }}</div>
          </div>
          <div class="member-info">
            <h3>{{ i18n.t('team.members.qiu.name') }}</h3>
            <p class="member-role">{{ i18n.t('team.members.qiu.role') }}</p>
            <p class="member-desc">{{ i18n.t('team.members.qiu.desc') }}</p>
          </div>
        </router-link>

        <router-link to="/team/anderson" class="team-member team-link" data-aos="fade-up" data-aos-delay="600">
          <div class="member-photo">
            <img src="/images/team-professor.png" alt="Dr. Robert Anderson" loading="lazy" />
            <div class="member-overlay">{{ i18n.t('common.viewProfile') }}</div>
          </div>
          <div class="member-info">
            <h3>{{ i18n.t('team.members.anderson.name') }}</h3>
            <p class="member-role">{{ i18n.t('team.members.anderson.role') }}</p>
            <p class="member-desc">{{ i18n.t('team.members.anderson.desc') }}</p>
          </div>
        </router-link>

        <router-link to="/team/mitchell" class="team-member team-link" data-aos="fade-up" data-aos-delay="700">
          <div class="member-photo">
            <img src="/images/team-female.png" alt="Dr. Jennifer Mitchell" loading="lazy" />
            <div class="member-overlay">{{ i18n.t('common.viewProfile') }}</div>
          </div>
          <div class="member-info">
            <h3>{{ i18n.t('team.members.mitchell.name') }}</h3>
            <p class="member-role">{{ i18n.t('team.members.mitchell.role') }}</p>
            <p class="member-desc">{{ i18n.t('team.members.mitchell.desc') }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import i18n from '../i18n/index.js'
</script>

<style scoped>
.team {
  padding: 60px 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #1a1a1a;
}

.section-subtitle {
  text-align: center;
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 50px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.team-member {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
}

.team-link {
  cursor: pointer;
}

.team-member:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

.member-photo {
  position: relative;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 1;
  background: #f0f0f0;
}

.member-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.team-link .member-photo img {
  transform-origin: center;
}

.team-link:hover .member-photo img {
  transform: scale(1.1);
}

.member-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(102, 126, 234, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
}

.team-link .member-photo {
  cursor: pointer;
}

.team-link:hover .member-overlay {
  opacity: 1;
}

.member-info {
  padding: 25px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.member-info h3 {
  font-size: 1.3rem;
  margin-bottom: 8px;
  color: #1a1a1a;
}

.member-role {
  color: #667eea;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.member-desc {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
  flex-grow: 1;
}

@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }

  .section-title {
    font-size: 2rem;
  }

  .member-info {
    padding: 20px;
  }

  .member-info h3 {
    font-size: 1.1rem;
  }
}
</style>
