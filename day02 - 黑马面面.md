# day02 - 黑马面面

## 反馈

1.	你知道吗，乌拉圭的人口有345.7万，同时仅澳大利亚就有4700万袋鼠，如果袋鼠决定入侵乌拉圭，那么每一个乌拉圭人都要打14只袋鼠。你不知道，你不在乎，你只关心你自己
1.	感觉前面学的东西好多都忘了,是不是没救了
1.	蒙圈中带点懂
4.	太棒了，我好喜欢！
5.	我在马路边捡到手榴弹，把它交到警察叔叔手里边，叔叔拉开弦，对着马路边，我高兴的说声 叔叔再见！ ---爆 儿歌
6.	飞飞我爱你
7.	第一天的内容轻松加愉快,我也有预感到后面会坐过山车了,不过后面的老师真是一个比一个细啊,很赞
   1.	至少三次
8.	老师你电脑分辨率太高,显示的字体太小了,调一下.除了笔记其他看着太费劲了,特别是谷歌,桌面,git小黑窗等
9.	很细！ 就是讲的有点快！~
10.	还不错 老师给的练习时间充足
11.	飞哥,vue靠你来拯救了,人均月薪过万
    1.	4千多
    2.	1.8万
12.	很清晰
13.	讲的好啊，浩飞！(手动狗头)
14.	喜欢老师这种严谨的性格.打五笔的都是高手
15.	满满的一天都是新知识

## 回顾

1. 项目创建  vue create 名字

2. 运行  npm run serve 

3. 安装依赖  npm i 

4. git命令

   1. ~~~
      初始化  git init
      添加至缓存  git add .
      添加至本地仓库  git commit -m"注释"
      添加至远程仓库  git push
      添加远程仓库地址到本地  git remote add origin 地址
      第一次完整提交  git push -u origin master
      分支查看 git branch -a
      分支切换 git checkout 分支名
      创建分支  git branch 分支名
      删除本地分支 git branch -d 分支名
      删除远程分支  git push origin :远程分支名
      合并分支  git merge 分支名
      拉取分支代码  git pull
      克隆分支  git clone
      拉取其它分支代码    git checkout -b 分支名 origin/分支名
      回滚公支  git reset --hard 版本号
      查看版本号   git reflog --oneline
      重置当前分支代码为某分支代码   git reset --hard origin/远程分支名
      
      ~~~

   2. @

      1. @在html与js中表示 src目录
      2. ~@在css中表示 src

   3. 路由抽取

      1. export default   值

      2. import  名字  from "路径"    //名字=值

         1. 装包   npm i vue-router
         2. 导包  import VueRouter from 'vue-router'
         3. 注册    import Vue from 'vue'
            1. Vue.use(VueRouter)
         4. 实例化   const router=new VueRouter(routes:[])
            1. export default router
         5. 注入(main.js)
            1. import router from '@/router'
            2. new Vue({router})
         6. 路由出口   router-view

      3. less使用

         1. 安装   npm i less less-loader
         2. 使用   style   lang="less"

      4. form表单

         1. ~~~
            el-form
                 :model:数据绑定(对象)
                 label-width:标题宽度
              el-form-item   label:标题
              
              el-input
                  v-model:双向绑定
                  prefix-icon:头部图标
                  show-password:密码模式  
               el-row:行
                   el-col  列   :span="24拦 整 行"
                el-link   type="primary"
                el-checkbox 
                    v-model:数组  非数组
                    label:选中该项后的值
                  数组:它选中某项,数组.push(label的值)取消,数组就删除label的值
                  非数组:它选中某项,它的值是true  取消就是false
                  
              
              
              
            ~~~

         2. 

















## Element - ui 表单元素 基本使用

> 表单元素的使用有挺多需要设置的内容，比如绑定数据时，需要遵守他的格式哦、

表单的数据绑定

```html
    <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动地点">
                <el-input v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item label="活动性质">
                <el-checkbox v-model="form.isChecked">是否同意用户协议</el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" >立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
```

1. el-form设置`:model`绑定整个表单数据对象
2. 表单元素通过`数据对象.属性`进行数据绑定

## 登录模块 - 表单布局 - 输入框

> 表单区域的内容，我们基于Element-ui的默认结构调整为需要的样子，先调整输入框

1. 拷贝el-form到左侧盒子
2. 调整结构，设置属性
3. 调整样式即可

~~~html
              <!-- 
        1:加一个el-form表单，再加入子项el-form-item
           :model属性，绑定表单元素的值
        2:在el-form-item下加入一个el-input
           v-model双向绑定表单元素的值
           placeholder
           prefix-icon  input前面图标
           show-password是否显示密码图标，以点点形式显示           
      -->
<el-form-item>
          <el-input prefix-icon="el-icon-user" v-model="form.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            :show-password="true"
            prefix-icon="el-icon-lock"
            v-model="form.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
~~~



## 登录模块 - 表单布局 - 验证码

> 验证码部分的布局，用到了栅格，我们来整合一下

步骤:

1. 使用栅格把这一行分为2份
   1. 栅格一行 24份
