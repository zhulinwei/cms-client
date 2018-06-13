<template>
  <el-row> 
    <el-col>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>博客管理</el-breadcrumb-item>
        <el-breadcrumb-item>目录列表</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-table :border="true" :data="tableData" highlight-current-row style="width: 100%">
      <el-table-column type="index" width="50"></el-table-column> 
      <el-table-column property="name" label="目录名称"></el-table-column>
      <el-table-column property="count" label="文章数量"></el-table-column>
      <el-table-column label="编辑管理" width="150">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-row>
</template>

<script>
  export default {
    layout: 'admin',
    data() {
      return {
        tableData: [
          {"_id":"58dd09d5cef0a328d818e898","name":"HTML", count: 1},
          {"_id":"58dd0a6ecef0a328d818e899","name":"CSS", count: 1},
          {"_id":"58ddfb7ed2edf409e0650d4c","name":"JavaScript", count: 1},
          {"_id":"58ddfb8dd2edf409e0650d4d","name":"NodeJS", count: 1},
          {"_id":"58ddfbfbd2edf409e0650d4f","name":"Linux/Mac", count: 1},
          {"_id":"58ddfc03d2edf409e0650d50","name":"数据库", count: 1},
          {"_id":"58ddfc12d2edf409e0650d51","name":"数据结构与算法", count: 1},
          {"_id":"58ddfc19d2edf409e0650d52","name":"设计模式", count: 1}
        ],
        currentRow: null
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    } 
  }
</script>
