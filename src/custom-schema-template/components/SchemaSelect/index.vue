<template>
  <ConfigItem :label="label">
    <a-select  v-bind="attr" v-model="model" show-input size="small">
        <a-option>Beijing</a-option>
    </a-select>
  </ConfigItem>
</template>

<script setup lang="ts">
import ConfigItem from "@/components/ConfigItem.vue";
defineProps<{ label: string; attr?: any }>();

const model = defineModel<number>();
</script>

<style></style>
