<template>
  <div class="l-menu-wrapper">
    <ul class="l-menu l-menu-hidden">
      <li class="l-menu-title">文章类别</li>
      <li class="l-menu-item" v-for="catalog in catalogs" :key="catalog._id" @click="changeCatalog(catalog)">
        <a href="javascript:;">{{ catalog.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: [ "catalogs" ],
    methods: {
      changeCatalog(catalog) {
        this.$emit('changeCatalog', catalog);
      }
    },
  }
</script>

<style>
  .l-menu {
    width: 150px;
    padding: 30px;
    margin: 42px 10px;
    background-color: #fff;
    box-shadow: 0 0 3px 0 #666;
  } 
  .l-menu-title {
     margin-bottom: 10px;
  }
  .l-menu-item {
    list-style-type: none;
    padding: 15px 0 15px 0;
    font-size: 20px;
    font-weight: 600;
    /*文本全部大写*/
    /*text-transform: uppercase;*/
    border-top: 1px solid #ccc;
  }
  @media (max-width: 768px) {
    .l-menu-hidden {
      display: none;
    }
  }
</style>
