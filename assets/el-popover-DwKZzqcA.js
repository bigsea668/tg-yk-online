import{b as g,E as C}from"./el-button-BsBPLb-i.js";import{p as x,q as z,bk as I,d as P,ae as V,a as _,t as q,c as i,af as A,o as p,h as c,i as s,Y as f,n as a,e as t,G as D,f as M,a8 as R,a0 as E,Z as u,$ as m,r as b,a4 as k,m as G,_ as L,w as U}from"./index-B8CaIlcO.js";import{g as S,E as Y}from"./el-scrollbar-DZ1CksSo.js";const Z=x({title:String,confirmButtonText:String,cancelButtonText:String,confirmButtonType:{type:String,values:g,default:"primary"},cancelButtonType:{type:String,values:g,default:"text"},icon:{type:z,default:()=>I},iconColor:{type:String,default:"#f90"},hideIcon:{type:Boolean,default:!1},hideAfter:{type:Number,default:200},teleported:S.teleported,persistent:S.persistent,width:{type:[String,Number],default:150}}),j={confirm:o=>o instanceof MouseEvent,cancel:o=>o instanceof MouseEvent},F=P({name:"ElPopconfirm"}),H=P({...F,props:Z,emits:j,setup(o,{emit:d}){const r=o,{t:y}=V(),n=_("popconfirm"),B=q(),T=()=>{var e,l;(l=(e=B.value)==null?void 0:e.onClose)==null||l.call(e)},N=i(()=>({width:A(r.width)})),v=e=>{d("confirm",e),T()},h=e=>{d("cancel",e),T()},w=i(()=>r.confirmButtonText||y("el.popconfirm.confirmButtonText")),$=i(()=>r.cancelButtonText||y("el.popconfirm.cancelButtonText"));return(e,l)=>(p(),c(t(Y),G({ref_key:"tooltipRef",ref:B,trigger:"click",effect:"light"},e.$attrs,{"popper-class":`${t(n).namespace.value}-popover`,"popper-style":t(N),teleported:e.teleported,"fallback-placements":["bottom","top","right","left"],"hide-after":e.hideAfter,persistent:e.persistent}),{content:s(()=>[f("div",{class:a(t(n).b())},[f("div",{class:a(t(n).e("main"))},[!e.hideIcon&&e.icon?(p(),c(t(D),{key:0,class:a(t(n).e("icon")),style:M({color:e.iconColor})},{default:s(()=>[(p(),c(R(e.icon)))]),_:1},8,["class","style"])):E("v-if",!0),u(" "+m(e.title),1)],2),f("div",{class:a(t(n).e("action"))},[b(e.$slots,"actions",{confirm:v,cancel:h},()=>[k(t(C),{size:"small",type:e.cancelButtonType==="text"?"":e.cancelButtonType,text:e.cancelButtonType==="text",onClick:h},{default:s(()=>[u(m(t($)),1)]),_:1},8,["type","text"]),k(t(C),{size:"small",type:e.confirmButtonType==="text"?"":e.confirmButtonType,text:e.confirmButtonType==="text",onClick:v},{default:s(()=>[u(m(t(w)),1)]),_:1},8,["type","text"])])],2)],2)]),default:s(()=>[e.$slots.reference?b(e.$slots,"reference",{key:0}):E("v-if",!0)]),_:3},16,["popper-class","popper-style","teleported","hide-after","persistent"]))}});var J=L(H,[["__file","popconfirm.vue"]]);const W=U(J);export{W as E};
