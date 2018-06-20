<template>
  <el-row id="l-admin-blog-editor">
    <el-col>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>博客管理</el-breadcrumb-item>
        <el-breadcrumb-item>发表文章</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
  
    <el-form label-width="80px" style="width: 98%">
      <el-form-item label="所属目录" >
        <el-select v-model="value2" placeholder="请选择">
          <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="文章大图">
        <l-single-upload></l-single-upload>  
      </el-form-item>

      <el-form-item label="文章标题">
        <el-input></el-input>
      </el-form-item>
      
      <el-form-item label="是否置顶">
        <el-switch v-model="value1" active-color="#4C3B2F" inactive-color="#ccc"></el-switch>
      </el-form-item>

      <el-form-item label="推送微信">
        <el-switch v-model="value1" active-color="#4C3B2F" inactive-color="#ccc"></el-switch>
      </el-form-item>

      <el-form-item label="文章详情">
        <l-text-editor></l-text-editor>
      </el-form-item>

      <el-form-item label="">
        <el-button type="primary" size="small">发布</el-button>
      </el-form-item>

    </el-form>

  </el-row>
</template>

<script>
  import textEditor from '@/components/editor/textEditor';
  import singleUpload from '@/components/upload/singleUpload';

  console.log(textEditor)
  export default {
    layout: 'admin',
    data() {
      return {
        value1: true,
        value2: "选项1",
        options2: [
          { value: '选项1', label: '黄金糕'}, 
        ]
      }
    },
    created() {
      let Editor = this.$textEditor;
      console.log(Editor)
    },
    components: {
      "l-text-editor": textEditor, 
      "l-single-upload": singleUpload, 
    }
  }
</script>

<style>
  #l-admin-blog-editor .el-form-item__content {
    line-height: 0px;  
  }
  #l-admin-blog-editor .el-switch__core {
    margin-top: 20px;
  }
  #l-admin-blog-editor .avatar-uploader-icon:before {
    font-size: 40px;  
    font-weight: 900;
  }
</style>
