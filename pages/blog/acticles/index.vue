<template>
  <div>
      <div class="l-blog-wrapper">
      <div class="l-blog">
        <div class="l-specical">
          <l-acticle-special :acticles="specialActicles"></l-acticle-special>
        </div>
        <div class="l-common" >
          <l-acticle-common :acticles="commonActicles"></l-acticle-common>
          <l-menu @change="catalog" :menus="menus"></l-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import menu from './temp/menu.vue'
  import common from "./temp/common.vue"
  import special from "./temp/special.vue"
  export default {
    layout: 'blog',
    data() {
      this.menus = [];
      let specialActicles = [];
      let commonActicles = [];
      return { specialActicles, commonActicles };
    },
    created() {
      this.query();
    },
    methods: {
      async query() {
        this.menus = [
          { name: "html", value: "HTML" },
          { name: "css", value: "CSS" },
          { name: "JavaScript", value: "JavaScript" },
        ];
        this.specialActicles = [
          { 
            "_id":"5a3612965738b97164dce2c5",
            "catalog":"58ddfb8dd2edf409e0650d4d",
            "title":"Generator函数1",
            "thumbnail": "https://www.51linwei.top/img/thumbnail/1507645939884.jpg",
            "outline":"Generator函数是ES6提供的一种异步编程解决方案，对于Genertor函数有多种理解角度，从语法上可以理解成一个状态机，封装了多个内部状态，在执行Generator函数时会返回，从语法上可以理解成一个状态机，封装了多个内部状态，在执行Generator函数时会返回",
            "content": "这里是详情",
            "isTop": true,
            "comments": 1,
            "reading": 100,
            "createTime": "3个月前"
          }
        ];
        this.commonActicles = [
          { 
            "_id":"5a3612965738b97164dce2c5",
            "catalog":"58ddfb8dd2edf409e0650d4d",
            "title":"Generator函数2",
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
            "thumbnail": "https://www.51linwei.top/img/thumbnail/1507645939884.jpg",
            "outline":"Generator函数是ES6提供的一种异步编程解决方案，对于Genertor函数有多种理解角度，从语法上可以理解成一个状态机，封装了多个内部状态，在执行Generator函数时会返回，从语法上可以理解成一个状态机，封装了多个内部状态，在执行Generator函数时会返回",
            "content": "这里是详情",
            "isTop": true,
            "comments": 1,
            "reading": 100,
            "createTime": "3个月前"
          }
        ];
      },
      catalog() {
        this.commonActicles = [
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
      "l-menu": menu,
      "l-acticle-common": common,
      "l-acticle-special": special,
    }
  }
</script>

<style>
  .l-blog {
    margin: 0 auto;
    padding: 0 10px;
    max-width: 960px;
    overflow: hidden;
  }
  .l-common {
    width: 100%;
    display: flex;
  }
</style>

