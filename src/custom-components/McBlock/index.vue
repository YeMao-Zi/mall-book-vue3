<template>
  <div class="McBlock" :style="contentStyle">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, StyleValue } from "vue";
import { type MainProps } from "../type";
import { getMainStyle, isNumber, getMarginStyle } from "../utils";

const { styles = {} } = defineProps<MainProps>();

const contentStyle = computed<StyleValue>(() => {
  if (!styles) return {};
  const mainStyle = getMainStyle(styles);
  const { height = "auto", backgroundImage } = styles;
  const background = backgroundImage
    ? {
        "background-image": `url(${backgroundImage})`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
      }
    : {};
  return {
    ...mainStyle,
    height: isNumber(height) ? `${height}px` : height,
    ...getMarginStyle(styles),
    ...background,
  };
});
</script>

<style lang="scss" scoped>
.McBlock {
  word-break: break-all;
}
</style>
