<template>
  <section>
    <h3 class="alt-title">Discover</h3>
    <div class="title">
      <h3>ABOUT US</h3>
      <i id="fork" class="fas fa-utensils"></i>
    </div>
    <img id="slider-about-us" class="fade-in" :src="require(`../../assets/1-spicyx/2-about-us/${currentSlide}.png`)" alt="" />
    <p class="body">
      Amet consectetur adipisicing elit. Aliquam minus aliquid, itaque illum assumenda repellendus dolorem, dolore numquam totam saepe, porro delectus, libero enim odio quo. Explicabo ex sapiente sit eligendi, facere voluptatum! Quia vero rerum sunt porro architecto corrupti eaque corporis eum, enim soluta, perferendis dignissimos, repellendus, beatae laboriosam.
    </p>
    <ul class="list">
      <li><i class="fas fa-utensils"></i> Lorem ipsum dolor, consectetur adipisicing elit.</li>
      <li><i class="fas fa-hamburger"></i> Tempor incididunt, consectetur adipisicing elit.</li>
      <li><i class="fas fa-pizza-slice"></i> Lorem ipsum dolor, consectetur adipisicing elit.</li>
      <li><i class="fas fa-pepper-hot"></i> Incididunt ut labore, consectetur adipisicing elit.</li>
      <li><i class="fas fa-drumstick-bite"></i> Lorem ipsum dolor, consectetur adipisicing elit.</li>
      <li><i class="fas fa-candy-cane"></i> Exercitation ullamco, consectetur adipisicing elit.</li>
      <li><i class="fas fa-ice-cream"></i> Lorem ipsum dolor, consectetur adipisicing elit.</li>
      <li><i class="fas fa-carrot"></i> Aliquip ex ea commodo, consectetur adipisicing elit.</li>
    </ul>
  </section>
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
      goToNext() {
        this.currentSlide === 4  ? this.$set(this.$data, 'currentSlide', this.currentSlide = 0) 
                                 : this.$set(this.$data, 'currentSlide', this.currentSlide + 1);
        this.resetAnimation();
      },
      resetAnimation() {
        let slide: HTMLElement;
        slide = document.querySelector('#slider-about-us') as HTMLElement;
        slide.classList.remove("fade-in");
        void slide.offsetWidth;
        slide.classList.add("fade-in");
      },
    },
    mounted() {
      this.timer = setInterval(() => { this.goToNext(); }, 2000);
    }
  })
</script>



<style lang="scss" scoped>
  @import "colors", "fonts", "./../queries";

  section {
  padding: 4em 2em;
  display: grid;
  align-items: center;
  justify-items: center;
  justify-content: center;
  grid-template-rows: 10px 70px repeat(3, auto);
  grid-row-gap: 2em;
  grid-template-columns: minmax(100px, 500px);
  grid-template-areas:    "alt"
                          "title" 
                          "body" 
                          "list"    
                          "img";                         

  .alt-title {
    grid-area: alt;
    font-family: 'Tangerine', cursive;
    font-size: 2.5rem;
  }
  
  .title {
    grid-area: title;
    position: relative;
    align-self: start;

    &:after {
      content: "";
      width: 100%;
      height: 3px;
      background-color: $secondary-color;
      position: absolute;
      bottom: -20px;
    }
  }

  #fork {
    font-size: 45px;
    color: $primary-color;
    background-color: white;
    padding-left: 10px;
    padding-right: 10px;
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }

  .body {
    grid-area: body;
    color: #333333;
  }

  .list {
    grid-area: list;
    justify-self: start;
    color: #333333;
    list-style: none;
  }

  #slider-about-us {
    grid-area: img;
    width: 100%;
    height: auto;
  }

 .fade-in {
    -webkit-animation: fade-in 1s linear both;
            animation: fade-in 1s linear both;
  }
  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }


  @include tablet-portrait {
    grid-template-rows: 60px 100px 200px 200px auto;
      grid-row-gap: 0;
  }

  @include desktop() {
    column-gap: 3em; 
    grid-template-rows: 60px 100px 200px 200px;
    grid-template-columns: 500px 500px;
    grid-template-areas:  "alt     alt"
                          "title   title" 
                          "body    img" 
                          "list    img";
  } 
}
</style>
