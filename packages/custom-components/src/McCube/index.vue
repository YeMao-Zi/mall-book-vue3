<!--
 * @Author: zsj 1794541268@qq.com
 * @Date: 2024-09-23 13:51:24
 * @LastEditors: zsj 1794541268@qq.com
 * @LastEditTime: 2025-01-09 15:27:45
 * @FilePath: \mall-book-vue3\src\custom-components\McCube\index.vue
 * @Description: 魔方组件
-->
<template>
  <div class="McCube" ref="mcCube" :style="wrapStyle">
    <div
      class="mc-cube-box"
      v-for="(item, index) in cube.list"
      :style="getBoxStyle(item)"
      :key="index"
    >
      <div class="mc-cube-item" :style="getItemStyle(item)">
        <img
          v-if="item.imagePath"
          class="mc-cube-item-img"
          :src="item.imagePath"
        />
        <div class="mc-empty" v-else></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUpdated, ref, useTemplateRef } from "vue";
import { getMainStyle } from "../utils";
import type { McCubeListItem, McCubeProps } from "./type";
defineOptions({
  name: "McCube",
});
const McCubeRef = useTemplateRef("mcCube");

const contentWidth = ref<number>(375);

const { styles = {}, cube } = defineProps<McCubeProps>();

const wrapStyle = computed(() => {
  const column = cube.column;
  const row = cube.row;
  const mainStyle = getMainStyle(styles);
  return {
    ...mainStyle,
    width: contentWidth.value + "px",
    height: (contentWidth.value / column) * row + "px",
  };
});

const getBoxStyle = (item: McCubeListItem) => {
  const column = cube.column;
  const row = cube.column;
  const width = (contentWidth.value / column) * item.width;
  const height = (contentWidth.value / column) * item.height;
  return {
    width: width + "px",
    height: height + "px",
    top: ((item.top - 1) / cube.row) * 100 + "%",
    left: ((item.left - 1) / cube.column) * 100 + "%",
    padding: styles!.gap / 2 + "px",
  };
};

const getItemStyle = (item: McCubeListItem) => {
  return {
    ...getMainStyle(item.styles),
  };
};

function setContentWidth() {
  if (!McCubeRef.value?.parentNode) return;
  const parentNode = McCubeRef.value.parentNode as Element;
  // contentWidth.value = parentNode.clientWidth - styles!.borderWidth * 2;
  contentWidth.value = parentNode.clientWidth;
}

onUpdated(() => {
  setContentWidth();
});

onMounted(() => {
  setContentWidth();
});
</script>

<style scoped></style>
