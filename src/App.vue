<template>
  <div id="app">
    <router-view></router-view>
    <BottomNav/>
  </div>
</template>

<script>
import BottomNav from './components/BottomNav.vue'

export default {
  name: 'App',
  components: {
    BottomNav,
  },
}
</script>
<style>
body, html{
  background-color: black;
  background-image: url('./assets/beach.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}  
</style>

