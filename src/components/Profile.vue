<template>
  <div>
    <v-app>
      <v-navigation-drawer
        class="sticky"
        style="z-index:2; background-color:rgba(255, 255, 255, 0);"
        permanent
        floating
        expand-on-hover
      >
        <v-list style="background-color:rgba(255, 255, 255, 1)">
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img :src="profile_picture"></v-img>
            </v-list-item-avatar>
          </v-list-item>
          <v-list-item link >
            <v-list-item-content>
              <v-list-item-title class="title">Neil Chuang</v-list-item-title>
              <v-list-item-subtitle>karta134033@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list
            nav
            dense
            style="background-color:rgba(255, 255, 255, 1)"
          >
            <v-list-item link @click="scrollTo('profile')">
              <v-list-item-icon>
                <v-icon>mdi-account-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>
            <v-list-item link @click="scrollTo('project')">
              <v-list-item-icon>
                <v-icon>mdi-folder</v-icon>
              </v-list-item-icon>
              <v-list-item-title>開發過的專案</v-list-item-title>
            </v-list-item>
            <v-list-item link @click="scrollTo('deepWater')">
              <v-list-item-icon>
                <v-icon>mdi-star</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Starred</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-list>
      </v-navigation-drawer>
      <PersonalInfo/>
    </v-app>
  </div>
</template>

<script>
import PersonalInfo from './PersonalInfo.vue'
export default {
  data() {
    return {
      profile_picture: require('../assets/profile_picture.jpg')
    }
  },
  components: {
    PersonalInfo
  },
  methods: {
    scrollTo(id) {
      const idSection = document.getElementById(id);
      const idPosition = this.getPosition(idSection);
      if(id === 'project') idPosition.y = idPosition.y + 1000;
      window.scrollTo({ top: idPosition.y, behavior: 'smooth' });
      console.log(id)
    },
    getPosition (element) {
      var x = 0;
      var y = 0;
      while ( element ) {
        x += element.offsetLeft - element.scrollLeft + element.clientLeft;
        y += element.offsetTop - element.scrollLeft + element.clientTop;
        element = element.offsetParent;
      }
      return { x: x, y: y };
    }
  }
}
</script>
