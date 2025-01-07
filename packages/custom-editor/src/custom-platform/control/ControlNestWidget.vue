<!--
 * @Author: zsj 1794541268@qq.com
 * @Date: 2024-07-30 11:01:21
 * @LastEditors: zsj 1794541268@qq.com
 * @LastEditTime: 2025-01-07 18:33:19
 * @FilePath: \mall-book-vue3\src\components\control\ControlNestWidget.vue
 * @Description: 嵌套物料
-->
<template>
  <VueDraggable
    v-model="widgets"
    group="itxst"
    :sort="true"
    :animation="500"
    :class="[isWidget ? 'nest-child' : 'nest-area']"
  >
    <WidgetShape v-for="item in widgets" :key="item.id" :widget="item">
      <component :is="item.component" v-bind="item">
        <ControlNestWidget
          v-if="item.children"
          v-model:widgets="item.children"
          is-widget
        ></ControlNestWidget>
      </component>
    </WidgetShape>
    <!-- 占位元素 -->
    <div v-if="!widgets.length" class="placeBox"></div>
  </VueDraggable>
</template>

<script setup lang="ts">
import WidgetShape from "./WidgetShape.vue";
import { VueDraggable } from "vue-draggable-plus";

interface Props {
  isWidget?: boolean;
}
const { isWidget = false } = defineProps<Props>();

const widgets = defineModel<any[]>("widgets", {
  required: true,
});
</script>

<style scoped>
/* .nest-child {
  min-height: 80px;
} */

.placeBox {
  height: 100px;
}

.nest-area {
  display: flex;
  flex-direction: column;
  min-height: 600px;
}
</style>
