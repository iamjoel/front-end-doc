// data
this.$store.state
// gets
this.$store.getters
// action
this.$store.dispatch('xxx', data)
// mutations
this.$store.commit('xxx', data)


// mutations
const mutations = {
  [types.USER] (state, user) {
    state.user = user
  },
  
}

// actions
export const fetchUser = ({ commit, state, getters }) => {
  axios.get(...).then(({user}) => {
    commit(types.USER, user)
  })
}

// getters 
export const sth = state => {
  return 'xxx'
}