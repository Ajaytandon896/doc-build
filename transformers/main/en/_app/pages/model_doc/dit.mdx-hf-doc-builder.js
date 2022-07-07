import{S as oa,i as ia,s as sa,e as r,k as u,w as re,t as o,M as ra,c as l,d as t,m as c,a as n,x as le,h as i,b as f,N as la,G as a,g as m,y as ne,L as na,q as fe,o as me,B as ue,v as fa}from"../../chunks/vendor-hf-doc-builder.js";import{I as aa}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as Mt}from"../../chunks/CodeBlock-hf-doc-builder.js";function ma(Pt){let v,ce,w,_,ee,D,Fe,te,Ne,de,b,T,ae,$,Oe,oe,Ve,he,d,We,I,Xe,Ye,W,Je,Ge,pe,h,M,He,P,Ue,Ze,ze,L,Ke,C,Qe,et,tt,x,at,B,ot,it,ge,X,st,ve,Y,ie,rt,we,k,Lt,be,J,lt,_e,G,nt,Te,q,ke,H,ft,ye,y,mt,se,ut,ct,Ee,R,Ae,E,dt,S,ht,pt,De,j,$e,p,gt,F,vt,wt,N,bt,_t,Ie,A,Tt,U,kt,yt,Me,g,Et,O,At,Dt,V,$t,It,Pe;return D=new aa({}),$=new aa({}),q=new Mt({props:{code:`from transformers import AutoModel

model = AutoModel.from_pretrained("microsoft/dit-base")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel

model = AutoModel.from_pretrained(<span class="hljs-string">&quot;microsoft/dit-base&quot;</span>)`}}),R=new Mt({props:{code:`from transformers import BeitForMaskedImageModeling

model = BeitForMaskedImageModeling.from_pretrained("microsoft/dit-base")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BeitForMaskedImageModeling

model = BeitForMaskedImageModeling.from_pretrained(<span class="hljs-string">&quot;microsoft/dit-base&quot;</span>)`}}),j=new Mt({props:{code:`from transformers import AutoModelForImageClassification

model = AutoModelForImageClassification.from_pretrained("microsoft/dit-base-finetuned-rvlcdip")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForImageClassification

model = AutoModelForImageClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/dit-base-finetuned-rvlcdip&quot;</span>)`}}),{c(){v=r("meta"),ce=u(),w=r("h1"),_=r("a"),ee=r("span"),re(D.$$.fragment),Fe=u(),te=r("span"),Ne=o("DiT"),de=u(),b=r("h2"),T=r("a"),ae=r("span"),re($.$$.fragment),Oe=u(),oe=r("span"),Ve=o("Overview"),he=u(),d=r("p"),We=o("DiT was proposed in "),I=r("a"),Xe=o("DiT: Self-supervised Pre-training for Document Image Transformer"),Ye=o(` by Junlong Li, Yiheng Xu, Tengchao Lv, Lei Cui, Cha Zhang, Furu Wei.
DiT applies the self-supervised objective of `),W=r("a"),Je=o("BEiT"),Ge=o(" (BERT pre-training of Image Transformers) to 42 million document images, allowing for state-of-the-art results on tasks including:"),pe=u(),h=r("ul"),M=r("li"),He=o("document image classification: the "),P=r("a"),Ue=o("RVL-CDIP"),Ze=o(` dataset (a collection of
400,000 images belonging to one of 16 classes).`),ze=u(),L=r("li"),Ke=o("document layout analysis: the "),C=r("a"),Qe=o("PubLayNet"),et=o(` dataset (a collection of more
than 360,000 document images constructed by automatically parsing PubMed XML files).`),tt=u(),x=r("li"),at=o("table detection: the "),B=r("a"),ot=o("ICDAR 2019 cTDaR"),it=o(` dataset (a collection of
600 training images and 240 testing images).`),ge=u(),X=r("p"),st=o("The abstract from the paper is the following:"),ve=u(),Y=r("p"),ie=r("em"),rt=o("Image Transformer has recently achieved significant progress for natural image understanding, either using supervised (ViT, DeiT, etc.) or self-supervised (BEiT, MAE, etc.) pre-training techniques. In this paper, we propose DiT, a self-supervised pre-trained Document Image Transformer model using large-scale unlabeled text images for Document AI tasks, which is essential since no supervised counterparts ever exist due to the lack of human labeled document images. We leverage DiT as the backbone network in a variety of vision-based Document AI tasks, including document image classification, document layout analysis, as well as table detection. Experiment results have illustrated that the self-supervised pre-trained DiT model achieves new state-of-the-art results on these downstream tasks, e.g. document image classification (91.11 \u2192 92.69), document layout analysis (91.0 \u2192 94.9) and table detection (94.23 \u2192 96.55)."),we=u(),k=r("img"),be=u(),J=r("small"),lt=o("Summary of the approach. Taken from the [original paper](https://arxiv.org/abs/2203.02378)."),_e=u(),G=r("p"),nt=o("One can directly use the weights of DiT with the AutoModel API:"),Te=u(),re(q.$$.fragment),ke=u(),H=r("p"),ft=o("This will load the model pre-trained on masked image modeling. Note that this won\u2019t include the language modeling head on top, used to predict visual tokens."),ye=u(),y=r("p"),mt=o("To include the head, you can load the weights into a "),se=r("code"),ut=o("BeitForMaskedImageModeling"),ct=o(" model, like so:"),Ee=u(),re(R.$$.fragment),Ae=u(),E=r("p"),dt=o("You can also load a fine-tuned model from the "),S=r("a"),ht=o("hub"),pt=o(", like so:"),De=u(),re(j.$$.fragment),$e=u(),p=r("p"),gt=o("This particular checkpoint was fine-tuned on "),F=r("a"),vt=o("RVL-CDIP"),wt=o(`, an important benchmark for document image classification.
A notebook that illustrates inference for document image classification can be found `),N=r("a"),bt=o("here"),_t=o("."),Ie=u(),A=r("p"),Tt=o("As DiT\u2019s architecture is equivalent to that of BEiT, one can refer to "),U=r("a"),kt=o("BEiT\u2019s documentation page"),yt=o(" for all tips, code examples and notebooks."),Me=u(),g=r("p"),Et=o("This model was contributed by "),O=r("a"),At=o("nielsr"),Dt=o(". The original code can be found "),V=r("a"),$t=o("here"),It=o("."),this.h()},l(e){const s=ra('[data-svelte="svelte-1phssyn"]',document.head);v=l(s,"META",{name:!0,content:!0}),s.forEach(t),ce=c(e),w=l(e,"H1",{class:!0});var Le=n(w);_=l(Le,"A",{id:!0,class:!0,href:!0});var Ct=n(_);ee=l(Ct,"SPAN",{});var xt=n(ee);le(D.$$.fragment,xt),xt.forEach(t),Ct.forEach(t),Fe=c(Le),te=l(Le,"SPAN",{});var Bt=n(te);Ne=i(Bt,"DiT"),Bt.forEach(t),Le.forEach(t),de=c(e),b=l(e,"H2",{class:!0});var Ce=n(b);T=l(Ce,"A",{id:!0,class:!0,href:!0});var qt=n(T);ae=l(qt,"SPAN",{});var Rt=n(ae);le($.$$.fragment,Rt),Rt.forEach(t),qt.forEach(t),Oe=c(Ce),oe=l(Ce,"SPAN",{});var St=n(oe);Ve=i(St,"Overview"),St.forEach(t),Ce.forEach(t),he=c(e),d=l(e,"P",{});var Z=n(d);We=i(Z,"DiT was proposed in "),I=l(Z,"A",{href:!0,rel:!0});var jt=n(I);Xe=i(jt,"DiT: Self-supervised Pre-training for Document Image Transformer"),jt.forEach(t),Ye=i(Z,` by Junlong Li, Yiheng Xu, Tengchao Lv, Lei Cui, Cha Zhang, Furu Wei.
DiT applies the self-supervised objective of `),W=l(Z,"A",{href:!0});var Ft=n(W);Je=i(Ft,"BEiT"),Ft.forEach(t),Ge=i(Z," (BERT pre-training of Image Transformers) to 42 million document images, allowing for state-of-the-art results on tasks including:"),Z.forEach(t),pe=c(e),h=l(e,"UL",{});var z=n(h);M=l(z,"LI",{});var xe=n(M);He=i(xe,"document image classification: the "),P=l(xe,"A",{href:!0,rel:!0});var Nt=n(P);Ue=i(Nt,"RVL-CDIP"),Nt.forEach(t),Ze=i(xe,` dataset (a collection of
400,000 images belonging to one of 16 classes).`),xe.forEach(t),ze=c(z),L=l(z,"LI",{});var Be=n(L);Ke=i(Be,"document layout analysis: the "),C=l(Be,"A",{href:!0,rel:!0});var Ot=n(C);Qe=i(Ot,"PubLayNet"),Ot.forEach(t),et=i(Be,` dataset (a collection of more
than 360,000 document images constructed by automatically parsing PubMed XML files).`),Be.forEach(t),tt=c(z),x=l(z,"LI",{});var qe=n(x);at=i(qe,"table detection: the "),B=l(qe,"A",{href:!0,rel:!0});var Vt=n(B);ot=i(Vt,"ICDAR 2019 cTDaR"),Vt.forEach(t),it=i(qe,` dataset (a collection of
600 training images and 240 testing images).`),qe.forEach(t),z.forEach(t),ge=c(e),X=l(e,"P",{});var Wt=n(X);st=i(Wt,"The abstract from the paper is the following:"),Wt.forEach(t),ve=c(e),Y=l(e,"P",{});var Xt=n(Y);ie=l(Xt,"EM",{});var Yt=n(ie);rt=i(Yt,"Image Transformer has recently achieved significant progress for natural image understanding, either using supervised (ViT, DeiT, etc.) or self-supervised (BEiT, MAE, etc.) pre-training techniques. In this paper, we propose DiT, a self-supervised pre-trained Document Image Transformer model using large-scale unlabeled text images for Document AI tasks, which is essential since no supervised counterparts ever exist due to the lack of human labeled document images. We leverage DiT as the backbone network in a variety of vision-based Document AI tasks, including document image classification, document layout analysis, as well as table detection. Experiment results have illustrated that the self-supervised pre-trained DiT model achieves new state-of-the-art results on these downstream tasks, e.g. document image classification (91.11 \u2192 92.69), document layout analysis (91.0 \u2192 94.9) and table detection (94.23 \u2192 96.55)."),Yt.forEach(t),Xt.forEach(t),we=c(e),k=l(e,"IMG",{src:!0,alt:!0,width:!0}),be=c(e),J=l(e,"SMALL",{});var Jt=n(J);lt=i(Jt,"Summary of the approach. Taken from the [original paper](https://arxiv.org/abs/2203.02378)."),Jt.forEach(t),_e=c(e),G=l(e,"P",{});var Gt=n(G);nt=i(Gt,"One can directly use the weights of DiT with the AutoModel API:"),Gt.forEach(t),Te=c(e),le(q.$$.fragment,e),ke=c(e),H=l(e,"P",{});var Ht=n(H);ft=i(Ht,"This will load the model pre-trained on masked image modeling. Note that this won\u2019t include the language modeling head on top, used to predict visual tokens."),Ht.forEach(t),ye=c(e),y=l(e,"P",{});var Re=n(y);mt=i(Re,"To include the head, you can load the weights into a "),se=l(Re,"CODE",{});var Ut=n(se);ut=i(Ut,"BeitForMaskedImageModeling"),Ut.forEach(t),ct=i(Re," model, like so:"),Re.forEach(t),Ee=c(e),le(R.$$.fragment,e),Ae=c(e),E=l(e,"P",{});var Se=n(E);dt=i(Se,"You can also load a fine-tuned model from the "),S=l(Se,"A",{href:!0,rel:!0});var Zt=n(S);ht=i(Zt,"hub"),Zt.forEach(t),pt=i(Se,", like so:"),Se.forEach(t),De=c(e),le(j.$$.fragment,e),$e=c(e),p=l(e,"P",{});var K=n(p);gt=i(K,"This particular checkpoint was fine-tuned on "),F=l(K,"A",{href:!0,rel:!0});var zt=n(F);vt=i(zt,"RVL-CDIP"),zt.forEach(t),wt=i(K,`, an important benchmark for document image classification.
A notebook that illustrates inference for document image classification can be found `),N=l(K,"A",{href:!0,rel:!0});var Kt=n(N);bt=i(Kt,"here"),Kt.forEach(t),_t=i(K,"."),K.forEach(t),Ie=c(e),A=l(e,"P",{});var je=n(A);Tt=i(je,"As DiT\u2019s architecture is equivalent to that of BEiT, one can refer to "),U=l(je,"A",{href:!0});var Qt=n(U);kt=i(Qt,"BEiT\u2019s documentation page"),Qt.forEach(t),yt=i(je," for all tips, code examples and notebooks."),je.forEach(t),Me=c(e),g=l(e,"P",{});var Q=n(g);Et=i(Q,"This model was contributed by "),O=l(Q,"A",{href:!0,rel:!0});var ea=n(O);At=i(ea,"nielsr"),ea.forEach(t),Dt=i(Q,". The original code can be found "),V=l(Q,"A",{href:!0,rel:!0});var ta=n(V);$t=i(ta,"here"),ta.forEach(t),It=i(Q,"."),Q.forEach(t),this.h()},h(){f(v,"name","hf:doc:metadata"),f(v,"content",JSON.stringify(ua)),f(_,"id","dit"),f(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(_,"href","#dit"),f(w,"class","relative group"),f(T,"id","overview"),f(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(T,"href","#overview"),f(b,"class","relative group"),f(I,"href","https://arxiv.org/abs/2203.02378"),f(I,"rel","nofollow"),f(W,"href","beit"),f(P,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),f(P,"rel","nofollow"),f(C,"href","https://github.com/ibm-aur-nlp/PubLayNet"),f(C,"rel","nofollow"),f(B,"href","https://github.com/cndplab-founder/ICDAR2019_cTDaR"),f(B,"rel","nofollow"),la(k.src,Lt="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/dit_architecture.jpg")||f(k,"src",Lt),f(k,"alt","drawing"),f(k,"width","600"),f(S,"href","https://huggingface.co/models?other=dit"),f(S,"rel","nofollow"),f(F,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),f(F,"rel","nofollow"),f(N,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/DiT/Inference_with_DiT_(Document_Image_Transformer)_for_document_image_classification.ipynb"),f(N,"rel","nofollow"),f(U,"href","beit"),f(O,"href","https://huggingface.co/nielsr"),f(O,"rel","nofollow"),f(V,"href","https://github.com/microsoft/unilm/tree/master/dit"),f(V,"rel","nofollow")},m(e,s){a(document.head,v),m(e,ce,s),m(e,w,s),a(w,_),a(_,ee),ne(D,ee,null),a(w,Fe),a(w,te),a(te,Ne),m(e,de,s),m(e,b,s),a(b,T),a(T,ae),ne($,ae,null),a(b,Oe),a(b,oe),a(oe,Ve),m(e,he,s),m(e,d,s),a(d,We),a(d,I),a(I,Xe),a(d,Ye),a(d,W),a(W,Je),a(d,Ge),m(e,pe,s),m(e,h,s),a(h,M),a(M,He),a(M,P),a(P,Ue),a(M,Ze),a(h,ze),a(h,L),a(L,Ke),a(L,C),a(C,Qe),a(L,et),a(h,tt),a(h,x),a(x,at),a(x,B),a(B,ot),a(x,it),m(e,ge,s),m(e,X,s),a(X,st),m(e,ve,s),m(e,Y,s),a(Y,ie),a(ie,rt),m(e,we,s),m(e,k,s),m(e,be,s),m(e,J,s),a(J,lt),m(e,_e,s),m(e,G,s),a(G,nt),m(e,Te,s),ne(q,e,s),m(e,ke,s),m(e,H,s),a(H,ft),m(e,ye,s),m(e,y,s),a(y,mt),a(y,se),a(se,ut),a(y,ct),m(e,Ee,s),ne(R,e,s),m(e,Ae,s),m(e,E,s),a(E,dt),a(E,S),a(S,ht),a(E,pt),m(e,De,s),ne(j,e,s),m(e,$e,s),m(e,p,s),a(p,gt),a(p,F),a(F,vt),a(p,wt),a(p,N),a(N,bt),a(p,_t),m(e,Ie,s),m(e,A,s),a(A,Tt),a(A,U),a(U,kt),a(A,yt),m(e,Me,s),m(e,g,s),a(g,Et),a(g,O),a(O,At),a(g,Dt),a(g,V),a(V,$t),a(g,It),Pe=!0},p:na,i(e){Pe||(fe(D.$$.fragment,e),fe($.$$.fragment,e),fe(q.$$.fragment,e),fe(R.$$.fragment,e),fe(j.$$.fragment,e),Pe=!0)},o(e){me(D.$$.fragment,e),me($.$$.fragment,e),me(q.$$.fragment,e),me(R.$$.fragment,e),me(j.$$.fragment,e),Pe=!1},d(e){t(v),e&&t(ce),e&&t(w),ue(D),e&&t(de),e&&t(b),ue($),e&&t(he),e&&t(d),e&&t(pe),e&&t(h),e&&t(ge),e&&t(X),e&&t(ve),e&&t(Y),e&&t(we),e&&t(k),e&&t(be),e&&t(J),e&&t(_e),e&&t(G),e&&t(Te),ue(q,e),e&&t(ke),e&&t(H),e&&t(ye),e&&t(y),e&&t(Ee),ue(R,e),e&&t(Ae),e&&t(E),e&&t(De),ue(j,e),e&&t($e),e&&t(p),e&&t(Ie),e&&t(A),e&&t(Me),e&&t(g)}}}const ua={local:"dit",sections:[{local:"overview",title:"Overview"}],title:"DiT"};function ca(Pt){return fa(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ga extends oa{constructor(v){super();ia(this,v,ca,ma,sa,{})}}export{ga as default,ua as metadata};
