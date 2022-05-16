import{S as Go,i as Qo,s as Yo,e as o,k as d,w as g,t as a,M as Zo,c as r,d as n,m as c,a as s,x as k,h as i,b as l,F as e,g as m,y as _,L as er,q as b,o as v,B as z,v as tr}from"../../chunks/vendor-6b77c823.js";import{D as X}from"../../chunks/Docstring-1088f2fb.js";import{I as tt}from"../../chunks/IconCopyLink-7a11ce68.js";function nr(io){let $,nt,A,D,De,J,Lt,Fe,Rt,ot,x,F,Ie,K,Pt,Se,Dt,rt,I,Ft,j,It,St,st,_e,Ct,at,be,Ce,Nt,it,y,Ot,G,Ut,Mt,Q,Vt,Wt,lt,L,S,Ne,Y,Ht,Oe,Xt,dt,ve,Z,Jt,ee,Kt,jt,ct,R,C,Ue,te,Gt,Me,Qt,ht,p,ne,Yt,T,Zt,ze,en,tn,Te,nn,on,oe,rn,sn,an,re,ln,we,dn,cn,hn,q,se,mn,Ve,pn,fn,ae,ye,un,We,gn,kn,qe,_n,He,bn,vn,N,ie,zn,Xe,Tn,wn,O,le,yn,Je,qn,Bn,U,de,En,ce,$n,Ke,An,xn,mt,P,M,je,he,Ln,Ge,Rn,pt,f,me,Pn,w,Dn,Be,Fn,In,Ee,Sn,Cn,pe,Nn,On,Un,fe,Mn,$e,Vn,Wn,Hn,B,ue,Xn,Qe,Jn,Kn,ge,Ae,jn,Ye,Gn,Qn,xe,Yn,Ze,Zn,eo,V,ke,to,et,no,ft;return J=new tt({}),K=new tt({}),Y=new tt({}),te=new tt({}),ne=new X({props:{name:"class transformers.BarthezTokenizer",anchor:"transformers.BarthezTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BarthezTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.BarthezTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BarthezTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.BarthezTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BarthezTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BarthezTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BarthezTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BarthezTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BarthezTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.BarthezTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.BarthezTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/barthez/tokenization_barthez.py#L49"}}),se=new X({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BarthezTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BarthezTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BarthezTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/barthez/tokenization_barthez.py#L163",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ie=new X({props:{name:"convert_tokens_to_string",anchor:"transformers.BarthezTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/barthez/tokenization_barthez.py#L279"}}),le=new X({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BarthezTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BarthezTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BarthezTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/barthez/tokenization_barthez.py#L216",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),de=new X({props:{name:"get_special_tokens_mask",anchor:"transformers.BarthezTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BarthezTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BarthezTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BarthezTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/barthez/tokenization_barthez.py#L189",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),he=new tt({}),me=new X({props:{name:"class transformers.BarthezTokenizerFast",anchor:"transformers.BarthezTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BarthezTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.BarthezTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BarthezTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.BarthezTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BarthezTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BarthezTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BarthezTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BarthezTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BarthezTokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/barthez/tokenization_barthez_fast.py#L58"}}),ue=new X({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BarthezTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BarthezTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BarthezTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/barthez/tokenization_barthez_fast.py#L147",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ke=new X({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BarthezTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BarthezTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BarthezTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/barthez/tokenization_barthez_fast.py#L173",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),{c(){$=o("meta"),nt=d(),A=o("h1"),D=o("a"),De=o("span"),g(J.$$.fragment),Lt=d(),Fe=o("span"),Rt=a("BARThez"),ot=d(),x=o("h2"),F=o("a"),Ie=o("span"),g(K.$$.fragment),Pt=d(),Se=o("span"),Dt=a("Overview"),rt=d(),I=o("p"),Ft=a("The BARThez model was proposed in "),j=o("a"),It=a("BARThez: a Skilled Pretrained French Sequence-to-Sequence Model"),St=a(` by Moussa Kamal Eddine, Antoine J.-P. Tixier, Michalis Vazirgiannis on 23 Oct,
2020.`),st=d(),_e=o("p"),Ct=a("The abstract of the paper:"),at=d(),be=o("p"),Ce=o("em"),Nt=a(`Inductive transfer learning, enabled by self-supervised learning, have taken the entire Natural Language Processing
(NLP) field by storm, with models such as BERT and BART setting new state of the art on countless natural language
understanding tasks. While there are some notable exceptions, most of the available models and research have been
conducted for the English language. In this work, we introduce BARThez, the first BART model for the French language
(to the best of our knowledge). BARThez was pretrained on a very large monolingual French corpus from past research
that we adapted to suit BART\u2019s perturbation schemes. Unlike already existing BERT-based French language models such as
CamemBERT and FlauBERT, BARThez is particularly well-suited for generative tasks, since not only its encoder but also
its decoder is pretrained. In addition to discriminative tasks from the FLUE benchmark, we evaluate BARThez on a novel
summarization dataset, OrangeSum, that we release with this paper. We also continue the pretraining of an already
pretrained multilingual BART on BARThez\u2019s corpus, and we show that the resulting model, which we call mBARTHez,
provides a significant boost over vanilla BARThez, and is on par with or outperforms CamemBERT and FlauBERT.`),it=d(),y=o("p"),Ot=a("This model was contributed by "),G=o("a"),Ut=a("moussakam"),Mt=a(". The Authors\u2019 code can be found "),Q=o("a"),Vt=a("here"),Wt=a("."),lt=d(),L=o("h3"),S=o("a"),Ne=o("span"),g(Y.$$.fragment),Ht=d(),Oe=o("span"),Xt=a("Examples"),dt=d(),ve=o("ul"),Z=o("li"),Jt=a(`BARThez can be fine-tuned on sequence-to-sequence tasks in a similar way as BART, check:
`),ee=o("a"),Kt=a("examples/pytorch/summarization/"),jt=a("."),ct=d(),R=o("h2"),C=o("a"),Ue=o("span"),g(te.$$.fragment),Gt=d(),Me=o("span"),Qt=a("BarthezTokenizer"),ht=d(),p=o("div"),g(ne.$$.fragment),Yt=d(),T=o("p"),Zt=a("Adapted from "),ze=o("a"),en=a("CamembertTokenizer"),tn=a(" and "),Te=o("a"),nn=a("BartTokenizer"),on=a(`. Construct a BARThez tokenizer. Based on
`),oe=o("a"),rn=a("SentencePiece"),sn=a("."),an=d(),re=o("p"),ln=a("This tokenizer inherits from "),we=o("a"),dn=a("PreTrainedTokenizer"),cn=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),hn=d(),q=o("div"),g(se.$$.fragment),mn=d(),Ve=o("p"),pn=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BARThez sequence has the following format:`),fn=d(),ae=o("ul"),ye=o("li"),un=a("single sequence: "),We=o("code"),gn=a("<s> X </s>"),kn=d(),qe=o("li"),_n=a("pair of sequences: "),He=o("code"),bn=a("<s> A </s></s> B </s>"),vn=d(),N=o("div"),g(ie.$$.fragment),zn=d(),Xe=o("p"),Tn=a("Converts a sequence of tokens (strings for sub-words) in a single string."),wn=d(),O=o("div"),g(le.$$.fragment),yn=d(),Je=o("p"),qn=a("Create a mask from the two sequences passed to be used in a sequence-pair classification task."),Bn=d(),U=o("div"),g(de.$$.fragment),En=d(),ce=o("p"),$n=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ke=o("code"),An=a("prepare_for_model"),xn=a(" method."),mt=d(),P=o("h2"),M=o("a"),je=o("span"),g(he.$$.fragment),Ln=d(),Ge=o("span"),Rn=a("BarthezTokenizerFast"),pt=d(),f=o("div"),g(me.$$.fragment),Pn=d(),w=o("p"),Dn=a("Adapted from "),Be=o("a"),Fn=a("CamembertTokenizer"),In=a(" and "),Ee=o("a"),Sn=a("BartTokenizer"),Cn=a(`. Construct a \u201Cfast\u201D BARThez tokenizer. Based on
`),pe=o("a"),Nn=a("SentencePiece"),On=a("."),Un=d(),fe=o("p"),Mn=a("This tokenizer inherits from "),$e=o("a"),Vn=a("PreTrainedTokenizerFast"),Wn=a(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Hn=d(),B=o("div"),g(ue.$$.fragment),Xn=d(),Qe=o("p"),Jn=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BARThez sequence has the following format:`),Kn=d(),ge=o("ul"),Ae=o("li"),jn=a("single sequence: "),Ye=o("code"),Gn=a("<s> X </s>"),Qn=d(),xe=o("li"),Yn=a("pair of sequences: "),Ze=o("code"),Zn=a("<s> A </s></s> B </s>"),eo=d(),V=o("div"),g(ke.$$.fragment),to=d(),et=o("p"),no=a("Create a mask from the two sequences passed to be used in a sequence-pair classification task."),this.h()},l(t){const h=Zo('[data-svelte="svelte-1phssyn"]',document.head);$=r(h,"META",{name:!0,content:!0}),h.forEach(n),nt=c(t),A=r(t,"H1",{class:!0});var ut=s(A);D=r(ut,"A",{id:!0,class:!0,href:!0});var lo=s(D);De=r(lo,"SPAN",{});var co=s(De);k(J.$$.fragment,co),co.forEach(n),lo.forEach(n),Lt=c(ut),Fe=r(ut,"SPAN",{});var ho=s(Fe);Rt=i(ho,"BARThez"),ho.forEach(n),ut.forEach(n),ot=c(t),x=r(t,"H2",{class:!0});var gt=s(x);F=r(gt,"A",{id:!0,class:!0,href:!0});var mo=s(F);Ie=r(mo,"SPAN",{});var po=s(Ie);k(K.$$.fragment,po),po.forEach(n),mo.forEach(n),Pt=c(gt),Se=r(gt,"SPAN",{});var fo=s(Se);Dt=i(fo,"Overview"),fo.forEach(n),gt.forEach(n),rt=c(t),I=r(t,"P",{});var kt=s(I);Ft=i(kt,"The BARThez model was proposed in "),j=r(kt,"A",{href:!0,rel:!0});var uo=s(j);It=i(uo,"BARThez: a Skilled Pretrained French Sequence-to-Sequence Model"),uo.forEach(n),St=i(kt,` by Moussa Kamal Eddine, Antoine J.-P. Tixier, Michalis Vazirgiannis on 23 Oct,
2020.`),kt.forEach(n),st=c(t),_e=r(t,"P",{});var go=s(_e);Ct=i(go,"The abstract of the paper:"),go.forEach(n),at=c(t),be=r(t,"P",{});var ko=s(be);Ce=r(ko,"EM",{});var _o=s(Ce);Nt=i(_o,`Inductive transfer learning, enabled by self-supervised learning, have taken the entire Natural Language Processing
(NLP) field by storm, with models such as BERT and BART setting new state of the art on countless natural language
understanding tasks. While there are some notable exceptions, most of the available models and research have been
conducted for the English language. In this work, we introduce BARThez, the first BART model for the French language
(to the best of our knowledge). BARThez was pretrained on a very large monolingual French corpus from past research
that we adapted to suit BART\u2019s perturbation schemes. Unlike already existing BERT-based French language models such as
CamemBERT and FlauBERT, BARThez is particularly well-suited for generative tasks, since not only its encoder but also
its decoder is pretrained. In addition to discriminative tasks from the FLUE benchmark, we evaluate BARThez on a novel
summarization dataset, OrangeSum, that we release with this paper. We also continue the pretraining of an already
pretrained multilingual BART on BARThez\u2019s corpus, and we show that the resulting model, which we call mBARTHez,
provides a significant boost over vanilla BARThez, and is on par with or outperforms CamemBERT and FlauBERT.`),_o.forEach(n),ko.forEach(n),it=c(t),y=r(t,"P",{});var Le=s(y);Ot=i(Le,"This model was contributed by "),G=r(Le,"A",{href:!0,rel:!0});var bo=s(G);Ut=i(bo,"moussakam"),bo.forEach(n),Mt=i(Le,". The Authors\u2019 code can be found "),Q=r(Le,"A",{href:!0,rel:!0});var vo=s(Q);Vt=i(vo,"here"),vo.forEach(n),Wt=i(Le,"."),Le.forEach(n),lt=c(t),L=r(t,"H3",{class:!0});var _t=s(L);S=r(_t,"A",{id:!0,class:!0,href:!0});var zo=s(S);Ne=r(zo,"SPAN",{});var To=s(Ne);k(Y.$$.fragment,To),To.forEach(n),zo.forEach(n),Ht=c(_t),Oe=r(_t,"SPAN",{});var wo=s(Oe);Xt=i(wo,"Examples"),wo.forEach(n),_t.forEach(n),dt=c(t),ve=r(t,"UL",{});var yo=s(ve);Z=r(yo,"LI",{});var bt=s(Z);Jt=i(bt,`BARThez can be fine-tuned on sequence-to-sequence tasks in a similar way as BART, check:
`),ee=r(bt,"A",{href:!0,rel:!0});var qo=s(ee);Kt=i(qo,"examples/pytorch/summarization/"),qo.forEach(n),jt=i(bt,"."),bt.forEach(n),yo.forEach(n),ct=c(t),R=r(t,"H2",{class:!0});var vt=s(R);C=r(vt,"A",{id:!0,class:!0,href:!0});var Bo=s(C);Ue=r(Bo,"SPAN",{});var Eo=s(Ue);k(te.$$.fragment,Eo),Eo.forEach(n),Bo.forEach(n),Gt=c(vt),Me=r(vt,"SPAN",{});var $o=s(Me);Qt=i($o,"BarthezTokenizer"),$o.forEach(n),vt.forEach(n),ht=c(t),p=r(t,"DIV",{class:!0});var u=s(p);k(ne.$$.fragment,u),Yt=c(u),T=r(u,"P",{});var W=s(T);Zt=i(W,"Adapted from "),ze=r(W,"A",{href:!0});var Ao=s(ze);en=i(Ao,"CamembertTokenizer"),Ao.forEach(n),tn=i(W," and "),Te=r(W,"A",{href:!0});var xo=s(Te);nn=i(xo,"BartTokenizer"),xo.forEach(n),on=i(W,`. Construct a BARThez tokenizer. Based on
`),oe=r(W,"A",{href:!0,rel:!0});var Lo=s(oe);rn=i(Lo,"SentencePiece"),Lo.forEach(n),sn=i(W,"."),W.forEach(n),an=c(u),re=r(u,"P",{});var zt=s(re);ln=i(zt,"This tokenizer inherits from "),we=r(zt,"A",{href:!0});var Ro=s(we);dn=i(Ro,"PreTrainedTokenizer"),Ro.forEach(n),cn=i(zt,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),zt.forEach(n),hn=c(u),q=r(u,"DIV",{class:!0});var Re=s(q);k(se.$$.fragment,Re),mn=c(Re),Ve=r(Re,"P",{});var Po=s(Ve);pn=i(Po,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BARThez sequence has the following format:`),Po.forEach(n),fn=c(Re),ae=r(Re,"UL",{});var Tt=s(ae);ye=r(Tt,"LI",{});var oo=s(ye);un=i(oo,"single sequence: "),We=r(oo,"CODE",{});var Do=s(We);gn=i(Do,"<s> X </s>"),Do.forEach(n),oo.forEach(n),kn=c(Tt),qe=r(Tt,"LI",{});var ro=s(qe);_n=i(ro,"pair of sequences: "),He=r(ro,"CODE",{});var Fo=s(He);bn=i(Fo,"<s> A </s></s> B </s>"),Fo.forEach(n),ro.forEach(n),Tt.forEach(n),Re.forEach(n),vn=c(u),N=r(u,"DIV",{class:!0});var wt=s(N);k(ie.$$.fragment,wt),zn=c(wt),Xe=r(wt,"P",{});var Io=s(Xe);Tn=i(Io,"Converts a sequence of tokens (strings for sub-words) in a single string."),Io.forEach(n),wt.forEach(n),wn=c(u),O=r(u,"DIV",{class:!0});var yt=s(O);k(le.$$.fragment,yt),yn=c(yt),Je=r(yt,"P",{});var So=s(Je);qn=i(So,"Create a mask from the two sequences passed to be used in a sequence-pair classification task."),So.forEach(n),yt.forEach(n),Bn=c(u),U=r(u,"DIV",{class:!0});var qt=s(U);k(de.$$.fragment,qt),En=c(qt),ce=r(qt,"P",{});var Bt=s(ce);$n=i(Bt,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ke=r(Bt,"CODE",{});var Co=s(Ke);An=i(Co,"prepare_for_model"),Co.forEach(n),xn=i(Bt," method."),Bt.forEach(n),qt.forEach(n),u.forEach(n),mt=c(t),P=r(t,"H2",{class:!0});var Et=s(P);M=r(Et,"A",{id:!0,class:!0,href:!0});var No=s(M);je=r(No,"SPAN",{});var Oo=s(je);k(he.$$.fragment,Oo),Oo.forEach(n),No.forEach(n),Ln=c(Et),Ge=r(Et,"SPAN",{});var Uo=s(Ge);Rn=i(Uo,"BarthezTokenizerFast"),Uo.forEach(n),Et.forEach(n),pt=c(t),f=r(t,"DIV",{class:!0});var E=s(f);k(me.$$.fragment,E),Pn=c(E),w=r(E,"P",{});var H=s(w);Dn=i(H,"Adapted from "),Be=r(H,"A",{href:!0});var Mo=s(Be);Fn=i(Mo,"CamembertTokenizer"),Mo.forEach(n),In=i(H," and "),Ee=r(H,"A",{href:!0});var Vo=s(Ee);Sn=i(Vo,"BartTokenizer"),Vo.forEach(n),Cn=i(H,`. Construct a \u201Cfast\u201D BARThez tokenizer. Based on
`),pe=r(H,"A",{href:!0,rel:!0});var Wo=s(pe);Nn=i(Wo,"SentencePiece"),Wo.forEach(n),On=i(H,"."),H.forEach(n),Un=c(E),fe=r(E,"P",{});var $t=s(fe);Mn=i($t,"This tokenizer inherits from "),$e=r($t,"A",{href:!0});var Ho=s($e);Vn=i(Ho,"PreTrainedTokenizerFast"),Ho.forEach(n),Wn=i($t,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),$t.forEach(n),Hn=c(E),B=r(E,"DIV",{class:!0});var Pe=s(B);k(ue.$$.fragment,Pe),Xn=c(Pe),Qe=r(Pe,"P",{});var Xo=s(Qe);Jn=i(Xo,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BARThez sequence has the following format:`),Xo.forEach(n),Kn=c(Pe),ge=r(Pe,"UL",{});var At=s(ge);Ae=r(At,"LI",{});var so=s(Ae);jn=i(so,"single sequence: "),Ye=r(so,"CODE",{});var Jo=s(Ye);Gn=i(Jo,"<s> X </s>"),Jo.forEach(n),so.forEach(n),Qn=c(At),xe=r(At,"LI",{});var ao=s(xe);Yn=i(ao,"pair of sequences: "),Ze=r(ao,"CODE",{});var Ko=s(Ze);Zn=i(Ko,"<s> A </s></s> B </s>"),Ko.forEach(n),ao.forEach(n),At.forEach(n),Pe.forEach(n),eo=c(E),V=r(E,"DIV",{class:!0});var xt=s(V);k(ke.$$.fragment,xt),to=c(xt),et=r(xt,"P",{});var jo=s(et);no=i(jo,"Create a mask from the two sequences passed to be used in a sequence-pair classification task."),jo.forEach(n),xt.forEach(n),E.forEach(n),this.h()},h(){l($,"name","hf:doc:metadata"),l($,"content",JSON.stringify(or)),l(D,"id","barthez"),l(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(D,"href","#barthez"),l(A,"class","relative group"),l(F,"id","overview"),l(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(F,"href","#overview"),l(x,"class","relative group"),l(j,"href","https://arxiv.org/abs/2010.12321"),l(j,"rel","nofollow"),l(G,"href","https://huggingface.co/moussakam"),l(G,"rel","nofollow"),l(Q,"href","https://github.com/moussaKam/BARThez"),l(Q,"rel","nofollow"),l(S,"id","examples"),l(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(S,"href","#examples"),l(L,"class","relative group"),l(ee,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization/README.md"),l(ee,"rel","nofollow"),l(C,"id","transformers.BarthezTokenizer"),l(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(C,"href","#transformers.BarthezTokenizer"),l(R,"class","relative group"),l(ze,"href","/docs/transformers/v4.19.2/en/model_doc/camembert#transformers.CamembertTokenizer"),l(Te,"href","/docs/transformers/v4.19.2/en/model_doc/bart#transformers.BartTokenizer"),l(oe,"href","https://github.com/google/sentencepiece"),l(oe,"rel","nofollow"),l(we,"href","/docs/transformers/v4.19.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(p,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(M,"id","transformers.BarthezTokenizerFast"),l(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(M,"href","#transformers.BarthezTokenizerFast"),l(P,"class","relative group"),l(Be,"href","/docs/transformers/v4.19.2/en/model_doc/camembert#transformers.CamembertTokenizer"),l(Ee,"href","/docs/transformers/v4.19.2/en/model_doc/bart#transformers.BartTokenizer"),l(pe,"href","https://github.com/google/sentencepiece"),l(pe,"rel","nofollow"),l($e,"href","/docs/transformers/v4.19.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),l(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(f,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,h){e(document.head,$),m(t,nt,h),m(t,A,h),e(A,D),e(D,De),_(J,De,null),e(A,Lt),e(A,Fe),e(Fe,Rt),m(t,ot,h),m(t,x,h),e(x,F),e(F,Ie),_(K,Ie,null),e(x,Pt),e(x,Se),e(Se,Dt),m(t,rt,h),m(t,I,h),e(I,Ft),e(I,j),e(j,It),e(I,St),m(t,st,h),m(t,_e,h),e(_e,Ct),m(t,at,h),m(t,be,h),e(be,Ce),e(Ce,Nt),m(t,it,h),m(t,y,h),e(y,Ot),e(y,G),e(G,Ut),e(y,Mt),e(y,Q),e(Q,Vt),e(y,Wt),m(t,lt,h),m(t,L,h),e(L,S),e(S,Ne),_(Y,Ne,null),e(L,Ht),e(L,Oe),e(Oe,Xt),m(t,dt,h),m(t,ve,h),e(ve,Z),e(Z,Jt),e(Z,ee),e(ee,Kt),e(Z,jt),m(t,ct,h),m(t,R,h),e(R,C),e(C,Ue),_(te,Ue,null),e(R,Gt),e(R,Me),e(Me,Qt),m(t,ht,h),m(t,p,h),_(ne,p,null),e(p,Yt),e(p,T),e(T,Zt),e(T,ze),e(ze,en),e(T,tn),e(T,Te),e(Te,nn),e(T,on),e(T,oe),e(oe,rn),e(T,sn),e(p,an),e(p,re),e(re,ln),e(re,we),e(we,dn),e(re,cn),e(p,hn),e(p,q),_(se,q,null),e(q,mn),e(q,Ve),e(Ve,pn),e(q,fn),e(q,ae),e(ae,ye),e(ye,un),e(ye,We),e(We,gn),e(ae,kn),e(ae,qe),e(qe,_n),e(qe,He),e(He,bn),e(p,vn),e(p,N),_(ie,N,null),e(N,zn),e(N,Xe),e(Xe,Tn),e(p,wn),e(p,O),_(le,O,null),e(O,yn),e(O,Je),e(Je,qn),e(p,Bn),e(p,U),_(de,U,null),e(U,En),e(U,ce),e(ce,$n),e(ce,Ke),e(Ke,An),e(ce,xn),m(t,mt,h),m(t,P,h),e(P,M),e(M,je),_(he,je,null),e(P,Ln),e(P,Ge),e(Ge,Rn),m(t,pt,h),m(t,f,h),_(me,f,null),e(f,Pn),e(f,w),e(w,Dn),e(w,Be),e(Be,Fn),e(w,In),e(w,Ee),e(Ee,Sn),e(w,Cn),e(w,pe),e(pe,Nn),e(w,On),e(f,Un),e(f,fe),e(fe,Mn),e(fe,$e),e($e,Vn),e(fe,Wn),e(f,Hn),e(f,B),_(ue,B,null),e(B,Xn),e(B,Qe),e(Qe,Jn),e(B,Kn),e(B,ge),e(ge,Ae),e(Ae,jn),e(Ae,Ye),e(Ye,Gn),e(ge,Qn),e(ge,xe),e(xe,Yn),e(xe,Ze),e(Ze,Zn),e(f,eo),e(f,V),_(ke,V,null),e(V,to),e(V,et),e(et,no),ft=!0},p:er,i(t){ft||(b(J.$$.fragment,t),b(K.$$.fragment,t),b(Y.$$.fragment,t),b(te.$$.fragment,t),b(ne.$$.fragment,t),b(se.$$.fragment,t),b(ie.$$.fragment,t),b(le.$$.fragment,t),b(de.$$.fragment,t),b(he.$$.fragment,t),b(me.$$.fragment,t),b(ue.$$.fragment,t),b(ke.$$.fragment,t),ft=!0)},o(t){v(J.$$.fragment,t),v(K.$$.fragment,t),v(Y.$$.fragment,t),v(te.$$.fragment,t),v(ne.$$.fragment,t),v(se.$$.fragment,t),v(ie.$$.fragment,t),v(le.$$.fragment,t),v(de.$$.fragment,t),v(he.$$.fragment,t),v(me.$$.fragment,t),v(ue.$$.fragment,t),v(ke.$$.fragment,t),ft=!1},d(t){n($),t&&n(nt),t&&n(A),z(J),t&&n(ot),t&&n(x),z(K),t&&n(rt),t&&n(I),t&&n(st),t&&n(_e),t&&n(at),t&&n(be),t&&n(it),t&&n(y),t&&n(lt),t&&n(L),z(Y),t&&n(dt),t&&n(ve),t&&n(ct),t&&n(R),z(te),t&&n(ht),t&&n(p),z(ne),z(se),z(ie),z(le),z(de),t&&n(mt),t&&n(P),z(he),t&&n(pt),t&&n(f),z(me),z(ue),z(ke)}}}const or={local:"barthez",sections:[{local:"overview",sections:[{local:"examples",title:"Examples"}],title:"Overview"},{local:"transformers.BarthezTokenizer",title:"BarthezTokenizer"},{local:"transformers.BarthezTokenizerFast",title:"BarthezTokenizerFast"}],title:"BARThez"};function rr(io){return tr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class lr extends Go{constructor($){super();Qo(this,$,rr,nr,Yo,{})}}export{lr as default,or as metadata};
