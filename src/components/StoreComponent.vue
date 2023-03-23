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

  <p>Mutation with parameter</p>
    <form @submit.prevent="changeWelcomeMessageComponent()">
      <input type="text" v-model="welcomeMessageComponent">
      <button>Update</button>
    </form>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  data() {
    return {
      welcomeMessageComponent: '',
    };
  },
  methods: {
    ...mapMutations(['decrement', 'increment']),
    ...mapActions(['changeWelcomeMessage']),
    changeWelcomeMessageComponent() {

      // Trigger an action
      this.changeWelcomeMessage(this.welcomeMessageComponent);
      this.welcomeMessageComponent = '';
    },
  },
  computed: {
    ...mapState(['welcomeMessage', 'addressStore', 'count']),
    ...mapGetters(['addressString']),
  }
}
</script>

<style scoped>

</style>