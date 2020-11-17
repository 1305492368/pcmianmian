<template>
  <div class="subject">
    <!-- el-card:卡片 -->
    <el-card>
      <!-- 表单
   el-form   model:数据绑定   rules:规则   label-width:标题宽度  inline  true:行内  false块级
      el-form-item  label:标题   prop:对应项的值的字段名
  rules:{
    prop值:[{required:true,message:"错误信息",trigger:"change/blur"},
    {min:最=小长度,max:最大长度,message:"错误信息",trigger:"change/blur"},
    validator:(rule,value,callback)=>{
      rule:规则
      value:当前项的值
      callback  验证通过  callback()
               验证失败   callback(new Error("错误信息"))
    }
    ]
    全局验证
    1:el-form  model   rules   ref
       el-form-item   prop
    2:this.$refs.ref值.validate((result)=>{
      true:验证通过
      false:验证失败
    })
    局部验证
    this.$refs.ref值.validateField(["prop值"],(errorMessage)=>{
      errorMessage==""  验证通过
                  !==""  验证不通过
    })
    重置表单
    el-form  model   ref
      el-form-item  prop
     this.$refs.ref值.resetFields()
  }


 -->

      <el-form :model="form" inline ref="form">
        <el-form-item label="学科编号" prop="rid">
          <el-input v-model="form.rid" class="w150"></el-input>
        </el-form-item>
        <el-form-item label="学科名称" prop="name">
          <el-input v-model="form.name" class="w150"></el-input>
        </el-form-item>
        <el-form-item label="创建者" prop="username">
          <el-input v-model="form.username" class="w150"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="form.status">
            <el-option label="禁用" value="0"></el-option>
            <el-option label="启用" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">搜索</el-button>
          <el-button @click="reset">清除</el-button>
          <el-button
            type="primary"
            @click="add"
            v-if="$store.state.role != '学生'"
            >+新增学科</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
    <!-- table表格
        el-table  data:数据绑定(类型一定要是数组)
          el-table-column  表格每一列   prop:绑定当前列对应的字段名  label:当前列标题    width:宽度 

      自定义列:
           1:在需要自定义的列里面加一个template  
           2:在template标签上加一个  v-slot="scope(局部变量,只能用于template标签内)"
             scope:  scope.$index:序号       可以理解 成v-for  的index  
                     scope.row:每一行的数据  可以理解 成v-for内的item
            v-for="(item,index) in 数组"  item
       -->
    <el-card>
      <el-table :data="list">
        <el-table-column label="序号" width="60px">
          <template v-slot="scope">
            {{
              pagination.pageSize * (pagination.currentPage - 1) +
                scope.$index +
                1
            }}
          </template>
        </el-table-column>
        <el-table-column label="学科编号" prop="rid"> </el-table-column>
        <el-table-column label="学科名称" prop="name"> </el-table-column>
        <el-table-column label="学科简称" prop="short_name"> </el-table-column>
        <el-table-column label="创建者" prop="username"> </el-table-column>
        <el-table-column label="创建日期" prop="create_time"> </el-table-column>
        <el-table-column label="状态" prop="status" width="100px">
          <template v-slot="scope">
            <span :class="{ red: scope.row.status == 0 }">{{
              scope.row.status == 0 ? '禁用' : '启用'
            }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" v-if="$store.state.role != '学生'">
          <template v-slot="scope">
            <el-button type="text" @click="edit(scope.row)">编辑</el-button>
            <el-button type="text" @click="setStatus(scope.row.id)">{{
              scope.row.status == 1 ? '禁用' : '启用'
            }}</el-button>
            <el-button
              type="text"
              @click="del(scope.row.id)"
              v-if="$store.state.role != '老师'"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          :total="pagination.total"
          :page-sizes="pagination.sizes"
          :page-size="pagination.pageSize"
          :current-page="pagination.currentPage"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="sizeChange"
          @current-change="currentChange"
        ></el-pagination>
      </div>
    </el-card>
    <subjectAdd ref="subjectAdd"></subjectAdd>
  </div>
</template>
<script>
// 组件套用组件  1:导入   2:注册   3:当标签使用
import subjectAdd from './subjectAdd'
import { subjectList, subjectStatus, subjectRemove } from '@/api/subject.js'
export default {
  components: {
    subjectAdd
  },
  data () {
    return {
      pagination: {
        total: 20,
        sizes: [1, 5, 10, 30],
        pageSize: 1, //默认页容量
        currentPage: 1 //默认页码
      },
      form: {
        rid: '', //否	string	学科编号
        name: '', //否	string	学科名称
        username: '', //否	string	创建者用户名
        status: '', //否	string	状态 0(禁用) 1(启用)
        page: '', //否	string	页码 默认为1
        limit: '' //否	string	页尺寸 默认为10
      },
      // form2: {
      //   rid: '', //否	string	学科编号
      //   name: '', //否	string	学科名称
      //   username: '', //否	string	创建者用户名
      //   status: '', //否	string	状态 0(禁用) 1(启用)
      //   page: '', //否	string	页码 默认为1
      //   limit: '' //否	string	页尺寸 默认为10
      // },
      list: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      // if (bol) {
      //   this.form2 = {
      //     ...this.form
      //   }
      // }
      let _query = {
        ...this.form,
        page: this.pagination.currentPage,
        limit: this.pagination.pageSize
      }
      subjectList(_query).then(res => {
        this.list = res.data.data.items
        this.pagination.total = res.data.data.pagination.total
        window.console.log('学科列表数据:', res)
      })
    },
    // 搜索
    search () {
      this.pagination.currentPage = 1
      this.getData()
    },
    // 状态设置
    setStatus (idxxx) {
      subjectStatus({ id: idxxx }).then(() => {
        // 能进入.then一定是成功
        // 提示一下
        this.$message.success('状态修改成功')
        // 刷新列表数据
        this.getData()
      })
    },
    // 新增
    add () {
      // 打开弹框  修改subjectAdd组件内的isShow=true
      //父传子:1:在子组件标签定义ref  2:获取子组件this===this.$refs.ref值
      this.$refs.subjectAdd.mode = 'add'
      this.$refs.subjectAdd.isShow = true
    },
    // 编辑
    edit (row) {
      window.console.log(row)
      //先弹出一个框
      this.$refs.subjectAdd.isShow = true
      // 将row数据给到subjectAdd的form
      this.$refs.subjectAdd.mode = 'edit'
      this.$refs.subjectAdd.form = JSON.parse(JSON.stringify(row))
    },
    // 删除
    del (id) {
      //  提示一下
      /*   confirm
  this.$confirm("内容","标题",{
    confirmButtonText:确定按钮文本,
    cancelButtonText:"取消按钮文本",
    type:"info/success/error/warning"
  }).then(()=>{
    //点击确定后的处理
  }).catch(()=>{
    //点击取消后的处理
  })
  
  */
      this.$confirm('您确定删除此学科吗?', '提示', {
        confirmButtonText: '确定删除',
        cancelButtonText: '点错了',
        type: 'warning'
      })
        .then(() => {
          //点击确定后的处理
          subjectRemove({ id }).then(() => {
            // 提示一下
            this.$message.success('删除成功')
            // 刷新列表
            this.search()
          })
        })
        .catch(() => {
          //点击取消后的处理
        })
    },
    reset () {
      this.$refs.form.resetFields()
      // this.form2 = {
      //   rid: '', //否	string	学科编号
      //   name: '', //否	string	学科名称
      //   username: '', //否	string	创建者用户名
      //   status: '', //否	string	状态 0(禁用) 1(启用)
      //   page: '', //否	string	页码 默认为1
      //   limit: '' //否	string	页尺寸 默认为10
      // }
    },
    // 页容量改变
    sizeChange (size) {
      window.console.log(size)
      this.pagination.pageSize = size
      this.pagination.currentPage = 1
      this.getData()
    },
    // 页码改变
    currentChange (page) {
      window.console.log('当前页码:', page)
      window.console.log('默认页码:', this.pagination.currentPage)
      // 页码改变时数据一起动
      //1:默认页码的值要是当前页码
      // this.$refs.form.resetFields()
      this.pagination.currentPage = page

      //调用接口获取列表数据
      this.getData()
    }
  }
}
</script>
<style lang="less">
.subject {
  .w150 {
    width: 150px;
  }
  .pagination {
    text-align: center;
    padding: 20px 0 0;
  }
  .red {
    color: red;
  }
}
</style>
