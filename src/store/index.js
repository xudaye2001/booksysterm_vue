import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formInline:'',
    bookId:0,
  },
  mutations: {
    loginData(state, formInline) {
      state.name = formInline.name;
      state.password = formInline.password;
    },
    setBookId(state, bookId) {
      state.bookId = bookId
    },
  },
  actions: {
  },
  modules: {
  }
})
