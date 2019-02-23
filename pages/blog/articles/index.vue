<template>
  <div>
    <div class="l-blog-wrapper" v-loading="loading">
      <div class="l-blog">
        <div class="l-specical">
          <l-article-special :articles="specialarticles"></l-article-special>
        </div>
        <div class="l-common" >
          <l-article-common @nextList="nextList" :articles="commonarticles" :residue="residue"></l-article-common>
          <l-menu @changeCatalog="changeCatalog" :catalogs="catalogs"></l-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import menu from './temp/menu.vue'
  import common from "./temp/common.vue"
  import special from "./temp/special.vue"
  
  import _ from 'lodash';
  import axios from 'axios';
  export default {
    layout: 'blog',
    data() {
      let catalogs = [];
      let loading = false;
      let commonarticles = [];
      let specialarticles = [];
      let residue = 1;
      let currentCatalog = '';
      const fields = { title: 1, catalogId: 1, thumbnail: 1, outline: 1, commentsCount: 1, readCount: 1 };
      return { catalogs, specialarticles, commonarticles, loading, residue, currentCatalog, fields };
    },
    created() {
      this.query();
    },
    methods: {
      async query() {
        const options = { limit: 20, sort: { _id: -1 }, fields: this.fields };
        try {
          const [ catalogs, specialArticles, commonArticles ] = await Promise.all([
            axios.get('/api/blog/catalogs'),
            axios.post('/api/blog/articles/query', { selector: { isTop: true }, options }),
            axios.post('/api/blog/articles/query', { selector: { isTop: false }, options }),
          ]);
          this.catalogs = catalogs.data.list.map(catalog => { return { id: catalog._id, name: catalog.name }});
          this.commonarticles = commonArticles.data.list;
          this.specialarticles = specialArticles.data.list;
          this.residue = commonArticles.data.residue;
        } catch(err) {
          console.log(err);
          await this.query();
        }
      },
      async changeCatalog(catalog) {
        this.loading = true;
        const selector = {
          catalogId: catalog.id,
          isTop: false  
        };
        const options = { 
          limit: 20,
          sort: { _id: -1},
          fields: this.fields
        };
        const commonarticles = await axios.post('/api/blog/articles/query', { selector, options });
        this.commonarticles = commonarticles.data.list;
        this.residue = commonarticles.data.residue;
        this.currentCatalog = catalog.id;
        this.loading = false;
      },
      async nextList() {
        const lastarticleId = this.commonarticles[this.commonarticles.length -1]._id;
        const selector = { catalogId: this.currentCatalog, articleId: lastarticleId, isTop: false };
        const articles = await axios.post('/api/blog/articles/next/query', selector);
        this.commonarticles = this.commonarticles.concat(articles.data.list)
        this.residue = articles.data.residue; 
      }
    },
    components: {
      "l-menu": menu,
      "l-article-common": common,
      "l-article-special": special,
    }
  }
</script>

<style>
  .l-blog {
    margin: 0 auto;
    padding: 0 10px;
    max-width: 960px;
    overflow: hidden;
  }
  .l-common {
    width: 100%;
    display: flex;
    flex-flow: row;
  }
</style>

