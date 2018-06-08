<template>
  <el-container>
    <!--侧边栏-->
    <el-aside width="200px">
      <admin-sidebar></admin-sidebar>
    </el-aside> 

    <el-container>
      <el-header style="background-color: #fff;text-align: right;">
        <admin-header></admin-header>
      </el-header>  
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
      'admin-header': header,
      'admin-sidebar': sidebar,
    }
  }
</script>

<style>

</style>
