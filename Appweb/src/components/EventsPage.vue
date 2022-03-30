<template>
<ol class="list-group">
  <li class="list-group-item" v-for="event in events" :key="event.id" >
    <div type="button" v-on:click="redirection(event.id_events)" >
      <h3>Titre  {{ event.title }} <br> Adresse : {{event.address}} <br> Date : {{event.date_events}}</h3>
    </div>
  </li>
</ol>
</template>
<script>
import axios from 'axios';
import router from "../router/index.js";

export default {
  name: 'App',
  data() {
    return {
     events :'',
    }
  },

  methods: {
    redirection(id){
      router.push('/event/' + id);
    }
  },
  
  mounted:function(){
     axios
       .get('http://localhost:62345/events?user_id=' + localStorage.user_id)
       .then((response) => {
		    if (response.status === 200 ) {
            this.events = response["data"].events
		        console.log(response);
            
            }
        }, (error) => {
        console.log(error);
        this.error = true;
        });
  }
}
</script>
<style scoped src="@/assets/css/event.css">
</style>


