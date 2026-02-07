<template>
  <div class="about-container">
    <h1>{{ $i18n.messages[$i18n.locale].about.title }}</h1>
    <h2>{{ $i18n.messages[$i18n.locale].about.greeting }}</h2>
    
    <div class="card">
      <p>{{ $i18n.messages[$i18n.locale].about.welcome }}</p>
    </div>
    
    <div class="card">
      <h3>{{ $i18n.messages[$i18n.locale].about.section1.title }}</h3>
      <p>{{ $i18n.messages[$i18n.locale].about.section1.intro }}</p>
      <ul>
        <li><strong>{{ $i18n.messages[$i18n.locale].about.section1.characteristics[0] }}</strong>：{{ $i18n.messages[$i18n.locale].about.section1.details[0] }}</li>
        <li><strong>{{ $i18n.messages[$i18n.locale].about.section1.characteristics[1] }}</strong>：{{ $i18n.messages[$i18n.locale].about.section1.details[1] }}</li>
        <li><strong>{{ $i18n.messages[$i18n.locale].about.section1.characteristics[2] }}</strong>：{{ $i18n.messages[$i18n.locale].about.section1.details[2] }}</li>
      </ul>
      <p>{{ $i18n.messages[$i18n.locale].about.section1.conclusion }}</p>
    </div>
    
    <div class="card">
      <h3>{{ $i18n.messages[$i18n.locale].about.section2.title }}</h3>
      <p>{{ $i18n.messages[$i18n.locale].about.section2.intro }}</p>
      <ol>
        <li><strong>{{ $i18n.messages[$i18n.locale].about.section2.steps[0] }}</strong>：{{ $i18n.messages[$i18n.locale].about.section2.details[0] }}</li>
        <li><strong>{{ $i18n.messages[$i18n.locale].about.section2.steps[1] }}</strong>：{{ $i18n.messages[$i18n.locale].about.section2.details[1] }}</li>
        <li><strong>{{ $i18n.messages[$i18n.locale].about.section2.steps[2] }}</strong>：{{ $i18n.messages[$i18n.locale].about.section2.details[2] }}</li>
      </ol>
    </div>
    
    <div class="card">
      <h3>{{ $i18n.messages[$i18n.locale].about.section3.title }}</h3>
      <ul>
        <li><strong>{{ $i18n.messages[$i18n.locale].about.section3.hours.title }}</strong>：{{ $i18n.messages[$i18n.locale].about.section3.hours.details }}</li>
        <li><strong>{{ $i18n.messages[$i18n.locale].about.section3.contact.title }}</strong>：{{ $i18n.messages[$i18n.locale].about.section3.contact.details }}</li>
      </ul>
    </div>
    
    <div class="card">
      <h3>{{ $i18n.messages[$i18n.locale].about.section4.title }}</h3>
      <p>{{ $i18n.messages[$i18n.locale].about.section4.quote }}</p>
      <p>{{ $i18n.messages[$i18n.locale].about.section4.conclusion }}</p>
      <p><small>{{ $i18n.messages[$i18n.locale].about.section4.note }}</small></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about-container {
  min-height: 100vh;
  padding: 40px 20px;
  background-image: url('https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=deep%20starry%20sky%20background%2C%20mystical%20eastern%20atmosphere%2C%20dim%20blue%20light%2C%20cosmic%20energy&image_size=landscape_16_9');
  background-size: cover;
  background-position: center;
  position: relative;
}

.about-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.about-container > * {
  position: relative;
  z-index: 2;
}

.about-container h1 {
  text-align: center;
  margin-bottom: 10px;
  color: white;
  text-shadow: 0 0 20px rgba(74, 111, 165, 0.8);
}

.about-container h2 {
  text-align: center;
  margin-bottom: 30px;
  color: var(--secondary-color);
  font-size: 1.2em;
  text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
}

.about-container h3 {
  color: var(--secondary-color);
  margin-bottom: 15px;
  border-bottom: 2px solid var(--secondary-color);
  padding-bottom: 10px;
  text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
}

.card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--border-radius);
  padding: 30px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: rotate(45deg);
  animation: shimmer 3s infinite;
  opacity: 0;
}

.card:hover::before {
  opacity: 1;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) rotate(45deg);
  }
}

.about-container p {
  margin-bottom: 15px;
  line-height: 1.6;
  color: #ddd;
}

.about-container ul, .about-container ol {
  margin-left: 20px;
  margin-bottom: 20px;
  color: #ddd;
}

.about-container li {
  margin-bottom: 10px;
  line-height: 1.6;
}

.about-container strong {
  color: var(--secondary-color);
}

.about-container small {
  font-style: italic;
  color: #aaa;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .about-container {
    padding: 30px 15px;
  }
  
  .card {
    padding: 20px;
  }
  
  .about-container h1 {
    font-size: 24px;
  }
  
  .about-container h2 {
    font-size: 18px;
  }
  
  .about-container h3 {
    font-size: 16px;
  }
}
</style>