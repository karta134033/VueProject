<template>
  <v-app id="blog">
    <v-card 
      height="100%" 
      style="background-color: rgba(255,255,255,0)"
    >
      <v-row
        no-gutters
      >
        <v-col 
          lg="10"
        >
          <iframe
            id="leftContent" 
            :src="iframeSrc" 
            :width="leftContentWidth" 
            :height="clientHeight" 
            frameborder="0" 
            scrolling="yes"
            style="background-color: rgba(255,255,255,1)"
          >
          </iframe>
        </v-col>
        <v-col lg="2"> 
          <v-navigation-drawer
            id="rightNav"
            absolute
            permanent
            :width="rightDrawerWidth"
            right
          >
            <v-layout 
              v-for="(ct, i) in content"
              :key="i"
              @mouseenter="forceClick(ct.title)"
            >
              <v-list-group
                dark
                sub-group
                no-action
              >
                <template v-slot:activator>
                  <v-list-item-icon class="pr-2">
                    <img :src="getImgUrl(ct.titleImg)" height="30px" width="30px">
                  </v-list-item-icon>
                  <v-list-item-content :id="ct.title">
                    <v-list-item-title>{{ct.title}}</v-list-item-title>
                  </v-list-item-content>
                </template>
                <v-list-item
                  v-for="(ctst, i) in ct.subTitle"
                  :key="i"
                  @click="changeContent(ct.title, ctst.src)"
                >
                  <v-list-item-title v-text="ctst.title"></v-list-item-title>
                </v-list-item>
              </v-list-group>
            </v-layout>
          </v-navigation-drawer>
        </v-col>
      </v-row>
    </v-card>
  </v-app>
</template>
<script>
import { BlogConfig } from '../config/BlogConfig'
export default {
  data () {
    return {
      iframeSrc: BlogConfig[0]['subTitle'][0]['src'],
      clientHeight: 0,
      clientWidth: 0,
      rightDrawerWidth: 0,
      leftContentWidth: 0,
      content: BlogConfig,
    }
  },
  methods: {
    changeContent(title, src) {
      if(title === 'News'){
        window.open(src);
        return
      }
      this.iframeSrc = src;
    },
    forceClick(id) {
      const tar = document.getElementById(id)
      tar.click();
      console.log('force click')
    },
    getImgUrl(src) {
      return require('@/assets/blog_nav' + src)
    }
  },
  created() {
    this.clientHeight = document.body.clientHeight;
    this.clientWidth = document.body.clientWidth;
    this.rightDrawerWidth = this.clientWidth/6;
    this.leftContentWidth = this.clientWidth*10/12 + 5;
  }
}
</script>
<style>
#blog {
    height: 100%;
    background-color: black;
    background-image: url('../assets/desktop.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    overflow: hidden;  /*隱藏捲動的bar*/
}
.zoom-in-ease-out {
  opacity: 0;
  transition: opacity 1.5s ease-out;
  animation: crescendo 1.5s;
}
</style>