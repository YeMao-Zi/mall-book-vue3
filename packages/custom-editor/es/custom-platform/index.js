import e from "./index.vue.js";
/* empty css                                                                                                                             */
/* empty css                                          */
import m from "../packages/custom-components/es/index.js";
import "vue";
import { initCustomSchemaTemplate as t } from "../custom-schema-template/config.js";
import r from "../node_modules/.pnpm/@arco-design_web-vue@2.56.3_vue@3.5.13_typescript@5.7.3_/node_modules/@arco-design/web-vue/es/arco-vue.js";
const n = (o) => {
  t(o), m(o), r.install(o, {
    // 用于改变使用组件时的前缀名称
    componentPrefix: "arco"
  });
};
export {
  n as CustomEditor,
  e as default
};
