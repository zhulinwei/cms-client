<template>
  <div class="l-detail-wrapper">
    <p class="l-detail-title">{{ article.title }}</p>
    <p class="l-detail-subtitle">{{ article.author }}</p>
    <div v-html="article.content"></div>
    <l-comment :user="user" :comments="comments" @comment-success="commentSuccess"></l-comment>
  </div>
</template>

<script>
  import comment from './temp/comment.vue'

  import axios from 'axios'
  import moment from 'moment'
  export default {
    layout: 'blog',
    data() {
      let user = {};
      let article = {};
      let comments = [];
      let articleId = '';
      let commentCount = 0;
      return { user, article, comments, articleId, commentCount };
    },
    created() {
      this.articleId = this.$route.params.id || '';
      this.query();
    },
    methods: {
       async query() {
        const article = await axios.get(`/api/blog/articles/${this.articleId}?inc=1`);
        this.article = article.data;
        const user = await axios.get('/api/users/info');
        this.user = user.data;
        const comments = await axios.get(`/api/blog/articles/${this.articleId}/comments`);
        this.comments = comments.data.list;
        this.commentCount = comments.data.count;
      },
      async commentSuccess() {
        const comments = await axios.get(`/api/blog/articles/${this.articleId}/comments`);
        this.comments = comments.data.list;
        this.commentCount = comments.data.count;
      }
    },
    components: {
      "l-comment": comment
    }
  }
</script>

<style>
  .l-detail-wrapper {
    width: 96%;
    max-width: 960px;
    margin: 0 auto;
  }
  .l-detail-title {
    text-align: center;
    font-size: 20px; 
    padding: 5px 10px 2px;
  }
  .l-detail-subtitle {
    text-align: center;
  }
</style>
