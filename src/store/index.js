import { createStore } from 'vuex'

export default createStore({
  state: {
    welcomeMessage: 'Wellcome to the store',
    addressStore: {
      street: 'Calle 1',
      number: 123,
      city: 'Bogota',
      country: 'Colombia'
    },
    count: 0
  },
  getters: {
    addressString(state) {
      return state.addressStore.street + ' number ' + state.addressStore.number + ', ' + state.addressStore.city + ', ' + state.addressStore.country;
    }
  },
  mutations: {
    changeWelcomeMessage(state, message) {
      state.welcomeMessage = message;
    },
    decrement(state) {
      state.count--;
    },
    increment(state) {
      state.count++;
    }
  },
  actions: {
    changeWelcomeMessage({ commit }, message) {
      setTimeout(() => {
        console.log('Updating data base');
        commit('changeWelcomeMessage', message);
      }, 2000);
    }
  },
  modules: {
  }
})
