import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import messages from './config/i18n'

const app = createApp(App)

// 全局语言管理
app.config.globalProperties.$i18n = {
  locale: 'en', // 默认中文（zh/en）
  messages
}

app.use(router)
app.mount('#app')