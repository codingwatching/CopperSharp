"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8098],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(r),b=n,m=d["".concat(o,".").concat(b)]||d[b]||s[b]||l;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4955:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=r(7462),n=r(3366),l=(r(7294),r(3905)),i=["components"],p={title:"Interface INbtValue",sidebar_label:"INbtValue",description:"A global interface for all kinds of nbt values"},o="Interface INbtValue",c={unversionedId:"api/CopperSharp.Data.SNbt/INbtValue",id:"api/CopperSharp.Data.SNbt/INbtValue",title:"Interface INbtValue",description:"A global interface for all kinds of nbt values",source:"@site/docs/api/CopperSharp.Data.SNbt/INbtValue.md",sourceDirName:"api/CopperSharp.Data.SNbt",slug:"/api/CopperSharp.Data.SNbt/INbtValue",permalink:"/docs/api/CopperSharp.Data.SNbt/INbtValue",editUrl:"https://github.com/Maxuss/CopperSharp/docs/api/CopperSharp.Data.SNbt/INbtValue.md",tags:[],version:"current",frontMatter:{title:"Interface INbtValue",sidebar_label:"INbtValue",description:"A global interface for all kinds of nbt values"},sidebar:"tutorialSidebar",previous:{title:"INbtField<T>",permalink:"/docs/api/CopperSharp.Data.SNbt/INbtField`T`"},next:{title:"NbtCompound",permalink:"/docs/api/CopperSharp.Data.SNbt/NbtCompound"}},u=[{value:"<strong>Assembly</strong>: CopperSharp.dll",id:"assembly-coppersharpdll",children:[],level:6},{value:"View Source",id:"view-source",children:[],level:6},{value:"Methods",id:"methods",children:[{value:"SerializeInto(StringNbtWriter)",id:"serializeintostringnbtwriter",children:[{value:"View Source",id:"view-source-1",children:[],level:6},{value:"Parameters",id:"parameters",children:[],level:5}],level:3},{value:"Wrap(Object)",id:"wrapobject",children:[{value:"View Source",id:"view-source-2",children:[],level:6},{value:"Returns",id:"returns",children:[],level:5},{value:"Parameters",id:"parameters-1",children:[],level:5}],level:3}],level:2}],s={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"interface-inbtvalue"},"Interface INbtValue"),(0,l.kt)("p",null,"A global interface for all kinds of nbt values"),(0,l.kt)("h6",{id:"assembly-coppersharpdll"},(0,l.kt)("strong",{parentName:"h6"},"Assembly"),": CopperSharp.dll"),(0,l.kt)("h6",{id:"view-source"},(0,l.kt)("a",{parentName:"h6",href:"https://github.com/Maxuss/CopperSharp/blob/master/CopperSharp/Data/SNbt/INbtValue.cs#L9"},"View Source")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public interface INbtValue\n")),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"serializeintostringnbtwriter"},"SerializeInto(StringNbtWriter)"),(0,l.kt)("p",null,"Writes data to provided string writer"),(0,l.kt)("h6",{id:"view-source-1"},(0,l.kt)("a",{parentName:"h6",href:"https://github.com/Maxuss/CopperSharp/blob/master/CopperSharp/Data/SNbt/INbtValue.cs#L15"},"View Source")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"void SerializeInto(StringNbtWriter sw)\n")),(0,l.kt)("h5",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"../CopperSharp.Data.SNbt/StringNbtWriter"},"CopperSharp.Data.SNbt.StringNbtWriter")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"sw")),(0,l.kt)("td",{parentName:"tr",align:"left"},"String writer to which data should be written")))),(0,l.kt)("h3",{id:"wrapobject"},"Wrap(Object)"),(0,l.kt)("p",null,"Wrap provided value inside an NBT tag"),(0,l.kt)("h6",{id:"view-source-2"},(0,l.kt)("a",{parentName:"h6",href:"https://github.com/Maxuss/CopperSharp/blob/master/CopperSharp/Data/SNbt/INbtValue.cs#L22"},"View Source")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"static INbtValue Wrap(object value)\n")),(0,l.kt)("h5",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../CopperSharp.Data.SNbt/INbtValue"},"CopperSharp.Data.SNbt.INbtValue"),": Wrapped NBT tag with provided value inside"),(0,l.kt)("h5",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"System.Object")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Value to be wrapped")))))}d.isMDXComponent=!0}}]);