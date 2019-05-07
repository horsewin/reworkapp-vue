<template>
  <v-container class="home">
    <p>{{greetText}}</p>
    <p>{{count}}</p>
<!--    <p v-if="isRegulars">すごい！</p>-->
    <RetaskButton :greet="greetText" @clicked="onButtonClicked">
      ToDo生成
    </RetaskButton>
<!--    <div v-show="myTodo">-->
<!--      <div slot="header" class="clearfix">-->
<!--        <span>Created Post</span>-->
<!--      </div>-->
<!--      <i>{{ myTodo }}</i>-->
<!--    </div>-->
  </v-container>
</template>

<script lang="ts">
  // import {API, graphqlOperation} from "aws-amplify";
  // import * as mutations from "@/graphql/mutations";
  import RetaskButton from "@/components/RetaskButton.vue";
  import {Component, Vue} from "vue-property-decorator";

  @Component({
    components: {
      RetaskButton,
    },
  })
  export default class ToDo extends Vue {
    public greetText: string = "Hello";
    private count: number = 0;

    public get isRegulars(): boolean {
      return this.count >= 5;
    }

    public onButtonClicked(count: number) {
      this.count = count;
      this.greetText = "hogehoge";
    }
  }
  // export default {
  //   data: function() {
  //     return {
  //       postData: {
  //         author: "uma",
  //         content: "hogehoge"
  //       },
  //       myTodo: "",
  //     };
  //   },
  //   methods: {
  //     createTodo: async function() {
  //       const todoDetails = {
  //         name: "Todo 1",
  //         description: "Learn AWS AppSync",
  //       };
  //
  //       const data = await API.graphql(graphqlOperation(mutations.createTodo, {input: todoDetails}));
  //     },
  //   },
  // };
</script>
