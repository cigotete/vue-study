<template>
  <div v-if="$route.params.userId">
    <h1>User detail section when there is an user ID in path</h1>
  </div>
  <div v-else>
    <h1>Users list section if there is no user ID on path</h1>
  </div>

  <div id="nav">
    <router-link :to="'/users/'+ $route.params.userId ">User index</router-link> |
    <router-link :to="'/users/'+ $route.params.userId +'/profile'">Profile</router-link> |
    <router-link :to="'/users/'+ $route.params.userId +'/courses'">Courses</router-link>
  </div>

  <router-view />

</template>

<script>
export default {

}
</script>

<style scoped>

</style>