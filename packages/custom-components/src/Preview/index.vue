<template>
  <template v-for="item in widgets">
    <component :is="item.component" v-bind="item" :onEventClick="onEventClick">
      <Preview
        v-if="item.children"
        :widgets="item.children"
        :onEventClick="onEventClick"
      ></Preview>
    </component>
  </template>
</template>

<script setup lang="ts">
import type { PreviewProps } from "./type";
defineOptions({
  name: "Preview",
});
const props = defineProps<PreviewProps>();
</script>

<style></style>
