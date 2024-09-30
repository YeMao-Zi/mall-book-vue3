<template>
  <div class="McTab" :style="wrapStyle">
    <div></div>
  </div>
</template>

<script setup lang="ts">
import { computed, StyleValue } from "vue";
import { type MainProps } from "../type";
import { getMainStyle, isNumber, getMarginStyle } from "../utils";

const {
  styles = {},
  tabList,
  attrs,
} = defineProps<
  MainProps & {
    tabList: any;
    attrs: any;
  }
>();

const wrapStyle = computed<StyleValue>(() => {
  if (!styles) return {};
  const mainStyle = getMainStyle(styles);
  const { height = "auto" } = styles;
  return {
    ...mainStyle,
    height: isNumber(height) ? `${height}px` : height,
    ...getMarginStyle(styles),
  };
});
</script>

<style lang="scss" scoped>
.McTab {
  display: flex;
}
</style>
