<template>
  <div></div>
</template>
<script>
  export default {
    layout: 'admin',
    middleware: 'auth',
    created() {
      this.skip(); 
    },
    methods: {
      skip() {
        this.$router.push({ path: '/admin/blog/articles' }); 
      }  
    }  
  }
</script>
