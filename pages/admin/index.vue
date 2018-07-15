<template>
  <div></div>
</template>
<script>
  export default {
    layout: 'admin',
    created() {
      this.skip(); 
    },
    methods: {
      skip() {
        this.$router.push({ path: '/admin/dashboard' }); 
      }  
    }  
  }
</script>
