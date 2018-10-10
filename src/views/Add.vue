<template>
  <div class="add">
    <h1>Add student</h1>
    <div>姓名：<input type="text" v-model="student.name" placeholder="请输入姓名"></div>
    <div>年龄：<input type="text" v-model="student.age" placeholder="请输入年龄"></div>
    <div>出生日期：<input type="text" v-model="student.birthday" placeholder="请输入出生日期"></div>
    <button @click="handlerAdd">添加</button>
  </div>
</template>
<script>
import { userApi } from '@api'
const entity = {
  name: '',
  age: '',
  birthday: ''
}
export default {
  data() {
    return {
      student: { ...entity }
    }
  },
  methods: {
    handlerAdd() {
      let student = { ...this.student }

      userApi.add(student).then( () => {
        this.student = { ...entity }
      })
    }
  },
  created() {}
}
</script>

<style lang="scss">
.add {
  div {
    margin-bottom: 10px;
  }
}
</style>
