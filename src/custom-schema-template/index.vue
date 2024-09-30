<template>
  <div>
    <ul v-if="model">
      <li v-for="(s, key, index) in shemaField" :key="index">
        <component
          :is="getCorrelation(s, key) && getComponents(s.type)"
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
import { inject } from "vue";
import {
  type Field,
  type ComponentOptions,
  ControlInject,
} from "@/types/control";
import { getComponents } from "./config";

const controlInject = inject(ControlInject);

const model = defineModel<ComponentOptions>();

const getCorrelation = (s: any, key: any) => {
  const curComponentInfo = controlInject?.curComponent.value;
  if (!curComponentInfo) return true;
  if (s.correlation) {
    const evalStr = `curComponentInfo.${s.correlation}`;
    return eval(evalStr);
  }
  return true;
};

defineProps<{
  shemaField?: Field;
}>();
</script>

<style></style>
