<template>
  <div class="mb-5">
    <div class="p-3 bg-slate-200 text-slate-600">
      <span>{{ label }}</span>
    </div>
    <div>
      <config-item label="行数">
        <a-input-number
          v-model="model!.row"
          mode="button"
          :min="1"
          :max="20"
        ></a-input-number>
      </config-item>
      <config-item label="列数">
        <a-input-number
          v-model="model!.column"
          mode="button"
          :min="1"
          :max="20"
        ></a-input-number>
      </config-item>
    </div>
    <div class="cube">
      <!-- 布局容器 -->
      <div
        class="cube_bar"
        v-for="(row, rowIndex) in groupNumbers"
        :key="rowIndex"
      >
        <div
          class="cube_box"
          :class="{ 'cube_box_move': editKeys.includes(num) }"
          v-for="(num, columnIndex) in row"
          :key="num"
          :data-k="num"
          :data-c="columnIndex"
          :data-r="rowIndex"
          @click="clickBox"
          @mouseover.self="handleMove"
        >
          <icon-plus class="ico" />
        </div>
      </div>
      <!-- 编辑容器块 -->
      <div
        v-for="(item, index) in model?.list"
        :style="getStyle(item)"
        class="edited_bar"
        :class="{ 'edited_bar_active': curItem?.startKey === item.startKey }"
        :key="index"
        @click="handleItemClick(item)"
      >
        <div class="ico_close" @click="handleDeleteItem(index)">
          <icon-close-circle-fill />
        </div>
        <div>{{ item.imagePath ? "编辑" : "空" }}</div>
        <template v-if="curItem?.startKey === item.startKey">
          <Teleport to="#activeEdit">
            <SchemaUpload label="魔方图片" v-model="item.imagePath" />
            <SchemaJump label="跳转链接" v-model="item.jumpPath" />
            <SchemaColor label="边框颜色" v-model="item.styles.borderColor" />
            <SchemaNumber label="边框宽度" v-model="item.styles.borderWidth" />
            <SchemaNumber label="边框圆角" v-model="item.styles.borderRadius" />
          </Teleport>
        </template>
      </div>
    </div>

    <div id="activeEdit"></div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
defineProps<{ label: string }>();

interface ListItem {
  top: number;
  left: number;
  width: number;
  height: number;
  startKey: number;
  endKey: number;
  imagePath?: string;
  jumpPath?: string;
  styles: Record<string, any>;
}

interface Model {
  row: number;
  column: number;
  list: Array<ListItem>;
}

const defaultItemStyles = {
  borderWidth: 0,
  borderColor: "rgba(255, 255, 255, 0.5)",
  borderRadius: 0,
};

const model = defineModel<Model>();

watch([() => model.value?.row, () => model.value?.column], () => {
  model.value!.list = [];
  edit = undefined;
  editKeys.value = [];
  curItem.value = undefined;
});

/**START 样式编辑*/
// 编辑开始
let edit: number | undefined = undefined;
// 编辑key集合
const editKeys = ref<number[]>([]);
/**END */

// 选中的块
const curItem = ref<ListItem>();

const getStyle = (item: ListItem) => {
  const column = model.value!.column;
  const row = model.value!.row;
  const getPosition = (value: number, base: number) => {
    const index = value - 1;
    if (index === 0) return 0;
    return (index / base) * 100 + "%";
  };
  return {
    top: getPosition(item.top, row),
    left: getPosition(item.left, column),
    width: (item.width / column) * 100 + "%",
    height: (item.height / row) * 100 + "%",
  };
};

const groupNumbers = computed(() => {
  const column = model.value!.column;
  const row = model.value!.row;
  // console.log(model.value, "model");
  const num = column * row;
  const result = [];
  for (let i = 1; i <= num; i += column) {
    const group = [];
    for (let j = 0; j < column && i + j <= num; j++) {
      group.push(i + j);
    }
    result.push(group);
  }
  // console.log(result,'result')
  return result;
});

// 获取指定数据所在行列位置
const findPosition = (num: number) => {
  const arr = groupNumbers.value;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === num) {
        // 返回行索引+1（因为要从1开始计数）和列索引+1
        return {
          r: i + 1,
          c: j + 1,
        };
      }
    }
  }
};

