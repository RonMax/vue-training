<template>
  <div id="app">
    <header/>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  comments: {
    Header
  },
  name: 'App',
  beforeCreate () {
    console.log('Nothing gonna change my life')
  },
  created () {
    console.log('test created')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
