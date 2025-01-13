import { defineComponent as l, computed as o, openBlock as r, createElementBlock as s, normalizeStyle as i, unref as c } from "vue";
import { getMainStyle as u } from "../utils.js";
import p from "./baseImg.js";
const d = ["src"], h = /* @__PURE__ */ l({
  name: "McImage",
  __name: "index",
  props: {
    imageValue: {},
    styles: { default: () => ({}) },
    children: {},
    attrs: {}
  },
  setup(a) {
    const n = p, m = o(() => ({
      ...u(a.styles),
      width: "100%"
    }));
    return (e, f) => {
      var t;
      return r(), s("img", {
        style: i(m.value),
        src: ((t = e.imageValue) == null ? void 0 : t.imagePath) || c(n)
      }, null, 12, d);
    };
  }
});
export {
  h as default
};
