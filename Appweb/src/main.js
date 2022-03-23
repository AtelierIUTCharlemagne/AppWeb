import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import { createStore } from 'vuex';
import VueGoogleMaps from '@fawmi/vue-google-maps'
import axios from 'axios'
import VueAxios from 'vue-axios'

// Create a new store instance.
const store = createStore({
  state () {
        return {
            authenticated: localStorage.connected,
            username : ''
        }
    },
    mutations: {
        logout() {
            store.state.authenticated = false;
            localStorage.setItem('connected', false);
            console.log("Déconnecté");
            console.log(localStorage);
        }
    }

  })
//Assign app to a variable
let app = createApp(App)
//Assign the global variable before mounting
app.use(store)
//Add axios
app.use(VueAxios, axios)
//Add map
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAmL_NuO1yzynT2XWgh3FldmqEzYS-mCrE',
    }})
//Use router and mount app
app.use(router).mount('#app')


  