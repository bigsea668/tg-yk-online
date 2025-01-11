import{d as X,z as $,t as x,c as ee,b as w,Y as r,a4 as t,i as s,e as l,J as I,o as m,Z as _,h as S,a0 as le,a3 as A,$ as V,n as L,H as F,I as T,aa as C}from"./index-DZ6OSBbF.js";import{b as te,c as ae,e as ne}from"./el-select-B8Gl4LcX.js";import{E as oe,a as se}from"./el-form-item-DTrh179H.js";import"./el-tooltip-l0sNRNKZ.js";import{E as ie}from"./el-scrollbar-BlCa7Rp_.js";/* empty css                        */import{E as re,a as de}from"./el-button-qQztgBCg.js";import{E as ue}from"./el-input-y9r0mkIm.js";import"./el-tag-2XB_r1MG.js";import{I as b}from"./iconify-BPuWgN66.js";import{b as pe}from"./account-Dsg97R6N.js";import{_ as me,s as ce}from"./el-step-BMlsScJN.js";import{a as B}from"./account.StatusEnum-B7ItzWu9.js";import{g as fe,i as j}from"./utils-BDpUbmYL.js";const ve={style:{float:"left"}},ye={style:{float:"right"}},be={style:{float:"right",color:"var(--el-text-color-secondary)","font-size":"13px"}},ge={class:"flex justify-between"},xe={class:"flex justify-center items-center"},he={class:"w-full"},we={class:"w-full"},_e={class:"flex items-center h-8 w-64 overflow-hidden whitespace-nowrap truncate"},ke=["onClick"],Ie={class:"w-full"},Se={class:"flex items-center h-8 w-64 overflow-hidden whitespace-nowrap truncate"},Ve=["onClick"],Ce={class:"dialog-footer"},qe=X({__name:"oneClickG",props:{currentAccId:{type:Number,required:!1},show:{type:Boolean,required:!0},multipleSelect:{type:Array,required:!1},oneClickGList:{type:Array,required:!1}},emits:["up:show","up:success"],setup(q,{emit:O}){const d=q,z=O;$(()=>d.show,()=>{H();let u=0;d.multipleSelect&&(u=d.multipleSelect.length),d.oneClickGList&&(u=d.oneClickGList.length),o.value.maxSendNumber=u}),$(()=>d.currentAccId,()=>{d.currentAccId!==-1&&d.currentAccId!==void 0&&(o.value.id=d.currentAccId)});const M=x(!1),E=x([]);function H(){M.value=!0,pe().then(u=>{try{E.value=u.data.data.data.map(e=>({status:e.account.status,value:e.account.id,label:e.account.nickName,phone:e.account.phone})),E.value}catch{}}).catch(u=>{}).finally(()=>{M.value=!1})}function J(u){u.status!=B.Online&&(C.error("该账号未登录"),o.value.id=0)}const o=x({id:0,maxSendNumber:0,remark:`群发任务(${fe(new Date)})`,msg:"",minIntervalTime:5,maxIntervalTime:10}),P=ee(()=>!0);function Y(){if(o.value.id<=0){C.error("请选择账号");return}let u=[],e=[],v=[],y=[];d.multipleSelect&&(u=d.multipleSelect.filter(a=>a.phone!=null).map(a=>a.phone)),d.oneClickGList&&d.oneClickGList.forEach(a=>{a.groupId===0?e.push(String(a.userId)):v.push(String(a.groupId))}),d.multipleSelect&&(y=d.multipleSelect.filter(a=>a.mainName!=null).map(a=>a.mainName));const i=new FormData;u.length!=0&&u.forEach(a=>{i.append("phones",a)}),e.length!=0&&e.forEach(a=>{i.append("users",a)}),v.length!=0&&v.forEach(a=>{i.append("chats",a)}),y.length!=0&&y.forEach(a=>{i.append("userLinks",a)}),i.append("id",String(o.value.id)),i.append("maxSendNumber",String(o.value.maxSendNumber)),i.append("remark",o.value.remark),i.append("msg",o.value.msg),i.append("minIntervalTime",String(o.value.minIntervalTime)),i.append("maxIntervalTime",String(o.value.maxIntervalTime)),p.value&&p.value.forEach(a=>{i.append("files.UrlFiles",a)}),f.value&&f.value.forEach(a=>{i.append("files.UrlFileTypes",a)}),ce(i).then(a=>{a.data,C.success("群发成功")}).catch(a=>{C.error("群发失败")}),N()}function N(){z("up:show",!1),z("up:success"),k.value=!1,o.value={id:0,maxSendNumber:0,remark:"",msg:"",minIntervalTime:5,maxIntervalTime:10},p.value=[],f.value=[],d.currentAccId!==-1&&d.currentAccId!=null&&(o.value.id=d.currentAccId)}const c=x("sendMsg"),k=x(!1);function U(){k.value=!0}const p=x([]),f=x([]);function Z(u,e,v,y){k.value=u,v.length>0&&y.length>0&&(Array.isArray(p.value)||(p.value=[]),Array.isArray(f.value)||(f.value=[]),p.value=[...p.value,...v],f.value=[...f.value,...y])}function G(u){p.value&&f.value&&(p.value.splice(u,1),f.value.splice(u,1))}return(u,e)=>{const v=ae,y=ne,i=oe,a=ue,g=re,K=de,D=ie,Q=se,R=te;return m(),w(I,null,[r("div",null,[t(R,{modelValue:d.show,"onUpdate:modelValue":e[10]||(e[10]=n=>d.show=n),title:"一键群发",width:"600",onClose:N},{footer:s(()=>[r("div",Ce,[t(g,{onClick:N},{default:s(()=>e[20]||(e[20]=[_("Cancel")])),_:1}),t(g,{type:"primary",onClick:Y},{default:s(()=>e[21]||(e[21]=[_("发送消息")])),_:1})])]),default:s(()=>[t(Q,{model:l(o),class:"demo-form-inline",style:{"max-width":"600px"}},{default:s(()=>[t(i,{label:"选择账号","label-width":"100px"},{default:s(()=>[t(y,{modelValue:l(o).id,"onUpdate:modelValue":e[0]||(e[0]=n=>l(o).id=n),placeholder:"选择账号",clearable:"",filterable:""},{default:s(()=>[l(P)?(m(),S(v,{key:0,label:"选择账号",value:0})):le("",!0),(m(!0),w(I,null,A(l(E),n=>(m(),S(v,{key:n.value,label:n.label,value:n.value,onClick:h=>J(n)},{default:s(()=>[r("span",ve,V(n.label),1),r("span",ye,[n.status===l(B).Online?(m(),S(l(b),{key:0,icon:"ic:round-lens",style:{"font-size":"10px"},class:"ml-2 text-green-600"})):(m(),S(l(b),{key:1,icon:"ic:round-lens",style:{"font-size":"10px"},class:"ml-2 text-red-600"}))]),r("span",be,V(n.phone),1)]),_:2},1032,["label","value","onClick"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(i,{label:"最大发送人数","label-width":"100px"},{default:s(()=>[t(a,{modelValue:l(o).maxSendNumber,"onUpdate:modelValue":e[1]||(e[1]=n=>l(o).maxSendNumber=n),placeholder:"请输入最大发送人数",clearable:""},null,8,["modelValue"])]),_:1}),t(i,{label:"消息间隔时间（随机）","label-width":"180px"},{default:s(()=>[r("div",ge,[t(a,{modelValue:l(o).minIntervalTime,"onUpdate:modelValue":e[2]||(e[2]=n=>l(o).minIntervalTime=n),placeholder:"请输入间隔最小时间",clearable:"",style:{width:"150px"}},null,8,["modelValue"]),e[11]||(e[11]=r("span",{class:"mx-2"}," 秒~",-1)),t(a,{modelValue:l(o).maxIntervalTime,"onUpdate:modelValue":e[3]||(e[3]=n=>l(o).maxIntervalTime=n),placeholder:"请输入间隔最大时间",clearable:"",style:{width:"150px"}},null,8,["modelValue"]),e[12]||(e[12]=r("span",{class:"mx-2"}," 秒",-1))])]),_:1}),t(i,{label:"任务备注","label-width":"100px"},{default:s(()=>[t(a,{modelValue:l(o).remark,"onUpdate:modelValue":e[4]||(e[4]=n=>l(o).remark=n),clearable:""},null,8,["modelValue"])]),_:1}),r("div",xe,[t(K,{class:"w-3/5 mb-2 pb-2",style:{"border-bottom":"1px solid #ccc"}},{default:s(()=>[t(g,{class:L(["w-1/3",{active:l(c)==="sendMsg"}]),type:"primary",plain:"",onClick:e[5]||(e[5]=n=>c.value="sendMsg")},{default:s(()=>e[13]||(e[13]=[_(" 消息内容 ")])),_:1},8,["class"]),t(g,{class:L(["w-1/3",{active:l(c)==="sendFile"}]),type:"primary",plain:"",onClick:e[6]||(e[6]=n=>c.value="sendFile")},{default:s(()=>e[14]||(e[14]=[_(" 消息文件 ")])),_:1},8,["class"]),t(g,{class:L(["w-1/3",{active:l(c)==="sendFoM"}]),type:"primary",plain:"",onClick:e[7]||(e[7]=n=>c.value="sendFoM")},{default:s(()=>e[15]||(e[15]=[_(" 消息内容 + 文件 ")])),_:1},8,["class"])]),_:1})]),F(r("div",he,[t(i,{label:"消息内容","label-width":"100px"},{default:s(()=>[t(a,{modelValue:l(o).msg,"onUpdate:modelValue":e[8]||(e[8]=n=>l(o).msg=n),rows:4,type:"textarea",clearable:""},null,8,["modelValue"])]),_:1})],512),[[T,l(c)==="sendMsg"]]),F(r("div",we,[t(i,{label:"选择文件","label-width":"100px"},{default:s(()=>[r("div",null,[t(g,{type:"primary",plain:"",onClick:U},{default:s(()=>[t(l(b),{icon:"line-md:file-import-filled",style:{"font-size":"22px"}}),e[16]||(e[16]=r("span",{class:"hidden lg:inline-block ml-2"},"选择文件",-1)),e[17]||(e[17]=r("span",{class:"hidden md:inline-block lg:hidden ml-2"},"选择文件",-1))]),_:1}),(m(!0),w(I,null,A(l(p),(n,h)=>(m(),w("div",{key:h,class:"flex items-center justify-between w-80",style:{border:"1px dashed #ccc"}},[t(l(b),{icon:"bxs:file",style:{"font-size":"22px"}}),t(D,{class:"box-item",effect:"dark",content:n,placement:"top"},{default:s(()=>[r("span",_e,V(l(j)(n)),1)]),_:2},1032,["content"]),r("span",{type:"danger",plain:"",onClick:W=>G(h)},[t(l(b),{icon:"mynaui:delete-solid",class:"hover:text-red-500 cursor-pointer",style:{"font-size":"22px"}})],8,ke)]))),128))])]),_:1})],512),[[T,l(c)==="sendFile"]]),F(r("div",Ie,[t(i,{label:"消息内容","label-width":"100px"},{default:s(()=>[t(a,{modelValue:l(o).msg,"onUpdate:modelValue":e[9]||(e[9]=n=>l(o).msg=n),rows:4,type:"textarea",clearable:""},null,8,["modelValue"])]),_:1}),t(i,{label:"选择文件","label-width":"100px"},{default:s(()=>[r("div",null,[t(g,{type:"primary",plain:"",onClick:U},{default:s(()=>[t(l(b),{icon:"line-md:file-import-filled",style:{"font-size":"22px"}}),e[18]||(e[18]=r("span",{class:"hidden lg:inline-block ml-2"},"选择文件",-1)),e[19]||(e[19]=r("span",{class:"hidden md:inline-block lg:hidden ml-2"},"选择文件",-1))]),_:1}),(m(!0),w(I,null,A(l(p),(n,h)=>(m(),w("div",{key:h,class:"flex items-center justify-between w-80",style:{border:"1px dashed #ccc"}},[t(l(b),{icon:"bxs:file",style:{"font-size":"22px"}}),t(D,{class:"box-item",effect:"dark",content:n,placement:"top"},{default:s(()=>[r("span",Se,V(l(j)(n)),1)]),_:2},1032,["content"]),r("span",{type:"danger",plain:"",onClick:W=>G(h)},[t(l(b),{icon:"mynaui:delete-solid",class:"hover:text-red-500 cursor-pointer",style:{"font-size":"22px"}})],8,Ve)]))),128))])]),_:1})],512),[[T,l(c)==="sendFoM"]])]),_:1},8,["model"])]),_:1},8,["modelValue"])]),t(me,{show:l(k),isLocal:!1,onDeliver:Z},null,8,["show"])],64)}}});export{qe as _};
