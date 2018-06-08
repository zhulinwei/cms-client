
<template>
  <div>
    <el-container>
      <el-aside style="background-color: yellow">
        <p>asdfasdf</p>
        <p>asdfasdf</p>
        <p>asdfasdf</p>
        <p>asdfasdf</p>
        <p>asdfasdf</p>
        <p>asdfasdf</p>
        <p>asdfasdf</p>
        <p>asdfasdf</p>
        <p>asdfasdf</p>
        <p>asdfasdf</p>
        <p>asdfasdf</p>
        <p>asdfasdf</p>
        <p>asdfasdf</p>
        <p>asdfasdf</p>
        <p>asdfasdf</p>
        <p>asdfasdf</p>
        <p>asdfasdf</p>
        <p>asdfasdf</p>
        <p>asdfasdf</p>
        <p>asdfasdf</p>
        <p>asdfasdf</p>
      </el-aside>

      <el-container>

        <el-header style="background-color: red">
          asdf
        </el-header> 
        
        <el-main style="background-color: blue">
          asdfasdg
        </el-main>
      </el-container>
    </el-container>
    <!--
    <admin-header></admin-header>
    <admin-sidebar></admin-sidebar>
    <div class="admin-content">
      <nuxt/>
    </div>
    -->
  </div>
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
  .admin-content {
    top: 70px;
    left: 245px;
  }
  
</style>
