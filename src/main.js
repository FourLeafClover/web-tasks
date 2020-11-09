import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App'
import 'ant-design-vue/dist/antd.css'
import store from './store'
import router from './router'
import './components/index'

Vue.config.productionTip = false

Vue.use(Antd)

Vue.config.productionTip = false
const $vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
window.$vm = $vm
