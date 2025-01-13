import { defineComponent as a, computed as l, openBlock as c, createElementBlock as s, normalizeStyle as u } from "vue";
import { getMainStyle as m } from "../utils.js";
const i = /* @__PURE__ */ a({
  name: "McBlock",
  __name: "index",
  props: {
    styles: {
      default: () => ({})
    },
    children: {},
    attrs: {}
  },
  setup(o) {
    const n = l(() => {
      const t = m(o.styles), {
        backgroundImage: e
      } = o.styles, r = e ? {
        "background-image": `url(${e})`,
        "background-repeat": "no-repeat",
        "background-size": "cover"
      } : {};
      return {
        ...t,
        ...r
      };
    });
    return (t, e) => (c(), s("div", {
      class: "McBlock",
      style: u(n.value)
    }, null, 4));
  }
});
export {
  i as default
};
