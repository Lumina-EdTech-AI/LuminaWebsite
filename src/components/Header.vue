<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <h1>Lumina EdTech AI</h1>
      </div>
      <nav class="nav">
        <a href="#hero">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  background-color: #ffffff;
  padding: 1.5rem 0;
  border-bottom: 1px solid #e8e8e8;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  letter-spacing: -0.5px;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav a {
  text-decoration: none;
  color: #555;
  font-weight: 500;
  transition: color 0.3s ease;
  font-size: 0.95rem;
}

.nav a:hover {
  color: #4a90e2;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav {
    gap: 1.5rem;
  }
}
</style>
