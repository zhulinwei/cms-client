<template>
  <div class="l-article-search-wrapper" :article="articles">
    <div class="l-article-search">
      <ul>
        <li v-for="(article, index) in articles" :key="index" class="l-article-search-item"  @click="detail(article)">
          <router-link :to="`/blog/article/${article._id}`" @click="detail(article)" :article="article">
            <div class="l-article-search-summary">
              <p class="l-article-search-title">{{ article.title }}</p>
              <p>{{ article.outline }}</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'blog',
    props: [ 'articles' ],
    data() {
      return { };
    },
    methods: {
      detail(article) {
        this.article = article;
      }
    },
  }
</script>

<style>
  .l-article-search-wrapper {
    max-width: 960px;
    overflow: hidden;
  }
  .l-article-search-item {
    padding: 10px;
    margin-bottom: 10px;
    background-color: #fff;
  }
  .l-article-search-summary {
    line-height: 1.7;
    overflow: hidden;
    color: #666;
  }
  .l-article-search-title {
    padding: 2px 0;
    color: #333;
    overflow: hidden;
    font-size: 14px;
  }
  @media (min-width: 479px) {
    .l-article-search-item {
      width: 100%;
      background-color: #fff;
    }
    .l-article-search-summary {
      width: 98%;
      margin: 0 auto;
      line-height: 1.7;
      vertical-align: top;
      display: inline-block;
    }
    
  }
</style>

