<template>
  <div class="container" style="margin-top: 3em">
    <div class="d-flex justify-content-center h-100">
      <div class="card">
        <div class="card-header">
          <h3>Inscription</h3>
        </div>
        <div class="card-body">
          <form>
            <div class="input-group form-group">
              <input
                type="text"
                class="form-control"
                v-model="username"
                placeholder="Nom d'utilisateur"
              />
            </div>
            <div class="input-group form-group">
              <input
                type="password"
                class="form-control"
                v-model="password"
                placeholder="Mot de passe"
              />
            </div>
            <div class="input-group form-group">
              <input
                type="email"
                class="form-control"
                v-model="mail"
                placeholder="E-mail"
              />
            </div>

            <div class="form-group">
              <button
                type="button"
                v-on:click="inscription()"
                class="btn login_btn"
              >
                Inscription
              </button>
            </div>
            <strong v-if="error" style="color: red"
              >Erreur lors de l'inscription</strong
            >
            <strong v-if="empty" style="color: red"
            >Champ manquant</strong
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
//import router from "../router/index.js";
export default {
  name: "App",
  data() {
    return {
      username: "",
      mail: "",
      password: "",
      error: false,
      empty: false,
    };
  },

  methods: {
    inscription() {
      if (this.username != "" && this.password != "" && this.mail != "") {
        axios
          //.post('http://docketu.iutnc.univ-lorraine.fr:6234/users/signup',{'username': this.username, 'email': this.mail, 'passwd': this.password})
          .post("http://localhost:62349/users/signup", {
            username: this.username,
            email: this.mail,
            passwd: this.password,
          })
          .then(
            (response) => {
              if (response.status === 201) {
                this.$store.state.authenticated = true;
                localStorage.connected = true;
                console.log(localStorage);
                window.location.href = "/";
                console.log('redirected')
              }
            },
            (error) => {
              this.error = true;
              console.log(error);
            }
          );
      }else{
        this.empty = true;
      }
    },
  },
};
</script>
<style scoped src="@/assets/css/login.css">
</style>

