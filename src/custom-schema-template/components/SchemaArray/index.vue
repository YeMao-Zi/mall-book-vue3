<template>
  <div>
    <div class="p-1 bg-slate-200 text-slate-600">
      <span>{{ label }}</span>
    </div>
    <div class="p-1">
      <VueDraggable v-model="model">
        <!-- 编译模式,插槽可供自定义拖拽组件入容器 -->
        <slot v-if="edit"></slot>
      </VueDraggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type ComponentOptions } from "vue";
const props = defineProps<{ label: string; edit: Boolean }>();
const model = defineModel<ComponentOptions>();
</script>

<style></style>
