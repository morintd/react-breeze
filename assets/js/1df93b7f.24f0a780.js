/*! For license information please see 1df93b7f.24f0a780.js.LICENSE.txt */
(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[237],{8225:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return O}});var n=r(2784),o=r(6277),a=r(2700),l=r(9817),c=r(7614),s=r(8427),i=r(5158),u="features_xdhU";const m=[{title:"Made with React & Tailwind",description:n.createElement(n.Fragment,null,"You also love working with React and Tailwind CSS ? Creating basic components is painful and time-consuming, without really brining any value ? Do not waste any more time, and try out ",n.createElement("strong",null,"react-breeze"),".")},{title:"Wide range of components",description:n.createElement(n.Fragment,null,"Use and customize the wide range of available components now! Working with prototypes ? You will find everything you need,"," ",n.createElement("a",{className:"underline",href:"/react-breeze/docs/components/alert"},"have a look"),".")}];function p(e){let{title:t,description:r}=e;return n.createElement("div",{className:(0,o.Z)("col col--6")},n.createElement("div",{className:"text--center padding-horiz--md"},n.createElement(i.Dx,{as:"h3"},t),n.createElement("p",null,r)))}function f(){return n.createElement("section",{className:u},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},m.map(((e,t)=>n.createElement(p,(0,s.Z)({key:t},e)))))))}var b="heroBanner_qdFl",d="buttons_AeoN";function y(){const{siteConfig:e}=(0,c.Z)();return n.createElement("header",{className:(0,o.Z)("hero hero--primary",b)},n.createElement("div",{className:"container"},n.createElement("h1",{className:"hero__title"},e.title),n.createElement("p",{className:"hero__subtitle mb-2"},e.tagline),n.createElement("div",{className:d},n.createElement(l.Z,{className:"button button--secondary button--lg",to:"/docs/getting-started"},"Getting Started"))))}function O(){const{siteConfig:e}=(0,c.Z)();return n.createElement(a.Z,{title:"Documentation",description:e.tagline},n.createElement(y,null),n.createElement("main",null,n.createElement(f,null)))}},5158:function(e,t,r){"use strict";r.d(t,{bZ:function(){return c},zx:function(){return m},Zb:function(){return v},W2:function(){return h},l0:function(){return k},$j:function(){return i},Dx:function(){return f}});var n=r(2784),o=r(2779),a=r.n(o),l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};var c=function(e){const{color:t,className:r,visible:o=!0}=e,c=l(e,["color","className","visible"]),s=a()(r,`py-1.5 px-3 border rounded bg-${t}-100 text-${t}-800 border-${t}-200`,{"opacity-0":!o});return n.createElement("div",Object.assign({},c,{role:"alert",className:s}))},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};var i=function(e){const{className:t,color:r,inverted:o}=e,l=s(e,["className","color","inverted"]),c=a()(t,"h-6 w-6 flex items-center content-center"),i=a()("animate-spin h-5 w-5 inline ",{[`text-${r}-500`]:!o,[`text-${r}-inverted`]:o});return n.createElement("div",Object.assign({},l,{className:c}),n.createElement("svg",{role:"status",className:i,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 25 25"},n.createElement("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),n.createElement("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})))},u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};var m=function(e){const{color:t,outline:r,loading:o,disabled:l,children:c,className:s,onClick:m}=e,p=u(e,["color","outline","loading","disabled","children","className","onClick"]),f=a()(s,"py-1.5 px-3 rounded border-2",{[`bg-${t}-500 text-${t}-inverted border-${t}-500`]:!r,[`hover:bg-${t}-600 active:bg-${t}-700`]:!o&&!l&&!r,[`bg-${t}-inverted text-${t}-500 border-${t}-500`]:r,[`hover:bg-${t}-50 active:bg-${t}-100`]:r&&!l&&!o,"font-semibold":r&&!o,"opacity-40 cursor-default":l,"cursor-default":o}),b=(0,n.useCallback)((e=>{o||l||null==m||m(e)}),[o,l,m]);return n.createElement("button",Object.assign({},p,{onClick:b,className:f}),n.createElement("div",{className:"relative"},o&&n.createElement(i,{color:t,inverted:!r,className:"absolute top-0 left-0 right-0 mx-auto"}),n.createElement("div",{className:a()({"opacity-0":o})},c)))},p=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};var f=function(e){const{as:t="h1",children:r,className:o}=e,l=p(e,["as","children","className"]),c=t,s=a()(o,{"text-4xl":"h1"===t,"text-3xl":"h2"===t,"text-2xl":"h3"===t,"text-xl":"h4"===t,"text-lg":"h5"===t,"text-base":"h6"===t});return n.createElement(c,Object.assign({},l,{className:s}),r)},b=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};var d=function(e){const{as:t="h3",className:r}=e,o=b(e,["as","className"]);return n.createElement(f,Object.assign({},o,{as:t,className:a()("mb-2",r)}))},y=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function O(e){const{className:t}=e,r=y(e,["className"]),o=a()(t,"border border-dark rounded p-4");return n.createElement("div",Object.assign({},r,{className:o}))}O.Title=d;var v=O,g=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};var h=function(e){const{children:t,className:r}=e,o=g(e,["children","className"]),l=a()(r,"w-full flex justify-center items-center");return n.createElement("div",Object.assign({},o,{className:l}),n.createElement("div",{className:"xs:max-w-xs md:max-w-md xl:max-w-xl flex-1"},t))},x=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};const w=(e,t)=>{const{error:r,className:o,onKeyPress:l,onEnter:c}=e,s=x(e,["error","className","onKeyPress","onEnter"]),i=(0,n.useCallback)((e=>{"Enter"===(e.code||e.key)&&(null==c||c())}),[l]),u=a()(o,"outline-none border border-dark rounded py-1.5 px-3 focus:border-primary block",{"border-danger":r});return n.createElement("input",Object.assign({ref:t},s,{className:u,onKeyPress:i}))};var E=(0,n.forwardRef)(w),j=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};var N=function(e){const{className:t}=e,r=j(e,["className"]),o=a()(t,"inline-block mb-1");return n.createElement("label",Object.assign({},r,{className:o}))};var P=function(e){const{children:t,id:r}=e;return n.createElement(n.Fragment,null,n.Children.map(t,(e=>{if(e.type){const t=e;if(t.type===E)return n.cloneElement(t,{id:r});if(t.type===N)return n.cloneElement(t,{htmlFor:r})}return e})))};function S(e){return n.createElement("form",Object.assign({onSubmit:e=>{e.preventDefault()}},e))}S.Group=P,S.Input=E,S.Label=N;var k=S},2779:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var l=o.apply(null,r);l&&e.push(l)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()}}]);