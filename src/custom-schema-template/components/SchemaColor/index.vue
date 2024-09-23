<template>
  <config-item :label="label">
    <a-color-picker v-model="model" size="small" />
  </config-item>
</template>

<script setup lang="ts">
import { type ComponentOptions } from "vue";
const props = defineProps<{ label: string }>();
const model = defineModel<string>();
</script>

<style></style>
