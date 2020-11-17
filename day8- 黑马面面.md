# day8 - 黑马面面

## 反馈

1. 国庆六天不回家,复习加预习有没有一起的,加我vx:17674738165一起学.

2. 林深时见鹿,海蓝时见鲸,梦醒时见你. 然: 林深时雾起,海蓝时浪涌,梦醒时夜续. 终: 鹿踏雾而来,鲸随浪而起,余生终遇你.

3. 老师,webpack还会讲吗? 我们班会有新课程的进阶视频视频吗

4. 很棒，很喜欢，听到老师说移动端还带我们，我乐坏了！

5. 老师能在捋一捋权限那里的思路吗

   1.	帐号限制
      1.	在layout获取用户信息后做一个判断 status==0  跳到登陆页
   2.	角色 
      1.	在获取用户信息后,如果该路由所在的角色 权限数组中包含当前用户角色 正常通过
      2.	不包含就跳转到登陆
      3.	在导航守卫做了一个判断:当前to的路由元的角色 权限数组中如果包含当前登陆人角色 ,我们就正常通过,不包含就跳转登陆页
         1.	注意点:vuex定义一个变量存储当前登陆人角色 ,默认值:超级管理员
   3.	菜单
      1.	this.$router取到了layout下的children
      2.	做了个for循环
      3.	加了个v-if控制 
      4.	在路由元配制了一个icon图标

6. 要清楚的认识到自己只是一个初级工程师,昨天最后两节课完全没听懂,感觉自己废了.....

   1.	权限
   2.	知识面挺广
   3.	逻辑处理能力

7. 碰到那种不报错,但是因为自己多写了或者写错某个属性或者少写了某个属性的代码,导致页面的结果跟预期的结果不一样,这种怎么快速解决

   1.	碰到 问题
   2.	不报错,
      1.	先找出出错范围
      2.	写一点看一下页面
         1.	自己写了什么引起的错误
         2.	字符写错

8. 不知道说什么,那就祝老师国庆快乐,老师广西的那位朋友新婚快乐

9. 脑子:会了,手:不会

   1.	多写
   2.	Vue.use(VueRouter)

10. 我人比较蠢，只能靠时间加练习去积累别人一下就学懂的知识~~~权限那一块 还是有点小模糊！回去还是敲多两遍，和看多次老师的视频！T T

    1.	知识点
       1.	css多写
    2.	逻辑这块多想
       1.	多想一下

11. 黑马面面项目能拿来写在简历上吗

    1.	

12. 感谢朋友一直以来对我的关心和支持，9月30号晚上20:00，我为大家在中央电视台准备了中秋晚会，不要问我花了多少钱，那不重要，大家开心就好。

13. 飞哥666666

14. 感觉越学越乱了 好多属性也很容易忘记或者搞混 只能多敲了

    1.	自己准备一个小本本
       1.	把一些不太清晰 的关键字之类记下来
       2.	git命令

15. 1.上班遇到一些不会做的,在百度也搜不到,怎么办?

    百度找不到,直接问前端负责人

    - 只怕安排你的活你没做出来,我还不知道
    - 打乱他的节奏

    git代码提交怎么提交

16. 温馨提示:最后一天有点难

## 回顾

1. 时间选择器

   1. el-date-picker
      1. v-model
      2. type="date/year"
   
2. 级联选择器

   1. el-cascader

      1. v-model="数组数据类型"

      2. options:数据

         1. ~~~
            [
            {
            xxx:文本内容
            value:值,
            children:[
            {xxx,value,childre}
            ]
            }
            ]
            ~~~

      3. props:{ label:"xxx",value:"value",children:"children"   }

3. dialog

   1. fullscreen:全屏  true   非全屏  false

4. v-model

   1. ~~~
      props与emit
       父传子属性
           传:在子组件标签定义一个属性   属性名=值
           收:在子组件内定义一个props(data兄弟):["属性名"]
           注意点:如果是原始值,子组件不能修改
                  如果是引用值,只要不修改它的引用,值是随便修改
                  栈不能修改,堆随便修改  
       子触发父方法
         定义:在子组件标签绑定一个方法    @子组件方法名=父组件方法
         触发:子组件内触发:this.$emit("子组件方法名",参数)
      v-model
         props  
         父组件
           <子组件标签  :value="value"  @input="inputEvent"   />
           data(){
           return {value:"123"}
           },
           methods:{inputEvent(msg){this.value=msg}}
           简写   <子组件标签  v-model="value"   />
           data(){
           return {value:"123"}
           },
           子组件
             props:['value'],
             methods:{
             xxx(){
             this.$emit("input","456")
             }
             }
      
      
      
      
      
      
      ~~~

   2. 





















## Element - ui 单选框组

> 多个互斥的选项，我们可以使用单选框组来实现

