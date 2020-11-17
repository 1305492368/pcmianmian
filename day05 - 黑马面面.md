

# day05 - 黑马面面

## 反馈

1.	舔狗日记2020.9.25 : 每次我发了好几行的文字，你只回复了嗯，哦，啊，好的。我太感动了，无论我说什么你总这样对我百依百顺的，我怎么会有其他的要求呢。尤其每个夜晚，我说晚安，宝贝，总是等不到没有回复的晚安，原来你就这样让我彻夜难眠想你，欲擒故纵这招高明，一直拴住我的心，让我无法摆脱你，我离不开你的。
1.	爱飞哥的每一天 嘶溜
1.	听每日回顾和总结觉得自己还能抢救一下
1.	很棒，很喜欢
1.	飞飞解BUG是真的强 希望能多学点~~~
1.	perfect完美,虽然有些地方有点晦涩难懂,都是飞哥讲的很细有种言简意赅的感觉,能学到多少就看自己了......
1.	演讲赶紧取消吧,太t n的浪费时间耽误学习了,都vue冲刺阶段了,还搞这些形式主义又无意义的东西.赶紧取消了,有事我李云龙一个人扛!
   1.	在你们面对面试过程中没那么紧张 
1.	学了后面的 就忘了前面的,这要怎么办
   1.	最好每个人,有个小本本,把不懂的点记下来
1.	各组件的抽离和调用写起来还是有点儿容易乱，没有很清晰的步骤和思路，写着就不太熟
1.	木字多一撇是啥字?
1.	老师讲这么仔细,我觉得我应该不需要预习哈哈
1.	老师讲一下token抽取之后，默认值的设置吧
1.	请老师多多扩展些疑难问题。(当你面对一个两难的抉择，抛硬币是最好的办法，并不是它能给你想要的答案，而是当你把它抛向空中那一刻，你已经知道，想要的是什么了)
   1.	知识点
      1.	常用知识点
   1.	逻辑代码
      1.	数学较强
      1.	以前学过编程
1.	老师 工作中真的要建这么多文件夹嘛,感觉搞多了都搞混了
   1.	必要的
1.	单个知识点不难,也都能理解,但是这里传过去那里传过来就蒙圈了.....今天没总结,感觉少了点什么
1.	多喝热水
1.	喜欢飞飞,耐心教学,很棒!



## 回顾

1. ~~~
   token抽离
   
     utils:创建一个文件夹
        local.js
           保存
              function saveLocal(key,value){
              window.localStorage.setItem(key,value)
              }
            获取
              function getLocal(key){
            return  window.localStorage.getItem(key)
              }
             删除
             function removeLocal(key){
             window.localStorage.removeItem(key)
             }
             
             export {saveLocal,getLocal,removeLocal}
             
      拦截器
         安装  
         导入  import axios from 'axios'
         创建副 本
            let _fetch=axios.create({
            baseURL:process.env.VUE_APP_URL,
            withCredentials:true
            })
            请求拦截
            _fetch.interceptors.request.use(
            function (config){
            config.headers.token=getLocal("token")
            return config
            
            },
            function (error){
            return Promise.reject(error)
            }
            
            )
            
            响应拦截
            import {Message} from 'element-ui'
            import router from '@/router/index.js'
            import {removeLocal} from '@/utils/local.js
            _fetch.interceptors.response.use(function(res){
            if(res.data.code==200){
            return res
            }else if(res.data.code==206){
            提示一下
            Message.error(res.data.message)
            清除token
            removeLocal("token")
            跳转至登陆页
            router.push("/login")
            不要执行后面的.then跳转到.catch执行
            return Promise.reject(res.data.message)
            }else{
             提示一下
            Message.error(res.data.message)         
           不要执行后面的.then跳转到.catch执行
            return Promise.reject(res.data.message)
            }
            },
            function (error){
           return Promise.reject(error) 
            }
            )
            导航菜单
            e-menu
                default-active:默认选中哪一项
                collapse:true折叠  false不折叠
                router 路由模式  true使用  false不使用
                el-menu-item  index:对应default-active的值
                     如果是路由模式下,index对应path
                        
              嵌套路由
              使用场景:某一路由对应组件希望它也可以修改其中一小块内容,同时可以实现路由切换
                 1:在路由对应组件 相应位置加一个router-view
                 2:配制该路由对应子路由  children
               {
                   path
                   component:xxx,
                   children:[{}]
                   }
   
   
   
   
   
   
   
   ~~~
   
