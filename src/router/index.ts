import Vue from "vue";
import Router from "vue-router";
import AmplifyStore from "../store/index";
// @ts-ignore
import {AmplifyEventBus, AmplifyPlugin, components} from "aws-amplify-vue";
import * as AmplifyModules from "aws-amplify";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

Vue.use(Router);
Vue.use(AmplifyPlugin, AmplifyModules);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        requiresAuth: true,
      },
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => About,
    },
    {
      path: "/auth",
      name: "auth",
      component: components.Authenticator,
    },
  ],
});

let user;

const getUser = async () => {
  return Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then((data: { signInUserSession: any; }) => {
    if (data && data.signInUserSession) {
      AmplifyStore.commit("setUser", data);
      return data;
    }
  }).catch(() => {
    AmplifyStore.dispatch("setUser", null);
    return null;
  });
};

AmplifyEventBus.$on("authState", async (state: string) => {
  if (state === "signedOut") {
    user = null;
    AmplifyStore.commit("setUser", null);
    router.push({path: "/auth"});
  } else if (state === "signedIn") {
    user = await getUser();
    router.push({path: "/"});
  }
});

getUser().then((userInfo: any) => {
  if (userInfo) {
    router.push({path: "/"});
  }
});

router.beforeResolve(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    user = await getUser();
    if (!user) {
      return next({
        path: "/auth",
        query: {
          redirect: to.fullPath,
        },
      });
    }
    return next();
  }
  return next();
});

export default router;
