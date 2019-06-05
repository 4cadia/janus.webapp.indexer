import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueNotification from '@kugatsu/vuenotification'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false
Vue.use(Vuex)

Vue.use(VueNotification, {
  timer: 20,
  showCloseIcn: true,
  position: 'bottomRight'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
