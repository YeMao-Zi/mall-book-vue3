<template>
  <template v-for="item in widgets">
    <component :is="item.component" v-bind="item">
      <Preview v-if="item.children" :widgets="item.children"></Preview>
    </component>
  </template>
</template>

<script setup lang="ts">
import type { ComponentOptions } from "../type";

interface Props {
  widgets: ComponentOptions[];
}
const { widgets } = defineProps<Props>();
</script>

<style></style>
