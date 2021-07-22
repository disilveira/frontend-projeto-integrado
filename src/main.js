import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

import './assets/vendors/ti-icons/css/themify-icons.css'
import './assets/vendors/base/vendor.bundle.base.css'
import './assets/css/style.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
