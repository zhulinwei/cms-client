<template>
  <el-col id="l-admin-bashboard">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>控制面板</el-breadcrumb-item>
    </el-breadcrumb>

    <el-col class='a'>博客统计</el-col>
    <el-col :span="6" v-for="(o) in 4" :key="o" >
      <el-card>
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">123</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </el-card>
    </el-col>

    <el-col class='a'>博客统计</el-col>
    <el-col :span="12">
      <el-card>
        <div id="echart" ref="test" style="width: 500px;height: 200px;"></div>  
      </el-card>
    </el-col>
    
    <el-col :span="12">
      <el-card>
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
        </el-table> 
      </el-card>
    </el-col>
  </el-col>
</template>

<script>
  import axios from 'axios'
  import echarts from 'echarts'

  const StateType = {
    INIT: 0,
    WORKING: 1,
    FINISHED: 2 
  };

  const option = {
title : {
text: '某站点用户访问来源',
      subtext: '纯属虚构',
      x:'center'
        },
tooltip : {
trigger: 'item',
         formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
legend: {
orient: 'vertical',
        left: 'left',
        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
series : [
         {
name: '访问来源',
      type: 'pie',
      radius : '55%',
      center: ['50%', '60%'],
      data:[
      {value:335, name:'直接访问'},
      {value:310, name:'邮件营销'},
      {value:234, name:'联盟广告'},
      {value:135, name:'视频广告'},
      {value:1548, name:'搜索引擎'}
      ],
      itemStyle: {
emphasis: {
shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
      }
         }
        ]
  };

  export default {
    layout: 'admin',
    data() {
      // 博客文章总量、当月新增数量、当月阅读次数、当月评论数量
      let tasks = [];
      return {
        tasks, StateType 
      }
    },
    created() {
      this.query();  
    },
    methods: {
      async query() {
        const seletor = {};
        const options = {
          limit: 5  
        };
        const tasks = await axios.post('/bg/tasks/query', { seletor, options });
        this.tasks = tasks.data.list;
        console.log(this.tasks)
      },
      initEchart() {
        const chart1 = echarts.init(this.$refs.test); 
        chart1.setOption(option);
      } 
    },
    mounted() {
      console.log('in')
      this.initEchart();
    },

    components: {
      // 'l-test': test  
    }
  }
</script>

<style>
  #l-admin-bashboard .el-card {
    margin-right: 10px;  
  } 
  .a {
    margin: 10px 0;  
    font-size: 16px;
  }
</style>
