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

export default moduleCounter;