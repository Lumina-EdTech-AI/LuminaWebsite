<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Lumina EdTech AI</h3>
          <p>
            Empowering education through innovative AI solutions and expert consultation.
          </p>
        </div>
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Education Consultation</li>
            <li>EdTech AI Development</li>
            <li>Learning Analytics</li>
            <li>Digital Transformation</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Lumina EdTech AI. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background-color: #f5f5f5;
  padding: 3rem 0 1.5rem;
  border-top: 1px solid #e8e8e8;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.footer-section h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.footer-section p {
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section ul li a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.95rem;
}

.footer-section ul li a:hover {
  color: #4a90e2;
}

.footer-section ul li:not(:has(a)) {
  color: #666;
  font-size: 0.95rem;
}

.footer-bottom {
  border-top: 1px solid #e8e8e8;
  padding-top: 1.5rem;
  text-align: center;
}

.footer-bottom p {
  color: #999;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
