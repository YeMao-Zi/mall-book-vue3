/* empty css                                                                                                                                        */
/* empty css                                                                                                                                                */
/* empty css                                                                                                                                                */
import { defineComponent as i, openBlock as t, createElementBlock as r, createElementVNode as o, toDisplayString as l, createBlock as c, withCtx as p, createVNode as s, unref as a, createCommentVNode as m, renderSlot as d } from "vue";
import { Icon as _ } from "../../../node_modules/.pnpm/@iconify_vue@4.1.2_vue@3.5.12_typescript@5.7.3_/node_modules/@iconify/vue/dist/iconify.js";
import f from "../../../node_modules/.pnpm/@arco-design_web-vue@2.56.3_vue@3.5.13_typescript@5.7.3_/node_modules/@arco-design/web-vue/es/tooltip/index.js";
const u = {
  class: "flex p-2 bg-white"
}, h = {
  class: "text-base"
}, b = {
  class: "flex-1 ml-5"
}, w = /* @__PURE__ */ i({
  __name: "index",
  props: {
    label: {},
    tip: {}
  },
  setup(k) {
    return (e, x) => {
      const n = f;
      return t(), r("div", u, [o("div", h, l(e.label), 1), e.tip ? (t(), c(n, {
        key: 0,
        content: e.tip
      }, {
        default: p(() => [s(a(_), {
          icon: "prime:exclamation-circle"
        })]),
        _: 1
      }, 8, ["content"])) : m("", !0), o("div", b, [d(e.$slots, "default")])]);
    };
  }
});
export {
  w as default
};
