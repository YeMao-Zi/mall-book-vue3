<template>
  <ConfigItem :label="label">
    <a-slider v-bind="attr" v-model="model" show-input size="small" />
  </ConfigItem>
</template>

<script setup lang="ts">
import ConfigItem from "@/components/ConfigItem.vue";
import { type ComponentOptions } from "vue";
const props = defineProps<{ label: string; attr?: any }>();

const model = defineModel<ComponentOptions>();
</script>

<style></style>
