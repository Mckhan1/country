import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const state = () => ({
  countries: [],
})

export const getters = {
  countries: (state) => state.countries
}

export const mutations = {
  FETCH_DATA_MUTATION(state, json) {
    state.countries = json
    for(let i of state.countries){
      i.id = Math.random().toString().substr(2,6)
    }

  }
}

export const actions = {
  FETCH_DATA({ commit },preload) {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((json) => commit('FETCH_DATA_MUTATION', json));
      
      
  }
}


export default {
  state,
  getters,
  mutations,
  actions,
}