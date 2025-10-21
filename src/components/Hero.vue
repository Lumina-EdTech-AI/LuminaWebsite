<template>
  <section id="hero" class="hero">
    <div class="container">
      <h2 class="title">Empowering Education Through AI Innovation</h2>
      <p class="subtitle">
        Expert consultation and cutting-edge EdTech AI development solutions
        for the future of learning
      </p>
      <div class="cta-buttons">
        <a href="#services" class="btn btn-primary">Our Services</a>
        <a href="#contact" class="btn btn-secondary">Get in Touch</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped>
.hero {
  background-color: #ffffff;
  padding: 6rem 0;
  text-align: center;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

.title {
  font-size: 3rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  letter-spacing: -1px;
}

.subtitle {
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
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

.btn-secondary {
  background-color: transparent;
  color: #4a90e2;
  border: 2px solid #4a90e2;
}

.btn-secondary:hover {
  background-color: #4a90e2;
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero {
    padding: 4rem 0;
  }
  
  .title {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
}
</style>
