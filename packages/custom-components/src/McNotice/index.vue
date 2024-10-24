<template>
  <div class="McNotice" :style="wrapStyle">
    <img
      v-if="imageValue.icon"
      class="notice-ico"
      :src="imageValue.icon"
      :style="icoStyle"
    />
    <noticeBar :key="noticeBarKey" v-bind="attrs">
      <div>{{ imageValue.text }}</div>
    </noticeBar>
  </div>
</template>

<script setup lang="ts">
import { computed, StyleValue, ref, watch } from "vue";
import type { McNoticeProps } from "./type";
import { getMainStyle } from "../utils";
import noticeBar from "./noticeBar.vue";
defineOptions({
  name: "McNotice",
});
const randomString = () => Math.random().toString(36).slice(2);

// 为了当配置变更时实时更改公告栏
const noticeBarKey = ref(randomString());

const props = defineProps<McNoticeProps>();

watch(
  () => props,
  () => {
    // console.log('watch')
    noticeBarKey.value = randomString();
  },
  {
    deep: true,
  },
);

const wrapStyle = computed<StyleValue>(() => {
  const { styles = {} } = props;
  const mainStyle = getMainStyle(styles);
  return {
    ...mainStyle,
  };
});

const icoStyle = computed<StyleValue>(() => {
  const { styles = {} } = props;
  const { fontSize } = styles;
  return {
    width: `${fontSize + 4}px`,
    height: `${fontSize + 4}px`,
  };
});
</script>

<style scoped></style>
