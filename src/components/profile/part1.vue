<template>
  <div id="profile">
    <v-card
       class="mx-auto"
       width="500px"
       height="50px"
     >
       <v-list-item-title class="headline mb-1 font-weight-black">Profile</v-list-item-title>
     </v-card>
     <v-card
       class="mx-auto mt-10"
       width="1000px"
       height="70%"
     >
     <v-row>
       <v-col
         class="ml-10"
         cols="8" 
         style="text-align:left;"
       >
       <h4> 
         <p>本名莊秉廉，畢業於中央大學資管系，現為交通大學資管所研究生，Lab研究方向為Data Mining 與 Machine Learning。</p>
         <p>曾在GOMAJI擔任網頁前端實習的工作，程式上主要以JS、JQuery、PHP、ES6、HTML、SQL等……為主，</p>
         <p>碰到的框架以React.js+Redux為主、Laravel以及Vue.js為輔，</p>
         <p>對於前端的應用包含CSS、Cookies、Session、Cache Redis、Ajax等……有實務上的應用與操作經驗。</p>
         <p>除了上述的內容外還有Git版本控制、UAT&STAGE測試、Docker、Docker-compose、k8s、Linus指令、自動化程式等……工</p>
       </h4>
       </v-col>
       <v-col cols="3">
         <v-chip
           v-for="(skill, index) of profileSkills"
           :key="index"
           class="ma-2"
           color="teal"
           text-color="white"
           data-aos="fade-down-left"
           :data-aos-duration="200 + index*200"
           style="width: 180px;"
         >
           <v-avatar left>
             <v-icon>mdi-checkbox-marked-circle</v-icon>
           </v-avatar>
           {{skill}}
         </v-chip>  
       </v-col>
     </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      profileSkills: ['Machine Learning', 'JavaScript', 'PHP', 'ES6', 'SQL']
    }
  }
}
</script>