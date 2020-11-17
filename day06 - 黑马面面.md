# day06 - 黑马面面

## 反馈

1.	“《月亮与六便士》里面有一句台词是“我用尽全力过着平凡的一生。”我当时觉得是句悲伤的台词，但只需要加上一个限定词，就可以让它堂而皇之的满足我关于美好生活的所有幻想，那就是“和你,{{我的同桌}}”。 ”
   1.	动画  flash    2000  
   1.	程序 =>  flash游戏  8000   10000
   1.	flash  找不到  广告公司   canvas游戏  5000  php   前端  
      1.	 创业难,时间赶,价钱低 java  设计ps      10%     6%    5%    5%   2000多
      1.	全栈工程师:开了,他一样都行
      1.	技术全  早期 刚进入公司很受欢迎
      1.	技术精
1.	老师很负责,很专业.棒到无法形容!
1.	飞飞老师太棒了，i了i了
1.	vue和原生的js相差太远了,到现在还不怎么适应.....明明原生js学得还可以的,到了vue就懵逼了...
   1.	原生很多东西都太麻烦
      1.	70%  vue
      1.	jquery   10%   jsp   php   jquery 老项目维护  vue
      1.	react   10%   vue
      1.	小程序   10%   vue   
1.	一向不喜欢填反馈 可是看到老师白天课间解bug那么细心,一点没有暴躁的样子,太感动了.晚上还来教室看看大家有没有bug需要解,也太尽职了吧.大家可得记住,老师放弃了晚上接单挣钱的时间,贡献了在了这个班级,一定要给足他面子吖.
   1.	解bug
1.	飞飞国庆去哪里嗨:
   1.	java架构:广州有房有车
1.	石室诗士施史，嗜狮，誓食十狮，氏时时适市，氏视十狮，恃矢势，使是十狮逝世，氏拾是十狮尸，适石室，石室湿，氏使侍拭石室，石室拭，氏始试食十狮尸，食时，始识十狮尸实是十石狮尸，试释是事实 
1.	飞哥,你接活吧,毕业了我们几个弟兄跟着你干6个月,咱们办公地点就设在408公共自习室,一个月给1000吃饭钱斗中!
   1.	57有二同学找到工作   
   1.	14000以上
   1.	4000一个月
   1.	9000左右
1.	每天都是感觉会,可是到自己来就愁眉不展
   1.	北京回来,学的很差,组件这一块都不怎么懂
1.	老师能不能总结一下什么文件夹一般放什么文件,我已经混乱了
1.	飞哥真的太好了！！！！！课堂上 我们很多知识点已经淡忘了，但飞哥还是十分细心的讲解，有的甚至直接把一些点重新讲解，帮助我们回顾，晚自习也来看看我们有没问题需要解决，太赞了！必须要认真学！！！ 飞哥 你是最棒的啊~~~~~！！！
1.	应届生简历包装几年经验合适
   1.	就业老师,
   1.	面试题
      1.	最早去那个公司,录音
      1.	拍照回来了
1.	真不错，加油
1.	什么时候等我忘了你讲的,什么时候我就真正学会了
1.	奈斯 点赞
1.	当一个男孩子凌晨三五点跟你说，我好困啊 其实是在暗示你他好孤独好难过 这时候他需要的不是一句晚安、也不是连麦哄睡 而是猛烈回应激起他心中的涟漪，你就直接回复： 就这？
1.	老师nice
1.	老师相当敬业,讲解也很详细,奈斯!




## 回顾

