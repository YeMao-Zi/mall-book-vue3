<template>
  <div class="McTitle" :style="wrapStyle">
    <!-- 主标题 -->
    <div :style="titleStyle">{{ value.title }}</div>
    <!-- 副标题 -->
    <div :style="infoStyle">{{ value.info }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed, StyleValue } from "vue";
import { type MainProps } from "../type";
import { getMainStyle } from "../utils";

interface Props extends MainProps {
  value: {
    title: string;
    info: string;
  };
  attrs: any;
}
const { styles = {}, value } = defineProps<Props>();

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

<style lang="scss" scoped>
.McTitle {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
