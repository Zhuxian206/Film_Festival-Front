(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["cart"],{a434:function(e,t,r){"use strict";var n=r("23e7"),a=r("da84"),i=r("23cb"),s=r("5926"),o=r("07fa"),c=r("7b0b"),u=r("65f0"),l=r("8418"),m=r("1dde"),d=m("splice"),f=a.TypeError,p=Math.max,h=Math.min,v=9007199254740991,b="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var r,n,a,m,d,w,k=c(this),g=o(k),x=i(e,g),y=arguments.length;if(0===y?r=n=0:1===y?(r=0,n=g-x):(r=y-2,n=h(p(s(t),0),g-x)),g+r-n>v)throw f(b);for(a=u(k,n),m=0;m<n;m++)d=x+m,d in k&&l(a,m,k[d]);if(a.length=n,r<n){for(m=x;m<g-n;m++)d=m+n,w=m+r,d in k?k[w]=k[d]:delete k[w];for(m=g;m>g-n+r;m--)delete k[m-1]}else if(r>n)for(m=g-n;m>x;m--)d=m+n-1,w=m+r-1,d in k?k[w]=k[d]:delete k[w];for(m=0;m<r;m++)k[m+x]=arguments[m+2];return k.length=g-n+r,a}})},b789:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{id:"cart"}},[r("b-table",{staticClass:"my-5",attrs:{items:e.movies,fields:e.fields,"tbody-tr-class":e.rowClass},scopedSlots:e._u([{key:"cell(image)",fn:function(t){return[t.item.movie.image?r("img",{staticStyle:{height:"50px"},attrs:{src:t.item.movie.image}}):e._e()]}},{key:"cell(name)",fn:function(t){return[e._v(e._s(t.item.movie.name))]}},{key:"cell(action)",fn:function(t){return[r("b-form-spinbutton",{attrs:{min:"1",inline:""},on:{input:function(r){return e.updateCart(t.index,t.item.quantity)}},model:{value:t.item.quantity,callback:function(r){e.$set(t.item,"quantity",r)},expression:"data.item.quantity"}}),e._v(" "),r("b-icon",{attrs:{icon:"x-circle-fill"},on:{click:function(r){return e.updateCart(t.index,0)}}})]}}])}),r("b-btn",{staticClass:"m-5 w-25",attrs:{variant:"dark",disabled:0===e.movies.length},on:{click:e.checkout}},[e._v("確認預約")]),r("div",{staticClass:"pushfooter"})],1)},a=[],i=r("1da1"),s=(r("96cf"),r("a434"),{data:function(){return{movies:[],fields:[{key:"image",label:""},{key:"name",label:"片名"},{key:"action",label:"操作"}]}},methods:{updateCart:function(e,t){var r=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r.api.patch("/users/me/cart",{movie:r.movies[e].movie._id,quantity:t},{headers:{authorization:"Bearer "+r.user.token}});case 3:0===t&&(r.movies.splice(e,1),r.$store.commit("user/updateCart",r.user.cart-1)),n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](0),r.$swal({icon:"error",title:"失敗",text:"修改預約清單失敗"});case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()},checkout:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.api.post("/orders",{},{headers:{authorization:"Bearer "+e.user.token}});case 3:e.$router.push("/orders"),e.$store.commit("user/updateCart",0),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.$swal({icon:"error",title:"失敗",text:"預約失敗"});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},rowClass:function(e,t){if(e&&"row"===t)return e.movie.upState?"":"bg-danger"}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.api.get("/users/me/cart",{headers:{authorization:"Bearer "+e.user.token}});case 3:r=t.sent,n=r.data,e.movies=n.result,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$swal({icon:"error",title:"失敗",text:"取得預約清單失敗"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}),o=s,c=r("2877"),u=Object(c["a"])(o,n,a,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=cart.d87d823f.js.map