<template>
  <div ref="scrollRef" class="mc-noticebar-scroll" style="width: 0px">
    <div class="mc-noticebar-box">
      <div
        class="mc-noticebar-content"
        ref="contentRef"
        :style="{
          animationDuration: _duration + 's',
          paddingLeft: `${_scrollRefWidth}px`,
        }"
        :class="{ 'mc-noticebar-aniBox': _scrollable }"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, useTemplateRef } from "vue";
import type { NoticeBarProps } from "./type";

const { speed = 100, scrollable = true } = defineProps<NoticeBarProps>();

const _scrollable = ref(scrollable);
const contentRef = useTemplateRef("contentRef");
const scrollRef = useTemplateRef("scrollRef");

const _duration = ref(0);
const _scrollRefWidth = ref(0);

onMounted(() => {
  getWrapWidth();
});

function getWrapWidth() {
  const scrollWidth = scrollRef.value?.offsetWidth || 0;
  const width = contentRef.value?.offsetWidth || 0;
  if (!scrollable) {
    if (scrollWidth <= width) {
      _scrollable.value = true;
      _scrollRefWidth.value = scrollWidth;
    } else {
      return;
    }
  }
  _scrollRefWidth.value = scrollWidth;
  let totalWidth = (width + scrollWidth) / speed;
  _duration.value = Math.ceil(totalWidth);
}
</script>

<style scoped lang="scss">
// @use "./styles/noticeBar.scss"
</style>
