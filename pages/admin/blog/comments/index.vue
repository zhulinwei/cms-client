
<template>
  <el-row> 
    <el-col>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>博客管理</el-breadcrumb-item>
        <el-breadcrumb-item>评论列表</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-table :border="true" :data="tableData" highlight-current-row style="width: 100%">
      <el-table-column type="index" width="50"></el-table-column> 
      <el-table-column property="from.nickName" label="用户昵称" width="100"></el-table-column>
      <el-table-column property="content" label="内容"></el-table-column>
      <el-table-column property="acticle.title" label="文章标题"></el-table-column>
      <el-table-column property="createTime" label="评论时间" width="100"></el-table-column>
      <el-table-column label="回复评论">
        <template slot-scope="scope">
          <span v-if="scope.row.to && scope.row.to.content">{{ scope.row.to.content }}</span>
          <el-tag type="mini" v-else>-</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="编辑管理" width="150">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleDelete(scope.$index, scope.row)">回复</el-button>
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
          "_id":"5a5de204d5c79c099bef2fec",
          "acticle":{"_id":"590a026b0b434c03dfa051d3","title":"HTTP协议"},
          "from":{
            "_id":"DF2C1EC6DAB07D8AD2249D55B9F7F55C",
            "nickName":"0",
            "thumbnail":"http://q.qlogo.cn/qqapp/101405670/DF2C1EC6DAB07D8AD2249D55B9F7F55C/40",
            "meta":{"updateAt":1516102137389,"createAt":1516102137389},"__v":0
          },
         "to":{
            "_id":"DF2C1EC6DAB07D8AD2249D55B9F7F55C",
            "nickName":"0",
            "thumbnail":"http://q.qlogo.cn/qqapp/101405670/DF2C1EC6DAB07D8AD2249D55B9F7F55C/40",
            "content": '这里是被回复的内容'
          },
          "content":"你是真的皮",
          "createTime": "2018-08-10 12:00:00",
          "__v":0
        },
        {
          "_id":"5a4b9cb25738b97164dce2c6",
          "acticle":{"_id":"59dcd9f45738b97164dce2b6","title":"二叉树详解"},
          "from":{
            "_id":"EC1592409372FC2DA097FC5D5EB8D30A",
            "nickName":"小粥",
            "thumbnail":"http://q.qlogo.cn/qqapp/101405670/EC1592409372FC2DA097FC5D5EB8D30A/40",
            "meta":{"updateAt":1496478870860,"createAt":1496478870860},"__v":0
          },
          "content":"倾向于平衡二叉树",
          "createTime": "2018-08-10 12:00:00",
          "to":null,"__v":0
        },
        {
          "_id":"599171085738b97164dce29d",
          "superior":{"_id":"59906b725738b97164dce29c","title":"设计模式入门教程"},
          "from":{
            "_id":"784C56B4B1E7E424C9CDF9CE829C3A99",
            "nickName":"蓝  洛",
            "thumbnail":"http://q.qlogo.cn/qqapp/101405670/784C56B4B1E7E424C9CDF9CE829C3A99/40",
            "meta":{"updateAt":1496846118438,"createAt":1496846118438},"__v":0
          },
          "content":"66666，板凳已经搬好了，坐等更新",
          "meta":{"createAt":"2018-01-02"},
          "to":null,"__v":0
        }
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
