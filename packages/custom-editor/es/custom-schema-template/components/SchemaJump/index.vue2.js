/* empty css                                                                                                                                        */
/* empty css                                                                                                                                              */
import { defineComponent as d, mergeModels as p, useModel as r, resolveComponent as u, openBlock as i, createBlock as s, withCtx as c, createVNode as f } from "vue";
import _ from "../../../node_modules/.pnpm/@arco-design_web-vue@2.56.3_vue@3.5.13_typescript@5.7.3_/node_modules/@arco-design/web-vue/es/input/index.js";
const v = /* @__PURE__ */ d({
  __name: "index",
  props: /* @__PURE__ */ p({
    label: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(l) {
    const e = r(l, "modelValue");
    return (t, o) => {
      const n = _, m = u("ConfigItem");
      return i(), s(m, {
        label: t.label
      }, {
        default: c(() => [f(n, {
          modelValue: e.value,
          "onUpdate:modelValue": o[0] || (o[0] = (a) => e.value = a),
          placeholder: "请输入跳转链接或路径"
        }, null, 8, ["modelValue"])]),
        _: 1
      }, 8, ["label"]);
    };
  }
});
export {
  v as default
};
