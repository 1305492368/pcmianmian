<template>
  <div class="selectItem">
    <div v-if="form.type == 1">
      <div
        class="item"
        v-for="(item, index) in form.select_options"
        :key="index"
      >
        <el-radio
          v-model="form.single_select_answer"
          :label="item.label"
          @change="radioChange"
          >{{ item.label }}</el-radio
        >
        <el-input v-model="item.text"></el-input>
        <hmupload v-model="item.image"></hmupload>
        <!-- 需求:需要实现一个图片回显功能
      prop传值  
         传:子组件标签定义一个  value="值"
         收:子组件内 props:["value"]
         接收后,直接使用value替换了以前的imageUrl
     通过emit触发父组件方法修改value的值
         定义:在子组件标签绑定一个方法  @input="父组件方法"
         父组件方法(参数){
             this.value的值=参数
         }
         子组件:触发父组件方法,并传图片路径
         this.$emit("input",图片路径)      
       -->
        <!-- <hmupload :value="imgUrl" @input="inputEvent"></hmupload> -->
      </div>
    </div>
    <div v-else-if="form.type == 2">
      <div
        class="item"
        v-for="(item, index) in form.select_options"
        :key="index"
      >
        <!-- checkbox
      它的v-model的值如果是数组,选中某项后,数组.push(该项的label)
                        非数组,选中某项后就是true,取消就是false
       -->
        <el-checkbox
          v-model="form.multiple_select_answer"
          :label="item.label"
          >{{ item.label }}</el-checkbox
        >
        <el-input v-model="item.text"></el-input>
        <hmupload v-model="item.image"></hmupload>
        <!-- 需求:需要实现一个图片回显功能
      prop传值  
         传:子组件标签定义一个  value="值"
         收:子组件内 props:["value"]
         接收后,直接使用value替换了以前的imageUrl
     通过emit触发父组件方法修改value的值
         定义:在子组件标签绑定一个方法  @input="父组件方法"
         父组件方法(参数){
             this.value的值=参数
         }
         子组件:触发父组件方法,并传图片路径
         this.$emit("input",图片路径)
      
       -->
        <!-- <hmupload :value="imgUrl" @input="inputEvent"></hmupload> -->
      </div>
    </div>
    <div v-else>
      <!-- input 
         v-model:双向绑定
         type="textarea"
         rows="初始多少行(数字与非数字都支持)"
    -->
      <el-input
        v-model="form.short_answer"
        type="textarea"
        :rows="5"
      ></el-input>
    </div>
  </div>
</template>
<script>
import hmupload from '@/components/hmupload'
export default {
  props: ['form'],
  components: {
    hmupload
  },
  data () {
    return {
      imgUrl: 'upload/20200930/75fc4f2e0e15a35980b05c7146e64731.png'
    }
  },
  methods: {
    // inputEvent (msg) {
    //   this.imgUrl = msg
    // }
    radioChange () {
      this.$emit('validateForm', 'single_select_answer')
    }
  }
}
</script>
<style lang="less">
.selectItem {
  .item {
    display: flex;
    align-items: center;
  }
}
</style>
