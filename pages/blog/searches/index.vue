<template>
  <!--懒得调试布局，直接借用el-row-->
  <el-row v-loading="loading">
    <div class="l-search-wrapper" >
      <div class="l-search">
          <div class="l-search-img-wrapper">
            <img src="./search.jpg" width="20px" alt="">
          </div>
          <input type="text" v-model="keyword" placeholder="请输入搜索关键字">
          <button @click="query()">搜索</button>
      </div>
      <l-search :acticles="acticles"></l-search>
      <p class="l-search-tip" v-show="tip">非常抱歉，暂时没有搜索到相关内容~</p>
    </div>
  </el-row>
</template>

<script>
  import search from './search.vue'

  import axios from 'axios'
  export default {
    layout: 'blog',
    data() {
      let tip = false;
      let loading = false;
      let keyword = '';
      let acticles = [];
      return { tip, keyword, acticles, loading }
    },
    created() {
      this.acticles = [];  
    },
    methods: {
      async query() {
        if (!this.keyword) return this.$notify.warning('请输出关键字');
        this.loading = true;
        const result = await axios.get(`/api/blog/search?keyword=${this.keyword}`);
        if (result.data.list && result.data.list.length <1) this.tip = true;
        else this.tip = false;
        this.acticles = result.data.list;
        this.loading = false;
      }
    },
    components: {
      "l-search": search,
    }
  }
</script>

<style>
  .l-search-wrapper {
    max-width: 960px;
    margin: 0 auto;
  }
  .l-search {
    display: flex;
    margin: 10px 0;
    background-color: #fff;
  }
  .l-search-img-wrapper {
    flex: 0 0 20px;
    vertical-align: middle
  }
  .l-search-img-wrapper img {
    padding: 4px 0 0 10px;
  }
  .l-search input {
    padding: 0 10px;
    flex-grow: 2;
    height: 30px;
    border: none;
  }
  .l-search button {
    border: none;
    outline: none;
    padding: 0 10px;
  }
  .l-search-tip {
    text-align: center;  
  }
</style>
