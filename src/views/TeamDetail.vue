<template>
  <div class="team-detail">
    <Header />
    <!-- 导航面包屑 -->
    <div class="breadcrumb">
      <div class="container">
        <router-link to="/">{{ i18n.t('common.home') }}</router-link>
        <span>/</span>
        <router-link to="/#team">{{ i18n.t('team.title') }}</router-link>
        <span>/</span>
        <span v-if="member">{{ member.name }}</span>
      </div>
    </div>

    <!-- 加载中或成员不存在 -->
    <div v-if="!member" class="container team-not-found">
      <h2>{{ i18n.t('common.notFound') }}</h2>
      <router-link to="/#team">{{ i18n.t('common.backToTeam') }}</router-link>
    </div>

    <!-- 团队成员详情 -->
    <div v-else class="team-detail-content">
      <!-- Hero Section -->
      <div class="hero-section">
        <div class="container">
          <div class="hero-grid">
            <div class="hero-image" data-aos="fade-right">
              <img :src="member.avatar" :alt="member.name" class="member-avatar" />
            </div>
            <div class="hero-info" data-aos="fade-left">
              <h1 class="member-name">
                {{ member.name }}
                <span class="name-en">{{ member.nameEn }}</span>
              </h1>
              <div class="member-title">
                <span class="role-badge">{{ member.role }}</span>
                <span class="role-badge role-en">{{ member.roleEn }}</span>
              </div>
              <p class="member-quote">{{ member.quote }}</p>
              <p class="member-quote quote-en">{{ member.quoteEn }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 返回按钮 (顶部) -->
      <div class="back-button-top">
        <div class="container">
          <router-link to="/#team" class="btn-back-top">
            ← {{ i18n.t('common.backToTeam') }}
          </router-link>
        </div>
      </div>

      <!-- 简介 -->
      <section class="section bio-section">
        <div class="container">
          <h2 class="section-title">{{ i18n.t('teamDetail.about') }}</h2>
          <div class="bio-content">
            <p class="bio-text" data-aos="fade-up">{{ member.bio }}</p>
            <p class="bio-text bio-en" data-aos="fade-up" data-aos-delay="100">{{ member.bioEn }}</p>
          </div>
        </div>
      </section>

      <!-- 教育背景 -->
      <section class="section education-section">
        <div class="container">
          <h2 class="section-title">{{ i18n.t('teamDetail.education') }}</h2>
          <div class="education-timeline">
            <div v-for="(edu, index) in member.background.education"
                 :key="index"
                 class="education-item"
                 data-aos="fade-up"
                 :data-aos-delay="100 * index">
              <div class="edu-marker"></div>
              <div class="edu-content">
                <h3 class="degree">{{ edu.degree }} - {{ edu.field }}</h3>
                <h3 class="degree degree-en">{{ edu.degreeEn }}</h3>
                <p class="university">{{ edu.university }} ({{ edu.year }})</p>
                <p class="university uni-en">{{ edu.universityEn }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 工作经历 -->
      <section class="section experience-section">
        <div class="container">
          <h2 class="section-title">{{ i18n.t('teamDetail.experience') }}</h2>
          <div class="experience-timeline">
            <div v-for="(exp, index) in member.background.experience"
                 :key="index"
                 class="experience-item"
                 data-aos="fade-up"
                 :data-aos-delay="100 * index">
              <div class="exp-marker"></div>
              <div class="exp-content">
                <div class="exp-header">
                  <h3 class="position">{{ exp.position }}</h3>
                  <h3 class="position position-en">{{ exp.positionEn }}</h3>
                  <span class="duration">{{ exp.duration }}</span>
                </div>
                <p class="company">{{ exp.company }}</p>
                <p class="company company-en">{{ exp.companyEn }}</p>
                <p class="description">{{ exp.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 主要成就 -->
      <!-- 返回按钮 -->
      <section class="section back-section">
        <div class="container">
          <router-link to="/#team" class="btn-back">
            ← {{ i18n.t('common.backToTeam') }}
          </router-link>
        </div>
      </section>
            <div v-for="(pub, index) in member.publications"
                 :key="index"
                 class="publication-item"
                 data-aos="fade-up"
                 :data-aos-delay="100 * index">
              <div class="pub-marker">
                <i class="icon-book"></i>
              </div>
              <div class="pub-content">
                <h4 class="pub-title">{{ pub.title }}</h4>
                <h4 class="pub-title pub-title-en">{{ pub.titleEn }}</h4>
                <div class="pub-meta">
                  <span class="pub-type">{{ pub.type }}</span>
                  <span class="pub-type pub-type-en">{{ pub.typeEn }}</span>
                  <span class="pub-year">{{ pub.year }}</span>
                  <span v-if="pub.journal" class="pub-journal">{{ pub.journal }}</span>
                  <span v-if="pub.venue" class="pub-venue">{{ pub.venue }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 返回按钮 -->
      <section class="section back-section">
        <div class="container">
          <router-link to="/#team" class="btn-back">
            ← {{ i18n.t('common.backToTeam') }}
          </router-link>
        </div>
      </section>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import i18n from '../i18n/index.js'
import { getTeamMember } from '../data/team-members.js'
import { useFullPageScroll } from '../composables/useFullPageScroll'
import AOS from 'aos'

const route = useRoute()
const member = ref(null)

// 根据路由参数获取团队成员
function loadMember() {
  const memberId = route.params.id
  const teamMember = getTeamMember(memberId)
  member.value = teamMember
  
  // 页面加载完成后初始化AOS
  if (member.value) {
    setTimeout(() => {
      AOS.refresh()
    }, 100)
  }
}

// 监听路由变化
watch(() => route.params.id, loadMember)

// 启用全屏滚动
useFullPageScroll()

// 初始化
onMounted(() => {
  loadMember()
})
</script>

<style scoped>
/* ===== 全局样式 ===== */
.team-detail {
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
  margin-bottom: 50px;
  text-align: center;
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

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

/* ===== 返回按钮 (顶部) ===== */
.back-button-top {
  background: #f5f5f5;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}

.btn-back-top {
  display: inline-block;
  padding: 10px 25px;
  background: #667eea;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s;
  font-size: 0.95rem;
}

.btn-back-top:hover {
  background: #764ba2;
  transform: translateX(-5px);
}


.hero-image {
  text-align: center;
}

.member-avatar {
  width: 100%;
  max-width: 400px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  object-fit: cover;
  aspect-ratio: 1;
}

.member-name {
  font-size: 2.5rem;
  margin-bottom: 10px;
  line-height: 1.2;
}

.name-en {
  display: block;
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 10px;
  opacity: 0.9;
}

.member-title {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  align-items: center;
}

.role-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
}

.role-en {
  background: rgba(255, 255, 255, 0.1);
  font-size: 0.85rem;
}

.member-quote {
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 15px;
  line-height: 1.6;
  opacity: 0.95;
}

.quote-en {
  font-size: 1rem;
  opacity: 0.8;
}

/* ===== 简介Section ===== */
.bio-section {
  background: #f9f9f9;
}

.bio-content {
  max-width: 900px;
  margin: 0 auto;
}

.bio-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 20px;
  text-align: justify;
}

.bio-en {
  font-size: 1rem;
  color: #555;
  font-style: italic;
}

/* ===== 教育背景Timeline ===== */
.education-timeline {
  position: relative;
  padding: 20px 0;
}

.education-timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, #667eea, #764ba2);
  transform: translateX(-50%);
}

.education-item {
  position: relative;
  margin-bottom: 50px;
}

.education-item:nth-child(odd) {
  text-align: right;
  padding-right: 52%;
}

.education-item:nth-child(even) {
  text-align: left;
  padding-left: 52%;
}

.edu-marker {
  position: absolute;
  left: 50%;
  top: 0;
  width: 20px;
  height: 20px;
  background: #667eea;
  border: 4px solid white;
  border-radius: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0 3px #667eea;
}

.edu-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.degree {
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.degree-en {
  font-size: 0.95rem;
  font-weight: 400;
  color: #666;
}

.university {
  color: #666;
  margin-bottom: 0;
}

.uni-en {
  font-size: 0.9rem;
  color: #999;
  font-style: italic;
}

/* ===== 工作经历 ===== */
.experience-timeline {
  position: relative;
  padding: 20px 0;
}

.experience-timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, #764ba2, #667eea);
}

.experience-item {
  position: relative;
  margin-bottom: 40px;
  padding-left: 50px;
}

.exp-marker {
  position: absolute;
  left: -11.5px;
  top: 0;
  width: 20px;
  height: 20px;
  background: #764ba2;
  border: 4px solid white;
  border-radius: 50%;
  box-shadow: 0 0 0 3px #764ba2;
}

.exp-content {
  background: #f5f5f5;
  padding: 25px;
  border-radius: 10px;
  border-left: 4px solid #667eea;
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
  flex-wrap: wrap;
  gap: 10px;
}

.position {
  font-size: 1.15rem;
  font-weight: bold;
  color: #333;
  margin: 0;
}

.position-en {
  font-size: 0.95rem;
  font-weight: 400;
  color: #666;
}

.duration {
  color: #999;
  font-size: 0.9rem;
  white-space: nowrap;
}

.company {
  color: #667eea;
  font-weight: 500;
  margin-bottom: 5px;
}

.company-en {
  font-size: 0.9rem;
  color: #999;
}

.description {
  color: #555;
  font-size: 0.95rem;
  margin-top: 10px;
}

/* ===== 成就Section ===== */
.achievements-section {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.achievement-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  display: flex;
  gap: 15px;
}

.achievement-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.achievement-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
}

.achievement-text {
  font-size: 0.95rem;
  color: #333;
  line-height: 1.6;
  margin: 0;
}

.achievement-en {
  opacity: 0.8;
}

.achievement-en .achievement-text {
  font-size: 0.9rem;
  color: #555;
}

/* ===== 发表著作 ===== */
.publications-section {
  background: #fafafa;
}

.publications-list {
  max-width: 900px;
  margin: 0 auto;
}

.publication-item {
  display: flex;
  gap: 25px;
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #eee;
}

.publication-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.pub-marker {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.pub-content {
  flex-grow: 1;
}

.pub-title {
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  margin: 0 0 10px 0;
}

.pub-title-en {
  font-size: 0.95rem;
  font-weight: 400;
  color: #666;
}

.pub-meta {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  font-size: 0.85rem;
}

.pub-type {
  background: #667eea;
  color: white;
  padding: 4px 10px;
  border-radius: 4px;
}

.pub-type-en {
  background: #ccc;
  color: #333;
}

.pub-year {
  color: #999;
}

.pub-journal,
.pub-venue {
  color: #667eea;
  font-style: italic;
}

/* ===== 专业领域 ===== */
.expertise-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

.expertise-tag {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 0.9rem;
  transition: all 0.3s;
}

.expertise-tag:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

.expertise-tag-en {
  background: #999;
  opacity: 0.7;
}

/* ===== 兴趣爱好 ===== */
.interests-section {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
}

.interests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.interest-card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.interest-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.interest-icon {
  font-size: 1.8rem;
}

.interest-card p {
  font-size: 0.95rem;
  color: #333;
  margin: 0;
  line-height: 1.4;
}

.interest-card-en p {
  font-size: 0.85rem;
  color: #666;
}

/* ===== 返回团队 ===== */
.back-to-team {
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

/* ===== 404 ===== */
.team-not-found {
  text-align: center;
  padding: 100px 20px;
}

.team-not-found h2 {
  font-size: 2rem;
  color: #999;
  margin-bottom: 30px;
}

.team-not-found a {
  display: inline-block;
  padding: 12px 30px;
  background: #667eea;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  transition: all 0.3s;
}

.team-not-found a:hover {
  background: #764ba2;
}

/* ===== 响应式 ===== */
@media (max-width: 768px) {
  .section {
    padding: 50px 0;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .hero-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .member-name {
    font-size: 1.8rem;
  }

  .name-en {
    font-size: 1.2rem;
  }

  .education-timeline::before,
  .experience-timeline::before {
    left: 15px;
  }

  .education-item,
  .experience-item {
    padding-left: 0 !important;
    padding-right: 0 !important;
    text-align: left !important;
    margin-left: 50px;
  }

  .edu-marker,
  .exp-marker {
    left: 8px !important;
  }

  .achievements-grid {
    grid-template-columns: 1fr;
  }

  .interests-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .exp-header {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .member-avatar {
    max-width: 250px;
  }

  .interests-grid {
    grid-template-columns: 1fr;
  }

  .contact-info {
    width: 100%;
  }

  .contact-link {
    justify-content: center;
    width: 100%;
  }
}
</style>
