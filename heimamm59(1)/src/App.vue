<template>
  <!-- /* less
1:定义变量   
@变量名:值
  @color:#fff;
  color: @color
写相应的类
.xxx{
  border:10px solid red;
}
.xxx(@borderWidth){
  border:@borderWidth solid red;
}
.app{
  .xxx(10px)
}
嵌套
   .app{
     .main{
       .xxx{

       }
     }
   }
在脚手架中使用less
1:安装插件
   npm i less less-loader
       npm i less
       npm i less-loader
2:使用  style lang="less"
*/ -->
  <div class="app ">
    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>
<script>
// export default
/*
node写法
暴露出去  module.exports={}
引入   let xxx=require("路径")
es6写法
export default  输出 一个东西
import 名字 from "路径"
*/
// import abcd from '@/assets/xxx.js' //  abcd=100
export default {
  created () {
    // alert(abcd)
  }
}
</script>
<style lang="less">
// 所有样式,很多公司习惯在src目录下创建一个style文件夹,所有样式文件都放里面
@import url(~@/style/base.css);
.app {
  height: 100%;
}
body,
html {
  height: 100%;
}
#nprogress div.spinner {
  display: none;
}
</style>
