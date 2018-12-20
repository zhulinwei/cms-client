<template>
  <el-row id="l-admin-settings">
    <el-col>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>系统设置</el-breadcrumb-item>
        <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-table :border="true" :data="tableData" highlight-current-row style="width: 100%">
      <el-table-column property="name" label="昵称"></el-table-column>
      <el-table-column property="avatar" label="头像" width="80">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" width="60px" >
        </template>
      </el-table-column>
      <el-table-column property="desc" label="描述"></el-table-column>
      <el-table-column label="编辑管理" width="150">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination layout="prev, pager, next" :total="50"></el-pagination>

  </el-row>
</template>

<script>
  export default {
    layout: 'admin',
    data() {
      const tableData = [
        {
          "_id":"5a2d48c95738b97164dce2c4",
          "name": "Level.Z",
          "avatar":"http://image.51linwei.top/5b271e361f065f167e8fef8c",
          "desc": "超级管理员"
        },{
          "_id":"5a2d48c95738b97164dce2c4",
          "name": "test",
          "avatar":"http://image.51linwei.top/5b271e611f065f167e8fef91",
          "desc": "游客"
        },
      ];
      return { tableData }
    }  
  }
</script>
