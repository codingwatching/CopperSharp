"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2516],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9710:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var a=r(7462),n=r(3366),l=(r(7294),r(3905)),o=["components"],i={title:"Enum ItemSlot",sidebar_label:"ItemSlot",description:"Represents an equipable slot for items"},p="Enum ItemSlot",s={unversionedId:"api/CopperSharp.Item/ItemSlot",id:"api/CopperSharp.Item/ItemSlot",title:"Enum ItemSlot",description:"Represents an equipable slot for items",source:"@site/docs/api/CopperSharp.Item/ItemSlot.md",sourceDirName:"api/CopperSharp.Item",slug:"/api/CopperSharp.Item/ItemSlot",permalink:"/docs/api/CopperSharp.Item/ItemSlot",editUrl:"https://github.com/Maxuss/CopperSharp/docs/api/CopperSharp.Item/ItemSlot.md",tags:[],version:"current",frontMatter:{title:"Enum ItemSlot",sidebar_label:"ItemSlot",description:"Represents an equipable slot for items"},sidebar:"tutorialSidebar",previous:{title:"ItemFlag",permalink:"/docs/api/CopperSharp.Item/ItemFlag"},next:{title:"ItemStack",permalink:"/docs/api/CopperSharp.Item/ItemStack"}},c=[{value:"<strong>Assembly</strong>: CopperSharp.dll",id:"assembly-coppersharpdll",children:[],level:6},{value:"View Source",id:"view-source",children:[],level:6},{value:"Fields",id:"fields",children:[{value:"MainHand",id:"mainhand",children:[{value:"View Source",id:"view-source-1",children:[],level:6}],level:3},{value:"OffHand",id:"offhand",children:[{value:"View Source",id:"view-source-2",children:[],level:6}],level:3},{value:"Head",id:"head",children:[{value:"View Source",id:"view-source-3",children:[],level:6}],level:3},{value:"Chestplate",id:"chestplate",children:[{value:"View Source",id:"view-source-4",children:[],level:6}],level:3},{value:"Leggings",id:"leggings",children:[{value:"View Source",id:"view-source-5",children:[],level:6}],level:3},{value:"Boots",id:"boots",children:[{value:"View Source",id:"view-source-6",children:[],level:6}],level:3}],level:2}],u={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"enum-itemslot"},"Enum ItemSlot"),(0,l.kt)("p",null,"Represents an equipable slot for items"),(0,l.kt)("h6",{id:"assembly-coppersharpdll"},(0,l.kt)("strong",{parentName:"h6"},"Assembly"),": CopperSharp.dll"),(0,l.kt)("h6",{id:"view-source"},(0,l.kt)("a",{parentName:"h6",href:"https://github.com/Maxuss/CopperSharp/blob/master/CopperSharp/Item/ItemSlot.cs#L8"},"View Source")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"public enum ItemSlot : int\n")),(0,l.kt)("h2",{id:"fields"},"Fields"),(0,l.kt)("h3",{id:"mainhand"},"MainHand"),(0,l.kt)("p",null,"An item stored in main hand slot"),(0,l.kt)("h6",{id:"view-source-1"},(0,l.kt)("a",{parentName:"h6",href:"https://github.com/Maxuss/CopperSharp/blob/master/CopperSharp/Item/ItemSlot.cs#L13"},"View Source")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"MainHand = null\n")),(0,l.kt)("h3",{id:"offhand"},"OffHand"),(0,l.kt)("p",null,"An item stored in off hand slot"),(0,l.kt)("h6",{id:"view-source-2"},(0,l.kt)("a",{parentName:"h6",href:"https://github.com/Maxuss/CopperSharp/blob/master/CopperSharp/Item/ItemSlot.cs#L18"},"View Source")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"OffHand = null\n")),(0,l.kt)("h3",{id:"head"},"Head"),(0,l.kt)("p",null,"An item stored in helmet slot"),(0,l.kt)("h6",{id:"view-source-3"},(0,l.kt)("a",{parentName:"h6",href:"https://github.com/Maxuss/CopperSharp/blob/master/CopperSharp/Item/ItemSlot.cs#L23"},"View Source")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"Head = null\n")),(0,l.kt)("h3",{id:"chestplate"},"Chestplate"),(0,l.kt)("p",null,"An item stored in chestplate slot"),(0,l.kt)("h6",{id:"view-source-4"},(0,l.kt)("a",{parentName:"h6",href:"https://github.com/Maxuss/CopperSharp/blob/master/CopperSharp/Item/ItemSlot.cs#L28"},"View Source")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"Chestplate = null\n")),(0,l.kt)("h3",{id:"leggings"},"Leggings"),(0,l.kt)("p",null,"An item stored in leggings slot"),(0,l.kt)("h6",{id:"view-source-5"},(0,l.kt)("a",{parentName:"h6",href:"https://github.com/Maxuss/CopperSharp/blob/master/CopperSharp/Item/ItemSlot.cs#L33"},"View Source")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"Leggings = null\n")),(0,l.kt)("h3",{id:"boots"},"Boots"),(0,l.kt)("p",null,"An item stored in boots slot"),(0,l.kt)("h6",{id:"view-source-6"},(0,l.kt)("a",{parentName:"h6",href:"https://github.com/Maxuss/CopperSharp/blob/master/CopperSharp/Item/ItemSlot.cs#L38"},"View Source")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Declaration"',title:'"Declaration"'},"Boots = null\n")))}m.isMDXComponent=!0}}]);