1. ~~~
   导航守卫 
   前置守卫 
        router.beforeEach((to,form,next)=>{
        to:去的的路由信息
        from :来的路由信息
        next   next()正常通过   
              next(path)不正常通过
        })
   后置守卫 
        router.afterEach((to,from)=>{
        to:去的的路由信息
        from :来的路由信息
        document.title=to.meta.title
        })
   路由元  meta:{
         title:标题
   }
   vuex
      官方说法:共享状态(state)管理 src/store 
         使用:1:装包  npm i vuex
              2:导入:import Vuex from 'vuex'
              3:注册
                 import Vue from 'vue'
                 Vue.use(Vuex)
              4:实例化
                  const store=new Vuex.Store({
                  state:{
                  xxx:123
                  }
                  })
                  暴露出去  export default store
              5:注入到new Vue({store})
                 import store from '@/store'
                 new Vue({store})
              使用:this.$store.state.xxx
        卡片  el-card
        select
              el-select  v-model:双向绑定  
                 el-option   label:文本内容  value:选中该项后的值
         el-form   inline  true:行内  false:块级
         table
            el-table  data:数组数据类类型
               el-table-column  每一列  label:标题  prop="对应该列字段名"                                           width:宽度
           自定义列
               1:在相应列加一个template标签
               2:在template加一个v-slot="scope(局部变量)"
                  scope.$index:索引
                  scope.row:每一行数据
           分页器
              el-pagination
                 :total="总条数"
                 page-size="页容量"
                 :page-sizes:页容量选项[]
                 current-page:默认选中哪一页
                 layout="total,sizes,prev,pager,next,jumper"
                 @size-change:页容量改变
                 @current-change:页码改变
              
                 
            
   
   ~~~
   
   
   

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

## 学科模块 - 数据分页

> 数据越来越多了之后，使用分页器进行分页数据的处理

步骤:

1. 进入页面中之后，数据获取完毕之后，把总数设置到页面上

   1. 进入页面的搜索传入相应的页码信息,同时，获取到的数据总数与分页组件中的total绑定

      ~~~
        created() {
          let _pageInfo = {
            page: this.pagination.currentPage,
            limit: this.pagination.pageSize
          };
          getSubjectData(_pageInfo).then(res => {
            this.tableData = res.data.items;
            this.pagination.total = res.data.pagination.total;
            window.console.log(res);
          });
        },
      ~~~

      

      

