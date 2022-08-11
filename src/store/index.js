import { createStore } from "vuex";
import { SET_LOADING } from "./mutationsTypes"
import modules from './modules.js'

const store = createStore({
 state: {
  loading: undefined
 },
 getters: {
  webPageStatus: function (state) {
   return state.loading ? 'busy' : 'pending'
  }
 },
 mutations: {
  [SET_LOADING](state, loading) {
   state.loading = loading
  }
 },
 modules,
})

export default store