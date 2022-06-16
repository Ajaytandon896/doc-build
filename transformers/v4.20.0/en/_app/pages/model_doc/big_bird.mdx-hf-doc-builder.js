import{S as hw,i as mw,s as gw,e as n,k as p,w as v,t as a,M as fw,c as s,d as t,m as h,a as r,x as B,h as i,b as c,G as e,g as k,y,q as $,o as T,B as w,v as uw,L as E}from"../../chunks/vendor-hf-doc-builder.js";import{T as G}from"../../chunks/Tip-hf-doc-builder.js";import{D as q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as j}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as z}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as M}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function _w(x){let d,_,g,f,b;return f=new j({props:{code:"",highlighted:""}}),{c(){d=n("p"),_=a("Example:"),g=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),B(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function bw(x){let d,_,g,f,b;return f=new j({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=n("p"),_=a("sequence pair mask has the following format:"),g=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"sequence pair mask has the following format:"),m.forEach(t),g=h(l),B(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function kw(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function vw(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, BigBirdModel
import torch

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = BigBirdModel.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdModel.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),_=a("Example:"),g=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),B(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function Bw(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function yw(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, BigBirdForPreTraining
import torch

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = BigBirdForPreTraining.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),B(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function $w(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function Tw(x){let d,_,g,f,b;return f=new j({props:{code:`import torch
from transformers import BigBirdTokenizer, BigBirdForCausalLM

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = BigBirdForCausalLM.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForCausalLM.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),B(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function ww(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function xw(x){let d,_,g,f,b;return f=new j({props:{code:`import torch
from transformers import BigBirdTokenizer, BigBirdForMaskedLM
from datasets import load_dataset

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = BigBirdForMaskedLM.from_pretrained("google/bigbird-roberta-base")
squad_ds = load_dataset("squad_v2", split="train")
# select random long article
LONG_ARTICLE_TARGET = squad_ds[81514]["context"]
# select random sentence
LONG_ARTICLE_TARGET[332:398]

# add mask_token
LONG_ARTICLE_TO_MASK = LONG_ARTICLE_TARGET.replace("maximum", "[MASK]")
inputs = tokenizer(LONG_ARTICLE_TO_MASK, return_tensors="pt")
# long article input
list(inputs["input_ids"].shape)

with torch.no_grad():
    logits = model(**inputs).logits
# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]
predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>squad_ds = load_dataset(<span class="hljs-string">&quot;squad_v2&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># select random long article</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>LONG_ARTICLE_TARGET = squad_ds[<span class="hljs-number">81514</span>][<span class="hljs-string">&quot;context&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># select random sentence</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>LONG_ARTICLE_TARGET[<span class="hljs-number">332</span>:<span class="hljs-number">398</span>]
<span class="hljs-string">&#x27;the highest values are very close to the theoretical maximum value&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add mask_token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>LONG_ARTICLE_TO_MASK = LONG_ARTICLE_TARGET.replace(<span class="hljs-string">&quot;maximum&quot;</span>, <span class="hljs-string">&quot;[MASK]&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(LONG_ARTICLE_TO_MASK, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># long article input</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">919</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27;maximum&#x27;</span>`}}),{c(){d=n("p"),_=a("Example:"),g=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),B(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function Fw(x){let d,_;return d=new j({props:{code:`labels = tokenizer(LONG_ARTICLE_TARGET, return_tensors="pt")["input_ids"]
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)
outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(LONG_ARTICLE_TARGET, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">1.08</span>`}}),{c(){v(d.$$.fragment)},l(g){B(d.$$.fragment,g)},m(g,f){y(d,g,f),_=!0},p:E,i(g){_||($(d.$$.fragment,g),_=!0)},o(g){T(d.$$.fragment,g),_=!1},d(g){w(d,g)}}}function qw(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function zw(x){let d,_,g,f,b;return f=new j({props:{code:`import torch
from transformers import BigBirdTokenizer, BigBirdForSequenceClassification
from datasets import load_dataset

tokenizer = BigBirdTokenizer.from_pretrained("l-yohai/bigbird-roberta-base-mnli")
model = BigBirdForSequenceClassification.from_pretrained("l-yohai/bigbird-roberta-base-mnli")
squad_ds = load_dataset("squad_v2", split="train")
LONG_ARTICLE = squad_ds[81514]["context"]
inputs = tokenizer(LONG_ARTICLE, return_tensors="pt")
# long input article
list(inputs["input_ids"].shape)

with torch.no_grad():
    logits = model(**inputs).logits
predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;l-yohai/bigbird-roberta-base-mnli&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;l-yohai/bigbird-roberta-base-mnli&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>squad_ds = load_dataset(<span class="hljs-string">&quot;squad_v2&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>LONG_ARTICLE = squad_ds[<span class="hljs-number">81514</span>][<span class="hljs-string">&quot;context&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(LONG_ARTICLE, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># long input article</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">919</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=n("p"),_=a("Example:"),g=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),B(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function Mw(x){let d,_;return d=new j({props:{code:`num_labels = len(model.config.id2label)
model = BigBirdForSequenceClassification.from_pretrained(
    "l-yohai/bigbird-roberta-base-mnli", num_labels=num_labels
)
labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;l-yohai/bigbird-roberta-base-mnli&quot;</span>, num_labels=num_labels
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">1.13</span>`}}),{c(){v(d.$$.fragment)},l(g){B(d.$$.fragment,g)},m(g,f){y(d,g,f),_=!0},p:E,i(g){_||($(d.$$.fragment,g),_=!0)},o(g){T(d.$$.fragment,g),_=!1},d(g){w(d,g)}}}function Ew(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function jw(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, BigBirdForMultipleChoice
import torch

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = BigBirdForMultipleChoice.from_pretrained("google/bigbird-roberta-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),B(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function Pw(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function Cw(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, BigBirdForTokenClassification
import torch

tokenizer = BigBirdTokenizer.from_pretrained("vumichien/token-classification-bigbird-roberta-base-random")
model = BigBirdForTokenClassification.from_pretrained("vumichien/token-classification-bigbird-roberta-base-random")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="pt"
)

with torch.no_grad():
    logits = model(**inputs).logits

predicted_token_class_ids = logits.argmax(-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t.item()] for t in predicted_token_class_ids[0]]
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;vumichien/token-classification-bigbird-roberta-base-random&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForTokenClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/token-classification-bigbird-roberta-base-random&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = logits.argmax(-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t.item()] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){d=n("p"),_=a("Example:"),g=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),B(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function Lw(x){let d,_;return d=new j({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.54</span>`}}),{c(){v(d.$$.fragment)},l(g){B(d.$$.fragment,g)},m(g,f){y(d,g,f),_=!0},p:E,i(g){_||($(d.$$.fragment,g),_=!0)},o(g){T(d.$$.fragment,g),_=!1},d(g){w(d,g)}}}function Aw(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function Ow(x){let d,_,g,f,b;return f=new j({props:{code:`import torch
from transformers import BigBirdTokenizer, BigBirdForQuestionAnswering
from datasets import load_dataset

tokenizer = BigBirdTokenizer.from_pretrained("abhinavkulkarni/bigbird-roberta-base-finetuned-squad")
model = BigBirdForQuestionAnswering.from_pretrained("abhinavkulkarni/bigbird-roberta-base-finetuned-squad")
squad_ds = load_dataset("squad_v2", split="train")
# select random article and question
LONG_ARTICLE = squad_ds[81514]["context"]
QUESTION = squad_ds[81514]["question"]
QUESTION

inputs = tokenizer(QUESTION, LONG_ARTICLE, return_tensors="pt")
# long article and question input
list(inputs["input_ids"].shape)

with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()
predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;abhinavkulkarni/bigbird-roberta-base-finetuned-squad&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;abhinavkulkarni/bigbird-roberta-base-finetuned-squad&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>squad_ds = load_dataset(<span class="hljs-string">&quot;squad_v2&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># select random article and question</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>LONG_ARTICLE = squad_ds[<span class="hljs-number">81514</span>][<span class="hljs-string">&quot;context&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>QUESTION = squad_ds[<span class="hljs-number">81514</span>][<span class="hljs-string">&quot;question&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>QUESTION
<span class="hljs-string">&#x27;During daytime how high can the temperatures reach?&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(QUESTION, LONG_ARTICLE, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># long article and question input</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">929</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;80 \xB0C (176 \xB0F) or more&#x27;</span>`}}),{c(){d=n("p"),_=a("Example:"),g=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),B(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function Iw(x){let d,_;return d=new j({props:{code:`target_start_index, target_end_index = torch.tensor([130]), torch.tensor([132])
outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">130</span>]), torch.tensor([<span class="hljs-number">132</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">7.63</span>`}}),{c(){v(d.$$.fragment)},l(g){B(d.$$.fragment,g)},m(g,f){y(d,g,f),_=!0},p:E,i(g){_||($(d.$$.fragment,g),_=!0)},o(g){T(d.$$.fragment,g),_=!1},d(g){w(d,g)}}}function Nw(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function Sw(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdModel

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdModel.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdModel.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),_=a("Example:"),g=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),B(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function Dw(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function Ww(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForPreTraining

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForPreTraining.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),B(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function Uw(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function Qw(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForCausalLM

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForCausalLM.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

# retrieve logts for next token
next_token_logits = outputs.logits[:, -1]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForCausalLM.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=n("p"),_=a("Example:"),g=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),B(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function Rw(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function Gw(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForMaskedLM

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForMaskedLM.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),B(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function Hw(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function Vw(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForSequenceClassification

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForSequenceClassification.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),B(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function Jw(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function Kw(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForMultipleChoice

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForMultipleChoice.from_pretrained("google/bigbird-roberta-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="jax", padding=True)
outputs = model(**{k: v[None, :] for k, v in encoding.items()})

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),B(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function Xw(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function Yw(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForTokenClassification

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForTokenClassification.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),B(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function Zw(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function ex(x){let d,_,g,f,b;return f=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForQuestionAnswering

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForQuestionAnswering.from_pretrained("google/bigbird-roberta-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),B(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(f,l,m),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){T(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(f,l)}}}function tx(x){let d,_,g,f,b,l,m,F,_m,bp,Je,Qt,Ni,Pn,bm,Si,km,kp,Rt,vm,Cn,Bm,ym,vp,Pa,$m,Bp,Ca,Di,Tm,yp,La,wm,$p,R,Ln,xm,An,Fm,qm,zm,ce,Mm,Wi,Em,jm,Ui,Pm,Cm,Qi,Lm,Am,Ri,Om,Im,Nm,Gi,Sm,Dm,Hi,Wm,Um,On,Qm,Vi,Rm,Gm,Hm,Aa,Vm,Ji,Jm,Tp,Se,Km,In,Xm,Ym,Nn,Zm,eg,wp,Ke,Gt,Ki,Sn,tg,Xi,og,xp,P,Dn,ng,Xe,sg,Oa,rg,ag,Wn,ig,lg,dg,Ye,cg,Ia,pg,hg,Na,mg,gg,fg,Ht,ug,Yi,Zi,el,tl,_g,bg,ol,nl,Un,Vt,Jt,sl,Qn,kg,rl,vg,Bg,al,yg,$g,il,ll,Rn,Kt,Xt,dl,Gn,Tg,cl,wg,xg,pl,Fg,qg,hl,ml,gl,Yt,Zt,fl,Hn,zg,ul,Mg,Fp,Ze,eo,_l,Vn,Eg,bl,jg,qp,C,Jn,Pg,Kn,Cg,Xn,Lg,Ag,Og,Yn,Ig,Sa,Ng,Sg,Dg,De,Zn,Wg,kl,Ug,Qg,es,Da,Rg,vl,Gg,Hg,Wa,Vg,Bl,Jg,Kg,to,ts,Xg,os,Yg,yl,Zg,ef,tf,oo,ns,of,et,nf,$l,sf,rf,Tl,af,lf,df,Ua,ss,zp,tt,no,wl,rs,cf,xl,pf,Mp,H,as,hf,ze,mf,Fl,gf,ff,is,uf,_f,Qa,bf,kf,vf,We,ls,Bf,ql,yf,$f,ds,Ra,Tf,zl,wf,xf,Ga,Ff,Ml,qf,zf,ue,cs,Mf,El,Ef,jf,so,Pf,jl,Cf,Lf,ro,ps,Af,hs,Of,Pl,If,Nf,Ep,ot,ao,Cl,ms,Sf,Ll,Df,jp,nt,gs,Wf,fs,Uf,Ha,Qf,Rf,Pp,st,io,Al,us,Gf,Ol,Hf,Cp,V,_s,Vf,bs,Jf,ks,Kf,Xf,Yf,vs,Zf,Bs,eu,tu,ou,Q,nu,Il,su,ru,Nl,au,iu,Sl,lu,du,Dl,cu,pu,Wl,hu,mu,Ul,gu,fu,uu,_e,ys,_u,rt,bu,Va,ku,vu,Ql,Bu,yu,$u,lo,Tu,co,Lp,at,po,Rl,$s,wu,Gl,xu,Ap,it,Ts,Fu,be,ws,qu,lt,zu,Ja,Mu,Eu,Hl,ju,Pu,Cu,ho,Lu,mo,Op,dt,go,Vl,xs,Au,Jl,Ou,Ip,Me,Fs,Iu,ct,Nu,Kl,Su,Du,qs,Wu,Uu,Qu,ke,zs,Ru,pt,Gu,Ka,Hu,Vu,Xl,Ju,Ku,Xu,fo,Yu,uo,Np,ht,_o,Yl,Ms,Zu,Zl,e_,Sp,Ee,Es,t_,mt,o_,ed,n_,s_,js,r_,a_,i_,K,Ps,l_,gt,d_,Xa,c_,p_,td,h_,m_,g_,bo,f_,ko,u_,vo,Dp,ft,Bo,od,Cs,__,nd,b_,Wp,pe,Ls,k_,sd,v_,B_,As,y_,Os,$_,T_,w_,X,Is,x_,ut,F_,Ya,q_,z_,rd,M_,E_,j_,yo,P_,$o,C_,To,Up,_t,wo,ad,Ns,L_,id,A_,Qp,he,Ss,O_,ld,I_,N_,Ds,S_,Ws,D_,W_,U_,ve,Us,Q_,bt,R_,Za,G_,H_,dd,V_,J_,K_,xo,X_,Fo,Rp,kt,qo,cd,Qs,Y_,pd,Z_,Gp,me,Rs,eb,hd,tb,ob,Gs,nb,Hs,sb,rb,ab,Y,Vs,ib,vt,lb,ei,db,cb,md,pb,hb,mb,zo,gb,Mo,fb,Eo,Hp,Bt,jo,gd,Js,ub,fd,_b,Vp,ge,Ks,bb,yt,kb,ud,vb,Bb,_d,yb,$b,Tb,Xs,wb,Ys,xb,Fb,qb,Z,Zs,zb,$t,Mb,ti,Eb,jb,bd,Pb,Cb,Lb,Po,Ab,Co,Ob,Lo,Jp,Tt,Ao,kd,er,Ib,vd,Nb,Kp,L,tr,Sb,Bd,Db,Wb,or,Ub,oi,Qb,Rb,Gb,nr,Hb,sr,Vb,Jb,Kb,yd,Xb,Yb,je,$d,rr,Zb,ek,Td,ar,tk,ok,wd,ir,nk,sk,xd,lr,rk,ak,Be,dr,ik,wt,lk,Fd,dk,ck,qd,pk,hk,mk,Oo,gk,Io,Xp,xt,No,zd,cr,fk,Md,uk,Yp,A,pr,_k,Ft,bk,Ed,kk,vk,jd,Bk,yk,$k,hr,Tk,ni,wk,xk,Fk,mr,qk,gr,zk,Mk,Ek,Pd,jk,Pk,Pe,Cd,fr,Ck,Lk,Ld,ur,Ak,Ok,Ad,_r,Ik,Nk,Od,br,Sk,Dk,ye,kr,Wk,qt,Uk,Id,Qk,Rk,Nd,Gk,Hk,Vk,So,Jk,Do,Zp,zt,Wo,Sd,vr,Kk,Dd,Xk,eh,O,Br,Yk,Wd,Zk,ev,yr,tv,si,ov,nv,sv,$r,rv,Tr,av,iv,lv,Ud,dv,cv,Ce,Qd,wr,pv,hv,Rd,xr,mv,gv,Gd,Fr,fv,uv,Hd,qr,_v,bv,$e,zr,kv,Mt,vv,Vd,Bv,yv,Jd,$v,Tv,wv,Uo,xv,Qo,th,Et,Ro,Kd,Mr,Fv,Xd,qv,oh,I,Er,zv,jr,Mv,Yd,Ev,jv,Pv,Pr,Cv,ri,Lv,Av,Ov,Cr,Iv,Lr,Nv,Sv,Dv,Zd,Wv,Uv,Le,ec,Ar,Qv,Rv,tc,Or,Gv,Hv,oc,Ir,Vv,Jv,nc,Nr,Kv,Xv,Te,Sr,Yv,jt,Zv,sc,eB,tB,rc,oB,nB,sB,Go,rB,Ho,nh,Pt,Vo,ac,Dr,aB,ic,iB,sh,N,Wr,lB,lc,dB,cB,Ur,pB,ai,hB,mB,gB,Qr,fB,Rr,uB,_B,bB,dc,kB,vB,Ae,cc,Gr,BB,yB,pc,Hr,$B,TB,hc,Vr,wB,xB,mc,Jr,FB,qB,we,Kr,zB,Ct,MB,gc,EB,jB,fc,PB,CB,LB,Jo,AB,Ko,rh,Lt,Xo,uc,Xr,OB,_c,IB,ah,S,Yr,NB,bc,SB,DB,Zr,WB,ii,UB,QB,RB,ea,GB,ta,HB,VB,JB,kc,KB,XB,Oe,vc,oa,YB,ZB,Bc,na,e0,t0,yc,sa,o0,n0,$c,ra,s0,r0,xe,aa,a0,At,i0,Tc,l0,d0,wc,c0,p0,h0,Yo,m0,Zo,ih,Ot,en,xc,ia,g0,Fc,f0,lh,D,la,u0,qc,_0,b0,da,k0,li,v0,B0,y0,ca,$0,pa,T0,w0,x0,zc,F0,q0,Ie,Mc,ha,z0,M0,Ec,ma,E0,j0,jc,ga,P0,C0,Pc,fa,L0,A0,Fe,ua,O0,It,I0,Cc,N0,S0,Lc,D0,W0,U0,tn,Q0,on,dh,Nt,nn,Ac,_a,R0,Oc,G0,ch,W,ba,H0,St,V0,Ic,J0,K0,Nc,X0,Y0,Z0,ka,ey,di,ty,oy,ny,va,sy,Ba,ry,ay,iy,Sc,ly,dy,Ne,Dc,ya,cy,py,Wc,$a,hy,my,Uc,Ta,gy,fy,Qc,wa,uy,_y,qe,xa,by,Dt,ky,ci,vy,By,Rc,yy,$y,Ty,sn,wy,rn,ph;return l=new z({}),Pn=new z({}),Sn=new z({}),Dn=new q({props:{name:"class transformers.BigBirdConfig",anchor:"transformers.BigBirdConfig",parameters:[{name:"vocab_size",val:" = 50358"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 4096"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"sep_token_id",val:" = 66"},{name:"attention_type",val:" = 'block_sparse'"},{name:"use_bias",val:" = True"},{name:"rescale_embeddings",val:" = False"},{name:"block_size",val:" = 64"},{name:"num_random_blocks",val:" = 3"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50358) &#x2014;
Vocabulary size of the BigBird model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdModel">BigBirdModel</a>.`,name:"vocab_size"},{anchor:"transformers.BigBirdConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.BigBirdConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.BigBirdConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.BigBirdConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.BigBirdConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu_new&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.BigBirdConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.BigBirdConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.BigBirdConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 1024 or 2048 or 4096).`,name:"max_position_embeddings"},{anchor:"transformers.BigBirdConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdModel">BigBirdModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.BigBirdConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BigBirdConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.BigBirdConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.BigBirdConfig.attention_type",description:`<strong>attention_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;block_sparse&quot;</code>) &#x2014;
Whether to use block sparse attention (with n complexity) as introduced in paper or original attention
layer (with n^2 complexity). Possible values are <code>&quot;original_full&quot;</code> and <code>&quot;block_sparse&quot;</code>.`,name:"attention_type"},{anchor:"transformers.BigBirdConfig.use_bias",description:`<strong>use_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use bias in query, key, value.`,name:"use_bias"},{anchor:"transformers.BigBirdConfig.rescale_embeddings",description:`<strong>rescale_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to rescale embeddings with (hidden_size ** 0.5).`,name:"rescale_embeddings"},{anchor:"transformers.BigBirdConfig.block_size",description:`<strong>block_size</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Size of each block. Useful only when <code>attention_type == &quot;block_sparse&quot;</code>.`,name:"block_size"},{anchor:"transformers.BigBirdConfig.num_random_blocks",description:`<strong>num_random_blocks</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
Each query is going to attend these many number of random blocks. Useful only when <code>attention_type == &quot;block_sparse&quot;</code>.`,name:"num_random_blocks"},{anchor:"transformers.BigBirdConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/configuration_big_bird.py#L34"}}),Ht=new M({props:{anchor:"transformers.BigBirdConfig.example",$$slots:{default:[_w]},$$scope:{ctx:x}}}),Qn=new z({}),Gn=new z({}),Hn=new z({}),Vn=new z({}),Jn=new q({props:{name:"class transformers.BigBirdTokenizer",anchor:"transformers.BigBirdTokenizer",parameters:[{name:"vocab_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.BigBirdTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.BigBirdTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The begin of sequence token.`,name:"bos_token"},{anchor:"transformers.BigBirdTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BigBirdTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BigBirdTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BigBirdTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BigBirdTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BigBirdTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/tokenization_big_bird.py#L51"}}),Zn=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BigBirdTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/tokenization_big_bird.py#L205",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ts=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/tokenization_big_bird.py#L230",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ns=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BigBirdTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/tokenization_big_bird.py#L257",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ss=new q({props:{name:"save_vocabulary",anchor:"transformers.BigBirdTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/tokenization_big_bird.py#L188"}}),rs=new z({}),as=new q({props:{name:"class transformers.BigBirdTokenizerFast",anchor:"transformers.BigBirdTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.BigBirdTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BigBirdTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token. .. note:: When building a sequence using special tokens, this is not the token
that is used for the end of sequence. The token used is the <code>sep_token</code>.`,name:"eos_token"},{anchor:"transformers.BigBirdTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BigBirdTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BigBirdTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BigBirdTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BigBirdTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L68"}}),ls=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BigBirdTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L155",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),cs=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L211",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),so=new M({props:{anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[bw]},$$scope:{ctx:x}}}),ps=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Set to True if the token list is already formatted with special tokens for the model`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L180",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ms=new z({}),gs=new q({props:{name:"class transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput",anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.`,name:"loss"},{anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_big_bird.py#L1856"}}),us=new z({}),_s=new q({props:{name:"class transformers.BigBirdModel",anchor:"transformers.BigBirdModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.BigBirdModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_big_bird.py#L1928"}}),ys=new q({props:{name:"forward",anchor:"transformers.BigBirdModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BigBirdModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.BigBirdModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BigBirdModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_big_bird.py#L1985",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),lo=new G({props:{$$slots:{default:[kw]},$$scope:{ctx:x}}}),co=new M({props:{anchor:"transformers.BigBirdModel.forward.example",$$slots:{default:[vw]},$$scope:{ctx:x}}}),$s=new z({}),Ts=new q({props:{name:"class transformers.BigBirdForPreTraining",anchor:"transformers.BigBirdForPreTraining",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_big_bird.py#L2268"}}),ws=new q({props:{name:"forward",anchor:"transformers.BigBirdForPreTraining.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.FloatTensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdForPreTraining.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.BigBirdForPreTraining.forward.next_sentence_label",description:`<strong>next_sentence_label</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. If specified, nsp loss will be
added to masked_lm loss. Input should be a sequence pair (see <code>input_ids</code> docstring) Indices should be in
<code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"next_sentence_label"},{anchor:"transformers.BigBirdForPreTraining.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_big_bird.py#L2284",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"
>transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.</p>
</li>
<li>
<p><strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>seq_relationship_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"
>transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ho=new G({props:{$$slots:{default:[Bw]},$$scope:{ctx:x}}}),mo=new M({props:{anchor:"transformers.BigBirdForPreTraining.forward.example",$$slots:{default:[yw]},$$scope:{ctx:x}}}),xs=new z({}),Fs=new q({props:{name:"class transformers.BigBirdForCausalLM",anchor:"transformers.BigBirdForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_big_bird.py#L2514"}}),zs=new q({props:{name:"forward",anchor:"transformers.BigBirdForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BigBirdForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.BigBirdForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BigBirdForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.BigBirdForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_big_bird.py#L2536",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key,
value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fo=new G({props:{$$slots:{default:[$w]},$$scope:{ctx:x}}}),uo=new M({props:{anchor:"transformers.BigBirdForCausalLM.forward.example",$$slots:{default:[Tw]},$$scope:{ctx:x}}}),Ms=new z({}),Es=new q({props:{name:"class transformers.BigBirdForMaskedLM",anchor:"transformers.BigBirdForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_big_bird.py#L2372"}}),Ps=new q({props:{name:"forward",anchor:"transformers.BigBirdForMaskedLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_big_bird.py#L2394",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bo=new G({props:{$$slots:{default:[ww]},$$scope:{ctx:x}}}),ko=new M({props:{anchor:"transformers.BigBirdForMaskedLM.forward.example",$$slots:{default:[xw]},$$scope:{ctx:x}}}),vo=new M({props:{anchor:"transformers.BigBirdForMaskedLM.forward.example-2",$$slots:{default:[Fw]},$$scope:{ctx:x}}}),Cs=new z({}),Ls=new q({props:{name:"class transformers.BigBirdForSequenceClassification",anchor:"transformers.BigBirdForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_big_bird.py#L2678"}}),Is=new q({props:{name:"forward",anchor:"transformers.BigBirdForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_big_bird.py#L2689",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yo=new G({props:{$$slots:{default:[qw]},$$scope:{ctx:x}}}),$o=new M({props:{anchor:"transformers.BigBirdForSequenceClassification.forward.example",$$slots:{default:[zw]},$$scope:{ctx:x}}}),To=new M({props:{anchor:"transformers.BigBirdForSequenceClassification.forward.example-2",$$slots:{default:[Mw]},$$scope:{ctx:x}}}),Ns=new z({}),Ss=new q({props:{name:"class transformers.BigBirdForMultipleChoice",anchor:"transformers.BigBirdForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_big_bird.py#L2806"}}),Us=new q({props:{name:"forward",anchor:"transformers.BigBirdForMultipleChoice.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_big_bird.py#L2817",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xo=new G({props:{$$slots:{default:[Ew]},$$scope:{ctx:x}}}),Fo=new M({props:{anchor:"transformers.BigBirdForMultipleChoice.forward.example",$$slots:{default:[jw]},$$scope:{ctx:x}}}),Qs=new z({}),Rs=new q({props:{name:"class transformers.BigBirdForTokenClassification",anchor:"transformers.BigBirdForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_big_bird.py#L2900"}}),Vs=new q({props:{name:"forward",anchor:"transformers.BigBirdForTokenClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_big_bird.py#L2915",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zo=new G({props:{$$slots:{default:[Pw]},$$scope:{ctx:x}}}),Mo=new M({props:{anchor:"transformers.BigBirdForTokenClassification.forward.example",$$slots:{default:[Cw]},$$scope:{ctx:x}}}),Eo=new M({props:{anchor:"transformers.BigBirdForTokenClassification.forward.example-2",$$slots:{default:[Lw]},$$scope:{ctx:x}}}),Js=new z({}),Ks=new q({props:{name:"class transformers.BigBirdForQuestionAnswering",anchor:"transformers.BigBirdForQuestionAnswering",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = False"}],parametersDescription:[{anchor:"transformers.BigBirdForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_big_bird.py#L3005"}}),Zs=new q({props:{name:"forward",anchor:"transformers.BigBirdForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"question_lengths",val:" = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_big_bird.py#L3019",returnDescription:`
<p>A <code>transformers.models.big_bird.modeling_big_bird.BigBirdForQuestionAnsweringModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 1)</code>) \u2014 pooler output from BigBigModel</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.big_bird.modeling_big_bird.BigBirdForQuestionAnsweringModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Po=new G({props:{$$slots:{default:[Aw]},$$scope:{ctx:x}}}),Co=new M({props:{anchor:"transformers.BigBirdForQuestionAnswering.forward.example",$$slots:{default:[Ow]},$$scope:{ctx:x}}}),Lo=new M({props:{anchor:"transformers.BigBirdForQuestionAnswering.forward.example-2",$$slots:{default:[Iw]},$$scope:{ctx:x}}}),er=new z({}),tr=new q({props:{name:"class transformers.FlaxBigBirdModel",anchor:"transformers.FlaxBigBirdModel",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1802"}}),dr=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdModel.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1635",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oo=new G({props:{$$slots:{default:[Nw]},$$scope:{ctx:x}}}),Io=new M({props:{anchor:"transformers.FlaxBigBirdModel.__call__.example",$$slots:{default:[Sw]},$$scope:{ctx:x}}}),cr=new z({}),pr=new q({props:{name:"class transformers.FlaxBigBirdForPreTraining",anchor:"transformers.FlaxBigBirdForPreTraining",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1877"}}),kr=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1635",returnDescription:`
<p>A <code>transformers.models.big_bird.modeling_flax_big_bird.FlaxBigBirdForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>prediction_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>seq_relationship_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.big_bird.modeling_flax_big_bird.FlaxBigBirdForPreTrainingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),So=new G({props:{$$slots:{default:[Dw]},$$scope:{ctx:x}}}),Do=new M({props:{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.example",$$slots:{default:[Ww]},$$scope:{ctx:x}}}),vr=new z({}),Br=new q({props:{name:"class transformers.FlaxBigBirdForCausalLM",anchor:"transformers.FlaxBigBirdForCausalLM",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2481"}}),zr=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdForCausalLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdForCausalLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdForCausalLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdForCausalLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdForCausalLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1635",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key, value
states of the self-attention and the cross-attention layers if model is used in encoder-decoder setting.
Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Uo=new G({props:{$$slots:{default:[Uw]},$$scope:{ctx:x}}}),Qo=new M({props:{anchor:"transformers.FlaxBigBirdForCausalLM.__call__.example",$$slots:{default:[Qw]},$$scope:{ctx:x}}}),Mr=new z({}),Er=new q({props:{name:"class transformers.FlaxBigBirdForMaskedLM",anchor:"transformers.FlaxBigBirdForMaskedLM",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1964"}}),Sr=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1635",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Go=new G({props:{$$slots:{default:[Rw]},$$scope:{ctx:x}}}),Ho=new M({props:{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.example",$$slots:{default:[Gw]},$$scope:{ctx:x}}}),Dr=new z({}),Wr=new q({props:{name:"class transformers.FlaxBigBirdForSequenceClassification",anchor:"transformers.FlaxBigBirdForSequenceClassification",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2053"}}),Kr=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1635",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jo=new G({props:{$$slots:{default:[Hw]},$$scope:{ctx:x}}}),Ko=new M({props:{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.example",$$slots:{default:[Vw]},$$scope:{ctx:x}}}),Xr=new z({}),Yr=new q({props:{name:"class transformers.FlaxBigBirdForMultipleChoice",anchor:"transformers.FlaxBigBirdForMultipleChoice",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2130"}}),aa=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1635",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yo=new G({props:{$$slots:{default:[Jw]},$$scope:{ctx:x}}}),Zo=new M({props:{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.example",$$slots:{default:[Kw]},$$scope:{ctx:x}}}),ia=new z({}),la=new q({props:{name:"class transformers.FlaxBigBirdForTokenClassification",anchor:"transformers.FlaxBigBirdForTokenClassification",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2223"}}),ua=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1635",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tn=new G({props:{$$slots:{default:[Xw]},$$scope:{ctx:x}}}),on=new M({props:{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.example",$$slots:{default:[Yw]},$$scope:{ctx:x}}}),_a=new z({}),ba=new q({props:{name:"class transformers.FlaxBigBirdForQuestionAnswering",anchor:"transformers.FlaxBigBirdForQuestionAnswering",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2322"}}),xa=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"question_lengths",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2325",returnDescription:`
<p>A <code>transformers.models.big_bird.modeling_flax_big_bird.FlaxBigBirdForQuestionAnsweringModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>start_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>pooled_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 pooled_output returned by FlaxBigBirdModel.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.big_bird.modeling_flax_big_bird.FlaxBigBirdForQuestionAnsweringModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),sn=new G({props:{$$slots:{default:[Zw]},$$scope:{ctx:x}}}),rn=new M({props:{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.example",$$slots:{default:[ex]},$$scope:{ctx:x}}}),{c(){d=n("meta"),_=p(),g=n("h1"),f=n("a"),b=n("span"),v(l.$$.fragment),m=p(),F=n("span"),_m=a("BigBird"),bp=p(),Je=n("h2"),Qt=n("a"),Ni=n("span"),v(Pn.$$.fragment),bm=p(),Si=n("span"),km=a("Overview"),kp=p(),Rt=n("p"),vm=a("The BigBird model was proposed in "),Cn=n("a"),Bm=a("Big Bird: Transformers for Longer Sequences"),ym=a(` by
Zaheer, Manzil and Guruganesh, Guru and Dubey, Kumar Avinava and Ainslie, Joshua and Alberti, Chris and Ontanon,
Santiago and Pham, Philip and Ravula, Anirudh and Wang, Qifan and Yang, Li and others. BigBird, is a sparse-attention
based transformer which extends Transformer based models, such as BERT to much longer sequences. In addition to sparse
attention, BigBird also applies global attention as well as random attention to the input sequence. Theoretically, it
has been shown that applying sparse, global, and random attention approximates full attention, while being
computationally much more efficient for longer sequences. As a consequence of the capability to handle longer context,
BigBird has shown improved performance on various long document NLP tasks, such as question answering and
summarization, compared to BERT or RoBERTa.`),vp=p(),Pa=n("p"),$m=a("The abstract from the paper is the following:"),Bp=p(),Ca=n("p"),Di=n("em"),Tm=a(`Transformers-based models, such as BERT, have been one of the most successful deep learning models for NLP.
Unfortunately, one of their core limitations is the quadratic dependency (mainly in terms of memory) on the sequence
length due to their full attention mechanism. To remedy this, we propose, BigBird, a sparse attention mechanism that
reduces this quadratic dependency to linear. We show that BigBird is a universal approximator of sequence functions and
is Turing complete, thereby preserving these properties of the quadratic, full attention model. Along the way, our
theoretical analysis reveals some of the benefits of having O(1) global tokens (such as CLS), that attend to the entire
sequence as part of the sparse attention mechanism. The proposed sparse attention can handle sequences of length up to
8x of what was previously possible using similar hardware. As a consequence of the capability to handle longer context,
BigBird drastically improves performance on various NLP tasks such as question answering and summarization. We also
propose novel applications to genomics data.`),yp=p(),La=n("p"),wm=a("Tips:"),$p=p(),R=n("ul"),Ln=n("li"),xm=a("For an in-detail explanation on how BigBird\u2019s attention works, see "),An=n("a"),Fm=a("this blog post"),qm=a("."),zm=p(),ce=n("li"),Mm=a("BigBird comes with 2 implementations: "),Wi=n("strong"),Em=a("original_full"),jm=a(" & "),Ui=n("strong"),Pm=a("block_sparse"),Cm=a(`. For the sequence length < 1024, using
`),Qi=n("strong"),Lm=a("original_full"),Am=a(" is advised as there is no benefit in using "),Ri=n("strong"),Om=a("block_sparse"),Im=a(" attention."),Nm=p(),Gi=n("li"),Sm=a("The code currently uses window size of 3 blocks and 2 global blocks."),Dm=p(),Hi=n("li"),Wm=a("Sequence length must be divisible by block size."),Um=p(),On=n("li"),Qm=a("Current implementation supports only "),Vi=n("strong"),Rm=a("ITC"),Gm=a("."),Hm=p(),Aa=n("li"),Vm=a("Current implementation doesn\u2019t support "),Ji=n("strong"),Jm=a("num_random_blocks = 0"),Tp=p(),Se=n("p"),Km=a("This model was contributed by "),In=n("a"),Xm=a("vasudevgupta"),Ym=a(`. The original code can be found
`),Nn=n("a"),Zm=a("here"),eg=a("."),wp=p(),Ke=n("h2"),Gt=n("a"),Ki=n("span"),v(Sn.$$.fragment),tg=p(),Xi=n("span"),og=a("BigBirdConfig"),xp=p(),P=n("div"),v(Dn.$$.fragment),ng=p(),Xe=n("p"),sg=a("This is the configuration class to store the configuration of a "),Oa=n("a"),rg=a("BigBirdModel"),ag=a(`. It is used to instantiate an
BigBird model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the BigBird
`),Wn=n("a"),ig=a("google/bigbird-roberta-base"),lg=a(" architecture."),dg=p(),Ye=n("p"),cg=a("Configuration objects inherit from "),Ia=n("a"),pg=a("PretrainedConfig"),hg=a(` and can be used to control the model outputs. Read the
documentation from `),Na=n("a"),mg=a("PretrainedConfig"),gg=a(" for more information."),fg=p(),v(Ht.$$.fragment),ug=p(),Yi=n("blockquote"),Zi=n("blockquote"),el=n("blockquote"),tl=n("p"),_g=a("from transformers import BigBirdModel, BigBirdConfig"),bg=p(),ol=n("blockquote"),nl=n("blockquote"),Un=n("blockquote"),Vt=n("h1"),Jt=n("a"),sl=n("span"),v(Qn.$$.fragment),kg=p(),rl=n("span"),vg=a("Initializing a BigBird google/bigbird-roberta-base style configuration >>> configuration ="),Bg=p(),al=n("p"),yg=a("BigBirdConfig()"),$g=p(),il=n("blockquote"),ll=n("blockquote"),Rn=n("blockquote"),Kt=n("h1"),Xt=n("a"),dl=n("span"),v(Gn.$$.fragment),Tg=p(),cl=n("span"),wg=a("Initializing a model from the google/bigbird-roberta-base style configuration >>> model ="),xg=p(),pl=n("p"),Fg=a("BigBirdModel(configuration)"),qg=p(),hl=n("blockquote"),ml=n("blockquote"),gl=n("blockquote"),Yt=n("h1"),Zt=n("a"),fl=n("span"),v(Hn.$$.fragment),zg=p(),ul=n("span"),Mg=a("Accessing the model configuration >>> configuration = model.config"),Fp=p(),Ze=n("h2"),eo=n("a"),_l=n("span"),v(Vn.$$.fragment),Eg=p(),bl=n("span"),jg=a("BigBirdTokenizer"),qp=p(),C=n("div"),v(Jn.$$.fragment),Pg=p(),Kn=n("p"),Cg=a("Construct a BigBird tokenizer. Based on "),Xn=n("a"),Lg=a("SentencePiece"),Ag=a("."),Og=p(),Yn=n("p"),Ig=a("This tokenizer inherits from "),Sa=n("a"),Ng=a("PreTrainedTokenizer"),Sg=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Dg=p(),De=n("div"),v(Zn.$$.fragment),Wg=p(),kl=n("p"),Ug=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Big Bird sequence has the following format:`),Qg=p(),es=n("ul"),Da=n("li"),Rg=a("single sequence: "),vl=n("code"),Gg=a("[CLS] X [SEP]"),Hg=p(),Wa=n("li"),Vg=a("pair of sequences: "),Bl=n("code"),Jg=a("[CLS] A [SEP] B [SEP]"),Kg=p(),to=n("div"),v(ts.$$.fragment),Xg=p(),os=n("p"),Yg=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),yl=n("code"),Zg=a("prepare_for_model"),ef=a(" method."),tf=p(),oo=n("div"),v(ns.$$.fragment),of=p(),et=n("p"),nf=a(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format: :: 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 | first sequence | second
sequence | If `),$l=n("code"),sf=a("token_ids_1"),rf=a(" is "),Tl=n("code"),af=a("None"),lf=a(", this method only returns the first portion of the mask (0s)."),df=p(),Ua=n("div"),v(ss.$$.fragment),zp=p(),tt=n("h2"),no=n("a"),wl=n("span"),v(rs.$$.fragment),cf=p(),xl=n("span"),pf=a("BigBirdTokenizerFast"),Mp=p(),H=n("div"),v(as.$$.fragment),hf=p(),ze=n("p"),mf=a("Construct a \u201Cfast\u201D BigBird tokenizer (backed by HuggingFace\u2019s "),Fl=n("em"),gf=a("tokenizers"),ff=a(` library). Based on
`),is=n("a"),uf=a("Unigram"),_f=a(`. This
tokenizer inherits from `),Qa=n("a"),bf=a("PreTrainedTokenizerFast"),kf=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),vf=p(),We=n("div"),v(ls.$$.fragment),Bf=p(),ql=n("p"),yf=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An BigBird sequence has the following format:`),$f=p(),ds=n("ul"),Ra=n("li"),Tf=a("single sequence: "),zl=n("code"),wf=a("[CLS] X [SEP]"),xf=p(),Ga=n("li"),Ff=a("pair of sequences: "),Ml=n("code"),qf=a("[CLS] A [SEP] B [SEP]"),zf=p(),ue=n("div"),v(cs.$$.fragment),Mf=p(),El=n("p"),Ef=a("Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),jf=p(),v(so.$$.fragment),Pf=p(),jl=n("p"),Cf=a("if token_ids_1 is None, only returns the first portion of the mask (0s)."),Lf=p(),ro=n("div"),v(ps.$$.fragment),Af=p(),hs=n("p"),Of=a(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Pl=n("code"),If=a("prepare_for_model"),Nf=a(" method."),Ep=p(),ot=n("h2"),ao=n("a"),Cl=n("span"),v(ms.$$.fragment),Sf=p(),Ll=n("span"),Df=a("BigBird specific outputs"),jp=p(),nt=n("div"),v(gs.$$.fragment),Wf=p(),fs=n("p"),Uf=a("Output type of "),Ha=n("a"),Qf=a("BigBirdForPreTraining"),Rf=a("."),Pp=p(),st=n("h2"),io=n("a"),Al=n("span"),v(us.$$.fragment),Gf=p(),Ol=n("span"),Hf=a("BigBirdModel"),Cp=p(),V=n("div"),v(_s.$$.fragment),Vf=p(),bs=n("p"),Jf=a(`The bare BigBird Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ks=n("a"),Kf=a("torch.nn.Module"),Xf=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Yf=p(),vs=n("p"),Zf=a(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Bs=n("a"),eu=a(`Attention is
all you need`),tu=a(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),ou=p(),Q=n("p"),nu=a("To behave as an decoder the model needs to be initialized with the "),Il=n("code"),su=a("is_decoder"),ru=a(` argument of the configuration set
to `),Nl=n("code"),au=a("True"),iu=a(". To be used in a Seq2Seq model, the model needs to initialized with both "),Sl=n("code"),lu=a("is_decoder"),du=a(` argument and
`),Dl=n("code"),cu=a("add_cross_attention"),pu=a(" set to "),Wl=n("code"),hu=a("True"),mu=a("; an "),Ul=n("code"),gu=a("encoder_hidden_states"),fu=a(" is then expected as an input to the forward pass."),uu=p(),_e=n("div"),v(ys.$$.fragment),_u=p(),rt=n("p"),bu=a("The "),Va=n("a"),ku=a("BigBirdModel"),vu=a(" forward method, overrides the "),Ql=n("code"),Bu=a("__call__"),yu=a(" special method."),$u=p(),v(lo.$$.fragment),Tu=p(),v(co.$$.fragment),Lp=p(),at=n("h2"),po=n("a"),Rl=n("span"),v($s.$$.fragment),wu=p(),Gl=n("span"),xu=a("BigBirdForPreTraining"),Ap=p(),it=n("div"),v(Ts.$$.fragment),Fu=p(),be=n("div"),v(ws.$$.fragment),qu=p(),lt=n("p"),zu=a("The "),Ja=n("a"),Mu=a("BigBirdForPreTraining"),Eu=a(" forward method, overrides the "),Hl=n("code"),ju=a("__call__"),Pu=a(" special method."),Cu=p(),v(ho.$$.fragment),Lu=p(),v(mo.$$.fragment),Op=p(),dt=n("h2"),go=n("a"),Vl=n("span"),v(xs.$$.fragment),Au=p(),Jl=n("span"),Ou=a("BigBirdForCausalLM"),Ip=p(),Me=n("div"),v(Fs.$$.fragment),Iu=p(),ct=n("p"),Nu=a("BigBird Model with a "),Kl=n("code"),Su=a("language modeling"),Du=a(` head on top for CLM fine-tuning.
This model is a PyTorch `),qs=n("a"),Wu=a("torch.nn.Module"),Uu=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qu=p(),ke=n("div"),v(zs.$$.fragment),Ru=p(),pt=n("p"),Gu=a("The "),Ka=n("a"),Hu=a("BigBirdForCausalLM"),Vu=a(" forward method, overrides the "),Xl=n("code"),Ju=a("__call__"),Ku=a(" special method."),Xu=p(),v(fo.$$.fragment),Yu=p(),v(uo.$$.fragment),Np=p(),ht=n("h2"),_o=n("a"),Yl=n("span"),v(Ms.$$.fragment),Zu=p(),Zl=n("span"),e_=a("BigBirdForMaskedLM"),Sp=p(),Ee=n("div"),v(Es.$$.fragment),t_=p(),mt=n("p"),o_=a("BigBird Model with a "),ed=n("code"),n_=a("language modeling"),s_=a(` head on top.
This model is a PyTorch `),js=n("a"),r_=a("torch.nn.Module"),a_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),i_=p(),K=n("div"),v(Ps.$$.fragment),l_=p(),gt=n("p"),d_=a("The "),Xa=n("a"),c_=a("BigBirdForMaskedLM"),p_=a(" forward method, overrides the "),td=n("code"),h_=a("__call__"),m_=a(" special method."),g_=p(),v(bo.$$.fragment),f_=p(),v(ko.$$.fragment),u_=p(),v(vo.$$.fragment),Dp=p(),ft=n("h2"),Bo=n("a"),od=n("span"),v(Cs.$$.fragment),__=p(),nd=n("span"),b_=a("BigBirdForSequenceClassification"),Wp=p(),pe=n("div"),v(Ls.$$.fragment),k_=p(),sd=n("p"),v_=a(`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),B_=p(),As=n("p"),y_=a("This model is a PyTorch "),Os=n("a"),$_=a("torch.nn.Module"),T_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),w_=p(),X=n("div"),v(Is.$$.fragment),x_=p(),ut=n("p"),F_=a("The "),Ya=n("a"),q_=a("BigBirdForSequenceClassification"),z_=a(" forward method, overrides the "),rd=n("code"),M_=a("__call__"),E_=a(" special method."),j_=p(),v(yo.$$.fragment),P_=p(),v($o.$$.fragment),C_=p(),v(To.$$.fragment),Up=p(),_t=n("h2"),wo=n("a"),ad=n("span"),v(Ns.$$.fragment),L_=p(),id=n("span"),A_=a("BigBirdForMultipleChoice"),Qp=p(),he=n("div"),v(Ss.$$.fragment),O_=p(),ld=n("p"),I_=a(`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),N_=p(),Ds=n("p"),S_=a("This model is a PyTorch "),Ws=n("a"),D_=a("torch.nn.Module"),W_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),U_=p(),ve=n("div"),v(Us.$$.fragment),Q_=p(),bt=n("p"),R_=a("The "),Za=n("a"),G_=a("BigBirdForMultipleChoice"),H_=a(" forward method, overrides the "),dd=n("code"),V_=a("__call__"),J_=a(" special method."),K_=p(),v(xo.$$.fragment),X_=p(),v(Fo.$$.fragment),Rp=p(),kt=n("h2"),qo=n("a"),cd=n("span"),v(Qs.$$.fragment),Y_=p(),pd=n("span"),Z_=a("BigBirdForTokenClassification"),Gp=p(),me=n("div"),v(Rs.$$.fragment),eb=p(),hd=n("p"),tb=a(`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ob=p(),Gs=n("p"),nb=a("This model is a PyTorch "),Hs=n("a"),sb=a("torch.nn.Module"),rb=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ab=p(),Y=n("div"),v(Vs.$$.fragment),ib=p(),vt=n("p"),lb=a("The "),ei=n("a"),db=a("BigBirdForTokenClassification"),cb=a(" forward method, overrides the "),md=n("code"),pb=a("__call__"),hb=a(" special method."),mb=p(),v(zo.$$.fragment),gb=p(),v(Mo.$$.fragment),fb=p(),v(Eo.$$.fragment),Hp=p(),Bt=n("h2"),jo=n("a"),gd=n("span"),v(Js.$$.fragment),ub=p(),fd=n("span"),_b=a("BigBirdForQuestionAnswering"),Vp=p(),ge=n("div"),v(Ks.$$.fragment),bb=p(),yt=n("p"),kb=a(`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ud=n("code"),vb=a("span start logits"),Bb=a(" and "),_d=n("code"),yb=a("span end logits"),$b=a(")."),Tb=p(),Xs=n("p"),wb=a("This model is a PyTorch "),Ys=n("a"),xb=a("torch.nn.Module"),Fb=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),qb=p(),Z=n("div"),v(Zs.$$.fragment),zb=p(),$t=n("p"),Mb=a("The "),ti=n("a"),Eb=a("BigBirdForQuestionAnswering"),jb=a(" forward method, overrides the "),bd=n("code"),Pb=a("__call__"),Cb=a(" special method."),Lb=p(),v(Po.$$.fragment),Ab=p(),v(Co.$$.fragment),Ob=p(),v(Lo.$$.fragment),Jp=p(),Tt=n("h2"),Ao=n("a"),kd=n("span"),v(er.$$.fragment),Ib=p(),vd=n("span"),Nb=a("FlaxBigBirdModel"),Kp=p(),L=n("div"),v(tr.$$.fragment),Sb=p(),Bd=n("p"),Db=a("The bare BigBird Model transformer outputting raw hidden-states without any specific head on top."),Wb=p(),or=n("p"),Ub=a("This model inherits from "),oi=n("a"),Qb=a("FlaxPreTrainedModel"),Rb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Gb=p(),nr=n("p"),Hb=a("This model is also a Flax Linen "),sr=n("a"),Vb=a("flax.linen.Module"),Jb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Kb=p(),yd=n("p"),Xb=a("Finally, this model supports inherent JAX features such as:"),Yb=p(),je=n("ul"),$d=n("li"),rr=n("a"),Zb=a("Just-In-Time (JIT) compilation"),ek=p(),Td=n("li"),ar=n("a"),tk=a("Automatic Differentiation"),ok=p(),wd=n("li"),ir=n("a"),nk=a("Vectorization"),sk=p(),xd=n("li"),lr=n("a"),rk=a("Parallelization"),ak=p(),Be=n("div"),v(dr.$$.fragment),ik=p(),wt=n("p"),lk=a("The "),Fd=n("code"),dk=a("FlaxBigBirdPreTrainedModel"),ck=a(" forward method, overrides the "),qd=n("code"),pk=a("__call__"),hk=a(" special method."),mk=p(),v(Oo.$$.fragment),gk=p(),v(Io.$$.fragment),Xp=p(),xt=n("h2"),No=n("a"),zd=n("span"),v(cr.$$.fragment),fk=p(),Md=n("span"),uk=a("FlaxBigBirdForPreTraining"),Yp=p(),A=n("div"),v(pr.$$.fragment),_k=p(),Ft=n("p"),bk=a("BigBird Model with two heads on top as done during the pretraining: a "),Ed=n("code"),kk=a("masked language modeling"),vk=a(" head and a "),jd=n("code"),Bk=a("next sentence prediction (classification)"),yk=a(" head."),$k=p(),hr=n("p"),Tk=a("This model inherits from "),ni=n("a"),wk=a("FlaxPreTrainedModel"),xk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Fk=p(),mr=n("p"),qk=a("This model is also a Flax Linen "),gr=n("a"),zk=a("flax.linen.Module"),Mk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ek=p(),Pd=n("p"),jk=a("Finally, this model supports inherent JAX features such as:"),Pk=p(),Pe=n("ul"),Cd=n("li"),fr=n("a"),Ck=a("Just-In-Time (JIT) compilation"),Lk=p(),Ld=n("li"),ur=n("a"),Ak=a("Automatic Differentiation"),Ok=p(),Ad=n("li"),_r=n("a"),Ik=a("Vectorization"),Nk=p(),Od=n("li"),br=n("a"),Sk=a("Parallelization"),Dk=p(),ye=n("div"),v(kr.$$.fragment),Wk=p(),qt=n("p"),Uk=a("The "),Id=n("code"),Qk=a("FlaxBigBirdPreTrainedModel"),Rk=a(" forward method, overrides the "),Nd=n("code"),Gk=a("__call__"),Hk=a(" special method."),Vk=p(),v(So.$$.fragment),Jk=p(),v(Do.$$.fragment),Zp=p(),zt=n("h2"),Wo=n("a"),Sd=n("span"),v(vr.$$.fragment),Kk=p(),Dd=n("span"),Xk=a("FlaxBigBirdForCausalLM"),eh=p(),O=n("div"),v(Br.$$.fragment),Yk=p(),Wd=n("p"),Zk=a(`BigBird Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),ev=p(),yr=n("p"),tv=a("This model inherits from "),si=n("a"),ov=a("FlaxPreTrainedModel"),nv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),sv=p(),$r=n("p"),rv=a("This model is also a Flax Linen "),Tr=n("a"),av=a("flax.linen.Module"),iv=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),lv=p(),Ud=n("p"),dv=a("Finally, this model supports inherent JAX features such as:"),cv=p(),Ce=n("ul"),Qd=n("li"),wr=n("a"),pv=a("Just-In-Time (JIT) compilation"),hv=p(),Rd=n("li"),xr=n("a"),mv=a("Automatic Differentiation"),gv=p(),Gd=n("li"),Fr=n("a"),fv=a("Vectorization"),uv=p(),Hd=n("li"),qr=n("a"),_v=a("Parallelization"),bv=p(),$e=n("div"),v(zr.$$.fragment),kv=p(),Mt=n("p"),vv=a("The "),Vd=n("code"),Bv=a("FlaxBigBirdPreTrainedModel"),yv=a(" forward method, overrides the "),Jd=n("code"),$v=a("__call__"),Tv=a(" special method."),wv=p(),v(Uo.$$.fragment),xv=p(),v(Qo.$$.fragment),th=p(),Et=n("h2"),Ro=n("a"),Kd=n("span"),v(Mr.$$.fragment),Fv=p(),Xd=n("span"),qv=a("FlaxBigBirdForMaskedLM"),oh=p(),I=n("div"),v(Er.$$.fragment),zv=p(),jr=n("p"),Mv=a("BigBird Model with a "),Yd=n("code"),Ev=a("language modeling"),jv=a(" head on top."),Pv=p(),Pr=n("p"),Cv=a("This model inherits from "),ri=n("a"),Lv=a("FlaxPreTrainedModel"),Av=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ov=p(),Cr=n("p"),Iv=a("This model is also a Flax Linen "),Lr=n("a"),Nv=a("flax.linen.Module"),Sv=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Dv=p(),Zd=n("p"),Wv=a("Finally, this model supports inherent JAX features such as:"),Uv=p(),Le=n("ul"),ec=n("li"),Ar=n("a"),Qv=a("Just-In-Time (JIT) compilation"),Rv=p(),tc=n("li"),Or=n("a"),Gv=a("Automatic Differentiation"),Hv=p(),oc=n("li"),Ir=n("a"),Vv=a("Vectorization"),Jv=p(),nc=n("li"),Nr=n("a"),Kv=a("Parallelization"),Xv=p(),Te=n("div"),v(Sr.$$.fragment),Yv=p(),jt=n("p"),Zv=a("The "),sc=n("code"),eB=a("FlaxBigBirdPreTrainedModel"),tB=a(" forward method, overrides the "),rc=n("code"),oB=a("__call__"),nB=a(" special method."),sB=p(),v(Go.$$.fragment),rB=p(),v(Ho.$$.fragment),nh=p(),Pt=n("h2"),Vo=n("a"),ac=n("span"),v(Dr.$$.fragment),aB=p(),ic=n("span"),iB=a("FlaxBigBirdForSequenceClassification"),sh=p(),N=n("div"),v(Wr.$$.fragment),lB=p(),lc=n("p"),dB=a(`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),cB=p(),Ur=n("p"),pB=a("This model inherits from "),ai=n("a"),hB=a("FlaxPreTrainedModel"),mB=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),gB=p(),Qr=n("p"),fB=a("This model is also a Flax Linen "),Rr=n("a"),uB=a("flax.linen.Module"),_B=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),bB=p(),dc=n("p"),kB=a("Finally, this model supports inherent JAX features such as:"),vB=p(),Ae=n("ul"),cc=n("li"),Gr=n("a"),BB=a("Just-In-Time (JIT) compilation"),yB=p(),pc=n("li"),Hr=n("a"),$B=a("Automatic Differentiation"),TB=p(),hc=n("li"),Vr=n("a"),wB=a("Vectorization"),xB=p(),mc=n("li"),Jr=n("a"),FB=a("Parallelization"),qB=p(),we=n("div"),v(Kr.$$.fragment),zB=p(),Ct=n("p"),MB=a("The "),gc=n("code"),EB=a("FlaxBigBirdPreTrainedModel"),jB=a(" forward method, overrides the "),fc=n("code"),PB=a("__call__"),CB=a(" special method."),LB=p(),v(Jo.$$.fragment),AB=p(),v(Ko.$$.fragment),rh=p(),Lt=n("h2"),Xo=n("a"),uc=n("span"),v(Xr.$$.fragment),OB=p(),_c=n("span"),IB=a("FlaxBigBirdForMultipleChoice"),ah=p(),S=n("div"),v(Yr.$$.fragment),NB=p(),bc=n("p"),SB=a(`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),DB=p(),Zr=n("p"),WB=a("This model inherits from "),ii=n("a"),UB=a("FlaxPreTrainedModel"),QB=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),RB=p(),ea=n("p"),GB=a("This model is also a Flax Linen "),ta=n("a"),HB=a("flax.linen.Module"),VB=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),JB=p(),kc=n("p"),KB=a("Finally, this model supports inherent JAX features such as:"),XB=p(),Oe=n("ul"),vc=n("li"),oa=n("a"),YB=a("Just-In-Time (JIT) compilation"),ZB=p(),Bc=n("li"),na=n("a"),e0=a("Automatic Differentiation"),t0=p(),yc=n("li"),sa=n("a"),o0=a("Vectorization"),n0=p(),$c=n("li"),ra=n("a"),s0=a("Parallelization"),r0=p(),xe=n("div"),v(aa.$$.fragment),a0=p(),At=n("p"),i0=a("The "),Tc=n("code"),l0=a("FlaxBigBirdPreTrainedModel"),d0=a(" forward method, overrides the "),wc=n("code"),c0=a("__call__"),p0=a(" special method."),h0=p(),v(Yo.$$.fragment),m0=p(),v(Zo.$$.fragment),ih=p(),Ot=n("h2"),en=n("a"),xc=n("span"),v(ia.$$.fragment),g0=p(),Fc=n("span"),f0=a("FlaxBigBirdForTokenClassification"),lh=p(),D=n("div"),v(la.$$.fragment),u0=p(),qc=n("p"),_0=a(`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),b0=p(),da=n("p"),k0=a("This model inherits from "),li=n("a"),v0=a("FlaxPreTrainedModel"),B0=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),y0=p(),ca=n("p"),$0=a("This model is also a Flax Linen "),pa=n("a"),T0=a("flax.linen.Module"),w0=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),x0=p(),zc=n("p"),F0=a("Finally, this model supports inherent JAX features such as:"),q0=p(),Ie=n("ul"),Mc=n("li"),ha=n("a"),z0=a("Just-In-Time (JIT) compilation"),M0=p(),Ec=n("li"),ma=n("a"),E0=a("Automatic Differentiation"),j0=p(),jc=n("li"),ga=n("a"),P0=a("Vectorization"),C0=p(),Pc=n("li"),fa=n("a"),L0=a("Parallelization"),A0=p(),Fe=n("div"),v(ua.$$.fragment),O0=p(),It=n("p"),I0=a("The "),Cc=n("code"),N0=a("FlaxBigBirdPreTrainedModel"),S0=a(" forward method, overrides the "),Lc=n("code"),D0=a("__call__"),W0=a(" special method."),U0=p(),v(tn.$$.fragment),Q0=p(),v(on.$$.fragment),dh=p(),Nt=n("h2"),nn=n("a"),Ac=n("span"),v(_a.$$.fragment),R0=p(),Oc=n("span"),G0=a("FlaxBigBirdForQuestionAnswering"),ch=p(),W=n("div"),v(ba.$$.fragment),H0=p(),St=n("p"),V0=a(`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ic=n("code"),J0=a("span start logits"),K0=a(" and "),Nc=n("code"),X0=a("span end logits"),Y0=a(")."),Z0=p(),ka=n("p"),ey=a("This model inherits from "),di=n("a"),ty=a("FlaxPreTrainedModel"),oy=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ny=p(),va=n("p"),sy=a("This model is also a Flax Linen "),Ba=n("a"),ry=a("flax.linen.Module"),ay=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),iy=p(),Sc=n("p"),ly=a("Finally, this model supports inherent JAX features such as:"),dy=p(),Ne=n("ul"),Dc=n("li"),ya=n("a"),cy=a("Just-In-Time (JIT) compilation"),py=p(),Wc=n("li"),$a=n("a"),hy=a("Automatic Differentiation"),my=p(),Uc=n("li"),Ta=n("a"),gy=a("Vectorization"),fy=p(),Qc=n("li"),wa=n("a"),uy=a("Parallelization"),_y=p(),qe=n("div"),v(xa.$$.fragment),by=p(),Dt=n("p"),ky=a("The "),ci=n("a"),vy=a("FlaxBigBirdForQuestionAnswering"),By=a(" forward method, overrides the "),Rc=n("code"),yy=a("__call__"),$y=a(" special method."),Ty=p(),v(sn.$$.fragment),wy=p(),v(rn.$$.fragment),this.h()},l(o){const u=fw('[data-svelte="svelte-1phssyn"]',document.head);d=s(u,"META",{name:!0,content:!0}),u.forEach(t),_=h(o),g=s(o,"H1",{class:!0});var Fa=r(g);f=s(Fa,"A",{id:!0,class:!0,href:!0});var Gc=r(f);b=s(Gc,"SPAN",{});var Hc=r(b);B(l.$$.fragment,Hc),Hc.forEach(t),Gc.forEach(t),m=h(Fa),F=s(Fa,"SPAN",{});var Vc=r(F);_m=i(Vc,"BigBird"),Vc.forEach(t),Fa.forEach(t),bp=h(o),Je=s(o,"H2",{class:!0});var qa=r(Je);Qt=s(qa,"A",{id:!0,class:!0,href:!0});var Jc=r(Qt);Ni=s(Jc,"SPAN",{});var Kc=r(Ni);B(Pn.$$.fragment,Kc),Kc.forEach(t),Jc.forEach(t),bm=h(qa),Si=s(qa,"SPAN",{});var Xc=r(Si);km=i(Xc,"Overview"),Xc.forEach(t),qa.forEach(t),kp=h(o),Rt=s(o,"P",{});var za=r(Rt);vm=i(za,"The BigBird model was proposed in "),Cn=s(za,"A",{href:!0,rel:!0});var Yc=r(Cn);Bm=i(Yc,"Big Bird: Transformers for Longer Sequences"),Yc.forEach(t),ym=i(za,` by
Zaheer, Manzil and Guruganesh, Guru and Dubey, Kumar Avinava and Ainslie, Joshua and Alberti, Chris and Ontanon,
Santiago and Pham, Philip and Ravula, Anirudh and Wang, Qifan and Yang, Li and others. BigBird, is a sparse-attention
based transformer which extends Transformer based models, such as BERT to much longer sequences. In addition to sparse
attention, BigBird also applies global attention as well as random attention to the input sequence. Theoretically, it
has been shown that applying sparse, global, and random attention approximates full attention, while being
computationally much more efficient for longer sequences. As a consequence of the capability to handle longer context,
BigBird has shown improved performance on various long document NLP tasks, such as question answering and
summarization, compared to BERT or RoBERTa.`),za.forEach(t),vp=h(o),Pa=s(o,"P",{});var Zc=r(Pa);$m=i(Zc,"The abstract from the paper is the following:"),Zc.forEach(t),Bp=h(o),Ca=s(o,"P",{});var ep=r(Ca);Di=s(ep,"EM",{});var tp=r(Di);Tm=i(tp,`Transformers-based models, such as BERT, have been one of the most successful deep learning models for NLP.
Unfortunately, one of their core limitations is the quadratic dependency (mainly in terms of memory) on the sequence
length due to their full attention mechanism. To remedy this, we propose, BigBird, a sparse attention mechanism that
reduces this quadratic dependency to linear. We show that BigBird is a universal approximator of sequence functions and
is Turing complete, thereby preserving these properties of the quadratic, full attention model. Along the way, our
theoretical analysis reveals some of the benefits of having O(1) global tokens (such as CLS), that attend to the entire
sequence as part of the sparse attention mechanism. The proposed sparse attention can handle sequences of length up to
8x of what was previously possible using similar hardware. As a consequence of the capability to handle longer context,
BigBird drastically improves performance on various NLP tasks such as question answering and summarization. We also
propose novel applications to genomics data.`),tp.forEach(t),ep.forEach(t),yp=h(o),La=s(o,"P",{});var op=r(La);wm=i(op,"Tips:"),op.forEach(t),$p=h(o),R=s(o,"UL",{});var J=r(R);Ln=s(J,"LI",{});var Ma=r(Ln);xm=i(Ma,"For an in-detail explanation on how BigBird\u2019s attention works, see "),An=s(Ma,"A",{href:!0,rel:!0});var np=r(An);Fm=i(np,"this blog post"),np.forEach(t),qm=i(Ma,"."),Ma.forEach(t),zm=h(J),ce=s(J,"LI",{});var fe=r(ce);Mm=i(fe,"BigBird comes with 2 implementations: "),Wi=s(fe,"STRONG",{});var sp=r(Wi);Em=i(sp,"original_full"),sp.forEach(t),jm=i(fe," & "),Ui=s(fe,"STRONG",{});var rp=r(Ui);Pm=i(rp,"block_sparse"),rp.forEach(t),Cm=i(fe,`. For the sequence length < 1024, using
`),Qi=s(fe,"STRONG",{});var ap=r(Qi);Lm=i(ap,"original_full"),ap.forEach(t),Am=i(fe," is advised as there is no benefit in using "),Ri=s(fe,"STRONG",{});var ip=r(Ri);Om=i(ip,"block_sparse"),ip.forEach(t),Im=i(fe," attention."),fe.forEach(t),Nm=h(J),Gi=s(J,"LI",{});var lp=r(Gi);Sm=i(lp,"The code currently uses window size of 3 blocks and 2 global blocks."),lp.forEach(t),Dm=h(J),Hi=s(J,"LI",{});var dp=r(Hi);Wm=i(dp,"Sequence length must be divisible by block size."),dp.forEach(t),Um=h(J),On=s(J,"LI",{});var Ea=r(On);Qm=i(Ea,"Current implementation supports only "),Vi=s(Ea,"STRONG",{});var cp=r(Vi);Rm=i(cp,"ITC"),cp.forEach(t),Gm=i(Ea,"."),Ea.forEach(t),Hm=h(J),Aa=s(J,"LI",{});var pi=r(Aa);Vm=i(pi,"Current implementation doesn\u2019t support "),Ji=s(pi,"STRONG",{});var pp=r(Ji);Jm=i(pp,"num_random_blocks = 0"),pp.forEach(t),pi.forEach(t),J.forEach(t),Tp=h(o),Se=s(o,"P",{});var Wt=r(Se);Km=i(Wt,"This model was contributed by "),In=s(Wt,"A",{href:!0,rel:!0});var hp=r(In);Xm=i(hp,"vasudevgupta"),hp.forEach(t),Ym=i(Wt,`. The original code can be found
`),Nn=s(Wt,"A",{href:!0,rel:!0});var mp=r(Nn);Zm=i(mp,"here"),mp.forEach(t),eg=i(Wt,"."),Wt.forEach(t),wp=h(o),Ke=s(o,"H2",{class:!0});var ja=r(Ke);Gt=s(ja,"A",{id:!0,class:!0,href:!0});var gp=r(Gt);Ki=s(gp,"SPAN",{});var fp=r(Ki);B(Sn.$$.fragment,fp),fp.forEach(t),gp.forEach(t),tg=h(ja),Xi=s(ja,"SPAN",{});var up=r(Xi);og=i(up,"BigBirdConfig"),up.forEach(t),ja.forEach(t),xp=h(o),P=s(o,"DIV",{class:!0});var U=r(P);B(Dn.$$.fragment,U),ng=h(U),Xe=s(U,"P",{});var Ut=r(Xe);sg=i(Ut,"This is the configuration class to store the configuration of a "),Oa=s(Ut,"A",{href:!0});var _p=r(Oa);rg=i(_p,"BigBirdModel"),_p.forEach(t),ag=i(Ut,`. It is used to instantiate an
BigBird model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the BigBird
`),Wn=s(Ut,"A",{href:!0,rel:!0});var My=r(Wn);ig=i(My,"google/bigbird-roberta-base"),My.forEach(t),lg=i(Ut," architecture."),Ut.forEach(t),dg=h(U),Ye=s(U,"P",{});var hi=r(Ye);cg=i(hi,"Configuration objects inherit from "),Ia=s(hi,"A",{href:!0});var Ey=r(Ia);pg=i(Ey,"PretrainedConfig"),Ey.forEach(t),hg=i(hi,` and can be used to control the model outputs. Read the
documentation from `),Na=s(hi,"A",{href:!0});var jy=r(Na);mg=i(jy,"PretrainedConfig"),jy.forEach(t),gg=i(hi," for more information."),hi.forEach(t),fg=h(U),B(Ht.$$.fragment,U),ug=h(U),Yi=s(U,"BLOCKQUOTE",{});var Py=r(Yi);Zi=s(Py,"BLOCKQUOTE",{});var Cy=r(Zi);el=s(Cy,"BLOCKQUOTE",{});var Ly=r(el);tl=s(Ly,"P",{});var Ay=r(tl);_g=i(Ay,"from transformers import BigBirdModel, BigBirdConfig"),Ay.forEach(t),Ly.forEach(t),Cy.forEach(t),Py.forEach(t),bg=h(U),ol=s(U,"BLOCKQUOTE",{});var Oy=r(ol);nl=s(Oy,"BLOCKQUOTE",{});var Iy=r(nl);Un=s(Iy,"BLOCKQUOTE",{});var hh=r(Un);Vt=s(hh,"H1",{class:!0});var mh=r(Vt);Jt=s(mh,"A",{id:!0,class:!0,href:!0});var Ny=r(Jt);sl=s(Ny,"SPAN",{});var Sy=r(sl);B(Qn.$$.fragment,Sy),Sy.forEach(t),Ny.forEach(t),kg=h(mh),rl=s(mh,"SPAN",{});var Dy=r(rl);vg=i(Dy,"Initializing a BigBird google/bigbird-roberta-base style configuration >>> configuration ="),Dy.forEach(t),mh.forEach(t),Bg=h(hh),al=s(hh,"P",{});var Wy=r(al);yg=i(Wy,"BigBirdConfig()"),Wy.forEach(t),hh.forEach(t),Iy.forEach(t),Oy.forEach(t),$g=h(U),il=s(U,"BLOCKQUOTE",{});var Uy=r(il);ll=s(Uy,"BLOCKQUOTE",{});var Qy=r(ll);Rn=s(Qy,"BLOCKQUOTE",{});var gh=r(Rn);Kt=s(gh,"H1",{class:!0});var fh=r(Kt);Xt=s(fh,"A",{id:!0,class:!0,href:!0});var Ry=r(Xt);dl=s(Ry,"SPAN",{});var Gy=r(dl);B(Gn.$$.fragment,Gy),Gy.forEach(t),Ry.forEach(t),Tg=h(fh),cl=s(fh,"SPAN",{});var Hy=r(cl);wg=i(Hy,"Initializing a model from the google/bigbird-roberta-base style configuration >>> model ="),Hy.forEach(t),fh.forEach(t),xg=h(gh),pl=s(gh,"P",{});var Vy=r(pl);Fg=i(Vy,"BigBirdModel(configuration)"),Vy.forEach(t),gh.forEach(t),Qy.forEach(t),Uy.forEach(t),qg=h(U),hl=s(U,"BLOCKQUOTE",{});var Jy=r(hl);ml=s(Jy,"BLOCKQUOTE",{});var Ky=r(ml);gl=s(Ky,"BLOCKQUOTE",{});var Xy=r(gl);Yt=s(Xy,"H1",{class:!0});var uh=r(Yt);Zt=s(uh,"A",{id:!0,class:!0,href:!0});var Yy=r(Zt);fl=s(Yy,"SPAN",{});var Zy=r(fl);B(Hn.$$.fragment,Zy),Zy.forEach(t),Yy.forEach(t),zg=h(uh),ul=s(uh,"SPAN",{});var e1=r(ul);Mg=i(e1,"Accessing the model configuration >>> configuration = model.config"),e1.forEach(t),uh.forEach(t),Xy.forEach(t),Ky.forEach(t),Jy.forEach(t),U.forEach(t),Fp=h(o),Ze=s(o,"H2",{class:!0});var _h=r(Ze);eo=s(_h,"A",{id:!0,class:!0,href:!0});var t1=r(eo);_l=s(t1,"SPAN",{});var o1=r(_l);B(Vn.$$.fragment,o1),o1.forEach(t),t1.forEach(t),Eg=h(_h),bl=s(_h,"SPAN",{});var n1=r(bl);jg=i(n1,"BigBirdTokenizer"),n1.forEach(t),_h.forEach(t),qp=h(o),C=s(o,"DIV",{class:!0});var ee=r(C);B(Jn.$$.fragment,ee),Pg=h(ee),Kn=s(ee,"P",{});var bh=r(Kn);Cg=i(bh,"Construct a BigBird tokenizer. Based on "),Xn=s(bh,"A",{href:!0,rel:!0});var s1=r(Xn);Lg=i(s1,"SentencePiece"),s1.forEach(t),Ag=i(bh,"."),bh.forEach(t),Og=h(ee),Yn=s(ee,"P",{});var kh=r(Yn);Ig=i(kh,"This tokenizer inherits from "),Sa=s(kh,"A",{href:!0});var r1=r(Sa);Ng=i(r1,"PreTrainedTokenizer"),r1.forEach(t),Sg=i(kh,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),kh.forEach(t),Dg=h(ee),De=s(ee,"DIV",{class:!0});var mi=r(De);B(Zn.$$.fragment,mi),Wg=h(mi),kl=s(mi,"P",{});var a1=r(kl);Ug=i(a1,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Big Bird sequence has the following format:`),a1.forEach(t),Qg=h(mi),es=s(mi,"UL",{});var vh=r(es);Da=s(vh,"LI",{});var xy=r(Da);Rg=i(xy,"single sequence: "),vl=s(xy,"CODE",{});var i1=r(vl);Gg=i(i1,"[CLS] X [SEP]"),i1.forEach(t),xy.forEach(t),Hg=h(vh),Wa=s(vh,"LI",{});var Fy=r(Wa);Vg=i(Fy,"pair of sequences: "),Bl=s(Fy,"CODE",{});var l1=r(Bl);Jg=i(l1,"[CLS] A [SEP] B [SEP]"),l1.forEach(t),Fy.forEach(t),vh.forEach(t),mi.forEach(t),Kg=h(ee),to=s(ee,"DIV",{class:!0});var Bh=r(to);B(ts.$$.fragment,Bh),Xg=h(Bh),os=s(Bh,"P",{});var yh=r(os);Yg=i(yh,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),yl=s(yh,"CODE",{});var d1=r(yl);Zg=i(d1,"prepare_for_model"),d1.forEach(t),ef=i(yh," method."),yh.forEach(t),Bh.forEach(t),tf=h(ee),oo=s(ee,"DIV",{class:!0});var $h=r(oo);B(ns.$$.fragment,$h),of=h($h),et=s($h,"P",{});var gi=r(et);nf=i(gi,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format: :: 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 | first sequence | second
sequence | If `),$l=s(gi,"CODE",{});var c1=r($l);sf=i(c1,"token_ids_1"),c1.forEach(t),rf=i(gi," is "),Tl=s(gi,"CODE",{});var p1=r(Tl);af=i(p1,"None"),p1.forEach(t),lf=i(gi,", this method only returns the first portion of the mask (0s)."),gi.forEach(t),$h.forEach(t),df=h(ee),Ua=s(ee,"DIV",{class:!0});var h1=r(Ua);B(ss.$$.fragment,h1),h1.forEach(t),ee.forEach(t),zp=h(o),tt=s(o,"H2",{class:!0});var Th=r(tt);no=s(Th,"A",{id:!0,class:!0,href:!0});var m1=r(no);wl=s(m1,"SPAN",{});var g1=r(wl);B(rs.$$.fragment,g1),g1.forEach(t),m1.forEach(t),cf=h(Th),xl=s(Th,"SPAN",{});var f1=r(xl);pf=i(f1,"BigBirdTokenizerFast"),f1.forEach(t),Th.forEach(t),Mp=h(o),H=s(o,"DIV",{class:!0});var Ue=r(H);B(as.$$.fragment,Ue),hf=h(Ue),ze=s(Ue,"P",{});var an=r(ze);mf=i(an,"Construct a \u201Cfast\u201D BigBird tokenizer (backed by HuggingFace\u2019s "),Fl=s(an,"EM",{});var u1=r(Fl);gf=i(u1,"tokenizers"),u1.forEach(t),ff=i(an,` library). Based on
`),is=s(an,"A",{href:!0,rel:!0});var _1=r(is);uf=i(_1,"Unigram"),_1.forEach(t),_f=i(an,`. This
tokenizer inherits from `),Qa=s(an,"A",{href:!0});var b1=r(Qa);bf=i(b1,"PreTrainedTokenizerFast"),b1.forEach(t),kf=i(an,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),an.forEach(t),vf=h(Ue),We=s(Ue,"DIV",{class:!0});var fi=r(We);B(ls.$$.fragment,fi),Bf=h(fi),ql=s(fi,"P",{});var k1=r(ql);yf=i(k1,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An BigBird sequence has the following format:`),k1.forEach(t),$f=h(fi),ds=s(fi,"UL",{});var wh=r(ds);Ra=s(wh,"LI",{});var qy=r(Ra);Tf=i(qy,"single sequence: "),zl=s(qy,"CODE",{});var v1=r(zl);wf=i(v1,"[CLS] X [SEP]"),v1.forEach(t),qy.forEach(t),xf=h(wh),Ga=s(wh,"LI",{});var zy=r(Ga);Ff=i(zy,"pair of sequences: "),Ml=s(zy,"CODE",{});var B1=r(Ml);qf=i(B1,"[CLS] A [SEP] B [SEP]"),B1.forEach(t),zy.forEach(t),wh.forEach(t),fi.forEach(t),zf=h(Ue),ue=s(Ue,"DIV",{class:!0});var ln=r(ue);B(cs.$$.fragment,ln),Mf=h(ln),El=s(ln,"P",{});var y1=r(El);Ef=i(y1,"Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),y1.forEach(t),jf=h(ln),B(so.$$.fragment,ln),Pf=h(ln),jl=s(ln,"P",{});var $1=r(jl);Cf=i($1,"if token_ids_1 is None, only returns the first portion of the mask (0s)."),$1.forEach(t),ln.forEach(t),Lf=h(Ue),ro=s(Ue,"DIV",{class:!0});var xh=r(ro);B(ps.$$.fragment,xh),Af=h(xh),hs=s(xh,"P",{});var Fh=r(hs);Of=i(Fh,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Pl=s(Fh,"CODE",{});var T1=r(Pl);If=i(T1,"prepare_for_model"),T1.forEach(t),Nf=i(Fh," method."),Fh.forEach(t),xh.forEach(t),Ue.forEach(t),Ep=h(o),ot=s(o,"H2",{class:!0});var qh=r(ot);ao=s(qh,"A",{id:!0,class:!0,href:!0});var w1=r(ao);Cl=s(w1,"SPAN",{});var x1=r(Cl);B(ms.$$.fragment,x1),x1.forEach(t),w1.forEach(t),Sf=h(qh),Ll=s(qh,"SPAN",{});var F1=r(Ll);Df=i(F1,"BigBird specific outputs"),F1.forEach(t),qh.forEach(t),jp=h(o),nt=s(o,"DIV",{class:!0});var zh=r(nt);B(gs.$$.fragment,zh),Wf=h(zh),fs=s(zh,"P",{});var Mh=r(fs);Uf=i(Mh,"Output type of "),Ha=s(Mh,"A",{href:!0});var q1=r(Ha);Qf=i(q1,"BigBirdForPreTraining"),q1.forEach(t),Rf=i(Mh,"."),Mh.forEach(t),zh.forEach(t),Pp=h(o),st=s(o,"H2",{class:!0});var Eh=r(st);io=s(Eh,"A",{id:!0,class:!0,href:!0});var z1=r(io);Al=s(z1,"SPAN",{});var M1=r(Al);B(us.$$.fragment,M1),M1.forEach(t),z1.forEach(t),Gf=h(Eh),Ol=s(Eh,"SPAN",{});var E1=r(Ol);Hf=i(E1,"BigBirdModel"),E1.forEach(t),Eh.forEach(t),Cp=h(o),V=s(o,"DIV",{class:!0});var Qe=r(V);B(_s.$$.fragment,Qe),Vf=h(Qe),bs=s(Qe,"P",{});var jh=r(bs);Jf=i(jh,`The bare BigBird Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ks=s(jh,"A",{href:!0,rel:!0});var j1=r(ks);Kf=i(j1,"torch.nn.Module"),j1.forEach(t),Xf=i(jh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),jh.forEach(t),Yf=h(Qe),vs=s(Qe,"P",{});var Ph=r(vs);Zf=i(Ph,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Bs=s(Ph,"A",{href:!0,rel:!0});var P1=r(Bs);eu=i(P1,`Attention is
all you need`),P1.forEach(t),tu=i(Ph,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Ph.forEach(t),ou=h(Qe),Q=s(Qe,"P",{});var te=r(Q);nu=i(te,"To behave as an decoder the model needs to be initialized with the "),Il=s(te,"CODE",{});var C1=r(Il);su=i(C1,"is_decoder"),C1.forEach(t),ru=i(te,` argument of the configuration set
to `),Nl=s(te,"CODE",{});var L1=r(Nl);au=i(L1,"True"),L1.forEach(t),iu=i(te,". To be used in a Seq2Seq model, the model needs to initialized with both "),Sl=s(te,"CODE",{});var A1=r(Sl);lu=i(A1,"is_decoder"),A1.forEach(t),du=i(te,` argument and
`),Dl=s(te,"CODE",{});var O1=r(Dl);cu=i(O1,"add_cross_attention"),O1.forEach(t),pu=i(te," set to "),Wl=s(te,"CODE",{});var I1=r(Wl);hu=i(I1,"True"),I1.forEach(t),mu=i(te,"; an "),Ul=s(te,"CODE",{});var N1=r(Ul);gu=i(N1,"encoder_hidden_states"),N1.forEach(t),fu=i(te," is then expected as an input to the forward pass."),te.forEach(t),uu=h(Qe),_e=s(Qe,"DIV",{class:!0});var dn=r(_e);B(ys.$$.fragment,dn),_u=h(dn),rt=s(dn,"P",{});var ui=r(rt);bu=i(ui,"The "),Va=s(ui,"A",{href:!0});var S1=r(Va);ku=i(S1,"BigBirdModel"),S1.forEach(t),vu=i(ui," forward method, overrides the "),Ql=s(ui,"CODE",{});var D1=r(Ql);Bu=i(D1,"__call__"),D1.forEach(t),yu=i(ui," special method."),ui.forEach(t),$u=h(dn),B(lo.$$.fragment,dn),Tu=h(dn),B(co.$$.fragment,dn),dn.forEach(t),Qe.forEach(t),Lp=h(o),at=s(o,"H2",{class:!0});var Ch=r(at);po=s(Ch,"A",{id:!0,class:!0,href:!0});var W1=r(po);Rl=s(W1,"SPAN",{});var U1=r(Rl);B($s.$$.fragment,U1),U1.forEach(t),W1.forEach(t),wu=h(Ch),Gl=s(Ch,"SPAN",{});var Q1=r(Gl);xu=i(Q1,"BigBirdForPreTraining"),Q1.forEach(t),Ch.forEach(t),Ap=h(o),it=s(o,"DIV",{class:!0});var Lh=r(it);B(Ts.$$.fragment,Lh),Fu=h(Lh),be=s(Lh,"DIV",{class:!0});var cn=r(be);B(ws.$$.fragment,cn),qu=h(cn),lt=s(cn,"P",{});var _i=r(lt);zu=i(_i,"The "),Ja=s(_i,"A",{href:!0});var R1=r(Ja);Mu=i(R1,"BigBirdForPreTraining"),R1.forEach(t),Eu=i(_i," forward method, overrides the "),Hl=s(_i,"CODE",{});var G1=r(Hl);ju=i(G1,"__call__"),G1.forEach(t),Pu=i(_i," special method."),_i.forEach(t),Cu=h(cn),B(ho.$$.fragment,cn),Lu=h(cn),B(mo.$$.fragment,cn),cn.forEach(t),Lh.forEach(t),Op=h(o),dt=s(o,"H2",{class:!0});var Ah=r(dt);go=s(Ah,"A",{id:!0,class:!0,href:!0});var H1=r(go);Vl=s(H1,"SPAN",{});var V1=r(Vl);B(xs.$$.fragment,V1),V1.forEach(t),H1.forEach(t),Au=h(Ah),Jl=s(Ah,"SPAN",{});var J1=r(Jl);Ou=i(J1,"BigBirdForCausalLM"),J1.forEach(t),Ah.forEach(t),Ip=h(o),Me=s(o,"DIV",{class:!0});var bi=r(Me);B(Fs.$$.fragment,bi),Iu=h(bi),ct=s(bi,"P",{});var ki=r(ct);Nu=i(ki,"BigBird Model with a "),Kl=s(ki,"CODE",{});var K1=r(Kl);Su=i(K1,"language modeling"),K1.forEach(t),Du=i(ki,` head on top for CLM fine-tuning.
This model is a PyTorch `),qs=s(ki,"A",{href:!0,rel:!0});var X1=r(qs);Wu=i(X1,"torch.nn.Module"),X1.forEach(t),Uu=i(ki,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ki.forEach(t),Qu=h(bi),ke=s(bi,"DIV",{class:!0});var pn=r(ke);B(zs.$$.fragment,pn),Ru=h(pn),pt=s(pn,"P",{});var vi=r(pt);Gu=i(vi,"The "),Ka=s(vi,"A",{href:!0});var Y1=r(Ka);Hu=i(Y1,"BigBirdForCausalLM"),Y1.forEach(t),Vu=i(vi," forward method, overrides the "),Xl=s(vi,"CODE",{});var Z1=r(Xl);Ju=i(Z1,"__call__"),Z1.forEach(t),Ku=i(vi," special method."),vi.forEach(t),Xu=h(pn),B(fo.$$.fragment,pn),Yu=h(pn),B(uo.$$.fragment,pn),pn.forEach(t),bi.forEach(t),Np=h(o),ht=s(o,"H2",{class:!0});var Oh=r(ht);_o=s(Oh,"A",{id:!0,class:!0,href:!0});var e2=r(_o);Yl=s(e2,"SPAN",{});var t2=r(Yl);B(Ms.$$.fragment,t2),t2.forEach(t),e2.forEach(t),Zu=h(Oh),Zl=s(Oh,"SPAN",{});var o2=r(Zl);e_=i(o2,"BigBirdForMaskedLM"),o2.forEach(t),Oh.forEach(t),Sp=h(o),Ee=s(o,"DIV",{class:!0});var Bi=r(Ee);B(Es.$$.fragment,Bi),t_=h(Bi),mt=s(Bi,"P",{});var yi=r(mt);o_=i(yi,"BigBird Model with a "),ed=s(yi,"CODE",{});var n2=r(ed);n_=i(n2,"language modeling"),n2.forEach(t),s_=i(yi,` head on top.
This model is a PyTorch `),js=s(yi,"A",{href:!0,rel:!0});var s2=r(js);r_=i(s2,"torch.nn.Module"),s2.forEach(t),a_=i(yi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),yi.forEach(t),i_=h(Bi),K=s(Bi,"DIV",{class:!0});var Re=r(K);B(Ps.$$.fragment,Re),l_=h(Re),gt=s(Re,"P",{});var $i=r(gt);d_=i($i,"The "),Xa=s($i,"A",{href:!0});var r2=r(Xa);c_=i(r2,"BigBirdForMaskedLM"),r2.forEach(t),p_=i($i," forward method, overrides the "),td=s($i,"CODE",{});var a2=r(td);h_=i(a2,"__call__"),a2.forEach(t),m_=i($i," special method."),$i.forEach(t),g_=h(Re),B(bo.$$.fragment,Re),f_=h(Re),B(ko.$$.fragment,Re),u_=h(Re),B(vo.$$.fragment,Re),Re.forEach(t),Bi.forEach(t),Dp=h(o),ft=s(o,"H2",{class:!0});var Ih=r(ft);Bo=s(Ih,"A",{id:!0,class:!0,href:!0});var i2=r(Bo);od=s(i2,"SPAN",{});var l2=r(od);B(Cs.$$.fragment,l2),l2.forEach(t),i2.forEach(t),__=h(Ih),nd=s(Ih,"SPAN",{});var d2=r(nd);b_=i(d2,"BigBirdForSequenceClassification"),d2.forEach(t),Ih.forEach(t),Wp=h(o),pe=s(o,"DIV",{class:!0});var hn=r(pe);B(Ls.$$.fragment,hn),k_=h(hn),sd=s(hn,"P",{});var c2=r(sd);v_=i(c2,`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),c2.forEach(t),B_=h(hn),As=s(hn,"P",{});var Nh=r(As);y_=i(Nh,"This model is a PyTorch "),Os=s(Nh,"A",{href:!0,rel:!0});var p2=r(Os);$_=i(p2,"torch.nn.Module"),p2.forEach(t),T_=i(Nh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Nh.forEach(t),w_=h(hn),X=s(hn,"DIV",{class:!0});var Ge=r(X);B(Is.$$.fragment,Ge),x_=h(Ge),ut=s(Ge,"P",{});var Ti=r(ut);F_=i(Ti,"The "),Ya=s(Ti,"A",{href:!0});var h2=r(Ya);q_=i(h2,"BigBirdForSequenceClassification"),h2.forEach(t),z_=i(Ti," forward method, overrides the "),rd=s(Ti,"CODE",{});var m2=r(rd);M_=i(m2,"__call__"),m2.forEach(t),E_=i(Ti," special method."),Ti.forEach(t),j_=h(Ge),B(yo.$$.fragment,Ge),P_=h(Ge),B($o.$$.fragment,Ge),C_=h(Ge),B(To.$$.fragment,Ge),Ge.forEach(t),hn.forEach(t),Up=h(o),_t=s(o,"H2",{class:!0});var Sh=r(_t);wo=s(Sh,"A",{id:!0,class:!0,href:!0});var g2=r(wo);ad=s(g2,"SPAN",{});var f2=r(ad);B(Ns.$$.fragment,f2),f2.forEach(t),g2.forEach(t),L_=h(Sh),id=s(Sh,"SPAN",{});var u2=r(id);A_=i(u2,"BigBirdForMultipleChoice"),u2.forEach(t),Sh.forEach(t),Qp=h(o),he=s(o,"DIV",{class:!0});var mn=r(he);B(Ss.$$.fragment,mn),O_=h(mn),ld=s(mn,"P",{});var _2=r(ld);I_=i(_2,`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),_2.forEach(t),N_=h(mn),Ds=s(mn,"P",{});var Dh=r(Ds);S_=i(Dh,"This model is a PyTorch "),Ws=s(Dh,"A",{href:!0,rel:!0});var b2=r(Ws);D_=i(b2,"torch.nn.Module"),b2.forEach(t),W_=i(Dh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Dh.forEach(t),U_=h(mn),ve=s(mn,"DIV",{class:!0});var gn=r(ve);B(Us.$$.fragment,gn),Q_=h(gn),bt=s(gn,"P",{});var wi=r(bt);R_=i(wi,"The "),Za=s(wi,"A",{href:!0});var k2=r(Za);G_=i(k2,"BigBirdForMultipleChoice"),k2.forEach(t),H_=i(wi," forward method, overrides the "),dd=s(wi,"CODE",{});var v2=r(dd);V_=i(v2,"__call__"),v2.forEach(t),J_=i(wi," special method."),wi.forEach(t),K_=h(gn),B(xo.$$.fragment,gn),X_=h(gn),B(Fo.$$.fragment,gn),gn.forEach(t),mn.forEach(t),Rp=h(o),kt=s(o,"H2",{class:!0});var Wh=r(kt);qo=s(Wh,"A",{id:!0,class:!0,href:!0});var B2=r(qo);cd=s(B2,"SPAN",{});var y2=r(cd);B(Qs.$$.fragment,y2),y2.forEach(t),B2.forEach(t),Y_=h(Wh),pd=s(Wh,"SPAN",{});var $2=r(pd);Z_=i($2,"BigBirdForTokenClassification"),$2.forEach(t),Wh.forEach(t),Gp=h(o),me=s(o,"DIV",{class:!0});var fn=r(me);B(Rs.$$.fragment,fn),eb=h(fn),hd=s(fn,"P",{});var T2=r(hd);tb=i(T2,`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),T2.forEach(t),ob=h(fn),Gs=s(fn,"P",{});var Uh=r(Gs);nb=i(Uh,"This model is a PyTorch "),Hs=s(Uh,"A",{href:!0,rel:!0});var w2=r(Hs);sb=i(w2,"torch.nn.Module"),w2.forEach(t),rb=i(Uh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Uh.forEach(t),ab=h(fn),Y=s(fn,"DIV",{class:!0});var He=r(Y);B(Vs.$$.fragment,He),ib=h(He),vt=s(He,"P",{});var xi=r(vt);lb=i(xi,"The "),ei=s(xi,"A",{href:!0});var x2=r(ei);db=i(x2,"BigBirdForTokenClassification"),x2.forEach(t),cb=i(xi," forward method, overrides the "),md=s(xi,"CODE",{});var F2=r(md);pb=i(F2,"__call__"),F2.forEach(t),hb=i(xi," special method."),xi.forEach(t),mb=h(He),B(zo.$$.fragment,He),gb=h(He),B(Mo.$$.fragment,He),fb=h(He),B(Eo.$$.fragment,He),He.forEach(t),fn.forEach(t),Hp=h(o),Bt=s(o,"H2",{class:!0});var Qh=r(Bt);jo=s(Qh,"A",{id:!0,class:!0,href:!0});var q2=r(jo);gd=s(q2,"SPAN",{});var z2=r(gd);B(Js.$$.fragment,z2),z2.forEach(t),q2.forEach(t),ub=h(Qh),fd=s(Qh,"SPAN",{});var M2=r(fd);_b=i(M2,"BigBirdForQuestionAnswering"),M2.forEach(t),Qh.forEach(t),Vp=h(o),ge=s(o,"DIV",{class:!0});var un=r(ge);B(Ks.$$.fragment,un),bb=h(un),yt=s(un,"P",{});var Fi=r(yt);kb=i(Fi,`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ud=s(Fi,"CODE",{});var E2=r(ud);vb=i(E2,"span start logits"),E2.forEach(t),Bb=i(Fi," and "),_d=s(Fi,"CODE",{});var j2=r(_d);yb=i(j2,"span end logits"),j2.forEach(t),$b=i(Fi,")."),Fi.forEach(t),Tb=h(un),Xs=s(un,"P",{});var Rh=r(Xs);wb=i(Rh,"This model is a PyTorch "),Ys=s(Rh,"A",{href:!0,rel:!0});var P2=r(Ys);xb=i(P2,"torch.nn.Module"),P2.forEach(t),Fb=i(Rh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Rh.forEach(t),qb=h(un),Z=s(un,"DIV",{class:!0});var Ve=r(Z);B(Zs.$$.fragment,Ve),zb=h(Ve),$t=s(Ve,"P",{});var qi=r($t);Mb=i(qi,"The "),ti=s(qi,"A",{href:!0});var C2=r(ti);Eb=i(C2,"BigBirdForQuestionAnswering"),C2.forEach(t),jb=i(qi," forward method, overrides the "),bd=s(qi,"CODE",{});var L2=r(bd);Pb=i(L2,"__call__"),L2.forEach(t),Cb=i(qi," special method."),qi.forEach(t),Lb=h(Ve),B(Po.$$.fragment,Ve),Ab=h(Ve),B(Co.$$.fragment,Ve),Ob=h(Ve),B(Lo.$$.fragment,Ve),Ve.forEach(t),un.forEach(t),Jp=h(o),Tt=s(o,"H2",{class:!0});var Gh=r(Tt);Ao=s(Gh,"A",{id:!0,class:!0,href:!0});var A2=r(Ao);kd=s(A2,"SPAN",{});var O2=r(kd);B(er.$$.fragment,O2),O2.forEach(t),A2.forEach(t),Ib=h(Gh),vd=s(Gh,"SPAN",{});var I2=r(vd);Nb=i(I2,"FlaxBigBirdModel"),I2.forEach(t),Gh.forEach(t),Kp=h(o),L=s(o,"DIV",{class:!0});var oe=r(L);B(tr.$$.fragment,oe),Sb=h(oe),Bd=s(oe,"P",{});var N2=r(Bd);Db=i(N2,"The bare BigBird Model transformer outputting raw hidden-states without any specific head on top."),N2.forEach(t),Wb=h(oe),or=s(oe,"P",{});var Hh=r(or);Ub=i(Hh,"This model inherits from "),oi=s(Hh,"A",{href:!0});var S2=r(oi);Qb=i(S2,"FlaxPreTrainedModel"),S2.forEach(t),Rb=i(Hh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Hh.forEach(t),Gb=h(oe),nr=s(oe,"P",{});var Vh=r(nr);Hb=i(Vh,"This model is also a Flax Linen "),sr=s(Vh,"A",{href:!0,rel:!0});var D2=r(sr);Vb=i(D2,"flax.linen.Module"),D2.forEach(t),Jb=i(Vh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Vh.forEach(t),Kb=h(oe),yd=s(oe,"P",{});var W2=r(yd);Xb=i(W2,"Finally, this model supports inherent JAX features such as:"),W2.forEach(t),Yb=h(oe),je=s(oe,"UL",{});var _n=r(je);$d=s(_n,"LI",{});var U2=r($d);rr=s(U2,"A",{href:!0,rel:!0});var Q2=r(rr);Zb=i(Q2,"Just-In-Time (JIT) compilation"),Q2.forEach(t),U2.forEach(t),ek=h(_n),Td=s(_n,"LI",{});var R2=r(Td);ar=s(R2,"A",{href:!0,rel:!0});var G2=r(ar);tk=i(G2,"Automatic Differentiation"),G2.forEach(t),R2.forEach(t),ok=h(_n),wd=s(_n,"LI",{});var H2=r(wd);ir=s(H2,"A",{href:!0,rel:!0});var V2=r(ir);nk=i(V2,"Vectorization"),V2.forEach(t),H2.forEach(t),sk=h(_n),xd=s(_n,"LI",{});var J2=r(xd);lr=s(J2,"A",{href:!0,rel:!0});var K2=r(lr);rk=i(K2,"Parallelization"),K2.forEach(t),J2.forEach(t),_n.forEach(t),ak=h(oe),Be=s(oe,"DIV",{class:!0});var bn=r(Be);B(dr.$$.fragment,bn),ik=h(bn),wt=s(bn,"P",{});var zi=r(wt);lk=i(zi,"The "),Fd=s(zi,"CODE",{});var X2=r(Fd);dk=i(X2,"FlaxBigBirdPreTrainedModel"),X2.forEach(t),ck=i(zi," forward method, overrides the "),qd=s(zi,"CODE",{});var Y2=r(qd);pk=i(Y2,"__call__"),Y2.forEach(t),hk=i(zi," special method."),zi.forEach(t),mk=h(bn),B(Oo.$$.fragment,bn),gk=h(bn),B(Io.$$.fragment,bn),bn.forEach(t),oe.forEach(t),Xp=h(o),xt=s(o,"H2",{class:!0});var Jh=r(xt);No=s(Jh,"A",{id:!0,class:!0,href:!0});var Z2=r(No);zd=s(Z2,"SPAN",{});var e$=r(zd);B(cr.$$.fragment,e$),e$.forEach(t),Z2.forEach(t),fk=h(Jh),Md=s(Jh,"SPAN",{});var t$=r(Md);uk=i(t$,"FlaxBigBirdForPreTraining"),t$.forEach(t),Jh.forEach(t),Yp=h(o),A=s(o,"DIV",{class:!0});var ne=r(A);B(pr.$$.fragment,ne),_k=h(ne),Ft=s(ne,"P",{});var Mi=r(Ft);bk=i(Mi,"BigBird Model with two heads on top as done during the pretraining: a "),Ed=s(Mi,"CODE",{});var o$=r(Ed);kk=i(o$,"masked language modeling"),o$.forEach(t),vk=i(Mi," head and a "),jd=s(Mi,"CODE",{});var n$=r(jd);Bk=i(n$,"next sentence prediction (classification)"),n$.forEach(t),yk=i(Mi," head."),Mi.forEach(t),$k=h(ne),hr=s(ne,"P",{});var Kh=r(hr);Tk=i(Kh,"This model inherits from "),ni=s(Kh,"A",{href:!0});var s$=r(ni);wk=i(s$,"FlaxPreTrainedModel"),s$.forEach(t),xk=i(Kh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Kh.forEach(t),Fk=h(ne),mr=s(ne,"P",{});var Xh=r(mr);qk=i(Xh,"This model is also a Flax Linen "),gr=s(Xh,"A",{href:!0,rel:!0});var r$=r(gr);zk=i(r$,"flax.linen.Module"),r$.forEach(t),Mk=i(Xh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Xh.forEach(t),Ek=h(ne),Pd=s(ne,"P",{});var a$=r(Pd);jk=i(a$,"Finally, this model supports inherent JAX features such as:"),a$.forEach(t),Pk=h(ne),Pe=s(ne,"UL",{});var kn=r(Pe);Cd=s(kn,"LI",{});var i$=r(Cd);fr=s(i$,"A",{href:!0,rel:!0});var l$=r(fr);Ck=i(l$,"Just-In-Time (JIT) compilation"),l$.forEach(t),i$.forEach(t),Lk=h(kn),Ld=s(kn,"LI",{});var d$=r(Ld);ur=s(d$,"A",{href:!0,rel:!0});var c$=r(ur);Ak=i(c$,"Automatic Differentiation"),c$.forEach(t),d$.forEach(t),Ok=h(kn),Ad=s(kn,"LI",{});var p$=r(Ad);_r=s(p$,"A",{href:!0,rel:!0});var h$=r(_r);Ik=i(h$,"Vectorization"),h$.forEach(t),p$.forEach(t),Nk=h(kn),Od=s(kn,"LI",{});var m$=r(Od);br=s(m$,"A",{href:!0,rel:!0});var g$=r(br);Sk=i(g$,"Parallelization"),g$.forEach(t),m$.forEach(t),kn.forEach(t),Dk=h(ne),ye=s(ne,"DIV",{class:!0});var vn=r(ye);B(kr.$$.fragment,vn),Wk=h(vn),qt=s(vn,"P",{});var Ei=r(qt);Uk=i(Ei,"The "),Id=s(Ei,"CODE",{});var f$=r(Id);Qk=i(f$,"FlaxBigBirdPreTrainedModel"),f$.forEach(t),Rk=i(Ei," forward method, overrides the "),Nd=s(Ei,"CODE",{});var u$=r(Nd);Gk=i(u$,"__call__"),u$.forEach(t),Hk=i(Ei," special method."),Ei.forEach(t),Vk=h(vn),B(So.$$.fragment,vn),Jk=h(vn),B(Do.$$.fragment,vn),vn.forEach(t),ne.forEach(t),Zp=h(o),zt=s(o,"H2",{class:!0});var Yh=r(zt);Wo=s(Yh,"A",{id:!0,class:!0,href:!0});var _$=r(Wo);Sd=s(_$,"SPAN",{});var b$=r(Sd);B(vr.$$.fragment,b$),b$.forEach(t),_$.forEach(t),Kk=h(Yh),Dd=s(Yh,"SPAN",{});var k$=r(Dd);Xk=i(k$,"FlaxBigBirdForCausalLM"),k$.forEach(t),Yh.forEach(t),eh=h(o),O=s(o,"DIV",{class:!0});var se=r(O);B(Br.$$.fragment,se),Yk=h(se),Wd=s(se,"P",{});var v$=r(Wd);Zk=i(v$,`BigBird Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),v$.forEach(t),ev=h(se),yr=s(se,"P",{});var Zh=r(yr);tv=i(Zh,"This model inherits from "),si=s(Zh,"A",{href:!0});var B$=r(si);ov=i(B$,"FlaxPreTrainedModel"),B$.forEach(t),nv=i(Zh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Zh.forEach(t),sv=h(se),$r=s(se,"P",{});var em=r($r);rv=i(em,"This model is also a Flax Linen "),Tr=s(em,"A",{href:!0,rel:!0});var y$=r(Tr);av=i(y$,"flax.linen.Module"),y$.forEach(t),iv=i(em,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),em.forEach(t),lv=h(se),Ud=s(se,"P",{});var $$=r(Ud);dv=i($$,"Finally, this model supports inherent JAX features such as:"),$$.forEach(t),cv=h(se),Ce=s(se,"UL",{});var Bn=r(Ce);Qd=s(Bn,"LI",{});var T$=r(Qd);wr=s(T$,"A",{href:!0,rel:!0});var w$=r(wr);pv=i(w$,"Just-In-Time (JIT) compilation"),w$.forEach(t),T$.forEach(t),hv=h(Bn),Rd=s(Bn,"LI",{});var x$=r(Rd);xr=s(x$,"A",{href:!0,rel:!0});var F$=r(xr);mv=i(F$,"Automatic Differentiation"),F$.forEach(t),x$.forEach(t),gv=h(Bn),Gd=s(Bn,"LI",{});var q$=r(Gd);Fr=s(q$,"A",{href:!0,rel:!0});var z$=r(Fr);fv=i(z$,"Vectorization"),z$.forEach(t),q$.forEach(t),uv=h(Bn),Hd=s(Bn,"LI",{});var M$=r(Hd);qr=s(M$,"A",{href:!0,rel:!0});var E$=r(qr);_v=i(E$,"Parallelization"),E$.forEach(t),M$.forEach(t),Bn.forEach(t),bv=h(se),$e=s(se,"DIV",{class:!0});var yn=r($e);B(zr.$$.fragment,yn),kv=h(yn),Mt=s(yn,"P",{});var ji=r(Mt);vv=i(ji,"The "),Vd=s(ji,"CODE",{});var j$=r(Vd);Bv=i(j$,"FlaxBigBirdPreTrainedModel"),j$.forEach(t),yv=i(ji," forward method, overrides the "),Jd=s(ji,"CODE",{});var P$=r(Jd);$v=i(P$,"__call__"),P$.forEach(t),Tv=i(ji," special method."),ji.forEach(t),wv=h(yn),B(Uo.$$.fragment,yn),xv=h(yn),B(Qo.$$.fragment,yn),yn.forEach(t),se.forEach(t),th=h(o),Et=s(o,"H2",{class:!0});var tm=r(Et);Ro=s(tm,"A",{id:!0,class:!0,href:!0});var C$=r(Ro);Kd=s(C$,"SPAN",{});var L$=r(Kd);B(Mr.$$.fragment,L$),L$.forEach(t),C$.forEach(t),Fv=h(tm),Xd=s(tm,"SPAN",{});var A$=r(Xd);qv=i(A$,"FlaxBigBirdForMaskedLM"),A$.forEach(t),tm.forEach(t),oh=h(o),I=s(o,"DIV",{class:!0});var re=r(I);B(Er.$$.fragment,re),zv=h(re),jr=s(re,"P",{});var om=r(jr);Mv=i(om,"BigBird Model with a "),Yd=s(om,"CODE",{});var O$=r(Yd);Ev=i(O$,"language modeling"),O$.forEach(t),jv=i(om," head on top."),om.forEach(t),Pv=h(re),Pr=s(re,"P",{});var nm=r(Pr);Cv=i(nm,"This model inherits from "),ri=s(nm,"A",{href:!0});var I$=r(ri);Lv=i(I$,"FlaxPreTrainedModel"),I$.forEach(t),Av=i(nm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nm.forEach(t),Ov=h(re),Cr=s(re,"P",{});var sm=r(Cr);Iv=i(sm,"This model is also a Flax Linen "),Lr=s(sm,"A",{href:!0,rel:!0});var N$=r(Lr);Nv=i(N$,"flax.linen.Module"),N$.forEach(t),Sv=i(sm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),sm.forEach(t),Dv=h(re),Zd=s(re,"P",{});var S$=r(Zd);Wv=i(S$,"Finally, this model supports inherent JAX features such as:"),S$.forEach(t),Uv=h(re),Le=s(re,"UL",{});var $n=r(Le);ec=s($n,"LI",{});var D$=r(ec);Ar=s(D$,"A",{href:!0,rel:!0});var W$=r(Ar);Qv=i(W$,"Just-In-Time (JIT) compilation"),W$.forEach(t),D$.forEach(t),Rv=h($n),tc=s($n,"LI",{});var U$=r(tc);Or=s(U$,"A",{href:!0,rel:!0});var Q$=r(Or);Gv=i(Q$,"Automatic Differentiation"),Q$.forEach(t),U$.forEach(t),Hv=h($n),oc=s($n,"LI",{});var R$=r(oc);Ir=s(R$,"A",{href:!0,rel:!0});var G$=r(Ir);Vv=i(G$,"Vectorization"),G$.forEach(t),R$.forEach(t),Jv=h($n),nc=s($n,"LI",{});var H$=r(nc);Nr=s(H$,"A",{href:!0,rel:!0});var V$=r(Nr);Kv=i(V$,"Parallelization"),V$.forEach(t),H$.forEach(t),$n.forEach(t),Xv=h(re),Te=s(re,"DIV",{class:!0});var Tn=r(Te);B(Sr.$$.fragment,Tn),Yv=h(Tn),jt=s(Tn,"P",{});var Pi=r(jt);Zv=i(Pi,"The "),sc=s(Pi,"CODE",{});var J$=r(sc);eB=i(J$,"FlaxBigBirdPreTrainedModel"),J$.forEach(t),tB=i(Pi," forward method, overrides the "),rc=s(Pi,"CODE",{});var K$=r(rc);oB=i(K$,"__call__"),K$.forEach(t),nB=i(Pi," special method."),Pi.forEach(t),sB=h(Tn),B(Go.$$.fragment,Tn),rB=h(Tn),B(Ho.$$.fragment,Tn),Tn.forEach(t),re.forEach(t),nh=h(o),Pt=s(o,"H2",{class:!0});var rm=r(Pt);Vo=s(rm,"A",{id:!0,class:!0,href:!0});var X$=r(Vo);ac=s(X$,"SPAN",{});var Y$=r(ac);B(Dr.$$.fragment,Y$),Y$.forEach(t),X$.forEach(t),aB=h(rm),ic=s(rm,"SPAN",{});var Z$=r(ic);iB=i(Z$,"FlaxBigBirdForSequenceClassification"),Z$.forEach(t),rm.forEach(t),sh=h(o),N=s(o,"DIV",{class:!0});var ae=r(N);B(Wr.$$.fragment,ae),lB=h(ae),lc=s(ae,"P",{});var eT=r(lc);dB=i(eT,`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),eT.forEach(t),cB=h(ae),Ur=s(ae,"P",{});var am=r(Ur);pB=i(am,"This model inherits from "),ai=s(am,"A",{href:!0});var tT=r(ai);hB=i(tT,"FlaxPreTrainedModel"),tT.forEach(t),mB=i(am,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),am.forEach(t),gB=h(ae),Qr=s(ae,"P",{});var im=r(Qr);fB=i(im,"This model is also a Flax Linen "),Rr=s(im,"A",{href:!0,rel:!0});var oT=r(Rr);uB=i(oT,"flax.linen.Module"),oT.forEach(t),_B=i(im,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),im.forEach(t),bB=h(ae),dc=s(ae,"P",{});var nT=r(dc);kB=i(nT,"Finally, this model supports inherent JAX features such as:"),nT.forEach(t),vB=h(ae),Ae=s(ae,"UL",{});var wn=r(Ae);cc=s(wn,"LI",{});var sT=r(cc);Gr=s(sT,"A",{href:!0,rel:!0});var rT=r(Gr);BB=i(rT,"Just-In-Time (JIT) compilation"),rT.forEach(t),sT.forEach(t),yB=h(wn),pc=s(wn,"LI",{});var aT=r(pc);Hr=s(aT,"A",{href:!0,rel:!0});var iT=r(Hr);$B=i(iT,"Automatic Differentiation"),iT.forEach(t),aT.forEach(t),TB=h(wn),hc=s(wn,"LI",{});var lT=r(hc);Vr=s(lT,"A",{href:!0,rel:!0});var dT=r(Vr);wB=i(dT,"Vectorization"),dT.forEach(t),lT.forEach(t),xB=h(wn),mc=s(wn,"LI",{});var cT=r(mc);Jr=s(cT,"A",{href:!0,rel:!0});var pT=r(Jr);FB=i(pT,"Parallelization"),pT.forEach(t),cT.forEach(t),wn.forEach(t),qB=h(ae),we=s(ae,"DIV",{class:!0});var xn=r(we);B(Kr.$$.fragment,xn),zB=h(xn),Ct=s(xn,"P",{});var Ci=r(Ct);MB=i(Ci,"The "),gc=s(Ci,"CODE",{});var hT=r(gc);EB=i(hT,"FlaxBigBirdPreTrainedModel"),hT.forEach(t),jB=i(Ci," forward method, overrides the "),fc=s(Ci,"CODE",{});var mT=r(fc);PB=i(mT,"__call__"),mT.forEach(t),CB=i(Ci," special method."),Ci.forEach(t),LB=h(xn),B(Jo.$$.fragment,xn),AB=h(xn),B(Ko.$$.fragment,xn),xn.forEach(t),ae.forEach(t),rh=h(o),Lt=s(o,"H2",{class:!0});var lm=r(Lt);Xo=s(lm,"A",{id:!0,class:!0,href:!0});var gT=r(Xo);uc=s(gT,"SPAN",{});var fT=r(uc);B(Xr.$$.fragment,fT),fT.forEach(t),gT.forEach(t),OB=h(lm),_c=s(lm,"SPAN",{});var uT=r(_c);IB=i(uT,"FlaxBigBirdForMultipleChoice"),uT.forEach(t),lm.forEach(t),ah=h(o),S=s(o,"DIV",{class:!0});var ie=r(S);B(Yr.$$.fragment,ie),NB=h(ie),bc=s(ie,"P",{});var _T=r(bc);SB=i(_T,`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),_T.forEach(t),DB=h(ie),Zr=s(ie,"P",{});var dm=r(Zr);WB=i(dm,"This model inherits from "),ii=s(dm,"A",{href:!0});var bT=r(ii);UB=i(bT,"FlaxPreTrainedModel"),bT.forEach(t),QB=i(dm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),dm.forEach(t),RB=h(ie),ea=s(ie,"P",{});var cm=r(ea);GB=i(cm,"This model is also a Flax Linen "),ta=s(cm,"A",{href:!0,rel:!0});var kT=r(ta);HB=i(kT,"flax.linen.Module"),kT.forEach(t),VB=i(cm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),cm.forEach(t),JB=h(ie),kc=s(ie,"P",{});var vT=r(kc);KB=i(vT,"Finally, this model supports inherent JAX features such as:"),vT.forEach(t),XB=h(ie),Oe=s(ie,"UL",{});var Fn=r(Oe);vc=s(Fn,"LI",{});var BT=r(vc);oa=s(BT,"A",{href:!0,rel:!0});var yT=r(oa);YB=i(yT,"Just-In-Time (JIT) compilation"),yT.forEach(t),BT.forEach(t),ZB=h(Fn),Bc=s(Fn,"LI",{});var $T=r(Bc);na=s($T,"A",{href:!0,rel:!0});var TT=r(na);e0=i(TT,"Automatic Differentiation"),TT.forEach(t),$T.forEach(t),t0=h(Fn),yc=s(Fn,"LI",{});var wT=r(yc);sa=s(wT,"A",{href:!0,rel:!0});var xT=r(sa);o0=i(xT,"Vectorization"),xT.forEach(t),wT.forEach(t),n0=h(Fn),$c=s(Fn,"LI",{});var FT=r($c);ra=s(FT,"A",{href:!0,rel:!0});var qT=r(ra);s0=i(qT,"Parallelization"),qT.forEach(t),FT.forEach(t),Fn.forEach(t),r0=h(ie),xe=s(ie,"DIV",{class:!0});var qn=r(xe);B(aa.$$.fragment,qn),a0=h(qn),At=s(qn,"P",{});var Li=r(At);i0=i(Li,"The "),Tc=s(Li,"CODE",{});var zT=r(Tc);l0=i(zT,"FlaxBigBirdPreTrainedModel"),zT.forEach(t),d0=i(Li," forward method, overrides the "),wc=s(Li,"CODE",{});var MT=r(wc);c0=i(MT,"__call__"),MT.forEach(t),p0=i(Li," special method."),Li.forEach(t),h0=h(qn),B(Yo.$$.fragment,qn),m0=h(qn),B(Zo.$$.fragment,qn),qn.forEach(t),ie.forEach(t),ih=h(o),Ot=s(o,"H2",{class:!0});var pm=r(Ot);en=s(pm,"A",{id:!0,class:!0,href:!0});var ET=r(en);xc=s(ET,"SPAN",{});var jT=r(xc);B(ia.$$.fragment,jT),jT.forEach(t),ET.forEach(t),g0=h(pm),Fc=s(pm,"SPAN",{});var PT=r(Fc);f0=i(PT,"FlaxBigBirdForTokenClassification"),PT.forEach(t),pm.forEach(t),lh=h(o),D=s(o,"DIV",{class:!0});var le=r(D);B(la.$$.fragment,le),u0=h(le),qc=s(le,"P",{});var CT=r(qc);_0=i(CT,`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),CT.forEach(t),b0=h(le),da=s(le,"P",{});var hm=r(da);k0=i(hm,"This model inherits from "),li=s(hm,"A",{href:!0});var LT=r(li);v0=i(LT,"FlaxPreTrainedModel"),LT.forEach(t),B0=i(hm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),hm.forEach(t),y0=h(le),ca=s(le,"P",{});var mm=r(ca);$0=i(mm,"This model is also a Flax Linen "),pa=s(mm,"A",{href:!0,rel:!0});var AT=r(pa);T0=i(AT,"flax.linen.Module"),AT.forEach(t),w0=i(mm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),mm.forEach(t),x0=h(le),zc=s(le,"P",{});var OT=r(zc);F0=i(OT,"Finally, this model supports inherent JAX features such as:"),OT.forEach(t),q0=h(le),Ie=s(le,"UL",{});var zn=r(Ie);Mc=s(zn,"LI",{});var IT=r(Mc);ha=s(IT,"A",{href:!0,rel:!0});var NT=r(ha);z0=i(NT,"Just-In-Time (JIT) compilation"),NT.forEach(t),IT.forEach(t),M0=h(zn),Ec=s(zn,"LI",{});var ST=r(Ec);ma=s(ST,"A",{href:!0,rel:!0});var DT=r(ma);E0=i(DT,"Automatic Differentiation"),DT.forEach(t),ST.forEach(t),j0=h(zn),jc=s(zn,"LI",{});var WT=r(jc);ga=s(WT,"A",{href:!0,rel:!0});var UT=r(ga);P0=i(UT,"Vectorization"),UT.forEach(t),WT.forEach(t),C0=h(zn),Pc=s(zn,"LI",{});var QT=r(Pc);fa=s(QT,"A",{href:!0,rel:!0});var RT=r(fa);L0=i(RT,"Parallelization"),RT.forEach(t),QT.forEach(t),zn.forEach(t),A0=h(le),Fe=s(le,"DIV",{class:!0});var Mn=r(Fe);B(ua.$$.fragment,Mn),O0=h(Mn),It=s(Mn,"P",{});var Ai=r(It);I0=i(Ai,"The "),Cc=s(Ai,"CODE",{});var GT=r(Cc);N0=i(GT,"FlaxBigBirdPreTrainedModel"),GT.forEach(t),S0=i(Ai," forward method, overrides the "),Lc=s(Ai,"CODE",{});var HT=r(Lc);D0=i(HT,"__call__"),HT.forEach(t),W0=i(Ai," special method."),Ai.forEach(t),U0=h(Mn),B(tn.$$.fragment,Mn),Q0=h(Mn),B(on.$$.fragment,Mn),Mn.forEach(t),le.forEach(t),dh=h(o),Nt=s(o,"H2",{class:!0});var gm=r(Nt);nn=s(gm,"A",{id:!0,class:!0,href:!0});var VT=r(nn);Ac=s(VT,"SPAN",{});var JT=r(Ac);B(_a.$$.fragment,JT),JT.forEach(t),VT.forEach(t),R0=h(gm),Oc=s(gm,"SPAN",{});var KT=r(Oc);G0=i(KT,"FlaxBigBirdForQuestionAnswering"),KT.forEach(t),gm.forEach(t),ch=h(o),W=s(o,"DIV",{class:!0});var de=r(W);B(ba.$$.fragment,de),H0=h(de),St=s(de,"P",{});var Oi=r(St);V0=i(Oi,`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ic=s(Oi,"CODE",{});var XT=r(Ic);J0=i(XT,"span start logits"),XT.forEach(t),K0=i(Oi," and "),Nc=s(Oi,"CODE",{});var YT=r(Nc);X0=i(YT,"span end logits"),YT.forEach(t),Y0=i(Oi,")."),Oi.forEach(t),Z0=h(de),ka=s(de,"P",{});var fm=r(ka);ey=i(fm,"This model inherits from "),di=s(fm,"A",{href:!0});var ZT=r(di);ty=i(ZT,"FlaxPreTrainedModel"),ZT.forEach(t),oy=i(fm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fm.forEach(t),ny=h(de),va=s(de,"P",{});var um=r(va);sy=i(um,"This model is also a Flax Linen "),Ba=s(um,"A",{href:!0,rel:!0});var ew=r(Ba);ry=i(ew,"flax.linen.Module"),ew.forEach(t),ay=i(um,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),um.forEach(t),iy=h(de),Sc=s(de,"P",{});var tw=r(Sc);ly=i(tw,"Finally, this model supports inherent JAX features such as:"),tw.forEach(t),dy=h(de),Ne=s(de,"UL",{});var En=r(Ne);Dc=s(En,"LI",{});var ow=r(Dc);ya=s(ow,"A",{href:!0,rel:!0});var nw=r(ya);cy=i(nw,"Just-In-Time (JIT) compilation"),nw.forEach(t),ow.forEach(t),py=h(En),Wc=s(En,"LI",{});var sw=r(Wc);$a=s(sw,"A",{href:!0,rel:!0});var rw=r($a);hy=i(rw,"Automatic Differentiation"),rw.forEach(t),sw.forEach(t),my=h(En),Uc=s(En,"LI",{});var aw=r(Uc);Ta=s(aw,"A",{href:!0,rel:!0});var iw=r(Ta);gy=i(iw,"Vectorization"),iw.forEach(t),aw.forEach(t),fy=h(En),Qc=s(En,"LI",{});var lw=r(Qc);wa=s(lw,"A",{href:!0,rel:!0});var dw=r(wa);uy=i(dw,"Parallelization"),dw.forEach(t),lw.forEach(t),En.forEach(t),_y=h(de),qe=s(de,"DIV",{class:!0});var jn=r(qe);B(xa.$$.fragment,jn),by=h(jn),Dt=s(jn,"P",{});var Ii=r(Dt);ky=i(Ii,"The "),ci=s(Ii,"A",{href:!0});var cw=r(ci);vy=i(cw,"FlaxBigBirdForQuestionAnswering"),cw.forEach(t),By=i(Ii," forward method, overrides the "),Rc=s(Ii,"CODE",{});var pw=r(Rc);yy=i(pw,"__call__"),pw.forEach(t),$y=i(Ii," special method."),Ii.forEach(t),Ty=h(jn),B(sn.$$.fragment,jn),wy=h(jn),B(rn.$$.fragment,jn),jn.forEach(t),de.forEach(t),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(ox)),c(f,"id","bigbird"),c(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(f,"href","#bigbird"),c(g,"class","relative group"),c(Qt,"id","overview"),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#overview"),c(Je,"class","relative group"),c(Cn,"href","https://arxiv.org/abs/2007.14062"),c(Cn,"rel","nofollow"),c(An,"href","https://huggingface.co/blog/big-bird"),c(An,"rel","nofollow"),c(In,"href","https://huggingface.co/vasudevgupta"),c(In,"rel","nofollow"),c(Nn,"href","https://github.com/google-research/bigbird"),c(Nn,"rel","nofollow"),c(Gt,"id","transformers.BigBirdConfig"),c(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gt,"href","#transformers.BigBirdConfig"),c(Ke,"class","relative group"),c(Oa,"href","/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdModel"),c(Wn,"href","https://huggingface.co/google/bigbird-roberta-base"),c(Wn,"rel","nofollow"),c(Ia,"href","/docs/transformers/v4.20.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(Na,"href","/docs/transformers/v4.20.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(Jt,"id","initializing-a-bigbird-google/bigbird-roberta-base-style-configuration->>>-configuration-="),c(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jt,"href","#initializing-a-bigbird-google/bigbird-roberta-base-style-configuration->>>-configuration-="),c(Vt,"class","relative group"),c(Xt,"id","initializing-a-model-from-the-google/bigbird-roberta-base-style-configuration->>>-model-="),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#initializing-a-model-from-the-google/bigbird-roberta-base-style-configuration->>>-model-="),c(Kt,"class","relative group"),c(Zt,"id","accessing-the-model-configuration->>>-configuration-=-model.config"),c(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zt,"href","#accessing-the-model-configuration->>>-configuration-=-model.config"),c(Yt,"class","relative group"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(eo,"id","transformers.BigBirdTokenizer"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.BigBirdTokenizer"),c(Ze,"class","relative group"),c(Xn,"href","https://github.com/google/sentencepiece"),c(Xn,"rel","nofollow"),c(Sa,"href","/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ua,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(no,"id","transformers.BigBirdTokenizerFast"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.BigBirdTokenizerFast"),c(tt,"class","relative group"),c(is,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),c(is,"rel","nofollow"),c(Qa,"href","/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ao,"id","transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"),c(ot,"class","relative group"),c(Ha,"href","/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdForPreTraining"),c(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(io,"id","transformers.BigBirdModel"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.BigBirdModel"),c(st,"class","relative group"),c(ks,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ks,"rel","nofollow"),c(Bs,"href","https://arxiv.org/abs/1706.03762"),c(Bs,"rel","nofollow"),c(Va,"href","/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdModel"),c(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(po,"id","transformers.BigBirdForPreTraining"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.BigBirdForPreTraining"),c(at,"class","relative group"),c(Ja,"href","/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdForPreTraining"),c(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(go,"id","transformers.BigBirdForCausalLM"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.BigBirdForCausalLM"),c(dt,"class","relative group"),c(qs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(qs,"rel","nofollow"),c(Ka,"href","/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdForCausalLM"),c(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(_o,"id","transformers.BigBirdForMaskedLM"),c(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_o,"href","#transformers.BigBirdForMaskedLM"),c(ht,"class","relative group"),c(js,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(js,"rel","nofollow"),c(Xa,"href","/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdForMaskedLM"),c(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Bo,"id","transformers.BigBirdForSequenceClassification"),c(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Bo,"href","#transformers.BigBirdForSequenceClassification"),c(ft,"class","relative group"),c(Os,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Os,"rel","nofollow"),c(Ya,"href","/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdForSequenceClassification"),c(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(wo,"id","transformers.BigBirdForMultipleChoice"),c(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wo,"href","#transformers.BigBirdForMultipleChoice"),c(_t,"class","relative group"),c(Ws,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ws,"rel","nofollow"),c(Za,"href","/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdForMultipleChoice"),c(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(qo,"id","transformers.BigBirdForTokenClassification"),c(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qo,"href","#transformers.BigBirdForTokenClassification"),c(kt,"class","relative group"),c(Hs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Hs,"rel","nofollow"),c(ei,"href","/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdForTokenClassification"),c(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(jo,"id","transformers.BigBirdForQuestionAnswering"),c(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jo,"href","#transformers.BigBirdForQuestionAnswering"),c(Bt,"class","relative group"),c(Ys,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ys,"rel","nofollow"),c(ti,"href","/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.BigBirdForQuestionAnswering"),c(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ao,"id","transformers.FlaxBigBirdModel"),c(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ao,"href","#transformers.FlaxBigBirdModel"),c(Tt,"class","relative group"),c(oi,"href","/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(sr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(sr,"rel","nofollow"),c(rr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(rr,"rel","nofollow"),c(ar,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ar,"rel","nofollow"),c(ir,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ir,"rel","nofollow"),c(lr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(lr,"rel","nofollow"),c(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(No,"id","transformers.FlaxBigBirdForPreTraining"),c(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(No,"href","#transformers.FlaxBigBirdForPreTraining"),c(xt,"class","relative group"),c(ni,"href","/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(gr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(gr,"rel","nofollow"),c(fr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(fr,"rel","nofollow"),c(ur,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ur,"rel","nofollow"),c(_r,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(_r,"rel","nofollow"),c(br,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(br,"rel","nofollow"),c(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Wo,"id","transformers.FlaxBigBirdForCausalLM"),c(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wo,"href","#transformers.FlaxBigBirdForCausalLM"),c(zt,"class","relative group"),c(si,"href","/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Tr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Tr,"rel","nofollow"),c(wr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(wr,"rel","nofollow"),c(xr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(xr,"rel","nofollow"),c(Fr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Fr,"rel","nofollow"),c(qr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(qr,"rel","nofollow"),c($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ro,"id","transformers.FlaxBigBirdForMaskedLM"),c(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ro,"href","#transformers.FlaxBigBirdForMaskedLM"),c(Et,"class","relative group"),c(ri,"href","/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Lr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Lr,"rel","nofollow"),c(Ar,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ar,"rel","nofollow"),c(Or,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Or,"rel","nofollow"),c(Ir,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ir,"rel","nofollow"),c(Nr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Nr,"rel","nofollow"),c(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Vo,"id","transformers.FlaxBigBirdForSequenceClassification"),c(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vo,"href","#transformers.FlaxBigBirdForSequenceClassification"),c(Pt,"class","relative group"),c(ai,"href","/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Rr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Rr,"rel","nofollow"),c(Gr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Gr,"rel","nofollow"),c(Hr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Hr,"rel","nofollow"),c(Vr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Vr,"rel","nofollow"),c(Jr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Jr,"rel","nofollow"),c(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Xo,"id","transformers.FlaxBigBirdForMultipleChoice"),c(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xo,"href","#transformers.FlaxBigBirdForMultipleChoice"),c(Lt,"class","relative group"),c(ii,"href","/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ta,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ta,"rel","nofollow"),c(oa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(oa,"rel","nofollow"),c(na,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(na,"rel","nofollow"),c(sa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(sa,"rel","nofollow"),c(ra,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ra,"rel","nofollow"),c(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(en,"id","transformers.FlaxBigBirdForTokenClassification"),c(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(en,"href","#transformers.FlaxBigBirdForTokenClassification"),c(Ot,"class","relative group"),c(li,"href","/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(pa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(pa,"rel","nofollow"),c(ha,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ha,"rel","nofollow"),c(ma,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ma,"rel","nofollow"),c(ga,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ga,"rel","nofollow"),c(fa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(fa,"rel","nofollow"),c(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(nn,"id","transformers.FlaxBigBirdForQuestionAnswering"),c(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(nn,"href","#transformers.FlaxBigBirdForQuestionAnswering"),c(Nt,"class","relative group"),c(di,"href","/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ba,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Ba,"rel","nofollow"),c(ya,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ya,"rel","nofollow"),c($a,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c($a,"rel","nofollow"),c(Ta,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ta,"rel","nofollow"),c(wa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(wa,"rel","nofollow"),c(ci,"href","/docs/transformers/v4.20.0/en/model_doc/big_bird#transformers.FlaxBigBirdForQuestionAnswering"),c(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,u){e(document.head,d),k(o,_,u),k(o,g,u),e(g,f),e(f,b),y(l,b,null),e(g,m),e(g,F),e(F,_m),k(o,bp,u),k(o,Je,u),e(Je,Qt),e(Qt,Ni),y(Pn,Ni,null),e(Je,bm),e(Je,Si),e(Si,km),k(o,kp,u),k(o,Rt,u),e(Rt,vm),e(Rt,Cn),e(Cn,Bm),e(Rt,ym),k(o,vp,u),k(o,Pa,u),e(Pa,$m),k(o,Bp,u),k(o,Ca,u),e(Ca,Di),e(Di,Tm),k(o,yp,u),k(o,La,u),e(La,wm),k(o,$p,u),k(o,R,u),e(R,Ln),e(Ln,xm),e(Ln,An),e(An,Fm),e(Ln,qm),e(R,zm),e(R,ce),e(ce,Mm),e(ce,Wi),e(Wi,Em),e(ce,jm),e(ce,Ui),e(Ui,Pm),e(ce,Cm),e(ce,Qi),e(Qi,Lm),e(ce,Am),e(ce,Ri),e(Ri,Om),e(ce,Im),e(R,Nm),e(R,Gi),e(Gi,Sm),e(R,Dm),e(R,Hi),e(Hi,Wm),e(R,Um),e(R,On),e(On,Qm),e(On,Vi),e(Vi,Rm),e(On,Gm),e(R,Hm),e(R,Aa),e(Aa,Vm),e(Aa,Ji),e(Ji,Jm),k(o,Tp,u),k(o,Se,u),e(Se,Km),e(Se,In),e(In,Xm),e(Se,Ym),e(Se,Nn),e(Nn,Zm),e(Se,eg),k(o,wp,u),k(o,Ke,u),e(Ke,Gt),e(Gt,Ki),y(Sn,Ki,null),e(Ke,tg),e(Ke,Xi),e(Xi,og),k(o,xp,u),k(o,P,u),y(Dn,P,null),e(P,ng),e(P,Xe),e(Xe,sg),e(Xe,Oa),e(Oa,rg),e(Xe,ag),e(Xe,Wn),e(Wn,ig),e(Xe,lg),e(P,dg),e(P,Ye),e(Ye,cg),e(Ye,Ia),e(Ia,pg),e(Ye,hg),e(Ye,Na),e(Na,mg),e(Ye,gg),e(P,fg),y(Ht,P,null),e(P,ug),e(P,Yi),e(Yi,Zi),e(Zi,el),e(el,tl),e(tl,_g),e(P,bg),e(P,ol),e(ol,nl),e(nl,Un),e(Un,Vt),e(Vt,Jt),e(Jt,sl),y(Qn,sl,null),e(Vt,kg),e(Vt,rl),e(rl,vg),e(Un,Bg),e(Un,al),e(al,yg),e(P,$g),e(P,il),e(il,ll),e(ll,Rn),e(Rn,Kt),e(Kt,Xt),e(Xt,dl),y(Gn,dl,null),e(Kt,Tg),e(Kt,cl),e(cl,wg),e(Rn,xg),e(Rn,pl),e(pl,Fg),e(P,qg),e(P,hl),e(hl,ml),e(ml,gl),e(gl,Yt),e(Yt,Zt),e(Zt,fl),y(Hn,fl,null),e(Yt,zg),e(Yt,ul),e(ul,Mg),k(o,Fp,u),k(o,Ze,u),e(Ze,eo),e(eo,_l),y(Vn,_l,null),e(Ze,Eg),e(Ze,bl),e(bl,jg),k(o,qp,u),k(o,C,u),y(Jn,C,null),e(C,Pg),e(C,Kn),e(Kn,Cg),e(Kn,Xn),e(Xn,Lg),e(Kn,Ag),e(C,Og),e(C,Yn),e(Yn,Ig),e(Yn,Sa),e(Sa,Ng),e(Yn,Sg),e(C,Dg),e(C,De),y(Zn,De,null),e(De,Wg),e(De,kl),e(kl,Ug),e(De,Qg),e(De,es),e(es,Da),e(Da,Rg),e(Da,vl),e(vl,Gg),e(es,Hg),e(es,Wa),e(Wa,Vg),e(Wa,Bl),e(Bl,Jg),e(C,Kg),e(C,to),y(ts,to,null),e(to,Xg),e(to,os),e(os,Yg),e(os,yl),e(yl,Zg),e(os,ef),e(C,tf),e(C,oo),y(ns,oo,null),e(oo,of),e(oo,et),e(et,nf),e(et,$l),e($l,sf),e(et,rf),e(et,Tl),e(Tl,af),e(et,lf),e(C,df),e(C,Ua),y(ss,Ua,null),k(o,zp,u),k(o,tt,u),e(tt,no),e(no,wl),y(rs,wl,null),e(tt,cf),e(tt,xl),e(xl,pf),k(o,Mp,u),k(o,H,u),y(as,H,null),e(H,hf),e(H,ze),e(ze,mf),e(ze,Fl),e(Fl,gf),e(ze,ff),e(ze,is),e(is,uf),e(ze,_f),e(ze,Qa),e(Qa,bf),e(ze,kf),e(H,vf),e(H,We),y(ls,We,null),e(We,Bf),e(We,ql),e(ql,yf),e(We,$f),e(We,ds),e(ds,Ra),e(Ra,Tf),e(Ra,zl),e(zl,wf),e(ds,xf),e(ds,Ga),e(Ga,Ff),e(Ga,Ml),e(Ml,qf),e(H,zf),e(H,ue),y(cs,ue,null),e(ue,Mf),e(ue,El),e(El,Ef),e(ue,jf),y(so,ue,null),e(ue,Pf),e(ue,jl),e(jl,Cf),e(H,Lf),e(H,ro),y(ps,ro,null),e(ro,Af),e(ro,hs),e(hs,Of),e(hs,Pl),e(Pl,If),e(hs,Nf),k(o,Ep,u),k(o,ot,u),e(ot,ao),e(ao,Cl),y(ms,Cl,null),e(ot,Sf),e(ot,Ll),e(Ll,Df),k(o,jp,u),k(o,nt,u),y(gs,nt,null),e(nt,Wf),e(nt,fs),e(fs,Uf),e(fs,Ha),e(Ha,Qf),e(fs,Rf),k(o,Pp,u),k(o,st,u),e(st,io),e(io,Al),y(us,Al,null),e(st,Gf),e(st,Ol),e(Ol,Hf),k(o,Cp,u),k(o,V,u),y(_s,V,null),e(V,Vf),e(V,bs),e(bs,Jf),e(bs,ks),e(ks,Kf),e(bs,Xf),e(V,Yf),e(V,vs),e(vs,Zf),e(vs,Bs),e(Bs,eu),e(vs,tu),e(V,ou),e(V,Q),e(Q,nu),e(Q,Il),e(Il,su),e(Q,ru),e(Q,Nl),e(Nl,au),e(Q,iu),e(Q,Sl),e(Sl,lu),e(Q,du),e(Q,Dl),e(Dl,cu),e(Q,pu),e(Q,Wl),e(Wl,hu),e(Q,mu),e(Q,Ul),e(Ul,gu),e(Q,fu),e(V,uu),e(V,_e),y(ys,_e,null),e(_e,_u),e(_e,rt),e(rt,bu),e(rt,Va),e(Va,ku),e(rt,vu),e(rt,Ql),e(Ql,Bu),e(rt,yu),e(_e,$u),y(lo,_e,null),e(_e,Tu),y(co,_e,null),k(o,Lp,u),k(o,at,u),e(at,po),e(po,Rl),y($s,Rl,null),e(at,wu),e(at,Gl),e(Gl,xu),k(o,Ap,u),k(o,it,u),y(Ts,it,null),e(it,Fu),e(it,be),y(ws,be,null),e(be,qu),e(be,lt),e(lt,zu),e(lt,Ja),e(Ja,Mu),e(lt,Eu),e(lt,Hl),e(Hl,ju),e(lt,Pu),e(be,Cu),y(ho,be,null),e(be,Lu),y(mo,be,null),k(o,Op,u),k(o,dt,u),e(dt,go),e(go,Vl),y(xs,Vl,null),e(dt,Au),e(dt,Jl),e(Jl,Ou),k(o,Ip,u),k(o,Me,u),y(Fs,Me,null),e(Me,Iu),e(Me,ct),e(ct,Nu),e(ct,Kl),e(Kl,Su),e(ct,Du),e(ct,qs),e(qs,Wu),e(ct,Uu),e(Me,Qu),e(Me,ke),y(zs,ke,null),e(ke,Ru),e(ke,pt),e(pt,Gu),e(pt,Ka),e(Ka,Hu),e(pt,Vu),e(pt,Xl),e(Xl,Ju),e(pt,Ku),e(ke,Xu),y(fo,ke,null),e(ke,Yu),y(uo,ke,null),k(o,Np,u),k(o,ht,u),e(ht,_o),e(_o,Yl),y(Ms,Yl,null),e(ht,Zu),e(ht,Zl),e(Zl,e_),k(o,Sp,u),k(o,Ee,u),y(Es,Ee,null),e(Ee,t_),e(Ee,mt),e(mt,o_),e(mt,ed),e(ed,n_),e(mt,s_),e(mt,js),e(js,r_),e(mt,a_),e(Ee,i_),e(Ee,K),y(Ps,K,null),e(K,l_),e(K,gt),e(gt,d_),e(gt,Xa),e(Xa,c_),e(gt,p_),e(gt,td),e(td,h_),e(gt,m_),e(K,g_),y(bo,K,null),e(K,f_),y(ko,K,null),e(K,u_),y(vo,K,null),k(o,Dp,u),k(o,ft,u),e(ft,Bo),e(Bo,od),y(Cs,od,null),e(ft,__),e(ft,nd),e(nd,b_),k(o,Wp,u),k(o,pe,u),y(Ls,pe,null),e(pe,k_),e(pe,sd),e(sd,v_),e(pe,B_),e(pe,As),e(As,y_),e(As,Os),e(Os,$_),e(As,T_),e(pe,w_),e(pe,X),y(Is,X,null),e(X,x_),e(X,ut),e(ut,F_),e(ut,Ya),e(Ya,q_),e(ut,z_),e(ut,rd),e(rd,M_),e(ut,E_),e(X,j_),y(yo,X,null),e(X,P_),y($o,X,null),e(X,C_),y(To,X,null),k(o,Up,u),k(o,_t,u),e(_t,wo),e(wo,ad),y(Ns,ad,null),e(_t,L_),e(_t,id),e(id,A_),k(o,Qp,u),k(o,he,u),y(Ss,he,null),e(he,O_),e(he,ld),e(ld,I_),e(he,N_),e(he,Ds),e(Ds,S_),e(Ds,Ws),e(Ws,D_),e(Ds,W_),e(he,U_),e(he,ve),y(Us,ve,null),e(ve,Q_),e(ve,bt),e(bt,R_),e(bt,Za),e(Za,G_),e(bt,H_),e(bt,dd),e(dd,V_),e(bt,J_),e(ve,K_),y(xo,ve,null),e(ve,X_),y(Fo,ve,null),k(o,Rp,u),k(o,kt,u),e(kt,qo),e(qo,cd),y(Qs,cd,null),e(kt,Y_),e(kt,pd),e(pd,Z_),k(o,Gp,u),k(o,me,u),y(Rs,me,null),e(me,eb),e(me,hd),e(hd,tb),e(me,ob),e(me,Gs),e(Gs,nb),e(Gs,Hs),e(Hs,sb),e(Gs,rb),e(me,ab),e(me,Y),y(Vs,Y,null),e(Y,ib),e(Y,vt),e(vt,lb),e(vt,ei),e(ei,db),e(vt,cb),e(vt,md),e(md,pb),e(vt,hb),e(Y,mb),y(zo,Y,null),e(Y,gb),y(Mo,Y,null),e(Y,fb),y(Eo,Y,null),k(o,Hp,u),k(o,Bt,u),e(Bt,jo),e(jo,gd),y(Js,gd,null),e(Bt,ub),e(Bt,fd),e(fd,_b),k(o,Vp,u),k(o,ge,u),y(Ks,ge,null),e(ge,bb),e(ge,yt),e(yt,kb),e(yt,ud),e(ud,vb),e(yt,Bb),e(yt,_d),e(_d,yb),e(yt,$b),e(ge,Tb),e(ge,Xs),e(Xs,wb),e(Xs,Ys),e(Ys,xb),e(Xs,Fb),e(ge,qb),e(ge,Z),y(Zs,Z,null),e(Z,zb),e(Z,$t),e($t,Mb),e($t,ti),e(ti,Eb),e($t,jb),e($t,bd),e(bd,Pb),e($t,Cb),e(Z,Lb),y(Po,Z,null),e(Z,Ab),y(Co,Z,null),e(Z,Ob),y(Lo,Z,null),k(o,Jp,u),k(o,Tt,u),e(Tt,Ao),e(Ao,kd),y(er,kd,null),e(Tt,Ib),e(Tt,vd),e(vd,Nb),k(o,Kp,u),k(o,L,u),y(tr,L,null),e(L,Sb),e(L,Bd),e(Bd,Db),e(L,Wb),e(L,or),e(or,Ub),e(or,oi),e(oi,Qb),e(or,Rb),e(L,Gb),e(L,nr),e(nr,Hb),e(nr,sr),e(sr,Vb),e(nr,Jb),e(L,Kb),e(L,yd),e(yd,Xb),e(L,Yb),e(L,je),e(je,$d),e($d,rr),e(rr,Zb),e(je,ek),e(je,Td),e(Td,ar),e(ar,tk),e(je,ok),e(je,wd),e(wd,ir),e(ir,nk),e(je,sk),e(je,xd),e(xd,lr),e(lr,rk),e(L,ak),e(L,Be),y(dr,Be,null),e(Be,ik),e(Be,wt),e(wt,lk),e(wt,Fd),e(Fd,dk),e(wt,ck),e(wt,qd),e(qd,pk),e(wt,hk),e(Be,mk),y(Oo,Be,null),e(Be,gk),y(Io,Be,null),k(o,Xp,u),k(o,xt,u),e(xt,No),e(No,zd),y(cr,zd,null),e(xt,fk),e(xt,Md),e(Md,uk),k(o,Yp,u),k(o,A,u),y(pr,A,null),e(A,_k),e(A,Ft),e(Ft,bk),e(Ft,Ed),e(Ed,kk),e(Ft,vk),e(Ft,jd),e(jd,Bk),e(Ft,yk),e(A,$k),e(A,hr),e(hr,Tk),e(hr,ni),e(ni,wk),e(hr,xk),e(A,Fk),e(A,mr),e(mr,qk),e(mr,gr),e(gr,zk),e(mr,Mk),e(A,Ek),e(A,Pd),e(Pd,jk),e(A,Pk),e(A,Pe),e(Pe,Cd),e(Cd,fr),e(fr,Ck),e(Pe,Lk),e(Pe,Ld),e(Ld,ur),e(ur,Ak),e(Pe,Ok),e(Pe,Ad),e(Ad,_r),e(_r,Ik),e(Pe,Nk),e(Pe,Od),e(Od,br),e(br,Sk),e(A,Dk),e(A,ye),y(kr,ye,null),e(ye,Wk),e(ye,qt),e(qt,Uk),e(qt,Id),e(Id,Qk),e(qt,Rk),e(qt,Nd),e(Nd,Gk),e(qt,Hk),e(ye,Vk),y(So,ye,null),e(ye,Jk),y(Do,ye,null),k(o,Zp,u),k(o,zt,u),e(zt,Wo),e(Wo,Sd),y(vr,Sd,null),e(zt,Kk),e(zt,Dd),e(Dd,Xk),k(o,eh,u),k(o,O,u),y(Br,O,null),e(O,Yk),e(O,Wd),e(Wd,Zk),e(O,ev),e(O,yr),e(yr,tv),e(yr,si),e(si,ov),e(yr,nv),e(O,sv),e(O,$r),e($r,rv),e($r,Tr),e(Tr,av),e($r,iv),e(O,lv),e(O,Ud),e(Ud,dv),e(O,cv),e(O,Ce),e(Ce,Qd),e(Qd,wr),e(wr,pv),e(Ce,hv),e(Ce,Rd),e(Rd,xr),e(xr,mv),e(Ce,gv),e(Ce,Gd),e(Gd,Fr),e(Fr,fv),e(Ce,uv),e(Ce,Hd),e(Hd,qr),e(qr,_v),e(O,bv),e(O,$e),y(zr,$e,null),e($e,kv),e($e,Mt),e(Mt,vv),e(Mt,Vd),e(Vd,Bv),e(Mt,yv),e(Mt,Jd),e(Jd,$v),e(Mt,Tv),e($e,wv),y(Uo,$e,null),e($e,xv),y(Qo,$e,null),k(o,th,u),k(o,Et,u),e(Et,Ro),e(Ro,Kd),y(Mr,Kd,null),e(Et,Fv),e(Et,Xd),e(Xd,qv),k(o,oh,u),k(o,I,u),y(Er,I,null),e(I,zv),e(I,jr),e(jr,Mv),e(jr,Yd),e(Yd,Ev),e(jr,jv),e(I,Pv),e(I,Pr),e(Pr,Cv),e(Pr,ri),e(ri,Lv),e(Pr,Av),e(I,Ov),e(I,Cr),e(Cr,Iv),e(Cr,Lr),e(Lr,Nv),e(Cr,Sv),e(I,Dv),e(I,Zd),e(Zd,Wv),e(I,Uv),e(I,Le),e(Le,ec),e(ec,Ar),e(Ar,Qv),e(Le,Rv),e(Le,tc),e(tc,Or),e(Or,Gv),e(Le,Hv),e(Le,oc),e(oc,Ir),e(Ir,Vv),e(Le,Jv),e(Le,nc),e(nc,Nr),e(Nr,Kv),e(I,Xv),e(I,Te),y(Sr,Te,null),e(Te,Yv),e(Te,jt),e(jt,Zv),e(jt,sc),e(sc,eB),e(jt,tB),e(jt,rc),e(rc,oB),e(jt,nB),e(Te,sB),y(Go,Te,null),e(Te,rB),y(Ho,Te,null),k(o,nh,u),k(o,Pt,u),e(Pt,Vo),e(Vo,ac),y(Dr,ac,null),e(Pt,aB),e(Pt,ic),e(ic,iB),k(o,sh,u),k(o,N,u),y(Wr,N,null),e(N,lB),e(N,lc),e(lc,dB),e(N,cB),e(N,Ur),e(Ur,pB),e(Ur,ai),e(ai,hB),e(Ur,mB),e(N,gB),e(N,Qr),e(Qr,fB),e(Qr,Rr),e(Rr,uB),e(Qr,_B),e(N,bB),e(N,dc),e(dc,kB),e(N,vB),e(N,Ae),e(Ae,cc),e(cc,Gr),e(Gr,BB),e(Ae,yB),e(Ae,pc),e(pc,Hr),e(Hr,$B),e(Ae,TB),e(Ae,hc),e(hc,Vr),e(Vr,wB),e(Ae,xB),e(Ae,mc),e(mc,Jr),e(Jr,FB),e(N,qB),e(N,we),y(Kr,we,null),e(we,zB),e(we,Ct),e(Ct,MB),e(Ct,gc),e(gc,EB),e(Ct,jB),e(Ct,fc),e(fc,PB),e(Ct,CB),e(we,LB),y(Jo,we,null),e(we,AB),y(Ko,we,null),k(o,rh,u),k(o,Lt,u),e(Lt,Xo),e(Xo,uc),y(Xr,uc,null),e(Lt,OB),e(Lt,_c),e(_c,IB),k(o,ah,u),k(o,S,u),y(Yr,S,null),e(S,NB),e(S,bc),e(bc,SB),e(S,DB),e(S,Zr),e(Zr,WB),e(Zr,ii),e(ii,UB),e(Zr,QB),e(S,RB),e(S,ea),e(ea,GB),e(ea,ta),e(ta,HB),e(ea,VB),e(S,JB),e(S,kc),e(kc,KB),e(S,XB),e(S,Oe),e(Oe,vc),e(vc,oa),e(oa,YB),e(Oe,ZB),e(Oe,Bc),e(Bc,na),e(na,e0),e(Oe,t0),e(Oe,yc),e(yc,sa),e(sa,o0),e(Oe,n0),e(Oe,$c),e($c,ra),e(ra,s0),e(S,r0),e(S,xe),y(aa,xe,null),e(xe,a0),e(xe,At),e(At,i0),e(At,Tc),e(Tc,l0),e(At,d0),e(At,wc),e(wc,c0),e(At,p0),e(xe,h0),y(Yo,xe,null),e(xe,m0),y(Zo,xe,null),k(o,ih,u),k(o,Ot,u),e(Ot,en),e(en,xc),y(ia,xc,null),e(Ot,g0),e(Ot,Fc),e(Fc,f0),k(o,lh,u),k(o,D,u),y(la,D,null),e(D,u0),e(D,qc),e(qc,_0),e(D,b0),e(D,da),e(da,k0),e(da,li),e(li,v0),e(da,B0),e(D,y0),e(D,ca),e(ca,$0),e(ca,pa),e(pa,T0),e(ca,w0),e(D,x0),e(D,zc),e(zc,F0),e(D,q0),e(D,Ie),e(Ie,Mc),e(Mc,ha),e(ha,z0),e(Ie,M0),e(Ie,Ec),e(Ec,ma),e(ma,E0),e(Ie,j0),e(Ie,jc),e(jc,ga),e(ga,P0),e(Ie,C0),e(Ie,Pc),e(Pc,fa),e(fa,L0),e(D,A0),e(D,Fe),y(ua,Fe,null),e(Fe,O0),e(Fe,It),e(It,I0),e(It,Cc),e(Cc,N0),e(It,S0),e(It,Lc),e(Lc,D0),e(It,W0),e(Fe,U0),y(tn,Fe,null),e(Fe,Q0),y(on,Fe,null),k(o,dh,u),k(o,Nt,u),e(Nt,nn),e(nn,Ac),y(_a,Ac,null),e(Nt,R0),e(Nt,Oc),e(Oc,G0),k(o,ch,u),k(o,W,u),y(ba,W,null),e(W,H0),e(W,St),e(St,V0),e(St,Ic),e(Ic,J0),e(St,K0),e(St,Nc),e(Nc,X0),e(St,Y0),e(W,Z0),e(W,ka),e(ka,ey),e(ka,di),e(di,ty),e(ka,oy),e(W,ny),e(W,va),e(va,sy),e(va,Ba),e(Ba,ry),e(va,ay),e(W,iy),e(W,Sc),e(Sc,ly),e(W,dy),e(W,Ne),e(Ne,Dc),e(Dc,ya),e(ya,cy),e(Ne,py),e(Ne,Wc),e(Wc,$a),e($a,hy),e(Ne,my),e(Ne,Uc),e(Uc,Ta),e(Ta,gy),e(Ne,fy),e(Ne,Qc),e(Qc,wa),e(wa,uy),e(W,_y),e(W,qe),y(xa,qe,null),e(qe,by),e(qe,Dt),e(Dt,ky),e(Dt,ci),e(ci,vy),e(Dt,By),e(Dt,Rc),e(Rc,yy),e(Dt,$y),e(qe,Ty),y(sn,qe,null),e(qe,wy),y(rn,qe,null),ph=!0},p(o,[u]){const Fa={};u&2&&(Fa.$$scope={dirty:u,ctx:o}),Ht.$set(Fa);const Gc={};u&2&&(Gc.$$scope={dirty:u,ctx:o}),so.$set(Gc);const Hc={};u&2&&(Hc.$$scope={dirty:u,ctx:o}),lo.$set(Hc);const Vc={};u&2&&(Vc.$$scope={dirty:u,ctx:o}),co.$set(Vc);const qa={};u&2&&(qa.$$scope={dirty:u,ctx:o}),ho.$set(qa);const Jc={};u&2&&(Jc.$$scope={dirty:u,ctx:o}),mo.$set(Jc);const Kc={};u&2&&(Kc.$$scope={dirty:u,ctx:o}),fo.$set(Kc);const Xc={};u&2&&(Xc.$$scope={dirty:u,ctx:o}),uo.$set(Xc);const za={};u&2&&(za.$$scope={dirty:u,ctx:o}),bo.$set(za);const Yc={};u&2&&(Yc.$$scope={dirty:u,ctx:o}),ko.$set(Yc);const Zc={};u&2&&(Zc.$$scope={dirty:u,ctx:o}),vo.$set(Zc);const ep={};u&2&&(ep.$$scope={dirty:u,ctx:o}),yo.$set(ep);const tp={};u&2&&(tp.$$scope={dirty:u,ctx:o}),$o.$set(tp);const op={};u&2&&(op.$$scope={dirty:u,ctx:o}),To.$set(op);const J={};u&2&&(J.$$scope={dirty:u,ctx:o}),xo.$set(J);const Ma={};u&2&&(Ma.$$scope={dirty:u,ctx:o}),Fo.$set(Ma);const np={};u&2&&(np.$$scope={dirty:u,ctx:o}),zo.$set(np);const fe={};u&2&&(fe.$$scope={dirty:u,ctx:o}),Mo.$set(fe);const sp={};u&2&&(sp.$$scope={dirty:u,ctx:o}),Eo.$set(sp);const rp={};u&2&&(rp.$$scope={dirty:u,ctx:o}),Po.$set(rp);const ap={};u&2&&(ap.$$scope={dirty:u,ctx:o}),Co.$set(ap);const ip={};u&2&&(ip.$$scope={dirty:u,ctx:o}),Lo.$set(ip);const lp={};u&2&&(lp.$$scope={dirty:u,ctx:o}),Oo.$set(lp);const dp={};u&2&&(dp.$$scope={dirty:u,ctx:o}),Io.$set(dp);const Ea={};u&2&&(Ea.$$scope={dirty:u,ctx:o}),So.$set(Ea);const cp={};u&2&&(cp.$$scope={dirty:u,ctx:o}),Do.$set(cp);const pi={};u&2&&(pi.$$scope={dirty:u,ctx:o}),Uo.$set(pi);const pp={};u&2&&(pp.$$scope={dirty:u,ctx:o}),Qo.$set(pp);const Wt={};u&2&&(Wt.$$scope={dirty:u,ctx:o}),Go.$set(Wt);const hp={};u&2&&(hp.$$scope={dirty:u,ctx:o}),Ho.$set(hp);const mp={};u&2&&(mp.$$scope={dirty:u,ctx:o}),Jo.$set(mp);const ja={};u&2&&(ja.$$scope={dirty:u,ctx:o}),Ko.$set(ja);const gp={};u&2&&(gp.$$scope={dirty:u,ctx:o}),Yo.$set(gp);const fp={};u&2&&(fp.$$scope={dirty:u,ctx:o}),Zo.$set(fp);const up={};u&2&&(up.$$scope={dirty:u,ctx:o}),tn.$set(up);const U={};u&2&&(U.$$scope={dirty:u,ctx:o}),on.$set(U);const Ut={};u&2&&(Ut.$$scope={dirty:u,ctx:o}),sn.$set(Ut);const _p={};u&2&&(_p.$$scope={dirty:u,ctx:o}),rn.$set(_p)},i(o){ph||($(l.$$.fragment,o),$(Pn.$$.fragment,o),$(Sn.$$.fragment,o),$(Dn.$$.fragment,o),$(Ht.$$.fragment,o),$(Qn.$$.fragment,o),$(Gn.$$.fragment,o),$(Hn.$$.fragment,o),$(Vn.$$.fragment,o),$(Jn.$$.fragment,o),$(Zn.$$.fragment,o),$(ts.$$.fragment,o),$(ns.$$.fragment,o),$(ss.$$.fragment,o),$(rs.$$.fragment,o),$(as.$$.fragment,o),$(ls.$$.fragment,o),$(cs.$$.fragment,o),$(so.$$.fragment,o),$(ps.$$.fragment,o),$(ms.$$.fragment,o),$(gs.$$.fragment,o),$(us.$$.fragment,o),$(_s.$$.fragment,o),$(ys.$$.fragment,o),$(lo.$$.fragment,o),$(co.$$.fragment,o),$($s.$$.fragment,o),$(Ts.$$.fragment,o),$(ws.$$.fragment,o),$(ho.$$.fragment,o),$(mo.$$.fragment,o),$(xs.$$.fragment,o),$(Fs.$$.fragment,o),$(zs.$$.fragment,o),$(fo.$$.fragment,o),$(uo.$$.fragment,o),$(Ms.$$.fragment,o),$(Es.$$.fragment,o),$(Ps.$$.fragment,o),$(bo.$$.fragment,o),$(ko.$$.fragment,o),$(vo.$$.fragment,o),$(Cs.$$.fragment,o),$(Ls.$$.fragment,o),$(Is.$$.fragment,o),$(yo.$$.fragment,o),$($o.$$.fragment,o),$(To.$$.fragment,o),$(Ns.$$.fragment,o),$(Ss.$$.fragment,o),$(Us.$$.fragment,o),$(xo.$$.fragment,o),$(Fo.$$.fragment,o),$(Qs.$$.fragment,o),$(Rs.$$.fragment,o),$(Vs.$$.fragment,o),$(zo.$$.fragment,o),$(Mo.$$.fragment,o),$(Eo.$$.fragment,o),$(Js.$$.fragment,o),$(Ks.$$.fragment,o),$(Zs.$$.fragment,o),$(Po.$$.fragment,o),$(Co.$$.fragment,o),$(Lo.$$.fragment,o),$(er.$$.fragment,o),$(tr.$$.fragment,o),$(dr.$$.fragment,o),$(Oo.$$.fragment,o),$(Io.$$.fragment,o),$(cr.$$.fragment,o),$(pr.$$.fragment,o),$(kr.$$.fragment,o),$(So.$$.fragment,o),$(Do.$$.fragment,o),$(vr.$$.fragment,o),$(Br.$$.fragment,o),$(zr.$$.fragment,o),$(Uo.$$.fragment,o),$(Qo.$$.fragment,o),$(Mr.$$.fragment,o),$(Er.$$.fragment,o),$(Sr.$$.fragment,o),$(Go.$$.fragment,o),$(Ho.$$.fragment,o),$(Dr.$$.fragment,o),$(Wr.$$.fragment,o),$(Kr.$$.fragment,o),$(Jo.$$.fragment,o),$(Ko.$$.fragment,o),$(Xr.$$.fragment,o),$(Yr.$$.fragment,o),$(aa.$$.fragment,o),$(Yo.$$.fragment,o),$(Zo.$$.fragment,o),$(ia.$$.fragment,o),$(la.$$.fragment,o),$(ua.$$.fragment,o),$(tn.$$.fragment,o),$(on.$$.fragment,o),$(_a.$$.fragment,o),$(ba.$$.fragment,o),$(xa.$$.fragment,o),$(sn.$$.fragment,o),$(rn.$$.fragment,o),ph=!0)},o(o){T(l.$$.fragment,o),T(Pn.$$.fragment,o),T(Sn.$$.fragment,o),T(Dn.$$.fragment,o),T(Ht.$$.fragment,o),T(Qn.$$.fragment,o),T(Gn.$$.fragment,o),T(Hn.$$.fragment,o),T(Vn.$$.fragment,o),T(Jn.$$.fragment,o),T(Zn.$$.fragment,o),T(ts.$$.fragment,o),T(ns.$$.fragment,o),T(ss.$$.fragment,o),T(rs.$$.fragment,o),T(as.$$.fragment,o),T(ls.$$.fragment,o),T(cs.$$.fragment,o),T(so.$$.fragment,o),T(ps.$$.fragment,o),T(ms.$$.fragment,o),T(gs.$$.fragment,o),T(us.$$.fragment,o),T(_s.$$.fragment,o),T(ys.$$.fragment,o),T(lo.$$.fragment,o),T(co.$$.fragment,o),T($s.$$.fragment,o),T(Ts.$$.fragment,o),T(ws.$$.fragment,o),T(ho.$$.fragment,o),T(mo.$$.fragment,o),T(xs.$$.fragment,o),T(Fs.$$.fragment,o),T(zs.$$.fragment,o),T(fo.$$.fragment,o),T(uo.$$.fragment,o),T(Ms.$$.fragment,o),T(Es.$$.fragment,o),T(Ps.$$.fragment,o),T(bo.$$.fragment,o),T(ko.$$.fragment,o),T(vo.$$.fragment,o),T(Cs.$$.fragment,o),T(Ls.$$.fragment,o),T(Is.$$.fragment,o),T(yo.$$.fragment,o),T($o.$$.fragment,o),T(To.$$.fragment,o),T(Ns.$$.fragment,o),T(Ss.$$.fragment,o),T(Us.$$.fragment,o),T(xo.$$.fragment,o),T(Fo.$$.fragment,o),T(Qs.$$.fragment,o),T(Rs.$$.fragment,o),T(Vs.$$.fragment,o),T(zo.$$.fragment,o),T(Mo.$$.fragment,o),T(Eo.$$.fragment,o),T(Js.$$.fragment,o),T(Ks.$$.fragment,o),T(Zs.$$.fragment,o),T(Po.$$.fragment,o),T(Co.$$.fragment,o),T(Lo.$$.fragment,o),T(er.$$.fragment,o),T(tr.$$.fragment,o),T(dr.$$.fragment,o),T(Oo.$$.fragment,o),T(Io.$$.fragment,o),T(cr.$$.fragment,o),T(pr.$$.fragment,o),T(kr.$$.fragment,o),T(So.$$.fragment,o),T(Do.$$.fragment,o),T(vr.$$.fragment,o),T(Br.$$.fragment,o),T(zr.$$.fragment,o),T(Uo.$$.fragment,o),T(Qo.$$.fragment,o),T(Mr.$$.fragment,o),T(Er.$$.fragment,o),T(Sr.$$.fragment,o),T(Go.$$.fragment,o),T(Ho.$$.fragment,o),T(Dr.$$.fragment,o),T(Wr.$$.fragment,o),T(Kr.$$.fragment,o),T(Jo.$$.fragment,o),T(Ko.$$.fragment,o),T(Xr.$$.fragment,o),T(Yr.$$.fragment,o),T(aa.$$.fragment,o),T(Yo.$$.fragment,o),T(Zo.$$.fragment,o),T(ia.$$.fragment,o),T(la.$$.fragment,o),T(ua.$$.fragment,o),T(tn.$$.fragment,o),T(on.$$.fragment,o),T(_a.$$.fragment,o),T(ba.$$.fragment,o),T(xa.$$.fragment,o),T(sn.$$.fragment,o),T(rn.$$.fragment,o),ph=!1},d(o){t(d),o&&t(_),o&&t(g),w(l),o&&t(bp),o&&t(Je),w(Pn),o&&t(kp),o&&t(Rt),o&&t(vp),o&&t(Pa),o&&t(Bp),o&&t(Ca),o&&t(yp),o&&t(La),o&&t($p),o&&t(R),o&&t(Tp),o&&t(Se),o&&t(wp),o&&t(Ke),w(Sn),o&&t(xp),o&&t(P),w(Dn),w(Ht),w(Qn),w(Gn),w(Hn),o&&t(Fp),o&&t(Ze),w(Vn),o&&t(qp),o&&t(C),w(Jn),w(Zn),w(ts),w(ns),w(ss),o&&t(zp),o&&t(tt),w(rs),o&&t(Mp),o&&t(H),w(as),w(ls),w(cs),w(so),w(ps),o&&t(Ep),o&&t(ot),w(ms),o&&t(jp),o&&t(nt),w(gs),o&&t(Pp),o&&t(st),w(us),o&&t(Cp),o&&t(V),w(_s),w(ys),w(lo),w(co),o&&t(Lp),o&&t(at),w($s),o&&t(Ap),o&&t(it),w(Ts),w(ws),w(ho),w(mo),o&&t(Op),o&&t(dt),w(xs),o&&t(Ip),o&&t(Me),w(Fs),w(zs),w(fo),w(uo),o&&t(Np),o&&t(ht),w(Ms),o&&t(Sp),o&&t(Ee),w(Es),w(Ps),w(bo),w(ko),w(vo),o&&t(Dp),o&&t(ft),w(Cs),o&&t(Wp),o&&t(pe),w(Ls),w(Is),w(yo),w($o),w(To),o&&t(Up),o&&t(_t),w(Ns),o&&t(Qp),o&&t(he),w(Ss),w(Us),w(xo),w(Fo),o&&t(Rp),o&&t(kt),w(Qs),o&&t(Gp),o&&t(me),w(Rs),w(Vs),w(zo),w(Mo),w(Eo),o&&t(Hp),o&&t(Bt),w(Js),o&&t(Vp),o&&t(ge),w(Ks),w(Zs),w(Po),w(Co),w(Lo),o&&t(Jp),o&&t(Tt),w(er),o&&t(Kp),o&&t(L),w(tr),w(dr),w(Oo),w(Io),o&&t(Xp),o&&t(xt),w(cr),o&&t(Yp),o&&t(A),w(pr),w(kr),w(So),w(Do),o&&t(Zp),o&&t(zt),w(vr),o&&t(eh),o&&t(O),w(Br),w(zr),w(Uo),w(Qo),o&&t(th),o&&t(Et),w(Mr),o&&t(oh),o&&t(I),w(Er),w(Sr),w(Go),w(Ho),o&&t(nh),o&&t(Pt),w(Dr),o&&t(sh),o&&t(N),w(Wr),w(Kr),w(Jo),w(Ko),o&&t(rh),o&&t(Lt),w(Xr),o&&t(ah),o&&t(S),w(Yr),w(aa),w(Yo),w(Zo),o&&t(ih),o&&t(Ot),w(ia),o&&t(lh),o&&t(D),w(la),w(ua),w(tn),w(on),o&&t(dh),o&&t(Nt),w(_a),o&&t(ch),o&&t(W),w(ba),w(xa),w(sn),w(rn)}}}const ox={local:"bigbird",sections:[{local:"overview",title:"Overview"},{local:"transformers.BigBirdConfig",title:"BigBirdConfig"},{local:"transformers.BigBirdTokenizer",title:"BigBirdTokenizer"},{local:"transformers.BigBirdTokenizerFast",title:"BigBirdTokenizerFast"},{local:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput",title:"BigBird specific outputs"},{local:"transformers.BigBirdModel",title:"BigBirdModel"},{local:"transformers.BigBirdForPreTraining",title:"BigBirdForPreTraining"},{local:"transformers.BigBirdForCausalLM",title:"BigBirdForCausalLM"},{local:"transformers.BigBirdForMaskedLM",title:"BigBirdForMaskedLM"},{local:"transformers.BigBirdForSequenceClassification",title:"BigBirdForSequenceClassification"},{local:"transformers.BigBirdForMultipleChoice",title:"BigBirdForMultipleChoice"},{local:"transformers.BigBirdForTokenClassification",title:"BigBirdForTokenClassification"},{local:"transformers.BigBirdForQuestionAnswering",title:"BigBirdForQuestionAnswering"},{local:"transformers.FlaxBigBirdModel",title:"FlaxBigBirdModel"},{local:"transformers.FlaxBigBirdForPreTraining",title:"FlaxBigBirdForPreTraining"},{local:"transformers.FlaxBigBirdForCausalLM",title:"FlaxBigBirdForCausalLM"},{local:"transformers.FlaxBigBirdForMaskedLM",title:"FlaxBigBirdForMaskedLM"},{local:"transformers.FlaxBigBirdForSequenceClassification",title:"FlaxBigBirdForSequenceClassification"},{local:"transformers.FlaxBigBirdForMultipleChoice",title:"FlaxBigBirdForMultipleChoice"},{local:"transformers.FlaxBigBirdForTokenClassification",title:"FlaxBigBirdForTokenClassification"},{local:"transformers.FlaxBigBirdForQuestionAnswering",title:"FlaxBigBirdForQuestionAnswering"}],title:"BigBird"};function nx(x){return uw(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class cx extends hw{constructor(d){super();mw(this,d,nx,tx,gw,{})}}export{cx as default,ox as metadata};