2. 









## 导航守卫

> 如果我们希望在页面加载之前执行一些逻辑的话，可以使用导航守卫，执行的时机比组件的生命周期钩子更早哦

[传送门](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html)

`导航守卫`可以理解为就是几个回调函数

比如`生命周期钩子`也是回调函数

`导航守卫`，是路由提供的回调函数

每个守卫方法接收三个参数：

- **`to: Route`**: 即将要进入的目标 [路由对象](https://router.vuejs.org/zh/api/#路由对象)
- **`from: Route`**: 当前导航正要离开的路由
- **`next: Function`**: `一定要调用`该方法来 **resolve** 这个钩子。执行效果依赖 `next` 方法的调用参数。
  - **`next()`**: 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 **confirmed** (确认的)。
  - **`next(false)`**: 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 `from` 路由对应的地址。
  - **`next('/')` 或者 `next({ path: '/' })`**: 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 `next` 传递任意位置对象，且允许设置诸如 `replace: true`、`name: 'home'` 之类的选项以及任何用在 [`router-link` 的 `to` prop](https://router.vuejs.org/zh/api/#to) 或 [`router.push`](https://router.vuejs.org/zh/api/#router-push) 中的选项。
  - **`next(error)`**: (2.4.0+) 如果传入 `next` 的参数是一个 `Error` 实例，则导航会被终止且该错误会被传递给 [`router.onError()`](https://router.vuejs.org/zh/api/#router-onerror) 注册过的回调。

~~~js
router.beforeEach((to, from, next) => {
   //路由进入前处理
     next()
})
router.afterEach((to,from) => {
//路由进入后的处理
})
~~~





## nprogress

>  一个挺好看的进度条，轻量级，使用简便

[传送门](https://github.com/rstacruz/nprogress)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://unpkg.com/nprogress@0.2.0/nprogress.css">


</head>

<body>
    <script src="https://unpkg.com/nprogress@0.2.0/nprogress.js"></script>
    <script>
        // 开启进度
        NProgress.start()
        setTimeout(() => {
            // 结束进度
            NProgress.done()
        }, 1000);
    </script>
</body>

</html>
```

注意：

1. 这个进度条，开始和结束都是我们自己控制的
2. 比如希望在发送请求时，开启，请求结束时关闭
   1. ` NProgress.start()`
   2. .then或者是回调函数中`NProgress.done()`

## 首页模块 - nprogress整合

> 使用导航守卫，使用刚刚的第三方模块，我们来实现页面切换时顶部的进度条

步骤:

1. 装包 `npm i nprogress`
2. 导包
   1. `import  NProgress from 'nprogress'` 
   2. 导入他的样式 `import 'nprogress/nprogress.css`
3. `/router/router.js`的路由实例化后的导航守卫 中加入即可
   1. 导航守卫 `beforeEach`  开启    `Nprogress.start()`
   2. 导航守卫`afterEach `  关闭即可  `Nprogress.done()`

~~~js
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
router.beforeEach((to, from, next) => {
    Nprogress.start()
    next()

})
router.afterEach(() => {
    Nprogress.done()
})
~~~

![image-20200817102619350](day05 - 黑马面面.assets/image-20200817102619350.png)

## 登录校验模块 - 分支切换

> 现在可以进到首页了，但是不登陆也可以进来，很明显这不合理，接下来我们来实现登录校验模块，分支操作来一波

步骤:

1. 切换到主分支
2. 合并 首页分支 到主分支
3. 删除首页分支
4. 创建登录校验分支`check`

~~~
git add .
git commit -m'首页模块功能完成'
git push
git checkout master
git merge home
git push
git branch check
git checkout check
~~~



## Vue-router - 路由元信息

> 路由元信息可以理解为是保存在路由上的一些额外的信息，可以保存任意的内容，至于如何使用，就看自己了哦

1. 定义
   1. 在相应路由下面加一个meta对象，可以在该对象里加入一些自己想要使用的信息
2. 调用
   1. 在相应路由组件里this.$route.meta就可以获取到自定义的一些路由信息

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/index',
      component: index,
      // 元信息
      meta:{
        info:"我是一个华丽的首页",
        secret:"vip都是骗人的",
        message:"哎呀，你冲了vip呀，不退钱哦"
      },
      // 嵌套的路由规则
      children: [
        {
          // 地址不需要写/
          // 最终解析的是 /index/vip
          path: 'vip',
          component: vip,
          meta:{
            info:"尊贵的VIP"
          }
        },
        {
          // 地址不需要写/
          // 最终解析的是 /index/greenVip
          path: 'greenVip',
          component: greenVip,
          meta:{
            info:"原谅色的VIP"
          }
        },
        {
          // 地址不需要写/
          // 最终解析的是 /index/blackVip
          path: 'blackVip',
          component: blackVip,
          meta:{
            info:"黑钻的VIP"
          }
        }
      ]
    },
    {
      path: '/login',
      component: login
    }
  ]
});
```

注意:

1. 元信息的字段名叫做`meta`
2. 类型是对象，内部可以添加任意的键值对
3. 组件内部通过`this.$route.meta.xx`获取数据
4. 在导航守卫中，可以通过`to.meta.xxx`或者`from.meta.xx`来获取





## 登录校验模块 - 网页Title修改

> 在我们切换左侧路由的时候，顶部的标题也一起更改吧，逻辑写哪里呢

需求:

路由切换，标题更改

步骤：

1. 在路由中添加元信息，保存当前这个组件的标题`title`
2. 在路由切换完毕的时候切换顶部的标题
   1. afterEach
      1. document.title

~~~js
/*
步骤：
1：安装路由插件  npm i vue-router
2:导入路由   import VueRouter from 'vue-router'
3:注册路由   Vue.use(VueRouter)
4:路由实例化
    const router=new VueRouter({
        routes:[]
    })
    输出出去   export default router
5:注入到vue实例
6：给路由来个出口  router-view
*/


// 1：安装路由插件  npm i vue-router
// 2:导入路由  
import VueRouter from 'vue-router'
// 3:注册路由   
import Vue from "vue"
import login from "@/view/login/login.vue"
import layout from "@/view/home/layout.vue"
import chart from '@/view/home/chart/chart.vue'
import userList from '@/view/home/userList/userList.vue'
import question from '@/view/home/question/question.vue'
import business from '@/view/home/business/business.vue'
import subject from '@/view/home/subject/subject.vue'
Vue.use(VueRouter)
// 4:路由实例化
const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: login,
            meta: {
                title: "登陆"
            }
        },
        {
            path: "/layout",
            component: layout,
            children: [
                {
                    path: "chart",
                    component: chart,
                    meta: {
                        title: "数据概览"
                    }
                },
                {
                    path: "userList",
                    component: userList,
                    meta: {
                        title: "用户列表"
                    }
                },
                {
                    path: "question",
                    component: question,
                    meta: {
                        title: "题库列表"
                    }
                },
                {
                    path: "business",
                    component: business,
                    meta: {
                        title: "企业列表"
                    }
                },
                {
                    path: "subject",
                    component: subject,
                    meta: {
                        title: "学科列表"
                    }
                },
            ]
        },
    ]
})
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
router.beforeEach((to, from, next) => {
    Nprogress.start()
    next()

})
router.afterEach((to) => {
    Nprogress.done()
    document.title = to.meta.title
})
//     输出出去   
export default router 
~~~



注意：

to.meta是固定写法，meta之后的是根据定义的进行获取

![image-20200622114743202](day05 - 黑马面面.assets/image-20200622114743202.png)

![image-20200622114810830](day05 - 黑马面面.assets/image-20200622114810830.png)

## git冲突解决

1. 基本提交

   1. ~~~
      拉取代码
      git clone  地址
      只是摘取了master
      拉取其它分支代码
      有可能别人在后面添加了一些其它分支,你看不到该分支
      git fetch --all
      git checkout -b 分支名  origin/分支名
      ~~~

   2. 冲突解决

      1. 所有的冲突都是合并冲突
      2. git pull冲突
         1. 拉取代码  git fetch
         2. 合并代码   git merge
      3. 冲突原因:远程仓库代码修改了a文件,你本地也修改了a文件,这时候你执行git pull
      4. 解决冲突a与b二个操作master分支下的master.txt文件产生冲突,b用户产生的
         1. 复制出冲突文件代码(b复制出冲突文件)
         2. ![image-20200915114925939](day05 - 黑马面面.assets/image-20200915114925939.png)
      5. 取消合并  git merge --abort![image-20200915115029146](day05 - 黑马面面.assets/image-20200915115029146.png)
      6. 备份当前修改(b的修改)
      7. 让本地冲突文件与服务器文件一样
         1. git reset --hard origin/分支名
      8. 拿出备份的冲突文件解决冲突提交

   3. 合并冲突解决

      1. 产生原因"a分支合并b分支,(a与b都修改了xxx文件)![image-20200915120045150](day05 - 黑马面面.assets/image-20200915120045150.png)

- 解决冲突:让二分支保持一样,最好备份各分支代码  master合并bbb分支产生冲突
  - 备份合并冲突文件
  - 取消合并  git merge --abort
  - 备份master 的冲突文件
  - 切换到bbb分支并备份冲突文件
  - 将master备份的冲突文件直接复制替换bbb的冲突文件,并提交
  - 回到master分支继续 合并  
    - git checkout master 
    - git merge bbb
      - 可能出现弹框 
        1. 输入  :wq
    - 完成合并
    - 提交代码
  - 复制备份合并冲突文件替换master冲突文件,并修改冲突并提交
  - 保持bbb分支与master分支代码一致
    - git checkout bbb
    - git merge master



## Vuex基本使用

>vue-cli vue-router element-ui  axios vuex

官网地址： **https://vuex.vuejs.org/zh/** 

**什么是vuex**

> Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式** ，实际就是实现数据的共享数据管理。

**基本使用步骤**

1. 安装vuex      npm i vuex

2. 在main中导入      import Vuex from 'vuex'

3. 注册       Vue.use(Vuex)

4. 实例化  

   1. ```javascript
      const store = new Vuex.Store({
        // 共享数据存储的地方
        state: {
          msg: "我是共享数据"
        }
      })
      ```

5. 注入到Vue实例

   1. ```javascript
      new Vue({
      store
      })
      ```

**如何访问共享数据呢？**

this.$store.state.msg      //通过this.$store.saate可以访问在vuex的state中定义的数据

**应用场景**

>同用数据的存储，如网站个人用户信息在某个接口调用后，共享存储，其它任意地方都可使用，
>
>兄弟组件或者其它关系更复杂的一些组件间的传值



## vuex的提取

通过export default store

然后在main.js中导入   import store from '路径'

- 步骤
  - 安装vuex     npm i  vuex
  - 在src下建立 一个store文件夹，再在store文件夹下建立 一个index.js
  - 在index.js中写上vuex实例化
    - 导入vuex     import Vuex from 'vuex'
    - 注册vuex    Vue.use(Vuex)
    - 实例化vuex     new Vuex.Store({state:{}})
    - 输出 store    export default store
    - 再到main.js中导入store/index.js     import store from './store/index.js'
    - 挂载到new Vue上       new Vue({store})

~~~js
/*vuex基本步骤
1：安装vuex
2:导入vuex
3:注册vuex
4:实例化vuex
5:注入到vue实例
*/
// 1：安装vuex
// 2:导入vuex
import Vuex from 'vuex'
// 3:注册vuex
import Vue from 'vue'
Vue.use(Vuex)
// 4:实例化vuex
const store = new Vuex.Store({
    //state就是共享的数据
    state: {}
})
export default store
// 5:注入到vue实例
~~~

注入到vue实例，就是像router一样的处理，在main.js中

~~~js
import Vue from 'vue'
import App from './App.vue'
// 导入router实例
import router from "@/router/router.js"
// 导入vuex实例
import store from "@/store/index.js"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

~~~

















## 登录校验模块 - Vuex整合

> 通过Vuex可以非常方便的实现多组件的数据共享，这里我们把Vuex整合到项目中

就是ctrl+c与ctrl+v的事情

需要共同使用的一些数据放到vuex里面以便其它地方使用，

比如：用户信息一般都是使用vuex,只要谁去修改了它，任何使用它的地方都会更新过来



## 登录校验模块 - 用户信息保存和渲染

> Vuex整合完毕之后，上一步数据获取的时候，把数据保存进去，并且渲染出来哦

1. 在用户获取完用户信息后，将用户信息保存到vuex中去

   1. 在vuex的state中定义一个userInfo对象用于存储用户信息

   ~~~js
       state: {
           userInfo: {},//用户信息
       }
   ~~~

   2.在获取到用户信息后，也就是在`layout.vue`中存储用户信息，将整个用户信息存储起来

   ~~~js
       getUserInfo().then(res => {
         this.userInfo = res.data;
         this.userInfo.avatar = process.env.VUE_APP_URL + "/" + res.data.avatar;
            this.$store.state.userInfo=this.userInfo
         window.console.log("用户信息:", res);
       });
   ~~~

2. 将页面上的头部的用户信息使用vuex的写法

   ~~~html
         <div class="right">
           <img class="avator" :src="$store.state.userInfo.avatar" alt />
           <span class="name">{{$store.state.userInfo.username}},您好</span>
           <el-button type="primary" size="mini" @click="exit">退出</el-button>
         </div>
   ~~~

   ![image-20200817150321802](day05 - 黑马面面.assets/image-20200817150321802.png)

![image-20200817150354828](day05 - 黑马面面.assets/image-20200817150354828.png)

![image-20200817150434523](day05 - 黑马面面.assets/image-20200817150434523.png)

## 学科模块 - 分支切换

> 登录校验模块搞定了，学科模块分支切换来一波

1. 切换到主分支
2. 合并 校验分支到主分支
3. 删除校验分支
4. 创建学科分支`subject`

~~~
//提交内容
git add .
git commit -m"登陆vuex处理"
git push
//切换到master分支进行合并
git checkout master
git merge check
git push
git branch subject
git checkout subject

~~~





## Element-ui 卡片

> 通过卡片可以十分方便的实现四周的阴影

[传送门](https://element.eleme.cn/#/zh-CN/component/card#card-qia-pian)

```html
<el-card class="box-card">
    尊贵的 VIP黄金黑钻限量卡
  </el-card>

