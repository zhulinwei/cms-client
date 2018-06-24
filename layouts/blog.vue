<template>
  <el-container>
    <!--顶部栏-->
    <!--
    <el-header style="background-color: #fff;text-align: right;">
    -->
    <el-header height="90px">
      <l-blog-header></l-blog-header>
    </el-header>
    
    <!--主体内容-->
      <nuxt/>
<!--
    <el-main>
      <nuxt/>
    </el-main>
-->
    <!--底部栏 -->
    <!--
        <l-blog-footer></l-blog-footer>
    -->
  </el-container>
</template>

<script>
  import header from '~/components/blog/header';

  export default {
    components: {
      'l-blog-header': header,
    }
  }
</script>

<style>
  .el-header {
    background-color: #fff;
    overflow: hidden;
  }
  .el-main {
    background-color: #fff;
    margin-top: 20px; 
  }
</style>
