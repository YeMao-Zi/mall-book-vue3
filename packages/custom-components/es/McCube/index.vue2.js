import { defineComponent as b, useTemplateRef as f, ref as g, computed as v, onUpdated as p, onMounted as x, openBlock as u, createElementBlock as o, normalizeStyle as a, Fragment as w, renderList as C, createElementVNode as S } from "vue";
import { getMainStyle as m } from "../utils.js";
const k = ["src"], M = {
  key: 1,
  class: "mc-empty"
}, W = /* @__PURE__ */ b({
  name: "McCube",
  __name: "index",
  props: {
    cube: {},
    styles: { default: () => ({}) },
    children: {},
    attrs: {}
  },
  setup(t) {
    const i = f("mcCube"), l = g(375), d = v(() => {
      const e = t.cube.column, n = t.cube.row;
      return {
        ...m(t.styles),
        width: l.value + "px",
        height: l.value / e * n + "px"
      };
    }), h = (e) => {
      const n = t.cube.column;
      t.cube.column;
      const c = l.value / n * e.width, s = l.value / n * e.height;
      return {
        width: c + "px",
        height: s + "px",
        top: (e.top - 1) / t.cube.row * 100 + "%",
        left: (e.left - 1) / t.cube.column * 100 + "%",
        padding: t.styles.gap / 2 + "px"
      };
    }, y = (e) => ({
      ...m(e.styles)
    });
    function r() {
      var n;
      if (!((n = i.value) != null && n.parentNode)) return;
      const e = i.value.parentNode;
      l.value = e.clientWidth;
    }
    return p(() => {
      r();
    }), x(() => {
      r();
    }), (e, n) => (u(), o("div", {
      class: "McCube",
      ref: "mcCube",
      style: a(d.value)
    }, [
      (u(!0), o(w, null, C(e.cube.list, (c, s) => (u(), o("div", {
        class: "mc-cube-box",
        style: a(h(c)),
        key: s
      }, [
        S("div", {
          class: "mc-cube-item",
          style: a(y(c))
        }, [
          c.imagePath ? (u(), o("img", {
            key: 0,
            class: "mc-cube-item-img",
            src: c.imagePath
          }, null, 8, k)) : (u(), o("div", M))
        ], 4)
      ], 4))), 128))
    ], 4));
  }
});
export {
  W as default
};