```

## Element - ui select选择框

> 选择框如何使用呢？

[传送门](https://element.eleme.cn/#/zh-CN/component/select)

```html
      <!-- value的值 会设置给 v-model绑定内容 -->
        <el-select v-model="value" placeholder="请选择你喜欢的食物">
            <!-- value 每一个选项的值 -->
            <!-- label 用户看到的文本 -->
            <el-option value="1" label="西兰花炒蛋"></el-option>
            <el-option value="2" label="西兰花炒肉"></el-option>
            <el-option value="3" label="西兰花炒花菜"></el-option>
        </el-select>

```





## Element - ui 行内表单

> 元素在一行显示，使用行内表单即可

[传送门](https://element.eleme.cn/#/zh-CN/component/form#xing-nei-biao-dan)

[图标按钮](https://element.eleme.cn/#/zh-CN/component/button#tu-biao-an-niu)

```html
<body>
    <!-- 挂载的元素 -->
    <div id="app">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="学科编号">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="学科名称">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="创建者">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="状态">
                <el-select v-model="formInline.region" placeholder="活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
                <el-button  @click="onSubmit">清除</el-button>
                <el-button  icon="el-icon-plus" type="primary" @click="onSubmit">新增学科</el-button>
            </el-form-item>
        </el-form>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <!-- 引入组件库 -->
    <script src="https://unpkg.com/element-ui/lib/index.js"></script>
    <script>
        const app = new Vue({
            el: "#app",
            data: {
                formInline: {
                    user: '',
                    region: ''
                }
            }
        })
    </script>

