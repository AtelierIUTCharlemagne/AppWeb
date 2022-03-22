<template>
  <header>
   <nav class="navbar navbar-expand-lg navbar-light"  style="background-color: #ff5733;">
   <strong>Web App</strong>
     <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Accueil</router-link>
          </li>
          <li class="nav-item active">
            <router-link v-if="!this.$store.state.authenticated" class="nav-link" to="/signin">Connexion</router-link>
          </li>
           <li class="nav-item active">
            <router-link v-if="!this.$store.state.authenticated"  class="nav-link" to="/signup">Inscription</router-link>
          </li>
          <li class="nav-item active">
            <router-link v-if="this.$store.state.authenticated"  class="nav-link" to="/events">Évenements</router-link>
          </li>
          <li class="nav-item active">
            <router-link v-if="this.$store.state.authenticated" class="nav-link"  to="/logout">Déconnexion</router-link>
          </li>
        </ul>
      </div>
   </nav>

   <router-view/>
  </header>
</template>
<script>

</script>