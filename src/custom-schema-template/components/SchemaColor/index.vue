<template>
  <config-item :label="label">
    <el-color-picker v-model="model" show-alpha size="small" />
  </config-item>
</template>

<script setup lang="ts">
import { type ComponentOptions } from "vue";
const props = defineProps<{ label: string }>();
const model = defineModel<ComponentOptions>();
</script>

<style></style>
