<template>
  <div>
    <div class="p-3 bg-slate-200 text-slate-600">
      <span>{{ label }}</span>
    </div>
    <div class="p-3">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ label: string }>();
</script>

<style></style>
