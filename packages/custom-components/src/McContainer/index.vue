<template>
  <div class="McContainer" :style="wrapStyle">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, StyleValue } from "vue";
import { type MainProps } from "../type";
import { getMainStyle } from "../utils";

const { styles = {} } = defineProps<MainProps>();

const wrapStyle = computed<StyleValue>(() => {
  const mainStyle = getMainStyle(styles);
  const { backgroundImage } = styles;
  const background = backgroundImage
    ? {
        "background-image": `url(${backgroundImage})`,
        "background-repeat": "no-repeat",
      }
    : {};
  return {
    ...mainStyle,
    ...background,
  };
});
</script>

<style scoped>
.McContainer {
  word-break: break-all;
}
</style>
