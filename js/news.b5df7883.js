(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["news"],{"013c":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"mt-5",attrs:{id:"newsPage"}},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-nav",{attrs:{tabs:"",align:"center"}},[a("b-nav-item",{attrs:{to:"/newsPage/all",exact:"","exact-active-class":"active"}},[t._v("所有消息")]),a("b-nav-item",{attrs:{to:"/newsPage/news",exact:"","exact-active-class":"active"}},[t._v("新聞")]),a("b-nav-item",{attrs:{to:"/newsPage/announcement",exact:"","exact-active-class":"active"}},[t._v("公告")]),a("b-nav-item",{attrs:{to:"/newsPage/promote",exact:"","exact-active-class":"active"}},[t._v("推廣")]),a("b-nav-item",{attrs:{to:"/newsPage/other",exact:"","exact-active-class":"active"}},[t._v("其他")])],1)],1),a("b-col",{attrs:{cols:"12"}},[a("router-view")],1)],1)],1)},r=[],s=a("2877"),c={},l=Object(s["a"])(c,n,r,!1,null,null,null);e["default"]=l.exports},1365:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{staticClass:"text-center mt-5"},[t._v("所有消息"),a("b-table",{ref:"table",attrs:{items:t.news,fields:t.fields}})],1)},r=[],s=a("1da1"),c=(a("96cf"),{data:function(){return{news:[]}},createdNews:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/news");case 3:a=e.sent,n=a.data,t.movies=n.result,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:"片單取得失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}),l=c,i=a("2877"),u=Object(i["a"])(l,n,r,!1,null,null,null);e["default"]=u.exports},"3dd4":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{staticClass:"text-center mt-5"},[t._v("推廣")])},r=[],s=a("2877"),c={},l=Object(s["a"])(c,n,r,!1,null,null,null);e["default"]=l.exports},"9f83":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{staticClass:"text-center mt-5"},[t._v("新聞")])},r=[],s=a("2877"),c={},l=Object(s["a"])(c,n,r,!1,null,null,null);e["default"]=l.exports},a2e0:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{staticClass:"text-center mt-5"},[t._v("公告")])},r=[],s=a("2877"),c={},l=Object(s["a"])(c,n,r,!1,null,null,null);e["default"]=l.exports},fa20:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{staticClass:"text-center mt-5"},[t._v("其他")])},r=[],s=a("2877"),c={},l=Object(s["a"])(c,n,r,!1,null,null,null);e["default"]=l.exports},fcd2:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{staticClass:"text-center mt-5"},[t._v("所有消息")])},r=[],s=a("2877"),c={},l=Object(s["a"])(c,n,r,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=news.b5df7883.js.map