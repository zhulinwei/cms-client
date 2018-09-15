<template>
  <el-row id="l-single-upload">
    <el-upload class="avatar-uploader" action="https://upload.qiniu.com/" :data="token" 
      :show-file-list="false" :on-success="success" :on-error="error" :before-upload="beforeAvatarUpload">
      <img v-if="img" :src="img" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </el-row>
</template>

<script>
  export default {
    props: ['image', 'token'],
    created() {
      this.img = this.image;
    },
    data() {
      let img = '';
      return { img };
    },
    methods: {
      success(res, file) {
        this.img = URL.createObjectURL(file.raw);
        this.$notify.success('上传成功');
        this.$emit('finish');
      },
      error() {
        this.$notify.errof('上传失败');
      },
      beforeAvatarUpload(file) {
        // const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        // if (!isJPG) this.$notify.error('上传头像图片只能是 JPG 格式!');
        if (!isLt2M) this.$notify.error('上传头像图片大小不能超过 2MB!');
        return isLt2M;
      }
    },
    watch: {
      image(img) {
        if (typeof img === 'string') this.img = img;
      },
      token(token) {
        if (token) this.token = token;
      } 
    }
  }
</script>

<style>
  #l-single-upload .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  #l-single-upload .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  #l-single-upload .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 195px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  #l-single-upload .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