2. 左侧输入框
3. 右侧是图片

~~~html
       <!-- 栅栏处理共24栏
             el-row：行
                它有一个子项是el-col 代表栏 多少栏  :span="栏数"
        -->
        <el-form-item>
          <el-row>
            <el-col :span="16">
              <el-input v-model="form.code" prefix-icon="el-icon-key" placeholder="请输入验证码"></el-input>
            </el-col>
            <el-col :span="8">
              <img src="@/assets/img/key.jpg" class="key" alt />
            </el-col>
          </el-row>
        </el-form-item>
~~~



##  登录模块 - 表单布局 - 协议

> 协议部分用到了复选框，以及文字链接，我们来整合一下

步骤:

​      整体使用`el-checkbox`

~~~html
     <!-- 
          el-checkbox
          v-model默认值可以来一个空字符串，这样的的选择结果就是true/false
          el-link  type决定颜色 
        -->
        <el-form-item>
          <el-checkbox v-model="form.isCheck">
            我已阅读并同意
            <el-link type="primary">用户协议</el-link>和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>
~~~



## 登录模块 - 表单布局 - 底部按钮

> 底部的按钮，需要稍微调整一下样式，动起手来

步骤:

1. 按钮的类型都是蓝色`primary`
2. 宽度设置100%
3. 第二个按钮顶部间隙26px

~~~html
        <!-- el-button
             type="值"  值决定按钮的颜色
        -->
        <el-form-item>
          <el-button class="btn" type="primary">登陆</el-button>
          <br />
          <el-button class="btn" type="primary">注册</el-button>
        </el-form-item>
~~~



注意:

1. 这里可以添加自定义的类名来编写样式

2. 如果样式不生效
   1. 选择器没有命中 `审查元素`
   2. 权重不够`加权重`
      1. 不要用`!important`，太过暴力，行内样式都无法覆盖
   
   ~~~vue
   <template>
     <div class="login">
       <div class="left">
         <div class="title">
           <img src="@/assets/img/title_logo.png" alt />
           <span class="titleName">黑马面面</span>
           <span class="titleLine">|</span>
           <span class="titleName2">用户登陆</span>
         </div>
         <el-form class="form">
           <!-- prefix-icon是输入框头部图标，后面的值为icon的对应字符串 -->
           <el-form-item>
             <el-input prefix-icon="el-icon-user" placeholder="请输入手机号"></el-input>
           </el-form-item>
           <el-form-item>
             <el-input prefix-icon="el-icon-lock" placeholder="请输入密码" show-></el-input>
           </el-form-item>
           <el-form-item>
             <el-row :gutter="0">
               <el-col :span="16">
                 <el-input placeholder="请输入验证码" prefix-icon="el-icon-key"></el-input>
               </el-col>
               <el-col :span="8">
                 <img class="code" src="@/assets/img/key.jpg" alt />
               </el-col>
             </el-row>
           </el-form-item>
           <el-form-item>
             <el-checkbox>
               <span>
                 我已阅读并同意
                 <span class="color1">用户协议</span>和
                 <span class="color1">隐私条款</span>
               </span>
             </el-checkbox>
           </el-form-item>
           <el-form-item>
             <el-button class="btn" type="primary">登陆</el-button>
             <br />
             <el-button class="btn" type="primary">注册</el-button>
           </el-form-item>
         </el-form>
       </div>
       <div class="right">
         <img src="@/assets/img/login_banner_ele.png" alt />
       </div>
     </div>
   </template>
   <script>
   export default {
     name: "login"
   };
   </script>
   <style lang="less">
   .login {
     /* 弹性盒子布局 */
     display: flex;
     /* 水平布局 */
     justify-content: space-around;
     /* 垂直居中 */
     align-items: center;
     height: 100%;
     background: linear-gradient(
       225deg,
       rgba(20, 147, 250, 1),
       rgba(1, 198, 250, 1)
     );
     .left {
       width: 478px;
       height: 550px;
       padding: 42px;
       background-color: #f5f5f5;
       .title {
         display: flex;
         align-items: center;
         .titleName {
           font-size: 24px;
           font-weight: 400;
           color: rgba(12, 12, 12, 1);
           margin: 0 15px;
         }
         .titleName2 {
           font-size: 22px;
           font-weight: 400;
           color: rgba(12, 12, 12, 1);
           margin: 0 15px;
         }
       }
       // 表单布局
       .form {
         padding-top: 30px;
         .code {
           width: 100%;
           height: 40px;
           padding-top: 3px;
           border: 1px dashed #ccc;
         }
         .color1 {
           color: #3296fa;
         }
         .btn {
           width: 100%;
         }
         .btn:last-child {
           margin-top: 26px;
         }
       }
     }
   }
   </style>
   ~~~
   
   



## Element - ui表单 - 表单验证

> 用户输入了的内容是不可控的，咱们需要使用表单验证功能哦

