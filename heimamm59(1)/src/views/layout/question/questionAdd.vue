<template>
  <!-- dialog
  el-dialog  visible.sync:控制 是否显示   width:宽度   show-close:是否显示关闭按钮  title:标题
    fullscreen:true全屏  false:非全屏
     slot="title/footer"
     <template #title></template>
 -->
  <el-dialog :visible.sync="isShow" class="questionAdd" fullscreen>
    <template #title>
      <div class="title">
        {{ mode == 'add' ? '新增题库测试' : '编辑题库测试' }}
      </div>
    </template>
    <!-- form
  el-form  model   rules   label-width  ref
    el-form-item   label   prop
 -->
    <el-form
      :model="form"
      :rules="rules"
      ref="form"
      label-width="80px"
      class="form"
    >
      <el-form-item prop="subject" label="学科">
        <el-select v-model="form.subject">
          <el-option
            v-for="(item, index) in subjectList"
            :key="index"
            :label="item.short_name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="step" label="阶段">
        <el-select v-model="form.step">
          <el-option
            :label="value"
            :value="+key"
            v-for="(value, key, index) in stepObj"
            :key="index"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="enterprise" label="企业">
        <el-select v-model="form.enterprise">
          <el-option
            v-for="(item, index) in businessList"
            :key="index"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="city" label="城市">
        <el-cascader
          v-model="form.city"
          :options="options"
          :props="{ value: 'label' }"
        ></el-cascader>
      </el-form-item>
      <el-form-item prop="type" label="题型">
        <!-- el-radio
                v-model   @change   label:选中该项后的值
            el-radio-group   v-model   @change
         -->
        <el-radio-group v-model="form.type">
          <el-radio
            v-for="(value, key, index) in typeObj"
            :key="index"
            :label="+key"
            >{{ value }}</el-radio
          >
        </el-radio-group>
      </el-form-item>
      <el-form-item prop="difficulty" label="难度">
        <!-- el-radio
                v-model   @change   label:选中该项后的值
            el-radio-group   v-model   @change
         -->
        <el-radio-group v-model="form.difficulty">
          <el-radio
            v-for="(value, key, index) in diffObj"
            :key="index"
            :label="+key"
            >{{ value }}</el-radio
          >
        </el-radio-group>
      </el-form-item>
      <hr />
      <el-form-item prop="title" label="试题标题" class="margin30">
        <!-- 富文本 
        1:安装  npm install vue-quill-editor --save
        2:使用组件
           a:导入  
                 import {quillEditor} from 'vue-quill-editor'
                  import 'quill/dist/quill.core.css'
                  import 'quill/dist/quill.snow.css'
                  import 'quill/dist/quill.bubble.css'
          b:注册 
            components:{
              quillEditor
            }
          c:当标签使用
             <quillEditor />
             v-model:双向绑定
             @change="值改变时触发"        
        
        -->
        <quillEditor
          v-model="form.title"
          @change="validateForm('title')"
        ></quillEditor>
      </el-form-item>
      <el-form-item :label="typeObj[form.type]" :prop="selectObj[form.type]">
        <!--  单选 多选  简答 :单独抽离成一个组件-->
        <!-- 子触发父方法
           在子组件标签绑定一个方法  @子组件方法名="父组件方法"
           子组件内触发  this.$emit("子组件方法名",参数)
         -->

        <selectItem :form="form" @validateForm="validateForm"></selectItem>
      </el-form-item>
      <el-form-item label="解析视频" prop="video">
        <hmupload v-model="form.video" mode="video"></hmupload>
        <div>只能上传视频格式文件</div>
      </el-form-item>
      <el-form-item label="答案解析" class="margin30" prop="answer_analyze">
        <quillEditor
          v-model="form.answer_analyze"
          @change="validateForm('answer_analyze')"
        ></quillEditor>
      </el-form-item>
      <hr class="m30" />
      <el-form-item label="试题备注" prop="remark">
        <el-input type="textarea" rows="2" v-model="form.remark"></el-input>
      </el-form-item>

      <!-- 表单验证
         el-form  model  rules   ref
            el-form-item   prop
            rules对象处理
            全局表单验证:  this.$refs.ref值.validate(result=>{true:验证通过false:验证失败})
            局部表单验证:this.$refs.ref值.validateField(["prop值"],errorMessage=>{erroeMessage==''通过})
      注意点:radio选项它内部没有主动帮我们处理表单验证,需要我们在change事件中自己处理    
      
       -->
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
// import的东西html不能直接使用
import { regionData } from 'element-china-area-data'
// 导入富文本组件
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import selectItem from './selectItem'
import hmupload from '@/components/hmupload'
import { toQuestionAdd, questionEdit } from '@/api/question.js'
export default {
  components: {
    quillEditor,
    selectItem,
    hmupload
  },
  props: [
    'subjectList',
    'stepObj',
    'businessList',
    'typeObj',
    'diffObj',
    'mode'
  ],
  watch: {
    isShow (newVal) {
      if (newVal == false) {
        //清空表单
        this.form = {
          subject: '', //是	int	学科id标识
          step: '', //是	int	阶段1、初级 2、中级 3、高级
          enterprise: '', //是	int	企业id标识
          city: [], //是	array	[省、市、区县]
          type: 1, //是	int	题型 1单选 、2多选 、3简答
          difficulty: '', //是	int	题目难度 1简单 、2一般 、3困难
          title: '', //是	string	标题
          single_select_answer: '', //是	string	单选题答案
          multiple_select_answer: [], //是	array	多选题答案
          short_answer: '', //是	string	简答题答案
          video: '', //否	string	解析视频地址
          answer_analyze: '', //是	string	答案解析
          remark: '', //是	string	答案备注
          select_options: [
            {
              label: 'A',
              text: '',
              image: ''
            },
            {
              label: 'B',
              text: '',
              image: ''
            },
            {
              label: 'C',
              text: '',
              image: ''
            },
            {
              label: 'D',
              text: '',
              image: ''
            }
          ] //是	array	选项，介绍，图片介绍
        }
        //清除验证
        this.$nextTick(() => {
          this.$refs.form.clearValidate()
        })
      }
    }
  },
  data () {
    return {
      selectObj: {
        1: 'single_select_answer',
        2: 'multiple_select_answer',
        3: 'short_answer'
      },
      isShow: false,
      options: regionData,
      rules: {
        subject: [{ required: true, message: '必填', trigger: 'change' }],
        step: [{ required: true, message: '必填', trigger: 'change' }],
        enterprise: [{ required: true, message: '必填', trigger: 'change' }],
        city: [{ required: true, message: '必填', trigger: 'change' }],
        type: [{ required: true, message: '必填', trigger: 'change' }],
        difficulty: [{ required: true, message: '必填', trigger: 'change' }],
        title: [{ required: true, message: '必填', trigger: 'change' }],
        single_select_answer: [
          { required: true, message: '必填', trigger: 'change' }
        ],
        multiple_select_answer: [
          { required: true, message: '必填', trigger: 'change' }
        ],
        short_answer: [{ required: true, message: '必填', trigger: 'change' }],
        answer_analyze: [
          { required: true, message: '必填', trigger: 'change' }
        ],
        remark: [{ required: true, message: '必填', trigger: 'change' }]
      },
      form: {
        subject: '', //是	int	学科id标识
        step: '', //是	int	阶段1、初级 2、中级 3、高级
        enterprise: '', //是	int	企业id标识
        city: [], //是	array	[省、市、区县]
        type: 1, //是	int	题型 1单选 、2多选 、3简答
        difficulty: '', //是	int	题目难度 1简单 、2一般 、3困难
        title: '', //是	string	标题
        single_select_answer: '', //是	string	单选题答案
        multiple_select_answer: [], //是	array	多选题答案
        short_answer: '', //是	string	简答题答案
        video: '', //否	string	解析视频地址
        answer_analyze: '', //是	string	答案解析
        remark: '', //是	string	答案备注
        select_options: [
          {
            label: 'A',
            text: '',
            image: ''
          },
          {
            label: 'B',
            text: '',
            image: ''
          },
          {
            label: 'C',
            text: '',
            image: ''
          },
          {
            label: 'D',
            text: '',
            image: ''
          }
        ] //是	array	选项，介绍，图片介绍
      }
    }
  },
  methods: {
    submit () {
      this.$refs.form.validate(result => {
        if (result) {
          // mode==add
          if (this.mode == 'add') {
            toQuestionAdd(this.form).then(() => {
              // 添加成功===   提示   关闭弹窗   刷新列表
              this.$message.success('添加成功')
              this.isShow = false
              this.$emit('search')
            })
          } else {
            // mode==edit
            questionEdit(this.form).then(() => {
              this.$message.success('编辑成功')
              this.isShow = false
              this.$emit('getData')
            })
          }

          // 调用编辑接口
        } else {
          this.$message.error('验证失败')
        }
      })
    },
    validateForm (str) {
      this.$refs.form.validateField([str])
    }
  }
}
</script>
<style lang="less">
.questionAdd {
  .title {
    height: 53px;
    line-height: 53px;
    padding-left: 15px;
    color: #fff;
    background: linear-gradient(to right, #01c4fa, #1294fa);
  }
  .el-dialog__header {
    padding: 0;
  }
  .el-dialog__headerbtn .el-dialog__close {
    color: #fff;
  }
  .footer {
    text-align: center;
  }
  .form {
    width: 832px;
    margin: 0 auto;
  }
  .el-form-item__label {
    text-align: left;
  }
  .margin30 .el-form-item__content {
    margin-left: 0px !important;
    margin-top: 50px;
  }
  .m30 {
    margin: 50px 0;
  }
}
</style>
