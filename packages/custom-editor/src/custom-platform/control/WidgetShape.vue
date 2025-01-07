<!--
 * @Author: zsj 1794541268@qq.com
 * @Date: 2024-07-30 13:34:09
 * @LastEditors: zsj 1794541268@qq.com
 * @LastEditTime: 2024-09-30 15:04:51
 * @FilePath: \mall-book-vue3\src\components\control\WidgetShape.vue
 * @Description: 物流容器（管理工具栏）
-->
<template>
  <div
    ref="shapeRef"
    class="shape"
    @click.stop="controlInject?.setCurComponent(widget)"
  >
    <!-- 组件高亮 -->
    <div v-if="isCurComponent(widget.id)" class="shape-solid event-none"></div>
    <div class="shape-dashed event-none"></div>

    <!-- 组件工具栏 -->
    <div
      v-if="show"
      class="shape-tab"
      :style="{
        right: getRightStyle(),
        zIndex: isCurComponent(widget.id) ? 200 : 100,
      }"
    >
      <template v-if="isCurComponent(widget.id)">
        <Icon
          class="cursor-pointer hover:text-blue-600"
          style="font-size: 16px"
          icon="ep:delete"
          @click.stop="
            controlInject?.deleteComponent(
              widget.id,
              controlInject?.widgets?.value,
            )
          "
        ></Icon>
      </template>
      <span v-else>{{ widget.name }}</span>
    </div>

    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, inject, onMounted, useTemplateRef } from "vue";
import { Icon } from "@iconify/vue";
import { ControlInject, type ComponentOptions } from "../../types/control";
const controlInject = inject(ControlInject);
const props = defineProps<{
  widget: ComponentOptions;
}>();

const show = ref(false);
const shapeRef = useTemplateRef<Element>("shapeRef");

const isCurComponent = (id: string) => {
  return id === controlInject?.curComponent?.value?.id;
};

const getRightStyle = () => {
  if (!shapeRef.value) return;
  let [width] = window.getComputedStyle(shapeRef.value).width.split("px");
  return `${-(380 - Number(width)) / 2 - 86}px`;
};

onMounted(() => {
  show.value = true;
});
</script>

<style lang="scss" scoped>
.shape {
  position: relative;
  width: 100%;
  display: inline-block;
  &:hover > .shape-dashed {
    display: block;
  }

  .shape-dashed {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: dashed 1px var(--color-theme);
    z-index: 100;
  }

  .shape-solid {
    position: absolute;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    top: -5px;
    left: -5px;
    right: 0;
    bottom: 0;
    border: solid 2px var(--color-theme);
    z-index: 100;
  }

  .event-none {
    pointer-events: none;
  }
}

.shape-tab {
  position: absolute;
  top: 0; /*no*/
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px; /*no*/
  height: 24px; /*no*/
  font-size: 12px; /*no*/
  color: #333;
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &::after {
    content: "";
    position: absolute;
    right: 100%; /*no*/
    top: 7px; /*no*/
    width: 0; /*no*/
    height: 0; /*no*/
    border-width: 5px; /*no*/
    border-style: solid;
    border-color: transparent;
    margin-bottom: -1px; /*no*/
    border-right-width: 5px; /*no*/
    border-right-color: currentColor;
    color: #fff;
  }
}
</style>
