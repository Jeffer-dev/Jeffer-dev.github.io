(function(e){function t(t){for(var r,o,u=t[0],c=t[1],l=t[2],s=0,m=[];s<u.length;s++)o=u[s],a[o]&&m.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function u(e){return c.p+"js/"+({}[e]||e)+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-562bb94a":1,"chunk-b522ab5a":1,"chunk-d24b1fc6":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+".css",a=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var l=i[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var m=document.getElementsByTagName("style");for(u=0;u<m.length;u++){l=m[u],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=u(e),l=function(t){s.onerror=s.onload=null,clearTimeout(m);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var m=setTimeout(function(){l({type:"timeout",target:s})},12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var m=0;m<l.length;m++)t(l[m]);var f=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid",attrs:{id:"app"}},[n("router-view")],1)},a=[],i=(n("034f"),n("2877")),u={},c=Object(i["a"])(u,o,a,!1,null,null,null),l=c.exports,s=n("8c4f"),m=(n("7f7f"),n("2f62"));r["a"].use(m["a"]);var f=new m["a"].Store({state:{urlApi:"https://jeffer-dev.github.io/photo-gallery/api",openSendEmail:!1,currentPhoto:"",currentIndex:0,initScroll:!1,limitInit:24,limitPushing:12,events:[],photos:[],socialButtons:[{name:"facebook",image:"facebook.svg"},{name:"twitter",image:"twitter.svg"},{name:"instagram",image:"instagram.svg"},{name:"email",image:"email.svg"},{name:"download",image:"download.svg"}]},mutations:{SET_EVENTS:function(e,t){e.events=t},SET_PHOTOS:function(e,t){e.photos=t},UPDATE_CURRENT_PHOTO:function(e){e.currentPhoto={index:e.currentIndex,src:e.photos[e.currentIndex]};var t=p.currentRoute.params.eventName;p.push("/viewer/".concat(t,"/").concat(e.currentPhoto.src.name))},SET_CURRENT_INDEX:function(e,t){e.currentIndex=t},SET_INDEX_PREV_PHOTO:function(e){e.currentIndex=e.currentPhoto.index>0?e.currentPhoto.index-1:e.photos.length-1},SET_INDEX_NEXT_PHOTO:function(e){e.currentIndex=e.currentPhoto.index<e.photos.length-1?e.currentPhoto.index+1:0},UPDATE_INIT_SCROLL:function(e,t){e.initScroll=t},SET_OPEN_SEND_EMAIL:function(e,t){e.openSendEmail=t}},actions:{setEvents:function(e,t){var n=e.commit;n("SET_EVENTS",t)},setPhotos:function(e,t){var n=e.commit;n("SET_PHOTOS",t)},updateCurrentPhoto:function(e,t){var n=e.commit;n("SET_CURRENT_INDEX",t),n("UPDATE_CURRENT_PHOTO")},setPrevPhoto:function(e){var t=e.commit;t("SET_INDEX_PREV_PHOTO"),t("UPDATE_CURRENT_PHOTO")},setNextPhoto:function(e){var t=e.commit;t("SET_INDEX_NEXT_PHOTO"),t("UPDATE_CURRENT_PHOTO")},updateInitScroll:function(e,t){var n=e.commit;n("UPDATE_INIT_SCROLL",t)},setOpenSendEmail:function(e,t){var n=e.commit;n("SET_OPEN_SEND_EMAIL",t)}},getters:{getUrlApi:function(e){return e.urlApi},getEvents:function(e){return e.events},getPhotos:function(e){return e.photos},getCurrentPhoto:function(e){return e.currentPhoto},getSocialButtons:function(e){return e.socialButtons},getInitScroll:function(e){return e.initScroll},getLimitPush:function(e){return e.initScroll?e.limitPushing:e.limitInit},getOpenSendEmail:function(e){return e.openSendEmail}}});r["a"].use(s["a"]);var d=new s["a"]({routes:[{path:"/",redirect:{name:"home"}},{path:"/home",name:"home",component:function(){return Promise.all([n.e("chunk-3b581217"),n.e("chunk-70e5bd63"),n.e("chunk-d24b1fc6")]).then(n.bind(null,"bb51"))},meta:{title:"Events",metaFields:{title:"Gallery Events",url:"https://jeffer-dev.github.io/photo-gallery/web",image:"https://jeffer-dev.github.io/photo-gallery/assets/logo.png"}}},{path:"/gallery/:eventName",name:"gallery",props:!0,component:function(){return Promise.all([n.e("chunk-3b581217"),n.e("chunk-70e5bd63"),n.e("chunk-b522ab5a")]).then(n.bind(null,"0d77"))},meta:{title:"Gallery"}},{path:"/viewer/:eventName/:photo",name:"viewer",props:!0,component:function(){return Promise.all([n.e("chunk-3b581217"),n.e("chunk-562bb94a")]).then(n.bind(null,"e1b1"))},meta:{title:"Viewer",metaInfo:[]}}]});d.beforeEach(function(e,t,n){console.log(f),document.title=e.meta.title?e.meta.title:"",e.meta.metaFields&&(document.querySelector("head meta[property='og:title']").content=e.meta.metaFields.title?e.meta.metaFields.title:"",document.querySelector("head meta[property='og:url']").content=e.meta.metaFields.url?e.meta.metaFields.url:"",document.querySelector("head meta[property='og:image']").content=e.meta.metaFields.image?e.meta.metaFields.image:"",document.querySelector("head meta[name='twitter:title']").content=e.meta.metaFields.title?e.meta.metaFields.title:"",document.querySelector("head meta[name='twitter:image']").content=e.meta.metaFields.image?e.meta.metaFields.image:""),n()});var p=d,h=n("bc3a"),g=n.n(h),v=n("a7fe"),E=n.n(v);n("f9e3"),r["a"].use(E.a,g.a),r["a"].config.productionTip=!1,new r["a"]({router:p,store:f,render:function(e){return e(l)}}).$mount("#app")},"64a9":function(e,t,n){}});