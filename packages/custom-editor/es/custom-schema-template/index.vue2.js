import { defineComponent, mergeModels, inject, useModel, resolveComponent, openBlock, createElementBlock, Fragment, renderList, createBlock, resolveDynamicComponent, unref, mergeProps, withCtx, createCommentVNode } from "vue";
import { ControlInject } from "../types/platform.js";
import { getComponents } from "./config.js";
const _hoisted_1 = {
  key: 0
}, _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: /* @__PURE__ */ mergeModels({
    shemaField: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const controlInject = inject(ControlInject), model = useModel(__props, "modelValue"), getCorrelation = (s, key) => {
      const curComponentInfo = controlInject == null ? void 0 : controlInject.curComponent.value;
      if (!curComponentInfo) return !0;
      if (s.correlation) {
        const evalStr = `curComponentInfo.${s.correlation}`;
        return eval(evalStr);
      }
      return !0;
    };
    return (n, m) => {
      const r = resolveComponent("custom-schema-template");
      return openBlock(), createElementBlock("div", null, [model.value ? (openBlock(), createElementBlock("ul", _hoisted_1, [(openBlock(!0), createElementBlock(Fragment, null, renderList(n.shemaField, (e, o, l) => (openBlock(), createElementBlock("li", {
        key: l
      }, [(openBlock(), createBlock(resolveDynamicComponent(getCorrelation(e) && unref(getComponents)(e.type)), mergeProps({
        key: l,
        ref_for: !0
      }, e, {
        modelValue: model.value[o],
        "onUpdate:modelValue": (t) => model.value[o] = t,
        schema: e
      }), {
        default: withCtx(() => [e.child ? (openBlock(), createBlock(r, {
          key: 0,
          modelValue: model.value[o],
          "onUpdate:modelValue": (t) => model.value[o] = t,
          "shema-field": e.child
        }, null, 8, ["modelValue", "onUpdate:modelValue", "shema-field"])) : createCommentVNode("", !0)]),
        _: 2
      }, 1040, ["modelValue", "onUpdate:modelValue", "schema"]))]))), 128))])) : createCommentVNode("", !0)]);
    };
  }
});
export {
  _sfc_main as default
};
