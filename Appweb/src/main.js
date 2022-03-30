import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import { createStore } from 'vuex';
import VueGoogleMaps from '@fawmi/vue-google-maps'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


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
            localStorage.clear();
            console.log("Déconnecté");
            console.log(localStorage);
        }
    }

  })
//Assign app to a variable
const app = createApp(App)
//Assign the global variable before mounting
app.use(store)
//Datepick
app.component('Datepicker', Datepicker);
//Add axios
app.use(VueAxios, axios)
//Use router and mount app
app.use(router).mount('#app')


  