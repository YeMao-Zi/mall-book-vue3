<template>
  <div class="McContainer" :style="contentStyle">123</div>
</template>

<script setup lang="ts">
import { computed, StyleValue } from "vue";
import { type MainProps } from "../type";
import { getMainStyleByProps, isNumber } from "../utils";

const props = withDefaults(defineProps<MainProps>(), {});

const contentStyle = computed<StyleValue>(() => {
  if (!props?.styles) return {};
  const mainStyle = getMainStyleByProps(props.styles);
  const { height = "auto" } = props.styles;

  return {
    ...mainStyle,
    height: isNumber(height) ? `${height}px` : height,
  };
});
</script>

<style lang="scss" scoped>
.McContainer {
  word-break: break-all;
}
</style>
