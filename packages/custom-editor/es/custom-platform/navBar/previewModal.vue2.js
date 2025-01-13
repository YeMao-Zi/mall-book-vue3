/* empty css                                                                                                                                     */
/* empty css                                                                                                                                            */
import { defineComponent as C, inject as w, useModel as k, onMounted as g, openBlock as m, createBlock as _, Teleport as B, createElementBlock as V, createElementVNode as o, createVNode as l, unref as i, withCtx as p, createTextVNode as d, createCommentVNode as x } from "vue";
import "../../packages/custom-components/es/McBlock/index.js";
import "../../packages/custom-components/es/McCarousel/index.js";
import "../../packages/custom-components/es/McContainer/index.js";
import "../../packages/custom-components/es/McCube/index.js";
import "../../packages/custom-components/es/McTab/index.js";
import "../../packages/custom-components/es/McImage/index.js";
import "../../packages/custom-components/es/McNotice/index.js";
import "../../packages/custom-components/es/McTitle/index.js";
import "../../packages/custom-components/es/Preview/index.js";
import { customComponent as y } from "../../packages/custom-components/es/customComponent/index.js";
import { widgets as a } from "../control/config.js";
import { page as u } from "../pageConfig/config.js";
import { PageInject as E } from "../../types/platform.js";
import b from "../../node_modules/.pnpm/@arco-design_web-vue@2.56.3_vue@3.5.13_typescript@5.7.3_/node_modules/@arco-design/web-vue/es/button/index.js";
const M = {
  key: 0,
  class: "preview-modal"
}, N = {
  class: "preview-modal-wrap"
}, T = {
  class: "viewBox"
}, j = {
  class: "phoneContent"
}, $ = {
  class: "p-1 flex justify-end gap-1 bg-white"
}, X = /* @__PURE__ */ C({
  __name: "previewModal",
  props: {
    modelValue: {
      type: Boolean
    },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(v) {
    const t = w(E), n = k(v, "modelValue"), f = () => {
      t == null || t.pageConfirm({
        page: u,
        widgets: a.value
      });
    };
    return g(() => {
    }), (P, e) => {
      var r;
      const s = b;
      return m(), _(B, {
        to: "body"
      }, [n.value ? (m(), V("div", M, [o("div", {
        class: "preview-modal-mask",
        onClick: e[0] || (e[0] = (c) => n.value = !1)
      }), o("div", N, [o("div", T, [e[2] || (e[2] = o("div", {
        class: "safeTop"
      }, null, -1)), o("div", j, [l(i(y), {
        page: i(u),
        widgets: i(a),
        onEventClick: (r = i(t)) == null ? void 0 : r.onEventClick
      }, null, 8, ["page", "widgets", "onEventClick"])]), e[3] || (e[3] = o("div", {
        class: "safeBottom"
      }, null, -1))]), o("div", $, [l(s, {
        onClick: e[1] || (e[1] = (c) => n.value = !1)
      }, {
        default: p(() => e[4] || (e[4] = [d("取消")])),
        _: 1
      }), l(s, {
        type: "primary",
        onClick: f
      }, {
        default: p(() => e[5] || (e[5] = [d("确定")])),
        _: 1
      })])])])) : x("", !0)]);
    };
  }
});
export {
  X as default
};
