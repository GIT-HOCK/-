import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueAwesomeSwiper from "vue-awesome-swiper";
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
Vue.use(MintUi)

axios.defaults.widthCredentials=true
axios.defaults.baseURL = "https://v1.itooi.cn/netease"
Vue.prototype.axios = axios
new Vue({
  axios,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
