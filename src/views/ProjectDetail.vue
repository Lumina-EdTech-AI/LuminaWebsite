<template>
  <div class="project-detail">
    <!-- 导航面包屑 -->
    <div class="breadcrumb">
      <div class="container">
        <router-link to="/">{{ i18n.t('common.home') }}</router-link>
        <span>/</span>
        <router-link to="/projects">{{ i18n.t('projectsDetail.projects') }}</router-link>
        <span>/</span>
        <span v-if="project">{{ project.name }}</span>
      </div>
    </div>

    <!-- 加载中或项目不存在 -->
    <div v-if="!project" class="container project-not-found">
      <h2>{{ i18n.t('common.notFound') }}</h2>
      <router-link to="/projects">{{ i18n.t('projectsDetail.backToProjects') }}</router-link>
    </div>

    <!-- 项目详情 -->
    <div v-else class="project-detail-content">
      <!-- Hero Section -->
      <div class="hero-section">
        <div class="container">
          <div class="hero-grid">
            <div class="hero-image" data-aos="fade-right">
              <img :src="project.image" :alt="project.name" class="project-main-image" />
            </div>
            <div class="hero-info" data-aos="fade-left">
              <div class="project-meta-top">
                <span class="year-badge">{{ project.year }}</span>
                <span class="status-badge" :class="`status-${project.status}`">
                  {{ project.status === 'active' ? '进行中' : '已完成' }}
                </span>
              </div>
              <h1 class="project-title">
                {{ project.name }}
                <span class="title-en">{{ project.nameEn }}</span>
              </h1>
              <p class="project-lead">{{ project.description }}</p>
              <div class="project-category-display">
                <span class="cat-tag">{{ getCategoryName(project.category) }}</span>
              </div>
              <div class="impact-section">
                <h3>{{ i18n.t('projectsDetail.impact') }}</h3>
                <p>{{ project.impact }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 项目概述 -->
      <section class="section overview-section">
        <div class="container">
          <h2 class="section-title">{{ i18n.t('projectsDetail.overview') }}</h2>
          <p class="overview-text">{{ project.longDescription }}</p>
        </div>
      </section>

      <!-- 核心特性 -->
      <section class="section features-section">
        <div class="container">
          <h2 class="section-title">{{ i18n.t('projectsDetail.features') }}</h2>
          <div class="features-grid">
            <div v-for="(feature, index) in project.features"
                 :key="index"
                 class="feature-item"
                 data-aos="zoom-in"
                 :data-aos-delay="50 * index">
              <div class="feature-icon">✨</div>
              <h3>{{ feature }}</h3>
              <p class="feature-en">{{ project.featuresEn[index] }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 关键指标 -->
      <section class="section metrics-section">
        <div class="container">
          <h2 class="section-title">{{ i18n.t('projectsDetail.metrics') }}</h2>
          <div class="metrics-grid">
            <div v-for="(metric, index) in project.metrics"
                 :key="index"
                 class="metric-card"
                 data-aos="fade-up"
                 :data-aos-delay="50 * index">
              <div class="metric-icon">{{ metric.icon }}</div>
              <div class="metric-value">{{ metric.value }}</div>
              <div class="metric-label">{{ metric.label }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 技术栈 -->
      <section class="section tech-section">
        <div class="container">
          <h2 class="section-title">{{ i18n.t('projectsDetail.technologies') }}</h2>
          <div class="tech-tags">
            <span v-for="(tech, index) in project.technologies"
                  :key="index"
                  class="tech-tag"
                  data-aos="fade-up"
                  :data-aos-delay="30 * index">
              {{ tech }}
            </span>
          </div>
        </div>
      </section>

      <!-- 相关项目 -->
      <section class="section related-section">
        <div class="container">
          <h2 class="section-title">{{ i18n.t('projectsDetail.relatedProjects') }}</h2>
          <div class="related-grid">
            <router-link v-for="(related, index) in relatedProjects"
                         :key="related.id"
                         :to="`/projects/${related.id}`"
                         class="related-card"
                         data-aos="fade-up"
                         :data-aos-delay="100 * index">
              <img :src="related.image" :alt="related.name" />
              <h3>{{ related.name }}</h3>
            </router-link>
          </div>
        </div>
      </section>

      <!-- 返回 -->
      <section class="section back-section">
        <div class="container">
          <router-link to="/projects" class="btn-back">
            {{ i18n.t('projectsDetail.backToProjects') }}
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import i18n from '../i18n/index.js'
import { getProjectById, getCategoryById, projectsData } from '../data/projects-data.js'
import AOS from 'aos'

const route = useRoute()
const project = ref(null)

const getCategoryName = (categoryId) => {
  const category = getCategoryById(categoryId)
  return category ? category.name : ''
}

const relatedProjects = computed(() => {
  if (!project.value) return []
  return projectsData.projects
    .filter(p => p.category === project.value.category && p.id !== project.value.id)
    .slice(0, 3)
})

const loadProject = () => {
  const projectId = route.params.id
  project.value = getProjectById(projectId)
  
  // 刷新AOS动画
  setTimeout(() => {
    AOS.refresh()
  }, 100)
}

// 初始加载
onMounted(() => {
  loadProject()
})

// 监听路由参数变化
watch(() => route.params.id, () => {
  loadProject()
})
</script>

<style scoped>
/* ===== 全局样式 ===== */
.project-detail {
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

.project-not-found {
  text-align: center;
  padding: 100px 20px;
}

.project-not-found h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #666;
}

.project-not-found a {
  display: inline-block;
  padding: 10px 30px;
  background: #667eea;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  transition: all 0.3s;
}

.project-not-found a:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

/* ===== Hero Section ===== */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 0;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.hero-image {
  text-align: center;
}

.project-main-image {
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  object-fit: cover;
  aspect-ratio: 4/3;
}

.project-meta-top {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.year-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  backdrop-filter: blur(10px);
}

.status-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  backdrop-filter: blur(10px);
}

.status-badge.status-active {
  background: rgba(34, 197, 94, 0.3);
}

.status-badge.status-completed {
  background: rgba(168, 85, 247, 0.3);
}

.project-title {
  font-size: 2.8rem;
  margin-bottom: 20px;
  line-height: 1.2;
}

.title-en {
  display: block;
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 10px;
  opacity: 0.9;
}

.project-lead {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 30px;
  opacity: 0.95;
}

.project-category-display {
  margin-bottom: 30px;
}

.cat-tag {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
}

.impact-section h3 {
  font-size: 1.1rem;
  margin-bottom: 12px;
  font-weight: bold;
}

.impact-section p {
  font-size: 1rem;
  line-height: 1.6;
}

/* ===== 概述 ===== */
.overview-section {
  background: #f9f9f9;
}

.overview-text {
  font-size: 1rem;
  line-height: 1.8;
  color: #333;
  max-width: 900px;
  margin: 0 auto;
  white-space: pre-line;
}

/* ===== 特性 ===== */
.features-section {
  background: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}

.feature-item {
  text-align: center;
  padding: 30px 20px;
  border-radius: 12px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  transition: all 0.3s;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 15px;
}

.feature-item h3 {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 10px;
}

.feature-en {
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
}

/* ===== 指标 ===== */
.metrics-section {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;
}

.metric-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
}

.metric-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.metric-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.metric-value {
  font-size: 2rem;
  font-weight: bold;
  color: #667eea;
  margin-bottom: 10px;
}

.metric-label {
  color: #666;
  font-size: 0.95rem;
}

/* ===== 技术栈 ===== */
.tech-section {
  background: white;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  max-width: 900px;
  margin: 0 auto;
}

.tech-tag {
  display: inline-block;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: 500;
  transition: all 0.3s;
}

.tech-tag:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

/* ===== 相关项目 ===== */
.related-section {
  background: #f9f9f9;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.related-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
  text-decoration: none;
  color: inherit;
}

.related-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.related-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s;
}

.related-card:hover img {
  transform: scale(1.05);
}

.related-card h3 {
  padding: 20px;
  font-size: 1.1rem;
  color: #333;
  margin: 0;
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

  .hero-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .project-title {
    font-size: 1.8rem;
  }

  .title-en {
    font-size: 1rem;
  }

  .features-grid,
  .metrics-grid,
  .related-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .tech-tags {
    justify-content: flex-start;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 50px 0;
  }

  .project-title {
    font-size: 1.3rem;
  }

  .features-grid,
  .metrics-grid,
  .related-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
}
</style>
