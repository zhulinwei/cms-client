<template>
  <el-footer id="l-footer-wrapper">
    <el-col class="l-footer">
      <p class="hidden-xs-only">Copyright © <a href="javascript:;">2017-2018 Level.Z All Rights Reserved</a></p>
      <p><a href="javascript:;">ICP证 粤ICP备17044709号</a></p>
    </el-col>
  </el-footer>
</template>

<style>
  #l-footer-wrapper {
    color: #ccc;
    text-align: center;
    background-color:#343434;
    width: 100%;
    /* flex实现垂直居中   */
    display: flex;
    align-items: center;
  }
  .l-footer {
    margin: 0 auto;
    line-height: 14px;
  }
  .l-footer a {
    color: #ccc;
  }
</style>
