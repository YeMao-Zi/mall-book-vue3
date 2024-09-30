<template>
  <img :style="imageStyle" :src="imageValue?.imagePath || defaultImagePath" />
</template>

<script setup lang="ts">
import { type MainProps } from "../type";
import { getMainStyle } from "../utils";
import { computed } from "vue";
import baseImg from "./baseImg";
const defaultImagePath = baseImg;

interface Props extends MainProps {
  imageValue: {
    imagePath?: string;
    jumpPath?: string;
  };
}
const { styles={} } = defineProps<Props>();

const imageStyle = computed(() => {
  const mainStyle = getMainStyle(styles);
  return {
    ...mainStyle,
    width: "100%",
  };
});
</script>

<style lang="scss" scoped></style>
