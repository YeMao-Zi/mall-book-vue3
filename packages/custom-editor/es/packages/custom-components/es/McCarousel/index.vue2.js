import { defineComponent as p, computed as n, openBlock as o, createElementBlock as r, normalizeStyle as m, createElementVNode as i, normalizeProps as d, guardReactiveProps as y, Fragment as f, renderList as k } from "vue";
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
    const s = n(() => {
      const {
        autoplay: e = !0,
        loop: a
      } = t.attrs;
      return {
        pagination: !0,
        autoplay: e ? {
          delay: 2500
        } : !1,
        loop: a
      };
    }), c = n(() => ({
      ...v(t.styles)
    })), u = (e) => {
      t.onEventClick && t.onEventClick({
        item: e,
        type: "carousel"
      });
    };
    return (e, a) => (o(), r("div", {
      class: "McCarousel",
      style: m(c.value)
    }, [i("swiper-container", d(y(s.value)), [(o(!0), r(f, null, k(e.list, (l) => (o(), r("swiper-slide", {
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
