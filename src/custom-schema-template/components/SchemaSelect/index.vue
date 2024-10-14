<template>
  <ConfigItem :label="label">
    <a-select
      v-bind="attr"
      v-model="model"
      :options="data"
      size="small"
    ></a-select>
  </ConfigItem>
</template>

<script setup lang="ts">
import ConfigItem from "@/custom-platform/ConfigItem.vue";

interface Props {
  label: string;
  attr?: any;
  data: { label?: string; id: string; value: any }[];
}
const props = defineProps<Props>();

const model = defineModel<string>();
</script>

<style></style>
