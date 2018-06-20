<template>
  <el-row id="l-admin-header">
    <el-menu class="l-admin-menu" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <span class="hidden-xs-only">系统消息</span>
        <i class="fa fa-bell" aria-hidden="true"></i>
        <i class="l-admin-menu-dot">.</i>
      </el-menu-item>
      <el-menu-item index="2">
        <span class="hidden-xs-only">退出</span>
        <i class="fa fa-sign-out" aria-hidden="true"></i>
      </el-menu-item>
    </el-menu>
  </el-row>
</template>
<script>
  export default {
    data() {
      return {
        
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  #l-admin-header .l-admin-menu {
    position: absolute;
    right: 0px;  
  }

  #l-admin-header .l-admin-menu .el-menu-item {
    padding: 0 5px;  
  }

  #l-admin-header .l-admin-menu .el-menu-item:last-child {
    margin-right: 0px;
  }

  #l-admin-header .l-admin-menu .el-menu-item i:not(.l-admin-menu-dot) {
    color: #999;
    position: relative;
    padding-left: 2px;
    top: -1px;
    border-bottom: 0px;
  }
  
  #l-admin-header .l-admin-menu .el-menu-item.is-active {
    border-bottom: 0px; 
  }

  #l-admin-header .l-admin-menu .l-admin-menu-dot {
    position: relative;
    top: -12px;
    left: -5px;
    font-size: 28px;
    color: red;  
  }

  #l-admin-header .el-menu--horizontal {
    border-bottom: 0px;
  }

</style>
