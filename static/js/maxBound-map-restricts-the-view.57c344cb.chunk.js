(this["webpackJsonpreact-leaflet-examples"]=this["webpackJsonpreact-leaflet-examples"]||[]).push([[29],{39:function(t,e,n){"use strict";n.r(e);var o=n(71),r=n(0),a=n(108),c=n(69),i=n(64),s=n.n(i),u=n(1),l=[52.22977,21.01178];e.default=function(){var t=Object(r.useState)(null),e=Object(o.a)(t,2),n=e[0],i=e[1];return Object(r.useEffect)((function(){if(n){var t=s.a.DomUtil.create("div","legend"),e=s.a.Control.extend({options:{position:"bottomleft"},onAdd:function(){return t.textContent="move the map",t}});n.addControl(new e);var o=n.getBounds();n.setMaxBounds(o),n.fitBounds(o,{reset:!0})}}),[n]),Object(u.jsx)(a.a,{whenCreated:i,center:l,zoom:18,scrollWheelZoom:!1,children:Object(u.jsx)(c.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})})}},68:function(t,e,n){"use strict";function o(t,e,n){var o=e.opacity,r=e.zIndex;null!=o&&o!==n.opacity&&t.setOpacity(o),null!=r&&r!==n.zIndex&&t.setZIndex(r)}n.d(e,"a",(function(){return o}))},69:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n(66),r=n(76),a=n(79),c=n(68),i=n(64),s=Object(r.e)((function(t,e){var n=t.url,r=Object(o.a)(t,["url"]);return{instance:new i.TileLayer(n,Object(a.a)(r,e)),context:e}}),c.a)}}]);