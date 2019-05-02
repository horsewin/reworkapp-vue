import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "./registerServiceWorker";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";

Vue.config.productionTip = false;
Amplify.configure(aws_exports);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
