import{S as Ze,i as ea,s as aa,e as o,k as p,w as Je,t as i,M as ta,c as r,d as a,m as f,a as n,x as je,h as l,b as c,G as t,g as h,y as Fe,L as oa,q as He,o as Qe,B as Ye,v as ra}from"../../chunks/vendor-hf-doc-builder.js";import{I as De}from"../../chunks/IconCopyLink-hf-doc-builder.js";function na(xe){let u,q,v,d,V,E,ne,B,se,z,m,g,W,k,ie,M,le,I,w,he,y,ce,pe,K,x,fe,U,T,O,ue,G,C,ve,J,_,N,me,de,R,ge,P,we,_e,j,S,Se,A,be,Le,F,b,Ee,$,ke,ye,H,L,Re,X,Ae,Xe,Q;return E=new De({}),k=new De({}),{c(){u=o("meta"),q=p(),v=o("h1"),d=o("a"),V=o("span"),Je(E.$$.fragment),ne=p(),B=o("span"),se=i("XLS-R"),z=p(),m=o("h2"),g=o("a"),W=o("span"),Je(k.$$.fragment),ie=p(),M=o("span"),le=i("Overview"),I=p(),w=o("p"),he=i("The XLS-R model was proposed in "),y=o("a"),ce=i("XLS-R: Self-supervised Cross-lingual Speech Representation Learning at Scale"),pe=i(` by Arun Babu, Changhan Wang, Andros Tjandra, Kushal Lakhotia, Qiantong Xu, Naman
Goyal, Kritika Singh, Patrick von Platen, Yatharth Saraf, Juan Pino, Alexei Baevski, Alexis Conneau, Michael Auli.`),K=p(),x=o("p"),fe=i("The abstract from the paper is the following:"),U=p(),T=o("p"),O=o("em"),ue=i(`This paper presents XLS-R, a large-scale model for cross-lingual speech representation learning based on wav2vec 2.0.
We train models with up to 2B parameters on nearly half a million hours of publicly available speech audio in 128
languages, an order of magnitude more public data than the largest known prior work. Our evaluation covers a wide range
of tasks, domains, data regimes and languages, both high and low-resource. On the CoVoST-2 speech translation
benchmark, we improve the previous state of the art by an average of 7.4 BLEU over 21 translation directions into
English. For speech recognition, XLS-R improves over the best known prior work on BABEL, MLS, CommonVoice as well as
VoxPopuli, lowering error rates by 14-34% relative on average. XLS-R also sets a new state of the art on VoxLingua107
language identification. Moreover, we show that with sufficient model size, cross-lingual pretraining can outperform
English-only pretraining when translating English speech into other languages, a setting which favors monolingual
pretraining. We hope XLS-R can help to improve speech processing tasks for many more languages of the world.`),G=p(),C=o("p"),ve=i("Tips:"),J=p(),_=o("ul"),N=o("li"),me=i("XLS-R is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),de=p(),R=o("li"),ge=i(`XLS-R model was trained using connectionist temporal classification (CTC) so the model output has to be decoded using
`),P=o("a"),we=i("Wav2Vec2CTCTokenizer"),_e=i("."),j=p(),S=o("p"),Se=i("Relevant checkpoints can be found under "),A=o("a"),be=i("https://huggingface.co/models?other=xls_r"),Le=i("."),F=p(),b=o("p"),Ee=i("XLS-R\u2019s architecture is based on the Wav2Vec2 model, so one can refer to "),$=o("a"),ke=i("Wav2Vec2\u2019s documentation page"),ye=i("."),H=p(),L=o("p"),Re=i("The original code can be found "),X=o("a"),Ae=i("here"),Xe=i("."),this.h()},l(e){const s=ta('[data-svelte="svelte-1phssyn"]',document.head);u=r(s,"META",{name:!0,content:!0}),s.forEach(a),q=f(e),v=r(e,"H1",{class:!0});var Y=n(v);d=r(Y,"A",{id:!0,class:!0,href:!0});var Te=n(d);V=r(Te,"SPAN",{});var Ce=n(V);je(E.$$.fragment,Ce),Ce.forEach(a),Te.forEach(a),ne=f(Y),B=r(Y,"SPAN",{});var Pe=n(B);se=l(Pe,"XLS-R"),Pe.forEach(a),Y.forEach(a),z=f(e),m=r(e,"H2",{class:!0});var D=n(m);g=r(D,"A",{id:!0,class:!0,href:!0});var $e=n(g);W=r($e,"SPAN",{});var Ve=n(W);je(k.$$.fragment,Ve),Ve.forEach(a),$e.forEach(a),ie=f(D),M=r(D,"SPAN",{});var Be=n(M);le=l(Be,"Overview"),Be.forEach(a),D.forEach(a),I=f(e),w=r(e,"P",{});var Z=n(w);he=l(Z,"The XLS-R model was proposed in "),y=r(Z,"A",{href:!0,rel:!0});var We=n(y);ce=l(We,"XLS-R: Self-supervised Cross-lingual Speech Representation Learning at Scale"),We.forEach(a),pe=l(Z,` by Arun Babu, Changhan Wang, Andros Tjandra, Kushal Lakhotia, Qiantong Xu, Naman
Goyal, Kritika Singh, Patrick von Platen, Yatharth Saraf, Juan Pino, Alexei Baevski, Alexis Conneau, Michael Auli.`),Z.forEach(a),K=f(e),x=r(e,"P",{});var Me=n(x);fe=l(Me,"The abstract from the paper is the following:"),Me.forEach(a),U=f(e),T=r(e,"P",{});var Oe=n(T);O=r(Oe,"EM",{});var Ne=n(O);ue=l(Ne,`This paper presents XLS-R, a large-scale model for cross-lingual speech representation learning based on wav2vec 2.0.
We train models with up to 2B parameters on nearly half a million hours of publicly available speech audio in 128
languages, an order of magnitude more public data than the largest known prior work. Our evaluation covers a wide range
of tasks, domains, data regimes and languages, both high and low-resource. On the CoVoST-2 speech translation
benchmark, we improve the previous state of the art by an average of 7.4 BLEU over 21 translation directions into
English. For speech recognition, XLS-R improves over the best known prior work on BABEL, MLS, CommonVoice as well as
VoxPopuli, lowering error rates by 14-34% relative on average. XLS-R also sets a new state of the art on VoxLingua107
language identification. Moreover, we show that with sufficient model size, cross-lingual pretraining can outperform
English-only pretraining when translating English speech into other languages, a setting which favors monolingual
pretraining. We hope XLS-R can help to improve speech processing tasks for many more languages of the world.`),Ne.forEach(a),Oe.forEach(a),G=f(e),C=r(e,"P",{});var qe=n(C);ve=l(qe,"Tips:"),qe.forEach(a),J=f(e),_=r(e,"UL",{});var ee=n(_);N=r(ee,"LI",{});var ze=n(N);me=l(ze,"XLS-R is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),ze.forEach(a),de=f(ee),R=r(ee,"LI",{});var ae=n(R);ge=l(ae,`XLS-R model was trained using connectionist temporal classification (CTC) so the model output has to be decoded using
`),P=r(ae,"A",{href:!0});var Ie=n(P);we=l(Ie,"Wav2Vec2CTCTokenizer"),Ie.forEach(a),_e=l(ae,"."),ae.forEach(a),ee.forEach(a),j=f(e),S=r(e,"P",{});var te=n(S);Se=l(te,"Relevant checkpoints can be found under "),A=r(te,"A",{href:!0,rel:!0});var Ke=n(A);be=l(Ke,"https://huggingface.co/models?other=xls_r"),Ke.forEach(a),Le=l(te,"."),te.forEach(a),F=f(e),b=r(e,"P",{});var oe=n(b);Ee=l(oe,"XLS-R\u2019s architecture is based on the Wav2Vec2 model, so one can refer to "),$=r(oe,"A",{href:!0});var Ue=n($);ke=l(Ue,"Wav2Vec2\u2019s documentation page"),Ue.forEach(a),ye=l(oe,"."),oe.forEach(a),H=f(e),L=r(e,"P",{});var re=n(L);Re=l(re,"The original code can be found "),X=r(re,"A",{href:!0,rel:!0});var Ge=n(X);Ae=l(Ge,"here"),Ge.forEach(a),Xe=l(re,"."),re.forEach(a),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(sa)),c(d,"id","xlsr"),c(d,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(d,"href","#xlsr"),c(v,"class","relative group"),c(g,"id","overview"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#overview"),c(m,"class","relative group"),c(y,"href","https://arxiv.org/abs/2111.09296"),c(y,"rel","nofollow"),c(P,"href","/docs/transformers/v4.23.1/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),c(A,"href","https://huggingface.co/models?other=xls_r"),c(A,"rel","nofollow"),c($,"href","wav2vec2"),c(X,"href","https://github.com/pytorch/fairseq/tree/master/fairseq/models/wav2vec"),c(X,"rel","nofollow")},m(e,s){t(document.head,u),h(e,q,s),h(e,v,s),t(v,d),t(d,V),Fe(E,V,null),t(v,ne),t(v,B),t(B,se),h(e,z,s),h(e,m,s),t(m,g),t(g,W),Fe(k,W,null),t(m,ie),t(m,M),t(M,le),h(e,I,s),h(e,w,s),t(w,he),t(w,y),t(y,ce),t(w,pe),h(e,K,s),h(e,x,s),t(x,fe),h(e,U,s),h(e,T,s),t(T,O),t(O,ue),h(e,G,s),h(e,C,s),t(C,ve),h(e,J,s),h(e,_,s),t(_,N),t(N,me),t(_,de),t(_,R),t(R,ge),t(R,P),t(P,we),t(R,_e),h(e,j,s),h(e,S,s),t(S,Se),t(S,A),t(A,be),t(S,Le),h(e,F,s),h(e,b,s),t(b,Ee),t(b,$),t($,ke),t(b,ye),h(e,H,s),h(e,L,s),t(L,Re),t(L,X),t(X,Ae),t(L,Xe),Q=!0},p:oa,i(e){Q||(He(E.$$.fragment,e),He(k.$$.fragment,e),Q=!0)},o(e){Qe(E.$$.fragment,e),Qe(k.$$.fragment,e),Q=!1},d(e){a(u),e&&a(q),e&&a(v),Ye(E),e&&a(z),e&&a(m),Ye(k),e&&a(I),e&&a(w),e&&a(K),e&&a(x),e&&a(U),e&&a(T),e&&a(G),e&&a(C),e&&a(J),e&&a(_),e&&a(j),e&&a(S),e&&a(F),e&&a(b),e&&a(H),e&&a(L)}}}const sa={local:"xlsr",sections:[{local:"overview",title:"Overview"}],title:"XLS-R"};function ia(xe){return ra(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ca extends Ze{constructor(u){super();ea(this,u,ia,na,aa,{})}}export{ca as default,sa as metadata};
