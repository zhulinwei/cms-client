
<template>
  <el-row id="l-admin-blog-comments"> 
    <el-col>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>博客管理</el-breadcrumb-item>
        <el-breadcrumb-item>评论列表</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-table :border="true" :data="comments" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="scope">
          <el-form label-width="80px">
            <el-form-item label="评论时间">
              <span v-if="scope.row.createTime">{{ scope.row.createTime }}</span>
              <el-tag v-else>-</el-tag>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>

      <el-table-column property="nickname" label="用户昵称" width="100"></el-table-column>
      <el-table-column property="content" label="内容"></el-table-column>
      <el-table-column property="acticle.title" label="文章标题"></el-table-column>
      <el-table-column label="回复评论">
        <template slot-scope="scope">
          <span v-if="scope.row.to && scope.row.to.content">{{ scope.row.to.content }}</span>
          <el-tag type="mini" v-else>-</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="编辑管理" width="150">
        <template slot-scope="scope">
          <!--TODO 回复待完成 --> 
          <!--<el-button size="mini" type="primary" @click="handleDelete(scope.$index, scope.row)">回复</el-button>-->
          <el-button size="mini" type="danger" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination layout="prev, pager, next" :total="count" @current-change="changePage" :page-size="limit"></el-pagination>
  </el-row>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'
  export default {
    layout: 'admin',
    created() {
      this.query();  
    },
    data() {
      let page = 1;
      let count = 0;
      let limit = 20;
      let comments = [];

      return { page, count, limit, comments };
    },
    methods: {
      async query() {
        let selector = {};
        let options = { 
          skip: (this.page - 1) * this.limit,
          limit: this.limit,
          sort: { _id: -1 } 
        };
        const comments = await axios.post('/bg/blog/comments/query', { selector, options }); 
        this.comments = comments.data.list.map(comment => {
          comment.createTime = moment(comment.createTime).format('YYYY-MM-DD HH:mm:ss');
          return comment;  
        });
        this.count = comments.data.count;
        console.log(comments.data)
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      async remove(comment) {
        try {
          await this.$confirm('确定删除?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          });
          await axios.delete(`/bg/blog/comments/${comment._id}`);
          this.$notify.success('删除成功');
          this.query();
        } catch (err) {
          if (err === 'cancel') return;
          console.log(err);
          this.$notify.error('删除失败');  
        }
      },
      changePage(page) {
        this.page = page;
        this.query();
      }
    } 
  }
</script>
