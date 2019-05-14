<template>
    <div class="member__container">
        <img :src="image" class="member__container__image">
        <p class="member__container__content">
            {{name}}
        </p>
        <p class="member__container__content">
            {{title}}
        </p>
        <p class="member__container__content">
            {{skill}}
        </p>
    </div>
</template>

<script>
export default {
  name: 'list',
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    skill: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.member__container{
    margin: 12px;
    &__image{
        width: 200px;
        height: 200px;
        margin: auto;
        margin-bottom: 8px;
    }
    &__content{
        margin: auto;
    }
}
@media screen and (max-width: 1024px){
    .member__container{
        margin: 10px;
        &__image{
            width: 150px;
            height: 150px;
            margin: auto;
            margin-bottom: 8px;
        }
        &__content{
            margin: auto;
        }
    }
}
</style>
