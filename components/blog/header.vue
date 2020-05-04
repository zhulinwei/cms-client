
<template>
  <div id="l-header-wrapper">
    <div class="l-header">
      <div class="l-header-img">
        <img class="logo" src="~static/images/blog_logo.png" alt="logo">
      </div>
      <div class="l-header-tab">
        <div class="l-header-tab-item">
          <router-link to="/blog">主页</router-link>
        </div>
        <div class="l-header-tab-item">
          <router-link to="/blog/article">博客</router-link>
        </div>
        <div class="l-header-tab-item">
          <router-link to="/blog/search">搜索</router-link>
        </div>
        <div class="l-header-tab-item">
          <a href="https://github.com/zhulinwei">联系我</a>
        </div>
        <!-- 
        <div class="l-header-tab-item">
          <router-link to="/admin/login">后台管理</router-link>
        </div>
        -->
      </div>
    </div>
  </div>
</template>

<style>
  #l-header-wrapper {
    background-color: #ffffff;
  }
  .l-header {
    display: flex;
    margin: 0 auto;
    max-width: 960px;
  }
  .l-header-img {
    flex: 2;
  }
  .l-header-img {
    display: none;  
  }
  .l-header-tab {
    flex: 1;
    display: flex;
    line-height: 90px;
  }
  .l-header-tab-item {
    flex: 1;
    text-align: center;
    font-weight: 500;
  }
  @media (min-width: 479px) {
    .l-header-wrapper {
      height: 90px;
      overflow: hidden;
      background-color: #ffffff;
    }
    .l-header-img {
      display: block;
    }
    .l-header-img img {
      width: 150px;
      height: 90px;
      display: block;
    }
    .l-header-tab {
      flex: 1;
      display: flex;
      line-height: 90px;
    }
  }
</style>
