import{S as rr,i as ar,s as nr,e as r,k as l,w as _,t as o,L as or,c as a,d as s,m as c,a as n,x as v,h as i,b as p,J as e,g as h,y as b,K as ir,q as w,o as y,B as T}from"../../../chunks/vendor-b1433968.js";import{D as De}from"../../../chunks/Docstring-ff504c58.js";import{C as sr}from"../../../chunks/CodeBlock-a320dbd7.js";import{I as ct}from"../../../chunks/IconCopyLink-7029626d.js";import"../../../chunks/CopyButton-f65cb278.js";function lr(pt){let z,re,g,k,fe,I,dt,ue,ht,Me,P,j,ge,D,mt,ke,ft,Ne,R,ut,M,gt,kt,Ce,ae,_t,Se,ne,_e,vt,Ue,oe,bt,Oe,N,Je,E,wt,C,yt,Tt,S,zt,Et,Ke,q,A,ve,U,$t,be,Ht,Ve,u,O,Lt,we,Pt,qt,ye,Bt,jt,J,Te,ze,Rt,At,Ee,$e,xt,Ft,K,It,ie,Dt,Mt,Xe,B,x,He,V,Nt,Le,Ct,We,m,X,St,W,Ut,Pe,Ot,Jt,Kt,qe,Vt,Xt,Be,je,Wt,Gt,G,Qt,le,Yt,Zt,es,$,Q,ts,Re,ss,rs,Y,ce,as,Ae,ns,os,pe,is,xe,ls,cs,H,Z,ps,Fe,ds,hs,ee,ms,F,te,fs,se,us,Ie,gs,ks,Ge;return I=new ct({}),D=new ct({}),N=new sr({props:{code:`from transformers import HerbertTokenizer, RobertaModel

tokenizer = HerbertTokenizer.from_pretrained("allegro/herbert-klej-cased-tokenizer-v1")
model = RobertaModel.from_pretrained("allegro/herbert-klej-cased-v1")

encoded_input = tokenizer.encode("Kto ma lepsz\u0105 sztuk\u0119, ma lepszy rz\u0105d \u2013 to jasne.", return_tensors='pt')
outputs = model(encoded_input)

# HerBERT can also be loaded using AutoTokenizer and AutoModel:
import torch
from transformers import AutoModel, AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("allegro/herbert-klej-cased-tokenizer-v1")
model = AutoModel.from_pretrained("allegro/herbert-klej-cased-v1"),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> HerbertTokenizer, RobertaModel</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = HerbertTokenizer.from_pretrained(<span class="hljs-string">&quot;allegro/herbert-klej-cased-tokenizer-v1&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">model = RobertaModel.from_pretrained(<span class="hljs-string">&quot;allegro/herbert-klej-cased-v1&quot;</span>)</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">encoded_input = tokenizer.encode(<span class="hljs-string">&quot;Kto ma lepsz\u0105 sztuk\u0119, ma lepszy rz\u0105d \u2013 to jasne.&quot;</span>, return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">outputs = model(encoded_input)</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-comment"># HerBERT can also be loaded using AutoTokenizer and AutoModel:</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">import</span> torch</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, AutoTokenizer</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;allegro/herbert-klej-cased-tokenizer-v1&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">model = AutoModel.from_pretrained(<span class="hljs-string">&quot;allegro/herbert-klej-cased-v1&quot;</span>)</span>`}}),U=new ct({}),O=new De({props:{name:"class transformers.HerbertTokenizer",anchor:"transformers.HerbertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"tokenizer_file",val:" = None"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sep_token",val:" = '</s>'"},{name:"do_lowercase_and_remove_accent",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/herbert/tokenization_herbert.py#L41"}}),V=new ct({}),X=new De({props:{name:"class transformers.HerbertTokenizerFast",anchor:"transformers.HerbertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sep_token",val:" = '</s>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/herbert/tokenization_herbert_fast.py#L40",parametersDescription:[{anchor:"transformers.HerbertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.HerbertTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"}]}}),Q=new De({props:{name:"build\\_inputs\\_with\\_special\\_tokens",anchor:"transformers.HerbertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/herbert/tokenization_herbert_fast.py#L90",parametersDescription:[{anchor:"transformers.HerbertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.HerbertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Z=new De({props:{name:"create\\_token\\_type\\_ids\\_from\\_sequences",anchor:"transformers.HerbertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/herbert/tokenization_herbert_fast.py#L144",parametersDescription:[{anchor:"transformers.HerbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.HerbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given
sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ee=new sr({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |,`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),te=new De({props:{name:"get\\_special\\_tokens\\_mask",anchor:"transformers.HerbertTokenizerFast.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/herbert/tokenization_herbert_fast.py#L117",parametersDescription:[{anchor:"transformers.HerbertTokenizerFast.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.HerbertTokenizerFast.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.HerbertTokenizerFast.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),{c(){z=r("meta"),re=l(),g=r("h1"),k=r("a"),fe=r("span"),_(I.$$.fragment),dt=l(),ue=r("span"),ht=o("HerBERT"),Me=l(),P=r("h2"),j=r("a"),ge=r("span"),_(D.$$.fragment),mt=l(),ke=r("span"),ft=o("Overview"),Ne=l(),R=r("p"),ut=o("The HerBERT model was proposed in "),M=r("a"),gt=o("KLEJ: Comprehensive Benchmark for Polish Language Understanding"),kt=o(` by Piotr Rybak, Robert Mroczkowski, Janusz Tracz, and
Ireneusz Gawlik. It is a BERT-based Language Model trained on Polish Corpora using only MLM objective with dynamic
masking of whole words.`),Ce=l(),ae=r("p"),_t=o("The abstract from the paper is the following:"),Se=l(),ne=r("p"),_e=r("em"),vt=o(`In recent years, a series of Transformer-based models unlocked major improvements in general natural language
understanding (NLU) tasks. Such a fast pace of research would not be possible without general NLU benchmarks, which
allow for a fair comparison of the proposed methods. However, such benchmarks are available only for a handful of
languages. To alleviate this issue, we introduce a comprehensive multi-task benchmark for the Polish language
understanding, accompanied by an online leaderboard. It consists of a diverse set of tasks, adopted from existing
datasets for named entity recognition, question-answering, textual entailment, and others. We also introduce a new
sentiment analysis task for the e-commerce domain, named Allegro Reviews (AR). To ensure a common evaluation scheme and
promote models that generalize to different NLU tasks, the benchmark includes datasets from varying domains and
applications. Additionally, we release HerBERT, a Transformer-based model trained specifically for the Polish language,
which has the best average performance and obtains the best results for three out of nine tasks. Finally, we provide an
extensive evaluation, including several standard baselines and recently proposed, multilingual Transformer-based
models.`),Ue=l(),oe=r("p"),bt=o("Examples of use:"),Oe=l(),_(N.$$.fragment),Je=l(),E=r("p"),wt=o("This model was contributed by "),C=r("a"),yt=o("rmroczkowski"),Tt=o(`. The original code can be found
`),S=r("a"),zt=o("here"),Et=o("."),Ke=l(),q=r("h2"),A=r("a"),ve=r("span"),_(U.$$.fragment),$t=l(),be=r("span"),Ht=o("HerbertTokenizer"),Ve=l(),u=r("div"),_(O.$$.fragment),Lt=l(),we=r("p"),Pt=o("Construct a BPE tokenizer for HerBERT."),qt=l(),ye=r("p"),Bt=o("Peculiarities:"),jt=l(),J=r("ul"),Te=r("li"),ze=r("p"),Rt=o(`uses BERT\u2019s pre-tokenizer: BaseTokenizer splits tokens on spaces, and also on punctuation. Each occurrence of a
punctuation character will be treated separately.`),At=l(),Ee=r("li"),$e=r("p"),xt=o("Such pretokenized input is BPE subtokenized"),Ft=l(),K=r("p"),It=o("This tokenizer inherits from "),ie=r("a"),Dt=o("XLMTokenizer"),Mt=o(` which contains most of the methods. Users should
refer to the superclass for more information regarding methods.`),Xe=l(),B=r("h2"),x=r("a"),He=r("span"),_(V.$$.fragment),Nt=l(),Le=r("span"),Ct=o("HerbertTokenizerFast"),We=l(),m=r("div"),_(X.$$.fragment),St=l(),W=r("p"),Ut=o("Construct a \u201CFast\u201D BPE tokenizer for HerBERT (backed by HuggingFace\u2019s "),Pe=r("em"),Ot=o("tokenizers"),Jt=o(" library)."),Kt=l(),qe=r("p"),Vt=o("Peculiarities:"),Xt=l(),Be=r("ul"),je=r("li"),Wt=o(`uses BERT\u2019s pre-tokenizer: BertPreTokenizer splits tokens on spaces, and also on punctuation. Each occurrence of
a punctuation character will be treated separately.`),Gt=l(),G=r("p"),Qt=o("This tokenizer inherits from "),le=r("a"),Yt=o("PreTrainedTokenizer"),Zt=o(` which contains most of the methods. Users
should refer to the superclass for more information regarding methods.`),es=l(),$=r("div"),_(Q.$$.fragment),ts=l(),Re=r("p"),ss=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An HerBERT, like BERT sequence has the following format:`),rs=l(),Y=r("ul"),ce=r("li"),as=o("single sequence: "),Ae=r("code"),ns=o("<s> X </s>"),os=l(),pe=r("li"),is=o("pair of sequences: "),xe=r("code"),ls=o("<s> A </s> B </s>"),cs=l(),H=r("div"),_(Z.$$.fragment),ps=l(),Fe=r("p"),ds=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. HerBERT, like
BERT sequence pair mask has the following format:`),hs=l(),_(ee.$$.fragment),ms=l(),F=r("div"),_(te.$$.fragment),fs=l(),se=r("p"),us=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ie=r("code"),gs=o("prepare_for_model"),ks=o(" method."),this.h()},l(t){const d=or('[data-svelte="svelte-1phssyn"]',document.head);z=a(d,"META",{name:!0,content:!0}),d.forEach(s),re=c(t),g=a(t,"H1",{class:!0});var Qe=n(g);k=a(Qe,"A",{id:!0,class:!0,href:!0});var bs=n(k);fe=a(bs,"SPAN",{});var ws=n(fe);v(I.$$.fragment,ws),ws.forEach(s),bs.forEach(s),dt=c(Qe),ue=a(Qe,"SPAN",{});var ys=n(ue);ht=i(ys,"HerBERT"),ys.forEach(s),Qe.forEach(s),Me=c(t),P=a(t,"H2",{class:!0});var Ye=n(P);j=a(Ye,"A",{id:!0,class:!0,href:!0});var Ts=n(j);ge=a(Ts,"SPAN",{});var zs=n(ge);v(D.$$.fragment,zs),zs.forEach(s),Ts.forEach(s),mt=c(Ye),ke=a(Ye,"SPAN",{});var Es=n(ke);ft=i(Es,"Overview"),Es.forEach(s),Ye.forEach(s),Ne=c(t),R=a(t,"P",{});var Ze=n(R);ut=i(Ze,"The HerBERT model was proposed in "),M=a(Ze,"A",{href:!0,rel:!0});var $s=n(M);gt=i($s,"KLEJ: Comprehensive Benchmark for Polish Language Understanding"),$s.forEach(s),kt=i(Ze,` by Piotr Rybak, Robert Mroczkowski, Janusz Tracz, and
Ireneusz Gawlik. It is a BERT-based Language Model trained on Polish Corpora using only MLM objective with dynamic
masking of whole words.`),Ze.forEach(s),Ce=c(t),ae=a(t,"P",{});var Hs=n(ae);_t=i(Hs,"The abstract from the paper is the following:"),Hs.forEach(s),Se=c(t),ne=a(t,"P",{});var Ls=n(ne);_e=a(Ls,"EM",{});var Ps=n(_e);vt=i(Ps,`In recent years, a series of Transformer-based models unlocked major improvements in general natural language
understanding (NLU) tasks. Such a fast pace of research would not be possible without general NLU benchmarks, which
allow for a fair comparison of the proposed methods. However, such benchmarks are available only for a handful of
languages. To alleviate this issue, we introduce a comprehensive multi-task benchmark for the Polish language
understanding, accompanied by an online leaderboard. It consists of a diverse set of tasks, adopted from existing
datasets for named entity recognition, question-answering, textual entailment, and others. We also introduce a new
sentiment analysis task for the e-commerce domain, named Allegro Reviews (AR). To ensure a common evaluation scheme and
promote models that generalize to different NLU tasks, the benchmark includes datasets from varying domains and
applications. Additionally, we release HerBERT, a Transformer-based model trained specifically for the Polish language,
which has the best average performance and obtains the best results for three out of nine tasks. Finally, we provide an
extensive evaluation, including several standard baselines and recently proposed, multilingual Transformer-based
models.`),Ps.forEach(s),Ls.forEach(s),Ue=c(t),oe=a(t,"P",{});var qs=n(oe);bt=i(qs,"Examples of use:"),qs.forEach(s),Oe=c(t),v(N.$$.fragment,t),Je=c(t),E=a(t,"P",{});var de=n(E);wt=i(de,"This model was contributed by "),C=a(de,"A",{href:!0,rel:!0});var Bs=n(C);yt=i(Bs,"rmroczkowski"),Bs.forEach(s),Tt=i(de,`. The original code can be found
`),S=a(de,"A",{href:!0,rel:!0});var js=n(S);zt=i(js,"here"),js.forEach(s),Et=i(de,"."),de.forEach(s),Ke=c(t),q=a(t,"H2",{class:!0});var et=n(q);A=a(et,"A",{id:!0,class:!0,href:!0});var Rs=n(A);ve=a(Rs,"SPAN",{});var As=n(ve);v(U.$$.fragment,As),As.forEach(s),Rs.forEach(s),$t=c(et),be=a(et,"SPAN",{});var xs=n(be);Ht=i(xs,"HerbertTokenizer"),xs.forEach(s),et.forEach(s),Ve=c(t),u=a(t,"DIV",{class:!0});var L=n(u);v(O.$$.fragment,L),Lt=c(L),we=a(L,"P",{});var Fs=n(we);Pt=i(Fs,"Construct a BPE tokenizer for HerBERT."),Fs.forEach(s),qt=c(L),ye=a(L,"P",{});var Is=n(ye);Bt=i(Is,"Peculiarities:"),Is.forEach(s),jt=c(L),J=a(L,"UL",{});var tt=n(J);Te=a(tt,"LI",{});var Ds=n(Te);ze=a(Ds,"P",{});var Ms=n(ze);Rt=i(Ms,`uses BERT\u2019s pre-tokenizer: BaseTokenizer splits tokens on spaces, and also on punctuation. Each occurrence of a
punctuation character will be treated separately.`),Ms.forEach(s),Ds.forEach(s),At=c(tt),Ee=a(tt,"LI",{});var Ns=n(Ee);$e=a(Ns,"P",{});var Cs=n($e);xt=i(Cs,"Such pretokenized input is BPE subtokenized"),Cs.forEach(s),Ns.forEach(s),tt.forEach(s),Ft=c(L),K=a(L,"P",{});var st=n(K);It=i(st,"This tokenizer inherits from "),ie=a(st,"A",{href:!0});var Ss=n(ie);Dt=i(Ss,"XLMTokenizer"),Ss.forEach(s),Mt=i(st,` which contains most of the methods. Users should
refer to the superclass for more information regarding methods.`),st.forEach(s),L.forEach(s),Xe=c(t),B=a(t,"H2",{class:!0});var rt=n(B);x=a(rt,"A",{id:!0,class:!0,href:!0});var Us=n(x);He=a(Us,"SPAN",{});var Os=n(He);v(V.$$.fragment,Os),Os.forEach(s),Us.forEach(s),Nt=c(rt),Le=a(rt,"SPAN",{});var Js=n(Le);Ct=i(Js,"HerbertTokenizerFast"),Js.forEach(s),rt.forEach(s),We=c(t),m=a(t,"DIV",{class:!0});var f=n(m);v(X.$$.fragment,f),St=c(f),W=a(f,"P",{});var at=n(W);Ut=i(at,"Construct a \u201CFast\u201D BPE tokenizer for HerBERT (backed by HuggingFace\u2019s "),Pe=a(at,"EM",{});var Ks=n(Pe);Ot=i(Ks,"tokenizers"),Ks.forEach(s),Jt=i(at," library)."),at.forEach(s),Kt=c(f),qe=a(f,"P",{});var Vs=n(qe);Vt=i(Vs,"Peculiarities:"),Vs.forEach(s),Xt=c(f),Be=a(f,"UL",{});var Xs=n(Be);je=a(Xs,"LI",{});var Ws=n(je);Wt=i(Ws,`uses BERT\u2019s pre-tokenizer: BertPreTokenizer splits tokens on spaces, and also on punctuation. Each occurrence of
a punctuation character will be treated separately.`),Ws.forEach(s),Xs.forEach(s),Gt=c(f),G=a(f,"P",{});var nt=n(G);Qt=i(nt,"This tokenizer inherits from "),le=a(nt,"A",{href:!0});var Gs=n(le);Yt=i(Gs,"PreTrainedTokenizer"),Gs.forEach(s),Zt=i(nt,` which contains most of the methods. Users
should refer to the superclass for more information regarding methods.`),nt.forEach(s),es=c(f),$=a(f,"DIV",{class:!0});var he=n($);v(Q.$$.fragment,he),ts=c(he),Re=a(he,"P",{});var Qs=n(Re);ss=i(Qs,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An HerBERT, like BERT sequence has the following format:`),Qs.forEach(s),rs=c(he),Y=a(he,"UL",{});var ot=n(Y);ce=a(ot,"LI",{});var _s=n(ce);as=i(_s,"single sequence: "),Ae=a(_s,"CODE",{});var Ys=n(Ae);ns=i(Ys,"<s> X </s>"),Ys.forEach(s),_s.forEach(s),os=c(ot),pe=a(ot,"LI",{});var vs=n(pe);is=i(vs,"pair of sequences: "),xe=a(vs,"CODE",{});var Zs=n(xe);ls=i(Zs,"<s> A </s> B </s>"),Zs.forEach(s),vs.forEach(s),ot.forEach(s),he.forEach(s),cs=c(f),H=a(f,"DIV",{class:!0});var me=n(H);v(Z.$$.fragment,me),ps=c(me),Fe=a(me,"P",{});var er=n(Fe);ds=i(er,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. HerBERT, like
BERT sequence pair mask has the following format:`),er.forEach(s),hs=c(me),v(ee.$$.fragment,me),me.forEach(s),ms=c(f),F=a(f,"DIV",{class:!0});var it=n(F);v(te.$$.fragment,it),fs=c(it),se=a(it,"P",{});var lt=n(se);us=i(lt,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ie=a(lt,"CODE",{});var tr=n(Ie);gs=i(tr,"prepare_for_model"),tr.forEach(s),ks=i(lt," method."),lt.forEach(s),it.forEach(s),f.forEach(s),this.h()},h(){p(z,"name","hf:doc:metadata"),p(z,"content",JSON.stringify(cr)),p(k,"id","herbert"),p(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(k,"href","#herbert"),p(g,"class","relative group"),p(j,"id","overview"),p(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(j,"href","#overview"),p(P,"class","relative group"),p(M,"href","https://www.aclweb.org/anthology/2020.acl-main.111.pdf"),p(M,"rel","nofollow"),p(C,"href","https://huggingface.co/rmroczkowski"),p(C,"rel","nofollow"),p(S,"href","https://github.com/allegro/HerBERT"),p(S,"rel","nofollow"),p(A,"id","transformers.HerbertTokenizer"),p(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(A,"href","#transformers.HerbertTokenizer"),p(q,"class","relative group"),p(ie,"href","/docs/transformers/v4.14.1/en/model_doc/xlm#transformers.XLMTokenizer"),p(u,"class","docstring"),p(x,"id","transformers.HerbertTokenizerFast"),p(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(x,"href","#transformers.HerbertTokenizerFast"),p(B,"class","relative group"),p(le,"href","/docs/transformers/v4.14.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),p($,"class","docstring"),p(H,"class","docstring"),p(F,"class","docstring"),p(m,"class","docstring")},m(t,d){e(document.head,z),h(t,re,d),h(t,g,d),e(g,k),e(k,fe),b(I,fe,null),e(g,dt),e(g,ue),e(ue,ht),h(t,Me,d),h(t,P,d),e(P,j),e(j,ge),b(D,ge,null),e(P,mt),e(P,ke),e(ke,ft),h(t,Ne,d),h(t,R,d),e(R,ut),e(R,M),e(M,gt),e(R,kt),h(t,Ce,d),h(t,ae,d),e(ae,_t),h(t,Se,d),h(t,ne,d),e(ne,_e),e(_e,vt),h(t,Ue,d),h(t,oe,d),e(oe,bt),h(t,Oe,d),b(N,t,d),h(t,Je,d),h(t,E,d),e(E,wt),e(E,C),e(C,yt),e(E,Tt),e(E,S),e(S,zt),e(E,Et),h(t,Ke,d),h(t,q,d),e(q,A),e(A,ve),b(U,ve,null),e(q,$t),e(q,be),e(be,Ht),h(t,Ve,d),h(t,u,d),b(O,u,null),e(u,Lt),e(u,we),e(we,Pt),e(u,qt),e(u,ye),e(ye,Bt),e(u,jt),e(u,J),e(J,Te),e(Te,ze),e(ze,Rt),e(J,At),e(J,Ee),e(Ee,$e),e($e,xt),e(u,Ft),e(u,K),e(K,It),e(K,ie),e(ie,Dt),e(K,Mt),h(t,Xe,d),h(t,B,d),e(B,x),e(x,He),b(V,He,null),e(B,Nt),e(B,Le),e(Le,Ct),h(t,We,d),h(t,m,d),b(X,m,null),e(m,St),e(m,W),e(W,Ut),e(W,Pe),e(Pe,Ot),e(W,Jt),e(m,Kt),e(m,qe),e(qe,Vt),e(m,Xt),e(m,Be),e(Be,je),e(je,Wt),e(m,Gt),e(m,G),e(G,Qt),e(G,le),e(le,Yt),e(G,Zt),e(m,es),e(m,$),b(Q,$,null),e($,ts),e($,Re),e(Re,ss),e($,rs),e($,Y),e(Y,ce),e(ce,as),e(ce,Ae),e(Ae,ns),e(Y,os),e(Y,pe),e(pe,is),e(pe,xe),e(xe,ls),e(m,cs),e(m,H),b(Z,H,null),e(H,ps),e(H,Fe),e(Fe,ds),e(H,hs),b(ee,H,null),e(m,ms),e(m,F),b(te,F,null),e(F,fs),e(F,se),e(se,us),e(se,Ie),e(Ie,gs),e(se,ks),Ge=!0},p:ir,i(t){Ge||(w(I.$$.fragment,t),w(D.$$.fragment,t),w(N.$$.fragment,t),w(U.$$.fragment,t),w(O.$$.fragment,t),w(V.$$.fragment,t),w(X.$$.fragment,t),w(Q.$$.fragment,t),w(Z.$$.fragment,t),w(ee.$$.fragment,t),w(te.$$.fragment,t),Ge=!0)},o(t){y(I.$$.fragment,t),y(D.$$.fragment,t),y(N.$$.fragment,t),y(U.$$.fragment,t),y(O.$$.fragment,t),y(V.$$.fragment,t),y(X.$$.fragment,t),y(Q.$$.fragment,t),y(Z.$$.fragment,t),y(ee.$$.fragment,t),y(te.$$.fragment,t),Ge=!1},d(t){s(z),t&&s(re),t&&s(g),T(I),t&&s(Me),t&&s(P),T(D),t&&s(Ne),t&&s(R),t&&s(Ce),t&&s(ae),t&&s(Se),t&&s(ne),t&&s(Ue),t&&s(oe),t&&s(Oe),T(N,t),t&&s(Je),t&&s(E),t&&s(Ke),t&&s(q),T(U),t&&s(Ve),t&&s(u),T(O),t&&s(Xe),t&&s(B),T(V),t&&s(We),t&&s(m),T(X),T(Q),T(Z),T(ee),T(te)}}}const cr={local:"herbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.HerbertTokenizer",title:"HerbertTokenizer"},{local:"transformers.HerbertTokenizerFast",title:"HerbertTokenizerFast"}],title:"HerBERT"};function pr(pt,z,re){let{fw:g}=z;return pt.$$set=k=>{"fw"in k&&re(0,g=k.fw)},[g]}class gr extends rr{constructor(z){super();ar(this,z,pr,lr,nr,{fw:0})}}export{gr as default,cr as metadata};