[传送门](https://element.eleme.cn/#/zh-CN/component/radio#dan-xuan-kuang-zu)

```html
<body>
    <!-- 挂载的元素 -->
    <div id="app">
        <el-radio-group v-model="radio">
            <!-- label 相当于是value   -->
            <!-- 双标签内部的值 看到的文本 -->
            <el-radio :label="1">西兰花</el-radio>
            <el-radio :label="2">花菜</el-radio>
            <el-radio :label="3">鸡蛋</el-radio>
        </el-radio-group>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <!-- 引入组件库 -->
    <script src="https://unpkg.com/element-ui/lib/index.js"></script>
    <script>
        const app = new Vue({
            el: "#app",
            data: {
                radio: 3
            }
        })
    </script>

</body>
```

## 题库模块-新增组件题型与难度

>题型与难度的基本功能处理

~~~vue
      <el-form-item label="题型" prop='type'>
        <el-radio-group v-model="form.type">
          <el-radio :label="1">单选</el-radio>
          <el-radio :label="2">多选</el-radio>
          <el-radio :label="3">简答</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="难度" prop='difficulty'>
        <el-radio-group v-model="form.difficulty">
          <el-radio :label="1">简单</el-radio>
          <el-radio :label="2">一般</el-radio>
          <el-radio :label="3">困难</el-radio>
        </el-radio-group>
      </el-form-item>
~~~

对应form数据处理

~~~
      form: {
        subject: "", //学科
        step: "", //阶段
        enterprise: "", //企业
        city:[],
        type: 1, //题型
        difficulty: 1 //难度
      },
~~~



##  vue-quill-editor 富文本编辑器

> 项目中使用了富文本编辑器，我们来看看如何使用,别人帮我们写好了一个vue组件

npm地址： [https://www.npmjs.com/package/vue-quill-editor](https://www.npmjs.com/package/vue-quill-editor) 

1. 安装

   1. ~~~
      npm i vue-quill-editor
      ~~~

2. 使用

   1. ~~~js
      //导入相应的组件与相应的css
      import { quillEditor } from "vue-quill-editor";
      import "quill/dist/quill.core.css";
      import "quill/dist/quill.snow.css";
      import "quill/dist/quill.bubble.css";
      ~~~

   2. 注册

      ~~~
        components: {
          quillEditor
        }
      ~~~

   3. 使用

      ~~~html
      //v-model为该组件双向绑定的值，@change="就是一个change事件，该事件会返回该函数相应的值" 
      <quillEditor v-model="content" @change="editorChange"></quillEditor>
      ~~~

      

```html
<template>
  <div>
    <quillEditor v-model="content" ref="myQuillEditor" @change="editorChange"></quillEditor>
  </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
export default {
  data() {
    return {
      content: ""
    };
  },
  components: {
    quillEditor
  },
  methods: {
    editorChange(val) {
      window.console.log(val);
    }
  }
};
</script>
<style>
</style>
```



## 题库模块 - 新增题库中加入富文本编辑器

>我们将他包装一层，方便外部使用

步骤：

1. 下包`npm i vue-quill-editor`

2. 引入 该富文本编辑器

   1. 导入，注册，使用

      ~~~js
      import { quillEditor } from "vue-quill-editor";
      import "quill/dist/quill.core.css";
      import "quill/dist/quill.snow.css";
      import "quill/dist/quill.bubble.css";
      ~~~

   2. 注册

      1. ~~~js
         components: {
           quillEditor
         }
         ~~~

         

   3. 使用时绑定相应的v-model值即可

      ~~~
            <el-form-item label="试题标题">
              <quillEditor v-model="form.title"></quillEditor>
            </el-form-item>
      ~~~

   4. 在form中加入相应的变量title

      ~~~js
            form: {
              subject: "", //学科
              step: "", //阶段
              enterprise: "", //企业
              type: 1, //题型
              difficulty: 1, //难度
              title: "" //标题
            },
      ~~~

      











## 题库模块-新增组件单选抽离

>将单选，多选简答抽离成一个单独组件

1. 创建一个allSelect.vue组件，用于抽离 单选，多选，简答区域功能

2. 同时在新增组件中使用上

   1. 导入  import allSelect from "./allSelect.vue";

   2. 注册  

   3. 使用

      ~~~vue
         <el-form-item :label="{1:'单选',2:'多选',3:'简答'}[form.type]">
          <allSelect></allSelect>
         </el-form-item> 
      ~~~

   4. 在新增组件上定义完整 的form表单选项所需要的值

      ~~~js
            form: {
              subject: "", //学科
              step: "", //阶段
              enterprise: "", //企业
              city: [],
              type: 1, //题型
              difficulty: "", //难度
              title: "", //试题标题
              single_select_answer: "", // 单选答案
              multiple_select_answer: [], //多选答案
              short_answer: "", //简答答案
              video: "", //解析视频
              remark: "", //试题备注
              // 题目选项
              select_options: [
                {
                  label: "A",
                  text: "狗不理",
                  image: ""
                },
                {
                  label: "B",
                  text: "猫不理",
                  image: ""
                },
                {
                  label: "C",
                  text: "麻花",
                  image: ""
                },
                {
                  label: "D",
                  text: "炸酱面",
                  image: ""
                }
              ]
      ~~~

      

   5. 使用时，将form表单数据传递过去，以便选项组件能直接获取type与一些其它选项值

      ~~~
         <el-form-item :label="{1:'单选',2:'多选',3:'简答'}[form.type]">
          <allSelect :form="form"></allSelect>
         </el-form-item> 
      ~~~

3. 在单独组件中获取传递过来的form值，同时写出单独页面

   1. 单选组件中获取传递过来的form

      ~~~
        props: {
          form: {
            type: Object
          }
      ~~~

   2. 同时针对form里的type处理出单选

`单选`

~~~vue
    <!-- 单选 -->
    <div v-if="form.type==1">
      <el-row v-for="(item, index) in form.select_options" :key="index">
        <el-col :span="20">
          <el-radio
            class="radioItem"
            :label="item.label"
            v-model="form.single_select_answer"
          >
            {{item.label}}
            <el-input v-model="item.text" class="input"></el-input>
          </el-radio>
        </el-col>
        <el-col :span="4">
         上传图片
        </el-col>
      </el-row>
    </div>
~~~





## 题库模块-选项组件抽离图片上传

>图片上传功能比较独立，可以抽离 出来，结构更简洁

先ctrl+c复制element相应的上传组件，修改下上传地址



~~~vue
<template>
  <el-upload
    class="avatar-uploader"
    :action="uploadURL"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
</template>



<script>
export default {
  data() {
    return {
      imageUrl: "",
      // 上传的地址
      uploadURL: process.env.VUE_APP_URL + "/question/upload"
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>
<style>
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
</style>
~~~

再整合进新增组件的单选多选简答的抽离组件中

1. 导入，注册，使用

~~~vue
  导入：import uploadImage from "./uploadImage";
  注册：  components: { uploadImage  },
  使用：
  <el-col :span="4">
          <uploadImage></uploadImage>
        </el-col>
~~~

2. 给图片上传组件来一个默认图片显示（当有图片数据时），结合v-model，

`uploadImage组件调整`

将uploadImage里的image改为props传值的value,同时修改成功的回调处理

~~~vue
<template>
  <el-upload
    class="avatar-uploader"
    :action="uploadURL"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
  >
    <img v-if="value" :src="baseUrl+value" class="avatar" />
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
</template>



<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      // 上传的地址
      uploadURL: process.env.VUE_APP_URL + "/question/upload",
      baseUrl: process.env.VUE_APP_URL + "/"
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      window.console.log(file);
      //   this.imageUrl = URL.createObjectURL(file.raw);
      this.$emit("input", res.data.url);
      window.console.log("图片上传成功：", res);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG,png 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>
<style>
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
</style>
~~~

修改选项抽离组件，加入v-model处理

~~~html
 <uploadImage v-model="item.image"></uploadImage>
~~~



## Element-ui 文本域

> 文本域的话，Element-ui也提供了哦，基于输入框设置一个属性，即可使用

[传送门](https://element.eleme.cn/#/zh-CN/component/input#wen-ben-yu)

```html
<el-input v-model="value" type="textarea" rows="6" placeholder=""></el-input>

```









## 题库模块-新增组件单选多选简答抽离

>抽离的选项组件中完成多选与简答

~~~vue
<template>
  <div class="allSelect">
    <!-- 单选 -->
    <div v-if="form.type==1">
      <el-row v-for="(item, index) in form.select_options" :key="index">
        <el-col :span="20">
          <el-radio
            @change="emitData"
            class="radioItem"
            :label="item.label"
            v-model="form.single_select_answer"
          >
            {{item.label}}
            <el-input v-model="item.text" class="input"></el-input>
          </el-radio>
        </el-col>
        <el-col :span="4">
          <uploadImage v-model="item.image"></uploadImage>
        </el-col>
      </el-row>
    </div>
    <!-- 多选 -->
    <div v-else-if="form.type==2">
      <el-row v-for="(item, index) in form.select_options" :key="index">
        <el-col :span="20">
          <el-checkbox class="radioItem" :label="item.label" v-model="form.multiple_select_answer">
            {{item.label}}
            <el-input @change="emitData" v-model="item.text" class="input"></el-input>
          </el-checkbox>
        </el-col>
        <el-col :span="4">
          <uploadImage v-model="item.image"></uploadImage>
        </el-col>
      </el-row>
    </div>
    <!-- 简答 -->
    <div v-else>
      <el-input @change="emitData" type="textarea" rows="4" v-model="form.short_answer"></el-input>
    </div>
  </div>
</template>
<script>
import uploadImage from "./uploadImage";
export default {
  components: {
    uploadImage
  },
  props: {
    form: {
      type: Object
    }
  },
  data() {
    return {
      // 上传的地址
      uploadURL: process.env.VUE_APP_URL + "/question/upload"
    };
  },
  methods: {
    //   将得到的值提交出去
    emitData() {
      this.$emit("data");
    }
  }
};
</script>
<style lang="less">
.allSelect {
  .radioItem {
    width: 80%;
  }
}
</style>
~~~

## 题库模块 - 新增组件视频组件抽取

> 这里我们也抽取一下，尽可能的简化编码,我们将视频上传整合到前面的图片上传组件中

1. 分析，

   视频上传与图片上传有一个类型区别，所以我们传入一个参数type做类型区别，

   type默认我们还是图片，不影响图片上传功能

   会对不同的type,我们做出相应调整

2. 步骤

   1. 在组件传值中加入props传参type,默认为img

   2. 会对type不同做出相应的调整

      

```vue
<template>
  <el-upload
    class="avatar-uploader"
    :action="uploadURL"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
  >
    <div v-if="type=='img'">
      <img v-if="value" :src="baseUrl+value" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </div>
    <div v-else-if="type=='video'">
      <video v-if="value" :src="baseUrl+value" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </div>
  </el-upload>
</template>



<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "img"
    }
  },
  data() {
    return {
      // 上传的地址
      uploadURL: process.env.VUE_APP_URL + "/question/upload",
      baseUrl: process.env.VUE_APP_URL + "/"
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      window.console.log(file);
      //   this.imageUrl = URL.createObjectURL(file.raw);
      this.$emit("input", res.data.url);
      window.console.log("图片上传成功：", res);
    },
    beforeAvatarUpload(file) {
      let _isPass = true;
      if (this.type == "img") {
        _isPass = file.type === "image/jpeg" || file.type === "image/png";
      } else if (this.type == "video") {
        _isPass = file.type === "video/mp4";
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!_isPass) {
        this.$message.error("上传格式不支持!");
      }
      if (!isLt2M) {
        this.$message.error("上传文件不得超过2MB!");
      }
      return _isPass && isLt2M;
    }
  }
};
</script>
<style>
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
</style>
```

## 题库模块-上传组件整合到新增选项组件中

>在新增组件中使用视频上传组件

~~~js
导入
import uploadVideo from "./uploadImage";
注册
  components: {
    quillEditor,
    allSelect,
    uploadVideo
  },
  使用并传入相应的type与v-model绑定相应数据
        <el-form-item label="解析视频">
        <uploadVideo type="video" v-model="form.video"></uploadVideo>
      </el-form-item>
~~~



## 题库模块-新增组件试题备注

>将试题备注加入到新增组件中

1. 先在form表单按接口值定义

   ~~~js
         form: {
           subject: "", //学科
           step: "", //阶段
           enterprise: "", //企业
           city: [],
           type: "", //题型
           diffculty: "", //难度
           title: "", //试题标题
           single_select_answer: "", // 单选答案
           multiple_select_answer: [], //多选答案
           short_answer: "", //简答答案
           video: "", //解析视频
           remark: "", //试题备注
           // 题目选项
           select_options: [
             {
               label: "A",
               text: "狗不理",
               image: ""
             },
             {
               label: "B",
               text: "猫不理",
               image: ""
             },
             {
               label: "C",
               text: "麻花",
               image: ""
             },
             {
               label: "D",
               text: "炸酱面",
               image: ""
             }
           ]
         },
   ~~~

   2.加入相应html并绑定值

   ~~~
         <el-form-item label="试题备注">
           <el-input type="textarea" v-model="form.remark" rows="2"></el-input>
         </el-form-item>
   ~~~



## 题库模块 -新增  表单校验整合

> 点击提交的时候，需要校验数据是否正确哦

```
// 学科 subject
// 阶段 step
// 企业 enterprise
// 城市 city
// 题型 type
// 难度 difficulty
// 标题 title
// 单选 single_select_answer
// 多选 multiple_select_answer
// 简答 short_answer
// 答案解析 answer_analyze
// 试题备注 remark
```

步骤:

1. data中定义`rules`
2. form上 设置`rules`，设置`ref`
3. 点击提交的时候 
   1. 调用校验方法，
      1. 通过了 提交数据
      2. 失败了 提示用户

~~~vue
<template>
  <el-dialog class="addQuestion" :visible.sync="dialogVisible" :fullscreen="true">
    <div slot="title" class="title">新增题库</div>
    <el-form class="form" label-width="80px" :model="form" ref="form" :rules="rules">
      <el-form-item label="学科" prop="subject">
        <el-select v-model="form.subject">
          <el-option
            v-for="(item, index) in subjectList"
            :key="index"
            :value="item.id"
            :label="item.name"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="阶段" prop="step">
        <el-select placeholder="请选择阶段" v-model="form.step">
          <el-option :value="1" label="初级"></el-option>
          <el-option :value="2" label="中级"></el-option>
          <el-option :value="3" label="高级"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="企业" prop="enterprise">
        <el-select placeholder="请选择企业" v-model="form.enterprise">
          <el-option
            v-for="(item, index) in businessList"
            :key="index"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="城市" prop="city">
        <el-cascader
          v-model="form.city"
          size="large"
          :props="{value:'label'}"
          :options="options"
          @change="handleChange"
        ></el-cascader>
      </el-form-item>
      <el-form-item label="题型" prop="type">
        <el-radio-group v-model="form.type">
          <el-radio :label="1">单选</el-radio>
          <el-radio :label="2">多选</el-radio>
          <el-radio :label="3">简答</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="难度" prop="diffculty">
        <el-radio-group v-model="form.diffculty">
          <el-radio :label="1">简单</el-radio>
          <el-radio :label="2">一般</el-radio>
          <el-radio :label="3">困难</el-radio>
        </el-radio-group>
      </el-form-item>
      <hr />
      <el-form-item label="试题标题" prop="title">
        <quillEditor v-model="form.title" @change="editorChange"></quillEditor>
      </el-form-item>
      <el-form-item
        :label="{1:'单选',2:'多选',3:'简答'}[form.type]"
        :prop="{1:'single_select_answer',2:'multiple_select_answer',3:'short_answer'}[form.type]"
      >
        <allSelect  :form="form"></allSelect>
      </el-form-item>
      <el-form-item label="解析视频" prop="video">
        <uploadVideo type="video" v-model="form.video" @validateVideo="validateVideo"></uploadVideo>
      </el-form-item>
      <el-form-item label="试题备注" prop="remark">
        <el-input type="textarea" rows="2" v-model="form.remark"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="btnCenter">
      <el-button @click="dialogVisible=false">取消</el-button>
      <el-button @click="submit">确定</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { regionData } from "element-china-area-data";
// 导入富文本编辑器
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
// 导入选项
import allSelect from "./allSelect";
// 导入视频上传组件
import uploadVideo from "./uploadImage";

export default {
  props: ["subjectList", "businessList"],
  components: {
    quillEditor,
    allSelect,
    uploadVideo
  },
  data() {
    return {
      dialogVisible: false,
      form: {
        subject: "", //学科
        step: "", //阶段
        enterprise: "", //企业
        city: [],
        type: 1, //题型
        diffculty: "", //难度
        title: "", //试题标题
        single_select_answer: "", // 单选答案
        multiple_select_answer: [], //多选答案
        short_answer: "", //简答答案
        video: "", //解析视频
        remark: "", //试题备注
        // 题目选项
        select_options: [
          {
            label: "A",
            text: "狗不理",
            image: ""
          },
          {
            label: "B",
            text: "猫不理",
            image: ""
          },
          {
            label: "C",
            text: "麻花",
            image: ""
          },
          {
            label: "D",
            text: "炸酱面",
            image: ""
          }
        ]
      },
      // 必填验证
      rules: {
        subject: [{ required: true, message: "必填哦！", trigger: "change" }],
        step: [{ required: true, message: "必填哦！", trigger: "change" }],
        enterprise: [
          { required: true, message: "必填哦！", trigger: "change" }
        ],
        city: [{ required: true, message: "必填哦！", trigger: "change" }],
        type: [{ required: true, message: "必填哦！", trigger: "change" }],
        diffculty: [{ required: true, message: "必填哦！", trigger: "change" }],
        title: [{ required: true, message: "必填哦！", trigger: "change" }],
        single_select_answer: [
          { required: true, message: "必填哦！", trigger: "change" }
        ],
        short_answer: [
          { required: true, message: "必填哦！", trigger: "change" }
        ],
        multiple_select_answer: [
          { required: true, message: "必填哦！", trigger: "change" }
        ],
        video: [{ required: true, message: "必填哦！", trigger: "change" }],
        remark: [{ required: true, message: "必填哦！", trigger: "change" }]
      },
      //   省市区数据
      options: regionData
    };
  },
  methods: {
    handleChange(val) {
      window.console.log(val);
    },
    edirotEvent(val) {
      window.console.log(val);
    },
    validateVideo() {
      this.$refs.form.validateField("video");
    },
    editorChange() {
      this.$refs.form.validateField("title");
    },
    // 确定按钮点击
    submit() {
      window.console.log(this.form);
      this.$refs.form.validate(result => {
        window.console.log(result);
        if (result) {
          //调用提交接口
        }
      });
    }
  }
};
</script>
<style lang="less">
.addQuestion {
  .el-dialog__header {
    padding: 0;
  }
  .el-dialog__headerbtn .el-dialog__close {
    color: #fff;
  }
  .title {
    text-align: left;
    color: #fff;
    height: 53px;
    background-color: rgb(14, 156, 250);
    font-size: 18px;
    line-height: 53px;
  }
  .form {
    width: 800px;
    margin: 0 auto;
  }
  .inputW {
    width: 364px;
  }
  .btnCenter {
    text-align: center;
  }
}
</style>
~~~



## 题库模块 - 选项区域表单验证

> 根据题型的不同，选项区域有三种，分别是单选框组，多选框组，简答题,并且要联动哦，我们来整合一下

1. 在每个选项点击都绑定同一个change事件

   ~~~
           单选
           <el-radio
               @change="emitData"
               class="radioItem"
               :label="item.label"
               v-model="form.single_select_answer"
             >
               {{item.label}}
               <el-input v-model="item.text" class="input"></el-input>
             </el-radio>
             多选
                   <el-checkbox class="radioItem" :label="item.label" v-model="form.multiple_select_answer">
               {{item.label}}
               <el-input @change="emitData" v-model="item.text" class="input"></el-input>
             </el-checkbox>
             简答
             <el-input @change="emitData" type="textarea" rows="4" v-model="form.short_answer"></el-input>
   ~~~

   

2. 对change事件做一个emit处理，当数据改变时，都emit新增组件做一次表单验证

   1. 在新增组件中对选项组件绑定相应事件

      ~~~html
        <allSelect @data="getAnswer" :form="form"></allSelect>
      ~~~

   2. 同事在新增组件写下相应的getAnswer方法

      ~~~js
          // 处理收到的验证
          getAnswer() {
            this.$refs.form.validateField([
              "single_select_answer",
              "multiple_select_answer",
              "short_answer"
            ]);
          },
      ~~~

      

   3. 在选项组件中写好相应的emit

      ~~~js
          //   触发父组件表单验证
          emitData() {
            this.$emit("data");
          }
      ~~~

      

## 题库模块 - 数据提交

> 准备了这么多的数据，终于要提交啦，和之前的逻辑一样，新增成功之后，父组件重新获取即可

步骤：

1. 定义接口，在相应js定义api方法 

   ~~~js
   function addQuestionData(data) {
       return instance({
           url: "/question/add",
           method: "post",
           data
       })
   }
   ~~~

   

2. 导入接口

   ~~~
   import { addQuestionData } from "@/api/question.js";
   ~~~

   

3. 点击提交校验数据
   1. 失败提示
   2. 成功：提交数据
      1. 成功：
         1. 提示用户
         2. 关闭对话框
         4. 通知父组件重新获取数据
         
         

   ~~~js
       // 确定按钮点击
       submit() {
         window.console.log(this.form);
         this.$refs.form.validate(result => {
           window.console.log(result);
           if (result) {
             //调用提交接口
             window.console.log("form:", this.form);
             addQuestionData(this.form).then(() => {
               this.$message.success("添加成功");
               this.dialogVisible = false;
               this.$parent.search();
             });
           }
         });
       }
   ~~~

   

## 题库模块 - 进入编辑

> 点击编辑按钮 进入编辑状态,和之前的逻辑类似，一些细节需要处理一下

[传送门](https://element.eleme.cn/#/zh-CN/component/dialog)

分析：新增组件与编辑组件共用，只需传递一个mode值进行处理即可

​      新增：  mode=="add"     

​      编辑:      mode=="edit"

1. 点击编辑按钮，打开新增组件，并传递mode为edit,同时，需要将当前点击项数据传递过去
   
   1. 定义一个mode默认值为add
   
   2. 在新增组件上绑定相应属性
   
      ~~~vue
          <addQuestion
            :mode="mode"
            ref="addQuesition"
            :subjectList="subjectList"
            :businessList="businessList"
          ></addQuestion>
      ~~~
   
   3. 在编辑按钮上加入点击事件，点击时改变新增组件的form为当前行数据
   
      ~~~vue
       <el-table-column label="操作" width="260px">
                <template slot-scope="scope">
                  <el-button @click="edit(scope.row)">编辑</el-button>
                  <el-button>{{scope.row.status==1?'禁用':"启用"}}</el-button>
                  <el-button>删除</el-button>
                </template>
              </el-table-column>
      ~~~
   
      注意：编辑数据的表单传值这里，一定要尝试克隆一下，以免受到影响
   
      ~~~js
          //编辑
          edit(rowData) {
            this.$refs.addQuestion.dialogVisible = true;
            this.$refs.addQuestion.form = JSON.parse(JSON.stringify(rowData));
            this.mode = "edit"
          }
      ~~~
   
   4. 调整以前新增，新增时需要修改mode为add,同时，form表单要还原
   
      ~~~js
          // 新增
          add() {
            this.mode = "add";
            this.$refs.addQuestion.dialogVisible = true;
            this.$refs.addQuestion.form = {
              subject: "", //学科
              step: "", //阶段
              enterprise: "", //企业
              city: [],
              type: 1, //题型
              difficulty: "", //难度
              title: "", //试题标题
              single_select_answer: "", // 单选答案
              multiple_select_answer: [], //多选答案
              short_answer: "", //简答答案
              video: "", //解析视频
              remark: "", //试题备注
              // 题目选项
              select_options: [
                {
                  label: "A",
                  text: "狗不理",
                  image: ""
                },
                {
                  label: "B",
                  text: "猫不理",
                  image: ""
                },
                {
                  label: "C",
                  text: "麻花",
                  image: ""
                },
                {
                  label: "D",
                  text: "炸酱面",
                  image: ""
                }
              ]
            };
          },
      ~~~
   
   5. 在新增组件中接收mode值
   
   ~~~js
     props: ["subjectList", "businessList", "mode"],
   ~~~
   
   6.由于城市与多选答案的数据是一个字符串，但我们要的是数组，需要特别处理一下
   
   可以在收到数据列表后就进行一次转换
   
   ~~~
       getData() {
         let _params = {
           ...this.form,
           ...{
             page: this.pagination.currentPage,
             limit: this.pagination.pageSize
           }
         };
         getQuesitionData(_params).then(res => {
         
           this.table = res.data.items;
             // 处理城市数据
           this.table.forEach(item => {
             item.city = item.city.split(",");
             item.multiple_select_answer = item.multiple_select_answer.split(",");
           });
           // 处理分页总数
           this.pagination.total = res.data.pagination.total;
   
           window.console.log("题库列表数据", res);
         });
       }
   ~~~
   
   

## 题库模块 - 保存修改

> 点击提交的时候，把我们进行准备的数据提交到服务器即可

步骤:

1. 在相应js写上编辑api方法

   ~~~js
   import instance from '@/utils/request.js'
   function getQuestionData(params) {
       return instance({
           url: "/question/list",
           method: "get",
           params
       })
   }
   function addQuestionData(data) {
       return instance({
           url: "/question/add",
           method: "post",
           data
       })
   }
   function editQuestionData(data) {
       return instance({
           url: "/question/edit",
           method: "post",
           data
       })
   }
   export { getQuestionData, addQuestionData, editQuestionData }
   ~~~

   

2. 在新增组件中导入编辑接口

   ~~~js
   import { addQuestionData, editQuestionData } from "@/api/quesition.js";
   ~~~

   

3. 在提交那里根据mode的不同做出相应处理即可

   修改成功与添加成功后，题库列表都得执行一次刷新 ，也就相当于一次搜索即可

   ~~~js
       // 确定按钮点击
       submit() {
         window.console.log(this.form);
         this.$refs.form.validate(result => {
           window.console.log(result);
           if (result) {
             //调用提交接口
             if (this.mode == "add") {
               addQuestionData(this.form).then(() => {
                 this.$message.success("添加成功");
                 this.dialogVisible = false;
                 this.$parent.search();
               });
             } else {
               editQuestionData(this.form).then(() => {
                 this.$message.success("修改成功");
                 this.dialogVisible = false;
                 this.$parent.search();
               });
             }
           }
         });
       }
   ~~~
   
   

## 题库模块 - 状态切换

> 点击切换状态的逻辑咱们来实现以下

步骤:

1. 在相应js定义状态切换的api方法

   ~~~js
   function setQuestionStatus(data) {
       return instance({
           url: "/question/status",
           method: "post",
           data
       })
   }
   ~~~

   

2. 为状态切换绑定点击事件 

   ~~~html
          <el-table-column label="操作" width="260px">
             <template slot-scope="scope">
               <el-button @click="edit(scope.row)">编辑</el-button>
               <el-button @click="setStatus(scope.row.id)">{{scope.row.status==1?'禁用':"启用"}}</el-button>
               <el-button>删除</el-button>
             </template>
           </el-table-column>
   ~~~

   

3. 导入状态处理api方法，并传递id,成功之后，重新获取数据

   ~~~js
       // 设置状态
       setStatus(id) {
         setQuestionStatus({ id: id }).then(() => {
             this.$message.success("状态修改成功！");
             this.search();
         });
       }
   ~~~
   
   



## 题库模块 - 点击删除

> 点击删除的逻辑我们来实现以下

步骤：

1. 定义删除api方法

   ~~~js
   function delQuestionData(data) {
       return instance({
           url: "/question/remove",
           method: "post",
           data
       })
   }
   ~~~

   

2. 点击删除按钮

   ~~~html
      <el-table-column label="操作" width="260px">
             <template slot-scope="scope">
               <el-button @click="edit(scope.row)">编辑</el-button>
               <el-button @click="setStatus(scope.row.id)">{{scope.row.status==1?'禁用':"启用"}}</el-button>
               <el-button @click="del(scope.row.id)">删除</el-button>
             </template>
           </el-table-column>
   ~~~

3. 导入相应api方法

   ~~~
   import {
     getQuestionData,
     setQuestionStatus,
     delQuestionData
   } from "@/api/quesition.js";
   ~~~

   

4. 弹框
   1. 确认：
      1. 调用接口 delQuestionData传递id
         1. 通过接口文档查看的数据
         2. 成功：重新获取数据
         3. 失败：提示用户
   2. 取消：
      1. 关闭

   ~~~
       // 删除
       del(id) {
         this.$confirm("你确定要删除这条数据吗？", "友情提示", {
           confirmButtonText: "确定",
           cancelButtonText: "取消",
           type: "warning"
         })
           .then(() => {
             delQuestionData({ id: id }).then(() => {
                 this.$message.success("删除成功！");
                 this.search();
             });
           })
           .catch(() => {});
       }
   ~~~
   
   

## 统计模块 - 顶部布局

> 首先我们来实现顶部布局

步骤：

1. 顶部是一个卡片

2. 内部一堆圈圈

   

~~~vue
<template>
  <div class="chart">
    <el-card>
      <ul class="list">
        <li>
          <div class="circle">0</div>
          <p class="txt">今日新增用户</p>
        </li>
        <li>
          <div class="circle">0</div>
          <p class="txt">总用户量</p>
        </li>
        <li>
          <div class="circle">0</div>
          <p class="txt">新增试题</p>
        </li>
        <li>
          <div class="circle">0</div>
          <p class="txt">总试题量</p>
        </li>
        <li>
          <div class="circle">0</div>
          <p class="txt">总刷题量</p>
        </li>
        <li>
          <div class="circle">0</div>
          <p class="txt">人均刷题量</p>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.chart {
  .list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .circle {
      border: 3px solid red;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      text-align: center;
      line-height: 100px;
    }
    .txt {
      text-align: center;
    }
  }
}
</style>
~~~





## 统计模块 - 顶部数据获取

> 布局搞定了之后，我们来获取顶部的数据

步骤：

1. 抽取接口

   ~~~js
   import instance from '@/utils/request.js'
   function getChartData() {
       return instance({
           url: "/data/title"
       })
   }
   export { getChartData }
   ~~~

   

2. 导入接口

   ~~~
   import { getChartData } from "@/api/chart.js";
   ~~~

3. 调用接口

   ~~~js
   import { getChartData } from "@/api/chart.js";
   export default {
     data() {
       return {
         list: []
       };
     },
     created() {
       getChartData().then(res => {
         this.list = res.data;
       });
     }
   };
   ~~~

   

4. 渲染数据即可

   ~~~html
    <el-card>
         <ul class="list">
           <li>
             <div class="circle">{{courseData.increment_users}}</div>
             <p class="txt">今日新增用户</p>
           </li>
           <li>
             <div class="circle">{{courseData.total_users}}</div>
             <p class="txt">总用户量</p>
           </li>
           <li>
             <div class="circle">{{courseData.increment_questions}}</div>
             <p class="txt">新增试题</p>
           </li>
           <li>
             <div class="circle">{{courseData.total_questions}}</div>
             <p class="txt">总试题量</p>
           </li>
           <li>
             <div class="circle">{{courseData.total_done_questions}}</div>
             <p class="txt">总刷题量</p>
           </li>
           <li>
             <div class="circle">{{courseData.personal_questions}}</div>
             <p class="txt">人均刷题量</p>
           </li>
         </ul>
       </el-card>
   ~~~

   



## 统计模块 - 底部布局

> 底部使用的是 百度的`Echarts`，先整合进来

步骤:

1. 底部添加卡片
2. 整合echarts
   1. 下包 `npm install echarts`
   2. 导包 
   3. 用包`mounted`
      1. 记得写在 卡片内部的一个div中，不要直接用`el-card`

~~~js
<template>
  <div class="course">
    <el-card>
      <ul class="list">
        <li>
          <div class="circle">{{courseData.increment_users}}</div>
          <p class="txt">今日新增用户</p>
        </li>
        <li>
          <div class="circle">{{courseData.total_users}}</div>
          <p class="txt">总用户量</p>
        </li>
        <li>
          <div class="circle">{{courseData.increment_questions}}</div>
          <p class="txt">新增试题</p>
        </li>
        <li>
          <div class="circle">{{courseData.total_questions}}</div>
          <p class="txt">总试题量</p>
        </li>
        <li>
          <div class="circle">{{courseData.total_done_questions}}</div>
          <p class="txt">总刷题量</p>
        </li>
        <li>
          <div class="circle">{{courseData.personal_questions}}</div>
          <p class="txt">人均刷题量</p>
        </li>
      </ul>
    </el-card>
    <el-card>
      <div ref="echarts" class="echarts"></div>
    </el-card>
  </div>
</template>

<script>
import { getChartData } from "@/api/chart.js";
import echarts from "echarts";
export default {
  data() {
    return {
      courseData: "",
      myEcharts: ""
    };
  },
  created() {
    getChartData().then(res => {
        this.courseData = res.data;
    });
  },
  mounted() {
    this.myEcharts = echarts.init(this.$refs.echarts);
    let option = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        left: 10,
        data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center"
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "30",
              fontWeight: "bold"
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 335, name: "直接访问" },
            { value: 310, name: "邮件营销" },
            { value: 234, name: "联盟广告" },
            { value: 135, name: "视频广告" },
            { value: 1548, name: "搜索引擎" }
          ]
        }
      ]
    };
    this.myEcharts.setOption(option);
  }
};
</script>

<style lang="less">
.course {
  .list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .circle {
      border: 3px solid red;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      text-align: center;
      line-height: 100px;
    }
    .txt {
      text-align: center;
    }
  }
  .echarts {
    height: 400px;
  }
}
</style>
~~~



## 统计模块 - 网络数据获取

> 底部的数据是联动的，我们通过接口来获取

步骤:

1. 定义相应api方法

   ~~~js
   
   function getStatistics() {
       return instance({
           url: "/data/statistics"
       })
   }
   
   ~~~
   
   
   
2. 导入相应api方法

   ~~~
   import { getChartData, getStatistics } from "@/api/chart.js";
   ~~~

   

3. 调用接口

4. 接口调用成功之后生成echarts

5. 数据部分是本地和网络数据的结合

~~~vue
<template>
  <div class="chart">
    <el-card>
      <ul class="list">
        <li>
          <div class="circle">{{list.increment_users}}</div>
          <p class="txt">今日新增用户</p>
        </li>
        <li>
          <div class="circle">{{list.total_users}}</div>
          <p class="txt">总用户量</p>
        </li>
        <li>
          <div class="circle">{{list.increment_questions}}</div>
          <p class="txt">新增试题</p>
        </li>
        <li>
          <div class="circle">{{list.total_questions}}</div>
          <p class="txt">总试题量</p>
        </li>
        <li>
          <div class="circle">{{list.total_done_questions}}</div>
          <p class="txt">总刷题量</p>
        </li>
        <li>
          <div class="circle">{{list.personal_questions}}</div>
          <p class="txt">人均刷题量</p>
        </li>
      </ul>
    </el-card>
    <el-card>
      <div ref="echarts" class="echarts"></div>
    </el-card>
  </div>
</template>

<script>
import { getChartData, getStatistics } from "@/api/chart.js";
import echarts from "echarts";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    getChartData().then(res => {
      this.list = res.data;
    });
  },
  mounted() {
    this.myEcharts = echarts.init(this.$refs.echarts);
    getStatistics().then(res => {
      if (res.code == 200) {
        window.console.log("echarts数据：", res);
        let legendData = res.data.map(item => {
          return item.name;
        });
        let option = {
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: "vertical",
            right: 10,
            data: legendData
          },
          series: [
            {
              name: "访问来源",
              type: "pie",
              radius: ["50%", "70%"],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: "center"
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: "30",
                  fontWeight: "bold"
                }
              },
              labelLine: {
                show: false
              },
              data: res.data
            }
          ]
        };
        this.myEcharts.setOption(option);
      }
    });
  }
};
</script>

