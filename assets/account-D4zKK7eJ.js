import{aC as e}from"./index-DNkZCZKw.js";const n=t=>e({url:"/Account/GetAccountsList",method:"get",params:t}),r=t=>e({url:"/Account/UpdateAccountProfile",method:"put",data:t,headers:{"Content-Type":"multipart/form-data"}}),u=t=>e({url:"/Account/DistributionAccounts",method:"put",data:t.data,params:{...t.id},headers:{"Content-Type":"application/json"}}),a=t=>e({url:"/Account/SetUpProxyAccounts",method:"put",data:t.data,params:{...t.id},headers:{"Content-Type":"application/json"}}),c=t=>e({url:"/Account/DeleteAccounts",method:"delete",data:t,headers:{"Content-Type":"application/json"}}),s=t=>e({url:"/Account/OnlineAccounts",method:"post",data:t,headers:{"Content-Type":"multipart/form-data"}}),p=t=>e({url:"/Account/OfflineAccounts",method:"post",data:t,headers:{"Content-Type":"multipart/form-data"}}),d=t=>e({url:"/Account/ImportAccounts",method:"post",data:t,headers:{"Content-Type":"multipart/form-data"}}),l=t=>e({url:"/AccountSubset/GetSubSetList",method:"get",params:t}),m=t=>e({url:"/AccountSubset/AddSubset",method:"post",data:t,headers:{"Content-Type":"multipart/form-data"}}),i=t=>e({url:"/AccountSubset/DeleteSubset",method:"delete",data:t,headers:{"Content-Type":"multipart/form-data"}});export{m as a,n as b,s as c,i as d,p as e,c as f,l as g,a as h,d as i,u as j,r as u};
