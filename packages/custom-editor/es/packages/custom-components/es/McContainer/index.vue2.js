import { defineComponent as a, computed as l, openBlock as s, createElementBlock as c, normalizeStyle as d, renderSlot as m } from "vue";
import { getMainStyle as u } from "../utils.js";
const y = /* @__PURE__ */ a({
  name: "McContainer",
  __name: "index",
  props: {
    styles: {
      default: () => ({})
    },
    children: {},
    attrs: {}
  },
  setup(o) {
    const r = l(() => {
      const e = u(o.styles), {
        backgroundImage: t
      } = o.styles, n = t ? {
        "background-image": `url(${t})`,
        "background-repeat": "no-repeat"
      } : {};
      return {
        ...e,
        ...n
      };
    });
    return (e, t) => (s(), c("div", {
      class: "McContainer",
      style: d(r.value)
    }, [m(e.$slots, "default")], 4));
  }
});
export {
  y as default
};
