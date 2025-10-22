import { createRouter, createWebHistory } from 'vue-router'

// 配置外部链接 - 开发和生产环境使用相同链接
const EXTERNAL_LINKS = {
  student: 'https://student.lumina-edu.cn',
  teacher: 'https://admin.lumina-edu.cn:8070'
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/student',
      name: 'student',
      beforeEnter: () => {
        // 跳转到外部学生端
        window.location.href = EXTERNAL_LINKS.student
        return false
      }
    },
    {
      path: '/teacher',
      name: 'teacher',
      beforeEnter: () => {
        // 跳转到外部教师端
        window.location.href = EXTERNAL_LINKS.teacher
        return false
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router
