<template>
  <div id="app">
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import mainTabbar from './components/content/mainTabbar/MainTabbar.vue'

export default {
  name: 'App',
  components: {
    mainTabbar
  }
}
</script>

<style>
@import url('assets/css/base.css');
</style>
