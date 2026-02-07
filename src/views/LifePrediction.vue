<template>
  <div class="life-container">
    <h1>{{ $i18n.messages[$i18n.locale].lifePrediction.title }}</h1>
    <p class="subtitle">{{ $i18n.messages[$i18n.locale].lifePrediction.subtitle }}</p>
    
    <div class="card">
      <h2>{{ $i18n.messages[$i18n.locale].lifePrediction.form.title }}</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">{{ $i18n.messages[$i18n.locale].lifePrediction.form.name }} {{ $i18n.messages[$i18n.locale].common.required }}</label>
          <input type="text" id="name" v-model="form.name" required :placeholder="`${$i18n.messages[$i18n.locale].lifePrediction.form.name}`">
        </div>
        
        <div class="form-group">
          <label for="gender">{{ $i18n.messages[$i18n.locale].lifePrediction.form.gender }} {{ $i18n.messages[$i18n.locale].common.required }}</label>
          <select id="gender" v-model="form.gender" required>
            <option value="">{{ $i18n.messages[$i18n.locale].common.select }} {{ $i18n.messages[$i18n.locale].lifePrediction.form.gender }}</option>
            <option value="male">{{ $i18n.messages[$i18n.locale].common.male }}</option>
            <option value="female">{{ $i18n.messages[$i18n.locale].common.female }}</option>
          </select>
        </div>
        
        <div class="form-group">
          <label>{{ $i18n.messages[$i18n.locale].lifePrediction.form.birthday }} {{ $i18n.messages[$i18n.locale].common.required }}</label>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 10px;">
            <input type="number" v-model="form.year" required placeholder="Year">
            <input type="number" v-model="form.month" required placeholder="Month">
            <input type="number" v-model="form.day" required placeholder="Day">
            <input type="number" v-model="form.hour" required placeholder="Hour">
          </div>
        </div>
        
        <div class="form-group">
          <label for="email">{{ $i18n.messages[$i18n.locale].lifePrediction.form.email }} {{ $i18n.messages[$i18n.locale].common.required }}</label>
          <input type="email" id="email" v-model="form.email" required :placeholder="`${$i18n.messages[$i18n.locale].lifePrediction.form.email}`">
        </div>
        
        <div class="form-group">
          <h3>{{ $i18n.messages[$i18n.locale].lifePrediction.predictionContent.title }}</h3>
          <p style="color: #ddd;">{{ $i18n.messages[$i18n.locale].lifePrediction.predictionContent.description }}</p>
          <ul style="list-style-type: disc; margin-left: 20px; font-size: 14px; color: #ddd;">
            <li v-for="(item, index) in $i18n.messages[$i18n.locale].lifePrediction.predictionContent.items" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
      </form>
      
      <a href="https://wise.com/pay/me/xinqiangg" class="payment-button" target="_blank">
        {{ $i18n.messages[$i18n.locale].lifePrediction.payment }}
      </a>
    </div>
  </div>
</template>

<script>
import supabase from '../config/supabase'

export default {
  name: 'LifePrediction',
  data() {
    return {
      form: {
        name: '',
        gender: '',
        year: '',
        month: '',
        day: '',
        hour: '',
        email: ''
      }
    }
  },
  methods: {
    async handleSubmit() {
      // 验证表单
      if (!this.form.name || !this.form.gender || !this.form.year || 
          !this.form.month || !this.form.day || !this.form.hour || !this.form.email) {
        alert('所有字段不能为空！');
        return;
      }
      
      // 验证日期格式
      const date = new Date(this.form.year, this.form.month - 1, this.form.day, this.form.hour);
      if (isNaN(date.getTime())) {
        alert('请输入有效的出生年月日时！');
        return;
      }
      
      // 提交到Supabase
      try {
        const { data, error } = await supabase
          .from('life_predictions')
          .insert([{
            name: this.form.name,
            gender: this.form.gender,
            year: this.form.year,
            month: this.form.month,
            day: this.form.day,
            hour: this.form.hour,
            email: this.form.email,
            payment_status: false
          }])
          
        if (error) {
          console.error('提交失败:', error);
          alert('提交失败，请稍后重试！');
          return;
        }
        
        console.log('提交表单:', this.form);
        alert('表单提交成功！请点击下方付款按钮获取详细预测结果。');
      } catch (error) {
        console.error('错误:', error);
        alert('系统错误，请稍后重试！');
      }
    }
  }
}
</script>

<style scoped>
.life-container {
  min-height: 100vh;
  padding: 40px 20px;
  background-image: url('https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=deep%20starry%20sky%20background%2C%20mystical%20eastern%20atmosphere%2C%20dim%20blue%20light%2C%20cosmic%20energy&image_size=landscape_16_9');
  background-size: cover;
  background-position: center;
  position: relative;
}

.life-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.life-container > * {
  position: relative;
  z-index: 2;
}

.subtitle {
  text-align: center;
  color: #ddd;
  margin-bottom: 40px;
}

h1 {
  text-align: center;
  color: white;
  text-shadow: 0 0 20px rgba(74, 111, 165, 0.8);
  margin-bottom: 10px;
}

h2 {
  color: var(--secondary-color);
  margin-bottom: 20px;
  text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
  border-bottom: 2px solid var(--secondary-color);
  padding-bottom: 10px;
}

h3 {
  color: var(--secondary-color);
  margin-bottom: 15px;
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

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #ddd;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: var(--border-radius);
  font-size: 16px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.form-group input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

button {
  background: rgba(74, 111, 165, 0.8);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: var(--border-radius);
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s, transform 0.3s;
  width: 100%;
  margin-top: 20px;
}

button:hover {
  background: rgba(74, 111, 165, 1);
  transform: scale(1.02);
}

.payment-button {
  display: block;
  width: 100%;
  background: rgba(212, 175, 55, 0.8);
  color: white;
  text-align: center;
  padding: 15px;
  border-radius: var(--border-radius);
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  transition: background 0.3s;
}

.payment-button:hover {
  background: rgba(212, 175, 55, 1);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .life-container {
    padding: 30px 15px;
  }
  
  .card {
    padding: 20px;
  }
  
  h1 {
    font-size: 24px;
  }
  
  h2 {
    font-size: 20px;
  }
}
</style>