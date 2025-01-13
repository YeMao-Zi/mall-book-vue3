import { defineComponent as l, computed as m, openBlock as o, createElementBlock as i, normalizeStyle as s, unref as u } from "vue";
import { getMainStyle as c } from "../utils.js";
import d from "./baseImg.js";
const p = ["src"], k = /* @__PURE__ */ l({
  name: "McImage",
  __name: "index",
  props: {
    imageValue: {},
    styles: {
      default: () => ({})
    },
    children: {},
    attrs: {}
  },
  setup(t) {
    const n = d, r = m(() => ({
      ...c(t.styles),
      width: "100%"
    }));
    return (a, f) => {
      var e;
      return o(), i("img", {
        style: s(r.value),
        src: ((e = a.imageValue) == null ? void 0 : e.imagePath) || u(n)
      }, null, 12, p);
    };
  }
});
export {
  k as default
};
