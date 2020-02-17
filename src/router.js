import Vue from 'vue'
import VueRouter from 'vue-router'

import Profile from '@/components/Profile'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path:'/profile',
            name:'profile',
            component: Profile
        }
    ]

});