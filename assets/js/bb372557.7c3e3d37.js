"use strict";(self.webpackChunkdev_galoy_io=self.webpackChunkdev_galoy_io||[]).push([[623],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(r),y=n,m=s["".concat(p,".").concat(y)]||s[y]||d[y]||o;return r?a.createElement(m,l(l({ref:t},u),{},{components:r})):a.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},2005:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={},l="Galoy Pay",i={unversionedId:"quickstart/galoy-pay",id:"quickstart/galoy-pay",title:"Galoy Pay",description:"Galoy Pay is a web application that can be used to send tips or payments to users of the Galoy API.",source:"@site/docs/quickstart/galoy-pay.md",sourceDirName:"quickstart",slug:"/quickstart/galoy-pay",permalink:"/docs-docusaurus/docs/quickstart/galoy-pay",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quickstart/galoy-pay.md",tags:[],version:"current",frontMatter:{},sidebar:"quickstartSidebar",previous:{title:"Backend Servers",permalink:"/docs-docusaurus/docs/quickstart/backend-servers"},next:{title:"Mobile Wallet",permalink:"/docs-docusaurus/docs/quickstart/mobile-wallet"}},p={},c=[{value:"How to run this repo locally?",id:"how-to-run-this-repo-locally",level:3},{value:"How to build for production?",id:"how-to-build-for-production",level:4}],u={toc:c},s="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"galoy-pay"},"Galoy Pay"),(0,n.kt)("p",null,"Galoy Pay is a web application that can be used to send tips or payments to users of the Galoy API."),(0,n.kt)("p",null,"It's packaged as a docker image, and is automatically installed as part of the Galoy helm charts."),(0,n.kt)("p",null,"With a default installation, Galoy-Pay can be accessed under ",(0,n.kt)("inlineCode",{parentName:"p"},"pay.domain.com"),"."),(0,n.kt)("p",null,"Galoy-Pay uses query, mutation, and subscription operations from the Galoy's graphql API endpoints ",(0,n.kt)("inlineCode",{parentName:"p"},"api.domain.com")," as defined in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/GaloyMoney/galoy/blob/main/src/graphql/main/schema.graphql"},"schema.graphql")),(0,n.kt)("h3",{id:"how-to-run-this-repo-locally"},"How to run this repo locally?"),(0,n.kt)("p",null,"In the project directory, create a file name ",(0,n.kt)("inlineCode",{parentName:"p"},".env.local")," and fill it with"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"NEXT_PUBLIC_GRAPHQL_HOSTNAME='api.staging.galoy.io'\n")),(0,n.kt)("p",null,"(or use your custom API URL), then run"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"yarn install\nyarn dev\n")),(0,n.kt)("p",null,"This will run the app in the development mode."),(0,n.kt)("p",null,"Open ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000")," to view it in the browser."),(0,n.kt)("p",null,"The page will automatically reload when you make edits."),(0,n.kt)("p",null,"You will also see any lint errors in the console."),(0,n.kt)("h4",{id:"how-to-build-for-production"},"How to build for production?"),(0,n.kt)("p",null,"In the project directory, you can run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"yarn install\nyarn build\n")),(0,n.kt)("p",null,"This will build the app for production under a ",(0,n.kt)("inlineCode",{parentName:"p"},"build")," folder. It will bundle React in production mode and optimize the build for the best performance. The build will be minified, and the bundled files will include unique hashes in their names."))}d.isMDXComponent=!0}}]);