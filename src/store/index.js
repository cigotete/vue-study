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
    addressString(state) {
      return state.addressStore.street + ' number ' + state.addressStore.number + ', ' + state.addressStore.city + ', ' + state.addressStore.country;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
