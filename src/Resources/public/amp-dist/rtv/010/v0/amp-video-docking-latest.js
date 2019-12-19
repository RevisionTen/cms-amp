(self.AMP=self.AMP||[]).push({n:"amp-video-docking",v:"0",f:(function(AMP,_){
var p;function aa(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ba=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function ca(a){return"number"===typeof a&&isFinite(a)};function q(a){var b=!1,c=null,d=a;return function(a){for(var e=[],g=0;g<arguments.length;++g)e[g-0]=arguments[g];b||(c=d.apply(self,e),b=!0,d=null);return c}};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var r=self.__AMP_LOG;function da(){if(!r.user)throw Error("failed to call initLogConstructor");return r.user}function t(){if(r.dev)return r.dev;throw Error("failed to call initLogConstructor");}function ea(a,b){da().assert(a,b,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var fa=/(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;function ha(a,b,c,d,e){return e?e:b?"\ufffd":d?a.slice(0,-1)+"\\"+a.slice(-1).charCodeAt(0).toString(16)+" ":"\\"+a};var u;function ia(a){return"amp-img[placeholder],img[placeholder],[placeholder] amp-img".replace(/^|,/g,"$&"+a+" ")};var ja=Object.prototype.hasOwnProperty;function ka(){var a,b=Object.create(null);a&&Object.assign(b,a);return b};function la(a,b){for(var c;a&&a!==c;a=a.parentElement)if(b(a))return a;return null}function na(a){return a.closest?a.closest(".amp-video-docked-controls"):la(a,function(a){var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return b?b.call(a,".amp-video-docked-controls"):!1})}function oa(a){var b=a.body.getAttribute("dir")||a.documentElement.getAttribute("dir")||"ltr";return"rtl"==b};function pa(a,b){if(a.__AMP__EXPERIMENT_TOGGLES)var c=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);c=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var d in a.AMP_CONFIG){var e=a.AMP_CONFIG[d];"number"===typeof e&&0<=e&&1>=e&&(c[d]=Math.random()<e)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(d=a.AMP_CONFIG["allow-doc-opt-in"],e=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){e=
e.getAttribute("content").split(",");for(var f=0;f<e.length;f++)-1!=d.indexOf(e[f])&&(c[e[f]]=!0)}Object.assign(c,qa(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){d=a.AMP_CONFIG["allow-url-opt-in"];e=a.location.originalHash||a.location.hash;a=Object.create(null);if(e)for(var g;g=ba.exec(e);)f=aa(g[1],g[1]),g=g[2]?aa(g[2].replace(/\+/g," "),g[2]):"",a[f]=g;for(e=0;e<d.length;e++)f=a["e-"+d[e]],"1"==f&&(c[d[e]]=!0),"0"==f&&(c[d[e]]=
!1)}}var h=c;return!!h[b]}function qa(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){t().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};var ra={},v=(ra["ampdoc-fie"]={isTrafficEligible:function(){return!0},branches:[["21065001"],["21065002"]]},ra);function sa(a){var b=w,c=x(a),d=ta(c),e=d,f=ua(e),g=f["position-observer"];g||(g=f["position-observer"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null});g.ctor||g.obj||(g.ctor=b,g.context=c,g.resolve&&z(e,"position-observer"))}function A(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return z(a,b)}function B(a,b){var c=x(a);c=ta(c);return z(c,b)}function x(a){return a.nodeType?A((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}
function ta(a){a=x(a);return a.isSingleDoc()?a.win:a}function z(a,b){va(a,b);var c=ua(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function ua(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function va(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};function C(a,b){this.la=A(a,"timer");this.G=b;this.A=null}C.prototype.trigger=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];var e=this;this.cancel();this.A=this.la.delay(function(){return e.G.apply(null,c)},a)};C.prototype.cancel=function(){null!==this.A&&(this.la.cancel(this.A),this.A=null)};C.prototype.isWaiting=function(){return null!==this.A};function wa(a){var b=a.touches?a.touches[0]:a;return{x:"x"in b?b.x:b.clientX,y:"y"in b?b.y:b.clientY}};function xa(a,b,c){c=c.sort(function(a,b){return b.minWidth-a.minWidth});var d=-1;c.forEach(function(c){var e=c.className,g=c.minWidth;g<=b&&g>d?(a.classList.add(e),d=g):a.classList.remove(e)})};var D;function F(a,b,c){var d=void 0,e=a,f=c;var g=function(a){try{return f(a)}catch(l){throw self.__AMP_REPORT_ERROR(l),l;}};var h=ya(),k=!1;d&&(k=d.capture);e.addEventListener(b,g,h?d:k);return function(){e&&e.removeEventListener(b,g,h?d:k);g=e=f=null}}function ya(){if(void 0!==D)return D;D=!1;try{var a={get capture(){D=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return D};function za(a,b,c){var d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a}function G(a,b,c){return F(a,b,c)}function Aa(a,b,c){var d=c,e=F(a,b,function(a){try{d(a)}finally{d=null,e()}});return e};var H;function Ba(a){a=a.ownerDocument||a;H&&H.ownerDocument===a||(H=a.createElement("div"));return Ca}function Ca(a){var b=H;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a}function Da(a){a=a.querySelectorAll("[ref]");for(var b=ka(),c=0;c<a.length;c++){var d=a[c],e=d.getAttribute("ref");d.removeAttribute("ref");b[e]=d}return b};var I,Ea="Webkit webkit Moz moz ms O o".split(" ");function Fa(a,b,c){if(2>b.length?0:0==b.lastIndexOf("--",0))return b;I||(I=ka());var d=I[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var f=0;f<Ea.length;f++){var g=Ea[f]+e;if(void 0!==a[g]){e=g;break a}}e=""}var h=e;void 0!==a[h]&&(d=h)}c||(I[b]=d)}return d}function J(a,b){a=a.style;for(var c in b)a.setProperty(Fa(a,c),b[c].toString(),"important")}
function Ga(a,b,c){var d;(b=Fa(a.style,b,void 0))&&(a.style[b]=d?c+d:c)}function K(a,b){void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")}function Ha(a,b){"number"==typeof a&&(a+="px");if(void 0===b)return"translate("+a+")";"number"==typeof b&&(b+="px");return"translate("+a+", "+b+")"}function Ia(a,b){for(var c=0;c<b.length;c++)Ga(a,b[c],null)};var Ja=["<div class=i-amphtml-video-docked-overlay hidden></div>"],Ka=["<div class=amp-video-docked-controls hidden><div class=amp-video-docked-main-button-group><div class=amp-video-docked-button-group><div role=button ref=playButton class=amp-video-docked-play></div><div role=button ref=pauseButton class=amp-video-docked-pause></div></div><div class=amp-video-docked-button-group><div role=button ref=muteButton class=amp-video-docked-mute></div><div role=button ref=unmuteButton class=amp-video-docked-unmute></div></div><div class=amp-video-docked-button-group><div role=button ref=fullscreenButton class=amp-video-docked-fullscreen></div></div></div><div class=amp-video-docked-button-dismiss-group ref=dismissContainer><div role=button ref=dismissButton class=amp-video-docked-dismiss></div></div></div>"],
La=[{className:"amp-small",minWidth:0},{className:"amp-large",minWidth:300}];function N(a,b){K(a,!1);K(b,!0)}
function Ma(a){function b(a){return e[a]}var c=this;this.h=a;var d=Ba(a.getBody());this.container=d(Ka);this.overlay=d(Ja);this.I=q(function(){return B(a,"video-manager")});var e=Da(this.container);this.oa=b("dismissButton");this.M=b("playButton");this.L=b("pauseButton");this.K=b("muteButton");this.T=b("unmuteButton");this.qa=b("fullscreenButton");this.pa=b("dismissContainer");this.ba=this.Z=!1;this.ra=q(function(){return new C(c.h.win,function(){c.hide(!0)})});this.fa=[];this.U=this.ga=this.J=this.B=
null;Na(this);Oa(this)}p=Ma.prototype;p.disable=function(){t().info("amp-video-docking-controls","disable");this.Z=!0};p.enable=function(){t().info("amp-video-docking-controls","enable");this.Z=!1};p.setVideo=function(a,b){this.ga=b;this.U!=a&&(this.U=a,Pa(this,a))};
function Pa(a,b){Qa(a);var c="click",d=b.element;a.fa.push(O(a,a.oa,c,function(){a.container.dispatchEvent(za(a.h.win,"dock-dismiss-on-tap",void 0))}),O(a,a.M,c,function(){b.play(!1)}),O(a,a.L,c,function(){b.pause()}),O(a,a.K,c,function(){b.mute()}),O(a,a.T,c,function(){b.unmute()}),O(a,a.qa,c,function(){b.fullscreenEnter()}),G(a.container,"mouseup",function(){return a.hideOnTimeout(800)}),G(d,"playing",function(){var b=a.M,c=a.L;a.ba=!1;N(b,c)}),G(d,"pause",function(){var b=a.L,c=a.M;a.ba=!0;N(b,
c)}),G(d,"muted",function(){N(a.K,a.T)}),G(d,"unmuted",function(){N(a.T,a.K)}))}p.aa=function(){return"paused"!=this.I().getPlayingState(this.U)};function O(a,b,c,d){return G(b,c,function(){a.Z||d()})}function Qa(a){for(;0<a.fa.length;)a.fa.pop().call()}p.hideOnTimeout=function(a){a=void 0===a?1200:a;this.ra().trigger(a)};function Oa(a){function b(){return Ra(a)}var c=a.overlay;O(a,c,"click",b);O(a,c,"mouseover",b)}
function Ra(a){a.h.win.requestAnimationFrame(function(){var b=a.container,c=a.overlay,d=a.M,e=a.L,f=a.K,g=a.T;K(b,!0);b.classList.add("amp-video-docked-controls-shown");c.classList.add("amp-video-docked-controls-bg");Sa(a);a.aa()?N(d,e):N(e,d);a.I().isMuted(a.U)?N(f,g):N(g,f);a.hideOnTimeout()})}p.positionOnVsync=function(a,b,c,d,e){var f=this.container,g=this.pa,h=a/2,k=b+d*h,m=c+e*h;xa(f,a*d,La);J(f,{transform:Ha(k,m)});var l=4,n=40,y=d*h-l-n,E=-(e*h-l-n);J(g,{transform:Ha(y,E)})};
function Na(a){G(a.h.getRootNode(),"mousedown",function(b){b=b.target;b==a.overlay||na(b)||a.hide(!0)})}p.hide=function(a,b){var c="amp-video-docked-controls-shown",d=this.container,e=this.overlay;!d.classList.contains(c)||a&&this.ba||(b&&(K(d,!1),K(e,!1)),e.classList.remove("amp-video-docked-controls-bg"),d.classList.remove(c))};
function Sa(a){a.B||(a.B=G(a.overlay,"mousemove",function(){Ra(a)}),a.J=G(a.overlay,"mouseout",function(b){var c=wa(b);b=c.x;c=c.y;var d=a.ga,e=d.top,f=d.right,g=d.bottom;if(b<d.left||b>f||c<e||c>g)a.hide(!0),a.B&&(a.B(),a.B=null),a.J&&(a.J(),a.J=null)}))}p.reset=function(){var a=this.overlay,b=[a,this.container];K(a,!1);this.hide();for(a=0;a<b.length;a++)Ia(b[a],["transform","transition","width","height"])};function P(a,b,c,d){return{left:a,top:b,width:c,height:d,bottom:b+d,right:a+c,x:a,y:b}}function Xa(a,b){return a&&b?a.left==b.left&&a.top==b.top&&a.width==b.width&&a.height==b.height:!1};function Ya(a,b,c,d){this.element=b;this.G=d;this.fidelity=c;this.turn=0==c?Math.floor(4*Math.random()):0;this.N=null;this.j=B(a,"viewport")}
Ya.prototype.R=function(a){var b=this.N;if(!(b&&Xa(b.positionRect,a.positionRect)&&Xa(b.viewportRect,a.viewportRect))){var c=a.positionRect,d=c,e=a.viewportRect;a.relativePos=d.top<e.top?"top":d.bottom>e.bottom?"bottom":"inside";d=c;e=a.viewportRect;d.top<=e.bottom&&e.top<=d.bottom&&d.left<=e.right&&e.left<=d.right?(this.N=a,this.G(a)):this.N&&(this.N=null,a.positionRect=null,this.G(a))}};
Ya.prototype.update=function(a){var b=this;if(!a){if(0!=this.turn){this.turn--;return}0==this.fidelity&&(this.turn=4)}var c=this.j.getSize(),d=P(0,0,c.width,c.height);this.j.getClientRectAsync(this.element).then(function(a){b.R({positionRect:a,viewportRect:d,relativePos:""})})};function Za(a,b){function c(){d=0;var g=500-(a.Date.now()-e);if(0<g)d=a.setTimeout(c,g);else{var h=f;f=null;b.apply(null,h)}}var d=0,e=0,f=null;return function(b){for(var g=[],k=0;k<arguments.length;++k)g[k-0]=arguments[k];e=a.Date.now();f=g;d||(d=a.setTimeout(c,500))}};function w(a){var b=this;this.h=a;this.ma=a.win;this.m=[];this.ta=A(this.ma,"vsync");this.j=B(a,"viewport");this.S=[];this.V=this.ea=this.Y=!1;this.na=Za(this.ma,function(){b.Y=!1})}w.prototype.observe=function(a,b,c){var d=this,e=new Ya(this.h,a,b,c);this.m.push(e);this.V||$a(this);e.update();return function(){for(var a=0;a<d.m.length;a++)if(d.m[a]==e){d.m.splice(a,1);0==d.m.length&&ab(d);break}}};
w.prototype.unobserve=function(a){for(var b=0;b<this.m.length;b++)if(this.m[b].element==a){this.m.splice(b,1);0==this.m.length&&ab(this);return}t().error("POSITION_OBSERVER","cannot unobserve unobserved element")};function $a(a){a.V=!0;a.S.push(a.j.onScroll(function(){a.na();a.Y=!0;a.ea||bb(a)}));a.S.push(a.j.onResize(function(){a.updateAllEntries(!0)}))}function ab(a){for(a.V=!1;a.S.length;)a.S.pop()()}w.prototype.updateAllEntries=function(a){for(var b=0;b<this.m.length;b++)this.m[b].update(a)};
function bb(a){a.updateAllEntries();a.ea=!0;a.Y?a.ta.measure(function(){bb(a)}):a.ea=!1};function cb(a,b){var c=0,d=1;return d*(a-b-2*c)}function db(a,b,c,d){return d*(a-b-2*c)}function eb(a,b,c,d){return-d*(a-b-2*c)};function fb(a){return a.querySelector("video, iframe")};function gb(a){var b=".amp-video-docked-controls{opacity:0;pointer-events:none!important;transition:opacity 0.3s ease;height:120px}.amp-video-docked-main-button-group{height:40px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:-20px 0 0 -60px}.amp-large>.amp-video-docked-main-button-group{margin-left:-70px}.amp-large>.amp-video-docked-main-button-group>.amp-video-docked-button-group{margin-right:10px}.amp-large>.amp-video-docked-button-dismiss-group{margin:6px 0 0 -6px}.amp-small>.amp-video-docked-button-dismiss-group,.amp-small>.amp-video-docked-button-dismiss-group>div[role=button]{min-width:32px;height:32px;border-radius:32px;background-size:20px 20px}.amp-small>.amp-video-docked-button-dismiss-group{margin-left:8px}.amp-video-docked-controls-shown{opacity:1;pointer-events:initial!important}.amp-video-docked-button-group{margin:0}.amp-video-docked-button-dismiss-group,.amp-video-docked-button-dismiss-group>div[role=button],.amp-video-docked-button-group,.amp-video-docked-button-group>div[role=button]{min-width:40px;height:40px;border-radius:40px}.amp-video-docked-button-dismiss-group:active,.amp-video-docked-button-group:active{background-color:hsla(0,0%,100%,0.7)}.amp-video-docked-button-dismiss-group>div[role=button],.amp-video-docked-button-group,.amp-video-docked-button-group>div[role=button],.amp-video-docked-controls,.i-amphtml-video-docked-overlay{-webkit-tap-highlight-color:rgba(0,0,0,0)!important}.amp-video-docked-button-dismiss-group>div[role=button],.amp-video-docked-button-group>div[role=button]{background-repeat:no-repeat;background-position:50%}.amp-video-docked-shadow{box-shadow:0px 0 20px 6px rgba(0,0,0,0.2)}.amp-video-docked-controls-bg{background:hsla(0,0%,90.2%,0.6)}.amp-video-docked-mute{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")}.amp-video-docked-unmute{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")}.amp-video-docked-pause{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M6 19h4V5H6v14zm8-14v14h4V5h-4z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")}.amp-video-docked-play{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M8 5v14l11-7z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")}.amp-video-docked-fullscreen{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z'/%3E%3C/svg%3E\")}.amp-video-docked-dismiss{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")}.amp-video-docked-shadow,.i-amphtml-video-docked,.i-amphtml-video-docked-overlay{margin:0!important}.i-amphtml-video-docked{transition-property:transform!important}.amp-video-docked-controls,.amp-video-docked-shadow,.i-amphtml-video-docked,.i-amphtml-video-docked-overlay{position:fixed!important;top:0!important;left:0!important;right:auto!important;bottom:auto!important;padding:0!important;min-width:0!important;min-height:0!important;max-width:auto!important;max-height:auto!important;transform-origin:left top!important;will-change:width,height,transition,transform,opacity}.i-amphtml-video-docked-overlay{opacity:0;transition:opacity 0.3s ease;contain:strict!important}.amp-video-docked-controls-bg{opacity:1}.i-amphtml-video-docked-overlay.amp-video-docked-almost-dismissed{opacity:1;background:hsla(0,0%,39.2%,0.1)}.i-amphtml-video-docked-shadow.amp-video-docked-almost-dismissed,.i-amphtml-video-docked.amp-video-docked-almost-dismissed{opacity:0.3}.amp-video-docked-button-dismiss-group{position:absolute;top:-40px}.amp-video-docked-placeholder-background{background:hsla(0,0%,78.4%,0.5);transition-property:opacity;overflow:hidden;pointer-events:none;z-index:0;opacity:0}.amp-video-docked-placeholder-icon{-webkit-mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h48v48H0z'/%3E%3Cpath d='M40 4H16c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4zM8 12H4v28c0 2.2 1.8 4 4 4h28v-4H8V12zm28 3.868L23.382 28.486l-2.828-2.828L33.212 13H25V9h15v15h-4v-8.132z' fill='%23000' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h48v48H0z'/%3E%3Cpath d='M40 4H16c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4zM8 12H4v28c0 2.2 1.8 4 4 4h28v-4H8V12zm28 3.868L23.382 28.486l-2.828-2.828L33.212 13H25V9h15v15h-4v-8.132z' fill='%23000' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E\");-webkit-mask-size:48px 48px;mask-size:48px 48px;height:48px;width:48px;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:bottom left;mask-position:bottom left;background:hsla(0,0%,39.2%,0.8);transition-property:opacity,transform;will-change:opacity,transform;position:absolute;bottom:40px;left:40px}.amp-video-docked-placeholder-icon.amp-rtl{-webkit-mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M-4-4h48v48H-4z'/%3E%3Cpath d='M36 0c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4H12c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4h24zM16 11.868l12.618 12.618 2.829-2.828L18.789 9H27V5H12v15h4v-8.132zM4 8H0v28c0 2.2 1.8 4 4 4h28v-4H4V8z' fill='%23000' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M-4-4h48v48H-4z'/%3E%3Cpath d='M36 0c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4H12c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4h24zM16 11.868l12.618 12.618 2.829-2.828L18.789 9H27V5H12v15h4v-8.132zM4 8H0v28c0 2.2 1.8 4 4 4h28v-4H4V8z' fill='%23000' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E\");left:auto;right:40px}.amp-video-docked-placeholder-icon.amp-small{-webkit-mask-size:32px 32px;mask-size:32px 32px;width:32px;height:32px;bottom:20px;left:20px}.amp-video-docked-placeholder-icon.amp-rtl.amp-small{left:auto;right:20px}.amp-video-docked-placeholder-background-poster{background-size:cover;background-repeat:no-repeat;filter:blur(20px);transform:scale(1.1);opacity:0.3}.amp-video-docked-controls{z-index:2147483646!important}.i-amphtml-video-docked-overlay{z-index:2147483645!important}.i-amphtml-video-docked{z-index:2147483644!important}.amp-video-docked-shadow{z-index:2147483643!important}\n/*# sourceURL=/extensions/amp-video-docking/0.1/amp-video-docking.css*/",
c=!1,d="amp-video-docking",e=a.getHeadNode();a=b;var f=e.__AMP_CSS_TR;var g=f?f(a):a;a:{a=e;var h=c||!1,k=d||null;(f=a.__AMP_CSS_SM)||(f=a.__AMP_CSS_SM=ka());var m=!h&&k&&"amp-custom"!=k&&"amp-keyframes"!=k,l=h?"amp-runtime":m?"amp-extension="+k:null;if(l){var n=hb(a,f,l);if(n){n.textContent!==g&&(n.textContent=g);break a}}n=(a.ownerDocument||a).createElement("style");n.textContent=g;g=null;h?n.setAttribute("amp-runtime",""):m?(n.setAttribute("amp-extension",k||""),g=hb(a,f,"amp-runtime")):(k&&n.setAttribute(k,
""),g=a.lastChild);h=g;a.insertBefore(n,h?h.nextSibling:a.firstChild);l&&(f[l]=n)}}function hb(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null};function ib(a,b,c){var d=0,e=1,f=e,g=d;d>e&&(f=d,g=e);a<g?a=g:a>f&&(a=f);return(a-d)*(c-b)/(e-d)+b};var jb=["<div class=amp-video-docked-shadow hidden></div>"],kb=["<div class=amp-video-docked-placeholder-background><div class=amp-video-docked-placeholder-background-poster ref=poster></div><div class=amp-video-docked-placeholder-icon ref=icon></div></div>"];function lb(a,b){var c=!1;return function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];c||(c=!0,a.requestAnimationFrame(function(){b.apply(null,e);c=!1}))}}var mb=[{className:"amp-small",minWidth:0},{className:"amp-large",minWidth:420}];
function nb(a){var b=a.height;return 0<a.width&&0<b}function ob(a,b){return 1==a.nodeType?a==b:a.posX==b.posX}
function Q(a,b){var c=this;this.h=a;this.I=q(function(){return B(a,"video-manager")});this.j=B(a,"viewport");this.c=null;this.ka=oa(this.h.getRootNode())?0:1;var d=Ba(this.h.getRootNode());this.X=q(function(){return R(c,d(jb))});this.l=q(function(){return pb(c)});this.W=q(function(){return R(c,d(kb))});this.F=q(function(){return Da(c.W())});this.P=this.C=this.w=this.ca=this.ia=null;this.da=this.j.getScrollTop();this.$=!1;this.D=this.O=0;this.ja=[];this.sa=q(function(){var a=c.h;c.j.onScroll(lb(a.win,
function(){var a=c.j.getScrollTop();5>Math.abs(a-c.da)||(c.P=a>c.da?1:-1,c.da=a)}));c.j.onResize(function(){return qb(c)});gb(a)});this.o=q(function(){var a=c.h.getRootNode();var b=a.querySelector("[dock]");ea(b.signals().get("registered"),"`dock` attribute can only be set on video components.");b=b.getAttribute("dock").trim();""==b?a=null:(a=a.querySelector(b))&&ea("amp-layout"==a.tagName.toLowerCase(),"Dock slot must be an <amp-layout> element.");return a});this.ha=b||null;this.H=!1;rb(this)}
function rb(a){if(sb(a)){for(var b=a.h,c="["+"dock".replace(fa,ha)+"]",d=b.getRootNode().querySelectorAll(c),e=0;e<d.length;e++){var f=d[e];f.signals&&f.signals().get("registered")&&a.registerElement(f)}G(b.getBody(),"registered",function(b){b=b.target;b.hasAttribute("dock")&&a.registerElement(b)})}}function sb(a){return A(a.h.win,"platform").isIos()&&B(a.h,"viewer").isEmbedded()?!1:!0}function qb(a){a.ja.forEach(function(b){return tb(a,b)})}
Q.prototype.register=function(a){var b=this;this.sa();var c=a.element;if(this.ha)var d=this.ha;else sa(this.h),d=B(this.h.getHeadNode(),"position-observer");d.observe(c,1,function(){if(!b.H)if(1==b.P){var c=ub(b,a);if(c){var d;if(!(d=b.ia!=a)&&(d=null!==b.ca)){d=b.ca;var g=b.P;d=!(0==d&&1==g||1==d&&-1==g)}d?d=!1:(S(b,a.element,.02)&&(b.ia=null,b.ca=null),d=!0);d||b.c||(d=b.c)&&ob(c,d.target)&&0<=d.step||vb(b,a,c)}}else-1==b.P&&b.c&&(c=b.c.video,S(b,c.element,.7)&&T(b,c))});this.ja.push(a)};
Q.prototype.registerElement=function(a){var b=this;a.getImpl().then(function(a){return b.register(a)})};function R(a,b){return(a.h.getRootNode().body||a.h.getRootNode()).appendChild(b)}function wb(a,b){function c(b){return xb(a,b)}F(b,"touchstart",c);F(b,"mousedown",c)}function pb(a){var b=new Ma(a.h),c=b,d=c.container;c=c.overlay;G(d,"dock-dismiss-on-tap",function(){a.l().hide(!1,!0);T(a,a.c.video)});wb(a,d);wb(a,c);R(a,d);R(a,c);return b}
function ub(a,b){var c;if(!(c=a.$)){c=b.getLayoutBox();var d=c.height;.98>c.width/d?(c=b.element,d=c.tagName.toUpperCase(),da().error(d,"Minimize-to-corner (`dock`) does not support portrait video.",c),c=!1):c=320<=U(a)&&a.j.getSize().height-0>=.7*d;c=!c}if(c||a.c&&(!a.c||a.c.video!=b)||!a.c&&!a.aa(b))return null;if(yb(a)){c=zb(a);var e=b.element.getIntersectionChangeEntry().intersectionRect;if(nb(e)){d=e.top;e=e.bottom;var f=V(a,a.o()),g=f.top;f=f.height;f=a.j.getSize().height-f-g;c=0==c?d<=g:e>=
f}else c=!1}else c=!1;if(c)return a.o();var h=Ab(a,b);return null===h?h:{posY:h,posX:a.ka}}function V(a,b){a=-a.j.getScrollTop();b=b.getLayoutBox();return 0==a||0==b.width&&0==b.height?b:P(b.left+0,b.top+a,b.width,b.height)}function yb(a){if(!a.o())return!1;a=V(a,a.o());var b=a.height;return 0<a.width&&0<b}function tb(a,b){Bb(a,function(){var c=ub(a,b);c?Cb(a,b,c,1):a.c&&a.c.video==b&&T(a,b)})}function Bb(a,b){a.h.win.requestAnimationFrame(b)}
function Ab(a,b){if(yb(a))return null;if(a.c&&a.c.video==b&&1!=a.c.target.nodeType)return a.c.target.posY;a=b.element.getIntersectionChangeEntry().intersectionRect;if(!nb(a)||0<a.top)return null;t().info("amp-video-docking","should dock at Y = TOP",{video:b,intersectionRect:a});return 0}function U(a){return a.j.getSize().width-0}Q.prototype.aa=function(a){var b=(a=void 0===a?null:a)||this.c.video;return"playing_manual"==this.I().getPlayingState(b)};
function zb(a){var b=V(a,a.o()),c=b.top;b=b.height;var d=a.j.getSize().height;return d-b-c>c?0:1}function vb(a,b,c,d){var e=d||.1;if(.3<e)return Cb(a,b,c,1);var f=!0;return Cb(a,b,c,e,f).then(function(){return new Promise(function(d){Bb(a,function(){vb(a,b,c,e+.1).then(d)})})})}
function Cb(a,b,c,d,e){t().info("amp-video-docking","dock",{video:b,target:c,step:d});Db(b.element);var f=W(a,b,c,d),g=f.x,h=f.y,k=f.scale,m=f.relativeX;b.hideControls();var l=Eb(a,d);Fb(a,b,c,d);return Y(a,b,g,h,k,d,l,m).then(function(){e||a.l().enable()})}
Q.prototype.R=function(a){var b=this.c&&1==this.c.target.nodeType?this.o():this.c.video.element,c=za(this.h.win,a,{}),d=b.ownerDocument.defaultView,e=d.__AMP_TOP||(d.__AMP_TOP=d),f=d!=e;if(pa(e,"ampdoc-fie")){e.__AMP_EXPERIMENT_BRANCHES=e.__AMP_EXPERIMENT_BRANCHES||{};for(var g in v)if(ja.call(v,g)&&!ja.call(e.__AMP_EXPERIMENT_BRANCHES,g))if(v[g].isTrafficEligible&&v[g].isTrafficEligible(e)){if(!e.__AMP_EXPERIMENT_BRANCHES[g]&&pa(e,g)){var h=v[g].branches;e.__AMP_EXPERIMENT_BRANCHES[g]=h[Math.floor(Math.random()*
h.length)]||null}}else e.__AMP_EXPERIMENT_BRANCHES[g]=null;e="21065002"===(e.__AMP_EXPERIMENT_BRANCHES?e.__AMP_EXPERIMENT_BRANCHES["ampdoc-fie"]:null)}else e=!1;f&&!e?d=va(d,"action")?z(d,"action"):null:(d=x(b),d=ta(d),d=va(d,"action")?z(d,"action"):null);var k=d;k.trigger(b,a,c,1)};function Eb(a,b){var c=300;return a.c?Math.abs(b-a.c.step)*c:0}
function Y(a,b,c,d,e,f,g,h){function k(a){return J(a,{"transition-duration":g+"ms","transition-timing-function":ma})}function m(a){return J(a,{opacity:f})}function l(a){Jb&&J(a,{width:y+"px",height:E+"px","min-width":y+"px","min-height":E+"px"})}if(a.w&&a.w.x==c&&a.w.y==d&&a.w.scale==e)return Promise.resolve();a.H=!0;var n=b.getLayoutBox(),y=n.width,E=n.height;a.w={x:c,y:d,scale:e};var ma=0<f?"ease-out":"ease-in",L=b.element,Kb=fb(L),Ta=a.X(),Lb=a.l().overlay,X=a.W(),M=a.F().icon,Ua=ca(h),Va=0==h;
Ua&&(xa(M,y,mb),M.classList.toggle("amp-rtl",Va));var Jb=Gb(a,y,E),Wa=M.classList.contains("amp-small"),Nb=Wa?32:48,Ob=Wa?20:40,Pb=Va?eb:db,Qb=Pb(y,Nb,Ob,f);b.mutateElement(function(){Kb.classList.add("i-amphtml-video-docked");J(L,{overflow:"visible"});K(Ta,!0);K(Lb,!0);b.applyFillContent(a.F().poster);b.applyFillContent(X);Hb(a,b);L.appendChild(X);Bb(a,function(){b.mutateElement(function(){m(X);k(X);k(M);Ua&&J(M,{transform:"translate("+Qb+"px, 0px) scale(1)"})})});[fb(b.element),a.X(),a.l().overlay].forEach(function(a){J(a,
{transform:"translate("+c+"px, "+d+"px) scale("+e+")"});k(a);l(a)});m(Ta);a.l().positionOnVsync(e,c,d,y,E)});return A(a.h.win,"timer").promise(g).then(function(){a.H=!1})}
function Hb(a,b){var c=a.F().poster;a:{a=b.element;b=["poster","data-poster"];for(var d=0;d<b.length;d++){var e=b[d];if(a.hasAttribute(e)){a=a.getAttribute(e);break a}}if(void 0!==u)var f=u;else{try{var g=a.ownerDocument,h=g.createElement("div"),k=g.createElement("div");h.appendChild(k);f=h.querySelector(":scope div")===k}catch(n){f=!1}f=u=f}f?a=a.querySelector(ia(":scope")):(a.classList.add("i-amphtml-scoped"),f=ia(".i-amphtml-scoped"),f=a.querySelectorAll(f),a.classList.remove("i-amphtml-scoped"),
a=void 0===f[0]?null:f[0]);a=a?a.getAttribute("src"):void 0}var m=a;if(m){K(c,!0);a={"background-image":"url("+m+")"};for(var l in a)Ga(c,l,a[l])}else K(c,!1)}function Gb(a,b,c){var d=!a.C||a.C.width!=b||a.C.height!=c;d&&(a.C={width:b,height:c});return d}function Fb(a,b,c,d){var e=a.c;a.c={video:b,target:c,step:d};e&&ob(c,e.target)&&e.video==b||(a.l().setVideo(b,Z(a,b,c)),a.R("dock"))}
function S(a,b,c){c=void 0===c?1:c;var d=yb(a)?a.o():null;d=void 0===d?null:d;if(null!=d&&1==d.nodeType){b=b.getLayoutBox();d=b.top;var e=b.bottom,f=b.height,g=a.o().getLayoutBox(),h=g.top;g=g.bottom;a=nb(b)?0==zb(a)?(e-Math.max(d,h))/f:(g-d)/f:0}else a=b.getIntersectionChangeEntry().intersectionRatio;var k=a;return k>c-.02}
function xb(a,b){if(a.c&&!(a.c&&1==a.c.target.nodeType||a.H)){var c=wa(b).x,d={x:0,y:0};b=a.c.target;var e=b.posX,f=b.posY,g=lb(a.h.win,function(b){var g=a.c.target,h=g.posY;if(g.posX===e&&h===f&&(d.x=wa(b).x-c,d.y=0,g=d.x,h=d.y,!(10>=Math.sqrt(g*g+h*h)))){b.preventDefault();b.stopPropagation();a.l().hide(!1,!0);a.$=!0;a.l().disable();b=d.x;g=d.y;h=a.c.video;var k=W(a,h,a.c.target,1),m=k.x,ma=k.y;k=k.scale;var L=Ib(a,b,g).centerX>=U(a)/2?1:0;a.D=b-a.O;a.O=b;Y(a,h,m+b,ma+g,k,1,0,L)}}),h=function(){return Mb(a,
k,d)};b=a.h.getRootNode();var k=[Rb(a),Sb(a),Tb(a),F(b,"touchmove",g),F(b,"mousemove",g),Aa(b,"touchend",h),Aa(b,"mouseup",h)]}}function Sb(a){var b=a.h.getRootNode().documentElement,c="i-amphtml-select-disabled";b.classList.add(c);return function(){return b.classList.remove(c)}}function Rb(a){a.j.disableScroll();return a.j.resetScroll.bind(a.j)}
function Tb(a){function b(a){return a.preventDefault()}var c=a.h.win;if(!A(c,"platform").isIos())return function(){};c.addEventListener("touchmove",b,{passive:!1});return function(){return c.removeEventListener("touchmove",b)}}function Mb(a,b,c){b.forEach(function(a){return a.call()});a.$=!1;a.l().enable();40>Math.abs(a.D)?Ub(a,c.x,c.y):Vb(a,a.O,Math.sign(a.D));a.D=0;a.O=0}
function Vb(a,b,c){var d=a.c.video;d.pause();if(S(a,d.element,.2))Wb(a,d,b,c);else{var e=a.c.target,f=Z(a,d,e),g=f.x,h=f.y;f=f.width;e=W(a,d,e,1).scale;var k=g+b,m=1==c?a.j.getSize().width:0-f;b=Math.min(300,Math.abs(m-k)/2);Xb(a);d.showControls();Y(a,d,m,h,e,0,b).then(function(){Yb(a,d)})}}
function Wb(a,b,c,d){var e=a.c.target,f=Z(a,b,e),g=f.x,h=f.y;f=f.width;e=W(a,b,e,1).scale;var k=U(a);c=g+c;d=1==d?cb(k,f):-1*(k-f);c=Math.min(300,Math.abs(d-c)/2);Xb(a);Y(a,b,d,h,e,0,c).then(function(){T(a,b,!0);b.showControls()})}function Ib(a,b,c){var d=a.c,e=d.target,f=d.step,g=a.c.video,h=g.getLayoutBox();d=h.width;h=h.height;a=W(a,g,e,f);e=a.scale;return{centerX:a.x+b+d*e/2,centerY:a.y+c+h*e/2}}
function Ub(a,b,c){var d=a.c.video,e=a.c.step;b=Ib(a,b,c).centerX>=U(a)/2?1:0;c={posX:b,posY:0};a.c.target=c;a.ka=b;c=W(a,d,c,e);Y(a,d,c.x,c.y,c.scale,e,200,b)}
function Z(a,b,c){if(1==c.nodeType){var d=b.getLayoutBox(),e=d.width;d=d.height;c=V(a,c);b=c.width;var f=c.height;a=c.top;var g=c.left;e/d>b/f?(c=b/e,a=a+f/2-d*c/2,b=g):(c=f/d,b=g+b/2-e*c/2);a=P(b,a,e*c,d*c)}else e=c.posX,d=c.posY,c=b.getLayoutBox(),b=c.width,f=c.height,c=Math.min(30,.04*U(a)),f=b/f,b=Math.max(180,.3*U(a)),f=b/f,e=1==e?a.j.getSize().width-c-b:0+c,a=0==d?0+c:a.j.getSize().height-c-f,a=P(e,a,b,f);return a}
function W(a,b,c,d){var e=V(a,b.element),f=e.left,g=e.top;e=e.width;c=Z(a,b,c);b=c.x;a=c.y;c=c.width;var h=b<f?0:1;f=ib(d,f,b);var k=ib(d,e,c),m=ib(d,g,a),l={x:f,y:m,scale:k/e,relativeX:h};t().info("amp-video-docking","translated to dims",l," @ step=",d);return l}
function T(a,b,c){t().info("amp-video-docking","undock",{video:b});var d=S(a,b.element,.7);d||(b.pause(),b.showControls());c||Xb(a);var e=W(a,b,a.c.target,0),f=e.x,g=e.y,h=e.scale;e=e.relativeX;var k=d?Eb(a,0):0;Y(a,b,f,g,h,0,k,e).then(function(){a:{if(a.w){var c=a.w;var d=c.x;var e=c.y;c=c.scale;var f=V(a,b.element).top;if(e!=f){d=Y(a,b,d,f,c,0,Math.min(150,Math.abs(e-f)/2));break a}}d=void 0}return d}).then(function(){b.showControls();Yb(a,b)})}
function Xb(a){a.l().disable();a.l().hide(!1,!0);a.R("undock")}function Yb(a,b){var c=fb(b.element);t().info("amp-video-docking","resetOnUndock",{video:b});b.mutateElement(function(){c.classList.remove("i-amphtml-video-docked");var b=a.X(),e=a.F().icon,f=a.W();K(b,!1);a.l().reset();[c,b,f,e].forEach(function(a){Ia(a,"transform transition min-width min-height width height opacity overflow".split(" "))});a.w=null;a.C=null;a.c=null})}
function Db(a){(a=a.querySelector(".i-amphtml-android-poster-bug"))&&a.parentElement&&a.parentElement.removeChild(a)}(function(a){a.registerServiceForDoc("video-docking",Q)})(self.AMP);
})});

//# sourceMappingURL=amp-video-docking-0.1.js.map