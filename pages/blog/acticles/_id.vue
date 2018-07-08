
<template>
  <div class="l-detail-wrapper">
    <p class="l-detail-title">{{ acticle.title }}</p>
    <p class="l-detail-subtitle">{{ acticle.author }}</p>
    <div>
      {{ acticle.content }}
    </div>
    <!--
    <l-comment></l-comment>
    -->
  </div>
</template>

<script>
  import comment from './temp/comment.vue'

  import axios from 'axios'
  import moment from 'moment'
  export default {
    layout: 'blog',
    data() {
      let acticle = {};
      let acticleId = '';
      return { acticle, acticleId };
    },
    created() {
      this.acticleId = this.$route.params.id || '';
      this.query();
    },
    methods: {
       async query() {
        const acticle = await axios.get(`/api/blog/acticles/${this.acticleId}?inc=1`);
        this.acticle = acticle.data;
        
        console.log(this.acticle);
      }
    },
    components: {
      "l-comment": comment
    }
  }
</script>

<style>
  .l-detail-wrapper {
    max-width: 960px;
    margin: 0 auto;
    padding: 10px;
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
