"use strict";const e=require("vue"),a=require("../utils.js"),l=e.defineComponent({name:"McContainer",__name:"index",props:{styles:{default:()=>({})},children:{},attrs:{}},setup(r){const s=e.computed(()=>{const t=a.getMainStyle(r.styles),{backgroundImage:n}=r.styles,o=n?{"background-image":`url(${n})`,"background-repeat":"no-repeat"}:{};return{...t,...o}});return(t,n)=>(e.openBlock(),e.createElementBlock("div",{class:"McContainer",style:e.normalizeStyle(s.value)},[e.renderSlot(t.$slots,"default")],4))}});module.exports=l;
