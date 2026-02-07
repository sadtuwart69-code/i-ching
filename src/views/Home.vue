<template>
  <div class="home-container">
    <div class="mystic-text">
      <p>卦不空断，命不空算</p>
      <p>不欠因果，趋吉避凶</p>
      <p>谋求安康，避开灾难</p>
    </div>
    
    <h1>{{ $i18n.messages[$i18n.locale].home.title }}</h1>
    <p class="subtitle">{{ $i18n.messages[$i18n.locale].home.subtitle }}</p>
    
    <div class="home-grid">
      <div class="home-card divination-card" @click="$router.push('/divination')">
        <div class="card-symbol hetu-symbol"></div>
        <h2>{{ $i18n.messages[$i18n.locale].home.divination.title }}</h2>
        <p>{{ $i18n.messages[$i18n.locale].home.divination.subtitle }}</p>
        <button>{{ $i18n.messages[$i18n.locale].home.divination.button }}</button>
      </div>
      
      <div class="home-card life-card" @click="$router.push('/life-prediction')">
        <div class="card-symbol bagua-symbol"></div>
        <h2>{{ $i18n.messages[$i18n.locale].home.lifePrediction.title }}</h2>
        <p>{{ $i18n.messages[$i18n.locale].home.lifePrediction.subtitle }}</p>
        <button>{{ $i18n.messages[$i18n.locale].home.lifePrediction.button }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  padding: 40px 20px 100px;
  background-image: url('https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=deep%20starry%20sky%20background%2C%20mystical%20eastern%20atmosphere%2C%20dim%20blue%20light%2C%20cosmic%20energy&image_size=landscape_16_9');
  background-size: cover;
  background-position: center;
  position: relative;
}

.home-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.home-container > * {
  position: relative;
  z-index: 2;
}

.mystic-text {
  text-align: center;
  margin-bottom: 30px;
  font-style: italic;
  color: var(--secondary-color);
  text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
}

.mystic-text p {
  margin: 5px 0;
  font-size: 18px;
}

h1 {
  text-align: center;
  color: white;
  text-shadow: 0 0 20px rgba(74, 111, 165, 0.8);
  margin-bottom: 10px;
}

.subtitle {
  text-align: center;
  color: #ddd;
  margin-bottom: 40px;
}

.home-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.home-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--border-radius);
  padding: 30px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
  position: relative;
  overflow: hidden;
}

.home-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.15);
}

.home-card::before {
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

.home-card:hover::before {
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

.card-symbol {
  width: 100px;
  height: 100px;
  margin: 0 auto 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.8));
}

.hetu-symbol {
  background-image: url('https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20Hetu%20pattern%2C%20traditional%20eastern%20symbol%2C%20mystical%20energy%2C%20golden%20color%2C%20clean%20design&image_size=square');
}

.bagua-symbol {
  background-image: url('https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20Bagua%20pattern%2C%20traditional%20eastern%20symbol%2C%20yin%20yang%20balance%2C%20blue%20and%20white%2C%20clean%20design&image_size=square');
}

.home-card h2 {
  color: var(--secondary-color);
  margin-bottom: 15px;
  text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
}

.home-card p {
  color: #ddd;
  margin-bottom: 25px;
  line-height: 1.5;
}

.home-card button {
  background: rgba(74, 111, 165, 0.8);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: var(--border-radius);
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s, transform 0.3s;
}

.home-card button:hover {
  background: rgba(74, 111, 165, 1);
  transform: scale(1.05);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .home-container {
    padding: 30px 15px 100px;
  }
  
  .mystic-text p {
    font-size: 16px;
  }
  
  .home-card {
    padding: 25px;
  }
  
  .card-symbol {
    width: 80px;
    height: 80px;
  }
}
</style>