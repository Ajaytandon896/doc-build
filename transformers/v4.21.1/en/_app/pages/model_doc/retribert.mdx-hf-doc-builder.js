import{S as uo,i as go,s as _o,e as o,k as d,w as _,t as s,M as vo,c as n,d as r,m as c,a,x as v,h as l,b as i,G as e,g as f,y as b,L as bo,q as k,o as y,B as T,v as ko}from"../../chunks/vendor-hf-doc-builder.js";import{D as Ve}from"../../chunks/Docstring-hf-doc-builder.js";import{I as $e}from"../../chunks/IconCopyLink-hf-doc-builder.js";function yo(Pr){let w,Ke,z,q,Ee,V,_t,xe,vt,We,$,F,Pe,K,bt,Ce,kt,Ge,S,yt,W,Tt,Rt,Qe,R,Bt,G,wt,zt,Q,$t,Et,Je,E,N,Ae,J,xt,Me,Pt,Xe,g,X,Ct,x,At,fe,Mt,qt,Y,Ft,St,Nt,P,Dt,he,It,jt,pe,Lt,Ht,Ye,C,D,qe,Z,Ot,Fe,Ut,Ze,p,ee,Vt,Se,Kt,Wt,I,ue,Gt,Qt,ge,Jt,Xt,Yt,te,Zt,_e,er,tr,et,A,j,Ne,re,rr,De,or,tt,u,oe,nr,ne,ar,Ie,ir,sr,lr,L,ve,dr,cr,be,mr,fr,hr,ae,pr,ke,ur,gr,rt,M,H,je,ie,_r,Le,vr,ot,h,se,br,He,kr,yr,le,Tr,ye,Rr,Br,wr,de,zr,ce,$r,Er,xr,Te,me,nt;return V=new $e({}),K=new $e({}),J=new $e({}),X=new Ve({props:{name:"class transformers.RetriBertConfig",anchor:"transformers.RetriBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 8"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"share_encoders",val:" = True"},{name:"projection_dim",val:" = 128"},{name:"pad_token_id",val:" = 0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RetriBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the RetriBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.1/en/model_doc/retribert#transformers.RetriBertModel">RetriBertModel</a>`,name:"vocab_size"},{anchor:"transformers.RetriBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.RetriBertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.RetriBertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.RetriBertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.RetriBertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.RetriBertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.RetriBertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.RetriBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.RetriBertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <em>token_type_ids</em> passed into <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertModel">BertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.RetriBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.RetriBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.RetriBertConfig.share_encoders",description:`<strong>share_encoders</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use the same Bert-type encoder for the queries and document`,name:"share_encoders"},{anchor:"transformers.RetriBertConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Final dimension of the query and document representation after projection`,name:"projection_dim"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/retribert/configuration_retribert.py#L31"}}),Z=new $e({}),ee=new Ve({props:{name:"class transformers.RetriBertTokenizer",anchor:"transformers.RetriBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/retribert/tokenization_retribert.py#L43"}}),re=new $e({}),oe=new Ve({props:{name:"class transformers.RetriBertTokenizerFast",anchor:"transformers.RetriBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/retribert/tokenization_retribert_fast.py#L49"}}),ie=new $e({}),se=new Ve({props:{name:"class transformers.RetriBertModel",anchor:"transformers.RetriBertModel",parameters:[{name:"config",val:": RetriBertConfig"}],parametersDescription:[{anchor:"transformers.RetriBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/retribert#transformers.RetriBertConfig">RetriBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/retribert/modeling_retribert.py#L88"}}),me=new Ve({props:{name:"forward",anchor:"transformers.RetriBertModel.forward",parameters:[{name:"input_ids_query",val:": LongTensor"},{name:"attention_mask_query",val:": typing.Optional[torch.FloatTensor]"},{name:"input_ids_doc",val:": LongTensor"},{name:"attention_mask_doc",val:": typing.Optional[torch.FloatTensor]"},{name:"checkpoint_batch_size",val:": int = -1"}],parametersDescription:[{anchor:"transformers.RetriBertModel.forward.input_ids_query",description:`<strong>input_ids_query</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary for the queries in a batch.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/retribert#transformers.RetriBertTokenizer">RetriBertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids_query"},{anchor:"transformers.RetriBertModel.forward.attention_mask_query",description:`<strong>attention_mask_query</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask_query"},{anchor:"transformers.RetriBertModel.forward.input_ids_doc",description:`<strong>input_ids_doc</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary for the documents in a batch.`,name:"input_ids_doc"},{anchor:"transformers.RetriBertModel.forward.attention_mask_doc",description:`<strong>attention_mask_doc</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on documents padding token indices.`,name:"attention_mask_doc"},{anchor:"transformers.RetriBertModel.forward.checkpoint_batch_size",description:`<strong>checkpoint_batch_size</strong> (<code>int</code>, <em>optional</em>, defaults to &#x201C;<code>-1</code>) &#x2014;
If greater than 0, uses gradient checkpointing to only compute sequence representation on
<code>checkpoint_batch_size</code> examples at a time on the GPU. All query representations are still compared to
all document representations in the batch.`,name:"checkpoint_batch_size"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/retribert/modeling_retribert.py#L176",returnDescription:`
<p>The bidirectional cross-entropy loss obtained while trying to match each query to its
corresponding document and each document to its corresponding query in the batch</p>
`,returnType:`
<p>\`torch.FloatTensor\u201C</p>
`}}),{c(){w=o("meta"),Ke=d(),z=o("h1"),q=o("a"),Ee=o("span"),_(V.$$.fragment),_t=d(),xe=o("span"),vt=s("RetriBERT"),We=d(),$=o("h2"),F=o("a"),Pe=o("span"),_(K.$$.fragment),bt=d(),Ce=o("span"),kt=s("Overview"),Ge=d(),S=o("p"),yt=s("The RetriBERT model was proposed in the blog post "),W=o("a"),Tt=s(`Explain Anything Like I\u2019m Five: A Model for Open Domain Long Form
Question Answering`),Rt=s(`. RetriBERT is a small model that uses either a single or
pair of BERT encoders with lower-dimension projection for dense semantic indexing of text.`),Qe=d(),R=o("p"),Bt=s("This model was contributed by "),G=o("a"),wt=s("yjernite"),zt=s(`. Code to train and use the model can be
found `),Q=o("a"),$t=s("here"),Et=s("."),Je=d(),E=o("h2"),N=o("a"),Ae=o("span"),_(J.$$.fragment),xt=d(),Me=o("span"),Pt=s("RetriBertConfig"),Xe=d(),g=o("div"),_(X.$$.fragment),Ct=d(),x=o("p"),At=s("This is the configuration class to store the configuration of a "),fe=o("a"),Mt=s("RetriBertModel"),qt=s(`. It is used to instantiate a
RetriBertModel model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the RetriBERT
`),Y=o("a"),Ft=s("yjernite/retribert-base-uncased"),St=s(" architecture."),Nt=d(),P=o("p"),Dt=s("Configuration objects inherit from "),he=o("a"),It=s("PretrainedConfig"),jt=s(` and can be used to control the model outputs. Read the
documentation from `),pe=o("a"),Lt=s("PretrainedConfig"),Ht=s(" for more information."),Ye=d(),C=o("h2"),D=o("a"),qe=o("span"),_(Z.$$.fragment),Ot=d(),Fe=o("span"),Ut=s("RetriBertTokenizer"),Ze=d(),p=o("div"),_(ee.$$.fragment),Vt=d(),Se=o("p"),Kt=s("Constructs a RetriBERT tokenizer."),Wt=d(),I=o("p"),ue=o("a"),Gt=s("RetriBertTokenizer"),Qt=s(" is identical to "),ge=o("a"),Jt=s("BertTokenizer"),Xt=s(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Yt=d(),te=o("p"),Zt=s("Refer to superclass "),_e=o("a"),er=s("BertTokenizer"),tr=s(" for usage examples and documentation concerning parameters."),et=d(),A=o("h2"),j=o("a"),Ne=o("span"),_(re.$$.fragment),rr=d(),De=o("span"),or=s("RetriBertTokenizerFast"),tt=d(),u=o("div"),_(oe.$$.fragment),nr=d(),ne=o("p"),ar=s("Construct a \u201Cfast\u201D RetriBERT tokenizer (backed by HuggingFace\u2019s "),Ie=o("em"),ir=s("tokenizers"),sr=s(" library)."),lr=d(),L=o("p"),ve=o("a"),dr=s("RetriBertTokenizerFast"),cr=s(" is identical to "),be=o("a"),mr=s("BertTokenizerFast"),fr=s(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),hr=d(),ae=o("p"),pr=s("Refer to superclass "),ke=o("a"),ur=s("BertTokenizerFast"),gr=s(" for usage examples and documentation concerning parameters."),rt=d(),M=o("h2"),H=o("a"),je=o("span"),_(ie.$$.fragment),_r=d(),Le=o("span"),vr=s("RetriBertModel"),ot=d(),h=o("div"),_(se.$$.fragment),br=d(),He=o("p"),kr=s("Bert Based model to embed queries or document for document retrieval."),yr=d(),le=o("p"),Tr=s("This model inherits from "),ye=o("a"),Rr=s("PreTrainedModel"),Br=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wr=d(),de=o("p"),zr=s("This model is also a PyTorch "),ce=o("a"),$r=s("torch.nn.Module"),Er=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xr=d(),Te=o("div"),_(me.$$.fragment),this.h()},l(t){const m=vo('[data-svelte="svelte-1phssyn"]',document.head);w=n(m,"META",{name:!0,content:!0}),m.forEach(r),Ke=c(t),z=n(t,"H1",{class:!0});var at=a(z);q=n(at,"A",{id:!0,class:!0,href:!0});var Cr=a(q);Ee=n(Cr,"SPAN",{});var Ar=a(Ee);v(V.$$.fragment,Ar),Ar.forEach(r),Cr.forEach(r),_t=c(at),xe=n(at,"SPAN",{});var Mr=a(xe);vt=l(Mr,"RetriBERT"),Mr.forEach(r),at.forEach(r),We=c(t),$=n(t,"H2",{class:!0});var it=a($);F=n(it,"A",{id:!0,class:!0,href:!0});var qr=a(F);Pe=n(qr,"SPAN",{});var Fr=a(Pe);v(K.$$.fragment,Fr),Fr.forEach(r),qr.forEach(r),bt=c(it),Ce=n(it,"SPAN",{});var Sr=a(Ce);kt=l(Sr,"Overview"),Sr.forEach(r),it.forEach(r),Ge=c(t),S=n(t,"P",{});var st=a(S);yt=l(st,"The RetriBERT model was proposed in the blog post "),W=n(st,"A",{href:!0,rel:!0});var Nr=a(W);Tt=l(Nr,`Explain Anything Like I\u2019m Five: A Model for Open Domain Long Form
Question Answering`),Nr.forEach(r),Rt=l(st,`. RetriBERT is a small model that uses either a single or
pair of BERT encoders with lower-dimension projection for dense semantic indexing of text.`),st.forEach(r),Qe=c(t),R=n(t,"P",{});var Re=a(R);Bt=l(Re,"This model was contributed by "),G=n(Re,"A",{href:!0,rel:!0});var Dr=a(G);wt=l(Dr,"yjernite"),Dr.forEach(r),zt=l(Re,`. Code to train and use the model can be
found `),Q=n(Re,"A",{href:!0,rel:!0});var Ir=a(Q);$t=l(Ir,"here"),Ir.forEach(r),Et=l(Re,"."),Re.forEach(r),Je=c(t),E=n(t,"H2",{class:!0});var lt=a(E);N=n(lt,"A",{id:!0,class:!0,href:!0});var jr=a(N);Ae=n(jr,"SPAN",{});var Lr=a(Ae);v(J.$$.fragment,Lr),Lr.forEach(r),jr.forEach(r),xt=c(lt),Me=n(lt,"SPAN",{});var Hr=a(Me);Pt=l(Hr,"RetriBertConfig"),Hr.forEach(r),lt.forEach(r),Xe=c(t),g=n(t,"DIV",{class:!0});var Be=a(g);v(X.$$.fragment,Be),Ct=c(Be),x=n(Be,"P",{});var we=a(x);At=l(we,"This is the configuration class to store the configuration of a "),fe=n(we,"A",{href:!0});var Or=a(fe);Mt=l(Or,"RetriBertModel"),Or.forEach(r),qt=l(we,`. It is used to instantiate a
RetriBertModel model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the RetriBERT
`),Y=n(we,"A",{href:!0,rel:!0});var Ur=a(Y);Ft=l(Ur,"yjernite/retribert-base-uncased"),Ur.forEach(r),St=l(we," architecture."),we.forEach(r),Nt=c(Be),P=n(Be,"P",{});var ze=a(P);Dt=l(ze,"Configuration objects inherit from "),he=n(ze,"A",{href:!0});var Vr=a(he);It=l(Vr,"PretrainedConfig"),Vr.forEach(r),jt=l(ze,` and can be used to control the model outputs. Read the
documentation from `),pe=n(ze,"A",{href:!0});var Kr=a(pe);Lt=l(Kr,"PretrainedConfig"),Kr.forEach(r),Ht=l(ze," for more information."),ze.forEach(r),Be.forEach(r),Ye=c(t),C=n(t,"H2",{class:!0});var dt=a(C);D=n(dt,"A",{id:!0,class:!0,href:!0});var Wr=a(D);qe=n(Wr,"SPAN",{});var Gr=a(qe);v(Z.$$.fragment,Gr),Gr.forEach(r),Wr.forEach(r),Ot=c(dt),Fe=n(dt,"SPAN",{});var Qr=a(Fe);Ut=l(Qr,"RetriBertTokenizer"),Qr.forEach(r),dt.forEach(r),Ze=c(t),p=n(t,"DIV",{class:!0});var O=a(p);v(ee.$$.fragment,O),Vt=c(O),Se=n(O,"P",{});var Jr=a(Se);Kt=l(Jr,"Constructs a RetriBERT tokenizer."),Jr.forEach(r),Wt=c(O),I=n(O,"P",{});var Oe=a(I);ue=n(Oe,"A",{href:!0});var Xr=a(ue);Gt=l(Xr,"RetriBertTokenizer"),Xr.forEach(r),Qt=l(Oe," is identical to "),ge=n(Oe,"A",{href:!0});var Yr=a(ge);Jt=l(Yr,"BertTokenizer"),Yr.forEach(r),Xt=l(Oe,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Oe.forEach(r),Yt=c(O),te=n(O,"P",{});var ct=a(te);Zt=l(ct,"Refer to superclass "),_e=n(ct,"A",{href:!0});var Zr=a(_e);er=l(Zr,"BertTokenizer"),Zr.forEach(r),tr=l(ct," for usage examples and documentation concerning parameters."),ct.forEach(r),O.forEach(r),et=c(t),A=n(t,"H2",{class:!0});var mt=a(A);j=n(mt,"A",{id:!0,class:!0,href:!0});var eo=a(j);Ne=n(eo,"SPAN",{});var to=a(Ne);v(re.$$.fragment,to),to.forEach(r),eo.forEach(r),rr=c(mt),De=n(mt,"SPAN",{});var ro=a(De);or=l(ro,"RetriBertTokenizerFast"),ro.forEach(r),mt.forEach(r),tt=c(t),u=n(t,"DIV",{class:!0});var U=a(u);v(oe.$$.fragment,U),nr=c(U),ne=n(U,"P",{});var ft=a(ne);ar=l(ft,"Construct a \u201Cfast\u201D RetriBERT tokenizer (backed by HuggingFace\u2019s "),Ie=n(ft,"EM",{});var oo=a(Ie);ir=l(oo,"tokenizers"),oo.forEach(r),sr=l(ft," library)."),ft.forEach(r),lr=c(U),L=n(U,"P",{});var Ue=a(L);ve=n(Ue,"A",{href:!0});var no=a(ve);dr=l(no,"RetriBertTokenizerFast"),no.forEach(r),cr=l(Ue," is identical to "),be=n(Ue,"A",{href:!0});var ao=a(be);mr=l(ao,"BertTokenizerFast"),ao.forEach(r),fr=l(Ue,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Ue.forEach(r),hr=c(U),ae=n(U,"P",{});var ht=a(ae);pr=l(ht,"Refer to superclass "),ke=n(ht,"A",{href:!0});var io=a(ke);ur=l(io,"BertTokenizerFast"),io.forEach(r),gr=l(ht," for usage examples and documentation concerning parameters."),ht.forEach(r),U.forEach(r),rt=c(t),M=n(t,"H2",{class:!0});var pt=a(M);H=n(pt,"A",{id:!0,class:!0,href:!0});var so=a(H);je=n(so,"SPAN",{});var lo=a(je);v(ie.$$.fragment,lo),lo.forEach(r),so.forEach(r),_r=c(pt),Le=n(pt,"SPAN",{});var co=a(Le);vr=l(co,"RetriBertModel"),co.forEach(r),pt.forEach(r),ot=c(t),h=n(t,"DIV",{class:!0});var B=a(h);v(se.$$.fragment,B),br=c(B),He=n(B,"P",{});var mo=a(He);kr=l(mo,"Bert Based model to embed queries or document for document retrieval."),mo.forEach(r),yr=c(B),le=n(B,"P",{});var ut=a(le);Tr=l(ut,"This model inherits from "),ye=n(ut,"A",{href:!0});var fo=a(ye);Rr=l(fo,"PreTrainedModel"),fo.forEach(r),Br=l(ut,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ut.forEach(r),wr=c(B),de=n(B,"P",{});var gt=a(de);zr=l(gt,"This model is also a PyTorch "),ce=n(gt,"A",{href:!0,rel:!0});var ho=a(ce);$r=l(ho,"torch.nn.Module"),ho.forEach(r),Er=l(gt,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gt.forEach(r),xr=c(B),Te=n(B,"DIV",{class:!0});var po=a(Te);v(me.$$.fragment,po),po.forEach(r),B.forEach(r),this.h()},h(){i(w,"name","hf:doc:metadata"),i(w,"content",JSON.stringify(To)),i(q,"id","retribert"),i(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(q,"href","#retribert"),i(z,"class","relative group"),i(F,"id","overview"),i(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(F,"href","#overview"),i($,"class","relative group"),i(W,"href","https://yjernite.github.io/lfqa.html"),i(W,"rel","nofollow"),i(G,"href","https://huggingface.co/yjernite"),i(G,"rel","nofollow"),i(Q,"href","https://github.com/huggingface/transformers/tree/main/examples/research-projects/distillation"),i(Q,"rel","nofollow"),i(N,"id","transformers.RetriBertConfig"),i(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(N,"href","#transformers.RetriBertConfig"),i(E,"class","relative group"),i(fe,"href","/docs/transformers/v4.21.1/en/model_doc/retribert#transformers.RetriBertModel"),i(Y,"href","https://huggingface.co/yjernite/retribert-base-uncased"),i(Y,"rel","nofollow"),i(he,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),i(pe,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),i(g,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(D,"id","transformers.RetriBertTokenizer"),i(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(D,"href","#transformers.RetriBertTokenizer"),i(C,"class","relative group"),i(ue,"href","/docs/transformers/v4.21.1/en/model_doc/retribert#transformers.RetriBertTokenizer"),i(ge,"href","/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer"),i(_e,"href","/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer"),i(p,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(j,"id","transformers.RetriBertTokenizerFast"),i(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(j,"href","#transformers.RetriBertTokenizerFast"),i(A,"class","relative group"),i(ve,"href","/docs/transformers/v4.21.1/en/model_doc/retribert#transformers.RetriBertTokenizerFast"),i(be,"href","/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizerFast"),i(ke,"href","/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizerFast"),i(u,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(H,"id","transformers.RetriBertModel"),i(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(H,"href","#transformers.RetriBertModel"),i(M,"class","relative group"),i(ye,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),i(ce,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),i(ce,"rel","nofollow"),i(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(h,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,m){e(document.head,w),f(t,Ke,m),f(t,z,m),e(z,q),e(q,Ee),b(V,Ee,null),e(z,_t),e(z,xe),e(xe,vt),f(t,We,m),f(t,$,m),e($,F),e(F,Pe),b(K,Pe,null),e($,bt),e($,Ce),e(Ce,kt),f(t,Ge,m),f(t,S,m),e(S,yt),e(S,W),e(W,Tt),e(S,Rt),f(t,Qe,m),f(t,R,m),e(R,Bt),e(R,G),e(G,wt),e(R,zt),e(R,Q),e(Q,$t),e(R,Et),f(t,Je,m),f(t,E,m),e(E,N),e(N,Ae),b(J,Ae,null),e(E,xt),e(E,Me),e(Me,Pt),f(t,Xe,m),f(t,g,m),b(X,g,null),e(g,Ct),e(g,x),e(x,At),e(x,fe),e(fe,Mt),e(x,qt),e(x,Y),e(Y,Ft),e(x,St),e(g,Nt),e(g,P),e(P,Dt),e(P,he),e(he,It),e(P,jt),e(P,pe),e(pe,Lt),e(P,Ht),f(t,Ye,m),f(t,C,m),e(C,D),e(D,qe),b(Z,qe,null),e(C,Ot),e(C,Fe),e(Fe,Ut),f(t,Ze,m),f(t,p,m),b(ee,p,null),e(p,Vt),e(p,Se),e(Se,Kt),e(p,Wt),e(p,I),e(I,ue),e(ue,Gt),e(I,Qt),e(I,ge),e(ge,Jt),e(I,Xt),e(p,Yt),e(p,te),e(te,Zt),e(te,_e),e(_e,er),e(te,tr),f(t,et,m),f(t,A,m),e(A,j),e(j,Ne),b(re,Ne,null),e(A,rr),e(A,De),e(De,or),f(t,tt,m),f(t,u,m),b(oe,u,null),e(u,nr),e(u,ne),e(ne,ar),e(ne,Ie),e(Ie,ir),e(ne,sr),e(u,lr),e(u,L),e(L,ve),e(ve,dr),e(L,cr),e(L,be),e(be,mr),e(L,fr),e(u,hr),e(u,ae),e(ae,pr),e(ae,ke),e(ke,ur),e(ae,gr),f(t,rt,m),f(t,M,m),e(M,H),e(H,je),b(ie,je,null),e(M,_r),e(M,Le),e(Le,vr),f(t,ot,m),f(t,h,m),b(se,h,null),e(h,br),e(h,He),e(He,kr),e(h,yr),e(h,le),e(le,Tr),e(le,ye),e(ye,Rr),e(le,Br),e(h,wr),e(h,de),e(de,zr),e(de,ce),e(ce,$r),e(de,Er),e(h,xr),e(h,Te),b(me,Te,null),nt=!0},p:bo,i(t){nt||(k(V.$$.fragment,t),k(K.$$.fragment,t),k(J.$$.fragment,t),k(X.$$.fragment,t),k(Z.$$.fragment,t),k(ee.$$.fragment,t),k(re.$$.fragment,t),k(oe.$$.fragment,t),k(ie.$$.fragment,t),k(se.$$.fragment,t),k(me.$$.fragment,t),nt=!0)},o(t){y(V.$$.fragment,t),y(K.$$.fragment,t),y(J.$$.fragment,t),y(X.$$.fragment,t),y(Z.$$.fragment,t),y(ee.$$.fragment,t),y(re.$$.fragment,t),y(oe.$$.fragment,t),y(ie.$$.fragment,t),y(se.$$.fragment,t),y(me.$$.fragment,t),nt=!1},d(t){r(w),t&&r(Ke),t&&r(z),T(V),t&&r(We),t&&r($),T(K),t&&r(Ge),t&&r(S),t&&r(Qe),t&&r(R),t&&r(Je),t&&r(E),T(J),t&&r(Xe),t&&r(g),T(X),t&&r(Ye),t&&r(C),T(Z),t&&r(Ze),t&&r(p),T(ee),t&&r(et),t&&r(A),T(re),t&&r(tt),t&&r(u),T(oe),t&&r(rt),t&&r(M),T(ie),t&&r(ot),t&&r(h),T(se),T(me)}}}const To={local:"retribert",sections:[{local:"overview",title:"Overview"},{local:"transformers.RetriBertConfig",title:"RetriBertConfig"},{local:"transformers.RetriBertTokenizer",title:"RetriBertTokenizer"},{local:"transformers.RetriBertTokenizerFast",title:"RetriBertTokenizerFast"},{local:"transformers.RetriBertModel",title:"RetriBertModel"}],title:"RetriBERT"};function Ro(Pr){return ko(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class $o extends uo{constructor(w){super();go(this,w,Ro,yo,_o,{})}}export{$o as default,To as metadata};
