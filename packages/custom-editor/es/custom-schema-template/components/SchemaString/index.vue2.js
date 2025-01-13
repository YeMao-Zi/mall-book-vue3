/* empty css                                                                                                                                        */
/* empty css                                                                                                                                              */
import { defineComponent as d, mergeModels as u, useModel as p, resolveComponent as r, openBlock as i, createBlock as s, withCtx as c, createVNode as _ } from "vue";
import f from "../../../node_modules/.pnpm/@arco-design_web-vue@2.56.3_vue@3.5.13_typescript@5.7.3_/node_modules/@arco-design/web-vue/es/input/index.js";
const x = /* @__PURE__ */ d({
  __name: "index",
  props: /* @__PURE__ */ u({
    label: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(l) {
    const e = p(l, "modelValue");
    return (t, o) => {
      const n = f, m = r("config-item");
      return i(), s(m, {
        label: t.label
      }, {
        default: c(() => [_(n, {
          modelValue: e.value,
          "onUpdate:modelValue": o[0] || (o[0] = (a) => e.value = a)
        }, null, 8, ["modelValue"])]),
        _: 1
      }, 8, ["label"]);
    };
  }
});
export {
  x as default
};
