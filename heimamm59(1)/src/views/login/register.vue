<template>
  <!-- 
     对话框 dialog   
     el-dialog
         title:标题
         visible.sync="boolean"  true:显示dialog   false:不显示
         width:宽度
         show-close:是否显示关闭按钮  true:显示  false:不显示
         slot="title/footer"  重写这二部分
           template #title
               在template内写内容
     -->
  <el-dialog
    title="用户注册"
    :visible.sync="isShow"
    width="600px"
    :show-close="false"
    class="register"
  >
    <template #title>
      <div class="title">
        用户注册
      </div>
    </template>
    <div slot="footer" class="footer">
      <el-button @click="isShow = false">取消</el-button>
      <el-button type="primary" @click="submit">确定</el-button>
    </div>
    <!-- 表单验证
        1:el-form :  model   rules   ref
            el-form-item   prop
        rules:{
            prop值:[
            {required:true,message:"错误信息",trigger:"change/blur"},{
                min:最小长度,max:最大长度,message:"错误信息",trigger:"change/blur"
            }
            ]
        }
        全局表单验证
            1:el-form  model  rules  ref
            2:el-form-item   prop
            3:this.$refs.ref值.validate((result)=>{
                true:验证通过
                false验证失败
            })

     自定义表单验证
             rules:{
            prop值:[
            {required:true,message:"错误信息",trigger:"change/blur"},{
                min:最小长度,max:最大长度,message:"错误信息",trigger:"change/blur"
            },{
                validator:(rule,value,callback)=>{
                    rule:当前规则
                    value:当前验证项的值
                    callback:验证通过  callback()
                            验证不通过  callback(new Error("错误信息"))
                注意验证通过一定要callback()   验证不通过  callback(new Error("错误信息")) 
                },
                trigger:"change/blur"
            }
            ]
        }


     -->

    <el-form :model="form" :rules="rules" label-width="100px" ref="form">
      <el-form-item label="头像" class="upload-avatar" prop="avatar">
        <!-- 上传组件 el-upload
                  action:上传接口地址
                  name:上传文件对应的参数名
                  show-file-list:true:显示列表 false:不显示列表
                  before-upload:上传前  function(file){file.type:文件类型  file.size:文件大小
                           用于上传前文件类型与大小限制 
                           return boolean值  
                                 true:正常上传
                                 false:中止上传
                         }
                 on-success:上传成功处理 function(res,file){
                      res:上传成功后接口返回值
                      file: file.response:等效于res
                            file.raw:文件的file对象
                       }

  

           -->

        <el-upload
          class="avatar-uploader"
          :action="baseUrl + '/uploads'"
          name="image"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img
            v-if="form.avatar"
            :src="baseUrl + '/' + form.avatar"
            class="avatar"
          />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item prop="username" label="昵称">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item prop="email" label="邮箱">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item prop="phone" label="手机">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item prop="code" label="图形码">
        <!-- 
              el-row行
                  el-col 列   :span="占多少栏(一行是24)"   offset:向右偏移多少栏,它偏移也算在24栏内
           -->
        <el-row>
          <el-col :span="15">
            <el-input v-model="form.code"></el-input>
          </el-col>
          <el-col :span="8" :offset="1">
            <img
              class="code-img"
              :src="baseUrl + codeImgUrl"
              @click="changeCode"
              alt=""
            />
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="验证码" prop="rcode">
        <el-row>
          <el-col :span="15">
            <el-input v-model="form.rcode"></el-input>
          </el-col>
          <el-col :span="8" :offset="1">
            <!-- 
              倒计时过程中不能让按钮可以点击
              disabled:boolean值
                true:表示 不能点击
                falsse:可以点击           
             -->
            <el-button class="btn" :disabled="totalTime != 6" @click="getRcode"
              >获取用户验证码<span v-if="totalTime != 6"
                >({{ totalTime }}s)</span
              ></el-button
            >
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
// 使用axios   1:装包  npm i axios  2:导入   import axios from 'axios'  3:用包
import { getCodeApi, toRegister } from '@/api/register.js' //{getCodeApi,test} =  { getCodeApi,test }
export default {
  //  关闭窗口时(isShow=false),重置表单数据
  watch: {
    isShow (newVal) {
      if (newVal == false) {
        //重置表单  :访问el-form的this,调用它的resetFields方法
        this.$refs.form.resetFields()
      }
    }
  },
  data () {
    return {
      totalTime: 6,
      isShow: false, // 是否显示对话框
      codeImgUrl: '/captcha?type=sendsms', //图形码地址
      form: {
        avatar: '', //是	string	头像地址
        username: '', //是	string	用户名
        email: '', //是	string	邮箱
        phone: '', //是	string	手机号
        password: '', //是	string	密码
        code: '', //图形码
        rcode: '' //是	string	验证码
      },
      rules: {
        avatar: [{ required: true, message: '请上传头像', trigger: 'change' }], //是	string	头像地址
        username: [
          { required: true, message: '请输入用户名', trigger: 'change' }
        ], //是	string	用户名
        email: [
          { required: true, message: '请输入邮箱', trigger: 'change' },
          {
            validator: (rule, value, callback) => {
              let _reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
              if (_reg.test(value)) {
                callback()
              } else {
                callback(new Error('请正确输入邮箱'))
              }
            },
            trigger: 'change'
          }
        ], //是	string	邮箱
        phone: [
          { required: true, message: '请输入手机号!', trigger: 'change' },
          {
            validator: (rule, value, callback) => {
              let _reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
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
          { required: true, message: '请输入密码', trigger: 'change' }
        ], //是	string	密码
        code: [{ required: true, message: '请输入图形码!', trigger: 'change' }], //图形码
        rcode: [{ required: true, message: '请输入验证码', trigger: 'change' }] //是	string	验证码
      },
      //   imageUrl: '',
      baseUrl: process.env.VUE_APP_URL
    }
  },
  created () {
    // test()
    // alert(process.env.VUE_APP_URL)
    //上线    通宵     几小时
    //一年不能回工资
    // alert('大侠请留步')
  },
  methods: {
    handleAvatarSuccess (res) {
      // 上传组件element它没有帮我们做 主动验证,需要我们手动去触发验证
      // el-form的this.validateField(["prop的值"])

      window.console.log(res)
      //   this.imageUrl = res.data.file_path
      this.form.avatar = res.data.file_path
      //   局部验证
      this.$refs.form.validateField(['avatar'])
      //   this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG,PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    // 确定注册
    submit () {
      this.$refs.form.validate(result => {
        if (result) {
          toRegister(this.form).then(res => {
            window.console.log('注册返回值:', res)
            // if (res.data.code == 200) {
            this.$message.success('注册成功')
            this.isShow = false
            // }
          })
          // this.$message.success('验证成功')
          // toRegister()
        } else {
          this.$message.error('验证失败')
        }
      })
    },
    //刷新验证码
    changeCode () {
      this.codeImgUrl = '/captcha?type=sendsms&sdgsg=' + Math.random() * 999
    },
    // 获取手机验证码
    getRcode () {
      //验证手机号与图形码是否填写
      // validateField,它的第一个参数是数组[prop值],(errorMessage)=>{prop值有几个,它就执行几次,如果验证通过是输出空字符串}
      let _num = 0
      this.$refs.form.validateField(['phone', 'code'], errorMessage => {
        window.console.log('手机验证校验', errorMessage)
        if (errorMessage == '') {
          _num++
        }
      })
      if (_num == 2) {
        //  倒计时  totalTime=5
        this.totalTime--
        let _time = setInterval(() => {
          this.totalTime--
          if (this.totalTime <= 0) {
            //清除定时器
            clearInterval(_time)
            //还原时间
            this.totalTime = 6
          }
        }, 1000)

        // 1:最新的谷歌浏览器不支持(接口不支持)
        // this.$axios({
        //   url: '/sendsms',
        //   method: 'post',
        //   data: {
        //     code: this.form.code,
        //     phone: this.form.phone
        //   },
        //   withCredentials: true //跨域带cookie到后端
        // })
        getCodeApi({
          code: this.form.code,
          phone: this.form.phone
        })
          .then(res => {
            window.console.log('res:', res)
            // if (res.data.code == 200) {
            this.$message.success(res.data.data.captcha + '')
            window.console.log(res)
            // } else {
            // this.$message.error(res.data.message)
            // }
          })
          .catch(err => {
            window.console.log('error:', err)
          })
        // this.$message.success('验证通过')
      }
    }
  }
}
</script>
<style lang="less">
.register {
  .title {
    height: 53px;
    line-height: 53px;
    text-align: center;
    color: #fff;
    background: linear-gradient(to right, #01c4fa, #1294fa);
  }
  .el-dialog__header {
    padding: 0;
  }
  .footer {
    text-align: center;
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
  .upload-avatar {
    text-align: center;
  }
  .code-img {
    width: 100%;
    height: 40px;
  }
  .btn {
    width: 100%;
  }
}
</style>
