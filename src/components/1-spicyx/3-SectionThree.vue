<template>
  <section>   
    <decorated-title style="align-self: start" :alt="alt" :title="title"  />
    <div class="buttons" style="grid-area: buttons">
      <button class="btn" v-on:click="check(button.id)" v-for="button in buttons" v-bind:key="button.id"
      :class="button.class">{{ button.name }}</button>      
    </div>
    <div class="items" v-for="item in menu" v-bind:key="item.id" :style="{gridArea: item.id}">
      <img style="grid-area: img" 
        :src="require(`../../assets/1-spicyx/4-menu/item-${checkedBtn}.jpg`)" alt="" />
      <h5 style="grid-area: title">{{ item.title }}</h5>
      <h5 style="grid-area: price">${{ item.price }}</h5>
      <p style="grid-area: p-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.<p/>
      <p style="grid-area: p-2">Facere nulla aliquid praesentium dolorem commodi illo.<p/>
    </div>
  </section>
</template>

<script lang='ts'>
  import { Vue, Component } from 'vue-property-decorator';

  @Component({
    components: {
      'decorated-title': () => import('./DecoratedTitle.vue')
    }
  })
  export default class SectionThree extends Vue {

    alt: string;
    title: string;
    checkedBtn: number;
    buttons:    Array<{id: number, name:  string, class: string}>;
    menu:       Array<{id: string, title: string, price: string}>;
    breakfast:  Array<{id: string, title: string, price: string}>;
    meals:      Array<{id: string, title: string, price: string}>;
    snacks:     Array<{id: string, title: string, price: string}>;
    desserts:   Array<{id: string, title: string, price: string}>;
    drinks:     Array<{id: string, title: string, price: string}>;

    constructor() {
      super();
      this.alt        = "Discover";
      this.title      = "OUR MENU";
      this.checkedBtn = 0;

      this.buttons= [
        { id: 0, name: "Breakfast", class: "checked"   },
        { id: 1, name: "Meals",     class: "unchecked" },
        { id: 2, name: "Snacks",    class: "unchecked" },
        { id: 3, name: "Desserts",  class: "unchecked" },
        { id: 4, name: "Drinks",    class: "unchecked" },
      ];
      
      this.breakfast= [
        { id: "one",    title: "English Breakfast",  price: "15.85" },
        { id: "two",    title: "Italian Breakfast",  price: "14.65" },
        { id: "three",  title: "Indian Breakfast",   price: "16.79" },
        { id: "four",   title: "French Breakfast",   price: "11.40" },
        { id: "five",   title: "Chinese Breakfast",  price: "17.28" },
        { id: "six",    title: "American Breakfast", price: "12.35" }
      ];

      this.meals= [
        { id: "one",    title: "English Meal",  price: "25.85" },
        { id: "two",    title: "Italian Meal",  price: "24.65" },
        { id: "three",  title: "Indian Meal",   price: "26.79" },
        { id: "four",   title: "French Meal",   price: "21.40" },
        { id: "five",   title: "Chinese Meal",  price: "27.28" },
        { id: "six",    title: "American Meal", price: "22.35" }
      ];

      this.snacks= [
        { id: "one",    title: "English Snack",  price: "5.85" },
        { id: "two",    title: "Italian Snack",  price: "4.65" },
        { id: "three",  title: "Indian Snack",   price: "6.79" },
        { id: "four",   title: "French Snack",   price: "3.40" },
        { id: "five",   title: "Chinese Snack",  price: "7.28" },
        { id: "six",    title: "American Snack", price: "2.35" }
      ];

      this.desserts= [
        { id: "one",    title: "English Dessert",  price: "9.85"  },
        { id: "two",    title: "Italian Dessert",  price: "12.65" },
        { id: "three",  title: "Indian Dessert",   price: "14.79" },
        { id: "four",   title: "French Dessert",   price: "8.40"  },
        { id: "five",   title: "Chinese Dessert",  price: "10.28" },
        { id: "six",    title: "American Dessert", price: "11.35" }
      ];

      this.drinks= [
        { id: "one",    title: "Cappuccino",    price: "2.85" },
        { id: "two",    title: "Espresso",      price: "3.65" },
        { id: "three",  title: "Flat White",    price: "4.79" },
        { id: "four",   title: "Long Black",    price: "6.40" },
        { id: "five",   title: "Macchiato",     price: "5.28" },
        { id: "six",    title: "Irish Coffee",  price: "5.35" }
      ];

      this.menu = [...this.breakfast];
      this.check = this.check.bind(this)
    }

    check(id: number) {
      this.buttons[this.checkedBtn].class = "unchecked";
      this.checkedBtn = id;
      this.buttons[id].class = "checked";
      
      switch(id) {
        case 0: {
          this.menu = [];
          this.menu = [...this.breakfast]
          break;
        }
        case 1: {
          this.menu = [];
          this.menu = [...this.meals]
          break;
        }
        case 2: {
          this.menu = [];
          this.menu = [...this.snacks]
          break;
        }
        case 3: {
          this.menu = [];
          this.menu = [...this.desserts]
          break;
        }
        case 4: {
          this.menu = [];
          this.menu = [...this.drinks]
          break;
        }
      }
    } 
  }
</script>

<style lang="scss" scoped>
  @import "colors", "fonts", "./../queries";

  section {
    position: relative;
    grid-template-columns: auto;
    grid-column-gap: 30px;
    grid-row-gap: 40px;
    grid-template-areas:
      "title"
      "buttons"
      "one"
      "two"
      "three"
      "four"
      "five"
      "six";

    .buttons {
      position: relative;
      align-self: start;
        
      &:after {
        content: "";
        width: calc(100% + 3em);
        height: 2px;
        background-color: $secondary-color;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 0;
        @include desktop {
          width: 1230px;
        }      
      }

      .btn {
        position: relative;
        cursor: pointer;
        padding: 0.8em 1em;
        margin: 1em 1em 0 1em;
        border-width: 0;
        font-size: 1rem;
        font-weight: 900;
        font-family: "Assistant", serif !important;
        letter-spacing: 3px;
        z-index: 2;

        &:focus {
          outline: 0;
        }       

        @include tablet-portrait  { padding: 0.6em 1.5em; }
        @include tablet-landscape { padding: 0.7em 2em;   }
        @include desktop          { padding: 0.8em 2.5em; } 
      }

      .checked {
        background-color: white;
        color: $primary-color;
        border-top: 2px solid $secondary-color;
        border-left: 2px solid $secondary-color;
        border-right: 2px solid $secondary-color;

        @include tablet-landscape {
          background-color: white;
        }
      }

      .unchecked {
        background-color: $secondary-color;
        color: #eee;
        z-index: 2;
      }
    }

    .items {
      height: auto;
      width: 100%;
      display: grid;
      grid-template-areas: 
      "img title"
      "img price"
      "img p-1"
      "img p-2";
   
        &:hover {
          img {
            box-shadow: 6px 6px $secondary-color;
          }
        }

      img {
        margin-right: 1em;
        transition: ease-in 0.3s;
      }

      h5:nth-child(3) {
        color: $primary-color;
        margin-bottom: 0.8em;
      }
    }

    @include desktop {
      grid-template-columns: repeat(2, minmax(auto, 600px));
      grid-template-rows: 150px 60px repeat(3, auto);
      grid-template-areas:
        "title    title"
        "buttons  buttons"
        "one      two"
        "three    four"
        "five     six";
    }
  }

</style>
