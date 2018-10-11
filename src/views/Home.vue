<template>
  <div class="home">
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
      <el-table-column prop="birthday" label="出生日期"> </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button size="small" type="danger" @click="handlerDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
   
  </div>
</template>

<script>
import { userApi } from '@api'
export default {
  name: 'home',
  data() {
    return {
      list: []
    }
  },
  methods: {
    getList() {
      userApi.getList().then(data => {
        console.log( data)
        this.list = data.data
      })
    },
    handlerDelete(id) {
      userApi.delete(id).then(() => {
        this.getList()
      })
    }
  },
  created() {
    this.getList()
  }
}
</script>
<style lang="scss">
table {
  width: 100%;
  tr {
    border-bottom: 1px solid #666;
  }
}
</style>

