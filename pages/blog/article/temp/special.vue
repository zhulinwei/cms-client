<template>
  <div class="l-article-special-wrapper" :article="articles">
    <l-title :title="title"></l-title>
    <div class="l-article-special">
      <ul v-if="articles && articles.length">
        <li class="l-article-special-item" v-for="(article, index) in articles" :key="index">
          <div class="l-article-special-main">
            <router-link  class="l-article-special-item" :to="`/blog/articles/detail?acticleId=${article._id}`" @click="detail(article)" :article="article">
              <div class="l-article-special-img-wrapper">
                <div class="l-article-special-img" :style="{ 'background-image': 'url(' + article.thumbnail +')' }"></div>
              </div> 
              <div class="l-article-special-summary">
                <p class="l-article-special-title">{{ article.title }}</p>
                <p>{{ article.outline }}</p>
              </div>
            </router-link>
          </div>
          <div class="l-article-special-explain">
            <a href="">Level.Z</a>
            <span class="l-article-special-dot">.</span>
            <span><a href="">{{ article.commentsCount }}条评论</a></span>
            <span class="l-article-special-dot">.</span>
            <!--<span>{{ article.createTime }}</span>-->
            <span>{{ article.readCount }}次阅读</span>              
          </div>
        </li>
      </ul>
      <p v-else>暂无{{ title }}</p>
    </div>
  </div>  
</template>

<script>
  import title from "./title.vue"
  export default {
    data() {
      const title = "置顶文章";
      return { title };
    },
    props: [ 'articles' ],
    components: {
      "l-title": title,
    },
  }
</script>

<style>
  .l-article-special-main {
    padding: 10px;
  }
  .l-article-special-item {
    background-color: #fff;
  }
  .l-article-special-img-wrapper {
    width: 100%;
    height: 180px;
    display: block;
  }
  .l-article-special-img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 5px;
    background-size: cover;
    background-color: #f7f8f9;
    background-position: center;
  }
  .l-article-special-summary {
    line-height: 1.7;
    overflow: hidden;
    color: #666;
  }
  .l-article-special-title {
    padding: 2px 0;
    color: #333;
    overflow: hidden;
    font-size: 14px;
  }
  .l-article-special-explain {
    padding: 10px;
    text-align: right;
  }
  .l-article-special-dot {
    position: relative;
    top: -4px;
  }
  @media (min-width: 479px) {
    .l-block-title:after {
      content: '';
      height: 1px;
      position: absolute;
      left: 100px;
      right: 0;
      top: 11px;
      background:#ccc;
      z-index: 1;
    }
    .l-article-special-img-wrapper {
      height: 250px;
      overflow: hidden;
    }
    .l-article-special-img {
      height: 100%;
      overflow: hidden;
      border-radius: 5px;
      position: relative;
      background-size: cover;
      background-position: center;
      z-index: 1;
    }
  }
</style>

