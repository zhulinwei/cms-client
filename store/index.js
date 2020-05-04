import * as cookieUtil from '../util/cookie'

export const state = () => ({
  authUser: null
})

export const mutations = {
  SET_USER (state, user) {
    state.authUser = user
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }, { req }) {
    const cookie = req.headers.cookie
    const admin = cookieUtil.parse(cookie) || {}
    
    if (admin.adminId) {
      commit('SET_USER', admin.adminId)
    }
  },
  async login ({ commit }, user) {
    commit('SET_USER', user._id);
  },

  async logout ({ commit }) {
    commit('SET_USER', null);
  }

}
