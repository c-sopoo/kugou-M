<template>
  <div id="app">
    <Header></Header>
    <tab></tab>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
import Header from 'views/header/Header'
import Tab from 'views/tab/Tab'
import Player from 'views/player/Player'
export default {
  components: {
    Header,
    Tab,
    Player
  }
}
</script>

<style lang="scss">
  
</style>
