(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a38fa17"],{"0d77":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[t._l(t.posts,function(e,n){return o("PhotoItem",{key:n,attrs:{eventName:t.eventName,urlImg:e.url,index:n}})}),o("infinite-loading",{class:"col-12",attrs:{forceUseInfiniteWrapper:!0,spinner:"spiral"},on:{infinite:t.infiniteHandler}},[o("span",{attrs:{slot:"no-more"},slot:"no-more"}),o("span",{attrs:{slot:"no-results"},slot:"no-results"})])],2)},s=[],a=(o("96cf"),o("3b8d")),i=o("cebc"),r=o("e166"),c=o.n(r),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"photo-item col-6 col-lg-3"},[o("div",{staticClass:"event-image"},[o("img",{ref:"photo",class:{"image-loaded":t.loaded},attrs:{src:t.urlImg},on:{load:function(e){t.loaded=!0}}})]),o("div",{staticClass:"view-alpha",on:{click:t.itemClicked}},[t._m(0)])])},u=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"btn-view"},[o("p",{staticClass:"m-0"},[t._v("VIEW")])])}],p=(o("c5f6"),o("2f62")),h={name:"PhotoItem",props:{eventName:String,urlImg:String,index:Number},data:function(){return{loaded:!1}},computed:Object(i["a"])({},Object(p["c"])({getCurrentPhoto:"getCurrentPhoto"})),methods:Object(i["a"])({},Object(p["b"])({updateCurrentPhoto:"updateCurrentPhoto",updateShowPhotoViewer:"updateShowPhotoViewer"}),{itemClicked:function(){this.updateCurrentPhoto(this.index)}})},d=h,m=(o("1be2"),o("2877")),f=Object(m["a"])(d,l,u,!1,null,"0120222d",null),g=f.exports,b={name:"Gallery",data:function(){return{posts:[]}},props:["eventName"],components:{PhotoItem:g,InfiniteLoading:c.a},created:function(){this.updateInitScroll(!1)},computed:Object(i["a"])({},Object(p["c"])({getUrlApi:"getUrlApi",getPhotos:"getPhotos",limitPush:"getLimitPush",initScroll:"getInitScroll"})),methods:Object(i["a"])({},Object(p["b"])({updateInitScroll:"updateInitScroll",setPhotos:"setPhotos"}),{infiniteHandler:function(t){var e=this;Object(a["a"])(regeneratorRuntime.mark(function o(){var n;return regeneratorRuntime.wrap(function(o){while(1)switch(o.prev=o.next){case 0:if(o.prev=0,0!=e.getPhotos.length){o.next=4;break}return o.next=4,e.axios.get("".concat(e.getUrlApi,"/photos.json")).then(function(t){e.setPhotos(t.data.photos)}).catch(function(t){console.log(t)});case 4:e.getPhotos.length>0?(n=e.getPhotos.slice(e.posts.length,e.posts.length+e.limitPush),e.posts=e.posts.concat(n),e.getPhotos.length>e.posts.length?t.loaded():t.complete(),e.initScroll||e.updateInitScroll(!0)):(console.log("No hay fotos para este evento."),t.complete()),o.next=10;break;case 7:o.prev=7,o.t0=o["catch"](0),console.error(o.t0);case 10:case"end":return o.stop()}},o,null,[[0,7]])}))()}})},v=b,P=Object(m["a"])(v,n,s,!1,null,"7d8b4d56",null);e["default"]=P.exports},"1be2":function(t,e,o){"use strict";var n=o("9108"),s=o.n(n);s.a},9108:function(t,e,o){}}]);