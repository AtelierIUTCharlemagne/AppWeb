import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
        return {
            authenticated: false,
            username : ''
        }
    },
    mutations: {
        logout() {
            store.state.authenticated = false
        }
    }

  })
//Assign app to a variable
let app = createApp(App)
//Assign the global variable before mounting
app.use(store)
//Use router and mount app
app.use(router).mount('#app')


  