<template>
  <img :style="imageStyle" :src="imageValue?.imagePath || defaultImagePath" />
</template>

<script setup lang="ts">
import type { McImageProps } from "./type";
import { getMainStyle } from "../utils";
import { computed } from "vue";
import baseImg from "./baseImg";
const defaultImagePath = baseImg;
defineOptions({
  name: "McImage",
});
const { styles = {} } = defineProps<McImageProps>();

const imageStyle = computed(() => {
  const mainStyle = getMainStyle(styles);
  return {
    ...mainStyle,
    width: "100%",
  };
});
</script>

<style scoped></style>
