(this["webpackJsonpreact-leaflet-examples"]=this["webpackJsonpreact-leaflet-examples"]||[]).push([[16],{65:function(t,n,e){"use strict";e.r(n);var r=e(74),c=e(93),u=e(9),o=e(0),a=e(85),i=e(86),f=e(75),s=e.n(f),b=Object(i.d)((function(t,n){var e=t.bounds,c=Object(a.a)(t,["bounds"]),u=new f.Rectangle(e,c);return{instance:u,context:Object(r.a)(Object(r.a)({},n),{},{overlayContainer:u})}}),(function(t,n,e){n.bounds!==e.bounds&&t.setBounds(n.bounds)})),l=e(116),O=e(89),j=e(84),d=e(1),v=[52.22977,21.01178];var p=function(t){return t.bounds.map((function(t,n){return Object(d.jsx)(b,{bounds:t,color:"#".concat(Math.floor(16777215*Math.random()).toString(16)).toString(),weight:10,fillOpacity:.1},n)}))};function m(t){var n=t._northEast,e=t._southWest;return"SouthWest: ".concat(e,", NorthEast: ").concat(n)}var y=function(t){var n=t.map,e=Object(o.useState)([]),r=Object(u.a)(e,2),a=r[0],i=r[1];return Object(o.useEffect)((function(){if(n){var t=s.a.DomUtil.create("div","legend"),e=s.a.Control.extend({options:{position:"bottomleft"},onAdd:function(){return t.innerHTML=m(n.getBounds()),t}});n.addControl(new e),n.on("moveend zoomend",(function(){var e=n.getBounds();t.textContent=m(e),i((function(t){return[].concat(Object(c.a)(t),[e])}))}))}}),[n]),(null===a||void 0===a?void 0:a.length)<=0?Object(d.jsx)(p,{bounds:a}):null};n.default=function(){var t=Object(o.useState)(null),n=Object(u.a)(t,2),e=n[0],c=n[1];return Object(d.jsxs)(l.a,{whenCreated:c,center:v,zoom:18,scrollWheelZoom:!1,children:[Object(d.jsx)(O.a,Object(r.a)({},j.a)),Object(d.jsx)(y,{map:e})]})}},72:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(74);function c(t,n){var e,c=null!==(e=t.pane)&&void 0!==e?e:n.pane;return c?Object(r.a)(Object(r.a)({},t),{},{pane:c}):t}},73:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(0);function c(t,n){var e=Object(r.useRef)();Object(r.useEffect)((function(){return null!=n&&t.instance.on(n),e.current=n,function(){null!=e.current&&t.instance.off(e.current),e.current=null}}),[t,n])}},74:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}e.d(n,"a",(function(){return u}))},76:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"a",(function(){return f}));var r=e(0),c=e(77),u=e(71),o=e(73),a=e(72);function i(t,n){Object(r.useEffect)((function(){var e;return(null!==(e=n.layerContainer)&&void 0!==e?e:n.map).addLayer(t.instance),function(){var e;null==(e=n.layersControl)||e.removeLayer(t.instance),n.map.removeLayer(t.instance)}}),[n,t])}function f(t){return function(n){var e=Object(u.d)(),r=t(Object(a.a)(n,e),e);return Object(c.a)(e.map,n.attribution),Object(o.a)(r.current,n.eventHandlers),i(r.current,e),r}}},77:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(0);function c(t,n){var e=Object(r.useRef)(n);Object(r.useEffect)((function(){n!==e.current&&null!=t.attributionControl&&(null!=e.current&&t.attributionControl.removeAttribution(e.current),null!=n&&t.attributionControl.addAttribution(n)),e.current=n}),[t,n])}},79:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return f})),e.d(n,"c",(function(){return s}));var r=e(9),c=e(0),u=e.n(c),o=e(16),a=e(71);function i(t){function n(n,e){var r=t(n).current,o=r.instance,i=r.context;return Object(c.useImperativeHandle)(e,(function(){return o})),null==n.children?null:u.a.createElement(a.c,{value:i},n.children)}return Object(c.forwardRef)(n)}function f(t){function n(n,e){var u=Object(c.useState)(!1),a=Object(r.a)(u,2),i=a[0],f=a[1],s=t(n,f).current.instance;Object(c.useImperativeHandle)(e,(function(){return s})),Object(c.useEffect)((function(){i&&s.update()}),[s,i,n.children]);var b=s._contentNode;return b?Object(o.createPortal)(n.children,b):null}return Object(c.forwardRef)(n)}function s(t){function n(n,e){var r=t(n).current.instance;return Object(c.useImperativeHandle)(e,(function(){return r})),null}return Object(c.forwardRef)(n)}},80:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"a",(function(){return f}));var r=e(0),c=e(71),u=e(73),o=e(76),a=e(72);function i(t,n){var e=Object(r.useRef)();Object(r.useEffect)((function(){if(n.pathOptions!==e.current){var r,c=null!==(r=n.pathOptions)&&void 0!==r?r:{};t.instance.setStyle(c),e.current=c}}),[t,n])}function f(t){return function(n){var e=Object(c.d)(),r=t(Object(a.a)(n,e),e);return Object(u.a)(r.current,n.eventHandlers),Object(o.b)(r.current,e),i(r.current,n),r}}},81:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(0);function c(t,n){return null==n?function(n,e){return Object(r.useRef)(t(n,e))}:function(e,c){var u=Object(r.useRef)(t(e,c)),o=Object(r.useRef)(e),a=u.current.instance;return Object(r.useEffect)((function(){o.current!==e&&(n(a,e,o.current),o.current=e)}),[a,e,c]),u}}},82:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(0),c=e(71);function u(t){return function(n){var e=Object(c.d)(),u=t(n,e),o=u.current.instance,a=Object(r.useRef)(n.position),i=n.position;return Object(r.useEffect)((function(){return o.addTo(e.map),function(){o.remove()}}),[e.map,o]),Object(r.useEffect)((function(){null!=i&&i!==a.current&&(o.setPosition(i),a.current=i)}),[o,i]),u}}},83:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(77),c=e(71),u=e(73),o=e(72);function a(t,n){return function(e,a){var i=Object(c.d)(),f=t(Object(o.a)(e,i),i);return Object(r.a)(i.map,e.attribution),Object(u.a)(f.current,e.eventHandlers),n(f.current,i,e,a),f}}},84:function(t,n,e){"use strict";n.a={attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}},86:function(t,n,e){"use strict";e.d(n,"a",(function(){return f})),e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return b})),e.d(n,"d",(function(){return l})),e.d(n,"e",(function(){return O}));var r=e(79),c=e(82),u=e(81),o=e(76),a=e(83),i=e(80);function f(t){var n=Object(u.a)((function(n,e){return{instance:t(n),context:e}})),e=Object(c.a)(n);return Object(r.c)(e)}function s(t,n){var e=Object(u.a)(t,n),c=Object(o.a)(e);return Object(r.a)(c)}function b(t,n){var e=Object(u.a)(t),c=Object(a.a)(e,n);return Object(r.b)(c)}function l(t,n){var e=Object(u.a)(t,n),c=Object(i.a)(e);return Object(r.a)(c)}function O(t,n){var e=Object(u.a)(t,n),c=Object(o.a)(e);return Object(r.c)(c)}},88:function(t,n,e){"use strict";function r(t,n,e){var r=n.opacity,c=n.zIndex;null!=r&&r!==e.opacity&&t.setOpacity(r),null!=c&&c!==e.zIndex&&t.setZIndex(c)}e.d(n,"a",(function(){return r}))},89:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(85),c=e(86),u=e(72),o=e(88),a=e(75),i=Object(c.e)((function(t,n){var e=t.url,c=Object(r.a)(t,["url"]);return{instance:new a.TileLayer(e,Object(u.a)(c,n)),context:n}}),o.a)},93:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(11);var c=e(17);function u(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);