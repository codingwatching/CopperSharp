"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[235],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,b=d["".concat(o,".").concat(h)]||d[h]||u[h]||i;return r?a.createElement(b,l(l({ref:t},s),{},{components:r})):a.createElement(b,l({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},674:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),l=["components"],p={title:"Interface INbtField<T>",sidebar_label:"INbtField<T>",description:"Represents a field which contains NBT data"},o="Interface INbtField&lt;T&gt;",c={unversionedId:"api/CopperSharp.Data.SNbt/INbtField`T`",id:"api/CopperSharp.Data.SNbt/INbtField`T`",title:"Interface INbtField<T>",description:"Represents a field which contains NBT data",source:"@site/docs/api/CopperSharp.Data.SNbt/INbtField`T`.md",sourceDirName:"api/CopperSharp.Data.SNbt",slug:"/api/CopperSharp.Data.SNbt/INbtField`T`",permalink:"/docs/api/CopperSharp.Data.SNbt/INbtField`T`",editUrl:"https://github.com/Maxuss/CopperSharp/docs/api/CopperSharp.Data.SNbt/INbtField`T`.md",tags:[],version:"current",frontMatter:{title:"Interface INbtField<T>",sidebar_label:"INbtField<T>",description:"Represents a field which contains NBT data"},sidebar:"tutorialSidebar",previous:{title:"Index",permalink:"/docs/api/CopperSharp.Data.SNbt/"},next:{title:"INbtValue",permalink:"/docs/api/CopperSharp.Data.SNbt/INbtValue"}},s=[{value:"<strong>Assembly</strong>: CopperSharp.dll",id:"assembly-coppersharpdll",children:[],level:6},{value:"View Source",id:"view-source",children:[],level:6},{value:"Properties",id:"properties",children:[{value:"Key",id:"key",children:[{value:"View Source",id:"view-source-1",children:[],level:6}],level:3},{value:"Value",id:"value",children:[{value:"View Source",id:"view-source-2",children:[],level:6}],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"SerializeInto(StringNbtWriter)",id:"serializeintostringnbtwriter",children:[{value:"View Source",id:"view-source-3",children:[],level:6},{value:"Parameters",id:"parameters",children:[],level:5}],level:3}],level:2}],u={toc:s};function d(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-inbtfieldt"},"Interface INbtField","<","T",">"),(0,i.kt)("p",null,"Represents a field which contains NBT data"),(0,i.kt)("h6",{id:"assembly-coppersharpdll"},(0,i.kt)("strong",{parentName:"h6"},"Assembly"),": CopperSharp.dll"),(0,i.kt)("h6",{id:"view-source"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/Maxuss/CopperSharp/blob/master/CopperSharp/Data/SNbt/NbtField.cs#L6"},"View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public interface INbtField<out T>\n    where T : INbtValue\n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"key"},"Key"),(0,i.kt)("p",null,"Key to the value in this field"),(0,i.kt)("h6",{id:"view-source-1"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/Maxuss/CopperSharp/blob/master/CopperSharp/Data/SNbt/NbtField.cs#L11"},"View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"string Key { get; }\n")),(0,i.kt)("h3",{id:"value"},"Value"),(0,i.kt)("p",null,"Value of this field"),(0,i.kt)("h6",{id:"view-source-2"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/Maxuss/CopperSharp/blob/master/CopperSharp/Data/SNbt/NbtField.cs#L16"},"View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"T Value { get; }\n")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"serializeintostringnbtwriter"},"SerializeInto(StringNbtWriter)"),(0,i.kt)("p",null,"Serializes data of this field into string writer"),(0,i.kt)("h6",{id:"view-source-3"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/Maxuss/CopperSharp/blob/master/CopperSharp/Data/SNbt/NbtField.cs#L22"},"View Source")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"virtual void SerializeInto(StringNbtWriter sw)\n")),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../CopperSharp.Data.SNbt/StringNbtWriter"},"CopperSharp.Data.SNbt.StringNbtWriter")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"sw")),(0,i.kt)("td",{parentName:"tr",align:"left"},"String writer into which the data should be written")))))}d.isMDXComponent=!0}}]);