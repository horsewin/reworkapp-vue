<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
      <amplify-sign-out v-if="user">sign out</amplify-sign-out>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
  import store from "../store/index";

  @Component({
    components: {
      HelloWorld,
    },
    computed: {
      user() {
        return store.state.user;
      },
    },
  })

  export default class Home extends Vue {
  }
</script>
