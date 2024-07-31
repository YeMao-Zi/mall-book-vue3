<template>
  <div class="McContainer" :style="contentStyle">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, StyleValue } from "vue";
import { type MainProps } from "../type";

const props = withDefaults(defineProps<MainProps>(), { children: [] });

const contentStyle = computed<StyleValue>(() => {
  const {
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    backgroundColor,
  } = props;
  return {
    padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`,
    backgroundColor: backgroundColor,
  };
});
</script>

<style lang="scss" scoped>
.McContainer {
  word-break: break-all;
}
</style>
