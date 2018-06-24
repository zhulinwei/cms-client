<template>
  <div class="l-acticle-special-wrapper" :acticle="acticles">
    <l-title :title="title"></l-title>
    <div class="l-acticle-special">
      <ul v-if="acticles.length">
        <li class="l-acticle-special-item" v-for="(acticle, index) in acticles" :key="index">
          <div class="l-acticle-special-main">
            <router-link  class="l-acticle-special-item" :to="`/blog/acticles/${acticle._id}`" @click="detail(acticle)" :acticle="acticle">
              <div class="l-acticle-special-img-wrapper">
                <div class="l-acticle-special-img" :style="{ 'background-image': 'url(' + acticle.thumbnail +')' }"></div>
              </div> 
              <div class="l-acticle-special-summary">
                <p class="l-acticle-special-title">{{ acticle.title }}</p>
                <p>{{ acticle.outline }}</p>
              </div>
            </router-link>
          </div>
          <div class="l-acticle-special-explain">
            <a href="">Level.Z</a>
            <span class="l-acticle-special-dot">.</span>
            <span><a href="">{{ acticle.comments }}条评论</a></span>
            <span class="l-acticle-special-dot">.</span>
            <span>{{ acticle.createTime }}</span>
            <span>{{ acticle.reading }}次阅读</span>              
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
    props: [ 'acticles' ],
    components: {
      "l-title": title,
    },
  }
</script>

<style>
  .l-acticle-special-main {
    padding: 10px;
  }
  .l-acticle-special-item {
    background-color: #fff;
  }
  .l-acticle-special-img-wrapper {
    width: 100%;
    height: 180px;
    display: block;
  }
  .l-acticle-special-img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 5px;
    background-size: cover;
    background-color: #f7f8f9;
    background-position: center;
  }
  .l-acticle-special-summary {
    line-height: 1.7;
    overflow: hidden;
    color: #666;
  }
  .l-acticle-special-title {
    padding: 2px 0;
    color: #333;
    overflow: hidden;
    font-size: 14px;
  }
  .l-acticle-special-explain {
    padding: 10px;
    text-align: right;
  }
  .l-acticle-special-dot {
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
    .l-acticle-special-img-wrapper {
      height: 250px;
      overflow: hidden;
    }
    .l-acticle-special-img {
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

