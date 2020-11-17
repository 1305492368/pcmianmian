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
          {requiredd:true,message:"错误信息",trigger:"blur/change"},
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
    class="userListAdd"
  >
    <div slot="title" class="title">新增学科</div>
    <el-form :model="form" :rules="rules" label-width="120px" ref="form">
      <el-form-item prop="username" label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item prop="email" label="邮箱">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item prop="phone" label="电话">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item prop="role_id" label="角色">
        <el-select v-model="form.role_id">
          <el-option
            v-for="(value, key, index) in roleObj"
            :key="index"
            :label="value"
            :value="+key"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="status" label="状态">
        <el-select v-model="form.status">
          <el-option label="启用" :value="1"></el-option>
          <el-option label="禁用" :value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="remark" label="用户备注">
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
import { addUserList, editUserList } from '@/api/user.js'
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
  props: ['modeSon', 'roleObj'],
  watch: {
    isShow (newVal) {
      if (newVal === false) {
        //清理表单
        this.form = {
          username: '', //string	用户名
          email: '', //string	邮箱
          phone: '', //string	手机号
          role_id: '', //string	角色 、2 管理员、3 老师、4 学生
          status: '', //string	1(启用)0(禁用)
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
        username: '', //string	用户名
        email: '', //string	邮箱
        phone: '', //string	手机号
        role_id: '', //string	角色 、2 管理员、3 老师、4 学生
        status: '', //string	1(启用)0(禁用)
        remark: '' //string	备注
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'change' }
        ], //string	用户名
        email: [
          { required: true, message: '请输入邮箱', trigger: 'change' },
          {
            validator: (rule, value, callback) => {
              // rule:规则   value:当前验证项的值  callback:验证通过  callback()  验证不通过  callback(new Error("错误信息"))
              let _reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
              if (_reg.test(value)) {
                callback()
              } else {
                callback(new Error('请正确输入邮箱地址'))
              }
            },
            trigger: 'change'
          }
        ], //string	邮箱
        phone: [
          { required: true, message: '请输入手机号', trigger: 'change' },
          {
            validator: (rule, value, callback) => {
              let _reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
              if (_reg.test(value)) {
                callback()
              } else {
                callback(new Error('请正确输入手机'))
              }
            }
          }
        ], //string	手机号
        role_id: [{ required: true, message: '请选择角色', trigger: 'change' }], //string	角色 、2 管理员、3 老师、4 学生
        status: [{ required: true, message: '请选择状态', trigger: 'change' }] //string	1(启用)0(禁用)
      }
    }
  },
  methods: {
    submit () {
      this.$refs.form.validate(result => {
        if (result) {
          if (this.modeSon == 'edit') {
            editUserList(this.form).then(() => {
              this.$message.success('编辑成功')
              //关闭弹窗口
              this.isShow = false
              //   子触发父方法   1：在子组件标签定义一个方法  @子组件方法名="父组件方法名" 2:触发，子组件 this.$emit("子组件方法名")
              this.$emit('sonSearch')
            })
          } else {
            addUserList(this.form).then(() => {
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
.userListAdd {
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
