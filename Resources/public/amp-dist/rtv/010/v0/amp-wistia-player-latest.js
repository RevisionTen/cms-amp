(self.AMP=self.AMP||[]).push({n:"amp-wistia-player",v:"0",f:(function(AMP,_){
var g,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},m;if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var ba={a:!0},ca={};try{ca.__proto__=ba;n=ca.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var da=m;function ea(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function fa(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ha=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function p(a){var b=Object.create(null);if(!a)return b;for(var c;c=ha.exec(a);){var d=fa(c[1],c[1]),e=c[2]?fa(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var q="";var ia=Object.prototype.toString;function r(a){return"[object Object]"===ia.call(a)}function t(a){return"number"===typeof a&&isFinite(a)};function u(a){var b=!1,c=null,d=a;return function(a){for(var e=[],h=0;h<arguments.length;++h)e[h-0]=arguments[h];b||(c=d.apply(self,e),b=!0,d=null);return c}};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var v=self.__AMP_LOG;function w(){if(!v.user)throw Error("failed to call initLogConstructor");return v.user}function x(){if(v.dev)return v.dev;throw Error("failed to call initLogConstructor");}function A(a,b,c){return w().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};var ja=Object.prototype.hasOwnProperty;function B(a){var b=Object.create(null);a&&Object.assign(b,a);return b}function C(a){return a||{}};function D(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};C({c:!0,v:!0,a:!0,ad:!0,action:!0});function ka(a,b){if(a.__AMP__EXPERIMENT_TOGGLES)var c=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);c=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var d in a.AMP_CONFIG){var e=a.AMP_CONFIG[d];"number"===typeof e&&0<=e&&1>=e&&(c[d]=Math.random()<e)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(d=a.AMP_CONFIG["allow-doc-opt-in"],e=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){e=
e.getAttribute("content").split(",");for(var f=0;f<e.length;f++)-1!=d.indexOf(e[f])&&(c[e[f]]=!0)}Object.assign(c,la(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length)for(d=a.AMP_CONFIG["allow-url-opt-in"],a=p(a.location.originalHash||a.location.hash),e=0;e<d.length;e++)f=a["e-"+d[e]],"1"==f&&(c[d[e]]=!0),"0"==f&&(c[d[e]]=!1)}var h=c;return!!h[b]}
function la(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){x().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};var ma={},E=(ma["ampdoc-fie"]={isTrafficEligible:function(){return!0},branches:[["21065001"],["21065002"]]},ma);function F(a,b){var c=a.ownerDocument.defaultView,d=c.__AMP_TOP||(c.__AMP_TOP=c),e=c!=d;var f=d;if(ka(f,"ampdoc-fie")){f.__AMP_EXPERIMENT_BRANCHES=f.__AMP_EXPERIMENT_BRANCHES||{};for(var h in E)if(ja.call(E,h)&&!ja.call(f.__AMP_EXPERIMENT_BRANCHES,h))if(E[h].isTrafficEligible&&E[h].isTrafficEligible(f)){if(!f.__AMP_EXPERIMENT_BRANCHES[h]&&ka(f,h)){var k=E[h].branches;f.__AMP_EXPERIMENT_BRANCHES[h]=k[Math.floor(Math.random()*k.length)]||null}}else f.__AMP_EXPERIMENT_BRANCHES[h]=null;f="21065002"===
(f.__AMP_EXPERIMENT_BRANCHES?f.__AMP_EXPERIMENT_BRANCHES["ampdoc-fie"]:null)}else f=!1;var l=f;e&&!l?b=G(c,b)?H(c,b):null:(a=I(a),a=J(a),b=G(a,b)?H(a,b):null);return b}function K(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return H(a,b)}function L(a,b){var c=I(a);c=J(c);return H(c,b)}function I(a){return a.nodeType?K((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function J(a){a=I(a);return a.isSingleDoc()?a.win:a}
function H(a,b){G(a,b);var c=na(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function na(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function G(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function M(a){a.parentElement&&a.parentElement.removeChild(a)};function N(a){a.signals().signal("user-interacted")};var O;function oa(a){a=a.ownerDocument||a;O&&O.ownerDocument===a||(O=a.createElement("div"));return pa}function pa(a){var b=O;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a};function qa(a){var b;try{return JSON.parse(a)}catch(c){return b&&b(c),null}};var ra=["<iframe frameborder=0 allowfullscreen></iframe>"];function sa(a,b){var c={playing:"playing",paused:"pause",ended:["pause","ended"]};if(null!=c[b]){var d=c[b];(Array.isArray(d)?d:[d]).forEach(function(b){a.dispatchCustomEvent(b)})}}function ta(a,b){var c,d=a.element,e=oa(d)(ra);c&&e.setAttribute("sandbox",c.join(" "));a.propagateAttributes(["referrerpolicy"],e);e.src=F(d,"url").assertHttpsUrl(b,d);a.applyFillContent(e);d.appendChild(e);return e};var P;function ua(a,b,c,d){var e=a,f=c;var h=function(a){try{return f(a)}catch(z){throw self.__AMP_REPORT_ERROR(z),z;}};var k=va(),l=!1;d&&(l=d.capture);e.addEventListener(b,h,k?d:l);return function(){e&&e.removeEventListener(b,h,k?d:l);h=e=f=null}}function va(){if(void 0!==P)return P;P=!1;try{var a={get capture(){P=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return P};function wa(a,b,c){var d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a}function Q(a,b,c){return ua(a,b,c,void 0)}function xa(a,b,c,d){var e=c,f=ua(a,b,function(a){try{e(a)}finally{e=null,f()}},d);return f}function ya(a){var b,c,d=new Promise(function(b){c=xa(a,"load",b,void 0)});d.then(c,c);b&&b(c);return d};var za={title:"",artist:"",album:"",artwork:[{src:""}]};function Aa(a){var b=a.querySelector('script[type="application/ld+json"]');if(b){var c=qa(b.textContent);if(c&&c.image){if("string"===typeof c.image)return c.image;if(c.image["@list"]&&"string"===typeof c.image["@list"][0])return c.image["@list"][0];if("string"===typeof c.image.url)return c.image.url;if("string"===typeof c.image[0])return c.image[0]}}}
function Ba(a,b){var c=F(a,"url");if(b&&b.artwork){var d=b.artwork;Array.isArray(d);d.forEach(function(a){a&&(a=r(a)?a.src:a,A(c.isProtocolValid(a)))})}};function Ca(){this.o=null}g=Ca.prototype;g.add=function(a){var b=this;this.o||(this.o=[]);this.o.push(a);return function(){b.remove(a)}};g.remove=function(a){this.o&&(a=this.o.indexOf(a),-1<a&&this.o.splice(a,1))};g.removeAll=function(){this.o&&(this.o.length=0)};g.fire=function(a){if(this.o)for(var b=this.o,c=0;c<b.length;c++)(0,b[c])(a)};g.getHandlerCount=function(){return this.o?this.o.length:0};function R(){this.I=!1;this.Y=new Ca}R.prototype.onSessionEnd=function(a){this.Y.add(a)};R.prototype.beginSession=function(){this.I=!0};R.prototype.endSession=function(){this.I&&this.Y.fire();this.I=!1};R.prototype.isSessionActive=function(){return this.I};var S,Da="Webkit webkit Moz moz ms O o".split(" ");function Ea(a){var b={position:"fixed",top:"0",width:"0",height:"0",opacity:"0"},c;for(c in b){var d=a,e=b[c];var f=d.style;var h=c;if(D(h,"--"))f=h;else{S||(S=B());var k=S[h];if(!k){k=h;if(void 0===f[h]){var l=h;l=l.charAt(0).toUpperCase()+l.slice(1);b:{for(var y=0;y<Da.length;y++){var z=Da[y]+l;if(void 0!==f[z]){l=z;break b}}l=""}void 0!==f[l]&&(k=l)}S[h]=k}f=k}f&&(d.style[f]=e)}};function Fa(a,b){if(b)return Promise.resolve(!1);var c=a.document.createElement("video");c.setAttribute("muted","");c.setAttribute("playsinline","");c.setAttribute("webkit-playsinline","");c.setAttribute("height","0");c.setAttribute("width","0");c.muted=!0;c.playsinline=!0;c.webkitPlaysinline=!0;Ea(c);(new Promise(function(a){return a(c.play())})).catch(function(){});return Promise.resolve(!c.paused)}var Ga=null;function Ha(a){var b=250,c=4E3;return Math.min(Math.max(a,b),c)};function Ia(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null};var Ja="i-amphtml-video-mask{display:block;z-index:1}.amp-video-eq{display:none}.i-amphtml-video-component:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq .amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq .amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq[unpausable] .amp-video-eq-col div{animation-name:none}.amp-video-eq[unpausable].amp-video-eq-play .amp-video-eq-col div{animation-name:amp-video-eq-animation}.amp-video-eq.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/";var Ka=["<i-amphtml-video-mask class=i-amphtml-fill-content role=button></i-amphtml-video-mask>"],La=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function Ma(a){var b=oa(a);return b(Ka)}
function Na(a,b){var c=oa(b)(La),d=c.firstElementChild;for(b=0;4>b;b++){for(var e=d.cloneNode(!0),f=e.children,h=0;h<f.length;h++){var k=f[h];k.classList.add("amp-video-eq-"+(b+1)+"-"+(h+1))}c.appendChild(e)}M(d);K(a,"platform").isIos()&&c.setAttribute("unpausable","");return c};function Oa(a){var b=this;this.ampdoc=a;this.installAutoplayStyles=u(function(){var a=Ja,d=b.ampdoc.getHeadNode();var e=(e=d.__AMP_CSS_TR)?e(a):a;(a=d.__AMP_CSS_SM)||(a=d.__AMP_CSS_SM=B());var f=Ia(d,a,"amp-extension=amp-video-autoplay");f?f.textContent!==e&&(f.textContent=e):(f=(d.ownerDocument||d).createElement("style"),f.textContent=e,f.setAttribute("amp-extension","amp-video-autoplay"),e=Ia(d,a,"amp-runtime"),d.insertBefore(f,e?e.nextSibling:d.firstChild),a["amp-extension=amp-video-autoplay"]=
f)});this.ea=L(this.ampdoc,"viewport");this.h=null;this.da=!1;this.L=K(a.win,"timer");this.fa=F(a.getHeadNode(),"action");this.X=function(){for(var a=0;a<b.h.length;a++){var d=b.h[a];if("paused"!==d.getPlayingState()){T(d,"video-seconds-played");var e=d.video.getCurrentTime(),f=d.video.getDuration();t(e)&&t(f)&&0<f&&(e=wa(b.ampdoc.win,"video-manager.timeUpdate",C({time:e,percent:e/f})),b.fa.trigger(d.video.element,"timeUpdate",e,1))}}b.L.delay(b.X,1E3)};this.O=u(function(){return new U(b.ampdoc,b)});
this.L.delay(this.X,1E3)}g=Oa.prototype;g.dispose=function(){this.O().dispose();if(this.h)for(var a=0;a<this.h.length;a++){var b=this.h[a];b.dispose()}};g.register=function(a){Pa(a);if(a.supportsPlatform()){this.h=this.h||[];var b=new Qa(this,a);Ra(this,b);this.h.push(b);b=b.video.element;b.dispatchCustomEvent("registered");b.classList.add("i-amphtml-video-component");var c=a.signals();c.signal("registered");b.classList.add("i-amphtml-video-interface")}};
function Pa(a){function b(b,e){a.registerAction(b,function(){N(a);e()},c)}var c=1;b("play",function(){return a.play(!1)});b("pause",function(){return a.pause()});b("mute",function(){return a.mute()});b("unmute",function(){return a.unmute()});b("fullscreen",function(){return a.fullscreenEnter()})}
function Ra(a,b){var c=b.video.element;Q(c,"amp:video:visibility",function(a){var c=a.data;c&&1==c.visible?b.updateVisibility(!0):b.updateVisibility()});Q(c,"reloaded",function(){b.videoLoaded()});if(!a.da){var d=function(){for(var b=0;b<a.h.length;b++)a.h[b].updateVisibility()};a.ea.onScroll(d);a.ea.onChanged(d);a.da=!0}}function Sa(a,b){for(var c=0;c<a.h.length;c++)if(a.h[c].video===b)return a.h[c];x().error("video-manager","video is not registered to this video manager");return null}
g.getAnalyticsDetails=function(a){var b;a:{for(b=0;b<this.h.length;b++){var c=this.h[b];if(c.video.element===a){b=c;break a}}x().error("video-manager","video is not registered to this video manager");b=null}return b?b.getAnalyticsDetails():Promise.resolve()};g.getPlayingState=function(a){return Sa(this,a).getPlayingState()};g.isMuted=function(a){return Sa(this,a).isMuted()};g.userInteracted=function(a){return Sa(this,a).userInteracted()};g.registerForAutoFullscreen=function(a){this.O().register(a)};
g.ma=function(){return this.O()};
function Qa(a,b){var c=this;this.J=a;this.l=a.ampdoc;this.video=b;this.W=!0;this.w=this.A=this.ba=!1;this.N=new R;this.N.onSessionEnd(function(){return T(c,"video-session")});this.D=new R;this.D.onSessionEnd(function(){return T(c,"video-session-visible")});this.U=function(){var a=c.l.win,b=a||self;if(b.__AMP_MODE)b=b.__AMP_MODE;else{var f=self.AMP_CONFIG||{};var h=!!f.test||!1;var k=p(b.location.originalHash||b.location.hash);f=f.spt;var l=p(b.location.search);q||(q=b.AMP_CONFIG&&b.AMP_CONFIG.v?b.AMP_CONFIG.v:
"010");h={localDev:!1,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(k.development)||b.AMP_DEV_MODE),examiner:"2"==k.development,geoOverride:k["amp-geo"],userLocationOverride:k["amp-user-location"],minified:!0,lite:void 0!=l.amp_lite,test:h,log:k.log,version:"0",rtvVersion:q,singlePassType:f};b=b.__AMP_MODE=h}b=b.lite;Ga||(Ga=u(Fa));return Ga(a,b)};this.$=u(function(){return new V(c.l.win,c)});this.R=this.ca=!1;this.P=null;this.K=!1;(this.hasAutoplay=b.element.hasAttribute("autoplay"))&&
this.J.installAutoplayStyles();this.B=za;this.ja=function(){c.video.play(!1)};this.ia=function(){c.video.pause()};ya(b.element).then(function(){return c.videoLoaded()});Q(b.element,"pause",function(){T(c,"video-pause");c.A=!1;c.R?c.R=!1:c.N.endSession()});Q(b.element,"playing",function(){c.A=!0;"playing_manual"==c.getPlayingState()&&c.Z();var a=c.video,b=a.element;if(!a.preimplementsMediaSessionAPI()&&!b.classList.contains("i-amphtml-disable-mediasession")){a=c.l.win;var f=c.B,h=c.ja,k=c.ia,l=a.navigator;
"mediaSession"in l&&a.MediaMetadata&&(l.mediaSession.metadata=new a.MediaMetadata(za),Ba(b,f),l.mediaSession.metadata=new a.MediaMetadata(f),l.mediaSession.setActionHandler("play",h),l.mediaSession.setActionHandler("pause",k))}c.N.beginSession();c.w&&c.D.beginSession();T(c,"video-play")});Q(b.element,"muted",function(){return c.K=!0});Q(b.element,"unmuted",function(){return c.K=!1});Q(b.element,"ended",function(){T(c,"video-ended")});Q(b.element,"ad_start",function(){return T(c,"video-ad-start")});
Q(b.element,"ad_end",function(){return T(c,"video-ad-end")});Q(b.element,"amp:video:tick",function(a){a=a.data;var b=a.eventType;b&&Ta(c,b,a.vars)});b.signals().whenSignal("registered").then(function(){var a=c.video.element;(c.video.preimplementsAutoFullscreen()||!a.hasAttribute("rotate-to-fullscreen")?0:A(c.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",a))&&c.J.registerForAutoFullscreen(c);c.updateVisibility();
c.hasAutoplay&&Ua(c)});this.Z=u(function(){var a="firstPlay",b=wa(c.l.win,a,C({})),f=c.video.element,h=F(f,"action");h.trigger(f,a,b,1)});Va(this)}g=Qa.prototype;g.dispose=function(){this.$().stop()};function Ta(a,b,c){var d={},e=(d["__amp:eventType"]=b,d);Object.keys(c).forEach(function(a){e["custom_"+a]=c[a]});T(a,"video-hosted-custom",e)}function Va(a){a.video.signals().whenSignal("autoplay-delegated").then(function(){a.W=!1;a.A&&a.video.pause()})}g.isMuted=function(){return this.K};
g.videoLoaded=function(){this.ba=!0;this.P=this.video.element.querySelector("video, iframe");if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.B=B(this.video.getMetadata()));var a=this.l.win.document;if(!this.B.artwork||0==this.B.artwork.length){var b;(b=Aa(a))||(b=(b=a.querySelector('meta[property="og:image"]'))?b.getAttribute("content"):void 0);b||(b=(b=a.querySelector('link[rel="shortcut icon"]')||a.querySelector('link[rel="icon"]'))?b.getAttribute("href"):void 0);
b&&(this.B.artwork=[{src:b}])}!this.B.title&&(a=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.P.getAttribute("title")||this.P.getAttribute("aria-label")||a.title)&&(this.B.title=a)}this.$().start();this.updateVisibility();this.w&&Wa(this)};
function Wa(a){a.l.isVisible()&&a.U().then(function(b){var c=a.hasAutoplay&&!a.userInteracted();c&&b?a.W&&(a.w?(a.D.beginSession(),a.video.play(!0),a.ca=!0):(a.A&&a.D.endSession(),a.video.pause(),a.R=!0)):a.w?a.D.beginSession():a.A&&a.D.endSession()})}function Ua(a){a.video.isInteractive()&&a.video.hideControls();a.U().then(function(b){!b&&a.video.isInteractive()?a.video.showControls():(a.video.mute(),Xa(a))})}
function Xa(a){var b=a.video,c=a.video,d=c.element;c=c.win;if(!d.hasAttribute("noaudio")&&!d.signals().get("user-interacted")){var e=Na(c,d),f=function(a){b.mutateElement(function(){e.classList.toggle("amp-video-eq-play",a)})};b.mutateElement(function(){d.appendChild(e)});var h=[Q(d,"pause",function(){return f(!1)}),Q(d,"playing",function(){return f(!0)})];b.signals().whenSignal("user-interacted").then(function(){var b=a.video,c=b.element;a.Z();b.isInteractive()&&b.showControls();b.unmute();h.forEach(function(a){a()});
b=c.querySelector(".amp-video-eq");c=c.querySelector("i-amphtml-video-mask");b&&M(b);c&&M(c)});if(b.isInteractive()){var k=Ma(d),l=function(a){b.mutateElement(function(){var b=a;void 0===b&&(b=k.hasAttribute("hidden"));b?k.removeAttribute("hidden"):k.setAttribute("hidden","")})};b.hideControls();b.mutateElement(function(){d.appendChild(k)});[Q(k,"click",function(){return N(b)}),Q(d,"ad_start",function(){l(!1);b.showControls()}),Q(d,"ad_end",function(){l(!0);b.hideControls()}),Q(d,"unmuted",function(){return N(b)})].forEach(function(a){return h.push(a)})}}}
g.updateVisibility=function(a){var b=this.w;if(a)this.w=!0;else{var c=this.video.element.getIntersectionChangeEntry().intersectionRatio;this.w=.5<=(t(c)?c:0)}this.w!=b&&this.ba&&Wa(this)};g.getPlayingState=function(){return this.A?this.A&&this.ca&&!this.userInteracted()?"playing_auto":"playing_manual":"paused"};g.userInteracted=function(){return null!=this.video.signals().get("user-interacted")};
g.getAnalyticsDetails=function(){var a=this,b=this.video;return this.U().then(function(c){var d=b.element.getLayoutBox(),e=d.width;d=d.height;var f=a.hasAutoplay&&c,h=b.getPlayedRanges(),k=h.reduce(function(a,b){return a+b[1]-b[0]},0);return{autoplay:f,currentTime:b.getCurrentTime(),duration:b.getDuration(),height:d,id:b.element.id,muted:a.K,playedTotal:k,playedRangesJson:JSON.stringify(h),state:a.getPlayingState(),width:e}})};
function U(a,b){var c=this;this.J=b;this.l=a;this.C=this.F=null;this.h=[];this.m=[];this.G=function(){return Ya(c)};this.ha=function(a){return"playing_manual"==c.J.getPlayingState(a)};this.ga=function(a,b){a=a.element.getIntersectionChangeEntry();var d=a.intersectionRatio;a=a.boundingClientRect;var e=b.element.getIntersectionChangeEntry();b=e.boundingClientRect;d-=e.intersectionRatio;.1<Math.abs(d)?a=d:(e=L(c.l,"viewport"),d=Za(e,a),e=Za(e,b),a=d<e||d>e?d-e:a.top-b.top);return a};$a(this);ab(this)}
U.prototype.dispose=function(){this.m.forEach(function(a){return a()});this.m.length=0};U.prototype.register=function(a){a=a.video;var b=a.element;if("video"==b.querySelector("video, iframe").tagName.toLowerCase())var c=!0;else c=K(this.l.win,"platform"),c=c.isIos()||c.isSafari()?!!{"amp-dailymotion":!0,"amp-ima-video":!0}[b.tagName.toLowerCase()]:!0;c&&(this.h.push(a),Q(b,"pause",this.G),Q(b,"playing",this.G),Q(b,"ended",this.G),a.signals().whenSignal("user-interacted").then(this.G),Ya(this))};
function ab(a){function b(){a.F=null}var c=a.l.getRootNode();a.m.push(Q(c,"webkitfullscreenchange",b),Q(c,"mozfullscreenchange",b),Q(c,"fullscreenchange",b),Q(c,"MSFullscreenChange",b))}U.prototype.isInLandscape=function(){var a=this.l.win;return a.screen&&"orientation"in a.screen?D(a.screen.orientation.type,"landscape"):90==Math.abs(a.orientation)};
function $a(a){var b=a.l.win,c=b.screen;if(c&&"orientation"in c){var d=c.orientation;a.m.push(Q(d,"change",function(){return bb(a)}))}a.m.push(Q(b,"orientationchange",function(){return bb(a)}))}function bb(a){a.isInLandscape()?null!=a.C&&cb(a,a.C):a.F&&db(a,a.F)}function cb(a,b){var c=K(a.l.win,"platform");a.F=b;c.isAndroid()&&c.isChrome()?b.fullscreenEnter():eb(a,b).then(function(){return b.fullscreenEnter()})}
function db(a,b){a.F=null;eb(a,b,"center").then(function(){return b.fullscreenExit()})}function eb(a,b,c){c=void 0===c?null:c;var d=b.element,e=L(a.l,"viewport");return fb(a).then(function(){var a=d.getIntersectionChangeEntry().boundingClientRect,b=a,k=b.top;b=b.bottom;var l=e.getSize().height,y=0<=k&&b<=l;return y?Promise.resolve():e.animateScrollIntoView(d,c?c:b>l?"bottom":"top")})}function fb(a){var b=330;return K(a.l.win,"timer").promise(b)}
function Ya(a){if(a.isInLandscape())return a.C;a.C=null;var b=a.h.filter(a.ha).sort(a.ga)[0];if(b){var c=b.element.getIntersectionChangeEntry().intersectionRatio;.5<=c&&(a.C=b)}return a.C}function Za(a,b){var c=b.top+b.height/2,d=a.getSize().height/2;return Math.abs(c-d)}function V(a,b){this.L=K(a,"timer");this.H=b;this.m=null;this.M=this.aa=0}
V.prototype.start=function(){var a=this,b=this.H.video.element;this.stop();this.m=this.m||[];gb(this)?hb(this,this.M):this.m.push(xa(b,"loadedmetadata",function(){gb(a)&&hb(a,a.M)}));this.m.push(Q(b,"ended",function(){gb(a)&&ib(a,100)}))};V.prototype.stop=function(){if(this.m){for(;0<this.m.length;)this.m.pop().call();this.M++}};
function gb(a){var b=a.H.video,c=b.getDuration();if(!c||isNaN(c)||1>=c)return!1;if(250>50*c){var d=5;a.la("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",d,"seconds long.",b.element)}return!0}V.prototype.la=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];w().warn.apply(w(),["video-manager"].concat(b))};
function hb(a,b){if(b==a.M){var c=a.H,d=a.L,e=c.video,f=function(){return hb(a,b)};if("paused"==c.getPlayingState())d.delay(f,500);else{c=e.getDuration();var h=Ha(50*c),k=e.getCurrentTime()/c*100,l=5*Math.floor(k/5);t(l);ib(a,l);d.delay(f,h)}}}function ib(a,b){0>=b||a.aa==b||(a.aa=b,T(a.H,"video-percentage-played",{normalizedPercentage:b.toString()}))}function T(a,b,c){var d=a.video;a.getAnalyticsDetails().then(function(a){c&&Object.assign(a,c);d.element.dispatchCustomEvent(b,a)})};function W(a){a=AMP.BaseElement.call(this,a)||this;a.j=null;a.S=null;a.T=null;a.V=null;return a}var X=AMP.BaseElement;W.prototype=aa(X.prototype);W.prototype.constructor=W;if(da)da(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var jb=Object.getOwnPropertyDescriptor(X,Y);jb&&Object.defineProperty(W,Y,jb)}else W[Y]=X[Y];W.na=X.prototype;g=W.prototype;g.preconnectCallback=function(a){this.preconnect.url("https://fast.wistia.net",a)};
g.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};g.buildCallback=function(){var a=new ea;this.S=a.promise;this.T=a.resolve;a=I(this.element);var b=J(a),c=na(b),d=c["video-manager"];d||(d=c["video-manager"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null});d.ctor||d.obj||(d.ctor=Oa,d.context=a,d.resolve&&H(b,"video-manager"));L(this.element,"video-manager").register(this)};
g.layoutCallback=function(){var a=this,b=this.element,c=A(b.getAttribute("data-media-hashed-id"),"The data-media-hashed-id attribute is required for <amp-wistia-player> %s",b),d=ta(this,"https://fast.wistia.net/embed/iframe/"+encodeURIComponent(c));d.setAttribute("title",b.getAttribute("title")||"Wistia Video Player");d.setAttribute("scrolling","no");d.setAttribute("allowtransparency","");this.j=d;this.V=Q(this.win,"message",this.ka.bind(this));var e=this.loadPromise(this.j).then(function(){Z(a,"amp-listening");
b.dispatchCustomEvent("load")});this.T(e);return e};g.unlayoutCallback=function(){this.j&&(M(this.j),this.j=null);this.V&&this.V();var a=new ea;this.S=a.promise;this.T=a.resolve;return!0};g.viewportCallback=function(a){this.element.dispatchCustomEvent("amp:video:visibility",{visible:a})};g.pauseCallback=function(){this.j&&this.pause()};
g.ka=function(a){var b=this.j;if(b&&a.source==b.contentWindow&&"https://fast.wistia.net"==a.origin){var c=a.data;if((a=c)&&(r(a)||D(a,"{"))&&(a=c,a=r(a)?a:qa(a),void 0!==a&&(b=this.element,"_trigger"==a.method))){var d=a.args?a.args[0]:void 0;if("statechange"===d){var e=a.args?a.args[1]:void 0;sa(b,e)}else"mutechange"==d&&b.dispatchCustomEvent(a.args&&a.args[1]?"muted":"unmuted")}}};function Z(a,b){a.S.then(function(){a.j&&a.j.contentWindow&&a.j.contentWindow.postMessage(b,"*")})}
g.play=function(){Z(this,"amp-play")};g.pause=function(){Z(this,"amp-pause")};g.mute=function(){Z(this,"amp-mute")};g.unmute=function(){Z(this,"amp-unmute")};g.supportsPlatform=function(){return!0};g.isInteractive=function(){return!0};g.showControls=function(){};g.hideControls=function(){};g.fullscreenEnter=function(){if(this.j){var a=this.j,b=a.requestFullscreen||a.requestFullScreen||a.webkitRequestFullscreen||a.webkitEnterFullscreen||a.msRequestFullscreen||a.mozRequestFullScreen;b&&b.call(a)}};
g.fullscreenExit=function(){if(this.j){var a=this.j,b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen;b?b.call(a):(a=a.ownerDocument)&&(b=a.cancelFullScreen||a.exitFullscreencancelFullScreen||a.webkitExitFullscreencancelFullScreen||a.webkitCancelFullScreencancelFullScreen||a.mozCancelFullScreencancelFullScreen||a.msExitFullscreen)&&b.call(a)}};
g.isFullscreen=function(){if(this.j){var a=this.j;var b=a.webkitDisplayingFullscreen;a=void 0!==b?b:(b=a.ownerDocument)?(b.fullscreenElement||b.webkitFullscreenElement||b.mozFullScreenElement||b.webkitCurrentFullScreenElement)==a:!1}else a=!1;return a};g.getMetadata=function(){};g.preimplementsMediaSessionAPI=function(){return!1};g.preimplementsAutoFullscreen=function(){return!0};g.getCurrentTime=function(){return 0};g.getDuration=function(){return 1};g.getPlayedRanges=function(){return[]};
g.seekTo=function(){this.user().error("amp-wistia-player","`seekTo` not supported.")};(function(a){a.registerElement("amp-wistia-player",W)})(self.AMP);
})});

//# sourceMappingURL=amp-wistia-player-0.1.js.map
