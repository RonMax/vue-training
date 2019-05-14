<template>
  <div id="app">
    <img src="./assets/images/bo2.png">
    <router-view/>
    {{info}}
  </div>
</template>

<script>
// import Axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      info: null
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('test created')
    this.$cookie.set('cookie', 'test-cookie', 1)
    // this.$http.get('posts').then((response) => {
    //   this.posts = response.data
    // })
    //   .catch((e) => {
    //     console.log(e)
    //   })
  },
  beforeMount () {
    console.log('Before Mounte Hook')
  },
  // 掛載 $mount方法
  mounted () {
    // const res = Axios
    //   .get('http://jsonplaceholder.typicode.com/posts')
    // // JSON responses are automatically parsed.
    //   .then(response => (this.info = response.data[0]))
    // res.then(function (result) {
    //   console.log(result)
    // })
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
