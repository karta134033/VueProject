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
body, html {
  background-color: black;
  background-image: url('./assets/beach.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
#app {
  height: 100%;
}
.div-align-middle:before {
  content: '';
  display: inline-block;
  vertical-align: middle ;
  height: 100%;
}
.animate-in {
  visibility: visible;
  opacity: 1;
  -webkit-transition: opacity 1s ease-out;
  -moz-transition: opacity 1s ease-out;
  -o-transition: opacity 1s ease-out;
  transition: opacity 1s ease-out;
}
.animate-out {
  visibility: hidden;
  opacity: 0;
  -webkit-transition: opacity 1s ease-out;
  -moz-transition: opacity 1s ease-out;
  -o-transition: opacity 1s ease-out;
  transition: opacity 1s ease-out;
}
.sticky {
	z-index: 1;
	position: fixed;
	top: 0;
	width: 100%;
}
</style>

