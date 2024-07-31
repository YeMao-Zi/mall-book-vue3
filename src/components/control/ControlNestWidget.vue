<!--
 * @Author: zsj 1794541268@qq.com
 * @Date: 2024-07-30 11:01:21
 * @LastEditors: zsj 1794541268@qq.com
 * @LastEditTime: 2024-07-31 09:41:05
 * @FilePath: \mall-book-vue3\src\components\control\ControlNestWidget.vue
 * @Description: 嵌套物料
-->
<template>
  <VueDraggable v-model="widgets" group="itxst" :sort="true" :animation="500">
    <WidgetShape v-for="item in widgets" :key="item.id" :widget="item">
      <component :is="item.component" v-bind="item">
        <ControlNestWidget
          v-model:list="item.children"
          is-widget
        ></ControlNestWidget>
      </component>
    </WidgetShape>
  </VueDraggable>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { VueDraggable } from "vue-draggable-plus";

interface Props {
  isWidget?: boolean;
  list: any[];
}
const props = withDefaults(defineProps<Props>(), {
  isWidget: false,
});

interface Emits {
  (e: "update:list", value: any[]): void;
}
const emits = defineEmits<Emits>();

const widgets = computed({
  get: () => props.list,
  set: (value) => emits("update:list", value),
});
</script>

<style></style>
