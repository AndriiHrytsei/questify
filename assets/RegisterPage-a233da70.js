import{a as m,b as g,j as e,c,d as l}from"./index-3c962f52.js";import{q as u,W as d}from"./index.module-49a34cd2.js";import"./index-b5adbd9f.js";const p="_registerBox_1ofnq_1",h="_authHeading_1ofnq_8",x="_registerForm_1ofnq_15",_="_registerSubmit_1ofnq_38",j="_goToSignIn_1ofnq_51",s={registerBox:p,authHeading:h,registerForm:x,registerSubmit:_,goToSignIn:j},S=()=>{const i=m(),n=g(),a=JSON.parse(localStorage.getItem("userName")),o=t=>{t.preventDefault();const r=t.currentTarget;i(l({email:r.elements.email.value,password:r.elements.password.value})),r.reset(),n("/login")};return e.jsxs("section",{className:s.registerBox,children:[e.jsxs("h3",{className:s.authHeading,children:["Welcome, ",a]}),e.jsxs("form",{onSubmit:o,className:s.registerForm,children:[e.jsx("input",{type:"email",name:"email",id:"email",required:!0,placeholder:"Enter your email"}),e.jsx("input",{type:"password",name:"password",id:"password",required:!0,placeholder:"Enter your password",minLength:8,pattern:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"}),e.jsxs("div",{className:s.submit,children:[e.jsx("button",{type:"submit",className:s.registerSubmit,children:"Sign up!"}),e.jsx(c,{to:"/login",className:s.goToSignIn,children:"Sign in"})]})]})]})},q=()=>e.jsxs(u,{children:[e.jsx(d,{children:e.jsx("title",{children:"Register"})}),e.jsx(S,{})]});export{q as default};