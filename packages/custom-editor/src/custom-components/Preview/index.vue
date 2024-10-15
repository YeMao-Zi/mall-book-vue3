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
import type { ComponentOptions, onClick } from "../type";

interface Props {
  widgets: ComponentOptions[];
  onClick?: onClick;
}
const { widgets } = defineProps<Props>();
</script>

<style></style>
