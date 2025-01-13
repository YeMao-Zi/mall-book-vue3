/* empty css                                                                                                                                        */
/* empty css                                                                                                                                              */
/* empty css                                                                                                                                                     */
/* empty css                                                                                                                                                */
/* empty css                                                                                                                                                */
/* empty css                                                                                                                                               */
import { defineComponent as n, mergeModels as i, useModel as p, resolveComponent as d, openBlock as s, createBlock as u, withCtx as f, createVNode as c, mergeProps as _ } from "vue";
import V from "../../../node_modules/.pnpm/@arco-design_web-vue@2.56.3_vue@3.5.13_typescript@5.7.3_/node_modules/@arco-design/web-vue/es/slider/index.js";
const B = /* @__PURE__ */ n({
  __name: "index",
  props: /* @__PURE__ */ i({
    label: {},
    attr: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const e = p(t, "modelValue");
    return (o, l) => {
      const m = V, r = d("ConfigItem");
      return s(), u(r, {
        label: o.label
      }, {
        default: f(() => [c(m, _(o.attr, {
          modelValue: e.value,
          "onUpdate:modelValue": l[0] || (l[0] = (a) => e.value = a),
          "show-input": "",
          size: "small"
        }), null, 16, ["modelValue"])]),
        _: 1
      }, 8, ["label"]);
    };
  }
});
export {
  B as default
};
