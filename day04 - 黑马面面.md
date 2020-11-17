# day04 - 黑马面面

## 反馈

1.	那啥什么什么天下第一
1.	爱你,么么哒
1.	爱飞哥的第四天
1.	有志者事竟成,破釜沉舟,百二秦关终属楚,苦心人天不负,卧薪尝胆,三千越甲可吞吴!
1.	有了阿坤忘了利群,有了林林忘了阿坤,有了飞飞忘了林林.....细品
1.	今天的学确实有点难度 学废了学废了
1.	舔狗日记2020-9-23:你已经十三个小时两分钟57秒没有回我消息了，一支晨光的水性笔可以把你的名字写两千四百三十五遍，这是我等你回消息时候发现的。
1.	本来昨天晚上预习看拦截器的笔记，试着敲了下一头雾水 一脸懵逼，结果今天听了老师的示例抢2次劫 瞬间悟了！！！飞哥牛逼！！！！！
1.	试了一下,把小分支合并到主分支有用,但是把主分支合并到小分支的话,小分支没变化
1.	昨天的不开心就至于此吧，今天依旧光芒万丈哦，宝贝！
1.	这些天听了飞飞老师的git操作，我的心情竟久久不能平复，正如老子所云：大音希声，大象无形。我想我知道我缺乏的是什么了
1.	不知道为什么 虽然git方面目前还没遇到什么问题 但是还是有点慌 怕以后遇到了直接歇逼了
1.	飞哥讲的真的很好.........很棒.
1.	我同桌说 写代码要 “不求甚解 但求会用 ” 我觉得说的对 但我不听
1.	给我一分清蒸螃蟹钳，不要清蒸，不要螃蟹，要钳 给我一个红豆沙包，不要豆，不要沙，要红包 给我一份鲜奶紫薯泥，不要鲜也不要薯泥，要奶紫



## 回顾

1. ~~~
表单
   el-form
        model:数据绑定   rules:规则   label-width:标题宽度
      el-form-item   label:标题   prop:绑定对应字段名
      rules:{
      prop值:[
      //""  []  undefind
      {required:true,message:"错误信息",trigger:"change/blur"},
      {min:"最长长度",max:最大长度,message:"错误信息",trigger:"change/blur"},
      {validator:(rule,value,callback)=>{
      rule:规则  value:当前验证项的值
      callback:验证通过  callback()  
               验证失败  callback(new Error(错误信息))
      }}
      ]
      }
      全局验证
        1:el-form  model  rules  ref
             el-form-item   prop
             rules规则
        2:this.$refs.ref值.validate((result)=>{
        true:验证通过
        this.$message.success("提示")
        false:验证失败
         this.$message.error("提示")
           inio/warning
        })
       局部验证
           this.$refs.ref值.validateField(['prop值','prop值2'],(errorMessage)=>{
           验通过:errorMessage===""
           不通过:errorMessage!===""  
           })
           
           表单重置
           this.$refs.ref值.resetFields()
        上传组件 
        el-upload
           action:上传接口地址,
           name:对应上传文件参数名
           show-file-list:true显示列表  false不显示列表
           before-upload:function(file){
              file.type:类型
              file.size:大小(字节)
              return boolean值 
                   true:正常上传
                   false:中止上传
              }
           on-success:上传成功处理
                     function(res,file){
                     res:接口返回值
                     file: file.response:返回值===res
                           file.raw:文件对象
                     }
        export  {暴露出去一个值}
        import {值的名字} from "地址"  解构赋值
                {值的名字}  =   {暴露出去一个值}
       
               
        
                     
      拦截器
       api:  src/api/相应的js
              axios
                1:装包
                2:import axios from 'axios'
                3创建副 本
                    let _fetch=axios.create({
                      baseURL:process.env.VUE_APP_名字,l
                      withCredentials:true
                    })
                 4:写拦截器
                    请求拦截
                    _fetch.interceptors.request.use(
                    function(config){
                    config:所有请求配制
                    return config
                    },
                    function(error){
                    return Promise.reject(error)
                    }
                    )  
            
            
                    
                    
                    
                   响应拦截
                   import {Message} from 'element-ui'
                   _fetch.interceptors.response.use(
                   function(response){
                   //把所有错误情况在这里处理了
                   if(response.data.code===200){
                    return response
                   }else{
                   提示一下
                   Message.error(response.data.message)
                   不执行.then直接跳转到.catch
                   return Promise.reject(error)
                   }
                  
                   },
                   function (error){
                   return Promise.reject(error)
                   }
                   )
        watch:对某个值(通过this能访问的)的change
        定义:
           watch(data兄弟):{
           本质就是一个function
           方法名(newVal,oldVal){
           方法名:1:先完整写出该参数  2:去掉this. 加上引号
           newVal:当前值
           oldVal:上一刻的值
           }
           }
           
         
         git init初始化
         git add .
         git commit -m"注释"
         git push
         git remote add origin 地址
         git push -u origin master
         git branch 分支名
         git branch -a
         切换分支
         git checkout 分支名
         git branch -d 分支名
         git push origin :分支名
         重置分支  git reset --hard 版本号
         git reflog --oneline
         修改了代码,改乱了,去掉所有修改,回到修改前(和服务器一样代码)      
         git reset --hard origin/服务器分支名
         git add .
         回到add前: git reset HEAD
         git commit -m"注释"
         回到commit前 add后
         git reset --soft HEAD^
         回到上一次commit
         git reset HEAD^
         合并分支
         git merge 分支名
         取消合并  merging
         git merge --abort
         
         
         
         
         
         
         
         
         
         
                     
      
   
   
   
   
   ~~~
   
   









