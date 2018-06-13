<template>
  <el-row>
    <el-col>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>博客管理</el-breadcrumb-item>
        <el-breadcrumb-item>文章列表</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-table :border="true" :data="tableData" highlight-current-row style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="scope">
          <el-form label-width="80px">
            <el-form-item label="缩略图">
              <img :src="scope.row.thumbnail" width="200px">
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column property="title" label="标题"></el-table-column>
      <el-table-column property="author" label="作者" width="80"></el-table-column>
      <el-table-column property="stickPost" label="置顶" width="50"></el-table-column>
      <el-table-column property="overt" label="公开" width="50"></el-table-column>
      <el-table-column property="createTime" label="发布时间" width="100"></el-table-column>
      <el-table-column property="updateTime" label="更新时间" width="100"></el-table-column>
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
      return {
        tableData: [
          {
            "_id":"5a2d48c95738b97164dce2c4",
            "author": "Level.Z",
            "superior":"58ddfb7ed2edf409e0650d4c",
            "title":"浅析JavaScript中的for循环",
            "stickPost": '是',
            "overt": '是',
            "thumbnail":"https://www.51linwei.top/img/thumbnail/1512917192869.jpg",
            "createTime": "2018-08-10",
            "updateTime": "2018-08-10"  
          },
          {
           "_id":"59a2bd665738b97164dce2a2",
            "author": "Level.Z",
           "superior":"58ddfb7ed2edf409e0650d4c",
           "title":"Class浅析",
           "stickPost": '否',
           "overt": '是',
           "createTime": "2018-08-10",
           "updateTime": "2018-08-10", 
           "thumbnail":"https://www.51linwei.top/img/thumbnail/1503837542439.png"
          }
        ],
        currentRow: null
      }
    },
  }

</script>
