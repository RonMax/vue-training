export default {
  data () {
    return {
      width: 0
    }
  },
  computed: {
    // mobile is between 0 ~ 414
    isMobile () {
      return this.width <= 414 && this.width > 0
    },
    // tablet is between 415 ~ 768
    isTablet () {
      return this.width >= 415 && this.width <= 768
    }

  },
  methods: {
    getDOMWidth () {
      console.log('testing mixin')
      const DOMRect = document.querySelector('body').getBoundingClientRect()
      this.width = DOMRect.width
    }
  }
}
