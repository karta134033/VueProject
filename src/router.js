import Vue from 'vue'
import VueRouter from 'vue-router'
import SlideMenu from '@/components/SlideMenu'
import Profile from '@/components/Profile'
import Blog from '@/components/Blog'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'blog',
            component: Blog
        },
        {
            path:'/profile',
            name:'profile',
            component: Profile
        },
        {
            path:'/slides',
            name:'slides',
            component: SlideMenu
        }
    ]

});