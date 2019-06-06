import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueNotification from '@kugatsu/vuenotification'
import VueApexCharts from 'vue-apexcharts'

Vue.use(VueAxios, axios)
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

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
