<template>
  <div>
    <l-title :title="title"></l-title>
    <div class="l-comment-wrapper">
      <div class="l-comment" v-for="(item, index) in comments" :key="index">
        <div class="l-comment-img">
          <img :src="item.thumbnail" alt="">
        </div>
        <div class="l-comment-item">
          <p>
            <strong>asdf</strong>
            <span class="l-comment-speak">回复</span>
            <strong>asdf</strong>
          </p>
          <p>{{ item.content }}</p>
          <p>
            <span>{{ item.meta.updateAt }}</span>
            <button class="l-comment-reply" @click="reply(item._id)">回复</button>
          </p>
        </div>
      </div>
      <div class="l-comment">
        <div class="l-comment-img">
          <img :src="user.thumbnail" alt="">
        </div>
        <div class="l-comment-item">
          <div class="l-comment-editor">
            <p><span>我要评论</span><span style="float: right"><a href="javascript:;">登录</a></span></p>
            <textarea type="text" placeholder="写下你的回复" class="comment-input" /> 
            <!-- <input type="text" placeholder="写下你的回复" class="comment-input" /> -->
          </div>
          <div class="l-comment-footer">
            <button class="l-comment-button">发表评论</button>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
  import title from "./title.vue"
  export default {
    data() {
      let user = {}
      let count = 21;
      let comments = [];
      const title = "最新评论";
      return { count, comments, title };
    },
    created() {
      this.query();
    },
    methods: {
      query() {
        this.user = {
          openId: '',
          nickname: '小粥',
          thumbnail: 'https://www.51linwei.top/img/da8e974dc_l.jpg',
        };
        this.comments = [
          {
            "_id":"5960595e5738b97164dce28d",
            "superior":"593ff8ad371eea0a632449c8",
            "thumbnail": 'http://q.qlogo.cn/qqapp/101405670/BDF84C562DADD0554C92E6B1CEF3565B/40',
            "from": {
              "_id": "784C56B4B1E7E424C9CDF9CE829C3A99",
              "nickName":"蓝  洛",
              "thumbnail":"http://q.qlogo.cn/qqapp/101405670/784C56B4B1E7E424C9CDF9CE829C3A99/40",
            },
            "content": "asdfsadf",
            "meta":{
              "updateAt": "7月前",
              "createAt": "7月前",
            }
          },{
            "_id":"5960595e5738b97164dce28d",
            "superior":"593ff8ad371eea0a632449c8",
            "thumbnail": 'http://q.qlogo.cn/qqapp/101405670/BDF84C562DADD0554C92E6B1CEF3565B/40',
            "from": {
              "_id": "784C56B4B1E7E424C9CDF9CE829C3A99",
              "nickName":"蓝  洛",
              "thumbnail":"http://q.qlogo.cn/qqapp/101405670/784C56B4B1E7E424C9CDF9CE829C3A99/40",
            },
            "content": "asdfsadf",
            "meta":{
              "updateAt": "7月前",
              "createAt": "7月前",
            }
          },{
            "_id":"5960595e5738b97164dce28d",
            "superior":"593ff8ad371eea0a632449c8",
            "thumbnail": 'http://q.qlogo.cn/qqapp/101405670/BDF84C562DADD0554C92E6B1CEF3565B/40',
            "from": {
              "_id": "784C56B4B1E7E424C9CDF9CE829C3A99",
              "nickName":"蓝  洛",
              "thumbnail":"http://q.qlogo.cn/qqapp/101405670/784C56B4B1E7E424C9CDF9CE829C3A99/40",
            },
            "content": "asdfsadf",
            "meta":{
              "updateAt": "7月前",
              "createAt": "7月前",
            }
          },{
            "_id":"5960595e5738b97164dce28d",
            "superior":"593ff8ad371eea0a632449c8",
            "thumbnail": 'http://q.qlogo.cn/qqapp/101405670/BDF84C562DADD0554C92E6B1CEF3565B/40',
            "from": {
              "_id": "784C56B4B1E7E424C9CDF9CE829C3A99",
              "nickName":"蓝  洛",
              "thumbnail":"http://q.qlogo.cn/qqapp/101405670/784C56B4B1E7E424C9CDF9CE829C3A99/40",
            },
            "content": "asdfsadf",
            "meta":{
              "updateAt": "7月前",
              "createAt": "7月前",
            }
          },{
            "_id":"5960595e5738b97164dce28d",
            "superior":"593ff8ad371eea0a632449c8",
            "thumbnail": 'http://q.qlogo.cn/qqapp/101405670/BDF84C562DADD0554C92E6B1CEF3565B/40',
            "from": {
              "_id": "784C56B4B1E7E424C9CDF9CE829C3A99",
              "nickName":"蓝  洛",
              "thumbnail":"http://q.qlogo.cn/qqapp/101405670/784C56B4B1E7E424C9CDF9CE829C3A99/40",
            },
            "content": "阿斯顿发送到发送地方撒地方撒点发送到发送到发送到发送地方反复反反复复反反复复反反复复反反复复反反复复定时发送到发送发送地方那可是你能给你那个不是大概是个哈是吧姑娘故噶世界观阿斯顿噶世界观啊说过话萨嘎啊时光萨嘎萨嘎萨热奥那个软件 干啊事故肉肉谷歌干",
            "meta":{
              "updateAt": "7月前",
              "createAt": "7月前",
            }
          },{
            "_id":"5960595e5738b97164dce28d",
            "superior":"593ff8ad371eea0a632449c8",
            "thumbnail": 'http://q.qlogo.cn/qqapp/101405670/BDF84C562DADD0554C92E6B1CEF3565B/40',
            "from": {
              "_id": "784C56B4B1E7E424C9CDF9CE829C3A99",
              "nickName":"蓝  洛",
              "thumbnail":"http://q.qlogo.cn/qqapp/101405670/784C56B4B1E7E424C9CDF9CE829C3A99/40",
            },
            "content": "asdfsadf",
            "meta":{
              "updateAt": "7月前",
              "createAt": "7月前",
            }
          },{
            "_id":"5960595e5738b97164dce28d",
            "superior":"593ff8ad371eea0a632449c8",
            "thumbnail": 'http://q.qlogo.cn/qqapp/101405670/BDF84C562DADD0554C92E6B1CEF3565B/40',
            "from": {
              "_id": "784C56B4B1E7E424C9CDF9CE829C3A99",
              "nickName":"蓝  洛",
              "thumbnail":"http://q.qlogo.cn/qqapp/101405670/784C56B4B1E7E424C9CDF9CE829C3A99/40",
            },
            "content": "asdfsadf",
            "meta":{
              "updateAt": "7月前",
              "createAt": "7月前",
            }
          },{
            "_id":"5960595e5738b97164dce28d",
            "superior":"593ff8ad371eea0a632449c8",
            "thumbnail": 'http://q.qlogo.cn/qqapp/101405670/BDF84C562DADD0554C92E6B1CEF3565B/40',
            "from": {
              "_id": "784C56B4B1E7E424C9CDF9CE829C3A99",
              "nickName":"蓝  洛",
              "thumbnail":"http://q.qlogo.cn/qqapp/101405670/784C56B4B1E7E424C9CDF9CE829C3A99/40",
            },
            "content": "asdfsadf",
            "meta":{
              "updateAt": "7月前",
              "createAt": "7月前",
            }
          },{
            "_id":"5960595e5738b97164dce28d",
            "superior":"593ff8ad371eea0a632449c8",
            "thumbnail": 'http://q.qlogo.cn/qqapp/101405670/BDF84C562DADD0554C92E6B1CEF3565B/40',
            "from": {
              "_id": "784C56B4B1E7E424C9CDF9CE829C3A99",
              "nickName":"蓝  洛",
              "thumbnail":"http://q.qlogo.cn/qqapp/101405670/784C56B4B1E7E424C9CDF9CE829C3A99/40",
            },
            "content": "asdfsadf",
            "meta":{
              "updateAt": "7月前",
              "createAt": "7月前",
            }
          },{
            "_id":"5960595e5738b97164dce28d",
            "superior":"593ff8ad371eea0a632449c8",
            "thumbnail": 'http://q.qlogo.cn/qqapp/101405670/BDF84C562DADD0554C92E6B1CEF3565B/40',
            "from": {
              "_id": "784C56B4B1E7E424C9CDF9CE829C3A99",
              "nickName":"蓝  洛",
              "thumbnail":"http://q.qlogo.cn/qqapp/101405670/784C56B4B1E7E424C9CDF9CE829C3A99/40",
            },
            "content": "asdfsadf",
            "meta":{
              "updateAt": "7月前",
              "createAt": "7月前",
            }
          },{
            "_id":"5960595e5738b97164dce28d",
            "superior":"593ff8ad371eea0a632449c8",
            "thumbnail": 'http://q.qlogo.cn/qqapp/101405670/BDF84C562DADD0554C92E6B1CEF3565B/40',
            "from": {
              "_id": "784C56B4B1E7E424C9CDF9CE829C3A99",
              "nickName":"蓝  洛",
              "thumbnail":"http://q.qlogo.cn/qqapp/101405670/784C56B4B1E7E424C9CDF9CE829C3A99/40",
            },
            "content": "asdfsadf",
            "meta":{
              "updateAt": "7月前",
              "createAt": "7月前",
            }
          },
        ]
      },
      reply(id) {
        document.getElementsByTagName('input')[0].focus();
      }
    },
    components: {
      "l-title": title,
    },
  }
</script>

<style>
  .l-comment {
    display: flex;
  }
  .l-comment-img {
    flex: 0 0 45px;
    /* flex实现垂直居中 */
    flex-direction: column;
  }
  .l-comment-img img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .l-comment-item {
    flex: 1;
    line-height: 20px;
    padding: 0 10px 10px 0;
  }
  .l-comment-speak {
    margin: 0 5px;
  }
  .l-comment-reply {
    border: none;
    outline: none;
    margin: 0 5px;
  }
  .l-comment-item .l-comment-editor p {
    padding: 0 10px;
    background-color: #fafafa;
    border: 1px solid #f2f2f2;
    color: #333;
    line-height: 32px;
    overflow: hidden;  
  }
  .l-comment-item .l-comment-editor {
    margin-bottom: 10px;
    border-radius: 5px;
    overflow: hidden;
  }
  .l-comment-item .l-comment-editor textarea {
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
  }
  .l-comment-button {
    float: right;
    height: 30px;
    padding: 0 10px;
    line-height: 30px;
    vertical-align: middle;
    color: #000;
    border-radius: 5px;
    background-color: #fff;
    border: 1px solid #808080;
  }
</style>

