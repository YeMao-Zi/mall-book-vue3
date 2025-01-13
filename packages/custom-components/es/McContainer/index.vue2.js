import { defineComponent as o, computed as l, openBlock as c, createElementBlock as s, normalizeStyle as m, renderSlot as u } from "vue";
import { getMainStyle as d } from "../utils.js";
const y = /* @__PURE__ */ o({
  name: "McContainer",
  __name: "index",
  props: {
    styles: { default: () => ({}) },
    children: {},
    attrs: {}
  },
  setup(n) {
    const r = l(() => {
      const e = d(n.styles), { backgroundImage: t } = n.styles, a = t ? {
        "background-image": `url(${t})`,
        "background-repeat": "no-repeat"
      } : {};
      return {
        ...e,
        ...a
      };
    });
    return (e, t) => (c(), s("div", {
      class: "McContainer",
      style: m(r.value)
    }, [
      u(e.$slots, "default")
    ], 4));
  }
});
export {
  y as default
};
