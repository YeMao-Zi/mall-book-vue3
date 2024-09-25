<!--
 * @Author: zsj 1794541268@qq.com
 * @Date: 2024-07-30 11:01:21
 * @LastEditors: zsj 1794541268@qq.com
 * @LastEditTime: 2024-09-25 13:36:06
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
          v-model:list="item.children"
          is-widget
        ></ControlNestWidget>
      </component>
    </WidgetShape>
    <!-- 占位元素 -->
    <div v-if="!widgets.length" class="placeBox"></div>
  </VueDraggable>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { VueDraggable } from "vue-draggable-plus";

interface Props {
  isWidget?: boolean;
  list: any[];
}
const { isWidget = false, list } = defineProps<Props>();

interface Emits {
  (e: "update:list", value: any): void;
}
const emits = defineEmits<Emits>();

const widgets = computed({
  get: () => list,
  set: (value) => {
    console.log(value, "value");
    emits("update:list", value);
  },
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
