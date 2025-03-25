"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[796],{796:(e,a,s)=>{s.r(a),s.d(a,{default:()=>n});var t=s(43),i=s(579);const n=()=>{const[e,a]=(0,t.useState)(1),[s,n]=(0,t.useState)({childName:"",dateOfBirth:"",fullName:"",email:"",phone:"",documents:null,message:""}),[l,r]=(0,t.useState)({}),[d,c]=(0,t.useState)(""),[o,m]=(0,t.useState)(!1),h=[{grade:"Junior K.G.",start:new Date(2020,5,2),end:new Date(2021,5,1)},{grade:"Senior K.G.",start:new Date(2019,5,2),end:new Date(2020,5,1)},{grade:"Balvatika",start:new Date(2018,5,2),end:new Date(2019,5,1)},{grade:"1",start:new Date(2017,5,2),end:new Date(2018,5,1)},{grade:"2",start:new Date(2016,5,2),end:new Date(2017,5,1)},{grade:"3",start:new Date(2015,5,2),end:new Date(2016,5,1)},{grade:"4",start:new Date(2014,5,2),end:new Date(2015,5,1)},{grade:"5",start:new Date(2013,5,2),end:new Date(2014,5,1)},{grade:"6",start:new Date(2012,5,2),end:new Date(2013,5,1)},{grade:"7",start:new Date(2011,5,2),end:new Date(2012,5,1)},{grade:"8",start:new Date(2010,5,2),end:new Date(2011,5,1)}],u=()=>{let a={};return 1===e&&(s.childName.trim()||(a.childName="Child Name is required."),s.dateOfBirth||(a.dateOfBirth="Child's Date of Birth is required.")),2===e&&(s.fullName.trim()||(a.fullName="Full Name is required."),s.email.trim()?/\S+@\S+\.\S+/.test(s.email)||(a.email="Email is invalid."):a.email="Email is required.",s.phone.trim()||(a.phone="Phone number is required.")),a},p=e=>{const{name:a,value:t,files:i}=e.target;n(i?{...s,[a]:i[0]}:{...s,[a]:t})},x=()=>{const e=u();0===Object.keys(e).length?(r({}),a((e=>e+1))):r(e)},f=()=>{a((e=>e-1))};return(0,i.jsxs)("article",{className:"admissions-page","aria-label":"Admissions",children:[(0,i.jsx)("header",{children:(0,i.jsx)("h2",{children:"Admissions"})}),(0,i.jsxs)("section",{className:"process fade-in-up",children:[(0,i.jsx)("h3",{children:"Admission Process"}),(0,i.jsxs)("ol",{children:[(0,i.jsx)("li",{children:"Review eligibility criteria and required documents."}),(0,i.jsx)("li",{children:"Fill out the online application form below in multiple steps."}),(0,i.jsx)("li",{children:"Submit your application before the deadline."})]})]}),(0,i.jsxs)("div",{className:"progress-bar",children:[(0,i.jsx)("div",{className:"progress-step "+(e>=1?"active":""),children:"1"}),(0,i.jsx)("div",{className:"progress-step "+(e>=2?"active":""),children:"2"}),(0,i.jsx)("div",{className:"progress-step "+(e>=3?"active":""),children:"3"})]}),1===e&&(0,i.jsxs)("section",{className:"eligibility-check fade-in-up",children:[(0,i.jsx)("h3",{children:"Child Information"}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"childName",children:"Child's Name:"}),(0,i.jsx)("input",{type:"text",name:"childName",id:"childName",value:s.childName,onChange:p}),l.childName&&(0,i.jsx)("span",{className:"error",children:l.childName})]}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"dateOfBirth",children:"Child's Date of Birth:"}),(0,i.jsx)("input",{type:"date",name:"dateOfBirth",id:"dateOfBirth",value:s.dateOfBirth,onChange:p}),l.dateOfBirth&&(0,i.jsx)("span",{className:"error",children:l.dateOfBirth})]}),(0,i.jsx)("button",{type:"button",onClick:()=>{if(c(""),!s.dateOfBirth)return void c("Please enter the child\u2019s date of birth.");const e=new Date(s.dateOfBirth);let a=!1;for(let{grade:s,start:t,end:i}of h)if(e>=t&&e<=i){c(`Your child is eligible for admission in ${s}.`),a=!0;break}a||c("Sorry, your child does not meet the admission criteria for the 2024-25 entry.")},className:"btn eligibility-btn",children:"Check Eligibility"}),d&&(0,i.jsx)("p",{className:"eligibility-result",children:d}),(0,i.jsx)("button",{type:"button",onClick:x,className:"btn next-btn",children:"Next"})]}),2===e&&(0,i.jsxs)("section",{className:"parent-info fade-in-up",children:[(0,i.jsx)("h3",{children:"Parent/Guardian Information"}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"fullName",children:"Full Name:"}),(0,i.jsx)("input",{type:"text",name:"fullName",id:"fullName",value:s.fullName,onChange:p,required:!0}),l.fullName&&(0,i.jsx)("span",{className:"error",children:l.fullName})]}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"email",children:"Email:"}),(0,i.jsx)("input",{type:"email",name:"email",id:"email",value:s.email,onChange:p,required:!0}),l.email&&(0,i.jsx)("span",{className:"error",children:l.email})]}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"phone",children:"Phone Number:"}),(0,i.jsx)("input",{type:"tel",name:"phone",id:"phone",value:s.phone,onChange:p,required:!0}),l.phone&&(0,i.jsx)("span",{className:"error",children:l.phone})]}),(0,i.jsxs)("div",{className:"step-navigation",children:[(0,i.jsx)("button",{type:"button",onClick:f,className:"btn back-btn",children:"Back"}),(0,i.jsx)("button",{type:"button",onClick:x,className:"btn next-btn",children:"Next"})]})]}),3===e&&(0,i.jsxs)("section",{className:"documents-comments fade-in-up",children:[(0,i.jsx)("h3",{children:"Upload Documents & Additional Comments"}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"documents",children:"Upload Documents:"}),(0,i.jsx)("input",{type:"file",name:"documents",id:"documents",onChange:p,accept:".pdf,.doc,.docx,.jpg,.png"})]}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"message",children:"Message/Comments:"}),(0,i.jsx)("textarea",{name:"message",id:"message",value:s.message,onChange:p})]}),(0,i.jsxs)("div",{className:"step-navigation",children:[(0,i.jsx)("button",{type:"button",onClick:f,className:"btn back-btn",children:"Back"}),(0,i.jsx)("button",{type:"submit",onClick:e=>{e.preventDefault();const t=u();0===Object.keys(t).length?(console.log("Form submitted",s),m(!0),setTimeout((()=>{n({childName:"",dateOfBirth:"",fullName:"",email:"",phone:"",documents:null,message:""}),m(!1),a(1)}),3e3)):r(t)},className:"btn submit-btn",children:"Submit Application"})]})]}),o&&(0,i.jsx)("p",{className:"success-message fade-in",children:"Your application has been submitted successfully!"}),(0,i.jsxs)("section",{className:"faqs fade-in-up",children:[(0,i.jsx)("h3",{children:"FAQs"}),(0,i.jsxs)("p",{children:["For any queries regarding admissions, please contact us at"," ",(0,i.jsx)("a",{href:"mailto:admissions@littleflowers.edu",children:"admissions@littleflowers.edu"})]})]})]})}}}]);
//# sourceMappingURL=796.480dab7f.chunk.js.map