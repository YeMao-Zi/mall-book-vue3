import { defineComponent as p, computed as a, openBlock as o, createElementBlock as n, normalizeStyle as m, createElementVNode as i, normalizeProps as d, guardReactiveProps as y, Fragment as f, renderList as k } from "vue";
import { getMainStyle as v } from "../utils.js";
const C = ["onClick"], g = ["src"], M = /* @__PURE__ */ p({
  name: "McCarousel",
  __name: "index",
  props: {
    list: {
      default: () => []
    },
    onEventClick: {
      type: Function
    },
    styles: {
      default: () => ({})
    },
    children: {},
    attrs: {
      default: () => ({})
    }
  },
  setup(t) {
    const s = a(() => {
      const {
        autoplay: e = !0,
        loop: r
      } = t.attrs;
      return {
        pagination: !0,
        autoplay: e ? {
          delay: 2500
        } : !1,
        loop: r
      };
    }), c = a(() => ({
      ...v(t.styles)
    })), u = (e) => {
      t.onEventClick && t.onEventClick({
        item: e,
        type: "carousel"
      });
    };
    return (e, r) => (o(), n("div", {
      class: "McContainer",
      style: m(c.value)
    }, [i("swiper-container", d(y(s.value)), [(o(!0), n(f, null, k(e.list, (l) => (o(), n("swiper-slide", {
      key: l.id,
      onClick: (E) => u(l)
    }, [i("img", {
      src: l.imagePath
    }, null, 8, g)], 8, C))), 128))], 16)], 4));
  }
});
export {
  M as default
};
