# Wrapping views

Was a long journey, but we are arriving to the final. We have created a lot of views trying to show most of the **zircle ui** features. Now, we have to wire up our views into the **App.vue** file.

Replace the App.vue code with this and voila! Our app should be working right now :)


```vue result
<template>
  <z-canvas :views='$options.components'></z-canvas>
</template>
<script>
import Vue from 'vue'
export default {
  components: {
    roomliving: () => import('./views/room-living'),
    home: () => import('./views/home'),
    scenes: () => import('./views/scenes'),
    settings: () => import('./views/settings'),
    rooms: () => import('./views/rooms'),
    maps: () => import('./views/maps')
  },
  mounted () {
    this.$zircle.setView('home')
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');
@import url('https://use.fontawesome.com/releases/v5.1.0/css/all.css');
</style>

```
