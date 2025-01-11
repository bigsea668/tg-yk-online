import{d as Y,t as r,y as A,B as F,o as _,b as E,X as s,a3 as a,i as p,e as o,a8 as H,H as I,h as X,Z,Y as z,a9 as q}from"./index-SkQIWFxF.js";import{v as J}from"./el-select-aoHRwLzr.js";import{E as K}from"./el-pagination-BZTeeDdF.js";import"./el-tag-C-Ar2SHx.js";import"./el-scrollbar-B_RdZN1g.js";import{E as Q,a as W}from"./el-table-column-DFYlF3gl.js";import"./el-checkbox-oKrozKwu.js";import"./el-tooltip-l0sNRNKZ.js";import{E as ee}from"./el-popover-B_wffsG6.js";import{E as te}from"./el-button-CaCwkDis.js";import"./el-form-item-DjY6-g6w.js";import{I as h}from"./iconify-BwnrVFpF.js";import{d as ae,e as oe,j as le}from"./material-Co1NEuoq.js";import{_ as ne}from"./group.vue_vue_type_script_setup_true_lang-BvEpzQXj.js";import{_ as se}from"./addSpeech.vue_vue_type_script_setup_true_lang-DEzHhV8f.js";import{E as ie}from"./index-CduaMGvE.js";import"./index-DMdzZa0p.js";import"./use-form-item-OJvLHTB4.js";import"./refs-C2TW7dIb.js";import"./_Uint8Array-BK-oSTMd.js";import"./_initCloneObject-C4kFkGVc.js";import"./el-upload-BngSqAe8.js";const re={class:"grid grid-cols-12 gap-4 mt-1"},pe={class:"col-span-2 bg-white rounded-md p-4"},de={class:"mr-4",style:{width:"100%"}},ue={class:"mt-2"},me={class:"col-span-10 bg-white rounded-md p-4"},ce={style:{height:"82.5vh"}},ge={class:"mt-4"},Le=Y({__name:"speech",setup(fe){const u=r(!1),c=r([{value:0,label:"快捷消息分组"}]);function w(){ae({type:2}).then(e=>{try{c.value=e.data.data.data.map(n=>({value:n.id,label:n.name})),c.value.unshift({value:0,label:"快捷消息分组"})}catch{}}).catch(e=>{})}function N(l){const e=c.value.find(n=>n.value==l);return e?e.label:"未知分组"}const g=r(!1);function k(l){g.value=!0,f.value=l,w()}const S=r(),f=r(""),U=(l,e)=>{f.value=e,g.value=!0,S.value=l.id},v=r(""),C=r([]);let y=r(-1);function T(l){y.value=l,m()}function m(){u.value=!0;const l={Like:v.value,GroupId:y.value===-1?null:y.value,pageNum:i.pageNum,pageSize:i.pageSize};oe(l).then(e=>{try{e.data.data.data,C.value=e.data.data.data.map((n,b)=>({...n,ids:b+1})),i.pageNum=e.data.data.pageNumber,i.pageSize=e.data.data.pageSize,i.total=e.data.data.totalCount}catch{}}).catch(e=>{}).finally(()=>{u.value=!1})}const B=()=>{};function G(l){u.value=!0;const e={id:l.id};le(e).then(n=>{q({message:"删除话术成功",type:"success"}),m()}).catch(n=>{n.data}).finally(()=>{u.value=!1})}const i=A({pageSizes:[1,10,20,50],pageSize:10,pageNum:1,total:400}),M=l=>{m()},V=l=>{m()},$=r(),D=r([]),L=l=>{D.value=l};return F(()=>{m(),w()}),(l,e)=>{const n=te,b=ie,d=Q,P=ee,O=W,R=K,x=J;return _(),E("div",re,[s("div",pe,[s("div",null,[e[11]||(e[11]=s("div",{class:"mb-4 px-2 py-2",style:{"border-bottom":"1px dashed #ccc"}}," 话术素材 ",-1)),s("div",null,[s("div",de,[a(b,{modelValue:o(v),"onUpdate:modelValue":e[0]||(e[0]=t=>H(v)?v.value=t:null),style:{"max-width":"230px"},placeholder:"Please input",class:"input-with-select"},{append:p(()=>[a(n,{type:"primary",plain:"",onClick:m},{default:p(()=>[a(o(h),{icon:"mingcute:search-fill",style:{"font-size":"22px"}})]),_:1})]),_:1},8,["modelValue"])]),s("div",ue,[a(n,{type:"primary",plain:"",class:"w-full overflow-hidden text-overflow-ellipsis",onClick:e[1]||(e[1]=t=>k("add"))},{default:p(()=>[a(o(h),{icon:"tabler:message-plus",style:{"font-size":"22px"}}),e[9]||(e[9]=s("span",{class:"hidden lg:inline-block ml-2"},"新增话术",-1)),e[10]||(e[10]=s("span",{class:"hidden md:inline-block lg:hidden ml-2"},"新增话术",-1))]),_:1})])])]),a(ne,{typeId:2,onCurrentGroup:T})]),I((_(),E("div",me,[s("div",null,[s("div",ce,[I((_(),X(O,{ref_key:"tableRef",ref:$,data:o(C),style:{width:"100%"},border:"",onSelectionChange:L,height:"full"},{default:p(()=>[a(d,{type:"selection",width:"55"}),a(d,{prop:"ids",label:"ID",width:"55"}),a(d,{prop:"msg",label:"话术",width:"400"}),a(d,{prop:"createTime",label:"创建时间",width:"150"}),a(d,{prop:"groupId",label:"分组"},{default:p(t=>[s("span",null,Z(N(t.row.groupId)),1)]),_:1}),a(d,{prop:"useNum",label:"使用次数"}),a(d,{prop:"status",label:"状态",width:"150"}),a(d,{width:"220"},{header:p(()=>e[12]||(e[12]=[s("div",{class:"must"},[s("span",{class:"red"}),z("操作")],-1)])),default:p(t=>[a(P,{"confirm-button-text":"Yes","cancel-button-text":"No","icon-color":"#626AEF",title:l.$t("userMarger.user.areSureDel"),onConfirm:j=>G(t.row),onCancel:B},{reference:p(()=>[a(n,{size:"small",type:"danger",plain:""},{default:p(()=>[a(o(h),{icon:"mdi-light:delete",style:{"font-size":"18px"}}),e[13]||(e[13]=z(" 删除 "))]),_:1})]),_:2},1032,["title","onConfirm"]),a(n,{size:"small",type:"primary",plain:"",onClick:j=>U(t.row,"port")},{default:p(()=>[a(o(h),{icon:"mdi:progress-wrench",style:{"font-size":"18px"}}),e[14]||(e[14]=z(" 修改话术 "))]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[x,o(u)]])]),s("div",ge,[a(R,{"current-page":o(i).pageNum,"onUpdate:currentPage":e[2]||(e[2]=t=>o(i).pageNum=t),"page-size":o(i).pageSize,"onUpdate:pageSize":e[3]||(e[3]=t=>o(i).pageSize=t),"page-sizes":o(i).pageSizes,"onUpdate:pageSizes":e[4]||(e[4]=t=>o(i).pageSizes=t),total:o(i).total,"onUpdate:total":e[5]||(e[5]=t=>o(i).total=t),size:"default",background:!0,layout:"total, sizes, prev, pager, next, jumper","default-current-page":1,onSizeChange:M,onCurrentChange:V},null,8,["current-page","page-size","page-sizes","total"])])])])),[[x,o(u)]]),a(se,{show:o(g),formType:o(f),groupOptions:o(c),modId:o(S),"onUp:show":e[6]||(e[6]=t=>g.value=t),"onUp:formType":e[7]||(e[7]=t=>f.value=t),"onUp:speech":m,"onUp:loading":e[8]||(e[8]=t=>u.value=t)},null,8,["show","formType","groupOptions","modId"])])}}});export{Le as default};
