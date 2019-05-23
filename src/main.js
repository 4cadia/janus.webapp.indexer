import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

export const serverBus = new Vue()

/* eslint-disable */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
