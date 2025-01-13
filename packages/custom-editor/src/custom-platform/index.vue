<template>
  <div>
    <div class="page">
      <div class="page-header">
        <navBar/>
      </div>
      <div class="page-body">
        <control />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide } from "vue";
import type { EventClick, ComponentOptions } from "@mobilecustom/components";
import control from "./control/index.vue";
import { PageInject } from "../types/platform";
import navBar from "./navBar/index.vue";

interface Props {
  onEventClick: EventClick;
}

interface ConfirmReturn {
  page: ComponentOptions;
  widgets: ComponentOptions[];
}
const emits = defineEmits(["confirm"]);
const props = defineProps<Props>();

const pageConfirm = (value: ConfirmReturn) => {
  emits("confirm", value);
};
provide(PageInject, {
  onEventClick: props.onEventClick,
  pageConfirm,
});
</script>

<style lang="scss" scoped>
.page {
  background-color: #f7f8fa;
  height: 100%;
  width: 100%;
  .page-header {
    height: 56px;
    background-color: #fff;
    margin-bottom: 5px;
  }
  .page-body {
    height: calc(100vh - 61px);
    width: 100%;
    // margin-top: 56px;
    overflow: auto;
  }
}
</style>
