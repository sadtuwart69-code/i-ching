<template>
  <div class="container">
    <h1>{{ $i18n.messages[$i18n.locale].dashboard.title }}</h1>
    <p>{{ $i18n.messages[$i18n.locale].dashboard.subtitle }}</p>
    
    <div class="card">
      <h2>{{ $i18n.messages[$i18n.locale].dashboard.divination }}</h2>
      <table class="dashboard-table">
        <thead>
          <tr>
            <th>{{ $i18n.messages[$i18n.locale].dashboard.table.serialNumber }}</th>
            <th>{{ $i18n.messages[$i18n.locale].dashboard.table.id }}</th>
            <th>{{ $i18n.messages[$i18n.locale].dashboard.table.name }}</th>
            <th>{{ $i18n.messages[$i18n.locale].dashboard.table.gender }}</th>
            <th>{{ $i18n.messages[$i18n.locale].dashboard.table.predictionType }}</th>
            <th>{{ $i18n.messages[$i18n.locale].dashboard.table.number1 }}</th>
            <th>{{ $i18n.messages[$i18n.locale].dashboard.table.number2 }}</th>
            <th>{{ $i18n.messages[$i18n.locale].dashboard.table.number3 }}</th>
            <th>{{ $i18n.messages[$i18n.locale].dashboard.table.email }}</th>
            <th>{{ $i18n.messages[$i18n.locale].dashboard.table.createdAt }}</th>
            <th>{{ $i18n.messages[$i18n.locale].dashboard.table.paymentStatus }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in divinationData" :key="item.id">
            <td>{{ item.serial_number }}</td>
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.gender === 'male' ? $i18n.messages[$i18n.locale].dashboard.table.male : $i18n.messages[$i18n.locale].dashboard.table.female }}</td>
            <td>{{ getPredictionTypeName(item.predictionType) }}</td>
            <td>{{ item.number1 }}</td>
            <td>{{ item.number2 }}</td>
            <td>{{ item.number3 }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.createdAt }}</td>
            <td>{{ item.paymentStatus ? $i18n.messages[$i18n.locale].dashboard.table.paid : $i18n.messages[$i18n.locale].dashboard.table.unpaid }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="card">
      <h2>{{ $i18n.messages[$i18n.locale].dashboard.lifePrediction }}</h2>
      <table class="dashboard-table">
        <thead>
          <tr>
            <th>{{ $i18n.messages[$i18n.locale].dashboard.table.serialNumber }}</th>
            <th>{{ $i18n.messages[$i18n.locale].dashboard.table.id }}</th>
            <th>{{ $i18n.messages[$i18n.locale].dashboard.table.name }}</th>
            <th>{{ $i18n.messages[$i18n.locale].dashboard.table.gender }}</th>
            <th>{{ $i18n.messages[$i18n.locale].dashboard.table.birthday }}</th>
            <th>{{ $i18n.messages[$i18n.locale].dashboard.table.email }}</th>
            <th>{{ $i18n.messages[$i18n.locale].dashboard.table.createdAt }}</th>
            <th>{{ $i18n.messages[$i18n.locale].dashboard.table.paymentStatus }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in lifePredictionData" :key="item.id">
            <td>{{ item.serial_number }}</td>
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.gender === 'male' ? $i18n.messages[$i18n.locale].dashboard.table.male : $i18n.messages[$i18n.locale].dashboard.table.female }}</td>
            <td>{{ item.year }}-{{ item.month }}-{{ item.day }} {{ item.hour }}:00</td>
            <td>{{ item.email }}</td>
            <td>{{ item.createdAt }}</td>
            <td>{{ item.paymentStatus ? $i18n.messages[$i18n.locale].dashboard.table.paid : $i18n.messages[$i18n.locale].dashboard.table.unpaid }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import supabase from '../config/supabase'

export default {
  name: 'Dashboard',
  data() {
    return {
      divinationData: [],
      lifePredictionData: []
    }
  },
  async mounted() {
    await this.fetchDivinationData()
    await this.fetchLifePredictionData()
  },
  methods: {
    async fetchDivinationData() {
      try {
        const { data, error } = await supabase
          .from('divinations')
          .select('*')
          .order('created_at', { ascending: false })
        
        if (error) {
          console.error('获取断事数据失败:', error)
          return
        }
        
        this.divinationData = data.map(item => ({
          id: item.id,
          serial_number: item.serial_number,
          name: item.name,
          gender: item.gender,
          predictionType: item.prediction_type,
          number1: item.number1,
          number2: item.number2,
          number3: item.number3,
          email: item.email,
          createdAt: item.created_at,
          paymentStatus: item.payment_status
        }))
      } catch (error) {
        console.error('错误:', error)
      }
    },
    async fetchLifePredictionData() {
      try {
        const { data, error } = await supabase
          .from('life_predictions')
          .select('*')
          .order('created_at', { ascending: false })
        
        if (error) {
          console.error('获取测命数据失败:', error)
          return
        }
        
        this.lifePredictionData = data.map(item => ({
          id: item.id,
          serial_number: item.serial_number,
          name: item.name,
          gender: item.gender,
          year: item.year,
          month: item.month,
          day: item.day,
          hour: item.hour,
          email: item.email,
          createdAt: item.created_at,
          paymentStatus: item.payment_status
        }))
      } catch (error) {
        console.error('错误:', error)
      }
    },
    getPredictionTypeName(type) {
      return this.$i18n.messages[this.$i18n.locale].divination.predictionTypes[type] || type
    }
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  padding: 40px 20px;
  background-image: url('https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=deep%20starry%20sky%20background%2C%20mystical%20eastern%20atmosphere%2C%20dim%20blue%20light%2C%20cosmic%20energy&image_size=landscape_16_9');
  background-size: cover;
  background-position: center;
  position: relative;
}

.container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.container > * {
  position: relative;
  z-index: 2;
}

.container h1 {
  text-align: center;
  margin-bottom: 20px;
  color: white;
  text-shadow: 0 0 20px rgba(74, 111, 165, 0.8);
}

.container h2 {
  color: var(--secondary-color);
  margin-bottom: 20px;
  text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
}

.container p {
  text-align: center;
  margin-bottom: 40px;
  color: #ddd;
}

.card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--border-radius);
  padding: 30px;
  margin-bottom: 30px;
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

.dashboard-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.dashboard-table th, .dashboard-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  color: #ddd;
}

.dashboard-table th {
  background: rgba(74, 111, 165, 0.3);
  color: white;
  font-weight: bold;
}

.dashboard-table tr:hover {
  background: rgba(255, 255, 255, 0.05);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .container {
    padding: 30px 15px;
  }
  
  .card {
    padding: 20px;
  }
  
  .dashboard-table {
    font-size: 14px;
  }
  
  .dashboard-table th, .dashboard-table td {
    padding: 8px;
  }
}
</style>