<template>
  <div class="container">
    <el-card class="login-box">
      <img src="../assets/login-0.png" class="bear" ref="img0" />
      <img src="../assets/login-1.png" class="bear-focus hidden" ref="img1" />
      <img src="../assets/login-2.png" class="bear-focus hidden" ref="img2" />
      <h1 class="title">Login</h1>
      <el-input id="user" v-model="user" placeholder="请输入用户名" @focus="focus" @blur="blur"></el-input>
      <el-input
        id="password"
        v-model="password"
        placeholder="请输入密码"
        show-password
        @focus="focus"
        @blur="blur"
        @keydown="login"
      ></el-input>
      <el-button type="primary" class="login-in" @click="login">Login in</el-button>
    </el-card>
  </div>
</template>

<script>
import { ref } from 'vue';
import router from '../router.js';

export default {
  setup() {
    const user = 'root';
    const password = 'admin';
    const img0 = ref(null);
    const img1 = ref(null);
    const img2 = ref(null);
    const focus = (event) => {
      if (event.target.id === 'user') {
        img1.value.classList.remove('hidden');
        img0.value.classList.add('hidden');
        img2.value.classList.add('hidden');
      }
      if (event.target.id === 'password') {
        img2.value.classList.remove('hidden');
        img0.value.classList.add('hidden');
        img1.value.classList.add('hidden');
      }
    };
    const blur = () => {
      if (Array.prototype.includes.call(img0.value.classList, 'hidden')) {
        img0.value.classList.remove('hidden');
        img1.value.classList.add('hidden');
        img2.value.classList.add('hidden');
      }
    };
    const login = () => {
      if (user === 'root' && password === 'admin') {
        router.push('/index');
      } else {
        console.log('用户名或密码错误!');
      }
    };
    return { user, password, focus, blur, login, img0, img1, img2 };
  }
};
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

    .bear-focus {
      position: absolute;
      left: 50%;
      top: -80px;
      width: 120px;
      height: 110px;
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