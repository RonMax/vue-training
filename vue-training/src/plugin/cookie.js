import Vue from 'vue'
import VueCookie from 'vue-cookie'
Vue.use(VueCookie)
// cookie放置(因應目前官網有用cookie機制,使用vue-cookie)
this.$cookie.set('test', 'Hello world!', 1)
export default (app) => {
  app.cookie = Vue.cookie
}
