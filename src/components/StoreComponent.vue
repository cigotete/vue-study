<template>
  <h1>Store component</h1>
  <h2>{{ welcomeMessage }}</h2>
  <h3>{{ addressString }}</h3>

  <button @click="$store.commit('decrement')">-</button>
  <span> {{ ' ' + count + ' ' }} </span>
  <button @click="$store.commit('increment')">+</button>

  <button @click="decrement()">-</button>
  <span> {{ ' ' + count + ' ' }} </span>
  <button @click="increment()">+</button>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations(['decrement', 'increment']),
  },
  computed: {
    ...mapState(['welcomeMessage', 'addressStore', 'count']),
    ...mapGetters(['addressString']),
  }
}
</script>

<style scoped>

</style>