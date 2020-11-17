<template>
  <el-container
    class="layout"
    v-if="$store.state.userInfo != '' && userInfo.status != 0"
  >
    <el-header class="header">
      <i class="el-icon-s-fold t1" @click="collapse = !collapse"></i>
      <img class="t2" src="@/assets/img/layout_logo.png" alt="" />
      <span class="t3">黑马面面</span>
      <img
        class="t4"
        :src="baseUrl + '/' + $store.state.userInfo.avatar"
        alt=""
      />
      <span class="t5">{{ $store.state.userInfo.username }},您好</span>
      <el-button class="t6" type="primary" @click="exit">退出</el-button>
    </el-header>
    <el-container>
      <el-aside class="aside" width="auto">
        <!-- el-menu
       default-active:默认选中哪一项(对应下面的子项的index的值)
       router:路由模式   使用该模式后,它的子项的index的值就是path
               true:路由模式  false普通 模式
       collapse:true:折叠   false展开
    el-menu-item   index:该项的值   在路由模式下,它的子项的index的值就是path
       slot=title  重写标题  

this.$router:整个路由的管理者,push跳转路由之类大事
this.$route:当前路由的基本信息,
 -->

        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo "
          :collapse="collapse"
          router
        >
          <!-- v-for与v-if不能一起使用 
2种解决方法  
  1:使用v-show代替v-if
  2:在循环外面套一层template  在template上写v-for
    在内部标签上写v-if

-->

          <template v-for="(item, index) in $router.options.routes[2].children">
            <el-menu-item
              :key="index"
              :index="item.path"
              v-if="item.meta.roles.includes($store.state.role)"
            >
              <i :class="item.meta.icon"></i>
              <span slot="title">{{ item.meta.title }}</span>
            </el-menu-item>
          </template>

          <!-- <el-menu-item
            index="/layout/chart"
            v-if="['超级管理员', '管理员', '老师'].includes($store.state.role)"
          >
            <i class="el-icon-pie-chart"></i>
            <span slot="title">数据概览</span>
          </el-menu-item>
          <el-menu-item
            index="/layout/user"
            v-if="['超级管理员', '管理员'].includes($store.state.role)"
          >
            <i class="el-icon-user"></i>
            <span slot="title">用户列表</span>
          </el-menu-item>
          <el-menu-item index="/layout/question">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">题库列表</span>
          </el-menu-item>
          <el-menu-item index="/layout/business">
            <i class="el-icon-office-building"></i>
            <span slot="title">企业列表</span>
          </el-menu-item>
          <el-menu-item index="/layout/subject">
            <i class="el-icon-notebook-2"></i>
            <span slot="title">学科列表</span>
          </el-menu-item> -->
        </el-menu>
      </el-aside>
      <!-- 
          1需求场景:修改某个路由下的某个部分
          使用:在需要修改的某个部分加上一个路由出口  router-view
               配制该路由下面的子路由
                   配制该路由的children
       -->
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { getLocal, removeLocal } from '@/utils/local.js'
import { logout, getInfo } from '@/api/layout.js'
export default {
  // 初始值引起的问题,只需要在相应标签上加一个v-if不等于初始值就可以了
  data () {
    return {
      userInfo: '',
      baseUrl: process.env.VUE_APP_URL,
      collapse: false
    }
  },
  created () {
    console.log(this.$router);
    
    window.console.log('router:', this.$router)
    // if (没token) {
    //   跳转至登陆页
    // }
    if (!getLocal()) {
      this.$router.push('/login')
    }
    getInfo()
      .then(res => {
        // this.userInfo = res.data.data
        this.$store.state.userInfo = res.data.data
        // 如果(status==0){
        //   强行退出
        // }
        this.$store.state.role = res.data.data.role
        if (res.data.data.status == 0) {
          this.$message.error('您的帐号已禁用,请联系管理员')
          // 清除token
          removeLocal('token')
          //跳转至登陆页
          this.$router.push('/login')
        } else {
          // if(当前角色 允许 访问当前路由==当前角色 在当前路由的路由元中存在){
          //   可以访问
          // }else{
          //   不存在
          //    提示一下,退到登陆页
          // }
          if (!this.$route.meta.roles.includes(res.data.data.role)) {
            this.$message.error('您无权访问该页面')
            // 清除token
            removeLocal('token')
            //跳转至登陆页
            this.$router.push('/login')
          }
        }
        window.console.log('用户信息', res)
      })
      .catch(e => e)
  },
  methods: {
    exit () {
      this.$confirm('您确定退出该网站吗?', '友情提示', {
        confirmButtonText: '确定退出',
        cancelButtonText: '点错了',
        type: 'warning'
      })
        .then(() => {
          logout().then(() => {
            //   退出 接口调用成功
            // 清除token,跳转至登陆页
            removeLocal('token')
            this.$router.push('/login')
          })
          this.$message.success('点了确定')
        })
        .catch(() => {
          this.$message.error('点了取消')
        })
    }
  }
}
</script>
<style lang="less">
.layout {
  height: 100%;
  .header {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    .t1 {
      font-size: 30px;
    }
    .t2 {
      margin: 0 11px 0 22px;
    }
    .t3 {
      flex: 1;
      font-size: 22px;
      font-family: Microsoft YaHei Regular, Microsoft YaHei Regular-Regular;
      font-weight: bold;
      text-align: left;
      color: #49a1ff;
      letter-spacing: 1px;
    }
    .t4 {
      width: 43px;
      height: 43px;
    }
    .t5 {
      font-size: 14px;
      font-family: Microsoft YaHei Regular, Microsoft YaHei Regular-Regular;
      font-weight: bold;
      text-align: left;
      color: #636363;
      letter-spacing: 0px;
      margin: 0 38px 0 9px;
    }
  }
  //   加上这句css,在折叠前有相应宽度,它就可以通过transition产生宽度的动画
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
  .main {
    background-color: #ccc;
  }
}
</style>
