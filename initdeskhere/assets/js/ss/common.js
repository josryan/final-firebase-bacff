this.LIBRO=this.LIBRO||{},this.LIBRO.common=function(t,n){"use strict";var e,r=function(){return(r=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};function o(t,n,e,r){return new(e||(e=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function c(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,c)}u((r=r.apply(t,n||[])).next())}))}function i(t,n){var e,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}function a(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var r,o,i=e.call(t),a=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return a}function c(t,n,e){if(e||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return t.concat(r||Array.prototype.slice.call(n))}!function(t){t.DEV="dev",t.QA="qa",t.QA5="qa5",t.STAGE="stage",t.PROD="prod"}(e||(e={}));var u=function(t){return/^[A-Za-z0-9!?_=-]+$/.test(t)?t:null},s=function(t,n){if("done"!==t||!n)return u(n);try{var e=new URL(n).origin;if(/(aol.com|yahoo.com)$/.test(e))return encodeURIComponent(n)}catch(t){console.log(t)}},f=function(t,n,e){if("string"!=typeof t)return t;if(!n)return t;if("dspid"===n&&!(e>0&&e<9999))return t;if(["varId","dspid","dspn","dspcid"].includes(n)&&!t.includes("checkout"))return t;try{var r=a(t.match(/^(.*?)\?(.*)$/)||["",t,""],3),o=r[1],i=r[2];if(i){var c=i.split("&").filter((function(t){return!!t})),u=new RegExp("^".concat(n,"(=?|=.+)$"),"i"),s=!1,f=c.map((function(t){return u.test(t)?(s=!0,"".concat(n,"=").concat(e)):t}));return s?"".concat(o,"?").concat(f.join("&")):(c.unshift("".concat(n,"=").concat(e)),"".concat(o,"?").concat(c.join("&")))}return"".concat(o,"?").concat(n,"=").concat(e)}catch(t){}return t},l=function(t,n,e){try{for(var r in t)d(t,r)&&(h(t[r])?l(t[r],n,e):Array.isArray(t[r])?t[r].forEach((function(t){return l(t,n,e)})):r===n&&(v(e)?t[r]=e(t[r]):t[r]=e))}catch(t){}return t},d=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},h=function(t){return t.constructor===Object},v=function(t){return"function"==typeof t},p=function(t,n,e){void 0===e&&(e=!1);var r=e?y(t,n):t;try{for(var o in n)if(d(n,o)){var i=new RegExp("{{"+o+"}}","g");r=r.replace(i,n[o])}}catch(t){r=""}return r},y=function(t,n){var e=t,r=c([],a(t.matchAll(/{{#(.+?)}}(.+?){{\/(.+?)}}/gs)),!1);try{r.forEach((function(t){var r=a(t,4),o=r[0],i=r[1],c=r[3];i===c&&(e=i in n&&""!==n[i]?e.replace(new RegExp("{{#".concat(i,"}}"),""),"").replace(new RegExp("{{/".concat(c,"}}"),""),""):e.replace(o,""))}))}catch(t){}return e},w=function(t,n,e,r){for(var o in void 0===e&&(e=!1),void 0===r&&(r=!1),t)if(d(t,o)&&d(n,o))if(h(t[o]))w(t[o],n[o],e,r);else{var i=n[o];!e||"true"!==i&&"false"!==i||(i="true"===i),r&&"string"==typeof i&&/^[0-9]+(.[0-9]+?)$/.test(i)&&(i=Number(i)),t[o]=i}},g=function(t){for(var n=document.cookie.split(/; ?/),e=0;e<n.length;e++)if(0===n[e].indexOf("".concat(t,"=")))return!0;return!1},m=function(t){var n=new RegExp("".concat(t,"=([^ ]+)"));return a(document.cookie.match(n),1),!!g(t)&&(document.cookie="".concat(t,"=; Path=/; Domain=.yahoo.com; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"),!0)},O=function(t,n){try{if(t.constructor!==n.constructor)return!1;switch(t.constructor){case Object:var e=Object.keys(t),r=Object.keys(n);if(e.length!==r.length)return!1;if(!e.every((function(t){return r.includes(t)})))return!1;for(var o=0;o<e.length;o++){var i=e[o];if(!O(t[i],n[i]))return!1}break;case Array:if(t.length!==n.length)return!1;if(!t.every((function(t){return n.some((function(n){return O(t,n)}))})))return!1;break;default:return t===n}return!0}catch(e){return t===n}},b=function(t,n,e){try{Array.from(t.matchAll(/{{#([\w]+?)}}\n?([\s\S]*?){{\/([\w]+?)}}/g)).forEach((function(e){var r=a(e,4),o=r[0],i=r[1],c=r[2];if(i===r[3]){var u=n[i],s="";void 0!==n[i]&&Array.isArray(n[i])&&(s=u.reduce((function(t,n){var e=p(c,n);return"".concat(t).concat(e)}),""))&&(s=s.replace(/\n$/,"")),t=t.replace(o,s)}}))}catch(t){console.error(t)}return t},E=Object.freeze({__proto__:null,get env(){return e},getQueryParam:function(t,n){var e="";if("string"!=typeof t)return e;if(!n)return e;try{if(t){var r=t.substring(1).split("&").filter((function(t){return!!t})),o=new RegExp("^".concat(n,"(=?|=.+)$"),"i"),i=r.find((function(t){return o.test(t)})),a=-1!==i.indexOf("=")?i.substring(i.indexOf("=")+1):null;return i&&a&&(e=a),e}}catch(t){}return e},validateQueryParam:u,sanitizeQueryParam:s,upsertQueryParam:f,updatePropertyValue:l,hasProperty:d,isLiteralObject:h,isFunction:v,replacePlaceholders:p,replacePlaceholderConditionals:y,replaceObjectPlaceholders:function(t,n){try{var e=p(JSON.stringify(t),n);return JSON.parse(e)}catch(n){return t}},copyObjectValues:w,cookieExists:g,deleteCookie:m,getCookie:function(t){try{var n=new RegExp("".concat(t,"=([^ ]+?);?")),e=a(document.cookie.match(n),2)[1];if(e)return e}catch(t){return""}},makeUUIDv4:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=16*Math.random()|0;return("x"==t?n:3&n|8).toString(16)}))},deleteEventualCookies:function(t,n,e){return void 0===t&&(t=[]),void 0===n&&(n=100),o(this,void 0,void 0,(function(){return i(this,(function(r){return[2,new Promise((function(r){e&&e('Will check for existence of "%s" cookies and delete',t.join(", "));var o=function(i){void 0===i&&(i=Date.now());var a=Date.now()-i;t.every((function(t){return g(t)}))?(t.forEach((function(t){return m(t)})),e&&e("Found cookies and deleted within %sms",a),r(!0)):a>=n?(e&&e('Cookies "'.concat(t.join(", "),'" do not exist, waited for ').concat(n,"ms")),r(!0)):window.setTimeout(o,10,i)};o()}))]}))}))},getEnv:function(t){var n;try{var r=new URL(t).hostname.split(".")[0];switch(r){case e.DEV:case e.QA:case e.QA5:case e.STAGE:n=r;break;default:n=e.PROD}}catch(t){n=e.PROD}return n},getDomainName:function(t){try{var n=new URL(t).hostname.split(".");return n[n.length-2]}catch(t){throw new TypeError(t)}},getRedirectUrl:function(t){var n=new XMLHttpRequest;return n.open("GET",window.location.href,!1),n.send(null),n.getResponseHeader(t)},isEqual:O,getMobileOS:function(){try{var t=navigator.userAgent||navigator.vendor;return/android/i.test(t)?"Android":/iPad|iPhone/.test(t)?"IOS":"unknown"}catch(t){throw new TypeError(t)}},isMacOS:function(){try{var t=navigator.userAgent||navigator.vendor;return!!/mac/i.test(t)}catch(t){throw new TypeError(t)}},isWindowOS:function(){try{var t=navigator.userAgent||navigator.vendor;return!!/window/i.test(t)}catch(t){throw new TypeError(t)}},getMatchingPath:function(t,n){try{for(var e=t.split("/").filter(Boolean),r=n.split("/").filter(Boolean),o=Math.min(e.length,r.length),i=[],a=0;a<o&&e[a]===r[a];a++)i.push(e[a]);var c=i.join("/");return c?"/"+c:""}catch(t){return""}},replaceIterableBlocks:b,replaceTemplateData:function(t,n,e){void 0===e&&(e=!1);try{var r=b(t,n);return p(r,n,e)}catch(n){return t}}}),A=function(t,n){Array.isArray(t)?t.forEach((function(t){return A(t,n)})):k(t)?Array.isArray(n)?n.forEach((function(n){return t.classList.add(n)})):t.classList.add(n):L(t)&&A(_(t),n)},x=function(t,n){Array.isArray(t)?t.forEach((function(t){return x(t,n)})):k(t)?Array.isArray(n)?n.forEach((function(n){return t.classList.remove(n)})):t.classList.remove(n):L(t)&&x(_(t),n)},I=function(t){return-1!==[".","#"].indexOf(t.charAt(0))?t.substr(1):t},R=function(t){return"string"==typeof t&&0===t.indexOf(".")},L=function(t){return"string"==typeof t},k=function(t){return t instanceof Element},S=function(t){return t instanceof Document},P=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{var e=a(t),r=e[0],o=e.slice(1);if(Array.isArray(r))r.forEach((function(t){return P.apply(void 0,c([t],a(o),!1))}));else{var i=L(r)?_(r):r;Array.isArray(i)?i.forEach((function(t){P.apply(void 0,c([t],a(o),!1))})):Array.isArray(o[0])?o.forEach((function(t){return i.addEventListener(t[0],t[1],t[2])})):i.addEventListener(o[0],o[1],o[2])}}catch(t){console.log(t)}},_=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=a(2===t.length?t:[document,t[0]],2),r=e[0],o=e[1];return Array.from(r.querySelectorAll(o))},j=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=a(2===t.length?t:[document,t[0]],2),r=e[0],o=e[1];return r.querySelector(o)},C=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=a(2===t.length?t:[document,t[0]],2),r=e[0],o=e[1];return S(r)||k(r)?r.querySelector(o):L(r)?_(r).map((function(t){return C(t,o)})):Array.isArray(r)?r.map((function(t){return C(t,o)})):void 0},B=function(t){return t.parentNode},T=function(t){return Array.from(t.children)},U=function(t,n){var e=0;try{for(var r=t.parentNode;r||e<20;){if(r.classList.contains(n))return r;r=r.parentNode,e++}}catch(t){}return null},D=function(t,n){try{Array.isArray(t)?t.forEach((function(t){return _(t).forEach((function(t,e){return n(t,e)}))})):_(t).forEach((function(t,e){return n(t,e)}))}catch(t){}},H=function(t){try{for(var n=t.split("."),e=window,r=0;r<n.length;){if(void 0===(e=e[n[r]]))return!1;r++}return!0}catch(t){return!1}},M=function(t,n){return void 0===n&&(n=3e3),new Promise((function(e,r){if(H(t))e(!0);else{var o=function(i){void 0===i&&(i=Date.now());var a=Date.now()-i;H(t)?e(!0):a>=n?r('Error, "'.concat(t,'" does not exist, waited for ').concat(n,"ms")):window.setTimeout(o,10,i)};o()}}))},N=function(t,n,e){D(t,(function(t){return t.setAttribute(n,e)}))},Q=function(t){L(t)?D(t,(function(t){return t.style.display="none"})):k(t)?t.style.display="none":Array.isArray(t)&&t.forEach((function(t){return Q(t)}))},Y=function(t){L(t)?D(t,(function(t){return t.style.display="block"})):k(t)?t.style.display="block":Array.isArray(t)&&t.forEach((function(t){return Y(t)}))},W=Object.freeze({__proto__:null,addClass:A,removeClass:x,toggleClass:function(t,n,e){void 0===e&&(e=null),!1===e?x(t,n):!0===e&&A(t,n)},hasClass:function(t,n){return L(t)?j(t).classList.contains(n):k(t)?t.classList.contains(n):void 0},truncateTextByWord:function(t,n){var e=t.trim(),r=e.replace(/ .*/,"");if(e.length<=n||r.length==e.length)return e;var o=e.slice(0,Math.max(n-1,r.length+1));return o.slice(0,o.lastIndexOf(" "))+"..."},removeEventHandler:function(t,n,e){t.removeEventListener(n,e)},stripIdentifier:I,isClass:R,isId:function(t){return"string"==typeof t&&0===t.indexOf("#")},isSelector:L,isElement:k,isNodeList:function(t){return t instanceof NodeList},isDocument:S,addListener:P,removeListener:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{var e=a(t),r=e[0],o=e.slice(1),i=L(r)?_(r):r;Array.isArray(i)?i.forEach((function(t){Array.isArray(o[0])?o.forEach((function(n){return t.removeEventListener(n[0],n[1])})):t.removeEventListener(o[0],o[1])})):i.removeEventListener(o[0],o[1])}catch(t){console.log(t)}},getClosestParent:function(t,n){return k(t)&&R(n)?U(t,I(n)):null},getElements:_,getElement:j,getFirstElement:C,getNodeIndex:function(t){return T(B(t)).indexOf(t)},getParentElement:B,getChildrenElements:T,getClosestWithClassName:U,callWithElement:function(t,n){D(n,t)},applyFunction:D,isWindowObject:H,waitUntilObjectExistsx:function(t,n){return void 0===n&&(n=3e3),new Promise((function(e,r){if(H(t))e(!0);else var o=0,i=window.setInterval((function(){o++,H(t)&&(window.clearInterval(i),e(!0)),o>=n/100&&(window.clearInterval(i),r('Error, "'.concat(t,'" does not exist, waited for ').concat(n,"ms")))}),100)}))},waitUntilObjectExists:M,loadScript:function(t,n,e){return void 0===e&&(e=3e3),new Promise((function(r,a){var c;(c=n?document.getElementById(n):j('[src="'.concat(t,'"]')))?r(!0):((c=document.createElement("script")).setAttribute("src",t),c.setAttribute("id",n),c.onload=function(){return o(void 0,void 0,void 0,(function(){var t;return i(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,4]),n?[4,M(n,e)]:[3,2];case 1:o.sent(),o.label=2;case 2:return r(!0),[3,4];case 3:return t=o.sent(),a(t),[3,4];case 4:return[2]}}))}))},c.onerror=function(){return a("Could not inject script: ".concat(t))},document.head.appendChild(c))}))},loadStyle:function(t){return new Promise((function(n,e){var r=j('[href="'.concat(t,'"]'));r?n(!0):((r=document.createElement("link")).setAttribute("href",t),r.setAttribute("rel","stylesheet"),r.onload=function(){return o(void 0,void 0,void 0,(function(){return i(this,(function(t){try{n(!0)}catch(t){e(t)}return[2]}))}))},r.onerror=function(){return e("Could not inject style: ".concat(t))},document.head.appendChild(r))}))},setAttribute:N,hide:Q,show:Y,isInside:function(t,n,e){if(void 0===e&&(e=!0),L(n))return function(t,n,e){if(k(t)&&L(n)){if(e&&t.matches(n))return!0;try{for(var r=0,o=t.parentNode;o||r<50;){if(o.matches(n))return!0;o=o.parentNode,r++}}catch(t){}}return!1}(t,n,e)},equalHeights:function(t){var n=_(t),e=0;N(t,"style","height: auto"),Array.isArray(n)&&(n.forEach((function(t){var n=t.clientHeight;n>e&&(e=n)})),N(t,"style","height: ".concat(e,"px")))},throttle:function(t,n){var e=0;return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];var i=(new Date).getTime();if(!(i-e<n))return e=i,t.apply(void 0,c([],a(r),!1))}},debounce:function(t,n){var e=null;return function(){window.clearTimeout(e),e=window.setTimeout(t,n)}},appendQueryParams:function(t,n,e){var r=e.doneUrl,o=e.ncid,i=e.slug,a={ncid:o,dspid:e.dspid,dspn:e.dspn,dspcid:e.dspcid,varId:i,done:r};Object.keys(a).forEach((function(e){var r=s(e,a[e]);r&&D(t,(function(t){if(n.includes("data")){var o=n.replace("data-",""),i=t.dataset[o];t.dataset[o]=f(i,e,r)}else t.href.startsWith("tel:")||t.getAttribute("href").startsWith("#")||(t.href=f(t.href,e,r))}))}))},waitUntilElementExists:function(t,n){return new Promise((function(e,r){if(j(t))e(!0);else{var o=function(i){void 0===i&&(i=Date.now());var a=Date.now()-i;j(t)?e(!0):a>=n?r('Error, "'.concat(t,'" does not exist, waited for ').concat(n,"ms")):window.setTimeout(o,10,i)};o()}}))}}),z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},q={},J=z&&z.__assign||function(){return(J=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)},V=z&&z.__spreadArrays||function(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;var r=Array(t),o=0;for(n=0;n<e;n++)for(var i=arguments[n],a=0,c=i.length;a<c;a++,o++)r[o]=i[a];return r};Object.defineProperty(q,"__esModule",{value:!0}),t.logger=q.logger=void 0;var $=function(t){var n;if(void 0!==t&&t.constructor)switch(t.constructor){case Error:case SyntaxError:case ReferenceError:case TypeError:case URIError:n=void 0!==t.stack?t.stack:t;break;case Object:n=JSON.stringify(t,null,2);break;default:n=t}return n},G=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=t[1]?"["+t[1]+"] "+t[2]:t[2];if(t.length>3)for(var r=3;r<t.length;r++)e=e.replace("%s",$(t[r]));console[t[0]](e)},F=function(t){return void 0===t&&(t=""),{log:function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return G.apply(void 0,V(["log",t],n))},info:function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return G.apply(void 0,V(["info",t],n))},error:function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return G.apply(void 0,V(["error",t],n))},warn:function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return G.apply(void 0,V(["warn",t],n))}}};function X(){for(var n,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];H("window.LIBRO.config")&&window.LIBRO.config.debug&&(n=t.logger.tag("rapid")).info.apply(n,c([],a(e),!1))}t.logger=q.logger=J({tag:function(t){return F(t)}},F());var Z=Object.freeze({__proto__:null,initiateRapid:function(t){var n=window&&window.rapidOpts||{};if(n=r(r({},n),t||{}),window.YAHOO&&window.YAHOO.i13n&&window.YAHOO.i13n.Rapid){var e=new window.YAHOO.i13n.Rapid(n);t&&t.track_mods&&t.track_mods.forEach((function(t){return e.addModulesWithViewability(t)}))}},addRapid:function(t,n){if(void 0===n&&(n=!1),H("window.YAHOO.rapidInstance")){var e=window.YAHOO.rapidInstance;e.isModuleTracked(t)||(n?e.addModulesWithViewability(t):e.addModules(t))}else X("Could not find Rapid object: %s","window.YAHOO.rapidInstance")},initializeViewabilityTracking:function(t,n){return setTimeout((function(){var e=_("".concat(t," a")).filter((function(t){return!!t.getAttribute("href")&&!t.getAttribute("href").startsWith("#")}));if(H("IntersectionObserver")&&H("IntersectionObserverEntry")&&d(window.IntersectionObserverEntry.prototype,"intersectionRatio")){var r=new IntersectionObserver((function(t){var o,i=[];t.forEach((function(t){if(t.isIntersecting){var o=t.target,a=e.indexOf(o)+1,c=o.innerText;P(o,"click",(function(){return function(t,n){H("window.YAHOO.rapidInstance")?window.YAHOO.rapidInstance.beaconClick(t,n,1):X("Could not find Rapid object: %s","window.YAHOO.rapidInstance")}(n,c)})),i.push({slk:c,cpos:a}),r.unobserve(o)}})),i.length&&(o=[{sec:n,_links:i}],H("window.YAHOO.rapidInstance")?window.YAHOO.rapidInstance.beaconLinkViews(o):X("Could not find Rapid object: %s","window.YAHOO.rapidInstance"))}));e.forEach((function(t){r.observe(t)}))}}))}}),K=["hero","hero-yangle","hero-cover","comparison-table","tier-collection"],tt=function(t){try{return"string"==typeof t&&(JSON.parse(t),!0)}catch(t){return!1}},nt=function(t){return Object.keys(t).forEach((function(n){var e=t[n],r=tt(e)?JSON.parse(e):null;e&&h(e)&&Object.keys(e).length?nt(e):r&&Array.isArray(r)&&(t[n]=r,r.length&&nt(t[n]))})),t},et=function(t){return Object.keys(t).forEach((function(n){var e=t[n];e&&"object"==typeof e&&Object.keys(e).length&&et(t[n]),n.startsWith("_")&&""===e&&delete t[n],"benefit_tiles"===n&&(t.items=t[n],delete t[n])})),t},rt=function(t){return t.reduce((function(t,n){var e=n.component,r=n.component_data;return et(r),K.includes(e)?t[e]=r:t[e]=r[0],t}),{})},ot=Object.freeze({__proto__:null,isJSONStr:tt,parseAttributeData:nt,normalizeComponentData:et,reduceComponentData:rt,reduceAttributeData:function(t,n){return nt(JSON.parse(t)).reduce((function(t,e){var r=e[n],o=e.components;return t[r]=rt(o),t}),{})},updateOCMCtaUrlProps:function(t){var e=new URL(window.location.href),r=e.pathname,o=r.lastIndexOf("/")+1,i=r.slice(o),a=t.isrc,c=n.dataUtils.getQueryParam(window.location.search,"ncid")||t.ncid,u=n.dataUtils.getQueryParam(window.location.search,"feature"),s=n.dataUtils.getQueryParam(window.location.search,"dspid"),f=n.dataUtils.getQueryParam(window.location.search,"dspn"),d=n.dataUtils.getQueryParam(window.location.search,"dspcid"),h=n.dataUtils.getQueryParam(window.location.search,"done");if(h)for(;h!==decodeURIComponent(h);)h=decodeURIComponent(h);var v={url:e.href,varId:i,doneUrl:h,ncid:c,feature:u,isrc:a,dspid:s,dspn:f,dspcid:d};l(t,"cta_url",(function(t){if(""===t)return t;var e=t;return Object.keys(v).forEach((function(t){var r=n.dataUtils.sanitizeQueryParam(t,v[t]);r&&(e=n.dataUtils.upsertQueryParam(e,t,r))})),e}))},highlightFooterLink:function(t,n){Array.isArray(t.footer_site_links)&&t.footer_site_links.forEach((function(t){t.highlight=n===t.url}))}}),it={};Object.defineProperty(it,"__esModule",{value:!0}),t.EventEmitter=it.EventEmitter=void 0;var at,ct,ut=function(){function t(){this.events={},this.eventCount=0}return t.prototype.emit=function(t,n){if(void 0===n&&(n=""),t in this.events){var e=!1;this.events[t].forEach((function(t){t.fn.apply(null,[n]),t.emitOnce&&(e=!0)})),e&&(this.events[t]=this.events[t].filter((function(t){return!1===t.emitOnce})))}},t.prototype.on=function(t,n,e){void 0===e&&(e=!1),this.events.hasOwnProperty(t)||(this.events[t]=[]),this.events[t].some((function(t){return t.fn===n}))||this.events[t].push({id:this.eventCount++,emitOnce:e,fn:n})},t.prototype.off=function(t,n){this.events[t]=this.events[t].filter((function(t){return t.fn!==n}))},t.prototype.once=function(t,n){this.on(t,n,!0)},t}();t.EventEmitter=it.EventEmitter=ut;var st={once:function(n,e){return o(void 0,void 0,void 0,(function(){return i(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,M("window.LIBRO.plusStore",5e3)];case 1:return r.sent(),window.LIBRO.plusStore.once(n,e),[3,3];case 2:return r.sent(),t.logger.log("Could not register handler for event: %s",n),[3,3];case 3:return[2]}}))}))},on:function(n,e){return o(void 0,void 0,void 0,(function(){return i(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,M("window.LIBRO.plusStore",5e3)];case 1:return r.sent(),window.LIBRO.plusStore.on(n,e),[3,3];case 2:return r.sent(),t.logger.log("Could not register handler for event: %s",n),[3,3];case 3:return[2]}}))}))},emit:function(n,e){return o(void 0,void 0,void 0,(function(){return i(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,M("window.LIBRO.plusStore",5e3)];case 1:return r.sent(),window.LIBRO.plusStore.emit(n,e),[3,3];case 2:return r.sent(),t.logger.log("Could not register handler for event: %s",n),[3,3];case 3:return[2]}}))}))},off:function(n,e){return o(void 0,void 0,void 0,(function(){return i(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,M("window.LIBRO.plusStore",5e3)];case 1:return r.sent(),window.LIBRO.plusStore.off(n,e),[3,3];case 2:return r.sent(),t.logger.log("Could not register handler for event: %s",n),[3,3];case 3:return[2]}}))}))},getData:function(){return window.LIBRO.plusStore.getData()},showSwitchLightbox:function(){window.LIBRO.plusStore.showSwitchLightbox()},hideSwitchLightbox:function(){window.LIBRO.plusStore.hideSwitchLightbox()},log:function(n){for(var e,r,o,i=[],u=1;u<arguments.length;u++)i[u-1]=arguments[u];(null===(o=null===(r=null===window||void 0===window?void 0:window.LIBRO)||void 0===r?void 0:r.config)||void 0===o?void 0:o.debug)&&(e=t.logger.tag(n)).info.apply(e,c([],a(i),!1))},getOCMContent:function(t){return window.LIBRO.plusStore.getOCMContent(t)},getHasSubscription:function(){return window.LIBRO.plusStore.getHasSubscription()},debug:null===(ct=null===(at=null===window||void 0===window?void 0:window.LIBRO)||void 0===at?void 0:at.config)||void 0===ct?void 0:ct.debug};return t.dataReducers=ot,t.dataUtils=E,t.displayHiddenDefaultContent=function(t,n){Array.isArray(n)&&n.forEach((function(n){j("."+n)&&(t?x(_("."+n),n):j("."+n).remove())}))},t.dom=W,t.rapid=Z,t.store=st,t.updateGenericButton=function(t,n){D("".concat(t," .button span"),(function(t){return t.innerHTML=n.cta_label})),"cta_action"in n?(N("".concat(t," .button"),"data-action","switch"),N("".concat(t," .button"),"href","")):""===n.cta_label?Q("".concat(t," .button")):N("".concat(t," a.button"),"href",n.cta_url)},Object.defineProperty(t,"__esModule",{value:!0}),t}({},LIBRO.common);