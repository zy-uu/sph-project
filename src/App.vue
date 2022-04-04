<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>


<script>
import Footer from "./components/footer";
import Header from "./components/header";
export default {
  components: {
    Footer,
    Header,
  },
  data() {
    return {
      
    } 
    
  },
  methods: {
    
  }
  
};
</script>
<style lang="less">
</style>
