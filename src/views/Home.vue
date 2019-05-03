<template>
  <v-container>
    <Navigator>
      <div id="nav">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/about">About</router-link>
        |
        <router-link to="/todo">Todo</router-link>
      </div>
      <router-view/>
      <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <amplify-sign-out v-if="user">sign out</amplify-sign-out>
        <!--      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
      </div>
    </Navigator>
  </v-container>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import store from "../store/index";
  import HelloWorld from "@/components/HelloWorld.vue";
  import Navigator from "@/components/Navigator.vue";

  @Component({
    components: {
      HelloWorld,
      Navigator
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

<style>
  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }
</style>
