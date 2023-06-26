/*! For license information please see 415.cf301ce3.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{6503:function(t,e,r){r.d(e,{Z:function(){return P}});var n,o,i=r(1413),a=r(5861),c=r(9439),u=r(2791),s=r(7689),l=r(3975),f=r(8174),h=r(8368),p=r(168),d=r(5867),v=d.ZP.img(n||(n=(0,p.Z)(["\n  width: 100%;\n  height: 350px;\n  align-self: flex-start;\n  border-radius: 20px;\n"]))),g=d.ZP.p(o||(o=(0,p.Z)(["\n  align-self: flex-start;\n  padding: 5px;\n  font-size: 18px;\n  text-align: center;\n"]))),y=r(2757),m=r(184);function x(t){var e=t.title,r=t.name,n=t.poster_path,o=t.tagline,i="https://image.tmdb.org/t/p/w500/".concat(n);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(v,{src:n?i:y,alt:o||"Poster"}),(0,m.jsx)(g,{children:e||r})]})}var w,b,L,_=r(1087),j=d.ZP.ul(w||(w=(0,p.Z)(["\n  display: grid;\n  margin-top: 30px;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 25px;\n"]))),E=d.ZP.li(b||(b=(0,p.Z)(["\n  color: white;\n  background-color: #5b4865;\n  border-radius: 20px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n  }\n"]))),k=(0,d.ZP)(_.rU)(L||(L=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  height: 100%;\n"])));function Z(){Z=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(O){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),c=new E(o||[]);return n(a,"_invoke",{value:b(t,r,c)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=s;var f={};function h(){}function p(){}function d(){}var v={};u(v,i,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(k([])));y&&y!==e&&r.call(y,i)&&(v=y);var m=d.prototype=h.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(n,i,a,c){var u=l(t[n],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function b(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return p.prototype=d,n(m,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},x(w.prototype),u(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(m),u(m,c,"Generator"),u(m,i,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function P(t){var e=t.API_path,r=t.query,n=(0,u.useState)([]),o=(0,c.Z)(n,2),p=o[0],d=o[1],v=(0,u.useState)(!1),g=(0,c.Z)(v,2),y=g[0],w=g[1],b=(0,s.TH)();return(0,u.useEffect)((function(){w(!0),function(){var t=(0,a.Z)(Z().mark((function t(){var n,o,i,a;return Z().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,h.V9)(e,r);case 3:if(n=t.sent,o=n.results,0!==(i=n.total_results)){t.next=9;break}throw d([]),new Error("Sorry, no movies found with that name.");case 9:f.Am.success("There are found ".concat(i," movies. Currently, only the first page will be displayed, but we are working on pagination with infinite scroll. Stay tuned for updates!")),a=o.map((function(t){return{id:t.id,poster_path:t.poster_path,title:t.title,name:t.name,tagline:t.tagline}})),d(a),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),f.Am.error(t.t0.message);case 17:return t.prev=17,w(!1),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[0,14,17,20]])})));return function(){return t.apply(this,arguments)}}()()}),[e,r]),(0,m.jsx)(m.Fragment,{children:y?(0,m.jsx)(l.gy,(0,i.Z)({},h.Eq)):(0,m.jsx)(j,{children:p.map((function(t){var e=t.id,r=t.title,n=t.name,o=t.poster_path,i=t.tagline;return(0,m.jsx)(E,{children:(0,m.jsx)(k,{to:"/movies/".concat(e),state:{from:b},children:(0,m.jsx)(x,{title:r,name:n,poster_path:o,tagline:i})})},e)}))})})}},5415:function(t,e,r){r.r(e),r.d(e,{default:function(){return s}});var n,o=r(168),i=r(6503),a=r(5867),c=r(184),u=a.ZP.h1(n||(n=(0,o.Z)(["\n  color: #424254;\n  font-size: 24px;\n  text-align: center;\n"])));function s(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u,{children:"Presenting the epitome of today's the most popular films:"}),(0,c.jsx)(i.Z,{API_path:"trending/movie/day"})]})}},2757:function(t,e,r){t.exports=r.p+"static/media/default.09b3ed3f5ffb038f1db7.png"}}]);
//# sourceMappingURL=415.cf301ce3.chunk.js.map