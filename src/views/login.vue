<template>
  <div class="login-wrap">
    <el-form
      :label-position="labelPosition"
      label-width="80px"
      :model="formLabelAlign"
      class="login-form"
    >
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.password"></el-input>
      </el-form-item>
      <el-button :plain="true" @click="handleLogin()" class="login-btn" type="primary">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {
      labelPosition: "top",
      formLabelAlign: {
        username: "",
        password: ""
      }
    }
  },
  methods:{
      ...mapMutations(['changeLogin']),

      handleLogin(){
            let _this = this;
            if (this.formLabelAlign.username === '' || this.formLabelAlign.password === ''){
                alert('账号或密码不能为空');
            }else{
                
                this.$post('http://localhost:9000/login',{username: this.formLabelAlign.username, password: this.formLabelAlign.password})
                .then((response) => {
                    _this.userToken = response.token;
                    console.log(this.$store);
                    this.changeLogin({Authorization: _this.userToken});
                    this.$router.push("/home");
                    alert("login success")
                }
                )



            }





      }
  }
};
</script>

<style scoped>
.login-wrap {
  height: 100%;
  background-color: rgb(3, 39, 70);
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrap .login-form{
    width: 300px;
    background-color: aliceblue;
    border-radius: 5px;
    padding: 20px;
}
.login-btn{
    width: 100%;
}

</style>