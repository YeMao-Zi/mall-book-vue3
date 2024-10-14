<template>
  <div class="">
    <div class="wrap-title p-1 text-[14px] bg-slate-500">{{ title }}</div>
    <div class="p-1">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>

<style lang="scss" scoped>
.wrap-title {
  &:before {
    content: "";
    width: 3px;
    height: 10px;
    margin-right: 8px;
    background: var(--color-theme);
  }
}
</style>
