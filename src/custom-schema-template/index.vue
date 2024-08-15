<template>
  <ul v-if="model">
    <li v-for="(s, key, index) in shemaField" :key="index">
      <component
        :is="getComponents(s.type)"
        :key="index"
        v-bind="s"
        v-model="model[key]"
        :schema="s"
      >
        <custom-schema-template
          v-if="s.child"
          v-model="model[key]"
          :shema-field="s.child"
        ></custom-schema-template>
      </component>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Field, ComponentOptions } from "@/types/control";

const model = defineModel<ComponentOptions>();

const props = defineProps<{
  shemaField?: Field;
}>();

const getComponents = (type: string) => {
  return `schema-${type}`;
};
</script>

<style></style>
