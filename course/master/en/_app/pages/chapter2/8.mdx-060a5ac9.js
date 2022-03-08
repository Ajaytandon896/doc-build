import{S as fo,i as po,s as mo,e as a,k as p,w as _,t as S,l as ho,M as go,c as s,d as t,m as d,x,a as h,h as N,b as i,F as o,g as f,y as A,o as v,p as lo,q as k,B as z,v as wo,O as $o,n as co}from"../../chunks/vendor-e7c81d8a.js";import{I as M}from"../../chunks/WidgetTextarea.svelte_svelte_type_style_lang-08e92eaf.js";import{C as St}from"../../chunks/CodeBlock-105940ae.js";import{Q as W}from"../../chunks/Question-657ba631.js";import{F as vo}from"../../chunks/FrameworkSwitch-287292d8.js";const{document:uo}=$o;function ko(j){let c,u,w,m,E,b,P,q,$,T;return m=new M({}),$=new W({props:{choices:[{text:"A model that automatically trains on your data",explain:"Incorrect. Are you mistaking this with our <a href='https://huggingface.co/autonlp'>AutoNLP</a> product?"},{text:"An object that returns the correct architecture based on the checkpoint",explain:"Exactly: the <code>TFAutoModel</code> only needs to know the checkpoint from which to initialize to return the correct architecture.",correct:!0},{text:"A model that automatically detects the language used for its inputs to load the correct weights",explain:"Incorrect; while some checkpoints and models are capable of handling multiple languages, there are no built-in tools for automatic checkpoint selection according to language. You should head over to the <a href='https://huggingface.co/models'>Model Hub</a> to find the best checkpoint for your task!"}]}}),{c(){c=a("h3"),u=a("a"),w=a("span"),_(m.$$.fragment),E=p(),b=a("span"),P=S("5. What is an TFAutoModel?"),q=p(),_($.$$.fragment),this.h()},l(n){c=s(n,"H3",{class:!0});var y=h(c);u=s(y,"A",{id:!0,class:!0,href:!0});var r=h(u);w=s(r,"SPAN",{});var g=h(w);x(m.$$.fragment,g),g.forEach(t),r.forEach(t),E=d(y),b=s(y,"SPAN",{});var I=h(b);P=N(I,"5. What is an TFAutoModel?"),I.forEach(t),y.forEach(t),q=d(n),x($.$$.fragment,n),this.h()},h(){i(u,"id","5.-what-is-an-tfautomodel?"),i(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(u,"href","#5.-what-is-an-tfautomodel?"),i(c,"class","relative group")},m(n,y){f(n,c,y),o(c,u),o(u,w),A(m,w,null),o(c,E),o(c,b),o(b,P),f(n,q,y),A($,n,y),T=!0},i(n){T||(k(m.$$.fragment,n),k($.$$.fragment,n),T=!0)},o(n){v(m.$$.fragment,n),v($.$$.fragment,n),T=!1},d(n){n&&t(c),z(m),n&&t(q),z($,n)}}}function bo(j){let c,u,w,m,E,b,P,q,$,T;return m=new M({}),$=new W({props:{choices:[{text:"A model that automatically trains on your data",explain:"Incorrect. Are you mistaking this with our <a href='https://huggingface.co/autonlp'>AutoNLP</a> product?"},{text:"An object that returns the correct architecture based on the checkpoint",explain:"Exactly: the <code>AutoModel</code> only needs to know the checkpoint from which to initialize to return the correct architecture.",correct:!0},{text:"A model that automatically detects the language used for its inputs to load the correct weights",explain:"Incorrect; while some checkpoints and models are capable of handling multiple languages, there are no built-in tools for automatic checkpoint selection according to language. You should head over to the <a href='https://huggingface.co/models'>Model Hub</a> to find the best checkpoint for your task!"}]}}),{c(){c=a("h3"),u=a("a"),w=a("span"),_(m.$$.fragment),E=p(),b=a("span"),P=S("5. What is an AutoModel?"),q=p(),_($.$$.fragment),this.h()},l(n){c=s(n,"H3",{class:!0});var y=h(c);u=s(y,"A",{id:!0,class:!0,href:!0});var r=h(u);w=s(r,"SPAN",{});var g=h(w);x(m.$$.fragment,g),g.forEach(t),r.forEach(t),E=d(y),b=s(y,"SPAN",{});var I=h(b);P=N(I,"5. What is an AutoModel?"),I.forEach(t),y.forEach(t),q=d(n),x($.$$.fragment,n),this.h()},h(){i(u,"id","5.-what-is-an-automodel?"),i(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(u,"href","#5.-what-is-an-automodel?"),i(c,"class","relative group")},m(n,y){f(n,c,y),o(c,u),o(u,w),A(m,w,null),o(c,E),o(c,b),o(b,P),f(n,q,y),A($,n,y),T=!0},i(n){T||(k(m.$$.fragment,n),k($.$$.fragment,n),T=!0)},o(n){v(m.$$.fragment,n),v($.$$.fragment,n),T=!1},d(n){n&&t(c),z(m),n&&t(q),z($,n)}}}function yo(j){let c,u,w,m,E,b,P,q,$,T,n,y;return m=new M({}),$=new St({props:{codee:`from transformers import AutoTokenizer, TFAutoModel

tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")
model = TFAutoModel.from_pretrained("gpt2")

encoded = tokenizer("Hey!", return_tensors="pt")
result = model(**encoded),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAutoModel

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
model = TFAutoModel.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

encoded = tokenizer(<span class="hljs-string">&quot;Hey!&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
result = model(**encoded)`}}),n=new W({props:{choices:[{text:"No, it seems correct.",explain:"Unfortunately, coupling a model with a tokenizer that was trained with a different checkpoint is rarely a good idea. The model was not trained to make sense out of this tokenizer's output, so the model output (if it can even run!) will not make any sense."},{text:"The tokenizer and model should always be from the same checkpoint.",explain:"Right!",correct:!0},{text:"It's good practice to pad and truncate with the tokenizer as every input is a batch.",explain:"It's true that every model input needs to be a batch. However, truncating or padding this sequence wouldn't necessarily make sense as there is only one of it, and those are techniques to batch together a list of sentences."}]}}),{c(){c=a("h3"),u=a("a"),w=a("span"),_(m.$$.fragment),E=p(),b=a("span"),P=S("10. Is there something wrong with the following code?"),q=p(),_($.$$.fragment),T=p(),_(n.$$.fragment),this.h()},l(r){c=s(r,"H3",{class:!0});var g=h(c);u=s(g,"A",{id:!0,class:!0,href:!0});var I=h(u);w=s(I,"SPAN",{});var H=h(w);x(m.$$.fragment,H),H.forEach(t),I.forEach(t),E=d(g),b=s(g,"SPAN",{});var L=h(b);P=N(L,"10. Is there something wrong with the following code?"),L.forEach(t),g.forEach(t),q=d(r),x($.$$.fragment,r),T=d(r),x(n.$$.fragment,r),this.h()},h(){i(u,"id","10.-is-there-something-wrong-with-the-following-code?"),i(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(u,"href","#10.-is-there-something-wrong-with-the-following-code?"),i(c,"class","relative group")},m(r,g){f(r,c,g),o(c,u),o(u,w),A(m,w,null),o(c,E),o(c,b),o(b,P),f(r,q,g),A($,r,g),f(r,T,g),A(n,r,g),y=!0},i(r){y||(k(m.$$.fragment,r),k($.$$.fragment,r),k(n.$$.fragment,r),y=!0)},o(r){v(m.$$.fragment,r),v($.$$.fragment,r),v(n.$$.fragment,r),y=!1},d(r){r&&t(c),z(m),r&&t(q),z($,r),r&&t(T),z(n,r)}}}function _o(j){let c,u,w,m,E,b,P,q,$,T,n,y;return m=new M({}),$=new St({props:{codee:`from transformers import AutoTokenizer, AutoModel

tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")
model = AutoModel.from_pretrained("gpt2")

encoded = tokenizer("Hey!", return_tensors="pt")
result = model(**encoded),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModel

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
model = AutoModel.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

encoded = tokenizer(<span class="hljs-string">&quot;Hey!&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
result = model(**encoded)`}}),n=new W({props:{choices:[{text:"No, it seems correct.",explain:"Unfortunately, coupling a model with a tokenizer that was trained with a different checkpoint is rarely a good idea. The model was not trained to make sense out of this tokenizer's output, so the model output (if it can even run!) will not make any sense."},{text:"The tokenizer and model should always be from the same checkpoint.",explain:"Right!",correct:!0},{text:"It's good practice to pad and truncate with the tokenizer as every input is a batch.",explain:"It's true that every model input needs to be a batch. However, truncating or padding this sequence wouldn't necessarily make sense as there is only one of it, and those are techniques to batch together a list of sentences."}]}}),{c(){c=a("h3"),u=a("a"),w=a("span"),_(m.$$.fragment),E=p(),b=a("span"),P=S("10. Is there something wrong with the following code?"),q=p(),_($.$$.fragment),T=p(),_(n.$$.fragment),this.h()},l(r){c=s(r,"H3",{class:!0});var g=h(c);u=s(g,"A",{id:!0,class:!0,href:!0});var I=h(u);w=s(I,"SPAN",{});var H=h(w);x(m.$$.fragment,H),H.forEach(t),I.forEach(t),E=d(g),b=s(g,"SPAN",{});var L=h(b);P=N(L,"10. Is there something wrong with the following code?"),L.forEach(t),g.forEach(t),q=d(r),x($.$$.fragment,r),T=d(r),x(n.$$.fragment,r),this.h()},h(){i(u,"id","10.-is-there-something-wrong-with-the-following-code?"),i(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(u,"href","#10.-is-there-something-wrong-with-the-following-code?"),i(c,"class","relative group")},m(r,g){f(r,c,g),o(c,u),o(u,w),A(m,w,null),o(c,E),o(c,b),o(b,P),f(r,q,g),A($,r,g),f(r,T,g),A(n,r,g),y=!0},i(r){y||(k(m.$$.fragment,r),k($.$$.fragment,r),k(n.$$.fragment,r),y=!0)},o(r){v(m.$$.fragment,r),v($.$$.fragment,r),v(n.$$.fragment,r),y=!1},d(r){r&&t(c),z(m),r&&t(q),z($,r),r&&t(T),z(n,r)}}}function xo(j){let c,u,w,m,E,b,P,q,$,T,n,y,r,g,I,H,L,qe,mt,Le,re,Re,R,K,Ee,ne,gt,Te,wt,Ue,ae,Be,U,V,Pe,se,$t,Ie,vt,Oe,ie,Qe,B,X,Se,he,kt,Ne,bt,Je,le,Ge,F,C,_e,O,Z,He,ce,yt,Me,_t,Ke,ue,Ve,Q,ee,We,fe,xt,je,At,Xe,pe,Ze,J,te,Fe,de,zt,Ce,qt,et,me,tt,G,oe,De,ge,Et,we,Tt,Ye,Pt,It,ot,$e,rt,ve,nt,D,Y,xe,at;w=new vo({props:{fw:j[0]}}),q=new M({}),H=new M({}),re=new W({props:{choices:[{text:"First, the model, which handles text and returns raw predictions. The tokenizer then makes sense of these predictions and converts them back to text when needed.",explain:"The model cannot understand text! The tokenizer must first tokenize the text and convert it to IDs so that it is understandable by the model."},{text:"First, the tokenizer, which handles text and returns IDs. The model handles these IDs and outputs a prediction, which can be some text.",explain:"The model's prediction cannot be text straight away. The tokenizer has to be used in order to convert the prediction back to text!"},{text:"The tokenizer handles text and returns IDs. The model handles these IDs and outputs a prediction. The tokenizer can then be used once again to convert these predictions back to some text.",explain:"Correct! The tokenizer can be used for both tokenizing and de-tokenizing.",correct:!0}]}}),ne=new M({}),ae=new W({props:{choices:[{text:"2: The sequence length and the batch size",explain:"False! The tensor output by the model has a third dimension: hidden size."},{text:"2: The sequence length and the hidden size",explain:"False! All Transformer models handle batches, even with a single sequence; that would be a batch size of 1!"},{text:"3: The sequence length, the batch size, and the hidden size",explain:"Correct!",correct:!0}]}}),se=new M({}),ie=new W({props:{choices:[{text:"WordPiece",explain:"Yes, that's one example of subword tokenization!",correct:!0},{text:"Character-based tokenization",explain:"Character-based tokenization is not a type of subword tokenization."},{text:"Splitting on whitespace and punctuation",explain:"That's a word-based tokenization scheme!"},{text:"BPE",explain:"Yes, that's one example of subword tokenization!",correct:!0},{text:"Unigram",explain:"Yes, that's one example of subword tokenization!",correct:!0},{text:"None of the above",explain:"Incorrect!"}]}}),he=new M({}),le=new W({props:{choices:[{text:"A component of the base Transformer network that redirects tensors to their correct layers",explain:"Incorrect! There's no such component."},{text:"Also known as the self-attention mechanism, it adapts the representation of a token according to the other tokens of the sequence",explain:'Incorrect! The self-attention layer does contain attention "heads," but these are not adaptation heads.'},{text:"An additional component, usually made up of one or a few layers, to convert the transformer predictions to a task-specific output",explain:"That's right. Adaptation heads, also known simply as heads, come up in different forms: language modeling heads, question answering heads, sequence classification heads... ",correct:!0}]}});const Nt=[bo,ko],ke=[];function Ht(e,l){return e[0]==="pt"?0:1}F=Ht(j),C=ke[F]=Nt[F](j),ce=new M({}),ue=new W({props:{choices:[{text:"Truncating",explain:"Yes, truncation is a correct way of evening out sequences so that they fit in a rectangular shape. Is it the only one, though?",correct:!0},{text:"Returning tensors",explain:"While the other techniques allow you to return rectangular tensors, returning tensors isn't helpful when batching sequences together."},{text:"Padding",explain:"Yes, padding is a correct way of evening out sequences so that they fit in a rectangular shape. Is it the only one, though?",correct:!0},{text:"Attention masking",explain:"Absolutely! Attention masks are of prime importance when handling sequences of different lengths. That's not the only technique to be aware of, however.",correct:!0}]}}),fe=new M({}),pe=new W({props:{choices:[{text:"It softens the logits so that they're more reliable.",explain:"No, the SoftMax function does not affect the reliability of results."},{text:"It applies a lower and upper bound so that they're understandable.",explain:"Correct! The resulting values are bound between 0 and 1. That's not the only reason we use a SoftMax function, though.",correct:!0},{text:"The total sum of the output is then 1, resulting in a possible probabilistic interpretation.",explain:"Correct! That's not the only reason we use a SoftMax function, though.",correct:!0}]}}),de=new M({}),me=new W({props:{choices:[{text:"<code>encode</code>, as it can encode text into IDs and IDs into predictions",explain:"Wrong! While the <code>encode</code> method does exist on tokenizers, it does not exist on models."},{text:"Calling the tokenizer object directly.",explain:"Exactly! The <code>__call__</code> method of the tokenizer is a very powerful method which can handle pretty much anything. It is also the method used to retrieve predictions from a model.",correct:!0},{text:"<code>pad</code>",explain:"Wrong! Padding is very useful, but it's just one part of the tokenizer API."},{text:"<code>tokenize</code>",explain:"The <code>tokenize</code> method is arguably one of the most useful methods, but it isn't the core of the tokenizer API."}]}}),ge=new M({}),$e=new St({props:{codee:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")
result = tokenizer.tokenize("Hello!"),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
result = tokenizer.tokenize(<span class="hljs-string">&quot;Hello!&quot;</span>)`}}),ve=new W({props:{choices:[{text:"A list of strings, each string being a token",explain:"Absolutely! Convert this to IDs, and send them to a model!",correct:!0},{text:"A list of IDs",explain:"Incorrect; that's what the <code>__call__</code> or <code>convert_tokens_to_ids</code> method is for!"},{text:"A string containing all of the tokens",explain:"This would be suboptimal, as the goal is to split the string into multiple tokens."}]}});const Mt=[_o,yo],be=[];function Wt(e,l){return e[0]==="pt"?0:1}return D=Wt(j),Y=be[D]=Mt[D](j),{c(){c=a("meta"),u=p(),_(w.$$.fragment),m=p(),E=a("h1"),b=a("a"),P=a("span"),_(q.$$.fragment),$=p(),T=a("span"),n=S("End-of-chapter quiz"),y=p(),r=a("h3"),g=a("a"),I=a("span"),_(H.$$.fragment),L=p(),qe=a("span"),mt=S("1. What is the order of the language modeling pipeline?"),Le=p(),_(re.$$.fragment),Re=p(),R=a("h3"),K=a("a"),Ee=a("span"),_(ne.$$.fragment),gt=p(),Te=a("span"),wt=S("2. How many dimensions does the tensor output by the base Transformer model have, and what are they?"),Ue=p(),_(ae.$$.fragment),Be=p(),U=a("h3"),V=a("a"),Pe=a("span"),_(se.$$.fragment),$t=p(),Ie=a("span"),vt=S("3. Which of the following is an example of subword tokenization?"),Oe=p(),_(ie.$$.fragment),Qe=p(),B=a("h3"),X=a("a"),Se=a("span"),_(he.$$.fragment),kt=p(),Ne=a("span"),bt=S("4. What is a model head?"),Je=p(),_(le.$$.fragment),Ge=p(),C.c(),_e=p(),O=a("h3"),Z=a("a"),He=a("span"),_(ce.$$.fragment),yt=p(),Me=a("span"),_t=S("6. What are the techniques to be aware of when batching sequences of different lengths together?"),Ke=p(),_(ue.$$.fragment),Ve=p(),Q=a("h3"),ee=a("a"),We=a("span"),_(fe.$$.fragment),xt=p(),je=a("span"),At=S("7. What is the point of applying a SoftMax function to the logits output by a sequence classification model?"),Xe=p(),_(pe.$$.fragment),Ze=p(),J=a("h3"),te=a("a"),Fe=a("span"),_(de.$$.fragment),zt=p(),Ce=a("span"),qt=S("8. What method is most of the tokenizer API centered around?"),et=p(),_(me.$$.fragment),tt=p(),G=a("h3"),oe=a("a"),De=a("span"),_(ge.$$.fragment),Et=p(),we=a("span"),Tt=S("9. What does the "),Ye=a("code"),Pt=S("result"),It=S(" variable contain in this code sample?"),ot=p(),_($e.$$.fragment),rt=p(),_(ve.$$.fragment),nt=p(),Y.c(),xe=ho(),this.h()},l(e){const l=go('[data-svelte="svelte-1phssyn"]',uo.head);c=s(l,"META",{name:!0,content:!0}),l.forEach(t),u=d(e),x(w.$$.fragment,e),m=d(e),E=s(e,"H1",{class:!0});var ye=h(E);b=s(ye,"A",{id:!0,class:!0,href:!0});var Ae=h(b);P=s(Ae,"SPAN",{});var ze=h(P);x(q.$$.fragment,ze),ze.forEach(t),Ae.forEach(t),$=d(ye),T=s(ye,"SPAN",{});var jt=h(T);n=N(jt,"End-of-chapter quiz"),jt.forEach(t),ye.forEach(t),y=d(e),r=s(e,"H3",{class:!0});var st=h(r);g=s(st,"A",{id:!0,class:!0,href:!0});var Ft=h(g);I=s(Ft,"SPAN",{});var Ct=h(I);x(H.$$.fragment,Ct),Ct.forEach(t),Ft.forEach(t),L=d(st),qe=s(st,"SPAN",{});var Dt=h(qe);mt=N(Dt,"1. What is the order of the language modeling pipeline?"),Dt.forEach(t),st.forEach(t),Le=d(e),x(re.$$.fragment,e),Re=d(e),R=s(e,"H3",{class:!0});var it=h(R);K=s(it,"A",{id:!0,class:!0,href:!0});var Yt=h(K);Ee=s(Yt,"SPAN",{});var Lt=h(Ee);x(ne.$$.fragment,Lt),Lt.forEach(t),Yt.forEach(t),gt=d(it),Te=s(it,"SPAN",{});var Rt=h(Te);wt=N(Rt,"2. How many dimensions does the tensor output by the base Transformer model have, and what are they?"),Rt.forEach(t),it.forEach(t),Ue=d(e),x(ae.$$.fragment,e),Be=d(e),U=s(e,"H3",{class:!0});var ht=h(U);V=s(ht,"A",{id:!0,class:!0,href:!0});var Ut=h(V);Pe=s(Ut,"SPAN",{});var Bt=h(Pe);x(se.$$.fragment,Bt),Bt.forEach(t),Ut.forEach(t),$t=d(ht),Ie=s(ht,"SPAN",{});var Ot=h(Ie);vt=N(Ot,"3. Which of the following is an example of subword tokenization?"),Ot.forEach(t),ht.forEach(t),Oe=d(e),x(ie.$$.fragment,e),Qe=d(e),B=s(e,"H3",{class:!0});var lt=h(B);X=s(lt,"A",{id:!0,class:!0,href:!0});var Qt=h(X);Se=s(Qt,"SPAN",{});var Jt=h(Se);x(he.$$.fragment,Jt),Jt.forEach(t),Qt.forEach(t),kt=d(lt),Ne=s(lt,"SPAN",{});var Gt=h(Ne);bt=N(Gt,"4. What is a model head?"),Gt.forEach(t),lt.forEach(t),Je=d(e),x(le.$$.fragment,e),Ge=d(e),C.l(e),_e=d(e),O=s(e,"H3",{class:!0});var ct=h(O);Z=s(ct,"A",{id:!0,class:!0,href:!0});var Kt=h(Z);He=s(Kt,"SPAN",{});var Vt=h(He);x(ce.$$.fragment,Vt),Vt.forEach(t),Kt.forEach(t),yt=d(ct),Me=s(ct,"SPAN",{});var Xt=h(Me);_t=N(Xt,"6. What are the techniques to be aware of when batching sequences of different lengths together?"),Xt.forEach(t),ct.forEach(t),Ke=d(e),x(ue.$$.fragment,e),Ve=d(e),Q=s(e,"H3",{class:!0});var ut=h(Q);ee=s(ut,"A",{id:!0,class:!0,href:!0});var Zt=h(ee);We=s(Zt,"SPAN",{});var eo=h(We);x(fe.$$.fragment,eo),eo.forEach(t),Zt.forEach(t),xt=d(ut),je=s(ut,"SPAN",{});var to=h(je);At=N(to,"7. What is the point of applying a SoftMax function to the logits output by a sequence classification model?"),to.forEach(t),ut.forEach(t),Xe=d(e),x(pe.$$.fragment,e),Ze=d(e),J=s(e,"H3",{class:!0});var ft=h(J);te=s(ft,"A",{id:!0,class:!0,href:!0});var oo=h(te);Fe=s(oo,"SPAN",{});var ro=h(Fe);x(de.$$.fragment,ro),ro.forEach(t),oo.forEach(t),zt=d(ft),Ce=s(ft,"SPAN",{});var no=h(Ce);qt=N(no,"8. What method is most of the tokenizer API centered around?"),no.forEach(t),ft.forEach(t),et=d(e),x(me.$$.fragment,e),tt=d(e),G=s(e,"H3",{class:!0});var pt=h(G);oe=s(pt,"A",{id:!0,class:!0,href:!0});var ao=h(oe);De=s(ao,"SPAN",{});var so=h(De);x(ge.$$.fragment,so),so.forEach(t),ao.forEach(t),Et=d(pt),we=s(pt,"SPAN",{});var dt=h(we);Tt=N(dt,"9. What does the "),Ye=s(dt,"CODE",{});var io=h(Ye);Pt=N(io,"result"),io.forEach(t),It=N(dt," variable contain in this code sample?"),dt.forEach(t),pt.forEach(t),ot=d(e),x($e.$$.fragment,e),rt=d(e),x(ve.$$.fragment,e),nt=d(e),Y.l(e),xe=ho(),this.h()},h(){i(c,"name","hf:doc:metadata"),i(c,"content",JSON.stringify(Ao)),i(b,"id","endofchapter-quiz"),i(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(b,"href","#endofchapter-quiz"),i(E,"class","relative group"),i(g,"id","1.-what-is-the-order-of-the-language-modeling-pipeline?"),i(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(g,"href","#1.-what-is-the-order-of-the-language-modeling-pipeline?"),i(r,"class","relative group"),i(K,"id","2.-how-many-dimensions-does-the-tensor-output-by-the-base-transformer-model-have,-and-what-are-they?"),i(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(K,"href","#2.-how-many-dimensions-does-the-tensor-output-by-the-base-transformer-model-have,-and-what-are-they?"),i(R,"class","relative group"),i(V,"id","3.-which-of-the-following-is-an-example-of-subword-tokenization?"),i(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(V,"href","#3.-which-of-the-following-is-an-example-of-subword-tokenization?"),i(U,"class","relative group"),i(X,"id","4.-what-is-a-model-head?"),i(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(X,"href","#4.-what-is-a-model-head?"),i(B,"class","relative group"),i(Z,"id","6.-what-are-the-techniques-to-be-aware-of-when-batching-sequences-of-different-lengths-together?"),i(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(Z,"href","#6.-what-are-the-techniques-to-be-aware-of-when-batching-sequences-of-different-lengths-together?"),i(O,"class","relative group"),i(ee,"id","7.-what-is-the-point-of-applying-a-softmax-function-to-the-logits-output-by-a-sequence-classification-model?"),i(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(ee,"href","#7.-what-is-the-point-of-applying-a-softmax-function-to-the-logits-output-by-a-sequence-classification-model?"),i(Q,"class","relative group"),i(te,"id","8.-what-method-is-most-of-the-tokenizer-api-centered-around?"),i(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(te,"href","#8.-what-method-is-most-of-the-tokenizer-api-centered-around?"),i(J,"class","relative group"),i(oe,"id","9.-what-does-the-<code>result</code>-variable-contain-in-this-code-sample?"),i(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(oe,"href","#9.-what-does-the-<code>result</code>-variable-contain-in-this-code-sample?"),i(G,"class","relative group")},m(e,l){o(uo.head,c),f(e,u,l),A(w,e,l),f(e,m,l),f(e,E,l),o(E,b),o(b,P),A(q,P,null),o(E,$),o(E,T),o(T,n),f(e,y,l),f(e,r,l),o(r,g),o(g,I),A(H,I,null),o(r,L),o(r,qe),o(qe,mt),f(e,Le,l),A(re,e,l),f(e,Re,l),f(e,R,l),o(R,K),o(K,Ee),A(ne,Ee,null),o(R,gt),o(R,Te),o(Te,wt),f(e,Ue,l),A(ae,e,l),f(e,Be,l),f(e,U,l),o(U,V),o(V,Pe),A(se,Pe,null),o(U,$t),o(U,Ie),o(Ie,vt),f(e,Oe,l),A(ie,e,l),f(e,Qe,l),f(e,B,l),o(B,X),o(X,Se),A(he,Se,null),o(B,kt),o(B,Ne),o(Ne,bt),f(e,Je,l),A(le,e,l),f(e,Ge,l),ke[F].m(e,l),f(e,_e,l),f(e,O,l),o(O,Z),o(Z,He),A(ce,He,null),o(O,yt),o(O,Me),o(Me,_t),f(e,Ke,l),A(ue,e,l),f(e,Ve,l),f(e,Q,l),o(Q,ee),o(ee,We),A(fe,We,null),o(Q,xt),o(Q,je),o(je,At),f(e,Xe,l),A(pe,e,l),f(e,Ze,l),f(e,J,l),o(J,te),o(te,Fe),A(de,Fe,null),o(J,zt),o(J,Ce),o(Ce,qt),f(e,et,l),A(me,e,l),f(e,tt,l),f(e,G,l),o(G,oe),o(oe,De),A(ge,De,null),o(G,Et),o(G,we),o(we,Tt),o(we,Ye),o(Ye,Pt),o(we,It),f(e,ot,l),A($e,e,l),f(e,rt,l),A(ve,e,l),f(e,nt,l),be[D].m(e,l),f(e,xe,l),at=!0},p(e,[l]){const ye={};l&1&&(ye.fw=e[0]),w.$set(ye);let Ae=F;F=Ht(e),F!==Ae&&(co(),v(ke[Ae],1,1,()=>{ke[Ae]=null}),lo(),C=ke[F],C||(C=ke[F]=Nt[F](e),C.c()),k(C,1),C.m(_e.parentNode,_e));let ze=D;D=Wt(e),D!==ze&&(co(),v(be[ze],1,1,()=>{be[ze]=null}),lo(),Y=be[D],Y||(Y=be[D]=Mt[D](e),Y.c()),k(Y,1),Y.m(xe.parentNode,xe))},i(e){at||(k(w.$$.fragment,e),k(q.$$.fragment,e),k(H.$$.fragment,e),k(re.$$.fragment,e),k(ne.$$.fragment,e),k(ae.$$.fragment,e),k(se.$$.fragment,e),k(ie.$$.fragment,e),k(he.$$.fragment,e),k(le.$$.fragment,e),k(C),k(ce.$$.fragment,e),k(ue.$$.fragment,e),k(fe.$$.fragment,e),k(pe.$$.fragment,e),k(de.$$.fragment,e),k(me.$$.fragment,e),k(ge.$$.fragment,e),k($e.$$.fragment,e),k(ve.$$.fragment,e),k(Y),at=!0)},o(e){v(w.$$.fragment,e),v(q.$$.fragment,e),v(H.$$.fragment,e),v(re.$$.fragment,e),v(ne.$$.fragment,e),v(ae.$$.fragment,e),v(se.$$.fragment,e),v(ie.$$.fragment,e),v(he.$$.fragment,e),v(le.$$.fragment,e),v(C),v(ce.$$.fragment,e),v(ue.$$.fragment,e),v(fe.$$.fragment,e),v(pe.$$.fragment,e),v(de.$$.fragment,e),v(me.$$.fragment,e),v(ge.$$.fragment,e),v($e.$$.fragment,e),v(ve.$$.fragment,e),v(Y),at=!1},d(e){t(c),e&&t(u),z(w,e),e&&t(m),e&&t(E),z(q),e&&t(y),e&&t(r),z(H),e&&t(Le),z(re,e),e&&t(Re),e&&t(R),z(ne),e&&t(Ue),z(ae,e),e&&t(Be),e&&t(U),z(se),e&&t(Oe),z(ie,e),e&&t(Qe),e&&t(B),z(he),e&&t(Je),z(le,e),e&&t(Ge),ke[F].d(e),e&&t(_e),e&&t(O),z(ce),e&&t(Ke),z(ue,e),e&&t(Ve),e&&t(Q),z(fe),e&&t(Xe),z(pe,e),e&&t(Ze),e&&t(J),z(de),e&&t(et),z(me,e),e&&t(tt),e&&t(G),z(ge),e&&t(ot),z($e,e),e&&t(rt),z(ve,e),e&&t(nt),be[D].d(e),e&&t(xe)}}}const Ao={local:"endofchapter-quiz",title:"End-of-chapter quiz"};function zo(j,c,u){let w="pt";return wo(()=>{const m=new URL(document.location).searchParams;u(0,w=m.get("fw")||"pt")}),[w]}class So extends fo{constructor(c){super();po(this,c,zo,xo,mo,{})}}export{So as default,Ao as metadata};
