<template>
  <div class="l-acticle-common-wrapper">
    <l-title :title="title"></l-title>
    <div class="l-acticle-common">
      <ul v-if="acticles.length">
        <li v-for="(acticle, index) in acticles" :key="index" class="l-acticle-common-item"  @click="detail(acticle)">
          <router-link :to="`/blog/acticles/${acticle._id}`"  @click="detail(acticle)" :acticle="acticle">
            <div class="l-acticle-common-img-wrapper">
              <div class="l-acticle-common-img" :style="{ 'background-image': 'url(' + acticle.thumbnail +')' }"></div>
            </div>
            <div class="l-acticle-common-summary">
              <p class="l-acticle-common-title">{{ acticle.title }}</p>
              <p>{{ acticle.outline }}</p>
              <div class="l-acticle-common-explain">
                <a href="http://www.baidu.com">Level.Z</a>
                <span class="l-acticle-common-dot">.</span>
                <span><a href="">{{ acticle.commentsCount }}条评论</a></span>
                <span class="l-acticle-common-dot">.</span>
                <span>{{ acticle.readCount }}次阅读</span>              
                <!--<span>{{ acticle.createTime }}</span>-->
              </div>
            </div>
          </router-link>
        </li>
      </ul>
      <p v-else>暂无{{ title }}</p>
      <p class="l-loading-more" v-if="residue > 0"><a @click="nextList" src="javascript:;">点击加载更多~</a></p>
      <p class="l-loading-more" v-else>已经到底线啦~</p>
    </div>
  </div>
</template>

<script>
  import title from "./title.vue"
  export default {
    props: [ 'acticles', 'residue' ],
    data() {
      let title = "最新文章";
      return { title };
    },
    methods: {
      detail(acticle) {
        // this.acticle = acticle;
      },
      nextList() {
        this.$emit('nextList');  
      }
    },
    components: {
      "l-title": title,
    }
  }
</script>

<style>
  .l-acticle-common-wrapper {
    flex: 1;  
  }
  .l-acticle-common {
    overflow: hidden;
  }
  .l-acticle-common-item {
    padding: 10px;
    margin-bottom: 10px;
    background-color: #fff;
  }
  .l-acticle-common-img-wrapper {
    width: 100%;
    height: 180px;
    display: block;
  }
  .l-acticle-common-img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 5px;
    background-size: cover;
    background-color: #f7f8f9;
    background-position: center;
  }
  .l-acticle-common-summary {
    line-height: 1.7;
    overflow: hidden;
    color: #666;
  }
  .l-acticle-common-title {
    padding: 2px 0;
    color: #333;
    overflow: hidden;
    font-size: 14px;
  }
  .l-acticle-common-explain {
    padding-top: 10px;
    text-align: right;
  }
  .l-acticle-common-dot {
    position: relative;
    top: -4px;
  }
  .l-loading-more {
    padding: 10px;
    text-align: center;
  }
  @media (min-width: 479px) {
    .l-acticle-common-item {
      width: 96%;
      background-color: #fff;
    }
    .l-acticle-common-img-wrapper {
      width: 38%;
      flex: 2;
      display: inline-block;
      height: 180px;
      overflow: hidden;
    }
    .l-acticle-common-img {
      height: 100%;
      overflow: hidden;
      border-radius: 5px;
      position: relative;
      background-size: cover;
      background-position: center;
    }
    .l-acticle-common-summary {
      width: 56%;
      margin: 0 auto;
      line-height: 1.7;
      padding-left: 2%;
      vertical-align: top;
      display: inline-block;
    }
  }
</style>

