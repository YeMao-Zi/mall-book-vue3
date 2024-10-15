<template>
  <div class="flex p-1 bg-white">
    <div class="text-[14px]">{{ label }}</div>
    <a-tooltip v-if="tip" :content="tip">
      <Icon icon="prime:exclamation-circle" />
    </a-tooltip>
    <div class="flex-1 ml-2">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps<{
  label: string;
  tip?: string;
}>();
</script>

<style></style>
