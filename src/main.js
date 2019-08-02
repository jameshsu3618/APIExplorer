import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VModal from 'vue-js-modal'

Vue.use(VModal)

new Vue({
  render: h => h(App)
}).$mount('#app')
