import Vuex from 'vuex'
// vuex-training
const createStore = () => {
  return new Vuex.Store({
    state: {
      test: 'try set state',
      num: 113
    },
    mutations: {
      settest (state) { state.test = '123' },
      setnum (state) {
        state.num = 113
      },
      removestate (state) {
        state.test = ''
        state.num = 0
      }
    },
    actions: {
    // 串接資料位置 可放置axios
    }
  })
}
export default createStore
