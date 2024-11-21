import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import RegisterUser from '../views/RegistrarUser.vue'
import Login from '../views/LoginUser.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/register',
    component: RegisterUser
  },
  {
    path: '/login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
