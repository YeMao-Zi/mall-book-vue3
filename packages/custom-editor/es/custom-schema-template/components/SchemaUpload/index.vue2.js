/* empty css                                                                                                                                        */
/* empty css                                                                                                                                               */
/* empty css                                                                                                                                                */
/* empty css                                                                                                                                                */
/* empty css                                                                                                                                                 */
/* empty css                                                                                                                                              */
/* empty css                                                                                                                                               */
import { defineComponent as w, mergeModels as I, ref as m, useModel as V, resolveComponent as x, openBlock as i, createBlock as u, withCtx as d, createElementVNode as a, createVNode as r, normalizeClass as P, createElementBlock as _, withModifiers as R, createCommentVNode as B } from "vue";
import D from "../../../node_modules/.pnpm/@arco-design_web-vue@2.56.3_vue@3.5.13_typescript@5.7.3_/node_modules/@arco-design/web-vue/es/icon/icon-edit/index.js";
import E from "../../../node_modules/.pnpm/@arco-design_web-vue@2.56.3_vue@3.5.13_typescript@5.7.3_/node_modules/@arco-design/web-vue/es/icon/icon-delete/index.js";
import M from "../../../node_modules/.pnpm/@arco-design_web-vue@2.56.3_vue@3.5.13_typescript@5.7.3_/node_modules/@arco-design/web-vue/es/progress/index.js";
import j from "../../../node_modules/.pnpm/@arco-design_web-vue@2.56.3_vue@3.5.13_typescript@5.7.3_/node_modules/@arco-design/web-vue/es/icon/icon-plus/index.js";
import N from "../../../node_modules/.pnpm/@arco-design_web-vue@2.56.3_vue@3.5.13_typescript@5.7.3_/node_modules/@arco-design/web-vue/es/upload/index.js";
const z = {
  class: "relative"
}, U = {
  key: 0,
  class: "arco-upload-list-picture custom-upload-avatar"
}, A = ["src"], L = {
  class: "arco-upload-list-picture-mask gap-1 flex justify-center items-center"
}, O = {
  key: 1,
  class: "arco-upload-picture-card"
}, X = {
  class: "arco-upload-picture-card-text"
}, ee = /* @__PURE__ */ w({
  __name: "index",
  props: /* @__PURE__ */ I({
    label: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(f) {
    const e = m(), l = V(f, "modelValue"), v = m("image/jpeg,image/png,image/gif,image/jpg,image/bmp"), g = (o) => new Promise((s, p) => {
      let t = new FileReader(), n = "";
      t.readAsDataURL(o), t.onload = function() {
        n = t.result;
      }, t.onerror = function(c) {
        p(c);
      }, t.onloadend = function() {
        s(n);
      };
    }), h = (o, s) => {
      e.value = {
        ...s
      };
    }, k = async (o) => {
      e.value = o, o.file && (l.value = await g(o.file));
    }, b = () => {
      l.value = void 0;
    };
    return (o, s) => {
      const p = D, t = E, n = M, c = j, y = N, C = x("config-item");
      return i(), u(C, {
        label: o.label
      }, {
        default: d(() => [a("div", z, [r(y, {
          action: "/",
          onChange: h,
          onProgress: k,
          "show-file-list": !1,
          accept: v.value
        }, {
          "upload-button": d(() => [a("div", {
            class: P(`arco-upload-list-item${e.value && e.value.status === "error" ? " arco-upload-list-item-error" : ""}`)
          }, [l.value ? (i(), _("div", U, [a("img", {
            src: l.value
          }, null, 8, A), a("div", L, [r(p), r(t, {
            onClick: R(b, ["stop", "self"])
          })]), e.value && e.value.status === "uploading" && e.value.percent < 100 ? (i(), u(n, {
            key: 0,
            percent: e.value.percent,
            type: "circle",
            size: "mini",
            style: {
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translateX(-50%) translateY(-50%)"
            }
          }, null, 8, ["percent"])) : B("", !0)])) : (i(), _("div", O, [a("div", X, [r(c)])]))], 2)]),
          _: 1
        }, 8, ["accept"])])]),
        _: 1
      }, 8, ["label"]);
    };
  }
});
export {
  ee as default
};
