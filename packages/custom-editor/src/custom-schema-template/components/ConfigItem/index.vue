<template>
  <div class="flex p-2 bg-white">
    <div class="text-base">{{ label }}</div>
    <a-tooltip v-if="tip" :content="tip">
      <Icon icon="prime:exclamation-circle" />
    </a-tooltip>

    <div class="flex-1 ml-5">
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
