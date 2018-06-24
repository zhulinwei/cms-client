
<template>
  <div class="l-detail-wrapper">
    <p>sadfasdfasdfasdf</p>
    <p>sadfasdfasdfasdf</p>
    <p>sadfasdfasdfasdf</p>
    <p>sadfasdfasdfasdf</p>
    <p>sadfasdfasdfasdf</p>
    <p>sadfasdfasdfasdf</p>
    <p>sadfasdfasdfasdf</p>
    <p>sadfasdfasdfasdf</p>
    <p>sadfasdfasdfasdf</p>
    <p>sadfasdfasdfasdf</p>
    <p>sadfasdfasdfasdf</p>
    <p>sadfasdfasdfasdf</p>
    <p>sadfasdfasdfasdf</p>
    <p>sadfasdfasdfasdf</p>
    <p>sadfasdfasdfasdf</p>
    <p>sadfasdfasdfasdf</p>
    <p>sadfasdfasdfasdf</p>
    <p>sadfasdfasdfasdf</p>
    <p>sadfasdfasdfasdf</p>
    <p>sadfasdfasdfasdf</p>
    <p>sadfasdfasdfasdf</p>
    <p>sadfasdfasdfasdf</p>
    <p>sadfasdfasdfasdf</p>
    <p>sadfasdfasdfasdf</p>
    <l-comment></l-comment>
  </div>
</template>

<script>
  import comment from './temp/comment.vue'
  export default {
    layout: 'blog',
    data() {
      return {};
    },
    created() {
      console.log('2in');
    },
    methods: {
       query(id) {
        console.log(1)
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
</style>
