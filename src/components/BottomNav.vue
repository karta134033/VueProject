<template>
  <v-bottom-navigation
    :value="activeBtn"
    grow
    color="teal"
    class="sticky-bottom"
  >
    <v-btn to='/profile'>
      <span>Profile</span>
      <v-icon>mdi-file-document</v-icon>
    </v-btn>

    <v-btn to='/'>
      <span>Home</span>
      <v-icon medium>mdi-home</v-icon>
    </v-btn>

    <v-btn>
      <span>Nearby</span>
      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
  export default {
    name: 'BottomNav',
    data () {
      return {
        activeBtn: 1,
      }
    },
  }
</script>
<style scoped>
.sticky-bottom {
  z-index: 1;
  position: fixed;
  bottom: 0;
  width: 100%;
} 
</style>