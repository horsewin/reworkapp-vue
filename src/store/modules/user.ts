const state = {
  user: null,
};

const mutations = {
  // tslint:disable-next-line:no-shadowed-variable
  setUser(state: any, user: any) {
    state.user = user;
  },
};

const actions = {
// @ts-ignore
  setUser({commit}, user: any) {
    commit("setUser", user);
  },
};

export default {
  state,
  mutations,
  actions,
  namespaced: true,
};