2. 切换页码时，数据要同步，同时要执行搜索功能

   1. 先将created中的搜索调用单独封装成一个方法

      ~~~js
        created() {
          this.getData();
        },
        methods: {
          // 获取列表数据
          getData() {
            let _pageInfo = {
              page: this.pagination.currentPage,
              limit: this.pagination.pageSize
            };
            getSubjectData(_pageInfo).then(res => {
              this.tableData = res.data.items;
              this.pagination.total = res.data.pagination.total;
              window.console.log(res);
            });
          },
      ~~~

      

   2. 页面切换时做出页面改变，同时调用搜索接口

   ~~~js
     handleCurrentChange(page) {
      //当前页码改变时的回调
      this.pagination.currentPage = page;
         this.getData();
      window.console.log("当前页面：", page);
     }
   ~~~

   

3. 切换页容量时

   2. 页码回到1
   3. 数据同步

   ~~~js
       handleSizeChange(size) {
         //每页条数改变时回调
         this.pagination.pageSize = size;
         this.pagination.currentPage = 1;
           this.getData();
         window.console.log("每页条数:", size);
       },
   ~~~

   

## 学科模块 - 搜索功能

> 数据越来越多了，想要快速获取到，可以使用搜索功能

步骤：

1. 绑定搜索按钮事件

   ~~~html
      <el-form-item>
             <el-button type="primary" @click="search">搜索</el-button>
             <el-button>清除</el-button>
             <el-button type="primary">+新增学科</el-button>
           </el-form-item>
   ~~~

   

2. 实现搜索事件

   先调整getData方法，将表单数据 整合进去

   ~~~js
       // 获取列表数据
       getData() {
         let _pageInfo = {
           page: this.pagination.currentPage,
           limit: this.pagination.pageSize,
           ...this.form
         };
         window.console.log("页码信息:", _pageInfo);
         getSubjectData(_pageInfo).then(res => {
           this.tableData = res.data.items;
           this.pagination.total = res.data.pagination.total;
           window.console.log(res);
         });
       },
   ~~~

   搜索事件中将页码改成第一页，同时调用数据

   ~~~
       // 搜索事件
       search() {
         this.pagination.currentPage = 1;
         this.getData();
       }
   ~~~

   

## 学科模块 - 清除筛选

> 如果不想要搜索了，可以点击清除，把筛选的条件删除掉，数据要重新获取哦

步骤：

1. 为清空按钮绑定点击事件

   ~~~html
      <el-form-item>
             <el-button type="primary" @click="search">搜索</el-button>
             <el-button @click="resetClick">清除</el-button>
             <el-button type="primary">+新增学科</el-button>
           </el-form-item>
   ~~~

   

   1. 清空表单
   2. 返回第一页
   3. 重新获取数据

   ~~~js
       // 清空
       resetClick() {
         // 还原表单
         this.form = {
           name: "", //学科名字
           rid: "", //学科编号
           username: "", //创建者
           status: "" //状态
         };
         // 返回第一页，执行搜索
         this.search();
       }
   ~~~

   

## 学科模块 - 状态切换

> 点击切换学科的状态，显示的按钮和状态是相反的

步骤:



1. 先将按钮文字进行处理

   ~~~html
   <el-button @click="setStatus(scope)">{{scope.row.status==0?'启用':'禁用'}}</el-button>
   ~~~

   

2. 为 启用，禁用按钮绑定点击事件

   ~~~html
        <el-table-column label="操作" width="300px">
             <template slot-scope="scope">
               <el-button>编辑</el-button>
               <el-button @click="setStatus(scope.row.id)">{{scope.row.status==1?'禁用':"启用"}}</el-button>
               <el-button>删除</el-button>
             </template>
           </el-table-column>
   ~~~

   

3. 定义状态调用api方法

   ~~~js
   import instance from '@/utils/request.js'
   function getSubjectData(params) {
       return instance({
           url: "/subject/list",
           method: "get",
           params
       })
   }
   function setSubjectStatus(data) {
       return instance({
           url: "/subject/status",
           method: "post",
           data
       })
   }
   
   export { getSubjectData, setSubjectStatus }
   ~~~

   

4. 调用接口

   1. 导入接口

      ~~~js
      import { getSubjectData, setSubjectStatus } from "@/api/subject.js";
      ~~~

      

5. 调用接口

   1. 成功，重新获取数据
   2. 失败，提示用户

~~~js
    // 启用禁用切换
    setStatus(id) {
      setSubjectStatus({ id: id }).then(() => {
        this.$message.success("状态设置成功！");
        this.search();
      });
    }
~~~



## 学科模块-序号显示优化

>让序号能真正代码是哪一条数据

来个数学题

已知道页码（当前页），与每页条数，与当前数据序号（从0开始），算出当前数据真实序号（从1开始）？

真实序号=（当前页-1）*每页条数+当前序号（从0开始）+1

~~~html
 <el-table-column label="序号" width="50px">
          <template
            slot-scope="scope"
          >{{(pagination.currentPage-1)*pagination.pageSize+scope.$index+1}}</template>
        </el-table-column>
~~~



## 学科模块 - 删除学科

> 点击删除学科，需要用户的确认哦,如果确定了，那么删除服务器的就好了，本地记得也要重新获取哦

步骤：

1. 删除按钮绑定事件

   ~~~html
           <el-table-column label="操作" width="300px">
             <template slot-scope="scope">
               <el-button>编辑</el-button>
               <el-button @click="statusClick(scope.row.id)">{{scope.row.status==1?'禁用':"启用"}}</el-button>
               <el-button @click="del(scope.row.id)">删除</el-button>
             </template>
           </el-table-column>
   ~~~

2. 定义删除接口api方法

   ~~~js
   function delSubjectData(data) {
       return instance({
           url: "/subject/remove",
           method: "post",
           data
       })
   }
   ~~~

   

3. 弹出对话框 确认

   1. 确定

      1. 调用接口

         1. 导入接口

            ~~~js
            import { getSubjectData, setSubjectStatus,delSubjectData } from "@/api/subject.js";
            ~~~

            

         2. 传递参数

      2. .then

         1. 删除成功
            1. 提示用户
            2. 重新获取数据
         2. 失败：
            1. 提示用户

   2. 取消

      1. 关闭对话框

~~~js
    // 删除按钮点击
    del(id) {
      this.$confirm("你确定要删除该条数据吗", "友情提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        // type: 'error'
        tyle: "warning"
        // type: "success"
      }).then(() => {
        delSubjectData({ id: id }).then(() => {
            //提示删除成功
          this.$message.success("删除成功！");
            //刷新表格数据
          this.search();
        });
      });
    }
~~~



## 学科模块 - 新增框基本功能整合

>先创建一个最基本的弹窗整合进来

~~~
对话框  el-dialog   :visible.sync="控制该对话框是否显示"   width
     slot="title/footer"重写某一块
