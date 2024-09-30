<template>
  <div class="McContainer" :style="wrapStyle">
    <swiper-container v-bind="swiperAttrs">
      <swiper-slide v-for="item in list" :key="item.id">
        <img :src="item.imagePath" />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup lang="ts">
import { computed, StyleValue } from "vue";
import { type MainProps } from "../type";
import { getMainStyle } from "../utils";

interface Props extends MainProps {
  list: Array<{
    id: any;
    imagePath?: string;
    jumpPath?: string;
  }>;
}

const { attrs = {}, styles = {}, list = [] } = defineProps<Props>();

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
</script>

<style lang="scss" scoped>
.McContainer {
  overflow: hidden;
}

swiper-container {
  width: 100%;
  height: 100%;
}

swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
