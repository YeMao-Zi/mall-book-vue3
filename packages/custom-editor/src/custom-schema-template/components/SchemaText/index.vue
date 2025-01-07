<template>
  <config-item :label="label">
    <a-textarea v-model="model" />
  </config-item>
</template>

<script setup lang="ts">
defineProps<{ label: string }>();

const model = defineModel<string>();
</script>

<style></style>
