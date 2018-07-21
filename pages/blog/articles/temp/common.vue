<template>
  <div class="l-article-common-wrapper">
    <l-title :title="title"></l-title>
    <div class="l-article-common">
      <ul v-if="articles.length">
        <li v-for="(article, index) in articles" :key="index" class="l-article-common-item"  @click="detail(article)">
          <router-link :to="`/blog/articles/${article._id}`"  @click="detail(article)" :article="article">
            <div class="l-article-common-img-wrapper">
              <div class="l-article-common-img" :style="{ 'background-image': 'url(' + article.thumbnail +')' }"></div>
            </div>
            <div class="l-article-common-summary">
              <p class="l-article-common-title">{{ article.title }}</p>
              <p>{{ article.outline }}</p>
              <div class="l-article-common-explain">
                <a href="http://www.baidu.com">Level.Z</a>
                <span class="l-article-common-dot">.</span>
                <span><a href="">{{ article.commentsCount }}条评论</a></span>
                <span class="l-article-common-dot">.</span>
                <span>{{ article.readCount }}次阅读</span>              
                <!--<span>{{ article.createTime }}</span>-->
              </div>
            </div>
          </router-link>
        </li>
      </ul>
      <p v-else>暂无{{ title }}</p>
      <p class="l-loading-more" v-if="articles.length && residue"><a @click="nextList" src="javascript:;">点击加载更多~</a></p>
      <p class="l-loading-more" v-else-if="articles.length && !residue">已经到底线啦~</p>
    </div>
  </div>
</template>

<script>
  import title from "./title.vue"
  export default {
    props: [ 'articles', 'residue' ],
    data() {
      let title = "最新文章";
      return { title };
    },
    methods: {
      detail(article) {
        // this.article = article;
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
  .l-article-common-wrapper {
    flex: 1;  
  }
  .l-article-common {
    overflow: hidden;
  }
  .l-article-common-item {
    padding: 10px;
    margin-bottom: 10px;
    background-color: #fff;
  }
  .l-article-common-img-wrapper {
    width: 100%;
    height: 180px;
    display: block;
  }
  .l-article-common-img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 5px;
    background-size: cover;
    background-color: #f7f8f9;
    background-position: center;
  }
  .l-article-common-summary {
    line-height: 1.7;
    overflow: hidden;
    color: #666;
  }
  .l-article-common-title {
    padding: 2px 0;
    color: #333;
    overflow: hidden;
    font-size: 14px;
  }
  .l-article-common-explain {
    padding-top: 10px;
    text-align: right;
  }
  .l-article-common-dot {
    position: relative;
    top: -4px;
  }
  .l-loading-more {
    padding: 10px;
    text-align: center;
  }
  @media (min-width: 479px) {
    .l-article-common-item {
      width: 96%;
      background-color: #fff;
    }
    .l-article-common-img-wrapper {
      width: 38%;
      flex: 2;
      display: inline-block;
      height: 180px;
      overflow: hidden;
    }
    .l-article-common-img {
      height: 100%;
      overflow: hidden;
      border-radius: 5px;
      position: relative;
      background-size: cover;
      background-position: center;
    }
    .l-article-common-summary {
      width: 56%;
      margin: 0 auto;
      line-height: 1.7;
      padding-left: 2%;
      vertical-align: top;
      display: inline-block;
    }
  }
</style>

