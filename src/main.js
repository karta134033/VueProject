import Vue from 'vue'
import App from './App.vue'
import Aos from 'aos'
import 'aos/dist/aos.css'
Vue.config.productionTip = false

new Vue({
  created(){
    Aos.init();
  },
  render: h => h(App),
}).$mount('#app')
