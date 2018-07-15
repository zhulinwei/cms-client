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
        <el-input v-model="form.author"></el-input>
      </el-form-item>
      <el-form-item label="文章标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="是否置顶">
        <el-switch v-model="form.isTop" active-color="#4C3B2F" inactive-color="#ccc"></el-switch>
      </el-form-item>
      <el-form-item label="文章详情">
        <l-text-editor :content="content" v-on:finish="editorFinish"></l-text-editor>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" size="small" @click="save">发布</el-button>
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
    data() {
      let catalogs = [];
      let acticleId = '';
      let token = {};
      let form = {
        acticleId: '',
        title: '',  
        outline: '',
        content: '',
        thumbnail: '',
        catalogId: '',
        isTop: false,
      };
      let content = '';
      let thumbnail = '';
      return { catalogs, acticleId, form, token, content, thumbnail };
    },
    created() {
      this.acticleId = this.$route.query.acticleId;
      this.query();
    },
    methods: {
      async query() {
        const catalogs = await axios.get('/bg/blog/catalogs');
        this.catalogs = catalogs.data.list;
        this.form.catalogId = this.catalogs && this.catalogs[0] && this.catalogs[0]._id;
        const token = await axios.get('/bg/blog/qiniu/token');
        this.token = token.data;
        if (this.acticleId) {
          const acticle = await axios.get(`/bg/blog/acticles/${this.acticleId}`).catch(err => {
            console.log(err);
            return {};  
          });
          if (acticle && acticle.data && acticle.data._id) {
            this.form.acticleId = acticle.data._id;
            this.form.isTop = acticle.data.isTop;
            this.form.title = acticle.data.title;
            this.form.author = acticle.data.author;
            this.form.content = acticle.data.content;
            this.form.thumbnail = acticle.data.thumbnail;
            this.content = acticle.data.content;
            this.thumbnail = acticle.data.thumbnail;
          }
        }
      },
      async uploadFinish() {
        this.form.thumbnail = this.token.key;
        const token = await axios.get('/bg/blog/qiniu/token');
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
        this.form.outline = this.form.content.substr(0, 100); 
        try {
          if (this.form.acticleId) await axios.put(`/bg/blog/acticles/${this.form.acticleId}`, this.form);
          else await axios.post('/bg/blog/acticles', this.form);
          this.$notify.success('发布成功');
        } catch (err) {
          console.log(err);
          this.$notify.error('发布失败');  
        }
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
    line-height: 0px;  
  }
  #l-admin-blog-editor .el-switch__core {
    margin-top: 20px;
  }
  #l-admin-blog-editor .avatar-uploader-icon:before {
    font-size: 40px;  
    font-weight: 900;
  }
</style>
