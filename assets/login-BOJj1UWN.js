import{d as E,t as d,a1 as V,b as x,Y as s,a4 as e,$ as u,e as l,i as a,J as y,o as $,Z as b}from"./index-B8CaIlcO.js";import{E as U}from"./el-card-BdXr0Dp9.js";import{E as B,a as C}from"./el-form-item-CCQqXnM1.js";import{E as N}from"./el-button-BsBPLb-i.js";import{E as k}from"./el-input-D8jvQ1tV.js";import{_ as F}from"./locale.vue_vue_type_script_setup_true_lang-BLKgM7po.js";import"./index-D5W6IqEd.js";import"./refs-B78UAK1t.js";import"./el-scrollbar-DZ1CksSo.js";import"./_Uint8Array-eSuOIDTt.js";import"./_initCloneObject-BtN4nXO_.js";/* empty css                        */import"./iconify-DIoiMvOm.js";import"./dropdown-Bvgffwxr.js";const L=""+new URL("../logo.svg",import.meta.url).href,S={class:"fixed top-[2vh] right-[3vw]"},T={class:"w-[20vw] mx-[auto] text-center mt-[10vh] space-y-10 relative"},D={class:"flex gap-2 justify-center items-center"},I={class:"text-[3rem] font-bold"},Y={class:"text-xl font-semibold mb-[1rem]"},X=E({__name:"login",setup(j){const c="TGYK Prod",o=d({username:"user",password:"123456"}),r=d(!1),_=V();async function f(){if(r.value=!0,await _.login({userName:o.value.username,password:o.value.password})!==200){r.value=!1;return}}return(n,t)=>{const g=F,p=k,m=B,w=N,v=C,h=U;return $(),x(y,null,[s("div",S,[e(g)]),s("div",T,[s("div",D,[t[2]||(t[2]=s("img",{src:L,alt:"logo",class:"w-[3vw]"},null,-1)),s("p",I,u(l(c)),1)]),e(h,null,{default:a(()=>[s("h1",Y,u(n.$t("login")),1),e(v,null,{default:a(()=>[e(m,null,{default:a(()=>[e(p,{modelValue:l(o).username,"onUpdate:modelValue":t[0]||(t[0]=i=>l(o).username=i),autofocus:"","suffix-icon":"User",placeholder:n.$t("username")},null,8,["modelValue","placeholder"])]),_:1}),e(m,null,{default:a(()=>[e(p,{type:"password",modelValue:l(o).password,"onUpdate:modelValue":t[1]||(t[1]=i=>l(o).password=i),placeholder:n.$t("password")},null,8,["modelValue","placeholder"])]),_:1}),e(m,null,{default:a(()=>[e(w,{loading:l(r),class:"w-full",type:"primary",onClick:f},{default:a(()=>[b(u(n.$t("login")),1)]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})])],64)}}});export{X as default};