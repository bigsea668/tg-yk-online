import{d as T,t as p,y as U,B as Y,X as j,o as P,b as X,Y as l,a4 as t,i as s,e as i,Z as G,$ as w,a9 as Z,aa as x}from"./index-CGWrNWMP.js";import{b as q}from"./el-select-wyDkdJ0x.js";import{E as H,a as J}from"./el-form-item-DSTzwjso.js";import{E as K}from"./el-input-D6S8Wxsl.js";import{b as O}from"./el-scrollbar-B1CdvwA6.js";import{E as Q,a as W}from"./el-table-column-DRIoJKxM.js";import"./el-checkbox-xYdKsulB.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-tag-DcQ8E_gC.js";import{E as ee}from"./el-popover-2zqKrKOX.js";import{E as te}from"./el-button-COkJ7dDD.js";import{z as oe,A as le,d as se}from"./material-BU3yysrW.js";const ne={class:"mt-4"},ae={class:"pt-2",style:{"border-top":"1px dashed #ccc"}},ie={class:"mt-2"},re={class:"mt-2"},de={class:"mt-4"},pe={class:"mt-2"},ce={class:"dialog-footer"},xe=T({__name:"group",props:{typeId:{}},emits:["groupList","currentGroup"],setup(V,{emit:C}){const u=V,v=C,f=p(!1),r=p(!1),n=U({name:"",describe:"",type:0});function k(){r.value=!0}function I(){r.value=!1;const o={name:n.name,describe:n.describe,type:u.typeId};oe(o).then(e=>{x({message:"新增分组成功",type:"success"}),_()}).catch(e=>{}),y()}function y(){r.value=!1,n.describe="",n.name=""}function M(){f.value=!0;const e={ids:b.value.map(a=>a.id)};le(e).then(a=>{f.value=!1,x({message:"删除标签成功",type:"success"}),_()}).catch(a=>{a.data,f.value=!1})}const B=()=>{},c=p([]);function _(){const o={type:u.typeId};se(o).then(e=>{try{c.value=e.data.data.data,v("groupList",c.value),u.typeId==2&&c.value.unshift({id:0,name:"快捷消息分组",description:"快捷消息分组",type:2})}catch{}}).catch(e=>{})}const $=p(),b=p([]),D=o=>{b.value=o},F=o=>![0].includes(o.id);function L(o){v("currentGroup",o.id)}return Y(()=>{_()}),(o,e)=>{const a=j("Icon"),m=te,N=ee,g=Q,R=W,S=O,h=K,E=H,z=J,A=q;return P(),X("div",null,[l("div",ne,[e[8]||(e[8]=l("div",{class:"mb-2 p-2 px-4 flex justify-between items-center",style:{"border-left":"5px solid #409eff"}}," 分组 ",-1)),l("div",ae,[l("div",ie,[t(m,{type:"primary",plain:"",class:"w-full overflow-hidden text-overflow-ellipsis",onClick:e[0]||(e[0]=d=>k())},{default:s(()=>[t(a,{icon:"mdi:group-add",style:{"font-size":"22px"}}),e[4]||(e[4]=l("span",{class:"hidden lg:inline-block ml-2"},"新增分组",-1)),e[5]||(e[5]=l("span",{class:"hidden md:inline-block lg:hidden ml-2"},"新增分组",-1))]),_:1})]),l("div",re,[t(N,{"confirm-button-text":"Yes","cancel-button-text":"No","icon-color":"#626AEF",title:o.$t("userMarger.user.areSureDel"),onConfirm:M,onCancel:B},{reference:s(()=>[t(m,{type:"danger",plain:"",class:"w-full overflow-hidden text-overflow-ellipsis",disabled:i(b).length===0},{default:s(()=>[t(a,{icon:"material-symbols:delete-outline",style:{"font-size":"22px"}}),e[6]||(e[6]=l("span",{class:"hidden lg:inline-block ml-2"},"删除分组",-1)),e[7]||(e[7]=l("span",{class:"hidden md:inline-block lg:hidden ml-2"},"删除分组",-1))]),_:1},8,["disabled"])]),_:1},8,["title"])])])]),l("div",de,[l("div",null,[l("div",pe,[t(S,{class:"w-full mb-10 overflow-hidden",style:{height:"40.6vh"}},{default:s(()=>[t(R,{ref_key:"tableGroupRef",ref:$,data:i(c),style:{width:"100%"},class:"cursor-pointer",onSelectionChange:D,onRowClick:L,"show-header":!1},{default:s(()=>[t(g,{type:"selection",selectable:F,width:"55"}),t(g,{property:"name",label:"群组名"})]),_:1},8,["data"])]),_:1})])])]),t(A,{modelValue:i(r),"onUpdate:modelValue":e[3]||(e[3]=d=>Z(r)?r.value=d:null),title:"新增分组",width:"30%"},{footer:s(()=>[l("span",ce,[t(m,{onClick:y},{default:s(()=>[G(w(o.$t("btn.cancel")),1)]),_:1}),t(m,{type:"primary",onClick:I},{default:s(()=>[G(w(o.$t("btn.confirm")),1)]),_:1})])]),default:s(()=>[t(z,{"label-position":"right","label-width":"auto",model:i(n),style:{"max-width":"600px"}},{default:s(()=>[t(E,{label:"分组名称","label-position":"right"},{default:s(()=>[t(h,{modelValue:i(n).name,"onUpdate:modelValue":e[1]||(e[1]=d=>i(n).name=d)},null,8,["modelValue"])]),_:1}),t(E,{label:"分组描述","label-position":"right"},{default:s(()=>[t(h,{modelValue:i(n).describe,"onUpdate:modelValue":e[2]||(e[2]=d=>i(n).describe=d)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}});export{xe as _};
