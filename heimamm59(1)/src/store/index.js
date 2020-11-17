/*
vuex基本使用
1:存储公有数据:用户信息  ,组件传值
1:装包  npm i vuex
2:导入  import Vuex from 'vuex'
3:注册 
     import Vue from 'vue'
     Vue.use(Vuex)
4:实例化
    const store=new Vuex.Store({
        state:{
            //存储共享数据
        }
    })
 暴露出去  export default store
 5:注入到new Vue({})
   到main.js
      import store from '@/store/index.js
      new Vue({
         store 
      })
使用:this.$store.state.变量名
*/
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  // ...
  state: {
    userInfo: '',
    role: '超级管理员'
  }
})
export default store
