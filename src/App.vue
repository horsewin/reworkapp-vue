<template>
  <v-app id="app">
    <router-view/>
    <Navigator v-if="user"></Navigator>
  </v-app>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import Navigator from "@/components/Navigator.vue";
  import store from "./store/index";

  @Component({
    components: {
      Navigator,
    },
    computed: {
      user() {
        return store.state.user;
      },
    },
  })
  export default class App extends Vue {

  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
  }
</style>
