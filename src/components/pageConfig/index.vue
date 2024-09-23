<template>
  <div class="w-full h-full relative" :style="pageStyles">
    <a-tooltip position="bottom" content="页面设置">
      <div class="pageSetting" @click="pageSetting">
        <Icon style="font-size: 24px" icon="ep:setting" />
      </div>
    </a-tooltip>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { computed } from "vue";
import { type MainProps } from "@/custom-components/type";

const props = defineProps<MainProps>();
const emits = defineEmits(["pageSetting"]);

const pageStyles = computed(() => {
  if (!props?.styles) return {};
  const { backgroundColor } = props.styles;
  return {
    backgroundColor,
  };
});

const pageSetting = () => {
  emits("pageSetting");
};
</script>

<style lang="scss" scoped>
.pageSetting {
  cursor: pointer;
  position: absolute;
  left: -70px;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
