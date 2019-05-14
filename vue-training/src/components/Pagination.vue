<template>
    <div class="list__container" >
        <div  v-for="(place,list) in place" :key="list">
            <p class="member__container__content">
            {{place.city}}
        </p>
        <p class="member__container__content">
            {{place.admin}}
        </p>
        <p class="member__container__content">
            {{place.population}}
        </p>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card'
export default {
  name: 'Memberlist',
  components: {
    Card
  },
  data () {
    return {
    }
  },
  computed: {
    place () {
      return this.$store.getters.getCityFn
    },
    userInfo () {
      return this.$store.state.userInfo
    }
    // students () {
    //   return this.$store.state.students
    // }
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
