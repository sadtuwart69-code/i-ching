<template>
  <div class="app">
    <router-view />
    <FooterNav />
  </div>
</template>

<script>
import FooterNav from './components/FooterNav.vue'

export default {
  name: 'App',
  components: {
    FooterNav
  }
}
</script>

<style scoped>
.app {
  min-height: 100vh;
  padding-bottom: 70px; /* 为底部导航留出空间 */
}
</style>