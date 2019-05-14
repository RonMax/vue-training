import Vue from 'vue'
import App from './App'
import 'normalize.css'
import Router from 'vue-router'
import mixin from '@/plugin/mixin'
import HelloWorld from '@/components/HelloWorld'
import Pagination from '@/components/Pagination'
import Memberlist from '@/components/Memberlist'
import Axios from 'axios'
import VueCookie from 'vue-cookie'
import store from '../store/index.js'

const base = Axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com'
})
Vue.prototype.$http = base
Vue.use(VueCookie)
Vue.use(Router)
Vue.mixin(mixin)

const router = new Router({
  mode: 'history',
  routes: [
    {path: '/home',
      component: HelloWorld,
      children: [
        {path: 'memberlist',
          component: Memberlist
        },
        {path: 'pagination',
          component: Pagination
        }
      ]
    },
    { path: '/', redirect: '/home' }
  ]
})

/* eslint-disable no-new */
// new Vue 執行初始化(筆記)
new Vue({
  // ,自定義Render , template, el 生成Render函數(筆記)
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
