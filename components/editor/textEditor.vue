<template>
  <el-row id="l-editor-text">
    <div ref="editor" style="text-align:left"></div>
    <!--
    <button v-on:click="getContent">查看内容</button>
    -->
  </el-row>
</template>

<script>
  // wangeditor使用注意事项
  // https://github.com/wangfupeng1988/wangEditor/issues/978
  // https://github.com/Bowennan/bestkit_pc
  export default {
    name: 'editor',
    data () {
      return {
        editorContent: ''
      }
    },
    created() {
      let Editor = this.$textEditor;
      this.Editor = Editor;
      console.log(Editor)
    },
    methods: {
      getContent: function () {
        alert(this.editorContent)
      }
    },
    mounted() {
      var editor = new this.Editor(this.$refs.editor)
       editor.customConfig.onchange = (html) => {
         this.editorContent = html
       }
      editor.create()
    }
  }
</script>

<style scoped>
</style>
