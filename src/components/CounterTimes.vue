<template>
  <h1>Hello from CounterTimes component</h1>

  <button @click="decreaseCounter()">-</button>
  {{ counter }}
  <button @click="increaseCounter()">+</button>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increaseCounter() {
      this.counter++;
    },
    decreaseCounter() {
      this.counter--;
    }
  }
}
</script>

<style scoped>
  h1 {
    color: grey;
  }
</style>