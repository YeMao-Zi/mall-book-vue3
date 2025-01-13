import { defineComponent as i, resolveComponent as l, openBlock as t, createElementBlock as c, Fragment as m, renderList as s, createBlock as o, resolveDynamicComponent as C, mergeProps as d, withCtx as p, createCommentVNode as v } from "vue";
const E = /* @__PURE__ */ i({
  name: "Preview",
  __name: "index",
  props: {
    widgets: {},
    onEventClick: {
      type: Function
    }
  },
  setup(k) {
    return (n, u) => {
      const r = l("Preview");
      return t(!0), c(m, null, s(n.widgets, (e) => (t(), o(C(e.component), d({
        ref_for: !0
      }, e, {
        onEventClick: n.onEventClick
      }), {
        default: p(() => [e.children ? (t(), o(r, {
          key: 0,
          widgets: e.children,
          onEventClick: n.onEventClick
        }, null, 8, ["widgets", "onEventClick"])) : v("", !0)]),
        _: 2
      }, 1040, ["onEventClick"]))), 256);
    };
  }
});
export {
  E as default
};
