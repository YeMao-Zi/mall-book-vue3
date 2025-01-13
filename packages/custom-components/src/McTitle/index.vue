<template>
  <div class="McTitle" :style="wrapStyle">
    <!-- 主标题 -->
    <div :style="titleStyle">{{ value.title }}</div>
    <!-- 副标题 -->
    <div v-if="value.info" :style="infoStyle">{{ value.info }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed, StyleValue } from "vue";
import type { McTitleProps } from "./type";
import { getMainStyle } from "../utils";
defineOptions({
  name: "McTitle",
});
const { styles = {}, value = {title:'大标题'} } = defineProps<McTitleProps>();

const wrapStyle = computed<StyleValue>(() => {
  const mainStyle = getMainStyle(styles);
  return {
    ...mainStyle,
  };
});

const titleStyle = computed<StyleValue>(() => {
  const { titleSize, titleColor } = styles;
  return {
    fontSize: `${titleSize}px`,
    color: titleColor,
  };
});

const infoStyle = computed<StyleValue>(() => {
  const { infoSize, infoColor } = styles;
  return {
    fontSize: `${infoSize}px`,
    color: infoColor,
  };
});
</script>

<style scoped></style>
