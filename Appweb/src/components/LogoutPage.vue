<template>
  <div class="container" style="margin-top: 3em;">
	<div class="d-flex justify-content-center h-100">
		<h1>Vous êtes maintenant déconnecté</h1>
	</div>
</div>
</template>
<script>

export default {
  name: 'Logout',
 
    mounted:function(){
          this.$store.commit('logout')
    },
    
  
}
</script>
<style scoped src="@/assets/css/login.css">
</style>

