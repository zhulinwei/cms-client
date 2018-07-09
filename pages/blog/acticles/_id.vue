<template>
  <div class="l-detail-wrapper">
    <p class="l-detail-title">{{ acticle.title }}</p>
    <p class="l-detail-subtitle">{{ acticle.author }}</p>
    <div>
      {{ acticle.content }}
    </div>
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
      let acticle = {};
      let comments = [];
      let acticleId = '';
      let commentCount = 0;
      return { user, acticle, comments, acticleId, commentCount };
    },
    created() {
      this.acticleId = this.$route.params.id || '';
      this.query();
    },
    methods: {
       async query() {
        const acticle = await axios.get(`/api/blog/acticles/${this.acticleId}?inc=1`);
        this.acticle = acticle.data;
        const user = await axios.get('/api/users/info');
        this.user = user.data;
        const comments = await axios.get(`/api/blog/acticles/${this.acticleId}/comments`);
        this.comments = comments.data.list;
        this.commentCount = comments.data.count;
      },
      async commentSuccess() {
        const comments = await axios.get(`/api/blog/acticles/${this.acticleId}/comments`);
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
