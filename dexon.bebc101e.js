parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QVnC":[function(require,module,exports) {
var t=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e,n){var o=r&&r.prototype instanceof v?r:v,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return N()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=_(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var u=h(t,r,e);if("normal"===u.type){if(n=e.done?p:s,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var f="suspendedStart",s="suspendedYield",l="executing",p="completed",y={};function v(){}function d(){}function g(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,L=w&&w(w(G([])));L&&L!==e&&n.call(L,i)&&(m=L);var x=g.prototype=v.prototype=Object.create(m);function E(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function b(t){var r;this._invoke=function(e,o){function i(){return new Promise(function(r,i){!function r(e,o,i,a){var c=h(t[e],t,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(f).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,a)})}a(c.arg)}(e,o,r,i)})}return r=r?r.then(i,i):i()}}function _(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,_(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function G(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:r,done:!0}}return d.prototype=x.constructor=g,g.constructor=d,g[c]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(b.prototype),b.prototype[a]=function(){return this},t.AsyncIterator=b,t.async=function(r,e,n,o){var i=new b(u(r,e,n,o));return t.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=G,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:G(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=t}catch(r){Function("r","regeneratorRuntime = r")(t)}
},{}],"PMvg":[function(require,module,exports) {
module.exports=require("regenerator-runtime");
},{"regenerator-runtime":"QVnC"}],"UN6U":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.newReply=exports.newPost=exports.loginDexon=exports.initDexon=exports.web3js=exports.BBSExtContract=exports.BBSContract=exports.ABIBBSExt=exports.ABIBBS=void 0;var e=t(require("@babel/runtime/regenerator"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t,n,r,a,o,s){try{var u=e[o](s),i=u.value}catch(p){return void n(p)}u.done?t(i):Promise.resolve(i).then(r,a)}function r(e){return function(){var t=this,r=arguments;return new Promise(function(a,o){var s=e.apply(t,r);function u(e){n(s,a,o,u,i,"next",e)}function i(e){n(s,a,o,u,i,"throw",e)}u(void 0)})}}var a=[{constant:!1,inputs:[{name:"content",type:"string"}],name:"Post",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,name:"content",type:"string"}],name:"Posted",type:"event"}];exports.ABIBBS=a;var o=[{constant:!1,inputs:[{name:"content",type:"string"}],name:"Post",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"origin",type:"bytes32"},{name:"vote",type:"uint256"},{name:"content",type:"string"}],name:"Reply",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,name:"origin",type:"bytes32"},{indexed:!1,name:"vote",type:"uint256"},{indexed:!1,name:"content",type:"string"}],name:"Replied",type:"event"},{constant:!0,inputs:[{name:"",type:"bytes32"}],name:"downvotes",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"bytes32"}],name:"upvotes",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"bytes32"}],name:"voted",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"}];exports.ABIBBSExt=o;var s="0x663002C4E41E5d04860a76955A7B9B8234475952";exports.BBSContract=s;var u="0xec368ba43010056abb3e5afd01957ea1fdbd3d8f";exports.BBSExtContract=u;var i=new Web3("https://mainnet-rpc.dexon.org");exports.web3js=i;var p="",c="",l=function(){var t=r(e.default.mark(function t(n){return e.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.dexon){e.next=6;break}return p=new Web3(window.dexon),e.next=4,p.eth.getAccounts();case 4:e.sent.length&&d(n);case 6:case"end":return e.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();exports.initDexon=l;var f=function(e){if(!window.dexon)return alert("DEXON Wallet not detected. (請安裝 DEXON 瀏覽器擴充套件)");window.dexon.enable(),d(e)};exports.loginDexon=f;var d=function(){var t=r(e.default.mark(function t(n){return e.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.eth.net.getId();case 2:if(237!==e.sent){e.next=8;break}y(n),console.log("DEXON Wallet connected"),e.next=9;break;case 8:return e.abrupt("return",alert("Wrong network"));case 9:case"end":return e.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),y=function(t){var n=function(){var n=r(e.default.mark(function n(){var r;return e.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.eth.getAccounts();case 2:(r=e.sent).length&&(c=r[0],t(c));case 4:case"end":return e.stop()}},n)}));return function(){return n.apply(this,arguments)}}();n(),setInterval(n,1e3)},x=function(){var t=r(e.default.mark(function t(n,r){var a,s,i;return e.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(p){e.next=2;break}return e.abrupt("return",alert("Please connect to your DEXON Wallet."));case 2:if(!(n.length>40)){e.next=4;break}return e.abrupt("return",alert("Title's length is over 40 characters."));case 4:return a="["+n+"]"+r,s=new p.eth.Contract(o,u),e.next=8,s.methods.Post(a).estimateGas();case 8:return i=e.sent,e.prev=9,e.next=12,s.methods.Post(a).send({from:c,gas:i});case 12:e.sent,window.location="index.html",e.next=19;break;case 16:e.prev=16,e.t0=e.catch(9),alert(e.t0);case 19:case"end":return e.stop()}},t,null,[[9,16]])}));return function(e,n){return t.apply(this,arguments)}}();exports.newPost=x;var b=function(){var t=r(e.default.mark(function t(n,r,a){var s,i;return e.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(p){e.next=2;break}return e.abrupt("return",alert("Please connect to your DEXON Wallet first."));case 2:if([0,1,2].includes(+r)){e.next=4;break}return e.abrupt("return",alert("Wrong type of replyType."));case 4:if(a.length){e.next=6;break}return e.abrupt("return",alert("No content."));case 6:if(!n){e.next=21;break}return s=new p.eth.Contract(o,u),e.next=10,s.methods.Reply(n,+r,a).estimateGas();case 10:return i=e.sent,e.prev=11,e.next=14,s.methods.Reply(n,+r,a).send({from:c,gas:i});case 14:e.sent,window.location.reload(),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(11),alert(e.t0);case 21:case"end":return e.stop()}},t,null,[[11,18]])}));return function(e,n,r){return t.apply(this,arguments)}}();exports.newReply=b;
},{"@babel/runtime/regenerator":"PMvg"}]},{},["UN6U"], null)