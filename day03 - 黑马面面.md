# day03 - 黑马面面

## 反馈

1. 老师非常好，晚自习还在，虽然我没有问题，还是很感动。
2. 我经常在夜晚睡觉不着,爱看着星星不说话,你要不要一起啊
3. 喜欢飞飞老师
4. 飞飞也太敬业了趴
5. PC端只有八天,会不会讲的很赶？感觉每天时间都好紧张
6. 飞哥，以后工作了都是用vue脚手架写代码吗，前面项目都忘的差不多了(;´༎ຶٹ༎ຶ`)
   1.	脚手架
     1.老项目  jquery  维护     php    jsp   
7. 慢慢吸收能学会,但是又跟不上上课的速度.怎么办啊,不止是现在的内容,包括以前的学习状态也是这样,太被动了,有救吗有更多的学习方法吗
   1. 学习较差的几个人
      1. 做不到集中精力听力
      2. 历史:没有任何编程
8. 感觉啥也没学到害
9. 飞飞 N B ~~~！！！！！！！！！！！！
10. 楼上说的对
11. 我发现了,在黑马越不骚的老师教得越多
    1. 利群
    2. 周林林
    3. 坤哥
    4. ​
12. 当这个男人在夜幕降临的时候步入灯火辉煌的教师,随着同学们的尖叫声,我仿佛听到了狂热的粉丝在乍见到偶像时的高呼 "张杰,张杰" 我知道,这个男人俘虏了他们的心,这一刻,他获得了全班男生的择偶权. (求求代码注释时注意下符号的排版,强迫症表示心态被炸了)
13. 老师很好 ,教学十分有耐心,希望后面越学越好!
14. 老师，可以讲解下什么情况下会分支合并失败，以及如果遇到远程仓管master分支和本地仓库冲突无法pull或push的情况该如何解决吗?
15. 我说的对
16. 楼上楼下都说得对！
17. 老师太好了，还陪我们上晚自习，不好好敲代码都对不起老师了，兄弟们冲加油敲代码
    1. 每天碰到 新知识点
       1. 理解 
          1. v-for
       2. 记住
          1. 容易忘记
             1. 手机记录下来,晚上睡觉前过一次,过二次,第二天早上起床前 过一到二次
             2. 有些点已知道,可以删除  git命令
             3. 心理学:8小时
18. 挫折谋面非坏事，人生成长在这时；失败临门非霉事，智慧增添在今时；笑对人生不顺事，人生幸事不远期；乐看天下困难事，莫愁前方辉煌稀。
19. 老师晚上也来 真的辛苦了 就是预习的笔记真的看不懂.能否发视频预习, 我保证第二天会认真听
    1. 发了视频反而不学
20. nice
21. 每天亿个小知识,收获满满
22. 冲冲冲
23. loading.....
24. 老师很棒很贴心很敬业很nice
25. 教学质量高，表达能力超群，指导学生步骤清晰，解决学生问题快准，人高肤白身材好！优秀！！！
26. 奥里给，你成功引起了我的注意！
27. 有一说一,老师讲的很详细😄
    1. 把遗漏点记下来
28. 感觉飞哥的声音挺好听的
29. Vue.use()注册有什么作用?底层做了什么事
    1. install方法
    2. router
       1. this.$router  在use    Vue.prototype.$router=router   
    3. element
       1. 把element-ui所有的组件都在use里面全局注册了
       2. Vue.component("注册名" , 导入的组件名)
30. 楼上的靓仔说的对
31. 老师讲得非常好,很详细,连遇到的常见的BUG还特意录屏,太喜欢了!! 辛苦了,晚上还跑过来监督我们学习
    1. 并不是工资低的公司,你就轻松
    2. 工资保密协议
    3. 有可能你工资低,做的活比工资高的人还多很多
       1. 模块 注册  ----xxx
       2. 迭代  注册功能加深  ----xxx
32. 老师能不能图解一下git的 工作区-本地仓库-远程仓库 的流程 （合并到主分支后还有被合并的分支吗）







![image-20200923085857008](day03 - 黑马面面.assets/image-20200923085857008.png)

1. 最美的不是下雨天，是曾与你一起躲过雨的屋檐
2. 针不辍ydf
3. 飞飞,十3天前教师节快乐
4. 飞飞,课间记得放歌哦,今天又是充满希望的一天
5. 飞飞,永远滴神.
6. 这两天过得贼充实 下课都没时间睡觉了 飞飞真棒
   1. 57:101人   58:120多   59:107   几天时间,可能都会同一时间
7. 可能是我基础太差了 ，吃力
8. 正义都能迟到，我就不能因为睡觉迟到了十分钟吗？
   1. 晚上建议12点前一定睡觉
     1.老师每天都讲的很细,每天都是很充实的一天,奥里给!



## 回顾

~~~
form表单
    el-form   model    rules   label-width
       el-form-item   label    prop
     rules:{
     prop值:[
     非空验证   undefind   ""  []
     {required:true,message:"错误信息",trigger:"change/blur"},
     {min:最小长度,max:最大长度,message:"错误信息",trigger:"change/blur"},
     {validator:(rule,value,callback)=>{
     rule:规则
     value:值
     callback  验证通过  callback()
               验证不通过   callback(new Error("错误信息"))
     }}
     ]
     }  
 全局表单验证
    调用el-form组件上的validate方法
    1:el-form  model   rules ref
        el-form-item   prop绑定
     2:调用:this.$refs.ref值.validate((result)=>{
     true:验证通过 false:验证失败
     })
   局部表单验证
      this.$refs.ref值.validateField(["prop值"])
   重置表单
      this.$refs.ref值.resetFields()
   上传组件
      el-upload
          action:上传接口地址
          name:上传文件对应的参数
          show-fild-list:true:显示列表  false:不显示列表
          before-upload:上传前处理
                 function(file){
                 file.type:文件类型
                 file.size:文件大小(字节)
                 return boolean
                     true:正常上传
                     false:中止上传
                 }
           on-success:上传成功处理
               function (res,file){
               res:接口返回值
               file:  file.response:接口返回值===res
                      file.raw:文件对象
               }
      消息提示
      this.$message.(success/error/warning/info)("信息")
      对话框 dialog
        el-dialog
            visible.sync:是否显示对话框
            tile:标题
            width:宽度
            show-close:是否显示关闭按钮
            slot="title/footer" 
            
      环境变量
          开发环境设置环境变量
             1:在readme同级目录创建一个.env.development文件
             2:定义变量  VUE_APP_开头
             访问:process.env.VUE_APP_名字
          生产环境设置环境变量
             1:在readme同级目录创建一个.env.production文件
             2:定义变量  VUE_APP_开头
             访问:process.env.VUE_APP_名字
            
            
      
~~~







## 注册模块 - 图形码验证码基本功能实现

> 通过列偏移来实现注册区域的小间隙

步骤：

1. 找到 注册对话框的 验证码 和 获取验证码按钮区域
2. 使用`:offset`设置1即可
3. 保证整体的和为24

注意:

1. 属性设置 不加:会解析为 `字符串`，加了会解析为 `js`

html

~~~html
     <el-form-item label="图形码" prop="code">
        <el-row>
          <el-col :span="16">
            <el-input v-model="form.code"></el-input>
          </el-col>
          <el-col :span="7" :offset="1">
            <img  class="code_img"  alt />
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="验证码" prop="rcode">
        <el-row>
          <el-col :span="16">
            <el-input v-model="form.rcode"></el-input>
          </el-col>
          <el-col :span="7" :offset="1">
            <el-button class="full_btn" @click="getRcode">
              获取验证码
        
            </el-button>
          </el-col>
        </el-row>
      </el-form-item>
~~~

js部分

- data的form中加入相应绑定的元素
- 定义相应的rules规则

~~~js
       
code: [
          { required: true, message: "请输入验证码！", trigger: "change" }
        ],
        rcode: [
          {
            required: true,
            message: "请输入手机验证码!",
            trigger: "change"
          }
        ]
~~~





## 注册模块 - 图片验证码功能实现

> 图片验证码应该不是固定的值，需要通过接口来获取哦

步骤:

1. 注册组件内
2. 通过`环境变量`+`/captcha?type=sendsms`
3. 拼接为验证码地址
4. 设置给 验证码图片的src属性
   1. `:src`

- ​

## 注册模块 - 图片验证码点击刷新

> 如果看不清楚文字，点击图片应该会重新获取一张，如何实现呢

需求: 点击重新获取验证码

步骤:

1. 为验证码绑定点击事件

2. 重新设置验证码的地址，为了避免浏览器缓存，需要在后面跟上随机值

   1. 时间戳
   2. 随机数

   `html`

~~~html
      <el-form-item label="图形码" prop="code">
        <el-row>
          <el-col :span="16">
            <el-input v-model="form.code"></el-input>
          </el-col>
          <el-col :span="7" :offset="1">
            <img @click="codeClick" class="registerCode" :src="codeUrl" alt />
          </el-col>
        </el-row>
      </el-form-item>
~~~

`js`

~~~js
    // 点击 切换图形验证码
    codeClick() {
      this.codeUrl =
        process.env.VUE_APP_URL + "/captcha?type=sendsms&t=" + Date.now();
    }
~~~






## 注册模块 - 短信验证码获取

> 手机获取短信，这里需要和服务器进行交互了，本地接口会直接返回验证码



需求:

1. 点击底部的获取验证码按钮，调用接口，将短信和验证码发到服务器
2. 获取短信验证码

步骤:

1. 为底部的按钮绑定点击事件

2. 点击 事件在调用接口获取验证码前需要先验证手机号与图形码是否已成功填写，可利用表单元素局部定义方式来自定义验证

   1. ~~~js
      this.$refs.regirest.validateField(["phone", "code"], error =>error)
      //这后面的error如果没返回错误。也就是返回错误为空，说明验证成功
      ~~~


3. 调用接口提交数据

   1. 安装axios
   2. 导入 并调用接口
   3. 地址`/sendsms`
   4. 方法:`post`
   5. 参数:
      1. `code`：验证码
      2. `phone`：手机号
   6. 跨域调用接口时，如果涉及到`cookie`，必须设置一个属性

4. 回调函数中，获取到验证码

   1. 在线接口短信获取验证码

![image-20200814105144440](day03 - 黑马面面.assets/image-20200814105144440.png)

![image-20200814111010005](day03 - 黑马面面.assets/image-20200814111010005.png)

![image-20200814111057975](day03 - 黑马面面.assets/image-20200814111057975.png)





## 注册模块 - 短信获取倒计时

> 为了防止正常用户的误操作，短信的获取加上时间间隔，两次获取的需要有时间间隔

步骤:

1. 获取短信验证码内部开启定时器
2. 时间（60秒）递减
3. 倒计时结束之前，按钮不能再次被点击，看起来也是禁用状态
   1. 正常:`点击获取验证码`
   2. 倒计时:`还有XX秒继续获取`



```javascript
<template>
  <el-dialog
    title="收货地址"
    :visible.sync="dialogFormVisible"
    class="register"
    :show-close="false"
    width="600px"
  >
    <h1 slot="title" class="dialogTitle">用户注册</h1>
    <el-form :model="form" :rules="rules" ref="form" label-width="120px">
      <el-form-item label="头像" prop="avatar">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          name="image"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="昵称" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="手机" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="图形码" prop="code">
        <el-row>
          <el-col :span="16">
            <el-input v-model="form.code"></el-input>
          </el-col>
          <el-col :span="7" :offset="1">
            <img @click="codeClick" class="registerCode" :src="codeUrl" alt />
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="验证码" prop="rcode">
        <el-row>
          <el-col :span="16">
            <el-input v-model="form.rcode"></el-input>
          </el-col>
          <el-col :span="7" :offset="1">
            <el-button @click="getRcode" :disabled="timeout>0 && timeout<60">
              获取验证码
              <span v-if="timeout>0 && timeout<60">{{timeout}}</span>
            </el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitClick">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      dialogFormVisible: false,
      //头像上传地址
      uploadUrl: process.env.VUE_APP_URL + "/uploads",
      // 图形验证码地址
      codeUrl: process.env.VUE_APP_URL + "/captcha?type=sendsms",
      // 发送短信验证码60秒不允许 再调用
      timeout: 60,
      form: {
        avatar: "", //用户头像
        username: "", //用户昵称
        email: "", //邮箱
        phone: "", //手机
        password: "", //密码
        code: "", //图形码
        rcode: "" //手机验证码
      },
      rules: {
        avatar: [{ required: true, message: "请上传头像", trigger: "change" }],
        username: [
          { required: true, message: "请输入用户名称", trigger: "change" }
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "change" },
          {
            validator: (rule, value, callback) => {
              let _reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
              if (_reg.test(value)) {
                callback();
              } else {
                callback("请正确输入邮箱");
              }
            },
            trigger: "change"
          }
        ],
        phone: [
          { required: true, message: "请输入手机", trigger: "change" },
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
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          { min: 6, max: 12, message: "请输入6-12位密码", trigger: "chnage" }
        ],
        code: [
          { required: true, message: "请输入图形码", trigger: "change" },
          { min: 4, max: 4, message: "请输入4位图形码", trigger: "chnage" }
        ]
      },
      imageUrl: "" //图像本地
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      window.console.log(file);
      this.imageUrl = URL.createObjectURL(file.raw);
      this.form.avatar = res.data.file_path;
      this.$refs.form.validateField("avatar");
    },
    beforeAvatarUpload(file) {
      window.console.log(file);
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    // 确定按钮点击事件
    submitClick() {
      this.$refs.form.validate(result => {
        window.console.log(result);
      });
    },
    // 点击 切换图形验证码
    codeClick() {
      this.codeUrl =
        process.env.VUE_APP_URL + "/captcha?type=sendsms&t=" + Date.now();
    },
    // 获取验证码点击
    getRcode() {
      let _isPass =0;
      this.$refs.form.validateField(["phone", "code"], error => {
        if (error == "") {
          _isPass ++;
        }
      });
      if (_isPass !== 2) {
        return;
      } else {
        this.timeout--;
        let interTime = setInterval(() => {
          this.timeout--;
          if (this.timeout == 0) {
            this.timeout = 60;
            clearInterval(interTime);
          }
        }, 1000);

        // 调用接口获取手机验证码
        axios({
          url: process.env.VUE_APP_URL + "/sendsms",
          method: "post",
          data: {
            code: this.form.code,
            phone: this.form.phone
          },
          withCredentials: true //跨域带cookie
        }).then(res => {
          this.$message.success(res.data.data.captcha + "");
          window.console.log(res);
        });
      }
    }
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
  .avatar-uploader {
    width: 178px;
    margin: 0 auto;
    .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .el-upload:hover {
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
  .registerCode {
    width: 100%;
    height: 40px;
    border: 1px dashed #ccc;
  }
}
</style>
```

## 注册模块 - 短信获取倒计时

>为了防止用于频繁点击获取 验证码，加一些前端 限制 

1. 首先定义一个倒计时时间  totalTime=60
2. 点击 获取 验证码调用接口前进行倒计时，setInterval    totalTime--
3. 当totalTime<0   清除倒计时clearInterval     totalTime=60
4. 限制 一下按钮点击功能在相应按钮上加上一个disabled=''totalTime!=60"

~~~js
        // 倒计时功能
        this.totalTime--;
        let _interval = setInterval(() => {
          this.totalTime--;
          if (this.totalTime <= 0) {
            clearInterval(_interval);
            this.totalTime = 60;
          }
        }, 1000);
~~~

~~~html
      <!-- 验证码 -->
      <el-form-item label="验证码" prop="rcode">
        <el-row>
          <el-col :span="16">
            <el-input v-model="form.rcode"></el-input>
          </el-col>
          <el-col :span="7" :offset="1">
            <el-button @click="getRecode" :disabled="totalTime!=60">
              获取验证码
              <span v-if="totalTime!=60">{{totalTime}}</span>
            </el-button>
          </el-col>
        </el-row>
      </el-form-item>
~~~

![image-20200814120447161](day03 - 黑马面面.assets/image-20200814120447161.png)

![image-20200814120533380](day03 - 黑马面面.assets/image-20200814120533380.png)



![image-20200814120610305](day03 - 黑马面面.assets/image-20200814120610305.png)







## export基本用法

路由提取： export default   router

其它地方使用  import router from '路径'   名字=值



node  

  输出:module.exports={}

导入:  let 变量 = require(路径)









export default  输出 了一个东西





export 



对象解构赋值

~~~js
let {a,b}={a:10,b:20}
a=10
b=20 
let {a,b}={c:20}
a:undefined
b:undefined
let {a=100,b}={a:undefined,b:20}
//解构过程中,如果解构的变量有默认值,但是它解构后的值为undefined,它会取它的默认值
a=100
b=20
~~~

在js中使用export 

- export { a}    export {b}   
- 它是与import对应使用   import {a}  from "export js"
- 它们二个之间就是一个解构赋值     {a}  =    {a,b}
- 注意点：命名方面需要一样，export可以写多个



export与export default区别

- export可以写多个，但是export default只能写一个
- 导入时，export 相当于是一个解析赋值匹配过程
- export default只是一个赋值过程  
- export 的值在import的时候名字一定要对应上
- export default可以不用对应上，而且不需要括号

## 注册模块 - 注册接口抽取

> 如果数据的校验能够通过，那么就把数据提交到服务器即可，这里涉及到接口的调用，将他抽取为方法，方便调用

步骤:

1. 根据接口文档，抽取注册接口为方法
2. 请求参数，作为方法的参数传递
3. 暴露出来方便后续调用
4. 位置`/api/register.js`

~~~js
import axios from "axios"
const instance = axios.create({
    baseURL: process.env.VUE_APP_URL,
    withCredentials: true
})
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    window.console.log(config)
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    console.log('响应拦截器')
    console.log(response)
    // 可以对响应的值进行一些处理
    // return response;
    return response.data
}, function (error) {
    // 可以在这里对错误进行一些处理
    return Promise.reject(error);
});
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

![image-20200814150227132](day03 - 黑马面面.assets/image-20200814150227132.png)

![image-20200814150250669](day03 - 黑马面面.assets/image-20200814150250669.png)

![image-20200814150315433](day03 - 黑马面面.assets/image-20200814150315433.png)



## 注册模块-注册功能实现

>使用刚才定义的api注册方法，完成注册功能

1. 导入相应注册api方法

   ~~~js
   import { sendsms, register } from "@/api/register.js";
   ~~~

2. 在点击确定按钮时，在表单验证通过了后进行注册接口调用

   调用接口当成功时，清除表单数据，同时关闭弹窗，提示注册成功

   ~~~js
       // 确定按钮点击事件
       submitClick() {
         this.$refs.form.validate(result => {
           if (result) {
             register(this.form).then(res => {
               window.console.log("注册返回信息:", res);
               if (res.code == 200) {
               //提示注册成功
                 this.$message.success("注册成功");
                 //关闭弹窗
                 this.dialogFormVisible = false;
               }
             });
           }
         });
       },
   ~~~

![image-20200814154434350](day03 - 黑马面面.assets/image-20200814154434350.png)

![image-20200814154501891](day03 - 黑马面面.assets/image-20200814154501891.png)

![image-20200814154530382](day03 - 黑马面面.assets/image-20200814154530382.png)



## 侦听器

>watch：可以侦听某个数据是否发生变化，如果发生变化会立刻调用相关函数

**基本数据的侦听**

```javascript
watch:{
        // watch要监听的值要写成字符串，且不用this
    //1：写出那个值
    //2：去掉this
    //3:写成字符串
    //后面函数跟二个值，一个是newValue是目前的值，后面还有一个oldValue就是修改前的值
    //只要监听的值有变化 ，就会调用后面的函数
    "数据名":function(newVal,oldVal){
        
        //newVal是新的数据，oldVal是没修改前的数据
        //这里可以执行数据变动后的处理
    }
}
```







## 关闭页面时，清空表单数据

>往往实际使用中，在关闭弹窗时，我们需要把数据置空

关闭弹窗，它其实一定会修改一个值，就是弹窗的:visible.sync的值，

其实我们只需要对该值做个watch处理，就可以了

watch观察某个值改变了，可以做一些相应处理

~~~js
  watch: {
    dialogFormVisible(newVal) {
      if (newVal == false) {
        // 清空表单
        this.$refs.form.resetFields();
        // 将图片置空
        this.imageUrl = "";
      }
    }
  },
~~~





## axios之create,拦截器

>axios进一步加深理解 

get 请求可用接口： https://autumnfish.cn/api/joke/list?num=10

create创建一个axios的副本，自定义一些axios一些默认属性

~~~
let  interface=axios.create({
//自定义的一些配制
baseURL:"基地址"
timeout:30000
})
interface就相当于是axios副本
~~~

~~~js
        let interface = axios.create({
            baseURL: "https://autumnfish.cn/api/joke"
        })

        // 添加请求拦截器
        interface.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            //config所有请求的相关信息
            window.console.log("拦截的数据", config)
            config.url = "/list?num=100"
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        interface.interceptors.response.use(function (response) {
            // 对响应数据做点什么
            // response所有返回的相关信息
            window.console.log("响应的数据拦截", response)
            response.data.jokes = response.data.jokes.slice(0, 1)
            return response;
        }, function (error) {
            // 对响应错误做点什么
            return Promise.reject(error);
        });





        //    interface相当于就是一个定义了一些默认属性的axios
        interface({
            url: "/list?num=10"
        }).then(res => {
            window.console.log(res)
        })

~~~





## axios.create的抽离

>登陆模块与首页模块都用到了axios.create，这种相同的东西最好抽离 

`/src/utils`下创建request的js   `require.js`

在require.js中写入

~~~js
import axios from 'axios'

var instance = axios.create({
    baseURL: process.env.VUE_APP_URL,
    withCredentials: true
});
export default instance
~~~

在到相应的登陆模块与首页模块相应api中导入instance

~~~
import instance from '@/utils/request.js'
~~~





## axios 拦截器

> 服务器响应的内容每次都写两次`data`,也是多余的哦 , 咱们通过axios的拦截器来优化这部分内容

[传送门](https://github.com/axios/axios#interceptors)

概念:

1. 拦截器是`axios`提供给开发者的一组回调函数，让我们可以在特定的时候添加自定义的逻辑
   1. 请求拦截器
      1. 发送请求的时候触发的回调函数
   2. 响应拦截器
      1. 数据响应回来之后，触发的回调函数

```javascript
// 添加一个请求拦截器
// 发送请求时，执行了，
// config 一些配置信息
// 可以动态的添加一些请求头,比如携带token
axios.interceptors.request.use(function (config) {
    console.log('请求拦截器')
    console.log(config)
    config.headers.info="i have a secret"
    config.headers.message="not tell you"
    // 在发送之前 干一些事情
    return config;
}, function (error) {
    // 如果请求出错了 干一些事情
    return Promise.reject(error);
});

// 注册一个相应拦截器
// 调用接口时.then方法执行之前会触发的回调函数
// 统一的进行一些处理，比如异常的错误提示
// 如果不想要额外的.data 可以在return的时候 把.data拿掉
axios.interceptors.response.use(function (response) {
    console.log('响应拦截器')
    console.log(response)
    // 可以对响应的值进行一些处理
    // return response;
    return response.data
}, function (error) {
    // 可以在这里对错误进行一些处理
    return Promise.reject(error);
});
```

## 注册模块 - api方法抽取

> 之前axios是直接使用的，接下来我们使用抽取的api方法来替换那些写在页面内部的接口调用逻辑

步骤:

1. 为了方便管理接口调用，一般会抽取为函数，根据模块进行抽取
2. 抽取的位置一般来说`/src/api/`文件夹
3. 不同的模块，定义不同的文件，
   1. 注册:`register.js`
4. 内部通过函数的方式来抽取接口调用
5. 暴露出来   `export`
6. 页面内部导入并使用    import {名字}   from '路径'

~~~js
import axios from "axios"
let instance = axios.create({
    baseURL: process.env.VUE_APP_URL,
    withCredentials: true
})
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    window.console.log(config)
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    console.log('响应拦截器')
    console.log(response)
    // 可以对响应的值进行一些处理
    // return response;
    return response.data
}, function (error) {
    // 可以在这里对错误进行一些处理
    return Promise.reject(error);
});
function sendsms(data) {
    return instance({
        url: "/sendsms",
        method: "post",
        data: data,
    })
}
export { sendsms }

~~~

![image-20200814163504769](day03 - 黑马面面.assets/image-20200814163504769.png)



![image-20200814163548961](day03 - 黑马面面.assets/image-20200814163548961.png)



![image-20200814163615674](day03 - 黑马面面.assets/image-20200814163615674.png)

## api全局处理响应错误拦截

> 根据全局的api错误编码提示，在响应拦截全局处理相应错误

![image-20200325140840638](day03 - 黑马面面.assets/image-20200325140840638.png)

1. 在js中使用element组件

   1. 导入相应组件

      ~~~
      import { Message } from 'element-ui'
      ~~~

   2. 调用相应组件，这里的`Message`相当于`this.$message`

      ~~~
      Message.error("请求参数格式错误！")
      ~~~

2. 处理接口响应拦截

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


   function getPhoneCode(data) {
       return instance({
           url: "/sendsms",
           method: "post",
           data      //data: data   
       })
   }

   function register(data) {
       return instance({
           url: "/register",
           method: "post",
           data      //data: data   
       })
   }

   ~~~



- ## git冲突


git合并冲突:git push   git pull 也不能用了  

git pull====  git fetch   git merge 分支名(拉取的分支合并到当前你能去)

![image-20200923164356879](day03 - 黑马面面.assets/image-20200923164356879.png)

出现这个表示 冲突

1. 先保存冲突文件(复制出来保留一下)

2. git merge --abort   取消全并

3. 保持二边代码一致就解决冲突

   1. 如果你修改的代码只有冲突文件,

      1. git reset --hard origin/master  重置当前代码为服务器代码
      2. 拿出冲突备份的文件,解决冲突并替换项目中的冲突文件
      3. git add .   git commit -m    git push

   2. 如果我们修改了多个文件,冲突文件只有一个

      1. 回到add 与commit 前状态(取消了commit 处理)

      2. git reset HEAD^  回到上一次commit提交

      3. git checkout --  文件路径     取消该文件的修改

      4. git pull  拉取服务器代码

      5. 拿出冲突备份的文件,解决冲突并替换项目中的冲突文件

      6. git add .

      7. git commit -m"注释"

      8. git push






