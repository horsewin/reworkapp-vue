<template>
  <button class="primary" @click="onClick">
    <slot></slot>
  </button>
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

<style>

</style>
