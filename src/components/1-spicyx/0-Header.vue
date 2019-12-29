<template>
  <header class="test">
    <div id= "shazam" class="fade-in"  :style="{'background-image': 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0,0, 0.6)), url('+require(`../../assets/1-spicyx/1-slider/${currentSlide}.jpg`)+')'}">
      <a id="left" @click="goToPrev"><i id="fa" class="fas fa-angle-left"></i></a>
      <a id="right" @click="goToNext"><i id="fa" class="fas fa-angle-right"></i></a>
      <h2>Welcome</h2>
      <h1>TO THE SPICYX</h1>
      <p id= "shazam" class="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, impedit.</p>
      <button>READ MORE</button>
    </div>
  </header>
</template>

<script lang='ts'>
  import Vue from 'vue'
  export default Vue.extend({
    data() {
      return {
        currentSlide: 0,
        timer: 0
      }
    },
    
    methods: {
      goToPrev() {
        this.currentSlide === 0  ? this.$set(this.$data, 'currentSlide', this.currentSlide = 2) 
                                 : this.$set(this.$data, 'currentSlide', this.currentSlide - 1);
        this.resetAnimation();
        clearInterval(this.timer);
        this.timer = setInterval(() => { this.goToNext(); }, 2500); 
       
      },
      goToNext() {
        this.currentSlide === 2  ? this.$set(this.$data, 'currentSlide', this.currentSlide = 0) 
                                 : this.$set(this.$data, 'currentSlide', this.currentSlide + 1);
        this.resetAnimation();
        
      },
      resetAnimation() {
        let slide: HTMLElement;
        slide = document.querySelector('#shazam') as HTMLElement;
        slide.classList.remove("fade-in");
        void slide.offsetWidth;
        slide.classList.add("fade-in");

        },
    },
    mounted() {
      this.timer = setInterval(() => { this.goToNext(); }, 2500);
    }
  })
</script>

<style lang="scss" scoped>
  @import "colors", "fonts", "./../queries";

  header {
    height: 100vh;
    background-color: black; 

    .fade-in {
	    -webkit-animation: fade-in-bck 0.5s ease-in both;
          animation: fade-in-bck 0.5s ease-in both;
    }

    @-webkit-keyframes fade-in-bck {
      0% {
        -webkit-transform: translateZ(80px);
                transform: translateZ(80px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateZ(0);
                transform: translateZ(0);
        opacity: 1;
      }
    }
    @keyframes fade-in-bck {
      0% {
        -webkit-transform: translateZ(80px);
              transform: translateZ(80px);
      opacity: 0;
    }
      100% {
        -webkit-transform: translateZ(0);
                transform: translateZ(0);
        opacity: 1;
      }
    }

    div {
      position: relative;
      text-align: center;
      color: white;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h2 {
        padding: 0.5em 0 0 0;
      }

      .body {
        width: 70%;
        font-family: "Prata", serif !important;
        font-size: 0.8rem;
        letter-spacing: 2px;
        padding-top: 1em;
        padding-bottom: 2.5em;

        @include tablet-portrait  { font-size: 1.1rem; }
        @include tablet-landscape { font-size: 1.2rem; }
        @include desktop          { font-size: 1.3rem; } 
        @include big-desktop      { font-size: 1.4rem; }
      }

      button {
        cursor: pointer;
        padding: 0.8em 1em;
        background-color: $primary-color;
        color: #eee;

        font-size: 0.8rem;
        font-weight: 900;
        font-family: "Assistant", serif !important;
        letter-spacing: 3px;

        outline: 7px solid $primary-color;
        border: 2px solid $secondary-color;

        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
        -webkit-transition-property: transform;
        transition-property: transform;

        &:hover {
          -webkit-transform: scale(1.1);
          transform: scale(1.1);
        }

        @include tablet-portrait  { padding: 0.6em 1.5em; }
        @include tablet-landscape { padding: 0.7em 2em;   }
        @include desktop          { padding: 0.8em 2.5em; } 
      }

      #fa {
        top: 50%;
        margin-top: -50px;
        font-size: 30px;
        color: $secondary-color;

        @include tablet-portrait  { font-size: 40px; }
        @include tablet-landscape { font-size: 50px; }
        @include desktop          { font-size: 60px; } 
        @include big-desktop      { font-size: 70px; }
      }

      #left {
        position: absolute;
        left: 0;
        margin-left: 1em; 
      }

      #right {
        position: absolute;
        right: 0;
        margin-right: 1em; 
      }
    }

    @include desktop { height: 75vh; } 
  }
</style>