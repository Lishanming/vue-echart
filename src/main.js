import Vue from 'vue'
import App from './App.vue'

import epEchart from './components/echarts/index.js'
Vue.use(epEchart)

new Vue({
  el: '#app',
  render: h => h(App)
})
