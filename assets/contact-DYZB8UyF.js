import{d as xe,t as d,y as B,B as Ce,b as z,Y as s,a4 as l,i as n,e as t,a9 as q,H as $,h as L,J as H,aa as V,o as b,$ as ke,Z as m,a3 as Se,n as J,I as W,a0 as ze}from"./index-DUuzFvel.js";import{b as Ve,v as Ee,c as Ne,e as Ue}from"./el-select-BJF6jBIT.js";import{E as Ie}from"./el-upload-ChYxhh0m.js";/* empty css                        */import"./el-tag-D7Rm-6_O.js";import"./el-scrollbar-D7aVC6wy.js";import{E as $e,a as Le}from"./el-form-item-N4fWyyMo.js";import{E as Fe}from"./el-pagination-Cp9pLmr7.js";import{E as De}from"./el-input-BotZGYbG.js";import{a as Me,E as Re}from"./el-table-column-B_hJWM2E.js";import"./el-checkbox-C4NHpp3z.js";import"./el-tooltip-l0sNRNKZ.js";import{E as Be}from"./el-popover-68wOZaBM.js";import{E as Te,a as Ge}from"./el-button-DuoFhyTe.js";import{I as _}from"./iconify-D_akZVkb.js";import{d as Pe,a as Ae,q as je,r as Oe,s as Ye}from"./material-D8O1M_TF.js";import{g as qe}from"./utils-5TzewTYY.js";import{_ as He}from"./group.vue_vue_type_script_setup_true_lang---ZYBliu.js";import{_ as Je}from"./oneClickG.vue_vue_type_script_setup_true_lang-rYX8E0Bs.js";import{_ as We,a as Ze}from"./phoneSend.vue_vue_type_script_setup_true_lang-Bd_Cgb6G.js";import{_ as Ke}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-B8TbwjB8.js";import"./index-D8Vd93mq.js";import"./refs-BoIofw3r.js";import"./_Uint8Array-CuC3rttU.js";import"./_initCloneObject-DjuG6WWD.js";import"./account-BKI-Z_TS.js";import"./el-step-4dxhiD55.js";import"./account.StatusEnum-D4tF9Wiv.js";import"./accountList.vue_vue_type_script_setup_true_lang-B2jnIFSj.js";import"./im-BHgolCU8.js";const Qe={class:"grid grid-cols-12 gap-4 mt-1"},Xe={class:"col-span-2 bg-white rounded-md p-4"},et={class:"mr-4",style:{width:"100%"}},tt={class:"mt-2"},lt={class:"mt-2"},ot={class:"mt-2"},at={class:"mt-2"},nt={class:"col-span-10 bg-white rounded-md p-4"},st={style:{height:"82.5vh",overflow:"auto"}},it={class:"mt-4"},dt={class:"flex justify-center items-center"},rt={class:"w-full"},pt={class:"w-full"},ut={class:"dialog-footer"},mt={key:0},ct={key:1},ft=xe({__name:"contact",setup(gt){const c=d(!1),E=d([{value:0,label:"默认分组"}]);function T(){Pe({type:1}).then(e=>{e.data.data,E.value=e.data.data.data.map(a=>({value:a.id,label:a.name})),E.value.unshift({value:0,label:"默认分组"})}).catch(e=>{})}function Z(i){const e=E.value.find(a=>a.value==i);return e?e.label:"未知分组"}const N=d(),U=d([]),K=d(!1);function Q(i,e){N.value.clearFiles(),U.value=[]}const X=i=>{},ee=(i,e)=>{const a=i.raw;if(!(a.type==="text/plain"||a.name.endsWith(".txt")))return V({message:"文件类型错误,请上传txt文件",type:"error"}),N.value.clearFiles(),K.value=!1;const v=new FileReader;v.onload=function(g){if(g.target){const R=g.target.result;String(R).split(/\r?\n/).forEach(w=>{const S=w.trim();S!==""&&/^\d+$/.test(S)&&U.value.push(S)})}},v.readAsText(a)},h=d(!1),r=B({group:"默认分组",contact:"",remark:`联系人素材(${qe(new Date)})`});function te(i){h.value=!0,y.value=i,T()}function le(){c.value=!0;const a=[...r.contact.split(/\r?\n/),...U.value].filter(oe);if(a.length===0){V({message:"上传的文件中不包含有效的电话号码",type:"error"});return}const u=new FormData;a.forEach(v=>{u.append("phones",v)}),r.group=="默认分组"?u.append("group_id",String(0)):u.append("group_id",String(r.group)),u.append("remarks",r.remark),Oe(u).then(v=>{V.success("新增成功"),x()}).catch(v=>{}).finally(()=>{c.value=!1}),G()}function G(){h.value=!1,y.value="",N.value.clearFiles(),U.value=[],r.contact="",r.group="默认分组",r.remark=""}function oe(i){return/^[1-9]\d{9,14}$/.test(i)}const C=d("conSend"),ae=d(""),y=d(""),f=B({id:"",userName:""}),ne=(i,e)=>{f.id=i.id,y.value=e,h.value=!0,ae.value=i.id};function se(){c.value=!0;const i={id:f.id,user_name:f.userName};Ye(i).then(e=>{e.data.data,V.warning("修改成功"),x()}).catch(e=>{}).finally(()=>{c.value=!1}),P()}function P(){h.value=!1,y.value="",f.id="",f.userName=""}const I=d(""),A=d([]);function x(){c.value=!0;const i={GroupId:r.group==="默认分组"?null:Number(r.group),Like:I.value,pageNum:p.pageNum,pageSize:p.pageSize};Ae(i).then(e=>{e.data.data,A.value=e.data.data.data,p.pageNum=e.data.data.pageNumber,p.pageSize=e.data.data.pageSize,p.total=e.data.data.totalCount}).catch(e=>{}).finally(()=>{c.value=!1})}const ie=()=>{};function de(){c.value=!0;const i=k.value.map(a=>a.id),e=new FormData;i.forEach(a=>{e.append("ids",a)}),je(e).then(a=>{a.data.data,V.error("删除成功"),x()}).catch(a=>{}).finally(()=>{c.value=!1})}const F=d(!1);function re(){F.value=!0}const D=d(!1);function pe(){D.value=!0}const M=d(!1),j=d("");function ue(i){M.value=!0,j.value=i.phone}const p=B({pageSizes:[1,10,20,50],pageSize:10,pageNum:1,total:400}),me=i=>{x()},ce=i=>{x()},fe=d(),k=d([]),ge=i=>{k.value=i};return Ce(()=>{x(),T()}),(i,e)=>{const a=Te,u=De,v=Be,g=Re,R=Me,O=Fe,w=$e,S=Le,ve=Ne,be=Ue,ye=Ge,we=Ie,_e=Ve,Y=Ee;return b(),z(H,null,[s("div",Qe,[s("div",Xe,[s("div",null,[e[26]||(e[26]=s("div",{class:"mb-4 px-2 py-2",style:{"border-bottom":"1px dashed #ccc"}}," 联系人素材 ",-1)),s("div",null,[s("div",et,[l(u,{modelValue:t(I),"onUpdate:modelValue":e[0]||(e[0]=o=>q(I)?I.value=o:null),style:{"max-width":"230px"},placeholder:"Please input",class:"input-with-select"},{append:n(()=>[l(a,{type:"primary",plain:"",onClick:x},{default:n(()=>[l(t(_),{icon:"mingcute:search-fill",style:{"font-size":"22px"}})]),_:1})]),_:1},8,["modelValue"])]),s("div",tt,[l(a,{type:"primary",plain:"",class:"w-full overflow-hidden text-overflow-ellipsis",onClick:e[1]||(e[1]=o=>te("add"))},{default:n(()=>[l(t(_),{icon:"tabler:message-plus",style:{"font-size":"22px"}}),e[18]||(e[18]=s("span",{class:"hidden lg:inline-block ml-2"},"新增联系人",-1)),e[19]||(e[19]=s("span",{class:"hidden md:inline-block lg:hidden ml-2"},"新增联系人",-1))]),_:1})]),s("div",lt,[l(v,{"confirm-button-text":"Yes","cancel-button-text":"No","icon-color":"#626AEF",title:i.$t("userMarger.user.areSureDel"),onConfirm:e[2]||(e[2]=o=>de()),onCancel:ie},{reference:n(()=>[l(a,{type:"danger",plain:"",class:"w-full overflow-hidden text-overflow-ellipsis"},{default:n(()=>[l(t(_),{icon:"material-symbols:delete-outline",style:{"font-size":"22px"}}),e[20]||(e[20]=s("span",{class:"hidden lg:inline-block ml-2"},"删除联系人",-1)),e[21]||(e[21]=s("span",{class:"hidden md:inline-block lg:hidden ml-2"},"删除联系人",-1))]),_:1})]),_:1},8,["title"])]),s("div",ot,[l(a,{type:"primary",plain:"",class:"w-full overflow-hidden text-overflow-ellipsis",onClick:pe,disabled:t(k).length===0},{default:n(()=>[l(t(_),{icon:"tabler:message-plus",style:{"font-size":"22px"}}),e[22]||(e[22]=s("span",{class:"hidden lg:inline-block ml-2"},"一键群发",-1)),e[23]||(e[23]=s("span",{class:"hidden md:inline-block lg:hidden ml-2"},"一键群发",-1))]),_:1},8,["disabled"])]),s("div",at,[l(a,{type:"primary",plain:"",class:"w-full overflow-hidden text-overflow-ellipsis",onClick:re,disabled:t(k).length===0},{default:n(()=>[l(t(_),{icon:"fluent:contact-card-link-20-filled",style:{"font-size":"22px"}}),e[24]||(e[24]=s("span",{class:"hidden lg:inline-block ml-2"},"导入为联系人",-1)),e[25]||(e[25]=s("span",{class:"hidden md:inline-block lg:hidden ml-2"},"导入为联系人",-1))]),_:1},8,["disabled"])])])]),l(He,{typeId:1})]),$((b(),z("div",nt,[s("div",null,[s("div",st,[$((b(),L(R,{ref_key:"tableRef",ref:fe,data:t(A),style:{width:"100%"},border:"",onSelectionChange:ge,height:"full"},{default:n(()=>[l(g,{type:"selection",width:"55"}),l(g,{prop:"userName",label:"用户名"}),l(g,{prop:"phone",label:"手机号"}),l(g,{prop:"remarks",label:"备注"}),l(g,{prop:"createTime",label:"联系人创建时间"}),l(g,{prop:"groupId",label:"分组"},{default:n(o=>[s("span",null,ke(Z(o.row.groupId)),1)]),_:1}),l(g,{width:"220"},{header:n(()=>e[27]||(e[27]=[s("div",{class:"must"},[s("span",{class:"red"}),m("操作")],-1)])),default:n(o=>[l(a,{size:"small",type:"warning",plain:"",onClick:he=>ne(o.row,"port")},{default:n(()=>[l(t(_),{icon:"mdi:progress-wrench",style:{"font-size":"18px"}}),e[28]||(e[28]=m(" 修改联系人 "))]),_:2},1032,["onClick"]),l(a,{size:"small",type:"primary",plain:"",onClick:he=>ue(o.row)},{default:n(()=>[l(t(_),{icon:"mdi:progress-wrench",style:{"font-size":"18px"}}),e[29]||(e[29]=m(" 私聊 "))]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[Y,t(c)]])]),s("div",it,[l(O,{"current-page":t(p).pageNum,"onUpdate:currentPage":e[3]||(e[3]=o=>t(p).pageNum=o),"page-size":t(p).pageSize,"onUpdate:pageSize":e[4]||(e[4]=o=>t(p).pageSize=o),"page-sizes":t(p).pageSizes,"onUpdate:pageSizes":e[5]||(e[5]=o=>t(p).pageSizes=o),total:t(p).total,"onUpdate:total":e[6]||(e[6]=o=>t(p).total=o),size:"default",background:!0,layout:"total, sizes, prev, pager, next, jumper","default-current-page":1,onSizeChange:me,onCurrentChange:ce},null,8,["current-page","page-size","page-sizes","total"])])])])),[[Y,t(c)]]),l(_e,{modelValue:t(h),"onUpdate:modelValue":e[14]||(e[14]=o=>q(h)?h.value=o:null),title:t(y)=="port"?"修改联系人":"新增联系人",width:"600"},{footer:n(()=>[s("div",ut,[t(y)=="port"?(b(),z("div",mt,[l(a,{onClick:P},{default:n(()=>e[33]||(e[33]=[m("Cancel")])),_:1}),l(a,{type:"primary",onClick:se},{default:n(()=>e[34]||(e[34]=[m("修改")])),_:1})])):(b(),z("div",ct,[l(a,{onClick:G},{default:n(()=>e[35]||(e[35]=[m("Cancel")])),_:1}),l(a,{type:"primary",onClick:le},{default:n(()=>e[36]||(e[36]=[m("新增")])),_:1})]))])]),default:n(()=>[t(y)=="port"?(b(),L(S,{key:0,inline:!0,model:t(f),class:"demo-form-inline"},{default:n(()=>[l(w,{label:"联系人id",prop:"id","label-width":"100px"},{default:n(()=>[l(u,{modelValue:t(f).id,"onUpdate:modelValue":e[7]||(e[7]=o=>t(f).id=o),type:"text",disabled:"",clearable:"",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),l(w,{label:"联系人名称",prop:"userName","label-width":"100px"},{default:n(()=>[l(u,{modelValue:t(f).userName,"onUpdate:modelValue":e[8]||(e[8]=o=>t(f).userName=o),type:"text",placeholder:"输入更改后的名称",clearable:"",style:{width:"240px"}},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])):t(y)=="add"?(b(),L(S,{key:1,inline:!0,model:t(r),class:"demo-form-inline"},{default:n(()=>[l(w,{label:"选择分组",prop:"group","label-width":"100px"},{default:n(()=>[l(be,{modelValue:t(r).group,"onUpdate:modelValue":e[9]||(e[9]=o=>t(r).group=o),placeholder:"选择分组",style:{width:"300px"},filterable:""},{default:n(()=>[(b(!0),z(H,null,Se(t(E),o=>(b(),L(ve,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(w,{label:"素材描述",prop:"remark","label-width":"100px"},{default:n(()=>[l(u,{modelValue:t(r).remark,"onUpdate:modelValue":e[10]||(e[10]=o=>t(r).remark=o),type:"text",clearable:"",style:{width:"300px"}},null,8,["modelValue"])]),_:1}),s("div",dt,[l(ye,{class:"w-1/2 mb-2 pb-2",style:{"border-bottom":"1px solid #ccc"}},{default:n(()=>[l(a,{class:J(["w-1/2",{active:t(C)==="conSend"}]),type:"primary",plain:"",onClick:e[11]||(e[11]=o=>C.value="conSend")},{default:n(()=>e[30]||(e[30]=[m(" 手动输入 ")])),_:1},8,["class"]),l(a,{class:J(["w-1/2",{active:t(C)==="conList"}]),type:"primary",plain:"",onClick:e[12]||(e[12]=o=>C.value="conList")},{default:n(()=>e[31]||(e[31]=[m(" 导入联系人 ")])),_:1},8,["class"])]),_:1})]),$(s("div",rt,[l(w,{label:"联系人素材",prop:"contact","label-width":"100px"},{default:n(()=>[l(u,{modelValue:t(r).contact,"onUpdate:modelValue":e[13]||(e[13]=o=>t(r).contact=o),rows:8,type:"textarea",placeholder:"注：每行一个联系人",clearable:"",style:{width:"420px"}},null,8,["modelValue"])]),_:1})],512),[[W,t(C)==="conSend"]]),$(s("div",pt,[l(w,{label:"导入联系人","label-width":"100px"},{default:n(()=>[l(we,{ref_key:"uploadRef",ref:N,class:"upload-demo","auto-upload":!1,"on-preview":X,"on-remove":Q,"on-change":ee,multiple:!0,limit:10,drag:"",style:{width:"420px"}},{default:n(()=>[l(t(_),{class:"w-1/2 mx-auto el-icon--upload",icon:"uiw:cloud-upload",style:{"font-size":"50px"}}),e[32]||(e[32]=s("div",{class:"el-upload__text"},[m(" 请"),s("em",null,"点击或拖拽"),m("上传"),s("em",null,"`.txt`"),m("文件 ")],-1))]),_:1},512)]),_:1})],512),[[W,t(C)==="conList"]])]),_:1},8,["model"])):ze("",!0)]),_:1},8,["modelValue","title"])]),l(We,{show:t(F),multipleSelect:t(k),"onUp:show":e[15]||(e[15]=o=>F.value=o)},null,8,["show","multipleSelect"]),l(Je,{show:t(D),multipleSelect:t(k),"onUp:show":e[16]||(e[16]=o=>D.value=o)},null,8,["show","multipleSelect"]),l(Ze,{show:t(M),phone:t(j),"onUp:show":e[17]||(e[17]=o=>M.value=o)},null,8,["show","phone"])],64)}}}),Ht=Ke(ft,[["__scopeId","data-v-39b9e215"]]);export{Ht as default};
