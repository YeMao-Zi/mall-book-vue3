"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),l=require("../utils.js"),s=e.defineComponent({name:"McContainer",__name:"index",props:{styles:{default:()=>({})},children:{},attrs:{}},setup(r){const a=e.computed(()=>{const t=l.getMainStyle(r.styles),{backgroundImage:n}=r.styles,o=n?{"background-image":`url(${n})`,"background-repeat":"no-repeat"}:{};return{...t,...o}});return(t,n)=>(e.openBlock(),e.createElementBlock("div",{class:"McContainer",style:e.normalizeStyle(a.value)},[e.renderSlot(t.$slots,"default")],4))}});exports.default=s;
