import Vue from 'vue';
import Vuex from 'vuex';
import {
  getAuthFromCookie,
  getImageFromCookie,
  getRefreshFromCookie,
} from '@/utils/cookies';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profileImageUrl: decodeURIComponent(getImageFromCookie()) || '',
    accessToken: getAuthFromCookie() || '',
    refreshToken: getRefreshFromCookie() || '',
  },
  getters: {
    isLogin(state) {
      return state.accessToken !== '';
    },
  },
  mutations: {
    setProfileImageUrl(state, url) {
      state.profileImageUrl = url;
    },
    setAccessToken(state, token) {
      state.accessToken = token;
    },
    setRefreshToken(state, token) {
      state.refreshToken = token;
    },
  },
  actions: {
    async LOGIN({ commit }, response) {
      commit('setProfileImageUrl', response.data.profileImageUrl);
      commit('setAccessToken', response.headers['access-token']);
      commit('setRefreshToken', response.headers['refresh-token']);
    },
    async LOGOUT({ commit }) {
      commit('setProfileImageUrl', null);
      commit('setAccessToken', null);
      commit('setRefreshToken', null);
    },
  },
});
