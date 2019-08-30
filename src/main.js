import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/index.js'
import './plugins/element.js'
import '@/assets/css/reset.css'
import VueHighcharts from 'vue-highcharts'
import { get, post} from '@/plugins/axios'





Vue.use(VueHighcharts);
Vue.prototype.$get = get;
Vue.prototype.$post = post;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
