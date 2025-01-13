/* empty css                                                                                                                                        */
/* empty css                                                                                                                                                 */
import { defineComponent as r, mergeModels as d, useModel as u, resolveComponent as i, openBlock as p, createBlock as s, withCtx as c, createVNode as _ } from "vue";
import f from "../../../node_modules/.pnpm/@arco-design_web-vue@2.56.3_vue@3.5.13_typescript@5.7.3_/node_modules/@arco-design/web-vue/es/textarea/index.js";
const v = /* @__PURE__ */ r({
  __name: "index",
  props: /* @__PURE__ */ d({
    label: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(l) {
    const e = u(l, "modelValue");
    return (t, o) => {
      const a = f, m = i("config-item");
      return p(), s(m, {
        label: t.label
      }, {
        default: c(() => [_(a, {
          modelValue: e.value,
          "onUpdate:modelValue": o[0] || (o[0] = (n) => e.value = n)
        }, null, 8, ["modelValue"])]),
        _: 1
      }, 8, ["label"]);
    };
  }
});
export {
  v as default
};
