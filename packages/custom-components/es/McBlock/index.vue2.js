import { defineComponent as r, computed as a, openBlock as l, createElementBlock as s, normalizeStyle as u } from "vue";
import { getMainStyle as m } from "../utils.js";
const p = /* @__PURE__ */ r({
  name: "McBlock",
  __name: "index",
  props: {
    styles: { default: () => ({}) },
    children: {},
    attrs: {}
  },
  setup(t) {
    const o = a(() => {
      const n = m(t.styles), { backgroundImage: e } = t.styles, c = e ? {
        "background-image": `url(${e})`,
        "background-repeat": "no-repeat",
        "background-size": "cover"
      } : {};
      return {
        ...n,
        ...c
      };
    });
    return (n, e) => (l(), s("div", {
      class: "McBlock",
      style: u(o.value)
    }, null, 4));
  }
});
export {
  p as default
};
