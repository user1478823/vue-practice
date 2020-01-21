<template>
  <div class="title">
    <h3 class="alt-title">{{ alt }}</h3>
    <h3>{{ title }}</h3>
    <i class="fork fas fa-utensils"></i>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';

  @Component
  export default class DecoratedTitle extends Vue {
    @Prop(String) readonly alt!: string;
    @Prop(String) readonly title!: string;  
  }
</script>

<style lang="scss" scoped>
  @import "colors", "fonts", "./../queries";

  .title {
    grid-area: title;
    position: relative;
    text-align: center; 

    &:after {
        content: "";
        width: 100%;
        height: 3px;
        background-color: $secondary-color;
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        
    }
    
    .alt-title {
      
      color: $primary-color;
      grid-area: alt;
      font-family: 'Tangerine', cursive;
      

      @include tablet-portrait  { font-size: 1.8rem; }
      @include tablet-landscape { font-size: 2rem;   }
      @include desktop          { font-size: 2.2rem; } 
      @include big-desktop      { font-size: 2.5rem; }
    }

    .fork {
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
  }
</style>