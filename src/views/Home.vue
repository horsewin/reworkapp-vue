<template>
  <v-container>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <amplify-sign-out v-if="user">sign out</amplify-sign-out>
      <!--      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
    </div>
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
      Navigator,
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

