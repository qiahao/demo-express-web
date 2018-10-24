<template>
    <div class="login">
        <div class="logo">
            <img src="../assets/logo.png"/>
        </div>
        <el-form :model="user"  label-position="left" label-width="80px" class="form" :rules="rules" status-icon>
            <el-form-item label="账 号" prop="account">
                <el-input autocomplete="off" placeholder="请输入账号" v-model="user.account"></el-input>
            </el-form-item>
            <el-form-item label="密 码" prop="password">
                <el-input type="password" autocomplete="off" placeholder="请输入密码" v-model="user.password"></el-input>
            </el-form-item>
            <el-button type="primary" class="sub-btn" @click="login" :loading="showData.loginBtnLoading">登 录</el-button>
        </el-form>
        <div class="footer">
            <span class="powered">Powered by Express © 2018</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'login',

  data() {
    return {
      showData: {
        loginBtnLoading: false
      },
      user: {
        account: '',
        password: ''
      },
      rules: {
        account: [{
          validator: (rule, value, callback)=>{
            if (!value) {
              callback(new Error('请输入账号'))
            } else {
              callback()
            }
          },
          trigger: 'blur'
        }],
        password: [{
          validator: (rule, value, callback)=>{
            if (value === '') {
              callback(new Error('请输入密码'))
            } else {
              callback()
            }
          },
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    login() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
    .login{
        height: 100%;
        width: 100%;
        position: fixed;
        background: url("../assets/bj.jpg") center;
        background-size: 100%;
    }
    .logo{
        background-color: #ffffff;
        width: 460px;
        left: 50%;
        margin-left: -230px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        padding: 45px 0 30px 0;
        position: fixed;
        text-align: center;
        top: 200px;
    }
    .logo img{
        position: absolute;
        top: -47px;
        left: 116px;
    }
    .form{
        margin: 275px auto 0;
        max-width: 380px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        background-color: white;
        padding:30px 40px 60px;
        box-shadow: 0 0 30px rgba(0,0,0,0.1);
    }
    .footer{
        margin-top: 22px;
        text-align: center;
    }
    .footer span{
        color: white;
        font-size: 14px;
    }
    .sub-btn{
        width: 100%;
        margin-top: 30px;
    }
</style>