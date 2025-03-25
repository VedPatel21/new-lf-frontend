"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[296],{296:(e,a,s)=>{s.r(a),s.d(a,{default:()=>t});var r=s(43),l=s(579);const t=()=>{const[e,a]=(0,r.useState)({name:"",email:"",subject:"",message:""}),[s,t]=(0,r.useState)({}),[i,n]=(0,r.useState)(!1),c=e=>{const{name:s,value:r}=e.target;a((e=>({...e,[s]:r})))};return(0,l.jsxs)("article",{className:"contact-page","aria-label":"Contact Us",children:[(0,l.jsx)("header",{className:"contact-page__header fade-in-up",children:(0,l.jsx)("h2",{children:"Contact Us"})}),(0,l.jsxs)("section",{className:"contact-form-section fade-in-up","aria-label":"Contact Form",children:[i&&(0,l.jsx)("p",{className:"success-message",children:"Your message has been sent successfully!"}),(0,l.jsxs)("form",{className:"contact-form",onSubmit:s=>{s.preventDefault();const r=(()=>{const a={};return e.name.trim()||(a.name="Name is required."),e.email.trim()?/\S+@\S+\.\S+/.test(e.email)||(a.email="Please enter a valid email."):a.email="Email is required.",e.subject.trim()||(a.subject="Subject is required."),e.message.trim()||(a.message="Message is required."),a})();0===Object.keys(r).length?(console.log("Contact form submitted:",e),n(!0),setTimeout((()=>{a({name:"",email:"",subject:"",message:""}),n(!1)}),3e3)):t(r)},noValidate:!0,children:[(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{htmlFor:"name",children:"Name:"}),(0,l.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,onChange:c,placeholder:"Enter your name",required:!0}),s.name&&(0,l.jsx)("span",{className:"error",children:s.name})]}),(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{htmlFor:"email",children:"Email:"}),(0,l.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:c,placeholder:"Enter your email",required:!0}),s.email&&(0,l.jsx)("span",{className:"error",children:s.email})]}),(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{htmlFor:"subject",children:"Subject:"}),(0,l.jsx)("input",{type:"text",id:"subject",name:"subject",value:e.subject,onChange:c,placeholder:"Subject",required:!0}),s.subject&&(0,l.jsx)("span",{className:"error",children:s.subject})]}),(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{htmlFor:"message",children:"Message:"}),(0,l.jsx)("textarea",{id:"message",name:"message",value:e.message,onChange:c,placeholder:"Your message here...",required:!0}),s.message&&(0,l.jsx)("span",{className:"error",children:s.message})]}),(0,l.jsx)("button",{type:"submit",className:"btn submit-btn",children:"Send Message"})]})]}),(0,l.jsxs)("section",{className:"contact-details-section fade-in-up","aria-label":"Contact Details",children:[(0,l.jsxs)("div",{className:"contact-details",children:[(0,l.jsx)("h3",{children:"Our Contact Information"}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Address:"})," 123 Main Street, City, State, ZIP"]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Phone:"})," ",(0,l.jsx)("a",{href:"tel:1234567890",children:"123-456-7890"})]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Email:"})," ",(0,l.jsx)("a",{href:"mailto:info@littleflowers.edu",children:"info@littleflowers.edu"})]})]}),(0,l.jsx)("div",{className:"map-container fade-in-up",children:(0,l.jsx)("iframe",{title:"Location Map",src:"https://www.google.com/maps/embed?pb=...",frameBorder:"0",allowFullScreen:!0})}),(0,l.jsxs)("div",{className:"social-media fade-in-up",children:[(0,l.jsx)("a",{href:"#facebook","aria-label":"Facebook",children:(0,l.jsx)("i",{className:"fab fa-facebook-f"})}),(0,l.jsx)("a",{href:"#twitter","aria-label":"Twitter",children:(0,l.jsx)("i",{className:"fab fa-twitter"})}),(0,l.jsx)("a",{href:"#instagram","aria-label":"Instagram",children:(0,l.jsx)("i",{className:"fab fa-instagram"})})]})]})]})}}}]);
//# sourceMappingURL=296.c499b5d7.chunk.js.map