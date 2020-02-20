<template>
  <div style="height:250px; overflow:hidden;"> 
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
          <v-card-title class="teal">
            <strong class="subheading">Get connected with us on social networks!</strong>
            <v-icon>mdi-file-document</v-icon>
          </v-card-title>
          <v-card-title class="teal">
            <strong class="subheading">Get connected with us on social networks!</strong>
            <v-icon>mdi-file-document</v-icon>
          </v-card-title>
          <v-card-title class="teal">
            <strong class="subheading">Get connected with us on social networks!</strong>
            <v-icon>mdi-file-document</v-icon>
          </v-card-title>

          <v-card-text class="py-2 white--text text-end black">
            {{ new Date().getFullYear() }} — <strong>Neil</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-app>
  </div>
</template>