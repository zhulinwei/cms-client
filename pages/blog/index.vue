<template>
  <div>
    <div class="l-introduce-wrapper">
      <div class="l-introduce">
        <div class="l-introduce-row lightGrey">
          <div class="introduce-item">
            <h2>Level.Z</h2>
            <p><span>Full Stack developer / Node Developer</span></p>
            <h2>一个有思想的全栈/node工程师</h2>
            <p>我懂生活，懂感恩，是一个奋进的小青年。人生是一杯酒，我是一位品酒的人。</p>
          </div>
          <div class="introduce-item hidden-xs-only"></div>
        </div>
      </div>
      <div class="l-introduce darkGrey">
        <div class="l-introduce-row">
          <div class="introduce-item hidden-xs-only"></div>
          <div class="introduce-item">
            <h2>关于我</h2>
            <p>个人网址：www.51linwei.top</p>
            <p>github地址：https://github.com/zhulinwei</p>
            <p>微信订阅号：AnttyZhu</p>
          </div>
        </div>
      </div>
    </div>
    <div class="l-footer-wrapper">
      <div class="l-footer">
        <p class="hidden-xs-only">Copyright © <a href="javascript:;">2017-2018 Level.Z All Rights Reserved</a></p>
        <p class="hidden-xs-only"><a href="javascript:;">粤ICP备17044709号</a></p>
        <p class="show-xs-only">©2016-2019 Level.Z 版权所有 | 粤ICP备17044709号</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'blog',  
  }
</script>

<style>
  .l-introduce {
    overflow: hidden;
  }
  .l-introduce.darkGrey {
    background: #343434;
    color: #fff;
  }
  .l-introduce-row {
    display: flex;
    margin: 0 auto;
    padding: 20px 0;
    max-width: 960px;
  }
  .introduce-item {
    flex: 1;
    margin-left: 20px;
    line-height: 30px;
  }
  .introduce-item h2 {
    font-size: 18px;
  }
  .l-footer-wrapper {
    color: #fff;
    height: 40px;
    text-align: center;
    background-color: #343434;
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
    color: #fff;
  }
  @media (min-width: 479px) {
    .l-introduce-row {
      display: flex;
      padding: 70px 0 20px 0;
    }
    .l-footer-wrapper {
      height: 70px;  
    }
    .show-xs-only {
      display: none;  
    }
  }
</style>
