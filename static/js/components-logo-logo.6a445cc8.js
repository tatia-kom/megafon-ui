(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/components/Logo/Logo.less":function(e,n,t){},"./src/components/Logo/Logo.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),r=t.n(o),a=t("./node_modules/@mdx-js/tag/dist/index.js"),c=t("./node_modules/docz/dist/index.m.js"),s=(t("./src/components/Logo/Logo.less"),t("./src/utils/cn.ts")),i=t("./src/icons/green-horizontal.svg"),l=t("./src/icons/green-vertical.svg"),p=t("./src/components/Link/Link.tsx");function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function f(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e,n){return!n||"object"!==u(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function d(e,n){return(d=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var y=Object(s.a)("logo"),b=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),g(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}var t,r,a;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&d(e,n)}(n,o["Component"]),t=n,(r=[{key:"render",value:function(){var e=this.props,n=e.color,t=e.view,r=e.className,a=m(e,["color","view","className"]),c={"green-horizontal":i.default,"green-vertical":l.default}["".concat(n,"-").concat(t)];return o.createElement(p.a,Object.assign({},a,{className:y("",{view:t},r)}),o.createElement("div",{className:y("img")},o.createElement(c,{className:y("svg")})))}}])&&f(t.prototype,r),a&&f(t,a),n}();Object.defineProperty(b,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{color:"green",view:"horizontal",target:"_blank",href:"/"}});var h=b;try{b.displayName="Logo",b.__docgenInfo={description:"",displayName:"Logo",props:{color:{defaultValue:{value:"green"},description:"Color",name:"color",required:!1,type:{name:"string"}},view:{defaultValue:{value:"horizontal"},description:"View",name:"view",required:!1,type:{name:'"horizontal" | "vertical"'}},href:{defaultValue:{value:"/"},description:"Link",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:{value:"_blank"},description:"target - property tag <a>",name:"target",required:!1,type:{name:'"_self" | "_blank" | "_parent" | "_top"'}},className:{defaultValue:null,description:"Custom classname",name:"className",required:!1,type:{name:"string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Logo/Logo.tsx#Logo"]={docgenInfo:b.__docgenInfo,name:"Logo",path:"src/components/Logo/Logo.tsx#Logo"})}catch(e){}function v(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}n.default=function(e){var n=e.components;v(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:n},r.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"logo"}},r.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"h1",props:{"aria-hidden":!0,href:"#logo"}},r.a.createElement(a.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Logo"),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"properties"}},r.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#properties"}},r.a.createElement(a.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Properties"),r.a.createElement(c.e,{of:h}),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"basic-usage"}},r.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#basic-usage"}},r.a.createElement(a.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Basic usage"),r.a.createElement(c.d,{__position:1,__code:"<Logo />"},r.a.createElement(h,null)))}}}]);