<template>
  <div class="l-block-title">
    <span>{{ title }}</span>
  </div>
</template>

<script>
  export default {
    props: [ "title" ],
  }
</script>

<style>
  .l-block-title {
    margin: 10px 0;
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    position: relative;
  }
  .l-block-title:after {
    content: '';
    height: 1px;
    position: absolute;
    left: 60px;
    right: 0;
    top: 11px;
    background:#ccc;
    z-index: 1;
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
  }
</style>
