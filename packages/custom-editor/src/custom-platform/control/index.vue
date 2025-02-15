<!--
 * @Author: zsj 1794541268@qq.com
 * @Date: 2024-07-10 15:31:30
 * @LastEditors: zsj 1794541268@qq.com
 * @LastEditTime: 2025-01-07 18:21:36
 * @FilePath: \mall-book-vue3\src\components\control\index.vue
 * @Description: 展示模板
-->
<template>
  <div class="flex h-full text-[16px]">
    <!-- 物料面板 -->
    <div class="w-[236px] bg-white p-5">
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
          class="p-3 inline-flex flex-col items-center justify-center gap-1 w-6/12 cursor-pointer hover:bg-blue-600 hover:text-white"
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
          <pageConfig :styles="page.styles" @page-setting="handlePageSetting">
            <ControlNestWidget v-model:widgets="widgets"></ControlNestWidget>
          </pageConfig>
        </div>
      </div>
    </div>
    <!-- 物料配置 -->
    <div class="control-config w-[360px] overflow-y-scroll p-5 bg-white">
      <div class="pb-5 mb-5 font-bold text-[20px] border-b-2">
        {{ curComponent?.name || "页面" }}
      </div>
      <customSchemaTemplate
        v-if="curComponent"
        v-model="curComponent"
        :shema-field="curShemaField"
      />
      <customSchemaTemplate v-else v-model="page" :shema-field="pageShemaField" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { VueDraggable } from "vue-draggable-plus";
import { Icon } from "@iconify/vue";
import { useSchema } from "@mobilecustom/components";
import { ref, provide, computed } from "vue";
import { deepClone, randomString } from "../../utils/index";
import type {
  SetCurComponent,
  DeleteComponent,
  ComponentOptions,
  InitializingItem,
} from "../../types/platform";
import { ControlInject } from "../../types/platform";
import customSchemaTemplate from "../../custom-schema-template/index.vue";
import { page, pageShemaField } from "../pageConfig/config";
import pageConfig from "../pageConfig/index.vue";
import ControlNestWidget from "./ControlNestWidget.vue";

import { widgets } from "./config";

const initial = useSchema();
const curComponent = ref<ComponentOptions>();

// 当前选中物料的配置
const curShemaField = computed(() => {
  if (!curComponent?.value) return undefined;
  const shemaField = initial.fields[curComponent?.value.component];
  return shemaField;
});

const handleClone = (model: InitializingItem) => {
  const { children } = model;
  return {
    ...deepClone(model),
    id: randomString(),
    children: deepClone(children),
  };
};

// 选中物料
const setCurComponent: SetCurComponent = (cmp) => {
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
  } else {
    // 递归子物料
    list
      .filter((c) => c.children)
      .forEach((c) => {
        deleteComponent(id, c.children);
      });
  }
  curComponent.value = undefined;
};

const handlePageSetting = () => {
  curComponent.value = undefined;
};

provide(ControlInject, {
  initial,
  widgets: computed(() => widgets.value),
  curComponent: computed(() => curComponent.value),
  setCurComponent,
  deleteComponent,
});
</script>

<style lang="scss" scoped></style>
