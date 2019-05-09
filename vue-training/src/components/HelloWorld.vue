<template>
  <div class="hello">
    <!-- Header -->
    <Header/>
    <!-- Header -->
    <!-- List -->
    <div class="list__container" >
      <div  v-for="(member,list) in member.programer" :key="list">
        <Memberlist class="list__container__data"
          :name="member.name"
          :title="member.title"
          :image="member.image"
          :skill="member.skill"
        />
      </div>
    </div>
    <!-- List -->
    <!-- Topic -->
  <Topic/>
  <!-- Topic -->
  </div>
</template>

<script>
import Header from '@/components/Header'
import Topic from '@/components/Topic'
import Memberlist from '@/components/Memberlist'
import { member } from '@/datas/member'
export default {
  components: {
    Header,
    Topic,
    Memberlist
  },
  name: 'HelloWorld',
  data () {
    return {
      member
    }
  },
  created () {
    console.log(member)
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
    getmember () {
      if (member != null) {
        console.log(member)
        alert('123')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello{
  background-color: #6279a1;
}
.list__container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto;
  width: 80%;
  margin-top: 40px;
    &__data{
      display: flex;
      flex-direction: column;
    }
}

</style>
