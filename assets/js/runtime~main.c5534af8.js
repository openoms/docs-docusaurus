(()=>{"use strict";var e,t,r,a,o,n={},d={};function f(e){var t=d[e];if(void 0!==t)return t.exports;var r=d[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,f),r.loaded=!0,r.exports}f.m=n,f.c=d,e=[],f.O=(t,r,a,o)=>{if(!r){var n=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],o=e[u][2];for(var d=!0,i=0;i<r.length;i++)(!1&o||n>=o)&&Object.keys(f.O).every((e=>f.O[e](r[i])))?r.splice(i--,1):(d=!1,o<n&&(n=o));if(d){e.splice(u--,1);var b=a();void 0!==b&&(t=b)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);f.r(o);var n={};t=t||[null,r({}),r([]),r(r)];for(var d=2&a&&e;"object"==typeof d&&!~t.indexOf(d);d=r(d))Object.getOwnPropertyNames(d).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,f.d(o,n),o},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>"assets/js/"+({53:"935f2afb",85:"1f391b9e",190:"4ebd3d9c",216:"d5423518",297:"82d8d0a3",299:"6c6412b8",397:"a5dab868",401:"70ba6117",402:"31b8bfee",414:"393be207",424:"3ed9d3dd",514:"1be78505",618:"b323160a",623:"bb372557",751:"6043223a",826:"a1872ea7",844:"f3976560",855:"a1aba1a0",857:"bac7e0f3",868:"d6117763",918:"17896441"}[e]||e)+"."+{53:"db3239c1",85:"09142d76",190:"dc8ae291",216:"22195833",297:"24d1f8a1",299:"bad907c4",397:"fce8c88c",401:"75876bfe",402:"543fc0a4",414:"d2a58bec",424:"0735ec9a",455:"3e7cddfc",514:"e16390b4",618:"0d680933",623:"7c3e3d37",751:"e13b8940",826:"281d6461",844:"19a2837c",855:"8913e33a",857:"9a4ba977",868:"fc574131",918:"47ec84fc",972:"1d52d51a"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="dev-galoy-io:",f.l=(e,t,r,n)=>{if(a[e])a[e].push(t);else{var d,i;if(void 0!==r)for(var b=document.getElementsByTagName("script"),u=0;u<b.length;u++){var l=b[u];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+r){d=l;break}}d||(i=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,f.nc&&d.setAttribute("nonce",f.nc),d.setAttribute("data-webpack",o+r),d.src=e),a[e]=[t];var c=(t,r)=>{d.onerror=d.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(c.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=c.bind(null,d.onerror),d.onload=c.bind(null,d.onload),i&&document.head.appendChild(d)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/docs-docusaurus/",f.gca=function(e){return e={17896441:"918","935f2afb":"53","1f391b9e":"85","4ebd3d9c":"190",d5423518:"216","82d8d0a3":"297","6c6412b8":"299",a5dab868:"397","70ba6117":"401","31b8bfee":"402","393be207":"414","3ed9d3dd":"424","1be78505":"514",b323160a:"618",bb372557:"623","6043223a":"751",a1872ea7:"826",f3976560:"844",a1aba1a0:"855",bac7e0f3:"857",d6117763:"868"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(t,r)=>{var a=f.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var n=f.p+f.u(t),d=new Error;f.l(n,(r=>{if(f.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",d.name="ChunkLoadError",d.type=o,d.request=n,a[1](d)}}),"chunk-"+t,t)}},f.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,n=r[0],d=r[1],i=r[2],b=0;if(n.some((t=>0!==e[t]))){for(a in d)f.o(d,a)&&(f.m[a]=d[a]);if(i)var u=i(f)}for(t&&t(r);b<n.length;b++)o=n[b],f.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return f.O(u)},r=self.webpackChunkdev_galoy_io=self.webpackChunkdev_galoy_io||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();