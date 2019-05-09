import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import mixin from '@/plugin/mixin'

Vue.use(Router)
Vue.mixin(mixin)

Vue.config.productionTip = false

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
