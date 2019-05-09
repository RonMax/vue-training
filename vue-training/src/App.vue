<template>
  <div id="app">
    <img src="./assets/images/bo2.jpg">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeCreate () {
    alert('welcome to this website')
  },
  created () {
    console.log('test created')
  },
  beforeMount () {
    console.log('Before Mounte Hook')
  },
  // 掛載 $mount方法
  mounted () {
    console.log('Mounte Hook Start')
  },
  beforeUpdate () {
    console.log('Before Update Hook')
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img{
  width: 100%
}
.Header{
  height: 100%;
}
</style>
