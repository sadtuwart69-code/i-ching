<template>
  <div class="divination-container">
    <h1>{{ $i18n.messages[$i18n.locale].divination.title }}</h1>
    <p class="subtitle">{{ $i18n.messages[$i18n.locale].divination.subtitle }}</p>
    
    <div class="card">
      <h2>{{ $i18n.messages[$i18n.locale].divination.form.title }}</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">{{ $i18n.messages[$i18n.locale].divination.form.name }} {{ $i18n.messages[$i18n.locale].common.required }}</label>
          <input type="text" id="name" v-model="form.name" required :placeholder="`${$i18n.messages[$i18n.locale].divination.form.name}`">
        </div>
        
        <div class="form-group">
          <label for="gender">{{ $i18n.messages[$i18n.locale].divination.form.gender }} {{ $i18n.messages[$i18n.locale].common.required }}</label>
          <select id="gender" v-model="form.gender" required>
            <option value="">{{ $i18n.messages[$i18n.locale].common.select }} {{ $i18n.messages[$i18n.locale].divination.form.gender }}</option>
            <option value="male">{{ $i18n.messages[$i18n.locale].common.male }}</option>
            <option value="female">{{ $i18n.messages[$i18n.locale].common.female }}</option>
          </select>
        </div>
        
        <div class="form-group">
          <label>{{ $i18n.messages[$i18n.locale].divination.form.predictionType }} {{ $i18n.messages[$i18n.locale].common.required }}</label>
          <select v-model="form.predictionType" required>
            <option value="">{{ $i18n.messages[$i18n.locale].common.select }} {{ $i18n.messages[$i18n.locale].divination.form.predictionType }}</option>
            <option value="work">{{ $i18n.messages[$i18n.locale].divination.predictionTypes.work }}</option>
            <option value="love">{{ $i18n.messages[$i18n.locale].divination.predictionTypes.love }}</option>
            <option value="legal">{{ $i18n.messages[$i18n.locale].divination.predictionTypes.legal }}</option>
            <option value="relationship">{{ $i18n.messages[$i18n.locale].divination.predictionTypes.relationship }}</option>
            <option value="exam">{{ $i18n.messages[$i18n.locale].divination.predictionTypes.exam }}</option>
            <option value="divorce">{{ $i18n.messages[$i18n.locale].divination.predictionTypes.divorce }}</option>
            <option value="promotion">{{ $i18n.messages[$i18n.locale].divination.predictionTypes.promotion }}</option>
            <option value="business">{{ $i18n.messages[$i18n.locale].divination.predictionTypes.business }}</option>
            <option value="search">{{ $i18n.messages[$i18n.locale].divination.predictionTypes.search }}</option>
            <option value="affair">{{ $i18n.messages[$i18n.locale].divination.predictionTypes.affair }}</option>
            <option value="money">{{ $i18n.messages[$i18n.locale].divination.predictionTypes.money }}</option>
            <option value="travel">{{ $i18n.messages[$i18n.locale].divination.predictionTypes.travel }}</option>
            <option value="partnership">{{ $i18n.messages[$i18n.locale].divination.predictionTypes.partnership }}</option>
            <option value="health">{{ $i18n.messages[$i18n.locale].divination.predictionTypes.health }}</option>
            <option value="shortTermMoney">{{ $i18n.messages[$i18n.locale].divination.predictionTypes.shortTermMoney }}</option>
            <option value="overall">{{ $i18n.messages[$i18n.locale].divination.predictionTypes.overall }}</option>
          </select>
        </div>
        
        <div class="form-group">
          <label>{{ $i18n.messages[$i18n.locale].divination.form.numbers }} {{ $i18n.messages[$i18n.locale].common.required }}</label>
          <div style="display: flex; gap: 10px;">
            <input type="number" v-model="form.number1" required placeholder="Number 1">
            <input type="number" v-model="form.number2" required placeholder="Number 2">
            <input type="number" v-model="form.number3" required placeholder="Number 3">
          </div>
          
        </div>
        
        <div class="form-group">
          <label for="email">{{ $i18n.messages[$i18n.locale].divination.form.email }} {{ $i18n.messages[$i18n.locale].common.required }}</label>
          <input type="email" id="email" v-model="form.email" required :placeholder="`${$i18n.messages[$i18n.locale].divination.form.email}`">
        </div>
        
        <div class="form-group">
          <h3>{{ $i18n.messages[$i18n.locale].divination.instructions.title }}</h3>
          <p style="font-size: 14px; line-height: 1.5; color: #ddd;">
            {{ $i18n.messages[$i18n.locale].divination.instructions.step1 }}<br>
            {{ $i18n.messages[$i18n.locale].divination.instructions.step2 }}<br>
            {{ $i18n.messages[$i18n.locale].divination.instructions.step3 }}<br>
            {{ $i18n.messages[$i18n.locale].divination.instructions.step4 }}
          </p>
        </div>
      </form>
      
      <a href="https://wise.com/pay/me/xinqiangg" class="payment-button" target="_blank">
        {{ $i18n.messages[$i18n.locale].divination.payment }}
      </a>
    </div>
  </div>
</template>

<script>
import supabase from '../config/supabase'

export default {
  name: 'Divination',
  data() {
    return {
      form: {
        name: '',
        gender: '',
        predictionType: '',
        number1: '',
        number2: '',
        number3: '',
        email: ''
      }
    }
  },
  methods: {
    async handleSubmit() {
      // 验证表单
      if (!this.form.name || !this.form.gender || !this.form.predictionType || 
          !this.form.number1 || !this.form.number2 || !this.form.number3 || !this.form.email) {
        alert('所有字段不能为空！');
        return;
      }
      
      // 验证数字范围
      if (this.form.number1 < 1 || this.form.number1 > 9 || 
          this.form.number2 < 1 || this.form.number2 > 9 || 
          this.form.number3 < 1 || this.form.number3 > 6) {
        alert('数字1和数字2必须在1-9之间，数字3必须在1-6之间！');
        return;
      }
      
      // 提交到Supabase
      try {
        const { data, error } = await supabase
          .from('divinations')
          .insert([{
            name: this.form.name,
            gender: this.form.gender,
            prediction_type: this.form.predictionType,
            number1: this.form.number1,
            number2: this.form.number2,
            number3: this.form.number3,
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
.divination-container {
  min-height: 100vh;
  padding: 40px 20px;
  background-image: url('https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=deep%20starry%20sky%20background%2C%20mystical%20eastern%20atmosphere%2C%20dim%20blue%20light%2C%20cosmic%20energy&image_size=landscape_16_9');
  background-size: cover;
  background-position: center;
  position: relative;
}

.divination-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.divination-container > * {
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
  .divination-container {
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