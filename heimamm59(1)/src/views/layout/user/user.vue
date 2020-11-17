<template>
  <div class="userList">
    <el-card>
      <el-form :model="form" inline ref="form">
        <el-form-item prop="username" label="用户名称">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item prop="email" label="用户邮箱">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item prop="role_id" label="角色">
          <el-select v-model="form.role_id">
            <el-option
              v-for="(value, key, index) in roleObj"
              :key="index"
              :label="value"
              value="key"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">搜索</el-button>
          <el-button @click="reset">清除</el-button>
          <el-button type="primary" @click="add">+新增用户</el-button>
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
        <el-table-column label="用户名" prop="username" width="180px">
        </el-table-column>
        <el-table-column label="电话" prop="phone" width="160px">
        </el-table-column>
        <el-table-column label="邮箱" prop="email" width="160px">
        </el-table-column>
        <el-table-column label="角色" prop="role" width="150px">
        </el-table-column>
        <el-table-column label="备注" prop="remark"> </el-table-column>
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
    <userAdd
      ref="userAdd"
      :modeSon="modeFather"
      :roleObj="roleObj"
      @sonSearch="getData"
    ></userAdd>
  </div>
</template>
<script>
import { getUserListList, setUserListStatus, delUserList } from '@/api/user.js'
import userAdd from './userAdd'
export default {
  components: {
    userAdd
  },
  data () {
    return {
      modeFather: 'add',
      roleObj: {
        1: '超级管理员',
        2: '管理员',
        3: '老师',
        4: '学生'
      },
      pagination: {
        currentPage: 1, //页码
        pageSize: 1, //页容量
        total: 100
      },
      form: {
        username: '', //否	string	昵称
        email: '', //否	string	邮箱
        role_id: '' //否	string	角色数字 2管理员、3老师、 4学生
      },
      list: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    // 列表
    getData () {
      let _query = {
        ...this.form,
        page: this.pagination.currentPage,
        limit: this.pagination.pageSize
      }
      getUserListList(_query).then(res => {
        this.list = res.data.data.items
        this.pagination.total = res.data.data.pagination.total
        window.console.log('用户列表：', res)
      })
    },
    // 搜索
    search () {
      this.pagination.currentPage = 1
      this.getData()
    },
    // 页容量改变
    handleSizeChange (size) {
      this.pagination.pageSize = size
      this.search()
    },
    // 页码改变
    handleCurrentChange (page) {
      this.pagination.currentPage = page
      this.getData()
    },
    // 新增
    add () {
      this.modeFather = 'add'
      this.$refs.userAdd.isShow = true
    },
    // 编辑
    edit (row) {
      this.modeFather = 'edit'
      this.$refs.userAdd.form = JSON.parse(JSON.stringify(row))
      this.$refs.userAdd.isShow = true
    },
    // 清空
    reset () {
      this.$refs.form.resetFields()
      this.search()
    },
    // 设置状态
    setStatus (id) {
      setUserListStatus({ id }).then(() => {
        // 提示一下，设置状态成功，
        this.$message.success('设置状态成功')
        // 刷新数据
        this.getData()
      })
    },
    del (id) {
      delUserList({ id }).then(() => {
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
