<template>
  <ConfigItem :label="label">
    <a-slider v-bind="attr" v-model="model" show-input size="small" />
  </ConfigItem>
</template>

<script setup lang="ts">
defineProps<{ label: string; attr?: any }>();

const model = defineModel<number>();
</script>

<style></style>
