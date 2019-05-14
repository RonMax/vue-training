import Vue from 'vue'
import Vuex from 'vuex'
import { place } from '@/datas/place'

Vue.use(Vuex)
// vuex-training
const store = () => {
  return new Vuex.Store({
    state: {
      count: 0,
      place: place.Taiwan,
      userInfo: {},
      students: [3, 5]
    },
    // 2. getters
    getters: {
      getCityFn (state) {
        console.log(state.place)
        return state.place
      }
    },
    mutations: {
      updateCount (state, count) {
        state.count = count
      },
      getUserInfo (state, userInfo) {
        state.userInfo = userInfo
      },
      getStudents (state, students) {
        state.students = students
      },
      setCity (state, name) {
        state.city = name
      }
    },
    actions: {
    // 串接資料位置 可放置axios
    // 设置城市信息
      // 参数列表：{commit, state}
      // state指的是state数据
      // commit调用mutations的方法
      // name就是调用此方法时要传的参数
      setCityName ({commit, state}, name) {
        // 跟后台打交道
        // 调用mutaions里面的方法
        commit('setCity', name)
      }
    }
  })
}
export default store