</body>

```





## 学科模块 - 顶部布局

> 需要掌握的基本组件已经演示完毕，我们来把布局整出来

步骤：

1. 顶部用`el-card`
2. 内部用`行内表单`
3. 调整样式
4. 结合接口数据把相应的值都绑定起来

![image-20200404132727301](day05 - 黑马面面.assets/image-20200404132727301.png)

~~~js
<template>
  <div class="subject">
    <el-card>
      <el-form :inline="true" :model="form">
        <el-form-item label="学科编号">
          <el-input class="inputW" v-model="form.rid"></el-input>
        </el-form-item>
        <el-form-item label="学科名称">
          <el-input class="inputW" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="创建者">
          <el-input class="inputW" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="form.status" class="inputW">
            <el-option label="启用" value="1"></el-option>
            <el-option label="禁用" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">搜索</el-button>
          <el-button>清除</el-button>
          <el-button type="primary">+新增学科</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "", //学科名字
        rid: "", //学科编号
        username: "", //创建者
        status: "" //状态
      }
    };
  }
};
</script>
<style lang="less">
.subject {
  .inputW {
    width: 140px;
  }
}
</style>

~~~



## 学科模块-进入页面获取列表数据

>进入学科模块，正常就会有一个数据获取

1. 定义学科模块相应api方法

   1. 创建`api/subject.js`文件

   2. 在相应文件写入列表数据获取相应方法

      ~~~js
      import instance from '@/utils/request.js'
      function getSubjectData(params) {
          return instance({
              url: "/subject/list",
              method: "get",
              params
          })
      }
      
      export { getSubjectData }
      
      ~~~

2. 进入学科模块就调用接口

   1. 导入定义的获取数据方法

      ~~~js
      import { getSubjectData } from "@/api/subject.js";
      
      ~~~

   2. 在created中调用该接口，同时将获取到的数据保存起来

   ~~~js
   <script>
   import { getSubjectData } from "@/api/subject.js";
   export default {
     data() {
       return {
         form: {
           name: "", //学科名字
           rid: "", //学科编号
           username: "", //创建者
           status: "" //状态
         },
         tableData: [] //列表数据
       };
     },
     created() {
       getSubjectData({}).then(res => {
         this.tableData = res.data.items;
         window.console.log(res);
       });
     }
   };
   </script>
   
   ~~~

   

## Element - ui 表格

> 非常常用的一个组件，用来展示数据特别好用

[传送门](https://element.eleme.cn/#/zh-CN/component/table#ji-chu-biao-ge)

```html
<body>
    <!-- 挂载的元素 -->
    <div id="app">
        <input type="button" value="数据添加" @click="addData">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日了个期">
            </el-table-column>
            <el-table-column prop="name" label="姓了个名">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
            <el-table-column prop="habbit" label="爱好">
            </el-table-column>
        </el-table>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <!-- 引入组件库 -->
    <script src="https://unpkg.com/element-ui/lib/index.js"></script>
    <script>
        const app = new Vue({
            el: "#app",
            methods: {
                addData() {
                    this.tableData.push({
                        date: '2020-2-13',
                        name: '小花',
                        address: '深圳市宝安区石岩街道，创维创新谷黑马程序员',
                        habbit: "写代码"
                    })
                }
            },
            data: {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    habbit: "吃饭"
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    habbit: "睡觉"
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                    habbit: "打豆豆"
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                    habbit: "豆豆是谁"
                }]
            }
        })
    </script>

