
const app = Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
      count: 5,
      textSize: 1,
      items: [
        {
          id: 1,
          name: 'Lorem ipsum dolor sit amet, qui minim labore',
          price: 10
        },
        {
          id: 2,
          name: 'Adipisicing minim sint cillum sint consectetur cupidatat',
          price: 12
        },
        {
          id: 3,
          name: 'Minim labore adipisicing minim sint cillum sint consectetur cupidatat',
          price: 6
        }
      ]
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
  props: ['item'],
  template: `
    <h1>Item: {{item.name}}</h1>
    <p>Price: {{'$' + item.price}}</p>
    <button @click="$emit('increaseText', 0.1)">Incrementar tamaño de fuente</button>
  `
});