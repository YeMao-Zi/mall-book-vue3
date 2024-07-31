<!--
 * @Author: zsj 1794541268@qq.com
 * @Date: 2024-07-30 13:34:09
 * @LastEditors: zsj 1794541268@qq.com
 * @LastEditTime: 2024-07-31 13:30:41
 * @FilePath: \mall-book-vue3\src\components\control\WidgetShape.vue
 * @Description: 物流容器（管理工具栏）
-->
<template>
  <div class="shape">
    <div class="shape-dashed event-none"></div>
    <div class="shape-solid event-none"></div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { ControlInject } from "@/types/control";

const controlInject = inject(ControlInject);
const props = defineProps<{
  widget: any;
}>();

const isCurComponent = (id: string) => {
  return props.widget;
};
</script>

<style lang="scss" scoped>
.shape {
  position: relative;
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
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: solid 2px var(--color-theme);
    z-index: 100;
  }

  .event-none {
    pointer-events: none;
  }
}
</style>
