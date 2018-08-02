<template>
  <el-col id="l-admin-bashboard" v-loading="loading">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>控制面板</el-breadcrumb-item>
    </el-breadcrumb>
    <el-col class='l-admin-bashboard-title'>博客统计</el-col>
    <el-col :span="6" v-for="(item, index) in basics" :key="index" >
      <el-card>
        <p><span>{{ item.name }}</span>:<span>{{ item.count }}</span></p>
      </el-card>
    </el-col>
    <el-col class='l-admin-bashboard-title'>博客统计</el-col>
    <el-col :span="12">
      <el-card>
        <div id="echart" ref="test" style="width: 500px;height: 200px;"></div>  
      </el-card>
    </el-col>
    
    <el-col :span="12">
      <el-card>
        <el-table :border="true" :data="tasks" style="width: 100%;font-size: 12px">
          <el-table-column label="任务名称" property="name"></el-table-column>
          <el-table-column label="开发人员" property="nominee" width="80"></el-table-column>
          <el-table-column label="进度描述" width="80">
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

  function articlesOptions(data) {
    const legendData = data.map(item => item.name);
    const seriesData = data.map(item => {
      return {
        name: item.name,
        value: item.articleCount,  
      };  
    });
    return {
      title: {
        text: "博客文章分布图",
        x:'center'
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        // data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        data: legendData
      },
      series : [{
        name: '文章数量',
        type: 'pie',
        radius : '55%',
        center: ['50%', '60%'],
        data: seriesData,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    }
  };

  export default {
    layout: 'admin',
    data() {
      // 博客文章总量、当月新增数量、当月阅读次数、当月评论数量
      let chart = {};
      let tasks = [];
      let basics = [];
      let articles = [];
      let loading = false;
      return { chart, tasks, basics, articles, StateType, loading };
    },
    async created() {
      await this.query(); 
    },
    methods: {
      async query() {
        this.loading = true;
        const seletor = {};
        const options = {
          limit: 3,
          sort: { _id: -1 } 
        };
        const tasks = await axios.post('/bg/tasks/query', { seletor, options });
        this.tasks = tasks.data.list;
        const statisticOfBlog = await axios.get('/bg/statistics/blog');
        this.basics = statisticOfBlog.data.basics;
        this.articles = statisticOfBlog.data.articles;
        this.chart.setOption(articlesOptions(this.articles));
        this.loading = false;
      },
      initEchart() {
        this.chart = echarts.init(this.$refs.test); 
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
  .l-admin-bashboard-title {
    margin: 10px 0;  
    font-size: 16px;
  }
</style>
