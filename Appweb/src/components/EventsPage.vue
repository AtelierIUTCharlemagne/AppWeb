<template>
  <GMapMap
      :center="center"
      :zoom="7"
      map-type-id="terrain"
  >
    <GMapCluster>
      <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
      />
    </GMapCluster>
  </GMapMap>
</template>
<script>

 document.addEventListener("DOMContentLoaded", function(e) {
let resize = document.getElementsByClassName("vue-map");
resize.item(0).style.position = "absolute";
resize.item(0).style.height = "400px";
resize.item(0).style.width = "400px";

 });

export default {
  name: 'App',
  data() {
    return {
      center: {lat: 51.093048, lng: 6.842120},
      markers: [
        {
          position: {
            lat: 51.093048, lng: 6.842120
          },
        }
        , // Along list of clusters
      ]
    }
  }
}
</script>
<style scoped src="@/assets/styles/event.css">
</style>


