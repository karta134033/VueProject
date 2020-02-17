<template>
  <div id="bottomNav" class="animate-in">
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
  </div>
</template>
<script>
  export default {
    name: 'BottomNav',
    data () {
      return {
        activeBtn: 1,
      }
    },
    methods: {
    handleScroll () {
			if ((document.body.getBoundingClientRect()).top > this.scrollPos) {  // 用來觸發下方的Nav
        document.getElementById('bottomNav').classList.add("animate-in")
        document.getElementById('bottomNav').classList.remove("animate-out")

			}
			else {
        document.getElementById('bottomNav').classList.add("animate-out")
        document.getElementById('bottomNav').classList.remove("animate-in")
			}
      this.scrollPos = (document.body.getBoundingClientRect()).top;
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
  }
</script>
<style scoped>
.sticky-bottom {
  z-index: 1;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.animate-in {
  visibility: visible;
  opacity: 1;
  -webkit-transition: opacity 2s ease-out;
  -moz-transition: opacity 2s ease-out;
  -o-transition: opacity 2s ease-out;
  transition: opacity 2s ease-out;
}
.animate-out {
  visibility: hidden;
  opacity: 0;
  -webkit-transition: opacity 2s;
  -moz-transition: opacity 2s;
  -o-transition: opacity 2s;
  transition: opacity 2s;
}
</style>