import{S as Ws,i as Us,s as Gs,e as n,k as p,w as b,t as r,L as Hs,c as a,d as s,m as c,a as o,x as y,h as i,b as h,J as t,g as d,y as T,K as Ks,q as w,o as A,B}from"../../../chunks/vendor-b1433968.js";import{D as je}from"../../../chunks/Docstring-ff504c58.js";import{C as Xs}from"../../../chunks/CodeBlock-a320dbd7.js";import{I as ds}from"../../../chunks/IconCopyLink-7029626d.js";import"../../../chunks/CopyButton-f65cb278.js";function Js(ot){let _,te,f,g,ge,D,rt,_e,it,Le,$,q,ke,M,lt,ve,pt,Pe,R,ct,S,ht,dt,xe,se,mt,De,ne,be,ut,Me,ae,ft,Se,C,Ce,oe,gt,Ie,re,I,_t,ie,kt,vt,Ne,N,Oe,le,ye,bt,Ve,k,yt,O,Tt,wt,V,At,Bt,Fe,z,j,Te,F,$t,we,zt,Xe,m,X,Et,E,qt,pe,Rt,jt,W,Lt,Pt,xt,U,Dt,ce,Mt,St,Ct,G,It,H,Nt,Ae,Ot,Vt,Ft,Xt,v,K,Wt,Be,Ut,Gt,J,he,Ht,$e,Kt,Jt,de,Qt,ze,Yt,Zt,L,Q,es,Ee,ts,ss,P,Y,ns,qe,as,os,x,Z,rs,ee,is,Re,ls,ps,We;return D=new ds({}),M=new ds({}),C=new Xs({props:{code:`import torch
from transformers import AutoModel, AutoTokenizer

bartpho = AutoModel.from_pretrained("vinai/bartpho-syllable")

tokenizer = AutoTokenizer.from_pretrained("vinai/bartpho-syllable")

line = "Ch\xFAng t\xF4i l\xE0 nh\u1EEFng nghi\xEAn c\u1EE9u vi\xEAn."

input_ids = tokenizer(line, return_tensors="pt")

with torch.no_grad():
    features = bartpho(**input_ids)  # Models outputs are now tuples

# With TensorFlow 2.0+:
from transformers import TFAutoModel
bartpho = TFAutoModel.from_pretrained("vinai/bartpho-syllable")
input_ids = tokenizer(line, return_tensors="tf")
features = bartpho(**input_ids),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">import</span> torch</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, AutoTokenizer</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">bartpho = AutoModel.from_pretrained(<span class="hljs-string">&quot;vinai/bartpho-syllable&quot;</span>)</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;vinai/bartpho-syllable&quot;</span>)</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">line = <span class="hljs-string">&quot;Ch\xFAng t\xF4i l\xE0 nh\u1EEFng nghi\xEAn c\u1EE9u vi\xEAn.&quot;</span></span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">input_ids = tokenizer(line, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">with</span> torch.no_grad():</span>
<span class="hljs-meta">...</span> <span class="language-python">    features = bartpho(**input_ids)  <span class="hljs-comment"># Models outputs are now tuples</span></span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-comment"># With TensorFlow 2.0+:</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModel</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">bartpho = TFAutoModel.from_pretrained(<span class="hljs-string">&quot;vinai/bartpho-syllable&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">input_ids = tokenizer(line, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">features = bartpho(**input_ids)</span>`}}),N=new Xs({props:{code:`from transformers import MBartForConditionalGeneration
bartpho = MBartForConditionalGeneration.from_pretrained("vinai/bartpho-syllable")
TXT = 'Ch\xFAng t\xF4i l\xE0 <mask> nghi\xEAn c\u1EE9u vi\xEAn.'
input_ids = tokenizer([TXT], return_tensors='pt')['input_ids']
logits = bartpho(input_ids).logits
masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)
print(tokenizer.decode(predictions).split()),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">bartpho = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;vinai/bartpho-syllable&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">TXT = <span class="hljs-string">&#x27;Ch\xFAng t\xF4i l\xE0 &lt;mask&gt; nghi\xEAn c\u1EE9u vi\xEAn.&#x27;</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">logits = bartpho(input_ids).logits</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero().item()</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">values, predictions = probs.topk(<span class="hljs-number">5</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-built_in">print</span>(tokenizer.decode(predictions).split())</span>`}}),F=new ds({}),X=new je({props:{name:"class transformers.BartphoTokenizer",anchor:"transformers.BartphoTokenizer",parameters:[{name:"vocab_file",val:""},{name:"monolingual_vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/bartpho/tokenization_bartpho.py#L46",parametersDescription:[{anchor:"transformers.BartphoTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file. This vocabulary is the pre-trained SentencePiece model available from the
multilingual XLM-RoBERTa, also used in mBART, consisting of 250K types.`,name:"vocab_file"},{anchor:"transformers.BartphoTokenizer.monolingual_vocab_file",description:`<strong>monolingual_vocab_file</strong> (<code>str</code>) &#x2014;
Path to the monolingual vocabulary file. This monolingual vocabulary consists of Vietnamese-specialized
types extracted from the multilingual vocabulary vocab_file of 250K types.`,name:"monolingual_vocab_file"},{anchor:"transformers.BartphoTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.`,name:"bos_token"}]}}),K=new je({props:{name:"build\\_inputs\\_with\\_special\\_tokens",anchor:"transformers.BartphoTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/bartpho/tokenization_bartpho.py#L179",parametersDescription:[{anchor:"transformers.BartphoTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BartphoTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Q=new je({props:{name:"convert\\_tokens\\_to\\_string",anchor:"transformers.BartphoTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/bartpho/tokenization_bartpho.py#L281"}}),Y=new je({props:{name:"create\\_token\\_type\\_ids\\_from\\_sequences",anchor:"transformers.BartphoTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/bartpho/tokenization_bartpho.py#L233",parametersDescription:[{anchor:"transformers.BartphoTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartphoTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Z=new je({props:{name:"get\\_special\\_tokens\\_mask",anchor:"transformers.BartphoTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/bartpho/tokenization_bartpho.py#L205",parametersDescription:[{anchor:"transformers.BartphoTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartphoTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BartphoTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),{c(){_=n("meta"),te=p(),f=n("h1"),g=n("a"),ge=n("span"),b(D.$$.fragment),rt=p(),_e=n("span"),it=r("BARTpho"),Le=p(),$=n("h2"),q=n("a"),ke=n("span"),b(M.$$.fragment),lt=p(),ve=n("span"),pt=r("Overview"),Pe=p(),R=n("p"),ct=r("The BARTpho model was proposed in "),S=n("a"),ht=r("BARTpho: Pre-trained Sequence-to-Sequence Models for Vietnamese"),dt=r(" by Nguyen Luong Tran, Duong Minh Le and Dat Quoc Nguyen."),xe=p(),se=n("p"),mt=r("The abstract from the paper is the following:"),De=p(),ne=n("p"),be=n("em"),ut=r(`We present BARTpho with two versions \u2014 BARTpho_word and BARTpho_syllable \u2014 the first public large-scale monolingual
sequence-to-sequence models pre-trained for Vietnamese. Our BARTpho uses the \u201Clarge\u201D architecture and pre-training
scheme of the sequence-to-sequence denoising model BART, thus especially suitable for generative NLP tasks. Experiments
on a downstream task of Vietnamese text summarization show that in both automatic and human evaluations, our BARTpho
outperforms the strong baseline mBART and improves the state-of-the-art. We release BARTpho to facilitate future
research and applications of generative Vietnamese NLP tasks.`),Me=p(),ae=n("p"),ft=r("Example of use:"),Se=p(),b(C.$$.fragment),Ce=p(),oe=n("p"),gt=r("Tips:"),Ie=p(),re=n("ul"),I=n("li"),_t=r(`Following mBART, BARTpho uses the \u201Clarge\u201D architecture of BART with an additional layer-normalization layer on top of
both the encoder and decoder. Thus, usage examples in the `),ie=n("a"),kt=r("documentation of BART"),vt=r(`, when adapting to use
with BARTpho, should be adjusted by replacing the BART-specialized classes with the mBART-specialized counterparts.
For example:`),Ne=p(),b(N.$$.fragment),Oe=p(),le=n("ul"),ye=n("li"),bt=r(`This implementation is only for tokenization: \u201Cmonolingual_vocab_file\u201D consists of Vietnamese-specialized types
extracted from the pre-trained SentencePiece model \u201Cvocab_file\u201D that is available from the multilingual XLM-RoBERTa.
Other languages, if employing this pre-trained multilingual SentencePiece model \u201Cvocab_file\u201D for subword
segmentation, can reuse BartphoTokenizer with their own language-specialized \u201Cmonolingual_vocab_file\u201D.`),Ve=p(),k=n("p"),yt=r("This model was contributed by "),O=n("a"),Tt=r("dqnguyen"),wt=r(". The original code can be found "),V=n("a"),At=r("here"),Bt=r("."),Fe=p(),z=n("h2"),j=n("a"),Te=n("span"),b(F.$$.fragment),$t=p(),we=n("span"),zt=r("BartphoTokenizer"),Xe=p(),m=n("div"),b(X.$$.fragment),Et=p(),E=n("p"),qt=r("Adapted from "),pe=n("a"),Rt=r("XLMRobertaTokenizer"),jt=r(". Based on "),W=n("a"),Lt=r("SentencePiece"),Pt=r("."),xt=p(),U=n("p"),Dt=r("This tokenizer inherits from "),ce=n("a"),Mt=r("PreTrainedTokenizer"),St=r(` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),Ct=p(),G=n("p"),It=r(`Attributes:
sp`),H=n("em"),Nt=r("model ("),Ae=n("code"),Ot=r("SentencePieceProcessor"),Vt=r(`):
The _SentencePiece`),Ft=r(" processor that is used for every conversion (string, tokens and IDs)."),Xt=p(),v=n("div"),b(K.$$.fragment),Wt=p(),Be=n("p"),Ut=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An BARTPho sequence has the following format:`),Gt=p(),J=n("ul"),he=n("li"),Ht=r("single sequence: "),$e=n("code"),Kt=r("<s> X </s>"),Jt=p(),de=n("li"),Qt=r("pair of sequences: "),ze=n("code"),Yt=r("<s> A </s></s> B </s>"),Zt=p(),L=n("div"),b(Q.$$.fragment),es=p(),Ee=n("p"),ts=r("Converts a sequence of tokens (strings for sub-words) in a single string."),ss=p(),P=n("div"),b(Y.$$.fragment),ns=p(),qe=n("p"),as=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BARTPho does not
make use of token type ids, therefore a list of zeros is returned.`),os=p(),x=n("div"),b(Z.$$.fragment),rs=p(),ee=n("p"),is=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Re=n("code"),ls=r("prepare_for_model"),ps=r(" method."),this.h()},l(e){const l=Hs('[data-svelte="svelte-1phssyn"]',document.head);_=a(l,"META",{name:!0,content:!0}),l.forEach(s),te=c(e),f=a(e,"H1",{class:!0});var Ue=o(f);g=a(Ue,"A",{id:!0,class:!0,href:!0});var ms=o(g);ge=a(ms,"SPAN",{});var us=o(ge);y(D.$$.fragment,us),us.forEach(s),ms.forEach(s),rt=c(Ue),_e=a(Ue,"SPAN",{});var fs=o(_e);it=i(fs,"BARTpho"),fs.forEach(s),Ue.forEach(s),Le=c(e),$=a(e,"H2",{class:!0});var Ge=o($);q=a(Ge,"A",{id:!0,class:!0,href:!0});var gs=o(q);ke=a(gs,"SPAN",{});var _s=o(ke);y(M.$$.fragment,_s),_s.forEach(s),gs.forEach(s),lt=c(Ge),ve=a(Ge,"SPAN",{});var ks=o(ve);pt=i(ks,"Overview"),ks.forEach(s),Ge.forEach(s),Pe=c(e),R=a(e,"P",{});var He=o(R);ct=i(He,"The BARTpho model was proposed in "),S=a(He,"A",{href:!0,rel:!0});var vs=o(S);ht=i(vs,"BARTpho: Pre-trained Sequence-to-Sequence Models for Vietnamese"),vs.forEach(s),dt=i(He," by Nguyen Luong Tran, Duong Minh Le and Dat Quoc Nguyen."),He.forEach(s),xe=c(e),se=a(e,"P",{});var bs=o(se);mt=i(bs,"The abstract from the paper is the following:"),bs.forEach(s),De=c(e),ne=a(e,"P",{});var ys=o(ne);be=a(ys,"EM",{});var Ts=o(be);ut=i(Ts,`We present BARTpho with two versions \u2014 BARTpho_word and BARTpho_syllable \u2014 the first public large-scale monolingual
sequence-to-sequence models pre-trained for Vietnamese. Our BARTpho uses the \u201Clarge\u201D architecture and pre-training
scheme of the sequence-to-sequence denoising model BART, thus especially suitable for generative NLP tasks. Experiments
on a downstream task of Vietnamese text summarization show that in both automatic and human evaluations, our BARTpho
outperforms the strong baseline mBART and improves the state-of-the-art. We release BARTpho to facilitate future
research and applications of generative Vietnamese NLP tasks.`),Ts.forEach(s),ys.forEach(s),Me=c(e),ae=a(e,"P",{});var ws=o(ae);ft=i(ws,"Example of use:"),ws.forEach(s),Se=c(e),y(C.$$.fragment,e),Ce=c(e),oe=a(e,"P",{});var As=o(oe);gt=i(As,"Tips:"),As.forEach(s),Ie=c(e),re=a(e,"UL",{});var Bs=o(re);I=a(Bs,"LI",{});var Ke=o(I);_t=i(Ke,`Following mBART, BARTpho uses the \u201Clarge\u201D architecture of BART with an additional layer-normalization layer on top of
both the encoder and decoder. Thus, usage examples in the `),ie=a(Ke,"A",{href:!0});var $s=o(ie);kt=i($s,"documentation of BART"),$s.forEach(s),vt=i(Ke,`, when adapting to use
with BARTpho, should be adjusted by replacing the BART-specialized classes with the mBART-specialized counterparts.
For example:`),Ke.forEach(s),Bs.forEach(s),Ne=c(e),y(N.$$.fragment,e),Oe=c(e),le=a(e,"UL",{});var zs=o(le);ye=a(zs,"LI",{});var Es=o(ye);bt=i(Es,`This implementation is only for tokenization: \u201Cmonolingual_vocab_file\u201D consists of Vietnamese-specialized types
extracted from the pre-trained SentencePiece model \u201Cvocab_file\u201D that is available from the multilingual XLM-RoBERTa.
Other languages, if employing this pre-trained multilingual SentencePiece model \u201Cvocab_file\u201D for subword
segmentation, can reuse BartphoTokenizer with their own language-specialized \u201Cmonolingual_vocab_file\u201D.`),Es.forEach(s),zs.forEach(s),Ve=c(e),k=a(e,"P",{});var me=o(k);yt=i(me,"This model was contributed by "),O=a(me,"A",{href:!0,rel:!0});var qs=o(O);Tt=i(qs,"dqnguyen"),qs.forEach(s),wt=i(me,". The original code can be found "),V=a(me,"A",{href:!0,rel:!0});var Rs=o(V);At=i(Rs,"here"),Rs.forEach(s),Bt=i(me,"."),me.forEach(s),Fe=c(e),z=a(e,"H2",{class:!0});var Je=o(z);j=a(Je,"A",{id:!0,class:!0,href:!0});var js=o(j);Te=a(js,"SPAN",{});var Ls=o(Te);y(F.$$.fragment,Ls),Ls.forEach(s),js.forEach(s),$t=c(Je),we=a(Je,"SPAN",{});var Ps=o(we);zt=i(Ps,"BartphoTokenizer"),Ps.forEach(s),Je.forEach(s),Xe=c(e),m=a(e,"DIV",{class:!0});var u=o(m);y(X.$$.fragment,u),Et=c(u),E=a(u,"P",{});var ue=o(E);qt=i(ue,"Adapted from "),pe=a(ue,"A",{href:!0});var xs=o(pe);Rt=i(xs,"XLMRobertaTokenizer"),xs.forEach(s),jt=i(ue,". Based on "),W=a(ue,"A",{href:!0,rel:!0});var Ds=o(W);Lt=i(Ds,"SentencePiece"),Ds.forEach(s),Pt=i(ue,"."),ue.forEach(s),xt=c(u),U=a(u,"P",{});var Qe=o(U);Dt=i(Qe,"This tokenizer inherits from "),ce=a(Qe,"A",{href:!0});var Ms=o(ce);Mt=i(Ms,"PreTrainedTokenizer"),Ms.forEach(s),St=i(Qe,` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.`),Qe.forEach(s),Ct=c(u),G=a(u,"P",{});var Ye=o(G);It=i(Ye,`Attributes:
sp`),H=a(Ye,"EM",{});var Ze=o(H);Nt=i(Ze,"model ("),Ae=a(Ze,"CODE",{});var Ss=o(Ae);Ot=i(Ss,"SentencePieceProcessor"),Ss.forEach(s),Vt=i(Ze,`):
The _SentencePiece`),Ze.forEach(s),Ft=i(Ye," processor that is used for every conversion (string, tokens and IDs)."),Ye.forEach(s),Xt=c(u),v=a(u,"DIV",{class:!0});var fe=o(v);y(K.$$.fragment,fe),Wt=c(fe),Be=a(fe,"P",{});var Cs=o(Be);Ut=i(Cs,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An BARTPho sequence has the following format:`),Cs.forEach(s),Gt=c(fe),J=a(fe,"UL",{});var et=o(J);he=a(et,"LI",{});var cs=o(he);Ht=i(cs,"single sequence: "),$e=a(cs,"CODE",{});var Is=o($e);Kt=i(Is,"<s> X </s>"),Is.forEach(s),cs.forEach(s),Jt=c(et),de=a(et,"LI",{});var hs=o(de);Qt=i(hs,"pair of sequences: "),ze=a(hs,"CODE",{});var Ns=o(ze);Yt=i(Ns,"<s> A </s></s> B </s>"),Ns.forEach(s),hs.forEach(s),et.forEach(s),fe.forEach(s),Zt=c(u),L=a(u,"DIV",{class:!0});var tt=o(L);y(Q.$$.fragment,tt),es=c(tt),Ee=a(tt,"P",{});var Os=o(Ee);ts=i(Os,"Converts a sequence of tokens (strings for sub-words) in a single string."),Os.forEach(s),tt.forEach(s),ss=c(u),P=a(u,"DIV",{class:!0});var st=o(P);y(Y.$$.fragment,st),ns=c(st),qe=a(st,"P",{});var Vs=o(qe);as=i(Vs,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BARTPho does not
make use of token type ids, therefore a list of zeros is returned.`),Vs.forEach(s),st.forEach(s),os=c(u),x=a(u,"DIV",{class:!0});var nt=o(x);y(Z.$$.fragment,nt),rs=c(nt),ee=a(nt,"P",{});var at=o(ee);is=i(at,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Re=a(at,"CODE",{});var Fs=o(Re);ls=i(Fs,"prepare_for_model"),Fs.forEach(s),ps=i(at," method."),at.forEach(s),nt.forEach(s),u.forEach(s),this.h()},h(){h(_,"name","hf:doc:metadata"),h(_,"content",JSON.stringify(Qs)),h(g,"id","bartpho"),h(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(g,"href","#bartpho"),h(f,"class","relative group"),h(q,"id","overview"),h(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(q,"href","#overview"),h($,"class","relative group"),h(S,"href","https://arxiv.org/abs/2109.09701"),h(S,"rel","nofollow"),h(ie,"href","/docs/transformers/v4.14.1/en/bart"),h(O,"href","https://huggingface.co/dqnguyen"),h(O,"rel","nofollow"),h(V,"href","https://github.com/VinAIResearch/BARTpho"),h(V,"rel","nofollow"),h(j,"id","transformers.BartphoTokenizer"),h(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(j,"href","#transformers.BartphoTokenizer"),h(z,"class","relative group"),h(pe,"href","/docs/transformers/v4.14.1/en/model_doc/xlmroberta#transformers.XLMRobertaTokenizer"),h(W,"href","https://github.com/google/sentencepiece"),h(W,"rel","nofollow"),h(ce,"href","/docs/transformers/v4.14.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(v,"class","docstring"),h(L,"class","docstring"),h(P,"class","docstring"),h(x,"class","docstring"),h(m,"class","docstring")},m(e,l){t(document.head,_),d(e,te,l),d(e,f,l),t(f,g),t(g,ge),T(D,ge,null),t(f,rt),t(f,_e),t(_e,it),d(e,Le,l),d(e,$,l),t($,q),t(q,ke),T(M,ke,null),t($,lt),t($,ve),t(ve,pt),d(e,Pe,l),d(e,R,l),t(R,ct),t(R,S),t(S,ht),t(R,dt),d(e,xe,l),d(e,se,l),t(se,mt),d(e,De,l),d(e,ne,l),t(ne,be),t(be,ut),d(e,Me,l),d(e,ae,l),t(ae,ft),d(e,Se,l),T(C,e,l),d(e,Ce,l),d(e,oe,l),t(oe,gt),d(e,Ie,l),d(e,re,l),t(re,I),t(I,_t),t(I,ie),t(ie,kt),t(I,vt),d(e,Ne,l),T(N,e,l),d(e,Oe,l),d(e,le,l),t(le,ye),t(ye,bt),d(e,Ve,l),d(e,k,l),t(k,yt),t(k,O),t(O,Tt),t(k,wt),t(k,V),t(V,At),t(k,Bt),d(e,Fe,l),d(e,z,l),t(z,j),t(j,Te),T(F,Te,null),t(z,$t),t(z,we),t(we,zt),d(e,Xe,l),d(e,m,l),T(X,m,null),t(m,Et),t(m,E),t(E,qt),t(E,pe),t(pe,Rt),t(E,jt),t(E,W),t(W,Lt),t(E,Pt),t(m,xt),t(m,U),t(U,Dt),t(U,ce),t(ce,Mt),t(U,St),t(m,Ct),t(m,G),t(G,It),t(G,H),t(H,Nt),t(H,Ae),t(Ae,Ot),t(H,Vt),t(G,Ft),t(m,Xt),t(m,v),T(K,v,null),t(v,Wt),t(v,Be),t(Be,Ut),t(v,Gt),t(v,J),t(J,he),t(he,Ht),t(he,$e),t($e,Kt),t(J,Jt),t(J,de),t(de,Qt),t(de,ze),t(ze,Yt),t(m,Zt),t(m,L),T(Q,L,null),t(L,es),t(L,Ee),t(Ee,ts),t(m,ss),t(m,P),T(Y,P,null),t(P,ns),t(P,qe),t(qe,as),t(m,os),t(m,x),T(Z,x,null),t(x,rs),t(x,ee),t(ee,is),t(ee,Re),t(Re,ls),t(ee,ps),We=!0},p:Ks,i(e){We||(w(D.$$.fragment,e),w(M.$$.fragment,e),w(C.$$.fragment,e),w(N.$$.fragment,e),w(F.$$.fragment,e),w(X.$$.fragment,e),w(K.$$.fragment,e),w(Q.$$.fragment,e),w(Y.$$.fragment,e),w(Z.$$.fragment,e),We=!0)},o(e){A(D.$$.fragment,e),A(M.$$.fragment,e),A(C.$$.fragment,e),A(N.$$.fragment,e),A(F.$$.fragment,e),A(X.$$.fragment,e),A(K.$$.fragment,e),A(Q.$$.fragment,e),A(Y.$$.fragment,e),A(Z.$$.fragment,e),We=!1},d(e){s(_),e&&s(te),e&&s(f),B(D),e&&s(Le),e&&s($),B(M),e&&s(Pe),e&&s(R),e&&s(xe),e&&s(se),e&&s(De),e&&s(ne),e&&s(Me),e&&s(ae),e&&s(Se),B(C,e),e&&s(Ce),e&&s(oe),e&&s(Ie),e&&s(re),e&&s(Ne),B(N,e),e&&s(Oe),e&&s(le),e&&s(Ve),e&&s(k),e&&s(Fe),e&&s(z),B(F),e&&s(Xe),e&&s(m),B(X),B(K),B(Q),B(Y),B(Z)}}}const Qs={local:"bartpho",sections:[{local:"overview",title:"Overview"},{local:"transformers.BartphoTokenizer",title:"BartphoTokenizer"}],title:"BARTpho"};function Ys(ot,_,te){let{fw:f}=_;return ot.$$set=g=>{"fw"in g&&te(0,f=g.fw)},[f]}class an extends Ws{constructor(_){super();Us(this,_,Ys,Js,Gs,{fw:0})}}export{an as default,Qs as metadata};
