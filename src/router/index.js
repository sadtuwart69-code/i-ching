import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Divination from '../views/Divination.vue'
import LifePrediction from '../views/LifePrediction.vue'
import Dashboard from '../views/Dashboard.vue'
import NumberGuide from '../views/NumberGuide.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/divination',
    name: 'Divination',
    component: Divination
  },
  {
    path: '/life-prediction',
    name: 'LifePrediction',
    component: LifePrediction
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/number-guide',
    name: 'NumberGuide',
    component: NumberGuide
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router