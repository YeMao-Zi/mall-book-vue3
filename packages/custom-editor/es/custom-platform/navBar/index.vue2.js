/* empty css                                                                                                                                     */
/* empty css                                                                                                                                            */
import { defineComponent as a, ref as m, openBlock as p, createElementBlock as i, Fragment as u, createElementVNode as s, createVNode as o, withCtx as d, createTextVNode as f } from "vue";
import c from "./previewModal.vue.js";
import _ from "../../node_modules/.pnpm/@arco-design_web-vue@2.56.3_vue@3.5.13_typescript@5.7.3_/node_modules/@arco-design/web-vue/es/button/index.js";
const v = {
  class: "w-full h-full flex flex-row-reverse gap-1 items-center px-2"
}, b = /* @__PURE__ */ a({
  __name: "index",
  setup(x) {
    const t = m(!1), l = () => {
      t.value = !0;
    };
    return (V, e) => {
      const r = _;
      return p(), i(u, null, [s("div", v, [o(r, {
        type: "primary",
        onClick: l
      }, {
        default: d(() => e[1] || (e[1] = [f("保存")])),
        _: 1
      })]), o(c, {
        modelValue: t.value,
        "onUpdate:modelValue": e[0] || (e[0] = (n) => t.value = n)
      }, null, 8, ["modelValue"])], 64);
    };
  }
});
export {
  b as default
};
