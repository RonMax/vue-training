// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'normalize.css'
import Router from 'vue-router'
import mixin from '@/plugin/mixin'
import HelloWorld from '@/components/HelloWorld'
import Topic from '@/components/Topic'
import Header from '@/components/Header'

Vue.use(Router)
Vue.mixin(mixin)

const router = new Router({
  mode: 'history',
  routes: [
    {path: '/home',
      component: HelloWorld,
      children: [
        {path: 'header',
          component: Header
        }
      ]
    },
    {path: '/Topic',
      component: Topic
    }
  ]
})

/* eslint-disable no-new */
// new Vue 執行初始化(筆記)
new Vue({
  // ,自定義Render , template, el 生成Render函數(筆記)
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
