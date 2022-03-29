<template>

</template>
<script>
import axios from 'axios';
 

export default {
  name: 'App',
  data() {
    return {
     events :''
    }
  },

   
  mounted:function(){
     axios
       .get('http://docketu.iutnc.univ-lorraine.fr:62346/events?user_id=' + localStorage.user_id)
       .then((response) => {
		    if (response.status === 200 ) {
            this.events = response.events
		        console.log(response);}
        }, (error) => {
        console.log(error);
        this.error = true;
        });
  }
}
</script>
<style scoped src="@/assets/css/event.css">
</style>


