// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue 執行初始化(筆記)
new Vue({
  // ,自定義Render , template, el 生成Render函數(筆記)
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
