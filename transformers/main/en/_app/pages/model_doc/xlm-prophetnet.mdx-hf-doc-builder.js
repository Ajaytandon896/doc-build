import{S as Rc,i as Vc,s as Yc,e as s,k as p,w as b,t as n,M as Jc,c as a,d as t,m as h,a as i,x as y,h as r,b as c,G as e,g as _,y as T,q as w,o as P,B as M,v as Qc,L as Xn}from"../../chunks/vendor-hf-doc-builder.js";import{T as zn}from"../../chunks/Tip-hf-doc-builder.js";import{D as X}from"../../chunks/Docstring-hf-doc-builder.js";import{C as qn}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as be}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as xn}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Zc(N){let l,v,g,u,k;return{c(){l=s("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),u=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var m=i(l);v=r(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(m,"CODE",{});var L=i(g);u=r(L,"Module"),L.forEach(t),k=r(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,l,m),e(l,v),e(l,g),e(g,u),e(l,k)},d(d){d&&t(l)}}}function Kc(N){let l,v,g,u,k;return u=new qn({props:{code:`from transformers import XLMProphetNetTokenizer, XLMProphetNetModel

tokenizer = XLMProphetNetTokenizer.from_pretrained("patrickvonplaten/xprophetnet-large-uncased-standalone")
model = XLMProphetNetModel.from_pretrained("patrickvonplaten/xprophetnet-large-uncased-standalone")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

last_hidden_states = outputs.last_hidden_state  # main stream hidden states
last_hidden_states_ngram = outputs.last_hidden_state_ngram  # predict hidden states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMProphetNetTokenizer, XLMProphetNetModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMProphetNetTokenizer.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/xprophetnet-large-uncased-standalone&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMProphetNetModel.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/xprophetnet-large-uncased-standalone&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state  <span class="hljs-comment"># main stream hidden states</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states_ngram = outputs.last_hidden_state_ngram  <span class="hljs-comment"># predict hidden states</span>`}}),{c(){l=s("p"),v=n("Example:"),g=p(),b(u.$$.fragment)},l(d){l=a(d,"P",{});var m=i(l);v=r(m,"Example:"),m.forEach(t),g=h(d),y(u.$$.fragment,d)},m(d,m){_(d,l,m),e(l,v),_(d,g,m),T(u,d,m),k=!0},p:Xn,i(d){k||(w(u.$$.fragment,d),k=!0)},o(d){P(u.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(g),M(u,d)}}}function el(N){let l,v,g,u,k;return{c(){l=s("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),u=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var m=i(l);v=r(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(m,"CODE",{});var L=i(g);u=r(L,"Module"),L.forEach(t),k=r(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,l,m),e(l,v),e(l,g),e(g,u),e(l,k)},d(d){d&&t(l)}}}function tl(N){let l,v,g,u,k;return u=new qn({props:{code:`from transformers import XLMProphetNetTokenizer, XLMProphetNetEncoder
import torch

tokenizer = XLMProphetNetTokenizer.from_pretrained("patrickvonplaten/xprophetnet-large-uncased-standalone")
model = XLMProphetNetEncoder.from_pretrained("patrickvonplaten/prophetnet-large-uncased-standalone")
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMProphetNetTokenizer, XLMProphetNetEncoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMProphetNetTokenizer.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/xprophetnet-large-uncased-standalone&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMProphetNetEncoder.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/prophetnet-large-uncased-standalone&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=s("p"),v=n("Example:"),g=p(),b(u.$$.fragment)},l(d){l=a(d,"P",{});var m=i(l);v=r(m,"Example:"),m.forEach(t),g=h(d),y(u.$$.fragment,d)},m(d,m){_(d,l,m),e(l,v),_(d,g,m),T(u,d,m),k=!0},p:Xn,i(d){k||(w(u.$$.fragment,d),k=!0)},o(d){P(u.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(g),M(u,d)}}}function ol(N){let l,v,g,u,k;return{c(){l=s("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),u=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var m=i(l);v=r(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(m,"CODE",{});var L=i(g);u=r(L,"Module"),L.forEach(t),k=r(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,l,m),e(l,v),e(l,g),e(g,u),e(l,k)},d(d){d&&t(l)}}}function nl(N){let l,v,g,u,k;return u=new qn({props:{code:`from transformers import XLMProphetNetTokenizer, XLMProphetNetDecoder
import torch

tokenizer = XLMProphetNetTokenizer.from_pretrained("patrickvonplaten/xprophetnet-large-uncased-standalone")
model = XLMProphetNetDecoder.from_pretrained(
    "patrickvonplaten/xprophetnet-large-uncased-standalone", add_cross_attention=False
)
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMProphetNetTokenizer, XLMProphetNetDecoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMProphetNetTokenizer.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/xprophetnet-large-uncased-standalone&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMProphetNetDecoder.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;patrickvonplaten/xprophetnet-large-uncased-standalone&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=s("p"),v=n("Example:"),g=p(),b(u.$$.fragment)},l(d){l=a(d,"P",{});var m=i(l);v=r(m,"Example:"),m.forEach(t),g=h(d),y(u.$$.fragment,d)},m(d,m){_(d,l,m),e(l,v),_(d,g,m),T(u,d,m),k=!0},p:Xn,i(d){k||(w(u.$$.fragment,d),k=!0)},o(d){P(u.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(g),M(u,d)}}}function rl(N){let l,v,g,u,k;return{c(){l=s("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),u=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var m=i(l);v=r(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(m,"CODE",{});var L=i(g);u=r(L,"Module"),L.forEach(t),k=r(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,l,m),e(l,v),e(l,g),e(g,u),e(l,k)},d(d){d&&t(l)}}}function sl(N){let l,v,g,u,k;return u=new qn({props:{code:`from transformers import XLMProphetNetTokenizer, XLMProphetNetForConditionalGeneration

tokenizer = XLMProphetNetTokenizer.from_pretrained("patrickvonplaten/xprophetnet-large-uncased-standalone")
model = XLMProphetNetForConditionalGeneration.from_pretrained(
    "patrickvonplaten/xprophetnet-large-uncased-standalone"
)

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

logits_next_token = outputs.logits  # logits to predict next token as usual
logits_ngram_next_tokens = outputs.logits_ngram  # logits to predict 2nd, 3rd, ... next tokens`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMProphetNetTokenizer, XLMProphetNetForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMProphetNetTokenizer.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/xprophetnet-large-uncased-standalone&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMProphetNetForConditionalGeneration.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;patrickvonplaten/xprophetnet-large-uncased-standalone&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits_next_token = outputs.logits  <span class="hljs-comment"># logits to predict next token as usual</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_ngram_next_tokens = outputs.logits_ngram  <span class="hljs-comment"># logits to predict 2nd, 3rd, ... next tokens</span>`}}),{c(){l=s("p"),v=n("Example:"),g=p(),b(u.$$.fragment)},l(d){l=a(d,"P",{});var m=i(l);v=r(m,"Example:"),m.forEach(t),g=h(d),y(u.$$.fragment,d)},m(d,m){_(d,l,m),e(l,v),_(d,g,m),T(u,d,m),k=!0},p:Xn,i(d){k||(w(u.$$.fragment,d),k=!0)},o(d){P(u.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(g),M(u,d)}}}function al(N){let l,v,g,u,k;return{c(){l=s("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),u=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var m=i(l);v=r(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(m,"CODE",{});var L=i(g);u=r(L,"Module"),L.forEach(t),k=r(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){_(d,l,m),e(l,v),e(l,g),e(g,u),e(l,k)},d(d){d&&t(l)}}}function il(N){let l,v,g,u,k;return u=new qn({props:{code:`from transformers import XLMProphetNetTokenizer, XLMProphetNetForCausalLM
import torch

tokenizer = XLMProphetNetTokenizer.from_pretrained("patrickvonplaten/xprophetnet-large-uncased-standalone")
model = XLMProphetNetForCausalLM.from_pretrained("patrickvonplaten/xprophetnet-large-uncased-standalone")
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits

# Model can also be used with EncoderDecoder framework
from transformers import BertTokenizer, EncoderDecoderModel, XLMProphetNetTokenizer
import torch

tokenizer_enc = BertTokenizer.from_pretrained("bert-large-uncased")
tokenizer_dec = XLMProphetNetTokenizer.from_pretrained(
    "patrickvonplaten/xprophetnet-large-uncased-standalone"
)
model = EncoderDecoderModel.from_encoder_decoder_pretrained(
    "bert-large-uncased", "patrickvonplaten/xprophetnet-large-uncased-standalone"
)

ARTICLE = (
    "the us state department said wednesday it had received no "
    "formal word from bolivia that it was expelling the us ambassador there "
    "but said the charges made against him are \`\` baseless ."
)
input_ids = tokenizer_enc(ARTICLE, return_tensors="pt").input_ids
labels = tokenizer_dec(
    "us rejects charges against its ambassador in bolivia", return_tensors="pt"
).input_ids
outputs = model(input_ids=input_ids, decoder_input_ids=labels[:, :-1], labels=labels[:, 1:])

loss = outputs.loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMProphetNetTokenizer, XLMProphetNetForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMProphetNetTokenizer.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/xprophetnet-large-uncased-standalone&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMProphetNetForCausalLM.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/xprophetnet-large-uncased-standalone&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Model can also be used with EncoderDecoder framework</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, EncoderDecoderModel, XLMProphetNetTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_enc = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-large-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_dec = XLMProphetNetTokenizer.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;patrickvonplaten/xprophetnet-large-uncased-standalone&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;bert-large-uncased&quot;</span>, <span class="hljs-string">&quot;patrickvonplaten/xprophetnet-large-uncased-standalone&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;the us state department said wednesday it had received no &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;formal word from bolivia that it was expelling the us ambassador there &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;but said the charges made against him are \`\` baseless .&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer_enc(ARTICLE, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer_dec(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;us rejects charges against its ambassador in bolivia&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=labels[:, :-<span class="hljs-number">1</span>], labels=labels[:, <span class="hljs-number">1</span>:])

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){l=s("p"),v=n("Example:"),g=p(),b(u.$$.fragment)},l(d){l=a(d,"P",{});var m=i(l);v=r(m,"Example:"),m.forEach(t),g=h(d),y(u.$$.fragment,d)},m(d,m){_(d,l,m),e(l,v),_(d,g,m),T(u,d,m),k=!0},p:Xn,i(d){k||(w(u.$$.fragment,d),k=!0)},o(d){P(u.$$.fragment,d),k=!1},d(d){d&&t(l),d&&t(g),M(u,d)}}}function dl(N){let l,v,g,u,k,d,m,L,Nr,En,K,Fo,Lr,$r,Qe,zr,xr,Cn,ee,ye,Oo,Ze,Xr,jo,qr,Fn,Te,Er,Ke,Cr,Fr,On,Qt,Or,jn,Zt,jr,Dn,Kt,Do,Dr,An,we,Ar,et,Sr,Ir,Sn,te,Pe,Ao,tt,Gr,So,Wr,In,H,ot,Br,oe,Hr,eo,Ur,Rr,nt,Vr,Yr,Jr,ne,Qr,to,Zr,Kr,oo,es,ts,Gn,re,Me,Io,rt,os,Go,ns,Wn,$,st,rs,U,ss,no,as,is,ro,ds,cs,at,ls,ps,hs,it,ms,so,us,fs,gs,R,dt,_s,Wo,ks,vs,ct,ao,bs,Bo,ys,Ts,io,ws,Ho,Ps,Ms,Ne,lt,Ns,Uo,Ls,$s,Le,pt,zs,Ro,xs,Xs,$e,ht,qs,mt,Es,Vo,Cs,Fs,Bn,se,ze,Yo,ut,Os,Jo,js,Hn,q,ft,Ds,gt,As,co,Ss,Is,Gs,ae,Ws,_t,Bs,Hs,Qo,Us,Rs,Vs,kt,Ys,vt,Js,Qs,Zs,D,bt,Ks,ie,ea,lo,ta,oa,Zo,na,ra,sa,xe,aa,Xe,Un,de,qe,Ko,yt,ia,en,da,Rn,z,Tt,ca,wt,la,po,pa,ha,ma,ce,ua,Pt,fa,ga,tn,_a,ka,va,Mt,ba,Nt,ya,Ta,wa,O,Pa,on,Ma,Na,nn,La,$a,rn,za,xa,ho,Xa,qa,Ea,A,Lt,Ca,le,Fa,mo,Oa,ja,sn,Da,Aa,Sa,Ee,Ia,Ce,Vn,pe,Fe,an,$t,Ga,dn,Wa,Yn,x,zt,Ba,xt,Ha,uo,Ua,Ra,Va,he,Ya,Xt,Ja,Qa,cn,Za,Ka,ei,qt,ti,Et,oi,ni,ri,j,si,ln,ai,ii,pn,di,ci,hn,li,pi,fo,hi,mi,ui,S,Ct,fi,me,gi,go,_i,ki,mn,vi,bi,yi,Oe,Ti,je,Jn,ue,De,un,Ft,wi,fn,Pi,Qn,E,Ot,Mi,jt,Ni,_o,Li,$i,zi,fe,xi,Dt,Xi,qi,gn,Ei,Ci,Fi,At,Oi,St,ji,Di,Ai,I,It,Si,ge,Ii,ko,Gi,Wi,_n,Bi,Hi,Ui,Ae,Ri,Se,Zn,_e,Ie,kn,Gt,Vi,vn,Yi,Kn,C,Wt,Ji,Bt,Qi,vo,Zi,Ki,ed,ke,td,Ht,od,nd,bn,rd,sd,ad,Ut,id,Rt,dd,cd,ld,G,Vt,pd,ve,hd,bo,md,ud,yn,fd,gd,_d,Ge,kd,We,er;return d=new be({}),Ze=new be({}),tt=new be({}),ot=new X({props:{name:"class transformers.XLMProphetNetConfig",anchor:"transformers.XLMProphetNetConfig",parameters:[{name:"activation_dropout",val:": typing.Optional[float] = 0.1"},{name:"activation_function",val:": typing.Union[str, typing.Callable, NoneType] = 'gelu'"},{name:"vocab_size",val:": typing.Optional[int] = 30522"},{name:"hidden_size",val:": typing.Optional[int] = 1024"},{name:"encoder_ffn_dim",val:": typing.Optional[int] = 4096"},{name:"num_encoder_layers",val:": typing.Optional[int] = 12"},{name:"num_encoder_attention_heads",val:": typing.Optional[int] = 16"},{name:"decoder_ffn_dim",val:": typing.Optional[int] = 4096"},{name:"num_decoder_layers",val:": typing.Optional[int] = 12"},{name:"num_decoder_attention_heads",val:": typing.Optional[int] = 16"},{name:"attention_dropout",val:": typing.Optional[float] = 0.1"},{name:"dropout",val:": typing.Optional[float] = 0.1"},{name:"max_position_embeddings",val:": typing.Optional[int] = 512"},{name:"init_std",val:": typing.Optional[float] = 0.02"},{name:"is_encoder_decoder",val:": typing.Optional[bool] = True"},{name:"add_cross_attention",val:": typing.Optional[bool] = True"},{name:"decoder_start_token_id",val:": typing.Optional[int] = 0"},{name:"ngram",val:": typing.Optional[int] = 2"},{name:"num_buckets",val:": typing.Optional[int] = 32"},{name:"relative_max_distance",val:": typing.Optional[int] = 128"},{name:"disable_ngram_loss",val:": typing.Optional[bool] = False"},{name:"eps",val:": typing.Optional[float] = 0.0"},{name:"use_cache",val:": typing.Optional[bool] = True"},{name:"pad_token_id",val:": typing.Optional[int] = 0"},{name:"bos_token_id",val:": typing.Optional[int] = 1"},{name:"eos_token_id",val:": typing.Optional[int] = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMProphetNetConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.XLMProphetNetConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.XLMProphetNetConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the ProphetNET model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetModel">XLMProphetNetModel</a>.`,name:"vocab_size"},{anchor:"transformers.XLMProphetNetConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.XLMProphetNetConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.XLMProphetNetConfig.num_encoder_layers",description:`<strong>num_encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"num_encoder_layers"},{anchor:"transformers.XLMProphetNetConfig.num_encoder_attention_heads",description:`<strong>num_encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_encoder_attention_heads"},{anchor:"transformers.XLMProphetNetConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the <code>intermediate</code> (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.XLMProphetNetConfig.num_decoder_layers",description:`<strong>num_decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"num_decoder_layers"},{anchor:"transformers.XLMProphetNetConfig.num_decoder_attention_heads",description:`<strong>num_decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"num_decoder_attention_heads"},{anchor:"transformers.XLMProphetNetConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.XLMProphetNetConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.XLMProphetNetConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.XLMProphetNetConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.XLMProphetNetConfig.add_cross_attention",description:`<strong>add_cross_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether cross-attention layers should be added to the model.`,name:"add_cross_attention"},{anchor:"transformers.XLMProphetNetConfig.is_encoder_decoder",description:`<strong>is_encoder_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether this is an encoder/decoder model.`,name:"is_encoder_decoder"},{anchor:"transformers.XLMProphetNetConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Padding token id.`,name:"pad_token_id"},{anchor:"transformers.XLMProphetNetConfig.bos_token_id",description:`<strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
Beginning of stream token id.`,name:"bos_token_id"},{anchor:"transformers.XLMProphetNetConfig.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
End of stream token id.`,name:"eos_token_id"},{anchor:"transformers.XLMProphetNetConfig.ngram",description:`<strong>ngram</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of future tokens to predict. Set to 1 to be same as traditional Language model to predict next first
token.`,name:"ngram"},{anchor:"transformers.XLMProphetNetConfig.num_buckets",description:`<strong>num_buckets</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of buckets to use for each attention layer. This is for relative position calculation. See the
[T5 paper](see <a href="https://arxiv.org/abs/1910.10683" rel="nofollow">https://arxiv.org/abs/1910.10683</a>) for more details.`,name:"num_buckets"},{anchor:"transformers.XLMProphetNetConfig.relative_max_distance",description:`<strong>relative_max_distance</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Relative distances greater than this number will be put into the last same bucket. This is for relative
position calculation. See the [T5 paper](see <a href="https://arxiv.org/abs/1910.10683" rel="nofollow">https://arxiv.org/abs/1910.10683</a>) for more details.`,name:"relative_max_distance"},{anchor:"transformers.XLMProphetNetConfig.disable_ngram_loss",description:`<strong>disable_ngram_loss</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether be trained predicting only the next first token.`,name:"disable_ngram_loss"},{anchor:"transformers.XLMProphetNetConfig.eps",description:`<strong>eps</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Controls the <code>epsilon</code> parameter value for label smoothing in the loss calculation. If set to 0, no label
smoothing is performed.`,name:"eps"},{anchor:"transformers.XLMProphetNetConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_prophetnet/configuration_xlm_prophetnet.py#L33"}}),rt=new be({}),st=new X({props:{name:"class transformers.XLMProphetNetTokenizer",anchor:"transformers.XLMProphetNetTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '[SEP]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMProphetNetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.XLMProphetNetTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.XLMProphetNetTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.XLMProphetNetTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.XLMProphetNetTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.XLMProphetNetTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.XLMProphetNetTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.XLMProphetNetTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.XLMProphetNetTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.XLMProphetNetTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.XLMProphetNetTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_prophetnet/tokenization_xlm_prophetnet.py#L59"}}),dt=new X({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XLMProphetNetTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLMProphetNetTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.XLMProphetNetTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_prophetnet/tokenization_xlm_prophetnet.py#L316",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),lt=new X({props:{name:"convert_tokens_to_string",anchor:"transformers.XLMProphetNetTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_prophetnet/tokenization_xlm_prophetnet.py#L294"}}),pt=new X({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XLMProphetNetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLMProphetNetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMProphetNetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_prophetnet/tokenization_xlm_prophetnet.py#L243",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ht=new X({props:{name:"get_special_tokens_mask",anchor:"transformers.XLMProphetNetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.XLMProphetNetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMProphetNetTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.XLMProphetNetTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_prophetnet/tokenization_xlm_prophetnet.py#L215",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ut=new be({}),ft=new X({props:{name:"class transformers.XLMProphetNetModel",anchor:"transformers.XLMProphetNetModel",parameters:[{name:"config",val:": XLMProphetNetConfig"}],parametersDescription:[{anchor:"transformers.XLMProphetNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetConfig">XLMProphetNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L1800"}}),bt=new X({props:{name:"forward",anchor:"transformers.XLMProphetNetModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMProphetNetModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetTokenizer">XLMProphetNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMProphetNetModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMProphetNetModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetTokenizer">XLMProphetNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>XLMProphetNet uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.XLMProphetNetModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.XLMProphetNetModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMProphetNetModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.XLMProphetNetModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.XLMProphetNetModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.XLMProphetNetModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden-states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.XLMProphetNetModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.XLMProphetNetModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMProphetNetModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMProphetNetModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L1832",returnDescription:`
<p>A <code>transformers.models.xlm_prophetnet.modeling_xlm_prophetnet.XLMProphetNetSeq2SeqModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetConfig"
>XLMProphetNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, decoder_sequence_length, hidden_size)</code>) \u2014 Sequence of main stream hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>last_hidden_state_ngram</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size,ngram * decoder_sequence_length, config.vocab_size)</code>, <em>optional</em>) \u2014 Sequence of predict stream hidden-states at the output of the last layer of the decoder of the model.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_attn_heads, decoder_sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of main stream of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_ngram_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, ngram * decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the predict stream of the decoder at the output of each layer plus the initial embedding
outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>decoder_ngram_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the predict stream of the decoder, after the attention softmax, used to compute the
weighted average in the</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, encoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the cross-attention layer of the decoder, after the attention softmax, used to
compute the weighted average in the</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, encoder_sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, encoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, encoder_sequence_length, encoder_sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.xlm_prophetnet.modeling_xlm_prophetnet.XLMProphetNetSeq2SeqModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xe=new zn({props:{$$slots:{default:[Zc]},$$scope:{ctx:N}}}),Xe=new xn({props:{anchor:"transformers.XLMProphetNetModel.forward.example",$$slots:{default:[Kc]},$$scope:{ctx:N}}}),yt=new be({}),Tt=new X({props:{name:"class transformers.XLMProphetNetEncoder",anchor:"transformers.XLMProphetNetEncoder",parameters:[{name:"config",val:": XLMProphetNetConfig"},{name:"word_embeddings",val:": Embedding = None"}],parametersDescription:[{anchor:"transformers.XLMProphetNetEncoder.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetConfig">XLMProphetNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L1285"}}),Lt=new X({props:{name:"forward",anchor:"transformers.XLMProphetNetEncoder.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMProphetNetEncoder.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetTokenizer">XLMProphetNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMProphetNetEncoder.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMProphetNetEncoder.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMProphetNetEncoder.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMProphetNetEncoder.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMProphetNetEncoder.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L1315",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetConfig"
>XLMProphetNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ee=new zn({props:{$$slots:{default:[el]},$$scope:{ctx:N}}}),Ce=new xn({props:{anchor:"transformers.XLMProphetNetEncoder.forward.example",$$slots:{default:[tl]},$$scope:{ctx:N}}}),$t=new be({}),zt=new X({props:{name:"class transformers.XLMProphetNetDecoder",anchor:"transformers.XLMProphetNetDecoder",parameters:[{name:"config",val:": XLMProphetNetConfig"},{name:"word_embeddings",val:": typing.Optional[torch.nn.modules.sparse.Embedding] = None"}],parametersDescription:[{anchor:"transformers.XLMProphetNetDecoder.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetConfig">XLMProphetNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L1426"}}),Ct=new X({props:{name:"forward",anchor:"transformers.XLMProphetNetDecoder.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMProphetNetDecoder.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetTokenizer">XLMProphetNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMProphetNetDecoder.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMProphetNetDecoder.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMProphetNetDecoder.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMProphetNetDecoder.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMProphetNetDecoder.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMProphetNetDecoder.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.XLMProphetNetDecoder.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.XLMProphetNetDecoder.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.XLMProphetNetDecoder.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden-states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.XLMProphetNetDecoder.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L1463",returnDescription:`
<p>A <code>transformers.models.xlm_prophetnet.modeling_xlm_prophetnet.XLMProphetNetDecoderModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetConfig"
>XLMProphetNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, decoder_sequence_length, hidden_size)</code>) \u2014 Sequence of main stream hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>last_hidden_state_ngram</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, ngram * decoder_sequence_length, config.vocab_size)</code>) \u2014 Sequence of predict stream hidden-states at the output of the last layer of the decoder of the model.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_attn_heads, decoder_sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of main stream of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>ngram_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, ngram * decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the predict stream of the decoder at the output of each layer plus the initial embedding
outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>ngram_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the predict stream of the decoder, after the attention softmax, used to compute the
weighted average in the</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, encoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the cross-attention layer of the decoder, after the attention softmax, used to
compute the weighted average in the</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.xlm_prophetnet.modeling_xlm_prophetnet.XLMProphetNetDecoderModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oe=new zn({props:{$$slots:{default:[ol]},$$scope:{ctx:N}}}),je=new xn({props:{anchor:"transformers.XLMProphetNetDecoder.forward.example",$$slots:{default:[nl]},$$scope:{ctx:N}}}),Ft=new be({}),Ot=new X({props:{name:"class transformers.XLMProphetNetForConditionalGeneration",anchor:"transformers.XLMProphetNetForConditionalGeneration",parameters:[{name:"config",val:": XLMProphetNetConfig"}],parametersDescription:[{anchor:"transformers.XLMProphetNetForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetConfig">XLMProphetNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L1928"}}),It=new X({props:{name:"forward",anchor:"transformers.XLMProphetNetForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetTokenizer">XLMProphetNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetTokenizer">XLMProphetNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>XLMProphetNet uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden-states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to <code>-100</code> are ignored (masked), the loss is only computed for
labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L1949",returnDescription:`
<p>A <code>transformers.models.xlm_prophetnet.modeling_xlm_prophetnet.XLMProphetNetSeq2SeqLMOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetConfig"
>XLMProphetNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, decoder_sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the main stream language modeling head (scores for each vocabulary token before
SoftMax).</p>
</li>
<li>
<p><strong>logits_ngram</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, ngram * decoder_sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the predict stream language modeling head (scores for each vocabulary token before
SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_attn_heads, decoder_sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of main stream of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_ngram_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, ngram * decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the predict stream of the decoder at the output of each layer plus the initial embedding
outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>decoder_ngram_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the predict stream of the decoder, after the attention softmax, used to compute the
weighted average in the self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, encoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the cross-attention layer of the decoder, after the attention softmax, used to
compute the weighted average in the</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, encoder_sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, encoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, encoder_sequence_length, encoder_sequence_length)</code>. Attentions weights of the encoder, after the attention
softmax, used to compute the weighted average in the self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.xlm_prophetnet.modeling_xlm_prophetnet.XLMProphetNetSeq2SeqLMOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ae=new zn({props:{$$slots:{default:[rl]},$$scope:{ctx:N}}}),Se=new xn({props:{anchor:"transformers.XLMProphetNetForConditionalGeneration.forward.example",$$slots:{default:[sl]},$$scope:{ctx:N}}}),Gt=new be({}),Wt=new X({props:{name:"class transformers.XLMProphetNetForCausalLM",anchor:"transformers.XLMProphetNetForCausalLM",parameters:[{name:"config",val:": XLMProphetNetConfig"}],parametersDescription:[{anchor:"transformers.XLMProphetNetForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetConfig">XLMProphetNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L2141"}}),Vt=new X({props:{name:"forward",anchor:"transformers.XLMProphetNetForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMProphetNetForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetTokenizer">XLMProphetNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMProphetNetForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMProphetNetForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMProphetNetForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMProphetNetForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMProphetNetForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMProphetNetForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.XLMProphetNetForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.XLMProphetNetForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.XLMProphetNetForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden-states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.XLMProphetNetForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.XLMProphetNetForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_prophetnet/modeling_xlm_prophetnet.py#L2176",returnDescription:`
<p>A <code>transformers.models.xlm_prophetnet.modeling_xlm_prophetnet.XLMProphetNetDecoderLMOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetConfig"
>XLMProphetNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, decoder_sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the main stream language modeling head (scores for each vocabulary token before
SoftMax).</p>
</li>
<li>
<p><strong>logits_ngram</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, ngram * decoder_sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the predict stream language modeling head (scores for each vocabulary token before
SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_attn_heads, decoder_sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of main stream of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>ngram_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, ngram * decoder_sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the predict stream of the decoder at the output of each layer plus the initial embedding
outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>ngram_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, decoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the predict stream of the decoder, after the attention softmax, used to compute the
weighted average in the</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_attn_heads, encoder_sequence_length, decoder_sequence_length)</code>.</p>
<p>Attentions weights of the cross-attention layer of the decoder, after the attention softmax, used to
compute the weighted average in the</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.xlm_prophetnet.modeling_xlm_prophetnet.XLMProphetNetDecoderLMOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ge=new zn({props:{$$slots:{default:[al]},$$scope:{ctx:N}}}),We=new xn({props:{anchor:"transformers.XLMProphetNetForCausalLM.forward.example",$$slots:{default:[il]},$$scope:{ctx:N}}}),{c(){l=s("meta"),v=p(),g=s("h1"),u=s("a"),k=s("span"),b(d.$$.fragment),m=p(),L=s("span"),Nr=n("XLM-ProphetNet"),En=p(),K=s("p"),Fo=s("strong"),Lr=n("DISCLAIMER:"),$r=n(" If you see something strange, file a "),Qe=s("a"),zr=n("Github Issue"),xr=n(` and assign
@patrickvonplaten`),Cn=p(),ee=s("h2"),ye=s("a"),Oo=s("span"),b(Ze.$$.fragment),Xr=p(),jo=s("span"),qr=n("Overview"),Fn=p(),Te=s("p"),Er=n("The XLM-ProphetNet model was proposed in "),Ke=s("a"),Cr=n("ProphetNet: Predicting Future N-gram for Sequence-to-Sequence Pre-training,"),Fr=n(` by Yu Yan, Weizhen Qi, Yeyun Gong, Dayiheng Liu, Nan Duan, Jiusheng Chen, Ruofei
Zhang, Ming Zhou on 13 Jan, 2020.`),On=p(),Qt=s("p"),Or=n(`XLM-ProphetNet is an encoder-decoder model and can predict n-future tokens for \u201Cngram\u201D language modeling instead of
just the next token. Its architecture is identical to ProhpetNet, but the model was trained on the multi-lingual
\u201Cwiki100\u201D Wikipedia dump.`),jn=p(),Zt=s("p"),jr=n("The abstract from the paper is the following:"),Dn=p(),Kt=s("p"),Do=s("em"),Dr=n(`In this paper, we present a new sequence-to-sequence pretraining model called ProphetNet, which introduces a novel
self-supervised objective named future n-gram prediction and the proposed n-stream self-attention mechanism. Instead of
the optimization of one-step ahead prediction in traditional sequence-to-sequence model, the ProphetNet is optimized by
n-step ahead prediction which predicts the next n tokens simultaneously based on previous context tokens at each time
step. The future n-gram prediction explicitly encourages the model to plan for the future tokens and prevent
overfitting on strong local correlations. We pre-train ProphetNet using a base scale dataset (16GB) and a large scale
dataset (160GB) respectively. Then we conduct experiments on CNN/DailyMail, Gigaword, and SQuAD 1.1 benchmarks for
abstractive summarization and question generation tasks. Experimental results show that ProphetNet achieves new
state-of-the-art results on all these datasets compared to the models using the same scale pretraining corpus.`),An=p(),we=s("p"),Ar=n("The Authors\u2019 code can be found "),et=s("a"),Sr=n("here"),Ir=n("."),Sn=p(),te=s("h2"),Pe=s("a"),Ao=s("span"),b(tt.$$.fragment),Gr=p(),So=s("span"),Wr=n("XLMProphetNetConfig"),In=p(),H=s("div"),b(ot.$$.fragment),Br=p(),oe=s("p"),Hr=n("This is the configuration class to store the configuration of a "),eo=s("a"),Ur=n("XLMProphetNetModel"),Rr=n(`. It is used to instantiate a
XLMProphetNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the XLMProphetNet
`),nt=s("a"),Vr=n("microsoft/xprophetnet-large-wiki100-cased"),Yr=n(`
architecture.`),Jr=p(),ne=s("p"),Qr=n("Configuration objects inherit from "),to=s("a"),Zr=n("PretrainedConfig"),Kr=n(` and can be used to control the model outputs. Read the
documentation from `),oo=s("a"),es=n("PretrainedConfig"),ts=n(" for more information."),Gn=p(),re=s("h2"),Me=s("a"),Io=s("span"),b(rt.$$.fragment),os=p(),Go=s("span"),ns=n("XLMProphetNetTokenizer"),Wn=p(),$=s("div"),b(st.$$.fragment),rs=p(),U=s("p"),ss=n("Adapted from "),no=s("a"),as=n("RobertaTokenizer"),is=n(" and "),ro=s("a"),ds=n("XLNetTokenizer"),cs=n(`. Based on
`),at=s("a"),ls=n("SentencePiece"),ps=n("."),hs=p(),it=s("p"),ms=n("This tokenizer inherits from "),so=s("a"),us=n("PreTrainedTokenizer"),fs=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),gs=p(),R=s("div"),b(dt.$$.fragment),_s=p(),Wo=s("p"),ks=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A XLMProphetNet sequence has the following format:`),vs=p(),ct=s("ul"),ao=s("li"),bs=n("single sequence: "),Bo=s("code"),ys=n("X [SEP]"),Ts=p(),io=s("li"),ws=n("pair of sequences: "),Ho=s("code"),Ps=n("A [SEP] B [SEP]"),Ms=p(),Ne=s("div"),b(lt.$$.fragment),Ns=p(),Uo=s("p"),Ls=n("Converts a sequence of tokens (strings for sub-words) in a single string."),$s=p(),Le=s("div"),b(pt.$$.fragment),zs=p(),Ro=s("p"),xs=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLMProphetNet
does not make use of token type ids, therefore a list of zeros is returned.`),Xs=p(),$e=s("div"),b(ht.$$.fragment),qs=p(),mt=s("p"),Es=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Vo=s("code"),Cs=n("prepare_for_model"),Fs=n(" method."),Bn=p(),se=s("h2"),ze=s("a"),Yo=s("span"),b(ut.$$.fragment),Os=p(),Jo=s("span"),js=n("XLMProphetNetModel"),Hn=p(),q=s("div"),b(ft.$$.fragment),Ds=p(),gt=s("p"),As=n(`The bare XLMProphetNet Model outputting raw hidden-states without any specific head on top.
This model inherits from `),co=s("a"),Ss=n("PreTrainedModel"),Is=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gs=p(),ae=s("p"),Ws=n("Original ProphetNet code can be found "),_t=s("a"),Bs=n("here"),Hs=n(`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),Qo=s("code"),Us=n("convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),Rs=n("."),Vs=p(),kt=s("p"),Ys=n("This model is a PyTorch "),vt=s("a"),Js=n("torch.nn.Module"),Qs=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),Zs=p(),D=s("div"),b(bt.$$.fragment),Ks=p(),ie=s("p"),ea=n("The "),lo=s("a"),ta=n("XLMProphetNetModel"),oa=n(" forward method, overrides the "),Zo=s("code"),na=n("__call__"),ra=n(" special method."),sa=p(),b(xe.$$.fragment),aa=p(),b(Xe.$$.fragment),Un=p(),de=s("h2"),qe=s("a"),Ko=s("span"),b(yt.$$.fragment),ia=p(),en=s("span"),da=n("XLMProphetNetEncoder"),Rn=p(),z=s("div"),b(Tt.$$.fragment),ca=p(),wt=s("p"),la=n(`The standalone encoder part of the XLMProphetNetModel.
This model inherits from `),po=s("a"),pa=n("PreTrainedModel"),ha=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ma=p(),ce=s("p"),ua=n("Original ProphetNet code can be found "),Pt=s("a"),fa=n("here"),ga=n(`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),tn=s("code"),_a=n("convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),ka=n("."),va=p(),Mt=s("p"),ba=n("This model is a PyTorch "),Nt=s("a"),ya=n("torch.nn.Module"),Ta=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),wa=p(),O=s("p"),Pa=n("word_embeddings  ("),on=s("code"),Ma=n("torch.nn.Embeddings"),Na=n(" of shape "),nn=s("code"),La=n("(config.vocab_size, config.hidden_size)"),$a=n(", "),rn=s("em"),za=n("optional"),xa=n(`):
The word embedding parameters. This can be used to initialize `),ho=s("a"),Xa=n("XLMProphetNetEncoder"),qa=n(` with pre-defined word
embeddings instead of randomly initialized word embeddings.`),Ea=p(),A=s("div"),b(Lt.$$.fragment),Ca=p(),le=s("p"),Fa=n("The "),mo=s("a"),Oa=n("XLMProphetNetEncoder"),ja=n(" forward method, overrides the "),sn=s("code"),Da=n("__call__"),Aa=n(" special method."),Sa=p(),b(Ee.$$.fragment),Ia=p(),b(Ce.$$.fragment),Vn=p(),pe=s("h2"),Fe=s("a"),an=s("span"),b($t.$$.fragment),Ga=p(),dn=s("span"),Wa=n("XLMProphetNetDecoder"),Yn=p(),x=s("div"),b(zt.$$.fragment),Ba=p(),xt=s("p"),Ha=n(`The standalone decoder part of the XLMProphetNetModel.
This model inherits from `),uo=s("a"),Ua=n("PreTrainedModel"),Ra=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Va=p(),he=s("p"),Ya=n("Original ProphetNet code can be found "),Xt=s("a"),Ja=n("here"),Qa=n(`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),cn=s("code"),Za=n("convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),Ka=n("."),ei=p(),qt=s("p"),ti=n("This model is a PyTorch "),Et=s("a"),oi=n("torch.nn.Module"),ni=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),ri=p(),j=s("p"),si=n("word_embeddings  ("),ln=s("code"),ai=n("torch.nn.Embeddings"),ii=n(" of shape "),pn=s("code"),di=n("(config.vocab_size, config.hidden_size)"),ci=n(", "),hn=s("em"),li=n("optional"),pi=n(`):
The word embedding parameters. This can be used to initialize `),fo=s("a"),hi=n("XLMProphetNetEncoder"),mi=n(` with pre-defined word
embeddings instead of randomly initialized word embeddings.`),ui=p(),S=s("div"),b(Ct.$$.fragment),fi=p(),me=s("p"),gi=n("The "),go=s("a"),_i=n("XLMProphetNetDecoder"),ki=n(" forward method, overrides the "),mn=s("code"),vi=n("__call__"),bi=n(" special method."),yi=p(),b(Oe.$$.fragment),Ti=p(),b(je.$$.fragment),Jn=p(),ue=s("h2"),De=s("a"),un=s("span"),b(Ft.$$.fragment),wi=p(),fn=s("span"),Pi=n("XLMProphetNetForConditionalGeneration"),Qn=p(),E=s("div"),b(Ot.$$.fragment),Mi=p(),jt=s("p"),Ni=n(`The XLMProphetNet Model with a language modeling head. Can be used for sequence generation tasks.
This model inherits from `),_o=s("a"),Li=n("PreTrainedModel"),$i=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zi=p(),fe=s("p"),xi=n("Original ProphetNet code can be found "),Dt=s("a"),Xi=n("here"),qi=n(`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),gn=s("code"),Ei=n("convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),Ci=n("."),Fi=p(),At=s("p"),Oi=n("This model is a PyTorch "),St=s("a"),ji=n("torch.nn.Module"),Di=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),Ai=p(),I=s("div"),b(It.$$.fragment),Si=p(),ge=s("p"),Ii=n("The "),ko=s("a"),Gi=n("XLMProphetNetForConditionalGeneration"),Wi=n(" forward method, overrides the "),_n=s("code"),Bi=n("__call__"),Hi=n(" special method."),Ui=p(),b(Ae.$$.fragment),Ri=p(),b(Se.$$.fragment),Zn=p(),_e=s("h2"),Ie=s("a"),kn=s("span"),b(Gt.$$.fragment),Vi=p(),vn=s("span"),Yi=n("XLMProphetNetForCausalLM"),Kn=p(),C=s("div"),b(Wt.$$.fragment),Ji=p(),Bt=s("p"),Qi=n(`The standalone decoder part of the XLMProphetNetModel with a lm head on top. The model can be used for causal language modeling.
This model inherits from `),vo=s("a"),Zi=n("PreTrainedModel"),Ki=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ed=p(),ke=s("p"),td=n("Original ProphetNet code can be found "),Ht=s("a"),od=n("here"),nd=n(`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),bn=s("code"),rd=n("convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),sd=n("."),ad=p(),Ut=s("p"),id=n("This model is a PyTorch "),Rt=s("a"),dd=n("torch.nn.Module"),cd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),ld=p(),G=s("div"),b(Vt.$$.fragment),pd=p(),ve=s("p"),hd=n("The "),bo=s("a"),md=n("XLMProphetNetForCausalLM"),ud=n(" forward method, overrides the "),yn=s("code"),fd=n("__call__"),gd=n(" special method."),_d=p(),b(Ge.$$.fragment),kd=p(),b(We.$$.fragment),this.h()},l(o){const f=Jc('[data-svelte="svelte-1phssyn"]',document.head);l=a(f,"META",{name:!0,content:!0}),f.forEach(t),v=h(o),g=a(o,"H1",{class:!0});var Yt=i(g);u=a(Yt,"A",{id:!0,class:!0,href:!0});var Tn=i(u);k=a(Tn,"SPAN",{});var wn=i(k);y(d.$$.fragment,wn),wn.forEach(t),Tn.forEach(t),m=h(Yt),L=a(Yt,"SPAN",{});var Pn=i(L);Nr=r(Pn,"XLM-ProphetNet"),Pn.forEach(t),Yt.forEach(t),En=h(o),K=a(o,"P",{});var Be=i(K);Fo=a(Be,"STRONG",{});var Mn=i(Fo);Lr=r(Mn,"DISCLAIMER:"),Mn.forEach(t),$r=r(Be," If you see something strange, file a "),Qe=a(Be,"A",{href:!0,rel:!0});var Nn=i(Qe);zr=r(Nn,"Github Issue"),Nn.forEach(t),xr=r(Be,` and assign
@patrickvonplaten`),Be.forEach(t),Cn=h(o),ee=a(o,"H2",{class:!0});var Jt=i(ee);ye=a(Jt,"A",{id:!0,class:!0,href:!0});var Ln=i(ye);Oo=a(Ln,"SPAN",{});var $n=i(Oo);y(Ze.$$.fragment,$n),$n.forEach(t),Ln.forEach(t),Xr=h(Jt),jo=a(Jt,"SPAN",{});var yd=i(jo);qr=r(yd,"Overview"),yd.forEach(t),Jt.forEach(t),Fn=h(o),Te=a(o,"P",{});var tr=i(Te);Er=r(tr,"The XLM-ProphetNet model was proposed in "),Ke=a(tr,"A",{href:!0,rel:!0});var Td=i(Ke);Cr=r(Td,"ProphetNet: Predicting Future N-gram for Sequence-to-Sequence Pre-training,"),Td.forEach(t),Fr=r(tr,` by Yu Yan, Weizhen Qi, Yeyun Gong, Dayiheng Liu, Nan Duan, Jiusheng Chen, Ruofei
Zhang, Ming Zhou on 13 Jan, 2020.`),tr.forEach(t),On=h(o),Qt=a(o,"P",{});var wd=i(Qt);Or=r(wd,`XLM-ProphetNet is an encoder-decoder model and can predict n-future tokens for \u201Cngram\u201D language modeling instead of
just the next token. Its architecture is identical to ProhpetNet, but the model was trained on the multi-lingual
\u201Cwiki100\u201D Wikipedia dump.`),wd.forEach(t),jn=h(o),Zt=a(o,"P",{});var Pd=i(Zt);jr=r(Pd,"The abstract from the paper is the following:"),Pd.forEach(t),Dn=h(o),Kt=a(o,"P",{});var Md=i(Kt);Do=a(Md,"EM",{});var Nd=i(Do);Dr=r(Nd,`In this paper, we present a new sequence-to-sequence pretraining model called ProphetNet, which introduces a novel
self-supervised objective named future n-gram prediction and the proposed n-stream self-attention mechanism. Instead of
the optimization of one-step ahead prediction in traditional sequence-to-sequence model, the ProphetNet is optimized by
n-step ahead prediction which predicts the next n tokens simultaneously based on previous context tokens at each time
step. The future n-gram prediction explicitly encourages the model to plan for the future tokens and prevent
overfitting on strong local correlations. We pre-train ProphetNet using a base scale dataset (16GB) and a large scale
dataset (160GB) respectively. Then we conduct experiments on CNN/DailyMail, Gigaword, and SQuAD 1.1 benchmarks for
abstractive summarization and question generation tasks. Experimental results show that ProphetNet achieves new
state-of-the-art results on all these datasets compared to the models using the same scale pretraining corpus.`),Nd.forEach(t),Md.forEach(t),An=h(o),we=a(o,"P",{});var or=i(we);Ar=r(or,"The Authors\u2019 code can be found "),et=a(or,"A",{href:!0,rel:!0});var Ld=i(et);Sr=r(Ld,"here"),Ld.forEach(t),Ir=r(or,"."),or.forEach(t),Sn=h(o),te=a(o,"H2",{class:!0});var nr=i(te);Pe=a(nr,"A",{id:!0,class:!0,href:!0});var $d=i(Pe);Ao=a($d,"SPAN",{});var zd=i(Ao);y(tt.$$.fragment,zd),zd.forEach(t),$d.forEach(t),Gr=h(nr),So=a(nr,"SPAN",{});var xd=i(So);Wr=r(xd,"XLMProphetNetConfig"),xd.forEach(t),nr.forEach(t),In=h(o),H=a(o,"DIV",{class:!0});var yo=i(H);y(ot.$$.fragment,yo),Br=h(yo),oe=a(yo,"P",{});var To=i(oe);Hr=r(To,"This is the configuration class to store the configuration of a "),eo=a(To,"A",{href:!0});var Xd=i(eo);Ur=r(Xd,"XLMProphetNetModel"),Xd.forEach(t),Rr=r(To,`. It is used to instantiate a
XLMProphetNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the XLMProphetNet
`),nt=a(To,"A",{href:!0,rel:!0});var qd=i(nt);Vr=r(qd,"microsoft/xprophetnet-large-wiki100-cased"),qd.forEach(t),Yr=r(To,`
architecture.`),To.forEach(t),Jr=h(yo),ne=a(yo,"P",{});var wo=i(ne);Qr=r(wo,"Configuration objects inherit from "),to=a(wo,"A",{href:!0});var Ed=i(to);Zr=r(Ed,"PretrainedConfig"),Ed.forEach(t),Kr=r(wo,` and can be used to control the model outputs. Read the
documentation from `),oo=a(wo,"A",{href:!0});var Cd=i(oo);es=r(Cd,"PretrainedConfig"),Cd.forEach(t),ts=r(wo," for more information."),wo.forEach(t),yo.forEach(t),Gn=h(o),re=a(o,"H2",{class:!0});var rr=i(re);Me=a(rr,"A",{id:!0,class:!0,href:!0});var Fd=i(Me);Io=a(Fd,"SPAN",{});var Od=i(Io);y(rt.$$.fragment,Od),Od.forEach(t),Fd.forEach(t),os=h(rr),Go=a(rr,"SPAN",{});var jd=i(Go);ns=r(jd,"XLMProphetNetTokenizer"),jd.forEach(t),rr.forEach(t),Wn=h(o),$=a(o,"DIV",{class:!0});var F=i($);y(st.$$.fragment,F),rs=h(F),U=a(F,"P",{});var He=i(U);ss=r(He,"Adapted from "),no=a(He,"A",{href:!0});var Dd=i(no);as=r(Dd,"RobertaTokenizer"),Dd.forEach(t),is=r(He," and "),ro=a(He,"A",{href:!0});var Ad=i(ro);ds=r(Ad,"XLNetTokenizer"),Ad.forEach(t),cs=r(He,`. Based on
`),at=a(He,"A",{href:!0,rel:!0});var Sd=i(at);ls=r(Sd,"SentencePiece"),Sd.forEach(t),ps=r(He,"."),He.forEach(t),hs=h(F),it=a(F,"P",{});var sr=i(it);ms=r(sr,"This tokenizer inherits from "),so=a(sr,"A",{href:!0});var Id=i(so);us=r(Id,"PreTrainedTokenizer"),Id.forEach(t),fs=r(sr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),sr.forEach(t),gs=h(F),R=a(F,"DIV",{class:!0});var Po=i(R);y(dt.$$.fragment,Po),_s=h(Po),Wo=a(Po,"P",{});var Gd=i(Wo);ks=r(Gd,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A XLMProphetNet sequence has the following format:`),Gd.forEach(t),vs=h(Po),ct=a(Po,"UL",{});var ar=i(ct);ao=a(ar,"LI",{});var vd=i(ao);bs=r(vd,"single sequence: "),Bo=a(vd,"CODE",{});var Wd=i(Bo);ys=r(Wd,"X [SEP]"),Wd.forEach(t),vd.forEach(t),Ts=h(ar),io=a(ar,"LI",{});var bd=i(io);ws=r(bd,"pair of sequences: "),Ho=a(bd,"CODE",{});var Bd=i(Ho);Ps=r(Bd,"A [SEP] B [SEP]"),Bd.forEach(t),bd.forEach(t),ar.forEach(t),Po.forEach(t),Ms=h(F),Ne=a(F,"DIV",{class:!0});var ir=i(Ne);y(lt.$$.fragment,ir),Ns=h(ir),Uo=a(ir,"P",{});var Hd=i(Uo);Ls=r(Hd,"Converts a sequence of tokens (strings for sub-words) in a single string."),Hd.forEach(t),ir.forEach(t),$s=h(F),Le=a(F,"DIV",{class:!0});var dr=i(Le);y(pt.$$.fragment,dr),zs=h(dr),Ro=a(dr,"P",{});var Ud=i(Ro);xs=r(Ud,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLMProphetNet
does not make use of token type ids, therefore a list of zeros is returned.`),Ud.forEach(t),dr.forEach(t),Xs=h(F),$e=a(F,"DIV",{class:!0});var cr=i($e);y(ht.$$.fragment,cr),qs=h(cr),mt=a(cr,"P",{});var lr=i(mt);Es=r(lr,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Vo=a(lr,"CODE",{});var Rd=i(Vo);Cs=r(Rd,"prepare_for_model"),Rd.forEach(t),Fs=r(lr," method."),lr.forEach(t),cr.forEach(t),F.forEach(t),Bn=h(o),se=a(o,"H2",{class:!0});var pr=i(se);ze=a(pr,"A",{id:!0,class:!0,href:!0});var Vd=i(ze);Yo=a(Vd,"SPAN",{});var Yd=i(Yo);y(ut.$$.fragment,Yd),Yd.forEach(t),Vd.forEach(t),Os=h(pr),Jo=a(pr,"SPAN",{});var Jd=i(Jo);js=r(Jd,"XLMProphetNetModel"),Jd.forEach(t),pr.forEach(t),Hn=h(o),q=a(o,"DIV",{class:!0});var V=i(q);y(ft.$$.fragment,V),Ds=h(V),gt=a(V,"P",{});var hr=i(gt);As=r(hr,`The bare XLMProphetNet Model outputting raw hidden-states without any specific head on top.
This model inherits from `),co=a(hr,"A",{href:!0});var Qd=i(co);Ss=r(Qd,"PreTrainedModel"),Qd.forEach(t),Is=r(hr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hr.forEach(t),Gs=h(V),ae=a(V,"P",{});var Mo=i(ae);Ws=r(Mo,"Original ProphetNet code can be found "),_t=a(Mo,"A",{href:!0,rel:!0});var Zd=i(_t);Bs=r(Zd,"here"),Zd.forEach(t),Hs=r(Mo,`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),Qo=a(Mo,"CODE",{});var Kd=i(Qo);Us=r(Kd,"convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),Kd.forEach(t),Rs=r(Mo,"."),Mo.forEach(t),Vs=h(V),kt=a(V,"P",{});var mr=i(kt);Ys=r(mr,"This model is a PyTorch "),vt=a(mr,"A",{href:!0,rel:!0});var ec=i(vt);Js=r(ec,"torch.nn.Module"),ec.forEach(t),Qs=r(mr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),mr.forEach(t),Zs=h(V),D=a(V,"DIV",{class:!0});var Ue=i(D);y(bt.$$.fragment,Ue),Ks=h(Ue),ie=a(Ue,"P",{});var No=i(ie);ea=r(No,"The "),lo=a(No,"A",{href:!0});var tc=i(lo);ta=r(tc,"XLMProphetNetModel"),tc.forEach(t),oa=r(No," forward method, overrides the "),Zo=a(No,"CODE",{});var oc=i(Zo);na=r(oc,"__call__"),oc.forEach(t),ra=r(No," special method."),No.forEach(t),sa=h(Ue),y(xe.$$.fragment,Ue),aa=h(Ue),y(Xe.$$.fragment,Ue),Ue.forEach(t),V.forEach(t),Un=h(o),de=a(o,"H2",{class:!0});var ur=i(de);qe=a(ur,"A",{id:!0,class:!0,href:!0});var nc=i(qe);Ko=a(nc,"SPAN",{});var rc=i(Ko);y(yt.$$.fragment,rc),rc.forEach(t),nc.forEach(t),ia=h(ur),en=a(ur,"SPAN",{});var sc=i(en);da=r(sc,"XLMProphetNetEncoder"),sc.forEach(t),ur.forEach(t),Rn=h(o),z=a(o,"DIV",{class:!0});var W=i(z);y(Tt.$$.fragment,W),ca=h(W),wt=a(W,"P",{});var fr=i(wt);la=r(fr,`The standalone encoder part of the XLMProphetNetModel.
This model inherits from `),po=a(fr,"A",{href:!0});var ac=i(po);pa=r(ac,"PreTrainedModel"),ac.forEach(t),ha=r(fr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fr.forEach(t),ma=h(W),ce=a(W,"P",{});var Lo=i(ce);ua=r(Lo,"Original ProphetNet code can be found "),Pt=a(Lo,"A",{href:!0,rel:!0});var ic=i(Pt);fa=r(ic,"here"),ic.forEach(t),ga=r(Lo,`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),tn=a(Lo,"CODE",{});var dc=i(tn);_a=r(dc,"convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),dc.forEach(t),ka=r(Lo,"."),Lo.forEach(t),va=h(W),Mt=a(W,"P",{});var gr=i(Mt);ba=r(gr,"This model is a PyTorch "),Nt=a(gr,"A",{href:!0,rel:!0});var cc=i(Nt);ya=r(cc,"torch.nn.Module"),cc.forEach(t),Ta=r(gr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),gr.forEach(t),wa=h(W),O=a(W,"P",{});var Y=i(O);Pa=r(Y,"word_embeddings  ("),on=a(Y,"CODE",{});var lc=i(on);Ma=r(lc,"torch.nn.Embeddings"),lc.forEach(t),Na=r(Y," of shape "),nn=a(Y,"CODE",{});var pc=i(nn);La=r(pc,"(config.vocab_size, config.hidden_size)"),pc.forEach(t),$a=r(Y,", "),rn=a(Y,"EM",{});var hc=i(rn);za=r(hc,"optional"),hc.forEach(t),xa=r(Y,`):
The word embedding parameters. This can be used to initialize `),ho=a(Y,"A",{href:!0});var mc=i(ho);Xa=r(mc,"XLMProphetNetEncoder"),mc.forEach(t),qa=r(Y,` with pre-defined word
embeddings instead of randomly initialized word embeddings.`),Y.forEach(t),Ea=h(W),A=a(W,"DIV",{class:!0});var Re=i(A);y(Lt.$$.fragment,Re),Ca=h(Re),le=a(Re,"P",{});var $o=i(le);Fa=r($o,"The "),mo=a($o,"A",{href:!0});var uc=i(mo);Oa=r(uc,"XLMProphetNetEncoder"),uc.forEach(t),ja=r($o," forward method, overrides the "),sn=a($o,"CODE",{});var fc=i(sn);Da=r(fc,"__call__"),fc.forEach(t),Aa=r($o," special method."),$o.forEach(t),Sa=h(Re),y(Ee.$$.fragment,Re),Ia=h(Re),y(Ce.$$.fragment,Re),Re.forEach(t),W.forEach(t),Vn=h(o),pe=a(o,"H2",{class:!0});var _r=i(pe);Fe=a(_r,"A",{id:!0,class:!0,href:!0});var gc=i(Fe);an=a(gc,"SPAN",{});var _c=i(an);y($t.$$.fragment,_c),_c.forEach(t),gc.forEach(t),Ga=h(_r),dn=a(_r,"SPAN",{});var kc=i(dn);Wa=r(kc,"XLMProphetNetDecoder"),kc.forEach(t),_r.forEach(t),Yn=h(o),x=a(o,"DIV",{class:!0});var B=i(x);y(zt.$$.fragment,B),Ba=h(B),xt=a(B,"P",{});var kr=i(xt);Ha=r(kr,`The standalone decoder part of the XLMProphetNetModel.
This model inherits from `),uo=a(kr,"A",{href:!0});var vc=i(uo);Ua=r(vc,"PreTrainedModel"),vc.forEach(t),Ra=r(kr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kr.forEach(t),Va=h(B),he=a(B,"P",{});var zo=i(he);Ya=r(zo,"Original ProphetNet code can be found "),Xt=a(zo,"A",{href:!0,rel:!0});var bc=i(Xt);Ja=r(bc,"here"),bc.forEach(t),Qa=r(zo,`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),cn=a(zo,"CODE",{});var yc=i(cn);Za=r(yc,"convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),yc.forEach(t),Ka=r(zo,"."),zo.forEach(t),ei=h(B),qt=a(B,"P",{});var vr=i(qt);ti=r(vr,"This model is a PyTorch "),Et=a(vr,"A",{href:!0,rel:!0});var Tc=i(Et);oi=r(Tc,"torch.nn.Module"),Tc.forEach(t),ni=r(vr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),vr.forEach(t),ri=h(B),j=a(B,"P",{});var J=i(j);si=r(J,"word_embeddings  ("),ln=a(J,"CODE",{});var wc=i(ln);ai=r(wc,"torch.nn.Embeddings"),wc.forEach(t),ii=r(J," of shape "),pn=a(J,"CODE",{});var Pc=i(pn);di=r(Pc,"(config.vocab_size, config.hidden_size)"),Pc.forEach(t),ci=r(J,", "),hn=a(J,"EM",{});var Mc=i(hn);li=r(Mc,"optional"),Mc.forEach(t),pi=r(J,`):
The word embedding parameters. This can be used to initialize `),fo=a(J,"A",{href:!0});var Nc=i(fo);hi=r(Nc,"XLMProphetNetEncoder"),Nc.forEach(t),mi=r(J,` with pre-defined word
embeddings instead of randomly initialized word embeddings.`),J.forEach(t),ui=h(B),S=a(B,"DIV",{class:!0});var Ve=i(S);y(Ct.$$.fragment,Ve),fi=h(Ve),me=a(Ve,"P",{});var xo=i(me);gi=r(xo,"The "),go=a(xo,"A",{href:!0});var Lc=i(go);_i=r(Lc,"XLMProphetNetDecoder"),Lc.forEach(t),ki=r(xo," forward method, overrides the "),mn=a(xo,"CODE",{});var $c=i(mn);vi=r($c,"__call__"),$c.forEach(t),bi=r(xo," special method."),xo.forEach(t),yi=h(Ve),y(Oe.$$.fragment,Ve),Ti=h(Ve),y(je.$$.fragment,Ve),Ve.forEach(t),B.forEach(t),Jn=h(o),ue=a(o,"H2",{class:!0});var br=i(ue);De=a(br,"A",{id:!0,class:!0,href:!0});var zc=i(De);un=a(zc,"SPAN",{});var xc=i(un);y(Ft.$$.fragment,xc),xc.forEach(t),zc.forEach(t),wi=h(br),fn=a(br,"SPAN",{});var Xc=i(fn);Pi=r(Xc,"XLMProphetNetForConditionalGeneration"),Xc.forEach(t),br.forEach(t),Qn=h(o),E=a(o,"DIV",{class:!0});var Q=i(E);y(Ot.$$.fragment,Q),Mi=h(Q),jt=a(Q,"P",{});var yr=i(jt);Ni=r(yr,`The XLMProphetNet Model with a language modeling head. Can be used for sequence generation tasks.
This model inherits from `),_o=a(yr,"A",{href:!0});var qc=i(_o);Li=r(qc,"PreTrainedModel"),qc.forEach(t),$i=r(yr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yr.forEach(t),zi=h(Q),fe=a(Q,"P",{});var Xo=i(fe);xi=r(Xo,"Original ProphetNet code can be found "),Dt=a(Xo,"A",{href:!0,rel:!0});var Ec=i(Dt);Xi=r(Ec,"here"),Ec.forEach(t),qi=r(Xo,`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),gn=a(Xo,"CODE",{});var Cc=i(gn);Ei=r(Cc,"convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),Cc.forEach(t),Ci=r(Xo,"."),Xo.forEach(t),Fi=h(Q),At=a(Q,"P",{});var Tr=i(At);Oi=r(Tr,"This model is a PyTorch "),St=a(Tr,"A",{href:!0,rel:!0});var Fc=i(St);ji=r(Fc,"torch.nn.Module"),Fc.forEach(t),Di=r(Tr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),Tr.forEach(t),Ai=h(Q),I=a(Q,"DIV",{class:!0});var Ye=i(I);y(It.$$.fragment,Ye),Si=h(Ye),ge=a(Ye,"P",{});var qo=i(ge);Ii=r(qo,"The "),ko=a(qo,"A",{href:!0});var Oc=i(ko);Gi=r(Oc,"XLMProphetNetForConditionalGeneration"),Oc.forEach(t),Wi=r(qo," forward method, overrides the "),_n=a(qo,"CODE",{});var jc=i(_n);Bi=r(jc,"__call__"),jc.forEach(t),Hi=r(qo," special method."),qo.forEach(t),Ui=h(Ye),y(Ae.$$.fragment,Ye),Ri=h(Ye),y(Se.$$.fragment,Ye),Ye.forEach(t),Q.forEach(t),Zn=h(o),_e=a(o,"H2",{class:!0});var wr=i(_e);Ie=a(wr,"A",{id:!0,class:!0,href:!0});var Dc=i(Ie);kn=a(Dc,"SPAN",{});var Ac=i(kn);y(Gt.$$.fragment,Ac),Ac.forEach(t),Dc.forEach(t),Vi=h(wr),vn=a(wr,"SPAN",{});var Sc=i(vn);Yi=r(Sc,"XLMProphetNetForCausalLM"),Sc.forEach(t),wr.forEach(t),Kn=h(o),C=a(o,"DIV",{class:!0});var Z=i(C);y(Wt.$$.fragment,Z),Ji=h(Z),Bt=a(Z,"P",{});var Pr=i(Bt);Qi=r(Pr,`The standalone decoder part of the XLMProphetNetModel with a lm head on top. The model can be used for causal language modeling.
This model inherits from `),vo=a(Pr,"A",{href:!0});var Ic=i(vo);Zi=r(Ic,"PreTrainedModel"),Ic.forEach(t),Ki=r(Pr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pr.forEach(t),ed=h(Z),ke=a(Z,"P",{});var Eo=i(ke);td=r(Eo,"Original ProphetNet code can be found "),Ht=a(Eo,"A",{href:!0,rel:!0});var Gc=i(Ht);od=r(Gc,"here"),Gc.forEach(t),nd=r(Eo,`. Checkpoints were converted
from original Fairseq checkpoints. For more information on the checkpoint conversion, please take a look at the
file `),bn=a(Eo,"CODE",{});var Wc=i(bn);rd=r(Wc,"convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py"),Wc.forEach(t),sd=r(Eo,"."),Eo.forEach(t),ad=h(Z),Ut=a(Z,"P",{});var Mr=i(Ut);id=r(Mr,"This model is a PyTorch "),Rt=a(Mr,"A",{href:!0,rel:!0});var Bc=i(Rt);dd=r(Bc,"torch.nn.Module"),Bc.forEach(t),cd=r(Mr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matters related to general usage and
behavior.`),Mr.forEach(t),ld=h(Z),G=a(Z,"DIV",{class:!0});var Je=i(G);y(Vt.$$.fragment,Je),pd=h(Je),ve=a(Je,"P",{});var Co=i(ve);hd=r(Co,"The "),bo=a(Co,"A",{href:!0});var Hc=i(bo);md=r(Hc,"XLMProphetNetForCausalLM"),Hc.forEach(t),ud=r(Co," forward method, overrides the "),yn=a(Co,"CODE",{});var Uc=i(yn);fd=r(Uc,"__call__"),Uc.forEach(t),gd=r(Co," special method."),Co.forEach(t),_d=h(Je),y(Ge.$$.fragment,Je),kd=h(Je),y(We.$$.fragment,Je),Je.forEach(t),Z.forEach(t),this.h()},h(){c(l,"name","hf:doc:metadata"),c(l,"content",JSON.stringify(cl)),c(u,"id","xlmprophetnet"),c(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(u,"href","#xlmprophetnet"),c(g,"class","relative group"),c(Qe,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(Qe,"rel","nofollow"),c(ye,"id","overview"),c(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ye,"href","#overview"),c(ee,"class","relative group"),c(Ke,"href","https://arxiv.org/abs/2001.04063"),c(Ke,"rel","nofollow"),c(et,"href","https://github.com/microsoft/ProphetNet"),c(et,"rel","nofollow"),c(Pe,"id","transformers.XLMProphetNetConfig"),c(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pe,"href","#transformers.XLMProphetNetConfig"),c(te,"class","relative group"),c(eo,"href","/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetModel"),c(nt,"href","https://huggingface.co/microsoft/xprophetnet-large-wiki100-cased"),c(nt,"rel","nofollow"),c(to,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(oo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Me,"id","transformers.XLMProphetNetTokenizer"),c(Me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Me,"href","#transformers.XLMProphetNetTokenizer"),c(re,"class","relative group"),c(no,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),c(ro,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer"),c(at,"href","https://github.com/google/sentencepiece"),c(at,"rel","nofollow"),c(so,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ze,"id","transformers.XLMProphetNetModel"),c(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ze,"href","#transformers.XLMProphetNetModel"),c(se,"class","relative group"),c(co,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(_t,"href","https://github.com/microsoft/ProphetNet"),c(_t,"rel","nofollow"),c(vt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(vt,"rel","nofollow"),c(lo,"href","/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetModel"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(qe,"id","transformers.XLMProphetNetEncoder"),c(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qe,"href","#transformers.XLMProphetNetEncoder"),c(de,"class","relative group"),c(po,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Pt,"href","https://github.com/microsoft/ProphetNet"),c(Pt,"rel","nofollow"),c(Nt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Nt,"rel","nofollow"),c(ho,"href","/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetEncoder"),c(mo,"href","/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetEncoder"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Fe,"id","transformers.XLMProphetNetDecoder"),c(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fe,"href","#transformers.XLMProphetNetDecoder"),c(pe,"class","relative group"),c(uo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Xt,"href","https://github.com/microsoft/ProphetNet"),c(Xt,"rel","nofollow"),c(Et,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Et,"rel","nofollow"),c(fo,"href","/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetEncoder"),c(go,"href","/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetDecoder"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(De,"id","transformers.XLMProphetNetForConditionalGeneration"),c(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(De,"href","#transformers.XLMProphetNetForConditionalGeneration"),c(ue,"class","relative group"),c(_o,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Dt,"href","https://github.com/microsoft/ProphetNet"),c(Dt,"rel","nofollow"),c(St,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(St,"rel","nofollow"),c(ko,"href","/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetForConditionalGeneration"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ie,"id","transformers.XLMProphetNetForCausalLM"),c(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ie,"href","#transformers.XLMProphetNetForCausalLM"),c(_e,"class","relative group"),c(vo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Ht,"href","https://github.com/microsoft/ProphetNet"),c(Ht,"rel","nofollow"),c(Rt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Rt,"rel","nofollow"),c(bo,"href","/docs/transformers/main/en/model_doc/xlm-prophetnet#transformers.XLMProphetNetForCausalLM"),c(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,f){e(document.head,l),_(o,v,f),_(o,g,f),e(g,u),e(u,k),T(d,k,null),e(g,m),e(g,L),e(L,Nr),_(o,En,f),_(o,K,f),e(K,Fo),e(Fo,Lr),e(K,$r),e(K,Qe),e(Qe,zr),e(K,xr),_(o,Cn,f),_(o,ee,f),e(ee,ye),e(ye,Oo),T(Ze,Oo,null),e(ee,Xr),e(ee,jo),e(jo,qr),_(o,Fn,f),_(o,Te,f),e(Te,Er),e(Te,Ke),e(Ke,Cr),e(Te,Fr),_(o,On,f),_(o,Qt,f),e(Qt,Or),_(o,jn,f),_(o,Zt,f),e(Zt,jr),_(o,Dn,f),_(o,Kt,f),e(Kt,Do),e(Do,Dr),_(o,An,f),_(o,we,f),e(we,Ar),e(we,et),e(et,Sr),e(we,Ir),_(o,Sn,f),_(o,te,f),e(te,Pe),e(Pe,Ao),T(tt,Ao,null),e(te,Gr),e(te,So),e(So,Wr),_(o,In,f),_(o,H,f),T(ot,H,null),e(H,Br),e(H,oe),e(oe,Hr),e(oe,eo),e(eo,Ur),e(oe,Rr),e(oe,nt),e(nt,Vr),e(oe,Yr),e(H,Jr),e(H,ne),e(ne,Qr),e(ne,to),e(to,Zr),e(ne,Kr),e(ne,oo),e(oo,es),e(ne,ts),_(o,Gn,f),_(o,re,f),e(re,Me),e(Me,Io),T(rt,Io,null),e(re,os),e(re,Go),e(Go,ns),_(o,Wn,f),_(o,$,f),T(st,$,null),e($,rs),e($,U),e(U,ss),e(U,no),e(no,as),e(U,is),e(U,ro),e(ro,ds),e(U,cs),e(U,at),e(at,ls),e(U,ps),e($,hs),e($,it),e(it,ms),e(it,so),e(so,us),e(it,fs),e($,gs),e($,R),T(dt,R,null),e(R,_s),e(R,Wo),e(Wo,ks),e(R,vs),e(R,ct),e(ct,ao),e(ao,bs),e(ao,Bo),e(Bo,ys),e(ct,Ts),e(ct,io),e(io,ws),e(io,Ho),e(Ho,Ps),e($,Ms),e($,Ne),T(lt,Ne,null),e(Ne,Ns),e(Ne,Uo),e(Uo,Ls),e($,$s),e($,Le),T(pt,Le,null),e(Le,zs),e(Le,Ro),e(Ro,xs),e($,Xs),e($,$e),T(ht,$e,null),e($e,qs),e($e,mt),e(mt,Es),e(mt,Vo),e(Vo,Cs),e(mt,Fs),_(o,Bn,f),_(o,se,f),e(se,ze),e(ze,Yo),T(ut,Yo,null),e(se,Os),e(se,Jo),e(Jo,js),_(o,Hn,f),_(o,q,f),T(ft,q,null),e(q,Ds),e(q,gt),e(gt,As),e(gt,co),e(co,Ss),e(gt,Is),e(q,Gs),e(q,ae),e(ae,Ws),e(ae,_t),e(_t,Bs),e(ae,Hs),e(ae,Qo),e(Qo,Us),e(ae,Rs),e(q,Vs),e(q,kt),e(kt,Ys),e(kt,vt),e(vt,Js),e(kt,Qs),e(q,Zs),e(q,D),T(bt,D,null),e(D,Ks),e(D,ie),e(ie,ea),e(ie,lo),e(lo,ta),e(ie,oa),e(ie,Zo),e(Zo,na),e(ie,ra),e(D,sa),T(xe,D,null),e(D,aa),T(Xe,D,null),_(o,Un,f),_(o,de,f),e(de,qe),e(qe,Ko),T(yt,Ko,null),e(de,ia),e(de,en),e(en,da),_(o,Rn,f),_(o,z,f),T(Tt,z,null),e(z,ca),e(z,wt),e(wt,la),e(wt,po),e(po,pa),e(wt,ha),e(z,ma),e(z,ce),e(ce,ua),e(ce,Pt),e(Pt,fa),e(ce,ga),e(ce,tn),e(tn,_a),e(ce,ka),e(z,va),e(z,Mt),e(Mt,ba),e(Mt,Nt),e(Nt,ya),e(Mt,Ta),e(z,wa),e(z,O),e(O,Pa),e(O,on),e(on,Ma),e(O,Na),e(O,nn),e(nn,La),e(O,$a),e(O,rn),e(rn,za),e(O,xa),e(O,ho),e(ho,Xa),e(O,qa),e(z,Ea),e(z,A),T(Lt,A,null),e(A,Ca),e(A,le),e(le,Fa),e(le,mo),e(mo,Oa),e(le,ja),e(le,sn),e(sn,Da),e(le,Aa),e(A,Sa),T(Ee,A,null),e(A,Ia),T(Ce,A,null),_(o,Vn,f),_(o,pe,f),e(pe,Fe),e(Fe,an),T($t,an,null),e(pe,Ga),e(pe,dn),e(dn,Wa),_(o,Yn,f),_(o,x,f),T(zt,x,null),e(x,Ba),e(x,xt),e(xt,Ha),e(xt,uo),e(uo,Ua),e(xt,Ra),e(x,Va),e(x,he),e(he,Ya),e(he,Xt),e(Xt,Ja),e(he,Qa),e(he,cn),e(cn,Za),e(he,Ka),e(x,ei),e(x,qt),e(qt,ti),e(qt,Et),e(Et,oi),e(qt,ni),e(x,ri),e(x,j),e(j,si),e(j,ln),e(ln,ai),e(j,ii),e(j,pn),e(pn,di),e(j,ci),e(j,hn),e(hn,li),e(j,pi),e(j,fo),e(fo,hi),e(j,mi),e(x,ui),e(x,S),T(Ct,S,null),e(S,fi),e(S,me),e(me,gi),e(me,go),e(go,_i),e(me,ki),e(me,mn),e(mn,vi),e(me,bi),e(S,yi),T(Oe,S,null),e(S,Ti),T(je,S,null),_(o,Jn,f),_(o,ue,f),e(ue,De),e(De,un),T(Ft,un,null),e(ue,wi),e(ue,fn),e(fn,Pi),_(o,Qn,f),_(o,E,f),T(Ot,E,null),e(E,Mi),e(E,jt),e(jt,Ni),e(jt,_o),e(_o,Li),e(jt,$i),e(E,zi),e(E,fe),e(fe,xi),e(fe,Dt),e(Dt,Xi),e(fe,qi),e(fe,gn),e(gn,Ei),e(fe,Ci),e(E,Fi),e(E,At),e(At,Oi),e(At,St),e(St,ji),e(At,Di),e(E,Ai),e(E,I),T(It,I,null),e(I,Si),e(I,ge),e(ge,Ii),e(ge,ko),e(ko,Gi),e(ge,Wi),e(ge,_n),e(_n,Bi),e(ge,Hi),e(I,Ui),T(Ae,I,null),e(I,Ri),T(Se,I,null),_(o,Zn,f),_(o,_e,f),e(_e,Ie),e(Ie,kn),T(Gt,kn,null),e(_e,Vi),e(_e,vn),e(vn,Yi),_(o,Kn,f),_(o,C,f),T(Wt,C,null),e(C,Ji),e(C,Bt),e(Bt,Qi),e(Bt,vo),e(vo,Zi),e(Bt,Ki),e(C,ed),e(C,ke),e(ke,td),e(ke,Ht),e(Ht,od),e(ke,nd),e(ke,bn),e(bn,rd),e(ke,sd),e(C,ad),e(C,Ut),e(Ut,id),e(Ut,Rt),e(Rt,dd),e(Ut,cd),e(C,ld),e(C,G),T(Vt,G,null),e(G,pd),e(G,ve),e(ve,hd),e(ve,bo),e(bo,md),e(ve,ud),e(ve,yn),e(yn,fd),e(ve,gd),e(G,_d),T(Ge,G,null),e(G,kd),T(We,G,null),er=!0},p(o,[f]){const Yt={};f&2&&(Yt.$$scope={dirty:f,ctx:o}),xe.$set(Yt);const Tn={};f&2&&(Tn.$$scope={dirty:f,ctx:o}),Xe.$set(Tn);const wn={};f&2&&(wn.$$scope={dirty:f,ctx:o}),Ee.$set(wn);const Pn={};f&2&&(Pn.$$scope={dirty:f,ctx:o}),Ce.$set(Pn);const Be={};f&2&&(Be.$$scope={dirty:f,ctx:o}),Oe.$set(Be);const Mn={};f&2&&(Mn.$$scope={dirty:f,ctx:o}),je.$set(Mn);const Nn={};f&2&&(Nn.$$scope={dirty:f,ctx:o}),Ae.$set(Nn);const Jt={};f&2&&(Jt.$$scope={dirty:f,ctx:o}),Se.$set(Jt);const Ln={};f&2&&(Ln.$$scope={dirty:f,ctx:o}),Ge.$set(Ln);const $n={};f&2&&($n.$$scope={dirty:f,ctx:o}),We.$set($n)},i(o){er||(w(d.$$.fragment,o),w(Ze.$$.fragment,o),w(tt.$$.fragment,o),w(ot.$$.fragment,o),w(rt.$$.fragment,o),w(st.$$.fragment,o),w(dt.$$.fragment,o),w(lt.$$.fragment,o),w(pt.$$.fragment,o),w(ht.$$.fragment,o),w(ut.$$.fragment,o),w(ft.$$.fragment,o),w(bt.$$.fragment,o),w(xe.$$.fragment,o),w(Xe.$$.fragment,o),w(yt.$$.fragment,o),w(Tt.$$.fragment,o),w(Lt.$$.fragment,o),w(Ee.$$.fragment,o),w(Ce.$$.fragment,o),w($t.$$.fragment,o),w(zt.$$.fragment,o),w(Ct.$$.fragment,o),w(Oe.$$.fragment,o),w(je.$$.fragment,o),w(Ft.$$.fragment,o),w(Ot.$$.fragment,o),w(It.$$.fragment,o),w(Ae.$$.fragment,o),w(Se.$$.fragment,o),w(Gt.$$.fragment,o),w(Wt.$$.fragment,o),w(Vt.$$.fragment,o),w(Ge.$$.fragment,o),w(We.$$.fragment,o),er=!0)},o(o){P(d.$$.fragment,o),P(Ze.$$.fragment,o),P(tt.$$.fragment,o),P(ot.$$.fragment,o),P(rt.$$.fragment,o),P(st.$$.fragment,o),P(dt.$$.fragment,o),P(lt.$$.fragment,o),P(pt.$$.fragment,o),P(ht.$$.fragment,o),P(ut.$$.fragment,o),P(ft.$$.fragment,o),P(bt.$$.fragment,o),P(xe.$$.fragment,o),P(Xe.$$.fragment,o),P(yt.$$.fragment,o),P(Tt.$$.fragment,o),P(Lt.$$.fragment,o),P(Ee.$$.fragment,o),P(Ce.$$.fragment,o),P($t.$$.fragment,o),P(zt.$$.fragment,o),P(Ct.$$.fragment,o),P(Oe.$$.fragment,o),P(je.$$.fragment,o),P(Ft.$$.fragment,o),P(Ot.$$.fragment,o),P(It.$$.fragment,o),P(Ae.$$.fragment,o),P(Se.$$.fragment,o),P(Gt.$$.fragment,o),P(Wt.$$.fragment,o),P(Vt.$$.fragment,o),P(Ge.$$.fragment,o),P(We.$$.fragment,o),er=!1},d(o){t(l),o&&t(v),o&&t(g),M(d),o&&t(En),o&&t(K),o&&t(Cn),o&&t(ee),M(Ze),o&&t(Fn),o&&t(Te),o&&t(On),o&&t(Qt),o&&t(jn),o&&t(Zt),o&&t(Dn),o&&t(Kt),o&&t(An),o&&t(we),o&&t(Sn),o&&t(te),M(tt),o&&t(In),o&&t(H),M(ot),o&&t(Gn),o&&t(re),M(rt),o&&t(Wn),o&&t($),M(st),M(dt),M(lt),M(pt),M(ht),o&&t(Bn),o&&t(se),M(ut),o&&t(Hn),o&&t(q),M(ft),M(bt),M(xe),M(Xe),o&&t(Un),o&&t(de),M(yt),o&&t(Rn),o&&t(z),M(Tt),M(Lt),M(Ee),M(Ce),o&&t(Vn),o&&t(pe),M($t),o&&t(Yn),o&&t(x),M(zt),M(Ct),M(Oe),M(je),o&&t(Jn),o&&t(ue),M(Ft),o&&t(Qn),o&&t(E),M(Ot),M(It),M(Ae),M(Se),o&&t(Zn),o&&t(_e),M(Gt),o&&t(Kn),o&&t(C),M(Wt),M(Vt),M(Ge),M(We)}}}const cl={local:"xlmprophetnet",sections:[{local:"overview",title:"Overview"},{local:"transformers.XLMProphetNetConfig",title:"XLMProphetNetConfig"},{local:"transformers.XLMProphetNetTokenizer",title:"XLMProphetNetTokenizer"},{local:"transformers.XLMProphetNetModel",title:"XLMProphetNetModel"},{local:"transformers.XLMProphetNetEncoder",title:"XLMProphetNetEncoder"},{local:"transformers.XLMProphetNetDecoder",title:"XLMProphetNetDecoder"},{local:"transformers.XLMProphetNetForConditionalGeneration",title:"XLMProphetNetForConditionalGeneration"},{local:"transformers.XLMProphetNetForCausalLM",title:"XLMProphetNetForCausalLM"}],title:"XLM-ProphetNet"};function ll(N){return Qc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class _l extends Rc{constructor(l){super();Vc(this,l,ll,dl,Yc,{})}}export{_l as default,cl as metadata};
