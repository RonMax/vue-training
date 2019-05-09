<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
      <div id="watch-example">
      <p>
        Training:
        V-model : 基於參數進行雙向綁定 （v-for迴圈時,需使用key值）
        <input v-model="question" >
      </p>
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'training test page'
    }
  },
  created () {
    this.getdata()
  },
  // 通過watcher監聽數據
  // watch當參數變化時執行非同步
  watch: {
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
    }
  },
  // 每次獲取都會重新計算值
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
