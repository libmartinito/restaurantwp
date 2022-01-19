(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(81),a=n.n(r),o=n(645),i=n.n(o),c=n(667),s=n.n(c),d=new URL(n(633),n.b),l=new URL(n(350),n.b),u=i()(a()),p=s()(d),f=s()(l);u.push([e.id,"*{\n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  width: 100vw;\n  height: 100vh;\n  color: #f0ead6;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\n  url("+p+");\n  background-size: cover;\n}\n\n.header {\n  width: 690px;\n  height: 60px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.tab-container {\n  display: flex;\n  gap: 15px;\n}\n\n.logo {\n  width: 30px;\n  height: 30px;\n  background-image: url("+f+");\n  background-size: cover;\n}\n\n.hero {\n  height: calc(100vh - 50px);\n  width: 690px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.line-one,\n.line-two {\n  font-size: 72px;\n}\n.line-three {\n  padding-top: 30px;\n}",""]);const h=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=a(f,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var s=r(e,a),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},376:(e,t,n)=>{n.d(t,{Y:()=>g});var r=n(379),a=n.n(r),o=n(795),i=n.n(o),c=n(569),s=n.n(c),d=n(565),l=n.n(d),u=n(216),p=n.n(u),f=n(589),h=n.n(f),m=n(28),v={};v.styleTagTransform=h(),v.setAttributes=l(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),a()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;const g=()=>{let e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("header");let n=document.createElement("div");n.classList.add("logo");let r=document.createElement("div");r.classList.add("tab-container");let a=document.createElement("div");a.classList.add("tab-one"),a.textContent="Home";let o=document.createElement("div");o.classList.add("tab-two"),o.textContent="Menu";let i=document.createElement("div");i.classList.add("tab-three"),i.textContent="Contact",r.appendChild(a),r.appendChild(o),r.appendChild(i),t.appendChild(n),t.appendChild(r);let c=document.createElement("div");c.classList.add("hero");let s=document.createElement("div");s.classList.add("line-one"),s.textContent="Hungry?";let d=document.createElement("div");d.classList.add("line-two"),d.textContent="We got you fam.";let l=document.createElement("div");l.classList.add("line-three"),l.textContent="McDonalds's has been serving to happy customers since 1940. We specialize in burgers. We use only a hundred percent pure beef with no additives, preservatives or flavor enhancers. Our vegetables are also natural and sourced from the cold mountains of Bukidnon and Baguio. Our buns are baked locally and delivered fresh regularly to guarantee taste and freshness.",c.appendChild(s),c.appendChild(d),c.appendChild(l),e.appendChild(t),e.appendChild(c)}},633:(e,t,n)=>{e.exports=n.p+"3b83a93885d2596d26a8.jpg"},350:(e,t,n)=>{e.exports=n.p+"e9baa9622e3d9d9819e8.png"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(0,n(376).Y)()})();