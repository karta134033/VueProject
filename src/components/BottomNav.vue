<template>
  <div id="bottomNav" class="animate-in">
    <v-bottom-navigation
      :value="activeBtn"
      grow
      class="sticky-bottom"
    >
      <v-btn @click="zoomInBlog('/profile')">
        <span>Profile</span>
        <v-icon style="color:white;">mdi-file-document</v-icon>
      </v-btn>

      <v-btn @click="scrollToTop" to='/'>
        <span>Blog</span>
        <v-icon medium style="color:white;">mdi-home</v-icon>
      </v-btn>

      <v-btn @click="zoomInBlog('/slides')">
        <span>Slides</span>
        <v-icon style="color:white;">mdi-file-powerpoint</v-icon>
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
    zoomInBlog (routingPath) {
      const blog = document.getElementById('blog') ?  document.getElementById('blog') : blog;
      const rightNav = document.getElementById('rightNav') ?  document.getElementById('rightNav') : rightNav;
      const leftContent = document.getElementById('leftContent') ?  document.getElementById('leftContent') : leftContent;
      const self = this;  // 避免this 綁定錯誤
      if (blog) {
        asyncSleep(500);
      }
      else {
        this.$router.push({ path: routingPath });
      }
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      async function asyncSleep(sec) {
        leftContent.classList.add('ease-out-left');
        rightNav.classList.add('ease-out-right');
        await sleep(sec);
        blog.classList.add('zoom-in-ease-out');
        await sleep(sec);
        self.$router.push({ path: routingPath });
      }
    },
    handleScroll () {
      const bottomNav = document.getElementById('bottomNav');
      if ((document.body.getBoundingClientRect()).top > this.scrollPos) {  //代表向上滑動
        bottomNav.classList.add('animate-in');
        bottomNav.classList.remove('animate-out');

      }
      else {
        bottomNav.classList.add('animate-out');
        bottomNav.classList.remove('animate-in');
      }
      console.log('document.body.getBoundingClientRect()).top', (document.body.getBoundingClientRect()).top, 'scrollPos', this.scrollPos)
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
span{
  color:white
}
.sticky-bottom {
  z-index: 1;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: black;
}
</style>