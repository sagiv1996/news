export const state = () => ({
    host: null,
  })
  
  export const mutations = {
    setApiHost (state, host) {
      state.host = host
    }
  }
  
  export const actions = {
    nuxtServerInit ({ commit }, { req }) {
      commit('setApiHost', req.headers.host)
    }
  }