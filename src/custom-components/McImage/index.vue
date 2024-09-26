<template>
  <img :style="imageStyle" :src="imageValue?.imagePath || defaultImagePath" />
</template>

<script setup lang="ts">
import { type MainProps } from "../type";
import { computed } from "vue";
import baseImg from "./baseImg";
const defaultImagePath = baseImg;
const {styles} = defineProps<
  MainProps & {
    imageValue: {
      imagePath?: string;
      jumpPath?: string;
    };
  }
>();

const imageStyle = computed(() => {
  if (!styles) return;
  const { borderRadius, height } = styles;
  return {
    borderRadius: `${borderRadius}px`,
    height: `${height}px`,
    width: "100%",
  };
});
</script>

<style lang="scss" scoped></style>
