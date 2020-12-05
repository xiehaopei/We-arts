<template>
  <div class="container">
    <el-card class="login-box">
      <img src="../assets/login-0.png" class="bear" />
      <img src="../assets/login-1.png" class="bear hidden" />
      <img src="../assets/login-2.png" class="bear hidden" />
      <h1 class="title">Login</h1>
      <el-input id="user" v-model="user" placeholder="请输入用户名"></el-input>
      <el-input id="password" v-model="password" placeholder="请输入密码" show-password></el-input>
      <el-button type="primary" class="login-in">Login in</el-button>
    </el-card>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const user = ref('');
    const password = ref('');
    return { user, password };
  }
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rgb(34, 195, 93);
  background: linear-gradient(
    135deg,
    rgba(34, 195, 93, 0.8802871490393032) 25%,
    rgba(21, 208, 200, 0.8830882694874825) 100%
  );
  .login-box {
    position: relative;
    width: 480px;

    .bear {
      position: absolute;
      left: 50%;
      top: -80px;
      width: 120px;
      height: 95px;
      transform: translate(-50%, 0);
    }

    .hidden {
      visibility: hidden;
    }

    .title {
      text-align: center;
    }

    .el-input {
      margin: 10px auto;
    }

    .login-in {
      display: block;
      margin: 10px auto;
      width: 200px;
      font-size: 16px;
    }
  }
}
</style>