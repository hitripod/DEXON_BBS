parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QVnC":[function(require,module,exports) {
var t=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e,n){var o=r&&r.prototype instanceof v?r:v,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return N()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=_(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var u=h(t,r,e);if("normal"===u.type){if(n=e.done?p:s,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var f="suspendedStart",s="suspendedYield",l="executing",p="completed",y={};function v(){}function d(){}function g(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,L=w&&w(w(G([])));L&&L!==e&&n.call(L,i)&&(m=L);var x=g.prototype=v.prototype=Object.create(m);function E(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function b(t){var r;this._invoke=function(e,o){function i(){return new Promise(function(r,i){!function r(e,o,i,a){var c=h(t[e],t,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(f).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,a)})}a(c.arg)}(e,o,r,i)})}return r=r?r.then(i,i):i()}}function _(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,_(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function G(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:r,done:!0}}return d.prototype=x.constructor=g,g.constructor=d,g[c]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(b.prototype),b.prototype[a]=function(){return this},t.AsyncIterator=b,t.async=function(r,e,n,o){var i=new b(u(r,e,n,o));return t.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=G,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:G(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=t}catch(r){Function("r","regeneratorRuntime = r")(t)}
},{}],"PMvg":[function(require,module,exports) {
module.exports=require("regenerator-runtime");
},{"regenerator-runtime":"QVnC"}],"UN6U":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.newReply=exports.newPost=exports.loginDexon=exports.initDexon=exports.BBSExt=exports.BBS=exports.web3js=exports.BBSExtContract=exports.BBSContract=exports.ABIBBSExt=exports.ABIBBS=void 0;var t=e(require("@babel/runtime/regenerator"));function e(t){return t&&t.__esModule?t:{default:t}}function n(t,e,n,r,a,o,s){try{var u=t[o](s),i=u.value}catch(p){return void n(p)}u.done?e(i):Promise.resolve(i).then(r,a)}function r(t){return function(){var e=this,r=arguments;return new Promise(function(a,o){var s=t.apply(e,r);function u(t){n(s,a,o,u,i,"next",t)}function i(t){n(s,a,o,u,i,"throw",t)}u(void 0)})}}var a=[{constant:!1,inputs:[{name:"content",type:"string"}],name:"Post",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,name:"content",type:"string"}],name:"Posted",type:"event"}];exports.ABIBBS=a;var o=[{constant:!1,inputs:[{name:"content",type:"string"}],name:"Post",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"origin",type:"bytes32"},{name:"vote",type:"uint256"},{name:"content",type:"string"}],name:"Reply",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,name:"origin",type:"bytes32"},{indexed:!1,name:"vote",type:"uint256"},{indexed:!1,name:"content",type:"string"}],name:"Replied",type:"event"},{constant:!0,inputs:[{name:"",type:"bytes32"}],name:"downvotes",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"bytes32"}],name:"upvotes",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"bytes32"}],name:"voted",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"}];exports.ABIBBSExt=o;var s="0x663002C4E41E5d04860a76955A7B9B8234475952";exports.BBSContract=s;var u="0xec368ba43010056abb3e5afd01957ea1fdbd3d8f";exports.BBSExtContract=u;var i=new Web3("https://mainnet-rpc.dexon.org");exports.web3js=i;var p=new i.eth.Contract(a,s);exports.BBS=p;var c=new i.eth.Contract(o,u);exports.BBSExt=c;var l="",x="",f=function(){var e=r(t.default.mark(function e(n){return t.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.dexon){t.next=6;break}return l=new Web3(window.dexon),t.next=4,l.eth.getAccounts();case 4:t.sent.length&&y(n);case 6:case"end":return t.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();exports.initDexon=f;var d=function(t){if(!window.dexon)return alert("DEXON Wallet not detected. (請安裝 DEXON 瀏覽器擴充套件)");window.dexon.enable(),y(t)};exports.loginDexon=d;var y=function(){var e=r(t.default.mark(function e(n){return t.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.eth.net.getId();case 2:if(237!==t.sent){t.next=8;break}v(n),console.log("DEXON Wallet connected"),t.next=9;break;case 8:return t.abrupt("return",alert("Wrong network"));case 9:case"end":return t.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),v=function(e){var n=function(){var n=r(t.default.mark(function n(){var r;return t.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.eth.getAccounts();case 2:(r=t.sent).length&&(x=r[0],e(x));case 4:case"end":return t.stop()}},n)}));return function(){return n.apply(this,arguments)}}();n(),setInterval(n,1e3)},b=function(){var e=r(t.default.mark(function e(n,r){var a,s,i;return t.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(l){t.next=2;break}return t.abrupt("return",alert("Please connect to your DEXON Wallet."));case 2:if(!(n.length>40)){t.next=4;break}return t.abrupt("return",alert("Title's length is over 40 characters."));case 4:return a="["+n+"]"+r,s=new l.eth.Contract(o,u),t.next=8,s.methods.Post(a).estimateGas();case 8:return i=t.sent,t.prev=9,t.next=12,s.methods.Post(a).send({from:x,gas:i});case 12:t.sent,window.location="index.html",t.next=19;break;case 16:t.prev=16,t.t0=t.catch(9),alert(t.t0);case 19:case"end":return t.stop()}},e,null,[[9,16]])}));return function(t,n){return e.apply(this,arguments)}}();exports.newPost=b;var m=function(){var e=r(t.default.mark(function e(n,r,a){var s,i;return t.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(l){t.next=2;break}return t.abrupt("return",alert("Please connect to your DEXON Wallet first."));case 2:if([0,1,2].includes(+r)){t.next=4;break}return t.abrupt("return",alert("Wrong type of replyType."));case 4:if(a.length){t.next=6;break}return t.abrupt("return",alert("No content."));case 6:if(!n){t.next=21;break}return s=new l.eth.Contract(o,u),t.next=10,s.methods.Reply(n,+r,a).estimateGas();case 10:return i=t.sent,t.prev=11,t.next=14,s.methods.Reply(n,+r,a).send({from:x,gas:i});case 14:t.sent,window.location.reload(),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(11),alert(t.t0);case 21:case"end":return t.stop()}},e,null,[[11,18]])}));return function(t,n,r){return e.apply(this,arguments)}}();exports.newReply=m;
},{"@babel/runtime/regenerator":"PMvg"}],"u0D5":[function(require,module,exports) {
module.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
},{}],"Koj5":[function(require,module,exports) {
module.exports=/[\0-\x1F\x7F-\x9F]/;
},{}],"oncj":[function(require,module,exports) {
module.exports=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
},{}],"0qNf":[function(require,module,exports) {
module.exports=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
},{}],"HopJ":[function(require,module,exports) {
"use strict";module.exports=function(_){var r={};r.src_Any=require("uc.micro/properties/Any/regex").source,r.src_Cc=require("uc.micro/categories/Cc/regex").source,r.src_Z=require("uc.micro/categories/Z/regex").source,r.src_P=require("uc.micro/categories/P/regex").source,r.src_ZPCc=[r.src_Z,r.src_P,r.src_Cc].join("|"),r.src_ZCc=[r.src_Z,r.src_Cc].join("|");return r.src_pseudo_letter="(?:(?![><｜]|"+r.src_ZPCc+")"+r.src_Any+")",r.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",r.src_auth="(?:(?:(?!"+r.src_ZCc+"|[@/\\[\\]()]).)+@)?",r.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",r.src_host_terminator="(?=$|[><｜]|"+r.src_ZPCc+")(?!-|_|:\\d|\\.-|\\.(?!$|"+r.src_ZPCc+"))",r.src_path="(?:[/?#](?:(?!"+r.src_ZCc+"|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!"+r.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+r.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+r.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+r.src_ZCc+'|["]).)+\\"|\\\'(?:(?!'+r.src_ZCc+"|[']).)+\\'|\\'(?="+r.src_pseudo_letter+"|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!"+r.src_ZCc+"|[.]).|"+(_&&_["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+"\\,(?!"+r.src_ZCc+").|\\!(?!"+r.src_ZCc+"|[!]).|\\?(?!"+r.src_ZCc+"|[?]).)+|\\/)?",r.src_email_name='[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+',r.src_xn="xn--[a-z0-9\\-]{1,59}",r.src_domain_root="(?:"+r.src_xn+"|"+r.src_pseudo_letter+"{1,63})",r.src_domain="(?:"+r.src_xn+"|(?:"+r.src_pseudo_letter+")|(?:"+r.src_pseudo_letter+"(?:-|"+r.src_pseudo_letter+"){0,61}"+r.src_pseudo_letter+"))",r.src_host="(?:(?:(?:(?:"+r.src_domain+")\\.)*"+r.src_domain+"))",r.tpl_host_fuzzy="(?:"+r.src_ip4+"|(?:(?:(?:"+r.src_domain+")\\.)+(?:%TLDS%)))",r.tpl_host_no_ip_fuzzy="(?:(?:(?:"+r.src_domain+")\\.)+(?:%TLDS%))",r.src_host_strict=r.src_host+r.src_host_terminator,r.tpl_host_fuzzy_strict=r.tpl_host_fuzzy+r.src_host_terminator,r.src_host_port_strict=r.src_host+r.src_port+r.src_host_terminator,r.tpl_host_port_fuzzy_strict=r.tpl_host_fuzzy+r.src_port+r.src_host_terminator,r.tpl_host_port_no_ip_fuzzy_strict=r.tpl_host_no_ip_fuzzy+r.src_port+r.src_host_terminator,r.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+r.src_ZPCc+"|>|$))",r.tpl_email_fuzzy="(^|[><｜]|\\(|"+r.src_ZCc+")("+r.src_email_name+"@"+r.tpl_host_fuzzy_strict+")",r.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+r.src_ZPCc+"))((?![$+<=>^`|｜])"+r.tpl_host_port_fuzzy_strict+r.src_path+")",r.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+r.src_ZPCc+"))((?![$+<=>^`|｜])"+r.tpl_host_port_no_ip_fuzzy_strict+r.src_path+")",r};
},{"uc.micro/properties/Any/regex":"u0D5","uc.micro/categories/Cc/regex":"Koj5","uc.micro/categories/Z/regex":"oncj","uc.micro/categories/P/regex":"0qNf"}],"cs3C":[function(require,module,exports) {
"use strict";function t(t){return Array.prototype.slice.call(arguments,1).forEach(function(_){_&&Object.keys(_).forEach(function(e){t[e]=_[e]})}),t}function _(t){return Object.prototype.toString.call(t)}function e(t){return"[object String]"===_(t)}function i(t){return"[object Object]"===_(t)}function s(t){return"[object RegExp]"===_(t)}function n(t){return"[object Function]"===_(t)}function r(t){return t.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var o={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function h(t){return Object.keys(t||{}).reduce(function(t,_){return t||o.hasOwnProperty(_)},!1)}var a={"http:":{validate:function(t,_,e){var i=t.slice(_);return e.re.http||(e.re.http=new RegExp("^\\/\\/"+e.re.src_auth+e.re.src_host_port_strict+e.re.src_path,"i")),e.re.http.test(i)?i.match(e.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(t,_,e){var i=t.slice(_);return e.re.no_http||(e.re.no_http=new RegExp("^"+e.re.src_auth+"(?:localhost|(?:(?:"+e.re.src_domain+")\\.)+"+e.re.src_domain_root+")"+e.re.src_port+e.re.src_host_terminator+e.re.src_path,"i")),e.re.no_http.test(i)?_>=3&&":"===t[_-3]?0:_>=3&&"/"===t[_-3]?0:i.match(e.re.no_http)[0].length:0}},"mailto:":{validate:function(t,_,e){var i=t.slice(_);return e.re.mailto||(e.re.mailto=new RegExp("^"+e.re.src_email_name+"@"+e.re.src_host_strict,"i")),e.re.mailto.test(i)?i.match(e.re.mailto)[0].length:0}}},c="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",l="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function u(t){t.__index__=-1,t.__text_cache__=""}function p(t){return function(_,e){var i=_.slice(e);return t.test(i)?i.match(t)[0].length:0}}function m(){return function(t,_){_.normalize(t)}}function d(t){var _=t.re=require("./lib/re")(t.__opts__),o=t.__tlds__.slice();function h(t){return t.replace("%TLDS%",_.src_tlds)}t.onCompile(),t.__tlds_replaced__||o.push(c),o.push(_.src_xn),_.src_tlds=o.join("|"),_.email_fuzzy=RegExp(h(_.tpl_email_fuzzy),"i"),_.link_fuzzy=RegExp(h(_.tpl_link_fuzzy),"i"),_.link_no_ip_fuzzy=RegExp(h(_.tpl_link_no_ip_fuzzy),"i"),_.host_fuzzy_test=RegExp(h(_.tpl_host_fuzzy_test),"i");var a=[];function l(t,_){throw new Error('(LinkifyIt) Invalid schema "'+t+'": '+_)}t.__compiled__={},Object.keys(t.__schemas__).forEach(function(_){var r=t.__schemas__[_];if(null!==r){var o={validate:null,link:null};if(t.__compiled__[_]=o,i(r))return s(r.validate)?o.validate=p(r.validate):n(r.validate)?o.validate=r.validate:l(_,r),void(n(r.normalize)?o.normalize=r.normalize:r.normalize?l(_,r):o.normalize=m());e(r)?a.push(_):l(_,r)}}),a.forEach(function(_){t.__compiled__[t.__schemas__[_]]&&(t.__compiled__[_].validate=t.__compiled__[t.__schemas__[_]].validate,t.__compiled__[_].normalize=t.__compiled__[t.__schemas__[_]].normalize)}),t.__compiled__[""]={validate:null,normalize:m()};var d=Object.keys(t.__compiled__).filter(function(_){return _.length>0&&t.__compiled__[_]}).map(r).join("|");t.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+_.src_ZPCc+"))("+d+")","i"),t.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+_.src_ZPCc+"))("+d+")","ig"),t.re.pretest=RegExp("("+t.re.schema_test.source+")|("+t.re.host_fuzzy_test.source+")|@","i"),u(t)}function f(t,_){var e=t.__index__,i=t.__last_index__,s=t.__text_cache__.slice(e,i);this.schema=t.__schema__.toLowerCase(),this.index=e+_,this.lastIndex=i+_,this.raw=s,this.text=s,this.url=s}function x(t,_){var e=new f(t,_);return t.__compiled__[e.schema].normalize(e,t),e}function z(_,e){if(!(this instanceof z))return new z(_,e);e||h(_)&&(e=_,_={}),this.__opts__=t({},o,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=t({},a,_),this.__compiled__={},this.__tlds__=l,this.__tlds_replaced__=!1,this.re={},d(this)}z.prototype.add=function(t,_){return this.__schemas__[t]=_,d(this),this},z.prototype.set=function(_){return this.__opts__=t(this.__opts__,_),this},z.prototype.test=function(t){if(this.__text_cache__=t,this.__index__=-1,!t.length)return!1;var _,e,i,s,n,r,o,h;if(this.re.schema_test.test(t))for((o=this.re.schema_search).lastIndex=0;null!==(_=o.exec(t));)if(s=this.testSchemaAt(t,_[2],o.lastIndex)){this.__schema__=_[2],this.__index__=_.index+_[1].length,this.__last_index__=_.index+_[0].length+s;break}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(h=t.search(this.re.host_fuzzy_test))>=0&&(this.__index__<0||h<this.__index__)&&null!==(e=t.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))&&(n=e.index+e[1].length,(this.__index__<0||n<this.__index__)&&(this.__schema__="",this.__index__=n,this.__last_index__=e.index+e[0].length)),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&t.indexOf("@")>=0&&null!==(i=t.match(this.re.email_fuzzy))&&(n=i.index+i[1].length,r=i.index+i[0].length,(this.__index__<0||n<this.__index__||n===this.__index__&&r>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=n,this.__last_index__=r)),this.__index__>=0},z.prototype.pretest=function(t){return this.re.pretest.test(t)},z.prototype.testSchemaAt=function(t,_,e){return this.__compiled__[_.toLowerCase()]?this.__compiled__[_.toLowerCase()].validate(t,e,this):0},z.prototype.match=function(t){var _=0,e=[];this.__index__>=0&&this.__text_cache__===t&&(e.push(x(this,_)),_=this.__last_index__);for(var i=_?t.slice(_):t;this.test(i);)e.push(x(this,_)),i=i.slice(this.__last_index__),_+=this.__last_index__;return e.length?e:null},z.prototype.tlds=function(t,_){return t=Array.isArray(t)?t:[t],_?(this.__tlds__=this.__tlds__.concat(t).sort().filter(function(t,_,e){return t!==e[_-1]}).reverse(),d(this),this):(this.__tlds__=t.slice(),this.__tlds_replaced__=!0,d(this),this)},z.prototype.normalize=function(t){t.schema||(t.url="http://"+t.url),"mailto:"!==t.schema||/^mailto:/i.test(t.url)||(t.url="mailto:"+t.url)},z.prototype.onCompile=function(){},module.exports=z;
},{"./lib/re":"HopJ"}],"H0qN":[function(require,module,exports) {
"use strict";module.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e};
},{}],"yScC":[function(require,module,exports) {
"use strict";var n,e=Object.prototype.hasOwnProperty;function t(n){try{return decodeURIComponent(n.replace(/\+/g," "))}catch(e){return null}}function r(n){try{return encodeURIComponent(n)}catch(e){return null}}function o(n){for(var e,r=/([^=?&]+)=?([^&]*)/g,o={};e=r.exec(n);){var u=t(e[1]),c=t(e[2]);null===u||null===c||u in o||(o[u]=c)}return o}function u(t,r){r=r||"";var o,u,c=[];for(u in"string"!=typeof r&&(r="?"),t)if(e.call(t,u)){if((o=t[u])||null!==o&&o!==n&&!isNaN(o)||(o=""),u=encodeURIComponent(u),o=encodeURIComponent(o),null===u||null===o)continue;c.push(u+"="+o)}return c.length?r+c.join("&"):""}exports.stringify=u,exports.parse=o;
},{}],"xKrr":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3],t=require("requires-port"),o=require("querystringify"),r=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,s=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,a="[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",n=new RegExp("^"+a+"+");function i(e){return(e||"").toString().replace(n,"")}var h=[["#","hash"],["?","query"],function(e){return e.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],p={hash:1,query:1};function u(t){var o,s=("undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{}).location||{},a={},n=typeof(t=t||s);if("blob:"===t.protocol)a=new f(unescape(t.pathname),{});else if("string"===n)for(o in a=new f(t,{}),p)delete a[o];else if("object"===n){for(o in t)o in p||(a[o]=t[o]);void 0===a.slashes&&(a.slashes=r.test(t.href))}return a}function l(e){e=i(e);var t=s.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function c(e,t){if(""===e)return t;for(var o=(t||"/").split("/").slice(0,-1).concat(e.split("/")),r=o.length,s=o[r-1],a=!1,n=0;r--;)"."===o[r]?o.splice(r,1):".."===o[r]?(o.splice(r,1),n++):n&&(0===r&&(a=!0),o.splice(r,1),n--);return a&&o.unshift(""),"."!==s&&".."!==s||o.push(""),o.join("/")}function f(e,r,s){if(e=i(e),!(this instanceof f))return new f(e,r,s);var a,n,p,m,y,d,g=h.slice(),v=typeof r,w=this,x=0;for("object"!==v&&"string"!==v&&(s=r,r=null),s&&"function"!=typeof s&&(s=o.parse),r=u(r),a=!(n=l(e||"")).protocol&&!n.slashes,w.slashes=n.slashes||a&&r.slashes,w.protocol=n.protocol||r.protocol||"",e=n.rest,n.slashes||(g[3]=[/(.*)/,"pathname"]);x<g.length;x++)"function"!=typeof(m=g[x])?(p=m[0],d=m[1],p!=p?w[d]=e:"string"==typeof p?~(y=e.indexOf(p))&&("number"==typeof m[2]?(w[d]=e.slice(0,y),e=e.slice(y+m[2])):(w[d]=e.slice(y),e=e.slice(0,y))):(y=p.exec(e))&&(w[d]=y[1],e=e.slice(0,y.index)),w[d]=w[d]||a&&m[3]&&r[d]||"",m[4]&&(w[d]=w[d].toLowerCase())):e=m(e);s&&(w.query=s(w.query)),a&&r.slashes&&"/"!==w.pathname.charAt(0)&&(""!==w.pathname||""!==r.pathname)&&(w.pathname=c(w.pathname,r.pathname)),t(w.port,w.protocol)||(w.host=w.hostname,w.port=""),w.username=w.password="",w.auth&&(m=w.auth.split(":"),w.username=m[0]||"",w.password=m[1]||""),w.origin=w.protocol&&w.host&&"file:"!==w.protocol?w.protocol+"//"+w.host:"null",w.href=w.toString()}function m(e,r,s){var a=this;switch(e){case"query":"string"==typeof r&&r.length&&(r=(s||o.parse)(r)),a[e]=r;break;case"port":a[e]=r,t(r,a.protocol)?r&&(a.host=a.hostname+":"+r):(a.host=a.hostname,a[e]="");break;case"hostname":a[e]=r,a.port&&(r+=":"+a.port),a.host=r;break;case"host":a[e]=r,/:\d+$/.test(r)?(r=r.split(":"),a.port=r.pop(),a.hostname=r.join(":")):(a.hostname=r,a.port="");break;case"protocol":a.protocol=r.toLowerCase(),a.slashes=!s;break;case"pathname":case"hash":if(r){var n="pathname"===e?"/":"#";a[e]=r.charAt(0)!==n?n+r:r}else a[e]=r;break;default:a[e]=r}for(var i=0;i<h.length;i++){var p=h[i];p[4]&&(a[p[1]]=a[p[1]].toLowerCase())}return a.origin=a.protocol&&a.host&&"file:"!==a.protocol?a.protocol+"//"+a.host:"null",a.href=a.toString(),a}function y(e){e&&"function"==typeof e||(e=o.stringify);var t,r=this,s=r.protocol;s&&":"!==s.charAt(s.length-1)&&(s+=":");var a=s+(r.slashes?"//":"");return r.username&&(a+=r.username,r.password&&(a+=":"+r.password),a+="@"),a+=r.host+r.pathname,(t="object"==typeof r.query?e(r.query):r.query)&&(a+="?"!==t.charAt(0)?"?"+t:t),r.hash&&(a+=r.hash),a}f.prototype={set:m,toString:y},f.extractProtocol=l,f.location=u,f.trimLeft=i,f.qs=o,module.exports=f;
},{"requires-port":"H0qN","querystringify":"yScC"}],"FO+Z":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.parseContent=exports.getUser=exports.getTitle=exports.getParseText=exports.getUrlParameter=exports.htmlEntities=void 0;var e=r(require("linkify-it")),t=r(require("url-parse"));function r(e){return e&&e.__esModule?e:{default:e}}var a=(0,e.default)(),o={"www.youtube.com":{type:"youtube",code:'<iframe src="" width="560" height="315" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}},n=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")};exports.htmlEntities=n;var u=function(e){for(var t=window.location.search.substring(1).split("&"),r=[],a=0;a<t.length;a++)if((r=t[a].split("="))[0]===e)return void 0===r[1]||decodeURIComponent(r[1])};exports.getUrlParameter=u;var l=function(e,t){for(var r="",a=0,o=0;o<e.length&&(e[o].match(/[\u4e00-\u9fa5]/g)?(r+=e[o],a+=2):e[o].match(/[\u0800-\u4e00]/g)?(r+=e[o],a+=2):e[o].match(/[\uff00-\uffff]/g)?(r+=e[o],a+=2):(r+=e[o],a++),a!==t);o++)a>t&&(r=r.substr(0,r.length-1));return r};exports.getParseText=l;var s=function(e){var t=(e=l(e,42)).match(/^(\[).*(\])/);return{match:t,title:t?t[0].substr(1,t[0].length-2):e}};exports.getTitle=s;var c=function(e){return e.replace(/^(0x.{4}).+(.{4})$/,"$1…$2")};exports.getUser=c;var i=function(e){var r=new t.default(e);console.log(r);var a={allowed:!0,element:null},n=o[r.hostname];if(void 0===n)return a.allowed=!1,a;var u=$(n.code);if("youtube"===n.type){var l="https://www.youtube.com/embed/".concat(r.query.replace("?v=",""));u.attr("src",l)}return a.element=u[0],a},p=function(e,t){var r=a.match(e),o=[];if(r){var n=0;r.forEach(function(r){n<r.index&&o.push(document.createTextNode(e.slice(n,r.index)));var a=$('<a target="_blank"></a>');a.attr("href",r.url),a.text(r.text),o.push(a[0]);var u="post"===t?i(r.url):null;u&&u.allowed&&(o.push("<br/><br/>"),o.push(u.element),o.push("<br/><br/>")),n=r.lastIndex}),n<e.length&&o.push(document.createTextNode(e.slice(n)))}else o.push(document.createTextNode(e));return o};exports.parseContent=p;
},{"linkify-it":"cs3C","url-parse":"xKrr"}],"6HQS":[function(require,module,exports) {
"use strict";var t=r(require("@babel/runtime/regenerator")),e=require("./dexon.js"),n=require("./utils.js");function r(t){return t&&t.__esModule?t:{default:t}}function a(t){return c(t)||i(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function i(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function o(t,e,n,r,a,s,i){try{var c=t[s](i),o=c.value}catch(u){return void n(u)}c.done?e(o):Promise.resolve(o).then(r,a)}function u(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var s=t.apply(e,n);function i(t){o(s,r,a,i,c,"next",t)}function c(t){o(s,r,a,i,c,"throw",t)}i(void 0)})}}var l="",f=function(){var n=u(t.default.mark(function n(){return t.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return(0,e.initDexon)(p),$("#bbs-login").click(function(){(0,e.loginDexon)(p)}),n.next=4,e.BBS.getPastEvents({fromBlock:"1170000"});case 4:n.sent.slice().reverse().map(function(){var n=u(t.default.mark(function n(r){var a,s,i,c;return t.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.transactionHash,t.next=3,e.web3js.eth.getTransaction(a);case 3:return s=t.sent,t.next=6,e.web3js.eth.getBlock(r.blockNumber);case 6:return i=t.sent,t.next=9,d(r.transactionHash);case 9:return c=t.sent,t.abrupt("return",[r.returnValues.content,a,s.from,i.timestamp,c]);case 11:case"end":return t.stop()}},n)}));return function(t){return n.apply(this,arguments)}}()).reduce(function(){var e=u(t.default.mark(function e(n,r){return t.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n;case 2:return t.t0=v,t.t1=void 0,t.t2=a,t.next=7,r;case 7:t.t3=t.sent,t.t4=(0,t.t2)(t.t3),t.t0.apply.call(t.t0,t.t1,t.t4);case 10:case"end":return t.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),Promise.resolve());case 6:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),d=function(){var n=u(t.default.mark(function n(r){var a,s,i;return t.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.substr(0,66),t.next=3,e.BBSExt.methods.upvotes(a).call();case 3:return s=t.sent,t.next=6,e.BBSExt.methods.downvotes(a).call();case 6:return i=t.sent,t.abrupt("return",s-i);case 8:case"end":return t.stop()}},n)}));return function(t){return n.apply(this,arguments)}}(),v=function(t,e,r,a,s){t=(0,n.htmlEntities)((0,n.getTitle)(t.substr(0,42)).title);var i=$('<div class="r-ent"></div>');i.html('<div class="nrec"></div>\n    <div class="title">\n    <a href="content.html?tx='.concat(e,'">\n      ').concat(t,'\n    </a>\n    </div>\n    <div class="meta">\n      <div class="author">\n        <a>\n          ').concat((0,n.getUser)(r),'\n        </a>\n      </div>\n      <div class="article-menu"></div>\n      <div class="date">...</div>\n    </div>')),$(".r-list-container.action-bar-margin.bbs-screen").append(i);var c=new Date(a);if($(i).find(".date").text(c.getMonth()+1+"/"+(""+c.getDate()).padStart(2,"0")).attr("title",c.toLocaleString()),s>0){var o="hl f2";s>99?o="hl f1":s>9&&(o="hl f3"),$(i).find(".nrec").html('<span class="'.concat(o,'"> ').concat(s," </span>"))}},p=function(t){(l=t)?($("#bbs-login").hide(),$("#bbs-register").hide(),$("#bbs-user").show(),$("#bbs-post").show()):($("#bbs-login").show(),$("#bbs-register").show(),$("#bbs-user").hide(),$("#bbs-post").show()),$("#bbs-user").text((0,n.getUser)(l))};$(f);
},{"@babel/runtime/regenerator":"PMvg","./dexon.js":"UN6U","./utils.js":"FO+Z"}]},{},["6HQS"], null)