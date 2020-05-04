<template>
  <el-row id="l-admin-header">
    <el-menu class="l-admin-menu" mode="horizontal" @select="handleSelect">
      <el-menu-item index="0"> 
        <el-popover placement="bottom" trigger="click">
          <p v-if="gridData && gridData.length < 1" style="text-align: center">暂无更多消息</p>
          <el-table v-else :data="gridData">
            <el-table-column width="150" property="date" label="日期"></el-table-column>
            <el-table-column width="100" property="name" label="姓名"></el-table-column>
            <el-table-column width="300" property="address" label="地址"></el-table-column>
          </el-table>
          <span slot="reference" class="hidden-xs-only">系统消息<i class="fa fa-bell" aria-hidden="true"></i> <i class="l-admin-menu-dot" >.</i> </span>
        </el-popover>
      </el-menu-item>
      <!--
      <el-menu-item index="1">
        <span class="hidden-xs-only">系统消息</span>
          <i class="fa fa-bell" aria-hidden="true"></i>
          <i class="l-admin-menu-dot">.</i>
        </el-menu-item>
        -->
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
        gridData: [] 
      };
    },
    methods: {
      handleSelect(key, keyPath) {
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
    border-bottom: 0px;
  }
  
  #l-admin-header .l-admin-menu .el-menu-item.is-active {
    border-bottom: 0px; 
  }

  #l-admin-header .l-admin-menu .l-admin-menu-dot {
    position: fixed;
    top: -12px;
    left: -50px;
    font-size: 28px;
    color: red;  
  }

  #l-admin-header .el-menu--horizontal {
    border-bottom: 0px;
  }

  #l-admin-header .fa-bell {
    positive: relative;
    top: -2px;   
  }

</style>
