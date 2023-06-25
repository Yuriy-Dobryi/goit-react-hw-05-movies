/*! For license information please see 840.6c2d90b6.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[840],{702:function(t,e,n){n.d(e,{Z:function(){return P}});var r,o,i=n(8683),a=n(5861),c=n(9439),u=n(2791),s=n(7689),l=n(3975),f=n(8368),p=n(168),h=n(5867),d=h.ZP.img(r||(r=(0,p.Z)(["\n  height: 350px;\n  align-self: flex-start;\n  object-fit: cover;\n  border-radius: 20px;\n"]))),v=h.ZP.p(o||(o=(0,p.Z)(["\n  align-self: flex-start;\n  padding: 5px;\n  font-size: 18px;\n  text-align: center;\n"]))),g=n(2757),m=n(184);function x(t){var e=t.title,n=t.name,r=t.poster_path,o=t.tagline,i="https://image.tmdb.org/t/p/w500/".concat(r);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d,{src:r?i:g,alt:o||"Image coming soon"}),(0,m.jsx)(v,{children:e||n})]})}var y,w,b,j=n(1087),L=h.ZP.ul(y||(y=(0,p.Z)(["\n  margin-top: 30px;\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 25px;\n"]))),_=h.ZP.li(w||(w=(0,p.Z)(["\n  color: white;\n  background-color: #5b4865;\n  border-radius: 20px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n  }\n"]))),Z=(0,h.ZP)(j.rU)(b||(b=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  height: 100%;\n"])));function E(){E=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(O){u=function(t,e,n){return t[e]=n}}function s(t,e,n,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new Z(o||[]);return r(a,"_invoke",{value:b(t,n,c)}),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(O){return{type:"throw",arg:O}}}t.wrap=s;var f={};function p(){}function h(){}function d(){}var v={};u(v,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(P([])));m&&m!==e&&n.call(m,i)&&(v=m);var x=d.prototype=p.prototype=Object.create(v);function y(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(r,i,a,c){var u=l(t[r],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function b(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return k()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=j(a,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function j(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=d,r(x,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:h,configurable:!0}),h.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},y(w.prototype),u(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new w(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(x),u(x,c,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=P,Z.prototype={constructor:Z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function P(t){var e=t.API_path,n=t.query,r=(0,u.useState)([]),o=(0,c.Z)(r,2),p=o[0],h=o[1],d=(0,u.useState)(!1),v=(0,c.Z)(d,2),g=v[0],y=v[1],w=(0,s.TH)();return(0,u.useEffect)((function(){y(!0),function(){var t=(0,a.Z)(E().mark((function t(){var r,o,i;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,f.V9)(e,n);case 2:r=t.sent,o=r.results,i=o.map((function(t){return{id:t.id,poster_path:t.poster_path,title:t.title,name:t.name,tagline:t.tagline}})),h(i),y(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e,n]),(0,m.jsx)(m.Fragment,{children:g?(0,m.jsx)(l.gy,(0,i.Z)({},f.Eq)):(0,m.jsx)(L,{children:p.map((function(t){var e=t.id,n=t.title,r=t.name,o=t.poster_path,i=t.tagline;return(0,m.jsx)(_,{children:(0,m.jsx)(Z,{to:"/movies/".concat(e),state:{from:w},children:(0,m.jsx)(x,{title:n,name:r,poster_path:o,tagline:i})})},e)}))})})}},8840:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var r,o,i,a,c=n(9439),u=n(1087),s=n(168),l=n(5867),f=n(8820),p=l.ZP.button(r||(r=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 20px;\n  border: none;\n  background: none;\n  outline: none;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.3);\n  }\n"]))),h=l.ZP.form(o||(o=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  width: 400px;\n  margin: 0 auto;\n  padding: 0 15px;\n  background-color: white;\n  overflow: hidden;\n  border-radius: 30px;\n\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  &:focus-within {\n    outline: 5px solid #ae8fd0;\n    \n    "," {\n      transform: scale(1.3);\n    }\n  }\n"])),p),d=l.ZP.input(i||(i=(0,s.Z)(["\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),v=(0,l.ZP)(f.RB5)(a||(a=(0,s.Z)(["\n  width: 25px;\n  height: 25px;\n"]))),g=n(184);function m(t){var e=t.updateParams;return(0,g.jsxs)(h,{onSubmit:function(t){t.preventDefault();var n=t.currentTarget.elements.search.value;e(n.trim())},children:[(0,g.jsx)(d,{name:"search",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,g.jsx)(p,{type:"submit",children:(0,g.jsx)(v,{})})]})}var x=n(702);function y(){var t,e=(0,u.lr)(),n=(0,c.Z)(e,2),r=n[0],o=n[1],i=null!==(t=r.get("name"))&&void 0!==t?t:"";return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(m,{updateParams:function(t){o(""!==t?{name:t}:{})}}),i&&(0,g.jsx)(x.Z,{API_path:"search/movie",query:i})]})}},2757:function(t,e,n){t.exports=n.p+"static/media/default.09b3ed3f5ffb038f1db7.png"}}]);
//# sourceMappingURL=840.6c2d90b6.chunk.js.map