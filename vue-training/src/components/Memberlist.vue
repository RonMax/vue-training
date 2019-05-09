<template>
    <div>
        <img :src="image" class="member__image">
        <div class="member__name">
            {{name}}
        </div>
        <div class="member__title">
            {{title}}
        </div>
        <div class="member__skill">
            {{skill}}
        </div>
    </div>
</template>

<script>
export default {
  name: 'Memberlist',
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
.member{
    &__image{
        border-radius: 50%
    }
}
</style>
