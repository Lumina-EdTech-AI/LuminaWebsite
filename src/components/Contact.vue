<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">{{ i18n.t('contact.title') }}</h2>
      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
        {{ i18n.t('contact.subtitle') }}
      </p>
      <div class="contact-content">
        <div class="contact-info" data-aos="fade-up" data-aos-delay="200">
          <p>{{ i18n.t('contact.info1') }}</p>
          <p>{{ i18n.t('contact.info2') }}</p>
        </div>
        
        <form class="contact-form" data-aos="fade-up" data-aos-delay="300" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">{{ i18n.t('contact.form.name.label') }} *</label>
            <input 
              type="text" 
              id="name" 
              v-model="formData.name" 
              required 
              :placeholder="i18n.t('contact.form.name.placeholder')"
            />
          </div>

          <div class="form-group">
            <label for="email">{{ i18n.t('contact.form.email.label') }} *</label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email" 
              required 
              :placeholder="i18n.t('contact.form.email.placeholder')"
            />
          </div>

          <div class="form-group">
            <label for="phone">{{ i18n.t('contact.form.phone.label') }}</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="formData.phone" 
              :placeholder="i18n.t('contact.form.phone.placeholder')"
            />
          </div>

          <div class="form-group">
            <label for="organization">{{ i18n.t('contact.form.organization.label') }}</label>
            <input 
              type="text" 
              id="organization" 
              v-model="formData.organization" 
              :placeholder="i18n.t('contact.form.organization.placeholder')"
            />
          </div>

          <div class="form-group">
            <label for="subject">{{ i18n.t('contact.form.subject.label') }}</label>
            <select id="subject" v-model="formData.subject" required>
              <option value="">{{ i18n.t('contact.form.subject.placeholder') }}</option>
              <option value="parent-consulting">{{ i18n.t('contact.form.subject.options.parentConsulting') }}</option>
              <option value="ai-tech">{{ i18n.t('contact.form.subject.options.aiTech') }}</option>
              <option value="consulting">{{ i18n.t('contact.form.subject.options.consulting') }}</option>
              <option value="personalized">{{ i18n.t('contact.form.subject.options.personalized') }}</option>
              <option value="cooperation">{{ i18n.t('contact.form.subject.options.cooperation') }}</option>
              <option value="other">{{ i18n.t('contact.form.subject.options.other') }}</option>
            </select>
          </div>

          <div class="form-group">
            <label for="message">{{ i18n.t('contact.form.message.label') }} *</label>
            <textarea 
              id="message" 
              v-model="formData.message" 
              required 
              rows="5" 
              :placeholder="i18n.t('contact.form.message.placeholder')"
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
            {{ isSubmitting ? i18n.t('contact.form.sending') : i18n.t('contact.form.submit') }}
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
import i18n from '../i18n/index.js'

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

// 咨询主题映射 - 使用响应式函数以支持语言切换
const getSubjectMap = () => ({
  'parent-consulting': i18n.t('contact.form.subject.options.parentConsulting'),
  'ai-tech': i18n.t('contact.form.subject.options.aiTech'),
  'consulting': i18n.t('contact.form.subject.options.consulting'),
  'personalized': i18n.t('contact.form.subject.options.personalized'),
  'cooperation': i18n.t('contact.form.subject.options.cooperation'),
  'other': i18n.t('contact.form.subject.options.other')
})

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
    const subjectMap = getSubjectMap()
    const fullMessage = `
${i18n.t('contact.form.email.label')}: ${formData.value.email}
${i18n.t('contact.form.phone.label')}: ${formData.value.phone || i18n.t('contact.messages.notProvided')}
${i18n.t('contact.form.organization.label')}: ${formData.value.organization || i18n.t('contact.messages.notProvided')}
${i18n.t('contact.form.subject.label')}: ${subjectMap[formData.value.subject] || formData.value.subject}

${i18n.t('contact.messages.messageContent')}:
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
    submitMessage.value = i18n.t('contact.messages.submitSuccess')
    
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
    submitMessage.value = i18n.t('contact.messages.submitError')
    
    // 10秒后清除错误消息
    setTimeout(() => {
      submitMessage.value = ''
    }, 10000)
  } finally {
    isSubmitting.value = false
  }
}
</script>
