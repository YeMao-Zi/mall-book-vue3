import { defineComponent as c, resolveComponent as i, openBlock as o, createElementBlock as l, Fragment as p, renderList as s, createBlock as t, resolveDynamicComponent as m, mergeProps as a, withCtx as d, createCommentVNode as u } from "vue";
const _ = /* @__PURE__ */ c({
  name: "Preview",
  __name: "index",
  props: {
    widgets: {},
    onEventClick: { type: Function }
  },
  setup(v) {
    return (n, C) => {
      const r = i("Preview");
      return o(!0), l(p, null, s(n.widgets, (e) => (o(), t(m(e.component), a({ ref_for: !0 }, e, { onEventClick: n.onEventClick }), {
        default: d(() => [
          e.children ? (o(), t(r, {
            key: 0,
            widgets: e.children,
            onEventClick: n.onEventClick
          }, null, 8, ["widgets", "onEventClick"])) : u("", !0)
        ]),
        _: 2
      }, 1040, ["onEventClick"]))), 256);
    };
  }
});
export {
  _ as default
};
