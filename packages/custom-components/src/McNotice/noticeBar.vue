<template>
  <div ref="noticebarScroll" class="mc-noticebar-scroll" style="width: 0px">
    <div class="mc-noticebar-box">
      <div
        ref="noticebarContent"
        class="mc-noticebar-content"
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
import { nextTick, onMounted, ref, useTemplateRef } from "vue";
import type { NoticeBarProps } from "./type";

const { speed = 100, scrollable = true } = defineProps<NoticeBarProps>();

const _scrollable = ref(scrollable);
const noticebarContentRef = useTemplateRef("noticebarContent");
const noticebarScrollRef = useTemplateRef("noticebarScroll");

const _duration = ref(0);
const _scrollRefWidth = ref(0);

onMounted(() => {
  getWrapWidth();
});

async function getWrapWidth() {
  await nextTick();
  const scrollWidth = noticebarScrollRef.value?.offsetWidth || 0;
  const width = noticebarContentRef.value?.offsetWidth || 0;
  if (!scrollable) {
    if (scrollWidth <= width) {
      _scrollable.value = true;
      _scrollRefWidth.value = scrollWidth;
    } else {
      return;
    }
  }
  _scrollRefWidth.value = scrollWidth;
  const totalWidth = (width + scrollWidth) / speed;
  _duration.value = Math.ceil(totalWidth);
}
</script>

<style scoped lang="scss"></style>
