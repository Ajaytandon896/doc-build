import{S as Ia,i as ja,s as za,e as r,k as p,w as I,t as s,M as Na,c as o,d as t,m as u,a as l,x as j,h as n,b as c,G as a,g as d,y as z,q as N,o as C,B as H,v as Ca}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ta}from"../../chunks/Tip-hf-doc-builder.js";import{D as fa}from"../../chunks/Docstring-hf-doc-builder.js";import{I as Ie}from"../../chunks/IconCopyLink-hf-doc-builder.js";function Ha(re){let i,v,m,g,_,f,b,K,B;return{c(){i=r("p"),v=r("code"),m=s("gradient_as_bucket_view"),g=s(" is only available in PyTorch 1.7.0 and later versions."),_=p(),f=r("p"),b=r("code"),K=s("static_graph"),B=s(" is only available in PyTorch 1.11.0 and later versions.")},l($){i=o($,"P",{});var w=l(i);v=o(w,"CODE",{});var oe=l(v);m=n(oe,"gradient_as_bucket_view"),oe.forEach(t),g=n(w," is only available in PyTorch 1.7.0 and later versions."),w.forEach(t),_=u($),f=o($,"P",{});var D=l(f);b=o(D,"CODE",{});var le=l(b);K=n(le,"static_graph"),le.forEach(t),B=n(D," is only available in PyTorch 1.11.0 and later versions."),D.forEach(t)},m($,w){d($,i,w),a(i,v),a(v,m),a(i,g),d($,_,w),d($,f,w),a(f,b),a(b,K),a(f,B)},d($){$&&t(i),$&&t(_),$&&t(f)}}}function Oa(re){let i,v,m,g;return{c(){i=r("p"),v=r("code"),m=s("GradScaler"),g=s(" is only available in PyTorch 1.5.0 and later versions.")},l(_){i=o(_,"P",{});var f=l(i);v=o(f,"CODE",{});var b=l(v);m=n(b,"GradScaler"),b.forEach(t),g=n(f," is only available in PyTorch 1.5.0 and later versions."),f.forEach(t)},m(_,f){d(_,i,f),a(i,v),a(v,m),a(i,g)},d(_){_&&t(i)}}}function Ua(re){let i,v,m,g,_,f,b,K,B,$,w,oe,D,le,je,be,k,O,de,J,ze,pe,Ne,ye,y,R,Ce,P,He,se,Oe,Ue,ue,Le,Fe,Q,qe,Me,Ve,U,Pe,S,L,me,W,Be,ve,Je,Ee,E,X,Re,A,Qe,ne,We,Xe,ge,Ye,Ze,Y,ea,aa,ta,F,Ae,G,q,_e,Z,ra,$e,oa,De,x,ee,la,T,sa,ce,na,ca,ae,ia,ha,Ke;return f=new Ie({}),J=new Ie({}),R=new fa({props:{name:"class accelerate.DistributedDataParallelKwargs",anchor:"accelerate.DistributedDataParallelKwargs",parameters:[{name:"dim",val:": int = 0"},{name:"broadcast_buffers",val:": bool = True"},{name:"bucket_cap_mb",val:": int = 25"},{name:"find_unused_parameters",val:": bool = False"},{name:"check_reduction",val:": bool = False"},{name:"gradient_as_bucket_view",val:": bool = False"},{name:"static_graph",val:": bool = False"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/utils/dataclasses.py#L54"}}),U=new Ta({props:{warning:!0,$$slots:{default:[Ha]},$$scope:{ctx:re}}}),W=new Ie({}),X=new fa({props:{name:"class accelerate.GradScalerKwargs",anchor:"accelerate.GradScalerKwargs",parameters:[{name:"init_scale",val:": float = 65536.0"},{name:"growth_factor",val:": float = 2.0"},{name:"backoff_factor",val:": float = 0.5"},{name:"growth_interval",val:": int = 2000"},{name:"enabled",val:": bool = True"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/utils/dataclasses.py#L79"}}),F=new Ta({props:{warning:!0,$$slots:{default:[Oa]},$$scope:{ctx:re}}}),Z=new Ie({}),ee=new fa({props:{name:"class accelerate.InitProcessGroupKwargs",anchor:"accelerate.InitProcessGroupKwargs",parameters:[{name:"init_method",val:": typing.Optional[str] = None"},{name:"timeout",val:": timedelta = datetime.timedelta(seconds=1800)"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/utils/dataclasses.py#L99"}}),{c(){i=r("meta"),v=p(),m=r("h1"),g=r("a"),_=r("span"),I(f.$$.fragment),b=p(),K=r("span"),B=s("Kwargs Handlers"),$=p(),w=r("p"),oe=s("The following objects can be passed to the main "),D=r("a"),le=s("Accelerator"),je=s(` to customize how some PyTorch objects
related to distributed training or mixed precision are created.`),be=p(),k=r("h2"),O=r("a"),de=r("span"),I(J.$$.fragment),ze=p(),pe=r("span"),Ne=s("DistributedDataParallelKwargs"),ye=p(),y=r("div"),I(R.$$.fragment),Ce=p(),P=r("p"),He=s("Use this object in your "),se=r("a"),Oe=s("Accelerator"),Ue=s(` to customize how your model is wrapped in a
`),ue=r("code"),Le=s("torch.nn.parallel.DistributedDataParallel"),Fe=s(`. Please refer to the documentation of this
`),Q=r("a"),qe=s("wrapper"),Me=s(` for more
information on each argument.`),Ve=p(),I(U.$$.fragment),Pe=p(),S=r("h2"),L=r("a"),me=r("span"),I(W.$$.fragment),Be=p(),ve=r("span"),Je=s("GradScalerKwargs"),Ee=p(),E=r("div"),I(X.$$.fragment),Re=p(),A=r("p"),Qe=s("Use this object in your "),ne=r("a"),We=s("Accelerator"),Xe=s(` to customize the behavior of mixed precision, specifically how the
`),ge=r("code"),Ye=s("torch.cuda.amp.GradScaler"),Ze=s(` used is created. Please refer to the documentation of this
`),Y=r("a"),ea=s("scaler"),aa=s(" for more information on each argument."),ta=p(),I(F.$$.fragment),Ae=p(),G=r("h2"),q=r("a"),_e=r("span"),I(Z.$$.fragment),ra=p(),$e=r("span"),oa=s("InitProcessGroupKwargs"),De=p(),x=r("div"),I(ee.$$.fragment),la=p(),T=r("p"),sa=s("Use this object in your "),ce=r("a"),na=s("Accelerator"),ca=s(` to customize the initialization of the distributed processes. Please refer
to the documentation of this
`),ae=r("a"),ia=s("method"),ha=s(` for more
information on each argument.`),this.h()},l(e){const h=Na('[data-svelte="svelte-1phssyn"]',document.head);i=o(h,"META",{name:!0,content:!0}),h.forEach(t),v=u(e),m=o(e,"H1",{class:!0});var te=l(m);g=o(te,"A",{id:!0,class:!0,href:!0});var we=l(g);_=o(we,"SPAN",{});var da=l(_);j(f.$$.fragment,da),da.forEach(t),we.forEach(t),b=u(te),K=o(te,"SPAN",{});var pa=l(K);B=n(pa,"Kwargs Handlers"),pa.forEach(t),te.forEach(t),$=u(e),w=o(e,"P",{});var ke=l(w);oe=n(ke,"The following objects can be passed to the main "),D=o(ke,"A",{href:!0});var ua=l(D);le=n(ua,"Accelerator"),ua.forEach(t),je=n(ke,` to customize how some PyTorch objects
related to distributed training or mixed precision are created.`),ke.forEach(t),be=u(e),k=o(e,"H2",{class:!0});var Se=l(k);O=o(Se,"A",{id:!0,class:!0,href:!0});var ma=l(O);de=o(ma,"SPAN",{});var va=l(de);j(J.$$.fragment,va),va.forEach(t),ma.forEach(t),ze=u(Se),pe=o(Se,"SPAN",{});var ga=l(pe);Ne=n(ga,"DistributedDataParallelKwargs"),ga.forEach(t),Se.forEach(t),ye=u(e),y=o(e,"DIV",{class:!0});var ie=l(y);j(R.$$.fragment,ie),Ce=u(ie),P=o(ie,"P",{});var M=l(P);He=n(M,"Use this object in your "),se=o(M,"A",{href:!0});var _a=l(se);Oe=n(_a,"Accelerator"),_a.forEach(t),Ue=n(M,` to customize how your model is wrapped in a
`),ue=o(M,"CODE",{});var $a=l(ue);Le=n($a,"torch.nn.parallel.DistributedDataParallel"),$a.forEach(t),Fe=n(M,`. Please refer to the documentation of this
`),Q=o(M,"A",{href:!0,rel:!0});var wa=l(Q);qe=n(wa,"wrapper"),wa.forEach(t),Me=n(M,` for more
information on each argument.`),M.forEach(t),Ve=u(ie),j(U.$$.fragment,ie),ie.forEach(t),Pe=u(e),S=o(e,"H2",{class:!0});var Ge=l(S);L=o(Ge,"A",{id:!0,class:!0,href:!0});var ba=l(L);me=o(ba,"SPAN",{});var ya=l(me);j(W.$$.fragment,ya),ya.forEach(t),ba.forEach(t),Be=u(Ge),ve=o(Ge,"SPAN",{});var Pa=l(ve);Je=n(Pa,"GradScalerKwargs"),Pa.forEach(t),Ge.forEach(t),Ee=u(e),E=o(e,"DIV",{class:!0});var he=l(E);j(X.$$.fragment,he),Re=u(he),A=o(he,"P",{});var V=l(A);Qe=n(V,"Use this object in your "),ne=o(V,"A",{href:!0});var Ea=l(ne);We=n(Ea,"Accelerator"),Ea.forEach(t),Xe=n(V,` to customize the behavior of mixed precision, specifically how the
`),ge=o(V,"CODE",{});var Aa=l(ge);Ye=n(Aa,"torch.cuda.amp.GradScaler"),Aa.forEach(t),Ze=n(V,` used is created. Please refer to the documentation of this
`),Y=o(V,"A",{href:!0,rel:!0});var Da=l(Y);ea=n(Da,"scaler"),Da.forEach(t),aa=n(V," for more information on each argument."),V.forEach(t),ta=u(he),j(F.$$.fragment,he),he.forEach(t),Ae=u(e),G=o(e,"H2",{class:!0});var xe=l(G);q=o(xe,"A",{id:!0,class:!0,href:!0});var Ka=l(q);_e=o(Ka,"SPAN",{});var ka=l(_e);j(Z.$$.fragment,ka),ka.forEach(t),Ka.forEach(t),ra=u(xe),$e=o(xe,"SPAN",{});var Sa=l($e);oa=n(Sa,"InitProcessGroupKwargs"),Sa.forEach(t),xe.forEach(t),De=u(e),x=o(e,"DIV",{class:!0});var Te=l(x);j(ee.$$.fragment,Te),la=u(Te),T=o(Te,"P",{});var fe=l(T);sa=n(fe,"Use this object in your "),ce=o(fe,"A",{href:!0});var Ga=l(ce);na=n(Ga,"Accelerator"),Ga.forEach(t),ca=n(fe,` to customize the initialization of the distributed processes. Please refer
to the documentation of this
`),ae=o(fe,"A",{href:!0,rel:!0});var xa=l(ae);ia=n(xa,"method"),xa.forEach(t),ha=n(fe,` for more
information on each argument.`),fe.forEach(t),Te.forEach(t),this.h()},h(){c(i,"name","hf:doc:metadata"),c(i,"content",JSON.stringify(La)),c(g,"id","kwargs-handlers"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#kwargs-handlers"),c(m,"class","relative group"),c(D,"href","/docs/accelerate/main/en/package_reference/accelerator#accelerate.Accelerator"),c(O,"id","accelerate.DistributedDataParallelKwargs"),c(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(O,"href","#accelerate.DistributedDataParallelKwargs"),c(k,"class","relative group"),c(se,"href","/docs/accelerate/main/en/package_reference/accelerator#accelerate.Accelerator"),c(Q,"href","https://pytorch.org/docs/stable/generated/torch.nn.parallel.DistributedDataParallel.html"),c(Q,"rel","nofollow"),c(y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(L,"id","accelerate.GradScalerKwargs"),c(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(L,"href","#accelerate.GradScalerKwargs"),c(S,"class","relative group"),c(ne,"href","/docs/accelerate/main/en/package_reference/accelerator#accelerate.Accelerator"),c(Y,"href","https://pytorch.org/docs/stable/amp.html?highlight=gradscaler"),c(Y,"rel","nofollow"),c(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(q,"id","accelerate.InitProcessGroupKwargs"),c(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(q,"href","#accelerate.InitProcessGroupKwargs"),c(G,"class","relative group"),c(ce,"href","/docs/accelerate/main/en/package_reference/accelerator#accelerate.Accelerator"),c(ae,"href","https://pytorch.org/docs/stable/distributed.html#torch.distributed.init_process_group"),c(ae,"rel","nofollow"),c(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,h){a(document.head,i),d(e,v,h),d(e,m,h),a(m,g),a(g,_),z(f,_,null),a(m,b),a(m,K),a(K,B),d(e,$,h),d(e,w,h),a(w,oe),a(w,D),a(D,le),a(w,je),d(e,be,h),d(e,k,h),a(k,O),a(O,de),z(J,de,null),a(k,ze),a(k,pe),a(pe,Ne),d(e,ye,h),d(e,y,h),z(R,y,null),a(y,Ce),a(y,P),a(P,He),a(P,se),a(se,Oe),a(P,Ue),a(P,ue),a(ue,Le),a(P,Fe),a(P,Q),a(Q,qe),a(P,Me),a(y,Ve),z(U,y,null),d(e,Pe,h),d(e,S,h),a(S,L),a(L,me),z(W,me,null),a(S,Be),a(S,ve),a(ve,Je),d(e,Ee,h),d(e,E,h),z(X,E,null),a(E,Re),a(E,A),a(A,Qe),a(A,ne),a(ne,We),a(A,Xe),a(A,ge),a(ge,Ye),a(A,Ze),a(A,Y),a(Y,ea),a(A,aa),a(E,ta),z(F,E,null),d(e,Ae,h),d(e,G,h),a(G,q),a(q,_e),z(Z,_e,null),a(G,ra),a(G,$e),a($e,oa),d(e,De,h),d(e,x,h),z(ee,x,null),a(x,la),a(x,T),a(T,sa),a(T,ce),a(ce,na),a(T,ca),a(T,ae),a(ae,ia),a(T,ha),Ke=!0},p(e,[h]){const te={};h&2&&(te.$$scope={dirty:h,ctx:e}),U.$set(te);const we={};h&2&&(we.$$scope={dirty:h,ctx:e}),F.$set(we)},i(e){Ke||(N(f.$$.fragment,e),N(J.$$.fragment,e),N(R.$$.fragment,e),N(U.$$.fragment,e),N(W.$$.fragment,e),N(X.$$.fragment,e),N(F.$$.fragment,e),N(Z.$$.fragment,e),N(ee.$$.fragment,e),Ke=!0)},o(e){C(f.$$.fragment,e),C(J.$$.fragment,e),C(R.$$.fragment,e),C(U.$$.fragment,e),C(W.$$.fragment,e),C(X.$$.fragment,e),C(F.$$.fragment,e),C(Z.$$.fragment,e),C(ee.$$.fragment,e),Ke=!1},d(e){t(i),e&&t(v),e&&t(m),H(f),e&&t($),e&&t(w),e&&t(be),e&&t(k),H(J),e&&t(ye),e&&t(y),H(R),H(U),e&&t(Pe),e&&t(S),H(W),e&&t(Ee),e&&t(E),H(X),H(F),e&&t(Ae),e&&t(G),H(Z),e&&t(De),e&&t(x),H(ee)}}}const La={local:"kwargs-handlers",sections:[{local:"accelerate.DistributedDataParallelKwargs",title:"DistributedDataParallelKwargs"},{local:"accelerate.GradScalerKwargs",title:"GradScalerKwargs"},{local:"accelerate.InitProcessGroupKwargs",title:"InitProcessGroupKwargs"}],title:"Kwargs Handlers"};function Fa(re){return Ca(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ja extends Ia{constructor(i){super();ja(this,i,Fa,Ua,za,{})}}export{Ja as default,La as metadata};
