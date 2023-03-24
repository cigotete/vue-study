import { createStore } from 'vuex'

// Import modules
import { moduleEcommerce } from './modules/moduleEcommerce'
import { moduleCounter } from './modules/moduleCounter'

export default createStore({
  modules: {
    ecommerce: moduleEcommerce,
    counter: moduleCounter
  }
})
