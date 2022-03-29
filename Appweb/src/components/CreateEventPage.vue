<template>
  <div class="container" style="margin-top: 3em">
    <div class="d-flex justify-content-center h-200">
      <div class="card">
        <div class="card-header">
          <h3>Créer un évenement</h3>
        </div>
        <div class="card-body">
          <form>
            <div class="input-group form-group">
              <input
                class="form-control"
                type="titre"
                v-model="title"
                placeholder="Titre"
              />
            </div>
            <Datepicker v-model="date"></Datepicker>
            <div class="input-group form-group">
              <input
                id="autocomplete"
                class="form-control"
                v-model="adress"
                placeholder="Adresse"
              />
            </div>

            <strong v-if="error" style="color: red"> Adress invalide</strong>
            <div class="form-group">
              <button
                type="button"
                v-on:click="create()"
                class="btn btn-primary"
              >
                Créer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import "@/assets/css/tailwind.css";

export default {
  name: "Event",
  components: { Datepicker },

  data() {
    return {
      date: null,
      title: "",
      adress: "",
      api_key: "5a43a5f3e4d79edf5e5279f4823d1e15",
      error: false,
      latitude: "",
      longitude: "",
    };
  },
  mounted() {
    var autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete")
    );
    autocomplete.setComponentRestrictions({ country: ["fr"] });
  },

  methods: {
    create() {
      let adress = document.getElementById("autocomplete").value;
      this.adress = adress;
      if (this.title != "" && this.adress != "") {
        axios
          .get(
            "http://api.positionstack.com/v1/forward?access_key=" +
              this.api_key +
              "&query=" +
              adress
          )
          .then(
            (response) => {
              if (response.status === 200) {
              }
              console.log(this.date);
              console.log(response.data["data"][0]);
              this.latitude = response.data["data"][0].latitude;
              this.longitude = response.data["data"][0].longitude;
            },
            (error) => {
              console.log(error);
              this.error = true;
            }
          );

        axios
          //.post("http://docketu.iutnc.univ-lorraine.fr:62346/events/create",
          .post(
            "http://localhost:62345/events/create",
            {
              title: "un titre",
              address: "à l iut",
              localisation: "48.2 6.2",
              date_events: "2022-12-12 00:00:00",
              user_id_user: 7,
            },
            {
              headers: { Authorization: `Bearer ${localStorage.token}` },
            }
          )
          .then(
            (response) => {
              if (response.status === 200) {
              }
              console.log(response);
            },
            (error) => {
              console.log(error);
              console.log(error.message);
              this.error = true;
            }
          );
      }
    },
  },
};
</script>