## 登录模块 - 验证码获取

> 用户登录也是需要获取验证码，注意别和注册的验证码弄混了哦

[传送门](https://www.showdoc.cc/538567623707717?page_id=3186586503196977)

步骤:

1. 进入页面 获取 `登录验证码`

   1. 定义登陆验证码src地址

      code: process.env.VUE_APP_URL + "/captcha?type=login",

      ~~~
      
      ~~~

   2. 将该地址用于登陆验证码处

      ~~~
       <img class="code" :src="code" alt />   
      ~~~

      

2. 点击刷新

   1. 点击事件绑定

      ~~~js
      <img class="code" @click="codeClick" :src="code" alt />
      ~~~

      

   2. 使用时间戳，或者随机数重新生成验证码

      ~~~js
          //验证码点击 事件
          codeClick() {
            this.code =
              process.env.VUE_APP_URL + "/captcha?type=login&t=" + Date.now();
          }
      ~~~

      ![image-20200815094509918](day04 - 黑马面面.assets/image-20200815094509918.png)

![image-20200815094535953](day04 - 黑马面面.assets/image-20200815094535953.png)

![image-20200815094559504](day04 - 黑马面面.assets/image-20200815094559504.png)



## 登录模块 - 自定义校验规则

> 登录页面的手机号验证逻辑和注册页面一样，c+v来一波

1. 完成相应数据绑定 

2. 在需要校验的项上加上prop

3. 然后在el-form上定义一个rules  

4. 在data里面写相应规则

   1. ~~~
      rules:{
      prop值：[
      {required:true,message:"出错信息",trigger:"blue/change"},
      {validator:(rule,value,callback)=>{
      rule:规则
      value:当前校验项的值，
      callback("错误信息")
      callback()  //正常通过
      }}
      ],
      }
      ~~~

      

5. 手机号

   ~~~js
           phone: [
             { required: true, message: "请填入手机号！", trigger: "change" },
             {
               validator: (rule, value, callback) => {
                 let _reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
                 if (_reg.test(value)) {
                   callback();
                 } else {
                   callback("请正确输入手机");
                 }
               },
               trigger: "change"
             }
           ],
   ~~~

   

6. 用户协议，注意用户协议这里的值只有当它为true时才能通过

   ~~~js
           isCheck: [
             { required: true, message: "请勾选选协议", trigger: "change" },
             {
               validator: (rule, value, callback) => {
                 if (value === true) {
                   callback();
                 } else {
                   callback("请勾选选协议");
                 }
               },
               trigger: "change"
             }
           ]
   ~~~

   ![image-20200815094632340](day04 - 黑马面面.assets/image-20200815094632340.png)



![image-20200815094644894](day04 - 黑马面面.assets/image-20200815094644894.png)







## 登录模块 - 登录接口抽取

> 登录页面的接口，为了方便管理我们也抽取为一个文件，拆分的文件虽然多，但是后期维护起来会更加方便，尤其是名字是对应的

[传送门](https://www.showdoc.cc/538567623707717?page_id=3184415727281421)

步骤:

1. 创建`/api/login.js`文件

2. 内部抽取登录接口，仿`register.js`

3. 由于login与register其实它们都应该有共用的create与请求和响应拦截，其实我们共用代码是可抽离 出来成一个单独js，这种公用方法我们一般放到一个单独文件夹里面`utils/request.js`,然后输出`instance`,在相应api文件里导入该`request.js`就可使用`axios`了

   ~~~js
   /*
   接口调用；
   1：安装axios   npm i axios
   2:导入axios    import axios from 'axios
   3:使用axios调用接口
   */
   
   import axios from 'axios'
   import { Message } from 'element-ui';
   var instance = axios.create({
       baseURL: process.env.VUE_APP_URL,   //设置基地址
       withCredentials: true //跨域照样协带cookie
   });
   // 添加请求拦截器
   instance.interceptors.request.use(function (config) {
       // 在发送请求之前做些什么
       return config;
   }, function (error) {
       // 对请求错误做些什么
       return Promise.reject(error);
   });
   
   // 添加响应拦截器
   instance.interceptors.response.use(function (response) {
       // 对响应数据做点什么
       if (response.data.code == 200) {
           // 因为返回数据里面axios帮我们额外的包了一层data但实际我们基本不用，所以我们把它干掉
           return response.data;
       } else {
           // 提示用户错误
           // 出错了我们还有必要返回数据出去吗？
           //抛出一个错误，不要让后面代码执行
           //只要return了一个Promise.reject("error")后面的接口的.then就不会执行了
           Message.error(response.data.message)
           return Promise.reject("error");
       }
       // switch (response.data.code) {
       //     case 200:
       //         return response;
       //     case 201:
   
       //         Message.error(response.data.message)
       //         // 出错了我们还有必要返回数据出去吗？
       //         //抛出一个错误，不要让后面代码执行
       //         window.console.log("抛错误前处理:", response)
       //         return Promise.reject("error");
   
       // }
   
       // return response;
   }, function (error) {
       // 对响应错误做点什么
       return Promise.reject(error);
   });
   export default instance
   ~~~

register.js相应调整

~~~js
   import instance from '@/utils/request.js'
   function sendsms(data) {
       return instance({
           url: "/sendsms",
           method: "post",
           data: data,
       })
   }
   function register(data) {
       return instance({
           url: "/register",
           method: "post",
           data,
       })
   }
   export { sendsms, register }
   
~~~

login.js相应方法定义

~~~js
   import instance from '@/utils/request.js'
   function toLogin(data) {
       return instance({
           url: "/login",
           method: "post",
           data
       })
   }
   export { toLogin }
~~~



![image-20200815095845199](day04 - 黑马面面.assets/image-20200815095845199.png)



![image-20200815095915302](day04 - 黑马面面.assets/image-20200815095915302.png)



![image-20200815095942316](day04 - 黑马面面.assets/image-20200815095942316.png)

![image-20200815100011064](day04 - 黑马面面.assets/image-20200815100011064.png)

![image-20200815100039792](day04 - 黑马面面.assets/image-20200815100039792.png)

## 登录模块 - 用户登录

> 在点击登录表单校验通过的时候，还需要判断是否勾选哦，如果都没问题，就可以提交数据了，根据响应的结果，提示用户，或者进行页面的跳转，服务器好像响应的内容中有关键信息哦

步骤:

1. 导入登陆api方法

   ~~~js
   import { toLogin } from "@/api/login.js";
   ~~~

   

2. 校验数据

3. 都验证通过，提交数据

   1. 对：
      1. 提示用户
      2. 保存一些数据
      3. 页面的跳转
   2. 错：提示用户(已在相应的请求拦截处理了)

~~~js
    //   登陆点击
    loginClick() {
      window.console.log(this.form);
      this.$refs.form.validate(result => {
        window.console.log(result);
        if (result) {
          toLogin(this.form).then(res => {
            window.console.log(res);
            this.$message.success("登陆成功");
          });
        }
      });
    },
~~~



正常登陆后，我们需要保存一些登陆的信息，在其它页面都可以使用，我们需要保存到localstorage以便其它页面都可正常使用

## 登录模块 - token函数抽取

> 上一步服务器返回了token，我们也保存了，其他页面可能需要获取，可能需要删除，为了方便调用，咱们把他抽取为函数，避免因为`key`写错了出现问题

步骤:

1. `/src/utils`下创建token的工具函数`token.js`
2. 内部抽取的三个方法
   1. `setToken`
   2. `getToken`
   3. `removeToken`

~~~js
// 保存token
function saveToken(val) {
    window.localStorage.setItem('token', val)
}
// 获取token
function getToken(name = 'token') {
    return window.localStorage.getItem(name)
}
// 删除token
function removeToken(name = 'token') {
    window.localStorage.removeItem(name)
}
export { saveToken, getToken, removeToken }

~~~

## 登陆模块-登陆后保存token

>登陆后，接口给了一个token我们，我们是需要保存起来的，它相当于一个登陆人的令牌

1. 在登陆页面导入相应token保存方法

   ~~~js
   import { getToken } from "@/utils/token.js";
   ~~~

2. 登陆成功后，调用该方法保存登陆后的token

   ~~~js
       //   登陆点击
       loginClick() {
         window.console.log(this.form);
         this.$refs.form.validate(result => {
           window.console.log(result);
           if (result) {
             toLogin(this.form).then(res => {
               window.console.log(res);
               saveToken(res.data.token);
               this.$message.success("登陆成功");
             });
           }
         });
       },
   ~~~

   

![image-20200815105400039](day04 - 黑马面面.assets/image-20200815105400039.png)

![image-20200815105425095](day04 - 黑马面面.assets/image-20200815105425095.png)

![image-20200815105455528](day04 - 黑马面面.assets/image-20200815105455528.png)

![image-20200815105521660](day04 - 黑马面面.assets/image-20200815105521660.png)

![image-20200815105544601](day04 - 黑马面面.assets/image-20200815105544601.png)

![image-20200815105609720](day04 - 黑马面面.assets/image-20200815105609720.png)

![image-20200815105703182](day04 - 黑马面面.assets/image-20200815105703182.png)

![image-20200815105742340](day04 - 黑马面面.assets/image-20200815105742340.png)

![image-20200815105759750](day04 - 黑马面面.assets/image-20200815105759750.png)

## 分支处理

~~~
git add .
git commit -m"登陆完成"
git push
git checkout master
git merge login
git push
~~~

创建一个home

git checkout -b home

产生冲突的原因

- 合并时冲突

  - master修改了login.vue

  - login分支修改了login.vue

  - 再进行合并:合并过程中git不知道听master的还是听login

  - ![image-20200913110852746](day04 - 黑马面面.assets/image-20200913110852746.png)

    - 表示   login.vue产生冲突了

      1. 将冲突文件拷贝出来 单独存放

      2. 取消合并  git merge --abort

      3. 将master冲突文件代码单独存放起来

      4. 切换到login将冲突代码存放起来

      5. 让master代码与login代码一样(将master冲突代码(文件)复制到login冲突代码粘贴)

      6. 再提交login分支代码

      7. 再切换到master

      8. git merge login

         出来一个没见过窗口  输入   :wq

         合并完成  提交代码

         再打开冲突代码,解决后提交(add   commit )

      





## Element - ui 布局容器

> 常见的经典布局，Element-ui已经封装好了，我们直接拿来用即可

[传送门](https://element.eleme.cn/#/zh-CN/component/container)

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!-- 引入样式 -->
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
    <style>
        html,body{
            height: 100%;
            margin: 0;
            padding: 0;
        }
        #app{
            height: 100%;
        }
        .my-container{
            height: 100%;
        }
        .my-header{
            background-color: pink;
        }
        .my-aside{
            background:#0094ff;
        }
        .my-main{
            background-color: yellowgreen;
        }
    </style>
</head>

<body>
    <!-- 挂载的元素 -->
    <div id="app">
        <el-container class='my-container'>
            <el-header class='my-header'>Header</el-header>
            <el-container>
                <el-aside width="200px" class='my-aside'>Aside</el-aside>
                <el-main class='my-main'>Main</el-main>
            </el-container>
        </el-container>

    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <!-- 引入组件库 -->
    <script src="https://unpkg.com/element-ui/lib/index.js"></script>
    <script>
        const app = new Vue({
            el: "#app",

        })
    </script>

</body>
```



## 首页模块 - 整体布局

> 使用Element-ui的布局容器将页面进行拆分

步骤:

1. 创建`/views/home/layout.vue`组件
2. `/router/router.js`定义规则，把首页和规则关联
3. 首页中，使用布局容器区分，上，左，右三个区域
4. 通过样式让他撑开，变为整个屏幕

layout.vue的代码

```html
<template>
  <el-container class="my-container">
    <el-header class="my-header">Header</el-header>
    <el-container>
      <el-aside width="200px" class="my-aside">Aside</el-aside>
      <el-main class="my-main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
</script>

<style lang="less">
.my-container{
    height: 100%;
    .my-header{
        background: hotpink;
    }
    .my-aside{
        background: yellowgreen;
    }
    .my-main{
        background: #0094ff;
    }
}
</style>

```

router.js

~~~js

// 1：安装路由插件  npm i vue-router
// 2:导入路由  
import VueRouter from 'vue-router'
// 3:注册路由   
import Vue from "vue"
import login from "@/view/login/login.vue"
import layout from "@/view/home/layout.vue"
Vue.use(VueRouter)
// 4:路由实例化
const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: login
        },
        {
            path: "/layout",
            component: layout
        },
    ]
})
//     输出出去   
export default router 
~~~

修改登陆页，登陆成功后跳转至此页面

~~~js
this.$router.push("/layout");
~~~



## 首页模块 - 顶部布局

> 顶部的布局，可以使用弹性十分方便来实现

步骤：

1. 开启弹性布局
2. 两边顶格
3. `M`可以下载贴图，其他的都是自己写的
4. 图标用的是`element-ui`的图标

这部分直接参照设计图即可了，

html部分

~~~html
  <el-container class="home">
    <el-header class="header">
      <div class="left">
        <i class="el-icon-s-fold setwh"></i>
        <img class="logo" src="@/assets/img/home_logo.png" alt />
        <p class="title">黑马面面</p>
      </div>
      <div class="right">
        <img class="avator" src="@/assets/img/home_logo.png" alt />
        <span class="name">李XX,您好</span>
        <el-button type="primary" size="mini">退出</el-button>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px" class="aside">Aside</el-aside>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
~~~

css部分

~~~less
<style lang='less'>
.home {
  .header {
    background: rgba(232, 233, 236, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    .left {
      display: flex;
      align-items: center;
      .setwh {
        font-size: 24px;
        color: #000;
      }
      .logo {
        width: 33px;
        height: 28px;
        margin: 0 15px;
      }
      .title {
        width: 92px;
        height: 22px;
        font-size: 22px;
        font-weight: bold;
        color: rgba(73, 161, 255, 1);
      }
    }
    .right {
      display: flex;
      align-items: center;
      .avator {
        width: 43px;
        height: 43px;
        border-radius: 50%;
      }
      .name {
        color: #3f3f3f;
        margin-left: 15px;
        margin-right: 20px;
      }
    }
  }
  .aside {
    background-color: orange;
  }
  .main {
    background-color: blue;
  }
}
</style>
~~~



## 首页模块 - 接口抽取

> 之前是调用一个接口就抽取一个，这次我们一次性首页的接口都抽取完毕

[传送门](https://www.showdoc.cc/538567623707717?page_id=3190467252759447)

步骤:

用户信息展示 

1. 定义接口
   1. 创建一个api/home.js
   2. 写相应的api方法
2. 获取用户信息
   1. 在哪个生命周期  created
   2. 导入api相应方法
   3. 获取用户信息









1. 创建`/src/api/home.js`文件
2. 抽取用户信息接口
3. 抽取退出接口

~~~js
import instance from '@/utils/request.js'
import { getToken } from '@/utils/token.js'
function getUserInfo() {
    return instance({
        url: "/info",
        headers: {
            token: getToken('token')
        }
    })
}
function logout() {
    return instance({
        url: "/logout",
        headers: {
            token: getToken('token')
        }
    })
}
export { getUserInfo, logout }
~~~

后面接口基本都是要求有token才可调用，那我们可以将token的处理写到请求拦截里面去

在请求拦截里加入token处理

1. 在`utils/request.js`中导入`getToken`方法`

   ~~~js
   import {  getToken } from "@/utils/token";
   ~~~

2. 在请示拦截里加入token处理

~~~js
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if (getToken()) {
        config.headers.token = getToken()
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
~~~

再删除home.js相应api方法的token请求头的处理



## 首页模块 - 用户信息获取

> 进入首页之后，获取用户信息，并渲染到页面上，获取的时间要尽可能早哦

步骤：

1. 首页导入接口

   ~~~js
   import { getUserInfo } from "@/api/home";
   ~~~

   

2. created中调用接口

   ~~~
     created() {
       getUserInfo().then(res => {
         window.console.log("用户信息:", res);
       });
     }
   ~~~

   

3. 数据获取到之后渲染到页面上即可

~~~js
  data() {
    return {
      userInfo: ""
    };
  },
  created() {
    getUserInfo().then(res => {
      this.userInfo = res.data;
      this.userInfo.avatar = process.env.VUE_APP_URL + "/" + res.data.avatar;
      window.console.log("用户信息:", res);
    });
  }
~~~

html

~~~html
        <img class="avator" :src="userInfo.avatar" alt />
        <span class="name">{{userInfo.username}},您好</span>
        <el-button type="primary" size="mini">退出</el-button>
~~~

![image-20200815121901520](day04 - 黑马面面.assets/image-20200815121901520.png)



![image-20200815121945688](day04 - 黑马面面.assets/image-20200815121945688.png)

![image-20200815122102477](day04 - 黑马面面.assets/image-20200815122102477.png)







## 在js中使用路由router

>有时候我们也是需要在外部js使用路由跳转的，这时候我们就得导入该路由的实例

在js中导入路由的实例对象

~~~
import router from '@/router/router.js'
//这里的router相当于this.$router
~~~

实现路由跳转

~~~
import router from '@/router/router.js'
router.push("相应的path")
~~~



## 优化全局响应拦截token参数错误

>当token不存在或者超时不正确等情况时，我们进入此页面应该回到登陆页，那要怎么处理呢？

1. 在token响应拦截做出处理，当接口报错206时

   1. 删除本地存储token

      1. 导入删除token方法

         ~~~
         import { getToken, removeToken } from '@/utils/token.js'
         ~~~

      2. 在响应拦截报206时做出相应处理

   2. 跳转至登陆页

      ~~~js
       else if (response.data.code == 206) {
              // token出错处理
              Message.error(response.data.message)
              // 跳至登陆页
              router.push("/")
              // 清理掉token
              removeToken()
              return Promise.reject("error");
      
          }
      ~~~

      

![image-20200815154342351](day04 - 黑马面面.assets/image-20200815154342351.png)

![image-20200815154412330](day04 - 黑马面面.assets/image-20200815154412330.png)







## 获取用户信息前的token检验

>有时候拿到网址就直接访问home页面，一进来它连token都没我们就调用接口耗性能

1. 判断token是否存在，

   1. 存在，获取用户信息
   2. 不存在，跳转至登陆页

   ~~~js
   import { getUserInfo } from "@/api/home";
   import { getToken, removeToken } from "@/utils/token.js";
   export default {
     data() {
       return {
         userInfo: ""
       };
     },
     created() {
       //   获取token，如果没取到值
       if (!getToken()) {
         // 跳至登陆页
         this.$router.push("/");
         return;
       }
       getUserInfo().then(res => {
         this.userInfo = res.data;
         this.userInfo.avatar = process.env.VUE_APP_URL + "/" + res.data.avatar;
         window.console.log("用户信息:", res);
       });
     }
   };
   ~~~

   

   

## 登陆模块优化

>当已登陆用户直接打开登陆页时，让用户直接跳入首页

进入登陆页就进行判断 ，看token是否存在，

- 存在，跳入首页
- 不存在，不做任何处理

1. 导入token获取方法

   ~~~js
   import { saveToken, getToken } from "@/utils/token.js";
   ~~~

2. 在created里进行判断处理

   ~~~js
     created() {
       // 验证token是否存在
       if (getToken()) {
         // 存在，跳入首页
         this.$router.push("/home");
       }
     },
   ~~~

3. 登陆成功跳入首页

   ~~~js
       // 登陆点击
       loginClick() {
         // 登陆全局校验
         this.$refs.form.validate(result => {
           // 登陆接口调用
           if (result == true) {
             toLogin(this.form).then(res => {
               this.$message.success("登陆成功");
               window.console.log("登陆信息：", res);
               // 保存token
               saveToken(res.data.token);
               this.$router.push("/home");
             });
           }
         });
       },
   ~~~

   

![image-20200815154955365](day04 - 黑马面面.assets/image-20200815154955365.png)



## 首页模块 - 用户退出

> 点击退出的时候，调用接口，把之前保存的东西删掉哦

步骤:

1. 点击 退出 
2. 弹出确定框
   1. 确定   退出登陆（调用退出 接口），删除token  跳到登陆页
   2. 取消  什么都不干

 实现

1. 绑定一个退出 事件

   ~~~html
   <el-button type="primary" @click="exit">退出</el-button>
   ~~~

   

2. 写相应事件

   1. 弹出一个确定框

   2. .then里面调用退出 接口

      1. 定义相应api方法

         ~~~js
         function exitLogin() {
             return instance({
                 url: "/logout",
                 method: "get"
             })
         }
         ~~~

         

      2. 在home页导入该方法

         ~~~js
         import { getUserInfo, exitLogin } from "@/api/home.js";
         ~~~

         

      3. 调用该方法

      4. 该方法成功后

         1. 删除token  跳到登陆页

~~~js
    exit() {
      this.$confirm("你确定要退出该网站吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        // 退出接口调用
        exitLogin().then(() => {
          //  删除token
          removeToken();
          // 跳至登陆页
          this.$router.push("/");
        });
      });
    }
~~~

![image-20200815145914837](day04 - 黑马面面.assets/image-20200815145914837.png)



![image-20200815145949734](day04 - 黑马面面.assets/image-20200815145949734.png)



![image-20200815150018352](day04 - 黑马面面.assets/image-20200815150018352.png)

![image-20200815150103840](day04 - 黑马面面.assets/image-20200815150103840.png)

![image-20200815150131632](day04 - 黑马面面.assets/image-20200815150131632.png)



![image-20200815150213578](day04 - 黑马面面.assets/image-20200815150213578.png)

![image-20200815150240690](day04 - 黑马面面.assets/image-20200815150240690.png)





## Element - ui导航菜单

> 首页左侧的导航菜单，Element-ui也提供了对应的组件，不需要自行设置`router-link`，咱们来看看如何使用

[导航菜单传送门](https://element.eleme.cn/#/zh-CN/component/menu#ce-lan)

```html
     <el-menu default-active="2" class="el-menu-vertical-demo" >
            <el-menu-item index="1">
                <!-- 图标 -->
                <i class="el-icon-pie-chart"></i>
                <span slot="title">数据概览</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-user"></i>
                <span slot="title">用户列表</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-edit-outline"></i>
                <span slot="title">题库列表</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-office-building"></i>
                <span slot="title">企业列表</span>
            </el-menu-item>
            <el-menu-item index="5">
                <i class="el-icon-notebook-2"></i>
                <span slot="title">学科列表</span>
            </el-menu-item>
        </el-menu>
```

![image-20200403214321834](day04 - 黑马面面.assets/image-20200403214321834.png)

## 首页模块 - 左侧导航整合

> 导航菜单的基本使用已经演示完毕了，咱们整合到项目中

[图标传送门](https://element.eleme.cn/#/zh-CN/component/icon)

步骤:

1. 找到侧边栏
2. 把导航菜单c+v进去
3. 修改文字和图标即可

![image-20200815162253814](day04 - 黑马面面.assets/image-20200815162253814.png)





## Element - ui 导航菜单折叠

> 如果导航菜单看起来有点碍眼，可以使用折叠功能将其收起,但是样式需要稍作处理，这里不要弄错了哦

[传送门](https://element.eleme.cn/#/zh-CN/component/menu#zhe-die)



```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!-- 引入样式 -->
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
    <style>
        /* c3中的transition（过渡），需要有开始和结束的值 */
        .el-menu-vertical-demo:not(.el-menu--collapse) {
            width: 200px;
            min-height: 400px;
        }
    </style>
</head>

<body>
    <!-- 挂载的元素 -->
    <div id="app">
        <input type="button" value="切换" @click="isCollapse=!isCollapse">
        <el-menu :collapse="isCollapse" default-active="2" class="el-menu-vertical-demo">
            <el-menu-item index="1">
                <!-- 图标 -->
                <i class="el-icon-pie-chart"></i>
                <span slot="title">数据概览</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-user"></i>
                <span slot="title">用户列表</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-edit-outline"></i>
                <span slot="title">题库列表</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-office-building"></i>
                <span slot="title">企业列表</span>
            </el-menu-item>
            <el-menu-item index="5">
                <i class="el-icon-notebook-2"></i>
                <span slot="title">学科列表</span>
            </el-menu-item>
        </el-menu>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <!-- 引入组件库 -->
    <script src="https://unpkg.com/element-ui/lib/index.js"></script>
    <script>
        const app = new Vue({
            el: "#app",
            data: {
                isCollapse: false
            }
        })
    </script>

</body>

</html>
```

![image-20200815162336576](day04 - 黑马面面.assets/image-20200815162336576.png)

## 首页模块 - 左侧导航折叠

> 把刚刚使用的折叠功能整合到项目中

[传送门](https://element.eleme.cn/#/zh-CN/component/menu#zhe-die)

步骤:

1. data中定义是否折叠的布尔值

   ~~~
    collapse: false //是否折叠菜单
   ~~~

   

2. 为左上角的图标绑定点击事件

   ~~~js
         <div class="left">
           <i class="el-icon-s-fold setwh" @click="collapse=!collapse"></i>
           <img class="logo" src="@/assets/img/home_logo.png" alt />
           <p class="title">黑马面面</p>
         </div>
   ~~~

   

3. 布尔值绑定给 导航菜单

   ~~~html
    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="collapse">
   ~~~

   

4. 整合样式

   ~~~css
      /* css3中的transition（过渡），需要有开始和结束的值 
      这里的el-menu-vertical-demo为el-menu上定义的class名字
      */
       .el-menu-vertical-demo:not(.el-menu--collapse) {
         width: 200px;
       }
   ~~~

   

5. 设置侧边栏的width="auto"

   ~~~html
    // 不能将侧边栏宽度写死，要让里面内容撑开，不然就没有适配效果了
   <el-aside width="auto" class="aside">
   ~~~

~~~
   









## 回顾

1. 菜单

~~~

   el-menu组件
   :default-active="值" 对应下面子项的index的值
   :collapse按钮菜单的切换  boolean值
   注意点   设置一个相应的css
   el-menu-item
        i	图标
        slot="title"  重写title部分

   ~~~
   





## 首页模块-获取用户信息前优化

>为了减少一些没必要接口调用，我们进入首页模块时，就进行一次判断 ，当无token时，直接就跳回登陆页，不必要调用用户信息接口

1. 进入首页模块验证一下有无token 

   1. 导入getToken方法

   2. 无token  进入登陆

   3. 有token  请求用户信息

      ~~~js
          // 进行一个基本判断
          //无token跳入登陆页
          if (!getToken()) {
            // 无token
            this.$router.push("/");
            return;
          }
   ~~~

​      

![image-20200815162412351](day04 - 黑马面面.assets/image-20200815162412351.png)







## vue-router 嵌套路由

> 页面的结构如果更加复杂了，可以通过嵌套路由进行更为细致的划分

[传送门](https://router.vuejs.org/zh/guide/essentials/nested-routes.html)

步骤：

1. 嵌套路由的组件出口设置`router-view`
2. 定义组件，设置路由规则
3. 使用地址访问



```javascript
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 导入组件 login
import login from '@/views/login/login.vue';
// 导入组件 index
import index from '@/views/index/index.vue';

// 导入嵌套路由组件 vip
import vip from '@/views/index/vip/vip.vue';
// 导入嵌套路由组件 greenVip
import greenVip from '@/views/index/greenVip/greenVip.vue';

const router = new VueRouter({
  routes: [
    {
      path: '/index',
      component: index,
      // 嵌套的路由规则
      children: [
        {
          // 地址不需要写/
          // 最终解析的是 /index/vip
          path: 'vip',
          component: vip
        },
        {
          // 地址不需要写/
          // 最终解析的是 /index/greenVip
          path: 'greenVip',
          component: greenVip
        }
      ]
    },
    {
      path: '/login',
      component: login
    }
  ]
});

export default router;

```

嵌套路由也有出口

```html
<template>
  <div class="index">
    <div class="left">
      <router-link to="#" >vip</router-link>
      <router-link to="#" >绿钻vip</router-link>
      <router-link to="#" >黑钻vip</router-link>
    </div>
    <div class="right">
      <!-- 出口 -->
      <router-view></router-view>
    </div>
  </div>
</template>

```



注意:

1. 现有路由结构中，再嵌套一层，`children`

2. 嵌套路由也需要设置出口   `router-view`

   

   


