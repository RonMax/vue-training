<template>
    <div class="footer__container">
        text
    </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      width: 0
    }
  },
  created () {
    this.getDOMWidth()
    window.addEventListener('resize', this.getDOMWidth)
  }
}
</script>

<style lang="scss" scoped>
.footer__container{
    flex-shrink: 0;
    height: 200px;
    background-color: #5c656b;
}
</style>
