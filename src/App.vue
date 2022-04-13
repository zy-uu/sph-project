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
    return {};
  },
  methods: {},
  mounted() {
    // 在根组件中只会执行一次，减小性能消耗
    this.$store.dispatch("categoryList");

  },
};
</script>
<style lang="less">
</style>
