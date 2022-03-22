<template>
<h1>home Page</h1>
<h3 v-if="this.$store.state.authenticated">Bienvenue {{this.$store.state.username}}</h3>
</template>

<style scoped src="@/assets/styles/home.css">
</style>
