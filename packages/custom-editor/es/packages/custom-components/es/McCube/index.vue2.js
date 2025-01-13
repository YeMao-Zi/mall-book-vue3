import { defineComponent as h, useTemplateRef as y, ref as v, computed as f, onUpdated as g, onMounted as x, openBlock as u, createElementBlock as s, normalizeStyle as o, Fragment as k, renderList as w, createElementVNode as C } from "vue";
import { getMainStyle as m } from "../utils.js";
const M = ["src"], N = {
  key: 1,
  class: "mc-empty"
}, P = /* @__PURE__ */ h({
  name: "McCube",
  __name: "index",
  props: {
    cube: {},
    styles: {
      default: () => ({})
    },
    children: {},
    attrs: {}
  },
  setup(t) {
    const r = y("mcCube"), c = v(375), d = f(() => {
      const e = t.cube.column, l = t.cube.row;
      return {
        ...m(t.styles),
        width: c.value + "px",
        height: c.value / e * l + "px"
      };
    }), p = (e) => {
      const l = t.cube.column;
      t.cube.column;
      const n = c.value / l * e.width, a = c.value / l * e.height;
      return {
        width: n + "px",
        height: a + "px",
        top: (e.top - 1) / t.cube.row * 100 + "%",
        left: (e.left - 1) / t.cube.column * 100 + "%",
        padding: t.styles.gap / 2 + "px"
      };
    }, b = (e) => ({
      ...m(e.styles)
    });
    function i() {
      var e;
      if (!((e = r.value) != null && e.parentNode)) return;
      const l = r.value.parentNode;
      c.value = l.clientWidth;
    }
    return g(() => {
      i();
    }), x(() => {
      i();
    }), (e, l) => (u(), s("div", {
      class: "McCube",
      ref: "mcCube",
      style: o(d.value)
    }, [(u(!0), s(k, null, w(e.cube.list, (n, a) => (u(), s("div", {
      class: "mc-cube-box",
      style: o(p(n)),
      key: a
    }, [C("div", {
      class: "mc-cube-item",
      style: o(b(n))
    }, [n.imagePath ? (u(), s("img", {
      key: 0,
      class: "mc-cube-item-img",
      src: n.imagePath
    }, null, 8, M)) : (u(), s("div", N))], 4)], 4))), 128))], 4));
  }
});
export {
  P as default
};
