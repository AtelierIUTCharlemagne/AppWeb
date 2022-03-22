import HomePage from '../components/HomePage.vue'
import LoginPage from '../components/LoginPage.vue'
import EventsPage from '../components/EventsPage.vue'
import SignUpPage from '../components/SignUpPage.vue'
import LogoutPage from '../components/LogoutPage.vue'
import {createRouter, createWebHistory} from 'vue-router'


const router = new createRouter({
    history: createWebHistory(),

    routes: [
      { path: '/', name: 'Home', component: HomePage },
      { path: '/signin', name: 'Login', component: LoginPage },
      { path: '/signup', name: 'SignUp', component: SignUpPage},
      { path: '/logout', name: 'Logout', component: LogoutPage},
      { path: '/events', name: 'Events', component: EventsPage},
    ]
  
  })

  export default router

  