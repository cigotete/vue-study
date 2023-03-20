
const app = Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
      count: 5,
      textSize: 1,
      item: {
        id: 1,
        name: 'Lorem ipsum dolor sit amet, qui minim labore',
        price: 10
      }
    }
  },
  methods: {
    increaseText(size) {
      this.textSize += size;
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


app.component('detail-items', {
  data() {
    return {}
  },
  emits: ['increaseText'],
  props: ['item', 'detail'],
  template: `
    <h1>Item: {{item.name}}</h1>
    <p>Price: {{'$' + item.price}}</p>
    <p>{{ detail }}</p>
    <slot></slot>
    <button @click="$emit('increaseText', 0.1)">Incrementar tamaño de fuente</button>
  `
});