<style lang="less">
.chart {
  .list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .circle {
      border: 3px solid red;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      text-align: center;
      line-height: 100px;
    }
    .txt {
      text-align: center;
    }
  }
  .echarts {
    height: 400px;
  }
}
</style>
~~~



 

## 项目打包

> 代码写完了，一个命令即可实现打包，更为高级的优化需要学习了`webpack`才好展开哈

1. 今天记住一个命令即可

   1. 开发环境运行  npm run serve  
   2. 打包是走的生产环境  打包出来了，  npm run build

2. `npm run build`   

3. 打包之后开发环境的环境变量就失效了

4. 创建一个 生产环境的变量
   1. `.env.production`
   2. 配置地址

5. 打包前还有个地址需要处理，创建一个`vue.config.js`文件，加入如下代码

   ~~~js
   module.exports = {
       publicPath: './'
   }
   ~~~

   

6. `npm run build`自动读取 把代码中的所有`process.env.VUE_APP_URL`

7. 打包完以后，会多一个`dist`文件夹

8. 代码就在里面

9. `/js`文件夹下面的.map文件可以删除

## 项目打包01 - 生产环境地址设置

> 通过另外一个环境变量来配置生产环境的地址`.env.production`,打包的时候会自动读取这里面的值

1. 在线接口地址: http://autumnfish.cn/heimamm/public/



