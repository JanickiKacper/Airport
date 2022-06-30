import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import store from './store'
import Vuex from "vuex";

Vue.config.productionTip = false

new Vue({
  Vuex,
  store,
  axios,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