[传送门](https://element.eleme.cn/#/zh-CN/component/form#biao-dan-yan-zheng)

数据验证:

1. 基本上接口都会验证数据，目的是避免错误数据提交
2. 前端一般也会验证数据，避免`正常用户的误操作`，降低服务器的性能消耗

~~~
        <!-- el-form:整个表单  
            label-width整个表单下面所有标题的宽度
            model:绑定值,就是绑定整个表单的值 
            el-form-item是表单元素的每一项   label属性就是该项的标题
            rules绑定验证规则
              rules:{
                  名字：[]//后面是一个数组
                  名字（该名字来自于el-form-item里面的prop属性的值，它一定要是表单元素v-model的值）
                  例：el-form-item下的表单元素的v-model="ruleForm.name" 那么el-form-item下的prop一定要是name
                  需要验证的子项才写prop
                  验证规则参数说明
                   { required: true, message: '请输入活动名称', trigger: 'blur' },
                   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                   required：必填，如果没填报错误信息message的值
                   message:错误提示信息
                   trigger:在什么情况下触发这个验证，有二个值供我们选择blur失焦  change  值改变的时候触发
                   min:最小长度
                   max：最大长度                   
              }
        -->
~~~



```html
<body>
    <!-- 挂载的元素 -->
    <div id="app">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
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
                ruleForm: {
                    name: '',
                    password: '',
                },
                rules: {
                    name: [
                        { required: true, message: '用户名不能为空', trigger: 'blur' },
                        { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' },
                        { min: 6, max: 8, message: '长度在 6 到 8 个字符', trigger: 'blur' }
                    ],
                }
            }
        })
    </script>

</body>
```

注意:

1. <el-form 
   1. rules属性，传入验证规则
2. form-item
   1. prop属性 和验证的规则相对应
3. data中定义rules属性
   1. 设置校验的规则
      1. required:必须
      2. message：提示的消息
      3. trigger：失去焦点
      4. min:最短长度
      5. max:最长长度

![image-20200812092907609](day02 - 黑马面面.assets/image-20200812092907609.png)

## Element - ui表单 - 验证方法及表单重置

> 默认的验证只局限于单个元素，如果想全部验证，要如何实现呢？

[传送门](https://element.eleme.cn/#/zh-CN/component/form#zi-ding-yi-xiao-yan-gui-ze)

```javascript
methods: {
    submitForm(formName) {
        // 上面传入的 formName是 ruleForm
        // $refs作用是 获取 页面中使用ref标记的元素
        // 等同于 this.$refs['ruleForm'] 相当于获取到了el-form的this
        // this.$refs['ruleForm'] 等同于 this.$refs.ruleForm
        // validate这个方法是Element-ui的表单el-form的组件方法
        this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('对啦!');
                // 验证正确
            } else {
                alert("错啦")
                // 验证错误
                return false;
            }
        });
    },
    // 重置表单
    resetForm(formName) {
        // 等同于 this.$refs['ruleForm'] 相当于获取到了el-form的this
        // this.$refs['ruleForm'] 等同于 this.$refs.ruleForm
        // resetFields 也是Element-ui表单的方法
        this.$refs[formName].resetFields();
    }
}
```

注意:

1. element-ui示例代码中 通过`this.$refs[xxx]`的语法获取表单元素
2. 等价于`this.$refs.xxx`
3. `resetFields`,`validate`这两个方法都是element-ui提供的，其他元素无法使用

~~~
表单重置：调用el-form表单组件methods里面的一个resetFields方法
      1：在子组件标签上定义一个ref  ref=值
      2：通过ref拿到该子组件的this===this.$refs.ref值
      this.$refs.ref值.resetFields()
~~~







## Element - ui 消息提示

> 默认的alert并不好看，工作中也基本不会使用，Element-ui为咱们封装好了提示组件，如何使用呢？

[传送门](https://element.eleme.cn/#/zh-CN/component/message#message-xiao-xi-ti-shi)



```javascript
this.$message.(info默认/success成功/warning警告/error错误)(信息)
    this.$message('默认弹框')

    // this.$message({
    //     message: "你成功啦！！",
    //     type: 'success'
    // })
    this.$message.success('你成功啦')

    this.$message.warning('这是一个警告哦！！')

    this.$message.error('这是一个错误哦！！')

```



## 登录模块 - 表单验证整合

> 将刚刚弄好的表单验证整合到登录模块中，点击登录要触发验证哦

步骤

1. 密码:非空验证，6-12位长度验证
2. 验证码：非空，4位长度验证
3. `<el-form`,
   1. `ref=loginForm`
   2. `:rules=rules`
      1. rules定义在data中
4. `<el-item`
   1. `prop`校验的字段相对应
5. 登录按钮绑定点击事件
   1. 触发校验方法
      1. 对：成功弹框
      2. 错：错误弹框

~~~vue
<template>
  <div class="login">
    <div class="left">
      <div class="title">
        <img src="@/assets/img/title_logo.png" alt />
        <span class="titleName">黑马面面</span>
        <span class="titleLine">|</span>
        <span class="titleName2">用户登陆</span>
      </div>
      <el-form class="form" :model="form" ref="form" :rules="rules">
        <!-- prefix-icon是输入框头部图标，后面的值为icon的对应字符串 -->
        <el-form-item prop="phone">
          <el-input v-model="form.phone" prefix-icon="el-icon-user" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" prefix-icon="el-icon-lock" placeholder="请输入密码" show-></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-row :gutter="0">
            <el-col :span="16">
              <el-input v-model="form.code" placeholder="请输入验证码" prefix-icon="el-icon-key"></el-input>
            </el-col>
            <el-col :span="8">
              <img class="code" src="@/assets/img/key.jpg" alt />
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item prop="isCheck">
          <el-checkbox v-model="form.isCheck">
            <span>
              我已阅读并同意
              <span class="color1">用户协议</span>和
              <span class="color1">隐私条款</span>
            </span>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button class="btn" type="primary" @click="submit">登陆</el-button>
          <br />
          <el-button class="btn" type="primary">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="right">
      <img src="@/assets/img/login_banner_ele.png" alt />
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        phone: "", //手机号
        password: "", //密码
        code: "", //验证码
        isCheck: []
      },
      rules: {
        phone: [
          { required: true, message: "请填入手机号！", trigger: "change" }
        ],
        password: [
          { required: true, message: "请填入密码！", trigger: "change" },
          {
            min: 6,
            max: 12,
            message: "请输入6-12位密码！",
            trigger: "change"
          }
        ],
        code: [
          {
            required: true,
            min: 4,
            max: 4,
            message: "请填入验证码！",
            trigger: "change"
          }
        ],
        isCheck: [
          { required: true, message: "请填入用户名！", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    submit() {
      window.console.log(this.form);
      this.$refs.form.validate(result => {
        window.console.log(result);
      });
    }
  }
};
</script>
<style lang="less">
.login {
  /* 弹性盒子布局 */
  display: flex;
  /* 水平布局 */
  justify-content: space-around;
  /* 垂直居中 */
  align-items: center;
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  .left {
    width: 478px;
    height: 550px;
    padding: 42px;
    background-color: #f5f5f5;
    .title {
      display: flex;
      align-items: center;
      .titleName {
        font-size: 24px;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
        margin: 0 15px;
      }
      .titleName2 {
        font-size: 22px;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
        margin: 0 15px;
      }
    }
    // 表单布局
    .form {
      padding-top: 30px;
      .code {
        width: 100%;
        height: 40px;
        padding-top: 3px;
        border: 1px dashed #ccc;
      }
      .color1 {
        color: #3296fa;
      }
      .btn {
        width: 100%;
      }
      .btn:last-child {
        margin-top: 26px;
      }
    }
  }
}
</style>
~~~



git 记录

```bash
git add .
git commit -m"登录模块 - 整合表单验证"
```

![image-20200812101015617](day02 - 黑马面面.assets/image-20200812101015617.png)

![image-20200812101105409](day02 - 黑马面面.assets/image-20200812101105409.png)

![image-20200812101140597](day02 - 黑马面面.assets/image-20200812101140597.png)



![image-20200812101224723](day02 - 黑马面面.assets/image-20200812101224723.png)

![image-20200812101254397](day02 - 黑马面面.assets/image-20200812101254397.png)



## Element - ui 对话框

> 点击弹出的那个框框，是Element-ui提供的对话框组件

[传送门](https://element.eleme.cn/#/zh-CN/component/dialog#dialog-dui-hua-kuang)

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
        .el-dialog__header {
            background: linear-gradient(to right, #02c6fc, #1394fb);
        }

        .el-dialog__title {
            color: white;
        }
    </style>
</head>

<body>
    <!-- 挂载的元素 -->
    <div id="app">
        <!-- Form -->
        <el-button type="text" @click="isSHow = true">打开嵌套表单的 Dialog</el-button>

        <el-dialog center width="603px" title="用户注册" :visible.sync="isSHow">
            <el-form :model="form">
                <el-form-item label="活动名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="isSHow = false">取 消</el-button>
                <el-button type="primary" @click="isSHow = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <!-- 引入组件库 -->
    <script src="https://unpkg.com/element-ui/lib/index.js"></script>
    <script>
        const app = new Vue({
            el: "#app",
            data: {
                isSHow: true,
                form: {
                    name: '',
                },
                // 左侧文本的间隙
                formLabelWidth: '120px'
            }
        })
    </script>

</body>

</html>
```

注意：

1. `el-dialog`
   1. 需要添加到页面上
   2. center
      1. 设置了就居中
      2. 不设置 两边
   3. width:对话框的宽度
   4. :visible.sync 是否显示
2. 内部可以嵌套其他的标签，用和该标签是一样的





## 注册模块 - 分支切换

> 登录模块除接口调用，都写完了，接口的部署明天来做，接下来我们做注册模块，先把分支操纵一波

步骤：

1. 某个分支的逻辑写完了之后，合并到主分支，并删除这个分支

   ~~~
   将某分支合并到当前分支
   git merge 分支名
   删除
   git branch -d 分支名
   ~~~

   

2. 开始写新功能了，创建该功能对应的分支，并切换过去

3. 切换到`master`主分支

4. 将`login`分支合并到主分支

5. 删除`login`分支



注意:

1. 分支的目的，方便代码的管理，中间试错的过程中，不会影响其他分支
2. 删除的目的：
   1. 先确定，代码已经`合并`
   2. 多余的分支删除，更加利于观察
3. 如何确定合并成功
   1. sourceTree点击主分支，发现，进度和合并的分支相同
4. 分支合并



## 注册模块 - 组件抽取

> 注册模块的的逻辑挺多的，咱们将他抽取为组件，方便代码管理



步骤：

1. 创建组件`register.vue`
2. `login.vue`中导入，注册并使用
3. `login.vue`中为注册按钮绑定点击事件，弹出`register`
   1. 本质是通过ref修改一个布尔值

register.vue

~~~vue
<template>
  <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialogFormVisible: false
    };
  }
};
</script>
<style>
</style>
~~~

login.vue

~~~vue
<template>
  <div class="login">
    <div class="left">
      <div class="title">
        <img src="@/assets/img/title_logo.png" alt />
        <span class="titleName">黑马面面</span>
        <span class="titleLine">|</span>
        <span class="titleName2">用户登陆</span>
      </div>
      <el-form class="form" :model="form" ref="form" :rules="rules">
        <!-- prefix-icon是输入框头部图标，后面的值为icon的对应字符串 -->
        <el-form-item prop="phone">
          <el-input v-model="form.phone" prefix-icon="el-icon-user" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" prefix-icon="el-icon-lock" placeholder="请输入密码" show-></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-row :gutter="0">
            <el-col :span="16">
              <el-input v-model="form.code" placeholder="请输入验证码" prefix-icon="el-icon-key"></el-input>
            </el-col>
            <el-col :span="8">
              <img class="code" src="@/assets/img/key.jpg" alt />
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item prop="isCheck">
          <el-checkbox v-model="form.isCheck">
            <span>
              我已阅读并同意
              <span class="color1">用户协议</span>和
              <span class="color1">隐私条款</span>
            </span>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button class="btn" type="primary" @click="loginClick">登陆</el-button>
          <br />
          <el-button class="btn" type="primary" @click="registerClick">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="right">
      <img src="@/assets/img/login_banner_ele.png" alt />
    </div>
    <register ref="register"></register>
  </div>
</template>
<script>
import register from "./register.vue";
export default {
  name: "login",
  components: {
    register
  },
  data() {
    return {
      form: {
        phone: "", //手机号
        password: "", //密码
        code: "", //验证码
        isCheck: []
      },
      rules: {
        phone: [
          { required: true, message: "请填入手机号！", trigger: "change" }
        ],
        password: [
          { required: true, message: "请填入密码！", trigger: "change" },
          {
            min: 6,
            max: 12,
            message: "请输入6-12位密码！",
            trigger: "change"
          }
        ],
        code: [
          {
            required: true,
            min: 4,
            max: 4,
            message: "请填入验证码！",
            trigger: "change"
          }
        ],
        isCheck: [
          { required: true, message: "请填入用户名！", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    //   登陆点击
    loginClick() {
      window.console.log(this.form);
      this.$refs.form.validate(result => {
        window.console.log(result);
      });
    },
    // 注册点击
    registerClick() {
      this.$refs.register.dialogFormVisible = true;
    }
  }
};
</script>
<style lang="less">
.login {
  /* 弹性盒子布局 */
  display: flex;
  /* 水平布局 */
  justify-content: space-around;
  /* 垂直居中 */
  align-items: center;
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  .left {
    width: 478px;
    height: 550px;
    padding: 42px;
    background-color: #f5f5f5;
    .title {
      display: flex;
      align-items: center;
      .titleName {
        font-size: 24px;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
        margin: 0 15px;
      }
      .titleName2 {
        font-size: 22px;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
        margin: 0 15px;
      }
    }
    // 表单布局
    .form {
      padding-top: 30px;
      .code {
        width: 100%;
        height: 40px;
        padding-top: 3px;
        border: 1px dashed #ccc;
      }
      .color1 {
        color: #3296fa;
      }
      .btn {
        width: 100%;
      }
      .btn:last-child {
        margin-top: 26px;
      }
    }
  }
}
</style>
~~~

![image-20200812120410344](day02 - 黑马面面.assets/image-20200812120410344.png)

![image-20200812120445092](day02 - 黑马面面.assets/image-20200812120445092.png)

![image-20200812120518807](day02 - 黑马面面.assets/image-20200812120518807.png)







## 注册模块-标题栏样式处理

>按照设计稿完成标题（用户注册）基本样式

```vue
<template>
  <el-dialog
    title="收货地址"
    :visible.sync="dialogFormVisible"
    class="register"
    :show-close="false"
    width="600px"
  >
    <h1 slot="title" class="dialogTitle">用户注册</h1>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialogFormVisible: false
    };
  }
};
</script>
<style lang="less">
.register {
  .el-dialog__header {
    padding: 0;
  }
  .dialogTitle {
    text-align: center;
    color: #fff;
    height: 53px;
    background-color: rgb(14, 156, 250);
    font-size: 18px;
    line-height: 53px;
  }
}
</style>
```

![image-20200812121932155](day02 - 黑马面面.assets/image-20200812121932155.png)



![image-20200812121949270](day02 - 黑马面面.assets/image-20200812121949270.png)





## Vue-cli 环境变量

> 为了方便我们设置数据，脚手架提供了`环境变量功能`，可以用来保存任何数据，开发中保存基地址居多，鉴于此我们可以把`环境变量`理解为一个变量就可以了

[传送门](https://cli.vuejs.org/zh/guide/mode-and-env.html)

2个环境

   1. 开发环境（development）：

      1. `npm run serve`是开发环境

        2. 正在编码，代码还没有写好

2. 生产环境（production）：

   1. `npm run build`生产环境（打包上线）

   2. 代码写好了，项目打包的时候，代码会被部署到线

   3. 后端 接口会不会也有二环境

      1. 开发环境 
      2. 生产环境
      3. 后端接口是不是就会有二个接口地址

      

      - 接口地址是二种
        - 开发环境
          - 设置一个基地址
        - 生产环境
          - 修改该基地址



**使用步骤:**

1. 项目根目录下创建`.env.development`文件
2. 内部通过如下格式定义键值对
   1. `VUE_APP_xxx`=`值`
   2. 必须以`VUE_APP_`开头
   3. 可以写任意个值
3. 项目的代码中通过`process.env.VUE_APP_xxx`



总结：

1. 定义

   1. 开发环境定义

      1. 创建一个.env.development
      2. 在该文件下可以定义一些开发环境使用的全局变量
         1. 名字有一个规则  必须 VUE_APP_开头

   2. 生产环境

      1. 创建一个.env.production 
      2. 在该文件下可以定义一些生产环境使用的全局变量
         1. 名字有一个规则  必须 VUE_APP_开头

      、

2. 使用定义的变量

   1. 固定写法：process.env.变量名（VUE_APP_开头的变量）

3. 注意点：

   1. 定义好后要重新执行npm run serve才能使用定义的变量
   2. 它是全局变量，任何生命同期都可调用



**注意:**

1. 如果修改了`.env.development`内部的值，必须重新`npm run serve`
2. 键值对必须以固定值开头
3. 任意的代码中都可以获取
4. 访问的方式通过`process.env`

![image-20200812144605171](day02 - 黑马面面.assets/image-20200812144605171.png)

![image-20200812144704388](day02 - 黑马面面.assets/image-20200812144704388.png)

## 环境变量整合

> 我们把本地接口的基地址通过环境变量整合到项目中

步骤:

1. 基地址:http://127.0.0.1/heimamm/public
2. 项目`根目录`下创建`.env.development`文件
3. 内部写上键值对
   1. `VUE_APP_名字`=基地址
   2. 环境变量在vue中使用规则：以`VUE_APP_`开头
4. 测试一下
   1. 页面中访问环境变量定义的值是：`process.env.VUE_APP_名字`
   2. 它就相当于定义了一个全局变量
   3. 不要在html里面使用`process.env.VUE_APP_名字`
   4. 设置完成一定要重启脚 手架

~~~
开发环境(npm run serve)
   定义:在根目录(readme同级目录)创建一个.env.development文件 VUE_APP_开头
   访问:process.env.VUE_APP_名字得到相应的值
 开发环境(npm run build)
   定义:在根目录(readme同级目录)创建一个.env.production文件 VUE_APP_开头
   访问:process.env.VUE_APP_名字得到相应的值 
   
    
~~~



## Element - ui 文件上传

> 文件是一个比较常见的功能,Element-ui也帮我们封装好了哦，底层用的其实还是`formData`，上传成功的回调函数中可以获取到服务器的响应值哦

[传送门](https://element.eleme.cn/#/zh-CN/component/upload#yong-hu-tou-xiang-shang-chuan)

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
        .avatar-uploader .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        .avatar-uploader .el-upload:hover {
            border-color: #409EFF;
        }

        .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 178px;
            height: 178px;
            line-height: 178px;
            text-align: center;
        }

        .avatar {
            width: 178px;
            height: 178px;
            display: block;
        }
    </style>
</head>

<body>
    <!-- 挂载的元素 -->
    <div id="app">
        <!-- 
            action:上传的接口地址
             :on-success:上传成功的回调函数
             :before-upload 上传之前
         -->
        <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
            :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <!-- imageUrl有值，显示图片 -->
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <!-- imageUrl没有值 显示的是i标签 -->
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <!-- 引入组件库 -->
    <script src="https://unpkg.com/element-ui/lib/index.js"></script>
    <script>
        const app = new Vue({
            el: "#app",
            data: {
                imageUrl: ""
            },
            methods: {
                // 上传成功
                // file 文件的各种信息
                // file.raw 文件对象
                // res是接口响应的数据
                handleAvatarSuccess(res, file) {
                    console.log(res)
                    console.log(file)
                    // URL.createObjectURL 生成的是本地的临时路径，刷新就没用了
                    this.imageUrl = URL.createObjectURL(file.raw);
                },
                // 上传之前
                // file 是文件 对象
                beforeAvatarUpload(file) {
                    console.log(file)
                    const isJPG = file.type === 'image/jpeg';
                    const isLt2M = file.size / 1024 / 1024 < 2;
                    if (!isJPG) {
                        this.$message.error('上传头像图片只能是 JPG 格式!');
                    }
                    if (!isLt2M) {
                        this.$message.error('上传头像图片大小不能超过 2MB!');
                    }
                    return isJPG && isLt2M;
                }
            }
        })
    </script>

</body>

</html>
```

注意:

1. 内部还是调用了ajax，通过formData将文件提交到了服务器
2. 默认提交的参数名`file`，如有必要需要调整一下



## 注册模块-文件上传基本功能实现

> 上传组件整合到注册模块的页面中，上传的地址替换为本地的接口地址

步骤:

1. 顶部增加文件上传组件，通过`el-form-item`包裹
2. 把需要的属性进行设置
   1. 上传地址
   2. 本地预览地址
   3. 上传成功的回调函数
3. 样式

`html部分`

​		**action:**上传接口地址

​		**name:**上传的file文件传数名

​		**show-file-list：** 是否显示已上传文件列表 

​		**with-credentials：**上传接口调用时支持带上cookie

​		**on-success：**上传成功后的回调函数

​		**before-upload：**上传前的回调函数

~~~html
      <el-form-item label="头像">
            <el-upload
          class="avatar-uploader"
          :action="baseUrl+'/uploads'"
          name="image"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>


~~~



js部分

~~~js
 data() {
    return {
      dialogFormVisible: false,
      // 表单数据
      form: {
        // 头像地址
        avatar: ""
      },
      baseUrl: process.env.VUE_APP_URL,
      imageUrl: ""
    };
  },
  methods: {
    // 上传前处理
    beforeAvatarUpload(file) {
      const isJPG =
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/gif";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      // 它return的值就是控制让不让你通过  true通过  false不通过
      // return false
      return isJPG && isLt2M;
    },
    // 上传成功处理
    handleAvatarSuccess(res) {
      window.console.log(res);
      this.imageUrl = this.baseUrl + "/" + res.data.file_path;
      this.form.avatar = res.data.file_path;
    }
  }
~~~

css部分

~~~css
<style lang="less" scoped>
.register {
  .title {
    height: 53px;
    background: rgba(3, 192, 249, 1);
    color: #fff;
    text-align: center;
    line-height: 53px;
  }
}
</style>
<style lang="less">
.register {
  .el-dialog__header {
    padding: 0;
  }
  .avatar-uploader {
    width: 178px;
    margin: 0 auto;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>
~~~





注意:

1. 默认的地址是Element-ui的 需要调整为自己的
2. 默认的参数是`file`需要更改通过`name`属性进行设置











## 注册模块-文件上传加入检验

流程

1. 加入下面取消与确定按钮，加入了全局验证

   1. 也就是在el-dialog 下面加了个div  slot="footer",来了二按钮
   2. 在确定按钮上来了一个全局验证
      1. 在el-form  定义一个ref
      2. 调用el-form的全局验证方法  this.$refs.form.validate(result=>{})

2. 在加入上传验证

   1. 在el-form上绑定一个rules属性
   2. 在el-form-item的上传项上加一个  prop="avatar"
   3. 写rules上写相应的验证规则   
   4. 由于上传图片该组件的值不能双向绑定，所以它要主动触发验证
      1. this.$refs.form.validateField(需要验证的项)

   

图片上传需要额外加一个处理，就是图片上传成功后的回调函数里要加入一个上传的检验

注意：图片上传成功后，表单的自定义检验不会自动执行，需要人工触发一次

~~~js
  //这里validateField方法就是自定义只需要单独检验某项表单元素，
//这里的regirest为form上定义的ref属性，通过ref调用form表单的validateField方法
  this.$refs.regirest.validateField("avatar", error => {
        window.console.log("错误信息：", error);
      });
~~~

![image-20200812162636439](day02 - 黑马面面.assets/image-20200812162636439.png)

![image-20200812162735808](day02 - 黑马面面.assets/image-20200812162735808.png)





## 注册模块-昵称基本功能

html

~~~js
      <el-form-item label="昵称" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
~~~

js

~~~js
//1:data的form中加入username
//2:在rules中加入相应检验
  username: [
          { required: true, message: "请输入用户名", trigger: "change" }
        ]
~~~



## 注册模块-邮箱基本功能

html

~~~
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
~~~

js

~~~
        email: [
          { required: true, message: "请输入邮箱", trigger: "change" }
        ]
~~~



## Element - ui 自定义校验规则

> 如果只是简单的非空验证，长度验证，使用默认的设置即可，如果要验证格式，就需要用到自定义校验规则了

[传送门](https://element.eleme.cn/#/zh-CN/component/form#zi-ding-yi-xiao-yan-gui-ze)

1. validator后面会跟一个回调函数，回调函数后面有三个参数
   1. rule规则
   2. value要校验元素的值
   3. callback返回方法，成功就用callback() 不通过需要显示什么错误信息就用callback(new Error(错误信息)) 该错误信息会以红字显示在相应表单元素下面

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
</head>

<body>
    <!-- 挂载的元素 -->
    <div id="app">
        <el-form status-icon  :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
                <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <!-- 引入组件库 -->
    <script src="https://unpkg.com/element-ui/lib/index.js"></script>
    <script>
        const checkName = (rule, value, callback) => {
            // value 校验的数据
            // console.log(value)
            if (value.length < 2) {
                callback(new Error("你的名字长度不够哦，检查一下"))
            } else {
                // 正确的回调
                callback()
            }
            // callback 回调函数 成功失败都需要调用
        }

        // 验证手机号的 函数
        const checkPhone = (rule,value,callback)=>{
            // 接收参数 value
            // 定义正则表达式
            const reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
            // 使用正则校验格式是否满足
            if(reg.test(value)==true){
                // 对
                callback()
            }else{
                // 错
                callback(new Error('手机号格式不对哦，请检查'))

            }
        }
       
        // 验证 邮箱的 函数
        // rule 校验规则，一般不用
        // value 校验的数据  表单元素中的数据
        // callback 回调函数 ，通过执行这个函数 告诉 element-ui 成功或者失败
        const checkEmail = (rule,value,callback)=>{
            // 获取数据 value
            // 定义正则表达式 定义了一个正则对象
            const reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
            // 校验方法 test 方法 是正则对象
            // 对 返回的是 true
            // 错 返回的是 false
            // console.log(reg.test(value))
            if(reg.test(value)==true){
                callback()
            }else{
                callback(new Error("邮箱的格式不对哦"))
            }
        }
        const app = new Vue({
            el: "#app",
            data: {
                ruleForm: {
                    name: '',
                    // 手机号
                    phone: "",
                    // 邮箱
                    email:""
                },
                rules: {
                    name: [
                        { required: true, trigger: 'blur' },
                        // trigger 触发是执行 validator设置的函数
                        { validator: checkName, trigger: "blur" }
                    ],
                    phone: [
                        { required: true,message:"手机号不能为空", trigger: 'blur' },
                        // trigger 触发是执行 validator设置的函数
                        { validator: checkPhone, trigger: "blur" }
                    ],
                    email: [
                        { required: true,message:"邮箱不能为空", trigger: 'blur' },
                        { validator: checkEmail, trigger: "blur" }
                    ]
                }
            }
            , methods: {
                submitForm(formName) {
                    this.$refs[formName].validate((valid) => {
                        if (valid) {
                            alert('对啦!');
                            // 验证正确
                        } else {
                            alert("错啦")
                            // 验证错误
                            return false;
                        }
                    });
                },
                // 重置表单
                resetForm(formName) {
                    this.$refs[formName].resetFields();
                }
            }
        })
    </script>

</body>

</html>
```



## 注册模块-邮箱加入自定义验证

html

~~~html
   <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
~~~

js

- data的form中加入相应绑定的元素
- 定义相应的rules规则

~~~js
email: [
          { required: true, message: "请输入邮箱", trigger: "change" },
          {
            validator: (rule, value, callback) => {
              let reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
              if (reg.test(value)) {
                callback();
              } else {
                callback("请正确输入邮箱");
              }
            },
            trigger: "change"
          }
]
~~~



## 注册模块-手机与密码基本功能

html

~~~html
  <el-form-item label="手机" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
~~~

js

- data的form中加入相应绑定的元素
- 定义相应的rules规则

~~~js
        phone: [
          { required: true, message: "请输入手机号", trigger: "change" },
          {
            validator: (rule, value, callback) => {
              let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
              if (reg.test(value)) {
                callback();
              } else {
                callback("请正确输入手机号");
              }
            }
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "change"
          },
          {
            min: 6,
            max: 12,
            message: "密码必须在6到12之间",
            trigger: "change"
          }
        ],
~~~



![image-20200814100455877](day02 - 黑马面面.assets/image-20200814100455877.png)











## 脚手架设置跨域代理(了解)

官方网址:https://cli.vuejs.org/zh/config/

服务端访问服务端

1. 在README同级目录下创建一个vue.config.js
2. 在vue.config.js使用下面代码
3. 将.env.development 内的基地址替换为 /public

```javascript
  //vue-cli3.0 里面的 vue.config.js做配置
module.exports = {
  devServer: {
    proxy: {
      '/public': {
        //这里最好有一个 /
        target: 'http://127.0.0.1/heimamm/public', // 后台接口域名
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        pathRewrite: {
          '/public': ''
        }
      }
    }
  }
}
```





## 接口与设计在线文档

在线接口基地址：http://autumnfish.cn/heimamm/public

本地接口基地址： http://127.0.0.1/heimamm/public 

接口文档地址：https://www.showdoc.com.cn/538567623707717?page_id=3183007410635536















