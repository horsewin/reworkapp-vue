import About from "@/views/About.vue";
import Home from "@/views/Home.vue";
import Todo from "@/views/Todo.vue";
import * as AmplifyModules from "aws-amplify";
// @ts-ignore
import {components, AmplifyEventBus, AmplifyPlugin} from "aws-amplify-vue";
import Vue from "vue";
import Router from "vue-router";
import AmplifyStore from "../store/index";

Vue.use(Router);
Vue.use(AmplifyPlugin, AmplifyModules);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/todo",
      name: "Todo",
      component: Todo,
      meta: {
        requiresAuth: true,
      },
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
  if (to.path === "/index.html") {
    return next({
      path: "/",
      query: {
        redirect: to.fullPath,
      },
    });
  }

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
