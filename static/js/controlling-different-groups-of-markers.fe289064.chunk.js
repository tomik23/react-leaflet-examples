(this["webpackJsonpreact-leaflet-examples"]=this["webpackJsonpreact-leaflet-examples"]||[]).push([[10],{24:function(n,t,e){"use strict";e.r(t);e(0);var c=e(74),a=e(108),r=e(93),o=e(69),i=e(94),l=e(73),u=e(72),s=e(64),p=e.n(s),f=e(1),d=[{lat:52.230020586193795,lng:21.01083755493164,title:"point A1"},{lat:52.22924516170657,lng:21.011320352554325,title:"point A2"},{lat:52.229511304688444,lng:21.01270973682404,title:"point A3"},{lat:52.23040500771883,lng:21.012146472930908,title:"point A4"}],b=[{lat:52.229314161892106,lng:21.012055277824405,title:"point B1"},{lat:52.22950144756943,lng:21.01193726062775,title:"point B2"},{lat:52.22966573260081,lng:21.011829972267154,title:"point B3"},{lat:52.2298333027065,lng:21.011744141578678,title:"point B4"},{lat:52.2299680154701,lng:21.01164758205414,title:"point B5"},{lat:52.23012572745442,lng:21.011583209037784,title:"point B6"},{lat:52.230276867580336,lng:21.01143836975098,title:"point B7"},{lat:52.23046414919644,lng:21.011341810226444,title:"point B8"}],O=[52.22977,21.01178];function j(){var n=Object(c.b)({layeradd:function(t){var e=new p.a.LatLngBounds;n.eachLayer((function(n){n instanceof p.a.FeatureGroup&&e.extend(n.getBounds())})),e.isValid()&&n.fitBounds(e)}});return null}t.default=function(){return Object(f.jsxs)(a.a,{center:O,zoom:18,scrollWheelZoom:!1,children:[Object(f.jsxs)(r.a,{position:"topright",children:[Object(f.jsx)(o.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(f.jsx)(r.a.Overlay,{name:"point A",children:Object(f.jsx)(i.a,{children:d.map((function(n,t){var e=n.lat,c=n.lng,a=n.title;return Object(f.jsx)(l.a,{position:[e,c],children:Object(f.jsx)(u.a,{children:a})},t)}))})}),Object(f.jsx)(r.a.Overlay,{name:"point B",children:Object(f.jsx)(i.a,{children:b.map((function(n,t){var e=n.lat,c=n.lng,a=n.title;return Object(f.jsx)(l.a,{position:[e,c],children:Object(f.jsx)(u.a,{children:a})},t)}))})})]}),Object(f.jsx)(j,{})]})}},68:function(n,t,e){"use strict";function c(n,t,e){var c=t.opacity,a=t.zIndex;null!=c&&c!==e.opacity&&n.setOpacity(c),null!=a&&a!==e.zIndex&&n.setZIndex(a)}e.d(t,"a",(function(){return c}))},69:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var c=e(66),a=e(76),r=e(79),o=e(68),i=e(64),l=Object(a.e)((function(n,t){var e=n.url,a=Object(c.a)(n,["url"]);return{instance:new i.TileLayer(e,Object(r.a)(a,t)),context:t}}),o.a)},72:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var c=e(76),a=e(64),r=e(0),o=Object(c.c)((function(n,t){return{instance:new a.Popup(n,t.overlayContainer),context:t}}),(function(n,t,e,c){var a=e.onClose,o=e.onOpen,i=e.position;Object(r.useEffect)((function(){var e=n.instance;function r(n){n.popup===e&&(e.update(),c(!0),null==o||o())}function l(n){n.popup===e&&(c(!1),null==a||a())}return t.map.on({popupopen:r,popupclose:l}),null==t.overlayContainer?(null!=i&&e.setLatLng(i),e.openOn(t.map)):t.overlayContainer.bindPopup(e),function(){t.map.off({popupopen:r,popupclose:l}),t.map.removeLayer(e)}}),[n,t,c,a,o,i])}))},73:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var c=e(70),a=e(66),r=e(76),o=e(64),i=Object(r.b)((function(n,t){var e=n.position,r=Object(a.a)(n,["position"]),i=new o.Marker(e,r);return{instance:i,context:Object(c.a)(Object(c.a)({},t),{},{overlayContainer:i})}}),(function(n,t,e){t.position!==e.position&&n.setLatLng(t.position),null!=t.icon&&t.icon!==e.icon&&n.setIcon(t.icon),null!=t.zIndexOffset&&t.zIndexOffset!==e.zIndexOffset&&n.setZIndexOffset(t.zIndexOffset),null!=t.opacity&&t.opacity!==e.opacity&&n.setOpacity(t.opacity),null!=n.dragging&&t.draggable!==e.draggable&&(!0===t.draggable?n.dragging.enable():n.dragging.disable())}))},74:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return i}));var c=e(75),a=e(0);function r(){return Object(c.d)().map}function o(n,t){var e=r();return Object(a.useEffect)((function(){return e.on(n,t),function(){e.off(n,t)}}),[e,n,t]),e}function i(n){var t=r();return Object(a.useEffect)((function(){return t.on(n),function(){t.off(n)}}),[t,n]),t}},93:function(n,t,e){"use strict";e.d(t,"a",(function(){return O}));var c=e(71),a=e(70),r=e(66),o=e(87),i=e(88),l=e(77),u=e(75),s=e(64),p=e(0),f=e.n(p),d=Object(o.a)((function(n,t){n.children;var e=Object(r.a)(n,["children"]),c=new s.Control.Layers(void 0,void 0,e);return{instance:c,context:Object(a.a)(Object(a.a)({},t),{},{layersControl:c})}}),(function(n,t,e){t.collapsed!==e.collapsed&&(!0===t.collapsed?n.collapse():n.expand())})),b=Object(i.a)(d),O=Object(l.a)(b);function j(n){return function(t){var e=Object(u.d)(),r=Object(p.useRef)(t),o=Object(p.useState)(null),i=Object(c.a)(o,2),l=i[0],s=i[1],d=e.layersControl,b=e.map,O=Object(p.useCallback)((function(t){null!=d&&(r.current.checked&&b.addLayer(t),n(d,t,r.current.name),s(t))}),[d,b]),j=Object(p.useCallback)((function(n){null==d||d.removeLayer(n),s(null)}),[d]),g=Object(p.useMemo)((function(){return Object(a.a)(Object(a.a)({},e),{},{layerContainer:{addLayer:O,removeLayer:j}})}),[e,O,j]);return Object(p.useEffect)((function(){null!==l&&r.current!==t&&(!0!==t.checked||null!=r.current.checked&&!1!==r.current.checked?!0!==r.current.checked||null!=t.checked&&!1!==t.checked||b.removeLayer(l):b.addLayer(l),r.current=t)})),t.children?f.a.createElement(u.c,{value:g},t.children):null}}O.BaseLayer=j((function(n,t,e){n.addBaseLayer(t,e)})),O.Overlay=j((function(n,t,e){n.addOverlay(t,e)}))},94:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var c=e(70),a=e(66),r=e(76),o=e(64),i=Object(r.d)((function(n,t){n.children;var e=Object(a.a)(n,["children"]),r=new o.FeatureGroup([],e);return{instance:r,context:Object(c.a)(Object(c.a)({},t),{},{layerContainer:r,overlayContainer:r})}}))}}]);