"use strict";const vue=require("vue"),platform=require("../types/platform.js"),config=require("./config.js"),_hoisted_1={key:0},_sfc_main=vue.defineComponent({__name:"index",props:vue.mergeModels({shemaField:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(__props){const controlInject=vue.inject(platform.ControlInject),model=vue.useModel(__props,"modelValue"),getCorrelation=(s,key)=>{const curComponentInfo=controlInject==null?void 0:controlInject.curComponent.value;if(!curComponentInfo)return!0;if(s.correlation){const evalStr=`curComponentInfo.${s.correlation}`;return eval(evalStr)}return!0};return(n,r)=>{const u=vue.resolveComponent("custom-schema-template");return vue.openBlock(),vue.createElementBlock("div",null,[model.value?(vue.openBlock(),vue.createElementBlock("ul",_hoisted_1,[(vue.openBlock(!0),vue.createElementBlock(vue.Fragment,null,vue.renderList(n.shemaField,(e,o,l)=>(vue.openBlock(),vue.createElementBlock("li",{key:l},[(vue.openBlock(),vue.createBlock(vue.resolveDynamicComponent(getCorrelation(e)&&vue.unref(config.getComponents)(e.type)),vue.mergeProps({key:l,ref_for:!0},e,{modelValue:model.value[o],"onUpdate:modelValue":t=>model.value[o]=t,schema:e}),{default:vue.withCtx(()=>[e.child?(vue.openBlock(),vue.createBlock(u,{key:0,modelValue:model.value[o],"onUpdate:modelValue":t=>model.value[o]=t,"shema-field":e.child},null,8,["modelValue","onUpdate:modelValue","shema-field"])):vue.createCommentVNode("",!0)]),_:2},1040,["modelValue","onUpdate:modelValue","schema"]))]))),128))])):vue.createCommentVNode("",!0)])}}});module.exports=_sfc_main;
