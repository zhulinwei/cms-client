<template>
  <div>
    <div class="l-blog-wrapper" v-loading="loading">
      <div class="l-blog">
        <div class="l-specical">
          <l-acticle-special :acticles="specialActicles"></l-acticle-special>
        </div>
        <div class="l-common" >
          <l-acticle-common @nextList="nextList" :acticles="commonActicles" :residue="residue"></l-acticle-common>
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
      let commonActicles = [];
      let specialActicles = [];
      let residue = 1;
      let currentCatalog = '';
      const fields = { title: 1, catalogId: 1, thumbnail: 1, outline: 1, commentsCount: 1, readCount: 1 };
      return { catalogs, specialActicles, commonActicles, loading, residue, currentCatalog, fields };
    },
    created() {
      this.query();
    },
    methods: {
      async query() {
        const catalogs = await this.$axios.get('/api/blog/catalogs');
        this.catalogs = catalogs.data.list.map(catalog => {
          return { id: catalog._id, name: catalog.name }
        });
        
        const specialSelector = { isTop: true };
        const commonSelector = { isTop: false };
        const options = { 
          limit: 20,
          sort: { _id: -1 },
          fields: this.fields
        };
        const specialActicles = await this.$axios.post('/api/blog/acticles/query', { selector: specialSelector, options });
        const commonActicles = await this.$axios.post('/api/blog/acticles/query', { selector: commonSelector, options });
        this.specialActicles = specialActicles.data.list;
        this.commonActicles = commonActicles.data.list;
        this.residue = commonActicles.data.residue;
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
        const commonActicles = await this.$axios.post('/api/blog/acticles/query', { selector, options });
        this.commonActicles = commonActicles.data.list;
        this.residue = commonActicles.data.residue;
        this.currentCatalog = catalog.id;
        this.loading = false;
      },
      async nextList() {
        const lastActicleId = this.commonActicles[this.commonActicles.length -1]._id;
        const selector = { catalogId: this.currentCatalog, acticleId: lastActicleId, isTop: false };
        const acticles = await this.$axios.post('/api/blog/acticles/next/query', selector);
        this.commonActicles = this.commonActicles.concat(acticles.data.list)
        this.residue = acticles.data.residue; 
      }
    },
    components: {
      "l-menu": menu,
      "l-acticle-common": common,
      "l-acticle-special": special,
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

