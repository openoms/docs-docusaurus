"use strict";(self.webpackChunkdev_galoy_io=self.webpackChunkdev_galoy_io||[]).push([[818],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},l="Web Wallet",i={unversionedId:"getting-started/web-wallet",id:"getting-started/web-wallet",title:"Web Wallet",description:"GaloyMoney Web Wallet is a web application that uses the Galoy backend API to offer a web experience for sending and receiving bitcoin over onchain, lightning, and Galoy intraledger.&#x20;",source:"@site/docs/getting-started/web-wallet.md",sourceDirName:"getting-started",slug:"/getting-started/web-wallet",permalink:"/docs-docusaurus/docs/getting-started/web-wallet",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/web-wallet.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mobile Wallet",permalink:"/docs-docusaurus/docs/getting-started/mobile-wallet"},next:{title:"Video demos",permalink:"/docs-docusaurus/docs/lessons"}},s={},c=[{value:"Config",id:"config",level:3},{value:"How to run this repo locally?",id:"how-to-run-this-repo-locally",level:3},{value:"How to run this repo for production?",id:"how-to-run-this-repo-for-production",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"web-wallet"},"Web Wallet"),(0,a.kt)("p",null,"GaloyMoney Web Wallet is a web application that uses the Galoy backend API to offer a web experience for sending and receiving bitcoin over onchain, lightning, and Galoy intraledger."," "),(0,a.kt)("p",null,"It can be customized and used by any community or organization. It is built with Node, TypeScript, GraphQL, and React. It runs on any modern web browser and uses a responsive layout that's friendly on small screens."),(0,a.kt)("p",null,"Web Wallet is packaged as a docker image, and is automatically installed as part of Galoy helm charts."),(0,a.kt)("p",null,"With a default installation, this web application can be accessed with ",(0,a.kt)("inlineCode",{parentName:"p"},"wallet.domain.com"),". It fetches data from a Graphql API endpoint ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql.domain.com")," defined in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/GaloyMoney/galoy/blob/main/src/servers/graphql-main-server.ts"},"graphql-main-server")),(0,a.kt)("h3",{id:"config"},"Config"),(0,a.kt)("p",null,"The project depends on a few environment variables to be set. The ",(0,a.kt)("inlineCode",{parentName:"p"},".envrc")," root file has a list of them."),(0,a.kt)("h3",{id:"how-to-run-this-repo-locally"},"How to run this repo locally?"),(0,a.kt)("p",null,"In the project directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn install\n\n# In a terminal\nyarn dev:bundler\n\n# In another terminal\nyarn dev:server\n")),(0,a.kt)("p",null,"Open ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:1234/"},"http://localhost:1234")," to view it in the browser."),(0,a.kt)("h3",{id:"how-to-run-this-repo-for-production"},"How to run this repo for production?"),(0,a.kt)("p",null,"In the project directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn install\n\n# To build the app under the `build` folder\nyarn build:all\n\n# To start the app\nyarn prod:start\n")))}u.isMDXComponent=!0}}]);