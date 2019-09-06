import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVue)
Vue.use(VeeValidate, {
  events: 'input|change|blur',
  fieldsBagName: 'veeFields',
  classes: true,
  classNames: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
