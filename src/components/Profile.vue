<template>
  <div id="pinContainer">
    <div 
      class="section-part sticky"
      id="firstSection"
      :style="displayFirst">
      <section 
        class="panel" 
        style="background:rgba(0, 0, 0, 0.2)" 
        data-aos="flip-down"
        data-aos-offset="50"
        data-aos-duration="1000"
        >
        <b>ONE</b>
      </section>
    </div>
    <div style="height:1000px"></div>
    <div 
      class="section-part sticky"
      :style="displaySecond">
      <section 
        class="panel gray" 
        style="background:rgba(0, 0, 0, 0.5)" 
        data-aos="zoom-in-right"
        data-aos-offset="70"
        data-aos-duration="500"
        >
        <b>TWO</b>
      </section>
    </div>
    <div style="height:2000px"></div>
    <div 
      class="section-part row-content"
      id="thirdSection"
      :style="displayThird">
      <div
        class="left"
        data-aos="fade-up-right"
        data-aos-offset="500"
        data-aos-duration="0"
        > 
        <div style="margin-top:-500px">
          <h1> left</h1> 
          <h3 style="margin-top: 100px">A Wisconsin basement gave birth to one of the most influential narratives of our times – Dungeons and Dragons – sending its creator, E. Gary Gygax, on a strange and perilous journey of his own.</h3>
        </div> 
      </div>
      <div
        class="right"
        data-aos="fade-down-left"
        data-aos-offset="500"
        data-aos-duration="1500"
        >
          <h1>right</h1> 
      </div>
    </div>
    <div style="height:2000px;"></div>
    <div id="deepWater" style="height:2000px;" :style="fadeInBlack"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      counter: 0,
      scrollPos: 0,
      displayFirst: '',
      displaySecond: 'display:none;',
      displayThird: 'opacity:0;',
      animateIn:
        'opacity:1;\
        transition-property:opacity;\
        transition-duration:1s;',
      animateOut:
        'opacity:0;\
        transition-property:opacity;\
        transition-duration:1s;',
      blackFactor: 0.01,
      fadeInBlack: 'background-color: rgba(0, 0, 0, 0.01);'
    }
  },
  methods: {
    handleScroll () {
      var distanceOfSection = 500;
      var thirdSection = document.getElementById("thirdSection");
      var thirdRect = thirdSection.getBoundingClientRect();
      if (window.scrollY > distanceOfSection*7) {
        var deepWater = document.getElementById("deepWater").getBoundingClientRect();
        this.displayFirst = this.animateOut
        this.displaySecond = this.animateOut
        this.displayThird = this.animateOut
        this.blackFactor = this.blackFactor < 0.01 ? 0.01 : this.blackFactor
        if (deepWater.top <= 0){
          if ((document.body.getBoundingClientRect()).top > this.scrollPos) {
            console.log('data-scroll-direction', 'UP', 'counter: ', this.counter, 'this.blackFactor', this.blackFactor);
            this.counter--
            this.blackFactor = this.blackFactor > 0.01 ? this.blackFactor - 0.03 : this.blackFactor
            this.fadeInBlack = 'background-color: rgba(0, 0, 0,' + this.blackFactor +');'
          }
          else {
            console.log('data-scroll-direction', 'DOWN', 'counter: ', this.counter, 'this.blackFactor', this.blackFactor);
            this.counter++
            this.blackFactor = this.blackFactor < 0.85 ? this.blackFactor + 0.02 : this.blackFactor
            this.fadeInBlack = 'background-color: rgba(0, 0, 0,' + this.blackFactor +');'
          }
          this.scrollPos = (document.body.getBoundingClientRect()).top;
        }
        return;
      }
      if (window.scrollY > distanceOfSection*5) {
        this.displaySecond = this.animateOut
        this.displayThird = this.animateIn
        if (thirdRect.top <= 0){
          thirdSection.classList.add("sticky");
        }
        return;
      } 
      if (window.scrollY > distanceOfSection*2) {
        this.displayFirst = this.animateOut
        this.displaySecond = this.animateIn
        return;
      } 
      if (window.scrollY > distanceOfSection) {
        this.displayFirst = this.animateIn
        this.displaySecond = this.animateOut
        return;
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss">
@mixin bordered($height: 100%, $width:  100%) {
  margin: 0; 
  padding: 0;
  width: $width;
  height: $height;
}
body, html{
  @include bordered();
  #pinContainer {
     @include bordered();
    .section-part {
     @include bordered();
       text-align:center;
      .panel {
        margin: 0px auto;
        margin-top: 100px;
        width: 100%;
        height: 70%;
      }
    }
  }
}
.row-content {
  text-align:center;
  display: inline-block;
  .right {
    @extend .row-content;
    margin-left: -50px;
    height: 0; 
    width: 45%; 
    border-bottom: 500px solid rgba(0, 0, 0, 0.3); 
    border-left: 100px solid transparent; 
  }
  .left {
    @extend .row-content;
    margin-right: -50px;
    height: 0; 
    width: 45%; 
    border-top: 500px solid rgba(0, 0, 0, 0.3); 
    border-right: 100px solid transparent; 
  }
}
.sticky {
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
