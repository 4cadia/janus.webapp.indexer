// initial state
const state = {
  userID: [],
  data: [],
  response: []
}

// getters
const getters = {
  //   getErrors: state => state.errors,
  //   getErrorByType: (state, getters) => (type) => {
  //     return state.errors.find(error => error.type === type).text
  //   }
}

// actions
const actions = {}

// mutations
const mutations = {
  setUserID (state, userID) {
    state.userID = userID
  },
  setData (state, data) {
    state.data = data
  },
  setResponse (state, response) {
    state.response = response
    state.userID = response.userID
    state.data = response.data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
