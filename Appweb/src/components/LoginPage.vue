<template>
  <div class="container" style="margin-top: 3em">
    <div class="d-flex justify-content-center h-100">
      <div class="card">
        <div class="card-header">
          <h3>Connexion</h3>
        </div>
        <div class="card-body">
          <form>
            <div class="input-group form-group">
              <input
                class="form-control"
                type="email"
                v-model="mail"
                placeholder="E-mail"
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
            <div class="row align-items-right remember">
              <input type="checkbox" />Se souvenir
            </div>
            <strong v-if="error" style="color: red">
              Username ou mot de passe incorrect</strong
            >
            <div class="form-group">
              <button
                type="button"
                v-on:click="connexion()"
                class="btn login_btn"
              >
                Connexion
              </button>
            </div>
          </form>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-center links">
            Pas inscrit ? <a href="#">Inscription</a>
          </div>
          <div class="d-flex justify-content-center">
            <a href="#">Mot de passe oublié ?</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import router from "../router/index.js";
import axios from "axios";
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "App",
  data() {
    return {
      mail: "",
      password: "",
      error: false,
    };
  },

  methods: {
    connexion() {
      if (this.mail != "" && this.password != "") {
        axios
          //.post('http://docketu.iutnc.univ-lorraine.fr:62349/users/signin',{'email': this.mail, 'passwd': this.password})
          .post("http://localhost:62349/users/signin", {
            email: this.mail,
            passwd: this.password,
          })
          .then(
            (response) => {
              if (response.status === 200) {
                this.$store.state.authenticated = true;
                const jwt = VueJwtDecode.decode(response.data["data"]);
                localStorage.setItem("connected", true);
                localStorage.setItem("token", response.data["data"]);
                localStorage.setItem("user_id", jwt.id);
                localStorage.setItem("username", jwt.username);
                console.log(localStorage);
                router.push("/");
              }
              console.log(response);
            },
            (error) => {
              console.log(error);
              this.error = true;
            }
          );
      }
    },
  },
};
</script>
<style scoped src="@/assets/css/login.css">
</style>

