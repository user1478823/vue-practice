<template>
  <section>
    <h4 id="alt-title" style="grid-area: one-alt">Fresh</h4>
    <h3 style="grid-area: one-title">55+</h3>
    <h4 style="grid-area: one-txt">Breakfast Items</h4>
    <h4 id="alt-title" style="grid-area: two-alt">Delicious</h4>
    <h3 style="grid-area: two-title">130+</h3>
    <h4 style="grid-area: two-txt">Lunch Items</h4>
    <h4 id="alt-title" style="grid-area: three-alt">Hot</h4>
    <h3 style="grid-area: three-title">35+</h3>
    <h4 style="grid-area: three-txt">Coffee Items</h4>
    <h4 id="alt-title" style="grid-area: four-alt">Satisfied</h4>
    <h3 style="grid-area: four-title">3561+</h3>
    <h4 style="grid-area: four-txt">Customers</h4>  
  </section>
</template>

<style lang="scss" scoped>
  @import "colors", "fonts", "./../queries";

  section {
    padding: 8em 0;
    color: white;

    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(../../assets/1-spicyx/3-counter-bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;

    display: grid;
    align-items: center;
    justify-items: center;
    justify-content: center;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: 40px 70px 100px 30px 70px 40px;
    grid-template-areas:
      "one-alt          one-alt         two-alt     two-alt"
      "one-title        one-title       two-title   two-title"
      "one-txt          one-txt         two-txt     two-txt"
      "three-alt        three-alt       four-alt    four-alt"
      "three-title      three-title     four-title  four-title"
      "three-txt        three-txt       four-txt    four-txt";
    
    #alt-title {
      font-family: 'Tangerine', cursive;
      font-size: 2.5rem;
    }

    h3 {
      font-weight: 900;
    }

    h4 {
      align-self: start;
      @include desktop { align-self: center; }
    }

    @include tablet-portrait  { grid-template-columns: repeat(4, 125px); }
    @include tablet-landscape { grid-template-columns: repeat(4, 150px); }
    @include desktop { 
      grid-template-columns: repeat(4, 250px);
      grid-template-rows: 10px 100px 10px;
      grid-template-areas:
        "one-alt       two-alt    three-alt    four-alt"
        "one-title     two-title  three-title  four-title"
        "one-txt       two-txt    three-txt    four-txt";
    }
    @include big-desktop { grid-template-columns: repeat(4, 300px); }
  }
</style>
