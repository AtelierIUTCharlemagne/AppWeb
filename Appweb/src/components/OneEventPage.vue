<template>
   <div id="map"></div>
   <div id="chatbox">  
    <form name="message" action="">
        <input name="usermsg" type="text" id="usermsg" />
        <button class="btn btn-primary" type="button" name="submitmsg"  id="submitmsg">Envoyer...</button>
        <input type="text" id="commentaires" disabled/>
    </form>
   </div>
</template>
<script>
// DON'T load Leaflet components here!
// Its CSS is needed though, if not imported elsewhere in your application.
import "leaflet/dist/leaflet.css"
import { LMap, LGeoJson } from "@vue-leaflet/vue-leaflet";
import leaflet from "leaflet"
import { onMounted } from "vue";

export default {
  setup(){
    let map;
    onMounted(() =>{
    let map = leaflet.map('map').setView([51.505, -0.09], 13);

    leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2FiZXkiLCJhIjoiY2wxY3BzbWxuMDl3bjNjbnI1b2U4czFhNyJ9.OvMQ-zUehNn2meQinofbqg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    center: [2.331518, 48.878671],
    zoom: 13,
    accessToken: 'pk.eyJ1IjoiY2FiZXkiLCJhIjoiY2wxY3BzbWxuMDl3bjNjbnI1b2U4czFhNyJ9.OvMQ-zUehNn2meQinofbqg'
    }).addTo(map);
  });

   document.addEventListener("DOMContentLoaded", function(e) {
    let resize = document.getElementById("map");
    resize.style.position = "absolute";
    resize.style.height = "800px";
    resize.style.width = "600px";
  });
  }
};
</script>
<style>
body {
    font:12px arial;
    color: #222;
    text-align:center; 
}
  
  

#commentaires{
  height:65vh;
  width:60vh;
  margin-left: 3em;
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
    margin:0 auto;
    margin-right: 3em;
     margin-top: 2em;
    padding:10px;
    background:#fff;
    height:80vh;
    width: 70vh;
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


