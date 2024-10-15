<template>
  <ConfigItem :label="label">
    <a-slider v-bind="attr" v-model="model" show-input size="small" />
  </ConfigItem>
</template>

<script setup lang="ts">
import ConfigItem from "@/custom-platform/ConfigItem.vue";
defineProps<{ label: string; attr?: any }>();

const model = defineModel<number>();
</script>

<style></style>
