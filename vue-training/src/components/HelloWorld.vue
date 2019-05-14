<template>
  <div class="hello">
    <!-- Header -->
    <Header/>
    <!-- Header -->
      <!--顯示區塊-->
    <router-view></router-view>
    <!-- 顯示區塊 -->
    <!-- <div>{{ userInfo }}</div> -->
    <!-- <div>{{city}}</div> -->
    <!-- Topic -->
    <!-- <Topic/> -->
    <!-- Topic -->
    <!-- Topic -->
    <Footer/>
    <!-- Topic -->
  </div>
</template>

<script>
import Header from '@/components/Header'
import Topic from '@/components/Topic'
import { member } from '@/datas/member'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    Topic,
    Footer
  },
  name: 'HelloWorld',
  data () {
    return {
      info: null
    }
  },
  // created () {
  // },
  // 通過watcher監聽數據
  // watch當參數變化時執行非同步
  watch: {
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
    }
  },
  // 每次獲取都會重新計算值
  methods: {
    getmember () {
      if (member != null) {
        console.log(member)
        alert('123')
      }
    }
  },
  computed: {
    city () {
      return this.$store.getters.getCityFn
    },
    userInfo () {
      return this.$store.state.userInfo
    }
    // students () {
    //   return this.$store.state.students
    // }
  },
  mounted () {
  //   const response = this.Axios
  //     .get('https://api.coindesk.com/v1/bpi/currentprice.json')
  //   // JSON responses are automatically parsed.
  //     .then(response => (this.info = response))
  //   this.info = response
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello{
  background-color: #5a87a5;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
