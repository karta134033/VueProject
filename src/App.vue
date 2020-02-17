<template>
  <div id="pinContainer">
    <div style="height:500px"></div>
    <div 
      class="section-part sticky"
      :style="display">
      <section 
        class="panel" 
        style="background:hsla(168,100%,50%,0.3);" 
        data-aos="flip-down"
        data-aos-offset="50"
        data-aos-duration="1000">
        <b>ONE</b>
      </section>
    </div>
    <div style="height:500px"></div>
    <div 
      class="section-part">
      <section 
        class="panel gray" 
        style="background:hsla(0,100%,0%,0.3);" 
        data-aos="zoom-in-right"
        data-aos-offset="70"
        data-aos-duration="500">
        <b>TWO</b>
      </section>
    </div>
    <div style="height:500px"></div>
    <div 
      class="section-part row-content">
      <div
        class="left"
        data-aos="fade-up-right"
        data-aos-offset="100"
        data-aos-duration="1000"> 
        left 
      </div>
      <div
        class="right"
        data-aos="fade-down-left"
        data-aos-offset="100"
        data-aos-duration="1500"> 
        right
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      counter: 0,
      scrollPos: 0,
      display: ''
    }
  },
  methods: {
    handleScroll () {
      if (window.scrollY > 200){
        this.display = 'opacity:0;transition-property:opacity;transition-duration: 1s;'
      }
      if (window.scrollY < 100){
        this.display = 'opacity:1;transition-property:opacity;transition-duration: 1s;'
      }         
      if ((document.body.getBoundingClientRect()).top > this.scrollPos){
        console.log('data-scroll-direction', 'UP', 'counter: ', this.counter);
        this.counter--
      }
      else{
        console.log('data-scroll-direction', 'DOWN', 'counter: ', this.counter);
        this.counter++
      }
      this.scrollPos = (document.body.getBoundingClientRect()).top;
      // if (window.scrollY > 1000) {
      //   this.display = ""
      //   console.log('counter', this.counter)
      // }
      // else {
      //   this.display = "display: none"
      // }
      // this.isUserScrolling = (window.scrollY > 1000);

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
  background-color: black;
  background-image: url('./assets/beach.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
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
        border-radius: 50px;
      }
    }
  }
}
.row-content {
  text-align:center;
  display: inline-block;
  .left, .right{
    @extend .row-content;
    width:40%;
    height:50%;
    background:rgba(0, 0, 0, 0.3);
    border-radius: 50px;
  }
}
.sticky {
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
