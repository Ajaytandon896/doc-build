import{S as va,i as _a,s as ga,e as a,k as i,w as Ct,t as r,M as Ea,c as o,d as t,m as c,a as s,x as It,h as n,b as m,G as e,g as v,y as Rt,L as ba,q as Pt,o as kt,B as Wt,v as ya}from"../../chunks/vendor-hf-doc-builder.js";import{D as ma}from"../../chunks/Docstring-hf-doc-builder.js";import{I as Sa}from"../../chunks/IconCopyLink-hf-doc-builder.js";function Ta(zt){let _,be,g,b,q,C,Ne,B,Le,ye,y,Ae,I,De,Ge,Se,k,Ce,Te,h,R,Ie,M,Re,Pe,U,F,ke,We,d,S,V,ze,qe,H,Be,Me,Ue,T,J,Fe,Ve,W,He,Je,je,w,j,Ke,Qe,K,Xe,Ye,Ze,x,Q,et,tt,X,at,rt,ot,$,Y,nt,st,Z,lt,it,ct,O,ee,dt,ht,te,ft,ut,we,f,P,pt,ae,mt,vt,re,oe,_t,gt,E,N,ne,Et,bt,se,yt,St,Tt,L,le,wt,xt,ie,$t,Ot,Nt,A,ce,Lt,At,de,Dt,Gt,xe;return C=new Sa({}),R=new ma({props:{name:"class accelerate.state.AcceleratorState",anchor:"accelerate.state.AcceleratorState",parameters:[{name:"mixed_precision",val:": str = None"},{name:"cpu",val:": bool = False"},{name:"deepspeed_plugin",val:" = None"},{name:"fsdp_plugin",val:" = None"},{name:"megatron_lm_plugin",val:" = None"},{name:"_from_accelerator",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/state.py#L49"}}),P=new ma({props:{name:"class accelerate.state.GradientState",anchor:"accelerate.state.GradientState",parameters:[],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/state.py#L282"}}),{c(){_=a("meta"),be=i(),g=a("h1"),b=a("a"),q=a("span"),Ct(C.$$.fragment),Ne=i(),B=a("span"),Le=r("Stateful Classes"),ye=i(),y=a("p"),Ae=r("Below are variations of a "),I=a("a"),De=r("singleton class"),Ge=r(` in the sense that all
instances share the same state, which is initialized on the first instantiation.`),Se=i(),k=a("p"),Ce=r(`These classes are immutable and store information about certain configurations or
states.`),Te=i(),h=a("div"),Ct(R.$$.fragment),Ie=i(),M=a("p"),Re=r("Singleton class that has information about the current training environment."),Pe=i(),U=a("p"),F=a("strong"),ke=r("Available attributes:"),We=i(),d=a("ul"),S=a("li"),V=a("strong"),ze=r("device"),qe=r(" ("),H=a("code"),Be=r("torch.device"),Me=r(") \u2014 The device to use."),Ue=i(),T=a("li"),J=a("strong"),Fe=r("distributed_type"),Ve=r(" ("),W=a("a"),He=r("DistributedType"),Je=r(`) \u2014 The type of distributed environment currently
in use.`),je=i(),w=a("li"),j=a("strong"),Ke=r("local_process_index"),Qe=r(" ("),K=a("code"),Xe=r("int"),Ye=r(") \u2014 The index of the current process on the current server."),Ze=i(),x=a("li"),Q=a("strong"),et=r("mixed_precision"),tt=r(" ("),X=a("code"),at=r("str"),rt=r(`) \u2014 Whether or not the current script will use mixed precision, and if so the type
of mixed precision being performed.`),ot=i(),$=a("li"),Y=a("strong"),nt=r("num_processes"),st=r(" ("),Z=a("code"),lt=r("int"),it=r(") \u2014 The number of processes currently launched in parallel."),ct=i(),O=a("li"),ee=a("strong"),dt=r("process_index"),ht=r(" ("),te=a("code"),ft=r("int"),ut=r(") \u2014 The index of the current process."),we=i(),f=a("div"),Ct(P.$$.fragment),pt=i(),ae=a("p"),mt=r("Singleton class that has information related to gradient synchronization for gradient accumulation"),vt=i(),re=a("p"),oe=a("strong"),_t=r("Available attributes:"),gt=i(),E=a("ul"),N=a("li"),ne=a("strong"),Et=r("end_of_dataloader"),bt=r(" ("),se=a("code"),yt=r("bool"),St=r(") \u2014 Whether we have reached the end the current dataloader"),Tt=i(),L=a("li"),le=a("strong"),wt=r("remainder"),xt=r(" ("),ie=a("code"),$t=r("int"),Ot=r(") \u2014 The number of extra samples that were added from padding the dataloader"),Nt=i(),A=a("li"),ce=a("strong"),Lt=r("sync_gradients"),At=r(" ("),de=a("code"),Dt=r("bool"),Gt=r(") \u2014 Whether the gradients should be synced across all devices"),this.h()},l(l){const u=Ea('[data-svelte="svelte-1phssyn"]',document.head);_=o(u,"META",{name:!0,content:!0}),u.forEach(t),be=c(l),g=o(l,"H1",{class:!0});var $e=s(g);b=o($e,"A",{id:!0,class:!0,href:!0});var qt=s(b);q=o(qt,"SPAN",{});var Bt=s(q);It(C.$$.fragment,Bt),Bt.forEach(t),qt.forEach(t),Ne=c($e),B=o($e,"SPAN",{});var Mt=s(B);Le=n(Mt,"Stateful Classes"),Mt.forEach(t),$e.forEach(t),ye=c(l),y=o(l,"P",{});var Oe=s(y);Ae=n(Oe,"Below are variations of a "),I=o(Oe,"A",{href:!0,rel:!0});var Ut=s(I);De=n(Ut,"singleton class"),Ut.forEach(t),Ge=n(Oe,` in the sense that all
instances share the same state, which is initialized on the first instantiation.`),Oe.forEach(t),Se=c(l),k=o(l,"P",{});var Ft=s(k);Ce=n(Ft,`These classes are immutable and store information about certain configurations or
states.`),Ft.forEach(t),Te=c(l),h=o(l,"DIV",{class:!0});var D=s(h);It(R.$$.fragment,D),Ie=c(D),M=o(D,"P",{});var Vt=s(M);Re=n(Vt,"Singleton class that has information about the current training environment."),Vt.forEach(t),Pe=c(D),U=o(D,"P",{});var Ht=s(U);F=o(Ht,"STRONG",{});var Jt=s(F);ke=n(Jt,"Available attributes:"),Jt.forEach(t),Ht.forEach(t),We=c(D),d=o(D,"UL",{});var p=s(d);S=o(p,"LI",{});var he=s(S);V=o(he,"STRONG",{});var jt=s(V);ze=n(jt,"device"),jt.forEach(t),qe=n(he," ("),H=o(he,"CODE",{});var Kt=s(H);Be=n(Kt,"torch.device"),Kt.forEach(t),Me=n(he,") \u2014 The device to use."),he.forEach(t),Ue=c(p),T=o(p,"LI",{});var fe=s(T);J=o(fe,"STRONG",{});var Qt=s(J);Fe=n(Qt,"distributed_type"),Qt.forEach(t),Ve=n(fe," ("),W=o(fe,"A",{href:!0});var Xt=s(W);He=n(Xt,"DistributedType"),Xt.forEach(t),Je=n(fe,`) \u2014 The type of distributed environment currently
in use.`),fe.forEach(t),je=c(p),w=o(p,"LI",{});var ue=s(w);j=o(ue,"STRONG",{});var Yt=s(j);Ke=n(Yt,"local_process_index"),Yt.forEach(t),Qe=n(ue," ("),K=o(ue,"CODE",{});var Zt=s(K);Xe=n(Zt,"int"),Zt.forEach(t),Ye=n(ue,") \u2014 The index of the current process on the current server."),ue.forEach(t),Ze=c(p),x=o(p,"LI",{});var pe=s(x);Q=o(pe,"STRONG",{});var ea=s(Q);et=n(ea,"mixed_precision"),ea.forEach(t),tt=n(pe," ("),X=o(pe,"CODE",{});var ta=s(X);at=n(ta,"str"),ta.forEach(t),rt=n(pe,`) \u2014 Whether or not the current script will use mixed precision, and if so the type
of mixed precision being performed.`),pe.forEach(t),ot=c(p),$=o(p,"LI",{});var me=s($);Y=o(me,"STRONG",{});var aa=s(Y);nt=n(aa,"num_processes"),aa.forEach(t),st=n(me," ("),Z=o(me,"CODE",{});var ra=s(Z);lt=n(ra,"int"),ra.forEach(t),it=n(me,") \u2014 The number of processes currently launched in parallel."),me.forEach(t),ct=c(p),O=o(p,"LI",{});var ve=s(O);ee=o(ve,"STRONG",{});var oa=s(ee);dt=n(oa,"process_index"),oa.forEach(t),ht=n(ve," ("),te=o(ve,"CODE",{});var na=s(te);ft=n(na,"int"),na.forEach(t),ut=n(ve,") \u2014 The index of the current process."),ve.forEach(t),p.forEach(t),D.forEach(t),we=c(l),f=o(l,"DIV",{class:!0});var G=s(f);It(P.$$.fragment,G),pt=c(G),ae=o(G,"P",{});var sa=s(ae);mt=n(sa,"Singleton class that has information related to gradient synchronization for gradient accumulation"),sa.forEach(t),vt=c(G),re=o(G,"P",{});var la=s(re);oe=o(la,"STRONG",{});var ia=s(oe);_t=n(ia,"Available attributes:"),ia.forEach(t),la.forEach(t),gt=c(G),E=o(G,"UL",{});var z=s(E);N=o(z,"LI",{});var _e=s(N);ne=o(_e,"STRONG",{});var ca=s(ne);Et=n(ca,"end_of_dataloader"),ca.forEach(t),bt=n(_e," ("),se=o(_e,"CODE",{});var da=s(se);yt=n(da,"bool"),da.forEach(t),St=n(_e,") \u2014 Whether we have reached the end the current dataloader"),_e.forEach(t),Tt=c(z),L=o(z,"LI",{});var ge=s(L);le=o(ge,"STRONG",{});var ha=s(le);wt=n(ha,"remainder"),ha.forEach(t),xt=n(ge," ("),ie=o(ge,"CODE",{});var fa=s(ie);$t=n(fa,"int"),fa.forEach(t),Ot=n(ge,") \u2014 The number of extra samples that were added from padding the dataloader"),ge.forEach(t),Nt=c(z),A=o(z,"LI",{});var Ee=s(A);ce=o(Ee,"STRONG",{});var ua=s(ce);Lt=n(ua,"sync_gradients"),ua.forEach(t),At=n(Ee," ("),de=o(Ee,"CODE",{});var pa=s(de);Dt=n(pa,"bool"),pa.forEach(t),Gt=n(Ee,") \u2014 Whether the gradients should be synced across all devices"),Ee.forEach(t),z.forEach(t),G.forEach(t),this.h()},h(){m(_,"name","hf:doc:metadata"),m(_,"content",JSON.stringify(wa)),m(b,"id","accelerate.state.AcceleratorState"),m(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(b,"href","#accelerate.state.AcceleratorState"),m(g,"class","relative group"),m(I,"href","https://en.wikipedia.org/wiki/Singleton_pattern"),m(I,"rel","nofollow"),m(W,"href","/docs/accelerate/main/en/package_reference/utilities#accelerate.DistributedType"),m(h,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(f,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(l,u){e(document.head,_),v(l,be,u),v(l,g,u),e(g,b),e(b,q),Rt(C,q,null),e(g,Ne),e(g,B),e(B,Le),v(l,ye,u),v(l,y,u),e(y,Ae),e(y,I),e(I,De),e(y,Ge),v(l,Se,u),v(l,k,u),e(k,Ce),v(l,Te,u),v(l,h,u),Rt(R,h,null),e(h,Ie),e(h,M),e(M,Re),e(h,Pe),e(h,U),e(U,F),e(F,ke),e(h,We),e(h,d),e(d,S),e(S,V),e(V,ze),e(S,qe),e(S,H),e(H,Be),e(S,Me),e(d,Ue),e(d,T),e(T,J),e(J,Fe),e(T,Ve),e(T,W),e(W,He),e(T,Je),e(d,je),e(d,w),e(w,j),e(j,Ke),e(w,Qe),e(w,K),e(K,Xe),e(w,Ye),e(d,Ze),e(d,x),e(x,Q),e(Q,et),e(x,tt),e(x,X),e(X,at),e(x,rt),e(d,ot),e(d,$),e($,Y),e(Y,nt),e($,st),e($,Z),e(Z,lt),e($,it),e(d,ct),e(d,O),e(O,ee),e(ee,dt),e(O,ht),e(O,te),e(te,ft),e(O,ut),v(l,we,u),v(l,f,u),Rt(P,f,null),e(f,pt),e(f,ae),e(ae,mt),e(f,vt),e(f,re),e(re,oe),e(oe,_t),e(f,gt),e(f,E),e(E,N),e(N,ne),e(ne,Et),e(N,bt),e(N,se),e(se,yt),e(N,St),e(E,Tt),e(E,L),e(L,le),e(le,wt),e(L,xt),e(L,ie),e(ie,$t),e(L,Ot),e(E,Nt),e(E,A),e(A,ce),e(ce,Lt),e(A,At),e(A,de),e(de,Dt),e(A,Gt),xe=!0},p:ba,i(l){xe||(Pt(C.$$.fragment,l),Pt(R.$$.fragment,l),Pt(P.$$.fragment,l),xe=!0)},o(l){kt(C.$$.fragment,l),kt(R.$$.fragment,l),kt(P.$$.fragment,l),xe=!1},d(l){t(_),l&&t(be),l&&t(g),Wt(C),l&&t(ye),l&&t(y),l&&t(Se),l&&t(k),l&&t(Te),l&&t(h),Wt(R),l&&t(we),l&&t(f),Wt(P)}}}const wa={local:"accelerate.state.AcceleratorState",title:"Stateful Classes"};function xa(zt){return ya(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class La extends va{constructor(_){super();_a(this,_,xa,Ta,ga,{})}}export{La as default,wa as metadata};
