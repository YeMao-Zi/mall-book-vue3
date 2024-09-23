<template>
  <div class="McContainer" :style="contentStyle">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, StyleValue } from "vue";
import { type MainProps } from "../type";
import { getMainStyleByProps, isNumber } from "../utils";

const { styles = {} } = defineProps<MainProps>();

const contentStyle = computed<StyleValue>(() => {
  if (!styles) return {};
  const mainStyle = getMainStyleByProps(styles);
  const { height = "auto", backgroundImage } = styles;
  const background = backgroundImage
    ? {
        "background-image": `url(${backgroundImage})`,
        "background-repeat": "no-repeat",
      }
    : {};
  return {
    ...mainStyle,
    height: isNumber(height) ? `${height}px` : height,
    ...background,
  };
});
</script>

<style lang="scss" scoped>
.McContainer {
  word-break: break-all;
}
</style>