</body>

```

注意:

1. 绑定数据之后，数据改变，页面会联动
2. 表头
   1. label
3. 数据属性
   1. prop
4. 最外层容器 el-table
   1. :data来绑定数据



## Element - ui table自定义列

> table的自定义内容玩法很多，核心是能够在template中获取到数据，至于数据如何使用就看自己了?

```html
<body>
    <!-- 挂载的元素 -->
    <div id="app">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址">

            </el-table-column>
            <el-table-column prop="male" label="性别">
                <!-- 自己获取数据，并编写渲染的逻辑 -->
                <template slot-scope="scope">
                    {{ scope.row.male==true?'男':'女' }}
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <!-- 定义一个局部变量 -->
                <template slot-scope="scope">
                    <el-button @click="handleDelete(scope.$index,scope.row)" type="success">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <!-- 引入组件库 -->
    <script src="https://unpkg.com/element-ui/lib/index.js"></script>
    <script>
        const app = new Vue({
            el: "#app",
            methods: {
                handleDelete(index, row) {
                    window.console.log('删除')
                    window.console.log(index, row)
                }
            },
            data: {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    // 男 true 女 false
                    male: true
                }, {
                    date: '2016-05-04',
                    name: '王小妞',
                    address: '上海市普陀区金沙江路 1517 弄',
                    male: false
                }, {
                    date: '2016-05-01',
                    name: '王大妞',
                    address: '上海市普陀区金沙江路 1519 弄',
                    male: false
                }, {
                    date: '2016-05-03',
                    name: '王虎东',
                    address: '上海市普陀区金沙江路 1516 弄',
                    male: true
                }]
            }
        })  
    </script>

