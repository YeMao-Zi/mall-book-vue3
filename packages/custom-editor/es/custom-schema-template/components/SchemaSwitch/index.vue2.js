/* empty css                                                                                                                                        */
/* empty css                                                                                                                                               */
import { defineComponent as i, mergeModels as p, useModel as d, resolveComponent as r, openBlock as u, createBlock as s, withCtx as c, createVNode as f } from "vue";
import _ from "../../../node_modules/.pnpm/@arco-design_web-vue@2.56.3_vue@3.5.13_typescript@5.7.3_/node_modules/@arco-design/web-vue/es/switch/index.js";
const w = /* @__PURE__ */ i({
  __name: "index",
  props: /* @__PURE__ */ p({
    label: {},
    tip: {}
  }, {
    modelValue: {
      type: Boolean
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const e = d(t, "modelValue");
    return (o, l) => {
      const m = _, n = r("config-item");
      return u(), s(n, {
        label: o.label,
        tip: o.tip
      }, {
        default: c(() => [f(m, {
          modelValue: e.value,
          "onUpdate:modelValue": l[0] || (l[0] = (a) => e.value = a)
        }, null, 8, ["modelValue"])]),
        _: 1
      }, 8, ["label", "tip"]);
    };
  }
});
export {
  w as default
};
