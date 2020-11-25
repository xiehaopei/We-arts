<template>
  <div class="container">
    <Nav></Nav>
    <div class="header">
      <h1 class="title">We-Arts</h1>
      <h3 class="subtitle">智者向内寻求力量</h3>
      <Icon class="links" />
    </div>
    <ArticleList :articleList="articleList"></ArticleList>
    <backTop></backTop>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      articleList:{
        tags:[
          {bgcolor:'red',tagName:'JavaScript'},
          {bgcolor:'blue',tagName:'CSS'},
          {bgcolor:'yellow',tagName:'HTML'}
        ]
      }
    }
  },
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5fa;
  text-align: center;

  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70vh;
    background: url(/img/index-bg.png);

    .title {
      display: block;
      font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        sans-serif;
      font-weight: 300;
      font-size: 1rem;
      color: #fff;
      letter-spacing: 1px;
    }

    .subtitle {
      padding-bottom: 0.15rem;
      font-weight: 300;
      font-size: 0.3rem;
      color: #fff;
      word-spacing: 5px;
    }

    .links {
      margin: 0 auto;
      padding-top: 0.15rem;
    }
  }
}
</style>
