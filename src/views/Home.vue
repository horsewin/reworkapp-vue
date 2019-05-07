<template>
  <v-container>
    <img alt="Vue logo" src="../assets/logo.png">
      <!--      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
    </v-container>
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import Navigator from "@/components/Navigator.vue";
import {Component, Vue} from "vue-property-decorator";
import store from "../store/index";

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

