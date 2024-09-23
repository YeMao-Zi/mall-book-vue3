<template>
  <div class="McContainer" :style="contentStyle">
    <swiper-container v-bind="swiperAttrs">
      <swiper-slide v-for="item in list" :key="item.id">
        <img :src="item.imagePath" />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup lang="ts">
import { computed, StyleValue, onMounted } from "vue";
import { type MainProps } from "../type";
import { getMainStyleByProps, isNumber } from "../utils";

const {
  attrs = {},
  styles = {},
  list = [],
} = defineProps<
  MainProps & {
    list: Array<{
      id: any;
      imagePath?: string;
      jumpPath?: string;
    }>;
  }
>();

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

const contentStyle = computed<StyleValue>(() => {
  if (!styles) return {};
  const mainStyle = getMainStyleByProps(styles);
  const { height = "auto" } = styles;

  return {
    ...mainStyle,
    height: isNumber(height) ? `${height}px` : height,
  };
});

onMounted(() => {});
</script>

<style lang="scss" scoped>
.McContainer {
  word-break: break-all;
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
