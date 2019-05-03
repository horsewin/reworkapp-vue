<template>
  <v-container>
    <v-btn large color="primary" @click="onClick">
      <slot></slot>
    </v-btn>
  </v-container>
</template>

<script lang="ts">
  import {Component, Emit, Prop, Vue} from "vue-property-decorator";

  @Component
  export default class RetaskButton extends Vue {
    private count: number = 0;

    @Prop()
    public greet?: string;

    @Emit()
    public clicked(count: number) {

    }

    public onClick() {
      this.clicked(++this.count);
    }
  }
</script>
