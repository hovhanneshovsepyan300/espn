import Vue from 'vue'
import App from './App'
import { BootstrapVue, IconsPlugin, BIcon } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.component('BIcon', BIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
