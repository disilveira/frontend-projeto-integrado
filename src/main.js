import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import titleMixin from './mixins/titleMixin'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import LoginComponent from './components/Login/LoginComponent'
import DashboardComponent from './components/Dashboard/DashboardComponent'

Vue.config.productionTip = false

Vue.mixin(titleMixin)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const routes = [
  { path: '/', name: 'login', component: LoginComponent},
  { path: '/dashboard', name: 'dashboard', component: DashboardComponent }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
