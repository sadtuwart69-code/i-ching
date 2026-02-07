<template>
  <div class="footer-nav">
    <router-link to="/" class="nav-item">
      <div class="nav-icon home-icon"></div>
      <span>{{ isChinese ? '首页' : 'Home' }}</span>
    </router-link>
    <router-link to="/number-guide" class="nav-item">
      <div class="nav-icon guide-icon"></div>
      <span>{{ isChinese ? '取数文档' : 'Guide' }}</span>
    </router-link>
    <router-link to="/about" class="nav-item">
      <div class="nav-icon about-icon"></div>
      <span>{{ isChinese ? '关于' : 'About' }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'FooterNav',
  computed: {
    isChinese() {
      return this.$i18n.locale === 'zh'
    }
  }
}
</script>

<style scoped>
.footer-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  z-index: 100;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: var(--primary-color);
  padding: 5px 20px;
  transition: all 0.3s;
}

.nav-item:hover {
  color: var(--secondary-color);
  transform: translateY(-2px);
}

.nav-icon {
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.home-icon {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%234a6fa5"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>');
}

.guide-icon {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%234a6fa5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>');
}

.about-icon {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%234a6fa5"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>');
}

.nav-item span {
  font-size: 12px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-icon {
    width: 24px;
    height: 24px;
  }
  
  .nav-item span {
    font-size: 10px;
  }
}
</style>