~~~

1. 创建`/home/subject/addSubject.vue`

   1. 先写一个最基本的新增组件

      ~~~vue
      <template>
        <!-- visible.sync="设置弹框显示与消失" -->
        <el-dialog :visible.sync="dialogFormVisible" width="600px">
          <div slot="footer">
            <el-button @click="dialogFormVisible=false">取消</el-button>
            <el-button type="primary">确定</el-button>
          </div>
        </el-dialog>
      </template>
      <script>
      export default {
        data() {
          return {
            dialogFormVisible: false //设置弹框显示与消失
          };
        }
      };
      </script>
      <style>
      </style>
      ~~~

2. 在学科模块中使用它

   1. 导入，注册，使用

      ~~~html
      导入
      import addSubject from "./addSubject.vue";
      注册
       components: {    addSubject  }
      使用
       <addSubject></addSubject>
      ~~~

      

   1. 点击按钮，先弹出新增组件

      1. 给按钮绑定一个点击事件

         1. ~~~html
            <el-button type="primary" @click="add">+新增学科</el-button>
            ~~~

            

      2. 先在新增组件上定义一个ref

         ~~~html
          <addSubject ref="addSubject"></addSubject>
         ~~~

         

      3. 通过ref修改子组件的显示

      ~~~js
      this.$refs.addSubject.dialogFormVisible = true;
      ~~~

      

## 学科模块-新增框布局

>完成新增框基本布局与表单验证，关闭等基本功能

~~~vue
<template>
  <el-dialog class="subjectAdd" width="600px" :visible.sync="dialogFormVisible">
    <div slot="title" class="title">新增学科</div>
    <el-form label-width="100px" :model="form" :rules="rules" ref="form">
      <el-form-item label="学科编号" prop="rid">
        <el-input v-model="form.rid"></el-input>
      </el-form-item>
      <el-form-item label="学科名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="学科简称" prop="short_name">
        <el-input v-model="form.short_name"></el-input>
      </el-form-item>
      <el-form-item label="学科简介" prop="intro">
        <el-input v-model="form.intro"></el-input>
      </el-form-item>
      <el-form-item label="学科备注" prop="remark">
        <el-input v-model="form.remark"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="footer">
      <el-button @click="dialogFormVisible=false">取消</el-button>
      <el-button type="primary" @click="submitClick">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        rid: "", //学科编号
        name: "", //学科名称
        short_name: "", //学科简称
        intro: "", //学科简介
        remark: "" //备注
      },
      rules: {
        rid: [
          { required: true, message: "请输入学科编号！", trigger: "change" }
        ],
        name: [
          { required: true, message: "请输入学科名称！", trigger: "change" }
        ]
      }
    };
  },
  watch: {
    dialogFormVisible(newVal) {
      if (newVal == false) {
        this.$refs.form.resetFields();
      }
    }
  },
  methods: {
    submitClick() {
      this.$refs.form.submitClick();
    }
  }
};
</script>

<style lang="less">
.subjectAdd {
  .title {
    height: 53px;
    line-height: 53px;
    text-align: center;
    color: #fff;
    background-color: rgb(16, 158, 249);
  }
  .el-dialog__header {
    padding: 0;
  }
  .el-dialog__headerbtn .el-dialog__close {
    color: #fff;
  }
  .el-dialog__headerbtn .el-dialog__close:hover {
    color: red;
  }
  .footer {
    text-align: center;
  }
}
</style>
~~~



## 学科模块 - 数据新增

> 有了新增框，就可以来实现数据的新增了，点击提交，在校验没有问题之后，就可以提交到服务器了哈



步骤:

1. 定义新增接口api方法

   ~~~js
   function addSubjectData(data) {
       return instance({
           url: "/subject/add",
           method: "post",
           data
       })
   }
   ~~~

   

2. 导入新增api方法

   ~~~js
   import { addSubjectData } from "@/api/subject.js";
   ~~~

   

3. 为新增框的确认按钮绑定点击事件

   1. 表单校验
      1. 通过：调用接口
         1. 成功：
            1. 关闭对话框
            2. 本地重新获取数据
         2. 失败：提示用户
      2. 不通关：提示用户

