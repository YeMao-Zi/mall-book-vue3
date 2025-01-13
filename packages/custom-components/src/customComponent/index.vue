<template>
  <div class="mc-page" :style="page.styles">
    <Preview :widgets="widgets" :onEventClick="onEventClick" />
  </div>
</template>

<script setup lang="ts">
import type { CustomComponentProps } from "./type";
defineOptions({
  name: "customComponent",
});

const { page, widgets, onEventClick } = defineProps<CustomComponentProps>();
</script>

<style></style>
