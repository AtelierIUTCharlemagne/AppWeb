<template>
  <div id="app">
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style="background-color: #ff5733"
    >
      <strong> Reunionnou</strong>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Accueil</router-link>
          </li>
          <li class="nav-item active">
            <router-link
              v-if="!this.$store.state.authenticated"
              class="nav-link"
              to="/signin"
              >Connexion</router-link
            >
          </li>
          <li class="nav-item active">
            <router-link
              v-if="!this.$store.state.authenticated"
              class="nav-link"
              to="/signup"
              >Inscription</router-link
            >
          </li>
          <li class="nav-item active">
            <router-link
              v-if="this.$store.state.authenticated"
              class="nav-link"
              to="/events"
              >Évenements</router-link
            >
          </li>
          <li class="nav-item active">
            <router-link
              v-if="this.$store.state.authenticated"
              class="nav-link"
              to="/create"
              >Créer un évenement</router-link
            >
          </li>
          <li class="nav-item active">
            <router-link
              v-if="this.$store.state.authenticated"
              class="nav-link"
              to="/logout"
              >Déconnexion</router-link
            >
          </li>
        </ul>
      </div>
    </nav>

    <router-view />
    <!-- test -->

    <!-- FOOTER
  <footer class="container">
    <p class="float-end"><a href="#">Back to top</a></p>
    <p>&copy; 2017–2021 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
  </footer>-->

    <link
      rel="canonical"
      href="https://getbootstrap.com/docs/5.1/examples/carousel/"
    />

    <!-- fin -->
  </div>
</template>
<script>
</script>

<style>
body {
  padding: 0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
.marketing {
  margin-top: 2rem;
}
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>