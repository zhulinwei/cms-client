
<template>
  <div class="admin-sidebar">
    <div class="admin-sidebar-header">
      <img src="~/static/images/default_admin.jpeg">
      <p class="title">Level.Z CMS</p>
      <p class="content">内容管理系统 </p>
    </div>
    <el-menu class="admin-sidebar-body" default-active="1" :unique-opened="false"  @open="handleOpen" @close="handleClose">
      <el-menu-item index="1">
        <i class="fa fa-desktop" aria-hidden="true"></i>
        <span slot="title">控制面板</span>
      </el-menu-item>

      <el-submenu index="2">
        <template slot="title">
          <i class="fa fa-book" aria-hidden="true"></i>
          <span>博客管理</span>
        </template>
        <el-menu-item index="2-1">
          <i class="fa fa-folder-open" aria-hidden="true"></i>
          <span slot="title">目录管理</span>
        </el-menu-item>
        <el-menu-item index="2-2">
          <i class="fa fa-file" aria-hidden="true"></i>
          <span slot="title">文章管理</span>
        </el-menu-item>
        <el-menu-item index="2-3">
          <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="2-4">
          <i class="fa fa-comments" aria-hidden="true"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="fa fa-weixin" aria-hidden="true"></i>
          <span>微信管理</span>
        </template>
        <el-menu-item index="3-1">
          <span slot="title">目录管理</span>
        </el-menu-item>
        <el-menu-item index="3-2">
          <span slot="title">文章管理</span>
        </el-menu-item>
        <el-menu-item index="3-3">
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="3-4">
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="3-5">
          <span slot="title">账号管理</span>
        </el-menu-item>
      </el-submenu>

      <el-menu-item index="4">
        <i class="fa fa-cog" aria-hidden="true"></i>
        <span slot="title">账号设置</span>
      </el-menu-item>

      <el-submenu index="5">
        <template slot="title">
          <i class="fa fa-cogs" aria-hidden="true"></i>
          <span>系统设置</span>
        </template>
        <el-menu-item index="5-1">
          <span slot="title">目录管理</span>
        </el-menu-item>
        <el-menu-item index="5-2">
          <span slot="title">文章管理</span>
        </el-menu-item>
        <el-menu-item index="5-3">
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="5-4">
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="5-5">
          <span slot="title">账号管理</span>
        </el-menu-item>
      </el-submenu>

    </el-menu>
</div>
</template>
<script>
  export default {
    data() {
      return {
        // 保持只有一个子菜单展开
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .admin-sidebar {
    position: fixed;
    width: 20%;
    min-width: 200px;
    /** height+position能让侧边栏的高度撑满这个屏幕 **/
    height: 100%;
    color: #fff;
    background-color: #4C3B2F;
    border-right: 0;
    z-index: 100;    
  }

  .admin-sidebar-header {
    color: #fff;
    height: 140px;
    vertical-align: middle;
    background-color: #4C3B2;
    margin-bottom: 10px;
  }

  .admin-sidebar-header img {
    width: 60px;
    height: 60px;
    margin: 25px 0 10px 30px;
    border-radius: 30px;
  }

  .admin-sidebar-header .title,
  .admin-sidebar-header .content {
    padding: 5px 30px;
    font-size: 12px;
  }

  .admin-sidebar-body {
    border-right: 0;
  }

  .admin-sidebar-body .el-menu-item,
  .admin-sidebar-body .el-submenu__title {
    color: #fff;
    background-color: #4C3B2F;
  }
  
  .admin-sidebar-body .el-menu-item:hover {
    background-color: #37281E;
  }
  
  .admin-sidebar-body .el-menu-item:hover span {
    color: #F1AC59;
  }

  .admin-sidebar-body .el-menu-item.is-active {
    background-color: #37281E;
    color: #F1AC59;
  }

  .admin-sidebar-body i,
  .admin-sidebar-body .el-menu-item.is-active i {
    color: #fff;
    padding: 0 8px;
    font-size: 16px; 
  }
</style>
