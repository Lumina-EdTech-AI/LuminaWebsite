<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">联系我们</h2>
      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
        无论您是想咨询留学服务的家长，还是寻求AI教育创新的机构，我们都随时为您服务
      </p>
      <div class="contact-content">
        <div class="contact-info" data-aos="fade-up" data-aos-delay="200">
          <p>
            我们为家长提供专业的国际教育咨询与留学规划服务，
            也为教育机构提供AI技术研发与数字化转型解决方案。
          </p>
          <p>
            填写下方表单，我们的专业顾问团队将在24小时内与您联系，
            为您提供个性化的咨询与服务方案。
          </p>
        </div>
        
        <form class="contact-form" data-aos="fade-up" data-aos-delay="300" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">姓名 *</label>
            <input 
              type="text" 
              id="name" 
              v-model="formData.name" 
              required 
              placeholder="请输入您的姓名"
            />
          </div>

          <div class="form-group">
            <label for="email">邮箱 *</label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email" 
              required 
              placeholder="example@email.com"
            />
          </div>

          <div class="form-group">
            <label for="phone">电话</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="formData.phone" 
              placeholder="请输入您的联系电话"
            />
          </div>

          <div class="form-group">
            <label for="organization">机构/学校名称</label>
            <input 
              type="text" 
              id="organization" 
              v-model="formData.organization" 
              placeholder="请输入您的机构或学校名称"
            />
          </div>

          <div class="form-group">
            <label for="subject">咨询主题 *</label>
            <select id="subject" v-model="formData.subject" required>
              <option value="">请选择咨询主题</option>
              <option value="parent-consulting">家长咨询</option>
              <option value="ai-tech">AI技术研究</option>
              <option value="consulting">咨询规划服务</option>
              <option value="personalized">个性化服务</option>
              <option value="cooperation">合作洽谈</option>
              <option value="other">其他</option>
            </select>
          </div>

          <div class="form-group">
            <label for="message">留言内容 *</label>
            <textarea 
              id="message" 
              v-model="formData.message" 
              required 
              rows="5" 
              placeholder="请详细描述您的需求..."
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
            {{ isSubmitting ? '提交中...' : '提交咨询' }}
          </button>

          <p v-if="submitMessage" class="submit-message" :class="{ success: submitSuccess }">
            {{ submitMessage }}
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  organization: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

// 咨询主题映射
const subjectMap = {
  'parent-consulting': '家长咨询',
  'ai-tech': 'AI技术研究',
  'consulting': '咨询规划服务',
  'personalized': '个性化服务',
  'cooperation': '合作洽谈',
  'other': '其他'
}

// EmailJS 配置
const EMAILJS_SERVICE_ID = 'service_ix128zl'
const EMAILJS_TEMPLATE_ID = 'template_gs8kakr'
const EMAILJS_PUBLIC_KEY = 'ie1V7CY2VDdmoVk1B'

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    // 获取当前时间
    const currentTime = new Date().toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    })

    // 构建完整的留言内容
    const fullMessage = `
邮箱: ${formData.value.email}
电话: ${formData.value.phone || '未提供'}
机构/学校: ${formData.value.organization || '未提供'}
咨询主题: ${subjectMap[formData.value.subject] || formData.value.subject}

留言内容:
${formData.value.message}
    `.trim()

    // 使用EmailJS发送邮件
    const templateParams = {
      name: formData.value.name,
      email: formData.value.email, // 用户邮箱，用于回复
      time: currentTime,
      title: subjectMap[formData.value.subject] || formData.value.subject, // 咨询主题（中文）
      message: fullMessage
    }

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )

    console.log('EmailJS 发送成功:', response)
    
    // 显示成功消息
    submitSuccess.value = true
    submitMessage.value = '✓ 提交成功！我们已收到您的咨询，将在24小时内与您联系。'
    
    // 重置表单
    formData.value = {
      name: '',
      email: '',
      phone: '',
      organization: '',
      subject: '',
      message: ''
    }

    // 5秒后清除成功消息
    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
    
  } catch (error) {
    console.error('EmailJS 发送失败:', error)
    submitSuccess.value = false
    submitMessage.value = '✗ 提交失败，请稍后重试或直接发送邮件至 lumina.education.institute@gmail.com'
    
    // 10秒后清除错误消息
    setTimeout(() => {
      submitMessage.value = ''
    }, 10000)
  } finally {
    isSubmitting.value = false
  }
}
</script>
