<template>
  <div class="l-menu-wrapper">
    <ul class="l-menu l-menu-hidden">
      <li class="l-menu-title">文章类别</li>
      <li class="l-menu-item" v-for="menu in menus" :key="menu.id" @click="change(menu)">
        <a href="javascript:;">{{ menu.value }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: [ "menus" ],
    methods: {
      change(menu) {
        this.$emit('change', 'css');
      }
    },
  }
</script>

<style>
  .l-menu {
    padding: 30px;
    margin-top: 30px;
    margin: 30px 10px;
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
