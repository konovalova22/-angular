function wt(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}
/*!
 * Splide.js
 * Version  : 3.1.7
 * License  : MIT
 * Copyright: 2021 Naotoshi Fujita
 */var n,t;n=this,t=function(){"use strict";var n="splide",t="data-"+n;function e(n){n.length=0}function i(n){return!s(n)&&"object"==typeof n}function o(n){return Array.isArray(n)}function r(n){return"string"==typeof n}function u(n){return void 0===n}function s(n){return null===n}function c(n){return n instanceof HTMLElement}function a(n){return o(n)?n:[n]}function f(n,t){a(n).forEach(t)}function l(n,t){return-1<n.indexOf(t)}function d(n,t){return n.push.apply(n,a(t)),n}var p=Array.prototype;function h(n,t,e){return p.slice.call(n,t,e)}function g(n,t,e){n&&f(t,function(t){t&&n.classList[e?"add":"remove"](t)})}function v(n,t){g(n,r(t)?t.split(" "):t,!0)}function m(n,t){f(t,n.appendChild.bind(n))}function y(n,t){f(n,function(n){var e=t.parentNode;e&&e.insertBefore(n,t)})}function b(n,t){return(n.msMatchesSelector||n.matches).call(n,t)}function w(n,t){return n?h(n.children).filter(function(n){return b(n,t)}):[]}function x(n,t){return t?w(n,t)[0]:n.firstElementChild}function E(n,t){if(n)for(var e=Object.keys(n),i=0;i<e.length;i++){var o=e[i];if("__proto__"!==o&&!1===t(n[o],o))break}return n}function S(n){return h(arguments,1).forEach(function(t){E(t,function(e,i){n[i]=t[i]})}),n}function k(n,t){return E(t,function(t,e){o(t)?n[e]=t.slice():i(t)?n[e]=k(i(n[e])?n[e]:{},t):n[e]=t}),n}function _(n,t){n&&f(t,function(t){n.removeAttribute(t)})}function P(n,t,e){i(t)?E(t,function(t,e){P(n,e,t)}):s(e)?_(n,t):n.setAttribute(t,String(e))}function L(n,t,e){return n=document.createElement(n),t&&(r(t)?v:P)(n,t),e&&m(e,n),n}function A(n,t,e){if(u(e))return getComputedStyle(n)[t];s(e)||(n=n.style)[t]!==(e=""+e)&&(n[t]=e)}function z(n,t){A(n,"display",t)}function C(n,t){return n.getAttribute(t)}function M(n,t){return n&&n.classList.contains(t)}function D(n){return n.getBoundingClientRect()}function I(n){f(n,function(n){n&&n.parentNode&&n.parentNode.removeChild(n)})}function T(n){return x((new DOMParser).parseFromString(n,"text/html").body)}function N(n,t){n.preventDefault(),t&&(n.stopPropagation(),n.stopImmediatePropagation())}function O(n,t){return n&&n.querySelector(t)}function R(n,t){return h(n.querySelectorAll(t))}function F(n,t){g(n,t,!1)}function j(n){return r(n)?n:n?n+"px":""}function B(t,e){if(void 0===e&&(e=""),!t)throw new Error("["+n+"] "+e)}function W(n){setTimeout(n)}function X(){}function H(n){return requestAnimationFrame(n)}var G=Math.min,Y=Math.max,q=Math.floor,U=Math.ceil,J=Math.abs;function K(n,t,e,i){var o=G(t,e);e=Y(t,e);return i?o<n&&n<e:o<=n&&n<=e}function Q(n,t,e){var i=G(t,e);e=Y(t,e);return G(Y(i,n),e)}function V(n){return(0<n)-(n<0)}function Z(n,t){return f(t,function(t){n=n.replace("%s",""+t)}),n}function $(n){return n<10?"0"+n:""+n}var nn={};var tn="mounted",en="move",on="moved",rn="click",un="slide:keydown",sn="refresh",cn="updated",an="resize",fn="resized",ln="repositioned",dn="scrolled",pn="destroy",hn="lazyload:loaded";function gn(n){var t=n.event,e={},i=[];function o(n,t,e){r(n,t,function(n,t){i=i.filter(function(i){return!!(i[0]!==n||i[1]!==t||e&&i[2]!==e)||(n.removeEventListener(t,i[2],i[3]),!1)})})}function r(n,t,e){f(n,function(n){n&&t.split(" ").forEach(e.bind(null,n))})}function u(){i=i.filter(function(n){return o(n[0],n[1])}),t.offBy(e)}return t.on(pn,u,e),{on:function(n,i,o){t.on(n,i,e,o)},off:function(n){t.off(n,e)},emit:t.emit,bind:function(n,t,e,o){r(n,t,function(n,t){i.push([n,t,e,o]),n.addEventListener(t,e,o)})},unbind:o,destroy:u}}function vn(n,t,e,i){var o,r,u=Date.now,s=0,c=!0,a=0;function f(){if(!c){var r=u()-o;if(n<=r?(s=1,o=u()):s=r/n,e&&e(s),1===s&&(t(),i&&++a>=i))return l();H(f)}}function l(){c=!0}function d(){cancelAnimationFrame(r),c=!(r=s=0)}return{start:function(t){t||d(),o=u()-(t?s*n:0),c=!1,H(f)},rewind:function(){o=u(),s=0,e&&e(s)},pause:l,cancel:d,isPaused:function(){return c}}}function mn(n,t){var e;return function(){var i=arguments,o=this;e||(e=vn(t||0,function(){n.apply(o,i),e=null},null,1)).start()}}var yn={marginRight:["marginBottom","marginLeft"],autoWidth:["autoHeight"],fixedWidth:["fixedHeight"],paddingLeft:["paddingTop","paddingRight"],paddingRight:["paddingBottom","paddingLeft"],width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:["ArrowUp","ArrowRight"],ArrowRight:["ArrowDown","ArrowLeft"]},bn=n,wn=n+"__slide",xn=wn+"--clone",En=n+"__arrows",Sn=n+"__arrow",kn=Sn+"--prev",_n=Sn+"--next",Pn=n+"__pagination",Ln=n+"__progress",An="is-active",zn="is-prev",Cn="is-next",Mn="is-visible",Dn="is-loading",In=[An,Mn,zn,Cn,Dn],Tn="role",Nn="aria-controls",On="aria-current",Rn="aria-label",Fn="aria-hidden",jn="tabindex",Bn="aria-orientation",Wn=[Tn,Nn,On,Rn,Fn,Bn,jn,"disabled"],Xn="slide",Hn="loop",Gn="fade";var Yn="touchmove mousemove",qn="touchend touchcancel mouseup",Un=["Left","Right","Up","Down"],Jn=t+"-lazy",Kn=Jn+"-srcset",Qn=[" ","Enter","Spacebar"],Vn=Object.freeze({__proto__:null,Options:function(n,e,i){var o,r,u,s=mn(a);function c(n){n&&removeEventListener("resize",s)}function a(){var t;(t=(t=function(n){return n[1].matches},h(r).filter(t)[0]||[]))[0]!==u&&function(t){(t=i.breakpoints[t]||o).destroy?(n.options=o,n.destroy("completely"===t.destroy)):(n.state.is(5)&&(c(!0),n.mount()),n.options=t)}(u=t[0])}return{setup:function(){try{k(i,JSON.parse(C(n.root,t)))}catch(u){B(!1,u.message)}o=k({},i);var e,u=i.breakpoints;u&&(e="min"===i.mediaQuery,r=Object.keys(u).sort(function(n,t){return e?+t-+n:+n-+t}).map(function(n){return[n,matchMedia("("+(e?"min":"max")+"-width:"+n+"px)")]}),a())},mount:function(){r&&addEventListener("resize",s)},destroy:c}},Direction:function(n,t,e){return{resolve:function(n,t){var i=e.direction;return yn[n]["rtl"!==i||t?"ttb"===i?0:-1:1]||n},orient:function(n){return n*("rtl"===e.direction?1:-1)}}},Elements:function(t,i,o){var r,u,s,c,a=gn(t).on,f=t.root,l={},p=[];function h(){var t;!function(){u=x(f,".splide__slider"),s=O(f,".splide__track"),c=x(s,".splide__list"),B(s&&c,"A track/list element is missing."),d(p,w(c,"."+wn+":not(."+xn+")"));var n=b(".splide__autoplay"),t=b("."+En);S(l,{root:f,slider:u,track:s,list:c,slides:p,arrows:t,autoplay:n,prev:O(t,"."+kn),next:O(t,"."+_n),bar:O(b("."+Ln),".splide__progress__bar"),play:O(n,".splide__play"),pause:O(n,".splide__pause")})}(),t=f.id||function(n){return""+n+$(nn[n]=(nn[n]||0)+1)}(n),f.id=t,s.id=s.id||t+"-track",c.id=c.id||t+"-list",v(f,r=E())}function g(){[f,s,c].forEach(function(n){_(n,"style")}),e(p),F(f,r)}function m(){g(),h()}function y(){F(f,r),v(f,r=E())}function b(n){return x(f,n)||x(u,n)}function E(){return[bn+"--"+o.type,bn+"--"+o.direction,o.drag&&bn+"--draggable",o.isNavigation&&bn+"--nav",An]}return S(l,{setup:h,mount:function(){a(sn,m,8),a(cn,y)},destroy:g})},Slides:function(n,t,i){var o=gn(n),u=o.on,s=o.emit,d=o.bind,p=(o=t.Elements).slides,h=o.list,w=[];function E(){p.forEach(function(n,t){L(n,t,-1)})}function S(){N(function(n){n.destroy()}),e(w)}function k(){S(),E()}function L(t,e,i){(t=function(n,t,e,i){var o,r=gn(n),u=r.on,s=r.emit,c=r.bind,a=r.destroy,f=n.Components,l=n.root,d=n.options,p=d.isNavigation,h=d.updateOnMove,v=f.Direction.resolve,m=C(i,"style"),y=-1<e,b=x(i,".splide__slide__container"),w=d.focusableNodes&&R(i,d.focusableNodes);function E(){var e;o||(e=n.index,S.call(this,k()),function(n){var t=!n&&!k();P(i,Fn,t||null),P(i,jn,!t&&d.slideFocus?0:null),w&&w.forEach(function(n){P(n,jn,t?-1:null)}),n!==M(i,Mn)&&(g(i,Mn,n),s(n?"visible":"hidden",this))}.call(this,function(){if(n.is(Gn))return k();var t=D(f.Elements.track),e=D(i),o=v("left"),r=v("right");return q(t[o])<=U(e[o])&&q(e[r])<=U(t[r])}()),g(i,zn,t===e-1),g(i,Cn,t===e+1))}function S(n){n!==M(i,An)&&(g(i,An,n),p&&P(i,On,n||null),s(n?"active":"inactive",this))}function k(){return n.index===t}return{index:t,slideIndex:e,slide:i,container:b,isClone:y,mount:function(){var r=this;!function(){var o,r;y||(i.id=l.id+"-slide"+$(t+1)),p&&(r=y?e:t,o=Z(d.i18n.slideX,r+1),r=n.splides.map(function(n){return n.root.id}).join(" "),P(i,Rn,o),P(i,Nn,r),P(i,Tn,"menuitem"))}(),c(i,"click keydown",function(n){s("click"===n.type?rn:un,r,n)}),u([sn,ln,on,dn],E.bind(this)),h&&u(en,function(n,e,i){o||(E.call(this),i===t&&S.call(this,!0))}.bind(this))},destroy:function(){o=!0,a(),F(i,In),_(i,Wn),P(i,"style",m)},style:function(n,t,e){A(e&&b||i,n,t)},isWithin:function(e,i){return e=J(e-t),(e=n.is(Xn)||y?e:G(e,n.length-e))<=i}}}(n,e,i,t)).mount(),w.push(t)}function z(n){return n?O(function(n){return!n.isClone}):w}function N(n,t){z(t).forEach(n)}function O(n){return w.filter("function"==typeof n?n:function(t){return r(n)?b(t.slide,n):l(a(n),t.index)})}return{mount:function(){E(),u(sn,k),u([tn,sn],function(){w.sort(function(n,t){return n.index-t.index})})},destroy:S,register:L,get:z,getIn:function(n){var e=t.Controller,o=e.toIndex(n),r=e.hasFocus()?1:i.perPage;return O(function(n){return K(n.index,o,o+r-1)})},getAt:function(n){return O(n)[0]},add:function(n,t){f(n,function(n){var e,o,u;c(n=r(n)?T(n):n)&&((e=p[t])?y(n,e):m(h,n),v(n,i.classes.slide),n=n,o=s.bind(null,an),n=R(n,"img"),(u=n.length)?n.forEach(function(n){d(n,"load error",function(){--u||o()})}):o())}),s(sn)},remove:function(n){I(O(n).map(function(n){return n.slide})),s(sn)},forEach:N,filter:O,style:function(n,t,e){N(function(i){i.style(n,t,e)})},getLength:function(n){return(n?p:w).length},isEnough:function(){return w.length>i.perPage}}},Layout:function(n,t,e){var o,r=gn(n),u=r.on,s=r.bind,c=r.emit,a=t.Slides,f=t.Direction.resolve,l=(t=t.Elements).track,d=t.list,p=a.getAt;function h(){o="ttb"===e.direction,A(n.root,"maxWidth",j(e.width)),A(l,f("paddingLeft"),v(!1)),A(l,f("paddingRight"),v(!0)),g()}function g(){A(l,"height",function(){var n="";return o&&(B(n=m(),"height or heightRatio is missing."),n="calc("+n+" - "+v(!1)+" - "+v(!0)+")"),n}()),a.style(f("marginRight"),j(e.gap)),a.style("width",(e.autoWidth?"":j(e.fixedWidth)||(o?"":y()))||null),a.style("height",j(e.fixedHeight)||(o?e.autoHeight?"":y():m())||null,!0),c(fn)}function v(n){var t=e.padding;n=f(n?"right":"left",!0);return t&&j(t[n]||(i(t)?0:t))||"0px"}function m(){return j(e.height||D(d).width*e.heightRatio)}function y(){var n=j(e.gap);return"calc((100%"+(n&&" + "+n)+")/"+(e.perPage||1)+(n&&" - "+n)+")"}function b(n,t){var e=p(n);return e?(n=D(e.slide)[f("right")],e=D(d)[f("left")],J(n-e)+(t?0:w())):0}function w(){var n=p(0);return n&&parseFloat(A(n.slide,f("marginRight")))||0}return{mount:function(){h(),s(window,"resize load",mn(c.bind(this,an))),u([cn,sn],h),u(an,g)},listSize:function(){return D(d)[f("width")]},slideSize:function(n,t){return(n=p(n||0))?D(n.slide)[f("width")]+(t?0:w()):0},sliderSize:function(){return b(n.length-1,!0)-b(-1,!0)},totalSize:b,getPadding:function(n){return parseFloat(A(l,f("padding"+(n?"Right":"Left"),!0)))||0}}},Clones:function(n,t,i){var o,u=gn(n),s=u.on,c=u.emit,a=t.Elements,f=t.Slides,l=t.Direction.resolve,p=[];function h(){(o=x())&&(function(t){var e=f.get().slice(),o=e.length;if(o){for(;e.length<t;)d(e,e);d(e.slice(-t),e.slice(0,t)).forEach(function(r,u){var s=u<t,c=function(t,e){return v(t=t.cloneNode(!0),i.classes.clone),t.id=n.root.id+"-clone"+$(e+1),t}(r.slide,u);s?y(c,e[0].slide):m(a.list,c),d(p,c),f.register(c,u-t+(s?0:o),r.index)})}}(o),c(an))}function g(){I(p),e(p)}function b(){g(),h()}function w(){o<x()&&c(sn)}function x(){var t,e,o=i.clones;return n.is(Hn)?o||(t=a.list,r(e=i[l("fixedWidth")])&&(e=D(t=L("div",{style:"width: "+e+"; position: absolute;"},t)).width,I(t)),o=((e=e)&&U(D(a.track)[l("width")]/e)||i[l("autoWidth")]&&n.length||i.perPage)*(i.drag?(i.flickMaxPages||1)+1:2)):o=0,o}return{mount:function(){h(),s(sn,b),s([cn,an],w)},destroy:g}},Move:function(n,t,e){var i,o=gn(n),r=o.on,s=o.emit,c=(o=t.Layout).slideSize,a=o.getPadding,f=o.totalSize,l=o.listSize,d=o.sliderSize,p=(o=t.Direction).resolve,h=o.orient,g=(o=t.Elements).list,v=o.track;function m(){t.Scroll.cancel(),y(n.index),s(ln)}function y(n){b(x(n,!0))}function b(t,e){n.is(Gn)||(g.style.transform="translate"+p("X")+"("+(e?t:function(t){var e,o;return!i&&n.is(Hn)&&(o=h(t-E()),e=k(!1,t)&&o<0,o=k(!0,t)&&0<o,(e||o)&&(t=w(t,o))),t}(t))+"px)")}function w(n,t){var e=n-S(t);t=d();return n-V(e)*t*U(J(e)/t)}function x(t,i){var o=h(f(t-1)-(o=t,"center"===(t=e.focus)?(l()-c(o,!0))/2:+t*c(o)||0));return i?function(t){return e.trimSpace&&n.is(Xn)&&(t=Q(t,0,h(d()-l()))),t}(o):o}function E(){var n=p("left");return D(g)[n]-D(v)[n]+h(a(!1))}function S(n){return x(n?t.Controller.getEnd():0,!!e.trimSpace)}function k(n,t){t=u(t)?E():t;var e=!0!==n&&h(t)<h(S(!1));t=!1!==n&&h(t)>h(S(!0));return e||t}return{mount:function(){r([tn,fn,cn,sn],m)},destroy:function(){_(g,"style")},move:function(o,r,u,c){var a,f,l;i||(a=n.state.set,f=E(),i=(l=o!==r)||e.waitForTransition,a(4),s(en,r,u,o),t.Transition.start(o,function(){l&&y(r),i=!1,a(3),s(on,r,u,o),"move"===e.trimSpace&&o!==u&&f===E()?t.Controller.go(u<o?">":"<",!1,c):c&&c()}))},jump:y,translate:b,shift:w,cancel:function(){i=!1,b(E()),t.Transition.cancel()},toIndex:function(n){for(var e=t.Slides.get(),i=0,o=1/0,r=0;r<e.length;r++){var u=e[r].index,s=J(x(u,!0)-n);if(!(s<=o))break;o=s,i=u}return i},toPosition:x,getPosition:E,getLimit:S,isBusy:function(){return!!i},exceededLimit:k}},Controller:function(n,t,e){var i,o,s,c=gn(n).on,a=t.Move,f=a.getPosition,l=a.getLimit,d=t.Slides,p=d.isEnough,h=d.getLength,g=n.is(Hn),v=n.is(Xn),m=e.start||0,y=m;function b(){i=h(!0),o=e.perMove,s=e.perPage,m=Q(m,0,i-1)}function w(n,e,i,o,r){var u=e?n:z(n);t.Scroll.scroll(e||i?a.toPosition(u,!0):n,o,function(){C(a.toIndex(a.getPosition())),r&&r()})}function x(n){return S(!1,n)}function E(n){return S(!0,n)}function S(n,t){var e,i,r=o||(M()?1:s),u=k(m+r*(n?-1:1),m);return-1!==u||!v||(e=f(),i=l(!n),r=1,J(e-i)<r)?t?u:P(u):n?0:_()}function k(n,t,r){var u;return p()?(u=_(),n<0||u<n?n=K(0,n,t,!0)||K(u,t,n,!0)?L(A(n)):g?o?n:n<0?-(i%s||s):i:e.rewind?n<0?u:0:-1:g||r||n===t||(n=o?n:L(A(t)+(n<t?-1:1)))):n=-1,n}function _(){var n=i-s;return(M()||g&&o)&&(n=i-1),Y(n,0)}function P(n){return g?p()?n%i+(n<0?i:0):-1:n}function L(n){return Q(M()?n:s*n,0,_())}function A(n){return M()||(n=K(n,i-s,i-1)?i-1:n,n=q(n/s)),n}function z(n){return n=a.toIndex(n),v?Q(n,0,_()):n}function C(n){n!==m&&(y=m,m=n)}function M(){return!u(e.focus)||e.isNavigation}return{mount:function(){b(),c([cn,sn],b,9)},go:function(n,t,o){var u=function(n){var t,e,o=m;return r(n)?(t=(e=n.match(/([+\-<>])(\d+)?/)||[])[1],e=e[2],"+"===t||"-"===t?o=k(m+ +(""+t+(+e||1)),m,!0):">"===t?o=e?L(+e):x(!0):"<"===t&&(o=E(!0))):o=g?Q(n,-s,i+s-1):Q(n,0,_()),o}(n);e.useScroll?w(u,!0,!0,e.speed,o):-1<(n=P(u))&&!a.isBusy()&&(t||n!==m)&&(C(n),a.move(u,n,y,o))},scroll:w,getNext:x,getPrev:E,getEnd:_,setIndex:C,getIndex:function(n){return n?y:m},toIndex:L,toPage:A,toDest:z,hasFocus:M}},Arrows:function(n,t,e){var i,o=gn(n),r=o.on,u=o.bind,s=o.emit,c=e.classes,a=e.i18n,f=t.Elements,l=t.Controller,d=f.arrows,p=f.prev,h=f.next,g={};function v(){var t,o;e.arrows&&(p&&h||(d=L("div",c.arrows),p=b(!0),h=b(!1),i=!0,m(d,[p,h]),y(d,x("slider"===e.arrows&&f.slider||n.root)))),p&&h&&(g.prev?z(d,!1===e.arrows?"none":""):(t=f.track.id,P(p,Nn,t),P(h,Nn,t),g.prev=p,g.next=h,o=l.go,r([tn,on,cn,sn,dn],w),u(h,"click",function(){o(">",!0)}),u(p,"click",function(){o("<",!0)}),s("arrows:mounted",p,h)))}function b(n){return T('<button class="'+c.arrow+" "+(n?c.prev:c.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="'+(e.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" />')}function w(){var t=n.index,e=l.getPrev(),i=l.getNext(),o=-1<e&&t<e?a.last:a.prev;t=-1<i&&i<t?a.first:a.next;p.disabled=e<0,h.disabled=i<0,P(p,Rn,o),P(h,Rn,t),s("arrows:updated",p,h,e,i)}return{arrows:g,mount:function(){v(),r(cn,v)},destroy:function(){i?I(d):(_(p,Wn),_(h,Wn))}}},Autoplay:function(n,t,e){var i,o,r,u=gn(n),s=u.on,c=u.bind,a=u.emit,f=t.Elements,l=vn(e.interval,n.go.bind(n,">"),function(n){var t=f.bar;t&&A(t,"width",100*n+"%"),a("autoplay:playing",n)}),d=l.isPaused;function p(n){var t=n?"pause":"play",i=f[t];i&&(P(i,Nn,f.track.id),P(i,Rn,e.i18n[t]),c(i,"click",n?g:h))}function h(){d()&&t.Slides.isEnough()&&(l.start(!e.resetProgress),o=i=r=!1,a("autoplay:play"))}function g(n){void 0===n&&(n=!0),d()||(l.pause(),a("autoplay:pause")),r=n}function v(){r||(i||o?g(!1):h())}return{mount:function(){var n=e.autoplay;n&&(p(!0),p(!1),function(){var n=f.root;e.pauseOnHover&&c(n,"mouseenter mouseleave",function(n){i="mouseenter"===n.type,v()}),e.pauseOnFocus&&c(n,"focusin focusout",function(n){o="focusin"===n.type,v()}),s([en,"scroll",sn],l.rewind)}(),"pause"!==n&&h())},destroy:l.cancel,play:h,pause:g,isPaused:d}},Cover:function(n,t,e){var i=gn(n).on;function o(n){t.Slides.forEach(function(t){var e=x(t.container||t.slide,"img");e&&e.src&&r(n,e,t)})}function r(n,t,e){e.style("background",n?'center/cover no-repeat url("'+t.src+'")':"",!0),z(t,n?"none":"")}return{mount:function(){e.cover&&(i(hn,function(n,t){r(!0,n,t)}),i([tn,cn,sn],o.bind(null,!0)))},destroy:function(){o(!1)}}},Scroll:function(n,t,e){var i,o,r=gn(n),u=r.on,s=r.emit,c=t.Move,a=c.getPosition,f=c.getLimit,l=c.exceededLimit;function d(){var t=a(),e=c.toIndex(t);K(e,0,n.length-1)||c.translate(c.shift(t,0<e),!0),o&&o(),s(dn)}function p(){i&&i.cancel()}function h(){i&&!i.isPaused()&&(p(),d())}return{mount:function(){u(en,p),u([cn,sn],h)},destroy:p,scroll:function t(r,u,h,g){var v,m=a(),y=1;u=u||(v=J(r-m),Y(v/1.5,800)),o=h,p(),i=vn(u,d,function(i){var o=a(),u=(m+(r-m)*(u=i,(i=e.easingFunc)?i(u):1-Math.pow(1-u,4))-a())*y;c.translate(o+u),n.is(Xn)&&!g&&l()&&(y*=.6,J(u)<10&&(u=l(!1),t(f(!u),600,null,!0)))},1),s("scroll"),i.start()},cancel:h}},Drag:function(n,t,e){var o,r,u,s,c,a,f,l,d,p=gn(n),h=p.on,g=p.emit,v=p.bind,m=p.unbind,y=t.Move,b=t.Scroll,w=t.Controller,x=t.Elements.track,E=(p=t.Direction).resolve,S=p.orient,k=y.getPosition,_=y.exceededLimit,P={passive:!1,capture:!0},L=!1;function A(){var n=e.drag;j(!n),c="free"===n}function z(n){var t;l||!(t=F(n))&&n.button||(y.isBusy()?N(n,!0):(d=t?x:window,s=u=null,f=!1,v(d,Yn,C,P),v(d,qn,M,P),y.cancel(),b.cancel(),D(n)))}function C(t){var u,c;s||g("drag"),(s=t).cancelable&&(a?(u=200<R(t)-R(r),c=L!==(L=_()),(u||c)&&D(t),y.translate(o+(O(t)-O(r))/(L&&n.is(Xn)?5:1)),g("dragging"),f=!0,N(t)):(u=J(O(t)-O(r)),c=i(c=e.dragMinThreshold)?c:{mouse:0,touch:+c||10},a=u>(F(t)?c.touch:c.mouse),T()&&N(t)))}function M(i){var o,f;m(d,Yn,C),m(d,qn,M),s&&((a||i.cancelable&&T())&&(f=o=function(t){if(n.is(Hn)||!L){var e=r===s&&u||r,i=O(s)-O(e);e=R(t)-R(e),t=R(t)-R(s)<200;if(e&&t)return i/e}return 0}(i),f=k()+V(f)*G(J(f)*(e.flickPower||600),c?1/0:t.Layout.listSize()*(e.flickMaxPages||1)),c?w.scroll(f):n.is(Gn)?w.go(n.index+S(V(o))):w.go(w.toDest(f),!0),N(i)),g("dragged")),a=!1}function D(n){u=r,r=n,o=k()}function I(n){!l&&f&&N(n,!0)}function T(){var n=J(O(s)-O(r));return J(O(s,!0)-O(r,!0))<n}function O(n,t){return(F(n)?n.touches[0]:n)["page"+E(t?"Y":"X")]}function R(n){return n.timeStamp}function F(n){return"undefined"!=typeof TouchEvent&&n instanceof TouchEvent}function j(n){l=n}return{mount:function(){v(x,Yn,X,P),v(x,qn,X,P),v(x,"touchstart mousedown",z,P),v(x,"click",I,{capture:!0}),v(x,"dragstart",N),h([tn,cn],A)},disable:j}},Keyboard:function(n,t,e){var i,o=gn(n),r=o.on,u=o.bind,s=o.unbind,a=t.Elements.root,f=t.Direction.resolve;function d(){var n;(n=void 0===(n=e.keyboard)?"global":n)&&("focused"===n?P(i=a,jn,0):i=window,u(i,"keydown",h))}function p(){s(i,"keydown"),c(i)&&_(i,jn)}function h(t){t=t.key,(t=l(Un,t)?"Arrow"+t:t)===f("ArrowLeft")?n.go("<"):t===f("ArrowRight")&&n.go(">")}return{mount:function(){d(),r(cn,function(){p(),d()})},destroy:p}},LazyLoad:function(n,t,e){var i=gn(n),o=i.on,r=i.off,u=i.bind,s=i.emit,c="sequential"===e.lazyLoad,a=[],f=0;function l(){f=0,a=[]}function d(){(a=a.filter(function(t){return!t.o.isWithin(n.index,e.perPage*((e.preloadPages||1)+1))||p(t)})).length||r(on)}function p(n){var t=n.e;v(n.o.slide,Dn),u(t,"load error",function(t){!function(n,t){var e=n.o;F(e.slide,Dn),t||(I(n.c),z(n.e,""),s(hn,n.e,e),s(an)),c&&h()}(n,"error"===t.type)}),["src","srcset"].forEach(function(e){n[e]&&(P(t,e,n[e]),_(t,"src"===e?Jn:Kn))})}function h(){f<a.length&&p(a[f++])}return{mount:function(){e.lazyLoad&&(o([tn,sn],function(){l(),t.Slides.forEach(function(n){R(n.slide,"[data-splide-lazy], [data-splide-lazy-srcset]").forEach(function(t){var i,o=C(t,Jn),r=C(t,Kn);o===t.src&&r===t.srcset||(P(i=L("span",e.classes.spinner,t.parentElement),Tn,"presentation"),a.push({e:t,o:n,src:o,srcset:r,c:i}),z(t,"none"))})}),c&&h()}),c||o([tn,sn,on],d))},destroy:l}},Pagination:function(n,t,i){var o,r=gn(n),u=r.on,s=r.emit,c=r.bind,a=r.unbind,f=t.Slides,l=t.Elements,d=t.Controller,p=d.hasFocus,h=d.getIndex,g=[];function m(){y(),i.pagination&&f.isEnough()&&(function(){var t=n.length,e=i.classes,r=i.i18n,u=i.perPage,s="slider"===i.pagination&&l.slider||l.root,a=p()?t:U(t/u);o=L("ul",e.pagination,s);for(var d=0;d<a;d++){var h=L("li",null,o),v=L("button",{class:e.page,type:"button"},h),m=f.getIn(d).map(function(n){return n.slide.id}),y=!p()&&1<u?r.pageX:r.slideX;c(v,"click",b.bind(null,d)),P(v,Nn,m.join(" ")),P(v,Rn,Z(y,d+1)),g.push({li:h,button:v,page:d})}}(),s("pagination:mounted",{list:o,items:g},w(n.index)),x())}function y(){o&&(I(o),g.forEach(function(n){a(n.button,"click")}),e(g),o=null)}function b(n){d.go(">"+n,!0,function(){var t=f.getAt(d.toIndex(n));t&&((t=t.slide).setActive&&t.setActive()||t.focus({preventScroll:!0}))})}function w(n){return g[d.toPage(n)]}function x(){var n=w(h(!0)),t=w(h());n&&(F(n.button,An),_(n.button,On)),t&&(v(t.button,An),P(t.button,On,!0)),s("pagination:updated",{list:o,items:g},n,t)}return{items:g,mount:function(){m(),u([cn,sn],m),u([en,dn],x)},destroy:y,getAt:w}},Sync:function(n,t,i){var o=n.splides,r=t.Elements.list;function u(){P(r,Bn,"ttb"!==i.direction?"horizontal":null)}function s(t){n.go(t.index)}function c(n,t){l(Qn,t.key)&&(s(n),N(t))}return{mount:function(){var t,a,f;i.isNavigation?(f=(a=gn(n)).on,a=a.emit,f(rn,s),f(un,c),f([tn,cn],u),P(r,Tn,"menu"),a("navigation:mounted",n.splides)):(t=[],o.concat(n).forEach(function(n,i,o){gn(n).on(en,function(i,r,u){o.forEach(function(e){e===n||l(t,n)||(t.push(e),e.go(e.is(Hn)?u:i))}),e(t)})}))},destroy:function(){_(r,Wn)}}},Wheel:function(n,t,e){var i=gn(n).bind;function o(t){var e=t.deltaY;e&&(n.go(e<0?"<":">"),N(t))}return{mount:function(){e.wheel&&i(t.Elements.track,"wheel",o,{passive:!1,capture:!0})}}}}),Zn={type:"slide",speed:400,waitForTransition:!0,perPage:1,arrows:!0,pagination:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",slideFocus:!0,trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",classes:{slide:wn,clone:xn,arrows:En,arrow:Sn,prev:kn,next:_n,pagination:Pn,page:Pn+"__page",spinner:n+"__spinner"},i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay"}};function $n(n,t,e){var i=gn(n).on;return{mount:function(){i([tn,sn],function(){W(function(){t.Slides.style("transition","opacity "+e.speed+"ms "+e.easing)})})},start:function(n,e){var i=t.Elements.track;A(i,"height",j(D(i).height)),W(function(){e(),A(i,"height","")})},cancel:X}}function nt(n,t,e){var i,o=gn(n).bind,r=t.Move,u=t.Controller,s=t.Elements.list;function c(){a("")}function a(n){A(s,"transition",n)}return{mount:function(){o(s,"transitionend",function(n){n.target===s&&i&&(c(),i())})},start:function(t,o){var s=r.toPosition(t,!0),c=r.getPosition(),f=function(t){var i=e.rewindSpeed;if(n.is(Xn)&&i){var o=u.getIndex(!0),r=u.getEnd();if(0===o&&r<=t||r<=o&&0===t)return i}return e.speed}(t);1<=J(s-c)&&1<=f?(a("transform "+f+"ms "+e.easing),r.translate(s,!0),i=o):(r.jump(t),o())},cancel:c}}return(Pn=function(){function n(t,e){this.event=function(){var n={};function t(t,i){e(t,function(t,e){var o=n[t];n[t]=o&&o.filter(function(n){return n.n?n.n!==i:i||n.t!==e})})}function e(n,t){a(n).join(" ").split(" ").forEach(function(n){n=n.split("."),t(n[0],n[1])})}return{on:function(t,i,o,r){void 0===r&&(r=10),e(t,function(t,e){n[t]=n[t]||[],d(n[t],{i:t,r:i,t:e,u:r,n:o}).sort(function(n,t){return n.u-t.u})})},off:t,offBy:function(e){E(n,function(n,i){t(i,e)})},emit:function(t){var e=arguments;(n[t]||[]).forEach(function(n){n.r.apply(n,h(e,1))})},destroy:function(){n={}}}}(),this.Components={},this.state=function(n){var t=n;return{set:function(n){t=n},is:function(n){return l(a(n),t)}}}(1),this.splides=[],this.f={},this.a={},B(t=r(t)?O(document,t):t,t+" is invalid."),this.root=t,k(Zn,n.defaults),k(k(this.f,Zn),e||{})}var t,i=n.prototype;return i.mount=function(n,t){var e=this,i=this.state,o=this.Components;return B(i.is([1,5]),"Already mounted!"),i.set(1),this.s=o,this.l=t||this.l||(this.is(Gn)?$n:nt),this.a=n||this.a,E(S({},Vn,this.a,{Transition:this.l}),function(n,t){n=n(e,o,e.f),(o[t]=n).setup&&n.setup()}),E(o,function(n){n.mount&&n.mount()}),this.emit(tn),v(this.root,"is-initialized"),i.set(3),this.emit("ready"),this},i.sync=function(n){return this.splides.push(n),n.splides.push(this),this},i.go=function(n){return this.s.Controller.go(n),this},i.on=function(n,t){return this.event.on(n,t,null,20),this},i.off=function(n){return this.event.off(n),this},i.emit=function(n){var t;return(t=this.event).emit.apply(t,[n].concat(h(arguments,1))),this},i.add=function(n,t){return this.s.Slides.add(n,t),this},i.remove=function(n){return this.s.Slides.remove(n),this},i.is=function(n){return this.f.type===n},i.refresh=function(){return this.emit(sn),this},i.destroy=function(n){void 0===n&&(n=!0);var t=this.event,i=this.state;return i.is(1)?t.on("ready",this.destroy.bind(this,n),this):(E(this.s,function(t){t.destroy&&t.destroy(n)}),t.emit(pn),t.destroy(),n&&e(this.splides),i.set(5)),this},t=n,(i=[{key:"options",get:function(){return this.f},set:function(n){var t=this.f;k(t,n),this.state.is(1)||this.emit(cn,t)}},{key:"length",get:function(){return this.s.Slides.getLength(!0)}},{key:"index",get:function(){return this.s.Controller.getIndex()}}])&&wt(t.prototype,i),n}()).defaults={},Pn.STATES={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,DESTROYED:5},Pn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).Splide=t();