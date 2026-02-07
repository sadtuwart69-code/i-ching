<template>
  <div class="guide-container">
    <h1>{{ $i18n.messages[$i18n.locale].guide.title }}</h1>
    
    <div class="card">
      <h2>{{ $i18n.messages[$i18n.locale].guide.preparation }}</h2>
      <ol>
        <li>{{ $i18n.messages[$i18n.locale].guide.preparationItems[0] }}</li>
        <li>{{ $i18n.messages[$i18n.locale].guide.preparationItems[1] }}</li>
        <li>{{ $i18n.messages[$i18n.locale].guide.preparationItems[2] }}</li>
      </ol>
    </div>
    
    <div class="card">
      <h2>{{ $i18n.messages[$i18n.locale].guide.steps }}</h2>
      <p>{{ $i18n.messages[$i18n.locale].guide.step1 }}</p>
      <p>{{ $i18n.messages[$i18n.locale].guide.step2 }}</p>
      <p>{{ $i18n.messages[$i18n.locale].guide.step3 }}</p>
      <ul>
        <li><strong>{{ $i18n.messages[$i18n.locale].guide.male }}</strong>：{{ $i18n.messages[$i18n.locale].guide.maleSteps[0] }}</li>
        <li>{{ $i18n.messages[$i18n.locale].guide.maleSteps[1] }}</li>
        <li>{{ $i18n.messages[$i18n.locale].guide.maleSteps[2] }}</li>
      </ul>
      <ul>
        <li><strong>{{ $i18n.messages[$i18n.locale].guide.female }}</strong>：{{ $i18n.messages[$i18n.locale].guide.femaleSteps[0] }}</li>
      </ul>
    </div>
    
    <div class="card">
      <h2>{{ $i18n.messages[$i18n.locale].guide.notices }}</h2>
      <ul>
        <li>{{ $i18n.messages[$i18n.locale].guide.noticeItems[0] }}</li>
        <li>{{ $i18n.messages[$i18n.locale].guide.noticeItems[1] }}</li>
        <li>{{ $i18n.messages[$i18n.locale].guide.noticeItems[2] }}</li>
        <li>{{ $i18n.messages[$i18n.locale].guide.noticeItems[3] }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NumberGuide'
}
</script>

<style scoped>
.guide-container {
  min-height: 100vh;
  padding: 40px 20px;
  background-image: url('https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=deep%20starry%20sky%20background%2C%20mystical%20eastern%20atmosphere%2C%20dim%20blue%20light%2C%20cosmic%20energy&image_size=landscape_16_9');
  background-size: cover;
  background-position: center;
  position: relative;
}

.guide-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.guide-container > * {
  position: relative;
  z-index: 2;
}

.guide-container h1 {
  text-align: center;
  margin-bottom: 30px;
  color: white;
  text-shadow: 0 0 20px rgba(74, 111, 165, 0.8);
}

.guide-container h2 {
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

.guide-container ol, .guide-container ul {
  margin-left: 20px;
  margin-bottom: 20px;
  color: #ddd;
}

.guide-container li {
  margin-bottom: 10px;
  line-height: 1.6;
}

.guide-container p {
  margin-bottom: 15px;
  line-height: 1.6;
  color: #ddd;
}

.guide-container strong {
  color: var(--secondary-color);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .guide-container {
    padding: 30px 15px;
  }
  
  .card {
    padding: 20px;
  }
  
  .guide-container h1 {
    font-size: 24px;
  }
  
  .guide-container h2 {
    font-size: 20px;
  }
}
</style>