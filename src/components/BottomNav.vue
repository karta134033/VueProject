<template>
  <div id="bottomNav" class="animate-in">
    <v-bottom-navigation
      :value="activeBtn"
      grow
      color="teal"
      class="sticky-bottom"
    >
      <v-btn @click="scrollToTop" to='/profile'>
        <span>Profile</span>
        <v-icon>mdi-file-document</v-icon>
      </v-btn>

      <v-btn @click="scrollToTop" to='/'>
        <span>Home</span>
        <v-icon medium>mdi-home</v-icon>
      </v-btn>

      <v-btn @click="scrollToTop" to='/slides'>
        <span>Slides</span>
        <v-icon>mdi-file-powerpoint</v-icon>
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
    scrollToTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    handleScroll () {
      const bottomNav = document.getElementById('bottomNav')
      if ((document.body.getBoundingClientRect()).top > this.scrollPos) {  //代表向上滑動
        bottomNav.classList.add('animate-in')
        bottomNav.classList.remove('animate-out')

      }
      else {
        bottomNav.classList.add('animate-out')
        bottomNav.classList.remove('animate-in')
      }
      console.log('document.body.getBoundingClientRect()).top', (document.body.getBoundingClientRect()).top, 'scrollPos', this.scrollPos)
      this.scrollPos = (document.body.getBoundingClientRect()).top
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
</style>