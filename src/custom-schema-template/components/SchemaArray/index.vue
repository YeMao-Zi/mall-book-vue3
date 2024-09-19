<template>
  <div>
    <div class="p-1 bg-slate-200 text-slate-600">
      <span>{{ label }}</span>
    </div>
    <div class="p-1">
      <VueDraggable v-model="field">
        <!-- 编译模式,插槽可供自定义拖拽组件入容器 -->
        <slot v-if="edit"></slot>
        <!-- 非编译模式，根据schema子类遍历数组单项组件 -->
        <template v-else>
          <!-- <template v-if="field?.length"> -->
          <div v-for="item in field" :key="item.id" class="nav-item">
            <component
              v-for="(val, key, index) in schema?.child"
              :key="index"
              :is="getComponents(val.type)"
              v-model="item[key]"
              v-bind="val"
            ></component>
          </div>
          <!-- </template> -->
        </template>
      </VueDraggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VueDraggable } from "vue-draggable-plus";
import { computed, type ComponentOptions } from "vue";
import type { Field, Fields } from "@/types/control";
import { getComponents } from "../../config";
const {
  label,
  edit = false,
  schema,
} = defineProps<{ label: string; edit?: Boolean; schema: Field }>();

interface Emits {
  (e: "update:list", value: any): void;
}
const emits = defineEmits<Emits>();

const field = computed({
  get: () => {
    console.log(model?.value, "fieldvalue");
    return model?.value || [];
  },
  set: (value) => {
    emits("update:list", value);
  },
});
const model = defineModel<any>();
</script>

<style></style>
