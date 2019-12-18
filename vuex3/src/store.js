import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    title: '123',
    links: [
      'https://www.google.com/',
      'https://www.facebook.com/',
      'https://www.youtube.com/'

    ]
  },
  getters: {
    countLinks: state => {
      return state.links.length;
    }
  },
  mutations: {
    INCREMENT: (state) => {
      state.count++
    },
    DECREMENT: (state) => {
      state.count--
    },
    ADD_LINK: (state, link) => {
      state.links.push(link)
    },
    REMOVE_LINK: (state, link) => {        // Add this:
      console.log(link);
      state.links.splice(link, 1)
    },    // Others removed for brevity,
    REMOVE_ALL: (state) => {                     // Add this
      state.links = []
    }

  },
  actions: {
    RemoveLink_action: (context, link) => {       // Add this:
      context.commit("REMOVE_LINK", link)
    },
    removeAll ({commit}) {
      return new Promise((resolve) => {
        setTimeout(()=> {
          commit('REMOVE_ALL')
          resolve()
        }, 1500)
      })
    }
  }
})