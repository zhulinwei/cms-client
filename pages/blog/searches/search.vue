<template>
  <div class="l-acticle-search-wrapper" :acticle="acticles">
    <div class="l-acticle-search">
      <ul>
        <li v-for="(acticle, index) in acticles" :key="index" class="l-acticle-search-item"  @click="detail(acticle)">
          <router-link :to="`/blog/acticles/${acticle._id}`"  @click="detail(acticle)" :acticle="acticle">
            <div class="l-acticle-search-summary">
              <p class="l-acticle-search-title">{{ acticle.title }}</p>
              <p>{{ acticle.outline }}</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import detail from "../acticles/_id.vue"
  export default {
    layout: 'blog',
    props: [ 'acticles' ],
    data() {
      let acticle = {};
      return { acticle };
    },
    methods: {
      detail(acticle) {
        this.acticle = acticle;
      }
    },
    components: {
      "l-acticle-detail": detail,
    }
  }
</script>

<style>
  .l-acticle-search-wrapper {
    max-width: 960px;
    overflow: hidden;
  }
  .l-acticle-search-item {
    padding: 10px;
    margin-bottom: 10px;
    background-color: #fff;
  }
  .l-acticle-search-summary {
    line-height: 1.7;
    overflow: hidden;
    color: #666;
  }
  .l-acticle-search-title {
    padding: 2px 0;
    color: #333;
    overflow: hidden;
    font-size: 14px;
  }
  @media (min-width: 479px) {
    .l-acticle-search-item {
      width: 100%;
      background-color: #fff;
    }
    .l-acticle-search-summary {
      width: 98%;
      margin: 0 auto;
      line-height: 1.7;
      vertical-align: top;
      display: inline-block;
    }
    
  }
</style>

