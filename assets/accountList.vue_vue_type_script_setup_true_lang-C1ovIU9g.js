import{d as k,t as o,B as y,X as w,o as u,b as d,J as b,a3 as A,H as C,e as a,n as h,Y as n,$ as m,a4 as L,Z as N}from"./index-B8CaIlcO.js";import{v as B}from"./el-select-BevDt7DJ.js";import{g as S}from"./im-Hvf4yXSe.js";import{g as E,a as V}from"./account.StatusEnum-HJ87c6Td.js";const j={class:"mr-2"},z=["onClick"],D={class:"col-span-10 ml-4"},$={class:"flex justify-between items-center"},F={class:"text-with-ellipsis col-span-6 font-bold text-sm"},G={class:"font-thin text-xs flex"},Y=k({__name:"accountList",emits:["accountId"],setup(H,{emit:_}){const f=_,i=o(!1),p=o([]);function v(){i.value=!0,S({GroupId:0}).then(s=>{try{p.value=s.data.data.data.filter(t=>t.account.status===V.Online).map(t=>({id:t.account.id,accountId:t.account.accountId,status:t.account.status,accountName:t.account.nickName,phone:t.account.phone}))}catch{}}).catch(s=>{}).finally(()=>{i.value=!1})}const r=o(-1),g=o(0);function x(l,s){r.value=l,g.value=s,f("accountId",s)}return y(()=>{v()}),(l,s)=>{const t=w("Icon"),I=B;return u(),d("div",j,[(u(!0),d(b,null,A(a(p),(e,c)=>C((u(),d("div",{key:c,class:h(["rounded-md shadow-md mb-1 grid grid-cols-10 gap-4 flex justify-between items-center hover:scale-95 transition-all duration-30 cursor-pointer",{"h-12 bg-sky-400 text-white":a(r)===c,"h-10":a(r)!==c}]),onClick:J=>x(c,e.id)},[n("div",D,[n("div",$,[n("div",F,m(e.accountName),1),n("div",{class:h(["text-with-ellipsis col-span-4 font-thin text-xs mr-2",e.status==1?"text-green-300":"text-red-500"])},m(a(E)(e.status)),3)]),n("div",G,[L(t,{icon:"line-md:phone",style:{"font-size":"16px"}}),N(" : "+m(e.phone),1)])])],10,z)),[[I,a(i)]])),128))])}}});export{Y as _};