## 项目打包02 - 项目运行

> 项目的运行需要在服务器环境下，本地测试的话可以通过vsCode的`liver server`插件来实现

[传送门](https://www.cnblogs.com/shihaiming/p/10984394.html)

1. 正常打包完毕之后，是给后端，运维去部署
2. 自己通过vscode的 liver server插件运行
3. 必须通过服务器
4. 可以通过自己配置允许跨域的服务器来解决这个问题



## 项目开发流程



团队：

- 项目经理

- 产品经理:

  - 写需求
  - 和客户沟通,和公司领导商量
  - 画原型图

- 后端与前端负责人

  安排工作

- 前端开发

  - 列表接口

- ui

- 运维:项目上线,服务器,服务器环境都是运维搞定

- 测试:找bug,   是bug  ,   不是bug  

  - 测试用例
  - 性能测试
  - 测试报告

- ui与测试

- 时间久了:关系好的也就那几个前端 

  工作流程:

  - 进入公司
    - 需求交接(产品经理)
      - 全新的项目
        - 前端负责人会安排 不同的人理解 不同的模块
        - 注意:一定要问,如果有任何不明白都要问
        - 本子记
    - 做过一段时间的项目
      - 让一人简单和你说一下
        - 记下来 拉着他不停问
          - 记下来
    - 需求反串讲
      - 你讲,产品经理听
    - 任务安排 
      - 前端 负责人会安排 每个人不同的活:
        - 让你报时间,认真的报
        - 尽量往上面加点
      - excel:填下来
        - 分解 你的功能
        - 登陆:
          - 布局 :           3小时
          - 验证码功能:1小时
        - 在线excel
      - 网站管理
        - 写好功能与时间,开始按钮
      - 报时间一定要注意



