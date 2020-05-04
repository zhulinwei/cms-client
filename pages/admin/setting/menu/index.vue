
<template>
  <el-row id="l-admin-blog-catalogs"> 
    <el-col>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>系统管理</el-breadcrumb-item>
        <el-breadcrumb-item>菜单列表</el-breadcrumb-item>
        <el-breadcrumb-item v-if="oneLevelMenuId">{{ oneLevelMenuName }}</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-col style="margin-bottom: 15px">
      <el-button size="mini" type="primary" @click="returnBack" v-if="oneLevelMenuId">返回</el-button>
      <el-button size="mini" type="success" @click="add">添加</el-button>
    </el-col>
    <el-table :border="true" :data="menus" style="width: 100%">

      <el-table-column type="expand">
        <template slot-scope="scope">
          <el-form label-width="80px">
            <el-form-item label="创建时间:" v-if="scope.row.createTime">
              <span>{{ scope.row.createTime }}</span>
            </el-form-item>

            <el-form-item label="更新时间:" v-if="scope.row.updateTime">
              <span >{{ scope.row.updateTime }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>

      <el-table-column property="name" label="菜单名称"></el-table-column>
      <el-table-column property="typeDesc" label="菜单类型"></el-table-column>
      <el-table-column label="菜单图标" width="80">
        <template slot-scope="scope">
          <span><i class="fa" :class="scope.row.icon" aria-hidden="true"></i></span>
        </template>
      </el-table-column>
      <el-table-column property="url" label="菜单地址"></el-table-column>

      <el-table-column label="编辑管理" width="250">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="editor(scope.row)">编辑</el-button>
          <el-button size="mini" type="success" @click="setting(scope.row)" v-if="isOneLevel(scope.row.type)">设置</el-button>
          <el-button size="mini" type="danger" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="title" :visible.sync="menuDialog" width="30%">
      <el-form :model="form">
        <el-form-item label="菜单名称" label-width="80px">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="菜单图标" label-width="80px">
          <el-input v-model="form.icon" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="菜单地址" label-width="80px">
          <el-input v-model="form.url" auto-complete="off"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="menuDialog = false" size="mini">取 消</el-button>
        <el-button type="primary" @click="save" size="mini">确 定</el-button>
      </div>
    </el-dialog>
  </el-row>
</template>

<script>
  import axios from 'axios';
  import moment from 'moment'

  const MenuType = {
    ONE_LEVEL: 'one_level',
    TWO_LEVEL: 'two_level',
  };

  export default {
    layout: 'admin',
    middleware: 'auth',
    created() {
      this.query(); 
    },
    data() {
      let title = '';
      let menus = [];
      let menuDialog = false;
      let form = {
        _id: '',
        url: '',
        name: '',
        icon: '',
        parentId: '',
      };
      let oneLevelMenuId = '';
      let oneLevelMenuName = '';

      return { title, menus, menuDialog, form, oneLevelMenuId, oneLevelMenuName };
    },
    methods: {
      async query(selector) {
        selector = selector || { type: MenuType.ONE_LEVEL };
        const menus = await axios.post('/bg/settings/menus/query', { selector });
        this.menus = menus.data.list.map(menu => {
          menu.typeDesc = menu.type == MenuType.ONE_LEVEL ? '一级菜单' : '二级菜单';
          menu.createTime = moment(menu.createTime).format('YYYY-MM-DD HH:mm:ss');
          menu.updateTime = moment(menu.updateTime).format('YYYY-MM-DD HH:mm:ss');
          return menu;
        });
      },
      refresh() {
        if (this.oneLevelMenuId) this.query({ parentId: this.oneLevelMenuId });
        else this.query();
      },
      add() {
        this.title = '新增目录';
        this.menuDialog = true;
        this.form._id = '';
        this.form.url = '';
        this.form.icon = '';
        this.form.name = '';
        if (this.oneLevelMenuId) this.form.parentId = this.oneLevelMenuId;
      },
      editor(menu) {
        this.title = '编辑目录';  
        this.menuDialog = true;
        this.form._id = menu._id;
        this.form.url = menu.url;
        this.form.name = menu.name;
        this.form.icon = menu.icon;
        this.form.parentId = menu.parentId;
      },
      async save() {
        if (!this.form.url) return this.$notify.warning('无效的菜单地址');
        if (!this.form.name) return this.$notify.warning('无效的菜单名称');
        if (!this.form.icon) return this.$notify.warning('无效的菜单图标');
        try {
          if (this.form._id) await axios.put(`/bg/settings/menus/${this.form._id}`, this.form);
          else await await axios.post('/bg/settings/menus', this.form);
          this.form._id = '';
          this.form.url = '';
          this.form.name = '';
          this.form.icon = '';
          this.form.parentId = '';
          this.menuDialog = false;
          this.$notify.success(`${this.title}成功`);
          this.refresh();
        } catch(err) {
          console.log(err);  
          this.$notify.error(`${this.title}失败`);
        }
      },
      async remove(menu) {
       try {
         await this.$confirm('确定删除?', '提示', {
           confirmButtonText: '确定',
           cancelButtonText: '取消',
           type: 'warning'
         });
         await axios.delete(`/bg/settings/menus/${menu._id}`);
         this.$notify.success('删除成功');
         this.refresh();
       } catch (err) {
         if (err === 'cancel') return;
         console.log(err);
         this.$notify.error('删除失败');  
       }        
      },
      setting(menu) {
        this.oneLevelMenuId = menu._id;
        this.oneLevelMenuName = menu.name;
        this.refresh({ parentId: menu._id });
      },
      isOneLevel(type) {
        return type && type == MenuType.ONE_LEVEL;
      },
      returnBack() {
        this.oneLevelMenuId = '';
        this.oneLevelMenuName = '';
        this.refresh();
      },
    } 
  }
</script>
