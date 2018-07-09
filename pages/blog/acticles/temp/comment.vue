<template>
  <div>
    <l-title :title="title"></l-title>
    <div class="l-comment-wrapper">
      <div class="l-comment" v-for="(item, index) in comments" :key="index">
        <div class="l-comment-img">
          <img :src="item.avatar" alt="">
        </div>
        <div class="l-comment-item">
          <div>
            <strong>{{ item.nickname }}</strong>
            <span v-if="item.to">
              <span v-show="item.to && item.to.uid" class="l-comment-speak">回复</span>
              <strong v-show="item.to && item.to.uid">{{ item.to.nickname }}</strong>
            </span>
            <span v-else></span>
          </div>
          <p>{{ item.content }}</p>
          <p>
            <span>{{ item.createTime }}</span>
            <button class="l-comment-reply" @click="reply(item)">回复</button>
          </p>
        </div>
      </div>
      <div class="l-comment">
        <div class="l-comment-img">
          <img v-if="user.avatar" :src="user.avatar" alt="">
          <img v-else src="~static/images/tourist_avatar.png" />
        </div>
        <div class="l-comment-item">
          <div class="l-comment-editor">
            <p><span>我要评论</span><span class="l-login"><a href="javascript:;">登录</a></span></p>
            <textarea v-model="form.content" type="text" placeholder="写下你的回复" class="comment-input" ref="comment-input"/> 
          </div>
          <div class="l-comment-footer">
            <button class="l-comment-button" @click="submit">发表评论</button>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
  import title from "./title.vue"

  import axios from 'axios'
  export default {
    props: [ 'user', 'comments'], 
    data() {
      console.log(this.user)
      const acticleId = this.$route.params.id; 
      const title = '最近评论';
      let form = {
        uid: this.user.uid,
        avatar: this.user.avatar,
        nickname: this.user.nickname,
        content: '',
        to: {}
      };
      return { title, acticleId, form };
    },
    methods: {
      reply(comment) {
        this.form.to = {
          uid: comment.uid,
          avatar: comment.avatar,
          nickname: comment.nickname  
        };
        this.$refs['comment-input'].focus();
      },
      async submit() {
        this.form.uid = this.user.uid;
        this.form.avatar = this.user.avatar;
        this.form.nickname = this.user.nickname;
        try {
          await axios.post(`/api/blog/acticles/${this.acticleId}/comments`, this.form);  
          this.$notify.success('评论成功');
          this.$emit('comment-success')
          this.form.content = '';
        } catch (err) {
          console.log(err);
          this.$notify.error('评论失败');
        }
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
    flex: 0 0 40px;
    /* flex实现垂直居中 */
    flex-direction: column;
  }
  .l-comment-img img {
    width: 40px;
    padding: 5px 0;
    border-radius: 50%;
  }
  .l-comment-item {
    flex: 1;
    margin: 5px 0;
    line-height: 20px;
  }
  .l-comment-speak {
    margin: 0 5px;
  }
  .l-comment-reply {
    border: none;
    outline: none;
    margin: 0 10px;
    float: right;
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
  .l-comment-item .l-comment-editor .l-login {
    float: right; 
  }
  .l-comment-button {
    float: right;
    height: 30px;
    padding: 0 10px;
    margin: 0 0 10px;
    line-height: 30px;
    vertical-align: middle;
    color: #000;
    border-radius: 5px;
    background-color: #fff;
    border: 1px solid #808080;
  }
</style>

