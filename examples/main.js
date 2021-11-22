import Vue from 'vue'
import App from './App.vue'
import aaui from '../packages'

Vue.use(aaui)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
