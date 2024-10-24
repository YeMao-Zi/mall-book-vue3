<template>
  <template v-for="item in widgets">
    <component :is="item.component" v-bind="item" :onClick="onClick">
      <Preview
        v-if="item.children"
        :widgets="item.children"
        :onClick="onClick"
      ></Preview>
    </component>
  </template>
</template>

<script setup lang="ts">
import type { PreviewProps } from "./type";
defineOptions({
  name: "Preview",
});
const { widgets } = defineProps<PreviewProps>();
</script>

<style></style>
