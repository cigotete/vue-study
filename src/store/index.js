import { createStore } from 'vuex'

const moduleEcommerce = {
  namespaced: true,
  state: {
    welcomeMessage: 'Wellcome to the store',
    addressStore: {
      street: 'Calle 12',
      number: 123,
      city: 'Bogota',
      country: 'Colombia'
    },
  },
  getters: {
    addressString(state) {
      return state.addressStore.street + ' number ' + state.addressStore.number + ', ' + state.addressStore.city + ', ' + state.addressStore.country;
    }
  },
  mutations: {
    changeWelcomeMessage(state, message) {
      state.welcomeMessage = message;
    }
  },
  actions: {
    changeWelcomeMessage({ commit }, message) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('changeWelcomeMessage', message);
          resolve();
        }, 2000);
      });
    },

    async confirmationChangeWelcomeMessage({ dispatch }, message) {
      await dispatch('changeWelcomeMessage', message);
      console.log('Data base updated');    }
  },
}

const moduleCounter = {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    decrement(state) {
      state.count--;
    },
    increment(state) {
      state.count++;
    }
  },
}

export default createStore({
  modules: {
    ecommerce: moduleEcommerce,
    counter: moduleCounter
  }
})
