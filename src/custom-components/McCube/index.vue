<!--
 * @Author: zsj 1794541268@qq.com
 * @Date: 2024-09-23 13:51:24
 * @LastEditors: zsj 1794541268@qq.com
 * @LastEditTime: 2024-09-25 17:00:35
 * @FilePath: \mall-book-vue3\src\custom-components\McCube\index.vue
 * @Description: 魔方组件
-->
<template>
  <div class="McCube" ref="McCubeRef" :style="contentStyle">
    <template v-if="contentWidth">
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
    </template>
  </div>
</template>

<script setup lang="ts">
import { type MainProps } from "../type";
import { computed, onMounted, onUpdated, ref, useTemplateRef } from "vue";
import { getMainStyle, getBorderStyle } from "../utils";

interface ListItem {
  top: number;
  left: number;
  width: number;
  height: number;
  startKey: number;
  endKey: number;
  imagePath?: string;
  jumpPath?: string;
  styles: Record<string, any>;
}

const McCubeRef = useTemplateRef("McCubeRef");

const contentWidth = ref<number>();

const { styles, cube } = defineProps<
  MainProps & {
    cube: {
      row: number;
      column: number;
      list: Array<ListItem>;
    };
  }
>();

const contentStyle = computed(() => {
  if (!styles) return;
  const column = cube.column;
  const row = cube.row;
  const mainStyle = getMainStyle(styles);
  const { borderRadius } = styles;
  return {
    ...mainStyle,
    borderRadius: `${borderRadius}px`,
    width: "100%",
    "aspect-ratio": `${column} / ${row}`,
  };
});

const getBoxStyle = (item: ListItem) => {
  if (!contentWidth.value) return;
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
    ...getBorderStyle(item.styles),
  };
};

function setContentWidth() {
  if (!McCubeRef.value?.parentNode) return;
  const parentNode = McCubeRef.value.parentNode as Element;
  contentWidth.value = parentNode.clientWidth - styles!.borderWidth * 2;
}

onUpdated(() => {
  setContentWidth();
});

onMounted(() => {
  setContentWidth();
});
</script>

<style lang="scss" scoped>
.McCube {
  position: relative;
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

  .cube-item-img {
    width: 100%;
    height: 100%;
    display: block;
  }

  .empty {
    width: 100%;
    height: 100%;
    background-color: var(--h5-color-bg);
  }
}
</style>