// 获取范围内的所有数据
const findRange = (key1: number, key2: number, arr: number[][]) => {
  const [rows, _cols] = [arr.length, arr[0].length];
  let targetRow: number | undefined,
    targetCol: number | undefined,
    referenceRow: number | undefined,
    referenceCol: number | undefined;

  // 找到目标值和参考值的行和列
  for (let i = 0; i < rows; i++) {
    const targetIndex = arr[i].indexOf(key1);
    if (targetIndex !== -1) {
      targetRow = i;
      targetCol = targetIndex;
    }
    const referenceIndex = arr[i].indexOf(key2);
    if (referenceIndex !== -1) {
      referenceRow = i;
      referenceCol = referenceIndex;
    }
    // 如果同时找到了目标值和参考值，则退出循环
    if (targetRow !== undefined && referenceRow !== undefined) {
      break;
    }
  }

  if (
    targetRow === undefined ||
    referenceRow === undefined ||
    targetCol === undefined ||
    referenceCol === undefined
  ) {
    return []; // 目标值或参考值不在数组中
  }

  // 确定最小行、最小列、最大行、最大列
  let minRow = Math.min(targetRow, referenceRow);
  let minCol = Math.min(targetCol, referenceCol);
  let maxRow = Math.max(targetRow, referenceRow);
  let maxCol = Math.max(targetCol, referenceCol);

  // 收集范围内的数字
  const result = [];
  for (let i = minRow; i <= maxRow; i++) {
    for (let j = minCol; j <= maxCol; j++) {
      result.push(arr[i][j]);
    }
  }

  return result;
};

const clickBox = (e: any) => {
  const key = Number(e.currentTarget.dataset.k);
  if (!edit) {
    edit = key;
    editKeys.value.push(key);
  } else {
    if (!editKeys.value.includes(key)) return;
    if (key === edit) {
      editKeys.value = [key];
    }
    const editStart = editKeys.value[0];
    const editEnd = editKeys.value.slice(-1)[0];

    const editStartPosition = {
      c: findPosition(editStart)!.c,
      r: findPosition(editStart)!.r,
    };

    const editEndPosition = {
      c: findPosition(editEnd)!.c,
      r: findPosition(editEnd)!.r,
    };

    const temp = {
      top: Math.min(editStartPosition.r, editEndPosition.r),
      left: Math.min(editStartPosition.c, editEndPosition.c),
      width: Math.abs(editStartPosition.c - editEndPosition.c) + 1,
      height: Math.abs(editStartPosition.r - editEndPosition.r) + 1,
      startKey: editStart,
      endKey: editEnd,
      styles: { ...defaultItemStyles },
    };
    model.value?.list.push(temp);
    curItem.value = temp;
    edit = undefined;
  }
};

const handleMove = (e: any) => {
  if (!edit) return;
  const moveStartKey = edit;
  const moveEndKey = Number(e.currentTarget.dataset.k);
  const rangeKeys = findRange(moveStartKey, moveEndKey, groupNumbers.value);

  /**START 防碰撞*/
  const disabledKeys = model
    .value!.list.map((v) => findRange(v.startKey, v.endKey, groupNumbers.value))
    .flat();
  if (rangeKeys.filter((v) => disabledKeys.includes(v)).length) return;
  /**END */

  editKeys.value = rangeKeys;
};

const handleItemClick = (item: ListItem) => {
  if (edit) return;
  curItem.value = item;
};

const handleDeleteItem = (index: number) => {
  model.value?.list.splice(index, 1);
  curItem.value = undefined;
};
</script>

<style lang="scss" scoped>
.cube {
  position: relative;
  border-bottom: 1px solid var(--border-base);
  border-right: 1px solid var(--border-base);
}

.cube_bar {
  display: flex;
  width: 100%;
}

.cube_box {
  flex: 1;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: var(--h5-color-bg);
  border-top: 1px solid var(--border-base);
  border-left: 1px solid var(--border-base);
  cursor: pointer;
  .ico {
    color: var(--color-grey);
  }
}

.cube_box_move {
  background: var(--color-theme-light);
  .ico {
    display: none;
  }
}

.edited_bar {
  position: absolute;
  background-color: #fff;
  box-sizing: border-box;
  border-top: 1px solid var(--border-base);
  border-left: 1px solid var(--border-base);
  z-index: 2;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-grey);

  .ico_close {
    display: none;
    position: absolute;
    top: -8px;
    right: -8px;
    width: 16px;
    height: 16px;
    z-index: 4;
    background-color: #fff;
    border-radius: 50%;
  }
}

.edited_bar_active {
  box-sizing: border-box;
  background-color: var(--color-theme-light);
  border: 1px solid var(--color-theme);
  z-index: 5;
  &:hover {
    .ico_close {
      display: block;
    }
  }
}
</style>
