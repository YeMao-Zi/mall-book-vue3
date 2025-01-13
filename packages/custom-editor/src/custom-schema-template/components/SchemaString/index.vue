<template>
  <config-item :label="label">
    <a-input v-model="model" />
  </config-item>
</template>

<script setup lang="ts">
defineProps<{ label: string }>();

const model = defineModel<string>();
</script>

<style></style>
