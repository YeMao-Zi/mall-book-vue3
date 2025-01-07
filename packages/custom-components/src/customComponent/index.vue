<template>
  <div class="mc-page" :style="page.styles">
    <Preview :widgets="widgets" :onClick="onClick" />
  </div>
</template>

<script setup lang="ts">
import type { CustomComponentProps } from "./type";
defineOptions({
  name: "customComponent",
});

const { page, widgets, onClick } = defineProps<CustomComponentProps>();
</script>

<style></style>
