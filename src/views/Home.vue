<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ul>
      <li v-for="(item, index) in list" :key="index">{{item.name}} {{item.age}} {{item.birthday}}</li>
    </ul>
  </div>
</template>

<script>
import { userApi } from '@api'
export default {
  name: "home",
  data() {
    return {
      list: []
    }
  },
  methods: {
    getList() {
      userApi.getList().then(data => {
        console.log('log', data)
        this.list = data.data
      })
    }
  },
  created() {
    this.getList()
  }
};
</script>
