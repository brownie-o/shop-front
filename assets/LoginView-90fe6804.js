import{X as x,Y as S,Z as B,a0 as k,a2 as C,a3 as r,ab as y,c as e,a7 as a,ao as F,ap as m,J as M,a8 as N,an as U}from"./index-1e9d335e.js";import{c as q,a as i,u as P,d,V as R}from"./index.esm-e0fc72d5.js";import{V as T}from"./VContainer-8fa2e4a4.js";import{V as p}from"./VCol-302db172.js";import{V as $}from"./VDivider-0058dc7f.js";import{V as A}from"./VRow-ed1aa24c.js";const D=U("h1",null,"登入",-1),E={__name:"LoginView",setup(J){const{api:V}=y(),f=x(),c=S(),g=B(),b=q({account:i().required("帳號為必填欄位").min(4,"使用者帳號長度不符").max(20,"使用者帳號長度不符"),password:i().required("密碼為必填欄位").min(4,"密碼長度不符").max(20,"密碼長度不符")}),{handleSubmit:w,isSubmitting:h}=P({validationSchema:b}),l=d("account"),n=d("password"),v=w(async u=>{var o,s;try{const{data:t}=await V.post("/users/login",{account:u.account,password:u.password});g.login(t.result),c({text:"登入成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",loaction:"bottom"}}),f.push("/")}catch(t){console.log(t);let _=((s=(o=t==null?void 0:t.response)==null?void 0:o.data)==null?void 0:s.message)||"發生錯誤，請稍後再試";c({text:_,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return(u,o)=>(k(),C(T,null,{default:r(()=>[e(A,null,{default:r(()=>[e(p,{cols:"12"},{default:r(()=>[D]),_:1}),e($),e(p,{cols:"12"},{default:r(()=>[e(R,{disabled:a(h),onSubmit:F(a(v),["prevent"])},{default:r(()=>[e(m,{label:"帳號",minlength:"4",maxlength:"20",counter:"",modelValue:a(l).value.value,"onUpdate:modelValue":o[0]||(o[0]=s=>a(l).value.value=s),"error-messages":a(l).errorMessage.value},null,8,["modelValue","error-messages"]),e(m,{label:"密碼",type:"password",minlength:"4",maxlength:"20",counter:"",modelValue:a(n).value.value,"onUpdate:modelValue":o[1]||(o[1]=s=>a(n).value.value=s),"error-messages":a(n).errorMessage.value},null,8,["modelValue","error-messages"]),e(M,{type:"submit",color:"green"},{default:r(()=>[N("登入")]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1}))}};export{E as default};
