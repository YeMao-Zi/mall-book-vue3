<template>
  <div class="McContainer" :style="contentStyle"></div>
</template>

<script setup lang="ts">
import { computed, StyleValue } from "vue";
interface Props {
  paddingTop: number;
  paddingRight: number;
  paddingLeft: number;
  paddingBottom: number;
}
const props = withDefaults(defineProps<Props>(), {
  paddingTop: 0,
  paddingRight: 0,
  paddingLeft: 0,
  paddingBottom: 0,
});

const contentStyle = computed<StyleValue>(() => {
  const { paddingTop, paddingRight, paddingBottom, paddingLeft } = props;
  return {
    padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`,
  };
});
</script>

<style lang="scss" scoped>
.McContainer {
  height: 20px;
  background-color: #fff;
}
</style>
