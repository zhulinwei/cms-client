<template>
  <el-row id="l-editor-text">
    <div id="editor" ref="editor" style="text-align:left"></div>
  </el-row>
</template>

<script>
  // wangeditor使用注意事项
  // https://github.com/wangfupeng1988/wangEditor/issues/978
  // https://github.com/Bowennan/bestkit_pc
  import Editor from 'wangeditor'

  export default {
    name: 'editor',
    props: [ 'content' ],
    data () {
      return {
        editorContent: ''
      }
    },
    methods: {
      initEditor() {
        let editor = new Editor('#editor');
        editor.customConfig.onchangeTimeout = 500;
        // 注意：onchange中应该使用() => {}而不是function(html) {} 
        // 原因是function(html){}中中this将不在指向vue，而是editor，但此处我们还是希望this指向vue
        editor.customConfig.onchange = (html) => {
          this.editorContent = html;
        };
        editor.create(); 
        editor.txt.html(this.content)
        this.editor = editor;
      }
    },
    mounted() {
      this.initEditor();
    },
    watch: {
      content(content) {
        this.editor.txt.html(content);
      },
      editorContent(html) {
        this.$emit('finish', html);
      }  
    }
  }
</script>

<style scoped>
</style>
