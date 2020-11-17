<template>
  <div class="business">
    <el-card>
      <el-form :model="form" inline ref="form">
        <el-form-item prop="eid" label="企业编号">
          <el-input v-model="form.eid"></el-input>
        </el-form-item>
        <el-form-item prop="name" label="企业名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item prop="username" label="创建者">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item prop="status" label="状态">
          <el-select v-model="form.status">
            <el-option label="禁用" value="0"></el-option>
            <el-option label="启用" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">搜索</el-button>
          <el-button @click="reset">清除</el-button>
          <el-button type="primary" @click="add">+新增企业</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card>
      <el-table :data="list">
        <el-table-column label="序号" width="50px">
          <template v-slot="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column label="企业编号" prop="eid" width="90px">
        </el-table-column>
        <el-table-column label="企业名称" prop="name"> </el-table-column>
        <el-table-column label="创建者" prop="username"> </el-table-column>
        <el-table-column label="状态" width="100px">
          <template v-slot="scope">
            {{ scope.row.status == 0 ? '禁用' : '启用' }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template v-slot="scope">
            <el-button type="text" @click="edit(scope.row)">
              编辑
            </el-button>
            <el-button type="text" @click="setStatus(scope.row.id)">
              {{ scope.row.status == '1' ? '禁用' : '启用' }}
            </el-button>
            <el-button type="text" @click="del(scope.row.id)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagination.currentPage"
        :page-sizes="[1, 10, 20, 30, 40]"
        :page-size="pagination.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pagination.total"
      >
      </el-pagination>
    </div>
    <businessAdd ref="businessAdd" :modeSon="modeFather"></businessAdd>
  </div>
</template>
<script>
import {
  getBusinessList,
  setBusinessStatus,
  delBusiness
} from '@/api/business.js'
import businessAdd from './businessAdd'
export default {
  components: {
    businessAdd
  },
  data () {
    return {
      modeFather: 'add',
      pagination: {
        currentPage: 1, //页码
        pageSize: 1, //页容量
        total: 100
      },
      form: {
        eid: '', //否	string	企业id
        name: '', //否	string	企业名称
        username: '', //否	string	用户名
        status: '' //否	string	状态 1（启用） 0（禁用）
      },
      list: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      let _query = {
        ...this.form,
        page: this.pagination.currentPage,
        limit: this.pagination.pageSize
      }
      getBusinessList(_query).then(res => {
        this.list = res.data.data.items
        this.pagination.total = res.data.data.pagination.total
        window.console.log('企业列表：', res)
      })
    },
    search () {
      this.pagination.currentPage = 1
      this.getData()
    },
    handleSizeChange (size) {
      this.pagination.pageSize = size
      this.search()
    },
    handleCurrentChange (page) {
      this.pagination.currentPage = page
      this.getData()
    },
    add () {
      this.modeFather = 'add'
      this.$refs.businessAdd.isShow = true
    },
    edit (row) {
      this.modeFather = 'edit'
      this.$refs.businessAdd.form = JSON.parse(JSON.stringify(row))
      this.$refs.businessAdd.isShow = true
    },
    reset () {
      this.$refs.form.resetFields()
      this.search()
    },
    setStatus (id) {
      setBusinessStatus({ id }).then(() => {
        // 提示一下，设置状态成功，
        this.$message.success('设置状态成功')
        // 刷新数据
        this.getData()
      })
    },
    del (id) {
      delBusiness({ id }).then(() => {
        this.$message.success('删除成功')
        // 刷新数据
        this.search()
      })
    }
  }
}
</script>
<style lang="less">
.pagination {
  background-color: #fff;
  padding: 15px;
  text-align: center;
}
</style>
