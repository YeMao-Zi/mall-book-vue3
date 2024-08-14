<template>
  <ConfigItem :label="label">123{{ label }}</ConfigItem>
</template>

<script setup lang="ts">
import ConfigItem from "@/components/ConfigItem.vue";
const props = defineProps<{ label: string }>();
console.log(123456);
</script>

<style></style>
