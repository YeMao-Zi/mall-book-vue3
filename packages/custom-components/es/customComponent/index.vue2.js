import { defineComponent as o, resolveComponent as t, openBlock as s, createElementBlock as i, normalizeStyle as c, createVNode as l } from "vue";
const m = /* @__PURE__ */ o({
  name: "customComponent",
  __name: "index",
  props: {
    widgets: {},
    page: {},
    onEventClick: { type: Function }
  },
  setup(p) {
    return (e, r) => {
      const n = t("Preview");
      return s(), i("div", {
        class: "mc-page",
        style: c(e.page.styles)
      }, [
        l(n, {
          widgets: e.widgets,
          onEventClick: e.onEventClick
        }, null, 8, ["widgets", "onEventClick"])
      ], 4);
    };
  }
});
export {
  m as default
};
