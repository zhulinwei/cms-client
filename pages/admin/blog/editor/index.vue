<template>
  <el-row id="l-admin-blog-editor">
    <el-col>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>博客管理</el-breadcrumb-item>
        <el-breadcrumb-item>发表文章</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-form label-width="80px" style="width: 98%">
      <el-form-item label="所属目录" >
        <el-select v-model="form.catalogId" placeholder="请选择">
          <el-option v-for="item in catalogs" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文章大图">
        <l-single-upload :image="thumbnail" :token="token" v-on:finish="uploadFinish"></l-single-upload>  
      </el-form-item>
      <el-form-item label="作者名称">
        <el-select v-model="form.author" clearable allow-create filterable placeholder="请输入">
          <el-option key="Level.Z" label="Level.Z" value="Level.Z"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文章标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="是否置顶">
        <el-switch v-model="form.isTop" active-color="#4C3B2F" inactive-color="#ccc"></el-switch>
      </el-form-item>
      <el-form-item label="文章概要">
        <el-input v-model="form.outline"></el-input>
      </el-form-item>
      <el-form-item label="阅读人数">
        <el-input v-model="form.readCount"></el-input>
      </el-form-item>
      <el-form-item label="文章详情">
        <l-text-editor :content="content" v-on:finish="editorFinish"></l-text-editor>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" size="small" @click="save">保存</el-button>
        <el-button type="success" size="small" @click="finish">完成</el-button>
      </el-form-item>
    </el-form>
  </el-row>
</template>

<script>
  import textEditor from '@/components/editor/textEditor'
  import singleUpload from '@/components/upload/singleUpload'

  import axios from 'axios'

  export default {
    layout: 'admin',
    middleware: 'auth',
    data() {
      let catalogs = [];
      let articleId = '';
      let token = {};
      let form = {
        articleId: '',
        title: '',  
        author: '',  
        outline: '',
        content: '',
        thumbnail: '',
        catalogId: '',
        isTop: false,
        readCount: 0,
      };
      let content = '';
      let thumbnail = '';
      return { catalogs, articleId, form, token, content, thumbnail };
    },
    created() {
      this.articleId = this.$route.query.articleId;
      this.query();
    },
    methods: {
      async query() {
        const catalogs = await axios.get('/bg/blog/catalogs');
        this.catalogs = catalogs.data.list;
        this.form.catalogId = this.catalogs && this.catalogs[0] && this.catalogs[0]._id;
        const token = await axios.get('/bg/qiniu/token?type=blog');
        this.token = token.data;
        if (this.articleId) {
          const article = await axios.get(`/bg/blog/articles/${this.articleId}`).catch(err => {
            console.log(err);
            return {};  
          });
          if (article && article.data && article.data._id) {
            this.form.articleId = article.data._id;
            this.form.isTop = article.data.isTop;
            this.form.title = article.data.title;
            this.form.author = article.data.author;
            this.form.outline = article.data.outline;
            this.form.content = article.data.content;
            this.form.thumbnail = article.data.thumbnail;
            this.form.catalogId = article.data.catalogId;
            this.form.readCount = article.data.readCount;
            this.content = article.data.content;
            this.thumbnail = article.data.thumbnail;
          }
        }
      },
      async uploadFinish() {
        this.form.thumbnail = this.token.key;
        const token = await axios.get('/bg/qiniu/token?type=blog');
        this.token = token.data;
      },
      async editorFinish(html) {
        this.form.content = html;
      },
      async save() {
        if (!this.form.title) return this.$notify.warning('请填写文章题目');
        if (!this.form.author) return this.$notify.warning('请填写文章作者');
        if (!this.form.title) return this.$notify.warning('题目不能为空');
        if (!this.form.content) return this.$notify.warning('文章详情不能为空');
        if (!this.form.outline) return this.$notify.warning('文章摘要不能为空');
        // this.form.outline = this.form.content.replace(/<[^>]*>|/g,"").replace(/&nbsp;/g, '').substr(0, 100); 

        try {
          if (!this.form.articleId) {
            const result = await axios.post('/bg/blog/articles', this.form);
            this.form.articleId = result.data.articleId;
          } else await axios.put(`/bg/blog/articles/${this.form.articleId}`, this.form);
          this.$notify.success('保存成功');
        } catch (err) {
          console.log(err);
          this.$notify.error('发布失败');  
        }
      },
      async finish() {
        await this.save();
        this.form.articleId = '';
        this.form.isTop = false;
        this.form.title = '';
        this.form.author = '';
        this.form.outline = '';
        this.form.content = '';
        this.form.thumbnail = '';
        this.form.catalogId = '';
        this.content = '';
        this.thumbnail = '';
        this.$router.push({ path: '/admin/blog/editors' });
      } 
    },
    components: {
      "l-text-editor": textEditor, 
      "l-single-upload": singleUpload, 
    }
  }
</script>

<style>
  #l-admin-blog-editor .el-form-item__content {
    /* 注意这个值不要随意更改，可能会影响编辑器样式 */
    line-height: 20px;
  }
  #l-admin-blog-editor .el-switch__core {
    margin-top: 20px;
  }
  #l-admin-blog-editor .avatar-uploader-icon:before {
    font-size: 40px;  
    font-weight: 900;
  }
</style>
