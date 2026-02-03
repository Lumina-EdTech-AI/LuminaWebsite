<template>
  <div class="projects">
    <!-- 导航面包屑 -->
    <div class="breadcrumb">
      <div class="container">
        <router-link to="/">{{ i18n.t('common.home') }}</router-link>
        <span>/</span>
        <span>{{ i18n.t('projectsDetail.projects') }}</span>
      </div>
    </div>

    <div class="projects-content">
      <!-- Hero Section -->
      <div class="hero-section">
        <div class="container">
          <div class="hero-content" data-aos="fade-up">
            <h1>{{ i18n.t('projectsDetail.title') }}</h1>
            <p>{{ i18n.t('projectsDetail.subtitle') }}</p>
          </div>
        </div>
      </div>

      <!-- 分类筛选 -->
      <section class="section filters-section">
        <div class="container">
          <div class="filters">
            <button 
              :class="['filter-btn', { active: activeCategory === null }]"
              @click="activeCategory = null"
              data-aos="fade-up">
              {{ i18n.t('projectsDetail.allProjects') }}
            </button>
            <button 
              v-for="cat in projectsData.categories"
              :key="cat.id"
              :class="['filter-btn', { active: activeCategory === cat.id }]"
              @click="activeCategory = cat.id"
              data-aos="fade-up">
              <span class="cat-icon">{{ cat.icon }}</span>
              {{ cat.name }}
            </button>
          </div>
        </div>
      </section>

      <!-- 项目列表 -->
      <section class="section projects-section">
        <div class="container">
          <div class="projects-grid">
            <router-link 
              v-for="(project, index) in filteredProjects"
              :key="project.id"
              :to="`/projects/${project.id}`"
              class="project-card"
              data-aos="fade-up"
              :data-aos-delay="50 * index">
              <div class="project-image">
                <img :src="project.image" :alt="project.name" loading="lazy" />
                <div class="project-overlay">
                  <span class="view-btn">{{ i18n.t('projectsDetail.viewDetails') }}</span>
                </div>
              </div>
              <div class="project-info">
                <div class="project-meta">
                  <span class="project-year">{{ project.year }}</span>
                  <span class="project-status" :class="`status-${project.status}`">
                    {{ project.status === 'active' ? '进行中' : '已完成' }}
                  </span>
                </div>
                <h3 class="project-name">{{ project.name }}</h3>
                <p class="project-description">{{ project.description }}</p>
                <div class="project-category">
                  <span class="cat-badge">{{ getCategoryName(project.category) }}</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </section>

      <!-- 返回 -->
      <section class="section back-section">
        <div class="container">
          <router-link to="/" class="btn-back">
            {{ i18n.t('common.backHome') }}
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import i18n from '../i18n/index.js'
import { projectsData, getCategoryById } from '../data/projects-data.js'
import AOS from 'aos'

const activeCategory = ref(null)

const filteredProjects = computed(() => {
  if (activeCategory.value === null) {
    return projectsData.projects
  }
  return projectsData.projects.filter(p => p.category === activeCategory.value)
})

const getCategoryName = (categoryId) => {
  const category = getCategoryById(categoryId)
  return category ? category.name : ''
}

// 初始化AOS动画
onMounted(() => {
  setTimeout(() => {
    AOS.refresh()
  }, 100)
})
</script>

<style scoped>
/* ===== 全局样式 ===== */
.projects {
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
  text-align: center;
}

.hero-section h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-section p {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto;
}

/* ===== 筛选区域 ===== */
.filters-section {
  background: #f9f9f9;
  padding: 60px 0;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  align-items: center;
}

.filter-btn {
  padding: 12px 25px;
  background: white;
  border: 2px solid #ddd;
  border-radius: 25px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  color: #333;
}

.filter-btn:hover {
  border-color: #667eea;
  color: #667eea;
  transform: translateY(-2px);
}

.filter-btn.active {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-color: transparent;
}

.cat-icon {
  font-size: 1.2rem;
}

/* ===== 项目列表 ===== */
.projects-section {
  background: white;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
}

.project-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.project-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(102, 126, 234, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.view-btn {
  background: white;
  color: #667eea;
  padding: 10px 25px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.9rem;
  transition: all 0.3s;
}

.project-overlay:hover .view-btn {
  transform: scale(1.05);
}

.project-info {
  padding: 25px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.project-meta {
  display: flex;
  gap: 12px;
  margin-bottom: 15px;
  font-size: 0.85rem;
}

.project-year {
  color: #667eea;
  font-weight: bold;
}

.project-status {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: bold;
  background: #e8f4f8;
  color: #0066cc;
}

.project-status.status-active {
  background: #e8f5e9;
  color: #2e7d32;
}

.project-status.status-completed {
  background: #f3e5f5;
  color: #6a1b9a;
}

.project-name {
  font-size: 1.2rem;
  margin-bottom: 12px;
  color: #333;
  line-height: 1.4;
  flex-grow: 0;
}

.project-description {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 15px;
  flex-grow: 1;
}

.project-category {
  margin-top: auto;
}

.cat-badge {
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6px 14px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
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

  .hero-section h1 {
    font-size: 2rem;
  }

  .hero-section p {
    font-size: 1rem;
  }

  .filters {
    justify-content: flex-start;
    overflow-x: auto;
    padding: 0 0 10px 0;
  }

  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }

  .project-image {
    height: 150px;
  }
}

@media (max-width: 480px) {
  .hero-section h1 {
    font-size: 1.5rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .filter-btn {
    padding: 10px 15px;
    font-size: 0.85rem;
  }
}
</style>
