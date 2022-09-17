/*! For license information please see 14c0488e.a2601c4b.js.LICENSE.txt */
(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[575],{876:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5158:function(e,t,n){"use strict";n.d(t,{bZ:function(){return i},zx:function(){return u},Zb:function(){return k},W2:function(){return N},l0:function(){return C},$j:function(){return c},Dx:function(){return d}});var r=n(2784),a=n(2779),l=n.n(a),o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var i=function(e){const{color:t,className:n,visible:a=!0}=e,i=o(e,["color","className","visible"]),p=l()(n,`py-1.5 px-3 border rounded bg-${t}-100 text-${t}-800 border-${t}-200`,{"opacity-0":!a});return r.createElement("div",Object.assign({},i,{role:"alert",className:p}))},p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var c=function(e){const{className:t,color:n,inverted:a}=e,o=p(e,["className","color","inverted"]),i=l()(t,"h-6 w-6 flex items-center content-center"),c=l()("animate-spin h-5 w-5 inline ",{[`text-${n}-500`]:!a,[`text-${n}-inverted`]:a});return r.createElement("div",Object.assign({},o,{className:i}),r.createElement("svg",{role:"status",className:c,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 25 25"},r.createElement("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),r.createElement("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})))},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var u=function(e){const{color:t,outline:n,loading:a,disabled:o,children:i,className:p,onClick:u}=e,m=s(e,["color","outline","loading","disabled","children","className","onClick"]),d=l()(p,"py-1.5 px-3 rounded border-2",{[`bg-${t}-500 text-${t}-inverted border-${t}-500`]:!n,[`hover:bg-${t}-600 active:bg-${t}-700`]:!a&&!o&&!n,[`bg-${t}-inverted text-${t}-500 border-${t}-500`]:n,[`hover:bg-${t}-50 active:bg-${t}-100`]:n&&!o&&!a,"font-semibold":n&&!a,"opacity-40 cursor-default":o,"cursor-default":a}),f=(0,r.useCallback)((e=>{a||o||null==u||u(e)}),[a,o,u]);return r.createElement("button",Object.assign({},m,{onClick:f,className:d}),r.createElement("div",{className:"relative"},a&&r.createElement(c,{color:t,inverted:!n,className:"absolute top-0 left-0 right-0 mx-auto"}),r.createElement("div",{className:l()({"opacity-0":a})},i)))},m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var d=function(e){const{as:t="h1",children:n,className:a}=e,o=m(e,["as","children","className"]),i=t,p=l()(a,{"text-4xl":"h1"===t,"text-3xl":"h2"===t,"text-2xl":"h3"===t,"text-xl":"h4"===t,"text-lg":"h5"===t,"text-base":"h6"===t});return r.createElement(i,Object.assign({},o,{className:p}),n)},f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var b=function(e){const{as:t="h3",className:n}=e,a=f(e,["as","className"]);return r.createElement(d,Object.assign({},a,{as:t,className:l()("mb-2",n)}))},y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function g(e){const{className:t}=e,n=y(e,["className"]),a=l()(t,"border border-dark rounded p-4");return r.createElement("div",Object.assign({},n,{className:a}))}g.Title=b;var k=g,O=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var N=function(e){const{children:t,className:n}=e,a=O(e,["children","className"]),o=l()(n,"w-full flex justify-center items-center");return r.createElement("div",Object.assign({},a,{className:o}),r.createElement("div",{className:"xs:max-w-xs md:max-w-md xl:max-w-xl flex-1"},t))},h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const v=(e,t)=>{const{error:n,className:a,onKeyPress:o,onEnter:i}=e,p=h(e,["error","className","onKeyPress","onEnter"]),c=(0,r.useCallback)((e=>{"Enter"===(e.code||e.key)&&(null==i||i())}),[o]),s=l()(a,"outline-none border border-dark rounded py-1.5 px-3 focus:border-primary block",{"border-danger":n});return r.createElement("input",Object.assign({ref:t},p,{className:s,onKeyPress:c}))};var x=(0,r.forwardRef)(v),j=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var w=function(e){const{className:t}=e,n=j(e,["className"]),a=l()(t,"inline-block mb-1");return r.createElement("label",Object.assign({},n,{className:a}))};var E=function(e){const{children:t,id:n}=e;return r.createElement(r.Fragment,null,r.Children.map(t,(e=>{if(e.type){const t=e;if(t.type===x)return r.cloneElement(t,{id:n});if(t.type===w)return r.cloneElement(t,{htmlFor:n})}return e})))};function P(e){return r.createElement("form",Object.assign({onSubmit:e=>{e.preventDefault()}},e))}P.Group=E,P.Input=x,P.Label=w;var C=P},5173:function(e,t,n){"use strict";n.r(t),n.d(t,{InputExample:function(){return m},InputRefExample:function(){return d},assets:function(){return s},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(8427),a=n(2784),l=n(876),o=n(5158);const i={sidebar_position:5},p="Form",c={unversionedId:"components/form",id:"components/form",title:"Form",description:"Form is used to handle forms, inputs and labels.",source:"@site/docs/components/form.mdx",sourceDirName:"components",slug:"/components/form",permalink:"/react-breeze/docs/components/form",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Container",permalink:"/react-breeze/docs/components/container"},next:{title:"Spinner",permalink:"/react-breeze/docs/components/spinner"}},s={},u=[],m=()=>{const[e,t]=(0,a.useState)("");return(0,l.kt)("div",null,(0,l.kt)(o.l0.Input,{placeholder:"Placeholder...",onChange:e=>t(e.target.value)}),(0,l.kt)("p",{className:"mb-2"},"(Text: ",e,")"))},d=()=>{const e=(0,a.useRef)(null);return(0,l.kt)("div",null,(0,l.kt)(o.l0.Input,{ref:e}),(0,l.kt)(o.zx,{className:"mb-2",color:"blue",onClick:()=>e.current.focus(),mdxType:"Button"},"Focus"))},f={toc:u,InputExample:m,InputRefExample:d};function b(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"form"},"Form"),(0,l.kt)("p",null,"Form is used to handle forms, inputs and labels."),(0,l.kt)(m,{mdxType:"InputExample"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useState } from 'react';\nimport { Form } from 'react-breeze';\n\nconst [text, setText] = useState('');\n<Form.Input placeholder=\"Placeholder...\" onChange={(e) => setText(e.target.value)} />\n<p>(Text: {text})</p>\n")),(0,l.kt)(o.Dx,{as:"h3",mdxType:"Title"},"Input"),(0,l.kt)("p",null,"Input is used the same way as the default ",(0,l.kt)("inlineCode",{parentName:"p"},"input"),", but is stylized:"),(0,l.kt)(o.Dx,{as:"h4",mdxType:"Title"},"Error"),(0,l.kt)("p",null,"Input can be given an ",(0,l.kt)("inlineCode",{parentName:"p"},"error")," to be displayed:"),(0,l.kt)(o.l0.Input,{className:"mb-2",error:!0,onChange:e=>setText(e.target.value)}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Form } from 'react-breeze';\n\n<Form.Input error />;\n")),(0,l.kt)(o.Dx,{as:"h4",mdxType:"Title"},"onEnter"),(0,l.kt)("p",null,"Input can be given an ",(0,l.kt)("inlineCode",{parentName:"p"},"onEnter")," event:"),(0,l.kt)(o.l0.Input,{className:"mb-2",onEnter:()=>alert("Enter key pressed")}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Form } from 'react-breeze';\n\n<Form.Input onEnter={() => alert('Enter key pressed')} />;\n")),(0,l.kt)(o.Dx,{as:"h4",mdxType:"Title"},"Ref"),(0,l.kt)("p",null,"Under the hood, Input uses ",(0,l.kt)("inlineCode",{parentName:"p"},"forwardRef"),", which allows you to do:"),(0,l.kt)(d,{mdxType:"InputRefExample"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useRef } from 'react';\nimport { Form } from 'react-breeze';\n\nconst ref = useRef(null);\n<Form.Input ref={ref} />\n<Button onClick={() => ref.current.focus()}>Focus</Button>\n")),(0,l.kt)(o.Dx,{as:"h3",mdxType:"Title"},"Label"),(0,l.kt)("p",null,"Label is used to display a ",(0,l.kt)("inlineCode",{parentName:"p"},"label"),", with a corrected style."),(0,l.kt)(o.Dx,{as:"h3",mdxType:"Title"},"Group"),(0,l.kt)("p",null,"Group is used to set ids for label & linked input."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Properties")),(0,l.kt)(o.Dx,{as:"h4",mdxType:"Title"},"Input"),(0,l.kt)("p",null,"Input takes the same properties as an, but can also be given:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Display error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onEnter"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Function")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Trigger when user press Enter key")))),(0,l.kt)(o.Dx,{as:"h4",mdxType:"Title"},"Label"),(0,l.kt)("p",null,"Input takes the same properties as a ",(0,l.kt)("inlineCode",{parentName:"p"},"label"),"."),(0,l.kt)(o.Dx,{as:"h4",mdxType:"Title"},"Group"),(0,l.kt)("p",null,"Group takes the following properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required")),(0,l.kt)("td",{parentName:"tr",align:null},"Assign ",(0,l.kt)("inlineCode",{parentName:"td"},"id")," & ",(0,l.kt)("inlineCode",{parentName:"td"},"for")," to label & input")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"children"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Component")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required")),(0,l.kt)("td",{parentName:"tr",align:null},"Components to be linked together")))))}b.isMDXComponent=!0},2779:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var o=a.apply(null,n);o&&e.push(o)}}else if("object"===l)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}}]);