<template>
  <div class="McContainer" :style="wrapStyle">
    <swiper-container v-bind="swiperAttrs">
      <swiper-slide
        v-for="item in list"
        :key="item.id"
        @click="handleClick(item)"
      >
        <img :src="item.imagePath" />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup lang="ts">
import { computed, StyleValue } from "vue";
import type { McCarouselListItem, McCarouselProps } from "./type";
import { getMainStyle } from "../utils";

defineOptions({
  name: "McCarousel",
});
const {
  attrs = {},
  styles = {},
  list = [],
  onEventClick,
} = defineProps<McCarouselProps>();

const swiperAttrs = computed(() => {
  const { autoplay = true, loop } = attrs;
  return {
    pagination: true,
    autoplay: autoplay
      ? {
          delay: 2500,
        }
      : false,
    loop,
  };
});

const wrapStyle = computed<StyleValue>(() => {
  const mainStyle = getMainStyle(styles);

  return {
    ...mainStyle,
  };
});

const handleClick = (item: McCarouselListItem) => {
  onEventClick && onEventClick({ item, type: "carousel" });
};
</script>

<style scoped></style>
