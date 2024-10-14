<template>
  <ConfigItem :label="label">
    <a-input v-model="model" placeholder="请输入跳转链接或路径" />
  </ConfigItem>
</template>

<script setup lang="ts">
import ConfigItem from "@/custom-platform/ConfigItem.vue";
defineProps<{ label: string }>();
const model = defineModel<string>();
</script>

<style></style>
