<template>
<div>
   <div id="map"></div>
   <div id="participants">
      <h3>Personne ayant répondus :</h3>
      <ol class="list-group">
        <li class="list-group-item" v-for="user in participants" :key="user.id" >
          <p>{{user.pseudo}}</p>  <strong v-if="user.present.data == '48'">ne participe pas</strong>
           <strong v-if="user.present.data == '49'">participe</strong>
        </li>
      </ol>
      <button class="btn btn-success" type="button" id="participe" v-on:click="participe()">Je participe</button>
      <button class="btn btn-danger" type="button"  id="cancel" v-on:click="cancel()">Je participe pas</button>
      <strong style="color: red"  v-if="error">Vous participez déjà à l'évenement</strong>
   </div>
   <div id="chatbox">  
    <form name="message" action="">
        <input name="usermsg" type="text" id="usermsg" v-model="usermsg"  />
        <button class="btn btn-primary" type="button" name="submitmsg"  id="submitmsg">Envoyer...</button>
        <div id="story"  rows="5" cols="33">
          <ol class="list-group">
            <li class="list-group-item" v-for="comment in commentaires" :key="comment.id" >
             
            </li>
          </ol>
        </div>
    </form>
   </div>
   </div>
</template>
<script>
import "leaflet/dist/leaflet.css"
import axios from "axios";
import leaflet from "leaflet"
import { useRoute } from 'vue-router'

export default {
  data(){
    return {
      map : '',
      pos : ' ',
      lat : '',
      long : '',
      participants : '',
      usermsg : '',
      event_id : '',
      title : '',
      error: false,
      commentaires: '',
    }
  },

    

    mounted:function(){
 
    const route = useRoute();
    //Requete pour récupérer l'event en fonction de l'ID de la route
    axios.get("http://localhost:62345/events/" + route.params.id + "?embed=all")
    .then((response) => {
      if (response.status === 200) {
        console.log(response);
      }
      console.log(response);
      this.pos = response["data"].event.localisation;
      this.participants = response["data"].participants;
      this.commentaires = response["data"].comments;
      this.pos.replace(/\s/g, ' , ');
      this.lat = this.pos.slice(4);
      this.long = this.pos.slice(0, 4);
      this.token = response["data"].event.token;
      this.event_id = response["data"].event.id_events;
      this.title = response["data"].event.title;
      console.log(this.pos);
      console.log(this.lat);
      console.log(this.long);
      },(error) => {
        console.log(error);
        this.error = true;
      });
    
     //Map Leaflet
    let map = leaflet.map('map').setView([48.685638, 6.154725], 13);

    leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY2FiZXkiLCJhIjoiY2wxY3BzbWxuMDl3bjNjbnI1b2U4czFhNyJ9.OvMQ-zUehNn2meQinofbqg'
    }).addTo(map);

     let marker = L.marker([48.685638, 6.154725]).addTo(map);
    marker.bindPopup(this.title).openPopup();
    //Changement style div de la carte via le DOM (sinon invisible)
    document.addEventListener("DOMContentLoaded", function(e) {
    let resize = document.getElementById("map");
    resize.style.position = "absolute";
    resize.style.height = "800px";
    resize.style.width = "600px";});
   },

   methods: {
    participe(){
        axios
          //.post('http://docketu.iutnc.univ-lorraine.fr:62349/users/signin',{'email': this.mail, 'passwd': this.password})
         .post("http://localhost:62345/events/answer", {
            "present": true,
            "user_id_user": localStorage.user_id,
            "token": this.token,
            "events_id_events" : this.event_id
          })
          .then(
            (response) => {
              if (response.status === 201) {
              console.log("particpation enregistré");
              this.$router.go()
              }
              console.log(response);
            },
            (error) => {
              console.log(error);
              this.error = true;
            }
          );
    },

    cancel(){
       axios
          //.post('http://docketu.iutnc.univ-lorraine.fr:62349/users/signin',{'email': this.mail, 'passwd': this.password})
         .post("http://localhost:62345/events/answer", {
            "present": false,
            "user_id_user": localStorage.user_id,
            "token": this.token,
            "events_id_events" : this.event_id
          })
          .then(
            (response) => {
              if (response.status === 201) {
              console.log("particpation enregistré");
              this.$router.go()
              }
              console.log(response);
            },
            (error) => {
              console.log(error);
              this.error = true;
            }
          );
    }
   }
};
</script>
<style>
body {
    font:12px arial;
    color: #222;
    text-align:center; 
}
  
#participants{
  width: 40vh;
  margin-left: 45em ;
}
p{
  display: inline;
}
#commentaires{
  height:65vh;
  width:60vh;
  margin-left: 3em;
  display: inline-block;
  margin-top: 5em;
}

#usermsg{
  margin-left: 3em;
  margin-top: 1em;
  width: 500px;
}
  
a:hover { text-decoration:underline; }
  
#loginform { padding-top:18px; }
  
#loginform p { margin: 5px; }
  
#chatbox {
    text-align:left;
    margin-top: 2em;
    padding:10px;
    display: inline-block;
    background:#fff;
    height:70vh;
    width: 50vh;
    border:1px solid #ACD8F0;
    overflow:auto; }
  
#usermsg {
    width:395px;
    border:1px solid #ACD8F0; }
  
#submit { width: 60px; }
.welcome { float:left; }
  
.logout { float:right; }
  
.msgln { margin:0 0 2px 0; }
</style>


