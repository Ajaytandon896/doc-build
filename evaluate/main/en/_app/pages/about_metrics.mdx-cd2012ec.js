import{S as gt,i as At,s as Pt,e as o,k as u,w as Qe,t as i,M as kt,c as r,d as a,m,a as n,x as Ye,h as s,b as d,F as t,g as c,y as Je,L as Tt,q as Ke,o as Ve,B as Xe,v as $t}from"../chunks/vendor-e830fc9c.js";import{I as Ze}from"../chunks/IconCopyLink-af4c5c5b.js";function Dt(et){let b,K,y,E,G,T,ue,N,me,V,g,fe,B,pe,ve,X,w,A,I,$,be,C,ye,R,we,Z,P,_e,S,Ee,ge,ee,f,Ae,F,Pe,ke,H,Te,$e,te,_,k,j,D,De,W,xe,ae,h,Be,q,Ce,Se,z,Ue,Le,x,Me,Oe,Q,Ge,Ne,oe,U,Ie,ie,p,Re,Y,Fe,He,J,je,We,re,L,qe,se;return T=new Ze({}),$=new Ze({}),D=new Ze({}),{c(){b=o("meta"),K=u(),y=o("h1"),E=o("a"),G=o("span"),Qe(T.$$.fragment),ue=u(),N=o("span"),me=i("All about metrics"),V=u(),g=o("p"),fe=i("\u{1F917} Datasets provides access to a wide range of NLP metrics. You can load metrics associated with benchmark datasets like GLUE or SQuAD, and complex metrics like BLEURT or BERTScore, with a single command: "),B=o("a"),pe=i("load()"),ve=i(". Once you\u2019ve loaded a metric, easily compute and evaluate a model\u2019s performance."),X=u(),w=o("h2"),A=o("a"),I=o("span"),Qe($.$$.fragment),be=u(),C=o("span"),ye=i("ELI5: "),R=o("code"),we=i("load"),Z=u(),P=o("p"),_e=i("Loading a dataset and loading a metric share many similarities. This was an intentional design choice because we wanted to create a simple and unified experience. When you call "),S=o("a"),Ee=i("load()"),ge=i(", the metric loading script is downloaded and imported from GitHub (if it hasn\u2019t already been downloaded before). It contains information about the metric such as it\u2019s citation, homepage, and description."),ee=u(),f=o("p"),Ae=i("The metric loading script will instantiate and return a "),F=o("code"),Pe=i("Metric"),ke=i(" object. This stores the predictions and references, which you need to compute the metric values. The "),H=o("code"),Te=i("Metric"),$e=i(" object is stored as an Apache Arrow table. As a result, the predictions and references are stored directly on disk with memory-mapping. This enables \u{1F917} Datasets to do a lazy computation of the metric, and makes it easier to gather all the predictions in a distributed setting."),te=u(),_=o("h2"),k=o("a"),j=o("span"),Qe(D.$$.fragment),De=u(),W=o("span"),xe=i("Distributed evaluation"),ae=u(),h=o("p"),Be=i("Computing metrics in a distributed environment can be tricky. Metric evaluation is executed in separate Python processes, or nodes, on different subsets of a dataset. Typically, when a metric score is additive ("),q=o("code"),Ce=i("f(AuB) = f(A) + f(B)"),Se=i("), you can use distributed reduce operations to gather the scores for each subset of the dataset. But when a metric is non-additive ("),z=o("code"),Ue=i("f(AuB) \u2260 f(A) + f(B)"),Le=i("), it\u2019s not that simple. For example, you can\u2019t take the sum of the "),x=o("a"),Me=i("F1"),Oe=i(" scores of each data subset as your "),Q=o("strong"),Ge=i("final metric"),Ne=i("."),oe=u(),U=o("p"),Ie=i("A common way to overcome this issue is to fallback on single process evaluation. The metrics are evaluated on a single GPU, which becomes inefficient."),ie=u(),p=o("p"),Re=i("\u{1F917} Datasets solves this issue by only computing the final metric on the first node. The predictions and references are computed and provided to the metric separately for each node. These are temporarily stored in an Apache Arrow table, avoiding cluttering the GPU or CPU memory. When you are ready to "),Y=o("code"),Fe=i("Metric.compute"),He=i(" the final metric, the first node is able to access the predictions and references stored on all the other nodes. Once it has gathered all the predictions and references, "),J=o("code"),je=i("Metric.compute"),We=i(" will perform the final metric evaluation."),re=u(),L=o("p"),qe=i("This solution allows \u{1F917} Datasets to perform distributed predictions, which is important for evaluation speed in distributed settings. At the same time, you can also use complex non-additive metrics without wasting valuable GPU or CPU memory."),this.h()},l(e){const l=kt('[data-svelte="svelte-1phssyn"]',document.head);b=r(l,"META",{name:!0,content:!0}),l.forEach(a),K=m(e),y=r(e,"H1",{class:!0});var ne=n(y);E=r(ne,"A",{id:!0,class:!0,href:!0});var tt=n(E);G=r(tt,"SPAN",{});var at=n(G);Ye(T.$$.fragment,at),at.forEach(a),tt.forEach(a),ue=m(ne),N=r(ne,"SPAN",{});var ot=n(N);me=s(ot,"All about metrics"),ot.forEach(a),ne.forEach(a),V=m(e),g=r(e,"P",{});var le=n(g);fe=s(le,"\u{1F917} Datasets provides access to a wide range of NLP metrics. You can load metrics associated with benchmark datasets like GLUE or SQuAD, and complex metrics like BLEURT or BERTScore, with a single command: "),B=r(le,"A",{href:!0});var it=n(B);pe=s(it,"load()"),it.forEach(a),ve=s(le,". Once you\u2019ve loaded a metric, easily compute and evaluate a model\u2019s performance."),le.forEach(a),X=m(e),w=r(e,"H2",{class:!0});var ce=n(w);A=r(ce,"A",{id:!0,class:!0,href:!0});var rt=n(A);I=r(rt,"SPAN",{});var st=n(I);Ye($.$$.fragment,st),st.forEach(a),rt.forEach(a),be=m(ce),C=r(ce,"SPAN",{});var ze=n(C);ye=s(ze,"ELI5: "),R=r(ze,"CODE",{});var nt=n(R);we=s(nt,"load"),nt.forEach(a),ze.forEach(a),ce.forEach(a),Z=m(e),P=r(e,"P",{});var de=n(P);_e=s(de,"Loading a dataset and loading a metric share many similarities. This was an intentional design choice because we wanted to create a simple and unified experience. When you call "),S=r(de,"A",{href:!0});var lt=n(S);Ee=s(lt,"load()"),lt.forEach(a),ge=s(de,", the metric loading script is downloaded and imported from GitHub (if it hasn\u2019t already been downloaded before). It contains information about the metric such as it\u2019s citation, homepage, and description."),de.forEach(a),ee=m(e),f=r(e,"P",{});var M=n(f);Ae=s(M,"The metric loading script will instantiate and return a "),F=r(M,"CODE",{});var ct=n(F);Pe=s(ct,"Metric"),ct.forEach(a),ke=s(M," object. This stores the predictions and references, which you need to compute the metric values. The "),H=r(M,"CODE",{});var dt=n(H);Te=s(dt,"Metric"),dt.forEach(a),$e=s(M," object is stored as an Apache Arrow table. As a result, the predictions and references are stored directly on disk with memory-mapping. This enables \u{1F917} Datasets to do a lazy computation of the metric, and makes it easier to gather all the predictions in a distributed setting."),M.forEach(a),te=m(e),_=r(e,"H2",{class:!0});var he=n(_);k=r(he,"A",{id:!0,class:!0,href:!0});var ht=n(k);j=r(ht,"SPAN",{});var ut=n(j);Ye(D.$$.fragment,ut),ut.forEach(a),ht.forEach(a),De=m(he),W=r(he,"SPAN",{});var mt=n(W);xe=s(mt,"Distributed evaluation"),mt.forEach(a),he.forEach(a),ae=m(e),h=r(e,"P",{});var v=n(h);Be=s(v,"Computing metrics in a distributed environment can be tricky. Metric evaluation is executed in separate Python processes, or nodes, on different subsets of a dataset. Typically, when a metric score is additive ("),q=r(v,"CODE",{});var ft=n(q);Ce=s(ft,"f(AuB) = f(A) + f(B)"),ft.forEach(a),Se=s(v,"), you can use distributed reduce operations to gather the scores for each subset of the dataset. But when a metric is non-additive ("),z=r(v,"CODE",{});var pt=n(z);Ue=s(pt,"f(AuB) \u2260 f(A) + f(B)"),pt.forEach(a),Le=s(v,"), it\u2019s not that simple. For example, you can\u2019t take the sum of the "),x=r(v,"A",{href:!0,rel:!0});var vt=n(x);Me=s(vt,"F1"),vt.forEach(a),Oe=s(v," scores of each data subset as your "),Q=r(v,"STRONG",{});var bt=n(Q);Ge=s(bt,"final metric"),bt.forEach(a),Ne=s(v,"."),v.forEach(a),oe=m(e),U=r(e,"P",{});var yt=n(U);Ie=s(yt,"A common way to overcome this issue is to fallback on single process evaluation. The metrics are evaluated on a single GPU, which becomes inefficient."),yt.forEach(a),ie=m(e),p=r(e,"P",{});var O=n(p);Re=s(O,"\u{1F917} Datasets solves this issue by only computing the final metric on the first node. The predictions and references are computed and provided to the metric separately for each node. These are temporarily stored in an Apache Arrow table, avoiding cluttering the GPU or CPU memory. When you are ready to "),Y=r(O,"CODE",{});var wt=n(Y);Fe=s(wt,"Metric.compute"),wt.forEach(a),He=s(O," the final metric, the first node is able to access the predictions and references stored on all the other nodes. Once it has gathered all the predictions and references, "),J=r(O,"CODE",{});var _t=n(J);je=s(_t,"Metric.compute"),_t.forEach(a),We=s(O," will perform the final metric evaluation."),O.forEach(a),re=m(e),L=r(e,"P",{});var Et=n(L);qe=s(Et,"This solution allows \u{1F917} Datasets to perform distributed predictions, which is important for evaluation speed in distributed settings. At the same time, you can also use complex non-additive metrics without wasting valuable GPU or CPU memory."),Et.forEach(a),this.h()},h(){d(b,"name","hf:doc:metadata"),d(b,"content",JSON.stringify(xt)),d(E,"id","all-about-metrics"),d(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(E,"href","#all-about-metrics"),d(y,"class","relative group"),d(B,"href","/docs/evaluate/main/en/package_reference/loading_methods#evaluate.load"),d(A,"id","eli5-load"),d(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(A,"href","#eli5-load"),d(w,"class","relative group"),d(S,"href","/docs/evaluate/main/en/package_reference/loading_methods#evaluate.load"),d(k,"id","distributed-evaluation"),d(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(k,"href","#distributed-evaluation"),d(_,"class","relative group"),d(x,"href","https://huggingface.co/metrics/f1"),d(x,"rel","nofollow")},m(e,l){t(document.head,b),c(e,K,l),c(e,y,l),t(y,E),t(E,G),Je(T,G,null),t(y,ue),t(y,N),t(N,me),c(e,V,l),c(e,g,l),t(g,fe),t(g,B),t(B,pe),t(g,ve),c(e,X,l),c(e,w,l),t(w,A),t(A,I),Je($,I,null),t(w,be),t(w,C),t(C,ye),t(C,R),t(R,we),c(e,Z,l),c(e,P,l),t(P,_e),t(P,S),t(S,Ee),t(P,ge),c(e,ee,l),c(e,f,l),t(f,Ae),t(f,F),t(F,Pe),t(f,ke),t(f,H),t(H,Te),t(f,$e),c(e,te,l),c(e,_,l),t(_,k),t(k,j),Je(D,j,null),t(_,De),t(_,W),t(W,xe),c(e,ae,l),c(e,h,l),t(h,Be),t(h,q),t(q,Ce),t(h,Se),t(h,z),t(z,Ue),t(h,Le),t(h,x),t(x,Me),t(h,Oe),t(h,Q),t(Q,Ge),t(h,Ne),c(e,oe,l),c(e,U,l),t(U,Ie),c(e,ie,l),c(e,p,l),t(p,Re),t(p,Y),t(Y,Fe),t(p,He),t(p,J),t(J,je),t(p,We),c(e,re,l),c(e,L,l),t(L,qe),se=!0},p:Tt,i(e){se||(Ke(T.$$.fragment,e),Ke($.$$.fragment,e),Ke(D.$$.fragment,e),se=!0)},o(e){Ve(T.$$.fragment,e),Ve($.$$.fragment,e),Ve(D.$$.fragment,e),se=!1},d(e){a(b),e&&a(K),e&&a(y),Xe(T),e&&a(V),e&&a(g),e&&a(X),e&&a(w),Xe($),e&&a(Z),e&&a(P),e&&a(ee),e&&a(f),e&&a(te),e&&a(_),Xe(D),e&&a(ae),e&&a(h),e&&a(oe),e&&a(U),e&&a(ie),e&&a(p),e&&a(re),e&&a(L)}}}const xt={local:"all-about-metrics",sections:[{local:"eli5-load",title:"ELI5: `load`"},{local:"distributed-evaluation",title:"Distributed evaluation"}],title:"All about metrics"};function Bt(et){return $t(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ut extends gt{constructor(b){super();At(this,b,Bt,Dt,Pt,{})}}export{Ut as default,xt as metadata};
