(self.AMP=self.AMP||[]).push({n:"amp-nexxtv-player",v:"0",f:(function(AMP,_){
var h,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},m;if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var ba={a:!0},ca={};try{ca.__proto__=ba;n=ca.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var da=m;function ea(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function fa(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ha=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function p(a){var b=Object.create(null);if(!a)return b;for(var c;c=ha.exec(a);){var d=fa(c[1],c[1]),e=c[2]?fa(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var q="";
function ia(a){var b=a||self;if(b.__AMP_MODE)var c=b.__AMP_MODE;else{c=b;var d=self.AMP_CONFIG||{},e=!!d.test||!1,f=p(c.location.originalHash||c.location.hash);d=d.spt;var g=p(c.location.search);q||(q=c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"010");c={localDev:!1,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(f.development)||c.AMP_DEV_MODE),examiner:"2"==f.development,geoOverride:f["amp-geo"],userLocationOverride:f["amp-user-location"],minified:!0,lite:void 0!=g.amp_lite,test:e,
log:f.log,version:"0",rtvVersion:q,singlePassType:d};c=b.__AMP_MODE=c}return c};var ja=Object.prototype.toString;function t(a){return"number"===typeof a&&isFinite(a)};function u(a){var b=!1,c=null,d=a;return function(a){for(var e=[],g=0;g<arguments.length;++g)e[g-0]=arguments[g];b||(c=d.apply(self,e),b=!0,d=null);return c}};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var v=self.__AMP_LOG;function w(){if(!v.user)throw Error("failed to call initLogConstructor");return v.user}function x(){if(v.dev)return v.dev;throw Error("failed to call initLogConstructor");}function y(a,b,c){return w().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};var ka=Object.prototype.hasOwnProperty;function z(a){var b=Object.create(null);a&&Object.assign(b,a);return b}function B(a){return a||{}};function C(){var a=100;this.oa=a;this.O=this.W=0;this.H=Object.create(null)}C.prototype.has=function(a){return!!this.H[a]};C.prototype.get=function(a){var b=this.H[a];if(b)return b.access=++this.O,b.payload};C.prototype.put=function(a,b){this.has(a)||this.W++;this.H[a]={payload:b,access:this.O};if(!(this.W<=this.oa)){x().warn("lru-cache","Trimming LRU cache");a=this.H;var c=this.O+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.W--)}};function la(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};B({c:!0,v:!0,a:!0,ad:!0,action:!0});var D,ma;function na(a,b){if(a.__AMP__EXPERIMENT_TOGGLES)var c=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);c=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var d in a.AMP_CONFIG){var e=a.AMP_CONFIG[d];"number"===typeof e&&0<=e&&1>=e&&(c[d]=Math.random()<e)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(d=a.AMP_CONFIG["allow-doc-opt-in"],e=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){e=
e.getAttribute("content").split(",");for(var f=0;f<e.length;f++)-1!=d.indexOf(e[f])&&(c[e[f]]=!0)}Object.assign(c,oa(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length)for(d=a.AMP_CONFIG["allow-url-opt-in"],a=p(a.location.originalHash||a.location.hash),e=0;e<d.length;e++)f=a["e-"+d[e]],"1"==f&&(c[d[e]]=!0),"0"==f&&(c[d[e]]=!1)}var g=c;return!!g[b]}
function oa(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){x().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};var pa={},E=(pa["ampdoc-fie"]={isTrafficEligible:function(){return!0},branches:[["21065001"],["21065002"]]},pa);function F(a,b){var c=a.ownerDocument.defaultView,d=c.__AMP_TOP||(c.__AMP_TOP=c),e=c!=d;var f=d;if(na(f,"ampdoc-fie")){f.__AMP_EXPERIMENT_BRANCHES=f.__AMP_EXPERIMENT_BRANCHES||{};for(var g in E)if(ka.call(E,g)&&!ka.call(f.__AMP_EXPERIMENT_BRANCHES,g))if(E[g].isTrafficEligible&&E[g].isTrafficEligible(f)){if(!f.__AMP_EXPERIMENT_BRANCHES[g]&&na(f,g)){var k=E[g].branches;f.__AMP_EXPERIMENT_BRANCHES[g]=k[Math.floor(Math.random()*k.length)]||null}}else f.__AMP_EXPERIMENT_BRANCHES[g]=null;f="21065002"===
(f.__AMP_EXPERIMENT_BRANCHES?f.__AMP_EXPERIMENT_BRANCHES["ampdoc-fie"]:null)}else f=!1;var l=f;e&&!l?b=G(c,b)?H(c,b):null:(a=I(a),a=J(a),b=G(a,b)?H(a,b):null);return b}function K(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return H(a,b)}function L(a,b){var c=I(a);c=J(c);return H(c,b)}function I(a){return a.nodeType?K((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function J(a){a=I(a);return a.isSingleDoc()?a.win:a}
function H(a,b){G(a,b);var c=qa(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function qa(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function G(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function M(a){a.parentElement&&a.parentElement.removeChild(a)};function N(a){a.signals().signal("user-interacted")};var O;function ra(a){a=a.ownerDocument||a;O&&O.ownerDocument===a||(O=a.createElement("div"));return sa}function sa(a){var b=O;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a};function ta(a){var b;try{return JSON.parse(a)}catch(c){return b&&b(c),null}};var ua=["<iframe frameborder=0 allowfullscreen></iframe>"];function va(a,b){var c={play:"playing",pause:"pause",mute:"muted",unmute:"unmuted"};if(null!=c[b]){var d=c[b];(Array.isArray(d)?d:[d]).forEach(function(b){a.dispatchCustomEvent(b)})}}function wa(a,b){var c,d=a.element,e=ra(d)(ua);c&&e.setAttribute("sandbox",c.join(" "));a.propagateAttributes(["referrerpolicy"],e);e.src=F(d,"url").assertHttpsUrl(b,d);a.applyFillContent(e);d.appendChild(e);return e};var P;function xa(a,b,c,d){var e=a,f=c;var g=function(a){try{return f(a)}catch(A){throw self.__AMP_REPORT_ERROR(A),A;}};var k=ya(),l=!1;d&&(l=d.capture);e.addEventListener(b,g,k?d:l);return function(){e&&e.removeEventListener(b,g,k?d:l);g=e=f=null}}function ya(){if(void 0!==P)return P;P=!1;try{var a={get capture(){P=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return P};function za(a,b,c){var d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a}function Q(a,b,c){return xa(a,b,c,void 0)}function Aa(a,b,c,d){var e=c,f=xa(a,b,function(a){try{e(a)}finally{e=null,f()}},d);return f}function Ba(a){var b,c,d=new Promise(function(b){c=Aa(a,"load",b,void 0)});d.then(c,c);b&&b(c);return d};var Ca={title:"",artist:"",album:"",artwork:[{src:""}]};function Da(a){var b=a.querySelector('script[type="application/ld+json"]');if(b){var c=ta(b.textContent);if(c&&c.image){if("string"===typeof c.image)return c.image;if(c.image["@list"]&&"string"===typeof c.image["@list"][0])return c.image["@list"][0];if("string"===typeof c.image.url)return c.image.url;if("string"===typeof c.image[0])return c.image[0]}}}
function Ea(a,b){var c=F(a,"url");if(b&&b.artwork){var d=b.artwork;Array.isArray(d);d.forEach(function(a){a&&(a="[object Object]"===ja.call(a)?a.src:a,y(c.isProtocolValid(a)))})}};function Fa(){this.o=null}h=Fa.prototype;h.add=function(a){var b=this;this.o||(this.o=[]);this.o.push(a);return function(){b.remove(a)}};h.remove=function(a){this.o&&(a=this.o.indexOf(a),-1<a&&this.o.splice(a,1))};h.removeAll=function(){this.o&&(this.o.length=0)};h.fire=function(a){if(this.o)for(var b=this.o,c=0;c<b.length;c++)(0,b[c])(a)};h.getHandlerCount=function(){return this.o?this.o.length:0};function R(){this.J=!1;this.aa=new Fa}R.prototype.onSessionEnd=function(a){this.aa.add(a)};R.prototype.beginSession=function(){this.J=!0};R.prototype.endSession=function(){this.J&&this.aa.fire();this.J=!1};R.prototype.isSessionActive=function(){return this.J};var S,Ga="Webkit webkit Moz moz ms O o".split(" ");function Ha(a){var b={position:"fixed",top:"0",width:"0",height:"0",opacity:"0"},c;for(c in b){var d=a,e=b[c];var f=d.style;var g=c;if(la(g,"--"))f=g;else{S||(S=z());var k=S[g];if(!k){k=g;if(void 0===f[g]){var l=g;l=l.charAt(0).toUpperCase()+l.slice(1);b:{for(var r=0;r<Ga.length;r++){var A=Ga[r]+l;if(void 0!==f[A]){l=A;break b}}l=""}void 0!==f[l]&&(k=l)}S[g]=k}f=k}f&&(d.style[f]=e)}};function Ia(a,b){if(b)return Promise.resolve(!1);var c=a.document.createElement("video");c.setAttribute("muted","");c.setAttribute("playsinline","");c.setAttribute("webkit-playsinline","");c.setAttribute("height","0");c.setAttribute("width","0");c.muted=!0;c.playsinline=!0;c.webkitPlaysinline=!0;Ha(c);(new Promise(function(a){return a(c.play())})).catch(function(){});return Promise.resolve(!c.paused)}var Ja=null;function Ka(a){var b=250,c=4E3;return Math.min(Math.max(a,b),c)};function La(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null};var Ma="i-amphtml-video-mask{display:block;z-index:1}.amp-video-eq{display:none}.i-amphtml-video-component:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq .amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq .amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq[unpausable] .amp-video-eq-col div{animation-name:none}.amp-video-eq[unpausable].amp-video-eq-play .amp-video-eq-col div{animation-name:amp-video-eq-animation}.amp-video-eq.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/";var Na=["<i-amphtml-video-mask class=i-amphtml-fill-content role=button></i-amphtml-video-mask>"],Oa=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function Pa(a){var b=ra(a);return b(Na)}
function Qa(a,b){var c=ra(b)(Oa),d=c.firstElementChild;for(b=0;4>b;b++){for(var e=d.cloneNode(!0),f=e.children,g=0;g<f.length;g++){var k=f[g];k.classList.add("amp-video-eq-"+(b+1)+"-"+(g+1))}c.appendChild(e)}M(d);K(a,"platform").isIos()&&c.setAttribute("unpausable","");return c};function Ra(a){var b=this;this.ampdoc=a;this.installAutoplayStyles=u(function(){var a=Ma,d=b.ampdoc.getHeadNode();var e=(e=d.__AMP_CSS_TR)?e(a):a;(a=d.__AMP_CSS_SM)||(a=d.__AMP_CSS_SM=z());var f=La(d,a,"amp-extension=amp-video-autoplay");f?f.textContent!==e&&(f.textContent=e):(f=(d.ownerDocument||d).createElement("style"),f.textContent=e,f.setAttribute("amp-extension","amp-video-autoplay"),e=La(d,a,"amp-runtime"),d.insertBefore(f,e?e.nextSibling:d.firstChild),a["amp-extension=amp-video-autoplay"]=
f)});this.ia=L(this.ampdoc,"viewport");this.h=null;this.ha=!1;this.M=K(a.win,"timer");this.ja=F(a.getHeadNode(),"action");this.$=function(){for(var a=0;a<b.h.length;a++){var d=b.h[a];if("paused"!==d.getPlayingState()){T(d,"video-seconds-played");var e=d.video.getCurrentTime(),f=d.video.getDuration();t(e)&&t(f)&&0<f&&(e=za(b.ampdoc.win,"video-manager.timeUpdate",B({time:e,percent:e/f})),b.ja.trigger(d.video.element,"timeUpdate",e,1))}}b.M.delay(b.$,1E3)};this.R=u(function(){return new U(b.ampdoc,b)});
this.M.delay(this.$,1E3)}h=Ra.prototype;h.dispose=function(){this.R().dispose();if(this.h)for(var a=0;a<this.h.length;a++){var b=this.h[a];b.dispose()}};h.register=function(a){Sa(a);if(a.supportsPlatform()){this.h=this.h||[];var b=new Ta(this,a);Ua(this,b);this.h.push(b);b=b.video.element;b.dispatchCustomEvent("registered");b.classList.add("i-amphtml-video-component");var c=a.signals();c.signal("registered");b.classList.add("i-amphtml-video-interface")}};
function Sa(a){function b(b,e){a.registerAction(b,function(){N(a);e()},c)}var c=1;b("play",function(){return a.play(!1)});b("pause",function(){return a.pause()});b("mute",function(){return a.mute()});b("unmute",function(){return a.unmute()});b("fullscreen",function(){return a.fullscreenEnter()})}
function Ua(a,b){var c=b.video.element;Q(c,"amp:video:visibility",function(a){var c=a.data;c&&1==c.visible?b.updateVisibility(!0):b.updateVisibility()});Q(c,"reloaded",function(){b.videoLoaded()});if(!a.ha){var d=function(){for(var b=0;b<a.h.length;b++)a.h[b].updateVisibility()};a.ia.onScroll(d);a.ia.onChanged(d);a.ha=!0}}function Va(a,b){for(var c=0;c<a.h.length;c++)if(a.h[c].video===b)return a.h[c];x().error("video-manager","video is not registered to this video manager");return null}
h.getAnalyticsDetails=function(a){var b;a:{for(b=0;b<this.h.length;b++){var c=this.h[b];if(c.video.element===a){b=c;break a}}x().error("video-manager","video is not registered to this video manager");b=null}return b?b.getAnalyticsDetails():Promise.resolve()};h.getPlayingState=function(a){return Va(this,a).getPlayingState()};h.isMuted=function(a){return Va(this,a).isMuted()};h.userInteracted=function(a){return Va(this,a).userInteracted()};h.registerForAutoFullscreen=function(a){this.R().register(a)};
h.qa=function(){return this.R()};
function Ta(a,b){var c=this;this.K=a;this.l=a.ampdoc;this.video=b;this.Z=!0;this.w=this.A=this.fa=!1;this.P=new R;this.P.onSessionEnd(function(){return T(c,"video-session")});this.D=new R;this.D.onSessionEnd(function(){return T(c,"video-session-visible")});this.X=function(){var a=c.l.win,b=ia(a).lite;Ja||(Ja=u(Ia));return Ja(a,b)};this.ca=u(function(){return new V(c.l.win,c)});this.T=this.ga=!1;this.S=null;this.L=!1;(this.hasAutoplay=b.element.hasAttribute("autoplay"))&&this.K.installAutoplayStyles();
this.B=Ca;this.na=function(){c.video.play(!1)};this.ma=function(){c.video.pause()};Ba(b.element).then(function(){return c.videoLoaded()});Q(b.element,"pause",function(){T(c,"video-pause");c.A=!1;c.T?c.T=!1:c.P.endSession()});Q(b.element,"playing",function(){c.A=!0;"playing_manual"==c.getPlayingState()&&c.ba();var a=c.video,b=a.element;if(!a.preimplementsMediaSessionAPI()&&!b.classList.contains("i-amphtml-disable-mediasession")){a=c.l.win;var f=c.B,g=c.na,k=c.ma,l=a.navigator;"mediaSession"in l&&a.MediaMetadata&&
(l.mediaSession.metadata=new a.MediaMetadata(Ca),Ea(b,f),l.mediaSession.metadata=new a.MediaMetadata(f),l.mediaSession.setActionHandler("play",g),l.mediaSession.setActionHandler("pause",k))}c.P.beginSession();c.w&&c.D.beginSession();T(c,"video-play")});Q(b.element,"muted",function(){return c.L=!0});Q(b.element,"unmuted",function(){return c.L=!1});Q(b.element,"ended",function(){T(c,"video-ended")});Q(b.element,"ad_start",function(){return T(c,"video-ad-start")});Q(b.element,"ad_end",function(){return T(c,
"video-ad-end")});Q(b.element,"amp:video:tick",function(a){a=a.data;var b=a.eventType;b&&Wa(c,b,a.vars)});b.signals().whenSignal("registered").then(function(){var a=c.video.element;(c.video.preimplementsAutoFullscreen()||!a.hasAttribute("rotate-to-fullscreen")?0:y(c.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",a))&&c.K.registerForAutoFullscreen(c);c.updateVisibility();c.hasAutoplay&&Xa(c)});this.ba=u(function(){var a=
"firstPlay",b=za(c.l.win,a,B({})),f=c.video.element,g=F(f,"action");g.trigger(f,a,b,1)});Ya(this)}h=Ta.prototype;h.dispose=function(){this.ca().stop()};function Wa(a,b,c){var d={},e=(d["__amp:eventType"]=b,d);Object.keys(c).forEach(function(a){e["custom_"+a]=c[a]});T(a,"video-hosted-custom",e)}function Ya(a){a.video.signals().whenSignal("autoplay-delegated").then(function(){a.Z=!1;a.A&&a.video.pause()})}h.isMuted=function(){return this.L};
h.videoLoaded=function(){this.fa=!0;this.S=this.video.element.querySelector("video, iframe");if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.B=z(this.video.getMetadata()));var a=this.l.win.document;if(!this.B.artwork||0==this.B.artwork.length){var b;(b=Da(a))||(b=(b=a.querySelector('meta[property="og:image"]'))?b.getAttribute("content"):void 0);b||(b=(b=a.querySelector('link[rel="shortcut icon"]')||a.querySelector('link[rel="icon"]'))?b.getAttribute("href"):void 0);
b&&(this.B.artwork=[{src:b}])}!this.B.title&&(a=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.S.getAttribute("title")||this.S.getAttribute("aria-label")||a.title)&&(this.B.title=a)}this.ca().start();this.updateVisibility();this.w&&Za(this)};
function Za(a){a.l.isVisible()&&a.X().then(function(b){var c=a.hasAutoplay&&!a.userInteracted();c&&b?a.Z&&(a.w?(a.D.beginSession(),a.video.play(!0),a.ga=!0):(a.A&&a.D.endSession(),a.video.pause(),a.T=!0)):a.w?a.D.beginSession():a.A&&a.D.endSession()})}function Xa(a){a.video.isInteractive()&&a.video.hideControls();a.X().then(function(b){!b&&a.video.isInteractive()?a.video.showControls():(a.video.mute(),$a(a))})}
function $a(a){var b=a.video,c=a.video,d=c.element;c=c.win;if(!d.hasAttribute("noaudio")&&!d.signals().get("user-interacted")){var e=Qa(c,d),f=function(a){b.mutateElement(function(){e.classList.toggle("amp-video-eq-play",a)})};b.mutateElement(function(){d.appendChild(e)});var g=[Q(d,"pause",function(){return f(!1)}),Q(d,"playing",function(){return f(!0)})];b.signals().whenSignal("user-interacted").then(function(){var b=a.video,c=b.element;a.ba();b.isInteractive()&&b.showControls();b.unmute();g.forEach(function(a){a()});
b=c.querySelector(".amp-video-eq");c=c.querySelector("i-amphtml-video-mask");b&&M(b);c&&M(c)});if(b.isInteractive()){var k=Pa(d),l=function(a){b.mutateElement(function(){var b=a;void 0===b&&(b=k.hasAttribute("hidden"));b?k.removeAttribute("hidden"):k.setAttribute("hidden","")})};b.hideControls();b.mutateElement(function(){d.appendChild(k)});[Q(k,"click",function(){return N(b)}),Q(d,"ad_start",function(){l(!1);b.showControls()}),Q(d,"ad_end",function(){l(!0);b.hideControls()}),Q(d,"unmuted",function(){return N(b)})].forEach(function(a){return g.push(a)})}}}
h.updateVisibility=function(a){var b=this.w;if(a)this.w=!0;else{var c=this.video.element.getIntersectionChangeEntry().intersectionRatio;this.w=.5<=(t(c)?c:0)}this.w!=b&&this.fa&&Za(this)};h.getPlayingState=function(){return this.A?this.A&&this.ga&&!this.userInteracted()?"playing_auto":"playing_manual":"paused"};h.userInteracted=function(){return null!=this.video.signals().get("user-interacted")};
h.getAnalyticsDetails=function(){var a=this,b=this.video;return this.X().then(function(c){var d=b.element.getLayoutBox(),e=d.width;d=d.height;var f=a.hasAutoplay&&c,g=b.getPlayedRanges(),k=g.reduce(function(a,b){return a+b[1]-b[0]},0);return{autoplay:f,currentTime:b.getCurrentTime(),duration:b.getDuration(),height:d,id:b.element.id,muted:a.L,playedTotal:k,playedRangesJson:JSON.stringify(g),state:a.getPlayingState(),width:e}})};
function U(a,b){var c=this;this.K=b;this.l=a;this.C=this.F=null;this.h=[];this.m=[];this.G=function(){return ab(c)};this.la=function(a){return"playing_manual"==c.K.getPlayingState(a)};this.ka=function(a,b){a=a.element.getIntersectionChangeEntry();var d=a.intersectionRatio;a=a.boundingClientRect;var e=b.element.getIntersectionChangeEntry();b=e.boundingClientRect;d-=e.intersectionRatio;.1<Math.abs(d)?a=d:(e=L(c.l,"viewport"),d=bb(e,a),e=bb(e,b),a=d<e||d>e?d-e:a.top-b.top);return a};cb(this);db(this)}
U.prototype.dispose=function(){this.m.forEach(function(a){return a()});this.m.length=0};U.prototype.register=function(a){a=a.video;var b=a.element;if("video"==b.querySelector("video, iframe").tagName.toLowerCase())var c=!0;else c=K(this.l.win,"platform"),c=c.isIos()||c.isSafari()?!!{"amp-dailymotion":!0,"amp-ima-video":!0}[b.tagName.toLowerCase()]:!0;c&&(this.h.push(a),Q(b,"pause",this.G),Q(b,"playing",this.G),Q(b,"ended",this.G),a.signals().whenSignal("user-interacted").then(this.G),ab(this))};
function db(a){function b(){a.F=null}var c=a.l.getRootNode();a.m.push(Q(c,"webkitfullscreenchange",b),Q(c,"mozfullscreenchange",b),Q(c,"fullscreenchange",b),Q(c,"MSFullscreenChange",b))}U.prototype.isInLandscape=function(){var a=this.l.win;return a.screen&&"orientation"in a.screen?la(a.screen.orientation.type,"landscape"):90==Math.abs(a.orientation)};
function cb(a){var b=a.l.win,c=b.screen;if(c&&"orientation"in c){var d=c.orientation;a.m.push(Q(d,"change",function(){return eb(a)}))}a.m.push(Q(b,"orientationchange",function(){return eb(a)}))}function eb(a){a.isInLandscape()?null!=a.C&&fb(a,a.C):a.F&&gb(a,a.F)}function fb(a,b){var c=K(a.l.win,"platform");a.F=b;c.isAndroid()&&c.isChrome()?b.fullscreenEnter():hb(a,b).then(function(){return b.fullscreenEnter()})}
function gb(a,b){a.F=null;hb(a,b,"center").then(function(){return b.fullscreenExit()})}function hb(a,b,c){c=void 0===c?null:c;var d=b.element,e=L(a.l,"viewport");return ib(a).then(function(){var a=d.getIntersectionChangeEntry().boundingClientRect,b=a,k=b.top;b=b.bottom;var l=e.getSize().height,r=0<=k&&b<=l;return r?Promise.resolve():e.animateScrollIntoView(d,c?c:b>l?"bottom":"top")})}function ib(a){var b=330;return K(a.l.win,"timer").promise(b)}
function ab(a){if(a.isInLandscape())return a.C;a.C=null;var b=a.h.filter(a.la).sort(a.ka)[0];if(b){var c=b.element.getIntersectionChangeEntry().intersectionRatio;.5<=c&&(a.C=b)}return a.C}function bb(a,b){var c=b.top+b.height/2,d=a.getSize().height/2;return Math.abs(c-d)}function V(a,b){this.M=K(a,"timer");this.I=b;this.m=null;this.N=this.ea=0}
V.prototype.start=function(){var a=this,b=this.I.video.element;this.stop();this.m=this.m||[];jb(this)?kb(this,this.N):this.m.push(Aa(b,"loadedmetadata",function(){jb(a)&&kb(a,a.N)}));this.m.push(Q(b,"ended",function(){jb(a)&&lb(a,100)}))};V.prototype.stop=function(){if(this.m){for(;0<this.m.length;)this.m.pop().call();this.N++}};
function jb(a){var b=a.I.video,c=b.getDuration();if(!c||isNaN(c)||1>=c)return!1;if(250>50*c){var d=5;a.pa("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",d,"seconds long.",b.element)}return!0}V.prototype.pa=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];w().warn.apply(w(),["video-manager"].concat(b))};
function kb(a,b){if(b==a.N){var c=a.I,d=a.M,e=c.video,f=function(){return kb(a,b)};if("paused"==c.getPlayingState())d.delay(f,500);else{c=e.getDuration();var g=Ka(50*c),k=e.getCurrentTime()/c*100,l=5*Math.floor(k/5);t(l);lb(a,l);d.delay(f,g)}}}function lb(a,b){0>=b||a.ea==b||(a.ea=b,T(a.I,"video-percentage-played",{normalizedPercentage:b.toString()}))}function T(a,b,c){var d=a.video;a.getAnalyticsDetails().then(function(a){c&&Object.assign(a,c);d.element.dispatchCustomEvent(b,a)})};function W(a){var b=AMP.BaseElement.call(this,a)||this;b.j=null;b.da=u(function(){var a=b.element,d=y(a.getAttribute("data-mediaid"),"The data-mediaid attribute is required for <amp-nexxtv-player> %s",a),e=y(a.getAttribute("data-client"),"The data-client attribute is required for <amp-nexxtv-player> %s",a),f=a.getAttribute("data-seek-to")||"0",g=a.getAttribute("data-mode")||"static",k=a.getAttribute("data-streamtype")||"video",l=a.getAttribute("data-origin")||"https://embed.nexx.cloud/",r=a.getAttribute("data-disable-ads");
a=a.getAttribute("data-streaming-filter");e=l+(encodeURIComponent(e)+"/");e+=encodeURIComponent(k)+"/";e+=encodeURIComponent(d);e+="?dataMode="+encodeURIComponent(g)+"&platform=amp";0<f&&(e+="&delay="+encodeURIComponent(f));"1"===r&&(e+="&disableAds=1");null!==a&&0<a.length&&(e+="&streamingFilter="+encodeURIComponent(a));d=e;y(/^https?:/i.test(d),'URL must start with "http://" or "https://". Invalid value: %s',d);D||(D=self.document.createElement("a"),ma=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=
new C));f=ma;g=D;if(f&&f.has(d))d=f.get(d);else{g.href=d;g.protocol||(g.href=g.href);k={href:g.href,protocol:g.protocol,host:g.host,hostname:g.hostname,port:"0"==g.port?"":g.port,pathname:g.pathname,search:g.search,hash:g.hash,origin:null};"/"!==k.pathname[0]&&(k.pathname="/"+k.pathname);if("http:"==k.protocol&&80==k.port||"https:"==k.protocol&&443==k.port)k.port="",k.host=k.hostname;k.origin=g.origin&&"null"!=g.origin?g.origin:"data:"!=k.protocol&&k.host?k.protocol+"//"+k.host:k.href;g=ia().test&&
Object.freeze?Object.freeze(k):k;f&&f.put(d,g);d=g}return d.href});b.Y=null;b.U=null;b.V=null;return b}var X=AMP.BaseElement;W.prototype=aa(X.prototype);W.prototype.constructor=W;if(da)da(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var mb=Object.getOwnPropertyDescriptor(X,Y);mb&&Object.defineProperty(W,Y,mb)}else W[Y]=X[Y];W.ra=X.prototype;h=W.prototype;h.preconnectCallback=function(a){this.preconnect.url(this.da(),a)};
h.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};h.buildCallback=function(){var a=new ea;this.U=a.promise;this.V=a.resolve;a=I(this.element);var b=J(a),c=qa(b),d=c["video-manager"];d||(d=c["video-manager"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null});d.ctor||d.obj||(d.ctor=Ra,d.context=a,d.resolve&&H(b,"video-manager"));L(this.element,"video-manager").register(this)};
h.viewportCallback=function(a){this.element.dispatchCustomEvent("amp:video:visibility",{visible:a})};h.layoutCallback=function(){var a=this;this.j=wa(this,this.da());this.Y=Q(this.win,"message",function(b){var c=b.data;c&&b.source===a.j.contentWindow&&(b="[object Object]"===ja.call(c)?c:ta(c))&&va(a.element,b.event)});this.element.appendChild(this.j);var b=this.loadPromise(this.j).then(function(){a.element.dispatchCustomEvent("load")});this.V(b);return b};h.pauseCallback=function(){this.j&&this.pause()};
h.unlayoutOnPause=function(){return!0};h.unlayoutCallback=function(){this.j&&(M(this.j),this.j=null);this.Y&&this.Y();var a=new ea;this.U=a.promise;this.V=a.resolve;return!0};function Z(a,b){a.U.then(function(){a.j&&a.j.contentWindow&&a.j.contentWindow.postMessage(B({cmd:b}),"*")})}h.play=function(){Z(this,"play")};h.pause=function(){Z(this,"pause")};h.mute=function(){Z(this,"mute")};h.unmute=function(){Z(this,"unmute")};h.supportsPlatform=function(){return!0};h.isInteractive=function(){return!0};
h.showControls=function(){};h.hideControls=function(){};h.fullscreenEnter=function(){if(this.j){var a=this.j,b=a.requestFullscreen||a.requestFullScreen||a.webkitRequestFullscreen||a.webkitEnterFullscreen||a.msRequestFullscreen||a.mozRequestFullScreen;b&&b.call(a)}};
h.fullscreenExit=function(){if(this.j){var a=this.j,b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen;b?b.call(a):(a=a.ownerDocument)&&(b=a.cancelFullScreen||a.exitFullscreencancelFullScreen||a.webkitExitFullscreencancelFullScreen||a.webkitCancelFullScreencancelFullScreen||a.mozCancelFullScreencancelFullScreen||a.msExitFullscreen)&&b.call(a)}};
h.isFullscreen=function(){if(this.j){var a=this.j;var b=a.webkitDisplayingFullscreen;a=void 0!==b?b:(b=a.ownerDocument)?(b.fullscreenElement||b.webkitFullscreenElement||b.mozFullScreenElement||b.webkitCurrentFullScreenElement)==a:!1}else a=!1;return a};h.getMetadata=function(){};h.preimplementsMediaSessionAPI=function(){return!1};h.preimplementsAutoFullscreen=function(){return!1};h.getCurrentTime=function(){return 0};h.getDuration=function(){return 1};h.getPlayedRanges=function(){return[]};
h.seekTo=function(){this.user().error("amp-nexxtv-player","`seekTo` not supported.")};(function(a){a.registerElement("amp-nexxtv-player",W)})(self.AMP);
})});

//# sourceMappingURL=amp-nexxtv-player-0.1.js.map
