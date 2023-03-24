<template>
  <h1>Store component</h1>
  <h2>{{ $store.state.ecommerce.welcomeMessage }}</h2>
  <h3>{{ addressString }}</h3>

  <!--START This section will not work due is calling a
    method that was isolated into a module -->
  <button @click="$store.commit('decrement')">-</button>
  <span> {{ ' ' + count + ' ' }} </span>
  <button @click="$store.commit('increment')">+</button>
  <!--END-->

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
    ...mapMutations('counter', ['decrement', 'increment']),
    ...mapActions('ecommerce', ['confirmationChangeWelcomeMessage']),
    changeWelcomeMessageComponent() {

      // Trigger an action
      this.confirmationChangeWelcomeMessage(this.welcomeMessageComponent).then(() => {
        this.welcomeMessageComponent = '';
      });
    },
  },
  computed: {
    ...mapState({
      welcomeMessage: (state) => {
        return state.ecommerce.welcomeMessage
      },
      addressStore: state => state.ecommerce.address, //Simplified version
      count: (state) => {
        return state.counter.count
      },
    }),
    ...mapGetters('ecommerce', ['addressString']),
  }
}
</script>

<style scoped>

</style>