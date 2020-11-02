<template>
  <div id="app">
    <div class="app_bar"></div>
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  .app_bar{
    height: 1.0667rem;
  }
}
</style>
