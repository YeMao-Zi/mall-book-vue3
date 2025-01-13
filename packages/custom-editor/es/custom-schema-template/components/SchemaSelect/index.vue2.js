/* empty css                                                                                                                                        */
/* empty css                                                                                                                                              */
/* empty css                                                                                                                                                                */
/* empty css                                                                                                                                            */
/* empty css                                                                                                                                                  */
/* empty css                                                                                                                                                                */
/* empty css                                                                                                                                                */
/* empty css                                                                                                                                              */
/* empty css                                                                                                                                                 */
/* empty css                                                                                                                                                  */
/* empty css                                                                                                                                               */
import { defineComponent as p, mergeModels as i, useModel as n, resolveComponent as d, openBlock as s, createBlock as u, withCtx as c, createVNode as f, mergeProps as V } from "vue";
import _ from "../../../node_modules/.pnpm/@arco-design_web-vue@2.56.3_vue@3.5.13_typescript@5.7.3_/node_modules/@arco-design/web-vue/es/select/index.js";
const S = /* @__PURE__ */ p({
  __name: "index",
  props: /* @__PURE__ */ i({
    label: {},
    attr: {},
    data: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(l) {
    const o = n(l, "modelValue");
    return (e, t) => {
      const m = _, r = d("ConfigItem");
      return s(), u(r, {
        label: e.label
      }, {
        default: c(() => [f(m, V(e.attr, {
          modelValue: o.value,
          "onUpdate:modelValue": t[0] || (t[0] = (a) => o.value = a),
          options: e.data,
          size: "small"
        }), null, 16, ["modelValue", "options"])]),
        _: 1
      }, 8, ["label"]);
    };
  }
});
export {
  S as default
};
