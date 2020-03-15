<template>
  <div id="project">
    <v-card
      class="mx-auto"
      width="500px"
      height="50px"
    >
      <v-list-item-title class="headline mb-1 font-weight-black">
        在<a href="https://www.gomaji.com" target="_blank" style="color:orange">GOMAJI</a>開發過的大型專案
      </v-list-item-title>
    </v-card>
    <div
      class="mx-auto mt-10"
      height="70%"
      style="width: 80%; background:rgba(0, 0, 0, 0.0);"
    >
      <v-row justify="center">
        <v-col
          cols="4"
          v-for="(p, index) of project"
          :key="index"
          :data-aos-duration="200 + index*200"
        >
          <v-card
            class="ma-2"
            text-color="white"
            data-aos="fade-down-left"
            style="width: 100%; height:200px"
            @click="openLink(p.link)"
          >
            <div 
              :style="{
              background: 'url(' + p.img + ')',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              opacity: '0.1',
              height: '100%',
              width: '100%',
              zIndex: '-1',
              position:'absolute'
            }"></div>
            <div class="mr-2 ml-2">
              <h3>{{p.title}}</h3>
              <br/>
              <h4>
                <div>
                  <div style="float: left">技術:</div>
                  <v-chip  
                    v-for="(pt, idx) of p.tech"
                    :key="idx"
                    @click="openLink(pt)"
                  >
                    {{pt}}
                  </v-chip>
                </div>
                <div v-if="p.describe">
                  <div style="float: left">描述:</div> 
                  <div>
                    {{p.describe}}
                  </div>
                </div>
              </h4>
            </div>
          </v-card>
        </v-col>  
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      project:[
        {
         title: 'App下載頁',
         link: 'https://www.gomaji.com/app-download',
         tech: ['RWD', 'api外網對內網轉發'],
         describe: '開發、測試一切順利的情況下，卻在正式的時候出了無法找出的問題，最後原因是因為簡訊功能有限定內網使用，所以需要在做內網倒轉',
         img: 'https://i.imgur.com/qx13aWA.jpg' 
        },
        {
         title: '海外頻道頁',
         link: 'https://www.gomaji.com/ch/21',
         tech: ['Ajax', 'cURL'],
         describe: '實習時第一個碰到的大型專案。',
         img: 'https://i.imgur.com/Qs0hG2f.jpg' 
        },
        {
         title: '周年慶活動頁',
         link: 'https://event.gomaji.com/event/201906/gomaji-617-shopping/',
         tech: ['Ajax', 'Cookie', 'Cache', 'RWD', 'Session'],
         describe: '活動期間，各個時段有各時段該呈現的商品，開發時必須克服測試上的困難，以及後端前端的配合。',
         img: 'https://i.imgur.com/QV3rr24.jpg'  
        },
        {
         title: '酒食節活動頁',
         link: 'https://event.gomaji.com/event/201909/beerfestival/',
         tech: ['Ajax', 'Cookie', 'Cache', 'Redis', 'RWD', 'Rundeck', 'Session'],
         describe: '因為此活動需要有”抽獎”的功能，為了避免DB負荷不了一瞬間進來的請求，因此必須導入Redis以及排程執行的程式。',
         img: 'https://i.imgur.com/ZZsvHUX.jpg'  
        },
        {
         title: 'HTML 內容嵌入',
         link: 'https://hackmd.io/@karta134033/rJAR3Fk3H',
         tech: ['Data-Attribute', 'Cross-site Script', 'Ajax'],
         describe: '跨網域的HTML外嵌方式，以B點寫好的js替A點做內容呈現，只要有網路連線，就算開記事本也能嵌入html。',
         img:'https://i.imgur.com/dFJdVvu.png'
        }
      ],
      profileSkills: ['Machine Learning', 'JavaScript', 'PHP', 'ES6', 'SQL']
    }
  },
  methods: {
    openLink(link){
      if(!link.includes('http')) window.open('http://google.com/search?q='+link);
      window.open(link);
    }
  }
}
</script>