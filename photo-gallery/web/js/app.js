(function(e){function t(t){for(var r,o,u=t[0],c=t[1],l=t[2],s=0,f=[];s<u.length;s++)o=u[s],i[o]&&f.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},i={app:0},a=[];function u(e){return c.p+"js/"+({}[e]||e)+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-562bb94a":1,"chunk-b522ab5a":1,"chunk-d24b1fc6":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+".css",i=c.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var l=a[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===i))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],s=l.getAttribute("data-href");if(s===r||s===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],p.parentNode.removeChild(p),n(a)},p.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(p)}).then(function(){o[e]=0}));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(function(t,n){r=i[e]=[t,n]});t.push(r[2]=a);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=u(e),l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,n[1](a)}i[e]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:s})},12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var p=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid",attrs:{id:"app"}},[n("router-view")],1)},i=[],a=(n("034f"),n("2877")),u={},c=Object(a["a"])(u,o,i,!1,null,null,null),l=c.exports,s=n("8c4f");r["a"].use(s["a"]);var f=new s["a"]({routes:[{path:"/",redirect:{name:"home"}},{path:"/home",name:"home",component:function(){return Promise.all([n.e("chunk-3b581217"),n.e("chunk-70e5bd63"),n.e("chunk-d24b1fc6")]).then(n.bind(null,"bb51"))}},{path:"/gallery/:eventName",name:"gallery",props:!0,component:function(){return Promise.all([n.e("chunk-3b581217"),n.e("chunk-70e5bd63"),n.e("chunk-b522ab5a")]).then(n.bind(null,"0d77"))}},{path:"/viewer/:eventName/:photo",name:"viewer",props:!0,component:function(){return Promise.all([n.e("chunk-3b581217"),n.e("chunk-562bb94a")]).then(n.bind(null,"e1b1"))}}]}),p=(n("7f7f"),n("2f62"));r["a"].use(p["a"]);var h=new p["a"].Store({state:{urlApi:"https://jeffer-dev.github.io/photo-gallery/api",openSendEmail:!1,currentPhoto:"",currentIndex:0,initScroll:!1,limitInit:24,limitPushing:12,events:[],photos:[],socialButtons:[{name:"facebook",image:"facebook.svg"},{name:"twitter",image:"twitter.svg"},{name:"instagram",image:"instagram.svg"},{name:"email",image:"email.svg"},{name:"download",image:"download.svg"}],metaFields:function(e){return{home:{title:{inner:"Events",separator:" "},meta:[{property:"og:type",content:"website"},{property:"og:title",content:"Gallery Events"},{property:"og:url",content:"https://jeffer-dev.github.io/photo-gallery/web/"},{property:"og:image",content:"https://jeffer-dev.github.io/photo-gallery/assets/logo.png"},{name:"twitter:card",content:"photo"},{name:"twitter:title",content:"Gallery Events"},{name:"twitter:image",content:"https://jeffer-dev.github.io/photo-gallery/assets/logo.png"}]}}}},mutations:{SET_EVENTS:function(e,t){e.events=t},SET_PHOTOS:function(e,t){e.photos=t},UPDATE_CURRENT_PHOTO:function(e){e.currentPhoto={index:e.currentIndex,src:e.photos[e.currentIndex]};var t=f.currentRoute.params.eventName;f.push("/viewer/".concat(t,"/").concat(e.currentPhoto.src.name))},SET_CURRENT_INDEX:function(e,t){e.currentIndex=t},SET_INDEX_PREV_PHOTO:function(e){e.currentIndex=e.currentPhoto.index>0?e.currentPhoto.index-1:e.photos.length-1},SET_INDEX_NEXT_PHOTO:function(e){e.currentIndex=e.currentPhoto.index<e.photos.length-1?e.currentPhoto.index+1:0},UPDATE_INIT_SCROLL:function(e,t){e.initScroll=t},SET_OPEN_SEND_EMAIL:function(e,t){e.openSendEmail=t}},actions:{setEvents:function(e,t){var n=e.commit;n("SET_EVENTS",t)},setPhotos:function(e,t){var n=e.commit;n("SET_PHOTOS",t)},updateCurrentPhoto:function(e,t){var n=e.commit;n("SET_CURRENT_INDEX",t),n("UPDATE_CURRENT_PHOTO")},setPrevPhoto:function(e){var t=e.commit;t("SET_INDEX_PREV_PHOTO"),t("UPDATE_CURRENT_PHOTO")},setNextPhoto:function(e){var t=e.commit;t("SET_INDEX_NEXT_PHOTO"),t("UPDATE_CURRENT_PHOTO")},updateInitScroll:function(e,t){var n=e.commit;n("UPDATE_INIT_SCROLL",t)},setOpenSendEmail:function(e,t){var n=e.commit;n("SET_OPEN_SEND_EMAIL",t)}},getters:{getUrlApi:function(e){return e.urlApi},getEvents:function(e){return e.events},getPhotos:function(e){return e.photos},getCurrentPhoto:function(e){return e.currentPhoto},getSocialButtons:function(e){return e.socialButtons},getInitScroll:function(e){return e.initScroll},getLimitPush:function(e){return e.initScroll?e.limitPushing:e.limitInit},getOpenSendEmail:function(e){return e.openSendEmail},getMetaFields:function(e){return e.metaFields(e.currentPhoto)}}}),m=n("bc3a"),d=n.n(m),g=n("a7fe"),v=n.n(g),E=n("342d"),b=n.n(E);n("f9e3"),r["a"].use(v.a,d.a),r["a"].use(b.a),r["a"].config.productionTip=!1,new r["a"]({router:f,store:h,render:function(e){return e(l)}}).$mount("#app")},"64a9":function(e,t,n){}});