const state = {
  user: null,
};

const mutations = {
  // @ts-ignore
  // tslint:disable-next-line:no-shadowed-variable
  setUser(state: any, {user}) {
    state.user = user;
  },
};

const actions = {};

export default {
  state,
  mutations,
  actions,
  namespaced: true,
};
