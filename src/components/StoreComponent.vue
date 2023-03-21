<template>
  <h1>Store component</h1>
  <h2>{{ welcomeMessage }}</h2>
  <h3>{{ addressStore.street }}, number {{ addressStore.number }}, {{ addressStore.city }}, {{ addressStore.country }}</h3>
</template>

<script>
import { mapState } from 'vuex';

export default {
  /*
  computed: {
    // This is a way to call per property stored in vuex
    welcomeMessage() {
      return this.$store.state.welcomeMessage;
    },
  }
  */

  // This is a way to call all properties stored in vuex
  computed: {
    ...mapState(['welcomeMessage', 'addressStore']),
  }
}
</script>

<style scoped>

</style>