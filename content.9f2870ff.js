parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QVnC":[function(require,module,exports) {
var t=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e,n){var o=r&&r.prototype instanceof v?r:v,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return N()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=_(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var u=h(t,r,e);if("normal"===u.type){if(n=e.done?p:s,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var f="suspendedStart",s="suspendedYield",l="executing",p="completed",y={};function v(){}function d(){}function g(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,L=w&&w(w(G([])));L&&L!==e&&n.call(L,i)&&(m=L);var x=g.prototype=v.prototype=Object.create(m);function E(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function b(t){var r;this._invoke=function(e,o){function i(){return new Promise(function(r,i){!function r(e,o,i,a){var c=h(t[e],t,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(f).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,a)})}a(c.arg)}(e,o,r,i)})}return r=r?r.then(i,i):i()}}function _(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,_(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function G(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:r,done:!0}}return d.prototype=x.constructor=g,g.constructor=d,g[c]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(b.prototype),b.prototype[a]=function(){return this},t.AsyncIterator=b,t.async=function(r,e,n,o){var i=new b(u(r,e,n,o));return t.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=G,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:G(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=t}catch(r){Function("r","regeneratorRuntime = r")(t)}
},{}],"PMvg":[function(require,module,exports) {
module.exports=require("regenerator-runtime");
},{"regenerator-runtime":"QVnC"}],"FO+Z":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getUser=exports.getTitle=exports.getParseText=exports.getUrlParameter=exports.htmlEntities=void 0;var e=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")};exports.htmlEntities=e;var t=function(e){for(var t=window.location.search.substring(1).split("&"),r=[],a=0;a<t.length;a++)if((r=t[a].split("="))[0]===e)return void 0===r[1]||decodeURIComponent(r[1])};exports.getUrlParameter=t;var r=function(e,t){for(var r="",a=0,o=0;o<e.length&&(e[o].match(/[\u4e00-\u9fa5]/g)?(r+=e[o],a+=2):e[o].match(/[\u0800-\u4e00]/g)?(r+=e[o],a+=2):e[o].match(/[\uff00-\uffff]/g)?(r+=e[o],a+=2):(r+=e[o],a++),a!==t);o++)a>t&&(r=r.substr(0,r.length-1));return r};exports.getParseText=r;var a=function(e){var t=(e=r(e,42)).match(/^(\[).*(\])/);return{match:t,title:t?t[0].substr(1,t[0].length-2):e}};exports.getTitle=a;var o=function(e){return e.replace(/^(0x.{4}).+(.{4})$/,"$1…$2")};exports.getUser=o;
},{}],"UN6U":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.newReply=exports.newPost=exports.loginDexon=exports.initDexon=exports.BBSExt=exports.BBS=exports.web3js=exports.BBSExtContract=exports.BBSContract=exports.ABIBBSExt=exports.ABIBBS=void 0;var t=e(require("@babel/runtime/regenerator"));function e(t){return t&&t.__esModule?t:{default:t}}function n(t,e,n,r,a,o,s){try{var u=t[o](s),i=u.value}catch(p){return void n(p)}u.done?e(i):Promise.resolve(i).then(r,a)}function r(t){return function(){var e=this,r=arguments;return new Promise(function(a,o){var s=t.apply(e,r);function u(t){n(s,a,o,u,i,"next",t)}function i(t){n(s,a,o,u,i,"throw",t)}u(void 0)})}}var a=[{constant:!1,inputs:[{name:"content",type:"string"}],name:"Post",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,name:"content",type:"string"}],name:"Posted",type:"event"}];exports.ABIBBS=a;var o=[{constant:!1,inputs:[{name:"content",type:"string"}],name:"Post",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"origin",type:"bytes32"},{name:"vote",type:"uint256"},{name:"content",type:"string"}],name:"Reply",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,name:"origin",type:"bytes32"},{indexed:!1,name:"vote",type:"uint256"},{indexed:!1,name:"content",type:"string"}],name:"Replied",type:"event"},{constant:!0,inputs:[{name:"",type:"bytes32"}],name:"downvotes",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"bytes32"}],name:"upvotes",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"bytes32"}],name:"voted",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"}];exports.ABIBBSExt=o;var s="0x663002C4E41E5d04860a76955A7B9B8234475952";exports.BBSContract=s;var u="0xec368ba43010056abb3e5afd01957ea1fdbd3d8f";exports.BBSExtContract=u;var i=new Web3("https://mainnet-rpc.dexon.org");exports.web3js=i;var p=new i.eth.Contract(a,s);exports.BBS=p;var c=new i.eth.Contract(o,u);exports.BBSExt=c;var l="",x="",f=function(){var e=r(t.default.mark(function e(n){return t.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.dexon){t.next=6;break}return l=new Web3(window.dexon),t.next=4,l.eth.getAccounts();case 4:t.sent.length&&y(n);case 6:case"end":return t.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();exports.initDexon=f;var d=function(t){if(!window.dexon)return alert("DEXON Wallet not detected. (請安裝 DEXON 瀏覽器擴充套件)");window.dexon.enable(),y(t)};exports.loginDexon=d;var y=function(){var e=r(t.default.mark(function e(n){return t.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.eth.net.getId();case 2:if(237!==t.sent){t.next=8;break}v(n),console.log("DEXON Wallet connected"),t.next=9;break;case 8:return t.abrupt("return",alert("Wrong network"));case 9:case"end":return t.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),v=function(e){var n=function(){var n=r(t.default.mark(function n(){var r;return t.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.eth.getAccounts();case 2:(r=t.sent).length&&(x=r[0],e(x));case 4:case"end":return t.stop()}},n)}));return function(){return n.apply(this,arguments)}}();n(),setInterval(n,1e3)},b=function(){var e=r(t.default.mark(function e(n,r){var a,s,i;return t.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(l){t.next=2;break}return t.abrupt("return",alert("Please connect to your DEXON Wallet."));case 2:if(!(n.length>40)){t.next=4;break}return t.abrupt("return",alert("Title's length is over 40 characters."));case 4:return a="["+n+"]"+r,s=new l.eth.Contract(o,u),t.next=8,s.methods.Post(a).estimateGas();case 8:return i=t.sent,t.prev=9,t.next=12,s.methods.Post(a).send({from:x,gas:i});case 12:t.sent,window.location="index.html",t.next=19;break;case 16:t.prev=16,t.t0=t.catch(9),alert(t.t0);case 19:case"end":return t.stop()}},e,null,[[9,16]])}));return function(t,n){return e.apply(this,arguments)}}();exports.newPost=b;var m=function(){var e=r(t.default.mark(function e(n,r,a){var s,i;return t.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(l){t.next=2;break}return t.abrupt("return",alert("Please connect to your DEXON Wallet first."));case 2:if([0,1,2].includes(+r)){t.next=4;break}return t.abrupt("return",alert("Wrong type of replyType."));case 4:if(a.length){t.next=6;break}return t.abrupt("return",alert("No content."));case 6:if(!n){t.next=21;break}return s=new l.eth.Contract(o,u),t.next=10,s.methods.Reply(n,+r,a).estimateGas();case 10:return i=t.sent,t.prev=11,t.next=14,s.methods.Reply(n,+r,a).send({from:x,gas:i});case 14:t.sent,window.location.reload(),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(11),alert(t.t0);case 21:case"end":return t.stop()}},e,null,[[11,18]])}));return function(t,n,r){return e.apply(this,arguments)}}();exports.newReply=m;
},{"@babel/runtime/regenerator":"PMvg"}],"pILq":[function(require,module,exports) {
"use strict";var e=r(require("@babel/runtime/regenerator")),t=require("./utils.js"),n=require("./dexon.js");function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return s(e)||c(e)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function s(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function i(e,t,n,r,o,a,c){try{var s=e[a](c),i=s.value}catch(u){return void n(u)}s.done?t(i):Promise.resolve(i).then(r,o)}function u(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function c(e){i(a,r,o,c,s,"next",e)}function s(e){i(a,r,o,c,s,"throw",e)}c(void 0)})}}var l="",p="",f=!1,y=!1,h=function(e){(p=e)?($("#bbs-login").hide(),$("#bbs-register").hide(),$("#bbs-user").show(),$("#reply-user").text()||$("#reply-btn").show()):($("#bbs-login").show(),$("#bbs-register").show(),$("#bbs-user").hide(),$("#reply-btn").hide()),$("#bbs-user").text((0,t.getUser)(p)),$("#reply-user").text((0,t.getUser)(p))},d=function(){var t=u(e.default.mark(function t(){return e.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return $("#reply-btn").hide(),e.next=3,n.BBSExt.methods.voted(p,l).call();case 3:if(!e.sent){e.next=6;break}return e.abrupt("return",m(0));case 6:$("#reply-type0").show(),$("#reply-type1").show(),$("#reply-type2").show(),y=!0;case 10:case"end":return e.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),b=function(){$("#reply-type0").hide(),$("#reply-type1").hide(),$("#reply-type2").hide()},m=function(e){b(),$("#reply").show(),$("#reply-send").show(),$("#reply-cancel").show();$("#reply-type").css("color",{0:"#fff",1:"#ff6",2:"#f66"}[e]),$("#reply-type").val(e),$("html").stop().animate({scrollTop:$("#reply").position().top},500,"swing"),$("#reply-content").focus(),f=!0,y=!1},w=function(){b(),$("#reply").hide(),$("#reply-send").hide(),$("#reply-cancel").hide(),$("#reply-btn").show(),$("#reply-content").val(""),f=!1},v=function(){var r=u(e.default.mark(function r(){var a,c,s,i;return e.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(l=(0,t.getUrlParameter)("tx")){r.next=3;break}return r.abrupt("return");case 3:if(l.match(/^0x[a-fA-F0-9]{64}$/g)){r.next=5;break}return r.abrupt("return");case 5:return(0,n.initDexon)(h),$("#bbs-login").click(function(){(0,n.loginDexon)(h)}),$("#reply-btn").click(function(){d()}),$("#reply-type0").click(function(){m(0)}),$("#reply-type1").click(function(){m(1)}),$("#reply-type2").click(function(){m(2)}),$("#reply-cancel").click(function(){w()}),$("#reply-send").click(function(){(0,n.newReply)(l.substr(0,66),$("#reply-type").val(),$("#reply-content").val())}),$("#reply-content").blur(function(){$("#reply-content").val((0,t.getParseText)($("#reply-content").val(),56))}),x(),r.next=17,n.web3js.eth.getTransaction(l);case 17:if((a=r.sent).to.toLowerCase()===n.BBSExtContract.toLowerCase()||a.to.toLowerCase()===n.BBSContract.toLowerCase()||a.to.toLowerCase()==="0x9b985Ef27464CF25561f0046352E03a09d2C2e0C".toLowerCase()){r.next=20;break}return r.abrupt("return");case 20:return c=n.web3js.utils.hexToUtf8("0x"+a.input.slice(138)),s=(0,t.getTitle)(c.substr(0,42)),i=s.match?c.slice(s.title.length+2):c,document.title=s.title+" - Gossiping - DEXON BBS",$("#main-content-author").text((0,t.getUser)(a.from)),$("#main-content-title").text(s.title),$("#main-content-content").text(i),n.web3js.eth.getBlock(a.blockNumber).then(function(e){$("#main-content-date").text((""+new Date(e.timestamp)).substr(0,24))}),$("#main-content-href").attr("href",window.location.href),$("#main-content-href").text(window.location.href),$("#main-content-from").text("@"+a.blockNumber),$("#main-content-from").attr("href","https://dexonscan.app/transaction/"+l),r.next=34,n.BBSExt.getPastEvents({fromBlock:"990000"});case 34:r.sent.slice().filter(function(e){return l==e.returnValues.origin}).map(function(){var t=u(e.default.mark(function t(r){var o,a;return e.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.web3js.eth.getTransaction(r.transactionHash);case 2:return o=e.sent,e.next=5,n.web3js.eth.getBlock(r.blockNumber);case 5:return a=e.sent,e.abrupt("return",[r.returnValues.content,o.from,a.timestamp,r.returnValues.vote]);case 7:case"end":return e.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()).reduce(function(){var t=u(e.default.mark(function t(n,r){return e.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n;case 2:return e.t0=g,e.t1=void 0,e.t2=o,e.next=7,r;case 7:e.t3=e.sent,e.t4=(0,e.t2)(e.t3),e.t0.apply.call(e.t0,e.t1,e.t4);case 10:case"end":return e.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),Promise.resolve());case 36:case"end":return r.stop()}},r)}));return function(){return r.apply(this,arguments)}}(),x=function(){var e=!1;$(document).keydown(function(t){17==t.keyCode&&(e=!0)}).keyup(function(t){17==t.keyCode&&(e=!1)}),$(document).keyup(function(t){f||y||t.keyCode!="X".charCodeAt()?!f&&y&&"1".charCodeAt()<=t.keyCode&&t.keyCode<="3".charCodeAt()?"1"==t.key?m(1):"2"==t.key?m(2):"3"==t.key&&m(0):f&&!y&&e&&13==t.keyCode&&($("#reply-content").val().length>0?(0,n.newReply)(l,$("#reply-type").val(),$("#reply-content").val()):w()):d()})},g=function(e,n,r,o){e=(0,t.htmlEntities)(e);var a=$('<div class="push"></div>'),c=new Date(r),s=c.getMonth()+1+"/"+(""+c.getDate()).padStart(2,"0")+" "+(""+c.getHours()).padStart(2,"0")+":"+(""+c.getMinutes()).padStart(2,"0");a.html('<span class="'.concat(1!=o?"f1 ":"",'hl push-tag">').concat(["→","推","噓"][o],' </span><a class="f3 hl push-userid" target="_blank" href="').concat("https://dexonscan.app/address/"+n,'">').concat((0,t.getUser)(n),'</a><span class="f3 push-content">: ').concat(e,'</span><span class="push-ipdatetime">').concat(s,"</span>")),$("#main-content.bbs-screen.bbs-content").append(a)};$(v);
},{"@babel/runtime/regenerator":"PMvg","./utils.js":"FO+Z","./dexon.js":"UN6U"}]},{},["pILq"], null)