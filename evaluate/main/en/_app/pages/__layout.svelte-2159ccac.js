import{S as W,i as X,s as Z,l as A,g,q as j,o as C,d as _,e as k,t as V,k as D,c as y,a as x,h as $,m as S,b as v,F as w,j as L,G as F,H as O,f as m,I as P,J as Q,K as R}from"../chunks/vendor-e830fc9c.js";import{b as H}from"../chunks/paths-4b3c6e7e.js";function N(n,e,s){const a=n.slice();return a[3]=e[s],a}function T(n,e,s){const a=n.slice();return a[6]=e[s],a}function Y(n,e,s){const a=n.slice();return a[9]=e[s],a}function ee(n){let e,s,a,l,t,i,h,r,o,f,c=n[0],d=[];for(let u=0;u<c.length;u+=1)d[u]=M(N(n,c,u));const q=n[2].default,b=O(q,n,n[1],null);return{c(){e=k("style"),s=V(`body,
		html {
			padding: 0;
			margin: 0;
		}`),a=D(),l=k("div"),t=k("aside"),i=k("ul");for(let u=0;u<d.length;u+=1)d[u].c();h=D(),r=k("div"),o=k("div"),b&&b.c(),this.h()},l(u){e=y(u,"STYLE",{});var E=x(e);s=$(E,`body,
		html {
			padding: 0;
			margin: 0;
		}`),E.forEach(_),a=S(u),l=y(u,"DIV",{style:!0});var p=x(l);t=y(p,"ASIDE",{style:!0});var I=x(t);i=y(I,"UL",{class:!0});var G=x(i);for(let U=0;U<d.length;U+=1)d[U].l(G);G.forEach(_),I.forEach(_),h=S(p),r=y(p,"DIV",{style:!0,class:!0});var J=x(r);o=y(J,"DIV",{class:!0});var K=x(o);b&&b.l(K),K.forEach(_),J.forEach(_),p.forEach(_),this.h()},h(){v(i,"class","pt-2 flex flex-col pl-3"),m(t,"width","270px"),m(t,"min-width","270px"),m(t,"max-width","270px"),m(t,"border-right","1px solid gray"),m(t,"height","100vh"),m(t,"position","fixed"),m(t,"overflow-y","auto"),m(t,"display","flex"),m(t,"flex-direction","column"),v(o,"class","prose prose-doc dark:prose-light max-w-4xl mx-auto break-words relative"),m(r,"margin-left","270px"),v(r,"class","px-4 pt-3"),m(l,"width","100vh"),m(l,"height","100vh"),m(l,"margin","0"),m(l,"padding","0"),m(l,"display","flex"),m(l,"flex-direction","row")},m(u,E){g(u,e,E),w(e,s),g(u,a,E),g(u,l,E),w(l,t),w(t,i);for(let p=0;p<d.length;p+=1)d[p].m(i,null);w(l,h),w(l,r),w(r,o),b&&b.m(o,null),f=!0},p(u,E){if(E&1){c=u[0];let p;for(p=0;p<c.length;p+=1){const I=N(u,c,p);d[p]?d[p].p(I,E):(d[p]=M(I),d[p].c(),d[p].m(i,null))}for(;p<d.length;p+=1)d[p].d(1);d.length=c.length}b&&b.p&&(!f||E&2)&&P(b,q,u,u[1],f?R(q,u[1],E,null):Q(u[1]),null)},i(u){f||(j(b,u),f=!0)},o(u){C(b,u),f=!1},d(u){u&&_(e),u&&_(a),u&&_(l),F(d,u),b&&b.d(u)}}}function te(n){let e;const s=n[2].default,a=O(s,n,n[1],null);return{c(){a&&a.c()},l(l){a&&a.l(l)},m(l,t){a&&a.m(l,t),e=!0},p(l,t){a&&a.p&&(!e||t&2)&&P(a,s,l,l[1],e?R(s,l[1],t,null):Q(l[1]),null)},i(l){e||(j(a,l),e=!0)},o(l){C(a,l),e=!1},d(l){a&&a.d(l)}}}function le(n){let e,s=n[6].title+"",a,l;return{c(){e=k("a"),a=V(s),this.h()},l(t){e=y(t,"A",{role:!0,class:!0,href:!0});var i=x(e);a=$(i,s),i.forEach(_),this.h()},h(){v(e,"role","navigation"),v(e,"class","block text-gray-500 pr-2 hover:text-black dark:hover:text-gray-300 py-1 transform transition-all hover:translate-x-px first:mt-1 last:mb-4 pl-2 ml-2"),v(e,"href",l=H+"/"+n[6].local.replace(/\bindex$/,""))},m(t,i){g(t,e,i),w(e,a)},p(t,i){i&1&&s!==(s=t[6].title+"")&&L(a,s),i&1&&l!==(l=H+"/"+t[6].local.replace(/\bindex$/,""))&&v(e,"href",l)},d(t){t&&_(e)}}}function re(n){let e,s=n[6].title+"",a,l,t,i=n[6].sections,h=[];for(let r=0;r<i.length;r+=1)h[r]=z(Y(n,i,r));return{c(){e=k("h3"),a=V(s),l=D(),t=k("ul");for(let r=0;r<h.length;r+=1)h[r].c();this.h()},l(r){e=y(r,"H3",{class:!0});var o=x(e);a=$(o,s),o.forEach(_),l=S(r),t=y(r,"UL",{class:!0});var f=x(t);for(let c=0;c<h.length;c+=1)h[c].l(f);f.forEach(_),this.h()},h(){v(e,"class","flex group-hover:after:content-['\u25B6'] after:absolute after:right-4 after:text-gray-500 after:transition after:duration-100 after:ease-in after:transform after:rotate-90"),v(t,"class","pt-2 flex flex-col pl-3")},m(r,o){g(r,e,o),w(e,a),g(r,l,o),g(r,t,o);for(let f=0;f<h.length;f+=1)h[f].m(t,null)},p(r,o){if(o&1&&s!==(s=r[6].title+"")&&L(a,s),o&1){i=r[6].sections;let f;for(f=0;f<i.length;f+=1){const c=Y(r,i,f);h[f]?h[f].p(c,o):(h[f]=z(c),h[f].c(),h[f].m(t,null))}for(;f<h.length;f+=1)h[f].d(1);h.length=i.length}},d(r){r&&_(e),r&&_(l),r&&_(t),F(h,r)}}}function z(n){let e,s=n[9].title+"",a,l;return{c(){e=k("a"),a=V(s),this.h()},l(t){e=y(t,"A",{role:!0,class:!0,href:!0});var i=x(e);a=$(i,s),i.forEach(_),this.h()},h(){v(e,"role","navigation"),v(e,"class","block text-gray-500 pr-2 hover:text-black dark:hover:text-gray-300 py-1 transform transition-all hover:translate-x-px first:mt-1 last:mb-4 pl-2 ml-2"),v(e,"href",l=H+"/"+n[9].local.replace(/\bindex$/,""))},m(t,i){g(t,e,i),w(e,a)},p(t,i){i&1&&s!==(s=t[9].title+"")&&L(a,s),i&1&&l!==(l=H+"/"+t[9].local.replace(/\bindex$/,""))&&v(e,"href",l)},d(t){t&&_(e)}}}function B(n){let e;function s(t,i){return"sections"in t[6]?re:le}let a=s(n),l=a(n);return{c(){l.c(),e=A()},l(t){l.l(t),e=A()},m(t,i){l.m(t,i),g(t,e,i)},p(t,i){a===(a=s(t))&&l?l.p(t,i):(l.d(1),l=a(t),l&&(l.c(),l.m(e.parentNode,e)))},d(t){l.d(t),t&&_(e)}}}function M(n){let e,s=n[3].title+"",a,l,t,i,h=n[3].sections,r=[];for(let o=0;o<h.length;o+=1)r[o]=B(T(n,h,o));return{c(){e=k("h3"),a=V(s),l=D(),t=k("div");for(let o=0;o<r.length;o+=1)r[o].c();i=D(),this.h()},l(o){e=y(o,"H3",{class:!0});var f=x(e);a=$(f,s),f.forEach(_),l=S(o),t=y(o,"DIV",{class:!0});var c=x(t);for(let d=0;d<r.length;d+=1)r[d].l(c);i=S(c),c.forEach(_),this.h()},h(){v(e,"class","flex group-hover:after:content-['\u25B6'] after:absolute after:right-4 after:text-gray-500 after:transition after:duration-100 after:ease-in after:transform after:rotate-90"),v(t,"class","pl-4")},m(o,f){g(o,e,f),w(e,a),g(o,l,f),g(o,t,f);for(let c=0;c<r.length;c+=1)r[c].m(t,null);w(t,i)},p(o,f){if(f&1&&s!==(s=o[3].title+"")&&L(a,s),f&1){h=o[3].sections;let c;for(c=0;c<h.length;c+=1){const d=T(o,h,c);r[c]?r[c].p(d,f):(r[c]=B(d),r[c].c(),r[c].m(t,i))}for(;c<r.length;c+=1)r[c].d(1);r.length=h.length}},d(o){o&&_(e),o&&_(l),o&&_(t),F(r,o)}}}function ae(n){let e,s,a,l;const t=[te,ee],i=[];function h(r,o){return 0}return e=h(),s=i[e]=t[e](n),{c(){s.c(),a=A()},l(r){s.l(r),a=A()},m(r,o){i[e].m(r,o),g(r,a,o),l=!0},p(r,[o]){s.p(r,o)},i(r){l||(j(s),l=!0)},o(r){C(s),l=!1},d(r){i[e].d(r),r&&_(a)}}}async function ne(n){return{}}function se(n,e,s){let{$$slots:a={},$$scope:l}=e,{toc:t}=e;return n.$$set=i=>{"toc"in i&&s(0,t=i.toc),"$$scope"in i&&s(1,l=i.$$scope)},[t,l,a]}class fe extends W{constructor(e){super();X(this,e,se,ae,Z,{toc:0})}}export{fe as default,ne as load};
