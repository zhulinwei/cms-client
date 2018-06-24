<template>
  <!--懒得调试布局，直接借用el-row-->
  <el-row>
    <div class="l-search-wrapper">
      <div class="l-search">
          <div class="l-search-img-wrapper">
            <img src="./search.jpg" width="20px" alt="">
          </div>
          <input type="text" v-model="keyword" placeholder="请输入搜索关键字">
          <button @click="query()">搜索</button>
      </div>
      <l-search :acticles="acticles"></l-search>
    </div>
  </el-row>
</template>

<script>
  import search from './search.vue'
  export default {
    layout: 'blog',
    data() {
      let keyword = '';
      let acticles = [];
      return { keyword, acticles }
    },
    created() {
      this.acticles = [];  
    },
    methods: {
      query() {
         this.acticles = [
          { 
            "_id":"5a3612965738b97164dce2c5",
            "catalog":"58ddfb8dd2edf409e0650d4d",
            "title":"Generator函数2",
            // "thumbnail":"1513493142038.jpg",
            "thumbnail": "https://www.51linwei.top/img/thumbnail/1507645939884.jpg",
            "outline":"Generator函数是ES6提供的一种异步编程解决方案，对于Genertor函数有多种理解角度，从语法上可以理解成一个状态机，封装了多个内部状态，在执行Generator函数时会返回，从语法上可以理解成一个状态机，封装了多个内部状态，在执行Generator函数时会返回",
            "content": "这里是详情",
            "isTop": true,
            "comments": 1,
            "reading": 100,
            "createTime": "3个月前"
          },
          { 
            "_id":"5a3612965738b97164dce2c5",
            "catalog":"58ddfb8dd2edf409e0650d4d",
            "title":"Generator函数2",
            // "thumbnail":"1513493142038.jpg",
            "thumbnail": "https://www.51linwei.top/img/thumbnail/1507645939884.jpg",
            "outline":"Generator函数是ES6提供的一种异步编程解决方案，对于Genertor函数有多种理解角度，从语法上可以理解成一个状态机，封装了多个内部状态，在执行Generator函数时会返回，从语法上可以理解成一个状态机，封装了多个内部状态，在执行Generator函数时会返回",
            "content": "这里是详情",
            "isTop": true,
            "comments": 1,
            "reading": 100,
            "createTime": "3个月前"
          }
        ];
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

</style>
