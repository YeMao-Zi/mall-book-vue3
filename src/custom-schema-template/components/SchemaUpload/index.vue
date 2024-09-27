<template>
  <config-item :label="label">
    <div class="relative">
      <a-upload
        action="/"
        @change="onChange"
        @progress="onProgress"
        :show-file-list="false"
        :accept="accept"
      >
        <template #upload-button>
          <div
            :class="`arco-upload-list-item${
              fileOptions && fileOptions.status === 'error'
                ? ' arco-upload-list-item-error'
                : ''
            }`"
          >
            <div
              class="arco-upload-list-picture custom-upload-avatar"
              v-if="model"
            >
              <img :src="model" />
              <div
                class="arco-upload-list-picture-mask gap-1 flex justify-center items-center"
              >
                <IconEdit />
                <IconDelete @click.stop.self="handleDelete" />
              </div>
              <a-progress
                v-if="
                  fileOptions &&
                  fileOptions.status === 'uploading' &&
                  fileOptions.percent < 100
                "
                :percent="fileOptions.percent"
                type="circle"
                size="mini"
                :style="{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translateX(-50%) translateY(-50%)',
                }"
              />
            </div>
            <div class="arco-upload-picture-card" v-else>
              <div class="arco-upload-picture-card-text">
                <IconPlus />
              </div>
            </div>
          </div>
        </template>
      </a-upload>
    </div>
  </config-item>
</template>

<script setup lang="ts">
import ConfigItem from "@/components/ConfigItem.vue";
import { ref } from "vue";
import { UploadInstance } from "@arco-design/web-vue";

defineProps<{ label: string }>();

const fileOptions = ref();

const model = defineModel<string>();

// 限制格式
const accept = ref("image/jpeg,image/png,image/gif,image/jpg,image/bmp");

const getBase64 = (file: File): Promise<any> => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    let fileResult = "";
    reader.readAsDataURL(file);
    //开始转
    reader.onload = function () {
      //这里其实就是需要的base64格式了
      let Result = reader.result as string;
      //base64数据去头
      // let head = Result.indexOf("4") + 2;
      // fileResult = Result.substring(head, Result.length - head);
      fileResult = Result;
    };
    //转 失败
    reader.onerror = function (error) {
      reject(error);
    };
    //转 结束  咱就 resolve 出去
    reader.onloadend = function () {
      resolve(fileResult);
    };
  });
};

const onChange: UploadInstance["onChange"] = (_, currentFile) => {
  fileOptions.value = {
    ...currentFile,
  };
};

const onProgress: UploadInstance["onProgress"] = async (currentFile) => {
  fileOptions.value = currentFile;
  if (currentFile.file) {
    model.value = await getBase64(currentFile.file);
  }
};

const handleDelete = () => {
  model.value = undefined;
};
</script>

<style lang="scss" scoped>
.arco-upload-list-item {
  margin-top: 0;
}
</style>
