<template>
  <div ref="scrollRef" class="scroll" style="width: 0px">
    <div class="box">
      <div
        class="content"
        ref="contentRef"
        :style="{
          animationDuration: _duration + 's',
          paddingLeft: `${_scrollRefWidth}px`,
        }"
        :class="{ aniBox: _scrollable }"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, useTemplateRef } from "vue";
import { type ObjectExpand } from "../type";

type Props = ObjectExpand<{
  speed?: number;
  scrollable?: boolean;
}>;

const { speed = 100, scrollable = true } = defineProps<Props>();

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
  console.log(scrollWidth, "scrollWidth", width);
  let totalWidth = (width + scrollWidth) / speed;
  _duration.value = Math.ceil(totalWidth);
}
</script>

<style scoped>
.scroll {
  width: 100%;
  flex: 1;
  overflow: hidden;
}

.place {
  flex: 1;
  min-width: 0;
}

.content {
  white-space: nowrap;
}

.box {
  width: 100%;
  white-space: nowrap;
  display: flex;
}

.aniBox {
  animation-name: roll;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes roll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
