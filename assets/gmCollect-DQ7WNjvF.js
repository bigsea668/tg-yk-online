import{d as ce,t as r,b as B,Y as n,a4 as l,i as s,e as a,Z as d,H as D,h as m,a9 as fe,J as M,o as u,a3 as R,$ as y,a0 as J,aa as g,D as H}from"./index-CGWrNWMP.js";import{e as ve,v as ye,c as ke}from"./el-select-wyDkdJ0x.js";import{a as be,E as he}from"./el-table-column-DRIoJKxM.js";import"./el-checkbox-xYdKsulB.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-scrollbar-B1CdvwA6.js";import{E as _e}from"./el-link-CazFK69Y.js";import"./el-tag-DcQ8E_gC.js";import{a as ge,E as we}from"./el-form-item-DSTzwjso.js";import{E as xe}from"./el-button-COkJ7dDD.js";import{E as Ce}from"./el-switch-LhG-zV7l.js";import{E as Ne}from"./el-input-D6S8Wxsl.js";import{I as f}from"./iconify-BJI3uSh1.js";import{g as Ee,b as ze,c as Le}from"./el-step-D7IT0-nb.js";import{r as Te}from"./material-BU3yysrW.js";import{b as $e}from"./account-cPk47_Qz.js";import{e as Q,c as Ve}from"./utils-FLAb4H-x.js";import{t as Se}from"./task.StatusEnum-Db7gRCuP.js";import{a as P}from"./account.StatusEnum-BQxL7Adl.js";import{_ as Ue,a as Ie}from"./phoneSend.vue_vue_type_script_setup_true_lang-D6OtRzDu.js";import{_ as Ae}from"./oneClickG.vue_vue_type_script_setup_true_lang-CzjSYV7t.js";import{E as Be}from"./index-DN8L5-8F.js";import"./refs-DQ3eI1PF.js";import"./index-Cbvrzi_3.js";import"/tg-yk-online/_Uint8Array-Dp_aYPW3.js";import"./_initCloneObject-B3rnf7rt.js";import"./validator-DwovbJRw.js";import"./el-upload-MlMccyn5.js";/* empty css                        */import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./accountList.vue_vue_type_script_setup_true_lang-ZZIBCVjs.js";import"./im-CEZjuRAh.js";const De={class:"bg-white rounded-md p-4 mb-2 mt-1"},Me={style:{float:"left"}},je={style:{float:"right"}},Fe={style:{float:"right",color:"var(--el-text-color-secondary)","font-size":"13px"}},Ge={class:"bg-white rounded-md p-4",style:{height:"81vh"}},Oe={class:"pb-2 flex justify-between",style:{"border-bottom":"1px dashed #ccc"}},Re={style:{float:"left"}},Je={class:"ml-6",style:{float:"right",color:"var(--el-text-color-secondary)","font-size":"13px"}},He={class:"mt-4"},Qe={class:"flex justify-center items-center mb-4 py-2"},Pe={class:"mr-4"},Ye={class:"mr-4"},Ze={class:"mr-4"},qe={class:""},$t=ce({__name:"gmCollect",setup(Ke){const h=r(!1),T=r(!1),$=r(!1),w="https://t.me/",j=r([]);function Y(){T.value=!0,$e().then(o=>{try{j.value=o.data.data.data.map(e=>({status:e.account.status,value:e.account.id,label:e.account.nickName,phone:e.account.phone}))}catch{}}).catch(o=>{}).finally(()=>{T.value=!1})}const N=r([]),V=r(),x=r(),C=r(),c=r({accountId:"",groupLink:"https://t.me/demoTestOpen",join:!1});function Z(o){o.status!=P.Online&&(g.error("该账号未登录"),c.value.accountId="")}const q=()=>{h.value=!0;const o={id:c.value.accountId,group_url:c.value.groupLink,join:c.value.join};ze(o).then(e=>{try{V.value=e.data.data.isChannel,x.value=e.data.data.mainUsername,C.value=e.data.data.title,N.value=e.data.data.taskGatherGroupMembers,g({message:H("p",{style:"line-height: 1; font-size: 14px"},[H("span",null,`${e.data.message}`)])})}catch{}}).catch(e=>{g.error("采集失败")}).finally(()=>{h.value=!1}),E.value=""},K=r(),_=r([]),W=o=>{_.value=o};function X(o){Ve(w,o)}const F=r([]),E=r();function ee(){$.value=!0;const o={taskType:Se.GatherGroupMembers};Ee(o).then(e=>{try{F.value=e.data.data.map(i=>({id:i.id,name:i.name,type:i.type,userId:i.userId,status:i.status,createTime:i.createTime,endTime:i.endTime,totalMumberTasks:i.totalMumberTask,completedQuantity:i.completedQuantity,task_data:i.task_data?JSON.parse(i.task_data):null,userNameURL:i.task_data?w+JSON.parse(i.task_data).MainUsername:null}))}catch{}}).catch(e=>{}).finally(()=>{$.value=!1}),c.value.accountId=""}function te(o){V.value=o.task_data?o.task_data.IsChannel:"",x.value=o.task_data?o.task_data.MainUsername:"",C.value=o.task_data?o.task_data.Title:"",h.value=!0;const e={id:o.id};Le(e).then(i=>{try{g.success("获取任务详情成功"),N.value=i.data.data}catch{}}).catch(i=>{g.error("获取任务详情失败")}).finally(()=>{h.value=!1})}function ae(){const o=_.value.map(p=>({userName:p.userName,phone:p.phone,isActive:p.isActive,isBot:p.isBot,mainName:`${w}${p.mainName}`})),e={userName:"昵称",phone:"电话号",isActive:"是否活跃",isBot:"是否机器人",mainName:"用户链接"},i=`群采集数据-${C.value}-${x.value}`;Q(o,i,e)}function le(){const o=N.value.map(p=>({userName:p.userName,phone:p.phone,isActive:p.isActive,isBot:p.isBot,mainName:`${w}${p.mainName}`})),e={userName:"昵称",phone:"电话号",isActive:"是否活跃",isBot:"是否机器人",mainName:"用户链接"},i=`群采集数据-${C.value}-${x.value}`;Q(o,i,e)}const S=r(!1);function oe(){S.value=!0}const U=r(!1);function se(){U.value=!0}const I=r(!1),G=r(""),O=r("");function ne(o){I.value=!0,o.phone?G.value=o.phone:O.value=`@${o.mainName}`}function ie(o){const e=new FormData;e.append("phones",o.phone),e.append("group_id",String(0)),e.append("remarks","从群采集添加的联系人素材"),Te(e).then(i=>{g.success("新增到素材成功")}).catch(i=>{}).finally(()=>{h.value=!1})}return(o,e)=>{const i=ke,p=ve,z=we,re=Ne,de=Ce,v=xe,ue=ge,k=Be,b=he,pe=_e,me=be,A=ye;return u(),B(M,null,[n("div",null,[n("div",De,[l(ue,{inline:!0,model:a(c),class:"demo-form-inline"},{default:s(()=>[l(z,{label:"选择账号"},{default:s(()=>[D((u(),m(p,{modelValue:a(c).accountId,"onUpdate:modelValue":e[0]||(e[0]=t=>a(c).accountId=t),placeholder:"选择账号",clearable:"",filterable:"",style:{width:"180px"},onClick:Y},{default:s(()=>[(u(!0),B(M,null,R(a(j),t=>(u(),m(i,{key:t.value,label:t.label,value:t.value,onClick:L=>Z(t)},{default:s(()=>[n("span",Me,y(t.label),1),n("span",je,[t.status===a(P).Online?(u(),m(a(f),{key:0,icon:"ic:round-lens",style:{"font-size":"10px"},class:"ml-2 text-green-600"})):(u(),m(a(f),{key:1,icon:"ic:round-lens",style:{"font-size":"10px"},class:"ml-2 text-red-600"}))]),n("span",Fe,y(t.phone),1)]),_:2},1032,["label","value","onClick"]))),128))]),_:1},8,["modelValue"])),[[A,a(T)]])]),_:1}),l(z,{label:"群链接"},{default:s(()=>[l(re,{modelValue:a(c).groupLink,"onUpdate:modelValue":e[1]||(e[1]=t=>a(c).groupLink=t),placeholder:"请输入群链接",clearable:"",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),l(z,null,{default:s(()=>[l(de,{modelValue:a(c).join,"onUpdate:modelValue":e[2]||(e[2]=t=>a(c).join=t),size:"large","active-text":"加入群","inactive-text":"不加入群"},null,8,["modelValue"])]),_:1}),l(z,null,{default:s(()=>[l(v,{type:"primary",onClick:q},{default:s(()=>[l(a(f),{icon:"hugeicons:message-user-01",style:{"font-size":"22px"},class:"mr-2"}),e[7]||(e[7]=d(" 采集群成员 "))]),_:1})]),_:1})]),_:1},8,["model"])]),n("div",Ge,[n("div",Oe,[n("div",null,[e[8]||(e[8]=d(" 查询历史采集任务数据 ")),D((u(),m(p,{modelValue:a(E),"onUpdate:modelValue":e[3]||(e[3]=t=>fe(E)?E.value=t:null),placeholder:"选择历史任务",clearable:"",filterable:"",style:{width:"180px"},class:"mr-2",onClick:ee},{default:s(()=>[(u(!0),B(M,null,R(a(F),t=>(u(),m(i,{key:t.id,label:t.name,value:t.id,onClick:L=>te(t)},{default:s(()=>[n("span",Re,y(t.name),1),n("span",Je,y(t==null?void 0:t.userNameURL),1)]),_:2},1032,["label","value","onClick"]))),128))]),_:1},8,["modelValue"])),[[A,a($)]])]),n("div",null,[l(v,{type:"primary",plain:"",class:"overflow-hidden text-overflow-ellipsis",onClick:oe,disabled:a(_).length===0},{default:s(()=>[l(a(f),{icon:"tabler:message-share",style:{"font-size":"22px"}}),e[9]||(e[9]=n("span",{class:"hidden lg:inline-block ml-2"},"一键群发",-1)),e[10]||(e[10]=n("span",{class:"hidden md:inline-block lg:hidden ml-2"},"一键群发",-1))]),_:1},8,["disabled"]),l(v,{type:"primary",plain:"",class:"overflow-hidden text-overflow-ellipsis",onClick:se,disabled:a(_).length===0},{default:s(()=>[l(a(f),{icon:"fluent:contact-card-link-20-filled",style:{"font-size":"22px"}}),e[11]||(e[11]=n("span",{class:"hidden lg:inline-block ml-2"},"导入为联系人",-1)),e[12]||(e[12]=n("span",{class:"hidden md:inline-block lg:hidden ml-2"},"导入为联系人",-1))]),_:1},8,["disabled"]),l(v,{type:"primary",plain:"",class:"overflow-hidden text-overflow-ellipsis",onClick:le},{default:s(()=>[l(a(f),{icon:"material-symbols:file-export-rounded",style:{"font-size":"22px"}}),e[13]||(e[13]=n("span",{class:"hidden lg:inline-block ml-2"},"一键导出所有数据",-1)),e[14]||(e[14]=n("span",{class:"hidden md:inline-block lg:hidden ml-2"},"一键导出所有数据",-1))]),_:1}),l(v,{type:"primary",plain:"",class:"overflow-hidden text-overflow-ellipsis",onClick:ae},{default:s(()=>[l(a(f),{icon:"material-symbols:file-export-rounded",style:{"font-size":"22px"}}),e[15]||(e[15]=n("span",{class:"hidden lg:inline-block ml-2"},"导出选中数据",-1)),e[16]||(e[16]=n("span",{class:"hidden md:inline-block lg:hidden ml-2"},"导出选中数据",-1))]),_:1})])]),n("div",He,[e[29]||(e[29]=n("div",{class:"mb-4 p-2 px-4 flex justify-between items-center",style:{"border-left":"5px solid #409eff"}},"群信息",-1)),n("div",Qe,[n("span",Pe,[e[17]||(e[17]=d("群标题 ")),l(k,{type:"primary",size:"large"},{default:s(()=>[d(y(a(C)),1)]),_:1})]),n("span",Ye,[e[18]||(e[18]=d("是否为频道 ")),l(k,{type:"primary",size:"large"},{default:s(()=>[d(y(a(V)),1)]),_:1})]),n("span",Ze,[e[19]||(e[19]=d("群名 ")),l(k,{type:"primary",size:"large"},{default:s(()=>[d(y(a(x)),1)]),_:1})])]),D((u(),m(me,{"element-loading-text":"正在采集群成员...",ref_key:"tableRef",ref:K,data:a(N),style:{width:"100%",height:"58vh"},border:"",onSelectionChange:W},{default:s(()=>[l(b,{type:"selection",width:"55"}),l(b,{prop:"userName",label:"名称"}),l(b,{prop:"phone",label:"手机号码"}),l(b,{prop:"isActive",label:"是否活跃",width:"100"},{default:s(t=>[t.row.isActive?(u(),m(k,{key:0,type:"success",size:"large"},{default:s(()=>e[20]||(e[20]=[d("活跃")])),_:1})):(u(),m(k,{key:1,type:"info",size:"large"},{default:s(()=>e[21]||(e[21]=[d("不活跃")])),_:1}))]),_:1}),l(b,{prop:"isBot",label:"是否为机器人",width:"120"},{default:s(t=>[t.row.isBot?(u(),m(k,{key:0,type:"success",size:"large"},{default:s(()=>e[22]||(e[22]=[d("是")])),_:1})):(u(),m(k,{key:1,type:"info",size:"large"},{default:s(()=>e[23]||(e[23]=[d("否")])),_:1}))]),_:1}),l(b,{prop:"mainName",label:"用户链接"},{default:s(t=>[n("div",qe,[l(pe,{type:"primary",href:`${a(w)}${t.row.mainName}`,target:"_blank"},{default:s(()=>[d(y(t.row.mainName),1)]),_:2},1032,["href"]),e[25]||(e[25]=n("br",null,null,-1)),l(v,{onClick:L=>X(t.row.mainName)},{default:s(()=>e[24]||(e[24]=[d("复制用户链接")])),_:2},1032,["onClick"])])]),_:1}),l(b,null,{header:s(()=>e[26]||(e[26]=[n("div",{class:"must"},[n("span",{class:"red"}),d("操作")],-1)])),default:s(t=>[t.row.phone||t.row.mainName?(u(),m(v,{key:0,size:"small",type:"primary",plain:"",onClick:L=>ne(t.row)},{default:s(()=>[l(a(f),{icon:"wpf:chat",style:{"font-size":"18px"},class:"mr-2"}),e[27]||(e[27]=d(" 私聊 "))]),_:2},1032,["onClick"])):J("",!0),t.row.phone?(u(),m(v,{key:1,size:"small",type:"success",plain:"",onClick:L=>ie(t.row)},{default:s(()=>[l(a(f),{icon:"wpf:chat",style:{"font-size":"18px"},class:"mr-2"}),e[28]||(e[28]=d(" 添到联系人素材 "))]),_:2},1032,["onClick"])):J("",!0)]),_:1})]),_:1},8,["data"])),[[A,a(h)]])])])]),l(Ae,{show:a(S),multipleSelect:a(_),"onUp:show":e[4]||(e[4]=t=>S.value=t)},null,8,["show","multipleSelect"]),l(Ue,{show:a(U),multipleSelect:a(_),"onUp:show":e[5]||(e[5]=t=>U.value=t)},null,8,["show","multipleSelect"]),l(Ie,{show:a(I),phone:a(G),mainName:a(O),"onUp:show":e[6]||(e[6]=t=>I.value=t)},null,8,["show","phone","mainName"])],64)}}});export{$t as default};