~~~js
    submitClick() {
      this.$refs.form.validate(result => {
        if (result) {
          addSubjectData(this.form).then(() => {
            this.$message.success("新增成功");
            this.dialogFormVisible = false;
            this.$parent.search();
          });
        }
      });
    }
~~~



## 组件传值之props与emit

> 父组件通过 props 向下传递数据给子组件；子组件通过 emit 给父组件发送消息。 

- 父组件传值子组件
  - 在子组件标签上定义一个属性
    - <子组件  :`自定义属性名`=“值”></子组件>
  - 在子组件中接收数据
    - 在props中接收，props放到
      - props:['`自定义属性名`']
    - 使用传递的数据
      - this.`自定义属性名`
  - 注意点：props传递过来的数据是单向数据流，不可修改。
- 子组件调用父组件方法
  - 在子组件上定义一个方法
    - <子组件 @`自定义方法名`=“`父组件方法`”></子组件>
  - 在子组件里调用该方法
    - this.$emit("`自定义方法名`",参数)，这样就会触发`父组件方法`

公有组件使用：你写好一个组件，全公司都来使用，整个项目多次使用

  特别button定义成一个组件，希望全公司使用，最好用props与emit

如果你用ref让别人处理，ref权限太大，它要乱调用乱修改，是可能改出问题  props传值，

如果只是自己模块某个组件，怎么方便怎么来



## 学科模块 - 修改01 - 进入修改

> 编辑框与新增框类似，所以一般这种类似的框都是做在同一个组件里，利于以后维护

步骤:

1. 用prop传参进行区别新增与编辑`mode`，

   ~~~html
   <subjectAdd ref="subjectAdd" :mode="mode" ></subjectAdd>
   //在data中定义mode默认值为"add"
   ~~~

   

2. 同时通过props传递需子组件要编辑的信息

   ~~~html
       <subjectAdd ref="subjectAdd" :mode="mode" :formData="formData"></subjectAdd>
       //在data中定义formData默认值为""
   ~~~

   

3. 根据props传递过来的值的不同进行不同处理

   1. 在新增组件中接收传递过来的数据

      ~~~js
       props: ["mode", "formData"],
      ~~~

      

   2. 用watch监听mode变化 进行不同处理

      当mode变化后，就改变内部表单数据

      ~~~js
          mode(newVal) {
            if (newVal == "add") {
              this.form = {
                rid: "", //学科编号
                name: "", //学科名称
                short_name: "", //学科简称
                intro: "", //学科简介
                remark: "" //备注
              };
            } else {
              this.form = JSON.parse(JSON.stringify(this.formData));
            }
          }
      ~~~

      

4. 新增按钮与编辑按钮点击 时，改变需要传递过去的值

   1. 新增按钮

      1. 新增时修改mode为add

         ~~~js
             // 新增
             add() {
               this.mode = "add";
               this.$refs.subjectAdd.dialogFormVisible = true;
             },
         ~~~

   2. 编辑按钮

      1. 编辑按钮事件绑定

         ~~~html
             <el-table-column label="操作" width="300px">
                   <template slot-scope="scope">
                     <el-button @click="edit(scope.row)">编辑</el-button>
                     <el-button @click="statusClick(scope.row.id)">{{scope.row.status==1?'禁用':"启用"}}</el-button>
                     <el-button @click="del(scope.row.id)">删除</el-button>
                   </template>
                 </el-table-column>
         ~~~

         

      2. 编辑事件

         ~~~js
             // 编辑
             edit(scope) {
               this.mode = "edit_" + Date.now();
               this.formData = scope;
               this.$refs.subjectAdd.dialogFormVisible = true;
             }
         ~~~

         

            



## 学科模块 - 修改02 -保存修改

> 当数据的修改没有问题之后，用户点击保存，我们就需要保存这次更改了哦

保存时为二种情况

- mode为add时，调用新增接口

