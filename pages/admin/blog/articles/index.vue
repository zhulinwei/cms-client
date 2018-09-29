<template>
  <el-row id="l-admin-blog-article">
    <el-col>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>博客管理</el-breadcrumb-item>
        <el-breadcrumb-item>文章列表</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-col>
      <el-form :inline="true" :model="article" label-width="80px">
        <el-form-item label="文章目录">
          <el-select v-model="article.catalogId" placeholder="请选择" size="small" @change="query">
            <el-option v-for="catalog in catalogs" :key="catalog._id" :label="catalog.name" :value="catalog._id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文章题目">
          <el-input size="small" v-model="article.title" width="100px"></el-input>
        </el-form-item>
        <el-form-item label="文章详情">
          <el-input size="small" v-model="article.content" width="100px"></el-input>
        </el-form-item>
        <el-form-item> 
          <el-button size="mini" type="primary" @click="query">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-table :border="true" :data="articles" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="scope">
          <el-form label-width="80px">
            <el-form-item label="更新时间">
              <span v-if="scope.row.createTime">{{ scope.row.createTime }}</span>
              <el-tag v-else>-</el-tag>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="缩略图" width="150">
        <template slot-scope="scope">
          <img :src="scope.row.thumbnail" width="120px" height="100px">
        </template>
      </el-table-column>
      <el-table-column property="title" label="标题"></el-table-column>
      <el-table-column property="author" label="作者" width="80"></el-table-column>
      <el-table-column property="isTopDesc" label="置顶" width="50"></el-table-column>
      <el-table-column property="createTime" label="发布时间" width="100"></el-table-column>
      <el-table-column label="编辑管理" width="150">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="editor(scope.row._id)">编辑</el-button>
          <el-button size="mini" type="danger" @click="remove(scope.row._id)">删除</el-button>
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
    data() {
      let count = 0;
      let page = 1;
      let limit = 20;
      let article = {
        title: '',
        content: '', 
        catalogId: '',
      };
      let catalogs = [];
      let articles = [];
      return { count, page, limit, catalogs, article, articles };
    },
    created() {
      this.query();  
    },
    methods: {
      async query() {
        let selector = {};
        let options = {
          fields: { title: 1, isTop: 1, thumbnail: 1, author: 1, createTime: 1 },
          skip: (this.page - 1) * this.limit,
          limit: this.limit,
          sort: { _id: -1 }
        };
        if (this.article.title) selector.title = this.article.title;
        if (this.article.content) selector.content= this.article.content;
        if (this.article.catalogId) selector.catalogId = this.article.catalogId;
        const articles = await axios.post('/bg/blog/articles/query', { selector, options });
        const catalogs = await axios.get('/bg/blog/catalogs');
        this.catalogs = catalogs.data.list;
        this.articles = articles.data.list.map(article => {
          article.isTopDesc = article.isTop ? '是' : '否';  
          article.createTime = moment(article.createTime).format('YYYY-MM-DD');
          return article;
        });
        this.count = articles.data.count;
      },
      editor(id) {
        this.$router.push({path: '/admin/blog/editors', query:{ articleId: id }});
      },
      async remove(id) {
        try {
          await this.$confirm('确定删除?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          });
          await axios.delete(`/bg/blog/articles/${id}`);
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
