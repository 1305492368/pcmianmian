<template>
  <div class="login">
    <div class="left">
      <!-- 标题栏 -->
      <div class="header">
        <img class="t1" src="@/assets/img/login_logo.png" alt="" />
        <span class="t2">黑马面面</span>
        <div class="t3"></div>
        <span class="t4">用户登陆</span>
      </div>
      <!-- 表单
      el-form
           model:数据绑定(对象)
           label-width:标题宽度
        el-form-item  label:标题名

        el-input   v-model    prefix-icon:图标名(来自于element的icon)  show-password:true:密码模式 false:普通 模式

        el-row :行   el-col  :span="栏数(一行24栏)"

        el-checkbox   v-model:双向绑定      label:选中该项后的值
            v-model:双向绑定 它的值是数组  label就可以使用  选中该项后它的值会push(label的值)
                             它的值不是数组    label就无效  选中该项后它的值为true 取消就是false
        el-link  type="primary"    
        el-button type="primary" 

     表单验证:
         1:在el-form上绑定  model   rules   
         2:在el-form-item 绑定prop: 验证项的字段名
           rules:{
             prop值:[
             值不是空  undefined  ""   []  
             {required:true,message:"错误信息",trigger:"blur/change"},
             {min:最小长度,max:最大长度,message:"错误信息",trigger:"blur/change"}
             ]
           }
        全局表单验证
            1:el-form   model   rules   ref
            2:调用el-form 的validate
                this.$refs.ref值.validate((result)=>{
                  result:true:验证通过
                  false:验证失败
                })
          重置  this.$refs.ref值.resetFields()


       -->
      <el-form
        class="form"
        :model="form"
        :rules="rules"
        ref="form"
        label-width="0px"
      >
        <el-form-item prop="phone">
          <el-input
            placeholder="请输入手机号"
            v-model="form.phone"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="请输入密码"
            v-model="form.password"
            prefix-icon="el-icon-lock"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-row>
            <el-col :span="16">
              <el-input
                placeholder="请输入验证码"
                v-model="form.code"
                prefix-icon="el-icon-key"
              ></el-input>
            </el-col>
            <el-col :span="8">
              <img
                class="code-img"
                @click="refreshCode"
                :src="codeUrl"
                alt=""
              />
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item prop="isPass">
        
          <el-checkbox v-model="form.isPass" :label="true"
            >我已阅读并同意<el-link type="primary">用户协议</el-link>和<el-link
              type="primary"
              >隐私条款</el-link
            ></el-checkbox
          >
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn" @click="login">登陆</el-button>
          <div></div>
          <el-button type="primary" class="btn m26" @click="showRegister"
            >注册</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <img src="@/assets/img/login_banner_ele.png" alt="" />
    <register ref="register"></register>
  </div>
</template>
<script>
// 组件套用组件  1:导入   2:注册   3:当标签使用
import { toLogin } from '@/api/login.js'
import register from './register'
import { saveLocal, getLocal } from '@/utils/local.js'
export default {
  components: {
    register
  },
  // data中的变量不能互相使用
  data () {
    return {
      codeUrl: process.env.VUE_APP_URL + '/captcha?type=login',
      form: {
        phone: '', //是	string	手机号
        password: '', //是	string	密码
        code: '', //是	string	验证码
        isPass: []
      },
      // 验证规则
      rules: {
        phone: [
          // 必填实际 是非空验证  ""  []  undefined
          { required: true, message: '请输入手机号', trigger: 'change' },
          {
            validator: (rule, value, callback) => {
              const _reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
              if (_reg.test(value)) {
                callback()
              } else {
                callback(new Error('请正确输入手机号'))
              }
            },
            trigger: 'change'
          }
        ], //是	string	手机号
        password: [
          { required: true, message: '请输入密码', trigger: 'change' },
          // {
          //   min: 6,
          //   max: 12,
          //   message: '请输入6-12位密码',
          //   trigger: 'change'
          // }
        ], //是	string	密码
        code: [
          { required: true, message: '请输入验证码', trigger: 'change' },
          {
            min: 4,
            max: 4,
            message: '请输入正确验证码'
          }
        ], //是	string	验证码
        isPass: [{ required: true, message: '请勾选协议', trigger: 'change' }]
      }
    }
  },
  created () {
    // if(已登陆(有token)){
    //   跳转至layout  this.$router.push("/layout")
    // }

    if (getLocal()) {
      this.$router.push('/layout')
    }
  },
  methods: {
    // 已登陆用户,直接跳转到layout
    // 登录
    login () {
      this.$refs.form.validate(result => {
        if (result) {
          toLogin(this.form).then(res => {
            this.$message.success('登陆成功')
            // 1:cookie主动参与接口请求,容易 让别人拿到,2:它没有相应方法,都得自己封装
            // window.localStorage.setItem('token', res.data.data.token)
            saveLocal(res.data.data.token)
            // 登陆成功后跳转到layout
            this.$router.push('/layout')
            window.console.log('登陆返回信息:', res)
          })
        } else {
          this.$message.error('验证失败')
        }
      })
    },
    // 注册
    showRegister () {
      // 父传子  1:在子组件标签定义一个ref  2:获取子组件this===this.$refs.ref值
      this.$refs.register.isShow = true
    },
    // 刷新图形码
    refreshCode () {
      this.codeUrl =
        process.env.VUE_APP_URL + '/captcha?type=login&dfhdfh=' + Date.now()
    }
  }
}
</script>
<style lang="less">
.login {
  height: 100%;
  background: linear-gradient(#1493fa 28%, #01c6fa 96%);
  display: flex;
  //   上下居中
  align-items: center;
  justify-content: space-around;
  .left {
    width: 478px;
    height: 550px;
    background: #f5f5f5;
    padding: 44px 42px;
    .header {
      display: flex;
      //   上下居中
      align-items: center;
      .t1 {
        width: 25px;
      }
      .t2 {
        font-size: 24px;
        font-family: SourceHanSansCN Regular, SourceHanSansCN Regular-Regular;
        font-weight: 400;
        text-align: left;
        color: #0c0c0c;
        margin-left: 13px;
        margin-right: 13px;
      }
      .t3 {
        width: 1px;
        height: 28px;
        background: #c7c7c7;
        margin-right: 13px;
      }
      .t4 {
        font-size: 22px;
        font-family: PingFangSC Regular, PingFangSC Regular-Regular;
        font-weight: 400;
        text-align: left;
        color: #0c0c0c;
      }
    }
    // form
    .form {
      margin-top: 31px;
      .code-img {
        width: 100%;
        height: 40px;
      }
      .btn {
        width: 100%;
      }
      .m26 {
        margin-top: 26px;
      }
    }
  }
}
</style>
