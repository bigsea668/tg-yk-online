import{d as me,t as p,y as D,B as fe,X as ge,b,Y as i,a4 as l,i as s,e as a,a9 as G,H as L,h as T,T as _e,J as B,o as m,$ as z,Z as f,a0 as M,a3 as ve,aa as F}from"./index-2a2bri-d.js";import{b as he,v as be,c as ye,e as we}from"./el-select-Dz2KJnwc.js";import{E as xe,a as ze}from"./el-form-item-DzHjpJCN.js";import{E as ke}from"./el-upload-DvftR1ML.js";import"./el-tag-BySgfF3p.js";import{E as Ce}from"./el-scrollbar-CXPZY7Bs.js";import{E as Ee}from"./el-pagination-9PnmAPxJ.js";import{E as Se}from"./el-input-DOfSdrh_.js";import{a as Fe,E as Ie}from"./el-table-column-BN4sCq-k.js";import"./el-checkbox-CMe2Q5Jf.js";import"./el-tooltip-l0sNRNKZ.js";import{E as Ve}from"./el-popover-C08XbDAN.js";import{E as Ne}from"./el-button-D_fjb_vJ.js";import{I as v}from"./iconify-BO38E5Xh.js";import{d as Pe,c as $e,o as Ue,p as De}from"./material-CaO01XEC.js";import{_ as Ge}from"./group.vue_vue_type_script_setup_true_lang-C1jwDhw7.js";import{_ as Le}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-rGSOovlF.js";import"./index-3_ES5SxW.js";import"./refs-CTMQh0bL.js";import"./_Uint8Array-BA5rhpUc.js";import"./_initCloneObject-BSnmcygP.js";const Te={class:"grid grid-cols-12 gap-4 mt-1"},Be={class:"col-span-2 bg-white rounded-md p-4"},Me={class:"mr-4",style:{width:"100%"}},Re={class:"mt-2"},je={class:"col-span-10 bg-white rounded-md p-4"},Oe={style:{height:"82.5vh",overflow:"auto"}},Ae=["onClick"],Ye={key:0},He=["href"],Je={class:"mt-4"},Xe={class:"mx-auto max-w-full"},Ze=["src"],qe=me({__name:"file",setup(Ke){const u=p(!1),y=p([{value:0,label:"默认分组"}]);function I(){Pe({type:0}).then(e=>{try{y.value=e.data.data.data.map(n=>({value:n.id,label:n.name})),y.value.unshift({value:0,label:"默认分组"})}catch(n){console.log(n)}}).catch(e=>{console.log("获取分组失败",e)})}function R(t){const e=y.value.find(n=>n.value==t);return e?e.label:"未知分组"}const g=p(!1),d=D({group:"默认分组",desc:""});function j(){g.value=!0,I()}function O(){u.value=!0;const t=new FormData;h.value.forEach(e=>{e instanceof File&&t.append("Files",e)}),d.group=="默认分组"?t.append("GroupId",String(0)):t.append("GroupId",String(d.group)),t.append("Description",d.desc),Ue(t).then(e=>{console.log("上传文件成功",e.data.data),g.value=!1,F({message:"上传文件成功",type:"success"}),_()}).catch(e=>{console.log("上传文件失败",e)}).finally(()=>{u.value=!1}),k()}function k(){C.value.clearFiles(),d.desc="",d.group="默认分组",g.value=!1,h.value=[]}const C=p(),h=p([]);function A(t,e){C.value.clearFiles(),h.value=[]}const Y=t=>{console.log("文件 ",t)},H=(t,e)=>{const n=t.raw;h.value.push(n)},w=p(""),V=p([]);function _(){u.value=!0;const t={GroupId:d.group==="默认分组"?null:Number(d.group),Like:w.value,pageNum:r.pageNum,pageSize:r.pageSize};$e(t).then(e=>{try{V.value=e.data.data.data,r.pageNum=e.data.data.pageNumber,r.pageSize=e.data.data.pageSize,r.total=e.data.data.totalCount}catch(n){console.log(n)}}).catch(e=>{console.log("查询文件失败",e)}).finally(()=>{u.value=!1})}function J(t){u.value=!0;const e={ids:t.id};De(e).then(n=>{F({message:"删除文件成功",type:"error"}),_()}).catch(n=>{console.log("删除文件失败",n)}).finally(()=>{u.value=!1}),N()}const N=()=>{console.log("cancel!")},r=D({pageSizes:[1,10,20,50],pageSize:10,pageNum:1,total:400}),X=t=>{_()},Z=t=>{_()},q=p(),K=p([]),Q=t=>{K.value=t};function W(t){if(t){if(t=="账号异常，文件保存失败！")return"error";const e=t.lastIndexOf(".");if(e!==-1){const n=t.substring(e+1).toLowerCase();return["jpg","jpeg","png","gif","bmp","tiff","webp"].includes(n)?"image":"file"}}}function ee(t){let e="https://tg-worker-files.oss-cn-hongkong.aliyuncs.com/"+t;navigator.clipboard.writeText(e).then(()=>{F({message:"成功复制到剪贴板",type:"success"})}).catch(n=>{console.error("复制文本失败:",n)})}const E=p(!1),P=p(""),le=t=>{P.value=t,E.value=!0},te=()=>{E.value=!1};return fe(()=>{_(),I()}),(t,e)=>{const n=Ne,S=Se,c=Ie,oe=Ce,ae=ge("spen"),ne=Ve,se=Fe,ie=Ee,re=ye,de=we,x=xe,pe=ke,ue=ze,ce=he,$=be;return m(),b(B,null,[i("div",Te,[i("div",Be,[i("div",null,[e[11]||(e[11]=i("div",{class:"mb-4 px-2 py-2",style:{"border-bottom":"1px dashed #ccc"}}," 文件素材 ",-1)),i("div",null,[i("div",Me,[l(S,{modelValue:a(w),"onUpdate:modelValue":e[0]||(e[0]=o=>G(w)?w.value=o:null),style:{"max-width":"230px"},placeholder:"Please input",class:"input-with-select"},{append:s(()=>[l(n,{type:"primary",plain:"",onClick:_},{default:s(()=>[l(a(v),{icon:"mingcute:search-fill",style:{"font-size":"22px"}})]),_:1})]),_:1},8,["modelValue"])]),i("div",Re,[l(n,{type:"primary",plain:"",class:"w-full overflow-hidden text-overflow-ellipsis",onClick:e[1]||(e[1]=o=>j())},{default:s(()=>[l(a(v),{icon:"tabler:message-plus",style:{"font-size":"22px"}}),e[9]||(e[9]=i("span",{class:"hidden lg:inline-block ml-2"},"新增文件",-1)),e[10]||(e[10]=i("span",{class:"hidden md:inline-block lg:hidden ml-2"},"新增文件",-1))]),_:1})])])]),l(Ge,{typeId:0})]),L((m(),b("div",je,[i("div",null,[i("div",Oe,[L((m(),T(se,{ref_key:"tableRef",ref:q,data:a(V),style:{width:"100%"},border:"",onSelectionChange:Q,height:"full"},{default:s(()=>[l(c,{type:"selection",width:"55"}),l(c,{prop:"name",label:"文件名"}),l(c,{prop:"description",label:"文件描述"}),l(c,{prop:"filePath",label:"文件路径"},{default:s(o=>[l(oe,{class:"box-item",effect:"dark",content:"点击复制文件路径",placement:"top"},{default:s(()=>[i("div",{class:"cursor-pointer",onClick:U=>ee(o.row.filePath)},z(o.row.filePath),9,Ae)]),_:2},1024)]),_:1}),l(c,{prop:"groupId",label:"分组"},{default:s(o=>[i("span",null,z(R(o.row.groupId)),1)]),_:1}),l(c,{prop:"createTime",label:"文件创建时间"}),l(c,null,{header:s(()=>e[12]||(e[12]=[i("div",{class:"must"},[i("span",{class:"red"}),f("操作")],-1)])),default:s(o=>[W(o.row.filePath)=="image"?(m(),b("div",Ye,[l(n,{type:"primary",size:"small",plain:""},{default:s(()=>[l(a(v),{icon:"mdi-light:delete",style:{"font-size":"18px"}}),l(ae,{onClick:U=>le(`https://tg-worker-files.oss-cn-hongkong.aliyuncs.com/${o.row.filePath}`)},{default:s(()=>e[13]||(e[13]=[f(" 预览文件 ")])),_:2},1032,["onClick"])]),_:2},1024)])):M("",!0),l(n,{type:"primary",size:"small",plain:""},{default:s(()=>[l(a(v),{icon:"mdi-light:delete",style:{"font-size":"18px"}}),i("a",{href:`https://tg-worker-files.oss-cn-hongkong.aliyuncs.com/${o.row.filePath}`,target:"_blank"},"下载文件",8,He)]),_:2},1024),l(ne,{"confirm-button-text":"Yes","cancel-button-text":"No","icon-color":"#626AEF",title:t.$t("userMarger.user.areSureDel"),onConfirm:U=>J(o.row),onCancel:N},{reference:s(()=>[l(n,{size:"small",type:"danger",plain:""},{default:s(()=>[l(a(v),{icon:"mdi-light:delete",style:{"font-size":"18px"}}),e[14]||(e[14]=f(" 删除文件 "))]),_:1})]),_:2},1032,["title","onConfirm"])]),_:1})]),_:1},8,["data"])),[[$,a(u)]])]),i("div",Je,[l(ie,{"current-page":a(r).pageNum,"onUpdate:currentPage":e[2]||(e[2]=o=>a(r).pageNum=o),"page-size":a(r).pageSize,"onUpdate:pageSize":e[3]||(e[3]=o=>a(r).pageSize=o),"page-sizes":a(r).pageSizes,"onUpdate:pageSizes":e[4]||(e[4]=o=>a(r).pageSizes=o),total:a(r).total,"onUpdate:total":e[5]||(e[5]=o=>a(r).total=o),size:"default",background:!0,layout:"total, sizes, prev, pager, next, jumper","default-current-page":1,onSizeChange:X,onCurrentChange:Z},null,8,["current-page","page-size","page-sizes","total"])])])])),[[$,a(u)]]),l(ce,{modelValue:a(g),"onUpdate:modelValue":e[8]||(e[8]=o=>G(g)?g.value=o:null),title:"新增文件",width:"600","destroy-on-close":"",onClose:k},{default:s(()=>[l(ue,{inline:!0,model:a(d),class:"demo-form-inline"},{default:s(()=>[l(x,{label:"选择分组",prop:"group","label-width":"100px"},{default:s(()=>[l(de,{modelValue:a(d).group,"onUpdate:modelValue":e[6]||(e[6]=o=>a(d).group=o),placeholder:"选择分组",style:{width:"300px"},filterable:""},{default:s(()=>[(m(!0),b(B,null,ve(a(y),o=>(m(),T(re,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(x,{label:"文件描述",prop:"desc","label-width":"100px"},{default:s(()=>[l(S,{modelValue:a(d).desc,"onUpdate:modelValue":e[7]||(e[7]=o=>a(d).desc=o),placeholder:"请输入文件描述",style:{width:"300px"}},null,8,["modelValue"])]),_:1}),l(x,{label:"导入文件","label-width":"100px"},{default:s(()=>[l(pe,{ref_key:"uploadRef",ref:C,class:"upload-demo","file-list":a(h),"auto-upload":!1,"on-preview":Y,"on-remove":A,"on-change":H,multiple:!0,limit:10,drag:"",style:{width:"420px"}},{default:s(()=>[l(a(v),{class:"w-1/2 mx-auto el-icon--upload",icon:"uiw:cloud-upload",style:{"font-size":"50px"}}),e[15]||(e[15]=i("div",{class:"el-upload__text"},[f(" 请"),i("em",null,"点击或拖拽"),f("上传文件 ")],-1))]),_:1},8,["file-list"])]),_:1}),l(x,{class:"ml-96"},{default:s(()=>[l(n,{onClick:k},{default:s(()=>[f(z(t.$t("btn.cancel")),1)]),_:1}),l(n,{type:"primary",onClick:O},{default:s(()=>[f(z(t.$t("btn.confirm")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])]),l(_e,{name:"zoom-fade",mode:"out-in"},{default:s(()=>[a(E)?(m(),b("div",{key:0,class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",style:{"z-index":"100"},onClick:te},[i("div",Xe,[i("img",{src:a(P),class:"object-cover w-full"},null,8,Ze)])])):M("",!0)]),_:1})],64)}}}),yl=Le(qe,[["__scopeId","data-v-58097393"]]);export{yl as default};