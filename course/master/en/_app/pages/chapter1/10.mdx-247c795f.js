import{S as Ur,i as Yr,s as Gr,e as o,k as h,w as f,t as g,M as Vr,c as a,d as t,m as p,a as i,x as u,h as $,b as n,F as r,g as l,y as c,L as Xr,q as m,o as d,B as w,v as Zr,O as es}from"../../chunks/vendor-e7c81d8a.js";import{I as v}from"../../chunks/WidgetTextarea.svelte_svelte_type_style_lang-08e92eaf.js";import{C as nr}from"../../chunks/CodeBlock-105940ae.js";import{Q as y}from"../../chunks/Question-657ba631.js";const{document:Jr}=es;function ts(lr){let b,Qe,x,H,be,R,zt,xe,Ht,Re,ve,jt,Je,ye,Ft,Ue,k,j,ke,J,Ct,U,It,_e,Mt,Dt,Ye,Y,Ge,_,F,Ee,G,Lt,Ae,Bt,Ve,V,Xe,X,Ze,E,C,qe,Z,Ot,Te,Kt,et,ee,tt,te,rt,A,I,Se,re,Qt,Pe,Rt,st,se,ot,oe,at,q,M,Ne,ae,Jt,We,Ut,it,ie,nt,T,D,ze,ne,Yt,He,Gt,lt,le,ht,S,L,je,he,Vt,Fe,Xt,pt,pe,ft,P,B,Ce,fe,Zt,Ie,er,ut,ue,ct,N,O,Me,ce,tr,De,rr,mt,me,dt,W,K,Le,de,sr,Be,or,wt,we,gt,z,Q,Oe,ge,ar,Ke,ir,$t,$e,vt;return R=new v({}),J=new v({}),Y=new y({props:{choices:[{text:"Summarization",explain:'Look again on the <a href="https://huggingface.co/roberta-large-mnli">roberta-large-mnli page</a>.'},{text:"Text classification",explain:"More precisely, it classifies if two sentences are logically linked across three labels (contradiction, neutral, entailment) \u2014 a task also called <em>natural language inference</em>.",correct:!0},{text:"Text generation",explain:'Look again on the <a href="https://huggingface.co/roberta-large-mnli">roberta-large-mnli page</a>.'}]}}),G=new v({}),V=new nr({props:{codee:`from transformers import pipeline

ner = pipeline("ner", grouped_entities=True)
ner("My name is Sylvain and I work at Hugging Face in Brooklyn."),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

ner = pipeline(<span class="hljs-string">&quot;ner&quot;</span>, grouped_entities=<span class="hljs-literal">True</span>)
ner(<span class="hljs-string">&quot;My name is Sylvain and I work at Hugging Face in Brooklyn.&quot;</span>)`}}),X=new y({props:{choices:[{text:'It will return classification scores for this sentence, with labels "positive" or "negative".',explain:"This is incorrect \u2014 this would be a <code>sentiment-analysis</code> pipeline."},{text:"It will return a generated text completing this sentence.",explain:"This is incorrect \u2014 it would be a <code>text-generation</code> pipeline."},{text:"It will return the words representing persons, organizations or locations.",explain:'Furthermore, with <code>grouped_entities=True</code>, it will group together the words belonging to the same entity, like "Hugging Face".',correct:!0}]}}),Z=new v({}),ee=new nr({props:{codee:`from transformers import pipeline

filler = pipeline("fill-mask", model="bert-base-cased")
result = filler("..."),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

filler = pipeline(<span class="hljs-string">&quot;fill-mask&quot;</span>, model=<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
result = filler(<span class="hljs-string">&quot;...&quot;</span>)`}}),te=new y({props:{choices:[{text:"This &amp;lt;mask> has been waiting for you.",explain:"This is incorrect. Check out the <code>bert-base-cased</code> model card and try to spot your mistake."},{text:"This [MASK] has been waiting for you.",explain:"Correct! This model's mask token is [MASK].",correct:!0},{text:"This man has been waiting for you.",explain:"This is incorrect. This pipeline fills in masked words, so it needs a mask token somewhere."}]}}),re=new v({}),se=new nr({props:{codee:`from transformers import pipeline

classifier = pipeline("zero-shot-classification")
result = classifier("This is a course about the Transformers library"),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

classifier = pipeline(<span class="hljs-string">&quot;zero-shot-classification&quot;</span>)
result = classifier(<span class="hljs-string">&quot;This is a course about the Transformers library&quot;</span>)`}}),oe=new y({props:{choices:[{text:"This pipeline requires that labels be given to classify this text.",explain:"Right \u2014 the correct code needs to include <code>candidate_labels=[...]</code>.",correct:!0},{text:"This pipeline requires several sentences, not just one.",explain:"This is incorrect, though when properly used, this pipeline can take a list of sentences to process (like all other pipelines)."},{text:"The \u{1F917} Transformers library is broken, as usual.",explain:"We won't dignify this answer with a comment!"},{text:"This pipeline requires longer inputs; this one is too short.",explain:"This is incorrect. Note that a very long text will be truncated when processed by this pipeline."}]}}),ae=new v({}),ie=new y({props:{choices:[{text:"Transferring the knowledge of a pretrained model to a new model by training it on the same dataset.",explain:"No, that would be two versions of the same model."},{text:"Transferring the knowledge of a pretrained model to a new model by initializing the second model with the first model's weights.",explain:"Correct: when the second model is trained on a new task, it *transfers* the knowledge of the first model.",correct:!0},{text:"Transferring the knowledge of a pretrained model to a new model by building the second model with the same architecture as the first model.",explain:"The architecture is just the way the model is built; there is no knowledge shared or transferred in this case."}]}}),ne=new v({}),le=new y({props:{choices:[{text:"True",explain:"The pretraining is usually <em>self-supervised</em>, which means the labels are created automatically from the inputs (like predicting the next word or filling in some masked words).",correct:!0},{text:"False",explain:"This is not the correct answer."}]}}),he=new v({}),pe=new y({props:{choices:[{text:"If a model is a building, its architecture is the blueprint and the weights are the people living inside.",explain:"Following this metaphor, the weights would be the bricks and other materials used to construct the building."},{text:"An architecture is a map to build a model and its weights are the cities represented on the map.",explain:"The problem with this metaphor is that a map usually represents one existing reality (there is only one city in France named Paris). For a given architecture, multiple weights are possible."},{text:"An architecture is a succession of mathematical functions to build a model and its weights are those functions parameters.",explain:"The same set of mathematical functions (architecture) can be used to build different models by using different parameters (weights).",correct:!0}]}}),fe=new v({}),ue=new y({props:{choices:[{text:"An encoder model",explain:"An encoder model generates a representation of the whole sentence that is better suited for tasks like classification."},{text:"A decoder model",explain:"Decoder models are perfectly suited for text generation from a prompt.",correct:!0},{text:"A sequence-to-sequence model",explain:"Sequence-to-sequence models are better suited for tasks where you want to generate sentences in relation to the input sentences, not a given prompt."}]}}),ce=new v({}),me=new y({props:{choices:[{text:"An encoder model",explain:"An encoder model generates a representation of the whole sentence that is better suited for tasks like classification."},{text:"A decoder model",explain:"Decoder models are good for generating output text (like summaries), but they don't have the ability to exploit a context like the whole text to summarize."},{text:"A sequence-to-sequence model",explain:"Sequence-to-sequence models are perfectly suited for a summarization task.",correct:!0}]}}),de=new v({}),we=new y({props:{choices:[{text:"An encoder model",explain:"An encoder model generates a representation of the whole sentence which is perfectly suited for a task like classification.",correct:!0},{text:"A decoder model",explain:"Decoder models are good for generating output texts, not extracting a label out of a sentence."},{text:"A sequence-to-sequence model",explain:"Sequence-to-sequence models are better suited for tasks where you want to generate text based on an input sentence, not a label."}]}}),ge=new v({}),$e=new y({props:{choices:[{text:"The model is a fine-tuned version of a pretrained model and it picked up its bias from it.",explain:"When applying Transfer Learning, the bias in the pretrained model used perspires in the fine-tuned model.",correct:!0},{text:"The data the model was trained on is biased.",explain:"This is the most obvious source of bias, but not the only one.",correct:!0},{text:"The metric the model was optimizing for is biased.",explain:"A less obvious source of bias is the way the model is trained. Your model will blindly optimize for whatever metric you chose, without any second thoughts.",correct:!0}]}}),{c(){b=o("meta"),Qe=h(),x=o("h1"),H=o("a"),be=o("span"),f(R.$$.fragment),zt=h(),xe=o("span"),Ht=g("End-of-chapter quiz"),Re=h(),ve=o("p"),jt=g("This chapter covered a lot of ground! Don\u2019t worry if you didn\u2019t grasp all the details; the next chapters will help you understand how things work under the hood."),Je=h(),ye=o("p"),Ft=g("First, though, let\u2019s test what you learned in this chapter!"),Ue=h(),k=o("h3"),j=o("a"),ke=o("span"),f(J.$$.fragment),Ct=h(),U=o("span"),It=g("1. Explore the Hub and look for the "),_e=o("code"),Mt=g("roberta-large-mnli"),Dt=g(" checkpoint. What task does it perform?"),Ye=h(),f(Y.$$.fragment),Ge=h(),_=o("h3"),F=o("a"),Ee=o("span"),f(G.$$.fragment),Lt=h(),Ae=o("span"),Bt=g("2. What will the following code return?"),Ve=h(),f(V.$$.fragment),Xe=h(),f(X.$$.fragment),Ze=h(),E=o("h3"),C=o("a"),qe=o("span"),f(Z.$$.fragment),Ot=h(),Te=o("span"),Kt=g("3. What should replace \u2026 in this code sample?"),et=h(),f(ee.$$.fragment),tt=h(),f(te.$$.fragment),rt=h(),A=o("h3"),I=o("a"),Se=o("span"),f(re.$$.fragment),Qt=h(),Pe=o("span"),Rt=g("4. Why will this code fail?"),st=h(),f(se.$$.fragment),ot=h(),f(oe.$$.fragment),at=h(),q=o("h3"),M=o("a"),Ne=o("span"),f(ae.$$.fragment),Jt=h(),We=o("span"),Ut=g("5. What does \u201Ctransfer learning\u201D mean?"),it=h(),f(ie.$$.fragment),nt=h(),T=o("h3"),D=o("a"),ze=o("span"),f(ne.$$.fragment),Yt=h(),He=o("span"),Gt=g("6. True or false? A language model usually does not need labels for its pretraining."),lt=h(),f(le.$$.fragment),ht=h(),S=o("h3"),L=o("a"),je=o("span"),f(he.$$.fragment),Vt=h(),Fe=o("span"),Xt=g("7. Select the sentence that best describes the terms \u201Cmodel,\u201D \u201Carchitecture,\u201D and \u201Cweights.\u201D"),pt=h(),f(pe.$$.fragment),ft=h(),P=o("h3"),B=o("a"),Ce=o("span"),f(fe.$$.fragment),Zt=h(),Ie=o("span"),er=g("8. Which of these types of models would you use for completing prompts with generated text?"),ut=h(),f(ue.$$.fragment),ct=h(),N=o("h3"),O=o("a"),Me=o("span"),f(ce.$$.fragment),tr=h(),De=o("span"),rr=g("9. Which of those types of models would you use for summarizing texts?"),mt=h(),f(me.$$.fragment),dt=h(),W=o("h3"),K=o("a"),Le=o("span"),f(de.$$.fragment),sr=h(),Be=o("span"),or=g("10. Which of these types of models would you use for classifying text inputs according to certain labels?"),wt=h(),f(we.$$.fragment),gt=h(),z=o("h3"),Q=o("a"),Oe=o("span"),f(ge.$$.fragment),ar=h(),Ke=o("span"),ir=g("11. What possible source can the bias observed in a model have?"),$t=h(),f($e.$$.fragment),this.h()},l(e){const s=Vr('[data-svelte="svelte-1phssyn"]',Jr.head);b=a(s,"META",{name:!0,content:!0}),s.forEach(t),Qe=p(e),x=a(e,"H1",{class:!0});var yt=i(x);H=a(yt,"A",{id:!0,class:!0,href:!0});var hr=i(H);be=a(hr,"SPAN",{});var pr=i(be);u(R.$$.fragment,pr),pr.forEach(t),hr.forEach(t),zt=p(yt),xe=a(yt,"SPAN",{});var fr=i(xe);Ht=$(fr,"End-of-chapter quiz"),fr.forEach(t),yt.forEach(t),Re=p(e),ve=a(e,"P",{});var ur=i(ve);jt=$(ur,"This chapter covered a lot of ground! Don\u2019t worry if you didn\u2019t grasp all the details; the next chapters will help you understand how things work under the hood."),ur.forEach(t),Je=p(e),ye=a(e,"P",{});var cr=i(ye);Ft=$(cr,"First, though, let\u2019s test what you learned in this chapter!"),cr.forEach(t),Ue=p(e),k=a(e,"H3",{class:!0});var bt=i(k);j=a(bt,"A",{id:!0,class:!0,href:!0});var mr=i(j);ke=a(mr,"SPAN",{});var dr=i(ke);u(J.$$.fragment,dr),dr.forEach(t),mr.forEach(t),Ct=p(bt),U=a(bt,"SPAN",{});var xt=i(U);It=$(xt,"1. Explore the Hub and look for the "),_e=a(xt,"CODE",{});var wr=i(_e);Mt=$(wr,"roberta-large-mnli"),wr.forEach(t),Dt=$(xt," checkpoint. What task does it perform?"),xt.forEach(t),bt.forEach(t),Ye=p(e),u(Y.$$.fragment,e),Ge=p(e),_=a(e,"H3",{class:!0});var kt=i(_);F=a(kt,"A",{id:!0,class:!0,href:!0});var gr=i(F);Ee=a(gr,"SPAN",{});var $r=i(Ee);u(G.$$.fragment,$r),$r.forEach(t),gr.forEach(t),Lt=p(kt),Ae=a(kt,"SPAN",{});var vr=i(Ae);Bt=$(vr,"2. What will the following code return?"),vr.forEach(t),kt.forEach(t),Ve=p(e),u(V.$$.fragment,e),Xe=p(e),u(X.$$.fragment,e),Ze=p(e),E=a(e,"H3",{class:!0});var _t=i(E);C=a(_t,"A",{id:!0,class:!0,href:!0});var yr=i(C);qe=a(yr,"SPAN",{});var br=i(qe);u(Z.$$.fragment,br),br.forEach(t),yr.forEach(t),Ot=p(_t),Te=a(_t,"SPAN",{});var xr=i(Te);Kt=$(xr,"3. What should replace \u2026 in this code sample?"),xr.forEach(t),_t.forEach(t),et=p(e),u(ee.$$.fragment,e),tt=p(e),u(te.$$.fragment,e),rt=p(e),A=a(e,"H3",{class:!0});var Et=i(A);I=a(Et,"A",{id:!0,class:!0,href:!0});var kr=i(I);Se=a(kr,"SPAN",{});var _r=i(Se);u(re.$$.fragment,_r),_r.forEach(t),kr.forEach(t),Qt=p(Et),Pe=a(Et,"SPAN",{});var Er=i(Pe);Rt=$(Er,"4. Why will this code fail?"),Er.forEach(t),Et.forEach(t),st=p(e),u(se.$$.fragment,e),ot=p(e),u(oe.$$.fragment,e),at=p(e),q=a(e,"H3",{class:!0});var At=i(q);M=a(At,"A",{id:!0,class:!0,href:!0});var Ar=i(M);Ne=a(Ar,"SPAN",{});var qr=i(Ne);u(ae.$$.fragment,qr),qr.forEach(t),Ar.forEach(t),Jt=p(At),We=a(At,"SPAN",{});var Tr=i(We);Ut=$(Tr,"5. What does \u201Ctransfer learning\u201D mean?"),Tr.forEach(t),At.forEach(t),it=p(e),u(ie.$$.fragment,e),nt=p(e),T=a(e,"H3",{class:!0});var qt=i(T);D=a(qt,"A",{id:!0,class:!0,href:!0});var Sr=i(D);ze=a(Sr,"SPAN",{});var Pr=i(ze);u(ne.$$.fragment,Pr),Pr.forEach(t),Sr.forEach(t),Yt=p(qt),He=a(qt,"SPAN",{});var Nr=i(He);Gt=$(Nr,"6. True or false? A language model usually does not need labels for its pretraining."),Nr.forEach(t),qt.forEach(t),lt=p(e),u(le.$$.fragment,e),ht=p(e),S=a(e,"H3",{class:!0});var Tt=i(S);L=a(Tt,"A",{id:!0,class:!0,href:!0});var Wr=i(L);je=a(Wr,"SPAN",{});var zr=i(je);u(he.$$.fragment,zr),zr.forEach(t),Wr.forEach(t),Vt=p(Tt),Fe=a(Tt,"SPAN",{});var Hr=i(Fe);Xt=$(Hr,"7. Select the sentence that best describes the terms \u201Cmodel,\u201D \u201Carchitecture,\u201D and \u201Cweights.\u201D"),Hr.forEach(t),Tt.forEach(t),pt=p(e),u(pe.$$.fragment,e),ft=p(e),P=a(e,"H3",{class:!0});var St=i(P);B=a(St,"A",{id:!0,class:!0,href:!0});var jr=i(B);Ce=a(jr,"SPAN",{});var Fr=i(Ce);u(fe.$$.fragment,Fr),Fr.forEach(t),jr.forEach(t),Zt=p(St),Ie=a(St,"SPAN",{});var Cr=i(Ie);er=$(Cr,"8. Which of these types of models would you use for completing prompts with generated text?"),Cr.forEach(t),St.forEach(t),ut=p(e),u(ue.$$.fragment,e),ct=p(e),N=a(e,"H3",{class:!0});var Pt=i(N);O=a(Pt,"A",{id:!0,class:!0,href:!0});var Ir=i(O);Me=a(Ir,"SPAN",{});var Mr=i(Me);u(ce.$$.fragment,Mr),Mr.forEach(t),Ir.forEach(t),tr=p(Pt),De=a(Pt,"SPAN",{});var Dr=i(De);rr=$(Dr,"9. Which of those types of models would you use for summarizing texts?"),Dr.forEach(t),Pt.forEach(t),mt=p(e),u(me.$$.fragment,e),dt=p(e),W=a(e,"H3",{class:!0});var Nt=i(W);K=a(Nt,"A",{id:!0,class:!0,href:!0});var Lr=i(K);Le=a(Lr,"SPAN",{});var Br=i(Le);u(de.$$.fragment,Br),Br.forEach(t),Lr.forEach(t),sr=p(Nt),Be=a(Nt,"SPAN",{});var Or=i(Be);or=$(Or,"10. Which of these types of models would you use for classifying text inputs according to certain labels?"),Or.forEach(t),Nt.forEach(t),wt=p(e),u(we.$$.fragment,e),gt=p(e),z=a(e,"H3",{class:!0});var Wt=i(z);Q=a(Wt,"A",{id:!0,class:!0,href:!0});var Kr=i(Q);Oe=a(Kr,"SPAN",{});var Qr=i(Oe);u(ge.$$.fragment,Qr),Qr.forEach(t),Kr.forEach(t),ar=p(Wt),Ke=a(Wt,"SPAN",{});var Rr=i(Ke);ir=$(Rr,"11. What possible source can the bias observed in a model have?"),Rr.forEach(t),Wt.forEach(t),$t=p(e),u($e.$$.fragment,e),this.h()},h(){n(b,"name","hf:doc:metadata"),n(b,"content",JSON.stringify(rs)),n(H,"id","endofchapter-quiz"),n(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(H,"href","#endofchapter-quiz"),n(x,"class","relative group"),n(j,"id","1.-explore-the-hub-and-look-for-the-<code>roberta-large-mnli</code>-checkpoint.-what-task-does-it-perform?"),n(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(j,"href","#1.-explore-the-hub-and-look-for-the-<code>roberta-large-mnli</code>-checkpoint.-what-task-does-it-perform?"),n(k,"class","relative group"),n(F,"id","2.-what-will-the-following-code-return?"),n(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(F,"href","#2.-what-will-the-following-code-return?"),n(_,"class","relative group"),n(C,"id","3.-what-should-replace-\u2026-in-this-code-sample?"),n(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(C,"href","#3.-what-should-replace-\u2026-in-this-code-sample?"),n(E,"class","relative group"),n(I,"id","4.-why-will-this-code-fail?"),n(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(I,"href","#4.-why-will-this-code-fail?"),n(A,"class","relative group"),n(M,"id","5.-what-does-\u201Ctransfer-learning\u201D-mean?"),n(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(M,"href","#5.-what-does-\u201Ctransfer-learning\u201D-mean?"),n(q,"class","relative group"),n(D,"id","6.-true-or-false?-a-language-model-usually-does-not-need-labels-for-its-pretraining."),n(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(D,"href","#6.-true-or-false?-a-language-model-usually-does-not-need-labels-for-its-pretraining."),n(T,"class","relative group"),n(L,"id","7.-select-the-sentence-that-best-describes-the-terms-\u201Cmodel,\u201D-\u201Carchitecture,\u201D-and-\u201Cweights.\u201D"),n(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(L,"href","#7.-select-the-sentence-that-best-describes-the-terms-\u201Cmodel,\u201D-\u201Carchitecture,\u201D-and-\u201Cweights.\u201D"),n(S,"class","relative group"),n(B,"id","8.-which-of-these-types-of-models-would-you-use-for-completing-prompts-with-generated-text?"),n(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(B,"href","#8.-which-of-these-types-of-models-would-you-use-for-completing-prompts-with-generated-text?"),n(P,"class","relative group"),n(O,"id","9.-which-of-those-types-of-models-would-you-use-for-summarizing-texts?"),n(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(O,"href","#9.-which-of-those-types-of-models-would-you-use-for-summarizing-texts?"),n(N,"class","relative group"),n(K,"id","10.-which-of-these-types-of-models-would-you-use-for-classifying-text-inputs-according-to-certain-labels?"),n(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(K,"href","#10.-which-of-these-types-of-models-would-you-use-for-classifying-text-inputs-according-to-certain-labels?"),n(W,"class","relative group"),n(Q,"id","11.-what-possible-source-can-the-bias-observed-in-a-model-have?"),n(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(Q,"href","#11.-what-possible-source-can-the-bias-observed-in-a-model-have?"),n(z,"class","relative group")},m(e,s){r(Jr.head,b),l(e,Qe,s),l(e,x,s),r(x,H),r(H,be),c(R,be,null),r(x,zt),r(x,xe),r(xe,Ht),l(e,Re,s),l(e,ve,s),r(ve,jt),l(e,Je,s),l(e,ye,s),r(ye,Ft),l(e,Ue,s),l(e,k,s),r(k,j),r(j,ke),c(J,ke,null),r(k,Ct),r(k,U),r(U,It),r(U,_e),r(_e,Mt),r(U,Dt),l(e,Ye,s),c(Y,e,s),l(e,Ge,s),l(e,_,s),r(_,F),r(F,Ee),c(G,Ee,null),r(_,Lt),r(_,Ae),r(Ae,Bt),l(e,Ve,s),c(V,e,s),l(e,Xe,s),c(X,e,s),l(e,Ze,s),l(e,E,s),r(E,C),r(C,qe),c(Z,qe,null),r(E,Ot),r(E,Te),r(Te,Kt),l(e,et,s),c(ee,e,s),l(e,tt,s),c(te,e,s),l(e,rt,s),l(e,A,s),r(A,I),r(I,Se),c(re,Se,null),r(A,Qt),r(A,Pe),r(Pe,Rt),l(e,st,s),c(se,e,s),l(e,ot,s),c(oe,e,s),l(e,at,s),l(e,q,s),r(q,M),r(M,Ne),c(ae,Ne,null),r(q,Jt),r(q,We),r(We,Ut),l(e,it,s),c(ie,e,s),l(e,nt,s),l(e,T,s),r(T,D),r(D,ze),c(ne,ze,null),r(T,Yt),r(T,He),r(He,Gt),l(e,lt,s),c(le,e,s),l(e,ht,s),l(e,S,s),r(S,L),r(L,je),c(he,je,null),r(S,Vt),r(S,Fe),r(Fe,Xt),l(e,pt,s),c(pe,e,s),l(e,ft,s),l(e,P,s),r(P,B),r(B,Ce),c(fe,Ce,null),r(P,Zt),r(P,Ie),r(Ie,er),l(e,ut,s),c(ue,e,s),l(e,ct,s),l(e,N,s),r(N,O),r(O,Me),c(ce,Me,null),r(N,tr),r(N,De),r(De,rr),l(e,mt,s),c(me,e,s),l(e,dt,s),l(e,W,s),r(W,K),r(K,Le),c(de,Le,null),r(W,sr),r(W,Be),r(Be,or),l(e,wt,s),c(we,e,s),l(e,gt,s),l(e,z,s),r(z,Q),r(Q,Oe),c(ge,Oe,null),r(z,ar),r(z,Ke),r(Ke,ir),l(e,$t,s),c($e,e,s),vt=!0},p:Xr,i(e){vt||(m(R.$$.fragment,e),m(J.$$.fragment,e),m(Y.$$.fragment,e),m(G.$$.fragment,e),m(V.$$.fragment,e),m(X.$$.fragment,e),m(Z.$$.fragment,e),m(ee.$$.fragment,e),m(te.$$.fragment,e),m(re.$$.fragment,e),m(se.$$.fragment,e),m(oe.$$.fragment,e),m(ae.$$.fragment,e),m(ie.$$.fragment,e),m(ne.$$.fragment,e),m(le.$$.fragment,e),m(he.$$.fragment,e),m(pe.$$.fragment,e),m(fe.$$.fragment,e),m(ue.$$.fragment,e),m(ce.$$.fragment,e),m(me.$$.fragment,e),m(de.$$.fragment,e),m(we.$$.fragment,e),m(ge.$$.fragment,e),m($e.$$.fragment,e),vt=!0)},o(e){d(R.$$.fragment,e),d(J.$$.fragment,e),d(Y.$$.fragment,e),d(G.$$.fragment,e),d(V.$$.fragment,e),d(X.$$.fragment,e),d(Z.$$.fragment,e),d(ee.$$.fragment,e),d(te.$$.fragment,e),d(re.$$.fragment,e),d(se.$$.fragment,e),d(oe.$$.fragment,e),d(ae.$$.fragment,e),d(ie.$$.fragment,e),d(ne.$$.fragment,e),d(le.$$.fragment,e),d(he.$$.fragment,e),d(pe.$$.fragment,e),d(fe.$$.fragment,e),d(ue.$$.fragment,e),d(ce.$$.fragment,e),d(me.$$.fragment,e),d(de.$$.fragment,e),d(we.$$.fragment,e),d(ge.$$.fragment,e),d($e.$$.fragment,e),vt=!1},d(e){t(b),e&&t(Qe),e&&t(x),w(R),e&&t(Re),e&&t(ve),e&&t(Je),e&&t(ye),e&&t(Ue),e&&t(k),w(J),e&&t(Ye),w(Y,e),e&&t(Ge),e&&t(_),w(G),e&&t(Ve),w(V,e),e&&t(Xe),w(X,e),e&&t(Ze),e&&t(E),w(Z),e&&t(et),w(ee,e),e&&t(tt),w(te,e),e&&t(rt),e&&t(A),w(re),e&&t(st),w(se,e),e&&t(ot),w(oe,e),e&&t(at),e&&t(q),w(ae),e&&t(it),w(ie,e),e&&t(nt),e&&t(T),w(ne),e&&t(lt),w(le,e),e&&t(ht),e&&t(S),w(he),e&&t(pt),w(pe,e),e&&t(ft),e&&t(P),w(fe),e&&t(ut),w(ue,e),e&&t(ct),e&&t(N),w(ce),e&&t(mt),w(me,e),e&&t(dt),e&&t(W),w(de),e&&t(wt),w(we,e),e&&t(gt),e&&t(z),w(ge),e&&t($t),w($e,e)}}}const rs={local:"endofchapter-quiz",title:"End-of-chapter quiz"};function ss(lr){return Zr(()=>{new URL(document.location).searchParams.get("fw")}),[]}class ls extends Ur{constructor(b){super();Yr(this,b,ss,ts,Gr,{})}}export{ls as default,rs as metadata};
