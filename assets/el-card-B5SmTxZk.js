import{p,M as y,d as f,a as u,o as r,b as t,n as o,e as s,r as d,Z as l,$ as n,a0 as i,Y as c,f as h,_ as m,w as v}from"./index-DNkZCZKw.js";const S=p({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:y([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),b=f({name:"ElCard"}),C=f({...b,props:S,setup($){const a=u("card");return(e,g)=>(r(),t("div",{class:o([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(r(),t("div",{key:0,class:o(s(a).e("header"))},[d(e.$slots,"header",{},()=>[l(n(e.header),1)])],2)):i("v-if",!0),c("div",{class:o([s(a).e("body"),e.bodyClass]),style:h(e.bodyStyle)},[d(e.$slots,"default")],6),e.$slots.footer||e.footer?(r(),t("div",{key:1,class:o(s(a).e("footer"))},[d(e.$slots,"footer",{},()=>[l(n(e.footer),1)])],2)):i("v-if",!0)],2))}});var w=m(C,[["__file","card.vue"]]);const E=v(w);export{E};
