<template>
  <div>
    <vue-top-progress ref="topProgress"></vue-top-progress>
    <h1>This is home page</h1>
  </div>
</template>

<script>
import VueTopProgress from "vue-top-progress/src/top-progress.vue";

export default {
  name: "HomePage",
  components: {
    VueTopProgress,
  },
  mounted() {
    this.$refs.topProgress.start();
    // // Use setTimeout for demo
    setTimeout(() => {
      this.$refs.topProgress.done();
    }, 500);
  },
};
</script>
