/*
src/router  router文件夹就是存放路由相关文件的
路由基本使用
1:装包  npm i vue-router
2:导入  import VueRouter from 'vue-router'
3:注册  Vue.use(VueRouter)
4:实例化  const router123=new VueRouter({
     routes:[
       {
         path:"/",
         component:组件名
       }
     ]
})
暴露出去  export default router
5:
在main.js中引入  import router from '@/router'
注入到new Vue({router})
6:路由出口  router-view   搬运工

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: []
})
*/

// 要写一个新的页面
/*
1:在views目录下面创建一个相应的vue文件
2:配制该文件的路由
3:开始在相应vue文件定稿功能
*/

import VueRouter from 'vue-router'
import Vue from 'vue'
// 导入login.vue
import login from '@/views/login/login.vue'
import layout from '@/views/layout/layout.vue'
import chart from '@/views/layout/chart/chart.vue'
import user from '@/views/layout/user/user.vue'
import question from '@/views/layout/question/question.vue'
import business from '@/views/layout/business/business.vue'
import subject from '@/views/layout/subject/subject.vue'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      //   重定向
      redirect: '/login'
    },
    {
      path: '/login',
      component: login,
      meta: {
        title: '登陆',
        roles: ['超级管理员', '管理员', '老师', '学生']
      }
    },
    {
      path: '/layout',
      component: layout,
      redirect: '/layout/subject',
      children: [
        {
          path: '/layout/chart',
          component: chart,
          // 路由元信息
          meta: {
            icon: 'el-icon-pie-chart',
            title: '数据概览',
            roles: ['超级管理员', '管理员', '老师']
          }
        },
        {
          path: '/layout/user',
          component: user,
          meta: {
            icon: 'el-icon-user',
            title: '用户列表',
            roles: ['超级管理员', '管理员']
          }
        },
        {
          path: '/layout/question',
          component: question,
          meta: {
            icon: 'el-icon-edit-outline',
            title: '题库列表',
            roles: ['超级管理员', '管理员', '老师']
          }
        },
        {
          path: '/layout/business',
          component: business,
          meta: {
            icon: 'el-icon-office-building',
            title: '企业列表',
            roles: ['超级管理员', '管理员', '老师']
          }
        },
        {
          path: '/layout/subject',
          component: subject,
          meta: {
            icon: 'el-icon-notebook-2',
            title: '学科列表',
            roles: ['超级管理员', '管理员', '老师', '学生']
          }
        }
      ]
    }
  ]
})

/*nprogress使用步骤
1:安装  npm i nprogress
2:导入(在路由文件里面导入)
  import Nprogress from 'nprogress'
  import "nprogress/nprogress.css"
3:使用
    Nprogress.start() 开始
    Nprogress.done()  结束



*/
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
// 导入vuex
import store from '@/store' //store===this.$store
// 导入message
import { Message } from 'element-ui'
// 导入删除token方法
import { removeLocal } from '@/utils/local.js'
// 前置守卫
router.beforeEach((to, from, next) => {
  Nprogress.start()
  // if(当前to的路由元中不包含当前登陆人角色){
  //   提示一下
  //   删除token
  //   跳转至登陆页
  // }
  if (to.meta.roles.includes(store.state.role)) {
    next()
  } else {
    Message.error('您无权访问该页面')
    removeLocal('token')
    next('/login')
  }
})
// 后置守卫
router.afterEach((to, from) => {
  // to:要去的路由的路由信息
  window.console.log(from)
  document.title = '黑马面面---' + to.meta.title
  // document.getElementById('title').innerText = '黑马面面---' + to.meta.title
  Nprogress.done()
})

const originalReplace = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalReplace.call(this, location).catch(err => err)
}
export default router
