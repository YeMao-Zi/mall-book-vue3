<template>
  <div class="McContainer" :style="contentStyle">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, StyleValue } from "vue";
import { type MainProps } from "../type";
import { getMainStyleByProps } from "../utils";

const props = withDefaults(defineProps<MainProps>(), { children: [] });

const contentStyle = computed<StyleValue>(() => {
  console.log(props);
  const mainStyle = getMainStyleByProps(props?.styles);
  return {
    ...mainStyle,
  };
});
</script>

<style lang="scss" scoped>
.McContainer {
  word-break: break-all;
}
</style>
