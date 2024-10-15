<template>
  <div class="McBlock" :style="wrapStyle"></div>
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
        "background-size": "cover",
      }
    : {};
  return {
    ...mainStyle,
    ...background,
  };
});
</script>

<style scoped>
.McBlock {
  word-break: break-all;
}
</style>
