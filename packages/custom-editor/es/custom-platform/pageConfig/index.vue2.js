/* empty css                                                                                                                                     */
/* empty css                                                                                                                                             */
/* empty css                                                                                                                                             */
import { defineComponent as a, computed as p, openBlock as m, createElementBlock as u, normalizeStyle as d, createVNode as o, withCtx as f, createElementVNode as g, unref as _, renderSlot as y } from "vue";
import { Icon as S } from "../../node_modules/.pnpm/@iconify_vue@4.1.2_vue@3.5.12_typescript@5.7.3_/node_modules/@iconify/vue/dist/iconify.js";
import h from "../../node_modules/.pnpm/@arco-design_web-vue@2.56.3_vue@3.5.13_typescript@5.7.3_/node_modules/@arco-design/web-vue/es/tooltip/index.js";
const B = /* @__PURE__ */ a({
  __name: "index",
  props: {
    styles: {},
    children: {},
    attrs: {}
  },
  emits: ["pageSetting"],
  setup(n, {
    emit: i
  }) {
    const t = n, r = i, s = p(() => {
      if (!(t != null && t.styles)) return {};
      const {
        backgroundColor: e
      } = t.styles;
      return {
        backgroundColor: e
      };
    }), l = () => {
      r("pageSetting");
    };
    return (e, k) => {
      const c = h;
      return m(), u("div", {
        class: "w-full h-full relative",
        style: d(s.value)
      }, [o(c, {
        position: "bottom",
        content: "页面设置"
      }, {
        default: f(() => [g("div", {
          class: "pageSetting",
          onClick: l
        }, [o(_(S), {
          style: {
            "font-size": "24px"
          },
          icon: "ep:setting"
        })])]),
        _: 1
      }), y(e.$slots, "default", {}, void 0, !0)], 4);
    };
  }
});
export {
  B as default
};
