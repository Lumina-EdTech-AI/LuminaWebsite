<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title">About Lumina EdTech AI</h2>
      <div class="about-content">
        <p>
          At Lumina EdTech AI, we believe in the transformative power of education
          enhanced by artificial intelligence. Our mission is to bridge the gap
          between traditional education and cutting-edge technology, creating
          innovative solutions that empower educators and inspire learners.
        </p>
        <p>
          With years of experience in both education and technology sectors, our
          team of experts delivers tailored solutions that address the unique
          challenges faced by educational institutions and EdTech companies. We
          are committed to making quality education accessible and effective for
          everyone.
        </p>
        <div class="values">
          <div class="value">
            <h4>Innovation</h4>
            <p>Pioneering AI solutions for modern education</p>
          </div>
          <div class="value">
            <h4>Excellence</h4>
            <p>Delivering high-quality, impactful results</p>
          </div>
          <div class="value">
            <h4>Partnership</h4>
            <p>Collaborating closely with our clients</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
  background-color: #ffffff;
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
  margin-bottom: 3rem;
  letter-spacing: -0.5px;
}

.about-content p {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  text-align: center;
}

.values {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.value {
  text-align: center;
  padding: 1.5rem;
}

.value h4 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #4a90e2;
  margin-bottom: 0.5rem;
}

.value p {
  color: #666;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .about {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .about-content p {
    font-size: 1rem;
  }
  
  .values {
    grid-template-columns: 1fr;
  }
}
</style>
