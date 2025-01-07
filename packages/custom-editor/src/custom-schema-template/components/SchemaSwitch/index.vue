<template>
  <config-item :label="label" :tip="tip">
    <a-switch v-model="model" />
  </config-item>
</template>

<script setup lang="ts">
defineProps<{ label: string; tip?: string }>();

const model = defineModel<boolean>();
</script>

<style lang="scss" scoped></style>
