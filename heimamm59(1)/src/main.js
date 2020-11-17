import Vue from 'vue'
import App from './App.vue'
/*
element-ui基本使用
1:装包   npm i element-ui
2:导入  import ElementUi from 'element-ui'
    导入css
3:注册
    Vue.use(ElementUi)

*/
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// axios使用
// import axios from 'axios'
// const _axios = axios.create({
//   baseURL: process.env.VUE_APP_URL,
//   withCredentials: true
// })
// Vue.prototype.$axios = _axios

Vue.use(ElementUI)
// 5:注入到new Vue({router:router})

Vue.config.productionTip = false
import router from '@/router/index.js'
import store from '@/store/index.js'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
