<template>
  <config-item :label="label" :tip="tip">
    <a-switch v-model="model" />
  </config-item>
</template>

<script setup lang="ts">
import ConfigItem from "@/custom-platform/ConfigItem.vue";
defineProps<{ label: string; tip?: string }>();

const model = defineModel<boolean>();
</script>

<style lang="scss" scoped></style>
