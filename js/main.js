
const app = Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
      count: 5
    }
  }
});


app.component('button-counter', {
  data() {
    return {
      count: 0,
    }
  },
  template: `
    <button @click="count++">
      You have made click {{ count }} times.
    </button>
  `
});