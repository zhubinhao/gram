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
html,body{
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
  .app_bar{
    height: 1.0667rem;
  }
}
</style>
