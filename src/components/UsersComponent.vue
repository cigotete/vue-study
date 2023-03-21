<template>
  <div v-if="$route.params.userId">
    <h1>User detail section when there is an user ID in path</h1>
  </div>
  <div v-else>
    <h1>Users list section if there is no user ID on path</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>