</body>

```



## Element - ui 表格 自定义内容

>表格默认只能够渲染数据，如果要显示按钮等一些东西就需要自定义了，原理涉及到一个还没讲到的知识点，先学会使用

[自定义结构](https://element.eleme.cn/#/zh-CN/component/quickstart#an-xu-yin-ru)

```html
<body>
    <!-- 挂载的元素 -->
    <div id="app">
        <input type="button" value="数据添加" @click="addData">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column type="index" width="50" label="索引">
            </el-table-column>
            <el-table-column prop="date" label="日期">
            </el-table-column>
            <el-table-column prop="name" label="姓名">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="niubi">
                    <el-button type="text" size="mini" @click="handleEdit(niubi.$index, niubi.row)">编辑</el-button>
                    <el-button type="text" @click="handleNotAllow(niubi.$index, niubi.row)">禁用</el-button>
                    <el-button size="mini" type="text" @click="handleDelete(niubi.$index, niubi.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <!-- 引入组件库 -->
    <script src="https://unpkg.com/element-ui/lib/index.js"></script>
    <script>
        const app = new Vue({
            el: "#app",
            methods: {
                addData() {
                    this.tableData.push({
                        date: '2020-2-13',
                        name: '小花',
                        address: '深圳市宝安区石岩街道，创维创新谷黑马程序员',
                    })
                },
                handleEdit(index, row) {
                    console.log(index, row);
                    row.name='王二花'
                },
                handleDelete(index, row) {
                    console.log(index, row);
                },
                handleNotAllow(index,row){
                    console.log(index, row);
                }
            },
            data: {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                }]
            }
        })
    </script>

