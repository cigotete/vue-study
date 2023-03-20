<template>
  <h1>Title outside CounterTimes component</h1>
  <counter-times />
</template>

<script>
import CounterTimes from './components/CounterTimes'

export default {
  name: 'App',
  components: {
    CounterTimes
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
