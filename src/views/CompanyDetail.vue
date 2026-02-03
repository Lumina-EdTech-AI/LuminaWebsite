<template>
  <div class="company-detail">
    <!-- 导航面包屑 -->
    <div class="breadcrumb">
      <div class="container">
        <router-link to="/">{{ i18n.t('common.home') }}</router-link>
        <span>/</span>
        <router-link to="/#about">{{ i18n.t('about.title') }}</router-link>
        <span>/</span>
        <span>{{ i18n.t('companyDetail.title') }}</span>
      </div>
    </div>

    <div class="company-detail-content">
      <!-- Hero Section -->
      <div class="hero-section" style="background-image: url('/images/illustrations/company.webp'); background-size: cover; background-position: center;">
        <div class="hero-overlay"></div>
        <div class="container" data-aos="fade-up">
          <div class="hero-content">
            <h1 class="company-name">{{ company.basic.name }}</h1>
            <h2 class="company-name-en">{{ company.basic.nameEn }}</h2>
            <p class="company-slogan">{{ company.basic.slogan }}</p>
            <p class="company-slogan-en">{{ company.basic.sloganEn }}</p>
            <p class="company-description">{{ company.basic.description }}</p>
            <p class="company-description-en">{{ company.basic.descriptionEn }}</p>
          </div>
        </div>
      </div>

      <!-- 使命、愿景、价值观 -->
      <section class="section mvv-section">
        <div class="container">
          <div class="mvv-grid">
            <!-- 使命 -->
            <div class="mvv-card mission-card" data-aos="fade-up">
              <div class="mvv-header">
                <h3>{{ company.mission.title }}</h3>
                <h4>{{ company.mission.titleEn }}</h4>
              </div>
              <p class="mvv-content">{{ company.mission.content }}</p>
              <p class="mvv-content mvv-en">{{ company.mission.contentEn }}</p>
            </div>

            <!-- 愿景 -->
            <div class="mvv-card vision-card" data-aos="fade-up" data-aos-delay="100">
              <div class="mvv-header">
                <h3>{{ company.vision.title }}</h3>
                <h4>{{ company.vision.titleEn }}</h4>
              </div>
              <p class="mvv-content">{{ company.vision.content }}</p>
              <p class="mvv-content mvv-en">{{ company.vision.contentEn }}</p>
            </div>
          </div>

          <!-- 核心价值观 -->
          <h2 class="section-title values-title" data-aos="fade-up">{{ i18n.t('companyDetail.coreValues') }}</h2>
          <div class="values-grid">
            <div v-for="(value, index) in company.coreValues"
                 :key="index"
                 class="value-card"
                 data-aos="zoom-in"
                 :data-aos-delay="100 * index">
              <div class="value-icon">{{ value.icon }}</div>
              <h3>{{ value.title }}</h3>
              <h4>{{ value.titleEn }}</h4>
              <p>{{ value.description }}</p>
              <p class="value-en">{{ value.descriptionEn }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 公司历史Timeline -->
      <section class="section history-section">
        <div class="container">
          <h2 class="section-title">{{ i18n.t('companyDetail.history') }}</h2>
          <div class="history-timeline">
            <div v-for="(event, index) in company.history"
                 :key="index"
                 :class="['history-item', index % 2 === 0 ? 'left' : 'right']"
                 data-aos="fade-up"
                 :data-aos-delay="50 * index">
              <div class="timeline-marker">
                <span class="milestone">{{ event.milestone }}</span>
              </div>
              <div class="timeline-content">
                <div class="year">{{ event.year }}</div>
                <h3>{{ event.title }}</h3>
                <h4>{{ event.titleEn }}</h4>
                <p>{{ event.description }}</p>
                <p class="timeline-en">{{ event.descriptionEn }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 核心竞争力 -->
      <section class="section competencies-section">
        <div class="container">
          <h2 class="section-title">{{ i18n.t('companyDetail.competencies') }}</h2>
          <div class="competencies-grid">
            <div v-for="(comp, index) in company.competencies"
                 :key="index"
                 class="competency-card"
                 data-aos="flip-left"
                 :data-aos-delay="100 * index">
              <div class="comp-icon">{{ comp.icon }}</div>
              <h3>{{ comp.title }}</h3>
              <h4>{{ comp.titleEn }}</h4>
              <ul class="comp-features">
                <li v-for="(feature, i) in comp.features"
                    :key="i">
                  {{ feature }}
                </li>
              </ul>
              <ul class="comp-features comp-features-en">
                <li v-for="(feature, i) in comp.featuresEn"
                    :key="i">
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 公司数据统计 -->
      <section class="section statistics-section">
        <div class="container">
          <h2 class="section-title">{{ i18n.t('companyDetail.statistics') }}</h2>
          <div class="statistics-grid">
            <div v-for="(stat, index) in company.statistics"
                 :key="index"
                 class="stat-card"
                 data-aos="fade-up"
                 :data-aos-delay="50 * index">
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
              <div class="stat-label-en">{{ stat.labelEn }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 组织架构 -->
      <section class="section organization-section">
        <div class="container">
          <h2 class="section-title">{{ company.organization.title }}</h2>
          <div class="org-grid">
            <div v-for="(dept, index) in company.organization.departments"
                 :key="index"
                 class="dept-card"
                 data-aos="fade-up"
                 :data-aos-delay="100 * index">
              <h3>{{ dept.name }}</h3>
              <h4>{{ dept.nameEn }}</h4>
              <ul class="dept-roles">
                <li v-for="(role, i) in dept.roles"
                    :key="i">
                  <span class="role-title">{{ role.title }}</span>
                  <span v-if="role.subtitle" class="role-subtitle">{{ role.subtitle }}</span>
                  <span v-if="role.name" class="role-name">{{ role.name }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 社会责任 -->
      <section class="section responsibility-section">
        <div class="container">
          <h2 class="section-title">{{ i18n.t('companyDetail.socialResponsibility') }}</h2>
          <div class="responsibility-grid">
            <div v-for="(item, index) in company.socialResponsibility"
                 :key="index"
                 class="responsibility-card"
                 data-aos="fade-up"
                 :data-aos-delay="100 * index">
              <h3>{{ item.title }}</h3>
              <h4>{{ item.titleEn }}</h4>
              <p>{{ item.description }}</p>
              <p class="resp-en">{{ item.descriptionEn }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 返回 -->
      <section class="section back-section">
        <div class="container">
          <router-link to="/#about" class="btn-back">
            {{ i18n.t('common.backToAbout') }}
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import i18n from '../i18n/index.js'
import companyInfo from '../data/company-info.js'
import AOS from 'aos'

const company = companyInfo

// 初始化AOS动画
onMounted(() => {
  setTimeout(() => {
    AOS.refresh()
  }, 100)
})
</script>

<style scoped>
/* ===== 全局样式 ===== */
.company-detail {
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section {
  padding: 80px 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
  color: #1a1a1a;
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
  transition: color 0.3s;
}

.breadcrumb a:hover {
  color: #004499;
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
}

.hero-content {
  text-align: center;
}

.company-name {
  font-size: 3rem;
  margin-bottom: 10px;
  line-height: 1.2;
}

.company-name-en {
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 30px;
  opacity: 0.9;
}

.company-slogan {
  font-size: 1.3rem;
  font-style: italic;
  margin-bottom: 15px;
  line-height: 1.6;
}

.company-slogan-en {
  font-size: 1.1rem;
  opacity: 0.8;
  margin-bottom: 30px;
}

.company-description {
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 15px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.company-description-en {
  font-size: 0.95rem;
  opacity: 0.85;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* ===== MVV Section ===== */
.mvv-section {
  background: #f9f9f9;
}

.mvv-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
}

.mvv-card {
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.mvv-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.mvv-header h3 {
  font-size: 1.8rem;
  color: #667eea;
  margin-bottom: 8px;
}

.mvv-header h4 {
  font-size: 1.2rem;
  color: #999;
  font-weight: 400;
  margin-bottom: 20px;
}

.mvv-content {
  font-size: 1rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 15px;
}

.mvv-en {
  font-size: 0.95rem;
  color: #555;
  font-style: italic;
}

.values-title {
  margin-top: 40px;
  margin-bottom: 40px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 30px;
}

.value-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.value-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.value-card h3 {
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.value-card h4 {
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 15px;
  opacity: 0.9;
}

.value-card p {
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 10px;
}

.value-en {
  font-size: 0.85rem;
  opacity: 0.8;
  font-style: italic;
}

/* ===== History Timeline ===== */
.history-section {
  background: #f9f9f9;
}

.history-timeline {
  position: relative;
  padding: 40px 0;
}

.history-timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, #667eea, #764ba2);
  transform: translateX(-50%);
}

.history-item {
  position: relative;
  margin-bottom: 50px;
  display: flex;
  gap: 40px;
}

.history-item.left {
  flex-direction: row;
  padding-right: 52%;
  text-align: right;
}

.history-item.right {
  flex-direction: row-reverse;
  padding-left: 52%;
  text-align: left;
}

.timeline-marker {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  z-index: 2;
}

.milestone {
  display: inline-block;
  font-size: 1.5rem;
  width: 50px;
  height: 50px;
  background: white;
  border: 4px solid #667eea;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 5px #f9f9f9;
}

.timeline-content {
  flex-grow: 1;
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.year {
  font-size: 1.3rem;
  font-weight: bold;
  color: #667eea;
  margin-bottom: 10px;
}

.timeline-content h3 {
  font-size: 1.1rem;
  margin-bottom: 5px;
  color: #333;
}

.timeline-content h4 {
  font-size: 0.9rem;
  color: #999;
  font-weight: 400;
  margin-bottom: 12px;
}

.timeline-content p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 8px;
}

.timeline-en {
  font-size: 0.9rem;
  color: #777;
  font-style: italic;
}

/* ===== 竞争力 ===== */
.competencies-section {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.competencies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.competency-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.competency-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.comp-icon {
  font-size: 2rem;
  margin-bottom: 15px;
}

.competency-card h3 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 5px;
}

.competency-card h4 {
  font-size: 0.9rem;
  color: #999;
  font-weight: 400;
  margin-bottom: 15px;
}

.comp-features {
  list-style: none;
  padding: 0;
  font-size: 0.9rem;
  line-height: 1.8;
  color: #555;
}

.comp-features li {
  padding-left: 20px;
  position: relative;
  margin-bottom: 8px;
}

.comp-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.comp-features-en {
  font-size: 0.85rem;
  color: #777;
  font-style: italic;
  margin-top: 12px;
}

/* ===== 统计数据 ===== */
.statistics-section {
  background: white;
}

.statistics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
}

.stat-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  transition: all 0.3s;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-value {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 1rem;
  margin-bottom: 5px;
  font-weight: 500;
}

.stat-label-en {
  font-size: 0.85rem;
  opacity: 0.9;
  font-style: italic;
}

/* ===== 组织架构 ===== */
.organization-section {
  background: #f9f9f9;
}

.org-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.dept-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  border-left: 4px solid #667eea;
}

.dept-card h3 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 8px;
}

.dept-card h4 {
  font-size: 0.9rem;
  color: #999;
  margin-bottom: 15px;
}

.dept-roles {
  list-style: none;
  padding: 0;
  font-size: 0.9rem;
}

.dept-roles li {
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.role-title {
  color: #667eea;
  font-weight: 500;
}

.role-subtitle {
  color: #999;
  font-size: 0.8rem;
}

.role-name {
  color: #333;
  font-size: 0.85rem;
}

/* ===== 社会责任 ===== */
.responsibility-section {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
}

.responsibility-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.responsibility-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.responsibility-card:hover {
  transform: translateY(-5px);
}

.responsibility-card h3 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 8px;
}

.responsibility-card h4 {
  font-size: 0.9rem;
  color: #999;
  margin-bottom: 15px;
}

.responsibility-card p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 10px;
}

.resp-en {
  font-size: 0.9rem;
  color: #777;
  font-style: italic;
}

/* ===== 返回 ===== */
.back-section {
  text-align: center;
  padding: 60px 0;
}

.btn-back {
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

.btn-back:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
}

/* ===== 响应式 ===== */
@media (max-width: 768px) {
  .section {
    padding: 50px 0;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .company-name {
    font-size: 2rem;
  }

  .company-name-en {
    font-size: 1.3rem;
  }

  .mvv-grid {
    grid-template-columns: 1fr;
  }

  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .history-timeline::before {
    left: 20px;
  }

  .history-item {
    padding: 0 !important;
    text-align: left !important;
    flex-direction: column !important;
    margin-left: 60px;
  }

  .timeline-marker {
    left: 8px;
  }

  .competencies-grid,
  .responsibility-grid {
    grid-template-columns: 1fr;
  }

  .statistics-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .org-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .statistics-grid {
    grid-template-columns: 1fr;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>
