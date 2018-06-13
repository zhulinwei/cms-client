<template>
  <el-container>
    <!--侧边栏-->
    <el-aside width="20%">
      <l-admin-sidebar></l-admin-sidebar>
    </el-aside>
     
    <el-container>
      <!--顶部栏-->
      <el-header style="background-color: #fff;text-align: right;">
        <l-admin-header></l-admin-header>
      </el-header>
      
      <!--主体内容-->
      <el-main>
        <nuxt/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import header from '~/components/admin/header';
  import sidebar from '~/components/admin/sidebar';

  export default {
    components: {
      'l-admin-header': header,
      'l-admin-sidebar': sidebar,
    }
  }
</script>

<style>
  .el-main {
    background-color: #fff;
    margin-top: 20px; 
  }
</style>
