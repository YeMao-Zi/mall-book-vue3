<template>
  <div>
    <div class="p-1 bg-slate-200 text-slate-600">
      <span>{{ label }}</span>
    </div>
    <div class="p-1">
      <VueDraggable v-model="model">
        <!-- 编译模式,插槽可供自定义拖拽组件入容器 -->
        <slot v-if="edit"></slot>
        <!-- 非编译模式，根据schema子类遍历数组单项组件 -->
        <template v-else>
          <div v-for="item in model" :key="item.id" class="nav-item">
            <component
              v-for="(val, key, index) in schema?.child"
              :key="index"
              :is="getComponents(val.type)"
              v-model="item[key]"
              v-bind="val"
            ></component>
            <div class="nav-delete" @click="delItem(item.id)">x</div>
          </div>
        </template>
      </VueDraggable>
      <a-button long type="outline" @click="addItem">新增数据</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VueDraggable } from "vue-draggable-plus";
import type { Field } from "@/types/control";
import { getComponents } from "../../config";
import { randomString } from "@/utils/index";

interface Props {
  label: string;
  edit?: Boolean;
  schema: Field;
}
const { label, edit = false, schema } = defineProps<Props>();

interface ModelItem {
  id: any;
  [k: string]: any;
}

const model = defineModel<Array<ModelItem>>({
  default: [],
});

const addItem = () => {
  model.value.push({
    id: randomString(),
  });
};

const delItem = (id: any) => {
  model.value = model.value?.filter((v) => v.id !== id);
};
</script>

<style lang="scss" scoped>
.nav-item {
  position: relative;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .nav-delete {
    display: none;
    position: absolute;
    top: -7px;
    right: -7px;
    width: 16px;
    height: 16px;
    line-height: 14px;
    border-radius: 50%;
    background: #b3b3b3;
    color: #fff;
    font-size: 14px;
    text-align: center;
    z-index: 4;
    cursor: pointer;
  }

  &:hover {
    .nav-delete {
      display: block;
    }
  }
}
</style>
