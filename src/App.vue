<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    section {
      padding: 6em 2em;
      display: grid;
      align-items: center;
      justify-items: center;
      justify-content: center;
    } 

  }

  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }



</style>
