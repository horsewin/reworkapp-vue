<template>
  <v-content :height="getHeight">
    <amplify-sign-out v-if="user">sign out</amplify-sign-out>
    <v-card flat>
      <v-bottom-nav
        :active.sync="bottomNav"
        :value="true"
        color="transparent"
        @update:active="update"
      >
        <v-btn
          color="teal"
          flat
          value="home"
        >
          <span>Home</span>
          <v-icon>history</v-icon>
        </v-btn>

        <v-btn
          color="teal"
          flat
          value="about"
        >
          <span>About</span>
          <v-icon>favorite</v-icon>
        </v-btn>

        <v-btn
          color="teal"
          flat
          value="todo"
        >
          <span>Todo</span>
          <v-icon>place</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-card>
  </v-content>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";
  import Home from "@/views/Home.vue";
  import About from "@/views/About.vue";
  import Todo from "@/views/Todo.vue";
  import router from "@/router";
  import store from "@/store/index";

  @Component({
    components: {
      Home,
      About,
      Todo,
    },
    computed: {
      user() {
        return store.state.user;
      },
      getHeight() {
        return window.innerHeight;
      },
    },
  })
  export default class Navigator extends Vue {
    public bottomNav: string = "home";

    public update(val: string) {
      switch (val) {
        case "home":
          router.push({path: "/"});
          break;
        case "about":
          router.push({path: "/about"});
          break;
        case "todo":
          router.push({path: "/todo"});
          break;
        default:
      }
    }
  }
</script>
