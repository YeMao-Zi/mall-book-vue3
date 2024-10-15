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
import type { MainProps, ObjectExpand, onClick } from "../type";
import { getMainStyle } from "../utils";

type ListItem = ObjectExpand<{
  id: any;
  imagePath?: string;
  jumpPath?: string;
}>;
interface Props extends MainProps {
  list: Array<ListItem>;
  onClick?: onClick;
}

const { attrs = {}, styles = {}, list = [], onClick } = defineProps<Props>();

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

const handleClick = (item: ListItem) => {
  onClick && onClick({ item, type: "carousel" });
};
</script>

<style scoped>
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
