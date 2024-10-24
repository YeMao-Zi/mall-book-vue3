<template>
  <div class="McBlock" :style="wrapStyle"></div>
</template>

<script setup lang="ts">
import { computed, StyleValue } from "vue";
import type { McBlockProps } from "./type";
import { getMainStyle } from "../utils";

defineOptions({
  name: "McBlock",
});

const { styles = {} } = defineProps<McBlockProps>();

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

<style scoped></style>
