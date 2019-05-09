import Vue from 'vue'
// 可共用項目
Vue.mixin({
  data () {
    return {
      width: 0
    }
  },
  methods: {
    isMobile () {
      return this.width <= 414 && this.width > 0
    },
    isTablet () {
      return this.width >= 415 && this.width <= 768
    }
  }
})
