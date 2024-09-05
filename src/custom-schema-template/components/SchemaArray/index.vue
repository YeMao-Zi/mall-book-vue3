<template>
  <div>
    <div class="p-1 bg-slate-200 text-slate-600">
      <span>{{ label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import ConfigItem from "@/components/ConfigItem.vue";
import { type ComponentOptions } from "vue";
const props = defineProps<{ label: string }>();
const model = defineModel<ComponentOptions>();
</script>

<style></style>
