<template>
  <!-- dialog
  el-dialog  visible.sync="boolean控制是否显示弹框"    width宽度  title标题  show-close:是否显示关闭按钮
      slot="title/footer"

      div slot="title"
      template #title
        相应处理
 -->
  <el-dialog :visible.sync="isShow" width="600px" class="subjectAdd">
    <template #title>
      <div class="title">
        {{ mode === 'add' ? '新增学科' : '编辑学科' }}
      </div>
    </template>
    <!-- 表单
     el-form  model:数据绑定   label-width   rules:规则   ref
       el-form-item   label:标题   prop="绑定相应的字段名"
       rules:{
           prop值:[
           ""  []  undefined
           {required:true,message:错误信息,trigger:"change/blur"},
           {min:"最小长度",max:最大长度,message:"错误信息",trigger:"blur/change"},
           {validator:(rule,value,callback)=>{
               rule:规则,
               value:当前项的值,
               callback:正常通过callback)(
                        不通过  callback(new Error(错误信息 ))
               )
           }}
           ]
       }
  全局表单验证
     el-form  model   rules    ref
        el-form-item   prop
    this.$refs.ref值.validate((reulst)=>{
        true:验证通过
        false:验证失败
    })
   局部验证
         el-form  model   rules    ref
        el-form-item   prop
        this.$refs.ref值.validateField(["prop值"],errorMessage=>{
            errorMessage==""   验证通过
                        !==""  验证失败
          注意:前面数组有多长,它就执行多少次
        })
   重置表单
     el-form  model   rules    ref
        el-form-item   prop
        this.$refs.ref值.resetFields()
      -->
    <!-- dialog该组件在第一次渲染时,它根本没有渲染form表单,model绑定的form数据根本没使用
      form表单的渲染是在isShow=true的时候,这时候才开始使用form的数据
      还原表单数据:还原form表单的值为初始值(第一次使用的值)
       -->
    <el-form :model="form" label-width="80px" :rules="rules" ref="form">
      <el-form-item prop="rid" label="学科编号">
        <el-input v-model="form.rid"></el-input>
      </el-form-item>
      <el-form-item prop="name" label="学科名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="short_name" label="学科简称">
        <el-input v-model="form.short_name"></el-input>
      </el-form-item>
      <el-form-item prop="intro" label="学科简介">
        <el-input v-model="form.intro"></el-input>
      </el-form-item>
      <el-form-item prop="remark" label="学科备注">
        <el-input v-model="form.remark"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="submit">确定</el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script>
import { toSubjectAdd, subjectEdit } from '@/api/subject.js'
export default {
  data () {
    return {
      mode: 'add', //mode=add表示 新增    edit表示编辑
      isShow: false,
      form: {
        rid: '', //	是	string	学科编号
        name: '', //	是	string	学科名称
        short_name: '', //	否	string	学科简称
        intro: '', //	否	string	学科简介
        remark: '' //	否	string	备注
      },
      rules: {
        rid: [{ required: true, message: '请输入学科编号', trigger: 'change' }], //	是	string	学科编号
        name: [{ required: true, message: '请输入学科名称', trigger: 'change' }] //	是	string	学科名称
      }
    }
  },
  /*
    侦听器:某个值(能通过this访问的)的change事件
   定义:  watch(data兄弟):{
     本质就是一个function
     方法名(1:完整写出该值2:去掉this.加上引号)(newVal,oldVal){
     newVal:当前值
     oldVal:上一刻的值
     }
     }

   */
  watch: {
    isShow (newVal) {
      if (newVal === false) {
        //   重置表单
        // 只是重置表单中使用的数据
        this.form = {
          rid: '', //	是	string	学科编号
          name: '', //	是	string	学科名称
          short_name: '', //	否	string	学科简称
          intro: '', //	否	string	学科简介
          remark: '' //	否	string	备注
        }
        // this.$refs.form.resetFields()
        // nextTick它就是setTimeout高级版本,它会在它前面的数据渲染完成后执行
        this.$nextTick(() => {
          this.$refs.form.clearValidate()
        })
        // this.$refs.form.clearValidate()
      }
    }
  },

  methods: {
    submit () {
      this.$refs.form.validate(result => {
        if (result) {
          // 新增
          if (this.mode === 'add') {
            toSubjectAdd(this.form).then(() => {
              // 提示一下,关闭弹窗口
              this.$message.success('新增成功')
              this.isShow = false
              // 刷新父组件的学科列表
              // this.$parent根本不是subject.vue
              this.$parent.search()
            })
          } else {
            //编辑
            subjectEdit(this.form).then(() => {
              this.$message.success('编辑成功')
              this.isShow = false
              this.$parent.getData()
            })
          }
        } else {
          this.$message.error('验证失败')
        }
      })
    }
  }
}
</script>
<style lang="less">
.subjectAdd {
  .title {
    height: 53px;
    line-height: 53px;
    background: linear-gradient(to right, #01c4fa, #1294fa);
    text-align: center;
    color: #fff;
  }
  .footer {
    text-align: center;
  }
  .el-dialog__header {
    padding: 0;
  }
  .el-dialog__headerbtn .el-dialog__close {
    color: #fff;
  }
}
</style>
