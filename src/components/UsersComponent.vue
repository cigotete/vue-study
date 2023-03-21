<template>
  <div v-if="$route.params.userId">
    <h1>User detail section when there is an user ID in path</h1>
  </div>
  <div v-else>
    <h1>Users list section if there is no user ID on path</h1>
  </div>

  <div id="nav">
    <router-link :to="{name: 'user-index', params: {userId: userId}}">User index</router-link> |
    <router-link :to="{name: 'profile', params: {userId: userId}}">Profile</router-link> |
    <router-link :to="{name: 'courses', params: {userId: userId}}">Courses</router-link>
  </div>

  <router-view />

</template>

<script>
export default {
  props: ['userId'],
}
</script>

<style scoped>

</style>