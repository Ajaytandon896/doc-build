import{S as Ta,i as ja,s as za,e as r,k as m,w as S,t as n,M as Na,c as o,d as t,m as v,a as l,x as G,h as c,b as s,F as a,g as d,y as x,q as I,o as T,B as j,v as Ha}from"../chunks/vendor-19e06bd2.js";import{T as Ia}from"../chunks/Tip-f0fa2d82.js";import{D as fa}from"../chunks/Docstring-395e5a9c.js";import{I as Ge}from"../chunks/IconCopyLink-3c713d38.js";function Ua(Z){let i,g,u,w;return{c(){i=r("p"),g=r("code"),u=n("gradient_as_bucket_view"),w=n(" is only available in PyTorch 1.7.0 and later versions.")},l(p){i=o(p,"P",{});var f=l(i);g=o(f,"CODE",{});var y=l(g);u=c(y,"gradient_as_bucket_view"),y.forEach(t),w=c(f," is only available in PyTorch 1.7.0 and later versions."),f.forEach(t)},m(p,f){d(p,i,f),a(i,g),a(g,u),a(i,w)},d(p){p&&t(i)}}}function Ca(Z){let i,g,u,w;return{c(){i=r("p"),g=r("code"),u=n("GradScaler"),w=n(" is only available in PyTorch 1.5.0 and later versions.")},l(p){i=o(p,"P",{});var f=l(i);g=o(f,"CODE",{});var y=l(g);u=c(y,"GradScaler"),y.forEach(t),w=c(f," is only available in PyTorch 1.5.0 and later versions."),f.forEach(t)},m(p,f){d(p,i,f),a(i,g),a(g,u),a(i,w)},d(p){p&&t(i)}}}function Oa(Z){let i,g,u,w,p,f,y,ne,xe,ge,z,Ie,ee,Te,je,we,E,N,ce,q,ze,ie,Ne,$e,$,M,He,_,Ue,ae,Ce,Oe,he,Le,Fe,V,qe,Me,Ve,H,_e,A,U,fe,B,Be,de,Je,be,b,J,Re,P,Qe,te,We,Xe,ue,Ye,Ze,R,ea,aa,ta,C,Pe,D,O,pe,Q,ra,me,oa,ye,K,W,la,k,sa,re,na,ca,X,ia,ha,Ee;return f=new Ge({}),q=new Ge({}),M=new fa({props:{name:"class accelerate.DistributedDataParallelKwargs",anchor:"accelerate.DistributedDataParallelKwargs",parameters:[{name:"dim",val:": int = 0"},{name:"broadcast_buffers",val:": bool = True"},{name:"bucket_cap_mb",val:": int = 25"},{name:"find_unused_parameters",val:": bool = False"},{name:"check_reduction",val:": bool = False"},{name:"gradient_as_bucket_view",val:": bool = False"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/kwargs_handlers.py#L39"}}),H=new Ia({props:{warning:!0,$$slots:{default:[Ua]},$$scope:{ctx:Z}}}),B=new Ge({}),J=new fa({props:{name:"class accelerate.GradScalerKwargs",anchor:"accelerate.GradScalerKwargs",parameters:[{name:"init_scale",val:": float = 65536.0"},{name:"growth_factor",val:": float = 2.0"},{name:"backoff_factor",val:": float = 0.5"},{name:"growth_interval",val:": int = 2000"},{name:"enabled",val:": bool = True"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/kwargs_handlers.py#L61"}}),C=new Ia({props:{warning:!0,$$slots:{default:[Ca]},$$scope:{ctx:Z}}}),Q=new Ge({}),W=new fa({props:{name:"class accelerate.InitProcessGroupKwargs",anchor:"accelerate.InitProcessGroupKwargs",parameters:[{name:"init_method",val:": typing.Optional[str] = None"},{name:"timeout",val:": timedelta = datetime.timedelta(seconds=1800)"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/kwargs_handlers.py#L81"}}),{c(){i=r("meta"),g=m(),u=r("h1"),w=r("a"),p=r("span"),S(f.$$.fragment),y=m(),ne=r("span"),xe=n("Kwargs Handlers"),ge=m(),z=r("p"),Ie=n("The following objects can be passed to the main "),ee=r("a"),Te=n("Accelerator"),je=n(` to customize how some PyTorch objects
related to distributed training or mixed precision are created.`),we=m(),E=r("h2"),N=r("a"),ce=r("span"),S(q.$$.fragment),ze=m(),ie=r("span"),Ne=n("DistributedDataParallelKwargs"),$e=m(),$=r("div"),S(M.$$.fragment),He=m(),_=r("p"),Ue=n("Use this object in your "),ae=r("a"),Ce=n("Accelerator"),Oe=n(` to customize how your model is wrapped in a
`),he=r("code"),Le=n("torch.nn.parallel.DistributedDataParallel"),Fe=n(`. Please refer to the documentation of this
`),V=r("a"),qe=n("wrapper"),Me=n(` for more
information on each argument.`),Ve=m(),S(H.$$.fragment),_e=m(),A=r("h2"),U=r("a"),fe=r("span"),S(B.$$.fragment),Be=m(),de=r("span"),Je=n("GradScalerKwargs"),be=m(),b=r("div"),S(J.$$.fragment),Re=m(),P=r("p"),Qe=n("Use this object in your "),te=r("a"),We=n("Accelerator"),Xe=n(` to customize the behavior of mixed precision, specifically how the
`),ue=r("code"),Ye=n("torch.cuda.amp.GradScaler"),Ze=n(` used is created. Please refer to the documentation of this
`),R=r("a"),ea=n("scaler"),aa=n(" for more information on each argument."),ta=m(),S(C.$$.fragment),Pe=m(),D=r("h2"),O=r("a"),pe=r("span"),S(Q.$$.fragment),ra=m(),me=r("span"),oa=n("InitProcessGroupKwargs"),ye=m(),K=r("div"),S(W.$$.fragment),la=m(),k=r("p"),sa=n("Use this object in your "),re=r("a"),na=n("Accelerator"),ca=n(` to customize the initialization of the distributed processes. Please refer
to the documentation of this
`),X=r("a"),ia=n("method"),ha=n(` for more
information on each argument.`),this.h()},l(e){const h=Na('[data-svelte="svelte-1phssyn"]',document.head);i=o(h,"META",{name:!0,content:!0}),h.forEach(t),g=v(e),u=o(e,"H1",{class:!0});var Y=l(u);w=o(Y,"A",{id:!0,class:!0,href:!0});var ve=l(w);p=o(ve,"SPAN",{});var da=l(p);G(f.$$.fragment,da),da.forEach(t),ve.forEach(t),y=v(Y),ne=o(Y,"SPAN",{});var ua=l(ne);xe=c(ua,"Kwargs Handlers"),ua.forEach(t),Y.forEach(t),ge=v(e),z=o(e,"P",{});var Ae=l(z);Ie=c(Ae,"The following objects can be passed to the main "),ee=o(Ae,"A",{href:!0});var pa=l(ee);Te=c(pa,"Accelerator"),pa.forEach(t),je=c(Ae,` to customize how some PyTorch objects
related to distributed training or mixed precision are created.`),Ae.forEach(t),we=v(e),E=o(e,"H2",{class:!0});var De=l(E);N=o(De,"A",{id:!0,class:!0,href:!0});var ma=l(N);ce=o(ma,"SPAN",{});var va=l(ce);G(q.$$.fragment,va),va.forEach(t),ma.forEach(t),ze=v(De),ie=o(De,"SPAN",{});var ga=l(ie);Ne=c(ga,"DistributedDataParallelKwargs"),ga.forEach(t),De.forEach(t),$e=v(e),$=o(e,"DIV",{class:!0});var oe=l($);G(M.$$.fragment,oe),He=v(oe),_=o(oe,"P",{});var L=l(_);Ue=c(L,"Use this object in your "),ae=o(L,"A",{href:!0});var wa=l(ae);Ce=c(wa,"Accelerator"),wa.forEach(t),Oe=c(L,` to customize how your model is wrapped in a
`),he=o(L,"CODE",{});var $a=l(he);Le=c($a,"torch.nn.parallel.DistributedDataParallel"),$a.forEach(t),Fe=c(L,`. Please refer to the documentation of this
`),V=o(L,"A",{href:!0,rel:!0});var _a=l(V);qe=c(_a,"wrapper"),_a.forEach(t),Me=c(L,` for more
information on each argument.`),L.forEach(t),Ve=v(oe),G(H.$$.fragment,oe),oe.forEach(t),_e=v(e),A=o(e,"H2",{class:!0});var Ke=l(A);U=o(Ke,"A",{id:!0,class:!0,href:!0});var ba=l(U);fe=o(ba,"SPAN",{});var Pa=l(fe);G(B.$$.fragment,Pa),Pa.forEach(t),ba.forEach(t),Be=v(Ke),de=o(Ke,"SPAN",{});var ya=l(de);Je=c(ya,"GradScalerKwargs"),ya.forEach(t),Ke.forEach(t),be=v(e),b=o(e,"DIV",{class:!0});var le=l(b);G(J.$$.fragment,le),Re=v(le),P=o(le,"P",{});var F=l(P);Qe=c(F,"Use this object in your "),te=o(F,"A",{href:!0});var Ea=l(te);We=c(Ea,"Accelerator"),Ea.forEach(t),Xe=c(F,` to customize the behavior of mixed precision, specifically how the
`),ue=o(F,"CODE",{});var Aa=l(ue);Ye=c(Aa,"torch.cuda.amp.GradScaler"),Aa.forEach(t),Ze=c(F,` used is created. Please refer to the documentation of this
`),R=o(F,"A",{href:!0,rel:!0});var Da=l(R);ea=c(Da,"scaler"),Da.forEach(t),aa=c(F," for more information on each argument."),F.forEach(t),ta=v(le),G(C.$$.fragment,le),le.forEach(t),Pe=v(e),D=o(e,"H2",{class:!0});var ke=l(D);O=o(ke,"A",{id:!0,class:!0,href:!0});var Ka=l(O);pe=o(Ka,"SPAN",{});var ka=l(pe);G(Q.$$.fragment,ka),ka.forEach(t),Ka.forEach(t),ra=v(ke),me=o(ke,"SPAN",{});var Sa=l(me);oa=c(Sa,"InitProcessGroupKwargs"),Sa.forEach(t),ke.forEach(t),ye=v(e),K=o(e,"DIV",{class:!0});var Se=l(K);G(W.$$.fragment,Se),la=v(Se),k=o(Se,"P",{});var se=l(k);sa=c(se,"Use this object in your "),re=o(se,"A",{href:!0});var Ga=l(re);na=c(Ga,"Accelerator"),Ga.forEach(t),ca=c(se,` to customize the initialization of the distributed processes. Please refer
to the documentation of this
`),X=o(se,"A",{href:!0,rel:!0});var xa=l(X);ia=c(xa,"method"),xa.forEach(t),ha=c(se,` for more
information on each argument.`),se.forEach(t),Se.forEach(t),this.h()},h(){s(i,"name","hf:doc:metadata"),s(i,"content",JSON.stringify(La)),s(w,"id","kwargs-handlers"),s(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(w,"href","#kwargs-handlers"),s(u,"class","relative group"),s(ee,"href","/docs/accelerate/main/en/accelerator#accelerate.Accelerator"),s(N,"id","accelerate.DistributedDataParallelKwargs"),s(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(N,"href","#accelerate.DistributedDataParallelKwargs"),s(E,"class","relative group"),s(ae,"href","/docs/accelerate/main/en/accelerator#accelerate.Accelerator"),s(V,"href","https://pytorch.org/docs/stable/generated/torch.nn.parallel.DistributedDataParallel.html"),s(V,"rel","nofollow"),s($,"class","docstring"),s(U,"id","accelerate.GradScalerKwargs"),s(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(U,"href","#accelerate.GradScalerKwargs"),s(A,"class","relative group"),s(te,"href","/docs/accelerate/main/en/accelerator#accelerate.Accelerator"),s(R,"href","https://pytorch.org/docs/stable/amp.html?highlight=gradscaler"),s(R,"rel","nofollow"),s(b,"class","docstring"),s(O,"id","accelerate.InitProcessGroupKwargs"),s(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(O,"href","#accelerate.InitProcessGroupKwargs"),s(D,"class","relative group"),s(re,"href","/docs/accelerate/main/en/accelerator#accelerate.Accelerator"),s(X,"href","https://pytorch.org/docs/stable/distributed.html#torch.distributed.init_process_group"),s(X,"rel","nofollow"),s(K,"class","docstring")},m(e,h){a(document.head,i),d(e,g,h),d(e,u,h),a(u,w),a(w,p),x(f,p,null),a(u,y),a(u,ne),a(ne,xe),d(e,ge,h),d(e,z,h),a(z,Ie),a(z,ee),a(ee,Te),a(z,je),d(e,we,h),d(e,E,h),a(E,N),a(N,ce),x(q,ce,null),a(E,ze),a(E,ie),a(ie,Ne),d(e,$e,h),d(e,$,h),x(M,$,null),a($,He),a($,_),a(_,Ue),a(_,ae),a(ae,Ce),a(_,Oe),a(_,he),a(he,Le),a(_,Fe),a(_,V),a(V,qe),a(_,Me),a($,Ve),x(H,$,null),d(e,_e,h),d(e,A,h),a(A,U),a(U,fe),x(B,fe,null),a(A,Be),a(A,de),a(de,Je),d(e,be,h),d(e,b,h),x(J,b,null),a(b,Re),a(b,P),a(P,Qe),a(P,te),a(te,We),a(P,Xe),a(P,ue),a(ue,Ye),a(P,Ze),a(P,R),a(R,ea),a(P,aa),a(b,ta),x(C,b,null),d(e,Pe,h),d(e,D,h),a(D,O),a(O,pe),x(Q,pe,null),a(D,ra),a(D,me),a(me,oa),d(e,ye,h),d(e,K,h),x(W,K,null),a(K,la),a(K,k),a(k,sa),a(k,re),a(re,na),a(k,ca),a(k,X),a(X,ia),a(k,ha),Ee=!0},p(e,[h]){const Y={};h&2&&(Y.$$scope={dirty:h,ctx:e}),H.$set(Y);const ve={};h&2&&(ve.$$scope={dirty:h,ctx:e}),C.$set(ve)},i(e){Ee||(I(f.$$.fragment,e),I(q.$$.fragment,e),I(M.$$.fragment,e),I(H.$$.fragment,e),I(B.$$.fragment,e),I(J.$$.fragment,e),I(C.$$.fragment,e),I(Q.$$.fragment,e),I(W.$$.fragment,e),Ee=!0)},o(e){T(f.$$.fragment,e),T(q.$$.fragment,e),T(M.$$.fragment,e),T(H.$$.fragment,e),T(B.$$.fragment,e),T(J.$$.fragment,e),T(C.$$.fragment,e),T(Q.$$.fragment,e),T(W.$$.fragment,e),Ee=!1},d(e){t(i),e&&t(g),e&&t(u),j(f),e&&t(ge),e&&t(z),e&&t(we),e&&t(E),j(q),e&&t($e),e&&t($),j(M),j(H),e&&t(_e),e&&t(A),j(B),e&&t(be),e&&t(b),j(J),j(C),e&&t(Pe),e&&t(D),j(Q),e&&t(ye),e&&t(K),j(W)}}}const La={local:"kwargs-handlers",sections:[{local:"accelerate.DistributedDataParallelKwargs",title:"DistributedDataParallelKwargs"},{local:"accelerate.GradScalerKwargs",title:"GradScalerKwargs"},{local:"accelerate.InitProcessGroupKwargs",title:"InitProcessGroupKwargs"}],title:"Kwargs Handlers"};function Fa(Z){return Ha(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ja extends Ta{constructor(i){super();ja(this,i,Fa,Oa,za,{})}}export{Ja as default,La as metadata};
