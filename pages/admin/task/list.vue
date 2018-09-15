<template>
  <el-row id="l-admin-task-list">
    <el-col>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>任务管理</el-breadcrumb-item>
        <el-breadcrumb-item>任务列表</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-col style="margin-bottom: 15px">
      <el-button size="mini" type="success" @click="add">添加</el-button>
    </el-col>
    <el-table :border="true" :data="tasks" style="width: 100%">
      <el-table-column label="任务名称" property="name"></el-table-column>
      <el-table-column label="开发人员" property="nominee"></el-table-column>
      <el-table-column label="进度描述">
        <template slot-scope="scope">
          <el-tag v-show="scope.row.status === StateType.INIT" type="info" size="small">待开发</el-tag>
          <el-tag v-show="scope.row.status === StateType.WORKING" type="primary" size="small">进行中</el-tag>
          <el-tag v-show="scope.row.status === StateType.FINISHED" type="success" size="small">已完成</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="编辑管理" width="150">
        <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="editor(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="remove(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table> 
    <el-dialog :title="title" :visible.sync="taskDialog" width="50%">
      <el-form :model="form">
        <el-form-item label="任务名称" label-width="80px">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="开发人员" label-width="80px">
          <el-select v-model="form.nominee" clearable allow-create filterable placeholder="请输入">
            <el-option key="Level.Z" label="Level.Z" value="Level.Z"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="任务进度" label-width="80px" v-show="form._id">
          <el-select v-model="form.status" placeholder="请选择">
            <el-option v-for="item in statusType" :key="item.label" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="taskDialog = false" size="mini">取 消</el-button>
        <el-button type="primary" @click="save" size="mini">确 定</el-button>
      </div>

    </el-dialog>
    <el-pagination layout="prev, pager, next" :total="count" @current-change="changePage" :page-size="limit"></el-pagination>
  </el-row>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'

  const StateType = {
    INIT: 0,
    WORKING: 1,
    FINISHED: 2 
  };

  export default {
    layout: 'admin',
    data() {
      let count = 0;
      let page = 1;
      let limit = 20;
      let tasks = [];
      let form = {
        _id: '',
        name: '',
        nominee: 'Level.Z',  
        status: 0
      };
      let title = '';
      let taskDialog = false; 
      let statusType = [
        { label: '待完成', value: StateType.INIT },
        { label: '进行中', value: StateType.WORKING },
        { label: '已完成', value: StateType.FINISHED },
      ];
      return { count, page, limit, tasks, StateType, form, title, taskDialog, statusType };
    },
    created() {
      this.query();  
    },  
    methods: {
      async query() {
        let seletor = {};
        let options = {
          skip: (this.page - 1) * this.limit,
          limit: this.limit,
          sort: { status: 1, _id: -1 }
        };
        const tasks = await axios.post('/bg/tasks/query', { seletor, options });
        console.log(tasks);
        this.tasks = tasks.data.list;
        this.count = tasks.data.count;
      },
      add() {
        this.title = '新增任务';
        this.taskDialog = true;
      },
      editor(task) {
        console.log(task)
        this.title = '编辑任务';
        this.form._id = task._id;
        this.form.name = task.name; 
        this.form.nominee = task.nominee; 
        this.form.status = task.status; 
        this.taskDialog = true;
      },
      async save() {
        if (!this.form.name) return this.$notify.warning('无效的任务名称');
        if (!this.form.nominee) return this.$notify.warning('无效的任务开发人员');
        try {
          if (this.form._id) await axios.put(`/bg/tasks/${this.form._id}`, this.form);
          else await await axios.post('/bg/tasks', this.form);
          this.form._id = '';
          this.form.name = '';
          this.form.nominee = '';
          this.taskDialog = false;
          this.$notify.success(`${this.title}成功`);
          this.query();
        } catch(err) {
          console.log(err);  
          this.$notify.error(`${this.title}失败`);
        }
      },
      async remove(id) {
        try {
          await this.$confirm('确定删除?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          });
          await axios.delete(`/bg/tasks/${id}`);
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
