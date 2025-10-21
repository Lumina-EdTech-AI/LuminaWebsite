<template>
  <section id="services" class="services">
    <div class="container">
      <h2 class="section-title">Our Services</h2>
      <p class="section-subtitle">
        We provide comprehensive solutions for educational institutions and EdTech companies
      </p>
      <div class="services-grid">
        <div class="service-card">
          <div class="icon">🎓</div>
          <h3>Education Consultation</h3>
          <p>
            Strategic guidance for educational institutions seeking to modernize
            their teaching methodologies and integrate technology effectively.
          </p>
        </div>
        <div class="service-card">
          <div class="icon">🤖</div>
          <h3>EdTech AI Development</h3>
          <p>
            Custom AI-powered educational solutions including adaptive learning
            systems, intelligent tutoring, and automated assessment tools.
          </p>
        </div>
        <div class="service-card">
          <div class="icon">📊</div>
          <h3>Learning Analytics</h3>
          <p>
            Data-driven insights to improve student outcomes, track progress,
            and optimize educational programs through advanced analytics.
          </p>
        </div>
        <div class="service-card">
          <div class="icon">🚀</div>
          <h3>Digital Transformation</h3>
          <p>
            End-to-end support for educational organizations transitioning to
            digital platforms and implementing innovative learning solutions.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<style scoped>
.services {
  background-color: #fafafa;
  padding: 5rem 0;
}

.container {
  max-width: 1200px;
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
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.service-card {
  background-color: #ffffff;
  padding: 2.5rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #e8e8e8;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-color: #4a90e2;
}

.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.service-card p {
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .services {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
