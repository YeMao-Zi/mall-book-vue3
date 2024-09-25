<template>
  <div class="w-full h-full flex flex-row-reverse items-center px-2">
    <a-button type="primary" @click="save">保存</a-button>
  </div>
</template>

<script setup lang="ts">
import { widgets } from "../control/config";
import { pageCmp } from "../pageConfig/config";
const save = () => {
  console.log(widgets, "pageCmp", pageCmp);
};
</script>

<style lang="scss" scoped></style>
