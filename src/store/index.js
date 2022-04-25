import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import search from './search'
import detail from './detail'

Vue.use(Vuex)

export default new Vuex.Store({
  // 模块化开发
  modules: {
    detail,
    home,
    search
  }
})
