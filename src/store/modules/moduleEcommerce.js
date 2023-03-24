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

export default moduleEcommerce;