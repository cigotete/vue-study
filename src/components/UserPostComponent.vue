<template>
  <h1>Post {{ $route.params.post }} by user {{ $route.params.user }}</h1>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.params);
  }
}
</script>

<style scoped>

</style>