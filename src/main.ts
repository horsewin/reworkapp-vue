import Amplify from "aws-amplify";
import Vue from "vue";
import aws_exports from "./aws-exports";
import "./plugins/vuetify";
import "./registerServiceWorker";
import router from "./router/index";
import store from "./store/index";
import App from "./App.vue";

Vue.config.productionTip = false;
Amplify.configure(aws_exports);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
