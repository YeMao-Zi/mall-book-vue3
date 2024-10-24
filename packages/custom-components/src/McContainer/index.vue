<template>
  <div class="McContainer" :style="wrapStyle">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, StyleValue } from "vue";
import { type McContainerProps } from "./type";
import { getMainStyle } from "../utils";
defineOptions({
  name: "McContainer",
});
const { styles = {} } = defineProps<McContainerProps>();

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

</style>
