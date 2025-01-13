/* empty css                                                                                                                                        */
/* empty css                                                                                                                                              */
/* empty css                                                                                                                                                     */
/* empty css                                                                                                                                                                */
/* empty css                                                                                                                                            */
/* empty css                                                                                                                                                  */
/* empty css                                                                                                                                                                */
/* empty css                                                                                                                                                */
/* empty css                                                                                                                                              */
/* empty css                                                                                                                                                 */
/* empty css                                                                                                                                                  */
/* empty css                                                                                                                                               */
/* empty css                                                                                                                                                     */
import { defineComponent as p, mergeModels as n, useModel as a, resolveComponent as d, openBlock as u, createBlock as s, withCtx as c, createVNode as _ } from "vue";
import f from "../../../node_modules/.pnpm/@arco-design_web-vue@2.56.3_vue@3.5.13_typescript@5.7.3_/node_modules/@arco-design/web-vue/es/color-picker/index.js";
const j = /* @__PURE__ */ p({
  __name: "index",
  props: /* @__PURE__ */ n({
    label: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const e = a(t, "modelValue");
    return (l, o) => {
      const m = f, r = d("config-item");
      return u(), s(r, {
        label: l.label
      }, {
        default: c(() => [_(m, {
          modelValue: e.value,
          "onUpdate:modelValue": o[0] || (o[0] = (i) => e.value = i),
          size: "small"
        }, null, 8, ["modelValue"])]),
        _: 1
      }, 8, ["label"]);
    };
  }
});
export {
  j as default
};