- mode为edit时调用编辑接口

  - 先在相应api中定义编辑的api方法

    ~~~js
    function editSubjectData(data) {
        return instance({
            url: "/subject/edit",
            method: "post",
            data
        })
    }
    ~~~

    

  - 在编辑弹框里导入相应编辑api方法

    ~~~js
    import { addSubjectData, editSubjectData } from "@/api/subject.js";
    ~~~

    

  - 调用相应api方法并传递相应表单值

    ~~~js
    submitClick() {
      this.$refs.form.validate(result => {
        if (result) {
          if (this.mode === "add") {
            addSubjectData(this.form).then(() => {
              this.$message.success("新增成功");
              this.dialogFormVisible = false;
              this.$parent.search();
            });
          } else {
            editSubjectData(this.form).then(() => {
              this.$message.success("编辑成功");
              this.dialogFormVisible = false;
              this.$parent.search();
            });
          }
        }
      });
    }
    ~~~



## 补充：深度克隆

原始值:string   number boolean  undefined  null 

​        存储在栈

引用值  function object array

​        存储在堆



~~~
let a=10
let b=a
   b=20
   a=?  a=10
let a1={xxx:10}
let b1=a1
   a1.xxx=20
   b1.xxx=?   //20





~~~



## 题库模块 - 顶部布局

> 顶部的布局和之前的类似，咱们将他弄出来

步骤:

1. 使用`el-card`作为容器

2. 使用`el-row`与`el-col`进行栅栏布局 

3. 结合设计图设置文本标记

4. 表单元素参数绑定结合接口传参命名

   ![image-20200328231026646](day06 - 黑马面面.assets/image-20200328231026646.png)

```vue
<template>
  <div class="question">
    <el-card>
      <el-form label-width="60px" :model="form">
        <el-row>
          <el-col :span="5">
            <el-form-item label="学科">
              <el-select v-model="form.subject" placeholder="请选择学科">
                <el-option label="学科1"></el-option>
                <el-option label="学科2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="阶段">
              <el-select v-model="form.step" placeholder="请选择阶段">
                <el-option :value="1" label="初级"></el-option>
                <el-option :value="2" label="中级"></el-option>
                <el-option :value="3" label="高级"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="企业">
              <el-select v-model="form.enterprise" placeholder="请选择企业">
                <el-option label="企业1"></el-option>
                <el-option label="企业2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="题型">
              <el-select v-model="form.type" placeholder="请选择题型">
                <el-option :value="1" label="单选"></el-option>
                <el-option :value="2" label="多选"></el-option>
                <el-option :value="3" label="简答"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="5">
            <el-form-item label="难度">
              <el-select v-model="form.diffculty" placeholder="请选择难度">
                <el-option label="简单" :value="1"></el-option>
                <el-option label="一般" :value="2"></el-option>
                <el-option label="困难" :value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="作者">
              <el-input v-model="form.username"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="状态">
              <el-select v-model="form.status" placeholder="请选择状态">
                <el-option label="禁用" :value="0"></el-option>
                <el-option label="启用" :value="1"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="日期">
              <el-input v-model="form.create_date" placeholder="请选择日期"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="标题">
              <el-input v-model="form.title"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label-width="0px">
              <el-button class="btn" type="primary">搜索</el-button>
              <el-button>清除</el-button>
              <el-button type="primary">+新增试题</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        subject: "", //学科
        step: "", //阶段
        enterprise: "", //企业
        type: "", //题型
        diffculty: "", //难度
        username: "", //作者
        status: "", //状态,
        create_date: "", //日期
        title: "" //标题
      }
    };
  }
};
</script>
<style lang="less">
.question {
  .btn {
    margin-left: 20px;
  }
}
</style>

```



## Element - ui - 日期选择器

>日期的选择不是下拉框了，使用的是日期选择器，如何使用呢，我们来研究一下

[传送门](https://element.eleme.cn/#/zh-CN/component/date-picker)

```html
<body>
    <!-- 挂载的元素 -->
    <div id="app">
        <el-date-picker v-model="value1" type="date" placeholder="选择日期">
        </el-date-picker>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <!-- 引入组件库 -->
    <script src="https://unpkg.com/element-ui/lib/index.js"></script>
    <script>
        const app = new Vue({
            el: "#app",
            data:{
                value1:""
            }
        })
    </script>

</body>
```



## 题库模块 - 日期选择器整合

> 将刚刚的日期选择器整合到页面的顶部

步骤:

1. 整合日期选择器，设置日期选择器相关联的数据属性即可

~~~html
           <el-form-item label="日期">
              <el-date-picker v-model="form.create_date" placeholder="请选择日期"></el-date-picker>
            </el-form-item>
~~~

