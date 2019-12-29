<template>
  <section>
    <h3 class="alt-title">Discover</h3>
    <div class="title">
      <h3>ABOUT US</h3>
      <i id="fork" class="fas fa-utensils"></i>
    </div>
    <img class="slider" src="../../assets/1-spicyx/2-about-us/abtus-img-1.png" alt="" />
    <p class="body">
      Amet consectetur adipisicing elit. Aliquam minus aliquid, itaque illum assumenda repellendus dolorem, dolore numquam totam saepe, porro delectus, libero enim odio quo. Explicabo ex sapiente sit eligendi, facere voluptatum! Quia vero rerum sunt porro architecto corrupti eaque corporis eum, enim soluta, perferendis dignissimos, repellendus, beatae laboriosam.
    </p>
    <ul class="list">
      <li style="grid-area: one"><i class="fas fa-utensils"></i> Lorem ipsum dolor</li>
      <li style="grid-area: two"><i class="fas fa-hamburger"></i> Tempor incididunt</li>
      <li style="grid-area: three"><i class="fas fa-pizza-slice"></i> Lorem ipsum dolor</li>
      <li style="grid-area: four"><i class="fas fa-pepper-hot"></i> Incididunt ut labore</li>
      <li style="grid-area: five"><i class="fas fa-carrot"></i> Aliquip ex ea commodo</li>
      <li style="grid-area: six"><i class="fas fa-drumstick-bite"></i> Lorem ipsum dolor</li>
      <li style="grid-area: seven"><i class="fas fa-candy-cane"></i> Exercitation ullamco</li>
      <li style="grid-area: eight"><i class="fas fa-ice-cream"></i> Lorem ipsum dolor</li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
  @import "colors", "fonts", "./../queries";

  section {
  padding: 8em 2em;
  display: grid;
  align-items: center;
  justify-content: center; 
  grid-template-columns: minmax(350px, 350px);
   grid-template-areas:  "alt     alt"
                          "title   title" 
                          "body    img" 
                          "list    img";
                          

  .alt-title {
    grid-area: alt;
    font-family: 'Tangerine', cursive;
    font-size: 2.5rem;
    justify-self: center;
  }
  
  .title {
    grid-area: title;
    position: relative;
    justify-self: center;

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
  }

  .list {
    grid-area: list;
    list-style: none;
  }

  .slider {
    grid-area: img;
    width: 100%;
    height: auto;
  }

  @media (min-width: 980px) {
    grid-template-columns: 500px  500px;
    grid-template-areas:  "alt     alt"
                          "title   title" 
                          "body    img" 
                          "list    img";
  }

  @media (min-width: 1280px) {
  }
}

</style>
