(self.AMP=self.AMP||[]).push({n:"amp-apester-media",v:"0",f:(function(AMP,_){
var n,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},q;if("function"==typeof Object.setPrototypeOf)q=Object.setPrototypeOf;else{var r;a:{var ba={a:!0},u={};try{u.__proto__=ba;r=u.a;break a}catch(a){}r=!1}q=r?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var v=q;function ca(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function w(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var da=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function x(a){var b=Object.create(null);if(!a)return b;for(var c;c=da.exec(a);){var d=w(c[1],c[1]),e=c[2]?w(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var y="";function ea(a){return a?Array.prototype.slice.call(a):[]}function z(a){return"number"===typeof a&&isFinite(a)};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var A=self.__AMP_LOG;function B(){if(A.dev)return A.dev;throw Error("failed to call initLogConstructor");};var C=Object.prototype.hasOwnProperty;function D(a){return a||{}};function E(){var a=100;this.ja=a;this.N=this.Y=0;this.G=Object.create(null)}E.prototype.has=function(a){return!!this.G[a]};E.prototype.get=function(a){var b=this.G[a];if(b)return b.access=++this.N,b.payload};E.prototype.put=function(a,b){this.has(a)||this.Y++;this.G[a]={payload:b,access:this.N};if(!(this.Y<=this.ja)){B().warn("lru-cache","Trimming LRU cache");a=this.G;var c=this.N+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.Y--)}};D({c:!0,v:!0,a:!0,ad:!0,action:!0});var F,fa;
function ha(a){var b;F||(F=self.document.createElement("a"),fa=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new E));var c=b?null:fa,d=F;if(c&&c.has(a))a=c.get(a);else{d.href=a;d.protocol||(d.href=d.href);var e={href:d.href,protocol:d.protocol,host:d.host,hostname:d.hostname,port:"0"==d.port?"":d.port,pathname:d.pathname,search:d.search,hash:d.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;
e.origin=d.origin&&"null"!=d.origin?d.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;d=self;if(d.__AMP_MODE)d=d.__AMP_MODE;else{var f=self.AMP_CONFIG||{};var g=!!f.test||!1;var k=x(d.location.originalHash||d.location.hash);f=f.spt;var m=x(d.location.search);y||(y=d.AMP_CONFIG&&d.AMP_CONFIG.v?d.AMP_CONFIG.v:"010");g={localDev:!1,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(k.development)||d.AMP_DEV_MODE),examiner:"2"==k.development,geoOverride:k["amp-geo"],
userLocationOverride:k["amp-user-location"],minified:!0,lite:void 0!=m.amp_lite,test:g,log:k.log,version:"0",rtvVersion:y,singlePassType:f};d=d.__AMP_MODE=g}e=d.test&&Object.freeze?Object.freeze(e):e;c&&c.put(a,e);a=e}return a}function ia(a,b){var c;if(!b)return a;var d=a.split("#",2),e=d[0].split("?",2),f=e[0]+(e[1]?c?"?"+b+"&"+e[1]:"?"+e[1]+"&"+b:"?"+b);return f+=d[1]?"#"+d[1]:""}
function ja(a){var b=[],c;for(c in a){var d=a[c];if(null!=d)if(Array.isArray(d))for(var e=0;e<d.length;e++){var f=d[e];b.push(encodeURIComponent(c)+"="+encodeURIComponent(f))}else e=d,b.push(encodeURIComponent(c)+"="+encodeURIComponent(e))}return b.join("&")};function ka(a,b){if(a.__AMP__EXPERIMENT_TOGGLES)var c=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);c=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var d in a.AMP_CONFIG){var e=a.AMP_CONFIG[d];"number"===typeof e&&0<=e&&1>=e&&(c[d]=Math.random()<e)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(d=a.AMP_CONFIG["allow-doc-opt-in"],e=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){e=
e.getAttribute("content").split(",");for(var f=0;f<e.length;f++)-1!=d.indexOf(e[f])&&(c[e[f]]=!0)}Object.assign(c,la(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length)for(d=a.AMP_CONFIG["allow-url-opt-in"],a=x(a.location.originalHash||a.location.hash),e=0;e<d.length;e++)f=a["e-"+d[e]],"1"==f&&(c[d[e]]=!0),"0"==f&&(c[d[e]]=!1)}var g=c;return!!g[b]}
function la(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){B().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};var ma={},G=(ma["ampdoc-fie"]={isTrafficEligible:function(){return!0},branches:[["21065001"],["21065002"]]},ma);function H(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return I(a,b)}function J(a,b){var c=K(a);c=L(c);return I(c,b)}function K(a){return a.nodeType?H((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function L(a){a=K(a);return a.isSingleDoc()?a.win:a}function I(a,b){M(a,b);var c=N(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function na(a){var b=N(a)["amp-analytics-instrumentation"];if(b){if(b.promise)return b.promise;I(a,"amp-analytics-instrumentation");return b.promise=Promise.resolve(b.obj)}return null}function N(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function M(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)}function oa(){var a=new ca,b=a,c=b.promise,d=b.resolve;b=b.reject;c.catch(function(){});return{obj:null,promise:c,resolve:d,reject:b,context:null,ctor:null}};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function pa(a){a.parentElement&&a.parentElement.removeChild(a)}function qa(a,b,c){a=a.createElement(b);for(var d in c)a.setAttribute(d,c[d]);return a};function ra(a){var b=na(L(a));if(b)return b;var c=K(a);return c.waitForBodyOpen().then(function(){var a=c.win;var b=c.win.document.head;if(b){var f={};b=b.querySelectorAll("script[custom-element],script[custom-template]");for(var g=0;g<b.length;g++){var k=b[g];k=k.getAttribute("custom-element")||k.getAttribute("custom-template");f[k]=!0}f=Object.keys(f)}else f=[];a=f.includes("amp-analytics")?H(a,"extensions").waitForExtension(a,"amp-analytics"):Promise.resolve();return a}).then(function(){var b=
c.win;if(b.__AMP_EXTENDED_ELEMENTS&&b.__AMP_EXTENDED_ELEMENTS["amp-analytics"]){b=L(a);var e=na(b);e?b=e:(b=N(b),b["amp-analytics-instrumentation"]=oa(),b=b["amp-analytics-instrumentation"].promise)}else b=null;return b})};function sa(a,b,c){ra(a).then(function(d){d&&d.triggerEventForTarget(a,b,c)})};function ta(a,b){var c=!0;c=void 0===c?!1:c;var d=void 0===d?!1:d;var e=a.ownerDocument,f=qa(e,"amp-analytics",D({sandbox:"true",trigger:d?"":"immediate"})),g=qa(e,"script",D({type:"application/json"}));g.textContent=JSON.stringify(b);f.appendChild(g);f.CONFIG=b;c?(b=H(a.ownerDocument.defaultView,"extensions"),c=K(a),b.installExtensionForDoc(c,"amp-analytics")):ra(a).then(function(){});a.appendChild(f)}
function ua(a,b){var c=this;this.ba=a.getResourceId();this.D=a;this.l=b;for(var d in b.triggers){var e="sandbox-"+this.ba+"-"+b.triggers[d].on;b.triggers[d].on=e}this.D.signals().whenSignal("load-start").then(function(){ta(c.D,b)})}ua.prototype.trigger=function(a,b){sa(this.D,"sandbox-"+this.ba+"-"+a,b)};function O(a){this.D=a;this.l={requests:{},triggers:{}}}O.prototype.setTransportConfig=function(a){this.l.transport=a};O.prototype.setExtraUrlParams=function(a){this.l.extraUrlParams=a};
O.prototype.track=function(a,b){b=Array.isArray(b)?b:[b];for(var c=[],d=0;d<b.length;d++){var e=a+"-request-"+d;this.l.requests[e]=b[d];c.push(e)}this.l.triggers[a]={on:a,request:c};return this};O.prototype.build=function(){var a=new ua(this.D,this.l);this.l=null;return a};function P(a,b){var c,d=this;this.ga=H(a,"timer");this.na=b;this.ka=c||0;this.F=-1;this.U=0;this.W=!1;this.ia=function(){d.F=-1;d.U=0;d.W=!0;d.na();d.W=!1}}P.prototype.isPending=function(){return-1!=this.F};P.prototype.schedule=function(a){var b=a||this.ka;this.W&&10>b&&(b=10);var c=Date.now()+b;return!this.isPending()||-10>c-this.U?(this.cancel(),this.U=c,this.F=this.ga.delay(this.ia,b),!0):!1};P.prototype.cancel=function(){this.isPending()&&(this.ga.cancel(this.F),this.F=-1)};var Q;function va(a,b){var c=void 0,d=a,e=b;var f=function(a){try{return e(a)}catch(h){throw self.__AMP_REPORT_ERROR(h),h;}};var g=wa(),k=!1;c&&(k=c.capture);d.addEventListener("message",f,g?c:k);return function(){d&&d.removeEventListener("message",f,g?c:k);f=d=e=null}}function wa(){if(void 0!==Q)return Q;Q=!1;try{var a={get capture(){Q=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return Q};function xa(a,b){try{return JSON.parse(a)}catch(c){return b&&b(c),null}};function ya(a){if(!za(a))return null;var b=a.indexOf("{");try{return JSON.parse(a.substr(b))}catch(c){return B().error("MESSAGING","Failed to parse message: "+a,c),null}}function za(a){return"string"==typeof a&&0==a.indexOf("amp-")&&-1!=a.indexOf("{")};function Aa(a,b){return va(a,b)};function Ba(a,b){for(var c=[],d=0,e=0;e<a.length;e++){var f=a[e];b(f,e,a)?c.push(f):(d<e&&(a[d]=f),d++)}d<a.length&&(a.length=d)};var R,Ca="Webkit webkit Moz moz ms O o".split(" ");function Da(a,b,c){var d=a.listeningFors;!d&&c&&(d=a.listeningFors=Object.create(null));a=d||null;if(!a)return a;var e=a[b];!e&&c&&(e=a[b]=[]);return e||null}function Ea(a,b,c){var d=c?b.getAttribute("data-amp-3p-sentinel"):"amp";a=Da(a,d,!0);for(d=0;d<a.length;d++){var e=a[d];if(e.frame===b){var f=e;break}}f||(f={frame:b,events:Object.create(null)},a.push(f));return f.events}
function Fa(a){for(var b=D({sentinel:"unlisten"}),c=a.length-1;0<=c;c--){var d=a[c];if(!d.frame.contentWindow){a.splice(c,1);var e=d.events,f;for(f in e)e[f].splice(0,Infinity).forEach(function(a){a(b)})}}}
function Ga(a){if(!a.listeningFors){var b=function(b){if(b.data){var d=Ha(b.data);if(d&&d.sentinel){var c=b.source;var f=Da(a,d.sentinel);if(f){for(var g,k=0;k<f.length;k++){var m=f[k],h=m.frame.contentWindow;if(h){var l;if(!(l=c==h))b:{for(l=c;l&&l!=l.parent;l=l.parent)if(l==h){l=!0;break b}l=!1}if(l){g=m;break}}else setTimeout(Fa,0,f)}c=g?g.events:null}else c=f;var p=c;if(p){var t=p[d.type];if(t)for(t=t.slice(),c=0;c<t.length;c++)(0,t[c])(d,b.source,b.origin,b)}}}};a.addEventListener("message",
b)}}function Ia(a,b,c,d){function e(c,e,f,k){if("amp"==c.sentinel){if(e!=a.contentWindow)return;var h="null"==f&&g;if(m!=f&&!h)return}if(d||e==a.contentWindow)"unlisten"==c.sentinel?l():b(c,e,f,k)}var f="send-intersections",g,k=a.ownerDocument.defaultView;Ga(k);c=Ea(k,a,c);var m=ha(a.src).origin,h=c[f]||(c[f]=[]),l;h.push(e);return l=function(){if(e){var a=h.indexOf(e);-1<a&&h.splice(a,1);b=h=e=null}}}
function Ja(a,b,c,d,e){if(a.contentWindow)for(d.type=c,d.sentinel=e?a.getAttribute("data-amp-3p-sentinel"):"amp",a=d,e&&(a="amp-"+JSON.stringify(d)),d=0;d<b.length;d++)e=b[d],e.win.postMessage(a,e.origin)}function Ha(a){"string"==typeof a&&(a="{"==a.charAt(0)?xa(a,function(a){B().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",a)})||null:za(a)?ya(a):null);return a}
function S(a,b,c){var d=this;this.h=a;this.P=b;this.A=[];this.ra=Ia(this.h,function(a,b,g){d.A.some(function(a){return a.win==b})||d.A.push({win:b,origin:g});c(a,b,g)},this.P,this.P)}S.prototype.send=function(a,b){Ba(this.A,function(a){return!a.win.parent});Ja(this.h,this.A,a,b,this.P)};S.prototype.destroy=function(){this.ra();this.A.length=0};function T(a,b,c,d){return{left:a,top:b,width:c,height:d,bottom:b+d,right:a+c,x:a,y:b}}function Ka(a){for(var b=-Infinity,c=Infinity,d=-Infinity,e=Infinity,f=0;f<arguments.length;f++){var g=arguments[f];if(g&&(b=Math.max(b,g.left),c=Math.min(c,g.left+g.width),d=Math.max(d,g.top),e=Math.min(e,g.top+g.height),c<b||e<d))return null}return Infinity==c?null:T(b,d,c-b,e-d)}function U(a,b,c){return 0==b&&0==c||0==a.width&&0==a.height?a:T(a.left+b,a.top+c,a.width,a.height)};var La=[0,.05,.1,.15,.2,.25,.3,.35,.4,.45,.5,.55,.6,.65,.7,.75,.8,.85,.9,.95,1],Ma=Date.now();function V(a,b){var c,d=this;this.O=a;this.o=null;this.R=this.X=!1;this.K=null;this.M=a.getViewport();this.Z=new S(b,c||!1,function(){Na(d)});this.o=new Oa(function(a){for(var b=0;b<a.length;b++)delete a[b].target;d.Z.send("intersection",D({changes:a}))});this.o.tick(this.M.getRect());this.fire=function(){d.X&&d.R&&d.o.tick(d.M.getRect())}}
function Na(a){a.X=!0;a.o.observe(a.O.element);a.O.getVsync().measure(function(){a.R=a.O.isInViewport();a.fire()});var b=a.M.onScroll(a.fire),c=a.M.onChanged(a.fire);a.K=function(){b();c()}}V.prototype.onViewportCallback=function(a){this.R=a};V.prototype.destroy=function(){this.X=!1;this.o.disconnect();this.o=null;this.K&&(this.K(),this.K=null);this.Z.destroy();this.Z=null};
function Oa(a){var b={threshold:La};this.$=a;var c=b&&b.threshold;c=c?Array.isArray(c)?c:[c]:[0];for(a=0;a<c.length;a++)z(c[a]);this.qa=c.sort();this.S=null;this.ca=void 0;this.j=[];this.w=this.C=null}n=Oa.prototype;n.disconnect=function(){this.j.length=0;Qa(this)};
n.observe=function(a){for(var b=0;b<this.j.length;b++)if(this.j[b].element===a){B().warn("INTERSECTION-OBSERVER","should observe same element once");return}var c={element:a,currentThresholdSlot:0};this.S&&(b=Ra(this,c,this.S,this.ca))&&this.$([b]);b=K(a);if(b.win.MutationObserver&&!this.C){this.w=new P(b.win,this.ma.bind(this,a));b=a.ownerDocument.defaultView;var d=b.__AMP_TOP||(b.__AMP_TOP=b),e=b!=d;if(ka(d,"ampdoc-fie")){d.__AMP_EXPERIMENT_BRANCHES=d.__AMP_EXPERIMENT_BRANCHES||{};for(g in G)if(C.call(G,
g)&&!C.call(d.__AMP_EXPERIMENT_BRANCHES,g))if(G[g].isTrafficEligible&&G[g].isTrafficEligible(d)){if(!d.__AMP_EXPERIMENT_BRANCHES[g]&&ka(d,g)){var f=G[g].branches;d.__AMP_EXPERIMENT_BRANCHES[g]=f[Math.floor(Math.random()*f.length)]||null}}else d.__AMP_EXPERIMENT_BRANCHES[g]=null;var g="21065002"===(d.__AMP_EXPERIMENT_BRANCHES?d.__AMP_EXPERIMENT_BRANCHES["ampdoc-fie"]:null)}else g=!1;e&&!g?a=M(b,"hidden-observer")?I(b,"hidden-observer"):null:(a=K(a),a=L(a),a=M(a,"hidden-observer")?I(a,"hidden-observer"):
null);var k=a;this.C=k.add(this.la.bind(this))}this.j.push(c)};n.unobserve=function(a){for(var b=0;b<this.j.length;b++)if(this.j[b].element===a){this.j.splice(b,1);0>=this.j.length&&Qa(this);return}B().warn("INTERSECTION-OBSERVER","unobserve non-observed element")};n.tick=function(a,b){b&&(a=U(a,-b.left,-b.top),b=U(b,-b.left,-b.top));this.S=a;this.ca=b;for(var c=[],d=0;d<this.j.length;d++){var e=Ra(this,this.j[d],a,b);e&&c.push(e)}c.length&&this.$(c)};
function Ra(a,b,c,d){var e=b.element,f=e.getLayoutBox(),g=e.getOwner(),k=g&&g.getLayoutBox(),m=Ka(f,k,c,d)||T(0,0,0,0),h=m;g=f;h=h.width*h.height;g=g.width*g.height;g=0===g?0:h/g;a=a.qa;h=0;var l=a.length;if(0==g)a=0;else{for(var p=(h+l)/2|0;h<p;)g<a[p]?l=p:h=p,p=(h+l)/2|0;a=l}var t=a;if(t==b.currentThresholdSlot)return null;b.currentThresholdSlot=t;c=d?null:c;d=m;a=f;if(h=c)d=U(d,-c.left,-c.top),a=U(a,-c.left,-c.top),h=U(h,-c.left,-c.top);var Pa={time:"undefined"!==typeof performance&&performance.now?
performance.now():Date.now()-Ma,rootBounds:h,boundingClientRect:a,intersectionRect:d,intersectionRatio:g,target:e};return Pa}n.la=function(){this.w.isPending()||this.w.schedule(16)};n.ma=function(a){var b=this,c=J(a,"viewport"),d=J(a,"resources");d.onNextPass(function(){b.tick(c.getRect())})};function Qa(a){a.C&&a.C();a.C=null;a.w&&a.w.cancel();a.w=null};var Sa=/(WebView|(iPhone|iPod|iPad)(?!.*Safari)|Android.*(wv|.0.0.0)|Linux; U; Android)/ig;
function Ta(){var a=!!navigator.userAgent.match(Sa),b=navigator.userAgent||navigator.vendor||window.opera,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(b)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,
4));return c?"mobile"+(a?"-webview":""):"desktop"}function Ua(a){var b=a&&a.getAttribute("data-apester-tags");return b?b.split(",").map(function(a){return a.trim()})||[]:[]}
function Va(a){var b=ea(a.querySelectorAll('script[type="application/ld+json"]'));return b.map(function(a){var b;if(b=a)b=a,b="SCRIPT"==b.tagName&&"APPLICATION/LD+JSON"==b.getAttribute("type").toUpperCase();return b?xa(a.textContent)||{}:{}}).map(function(a){return a&&a.headline}).filter(function(a){return"string"===typeof a}).map(function(a){return a.trim().split(" ").filter(function(a){return 2<a.length})}).reduce(function(a,b){return a.concat(b)},[]).slice(0,5)}
function Wa(a){var b=a.querySelector('meta[name="keywords"]')||{content:""};return b.content.trim().split(",").filter(function(a){return a}).map(function(a){return a.trim()})}function Xa(a,b){var c=Ua(b)||[],d=Wa(a),e=c.concat(d.length?d:Va(a)||[]),f=e.map(function(a){return a.toLowerCase().trim()}),g=f.filter(function(a,b,c){return c.indexOf(a)===b});return g}function W(a,b,c,d,e){c=Aa(c,function(c){var e=d.contentWindow===c.source;c.data.type===a&&e&&b(c.data)});e.push(c)}
function Ya(a,b){var c={offer_id:2,aff_id:b,aff_sub:a,aff_sub2:window.location.hostname,aff_sub3:"amp"},d=Object.keys(c).map(function(a){return a+"="+c[a]}).join("&");return"https://apester.go2cloud.org/aff_i?"+d};function Za(a){a=parseFloat(a);return z(a)?a:void 0};function X(a){a=AMP.BaseElement.call(this,a)||this;a.ea="https://renderer.apester.com";a.aa="https://display.apester.com";a.pa="https://static.qmerce.com";a.oa="https://static.apester.com/js/assets/loader.gif";a.fa=!1;a.h=null;a.J=null;a.da=!1;a.ha=null;a.H=null;a.V=!1;a.T=null;a.B={};a.I=null;a.L=[];a.m=null;return a}var Y=AMP.BaseElement;X.prototype=aa(Y.prototype);X.prototype.constructor=X;
if(v)v(X,Y);else for(var Z in Y)if("prototype"!=Z)if(Object.defineProperties){var $a=Object.getOwnPropertyDescriptor(Y,Z);$a&&Object.defineProperty(X,Z,$a)}else X[Z]=Y[Z];X.sa=Y.prototype;n=X.prototype;n.preconnectCallback=function(a){this.preconnect.url(this.aa,a);this.preconnect.url(this.ea,a);this.preconnect.url(this.pa,a)};n.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
n.viewportCallback=function(a){if(this.m)this.m.onViewportCallback(a);a&&!this.fa&&this.h&&this.h.contentWindow&&(this.fa=!0,this.h.contentWindow.postMessage("interaction seen","*"));this.getPlaceholder()&&!this.da&&this.togglePlaceholder(a)};
n.buildCallback=function(){var a=this.element.getAttribute("width"),b=this.element.getAttribute("height");this.ha=Za(a);this.H=Za(b);this.V=this.element.hasAttribute("data-apester-channel-token");a=this.element.getAttribute("data-apester-media-id")||this.element.getAttribute("data-apester-channel-token");b=this.element;if(!A.user)throw Error("failed to call initLogConstructor");this.T=A.user.assert(a,"Either the data-apester-media-id or the data-apester-channel-token attributes must be specified for <amp-apester-media> %s",
b,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0);this.B={playlist:this.V,idOrToken:this.T,inative:"true"===this.element.getAttribute("data-apester-inative"),fallback:this.element.getAttribute("data-apester-fallback"),distributionChannelId:this.element.getAttribute("data-apester-channel-id"),renderer:!0,tags:Xa(this.getAmpDoc().getRootNode(),this.element)}};n.firstLayoutCompleted=function(){this.viewportCallback(this.isInViewport())};n.onLayoutMeasure=function(){this.m&&this.m.fire()};
function ab(a){var b=a.B,c=b.idOrToken,d=b.playlist,e=b.inative,f=b.distributionChannelId,g=b.fallback,k=b.tags,m=encodeURIComponent(a.T);b="";var h={renderer:!1};h.platform=Ta();e?c?b="/inatives/"+c:f&&(b="/channels/"+f+"/inatives"):d&&k?(b="/tokens/"+m+"/interactions/random",h.tags=k,h.fallback=!!g):b=d?"/tokens/"+m+"/interactions/random":"/interactions/"+m+"/display";return ia(""+a.aa+b,ja(h))}
function bb(a){var b=ab(a);return H(a.win,"xhr").fetchJson(b,{}).then(function(a){return 200===a.status?a.json():a})}function cb(a,b,c){var d={};d.channelId=a.B.distributionChannelId;d.type=a.B.playlist?"playlist":"editorial";d.platform=Ta();d.cannonicalUrl=J(a.element,"documentInfo").get().canonicalUrl;d.sdk="amp";a=a.ea+"/"+(c?"v2":"interaction")+"/"+encodeURIComponent(b);return ia(a,ja(d))}
function db(a,b){var c=a.element.ownerDocument.createElement("iframe");c.setAttribute("frameborder","0");c.setAttribute("allowtransparency","true");c.setAttribute("scrolling","no");c.src=b;c.name=a.win.location.href;c.height=a.H;c.width=a.ha;c.classList.add("amp-apester-iframe");a.applyFillContent(c);return c}
n.layoutCallback=function(){var a=this;this.element.classList.add("amp-apester-container");var b=H(this.win,"vsync");return bb(this).then(function(c){if(!c||204===c.status)return B().warn("amp-apester-media","Display","No Content for provided tag"),a.unlayoutCallback();c=c.payload;var d=a.B.playlist?c[Math.floor(Math.random()*c.length)]:c,e=d.interactionId;c=cb(a,e,d.usePlayer);var f=db(a,c);a.m=new V(a,f);a.I=e;a.h=f;eb(a);return b.mutatePromise(function(){var b=a.element.ownerDocument.createElement("div");
b.setAttribute("overflow","");b.className="amp-apester-overflow";var c=a.element.ownerDocument.createElement("button");c.textContent="Full Size";b.appendChild(c);a.element.appendChild(b);a.element.appendChild(f)}).then(function(){return a.loadPromise(f).then(function(){return b.mutatePromise(function(){a.h&&(a.h.classList.add("i-amphtml-apester-iframe-ready"),d.campaignData&&a.h.contentWindow.postMessage({type:"campaigns",data:d.campaignData},"*"));a.togglePlaceholder(!1);var b=d.publisher;if(b&&
b.trackingPixel){var c=b.trackingPixel.affiliateId;b=b.publisherId;if(c){var e=new O(a.element);e.track("interactionLoaded",Ya(b,c));e.build().trigger("interactionLoaded")}}a.da=!0;c=0;d&&d.data&&d.data.size&&(c=d.data.size.height);c!=a.H&&(a.H=c,a.V?a.attemptChangeHeight(c):a.changeHeight(c))})})}).catch(function(a){B().error("amp-apester-media","Display",a)})},function(a){B().error("amp-apester-media","Display",a)})};
n.createPlaceholderCallback=function(){var a=this.element.ownerDocument.createElement("div"),b=this.element.ownerDocument.createElement("amp-img");b.setAttribute("src",this.oa);b.setAttribute("layout","fixed");b.setAttribute("width","100");b.setAttribute("height","100");this.element.hasAttribute("aria-label")?a.setAttribute("aria-label","Loading - "+this.element.getAttribute("aria-label")):a.setAttribute("aria-label","Loading Apester Media");a.setAttribute("placeholder","");a.className="amp-apester-loader";
var c={top:"50%",left:"50%",transform:"translate(-50%, -50%)"},d;for(d in c){var e=b,f=c[d];var g=e.style;var k=d;if(2>k.length?0:0==k.lastIndexOf("--",0))g=k;else{R||(R=Object.create(null));var m=R[k];if(!m){m=k;if(void 0===g[k]){var h=k;h=h.charAt(0).toUpperCase()+h.slice(1);b:{for(var l=0;l<Ca.length;l++){var p=Ca[l]+h;if(void 0!==g[p]){h=p;break b}}h=""}void 0!==g[h]&&(m=h)}R[k]=m}g=m}g&&(e.style[g]=f)}a.appendChild(b);return this.J=a};n.unlayoutOnPause=function(){return!0};
n.unlayoutCallback=function(){this.h&&(this.m.destroy(),this.m=null,this.L.forEach(function(a){return a()}),pa(this.h),this.h=null);this.J&&(pa(this.J),this.J=null);return!1};
function eb(a){W("fullscreen_on",function(b){a.I===b.id&&a.element.classList.add("amp-apester-fullscreen")},a.win,a.h,a.L);W("fullscreen_off",function(b){a.I===b.id&&a.element.classList.remove("amp-apester-fullscreen")},a.win,a.h,a.L);W("apester_resize_unit",function(b){a.I===b.id&&b.height&&a.attemptChangeHeight(b.height)},a.win,a.h,a.L)}(function(a){a.registerElement("amp-apester-media",X,".amp-apester-iframe{transition:opacity 0.4s;opacity:0}.i-amphtml-apester-iframe-ready{transition:opacity 1s ease-out;opacity:1!important}.amp-apester-loader{height:100%;width:100%;background-color:#fff}.amp-apester-container{max-width:700px;margin:0 auto;display:block;position:relative;width:100%}.amp-apester-overflow{position:absolute;margin:auto;top:50%;left:50%;transform:translate(-50%,-50%)}.amp-apester-overflow button{border:none;background:#fff;cursor:pointer;padding:25px 80px;text-transform:uppercase;letter-spacing:1px;font-weight:700;outline:none;position:relative}.amp-apester-fullscreen{background:rgba(34,36,38,0.97)!important;position:fixed!important;width:100vw!important;height:100vh!important;z-index:2147483646!important;top:0;zoom:1;-webkit-overflow-scrolling:touch!important}\n/*# sourceURL=/extensions/amp-apester-media/0.1/amp-apester-media.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-apester-media-0.1.js.map
