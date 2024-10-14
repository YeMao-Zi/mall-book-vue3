<template>
  <config-item :label="label">
    <a-input v-model="model" />
  </config-item>
</template>

<script setup lang="ts">
import ConfigItem from "@/custom-platform/ConfigItem.vue";
defineProps<{ label: string }>();

const model = defineModel<string>();
</script>

<style></style>
