<template>
  <div>
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
  </div>
</template>

<script setup lang="ts">
import type { Field, ComponentOptions } from "@/types/control";
import { getComponents } from "./config";

const model = defineModel<ComponentOptions>();

defineProps<{
  shemaField?: Field;
}>();
</script>

<style></style>
