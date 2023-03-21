import { createStore } from 'vuex'

export default createStore({
  state: {
    welcomeMessage: 'Wellcome to the store',
    addressStore: {
      street: 'Calle 1',
      number: 123,
      city: 'Bogota',
      country: 'Colombia'
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
