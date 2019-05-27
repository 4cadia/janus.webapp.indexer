import Vue from 'vue'
import Vuex from 'vuex'
import form from './modules/form'
import validation from './modules/validation'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    logged_in: false
  },
  mutations: {
    logged_in (state, value) {
      state.logged_in = value
    }
  },
  modules: {
    form,
    validation
  },
  strict: debug
})
