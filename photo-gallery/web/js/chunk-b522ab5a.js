(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b522ab5a"],{"0374":function(t,e,n){"use strict";var i=n("a89a"),r=n.n(i);r.a},"0d77":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("image-preloader",{key:t.preloaderKey,attrs:{id:"preloader",srcs:t.arr_thumbnails},on:{loaded:t.loadedOne,"loaded-all":t.loadedAll}}),t._l(t.posts,function(e,i){return n("PhotoItem",{key:i,attrs:{eventName:t.eventName,urlImg:e.thumbnail,index:i}})}),n("infinite-loading",{key:t.infiniteKey,class:"col-12",attrs:{forceUseInfiniteWrapper:!0,spinner:"spiral"},on:{infinite:t.infiniteHandler}},[n("span",{attrs:{slot:"no-more"},slot:"no-more"}),n("span",{attrs:{slot:"no-results"},slot:"no-results"})]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"col-12 text-center p-3"},[t._m(0)])],2)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner-border text-light",staticStyle:{width:"2.5rem",height:"2.5rem"},attrs:{role:"status"}},[n("span",{staticClass:"sr-only"},[t._v("Loading...")])])}],o=n("cebc"),a=(n("ac4d"),n("8a81"),n("ac6a"),n("96cf"),n("3b8d")),s=n("e166"),c=n.n(s),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{staticClass:"imagePreloader_components",style:{content:t.content},attrs:{id:t.id}})])},u=[],f={props:["src","srcs","images","image","img","imgs","id"],data:function(){return{loadedCount:0,loadedImgs:[]}},computed:{data:function(){return(this.src?new Array(this.src):[]).concat(this.srcs).concat(this.images).concat(this.image).concat(this.img).concat(this.imgs).filter(function(t){return t})},content:function(){return this.loadedImgs.length?this.loadedImgs.length>1?"url("+this.loadedImgs.join(") url(")+")":"url("+this.loadedImgs[0]+")":""}},methods:{loaded:function(t,e){this.loadedCount++,this.loadedImgs.push(t),this.$emit("loaded",{id:this.id,src:t,index:e,count:this.loadedCount,length:this.data.length,progress:this.loadedCount/this.data.length*100}),this.loadedCount===this.data.length&&this.$emit("loaded-all",this.id||!0)}},mounted:function(){for(var t=this,e=function(e){var n=new Image,i=t.data.length-e;n.src=t.data[i],n.onload=function(){t.loaded(n.src,i)}},n=this.data.length;n>0;n--)e(n)}},d=f,h=(n("0374"),n("2877")),p=Object(h["a"])(d,l,u,!1,null,null,null),m=p.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"photo-item col-6 col-lg-3"},[n("div",{staticClass:"event-image"},[n("img",{ref:"photo",class:{"image-loaded":t.loaded},attrs:{src:t.urlImg},on:{load:function(e){t.loaded=!0}}})]),n("div",{staticClass:"view-alpha",on:{click:t.itemClicked}},[t._m(0)])])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn-view"},[n("p",{staticClass:"m-0"},[t._v("VIEW")])])}],y=(n("c5f6"),n("2f62")),v={name:"PhotoItem",props:{eventName:String,urlImg:String,index:Number},data:function(){return{loaded:!1}},computed:Object(o["a"])({},Object(y["c"])({getCurrentPhoto:"getCurrentPhoto"})),methods:Object(o["a"])({},Object(y["b"])({updateCurrentPhoto:"updateCurrentPhoto",updateShowPhotoViewer:"updateShowPhotoViewer"}),{itemClicked:function(){this.updateCurrentPhoto(this.index)}})},S=v,w=(n("1be2"),Object(h["a"])(S,g,b,!1,null,"0120222d",null)),P=w.exports,O={name:"Gallery",data:function(){return{posts:[],arr_thumbnails:[],preloaderKey:"preloaderKeyNull",infiniteKey:"infiniteKeyNull",isLoading:!1}},props:["eventName"],components:{PhotoItem:P,imagePreloader:m,InfiniteLoading:c.a},created:function(){var t=this;this.updateInitScroll(!1),this.isLoading=!0,Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,0!=t.getPhotos.length){e.next=6;break}return e.next=4,t.axios.get("".concat(t.getUrlApi,"/photos.json")).then(function(e){console.log("response",e),t.setPhotos(e.data.photos);var n=!0,i=!1,r=void 0;try{for(var o,a=e.data.photos[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;t.arr_thumbnails.push(s.thumbnail)}}catch(c){i=!0,r=c}finally{try{n||null==a.return||a.return()}finally{if(i)throw r}}t.preloaderKey="preloaderKey"}).catch(function(t){console.log(t)});case 4:e.next=8;break;case 6:console.log("Photos",t.getPhotos),t.isLoading=!1;case 8:e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])}))()},computed:Object(o["a"])({},Object(y["c"])({getUrlApi:"getUrlApi",getPhotos:"getPhotos",limitPush:"getLimitPush",initScroll:"getInitScroll"})),methods:Object(o["a"])({},Object(y["b"])({updateInitScroll:"updateInitScroll",setPhotos:"setPhotos"}),{loadedOne:function(t){t.count>this.limitPush&&(this.infiniteKey="infiniteKey",this.isLoading=!1,console.log("preload ".concat(this.limitPush,".")))},loadedAll:function(){},infiniteHandler:function(t){console.log("infiniteHandler");var e=this.getPhotos.slice(this.posts.length,this.posts.length+this.limitPush);this.posts=this.posts.concat(e),this.getPhotos.length>this.posts.length?t.loaded():t.complete(),!this.initScroll&&this.getPhotos>0&&this.updateInitScroll(!0)}})},L=O,C=Object(h["a"])(L,i,r,!1,null,"f2e4a03c",null);e["default"]=C.exports},1169:function(t,e,n){var i=n("2d95");t.exports=Array.isArray||function(t){return"Array"==i(t)}},"1be2":function(t,e,n){"use strict";var i=n("9108"),r=n.n(i);r.a},"37c8":function(t,e,n){e.f=n("2b4c")},"3a72":function(t,e,n){var i=n("7726"),r=n("8378"),o=n("2d00"),a=n("37c8"),s=n("86cc").f;t.exports=function(t){var e=r.Symbol||(r.Symbol=o?{}:i.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)})}},"67ab":function(t,e,n){var i=n("ca5a")("meta"),r=n("d3f4"),o=n("69a8"),a=n("86cc").f,s=0,c=Object.isExtensible||function(){return!0},l=!n("79e5")(function(){return c(Object.preventExtensions({}))}),u=function(t){a(t,i,{value:{i:"O"+ ++s,w:{}}})},f=function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,i)){if(!c(t))return"F";if(!e)return"E";u(t)}return t[i].i},d=function(t,e){if(!o(t,i)){if(!c(t))return!0;if(!e)return!1;u(t)}return t[i].w},h=function(t){return l&&p.NEED&&c(t)&&!o(t,i)&&u(t),t},p=t.exports={KEY:i,NEED:!1,fastKey:f,getWeak:d,onFreeze:h}},"7bbc":function(t,e,n){var i=n("6821"),r=n("9093").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return r(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?s(t):r(i(t))}},"8a81":function(t,e,n){"use strict";var i=n("7726"),r=n("69a8"),o=n("9e1e"),a=n("5ca1"),s=n("2aba"),c=n("67ab").KEY,l=n("79e5"),u=n("5537"),f=n("7f20"),d=n("ca5a"),h=n("2b4c"),p=n("37c8"),m=n("3a72"),g=n("d4c0"),b=n("1169"),y=n("cb7c"),v=n("d3f4"),S=n("4bf8"),w=n("6821"),P=n("6a99"),O=n("4630"),L=n("2aeb"),C=n("7bbc"),x=n("11e9"),I=n("2621"),j=n("86cc"),_=n("0d58"),E=x.f,N=j.f,k=C.f,T=i.Symbol,A=i.JSON,K=A&&A.stringify,M="prototype",F=h("_hidden"),V=h("toPrimitive"),D={}.propertyIsEnumerable,G=u("symbol-registry"),H=u("symbols"),$=u("op-symbols"),J=Object[M],R="function"==typeof T&&!!I.f,W=i.QObject,U=!W||!W[M]||!W[M].findChild,Y=o&&l(function(){return 7!=L(N({},"a",{get:function(){return N(this,"a",{value:7}).a}})).a})?function(t,e,n){var i=E(J,e);i&&delete J[e],N(t,e,n),i&&t!==J&&N(J,e,i)}:N,q=function(t){var e=H[t]=L(T[M]);return e._k=t,e},z=R&&"symbol"==typeof T.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof T},B=function(t,e,n){return t===J&&B($,e,n),y(t),e=P(e,!0),y(n),r(H,e)?(n.enumerable?(r(t,F)&&t[F][e]&&(t[F][e]=!1),n=L(n,{enumerable:O(0,!1)})):(r(t,F)||N(t,F,O(1,{})),t[F][e]=!0),Y(t,e,n)):N(t,e,n)},Q=function(t,e){y(t);var n,i=g(e=w(e)),r=0,o=i.length;while(o>r)B(t,n=i[r++],e[n]);return t},X=function(t,e){return void 0===e?L(t):Q(L(t),e)},Z=function(t){var e=D.call(this,t=P(t,!0));return!(this===J&&r(H,t)&&!r($,t))&&(!(e||!r(this,t)||!r(H,t)||r(this,F)&&this[F][t])||e)},tt=function(t,e){if(t=w(t),e=P(e,!0),t!==J||!r(H,e)||r($,e)){var n=E(t,e);return!n||!r(H,e)||r(t,F)&&t[F][e]||(n.enumerable=!0),n}},et=function(t){var e,n=k(w(t)),i=[],o=0;while(n.length>o)r(H,e=n[o++])||e==F||e==c||i.push(e);return i},nt=function(t){var e,n=t===J,i=k(n?$:w(t)),o=[],a=0;while(i.length>a)!r(H,e=i[a++])||n&&!r(J,e)||o.push(H[e]);return o};R||(T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===J&&e.call($,n),r(this,F)&&r(this[F],t)&&(this[F][t]=!1),Y(this,t,O(1,n))};return o&&U&&Y(J,t,{configurable:!0,set:e}),q(t)},s(T[M],"toString",function(){return this._k}),x.f=tt,j.f=B,n("9093").f=C.f=et,n("52a7").f=Z,I.f=nt,o&&!n("2d00")&&s(J,"propertyIsEnumerable",Z,!0),p.f=function(t){return q(h(t))}),a(a.G+a.W+a.F*!R,{Symbol:T});for(var it="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;it.length>rt;)h(it[rt++]);for(var ot=_(h.store),at=0;ot.length>at;)m(ot[at++]);a(a.S+a.F*!R,"Symbol",{for:function(t){return r(G,t+="")?G[t]:G[t]=T(t)},keyFor:function(t){if(!z(t))throw TypeError(t+" is not a symbol!");for(var e in G)if(G[e]===t)return e},useSetter:function(){U=!0},useSimple:function(){U=!1}}),a(a.S+a.F*!R,"Object",{create:X,defineProperty:B,defineProperties:Q,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:nt});var st=l(function(){I.f(1)});a(a.S+a.F*st,"Object",{getOwnPropertySymbols:function(t){return I.f(S(t))}}),A&&a(a.S+a.F*(!R||l(function(){var t=T();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))})),"JSON",{stringify:function(t){var e,n,i=[t],r=1;while(arguments.length>r)i.push(arguments[r++]);if(n=e=i[1],(v(e)||void 0!==t)&&!z(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!z(e))return e}),i[1]=e,K.apply(A,i)}}),T[M][V]||n("32e9")(T[M],V,T[M].valueOf),f(T,"Symbol"),f(Math,"Math",!0),f(i.JSON,"JSON",!0)},9108:function(t,e,n){},a89a:function(t,e,n){},ac4d:function(t,e,n){n("3a72")("asyncIterator")},ac6a:function(t,e,n){for(var i=n("cadf"),r=n("0d58"),o=n("2aba"),a=n("7726"),s=n("32e9"),c=n("84f2"),l=n("2b4c"),u=l("iterator"),f=l("toStringTag"),d=c.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=r(h),m=0;m<p.length;m++){var g,b=p[m],y=h[b],v=a[b],S=v&&v.prototype;if(S&&(S[u]||s(S,u,d),S[f]||s(S,f,b),c[b]=d,y))for(g in i)S[g]||o(S,g,i[g],!0)}},d4c0:function(t,e,n){var i=n("0d58"),r=n("2621"),o=n("52a7");t.exports=function(t){var e=i(t),n=r.f;if(n){var a,s=n(t),c=o.f,l=0;while(s.length>l)c.call(t,a=s[l++])&&e.push(a)}return e}}}]);