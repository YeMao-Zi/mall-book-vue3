<!--
 * @Author: zsj 1794541268@qq.com
 * @Date: 2024-07-10 15:31:30
 * @LastEditors: zsj 1794541268@qq.com
 * @LastEditTime: 2024-08-15 15:15:51
 * @FilePath: \mall-book-vue3\src\components\control\index.vue
 * @Description: 展示模板
-->
<template>
  <div class="flex h-full text-[16px]">
    <!-- 物料面板 -->
    <div class="w-[236px] bg-white p-[10px]">
      <VueDraggable
        ref="draggableRef"
        v-model="initial.initializing"
        :group="{ name: 'itxst', pull: 'clone' }"
        :sort="false"
        :animation="300"
        :clone="handleClone"
      >
        <div
          v-for="item in initial.initializing"
          :key="item.name"
          class="p-1 inline-flex flex-col items-center justify-center w-6/12 cursor-pointer hover:bg-blue-600 hover:text-white"
        >
          <Icon style="font-size: 26px" :icon="item.icon"></Icon>
          <span class="text-[12px]">{{ item.name }}</span>
        </div>
      </VueDraggable>
    </div>
    <!-- 展示区域 -->
    <div class="flex justify-center flex-1 h-full overflow-auto">
      <div class="w-full">
        <div class="w-[375px] my-[50px] mx-auto bg-white shadow-lg">
          <ControlNestWidget v-model:list="widgets"></ControlNestWidget>
        </div>
      </div>
    </div>
    <!-- 物料配置 -->
    <div class="control-config w-[360px] overflow-auto p-[10px] bg-white">
      <customSchemaTemplate
        v-model="curComponent"
        :shema-field="curShemaField"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { type UseDraggableReturn, VueDraggable } from "vue-draggable-plus";
import { Icon } from "@iconify/vue";
import { useSchema } from "@/custom-components/config";
import { ref, provide, computed } from "vue";
import { deepClone, randomString } from "@/utils/index";
import type {
  SetCurComponent,
  DeleteComponent,
  ComponentOptions,
  InitializingItem,
} from "@/types/control";
import { ControlInject } from "@/types/control";
import customSchemaTemplate from "@/custom-schema-template/index.vue";

const draggableRef = ref<UseDraggableReturn>();
const initial = useSchema();
const widgets = ref<ComponentOptions[]>([]);
const curComponent = ref<ComponentOptions>();

// 当前选中物料的配置
const curShemaField = computed(() => {
  if (!curComponent?.value) return undefined;
  return initial.fields[curComponent?.value.component];
});

const handleClone = (model: InitializingItem) => {
  const { children = [] } = model;
  return {
    ...deepClone(model),
    id: randomString(),
    children,
  };
};

// 选中物料
const setCurComponent: SetCurComponent = (cmp) => {
  console.log(cmp, "cmp", widgets.value);
  curComponent.value = cmp;
};

// 删除物料
const deleteComponent: DeleteComponent = (id, list = widgets.value) => {
  // 遍历查找目标下标
  let index = list.reduce((pre, cur, i) => {
    return cur.id == id ? i : pre;
  }, -1);
  // 找到目标，删除无名
  if (index >= 0) {
    list.splice(index, 1);
    console.log("删除成功");
    console.log(list);
  } else {
    // 递归子物料
    list
      .filter((c) => c.children)
      .forEach((c) => {
        deleteComponent(id, c.children);
      });
  }
};

provide(ControlInject, {
  initial,
  widgets: widgets,
  curComponent: curComponent,
  setCurComponent,
  deleteComponent,
});
</script>

<style lang="scss" scoped></style>
