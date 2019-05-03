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

  @Prop()
  public greet?: string;
  private count: number = 0;

  @Emit()
  public clicked(count: number) {
    console.log("click");
  }

  public onClick() {
    this.clicked(++this.count);
  }
}
</script>
