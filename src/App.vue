<template>
  <div id="app">
    <router-view></router-view>
    <BottomNav/>
  </div>
</template>

<script>
import BottomNav from './components/BottomNav.vue'
import '@/assets/css/style.css'
export default {
  name: 'App',
  date() {
    return {
      preloadImg: Image()
    }
  },
  components: {
    BottomNav,
  },
}
</script>