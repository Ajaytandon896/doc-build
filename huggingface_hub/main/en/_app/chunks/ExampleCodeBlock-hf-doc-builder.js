import{S as C,i as I,s as H,F as L,e as p,w as S,k as q,c as g,a as v,x as A,d as m,m as B,b as u,g as N,G as w,y as P,P as D,H as F,I as G,J,q as y,o as $,B as M,v as V,_ as j,$ as z}from"./vendor-hf-doc-builder.js";import{I as K}from"./IconCopyLink-hf-doc-builder.js";const{window:O}=j;function Q(o){let s,a,f,r,c,h,i,d,n;r=new K({props:{classNames:"text-smd"}});const _=o[4].default,t=L(_,o,o[3],null);return{c(){s=p("div"),a=p("a"),f=p("span"),S(r.$$.fragment),h=q(),t&&t.c(),this.h()},l(e){s=g(e,"DIV",{class:!0});var l=v(s);a=g(l,"A",{id:!0,class:!0,href:!0});var b=v(a);f=g(b,"SPAN",{});var k=v(f);A(r.$$.fragment,k),k.forEach(m),b.forEach(m),h=B(l),t&&t.l(l),l.forEach(m),this.h()},h(){u(a,"id",o[0]),u(a,"class","header-link block pr-0.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(a,"href",c=`#${o[0]}`),u(s,"class","relative group rounded-md")},m(e,l){N(e,s,l),w(s,a),w(a,f),P(r,f,null),w(s,h),t&&t.m(s,null),o[5](s),i=!0,d||(n=D(O,"hashchange",o[2]),d=!0)},p(e,[l]){(!i||l&1)&&u(a,"id",e[0]),(!i||l&1&&c!==(c=`#${e[0]}`))&&u(a,"href",c),t&&t.p&&(!i||l&8)&&F(t,_,e,e[3],i?J(_,e[3],l,null):G(e[3]),null)},i(e){i||(y(r.$$.fragment,e),y(t,e),i=!0)},o(e){$(r.$$.fragment,e),$(t,e),i=!1},d(e){e&&m(s),M(r),t&&t.d(e),o[5](null),d=!1,n()}}}const E="bg-yellow-50 dark:bg-[#494a3d]";function R(o,s,a){let{$$slots:f={},$$scope:r}=s,{anchor:c}=s,h;function i(){const{hash:n}=window.location,_=n.substring(1);h&&h.classList.remove(...E.split(" ")),_===c&&h.classList.add(...E.split(" "))}V(()=>{i()});function d(n){z[n?"unshift":"push"](()=>{h=n,a(1,h)})}return o.$$set=n=>{"anchor"in n&&a(0,c=n.anchor),"$$scope"in n&&a(3,r=n.$$scope)},[c,h,i,r,f,d]}class W extends C{constructor(s){super();I(this,s,R,Q,H,{anchor:0})}}export{W as E};
