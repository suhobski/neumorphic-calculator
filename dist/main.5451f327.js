parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"U8P7":[function(require,module,exports) {
"use strict";function e(e){var r=document.querySelector(".display__previous-operation"),t=document.querySelector(".display__previous-result"),n=document.querySelector(".display__current-operation"),o=document.querySelector(".display__current-result");0===e.currentOperation.length?n.innerText="0":(n.innerText="",e.currentOperation.forEach(function(e){return n.innerText+=e})),r.innerText="",e.previousOperation&&e.previousOperation.forEach(function(e){return r.innerText+=e}),t.innerText=e.previousResult,o.innerText=e.currentResult}Object.defineProperty(exports,"__esModule",{value:!0}),exports.display=e;
},{}],"PMV0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.calculatorNumbers=r;var e=require("./display.js");function r(r){document.querySelector(".keyboard").addEventListener("click",function(t){if(t.target.hasAttribute("data-number")){t.preventDefault();var n=r.currentOperation[r.currentOperation.length-1],u=r.currentOperation.length-1;if(r.currentResult)return r.previousResult=r.currentResult,r.currentResult="",r.previousOperation=r.currentOperation,r.currentOperation=[t.target.innerText],void(0,e.display)(r);if("0"===n)return;return isFinite(n)||"."==n?r.currentOperation[u]+=t.target.innerText:r.currentOperation.push(t.target.innerText),(0,e.display)(r),r}})}
},{"./display.js":"U8P7"}],"Oydg":[function(require,module,exports) {
"use strict";function e(e){for(;;){if(1===e.length)return e[0];if(2===e.length)return e[0]+e[1];if(e.includes("×")){var r=e.indexOf("×"),i=parseFloat(e[r-1])*parseFloat(e[r+1]);e.splice(r-1,3,String(Number(i.toFixed(12))))}else if(e.includes("÷")){var t=e.indexOf("÷"),s=parseFloat(e[t-1])/parseFloat(e[t+1]);e.splice(t-1,3,String(Number(s.toFixed(12))))}else if(e.includes("+")){var l=e.indexOf("+"),a=parseFloat(e[l-1])+parseFloat(e[l+1]);e.splice(l-1,3,String(Number(a.toFixed(12))))}else if(e.includes("-")){var n=e.indexOf("-"),o=parseFloat(e[n-1])-parseFloat(e[n+1]);e.splice(n-1,3,String(Number(o.toFixed(12))))}else;}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.compute=e;
},{}],"lRUi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.equal=t;var e=require("./display.js"),r=require("./compute.js");function t(t){document.querySelector(".keyboard__btn--equal").addEventListener("click",function(){var n=t.currentOperation[t.currentOperation.length-1];if(isFinite(n)){var u=Array.from(t.currentOperation);return t.currentResult="= "+(0,r.compute)(u),(0,e.display)(t),t}})}
},{"./display.js":"U8P7","./compute.js":"Oydg"}],"b0bz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.calculatorPersent=r;var e=require("./display.js");function r(r){document.querySelector(".keyboard__btn--percent").addEventListener("click",function(){var t=r.currentOperation[r.currentOperation.length-1],n=r.currentOperation.length-1;return isFinite(n)&&!r.currentResult&&(r.currentOperation.length>2&&(r.currentOperation[n]=r.currentOperation[n-2]/100*r.currentOperation[n]+""),0===n&&isFinite(t)&&(r.currentOperation[0]/="100")),(0,e.display)(r),r})}
},{"./display.js":"U8P7"}],"daJm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.clear=r;var e=require("./display.js");function r(r){var t=document.querySelector(".keyboard__btn--clear");t.addEventListener("click",function(){return r.currentOperation=[],r.currentResult="","AC"===t.innerText&&r.previousResult&&(r.previousResult="",r.previousOperation="",t.innerText="C"),r.previousResult&&(t.innerText="AC"),(0,e.display)(r),r})}
},{"./display.js":"U8P7"}],"WpIs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.plusMinus=r;var e=require("./display.js");function r(r){document.querySelector(".keyboard__btn--plus-minus").addEventListener("click",function(){var t=r.currentOperation[r.currentOperation.length-1],n=r.currentOperation.length-1;return isFinite(t)&&!r.currentResult&&(t.startsWith("-")?r.currentOperation[n]=t.substr(1):r.currentOperation[n]="-"+t),(0,e.display)(r),r})}
},{"./display.js":"U8P7"}],"L4YJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.operation=r;var e=require("./display.js");function r(r){document.querySelectorAll("[data-operation]").forEach(function(t){t.addEventListener("click",function(){var n=r.currentOperation[r.currentOperation.length-1];return r.currentResult?(r.previousResult=r.currentResult,r.previousOperation=r.currentOperation,r.currentOperation=[r.currentResult.substr(2),t.innerText],r.currentResult="",void(0,e.display)(r)):(isFinite(n)&&r.currentOperation.push(t.innerText),(0,e.display)(r),r)})})}
},{"./display.js":"U8P7"}],"jCdC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.dot=r;var e=require("./display.js");function r(r){var t=document.querySelector(".keyboard__btn--dot"),n=document.querySelector(".keyboard__btn--clear");t.addEventListener("click",function(){var t=r.currentOperation[r.currentOperation.length-1],u=r.currentOperation.length-1;return r.currentResult?(r.previousResult=r.currentResult,r.previousOperation=r.currentOperation,r.currentOperation=["0."],r.currentResult="",void(0,e.display)(r)):(isFinite(t)?t.includes(".")||(r.currentOperation[u]+="."):(r.currentOperation.push("0."),"AC"===n.innerText&&(n.innerText="C")),(0,e.display)(r),r)})}
},{"./display.js":"U8P7"}],"XWrT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Calculator=void 0;var e=require("./calculatorDetails/numbers.js"),r=require("./calculatorDetails/equal.js"),t=require("./calculatorDetails/persent.js"),a=require("./calculatorDetails/clear.js"),o=require("./calculatorDetails/plusMinus.js"),i=require("./calculatorDetails/operations.js"),u=require("./calculatorDetails/dot.js");function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function s(e,r){for(var t=0;t<r.length;t++){var a=r[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,r,t){return r&&s(e.prototype,r),t&&s(e,t),e}function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var p=function(){function s(){n(this,s),c(this,"operations",{previousOperation:"",previousResult:"",currentOperation:[],currentResult:""})}return l(s,[{key:"compute",value:function(){(0,e.calculatorNumbers)(this.operations),(0,r.equal)(this.operations),(0,t.calculatorPersent)(this.operations),(0,a.clear)(this.operations),(0,o.plusMinus)(this.operations),(0,u.dot)(this.operations),(0,i.operation)(this.operations)}}]),s}();exports.Calculator=p;
},{"./calculatorDetails/numbers.js":"PMV0","./calculatorDetails/equal.js":"lRUi","./calculatorDetails/persent.js":"b0bz","./calculatorDetails/clear.js":"daJm","./calculatorDetails/plusMinus.js":"WpIs","./calculatorDetails/operations.js":"L4YJ","./calculatorDetails/dot.js":"jCdC"}],"wgsO":[function(require,module,exports) {
"use strict";var r=require("./calculator.js"),a=new r.Calculator;a.compute();
},{"./calculator.js":"XWrT"}]},{},["wgsO"], null)