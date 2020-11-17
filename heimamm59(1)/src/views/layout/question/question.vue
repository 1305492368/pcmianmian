<template>
  <div class="question">
    <el-card>
      <el-form :model="form" label-width="80px" ref="form">
        <!-- 
  el-row:行
   el-col :列   :span="5"  :offset="1"

 -->

        <el-row>
          <el-col :span="5">
            <el-form-item label="学科" prop="subject">
              <el-select v-model="form.subject">
                <el-option
                  v-for="(item, index) in subjectList"
                  :key="index"
                  :label="item.short_name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="阶段" prop="step">
              <!-- 
                对象:{key:value}  
                v-for="(value,key,index) in 对象"
                字符串转数字  +字符串(数字型字符串)
               -->
              <el-select v-model="form.step">
                <el-option
                  :label="value"
                  :value="+key"
                  v-for="(value, key, index) in stepObj"
                  :key="index"
                ></el-option>
              </el-select> </el-form-item
          ></el-col>
          <el-col :span="5">
            <el-form-item label="企业" prop="enterprise">
              <el-select v-model="form.enterprise">
                <el-option
                  v-for="(item, index) in businessList"
                  :key="index"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select> </el-form-item
          ></el-col>
          <el-col :span="5">
            <el-form-item label="题型" prop="type">
              <el-select v-model="form.type">
                <el-option
                  v-for="(value, key, index) in typeObj"
                  :key="index"
                  :label="value"
                  :value="+key"
                ></el-option>
              </el-select> </el-form-item
          ></el-col>
          <el-col :span="4"> </el-col>
        </el-row>
        <el-row>
          <el-col :span="5">
            <el-form-item label="难度" prop="difficulty">
              <el-select v-model="form.difficulty">
                <el-option
                  v-for="(value, key, index) in diffObj"
                  :key="index"
                  :label="value"
                  :value="+key"
                ></el-option>
              </el-select> </el-form-item
          ></el-col>
          <el-col :span="5">
            <el-form-item prop="username" label="作者">
              <el-input v-model="form.username"></el-input> </el-form-item
          ></el-col>
          <el-col :span="5">
            <el-form-item prop="status" label="状态">
              <el-select v-model="form.status">
                <el-option
                  v-for="(value, key, index) in statusObj"
                  :key="index"
                  :label="value"
                  :value="+key"
                ></el-option>
              </el-select> </el-form-item
          ></el-col>
          <el-col :span="5">
            <el-form-item prop="create_date" label="日期">
              <el-date-picker
                v-model="form.create_date"
                type="date"
              ></el-date-picker> </el-form-item
          ></el-col>
          <el-col :span="4"> </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="标题" prop="title">
              <el-input v-model="form.title"></el-input> </el-form-item
          ></el-col>
          <el-col :span="14">
            <el-button type="primary" class="search-btn" @click="search"
              >搜索</el-button
            >
            <!-- 清除
            el-form   model ref
               el-form-item   prop绑定
               this.$refs.ref值.resetFields()
            
             -->
            <el-button @click="reset">清除</el-button>
            <el-button type="primary" @click="add">+新增试题</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <!-- table
    el-table  data:数组数据类型
        el-table-column   label:标题   prop:绑定该列对应字段 名  width:宽度
    自定义列
       1:在相应列加一个template
      2:template标签上加一个v-slot="scope(局部变量)"
         scope.$index:索引
         scopw.row:每一行的数据    
     -->
    <el-card>
      <el-table :data="list">
        <el-table-column label="序号" width="60px">
          <!-- 当前页容量*(当前 页码-1)+当前索引 +1 -->
          <template v-slot="scope">
            {{
              pagination.pageSize * (pagination.currentPage - 1) +
                scope.$index +
                1
            }}
            <!-- {{ scope.$index + 1 }} -->
          </template>
        </el-table-column>
        <el-table-column label="题目">
          <template v-slot="scope">
            <div v-html="scope.row.title"></div>
          </template>
        </el-table-column>
        <el-table-column label="学科.阶段">
          <template v-slot="scope">
            {{ scope.row.subject_name }}.{{ stepObj[scope.row.step] }}
          </template>
        </el-table-column>
        <el-table-column label="题型">
          <template v-slot="scope">
            {{ typeObj[scope.row.type] }}
          </template>
        </el-table-column>
        <el-table-column label="企业" prop="enterprise_name"> </el-table-column>
        <el-table-column label="创建者" prop="username"> </el-table-column>
        <el-table-column label="状态" width="100px">
          <template v-slot="scope">
            <div :class="{ red: scope.row.status === 0 }">
              {{ statusObj[scope.row.status] }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="访问量" prop="reads" width="80px">
        </el-table-column>
        <el-table-column label="操作">
          <template v-slot="scope">
            <el-button type="text" @click="edit(scope.row)">编辑</el-button>
            <el-button type="text" @click="setStatus(scope.row.id)">
              <!-- status:  0    1   1-0=1
                            1    0   1-1=0
              -->
              {{ statusObj[1 - scope.row.status] }}</el-button
            >
            <el-button type="text" @click="del(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          :total="pagination.total"
          :page-size="pagination.pageSize"
          :page-sizes="pagination.sizes"
          :current-page="pagination.currentPage"
          @current-change="currentChange"
          @size-change="sizeChange"
          layout="total,sizes,prev,pager,next,jumper"
        >
        </el-pagination>
      </div>
    </el-card>

    <!-- props传值
父传子属性
   传:在子组件标签上定义一个属性   属性=值
   收:子组件内 props(data兄弟):["属性名"]
   使用:this.属性名
   注意点:如果是原始值,不能修改,如果是引用值,只要不修改它的引用,它的值随便修改
   栈不能修改,堆随便修改
 -->

    <questionAdd
      ref="questionAdd"
      :subjectList="subjectList"
      :stepObj="stepObj"
      :businessList="businessList"
      :typeObj="typeObj"
      :diffObj="diffObj"
      @search="search"
      @getData="getData"
      :mode="mode"
    ></questionAdd>
  </div>
</template>
<script>
import { subjectList } from '@/api/subject.js'
import { getBusinessList } from '@/api/business.js'
import { questionList, questionStatus, questionRemove } from '@/api/question.js'
import questionAdd from './questionAdd'
export default {
  components: {
    questionAdd
  },

  data () {
    return {
      mode: 'add',
      pagination: {
        total: 10,
        pageSize: 1,
        sizes: [1, 5, 10, 20, 50],
        currentPage: 1
      },
      stepObj: {
        1: '初级',
        2: '中级',
        3: '高级'
      },
      typeObj: {
        1: '单选',
        2: '多选',
        3: '简答'
      },
      diffObj: {
        1: '简单',
        2: '一般',
        3: '困难'
      },
      statusObj: {
        0: '禁用',
        1: '启用'
      },

      form: {
        subject: '', //否	int	学科id
        step: '', //否	int	题目阶段:1(初级),2(中级),3(高级)
        enterprise: '', //否	int	企业id
        type: '', //否	int	题目类型:1(单选),2(多选),3(简答)
        difficulty: '', //否	int	题目难度: 1(简单),2(一般),3(困难)
        username: '', //否	string	作者
        status: '', //否	int	状态:0(禁用),1(启用)
        create_date: '', //否	string	创建日期
        title: '', //否	string	标题名称
        page: '', //否	string	页码 默认为1
        limit: '' //否	string	页尺寸 默认为10
      },
      subjectList: [],
      businessList: [],
      list: []
    }
  },
  created () {
    subjectList({ limit: 1000 }).then(res => {
      this.subjectList = res.data.data.items
      // window.console.log('学科列表', res)
    })
    getBusinessList({ limit: 1000 }).then(res => {
      this.businessList = res.data.data.items
      // window.console.log('企业列表:', res)
    })
    this.getData()
  },
  methods: {
    getData () {
      let _query = {
        
        ...this.form,
        page: this.pagination.currentPage,
        limit: this.pagination.pageSize
      }
      questionList(_query).then(res => {
        res.data.data.items.forEach(item => {
          item.city = item.city.split(',')
          item.multiple_select_answer = item.multiple_select_answer.split(',')
        })
        this.list = res.data.data.items
        this.pagination.total = res.data.data.pagination.total
        window.console.log('题库列表:', res)
      })
    },
    // 页码改变
    currentChange (page) {
      this.pagination.currentPage = page
      // window.console.log('默认页码:', this.pagination.currentPage)
      // window.console.log('当前 页码:', page)
      this.getData()
    },
    // 页容量改变
    sizeChange (size) {
      this.pagination.pageSize = size
      this.pagination.currentPage = 1
      this.getData()
      window.console.log(size)
    },
    // 重置
    reset () {
      this.$refs.form.resetFields()
    },
    // 搜索
    search () {
      // 回到第一页,调用列表接口
      this.pagination.currentPage = 1
      this.getData()
    },
    // 设置状态
    setStatus (id) {
      questionStatus({ id: id }).then(() => {
        this.$message.success('修改状态成功')
        // 刷新数据
        this.getData()
      })
    },
    // 新增
    add () {
      //打开弹窗
      this.mode = 'add'
      this.$refs.questionAdd.isShow = true
    },
    edit (row) {
      //打开弹窗
      this.mode = 'edit'
      this.$refs.questionAdd.isShow = true
      //修改新增组件的form
      this.$refs.questionAdd.form = JSON.parse(JSON.stringify(row))
    },
    del (id) {
      this.$confirm('确定删除此条题目吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        questionRemove({ id }).then(() => {
          this.$message.success('删除成功')
          this.search()
        })
      })
    }
  }
}
</script>
<style lang="less">
.question {
  .search-btn {
    margin-left: 11px;
  }
  .pagination {
    text-align: center;
    padding-top: 20px;
  }
  .red {
    color: red;
  }
}
</style>