</body>

```

 ## Element - ui 分页器

> 分页的效果也帮我们整合好了哈

[传送门](https://element.eleme.cn/#/zh-CN/component/pagination)

```html
<body>
    <!-- 挂载的元素 -->
    <div id="app">
        <el-pagination background @size-change="sizeChange" @current-change="currentChange"
            :current-page="index" :page-sizes="[2, 4, 5, 10]" :page-size="size"
            layout="total, sizes, prev, pager, next, jumper" :total="25">
        </el-pagination>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <!-- 引入组件库 -->
    <script src="https://unpkg.com/element-ui/lib/index.js"></script>
    <script>
        // current-page 默认的页码
        // page-sizes:数组 页码选项
        // page-size 默认的页容量
        // total 总条数
        // @size-change 页容量改变
        // @current-change 页码改变
        const app = new Vue({
            el: "#app",
            data: {
                index: 4,
                size: 5
            },
            methods: {
                sizeChange(val) {
                    console.log(`每页 ${val} 条`);
                },
                currentChange(val) {
                    console.log(`当前页: ${val}`);
                }
            }

        })
    </script>

</body>

```





## 学科模块 - 表格整合

> 中间用到的是表格，我们也整合进来

步骤:

1. 套一个<el-card
2. 将 table整合到 页面底部
3. table绑定的数据,前面已获取了相应数据的
4. 序号，操作，状态 需要用到自定义

~~~html
    <el-card>
      <el-table :data="tableData">
        <el-table-column label="序号" width="50px">
          <template slot-scope="scope">{{scope.$index+1}}</template>
        </el-table-column>
        <el-table-column label="学科编号" prop="rid"></el-table-column>
        <el-table-column label="学科名称" prop="name"></el-table-column>
        <el-table-column label="简称" prop="short_name"></el-table-column>
        <el-table-column label="创建者" prop="username"></el-table-column>
        <el-table-column label="创建日期" prop="create_time"></el-table-column>
        <el-table-column label="状态" width="50px">
          <template slot-scope="scope">{{scope.row.status==0?'禁用':"启用"}}</template>
        </el-table-column>
        <el-table-column label="操作" width="300px">
          <template slot-scope="scope">
            <el-button>编辑</el-button>
            <el-button>{{scope.row.status==1?'禁用':"启用"}}</el-button>
            <el-button>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

~~~





## 学科模块 - 分页器整合

> 底部用到的是，分页器我们也整合进来

从element复制全功能分页器,并定义相应数据与方法

`html`

~~~html
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagination.currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pagination.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pagination.total"
      ></el-pagination>

~~~

`js`

~~~js
<script>
import { getSubjectData } from "@/api/subject.js";
export default {
  data() {
    return {
      form: {
        name: "", //学科名字
        rid: "", //学科编号
        username: "", //创建者
        status: "" //状态
      },
      tableData: [], //列表数据
      pagination: {
        currentPage: 1, // 当前 页
        pageSize: 1, //每页条数
        total: 2 //总数
      }
    };
  },
  created() {
    getSubjectData({}).then(res => {
      this.tableData = res.data.items;
      window.console.log(res);
    });
  },
  methods: {
    handleSizeChange(size) {
      //每页条数改变时回调
      window.console.log("每页条数:", size);
    },
    handleCurrentChange(page) {
      //当前页码改变时的回调
      window.console.log("当前页面：", page);
    }
  }
};
</script>
<style lang="less">
.subject {
  .inputW {
    width: 140px;
  }
}
</style>

~~~



1. 公司一些制度

   1. 程序员:有效管理每个员工

      low:   做一个excel:列出工作清单,记录哪个人做什么东西,什么时候完成

      ​       登陆:1天   9 /16   测试要测   

      正规: 网站化管理

      - 产品经理,需求,原型,将任务细化,每一个模块
      - 前端负责人:针对模块再细化,细要到一个个小功能,分配给你们
      - 网站化管理
        - 上传图片2小时   xxx  
        - 验证码1小时     xxx
        - 按一天8小时
      - 早上一上班点开始  打开网站点开始做上传图片 开始计时
        - 到点了,就报异常  前端 负责人,领导都可以看到
        - 到了下班了,就要看一下,
      - 第二天开会:总结 完成的怎么样,让你说:昨天做了什么,今天准备做什么,能不能按时完成,有没有难点

   2. 一个阶段后中,会开一个项目总结大会

      1. 一般开发人员不参与
      2. 前端负责
      3. 列出问题
         1. 前端问题
            1. 谁产生的

   3. 甲方

      1. 提需求方

      

## 总结

1. 导航守卫

   1. 前置守卫

      1. ~~~
         router.beforeEach((to,from,next)=>{
         to:去的路由信息
         from :来的路由信息
         next:  正常通过  next()  
            不允许 通过  next(path)
         })
         ~~~

      2. 

   2. 后置守卫

      1. ~~~
         router.afterEach((to,from)=>{
         to:去的路由信息
         from :来的路由信息
         })
         ~~~

2. 路由元:meta

   1. meta:{title}
   2. 后置守卫 
      1. document.title="黑马面面---"+to.meta.title

3. nprogress

   1. 安装  npm i nprogress

   2. 导入  

      1. 路由文件
         1. import Nprogress from 'nprogress'
         2. import "nprogress/nprogress.css"
      2. 使用
         1. Nprogress.start() 
         2. Nprogress.done()

   3. vuex

      1. vuex:共享状态管理

         1. 基本使用

            1. ~~~
               1:装包  npm i vuex
               2:src/store/index.js
                 导入  import Vuex from 'vuex'
                       import Vue from 'vue'
                       Vue.use(Vuex)
                       const store=new Vuex.Store({
                       state:{
                       //共享数据
                       }
                       })
                    暴露出去  export default store
                  在main.js导入
                  import store from '@/store'
                  注入到new Vue({store})
                  访问:this.$store.state.名字
               ~~~

      1. 卡片

         1. el-card

      2. select:

         1. ~~~
            el-select  v-model="值"
                el-option   label:文本   value:选中该项后的值
                
            ~~~

      3. el-form   inline  :true行内  false块级

   4. table

   5. ~~~
      el-table  :data="数组"
        el-table-column  label:标题    prop="绑定该列字段名"
        自定义列
           1:在需要自定义的列内加一个template
           2:在template 加一个v-slot="scope(局部变量template标签内)"
      ~~~

      ​         scope.$index:索引  v-for   index

      ​      scope.row:每一行数据  v-for   item

   6. 分页器

      1. ~~~
         el-pagination
          total:总数
          page-sizes:页容量选项
          page-size:默认页容量
          current-page:默认页码
          layout="total,sizes,prev,pager ,next,jumper"
          @size-change:页容量改变
          @current-change:页码改变
         ~~~

      2. 

4. 开支最大:基本都是程序 

   1. 敏捷开发:
      1. 每个人规定好相应时间
      2. 产品经理:出需求列出来
         1. 分的很细
         2. 需求给他前端负责人
            1. 前端负责人(架构)解决难题
            2.  安排任务:
               1. 上线时间:开发时间
                  1. 根据需求定时间
               2. 每个人都安排 任务
                  1. excel:xxx:登陆页:4小时完成,注册:4小时
                  2. 好:网站直接录入
                     1. 名字:任务,每做一个任务你要到网站点开始:开始计时
                     2. 二星期任务排的足
                        1. 没人绝对理由
                        2. 点开始,晚上,你还不能点结束 
                        3. 你的项目经理也可看到
                     3. bug多,测试会加到相应网站
                     4. bug作为重要系数
                  3. 速度很重要