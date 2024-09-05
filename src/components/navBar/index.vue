<template>
  <div class="w-full h-full flex flex-row-reverse">
    <div>{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();
</script>

<style lang="scss" scoped></style>
