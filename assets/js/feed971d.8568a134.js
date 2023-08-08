"use strict";(self.webpackChunkdev_galoy_io=self.webpackChunkdev_galoy_io||[]).push([[367],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9121:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={},i="Admin Panel",l={unversionedId:"getting-started/admin-panel",id:"getting-started/admin-panel",title:"Admin Panel",description:"Galoy Admin Panel lets the support team access users and internal transaction information.",source:"@site/docs/getting-started/admin-panel.md",sourceDirName:"getting-started",slug:"/getting-started/admin-panel",permalink:"/docs/getting-started/admin-panel",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/admin-panel.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started/"},next:{title:"Backend Servers",permalink:"/docs/getting-started/backend-servers"}},p={},d=[{value:"How to run this repo locally?",id:"how-to-run-this-repo-locally",level:3},{value:"<code>yarn build</code>",id:"yarn-build",level:4}],s={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"admin-panel"},"Admin Panel"),(0,a.kt)("p",null,"Galoy Admin Panel lets the support team access users and internal transaction information."),(0,a.kt)("p",null,"Admin Panel is packaged as a docker image, and is automatically installed as part of the galoy helm charts."),(0,a.kt)("p",null,"With a default installation, Admin Panel can be accessed with ",(0,a.kt)("inlineCode",{parentName:"p"},"admin.domain.com"),". Admin-Panel fetches information from a dedicated graphql API endpoint ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-admin.domain.com")," defined in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/GaloyMoney/galoy/blob/main/src/servers/graphql-admin-server.ts"},"graphql-admin-server")),(0,a.kt)("h3",{id:"how-to-run-this-repo-locally"},"How to run this repo locally?"),(0,a.kt)("p",null,"In the project directory, you can run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn install\nexport GRAPHQL_URI=`https://graphql-admin.domain.com`\nyarn start\n")),(0,a.kt)("p",null,"Runs the app in the development mode.\\\nOpen ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000")," to view it in the browser."),(0,a.kt)("p",null,"The page will reload if you make edits.\\\nYou will also see any lint errors in the console."),(0,a.kt)("h4",{id:"yarn-build"},(0,a.kt)("inlineCode",{parentName:"h4"},"yarn build")),(0,a.kt)("p",null,"Builds the app for production to the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," folder.\\\nIt correctly bundles React in production mode and optimizes the build for the best performance."),(0,a.kt)("p",null,"The build is minified and the filenames include the hashes.\\\nYour app is ready to be deployed!"),(0,a.kt)("p",null,"\\"))}u.isMDXComponent=!0}}]);