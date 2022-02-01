"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9367],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,m=d["".concat(o,".").concat(f)]||d[f]||c[f]||a;return r?n.createElement(m,p(p({ref:t},u),{},{components:r})):n.createElement(m,p({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,p=new Array(a);p[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,p[1]=s;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5201:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),p=["components"],s={title:"Namespace CopperSharp.Registry",sidebar_label:"Index",sidebar_position:0},o="Namespace CopperSharp.Registry",l={unversionedId:"api/CopperSharp.Registry/CopperSharp.Registry",id:"api/CopperSharp.Registry/CopperSharp.Registry",title:"Namespace CopperSharp.Registry",description:"Classes",source:"@site/docs/api/CopperSharp.Registry/CopperSharp.Registry.md",sourceDirName:"api/CopperSharp.Registry",slug:"/api/CopperSharp.Registry/",permalink:"/docs/api/CopperSharp.Registry/",editUrl:"https://github.com/Maxuss/CopperSharp/docs/api/CopperSharp.Registry/CopperSharp.Registry.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Namespace CopperSharp.Registry",sidebar_label:"Index",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"ModuleConfig",permalink:"/docs/api/CopperSharp.Modules/ModuleConfig"},next:{title:"FunctionOutputStream",permalink:"/docs/api/CopperSharp.Registry/FunctionOutputStream"}},u=[{value:"Classes",id:"classes",children:[{value:"FunctionOutputStream",id:"functionoutputstream",children:[],level:3},{value:"RegistryOutputStream<TWrite>",id:"registryoutputstreamtwrite",children:[],level:3}],level:2},{value:"Structs",id:"structs",children:[{value:"Identifier",id:"identifier",children:[],level:3}],level:2},{value:"Interfaces",id:"interfaces",children:[{value:"IFunctionRegistry",id:"ifunctionregistry",children:[],level:3},{value:"IRegistrable",id:"iregistrable",children:[],level:3},{value:"IRegistry<TElement>",id:"iregistrytelement",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"namespace-coppersharpregistry"},"Namespace CopperSharp.Registry"),(0,a.kt)("h2",{id:"classes"},"Classes"),(0,a.kt)("h3",{id:"functionoutputstream"},(0,a.kt)("a",{parentName:"h3",href:"../CopperSharp.Registry/FunctionOutputStream"},"FunctionOutputStream")),(0,a.kt)("p",null,"Output stream to write functions inside datapack"),(0,a.kt)("h3",{id:"registryoutputstreamtwrite"},(0,a.kt)("a",{parentName:"h3",href:"../CopperSharp.Registry/RegistryOutputStream%60TWrite%60"},"RegistryOutputStream","<","TWrite",">")),(0,a.kt)("p",null,"An output stream for registries to write into, usually piped into file"),(0,a.kt)("h2",{id:"structs"},"Structs"),(0,a.kt)("h3",{id:"identifier"},(0,a.kt)("a",{parentName:"h3",href:"../CopperSharp.Registry/Identifier"},"Identifier")),(0,a.kt)("p",null,"A namespace:path pair, used to represent a lot of things, such as item ids, functions and more"),(0,a.kt)("h2",{id:"interfaces"},"Interfaces"),(0,a.kt)("h3",{id:"ifunctionregistry"},(0,a.kt)("a",{parentName:"h3",href:"../CopperSharp.Registry/IFunctionRegistry"},"IFunctionRegistry")),(0,a.kt)("p",null,"This registry is used to register functions for datapacks.\n","<","br /",">"," ","<","br /",">","\nYou ","<","strong",">","should not","<","/strong",">"," implement this interface, as it is already\nimplemented internally"),(0,a.kt)("h3",{id:"iregistrable"},(0,a.kt)("a",{parentName:"h3",href:"../CopperSharp.Registry/IRegistrable"},"IRegistrable")),(0,a.kt)("p",null,"Represents an element, that can be registered in registries"),(0,a.kt)("h3",{id:"iregistrytelement"},(0,a.kt)("a",{parentName:"h3",href:"../CopperSharp.Registry/IRegistry%60TElement%60"},"IRegistry","<","TElement",">")),(0,a.kt)("p",null,"A super-interface for all registries to implement. It also contains all registries as static fields."))}d.isMDXComponent=!0}}]);