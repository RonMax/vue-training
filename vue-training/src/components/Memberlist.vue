<template>
    <div class="list__container" >
        <div  v-for="(member,list) in member.programer" :key="list">
            <Card class="list__container__data"
                :name="member.name"
                :title="member.title"
                :image="member.image"
                :skill="member.skill"
            />
        </div>
    </div>
</template>

<script>
import { member } from '@/datas/member'
import Card from '@/components/Card'
export default {
  name: 'Memberlist',
  components: {
    Card
  },
  data () {
    return {
      member
    }
  },
  beforeMount () {
    console.log(this.$cookie.get('cookie'))
  },
  mounted () {
      this.$cookie.delete('cookie');
  }
}
</script>

<style lang="scss" scoped>
.list__container{
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
    margin: auto;
    width:55%;
    margin-top: 30px;
        &__data{
            display: flex;
            flex-direction: column;
        }
}
</style>
