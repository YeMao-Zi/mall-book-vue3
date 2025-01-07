<template>
  <div class="McTab" :style="wrapStyle">
    <div class="mc-tab-item" v-for="item in tabList" :key="item.id" :style="itemStyle">
      <img
        v-if="attrs.type !== 'text'"
        :style="imageStyle"
        :src="item.imagePath"
      />
      <span v-if="attrs.type !== 'image'" class="">{{ item.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, StyleValue } from "vue";
import type { McTabProps } from "./type";
import { getMainStyle } from "../utils";
defineOptions({
  name: "McTab",
});
const { styles = {}, tabList, attrs } = defineProps<McTabProps>();

const wrapStyle = computed<StyleValue>(() => {
  const mainStyle = getMainStyle(styles);
  return {
    ...mainStyle,
  };
});

const itemStyle = computed<StyleValue>(() => {
  const { itemGap } = attrs;
  return {
    gap: `${itemGap}px`,
  };
});

const imageStyle = computed<StyleValue>(() => {
  const { imageWidth, imageHeight, imageRadius } = attrs;
  return {
    width: `${imageWidth}px`,
    height: `${imageHeight}px`,
    borderRadius: `${imageRadius}px`,
  };
});
</script>

<style scoped></style>
