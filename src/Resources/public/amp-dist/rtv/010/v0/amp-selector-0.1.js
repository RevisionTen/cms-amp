(self.AMP=self.AMP||[]).push({n:"amp-selector",v:"0",f:(function(AMP,_){
var k,l="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},m;if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var p={a:!0},q={};try{q.__proto__=p;n=q.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var r=m;function t(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var u=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function v(a){return a?Array.prototype.slice.call(a):[]};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var w=self.__AMP_LOG;function x(){if(!w.user)throw Error("failed to call initLogConstructor");return w.user}function y(a,b){x().assert(a,b,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};var z=Object.prototype.hasOwnProperty;function A(a,b){if(a.__AMP__EXPERIMENT_TOGGLES)var c=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);c=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var e in a.AMP_CONFIG){var d=a.AMP_CONFIG[e];"number"===typeof d&&0<=d&&1>=d&&(c[e]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(e=a.AMP_CONFIG["allow-doc-opt-in"],d=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){d=
d.getAttribute("content").split(",");for(var f=0;f<d.length;f++)-1!=e.indexOf(d[f])&&(c[d[f]]=!0)}Object.assign(c,B(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){e=a.AMP_CONFIG["allow-url-opt-in"];d=a.location.originalHash||a.location.hash;a=Object.create(null);if(d)for(var g;g=u.exec(d);)f=t(g[1],g[1]),g=g[2]?t(g[2].replace(/\+/g," "),g[2]):"",a[f]=g;for(d=0;d<e.length;d++)f=a["e-"+e[d]],"1"==f&&(c[e[d]]=!0),"0"==f&&(c[e[d]]=!1)}}var h=
c;return!!h[b]}function B(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(d){if(w.dev)a=w.dev;else throw Error("failed to call initLogConstructor");a.warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var e=0;e<c.length;e++)0!=c[e].length&&("-"==c[e][0]?a[c[e].substr(1)]=!1:a[c[e]]=!0);return a};var C={},D=(C["ampdoc-fie"]={isTrafficEligible:function(){return!0},branches:[["21065001"],["21065002"]]},C);function E(a){var b=a.ownerDocument.defaultView,c=b.__AMP_TOP||(b.__AMP_TOP=b),e=b!=c;var d=c;if(A(d,"ampdoc-fie")){d.__AMP_EXPERIMENT_BRANCHES=d.__AMP_EXPERIMENT_BRANCHES||{};for(var f in D)if(z.call(D,f)&&!z.call(d.__AMP_EXPERIMENT_BRANCHES,f))if(D[f].isTrafficEligible&&D[f].isTrafficEligible(d)){if(!d.__AMP_EXPERIMENT_BRANCHES[f]&&A(d,f)){var g=D[f].branches;d.__AMP_EXPERIMENT_BRANCHES[f]=g[Math.floor(Math.random()*g.length)]||null}}else d.__AMP_EXPERIMENT_BRANCHES[f]=null;d="21065002"===(d.__AMP_EXPERIMENT_BRANCHES?
d.__AMP_EXPERIMENT_BRANCHES["ampdoc-fie"]:null)}else d=!1;var h=d;e&&!h?a=F(b,"action")?G(b,"action"):null:(a=H(a),a=H(a),a=a.isSingleDoc()?a.win:a,a=F(a,"action")?G(a,"action"):null);return a}function H(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=b.__AMP_TOP||(b.__AMP_TOP=b);a=G(b,"ampdoc").getAmpDoc(a)}return a}
function G(a,b){F(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});var e=c;a=e[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function F(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function I(a,b){for(var c;a&&a!==c;a=a.parentElement)if(b(a))return a;return null}function J(a){return a.closest?a.closest("[option]"):I(a,function(a){var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return b?b.call(a,"[option]"):!1})}function K(a){var b=a.body.getAttribute("dir")||a.documentElement.getAttribute("dir")||"ltr";return"rtl"==b};function L(a,b){if(a.length!==b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!==b[c])return!1;return!0};var M={NONE:"none",FOCUS:"focus",SELECT:"select"};function N(a){a=AMP.BaseElement.call(this,a)||this;a.l=!1;a.j=[];a.c=[];a.w=[];a.A=null;a.h=0;a.m="none";return a}var O=AMP.BaseElement;N.prototype=l(O.prototype);N.prototype.constructor=N;if(r)r(N,O);else for(var P in O)if("prototype"!=P)if(Object.defineProperties){var Q=Object.getOwnPropertyDescriptor(O,P);Q&&Object.defineProperty(N,P,Q)}else N[P]=O[P];N.H=O.prototype;k=N.prototype;k.isLayoutSupported=function(){return!0};
k.buildCallback=function(){var a=this;this.A=E(this.element);this.l=this.element.hasAttribute("multiple");this.element.hasAttribute("role")||this.element.setAttribute("role","listbox");this.l&&this.element.setAttribute("aria-multiselectable","true");this.element.hasAttribute("disabled")&&this.element.setAttribute("aria-disabled","true");var b=this.element.getAttribute("keyboard-select-mode");b?(b=b.toLowerCase(),x().assertEnumValue(M,b),y(!(this.l&&"select"==b),"[keyboard-select-mode=select] not supported for multiple selection amp-selector")):
b="none";this.m=b;this.registerAction("clear",this.o.bind(this));R(this);this.element.addEventListener("click",this.B.bind(this));this.element.addEventListener("keydown",this.C.bind(this));this.registerAction("selectUp",function(b){var c=b,d=c.args,f=c.trust;S(a,d&&void 0!==d.delta?-d.delta:-1,f)},1);this.registerAction("selectDown",function(b){var c=b.args;S(a,c&&void 0!==c.delta?c.delta:1,b.trust)},1);this.registerAction("toggle",function(b){var c=b.args;b=b.trust;y(0<=c.index,"'index' must be greater than 0");
y(c.index<a.c.length,"'index' must be less than the length of options in the <amp-selector>");return c&&void 0!==c.index?aa(a,c.index,c.value,b):Promise.reject("'index' must be specified")},1);this.element.addEventListener("amp:dom-update",this.D.bind(this))};k.mutatedAttributesCallback=function(a){var b=a.selected;void 0!==b&&ba(this,b);var c=a.disabled;void 0!==c&&(c?this.element.setAttribute("aria-disabled","true"):this.element.removeAttribute("aria-disabled"))};
function ba(a,b){var c=Array.isArray(b)?b:[b];if(null===b||0==c.length)a.o();else{a.l||(c=c.slice(0,1));var e=T(a);if(!L(e.sort(),c.sort())){var d=c.reduce(function(a,b){a[b]=!0;return a},Object.create(null));for(b=0;b<a.c.length;b++){c=a.c[b];var f=c.getAttribute("option");d[f]?U(a,c):V(a,c)}W(a);X(a)}}}function W(a,b){if("none"!=a.m){a.c.forEach(function(a){a.tabIndex=-1});var c=b;c||(c=a.l?a.c[0]:a.j[0]||a.c[0]);c&&(a.h=a.c.indexOf(c),c.tabIndex=0)}}
k.D=function(){var a=v(this.element.querySelectorAll("[option]"));L(this.c,a)||R(this,a)};function R(a,b){a.j.length=0;var c=b?b:v(a.element.querySelectorAll("[option]"));c.forEach(function(b){b.hasAttribute("role")||b.setAttribute("role","option");b.hasAttribute("disabled")&&b.setAttribute("aria-disabled","true");b.hasAttribute("selected")?U(a,b):V(a,b);b.tabIndex=0});a.c=c;W(a);X(a)}
function X(a){var b=[],c=a.element.getAttribute("name");if(c&&!a.element.hasAttribute("disabled")){var e=a.element.getAttribute("form");a.w.forEach(function(b){a.element.removeChild(b)});a.w=[];var d=a.win.document,f=d.createDocumentFragment();a.j.forEach(function(g){if(!g.hasAttribute("disabled")){var h=d.createElement("input");g=g.getAttribute("option");h.setAttribute("type","hidden");h.setAttribute("name",c);h.setAttribute("value",g);e&&h.setAttribute("form",e);a.w.push(h);f.appendChild(h);b.push(g)}});
a.element.appendChild(f)}}function Y(a,b){b.hasAttribute("disabled")||a.mutateElement(function(){b.hasAttribute("selected")?a.l&&(V(a,b),X(a)):(U(a,b),X(a));W(a,b);Z(a,b,100)})}function T(a){return a.j.map(function(a){return a.getAttribute("option")})}k.B=function(a){!this.element.hasAttribute("disabled")&&(a=a.target)&&(a.hasAttribute("option")||(a=J(a)),a&&Y(this,a))};
function aa(a,b,c,e){var d=a.c[b],f=d.hasAttribute("selected"),g=void 0!==c?c:!f,h=a.c.indexOf(a.j[0]);return g===f?Promise.resolve():a.mutateElement(function(){if(h!==b){U(a,d);var c=a.c[h];c&&V(a,c)}else V(a,d);Z(a,d,e)})}
function Z(a,b,c){var e=a.win;b={targetOption:b.getAttribute("option"),selectedOptions:T(a)};var d={detail:b};Object.assign(d,void 0);"function"==typeof e.CustomEvent?e=new e.CustomEvent("amp-selector.select",d):(e=e.document.createEvent("CustomEvent"),e.initCustomEvent("amp-selector.select",!!d.bubbles,!!d.cancelable,b));var f=e;100>c&&x().warn("amp-selector",'"select" event now has the same trust as the originating action. See https://github.com/ampproject/amphtml/issues/24443 for details.');a.A.trigger(a.element,
"select",f,c)}function S(a,b,c){var e=a.c.indexOf(a.j[0]),d=-1===e&&0>b;b=d?b:e+b;var f=a.c.length,g=0<b&&0<f?b%f:(b%f+f)%f;b=a.c[g];U(a,b);var h=a.c[e];h&&V(a,h);X(a);Z(a,b,c)}
k.C=function(a){if(this.element.hasAttribute("disabled"))return Promise.resolve();switch(a.key){case "ArrowLeft":case "ArrowUp":case "ArrowRight":case "ArrowDown":case "Home":case "End":if("none"!=this.m)return ca(this,a);break;case "Enter":case " ":var b=a.key;" "!=b&&"Enter"!=b||!this.c.includes(a.target)||(a.preventDefault(),Y(this,a.target))}return Promise.resolve()};
function ca(a,b){var c=a.win.document,e=0;switch(b.key){case "ArrowLeft":e=K(c)?1:-1;break;case "ArrowUp":e=-1;break;case "ArrowRight":e=K(c)?-1:1;break;case "ArrowDown":e=1;break;case "Home":e=1;break;case "End":e=-1;break;default:return Promise.resolve()}b.preventDefault();a.c[a.h].tabIndex=-1;return da(a).then(function(c){var d=a.h;switch(b.key){case "Home":a.h=a.c.length-1;break;case "End":a.h=0}do a.h=(a.h+e)%a.c.length,0>a.h&&(a.h+=a.c.length);while(ea(a.c[a.h],c[a.h])&&a.h!=d);var g=a.c[a.h];
g.tabIndex=0;try{g.focus()}catch(fa){}var h=a.c[a.h];"select"==a.m&&Y(a,h)})}function V(a,b){b.removeAttribute("selected");b.setAttribute("aria-selected","false");var c=a.j.indexOf(b);-1!==c&&a.j.splice(c,1)}k.o=function(){for(;0<this.j.length;){var a=this.j.pop();V(this,a)}X(this)};function U(a,b){a.j.includes(b)||(a.l||a.o(),b.setAttribute("selected",""),b.setAttribute("aria-selected","true"),a.j.push(b))}k.F=function(){return this.c};k.G=function(){return this.j};
function da(a){return a.measureElement(function(){return a.c.map(function(a){return a.getBoundingClientRect()})})}function ea(a,b){var c=b,e=c.width;c=c.height;return a.hidden||0==e||0==c}(function(a){a.registerElement("amp-selector",N,"amp-selector [option]{cursor:pointer}amp-selector [option][selected]{cursor:auto;outline:1px solid rgba(0,0,0,0.7)}amp-selector [disabled][option],amp-selector[disabled] [option],amp-selector[disabled] [selected],amp-selector [selected][disabled]{cursor:auto;outline:none}\n/*# sourceURL=/extensions/amp-selector/0.1/amp-selector.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-selector-0.1.js.map