<!--
 * @Author: zsj 1794541268@qq.com
 * @Date: 2024-09-23 13:51:24
 * @LastEditors: zsj 1794541268@qq.com
 * @LastEditTime: 2024-10-10 14:58:50
 * @FilePath: \mall-book-vue3\src\custom-components\McCube\index.vue
 * @Description: 魔方组件
-->
<template>
  <div class="McCube" ref="McCubeRef" :style="wrapStyle">
    <div
      class="cube-box"
      v-for="(item, index) in cube.list"
      :style="getBoxStyle(item)"
      :key="index"
    >
      <div class="cube-item" :style="getItemStyle(item)">
        <img
          v-if="item.imagePath"
          class="cube-item-img"
          :src="item.imagePath"
        />
        <div class="empty" v-else></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type MainProps, ObjectExpand } from "../type";
import { computed, onMounted, onUpdated, ref, useTemplateRef } from "vue";
import { getMainStyle } from "../utils";

type ListItem = ObjectExpand<{
  top: number;
  left: number;
  width: number;
  height: number;
  startKey: number;
  endKey: number;
  imagePath?: string;
  jumpPath?: string;
  styles: Record<string, any>;
}>;

interface Props extends MainProps {
  cube: {
    row: number;
    column: number;
    list: Array<ListItem>;
  };
}

const McCubeRef = useTemplateRef("McCubeRef");

const contentWidth = ref<number>(375);

const { styles = {}, cube } = defineProps<Props>();

const wrapStyle = computed(() => {
  // console.log(cube, "cube");
  const column = cube.column;
  const row = cube.row;
  const mainStyle = getMainStyle(styles);
  return {
    ...mainStyle,
    width: contentWidth.value + "px",
    height: (contentWidth.value / column) * row + "px",
  };
});

const getBoxStyle = (item: ListItem) => {
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

const getItemStyle = (item: ListItem) => {
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

<style scoped>
.McCube {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.cube-box {
  position: absolute;
  border: initial;
}

.cube-item {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.cube-item-img {
  width: 100%;
  height: 100%;
  display: block;
}

.empty {
  width: 100%;
  height: 100%;
  background-color: var(--color-theme-light);
}
</style>
