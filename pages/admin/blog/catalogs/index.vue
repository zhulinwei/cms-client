<template>
  <el-row id="l-admin-blog-catalogs"> 
    <el-col>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>博客管理</el-breadcrumb-item>
        <el-breadcrumb-item>目录列表</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-col style="margin-bottom: 15px">
      <el-button size="mini" type="success" @click="add">添加</el-button>
    </el-col>
    <el-table :border="true" :data="catalogs" style="width: 100%">
      <el-table-column type="index" width="50"></el-table-column> 
      <el-table-column property="name" label="目录名称"></el-table-column>
      <el-table-column property="acticleCount" label="文章数量"></el-table-column>
      <el-table-column label="编辑管理" width="150">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="editor(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="title" :visible.sync="catalogDialog" width="30%">
      <el-form :model="form">
        <el-form-item label="名称" label-width="40px">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="权重" label-width="40px">
          <el-input v-model="form.weight" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="catalogDialog = false" size="mini">取 消</el-button>
        <el-button type="primary" @click="save" size="mini">确 定</el-button>
      </div>
    </el-dialog>
  </el-row>
</template>

<script>
  import axios from 'axios';

  export default {
    layout: 'admin',
    created() {
      this.query(); 
    },
    data() {
      let title = '';
      let catalogs = [];
      let catalogDialog = false;
      let form = {
        _id: '',
        name: '',
        weight: '',  
      };
      return { title, catalogs, catalogDialog, form };
    },
    methods: {
      async query() {
        const catalogs = await axios.get('/bg/blog/catalogs');
        this.catalogs = catalogs.data.list;
      },
      add() {
        this.title = '新增目录';
        this.catalogDialog = true;
      },
      editor(catalog) {
        this.title = '编辑目录';  
        this.catalogDialog = true;
        this.form._id = catalog._id;
        this.form.name = catalog.name;
        this.form.weight = catalog.weight;
      },
      async save() {
        if (!this.form.name) return this.$notify.warning('无效的目录名称');
        if (!this.form.weight) return this.$notify.warning('无效的目录权重');
        try {
          if (this.form._id) await axios.put(`/bg/blog/catalogs/${this.form._id}`, this.form);
          else await await axios.post('/bg/blog/catalogs', this.form);
          this.form._id = '';
          this.form.name = '';
          this.form.weight = '';
          this.catalogDialog = false;
          this.$notify.success(`${this.title}成功`);
          this.query();
        } catch(err) {
          console.log(err);  
          this.$notify.error(`${this.title}失败`);
        }
      },
      async remove(catalog) {
        try {
          await this.$confirm('确定删除?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          });
          await axios.delete(`/bg/blog/catalogs/${catalog._id}`);
          this.$notify.success('删除成功');
          this.query();
        } catch (err) {
          if (err === 'cancel') return;
          console.log(err);
          this.$notify.error('删除失败');  
        }        
      }
    } 
  }
</script>
