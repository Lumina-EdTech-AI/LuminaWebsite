<template>
  <section id="testimonials" class="testimonials">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">{{ i18n.t('testimonials.title') }}</h2>
      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
        {{ i18n.t('testimonials.subtitle') }}
      </p>
      
      <div class="testimonials-grid">
        <div class="testimonial-card" data-aos="fade-up" data-aos-delay="200">
          <div class="quote-icon">"</div>
          <p class="testimonial-text">{{ i18n.t('testimonials.items.principal.text') }}</p>
          <div class="testimonial-author">
            <div class="author-avatar">
              <img src="/images/testimonial-principal.png" alt="蒋斌校长" loading="lazy" />
            </div>
            <div class="author-info">
              <h5>{{ i18n.t('testimonials.items.principal.name') }}</h5>
              <p>{{ i18n.t('testimonials.items.principal.title') }}</p>
            </div>
          </div>
        </div>

        <div class="testimonial-card" data-aos="fade-up" data-aos-delay="300">
          <div class="quote-icon">"</div>
          <p class="testimonial-text">{{ i18n.t('testimonials.items.editor.text') }}</p>
          <div class="testimonial-author">
            <div class="author-avatar">
              <img src="/images/testimonial-editor.png" alt="徐慧编辑" loading="lazy" />
            </div>
            <div class="author-info">
              <h5>{{ i18n.t('testimonials.items.editor.name') }}</h5>
              <p>{{ i18n.t('testimonials.items.editor.title') }}</p>
            </div>
          </div>
        </div>

        <div class="testimonial-card" data-aos="fade-up" data-aos-delay="400">
          <div class="quote-icon">"</div>
          <p class="testimonial-text">{{ i18n.t('testimonials.items.student.text') }}</p>
          <div class="testimonial-author">
            <div class="author-avatar">
              <img src="/images/testimonial-student.png" alt="叶欣雨同学" loading="lazy" />
            </div>
            <div class="author-info">
              <h5>{{ i18n.t('testimonials.items.student.name') }}</h5>
              <p>{{ i18n.t('testimonials.items.student.title') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import i18n from '../i18n/index.js'
</script>
