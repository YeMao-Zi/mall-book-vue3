import { defineComponent as l, openBlock as s, createElementBlock as n, createElementVNode as e, toDisplayString as o, renderSlot as a } from "vue";
const r = {
  class: "p-3 bg-slate-200 text-slate-600"
}, p = {
  class: "p-3"
}, _ = /* @__PURE__ */ l({
  __name: "index",
  props: {
    label: {}
  },
  setup(c) {
    return (t, d) => (s(), n("div", null, [e("div", r, [e("span", null, o(t.label), 1)]), e("div", p, [a(t.$slots, "default")])]));
  }
});
export {
  _ as default
};
