<template>
  <div class="login-page">
    <div class="login-wrapper">
      <div class="login-header">
        <p>后台管理登录</p>
      </div>
      <div class="login-body">
        <form method="POST" action="/login" >
          <div class="form-input">
            <i class="fa fa-user-circle-o fa-4"></i>
            <input type="text" placeholder="这里输入登录名" v-model="name" style="width: 80%"/>
          </div>
          <div class="form-input">
            <i class="fa fa-pencil-square fa-5"></i>
            <input type="password" placeholder="这里输入密码" v-model="password"  style="width: 80%"/>
          </div>
          <input type="button" class="btn btn-confirm" value="确定" @click="login"/>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      let name = '';
      let password = '';
      return { name, password };
    },
    methods: {
      async login () {
        if (!this.name) return this.$notify.warning('请输入用户昵称');
        if (!this.password) return this.$notify.warning('请输入用户密码');
        try {
          const user = await axios.post('/bg/admin/login', { name: this.name, password: this.password });
          console.log(user)
          this.$notify.success('登录成功');
          this.$store.dispatch('login', user.data)
          this.$router.push({ path: '/admin/dashboard' });
        } catch (error) {
          const message = error && error.response && error.response.data && error.response.data.message;
          if (message) this.$notify.error(message);
          else this.$notify.error('登录失败');
        }
      }
    }
  }
</script>

<style scoped>
  .login-page {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #343434; 
  }

  .login-wrapper {
    width: 35%;
    min-width: 400px;
    margin: 0 auto;
    background: #fff;
    border-radius: 10px;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .login-wrapper .login-header {
    padding: 15px 0;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    border-bottom: 1px #343434 solid;
  }

  .login-wrapper .login-body {
    width: 70%;
    margin: 0 auto;
  }

  .login-wrapper .form-input {
    height: 30px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px #ccc solid;
  }

  .login-wrapper .form-input input {
    width: 90%;
    height: 26px;
    font-size: 12px;
    font-weight: 600;
    position: relative;
    outline: none;
    border: 0px;
    top: -2px;
  }

  .login-wrapper .form-input i {
    width: 10%;
    padding: 5px;
    font-size: 1.5em;
  }

  .login-wrapper .btn-confirm, 
  .login-wrapper .btn-confirm:link {
    width: 100%;
    color: #fff;
    margin: 20px 0;
    padding: 8px 0;
    font-size: 14px;
    font-weight: 600;
    border-radius: 5px;
    background-color: #343434;
  }

  .login-wrapper .btn-confirm:hover, 
  .login-wrapper .btn-confirm:focus {
    color: #fff;
    outline: none;
  }

  .login-wrapper .tip {
    font-size: 12px;  
    color: red;
  }

  .login-wrapper .tip i {
    width: 10%;  
    padding: 0 5px;
    font-size: 1.3em;
  }

  .login-wrapper .tip span {
    position: relative;
    top: -2px;  
  }
</style>
