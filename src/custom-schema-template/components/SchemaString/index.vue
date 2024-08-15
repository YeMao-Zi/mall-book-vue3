<template>
  <config-item :label="label">
    <el-input v-model="model" />
  </config-item>
</template>

<script setup lang="ts">
import ConfigItem from "@/components/ConfigItem.vue";
import { type ComponentOptions } from "vue";
const props = defineProps<{ label: string }>();

const model = defineModel<ComponentOptions>();
</script>

<style></style>
