import { defineComponent as d, computed as o, openBlock as l, createElementBlock as a, normalizeStyle as m, createElementVNode as s, normalizeProps as p, guardReactiveProps as y, Fragment as f, renderList as k } from "vue";
import { getMainStyle as C } from "../utils.js";
const v = ["onClick"], g = ["src"], w = /* @__PURE__ */ d({
  name: "McCarousel",
  __name: "index",
  props: {
    list: { default: () => [] },
    onEventClick: { type: Function },
    styles: { default: () => ({}) },
    children: {},
    attrs: { default: () => ({}) }
  },
  setup(t) {
    const i = o(() => {
      const { autoplay: e = !0, loop: r } = t.attrs;
      return {
        pagination: !0,
        autoplay: e ? {
          delay: 2500
        } : !1,
        loop: r
      };
    }), c = o(() => ({
      ...C(t.styles)
    })), u = (e) => {
      t.onEventClick && t.onEventClick({ item: e, type: "carousel" });
    };
    return (e, r) => (l(), a("div", {
      class: "McContainer",
      style: m(c.value)
    }, [
      s("swiper-container", p(y(i.value)), [
        (l(!0), a(f, null, k(e.list, (n) => (l(), a("swiper-slide", {
          key: n.id,
          onClick: (h) => u(n)
        }, [
          s("img", {
            src: n.imagePath
          }, null, 8, g)
        ], 8, v))), 128))
      ], 16)
    ], 4));
  }
});
export {
  w as default
};
