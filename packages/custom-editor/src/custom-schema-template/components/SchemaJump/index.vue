<template>
  <ConfigItem :label="label">
    <a-input v-model="model" placeholder="请输入跳转链接或路径" />
  </ConfigItem>
</template>

<script setup lang="ts">
defineProps<{ label: string }>();
const model = defineModel<string>();
</script>

<style></style>
