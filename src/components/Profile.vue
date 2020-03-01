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
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-folder</v-icon>
              </v-list-item-icon>
              <v-list-item-title>My Files</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-account-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Shared with me</v-list-item-title>
            </v-list-item>
            <v-list-item link>
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
}
</script>
