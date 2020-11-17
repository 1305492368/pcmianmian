<template>
  <!-- dialog
  el-dialog  visible:控制是否显示   width:设置宽度   show-close:是否显示关闭
  如果希望点击关闭按钮能使用，visible.sync
     slot="title/footer"   
 -->
  <!-- 表单验证
   1:el-form  model  rules
   2:在需要验证的每一项加一个prop:需要验证的值的key
   3:
   写验证规则   rules:{
          prop值:[
          {required:true,message:"错误信息",trigger:"blur/change"},
          {min:最小长度,max:"最大长度",message:"错误信息",trigger:"blur/change"},
          {validator:(rule,value,callback)=>{
              rule:规则
              value:当前验证项的值
              callback:验证通过 callback()  验证不通过  callback(new Error("错误信息"))
          }}
          ]
   }
   全局触发验证：
     1：在el-form上加一个ref
     2:访问el-form的this   this.$refs.ref值.validate(result=>{
         true:验证通过
         false:验证失败
     }) 
 
  -->
  <el-dialog
    :visible.sync="isShow"
    :rules="rules"
    width="600px"
    class="businessAdd"
  >
    <div slot="title" class="title">新增学科</div>
    <el-form :model="form" :rules="rules" label-width="120px" ref="form">
      <el-form-item prop="eid" label="企业编号">
        <el-input v-model="form.eid"></el-input>
      </el-form-item>
      <el-form-item prop="name" label="企业名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="short_name" label="企业简称">
        <el-input v-model="form.short_name"></el-input>
      </el-form-item>
      <el-form-item prop="intro" label="企业简介">
        <el-input v-model="form.intro"></el-input>
      </el-form-item>
      <el-form-item prop="remark" label="备注">
        <el-input v-model="form.remark"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="footer">
      <el-button @click="isShow = false">取消</el-button>
      <el-button type="primary" @click="submit">确定</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { addBusiness, editBusiness } from '@/api/business.js'
export default {
  // 关闭弹窗口时，需要清理表单数据
  /*
    watch:侦听器（某个值（通过this访问的值）的change事件）
    定义  watch:{
        写出该值，去掉this,加上引号(newVal,oldVal){
            newVal:当前值 
            oldVal:上一刻的值
        }
    }
    
    */
  props: ['modeSon'],
  watch: {
    isShow (newVal) {
      if (newVal === false) {
        //清理表单
        this.form = {
          eid: '', //string	企业编号
          name: '', //string	企业名称
          short_name: '', //string	简称
          intro: '', //string	企业简介
          remark: '' //string	备注
        }
        this.$nextTick(() => {
          this.$refs.form.clearValidate()
        })
        // this.$refs.form.resetFields()
      }
    }
  },
  data () {
    return {
      isShow: false,
      form: {
        eid: '', //string	企业编号
        name: '', //string	企业名称
        short_name: '', //string	简称
        intro: '', //string	企业简介
        remark: '' //string	备注
      },
      rules: {
        eid: [{ required: true, message: '请输入企业编号', trigger: 'change' }],
        name: [
          { required: true, message: '请输入企业名称', trigger: 'change' }
        ],
        short_name: [
          { required: true, message: '请输入企业简称', trigger: 'change' }
        ],
        intro: [
          { required: true, message: '请输入企业简介', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submit () {
      this.$refs.form.validate(result => {
        if (result) {
          if (this.modeSon == 'edit') {
            editBusiness(this.form).then(() => {
              this.$message.success('编辑成功')
              //关闭弹窗口
              this.isShow = false
              this.$parent.search()
            })
          } else {
            addBusiness(this.form).then(() => {
              this.$message.success('添加成功')
              //关闭弹窗口
              this.isShow = false
              //子调用父的search方法
              // this.$parent===父级this
              this.$parent.search()
            })
          }
          //确定一下是处于编辑还是处于新增
        } else {
          this.$message.error('验证失败')
        }
      })
    }
  }
}
</script>
<style lang="less">
.businessAdd {
  .el-dialog__header {
    padding: 0;
  }
  .el-dialog__headerbtn .el-dialog__close {
    color: #fff;
  }
  .title {
    height: 53px;
    text-align: center;
    line-height: 53px;
    color: #fff;
    background: linear-gradient(to right, #01c5fa, #1394fa);
  }
  .footer {
    text-align: center;
  }
}
</style>
