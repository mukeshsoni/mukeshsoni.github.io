import{_ as r}from"./preload-helper.41c905a7.js";const a=async({params:t})=>{const{slug:o}=t;try{return{content:(await r(()=>import(`/src/routes/blog/post-${o}.md`),[],import.meta.url)).default}}catch{return{error:"Could not load page"}}},s=Object.freeze(Object.defineProperty({__proto__:null,load:a},Symbol.toStringTag,{value:"Module"}));export{s as _,a as l};
