var Ge=Object.defineProperty,ze=Object.defineProperties;var Re=Object.getOwnPropertyDescriptors;var se=Object.getOwnPropertySymbols;var Ye=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable;var ae=(s,e,l)=>e in s?Ge(s,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[e]=l,re=(s,e)=>{for(var l in e||(e={}))Ye.call(e,l)&&ae(s,l,e[l]);if(se)for(var l of se(e))Ze.call(e,l)&&ae(s,l,e[l]);return s},ne=(s,e)=>ze(s,Re(e));import{S as Ae,i as Se,s as Ne,e as k,c as w,a as E,d as m,b as v,f as W,g as N,l as U,L as ie,t as I,k as A,h as B,m as S,G as b,U as Me,Q as F,j as O,V as He,T as Te,W as xe,X as De,K,q as V,w as Q,x as J,y as $,o as G,B as ee,n as X,p as j,Y as Ve,Z as Ie,v as qe,_ as Ue,E as Xe,$ as je}from"./vendor-hf-doc-builder.js";import{I as le}from"./IconCopyLink-hf-doc-builder.js";function oe(s){let e,l;return{c(){e=k("div"),this.h()},l(t){e=w(t,"DIV",{class:!0,style:!0,id:!0});var o=E(e);o.forEach(m),this.h()},h(){v(e,"class",l="absolute text-base py-1.5 p-2 break-words bg-white border-2 border-black dark:border-gray-500 rounded shadow-alternate-xl z-50 "+(s[0].length>1e3?"max-w-lg":"max-w-xs")),W(e,"top",s[2]+15+"px"),W(e,"left",s[1]+15+"px"),v(e,"id",s[3])},m(t,o){N(t,e,o),e.innerHTML=s[0]},p(t,o){o&1&&(e.innerHTML=t[0]),o&1&&l!==(l="absolute text-base py-1.5 p-2 break-words bg-white border-2 border-black dark:border-gray-500 rounded shadow-alternate-xl z-50 "+(t[0].length>1e3?"max-w-lg":"max-w-xs"))&&v(e,"class",l),o&4&&W(e,"top",t[2]+15+"px"),o&2&&W(e,"left",t[1]+15+"px"),o&8&&v(e,"id",t[3])},d(t){t&&m(e)}}}function We(s){let e,l=s[0]&&oe(s);return{c(){l&&l.c(),e=U()},l(t){l&&l.l(t),e=U()},m(t,o){l&&l.m(t,o),N(t,e,o)},p(t,[o]){t[0]?l?l.p(t,o):(l=oe(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:ie,o:ie,d(t){l&&l.d(t),t&&m(e)}}}function Oe(s,e,l){let{txt:t}=e,{x:o}=e,{y:d}=e,{id:u}=e;return s.$$set=c=>{"txt"in c&&l(0,t=c.txt),"x"in c&&l(1,o=c.x),"y"in c&&l(2,d=c.y),"id"in c&&l(3,u=c.id)},[t,o,d,u]}class Fe extends Ae{constructor(e){super();Se(this,e,Oe,We,Ne,{txt:0,x:1,y:2,id:3})}}const fe="docstring-tooltip";function Be(s,e){let l;function t(c){u(),l=new Fe({props:{txt:e,x:c.pageX,y:c.pageY,id:fe},target:document.body})}function o(c){l.$set({x:c.pageX,y:c.pageY})}function d(){l.$destroy()}function u(){var h;const c=document.getElementById(fe);c&&((h=c.parentNode)==null||h.removeChild(c))}return s.addEventListener("mouseover",t),s.addEventListener("mouseleave",d),s.addEventListener("mousemove",o),{destroy(){s.removeEventListener("mouseover",t),s.removeEventListener("mouseleave",d),s.removeEventListener("mousemove",o)}}}const{window:Ke}=Ue;function ce(s,e,l){const t=s.slice();return t[21]=e[l].title,t[9]=e[l].parametersDescription,t}function ue(s,e,l){const t=s.slice();return t[7]=e[l].anchor,t[24]=e[l].description,t}function he(s,e,l){const t=s.slice();return t[7]=e[l].anchor,t[24]=e[l].description,t}function de(s,e,l){const t=s.slice();return t[8]=e[l].name,t[29]=e[l].val,t}function pe(s){let e,l,t,o,d,u,c,h,g;return{c(){e=k("a"),l=k("span"),t=I("<"),o=A(),d=k("span"),u=I("source"),c=A(),h=k("span"),g=I(">"),this.h()},l(n){e=w(n,"A",{class:!0,href:!0,target:!0});var r=E(e);l=w(r,"SPAN",{});var i=E(l);t=B(i,"<"),i.forEach(m),o=S(r),d=w(r,"SPAN",{class:!0});var a=E(d);u=B(a,"source"),a.forEach(m),c=S(r),h=w(r,"SPAN",{});var f=E(h);g=B(f,">"),f.forEach(m),r.forEach(m),this.h()},h(){v(d,"class","hidden md:block mx-0.5 hover:!underline"),v(e,"class","!ml-auto !text-gray-400 !no-underline text-sm flex items-center"),v(e,"href",s[5]),v(e,"target","_blank")},m(n,r){N(n,e,r),b(e,l),b(l,t),b(e,o),b(e,d),b(d,u),b(e,c),b(e,h),b(h,g)},p(n,r){r[0]&32&&v(e,"href",n[5])},d(n){n&&m(e)}}}function me(s){let e,l,t,o,d,u,c,h,g=s[1],n=[];for(let i=0;i<g.length;i+=1)n[i]=_e(de(s,g,i));let r=s[4]&&ge(s);return{c(){e=k("p"),l=k("span"),t=I("("),o=A();for(let i=0;i<n.length;i+=1)n[i].c();d=A(),u=k("span"),c=I(")"),h=A(),r&&r.c(),this.h()},l(i){e=w(i,"P",{class:!0});var a=E(e);l=w(a,"SPAN",{});var f=E(l);t=B(f,"("),f.forEach(m),o=S(a);for(let y=0;y<n.length;y+=1)n[y].l(a);d=S(a),u=w(a,"SPAN",{});var p=E(u);c=B(p,")"),p.forEach(m),h=S(a),r&&r.l(a),a.forEach(m),this.h()},h(){v(e,"class","font-mono text-xs md:text-sm !leading-relaxed !my-6")},m(i,a){N(i,e,a),b(e,l),b(l,t),b(e,o);for(let f=0;f<n.length;f+=1)n[f].m(e,null);b(e,d),b(e,u),b(u,c),b(e,h),r&&r.m(e,null)},p(i,a){if(a[0]&12418){g=i[1];let f;for(f=0;f<g.length;f+=1){const p=de(i,g,f);n[f]?n[f].p(p,a):(n[f]=_e(p),n[f].c(),n[f].m(e,d))}for(;f<n.length;f+=1)n[f].d(1);n.length=g.length}i[4]?r?r.p(i,a):(r=ge(i),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(i){i&&m(e),K(n,i),r&&r.d()}}}function _e(s){let e,l,t=s[8]+"",o,d,u=s[29]+"",c,h,g,n,r;function i(){return s[16](s[8])}return{c(){e=k("span"),l=k("span"),o=I(t),d=k("span"),c=I(u),this.h()},l(a){e=w(a,"SPAN",{class:!0});var f=E(e);l=w(f,"SPAN",{class:!0});var p=E(l);o=B(p,t),d=w(p,"SPAN",{class:!0});var y=E(d);c=B(y,u),y.forEach(m),p.forEach(m),f.forEach(m),this.h()},h(){v(d,"class","opacity-60"),v(l,"class","rounded hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"),v(e,"class",h="comma "+(s[12][s[8]]?"cursor-pointer":"cursor-default"))},m(a,f){N(a,e,f),b(e,l),b(l,o),b(l,d),b(d,c),n||(r=[Me(g=Be.call(null,e,s[12][s[8]]||"")),F(e,"click",xe(De(i)))],n=!0)},p(a,f){s=a,f[0]&2&&t!==(t=s[8]+"")&&O(o,t),f[0]&2&&u!==(u=s[29]+"")&&O(c,u),f[0]&2&&h!==(h="comma "+(s[12][s[8]]?"cursor-pointer":"cursor-default"))&&v(e,"class",h),g&&He(g.update)&&f[0]&2&&g.update.call(null,s[12][s[8]]||"")},d(a){a&&m(e),n=!1,Te(r)}}}function ge(s){let e,l,t,o,d=Pe(s[4])+"",u,c,h,g;return{c(){e=k("span"),l=I("\u2192"),t=A(),o=k("span"),this.h()},l(n){e=w(n,"SPAN",{class:!0});var r=E(e);l=B(r,"\u2192"),r.forEach(m),t=S(n),o=w(n,"SPAN",{class:!0});var i=E(o);i.forEach(m),this.h()},h(){v(e,"class","font-bold"),v(o,"class",u="rounded hover:bg-gray-400 "+(s[3]?"cursor-pointer":"cursor-default"))},m(n,r){N(n,e,r),b(e,l),N(n,t,r),N(n,o,r),o.innerHTML=d,h||(g=[Me(c=Be.call(null,o,s[3]||"")),F(o,"click",xe(De(s[17])))],h=!0)},p(n,r){r[0]&16&&d!==(d=Pe(n[4])+"")&&(o.innerHTML=d),r[0]&8&&u!==(u="rounded hover:bg-gray-400 "+(n[3]?"cursor-pointer":"cursor-default"))&&v(o,"class",u),c&&He(c.update)&&r[0]&8&&c.update.call(null,n[3]||"")},d(n){n&&m(e),n&&m(t),n&&m(o),h=!1,Te(g)}}}function ve(s){var g;let e,l,t,o=((g=s[9])==null?void 0:g.length)+"",d,u,c,h;return{c(){e=k("div"),l=k("button"),t=I("Expand "),d=I(o),u=I(" parameters"),this.h()},l(n){e=w(n,"DIV",{class:!0});var r=E(e);l=w(r,"BUTTON",{class:!0});var i=E(l);t=B(i,"Expand "),d=B(i,o),u=B(i," parameters"),i.forEach(m),r.forEach(m),this.h()},h(){v(l,"class","absolute leading-tight px-3 py-1.5 dark:bg-gray-900 bg-black text-gray-200 hover:text-white rounded-xl bottom-12 ring-offset-2 hover:ring-black hover:ring-2"),v(e,"class","absolute inset-0 bg-gradient-to-t from-white to-white/0 dark:from-gray-950 dark:to-gray-950/0 z-10 flex justify-center")},m(n,r){N(n,e,r),b(e,l),b(l,t),b(l,d),b(l,u),c||(h=F(l,"click",s[18]),c=!0)},p(n,r){var i;r[0]&512&&o!==(o=((i=n[9])==null?void 0:i.length)+"")&&O(d,o)},d(n){n&&m(e),c=!1,h()}}}function be(s){let e,l,t,o,d,u,c=s[9],h=[];for(let n=0;n<c.length;n+=1)h[n]=Ce(he(s,c,n));const g=n=>G(h[n],1,1,()=>{h[n]=null});return{c(){e=k("p"),l=I("Parameters "),t=k("span"),o=A(),d=k("ul");for(let n=0;n<h.length;n+=1)h[n].c();this.h()},l(n){e=w(n,"P",{class:!0});var r=E(e);l=B(r,"Parameters "),t=w(r,"SPAN",{class:!0}),E(t).forEach(m),r.forEach(m),o=S(n),d=w(n,"UL",{class:!0});var i=E(d);for(let a=0;a<h.length;a+=1)h[a].l(i);i.forEach(m),this.h()},h(){v(t,"class","flex-auto border-t-2 border-gray-100 dark:border-gray-700 ml-3"),v(e,"class","flex items-center font-semibold !mt-2 !mb-2 text-gray-800"),v(d,"class","px-2")},m(n,r){N(n,e,r),b(e,l),b(e,t),N(n,o,r),N(n,d,r);for(let i=0;i<h.length;i+=1)h[i].m(d,null);u=!0},p(n,r){if(r[0]&513){c=n[9];let i;for(i=0;i<c.length;i+=1){const a=he(n,c,i);h[i]?(h[i].p(a,r),V(h[i],1)):(h[i]=Ce(a),h[i].c(),V(h[i],1),h[i].m(d,null))}for(X(),i=c.length;i<h.length;i+=1)g(i);j()}},i(n){if(!u){for(let r=0;r<c.length;r+=1)V(h[r]);u=!0}},o(n){h=h.filter(Boolean);for(let r=0;r<h.length;r+=1)G(h[r]);u=!1},d(n){n&&m(e),n&&m(o),n&&m(d),K(h,n)}}}function Ce(s){let e,l,t,o,d,u,c,h,g,n=s[24]+"",r,i,a;return d=new le({props:{classNames:"text-smd"}}),{c(){e=k("li"),l=k("span"),t=k("a"),o=k("span"),Q(d.$$.fragment),h=A(),g=k("span"),r=A(),this.h()},l(f){e=w(f,"LI",{class:!0});var p=E(e);l=w(p,"SPAN",{class:!0});var y=E(l);t=w(y,"A",{id:!0,class:!0,href:!0});var H=E(t);o=w(H,"SPAN",{});var z=E(o);J(d.$$.fragment,z),z.forEach(m),H.forEach(m),h=S(y),g=w(y,"SPAN",{});var q=E(g);q.forEach(m),y.forEach(m),r=S(p),p.forEach(m),this.h()},h(){v(t,"id",u=s[7]),v(t,"class","header-link block pr-0.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(t,"href",c=`#${s[7]}`),v(l,"class","group flex space-x-1.5 items-start"),v(e,"class",i="text-base !pl-4 my-3 rounded "+(s[0]===s[7]?Z:""))},m(f,p){N(f,e,p),b(e,l),b(l,t),b(t,o),$(d,o,null),b(l,h),b(l,g),g.innerHTML=n,b(e,r),a=!0},p(f,p){(!a||p[0]&512&&u!==(u=f[7]))&&v(t,"id",u),(!a||p[0]&512&&c!==(c=`#${f[7]}`))&&v(t,"href",c),(!a||p[0]&512)&&n!==(n=f[24]+"")&&(g.innerHTML=n),(!a||p[0]&513&&i!==(i="text-base !pl-4 my-3 rounded "+(f[0]===f[7]?Z:"")))&&v(e,"class",i)},i(f){a||(V(d.$$.fragment,f),a=!0)},o(f){G(d.$$.fragment,f),a=!1},d(f){f&&m(e),ee(d)}}}function ke(s){let e,l,t=s[2],o=[];for(let u=0;u<t.length;u+=1)o[u]=Ee(ce(s,t,u));const d=u=>G(o[u],1,1,()=>{o[u]=null});return{c(){for(let u=0;u<o.length;u+=1)o[u].c();e=U()},l(u){for(let c=0;c<o.length;c+=1)o[c].l(u);e=U()},m(u,c){for(let h=0;h<o.length;h+=1)o[h].m(u,c);N(u,e,c),l=!0},p(u,c){if(c[0]&5){t=u[2];let h;for(h=0;h<t.length;h+=1){const g=ce(u,t,h);o[h]?(o[h].p(g,c),V(o[h],1)):(o[h]=Ee(g),o[h].c(),V(o[h],1),o[h].m(e.parentNode,e))}for(X(),h=t.length;h<o.length;h+=1)d(h);j()}},i(u){if(!l){for(let c=0;c<t.length;c+=1)V(o[c]);l=!0}},o(u){o=o.filter(Boolean);for(let c=0;c<o.length;c+=1)G(o[c]);l=!1},d(u){K(o,u),u&&m(e)}}}function we(s){let e,l,t,o,d,u,c,h,g,n=s[24]+"",r,i;return d=new le({props:{classNames:"text-smd"}}),{c(){e=k("li"),l=k("span"),t=k("a"),o=k("span"),Q(d.$$.fragment),h=A(),g=k("span"),this.h()},l(a){e=w(a,"LI",{class:!0});var f=E(e);l=w(f,"SPAN",{class:!0});var p=E(l);t=w(p,"A",{id:!0,class:!0,href:!0});var y=E(t);o=w(y,"SPAN",{});var H=E(o);J(d.$$.fragment,H),H.forEach(m),y.forEach(m),h=S(p),g=w(p,"SPAN",{});var z=E(g);z.forEach(m),p.forEach(m),f.forEach(m),this.h()},h(){v(t,"id",u=s[7]),v(t,"class","header-link block pr-0.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(t,"href",c=`#${s[7]}`),v(l,"class","group flex space-x-1.5 items-start"),v(e,"class",r="text-base !pl-4 my-3 rounded "+(s[0]===s[7]?Z:""))},m(a,f){N(a,e,f),b(e,l),b(l,t),b(t,o),$(d,o,null),b(l,h),b(l,g),g.innerHTML=n,i=!0},p(a,f){(!i||f[0]&4&&u!==(u=a[7]))&&v(t,"id",u),(!i||f[0]&4&&c!==(c=`#${a[7]}`))&&v(t,"href",c),(!i||f[0]&4)&&n!==(n=a[24]+"")&&(g.innerHTML=n),(!i||f[0]&5&&r!==(r="text-base !pl-4 my-3 rounded "+(a[0]===a[7]?Z:"")))&&v(e,"class",r)},i(a){i||(V(d.$$.fragment,a),i=!0)},o(a){G(d.$$.fragment,a),i=!1},d(a){a&&m(e),ee(d)}}}function Ee(s){let e,l=s[21]+"",t,o,d,u,c,h,g,n=s[9],r=[];for(let a=0;a<n.length;a+=1)r[a]=we(ue(s,n,a));const i=a=>G(r[a],1,1,()=>{r[a]=null});return{c(){e=k("p"),t=I(l),o=A(),d=k("span"),u=A(),c=k("ul");for(let a=0;a<r.length;a+=1)r[a].c();h=A(),this.h()},l(a){e=w(a,"P",{class:!0});var f=E(e);t=B(f,l),o=S(f),d=w(f,"SPAN",{class:!0}),E(d).forEach(m),f.forEach(m),u=S(a),c=w(a,"UL",{class:!0});var p=E(c);for(let y=0;y<r.length;y+=1)r[y].l(p);h=S(p),p.forEach(m),this.h()},h(){v(d,"class","flex-auto border-t-2 ml-3"),v(e,"class","flex items-center font-semibold"),v(c,"class","px-2")},m(a,f){N(a,e,f),b(e,t),b(e,o),b(e,d),N(a,u,f),N(a,c,f);for(let p=0;p<r.length;p+=1)r[p].m(c,null);b(c,h),g=!0},p(a,f){if((!g||f[0]&4)&&l!==(l=a[21]+"")&&O(t,l),f[0]&5){n=a[9];let p;for(p=0;p<n.length;p+=1){const y=ue(a,n,p);r[p]?(r[p].p(y,f),V(r[p],1)):(r[p]=we(y),r[p].c(),V(r[p],1),r[p].m(c,h))}for(X(),p=n.length;p<r.length;p+=1)i(p);j()}},i(a){if(!g){for(let f=0;f<n.length;f+=1)V(r[f]);g=!0}},o(a){r=r.filter(Boolean);for(let f=0;f<r.length;f+=1)G(r[f]);g=!1},d(a){a&&m(e),a&&m(u),a&&m(c),K(r,a)}}}function ye(s){let e,l,t,o,d,u,c,h,g,n,r=(s[3]||"")+"",i=!!s[4]&&Le(s);return{c(){e=k("div"),l=k("p"),t=I("Returns"),o=A(),i&&i.c(),d=A(),u=k("span"),g=A(),n=k("p"),this.h()},l(a){e=w(a,"DIV",{class:!0,id:!0});var f=E(e);l=w(f,"P",{class:!0});var p=E(l);t=B(p,"Returns"),p.forEach(m),o=S(f),i&&i.l(f),d=S(f),u=w(f,"SPAN",{class:!0}),E(u).forEach(m),f.forEach(m),g=S(a),n=w(a,"P",{class:!0});var y=E(n);y.forEach(m),this.h()},h(){v(l,"class","text-base"),v(u,"class","flex-auto border-t-2 border-gray-100 dark:border-gray-700"),v(e,"class",c="flex items-center font-semibold space-x-3 text-base !mt-0 !mb-0 text-gray-800 rounded "+(s[0]===s[7]?Z:"")),v(e,"id",h=`${s[7]}.returns`),v(n,"class","text-base")},m(a,f){N(a,e,f),b(e,l),b(l,t),b(e,o),i&&i.m(e,null),b(e,d),b(e,u),N(a,g,f),N(a,n,f),n.innerHTML=r},p(a,f){a[4]?i?i.p(a,f):(i=Le(a),i.c(),i.m(e,d)):i&&(i.d(1),i=null),f[0]&129&&c!==(c="flex items-center font-semibold space-x-3 text-base !mt-0 !mb-0 text-gray-800 rounded "+(a[0]===a[7]?Z:""))&&v(e,"class",c),f[0]&128&&h!==(h=`${a[7]}.returns`)&&v(e,"id",h),f[0]&8&&r!==(r=(a[3]||"")+"")&&(n.innerHTML=r)},d(a){a&&m(e),i&&i.d(),a&&m(g),a&&m(n)}}}function Le(s){let e,l;return{c(){e=new Ve,l=U(),this.h()},l(t){e=Ie(t),l=U(),this.h()},h(){e.a=l},m(t,o){e.m(s[4],t,o),N(t,l,o)},p(t,o){o[0]&16&&e.p(t[4])},d(t){t&&m(l),t&&e.d()}}}function Qe(s){let e,l,t,o=s[14](s[8])+"",d,u,c,h,g,n,r,i,a,f,p,y,H,z,q;c=new le({});let T=s[5]&&pe(s),x=!s[6]&&me(s),D=s[11]&&ve(s),M=!!s[9]&&be(s),_=s[2]&&ke(s),L=!!s[4]&&ye(s);return{c(){e=k("div"),l=k("span"),t=new Ve,d=A(),u=k("a"),Q(c.$$.fragment),g=A(),T&&T.c(),n=A(),x&&x.c(),r=A(),i=k("div"),D&&D.c(),a=A(),M&&M.c(),f=A(),_&&_.c(),p=A(),L&&L.c(),this.h()},l(C){e=w(C,"DIV",{});var P=E(e);l=w(P,"SPAN",{class:!0,id:!0});var R=E(l);t=Ie(R),d=S(R),u=w(R,"A",{id:!0,class:!0,href:!0});var te=E(u);J(c.$$.fragment,te),te.forEach(m),g=S(R),T&&T.l(R),R.forEach(m),n=S(P),x&&x.l(P),r=S(P),i=w(P,"DIV",{class:!0});var Y=E(i);D&&D.l(Y),a=S(Y),M&&M.l(Y),f=S(Y),_&&_.l(Y),p=S(Y),L&&L.l(Y),Y.forEach(m),P.forEach(m),this.h()},h(){t.a=d,v(u,"id",s[7]),v(u,"class","header-link invisible with-hover:group-hover:visible pr-2"),v(u,"href",h="#"+s[7]),v(l,"class","group flex space-x-1.5 items-center text-gray-800 bg-gradient-to-r rounded-tr-lg -mt-4 -ml-4 pt-3 px-2.5"),v(l,"id",s[7]),v(i,"class",y="!mb-10 relative docstring-details "+(s[11]?"max-h-96 overflow-hidden":""))},m(C,P){N(C,e,P),b(e,l),t.m(o,l),b(l,d),b(l,u),$(c,u,null),b(l,g),T&&T.m(l,null),b(e,n),x&&x.m(e,null),b(e,r),b(e,i),D&&D.m(i,null),b(i,a),M&&M.m(i,null),b(i,f),_&&_.m(i,null),b(i,p),L&&L.m(i,null),s[19](i),H=!0,z||(q=F(Ke,"hashchange",s[15]),z=!0)},p(C,P){(!H||P[0]&256)&&o!==(o=C[14](C[8])+"")&&t.p(o),(!H||P[0]&128)&&v(u,"id",C[7]),(!H||P[0]&128&&h!==(h="#"+C[7]))&&v(u,"href",h),C[5]?T?T.p(C,P):(T=pe(C),T.c(),T.m(l,null)):T&&(T.d(1),T=null),(!H||P[0]&128)&&v(l,"id",C[7]),C[6]?x&&(x.d(1),x=null):x?x.p(C,P):(x=me(C),x.c(),x.m(e,r)),C[11]?D?D.p(C,P):(D=ve(C),D.c(),D.m(i,a)):D&&(D.d(1),D=null),C[9]?M?(M.p(C,P),P[0]&512&&V(M,1)):(M=be(C),M.c(),V(M,1),M.m(i,f)):M&&(X(),G(M,1,1,()=>{M=null}),j()),C[2]?_?(_.p(C,P),P[0]&4&&V(_,1)):(_=ke(C),_.c(),V(_,1),_.m(i,p)):_&&(X(),G(_,1,1,()=>{_=null}),j()),C[4]?L?L.p(C,P):(L=ye(C),L.c(),L.m(i,null)):L&&(L.d(1),L=null),(!H||P[0]&2048&&y!==(y="!mb-10 relative docstring-details "+(C[11]?"max-h-96 overflow-hidden":"")))&&v(i,"class",y)},i(C){H||(V(c.$$.fragment,C),V(M),V(_),H=!0)},o(C){G(c.$$.fragment,C),G(M),G(_),H=!1},d(C){C&&m(e),ee(c),T&&T.d(),x&&x.d(),D&&D.d(),M&&M.d(),_&&_.d(),L&&L.d(),s[19](null),z=!1,q()}}}const Z="bg-yellow-50 dark:bg-[#494a3d]";function Pe(s){const e=/\s*<p>(((?!<p>).)*)<\/p>\s*/gms;return s.replace(e,(l,t)=>`<span>${t}</span>`)}function Je(s,e,l){let{anchor:t}=e,{name:o}=e,{parameters:d=[]}=e,{parametersDescription:u}=e,{parameterGroups:c}=e,{returnDescription:h}=e,{returnType:g}=e,{source:n=void 0}=e,{hashlink:r}=e,{isGetSetDescriptor:i=!1}=e,a,f,p=!1;const y=(u==null?void 0:u.reduce((_,L)=>{const{name:C,description:P}=L;return ne(re({},_),{[C]:P})},{}))||{};qe(()=>{const{hash:_}=window.location;l(0,r=_.substring(1));const P=[...a.querySelectorAll('[href^="#"]')].map(R=>R.id).includes(r);l(11,p=!P&&a.clientHeight>500),q()});async function H(_,L){L&&(l(11,p=!1),await Xe(),window.location.hash=_)}function z(_){if(_.startsWith("class ")){const L=_.substring(6).split("."),C=L.pop();return`<h3 class="!m-0"><span class="flex-1 break-all md:text-lg bg-gradient-to-r px-2.5 py-1.5 rounded-xl from-indigo-50/70 to-white dark:from-gray-900 dark:to-gray-950 dark:text-indigo-300 text-indigo-700"><svg class="mr-1.5 text-indigo-500 inline-block -mt-0.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" width=".8em" height=".8em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path class="uim-quaternary" d="M20.23 7.24L12 12L3.77 7.24a1.98 1.98 0 0 1 .7-.71L11 2.76c.62-.35 1.38-.35 2 0l6.53 3.77c.29.173.531.418.7.71z" opacity=".25" fill="currentColor"></path><path class="uim-tertiary" d="M12 12v9.5a2.09 2.09 0 0 1-.91-.21L4.5 17.48a2.003 2.003 0 0 1-1-1.73v-7.5a2.06 2.06 0 0 1 .27-1.01L12 12z" opacity=".5" fill="currentColor"></path><path class="uim-primary" d="M20.5 8.25v7.5a2.003 2.003 0 0 1-1 1.73l-6.62 3.82c-.275.13-.576.198-.88.2V12l8.23-4.76c.175.308.268.656.27 1.01z" fill="currentColor"></path></svg><span class="font-light">class</span> <span class="font-medium">${L.join(".")}.</span><span class="font-semibold">${C}</span></span></h3>`}else return i?`<div class="flex items-center rounded-xl py-0.5 break-all bg-gradient-to-r from-green-50/60 to-white dark:from-gray-900 dark:to-gray-950 text-green-700 dark:text-green-300 font-medium px-2"><svg class="fill-current text-2xl text-green-500 inline-block" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><circle cx="12.5" cy="12.5" r="7.5" fill-opacity="0.2"></circle><path d="M12.8454 17.4994C12.077 17.4994 11.3929 17.3946 10.7931 17.185C10.1933 16.9779 9.68621 16.6731 9.27188 16.2709C8.85756 15.871 8.542 15.382 8.3252 14.8039C8.1084 14.2257 8 13.5681 8 12.831C8 12.1035 8.1084 11.4435 8.3252 10.8509C8.54441 10.2583 8.86358 9.75005 9.28272 9.32608C9.70187 8.89971 10.2138 8.57211 10.8184 8.34326C11.4254 8.11442 12.1168 8 12.8924 8C13.6103 8 14.251 8.10479 14.8147 8.31436C15.3808 8.52393 15.8602 8.82263 16.2528 9.21046C16.6479 9.59588 16.9478 10.0548 17.1525 10.5871C17.3597 11.1171 17.4621 11.7036 17.4596 12.3468C17.4621 12.79 17.4235 13.1971 17.344 13.5681C17.2645 13.9391 17.1393 14.2631 16.9682 14.5401C16.7996 14.8147 16.578 15.0327 16.3034 15.1941C16.0288 15.3531 15.6963 15.4434 15.3061 15.4651C15.0267 15.4868 14.8002 15.4663 14.6268 15.4037C14.4534 15.341 14.3209 15.2483 14.2293 15.1254C14.1402 15.0002 14.0824 14.8544 14.0559 14.6882H14.0125C13.9547 14.8328 13.8415 14.9641 13.6729 15.0821C13.5043 15.1977 13.2983 15.288 13.055 15.3531C12.8141 15.4157 12.5576 15.4386 12.2854 15.4217C12.0011 15.4049 11.7313 15.3386 11.476 15.223C11.2231 15.1074 10.9978 14.94 10.8003 14.7208C10.6052 14.5015 10.451 14.2305 10.3378 13.9078C10.227 13.585 10.1704 13.2116 10.168 12.7876C10.1704 12.3685 10.2294 12.0035 10.345 11.6928C10.4631 11.3821 10.6184 11.1207 10.8112 10.9087C11.0063 10.6967 11.2231 10.5305 11.4616 10.4101C11.7 10.2896 11.9397 10.2125 12.1806 10.1788C12.4528 10.1379 12.7106 10.1379 12.9538 10.1788C13.1971 10.2198 13.4019 10.286 13.5681 10.3776C13.7367 10.4691 13.8415 10.5679 13.8825 10.6738H13.9331V10.2692H15.064V13.7957C15.0664 13.962 15.1038 14.0908 15.176 14.1824C15.2483 14.2739 15.3459 14.3197 15.4687 14.3197C15.6349 14.3197 15.7734 14.2462 15.8842 14.0993C15.9975 13.9523 16.0818 13.7271 16.1372 13.4236C16.195 13.1201 16.2239 12.7334 16.2239 12.2637C16.2239 11.8108 16.1637 11.4134 16.0432 11.0713C15.9252 10.7268 15.759 10.4342 15.5446 10.1933C15.3326 9.94998 15.0857 9.75246 14.8039 9.6007C14.522 9.44894 14.2161 9.33813 13.8861 9.26827C13.5585 9.19841 13.2212 9.16349 12.8744 9.16349C12.2745 9.16349 11.7506 9.25502 11.3026 9.4381C10.8545 9.61876 10.4811 9.8729 10.1824 10.2005C9.88374 10.5281 9.65971 10.9123 9.51036 11.3532C9.36342 11.7916 9.28875 12.2697 9.28634 12.7876C9.28875 13.3585 9.36824 13.8644 9.52482 14.3052C9.6838 14.7436 9.91746 15.1122 10.2258 15.4109C10.5341 15.7096 10.9147 15.936 11.3676 16.0902C11.8205 16.2444 12.3408 16.3215 12.9286 16.3215C13.2056 16.3215 13.4766 16.301 13.7415 16.26C14.0065 16.2215 14.2462 16.1733 14.4606 16.1155C14.675 16.0601 14.8472 16.0059 14.9773 15.9529L15.335 17.0008C15.1833 17.0875 14.9773 17.1682 14.7171 17.2428C14.4594 17.3199 14.1679 17.3814 13.8427 17.4271C13.5199 17.4753 13.1875 17.4994 12.8454 17.4994ZM12.6792 14.233C12.9731 14.233 13.2068 14.1764 13.3802 14.0631C13.5561 13.9499 13.6813 13.7825 13.756 13.5609C13.8331 13.3369 13.8692 13.061 13.8644 12.7334C13.862 12.4444 13.8247 12.1999 13.7524 11.9999C13.6825 11.7976 13.5609 11.6446 13.3874 11.541C13.2164 11.4351 12.9779 11.3821 12.672 11.3821C12.4046 11.3821 12.177 11.4387 11.9891 11.5519C11.8036 11.6651 11.6615 11.8241 11.5627 12.0288C11.4664 12.2312 11.417 12.4697 11.4146 12.7443C11.417 12.9996 11.4579 13.2417 11.5374 13.4706C11.6169 13.697 11.7482 13.8813 11.9313 14.0234C12.1144 14.1631 12.3637 14.233 12.6792 14.233Z"></path></svg><span class="text-sm text-green-500 mr-1">property</span><span> ${_}</span></div>`:`<h4 class="!m-0"><span class="flex-1 rounded-xl py-0.5 break-all bg-gradient-to-r from-blue-50/60 to-white dark:from-gray-900 dark:to-gray-950 text-blue-700 dark:text-blue-300 font-medium px-2"><svg width="1em" height="1em" viewBox="0 0 32 33" class="mr-1 inline-block -mt-0.5"  xmlns="http://www.w3.org/2000/svg"><path d="M5.80566 18.3545C4.90766 17.4565 4.90766 16.0005 5.80566 15.1025L14.3768 6.53142C15.2748 5.63342 16.7307 5.63342 17.6287 6.53142L26.1999 15.1025C27.0979 16.0005 27.0979 17.4565 26.1999 18.3545L17.6287 26.9256C16.7307 27.8236 15.2748 27.8236 14.3768 26.9256L5.80566 18.3545Z" fill="currentColor" fill-opacity="0.25"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.4801 13.9619C16.4801 12.9761 16.7467 12.5436 16.9443 12.3296C17.1764 12.078 17.5731 11.8517 18.2275 11.707C18.8821 11.5623 19.638 11.5342 20.4038 11.5582C20.7804 11.57 21.1341 11.5932 21.4719 11.6156L21.5263 11.6193C21.8195 11.6389 22.1626 11.6618 22.4429 11.6618V7.40825C22.3209 7.40825 22.1219 7.39596 21.7544 7.37149C21.4202 7.34925 20.9976 7.32115 20.5371 7.30672C19.6286 7.27824 18.4672 7.29779 17.3093 7.55377C16.1512 7.8098 14.8404 8.33724 13.8181 9.4452C12.7612 10.5907 12.2266 12.1236 12.2266 13.9619V15.0127H10.6836V19.2662H12.2266V26.6332H16.4801V19.2662H20.3394V15.0127H16.4801V13.9619Z" fill="currentColor"/></svg>${_}</span></h4>`}function q(){var L;const{hash:_}=window.location;l(0,r=_.substring(1)),f&&f.classList.remove(...Z.split(" ")),r===t&&(f=(L=document.getElementById(r))==null?void 0:L.closest(".docstring"),f&&f.classList.add(...Z.split(" ")))}const T=_=>H(`${t}.${_}`,!!y[_]),x=()=>H(`${t}.returns`,!!h),D=()=>l(11,p=!1);function M(_){je[_?"unshift":"push"](()=>{a=_,l(10,a)})}return s.$$set=_=>{"anchor"in _&&l(7,t=_.anchor),"name"in _&&l(8,o=_.name),"parameters"in _&&l(1,d=_.parameters),"parametersDescription"in _&&l(9,u=_.parametersDescription),"parameterGroups"in _&&l(2,c=_.parameterGroups),"returnDescription"in _&&l(3,h=_.returnDescription),"returnType"in _&&l(4,g=_.returnType),"source"in _&&l(5,n=_.source),"hashlink"in _&&l(0,r=_.hashlink),"isGetSetDescriptor"in _&&l(6,i=_.isGetSetDescriptor)},[r,d,c,h,g,n,i,t,o,u,a,p,y,H,z,q,T,x,D,M]}class t1 extends Ae{constructor(e){super();Se(this,e,Je,Qe,Ne,{anchor:7,name:8,parameters:1,parametersDescription:9,parameterGroups:2,returnDescription:3,returnType:4,source:5,hashlink:0,isGetSetDescriptor:6},null,[-1,-1])}}export{t1 as D};
