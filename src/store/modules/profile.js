// initial state
const state = {
    userID: [],
    data: []
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
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
