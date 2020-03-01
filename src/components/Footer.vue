<template>
  <div style="height:120px; overflow:hidden;"> 
    <v-app style="background-color:black;">
      <v-footer
        class="text-end"
        dark
        padless
      >
        <v-card
          class="flex"
          flat
          tile
        >
          <v-card-title 
            class="teal" 
            style="height:50px; display: flex; justify-content: center;"
          >
            <div style="display: flex; justify-content: center;">
              <div class="pr-12">
                <a href="https://www.facebook.com/profile.php?id=100000268487554" target="_blank">
                  <img src="../assets/social/facebook.png" height="30px" width="30px">
                </a>
              </div>
              <div>
                <a href="https://github.com/karta134033?tab=repositories" target="_blank">
                  <img src="../assets/social/cat.png" height="30px" width="30px">
                </a>
              </div>
              <div class="pl-12">
                <a href="https://www.instagram.com/binglian_chuang/?hl=zh-tw" target="_blank">
                  <img src="../assets/social/instagram.png" height="30px" width="30px">
                </a>
              </div>
            </div>
          </v-card-title>
          <v-card-text class="py-2 white--text text-end black">
            {{ new Date().getFullYear() }} — <strong>Neil</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-app>
  </div>
</template>