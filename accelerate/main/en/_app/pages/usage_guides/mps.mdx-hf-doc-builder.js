import{S as Ao,i as Mo,s as To,e as r,k as f,w as O,t as s,M as So,c as a,d as o,m as p,a as n,x as G,h as l,b as h,G as t,g as c,y as I,L as xo,q as L,o as N,B as D,v as Co}from"../../chunks/vendor-hf-doc-builder.js";import{I as Je}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as Qe}from"../../chunks/CodeBlock-hf-doc-builder.js";function Oo(Kt){let w,$e,_,E,oe,q,Xe,re,Ye,Ee,m,Ze,ae,et,tt,H,ot,rt,U,at,nt,ke,g,k,ne,j,st,se,lt,Ae,u,le,it,ct,ie,ht,ft,ce,pt,Me,b,he,dt,mt,B,ut,vt,Te,P,A,fe,R,yt,pe,wt,Se,Y,_t,xe,W,Ce,M,gt,de,bt,Pt,Oe,F,Ge,T,$t,me,Et,kt,Ie,z,Le,Z,At,Ne,K,De,$,S,ue,V,Mt,ve,Tt,qe,x,J,St,Q,xt,Ct,Ot,d,Gt,ye,It,Lt,we,Nt,Dt,_e,qt,Ht,ge,Ut,jt,He,v,Bt,be,Rt,Wt,X,Ft,zt,Ue;return q=new Je({}),j=new Je({}),R=new Je({}),W=new Qe({props:{code:"accelerate config",highlighted:"accelerate config"}}),F=new Qe({props:{code:" Which type of machine are you using?. ",highlighted:' Which <span class="hljs-keyword">type</span> <span class="hljs-type">of </span>machine are you using?. '}}),z=new Qe({props:{code:`compute_environment: LOCAL_MACHINE
deepspeed_config: {}
distributed_type: MPS
downcast_bf16: 'no'
fsdp_config: {}
machine_rank: 0
main_process_ip: null
main_process_port: null
main_training_function: main
mixed_precision: 'no'
num_machines: 1
num_processes: 1
use_cpu: false`,highlighted:`compute_environment: LOCAL_MACHINE
deepspeed_config: {}
distributed_type: MPS
downcast_bf16: <span class="hljs-string">&#x27;no&#x27;</span>
fsdp_config: {}
machine_rank: 0
main_process_ip: null
main_process_port: null
main_training_function: main
mixed_precision: <span class="hljs-string">&#x27;no&#x27;</span>
num_machines: 1
num_processes: 1
use_cpu: <span class="hljs-literal">false</span>`}}),K=new Qe({props:{code:"accelerate launch /examples/cv_example.py --data_dir images",highlighted:"accelerate launch /examples/cv_example.py --data_dir images"}}),V=new Je({}),{c(){w=r("meta"),$e=f(),_=r("h1"),E=r("a"),oe=r("span"),O(q.$$.fragment),Xe=f(),re=r("span"),Ye=s("Accelerated PyTorch Training on Mac"),Ee=f(),m=r("p"),Ze=s(`With PyTorch v1.12 release, developers and researchers can take advantage of Apple silicon GPUs for significantly faster model training.
This unlocks the ability to perform machine learning workflows like prototyping and fine-tuning locally, right on Mac.
Apple\u2019s Metal Performance Shaders (MPS) as a backend for PyTorch enables this and can be used via the new `),ae=r("code"),et=s('"mps"'),tt=s(` device.
This will map computational graphs and primitives on the MPS Graph framework and tuned kernels provided by MPS.
For more information please refer official documents `),H=r("a"),ot=s("Introducing Accelerated PyTorch Training on Mac"),rt=s(`
and `),U=r("a"),at=s("MPS BACKEND"),nt=s("."),ke=f(),g=r("h3"),k=r("a"),ne=r("span"),O(j.$$.fragment),st=f(),se=r("span"),lt=s("Benefits of Training and Inference using Apple M1 Chips"),Ae=f(),u=r("ol"),le=r("li"),it=s("Enables users to train larger networks or batch sizes locally"),ct=f(),ie=r("li"),ht=s(`Reduces data retrieval latency and provides the GPU with direct access to the full memory store due to unified memory architecture.
Therefore, improving end-to-end performance.`),ft=f(),ce=r("li"),pt=s("Reduces costs associated with cloud-based development or the need for additional local GPUs."),Me=f(),b=r("p"),he=r("strong"),dt=s("Pre-requisites"),mt=s(`: To install torch with mps support,
please follow this nice medium article `),B=r("a"),ut=s("GPU-Acceleration Comes to PyTorch on M1 Macs"),vt=s("."),Te=f(),P=r("h2"),A=r("a"),fe=r("span"),O(R.$$.fragment),yt=f(),pe=r("span"),wt=s("How it works out of the box"),Se=f(),Y=r("p"),_t=s("On your machine(s) just run:"),xe=f(),O(W.$$.fragment),Ce=f(),M=r("p"),gt=s("and answer the questions asked, specifically choose "),de=r("code"),bt=s("MPS"),Pt=s(" for the query:"),Oe=f(),O(F.$$.fragment),Ge=f(),T=r("p"),$t=s(`This will generate a config file that will be used automatically to properly set
the default options when doing `),me=r("code"),Et=s("accelerate launch"),kt=s(", such as the one shown below:"),Ie=f(),O(z.$$.fragment),Le=f(),Z=r("p"),At=s(`After this configuration has been made, here is how you run the CV example
(from the root of the repo) with MPS enabled:`),Ne=f(),O(K.$$.fragment),De=f(),$=r("h2"),S=r("a"),ue=r("span"),O(V.$$.fragment),Mt=f(),ve=r("span"),Tt=s("A few caveats to be aware of"),qe=f(),x=r("ol"),J=r("li"),St=s(`We strongly recommend to install PyTorch >= 1.13 (nightly version at the time of writing) on your MacOS machine.
It has major fixes related to model correctness and performance improvements for transformer based models.
Please refer to `),Q=r("a"),xt=s("https://github.com/pytorch/pytorch/issues/82707"),Ct=s(" for more details."),Ot=f(),d=r("li"),Gt=s("Distributed setups "),ye=r("code"),It=s("gloo"),Lt=s(" and "),we=r("code"),Nt=s("nccl"),Dt=s(" are not working with "),_e=r("code"),qt=s("mps"),Ht=s(` device.
This means that currently only single GPU of `),ge=r("code"),Ut=s("mps"),jt=s(" device type can be used."),He=f(),v=r("p"),Bt=s("Finally, please, remember that, \u{1F917} "),be=r("code"),Rt=s("Accelerate"),Wt=s(` only integrates MPS backend, therefore if you
have any problems or questions with regards to MPS backend usage, please, file an issue with `),X=r("a"),Ft=s("PyTorch GitHub"),zt=s("."),this.h()},l(e){const i=So('[data-svelte="svelte-1phssyn"]',document.head);w=a(i,"META",{name:!0,content:!0}),i.forEach(o),$e=p(e),_=a(e,"H1",{class:!0});var je=n(_);E=a(je,"A",{id:!0,class:!0,href:!0});var Vt=n(E);oe=a(Vt,"SPAN",{});var Jt=n(oe);G(q.$$.fragment,Jt),Jt.forEach(o),Vt.forEach(o),Xe=p(je),re=a(je,"SPAN",{});var Qt=n(re);Ye=l(Qt,"Accelerated PyTorch Training on Mac"),Qt.forEach(o),je.forEach(o),Ee=p(e),m=a(e,"P",{});var C=n(m);Ze=l(C,`With PyTorch v1.12 release, developers and researchers can take advantage of Apple silicon GPUs for significantly faster model training.
This unlocks the ability to perform machine learning workflows like prototyping and fine-tuning locally, right on Mac.
Apple\u2019s Metal Performance Shaders (MPS) as a backend for PyTorch enables this and can be used via the new `),ae=a(C,"CODE",{});var Xt=n(ae);et=l(Xt,'"mps"'),Xt.forEach(o),tt=l(C,` device.
This will map computational graphs and primitives on the MPS Graph framework and tuned kernels provided by MPS.
For more information please refer official documents `),H=a(C,"A",{href:!0,rel:!0});var Yt=n(H);ot=l(Yt,"Introducing Accelerated PyTorch Training on Mac"),Yt.forEach(o),rt=l(C,`
and `),U=a(C,"A",{href:!0,rel:!0});var Zt=n(U);at=l(Zt,"MPS BACKEND"),Zt.forEach(o),nt=l(C,"."),C.forEach(o),ke=p(e),g=a(e,"H3",{class:!0});var Be=n(g);k=a(Be,"A",{id:!0,class:!0,href:!0});var eo=n(k);ne=a(eo,"SPAN",{});var to=n(ne);G(j.$$.fragment,to),to.forEach(o),eo.forEach(o),st=p(Be),se=a(Be,"SPAN",{});var oo=n(se);lt=l(oo,"Benefits of Training and Inference using Apple M1 Chips"),oo.forEach(o),Be.forEach(o),Ae=p(e),u=a(e,"OL",{});var ee=n(u);le=a(ee,"LI",{});var ro=n(le);it=l(ro,"Enables users to train larger networks or batch sizes locally"),ro.forEach(o),ct=p(ee),ie=a(ee,"LI",{});var ao=n(ie);ht=l(ao,`Reduces data retrieval latency and provides the GPU with direct access to the full memory store due to unified memory architecture.
Therefore, improving end-to-end performance.`),ao.forEach(o),ft=p(ee),ce=a(ee,"LI",{});var no=n(ce);pt=l(no,"Reduces costs associated with cloud-based development or the need for additional local GPUs."),no.forEach(o),ee.forEach(o),Me=p(e),b=a(e,"P",{});var Pe=n(b);he=a(Pe,"STRONG",{});var so=n(he);dt=l(so,"Pre-requisites"),so.forEach(o),mt=l(Pe,`: To install torch with mps support,
please follow this nice medium article `),B=a(Pe,"A",{href:!0,rel:!0});var lo=n(B);ut=l(lo,"GPU-Acceleration Comes to PyTorch on M1 Macs"),lo.forEach(o),vt=l(Pe,"."),Pe.forEach(o),Te=p(e),P=a(e,"H2",{class:!0});var Re=n(P);A=a(Re,"A",{id:!0,class:!0,href:!0});var io=n(A);fe=a(io,"SPAN",{});var co=n(fe);G(R.$$.fragment,co),co.forEach(o),io.forEach(o),yt=p(Re),pe=a(Re,"SPAN",{});var ho=n(pe);wt=l(ho,"How it works out of the box"),ho.forEach(o),Re.forEach(o),Se=p(e),Y=a(e,"P",{});var fo=n(Y);_t=l(fo,"On your machine(s) just run:"),fo.forEach(o),xe=p(e),G(W.$$.fragment,e),Ce=p(e),M=a(e,"P",{});var We=n(M);gt=l(We,"and answer the questions asked, specifically choose "),de=a(We,"CODE",{});var po=n(de);bt=l(po,"MPS"),po.forEach(o),Pt=l(We," for the query:"),We.forEach(o),Oe=p(e),G(F.$$.fragment,e),Ge=p(e),T=a(e,"P",{});var Fe=n(T);$t=l(Fe,`This will generate a config file that will be used automatically to properly set
the default options when doing `),me=a(Fe,"CODE",{});var mo=n(me);Et=l(mo,"accelerate launch"),mo.forEach(o),kt=l(Fe,", such as the one shown below:"),Fe.forEach(o),Ie=p(e),G(z.$$.fragment,e),Le=p(e),Z=a(e,"P",{});var uo=n(Z);At=l(uo,`After this configuration has been made, here is how you run the CV example
(from the root of the repo) with MPS enabled:`),uo.forEach(o),Ne=p(e),G(K.$$.fragment,e),De=p(e),$=a(e,"H2",{class:!0});var ze=n($);S=a(ze,"A",{id:!0,class:!0,href:!0});var vo=n(S);ue=a(vo,"SPAN",{});var yo=n(ue);G(V.$$.fragment,yo),yo.forEach(o),vo.forEach(o),Mt=p(ze),ve=a(ze,"SPAN",{});var wo=n(ve);Tt=l(wo,"A few caveats to be aware of"),wo.forEach(o),ze.forEach(o),qe=p(e),x=a(e,"OL",{});var Ke=n(x);J=a(Ke,"LI",{});var Ve=n(J);St=l(Ve,`We strongly recommend to install PyTorch >= 1.13 (nightly version at the time of writing) on your MacOS machine.
It has major fixes related to model correctness and performance improvements for transformer based models.
Please refer to `),Q=a(Ve,"A",{href:!0,rel:!0});var _o=n(Q);xt=l(_o,"https://github.com/pytorch/pytorch/issues/82707"),_o.forEach(o),Ct=l(Ve," for more details."),Ve.forEach(o),Ot=p(Ke),d=a(Ke,"LI",{});var y=n(d);Gt=l(y,"Distributed setups "),ye=a(y,"CODE",{});var go=n(ye);It=l(go,"gloo"),go.forEach(o),Lt=l(y," and "),we=a(y,"CODE",{});var bo=n(we);Nt=l(bo,"nccl"),bo.forEach(o),Dt=l(y," are not working with "),_e=a(y,"CODE",{});var Po=n(_e);qt=l(Po,"mps"),Po.forEach(o),Ht=l(y,` device.
This means that currently only single GPU of `),ge=a(y,"CODE",{});var $o=n(ge);Ut=l($o,"mps"),$o.forEach(o),jt=l(y," device type can be used."),y.forEach(o),Ke.forEach(o),He=p(e),v=a(e,"P",{});var te=n(v);Bt=l(te,"Finally, please, remember that, \u{1F917} "),be=a(te,"CODE",{});var Eo=n(be);Rt=l(Eo,"Accelerate"),Eo.forEach(o),Wt=l(te,` only integrates MPS backend, therefore if you
have any problems or questions with regards to MPS backend usage, please, file an issue with `),X=a(te,"A",{href:!0,rel:!0});var ko=n(X);Ft=l(ko,"PyTorch GitHub"),ko.forEach(o),zt=l(te,"."),te.forEach(o),this.h()},h(){h(w,"name","hf:doc:metadata"),h(w,"content",JSON.stringify(Go)),h(E,"id","accelerated-pytorch-training-on-mac"),h(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(E,"href","#accelerated-pytorch-training-on-mac"),h(_,"class","relative group"),h(H,"href","https://pytorch.org/blog/introducing-accelerated-pytorch-training-on-mac/"),h(H,"rel","nofollow"),h(U,"href","https://pytorch.org/docs/stable/notes/mps.html"),h(U,"rel","nofollow"),h(k,"id","benefits-of-training-and-inference-using-apple-m1-chips"),h(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(k,"href","#benefits-of-training-and-inference-using-apple-m1-chips"),h(g,"class","relative group"),h(B,"href","https://medium.com/towards-data-science/gpu-acceleration-comes-to-pytorch-on-m1-macs-195c399efcc1"),h(B,"rel","nofollow"),h(A,"id","how-it-works-out-of-the-box"),h(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(A,"href","#how-it-works-out-of-the-box"),h(P,"class","relative group"),h(S,"id","a-few-caveats-to-be-aware-of"),h(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(S,"href","#a-few-caveats-to-be-aware-of"),h($,"class","relative group"),h(Q,"href","https://github.com/pytorch/pytorch/issues/82707"),h(Q,"rel","nofollow"),h(X,"href","https://github.com/pytorch/pytorch/issues"),h(X,"rel","nofollow")},m(e,i){t(document.head,w),c(e,$e,i),c(e,_,i),t(_,E),t(E,oe),I(q,oe,null),t(_,Xe),t(_,re),t(re,Ye),c(e,Ee,i),c(e,m,i),t(m,Ze),t(m,ae),t(ae,et),t(m,tt),t(m,H),t(H,ot),t(m,rt),t(m,U),t(U,at),t(m,nt),c(e,ke,i),c(e,g,i),t(g,k),t(k,ne),I(j,ne,null),t(g,st),t(g,se),t(se,lt),c(e,Ae,i),c(e,u,i),t(u,le),t(le,it),t(u,ct),t(u,ie),t(ie,ht),t(u,ft),t(u,ce),t(ce,pt),c(e,Me,i),c(e,b,i),t(b,he),t(he,dt),t(b,mt),t(b,B),t(B,ut),t(b,vt),c(e,Te,i),c(e,P,i),t(P,A),t(A,fe),I(R,fe,null),t(P,yt),t(P,pe),t(pe,wt),c(e,Se,i),c(e,Y,i),t(Y,_t),c(e,xe,i),I(W,e,i),c(e,Ce,i),c(e,M,i),t(M,gt),t(M,de),t(de,bt),t(M,Pt),c(e,Oe,i),I(F,e,i),c(e,Ge,i),c(e,T,i),t(T,$t),t(T,me),t(me,Et),t(T,kt),c(e,Ie,i),I(z,e,i),c(e,Le,i),c(e,Z,i),t(Z,At),c(e,Ne,i),I(K,e,i),c(e,De,i),c(e,$,i),t($,S),t(S,ue),I(V,ue,null),t($,Mt),t($,ve),t(ve,Tt),c(e,qe,i),c(e,x,i),t(x,J),t(J,St),t(J,Q),t(Q,xt),t(J,Ct),t(x,Ot),t(x,d),t(d,Gt),t(d,ye),t(ye,It),t(d,Lt),t(d,we),t(we,Nt),t(d,Dt),t(d,_e),t(_e,qt),t(d,Ht),t(d,ge),t(ge,Ut),t(d,jt),c(e,He,i),c(e,v,i),t(v,Bt),t(v,be),t(be,Rt),t(v,Wt),t(v,X),t(X,Ft),t(v,zt),Ue=!0},p:xo,i(e){Ue||(L(q.$$.fragment,e),L(j.$$.fragment,e),L(R.$$.fragment,e),L(W.$$.fragment,e),L(F.$$.fragment,e),L(z.$$.fragment,e),L(K.$$.fragment,e),L(V.$$.fragment,e),Ue=!0)},o(e){N(q.$$.fragment,e),N(j.$$.fragment,e),N(R.$$.fragment,e),N(W.$$.fragment,e),N(F.$$.fragment,e),N(z.$$.fragment,e),N(K.$$.fragment,e),N(V.$$.fragment,e),Ue=!1},d(e){o(w),e&&o($e),e&&o(_),D(q),e&&o(Ee),e&&o(m),e&&o(ke),e&&o(g),D(j),e&&o(Ae),e&&o(u),e&&o(Me),e&&o(b),e&&o(Te),e&&o(P),D(R),e&&o(Se),e&&o(Y),e&&o(xe),D(W,e),e&&o(Ce),e&&o(M),e&&o(Oe),D(F,e),e&&o(Ge),e&&o(T),e&&o(Ie),D(z,e),e&&o(Le),e&&o(Z),e&&o(Ne),D(K,e),e&&o(De),e&&o($),D(V),e&&o(qe),e&&o(x),e&&o(He),e&&o(v)}}}const Go={local:"accelerated-pytorch-training-on-mac",sections:[{local:null,sections:[{local:"benefits-of-training-and-inference-using-apple-m1-chips",title:"Benefits of Training and Inference using Apple M1 Chips"}],title:null},{local:"how-it-works-out-of-the-box",title:"How it works out of the box"}],title:"Accelerated PyTorch Training on Mac"};function Io(Kt){return Co(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qo extends Ao{constructor(w){super();Mo(this,w,Io,Oo,To,{})}}export{qo as default,Go as metadata};
