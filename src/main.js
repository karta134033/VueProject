import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import Aos from 'aos'
import router from './router'
import '@mdi/font/css/materialdesignicons.css'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

new Vue({
  icons: {
    iconfont: 'mdi',
  },
  vuetify,
  created(){
    Aos.init();
  },
  render: h => h(App),
  router,
}).$mount('#app')
