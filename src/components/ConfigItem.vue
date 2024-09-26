<template>
  <div class="flex p-1 bg-white">
    <div class="text-[14px] mr-2">{{ label }}</div>
    <div class="flex-1">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<style></style>
