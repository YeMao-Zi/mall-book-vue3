<template>
  <div>
    <div class="p-1 bg-slate-200 text-slate-600">
      <span>{{ label }}</span>
    </div>
    <div class="p-1">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ label: string }>();
</script>

<style></style>
