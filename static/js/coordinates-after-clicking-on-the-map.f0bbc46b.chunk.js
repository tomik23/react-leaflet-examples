(this["webpackJsonpreact-leaflet-examples"]=this["webpackJsonpreact-leaflet-examples"]||[]).push([[12],{26:function(t,n,e){"use strict";e.r(n);var r=e(0),o=e(74),c=e(108),u=e(69),i=e(64),a=e.n(i),f=e(1),s=[52.22977,21.01178];function l(){var t=Object(o.a)();return Object(r.useEffect)((function(){if(t){var n=a.a.DomUtil.create("div","legend"),e=a.a.Control.extend({options:{position:"bottomleft"},onAdd:function(){return n.textContent="Click on map",n}});t.on("click",(function(t){n.textContent=t.latlng})),t.addControl(new e)}}),[t]),null}n.default=function(){return Object(f.jsxs)(c.a,{center:s,zoom:18,scrollWheelZoom:!1,children:[Object(f.jsx)(u.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(f.jsx)(l,{})]})}},68:function(t,n,e){"use strict";function r(t,n,e){var r=n.opacity,o=n.zIndex;null!=r&&r!==e.opacity&&t.setOpacity(r),null!=o&&o!==e.zIndex&&t.setZIndex(o)}e.d(n,"a",(function(){return r}))},69:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(66),o=e(76),c=e(79),u=e(68),i=e(64),a=Object(o.e)((function(t,n){var e=t.url,o=Object(r.a)(t,["url"]);return{instance:new i.TileLayer(e,Object(c.a)(o,n)),context:n}}),u.a)},74:function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return i}));var r=e(75),o=e(0);function c(){return Object(r.d)().map}function u(t,n){var e=c();return Object(o.useEffect)((function(){return e.on(t,n),function(){e.off(t,n)}}),[e,t,n]),e}function i(t){var n=c();return Object(o.useEffect)((function(){return n.on(t),function(){n.off(t)}}),[n,t]),n}}}]);