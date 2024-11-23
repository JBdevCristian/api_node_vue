import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import RegisterUser from '../views/RegistrarUser.vue'
import Login from '../views/LoginUser.vue'
import User from '../views/UserU.vue'
import Edit from '../views/editUsers.vue'
import axios from 'axios'

function adminAuth(to, from, next) {
  if (localStorage.getItem('token') != undefined) {
    var req = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    }

    console.log(req)
     axios.post("http://localhost:8686/validate",{},req).then(res => {
      console.log(res)
      next()
    }).catch(err => {
      console.log(err.response)
      next("/login")
    })
    
  } else {
    next("/login")
  }
}

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
  },
  {
    path: '/admin/user',
    name: 'Users',
    component: User,
    beforeEnter: adminAuth
  },
  {
    path: '/admin/user/edit/:id',
    name: 'UserEdit',
    component: Edit,
    beforeEnter: adminAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
