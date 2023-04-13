<template>
  <div ref="cesiumContainer" id="cesiumContainer">
  </div>
</template>



<script setup>
import {onMounted} from 'vue'

import {
  Viewer,
  OpenStreetMapImageryProvider,
  ImageryLayer,
  TileMapServiceImageryProvider,
  buildModuleUrl } from "cesium";

import "cesium/Build/Cesium/Widgets/widgets.css";

//
//

onMounted(() => {
  console.log( "mounted")
  const osm = new OpenStreetMapImageryProvider({
    url : 'https://a.tile.openstreetmap.org/'
  });

  console.log( "mounted osm", osm)

  const viewer = new Viewer("cesiumContainer", {
    imageryProvider: osm,
    geocoder: false,
    animation: false,
    timeline: false
  });

  console.log( "mounted viewer", viewer)
})
</script>



<style scoped>
</style>
