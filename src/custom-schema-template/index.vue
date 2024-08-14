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
          :schema="s.child"
          :value="model[key]"
        ></custom-schema-template>
      </component>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Field, ComponentOptions } from "@/types/control";
import { ComputedRef, Ref } from "vue";

const model = defineModel<ComponentOptions>();

const props = defineProps<{
  shemaField?: Field;
}>();

const getComponents = (type: string) => {
  return `schema-${type}`;
};
</script>

<style></style>
