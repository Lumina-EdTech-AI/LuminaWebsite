<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title">Get in Touch</h2>
      <p class="section-subtitle">
        Ready to transform education with AI? Let's start a conversation.
      </p>
      <div class="contact-content">
        <div class="contact-info">
          <div class="info-item">
            <div class="info-icon">📧</div>
            <div>
              <h4>Email</h4>
              <p>contact@lumina-edtech.ai</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">💼</div>
            <div>
              <h4>Business Inquiries</h4>
              <p>partnerships@lumina-edtech.ai</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">🌐</div>
            <div>
              <h4>Location</h4>
              <p>Serving clients globally</p>
            </div>
          </div>
        </div>
        <div class="contact-cta">
          <p>
            Whether you're an educational institution looking to innovate or an
            EdTech company seeking AI expertise, we're here to help bring your
            vision to life.
          </p>
          <a href="mailto:contact@lumina-edtech.ai" class="btn btn-primary">
            Send us a Message
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
.contact {
  background-color: #fafafa;
  padding: 5rem 0;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  margin-bottom: 3rem;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 3rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.info-icon {
  font-size: 2rem;
}

.info-item h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.3rem;
}

.info-item p {
  color: #666;
  font-size: 0.95rem;
}

.contact-cta {
  background-color: #ffffff;
  padding: 2.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid #e8e8e8;
}

.contact-cta p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.btn {
  padding: 0.875rem 2rem;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background-color: #4a90e2;
  color: white;
}

.btn-primary:hover {
  background-color: #357abd;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
}

@media (max-width: 768px) {
  .contact {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
