
<template>
  <el-row id="l-header-wrapper">
    <el-col class="l-header">
      <div class="l-header-img hidden-xs-only">
        <img class="logo" src="http://pahz6ot8c.bkt.clouddn.com/5b275ad2ae4dfd19be4761a9" alt="logo" width="150px" height="90px">
      </div>
      <el-menu class="l-admin-menu" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">
          <nuxt-link to="/a">
            <span>主页</span>
          </nuxt-link>
        </el-menu-item>
        <el-menu-item index="2">
          <nuxt-link to="/a">
            <span>博客</span>
          </nuxt-link>
        </el-menu-item>
        <el-menu-item index="3">
          <nuxt-link to="/a">
            <span>作品</span>
          </nuxt-link>
        </el-menu-item>
        <el-menu-item index="4">
          <nuxt-link to="/a">
            <span>搜索</span>
          </nuxt-link>
        </el-menu-item>
      </el-menu>
      <!--
      <div class="l-header-tab">
        <div class="l-header-tab-item">
          <router-link to="/introduce">主页</router-link>
        </div>
        <div class="l-header-tab-item">
          <router-link to="/blog/index">博客</router-link>
        </div>
        <div class="l-header-tab-item">
          <a href="https://github.com/zhulinwei">联系我</a>
        </div>
        <div class="l-header-tab-item">
          <router-link to="/search">搜索</router-link>
        </div>
      </div>
      -->
    </el-col>
  </el-row>
</template>

<style>
  #l-header-wrapper {
    height: 40px;
    overflow: hidden;
    background-color: #ffffff;

  }
  .l-header {
    display: flex;
    margin: 0 auto;
    max-width: 960px;
    /* overflow: hidden; */
  }
  .l-header-img {
    flex: 2;
  }
  .l-header-tab {
    flex: 1;
    display: flex;
    line-height: 40px;
  }
  .l-header-tab-item {
    flex: 1;
    text-align: center;
  }
  @media (min-width: 479px) {
    .l-header-wrapper {
      height: 90px;
      overflow: hidden;
      background-color: #ffffff;
    }
    .l-header-tab {
      flex: 1;
      display: flex;
      line-height: 90px;
    }
  }
</style>
