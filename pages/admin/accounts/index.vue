<template>
  <el-row id="l-admin-accounts">
    <el-col>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>博客管理</el-breadcrumb-item>
        <el-breadcrumb-item>账号设置</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>

    <el-form label-width="80px" style="width: 98%;">
      <el-form-item label="账号名称">
        <el-input></el-input>
      </el-form-item> 
    
      <el-form-item label="更新密码">
        <el-input></el-input>
      </el-form-item> 

      <el-form-item label="确认密码">
        <el-input></el-input>
      </el-form-item> 

      <el-form-item label="">
        <el-button type="primary" size="small">确定</el-button>
      </el-form-item> 

    </el-form>
  </el-row>
</template>

<script>
  export default {
    layout: 'admin',
    data() {
      return {};  
    }  
  }
</script>
