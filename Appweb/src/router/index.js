import HomePage from '../components/HomePage.vue'
import LoginPage from '../components/LoginPage.vue'
import {createRouter, createWebHistory} from 'vue-router'

const router = new createRouter({
    history: createWebHistory(),

    routes: [
      { path: '/', 
        name: 'Home',
        component: HomePage 
      },
      { path: '/login', 
        name: 'Login',
        component: LoginPage
      },
     
    ]
  
  })

  export default router

  