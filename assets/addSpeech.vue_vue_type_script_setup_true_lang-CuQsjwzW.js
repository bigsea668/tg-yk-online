import{d as L,z as R,y as E,t as x,b as _,a4 as o,i as t,o as s,Y as y,Z as m,h as w,e as p,J as I,a3 as S,a0 as j,aa as v}from"./index-DZ6OSBbF.js";import{b as z,c as A,e as J}from"./el-select-B8Gl4LcX.js";import{E as P}from"./el-button-qQztgBCg.js";import{E as W}from"./el-upload-av4bLNwW.js";import{E as Y,a as Z}from"./el-form-item-DTrh179H.js";import{E as $}from"./el-input-y9r0mkIm.js";import"./el-tag-2XB_r1MG.js";import"./el-scrollbar-BlCa7Rp_.js";import{I as H}from"./iconify-BPuWgN66.js";import{k as K,l as Q}from"./material-HQDG54q8.js";const X={class:"dialog-footer"},ee={key:0},le={key:1},me=L({__name:"addSpeech",props:{show:{type:Boolean,required:!0},formType:{type:String,required:!0},groupOptions:{type:Object,required:!0},modId:{type:Number,required:!1}},emits:["up:show","up:formType","up:speech","up:loading"],setup(C,{emit:T}){const r=C,u=T;R(()=>r.show,()=>{r.show});const n=E({group:"快捷消息分组",speech:""});function F(){u("up:loading",!0);const a=new FormData;f.value.forEach((e,i)=>{e instanceof File?a.append("file",e):console.error(`Invalid file object at index ${i}:`,e)}),n.group=="快捷消息分组"?a.append("GroupId",String(0)):a.append("GroupId",String(n.group)),a.append("Value",n.speech),K(a).then(e=>{e.data,u("up:speech"),v.success("新增话术成功")}).catch(e=>{v.error("新增话术失败")}).finally(()=>{u("up:loading",!1)}),c()}function c(){u("up:show",!1),u("up:formType",""),f.value=[],n.speech="",n.group="快捷消息分组"}const U=x(),f=x([]),B=x(!1);function N(a,e){f.value=[]}const G=a=>{},M=(a,e)=>{const i=a.raw;if(!(i.type==="text/plain"||i.name.endsWith(".txt")))return v({message:"文件类型错误,请上传txt文件",type:"error"}),B.value=!1;f.value.push(i)},d=E({group:"快捷消息分组",speech:""});function O(){u("up:loading",!0);const a={id:{id:r.modId},GroupId:d.group==="快捷消息分组"?0:Number(d.group),Msg:d.speech};Q(a).then(e=>{u("up:speech")}).catch(e=>{}).finally(()=>{u("up:loading",!1)}),c()}return(a,e)=>{const i=A,b=J,h=Y,V=$,k=Z,q=W,g=P,D=z;return s(),_("div",null,[o(D,{modelValue:r.show,"onUpdate:modelValue":e[4]||(e[4]=l=>r.show=l),title:r.formType=="port"?"修改话术":"新增话术",width:"600",onClose:c},{footer:t(()=>[y("div",X,[r.formType=="port"?(s(),_("div",ee,[o(g,{onClick:c},{default:t(()=>e[6]||(e[6]=[m("Cancel")])),_:1}),o(g,{type:"primary",onClick:O},{default:t(()=>e[7]||(e[7]=[m("修改")])),_:1})])):(s(),_("div",le,[o(g,{onClick:c},{default:t(()=>e[8]||(e[8]=[m("Cancel")])),_:1}),o(g,{type:"primary",onClick:F},{default:t(()=>e[9]||(e[9]=[m("新增")])),_:1})]))])]),default:t(()=>[r.formType=="port"?(s(),w(k,{key:0,inline:!0,model:p(d),class:"demo-form-inline"},{default:t(()=>[o(h,{label:"选择分组",prop:"group","label-width":"100px"},{default:t(()=>[o(b,{modelValue:p(d).group,"onUpdate:modelValue":e[0]||(e[0]=l=>p(d).group=l),placeholder:"选择分组",style:{width:"300px"},filterable:""},{default:t(()=>[(s(!0),_(I,null,S(r.groupOptions,l=>(s(),w(i,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(h,{label:"话术素材",prop:"speech","label-width":"100px"},{default:t(()=>[o(V,{modelValue:p(d).speech,"onUpdate:modelValue":e[1]||(e[1]=l=>p(d).speech=l),rows:4,type:"textarea",placeholder:"输入话术内容",clearable:"",style:{width:"300px"}},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])):r.formType=="add"?(s(),w(k,{key:1,inline:!0,model:p(n),class:"demo-form-inline"},{default:t(()=>[o(h,{label:"选择分组",prop:"group","label-width":"100px"},{default:t(()=>[o(b,{modelValue:p(n).group,"onUpdate:modelValue":e[2]||(e[2]=l=>p(n).group=l),placeholder:"选择分组",style:{width:"300px"},filterable:""},{default:t(()=>[(s(!0),_(I,null,S(r.groupOptions,l=>(s(),w(i,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(h,{label:"话术素材",prop:"speech","label-width":"100px"},{default:t(()=>[o(V,{modelValue:p(n).speech,"onUpdate:modelValue":e[3]||(e[3]=l=>p(n).speech=l),rows:7,type:"textarea",placeholder:"注：每行一个话术",clearable:"",style:{width:"420px"}},null,8,["modelValue"])]),_:1}),o(h,{label:"导入话术","label-width":"100px"},{default:t(()=>[o(q,{ref_key:"uploadRef",ref:U,class:"upload-demo","file-list":p(f),"auto-upload":!1,"on-preview":G,"on-remove":N,"on-change":M,multiple:!0,limit:10,drag:"",style:{width:"420px"}},{default:t(()=>[o(p(H),{class:"w-1/2 mx-auto el-icon--upload",icon:"uiw:cloud-upload",style:{"font-size":"50px"}}),e[5]||(e[5]=y("div",{class:"el-upload__text"},[m(" 请"),y("em",null,"点击或拖拽"),m("上传"),y("em",null,"`.txt`"),m("文件 ")],-1))]),_:1},8,["file-list"])]),_:1})]),_:1},8,["model"])):j("",!0)]),_:1},8,["modelValue","title"])])}}});export{me as _};
