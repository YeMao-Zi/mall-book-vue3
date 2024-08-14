<template>
  <div class="flex-row p-10 bg-white">
    <div class="">{{ label }}</div>
    <div>
      555
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
}>();
</script>

<style></style>
