import { defineComponent as t, resolveComponent as o, openBlock as l, createElementBlock as s, normalizeStyle as i, createVNode as c } from "vue";
const a = /* @__PURE__ */ t({
  name: "customComponent",
  __name: "index",
  props: {
    widgets: {},
    page: {},
    onEventClick: {
      type: Function
    }
  },
  setup(p) {
    return (e, r) => {
      const n = o("Preview");
      return l(), s("div", {
        class: "mc-page",
        style: i(e.page.styles)
      }, [c(n, {
        widgets: e.widgets,
        onEventClick: e.onEventClick
      }, null, 8, ["widgets", "onEventClick"])], 4);
    };
  }
});
export {
  a as default
};
