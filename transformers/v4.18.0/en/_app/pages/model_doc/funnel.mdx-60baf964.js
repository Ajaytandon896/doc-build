import{S as q1,i as x1,s as P1,e as r,k as u,w as F,t as o,M as C1,c as a,d as n,m as f,a as i,x as b,h as s,b as m,F as e,g as _,y as w,q as y,o as $,B as E,v as j1,L as we}from"../../chunks/vendor-6b77c823.js";import{T as Pe}from"../../chunks/Tip-39098574.js";import{D as X}from"../../chunks/Docstring-1088f2fb.js";import{C as ye}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ce}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as be}from"../../chunks/ExampleCodeBlock-5212b321.js";function L1(z){let d,v,c,p,T;return p=new ye({props:{code:`2 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`2<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),v=o("Transformer sequence pair mask has the following format:"),c=u(),F(p.$$.fragment)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Transformer sequence pair mask has the following format:"),h.forEach(n),c=f(l),b(p.$$.fragment,l)},m(l,h){_(l,d,h),e(d,v),_(l,c,h),w(p,l,h),T=!0},p:we,i(l){T||(y(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function O1(z){let d,v,c,p,T;return p=new ye({props:{code:`2 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`2<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),v=o("Transformer sequence pair mask has the following format:"),c=u(),F(p.$$.fragment)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Transformer sequence pair mask has the following format:"),h.forEach(n),c=f(l),b(p.$$.fragment,l)},m(l,h){_(l,d,h),e(d,v),_(l,c,h),w(p,l,h),T=!0},p:we,i(l){T||(y(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function A1(z){let d,v,c,p,T;return{c(){d=r("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),T=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(n)},m(l,h){_(l,d,h),e(d,v),e(d,c),e(c,p),e(d,T)},d(l){l&&n(d)}}}function D1(z){let d,v,c,p,T;return p=new ye({props:{code:`from transformers import FunnelTokenizer, FunnelBaseModel
import torch

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small-base")
model = FunnelBaseModel.from_pretrained("funnel-transformer/small-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, FunnelBaseModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FunnelBaseModel.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),v=o("Example:"),c=u(),F(p.$$.fragment)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Example:"),h.forEach(n),c=f(l),b(p.$$.fragment,l)},m(l,h){_(l,d,h),e(d,v),_(l,c,h),w(p,l,h),T=!0},p:we,i(l){T||(y(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function N1(z){let d,v,c,p,T;return{c(){d=r("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),T=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(n)},m(l,h){_(l,d,h),e(d,v),e(d,c),e(c,p),e(d,T)},d(l){l&&n(d)}}}function S1(z){let d,v,c,p,T;return p=new ye({props:{code:`from transformers import FunnelTokenizer, FunnelModel
import torch

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = FunnelModel.from_pretrained("funnel-transformer/small")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, FunnelModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FunnelModel.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),v=o("Example:"),c=u(),F(p.$$.fragment)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Example:"),h.forEach(n),c=f(l),b(p.$$.fragment,l)},m(l,h){_(l,d,h),e(d,v),_(l,c,h),w(p,l,h),T=!0},p:we,i(l){T||(y(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function I1(z){let d,v,c,p,T;return{c(){d=r("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),T=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(n)},m(l,h){_(l,d,h),e(d,v),e(d,c),e(c,p),e(d,T)},d(l){l&&n(d)}}}function W1(z){let d,v,c,p,T;return p=new ye({props:{code:`from transformers import FunnelTokenizer, FunnelForPreTraining
import torch

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = FunnelForPreTraining.from_pretrained("funnel-transformer/small")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
logits = model(**inputs).logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, FunnelForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FunnelForPreTraining.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits`}}),{c(){d=r("p"),v=o("Examples:"),c=u(),F(p.$$.fragment)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Examples:"),h.forEach(n),c=f(l),b(p.$$.fragment,l)},m(l,h){_(l,d,h),e(d,v),_(l,c,h),w(p,l,h),T=!0},p:we,i(l){T||(y(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function B1(z){let d,v,c,p,T;return{c(){d=r("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),T=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(n)},m(l,h){_(l,d,h),e(d,v),e(d,c),e(c,p),e(d,T)},d(l){l&&n(d)}}}function Q1(z){let d,v,c,p,T;return p=new ye({props:{code:`from transformers import FunnelTokenizer, FunnelForMaskedLM
import torch

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = FunnelForMaskedLM.from_pretrained("funnel-transformer/small")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of <mask>
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, FunnelForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FunnelForMaskedLM.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=r("p"),v=o("Example:"),c=u(),F(p.$$.fragment)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Example:"),h.forEach(n),c=f(l),b(p.$$.fragment,l)},m(l,h){_(l,d,h),e(d,v),_(l,c,h),w(p,l,h),T=!0},p:we,i(l){T||(y(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function U1(z){let d,v;return d=new ye({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){F(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){w(d,c,p),v=!0},p:we,i(c){v||(y(d.$$.fragment,c),v=!0)},o(c){$(d.$$.fragment,c),v=!1},d(c){E(d,c)}}}function R1(z){let d,v,c,p,T;return{c(){d=r("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),T=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(n)},m(l,h){_(l,d,h),e(d,v),e(d,c),e(c,p),e(d,T)},d(l){l&&n(d)}}}function V1(z){let d,v,c,p,T;return p=new ye({props:{code:`import torch
from transformers import FunnelTokenizer, FunnelForSequenceClassification

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small-base")
model = FunnelForSequenceClassification.from_pretrained("funnel-transformer/small-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, FunnelForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FunnelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),v=o("Example of single-label classification:"),c=u(),F(p.$$.fragment)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Example of single-label classification:"),h.forEach(n),c=f(l),b(p.$$.fragment,l)},m(l,h){_(l,d,h),e(d,v),_(l,c,h),w(p,l,h),T=!0},p:we,i(l){T||(y(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function H1(z){let d,v;return d=new ye({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = FunnelForSequenceClassification.from_pretrained("funnel-transformer/small-base", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FunnelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){F(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){w(d,c,p),v=!0},p:we,i(c){v||(y(d.$$.fragment,c),v=!0)},o(c){$(d.$$.fragment,c),v=!1},d(c){E(d,c)}}}function Y1(z){let d,v,c,p,T;return p=new ye({props:{code:`import torch
from transformers import FunnelTokenizer, FunnelForSequenceClassification

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small-base")
model = FunnelForSequenceClassification.from_pretrained("funnel-transformer/small-base", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, FunnelForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FunnelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),v=o("Example of multi-label classification:"),c=u(),F(p.$$.fragment)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Example of multi-label classification:"),h.forEach(n),c=f(l),b(p.$$.fragment,l)},m(l,h){_(l,d,h),e(d,v),_(l,c,h),w(p,l,h),T=!0},p:we,i(l){T||(y(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function K1(z){let d,v;return d=new ye({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = FunnelForSequenceClassification.from_pretrained("funnel-transformer/small-base", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FunnelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){F(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){w(d,c,p),v=!0},p:we,i(c){v||(y(d.$$.fragment,c),v=!0)},o(c){$(d.$$.fragment,c),v=!1},d(c){E(d,c)}}}function G1(z){let d,v,c,p,T;return{c(){d=r("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),T=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(n)},m(l,h){_(l,d,h),e(d,v),e(d,c),e(c,p),e(d,T)},d(l){l&&n(d)}}}function Z1(z){let d,v,c,p,T;return p=new ye({props:{code:`from transformers import FunnelTokenizer, FunnelForMultipleChoice
import torch

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small-base")
model = FunnelForMultipleChoice.from_pretrained("funnel-transformer/small-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, FunnelForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FunnelForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),v=o("Example:"),c=u(),F(p.$$.fragment)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Example:"),h.forEach(n),c=f(l),b(p.$$.fragment,l)},m(l,h){_(l,d,h),e(d,v),_(l,c,h),w(p,l,h),T=!0},p:we,i(l){T||(y(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function X1(z){let d,v,c,p,T;return{c(){d=r("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),T=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(n)},m(l,h){_(l,d,h),e(d,v),e(d,c),e(c,p),e(d,T)},d(l){l&&n(d)}}}function J1(z){let d,v,c,p,T;return p=new ye({props:{code:`from transformers import FunnelTokenizer, FunnelForTokenClassification
import torch

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = FunnelForTokenClassification.from_pretrained("funnel-transformer/small")

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
predicted_tokens_classes
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, FunnelForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FunnelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

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
`}}),{c(){d=r("p"),v=o("Example:"),c=u(),F(p.$$.fragment)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Example:"),h.forEach(n),c=f(l),b(p.$$.fragment,l)},m(l,h){_(l,d,h),e(d,v),_(l,c,h),w(p,l,h),T=!0},p:we,i(l){T||(y(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function e$(z){let d,v;return d=new ye({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){F(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){w(d,c,p),v=!0},p:we,i(c){v||(y(d.$$.fragment,c),v=!0)},o(c){$(d.$$.fragment,c),v=!1},d(c){E(d,c)}}}function n$(z){let d,v,c,p,T;return{c(){d=r("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),T=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(n)},m(l,h){_(l,d,h),e(d,v),e(d,c),e(c,p),e(d,T)},d(l){l&&n(d)}}}function t$(z){let d,v,c,p,T;return p=new ye({props:{code:`from transformers import FunnelTokenizer, FunnelForQuestionAnswering
import torch

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = FunnelForQuestionAnswering.from_pretrained("funnel-transformer/small")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, FunnelForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FunnelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=r("p"),v=o("Example:"),c=u(),F(p.$$.fragment)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Example:"),h.forEach(n),c=f(l),b(p.$$.fragment,l)},m(l,h){_(l,d,h),e(d,v),_(l,c,h),w(p,l,h),T=!0},p:we,i(l){T||(y(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function o$(z){let d,v;return d=new ye({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){F(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){w(d,c,p),v=!0},p:we,i(c){v||(y(d.$$.fragment,c),v=!0)},o(c){$(d.$$.fragment,c),v=!1},d(c){E(d,c)}}}function s$(z){let d,v,c,p,T,l,h,q,ce,K,x,J,N,ne,pe,S,ue,ie,Y,O,te,G,P,j,oe,Q,le,se,I,fe,de,C,he,B,ee,ae,U,me,W,A,re,R,ge;return{c(){d=r("p"),v=o("TF 2.0 models accepts two formats as inputs:"),c=u(),p=r("ul"),T=r("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),h=u(),q=r("li"),ce=o("having all inputs as a list, tuple or dict in the first positional arguments."),K=u(),x=r("p"),J=o("This second option is useful when using "),N=r("code"),ne=o("tf.keras.Model.fit"),pe=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ue=o("model(inputs)"),ie=o("."),Y=u(),O=r("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=u(),P=r("ul"),j=r("li"),oe=o("a single Tensor with "),Q=r("code"),le=o("input_ids"),se=o(" only and nothing else: "),I=r("code"),fe=o("model(inputs_ids)"),de=u(),C=r("li"),he=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r("code"),ee=o("model([input_ids, attention_mask])"),ae=o(" or "),U=r("code"),me=o("model([input_ids, attention_mask, token_type_ids])"),W=u(),A=r("li"),re=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),ge=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=a(g,"P",{});var M=i(d);v=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(n),c=f(g),p=a(g,"UL",{});var Z=i(p);T=a(Z,"LI",{});var ve=i(T);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(n),h=f(Z),q=a(Z,"LI",{});var $e=i(q);ce=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(n),Z.forEach(n),K=f(g),x=a(g,"P",{});var D=i(x);J=s(D,"This second option is useful when using "),N=a(D,"CODE",{});var Te=i(N);ne=s(Te,"tf.keras.Model.fit"),Te.forEach(n),pe=s(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(D,"CODE",{});var Ee=i(S);ue=s(Ee,"model(inputs)"),Ee.forEach(n),ie=s(D,"."),D.forEach(n),Y=f(g),O=a(g,"P",{});var Me=i(O);te=s(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(n),G=f(g),P=a(g,"UL",{});var L=i(P);j=a(L,"LI",{});var V=i(j);oe=s(V,"a single Tensor with "),Q=a(V,"CODE",{});var ze=i(Q);le=s(ze,"input_ids"),ze.forEach(n),se=s(V," only and nothing else: "),I=a(V,"CODE",{});var ke=i(I);fe=s(ke,"model(inputs_ids)"),ke.forEach(n),V.forEach(n),de=f(L),C=a(L,"LI",{});var H=i(C);he=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a(H,"CODE",{});var qe=i(B);ee=s(qe,"model([input_ids, attention_mask])"),qe.forEach(n),ae=s(H," or "),U=a(H,"CODE",{});var Fe=i(U);me=s(Fe,"model([input_ids, attention_mask, token_type_ids])"),Fe.forEach(n),H.forEach(n),W=f(L),A=a(L,"LI",{});var _e=i(A);re=s(_e,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(_e,"CODE",{});var xe=i(R);ge=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(n),_e.forEach(n),L.forEach(n)},m(g,M){_(g,d,M),e(d,v),_(g,c,M),_(g,p,M),e(p,T),e(T,l),e(p,h),e(p,q),e(q,ce),_(g,K,M),_(g,x,M),e(x,J),e(x,N),e(N,ne),e(x,pe),e(x,S),e(S,ue),e(x,ie),_(g,Y,M),_(g,O,M),e(O,te),_(g,G,M),_(g,P,M),e(P,j),e(j,oe),e(j,Q),e(Q,le),e(j,se),e(j,I),e(I,fe),e(P,de),e(P,C),e(C,he),e(C,B),e(B,ee),e(C,ae),e(C,U),e(U,me),e(P,W),e(P,A),e(A,re),e(A,R),e(R,ge)},d(g){g&&n(d),g&&n(c),g&&n(p),g&&n(K),g&&n(x),g&&n(Y),g&&n(O),g&&n(G),g&&n(P)}}}function r$(z){let d,v,c,p,T;return{c(){d=r("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),T=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(n)},m(l,h){_(l,d,h),e(d,v),e(d,c),e(c,p),e(d,T)},d(l){l&&n(d)}}}function a$(z){let d,v,c,p,T;return p=new ye({props:{code:`from transformers import FunnelTokenizer, TFFunnelBaseModel
import tensorflow as tf

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small-base")
model = TFFunnelBaseModel.from_pretrained("funnel-transformer/small-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, TFFunnelBaseModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFunnelBaseModel.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),v=o("Example:"),c=u(),F(p.$$.fragment)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Example:"),h.forEach(n),c=f(l),b(p.$$.fragment,l)},m(l,h){_(l,d,h),e(d,v),_(l,c,h),w(p,l,h),T=!0},p:we,i(l){T||(y(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function i$(z){let d,v,c,p,T,l,h,q,ce,K,x,J,N,ne,pe,S,ue,ie,Y,O,te,G,P,j,oe,Q,le,se,I,fe,de,C,he,B,ee,ae,U,me,W,A,re,R,ge;return{c(){d=r("p"),v=o("TF 2.0 models accepts two formats as inputs:"),c=u(),p=r("ul"),T=r("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),h=u(),q=r("li"),ce=o("having all inputs as a list, tuple or dict in the first positional arguments."),K=u(),x=r("p"),J=o("This second option is useful when using "),N=r("code"),ne=o("tf.keras.Model.fit"),pe=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ue=o("model(inputs)"),ie=o("."),Y=u(),O=r("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=u(),P=r("ul"),j=r("li"),oe=o("a single Tensor with "),Q=r("code"),le=o("input_ids"),se=o(" only and nothing else: "),I=r("code"),fe=o("model(inputs_ids)"),de=u(),C=r("li"),he=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r("code"),ee=o("model([input_ids, attention_mask])"),ae=o(" or "),U=r("code"),me=o("model([input_ids, attention_mask, token_type_ids])"),W=u(),A=r("li"),re=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),ge=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=a(g,"P",{});var M=i(d);v=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(n),c=f(g),p=a(g,"UL",{});var Z=i(p);T=a(Z,"LI",{});var ve=i(T);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(n),h=f(Z),q=a(Z,"LI",{});var $e=i(q);ce=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(n),Z.forEach(n),K=f(g),x=a(g,"P",{});var D=i(x);J=s(D,"This second option is useful when using "),N=a(D,"CODE",{});var Te=i(N);ne=s(Te,"tf.keras.Model.fit"),Te.forEach(n),pe=s(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(D,"CODE",{});var Ee=i(S);ue=s(Ee,"model(inputs)"),Ee.forEach(n),ie=s(D,"."),D.forEach(n),Y=f(g),O=a(g,"P",{});var Me=i(O);te=s(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(n),G=f(g),P=a(g,"UL",{});var L=i(P);j=a(L,"LI",{});var V=i(j);oe=s(V,"a single Tensor with "),Q=a(V,"CODE",{});var ze=i(Q);le=s(ze,"input_ids"),ze.forEach(n),se=s(V," only and nothing else: "),I=a(V,"CODE",{});var ke=i(I);fe=s(ke,"model(inputs_ids)"),ke.forEach(n),V.forEach(n),de=f(L),C=a(L,"LI",{});var H=i(C);he=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a(H,"CODE",{});var qe=i(B);ee=s(qe,"model([input_ids, attention_mask])"),qe.forEach(n),ae=s(H," or "),U=a(H,"CODE",{});var Fe=i(U);me=s(Fe,"model([input_ids, attention_mask, token_type_ids])"),Fe.forEach(n),H.forEach(n),W=f(L),A=a(L,"LI",{});var _e=i(A);re=s(_e,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(_e,"CODE",{});var xe=i(R);ge=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(n),_e.forEach(n),L.forEach(n)},m(g,M){_(g,d,M),e(d,v),_(g,c,M),_(g,p,M),e(p,T),e(T,l),e(p,h),e(p,q),e(q,ce),_(g,K,M),_(g,x,M),e(x,J),e(x,N),e(N,ne),e(x,pe),e(x,S),e(S,ue),e(x,ie),_(g,Y,M),_(g,O,M),e(O,te),_(g,G,M),_(g,P,M),e(P,j),e(j,oe),e(j,Q),e(Q,le),e(j,se),e(j,I),e(I,fe),e(P,de),e(P,C),e(C,he),e(C,B),e(B,ee),e(C,ae),e(C,U),e(U,me),e(P,W),e(P,A),e(A,re),e(A,R),e(R,ge)},d(g){g&&n(d),g&&n(c),g&&n(p),g&&n(K),g&&n(x),g&&n(Y),g&&n(O),g&&n(G),g&&n(P)}}}function l$(z){let d,v,c,p,T;return{c(){d=r("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),T=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(n)},m(l,h){_(l,d,h),e(d,v),e(d,c),e(c,p),e(d,T)},d(l){l&&n(d)}}}function d$(z){let d,v,c,p,T;return p=new ye({props:{code:`from transformers import FunnelTokenizer, TFFunnelModel
import tensorflow as tf

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = TFFunnelModel.from_pretrained("funnel-transformer/small")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, TFFunnelModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFunnelModel.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),v=o("Example:"),c=u(),F(p.$$.fragment)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Example:"),h.forEach(n),c=f(l),b(p.$$.fragment,l)},m(l,h){_(l,d,h),e(d,v),_(l,c,h),w(p,l,h),T=!0},p:we,i(l){T||(y(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function c$(z){let d,v,c,p,T,l,h,q,ce,K,x,J,N,ne,pe,S,ue,ie,Y,O,te,G,P,j,oe,Q,le,se,I,fe,de,C,he,B,ee,ae,U,me,W,A,re,R,ge;return{c(){d=r("p"),v=o("TF 2.0 models accepts two formats as inputs:"),c=u(),p=r("ul"),T=r("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),h=u(),q=r("li"),ce=o("having all inputs as a list, tuple or dict in the first positional arguments."),K=u(),x=r("p"),J=o("This second option is useful when using "),N=r("code"),ne=o("tf.keras.Model.fit"),pe=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ue=o("model(inputs)"),ie=o("."),Y=u(),O=r("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=u(),P=r("ul"),j=r("li"),oe=o("a single Tensor with "),Q=r("code"),le=o("input_ids"),se=o(" only and nothing else: "),I=r("code"),fe=o("model(inputs_ids)"),de=u(),C=r("li"),he=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r("code"),ee=o("model([input_ids, attention_mask])"),ae=o(" or "),U=r("code"),me=o("model([input_ids, attention_mask, token_type_ids])"),W=u(),A=r("li"),re=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),ge=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=a(g,"P",{});var M=i(d);v=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(n),c=f(g),p=a(g,"UL",{});var Z=i(p);T=a(Z,"LI",{});var ve=i(T);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(n),h=f(Z),q=a(Z,"LI",{});var $e=i(q);ce=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(n),Z.forEach(n),K=f(g),x=a(g,"P",{});var D=i(x);J=s(D,"This second option is useful when using "),N=a(D,"CODE",{});var Te=i(N);ne=s(Te,"tf.keras.Model.fit"),Te.forEach(n),pe=s(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(D,"CODE",{});var Ee=i(S);ue=s(Ee,"model(inputs)"),Ee.forEach(n),ie=s(D,"."),D.forEach(n),Y=f(g),O=a(g,"P",{});var Me=i(O);te=s(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(n),G=f(g),P=a(g,"UL",{});var L=i(P);j=a(L,"LI",{});var V=i(j);oe=s(V,"a single Tensor with "),Q=a(V,"CODE",{});var ze=i(Q);le=s(ze,"input_ids"),ze.forEach(n),se=s(V," only and nothing else: "),I=a(V,"CODE",{});var ke=i(I);fe=s(ke,"model(inputs_ids)"),ke.forEach(n),V.forEach(n),de=f(L),C=a(L,"LI",{});var H=i(C);he=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a(H,"CODE",{});var qe=i(B);ee=s(qe,"model([input_ids, attention_mask])"),qe.forEach(n),ae=s(H," or "),U=a(H,"CODE",{});var Fe=i(U);me=s(Fe,"model([input_ids, attention_mask, token_type_ids])"),Fe.forEach(n),H.forEach(n),W=f(L),A=a(L,"LI",{});var _e=i(A);re=s(_e,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(_e,"CODE",{});var xe=i(R);ge=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(n),_e.forEach(n),L.forEach(n)},m(g,M){_(g,d,M),e(d,v),_(g,c,M),_(g,p,M),e(p,T),e(T,l),e(p,h),e(p,q),e(q,ce),_(g,K,M),_(g,x,M),e(x,J),e(x,N),e(N,ne),e(x,pe),e(x,S),e(S,ue),e(x,ie),_(g,Y,M),_(g,O,M),e(O,te),_(g,G,M),_(g,P,M),e(P,j),e(j,oe),e(j,Q),e(Q,le),e(j,se),e(j,I),e(I,fe),e(P,de),e(P,C),e(C,he),e(C,B),e(B,ee),e(C,ae),e(C,U),e(U,me),e(P,W),e(P,A),e(A,re),e(A,R),e(R,ge)},d(g){g&&n(d),g&&n(c),g&&n(p),g&&n(K),g&&n(x),g&&n(Y),g&&n(O),g&&n(G),g&&n(P)}}}function p$(z){let d,v,c,p,T;return{c(){d=r("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),T=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(n)},m(l,h){_(l,d,h),e(d,v),e(d,c),e(c,p),e(d,T)},d(l){l&&n(d)}}}function u$(z){let d,v,c,p,T;return p=new ye({props:{code:`from transformers import FunnelTokenizer, TFFunnelForPreTraining
import torch

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = TFFunnelForPreTraining.from_pretrained("funnel-transformer/small")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
logits = model(inputs).logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, TFFunnelForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFunnelForPreTraining.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(inputs).logits`}}),{c(){d=r("p"),v=o("Examples:"),c=u(),F(p.$$.fragment)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Examples:"),h.forEach(n),c=f(l),b(p.$$.fragment,l)},m(l,h){_(l,d,h),e(d,v),_(l,c,h),w(p,l,h),T=!0},p:we,i(l){T||(y(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function f$(z){let d,v,c,p,T,l,h,q,ce,K,x,J,N,ne,pe,S,ue,ie,Y,O,te,G,P,j,oe,Q,le,se,I,fe,de,C,he,B,ee,ae,U,me,W,A,re,R,ge;return{c(){d=r("p"),v=o("TF 2.0 models accepts two formats as inputs:"),c=u(),p=r("ul"),T=r("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),h=u(),q=r("li"),ce=o("having all inputs as a list, tuple or dict in the first positional arguments."),K=u(),x=r("p"),J=o("This second option is useful when using "),N=r("code"),ne=o("tf.keras.Model.fit"),pe=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ue=o("model(inputs)"),ie=o("."),Y=u(),O=r("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=u(),P=r("ul"),j=r("li"),oe=o("a single Tensor with "),Q=r("code"),le=o("input_ids"),se=o(" only and nothing else: "),I=r("code"),fe=o("model(inputs_ids)"),de=u(),C=r("li"),he=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r("code"),ee=o("model([input_ids, attention_mask])"),ae=o(" or "),U=r("code"),me=o("model([input_ids, attention_mask, token_type_ids])"),W=u(),A=r("li"),re=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),ge=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=a(g,"P",{});var M=i(d);v=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(n),c=f(g),p=a(g,"UL",{});var Z=i(p);T=a(Z,"LI",{});var ve=i(T);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(n),h=f(Z),q=a(Z,"LI",{});var $e=i(q);ce=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(n),Z.forEach(n),K=f(g),x=a(g,"P",{});var D=i(x);J=s(D,"This second option is useful when using "),N=a(D,"CODE",{});var Te=i(N);ne=s(Te,"tf.keras.Model.fit"),Te.forEach(n),pe=s(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(D,"CODE",{});var Ee=i(S);ue=s(Ee,"model(inputs)"),Ee.forEach(n),ie=s(D,"."),D.forEach(n),Y=f(g),O=a(g,"P",{});var Me=i(O);te=s(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(n),G=f(g),P=a(g,"UL",{});var L=i(P);j=a(L,"LI",{});var V=i(j);oe=s(V,"a single Tensor with "),Q=a(V,"CODE",{});var ze=i(Q);le=s(ze,"input_ids"),ze.forEach(n),se=s(V," only and nothing else: "),I=a(V,"CODE",{});var ke=i(I);fe=s(ke,"model(inputs_ids)"),ke.forEach(n),V.forEach(n),de=f(L),C=a(L,"LI",{});var H=i(C);he=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a(H,"CODE",{});var qe=i(B);ee=s(qe,"model([input_ids, attention_mask])"),qe.forEach(n),ae=s(H," or "),U=a(H,"CODE",{});var Fe=i(U);me=s(Fe,"model([input_ids, attention_mask, token_type_ids])"),Fe.forEach(n),H.forEach(n),W=f(L),A=a(L,"LI",{});var _e=i(A);re=s(_e,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(_e,"CODE",{});var xe=i(R);ge=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(n),_e.forEach(n),L.forEach(n)},m(g,M){_(g,d,M),e(d,v),_(g,c,M),_(g,p,M),e(p,T),e(T,l),e(p,h),e(p,q),e(q,ce),_(g,K,M),_(g,x,M),e(x,J),e(x,N),e(N,ne),e(x,pe),e(x,S),e(S,ue),e(x,ie),_(g,Y,M),_(g,O,M),e(O,te),_(g,G,M),_(g,P,M),e(P,j),e(j,oe),e(j,Q),e(Q,le),e(j,se),e(j,I),e(I,fe),e(P,de),e(P,C),e(C,he),e(C,B),e(B,ee),e(C,ae),e(C,U),e(U,me),e(P,W),e(P,A),e(A,re),e(A,R),e(R,ge)},d(g){g&&n(d),g&&n(c),g&&n(p),g&&n(K),g&&n(x),g&&n(Y),g&&n(O),g&&n(G),g&&n(P)}}}function h$(z){let d,v,c,p,T;return{c(){d=r("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),T=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(n)},m(l,h){_(l,d,h),e(d,v),e(d,c),e(c,p),e(d,T)},d(l){l&&n(d)}}}function m$(z){let d,v,c,p,T;return p=new ye({props:{code:`from transformers import FunnelTokenizer, TFFunnelForMaskedLM
import tensorflow as tf

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = TFFunnelForMaskedLM.from_pretrained("funnel-transformer/small")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[0][1]

predicted_token_id = tf.math.argmax(logits[0, mask_token_index], axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, TFFunnelForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFunnelForMaskedLM.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(logits[<span class="hljs-number">0</span>, mask_token_index], axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=r("p"),v=o("Example:"),c=u(),F(p.$$.fragment)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Example:"),h.forEach(n),c=f(l),b(p.$$.fragment,l)},m(l,h){_(l,d,h),e(d,v),_(l,c,h),w(p,l,h),T=!0},p:we,i(l){T||(y(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function g$(z){let d,v;return d=new ye({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){F(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){w(d,c,p),v=!0},p:we,i(c){v||(y(d.$$.fragment,c),v=!0)},o(c){$(d.$$.fragment,c),v=!1},d(c){E(d,c)}}}function _$(z){let d,v,c,p,T,l,h,q,ce,K,x,J,N,ne,pe,S,ue,ie,Y,O,te,G,P,j,oe,Q,le,se,I,fe,de,C,he,B,ee,ae,U,me,W,A,re,R,ge;return{c(){d=r("p"),v=o("TF 2.0 models accepts two formats as inputs:"),c=u(),p=r("ul"),T=r("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),h=u(),q=r("li"),ce=o("having all inputs as a list, tuple or dict in the first positional arguments."),K=u(),x=r("p"),J=o("This second option is useful when using "),N=r("code"),ne=o("tf.keras.Model.fit"),pe=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ue=o("model(inputs)"),ie=o("."),Y=u(),O=r("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=u(),P=r("ul"),j=r("li"),oe=o("a single Tensor with "),Q=r("code"),le=o("input_ids"),se=o(" only and nothing else: "),I=r("code"),fe=o("model(inputs_ids)"),de=u(),C=r("li"),he=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r("code"),ee=o("model([input_ids, attention_mask])"),ae=o(" or "),U=r("code"),me=o("model([input_ids, attention_mask, token_type_ids])"),W=u(),A=r("li"),re=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),ge=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=a(g,"P",{});var M=i(d);v=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(n),c=f(g),p=a(g,"UL",{});var Z=i(p);T=a(Z,"LI",{});var ve=i(T);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(n),h=f(Z),q=a(Z,"LI",{});var $e=i(q);ce=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(n),Z.forEach(n),K=f(g),x=a(g,"P",{});var D=i(x);J=s(D,"This second option is useful when using "),N=a(D,"CODE",{});var Te=i(N);ne=s(Te,"tf.keras.Model.fit"),Te.forEach(n),pe=s(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(D,"CODE",{});var Ee=i(S);ue=s(Ee,"model(inputs)"),Ee.forEach(n),ie=s(D,"."),D.forEach(n),Y=f(g),O=a(g,"P",{});var Me=i(O);te=s(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(n),G=f(g),P=a(g,"UL",{});var L=i(P);j=a(L,"LI",{});var V=i(j);oe=s(V,"a single Tensor with "),Q=a(V,"CODE",{});var ze=i(Q);le=s(ze,"input_ids"),ze.forEach(n),se=s(V," only and nothing else: "),I=a(V,"CODE",{});var ke=i(I);fe=s(ke,"model(inputs_ids)"),ke.forEach(n),V.forEach(n),de=f(L),C=a(L,"LI",{});var H=i(C);he=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a(H,"CODE",{});var qe=i(B);ee=s(qe,"model([input_ids, attention_mask])"),qe.forEach(n),ae=s(H," or "),U=a(H,"CODE",{});var Fe=i(U);me=s(Fe,"model([input_ids, attention_mask, token_type_ids])"),Fe.forEach(n),H.forEach(n),W=f(L),A=a(L,"LI",{});var _e=i(A);re=s(_e,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(_e,"CODE",{});var xe=i(R);ge=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(n),_e.forEach(n),L.forEach(n)},m(g,M){_(g,d,M),e(d,v),_(g,c,M),_(g,p,M),e(p,T),e(T,l),e(p,h),e(p,q),e(q,ce),_(g,K,M),_(g,x,M),e(x,J),e(x,N),e(N,ne),e(x,pe),e(x,S),e(S,ue),e(x,ie),_(g,Y,M),_(g,O,M),e(O,te),_(g,G,M),_(g,P,M),e(P,j),e(j,oe),e(j,Q),e(Q,le),e(j,se),e(j,I),e(I,fe),e(P,de),e(P,C),e(C,he),e(C,B),e(B,ee),e(C,ae),e(C,U),e(U,me),e(P,W),e(P,A),e(A,re),e(A,R),e(R,ge)},d(g){g&&n(d),g&&n(c),g&&n(p),g&&n(K),g&&n(x),g&&n(Y),g&&n(O),g&&n(G),g&&n(P)}}}function v$(z){let d,v,c,p,T;return{c(){d=r("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),T=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(n)},m(l,h){_(l,d,h),e(d,v),e(d,c),e(c,p),e(d,T)},d(l){l&&n(d)}}}function T$(z){let d,v,c,p,T;return p=new ye({props:{code:`from transformers import FunnelTokenizer, TFFunnelForSequenceClassification
import tensorflow as tf

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small-base")
model = TFFunnelForSequenceClassification.from_pretrained("funnel-transformer/small-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, TFFunnelForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFunnelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),v=o("Example:"),c=u(),F(p.$$.fragment)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Example:"),h.forEach(n),c=f(l),b(p.$$.fragment,l)},m(l,h){_(l,d,h),e(d,v),_(l,c,h),w(p,l,h),T=!0},p:we,i(l){T||(y(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function k$(z){let d,v;return d=new ye({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFFunnelForSequenceClassification.from_pretrained("funnel-transformer/small-base", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFunnelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){F(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){w(d,c,p),v=!0},p:we,i(c){v||(y(d.$$.fragment,c),v=!0)},o(c){$(d.$$.fragment,c),v=!1},d(c){E(d,c)}}}function F$(z){let d,v,c,p,T,l,h,q,ce,K,x,J,N,ne,pe,S,ue,ie,Y,O,te,G,P,j,oe,Q,le,se,I,fe,de,C,he,B,ee,ae,U,me,W,A,re,R,ge;return{c(){d=r("p"),v=o("TF 2.0 models accepts two formats as inputs:"),c=u(),p=r("ul"),T=r("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),h=u(),q=r("li"),ce=o("having all inputs as a list, tuple or dict in the first positional arguments."),K=u(),x=r("p"),J=o("This second option is useful when using "),N=r("code"),ne=o("tf.keras.Model.fit"),pe=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ue=o("model(inputs)"),ie=o("."),Y=u(),O=r("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=u(),P=r("ul"),j=r("li"),oe=o("a single Tensor with "),Q=r("code"),le=o("input_ids"),se=o(" only and nothing else: "),I=r("code"),fe=o("model(inputs_ids)"),de=u(),C=r("li"),he=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r("code"),ee=o("model([input_ids, attention_mask])"),ae=o(" or "),U=r("code"),me=o("model([input_ids, attention_mask, token_type_ids])"),W=u(),A=r("li"),re=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),ge=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=a(g,"P",{});var M=i(d);v=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(n),c=f(g),p=a(g,"UL",{});var Z=i(p);T=a(Z,"LI",{});var ve=i(T);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(n),h=f(Z),q=a(Z,"LI",{});var $e=i(q);ce=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(n),Z.forEach(n),K=f(g),x=a(g,"P",{});var D=i(x);J=s(D,"This second option is useful when using "),N=a(D,"CODE",{});var Te=i(N);ne=s(Te,"tf.keras.Model.fit"),Te.forEach(n),pe=s(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(D,"CODE",{});var Ee=i(S);ue=s(Ee,"model(inputs)"),Ee.forEach(n),ie=s(D,"."),D.forEach(n),Y=f(g),O=a(g,"P",{});var Me=i(O);te=s(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(n),G=f(g),P=a(g,"UL",{});var L=i(P);j=a(L,"LI",{});var V=i(j);oe=s(V,"a single Tensor with "),Q=a(V,"CODE",{});var ze=i(Q);le=s(ze,"input_ids"),ze.forEach(n),se=s(V," only and nothing else: "),I=a(V,"CODE",{});var ke=i(I);fe=s(ke,"model(inputs_ids)"),ke.forEach(n),V.forEach(n),de=f(L),C=a(L,"LI",{});var H=i(C);he=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a(H,"CODE",{});var qe=i(B);ee=s(qe,"model([input_ids, attention_mask])"),qe.forEach(n),ae=s(H," or "),U=a(H,"CODE",{});var Fe=i(U);me=s(Fe,"model([input_ids, attention_mask, token_type_ids])"),Fe.forEach(n),H.forEach(n),W=f(L),A=a(L,"LI",{});var _e=i(A);re=s(_e,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(_e,"CODE",{});var xe=i(R);ge=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(n),_e.forEach(n),L.forEach(n)},m(g,M){_(g,d,M),e(d,v),_(g,c,M),_(g,p,M),e(p,T),e(T,l),e(p,h),e(p,q),e(q,ce),_(g,K,M),_(g,x,M),e(x,J),e(x,N),e(N,ne),e(x,pe),e(x,S),e(S,ue),e(x,ie),_(g,Y,M),_(g,O,M),e(O,te),_(g,G,M),_(g,P,M),e(P,j),e(j,oe),e(j,Q),e(Q,le),e(j,se),e(j,I),e(I,fe),e(P,de),e(P,C),e(C,he),e(C,B),e(B,ee),e(C,ae),e(C,U),e(U,me),e(P,W),e(P,A),e(A,re),e(A,R),e(R,ge)},d(g){g&&n(d),g&&n(c),g&&n(p),g&&n(K),g&&n(x),g&&n(Y),g&&n(O),g&&n(G),g&&n(P)}}}function b$(z){let d,v,c,p,T;return{c(){d=r("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),T=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(n)},m(l,h){_(l,d,h),e(d,v),e(d,c),e(c,p),e(d,T)},d(l){l&&n(d)}}}function w$(z){let d,v,c,p,T;return p=new ye({props:{code:`from transformers import FunnelTokenizer, TFFunnelForMultipleChoice
import tensorflow as tf

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small-base")
model = TFFunnelForMultipleChoice.from_pretrained("funnel-transformer/small-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, TFFunnelForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFunnelForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),v=o("Example:"),c=u(),F(p.$$.fragment)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Example:"),h.forEach(n),c=f(l),b(p.$$.fragment,l)},m(l,h){_(l,d,h),e(d,v),_(l,c,h),w(p,l,h),T=!0},p:we,i(l){T||(y(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function y$(z){let d,v,c,p,T,l,h,q,ce,K,x,J,N,ne,pe,S,ue,ie,Y,O,te,G,P,j,oe,Q,le,se,I,fe,de,C,he,B,ee,ae,U,me,W,A,re,R,ge;return{c(){d=r("p"),v=o("TF 2.0 models accepts two formats as inputs:"),c=u(),p=r("ul"),T=r("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),h=u(),q=r("li"),ce=o("having all inputs as a list, tuple or dict in the first positional arguments."),K=u(),x=r("p"),J=o("This second option is useful when using "),N=r("code"),ne=o("tf.keras.Model.fit"),pe=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ue=o("model(inputs)"),ie=o("."),Y=u(),O=r("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=u(),P=r("ul"),j=r("li"),oe=o("a single Tensor with "),Q=r("code"),le=o("input_ids"),se=o(" only and nothing else: "),I=r("code"),fe=o("model(inputs_ids)"),de=u(),C=r("li"),he=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r("code"),ee=o("model([input_ids, attention_mask])"),ae=o(" or "),U=r("code"),me=o("model([input_ids, attention_mask, token_type_ids])"),W=u(),A=r("li"),re=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),ge=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=a(g,"P",{});var M=i(d);v=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(n),c=f(g),p=a(g,"UL",{});var Z=i(p);T=a(Z,"LI",{});var ve=i(T);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(n),h=f(Z),q=a(Z,"LI",{});var $e=i(q);ce=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(n),Z.forEach(n),K=f(g),x=a(g,"P",{});var D=i(x);J=s(D,"This second option is useful when using "),N=a(D,"CODE",{});var Te=i(N);ne=s(Te,"tf.keras.Model.fit"),Te.forEach(n),pe=s(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(D,"CODE",{});var Ee=i(S);ue=s(Ee,"model(inputs)"),Ee.forEach(n),ie=s(D,"."),D.forEach(n),Y=f(g),O=a(g,"P",{});var Me=i(O);te=s(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(n),G=f(g),P=a(g,"UL",{});var L=i(P);j=a(L,"LI",{});var V=i(j);oe=s(V,"a single Tensor with "),Q=a(V,"CODE",{});var ze=i(Q);le=s(ze,"input_ids"),ze.forEach(n),se=s(V," only and nothing else: "),I=a(V,"CODE",{});var ke=i(I);fe=s(ke,"model(inputs_ids)"),ke.forEach(n),V.forEach(n),de=f(L),C=a(L,"LI",{});var H=i(C);he=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a(H,"CODE",{});var qe=i(B);ee=s(qe,"model([input_ids, attention_mask])"),qe.forEach(n),ae=s(H," or "),U=a(H,"CODE",{});var Fe=i(U);me=s(Fe,"model([input_ids, attention_mask, token_type_ids])"),Fe.forEach(n),H.forEach(n),W=f(L),A=a(L,"LI",{});var _e=i(A);re=s(_e,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(_e,"CODE",{});var xe=i(R);ge=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(n),_e.forEach(n),L.forEach(n)},m(g,M){_(g,d,M),e(d,v),_(g,c,M),_(g,p,M),e(p,T),e(T,l),e(p,h),e(p,q),e(q,ce),_(g,K,M),_(g,x,M),e(x,J),e(x,N),e(N,ne),e(x,pe),e(x,S),e(S,ue),e(x,ie),_(g,Y,M),_(g,O,M),e(O,te),_(g,G,M),_(g,P,M),e(P,j),e(j,oe),e(j,Q),e(Q,le),e(j,se),e(j,I),e(I,fe),e(P,de),e(P,C),e(C,he),e(C,B),e(B,ee),e(C,ae),e(C,U),e(U,me),e(P,W),e(P,A),e(A,re),e(A,R),e(R,ge)},d(g){g&&n(d),g&&n(c),g&&n(p),g&&n(K),g&&n(x),g&&n(Y),g&&n(O),g&&n(G),g&&n(P)}}}function $$(z){let d,v,c,p,T;return{c(){d=r("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),T=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(n)},m(l,h){_(l,d,h),e(d,v),e(d,c),e(c,p),e(d,T)},d(l){l&&n(d)}}}function E$(z){let d,v,c,p,T;return p=new ye({props:{code:`from transformers import FunnelTokenizer, TFFunnelForTokenClassification
import tensorflow as tf

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = TFFunnelForTokenClassification.from_pretrained("funnel-transformer/small")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="tf"
)

logits = model(**inputs).logits
predicted_token_class_ids = tf.math.argmax(logits, axis=-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t] for t in predicted_token_class_ids[0].numpy().tolist()]
predicted_tokens_classes
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, TFFunnelForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFunnelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>].numpy().tolist()]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes
`}}),{c(){d=r("p"),v=o("Example:"),c=u(),F(p.$$.fragment)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Example:"),h.forEach(n),c=f(l),b(p.$$.fragment,l)},m(l,h){_(l,d,h),e(d,v),_(l,c,h),w(p,l,h),T=!0},p:we,i(l){T||(y(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function M$(z){let d,v;return d=new ye({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){F(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){w(d,c,p),v=!0},p:we,i(c){v||(y(d.$$.fragment,c),v=!0)},o(c){$(d.$$.fragment,c),v=!1},d(c){E(d,c)}}}function z$(z){let d,v,c,p,T,l,h,q,ce,K,x,J,N,ne,pe,S,ue,ie,Y,O,te,G,P,j,oe,Q,le,se,I,fe,de,C,he,B,ee,ae,U,me,W,A,re,R,ge;return{c(){d=r("p"),v=o("TF 2.0 models accepts two formats as inputs:"),c=u(),p=r("ul"),T=r("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),h=u(),q=r("li"),ce=o("having all inputs as a list, tuple or dict in the first positional arguments."),K=u(),x=r("p"),J=o("This second option is useful when using "),N=r("code"),ne=o("tf.keras.Model.fit"),pe=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ue=o("model(inputs)"),ie=o("."),Y=u(),O=r("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=u(),P=r("ul"),j=r("li"),oe=o("a single Tensor with "),Q=r("code"),le=o("input_ids"),se=o(" only and nothing else: "),I=r("code"),fe=o("model(inputs_ids)"),de=u(),C=r("li"),he=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r("code"),ee=o("model([input_ids, attention_mask])"),ae=o(" or "),U=r("code"),me=o("model([input_ids, attention_mask, token_type_ids])"),W=u(),A=r("li"),re=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),ge=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=a(g,"P",{});var M=i(d);v=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(n),c=f(g),p=a(g,"UL",{});var Z=i(p);T=a(Z,"LI",{});var ve=i(T);l=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(n),h=f(Z),q=a(Z,"LI",{});var $e=i(q);ce=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(n),Z.forEach(n),K=f(g),x=a(g,"P",{});var D=i(x);J=s(D,"This second option is useful when using "),N=a(D,"CODE",{});var Te=i(N);ne=s(Te,"tf.keras.Model.fit"),Te.forEach(n),pe=s(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(D,"CODE",{});var Ee=i(S);ue=s(Ee,"model(inputs)"),Ee.forEach(n),ie=s(D,"."),D.forEach(n),Y=f(g),O=a(g,"P",{});var Me=i(O);te=s(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(n),G=f(g),P=a(g,"UL",{});var L=i(P);j=a(L,"LI",{});var V=i(j);oe=s(V,"a single Tensor with "),Q=a(V,"CODE",{});var ze=i(Q);le=s(ze,"input_ids"),ze.forEach(n),se=s(V," only and nothing else: "),I=a(V,"CODE",{});var ke=i(I);fe=s(ke,"model(inputs_ids)"),ke.forEach(n),V.forEach(n),de=f(L),C=a(L,"LI",{});var H=i(C);he=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a(H,"CODE",{});var qe=i(B);ee=s(qe,"model([input_ids, attention_mask])"),qe.forEach(n),ae=s(H," or "),U=a(H,"CODE",{});var Fe=i(U);me=s(Fe,"model([input_ids, attention_mask, token_type_ids])"),Fe.forEach(n),H.forEach(n),W=f(L),A=a(L,"LI",{});var _e=i(A);re=s(_e,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(_e,"CODE",{});var xe=i(R);ge=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(n),_e.forEach(n),L.forEach(n)},m(g,M){_(g,d,M),e(d,v),_(g,c,M),_(g,p,M),e(p,T),e(T,l),e(p,h),e(p,q),e(q,ce),_(g,K,M),_(g,x,M),e(x,J),e(x,N),e(N,ne),e(x,pe),e(x,S),e(S,ue),e(x,ie),_(g,Y,M),_(g,O,M),e(O,te),_(g,G,M),_(g,P,M),e(P,j),e(j,oe),e(j,Q),e(Q,le),e(j,se),e(j,I),e(I,fe),e(P,de),e(P,C),e(C,he),e(C,B),e(B,ee),e(C,ae),e(C,U),e(U,me),e(P,W),e(P,A),e(A,re),e(A,R),e(R,ge)},d(g){g&&n(d),g&&n(c),g&&n(p),g&&n(K),g&&n(x),g&&n(Y),g&&n(O),g&&n(G),g&&n(P)}}}function q$(z){let d,v,c,p,T;return{c(){d=r("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var q=i(c);p=s(q,"Module"),q.forEach(n),T=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(n)},m(l,h){_(l,d,h),e(d,v),e(d,c),e(c,p),e(d,T)},d(l){l&&n(d)}}}function x$(z){let d,v,c,p,T;return p=new ye({props:{code:`from transformers import FunnelTokenizer, TFFunnelForQuestionAnswering
import tensorflow as tf

tokenizer = FunnelTokenizer.from_pretrained("funnel-transformer/small")
model = TFFunnelForQuestionAnswering.from_pretrained("funnel-transformer/small")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FunnelTokenizer, TFFunnelForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FunnelTokenizer.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFunnelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;funnel-transformer/small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=r("p"),v=o("Example:"),c=u(),F(p.$$.fragment)},l(l){d=a(l,"P",{});var h=i(d);v=s(h,"Example:"),h.forEach(n),c=f(l),b(p.$$.fragment,l)},m(l,h){_(l,d,h),e(d,v),_(l,c,h),w(p,l,h),T=!0},p:we,i(l){T||(y(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&n(d),l&&n(c),E(p,l)}}}function P$(z){let d,v;return d=new ye({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = tf.constant([14]), tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = tf.constant([<span class="hljs-number">14</span>]), tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){F(d.$$.fragment)},l(c){b(d.$$.fragment,c)},m(c,p){w(d,c,p),v=!0},p:we,i(c){v||(y(d.$$.fragment,c),v=!0)},o(c){$(d.$$.fragment,c),v=!1},d(c){E(d,c)}}}function C$(z){let d,v,c,p,T,l,h,q,ce,K,x,J,N,ne,pe,S,ue,ie,Y,O,te,G,P,j,oe,Q,le,se,I,fe,de,C,he,B,ee,ae,U,me,W,A,re,R,ge,g,M,Z,ve,$e,D,Te,Ee,Me,L,V,ze,ke,H,qe,Fe,_e,xe,fi,Zu,Xu,Wc,An,Ju,Ts,ef,nf,ks,tf,of,Bc,Vn,It,El,Fs,sf,Ml,rf,Qc,jn,bs,af,Ln,lf,hi,df,cf,mi,pf,uf,ws,ff,hf,mf,Hn,gf,gi,_f,vf,_i,Tf,kf,Uc,Yn,Wt,zl,ys,Ff,ql,bf,Rc,je,$s,wf,xl,yf,$f,Bt,vi,Ef,Mf,Ti,zf,qf,xf,Es,Pf,ki,Cf,jf,Lf,Dn,Ms,Of,Pl,Af,Df,zs,Fi,Nf,Cl,Sf,If,bi,Wf,jl,Bf,Qf,Qt,qs,Uf,xs,Rf,Ll,Vf,Hf,Yf,gn,Ps,Kf,Ol,Gf,Zf,Ut,Xf,Kn,Jf,Al,eh,nh,Dl,th,oh,sh,wi,Cs,Vc,Gn,Rt,Nl,js,rh,Sl,ah,Hc,Xe,Ls,ih,Os,lh,Il,dh,ch,ph,Vt,yi,uh,fh,$i,hh,mh,gh,As,_h,Ei,vh,Th,kh,_n,Ds,Fh,Wl,bh,wh,Ht,yh,Zn,$h,Bl,Eh,Mh,Ql,zh,qh,Yc,Xn,Yt,Ul,Ns,xh,Rl,Ph,Kc,Jn,Ss,Ch,Is,jh,Mi,Lh,Oh,Gc,et,Ws,Ah,Bs,Dh,zi,Nh,Sh,Zc,nt,Kt,Vl,Qs,Ih,Hl,Wh,Xc,Re,Us,Bh,Yl,Qh,Uh,Rs,Rh,Vs,Vh,Hh,Yh,Hs,Kh,qi,Gh,Zh,Xh,Ys,Jh,Ks,em,nm,tm,vn,Gs,om,tt,sm,xi,rm,am,Kl,im,lm,dm,Gt,cm,Zt,Jc,ot,Xt,Gl,Zs,pm,Zl,um,ep,Ve,Xs,fm,Xl,hm,mm,Js,gm,er,_m,vm,Tm,nr,km,Pi,Fm,bm,wm,tr,ym,or,$m,Em,Mm,Tn,sr,zm,st,qm,Ci,xm,Pm,Jl,Cm,jm,Lm,Jt,Om,eo,np,rt,no,ed,rr,Am,nd,Dm,tp,at,ar,Nm,kn,ir,Sm,it,Im,ji,Wm,Bm,td,Qm,Um,Rm,to,Vm,oo,op,lt,so,od,lr,Hm,sd,Ym,sp,He,dr,Km,cr,Gm,rd,Zm,Xm,Jm,pr,eg,ur,ng,tg,og,fr,sg,Li,rg,ag,ig,hr,lg,mr,dg,cg,pg,Je,gr,ug,dt,fg,Oi,hg,mg,ad,gg,_g,vg,ro,Tg,ao,kg,io,rp,ct,lo,id,_r,Fg,ld,bg,ap,Ye,vr,wg,dd,yg,$g,Tr,Eg,kr,Mg,zg,qg,Fr,xg,Ai,Pg,Cg,jg,br,Lg,wr,Og,Ag,Dg,Ue,yr,Ng,pt,Sg,Di,Ig,Wg,cd,Bg,Qg,Ug,co,Rg,po,Vg,uo,Hg,fo,Yg,ho,ip,ut,mo,pd,$r,Kg,ud,Gg,lp,Ke,Er,Zg,fd,Xg,Jg,Mr,e_,zr,n_,t_,o_,qr,s_,Ni,r_,a_,i_,xr,l_,Pr,d_,c_,p_,Fn,Cr,u_,ft,f_,Si,h_,m_,hd,g_,__,v_,go,T_,_o,dp,ht,vo,md,jr,k_,gd,F_,cp,Ge,Lr,b_,_d,w_,y_,Or,$_,Ar,E_,M_,z_,Dr,q_,Ii,x_,P_,C_,Nr,j_,Sr,L_,O_,A_,en,Ir,D_,mt,N_,Wi,S_,I_,vd,W_,B_,Q_,To,U_,ko,R_,Fo,pp,gt,bo,Td,Wr,V_,kd,H_,up,Ze,Br,Y_,_t,K_,Fd,G_,Z_,bd,X_,J_,ev,Qr,nv,Ur,tv,ov,sv,Rr,rv,Bi,av,iv,lv,Vr,dv,Hr,cv,pv,uv,nn,Yr,fv,vt,hv,Qi,mv,gv,wd,_v,vv,Tv,wo,kv,yo,Fv,$o,fp,Tt,Eo,yd,Kr,bv,$d,wv,hp,Oe,Gr,yv,Ed,$v,Ev,Zr,Mv,Xr,zv,qv,xv,Jr,Pv,Ui,Cv,jv,Lv,ea,Ov,na,Av,Dv,Nv,Mo,Sv,bn,ta,Iv,kt,Wv,Ri,Bv,Qv,Md,Uv,Rv,Vv,zo,Hv,qo,mp,Ft,xo,zd,oa,Yv,qd,Kv,gp,Ae,sa,Gv,xd,Zv,Xv,ra,Jv,aa,eT,nT,tT,ia,oT,Vi,sT,rT,aT,la,iT,da,lT,dT,cT,Po,pT,wn,ca,uT,bt,fT,Hi,hT,mT,Pd,gT,_T,vT,Co,TT,jo,_p,wt,Lo,Cd,pa,kT,jd,FT,vp,De,ua,bT,Ld,wT,yT,fa,$T,ha,ET,MT,zT,ma,qT,Yi,xT,PT,CT,ga,jT,_a,LT,OT,AT,Oo,DT,yn,va,NT,yt,ST,Ki,IT,WT,Od,BT,QT,UT,Ao,RT,Do,Tp,$t,No,Ad,Ta,VT,Dd,HT,kp,Ne,ka,YT,Fa,KT,Nd,GT,ZT,XT,ba,JT,wa,ek,nk,tk,ya,ok,Gi,sk,rk,ak,$a,ik,Ea,lk,dk,ck,So,pk,tn,Ma,uk,Et,fk,Zi,hk,mk,Sd,gk,_k,vk,Io,Tk,Wo,kk,Bo,Fp,Mt,Qo,Id,za,Fk,Wd,bk,bp,Se,qa,wk,Bd,yk,$k,xa,Ek,Pa,Mk,zk,qk,Ca,xk,Xi,Pk,Ck,jk,ja,Lk,La,Ok,Ak,Dk,Uo,Nk,on,Oa,Sk,zt,Ik,Ji,Wk,Bk,Qd,Qk,Uk,Rk,Ro,Vk,Vo,Hk,Ho,wp,qt,Yo,Ud,Aa,Yk,Rd,Kk,yp,Ie,Da,Gk,Vd,Zk,Xk,Na,Jk,Sa,eF,nF,tF,Ia,oF,el,sF,rF,aF,Wa,iF,Ba,lF,dF,cF,Ko,pF,$n,Qa,uF,xt,fF,nl,hF,mF,Hd,gF,_F,vF,Go,TF,Zo,$p,Pt,Xo,Yd,Ua,kF,Kd,FF,Ep,We,Ra,bF,Gd,wF,yF,Va,$F,Ha,EF,MF,zF,Ya,qF,tl,xF,PF,CF,Ka,jF,Ga,LF,OF,AF,Jo,DF,sn,Za,NF,Ct,SF,ol,IF,WF,Zd,BF,QF,UF,es,RF,ns,VF,ts,Mp,jt,os,Xd,Xa,HF,Jd,YF,zp,Be,Ja,KF,Lt,GF,ec,ZF,XF,nc,JF,eb,nb,ei,tb,ni,ob,sb,rb,ti,ab,sl,ib,lb,db,oi,cb,si,pb,ub,fb,ss,hb,rn,ri,mb,Ot,gb,rl,_b,vb,tc,Tb,kb,Fb,rs,bb,as,wb,is,qp;return l=new Ce({}),ne=new Ce({}),Fs=new Ce({}),bs=new X({props:{name:"class transformers.FunnelConfig",anchor:"transformers.FunnelConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"block_sizes",val:" = [4, 4, 4]"},{name:"block_repeats",val:" = None"},{name:"num_decoder_layers",val:" = 2"},{name:"d_model",val:" = 768"},{name:"n_head",val:" = 12"},{name:"d_head",val:" = 64"},{name:"d_inner",val:" = 3072"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 3"},{name:"initializer_range",val:" = 0.1"},{name:"initializer_std",val:" = None"},{name:"layer_norm_eps",val:" = 1e-09"},{name:"pooling_type",val:" = 'mean'"},{name:"attention_type",val:" = 'relative_shift'"},{name:"separate_cls",val:" = True"},{name:"truncate_seq",val:" = True"},{name:"pool_q_only",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FunnelConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the Funnel transformer. Defines the number of different tokens that can be represented
by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelModel">FunnelModel</a> or <a href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.TFFunnelModel">TFFunnelModel</a>.`,name:"vocab_size"},{anchor:"transformers.FunnelConfig.block_sizes",description:`<strong>block_sizes</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[4, 4, 4]</code>) &#x2014;
The sizes of the blocks used in the model.`,name:"block_sizes"},{anchor:"transformers.FunnelConfig.block_repeats",description:`<strong>block_repeats</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
If passed along, each layer of each block is repeated the number of times indicated.`,name:"block_repeats"},{anchor:"transformers.FunnelConfig.num_decoder_layers",description:`<strong>num_decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The number of layers in the decoder (when not using the base model).`,name:"num_decoder_layers"},{anchor:"transformers.FunnelConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the model&#x2019;s hidden states.`,name:"d_model"},{anchor:"transformers.FunnelConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.FunnelConfig.d_head",description:`<strong>d_head</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Dimensionality of the model&#x2019;s heads.`,name:"d_head"},{anchor:"transformers.FunnelConfig.d_inner",description:`<strong>d_inner</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Inner dimension in the feed-forward blocks.`,name:"d_inner"},{anchor:"transformers.FunnelConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>callable</code>, <em>optional</em>, defaults to <code>&quot;gelu_new&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.FunnelConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.FunnelConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.FunnelConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability used between the two layers of the feed-forward blocks.`,name:"activation_dropout"},{anchor:"transformers.FunnelConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.FunnelConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelModel">FunnelModel</a> or <a href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.TFFunnelModel">TFFunnelModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.FunnelConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The upper bound of the <em>uniform initializer</em> for initializing all weight matrices in attention layers.`,name:"initializer_range"},{anchor:"transformers.FunnelConfig.initializer_std",description:`<strong>initializer_std</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The standard deviation of the <em>normal initializer</em> for initializing the embedding matrix and the weight of
linear layers. Will default to 1 for the embedding matrix and the value given by Xavier initialization for
linear layers.`,name:"initializer_std"},{anchor:"transformers.FunnelConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-9) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.FunnelConfig.pooling_type",description:`<strong>pooling_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;mean&quot;</code>) &#x2014;
Possible values are <code>&quot;mean&quot;</code> or <code>&quot;max&quot;</code>. The way pooling is performed at the beginning of each block.`,name:"pooling_type"},{anchor:"transformers.FunnelConfig.attention_type",description:`<strong>attention_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;relative_shift&quot;</code>) &#x2014;
Possible values are <code>&quot;relative_shift&quot;</code> or <code>&quot;factorized&quot;</code>. The former is faster on CPU/GPU while the latter
is faster on TPU.`,name:"attention_type"},{anchor:"transformers.FunnelConfig.separate_cls",description:`<strong>separate_cls</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to separate the cls token when applying pooling.`,name:"separate_cls"},{anchor:"transformers.FunnelConfig.truncate_seq",description:`<strong>truncate_seq</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
When using <code>separate_cls</code>, whether or not to truncate the last token when pooling, to avoid getting a
sequence length that is not a multiple of 2.`,name:"truncate_seq"},{anchor:"transformers.FunnelConfig.pool_q_only",description:`<strong>pool_q_only</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to apply the pooling only to the query or to query, key and values for the attention layers.`,name:"pool_q_only"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/configuration_funnel.py#L37"}}),ys=new Ce({}),$s=new X({props:{name:"class transformers.FunnelTokenizer",anchor:"transformers.FunnelTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '<sep>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '<cls>'"},{name:"mask_token",val:" = '<mask>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/tokenization_funnel.py#L58"}}),Ms=new X({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.FunnelTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FunnelTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/bert/tokenization_bert.py#L248",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),qs=new X({props:{name:"get_special_tokens_mask",anchor:"transformers.FunnelTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.FunnelTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.FunnelTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/bert/tokenization_bert.py#L273",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ps=new X({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.FunnelTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FunnelTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/tokenization_funnel.py#L108",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ut=new be({props:{anchor:"transformers.FunnelTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[L1]},$$scope:{ctx:z}}}),Cs=new X({props:{name:"save_vocabulary",anchor:"transformers.FunnelTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/bert/tokenization_bert.py#L330"}}),js=new Ce({}),Ls=new X({props:{name:"class transformers.FunnelTokenizerFast",anchor:"transformers.FunnelTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '<sep>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '<cls>'"},{name:"mask_token",val:" = '<mask>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"clean_text",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"wordpieces_prefix",val:" = '##'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/tokenization_funnel_fast.py#L71"}}),Ds=new X({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/tokenization_funnel_fast.py#L124",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ht=new be({props:{anchor:"transformers.FunnelTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[O1]},$$scope:{ctx:z}}}),Ns=new Ce({}),Ss=new X({props:{name:"class transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput",anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss of the ELECTRA-style objective.`,name:"loss"},{anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_funnel.py#L834"}}),Ws=new X({props:{name:"class transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput",anchor:"transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the head (scores for each token before SoftMax).`,name:"logits"},{anchor:"transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_tf_funnel.py#L978"}}),Qs=new Ce({}),Us=new X({props:{name:"class transformers.FunnelBaseModel",anchor:"transformers.FunnelBaseModel",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelBaseModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_funnel.py#L927"}}),Gs=new X({props:{name:"forward",anchor:"transformers.FunnelBaseModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelBaseModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FunnelBaseModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FunnelBaseModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FunnelBaseModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FunnelBaseModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FunnelBaseModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FunnelBaseModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_funnel.py#L943",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Gt=new Pe({props:{$$slots:{default:[A1]},$$scope:{ctx:z}}}),Zt=new be({props:{anchor:"transformers.FunnelBaseModel.forward.example",$$slots:{default:[D1]},$$scope:{ctx:z}}}),Zs=new Ce({}),Xs=new X({props:{name:"class transformers.FunnelModel",anchor:"transformers.FunnelModel",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_funnel.py#L1004"}}),sr=new X({props:{name:"forward",anchor:"transformers.FunnelModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FunnelModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FunnelModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FunnelModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FunnelModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FunnelModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FunnelModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_funnel.py#L1021",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jt=new Pe({props:{$$slots:{default:[N1]},$$scope:{ctx:z}}}),eo=new be({props:{anchor:"transformers.FunnelModel.forward.example",$$slots:{default:[S1]},$$scope:{ctx:z}}}),rr=new Ce({}),ar=new X({props:{name:"class transformers.FunnelForPreTraining",anchor:"transformers.FunnelForPreTraining",parameters:[{name:"config",val:": FunnelConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_funnel.py#L1112"}}),ir=new X({props:{name:"forward",anchor:"transformers.FunnelForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FunnelForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FunnelForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FunnelForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FunnelForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FunnelForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FunnelForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the ELECTRA-style loss. Input should be a sequence of tokens (see <code>input_ids</code>
docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates the token is an original token,</li>
<li>1 indicates the token was replaced.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_funnel.py#L1121",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput"
>transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 Total loss of the ELECTRA-style objective.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Prediction scores of the head (scores for each token before SoftMax).</p>
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
  href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput"
>transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new Pe({props:{$$slots:{default:[I1]},$$scope:{ctx:z}}}),oo=new be({props:{anchor:"transformers.FunnelForPreTraining.forward.example",$$slots:{default:[W1]},$$scope:{ctx:z}}}),lr=new Ce({}),dr=new X({props:{name:"class transformers.FunnelForMaskedLM",anchor:"transformers.FunnelForMaskedLM",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_funnel.py#L1195"}}),gr=new X({props:{name:"forward",anchor:"transformers.FunnelForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FunnelForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FunnelForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FunnelForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FunnelForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FunnelForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FunnelForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_funnel.py#L1211",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new Pe({props:{$$slots:{default:[B1]},$$scope:{ctx:z}}}),ao=new be({props:{anchor:"transformers.FunnelForMaskedLM.forward.example",$$slots:{default:[Q1]},$$scope:{ctx:z}}}),io=new be({props:{anchor:"transformers.FunnelForMaskedLM.forward.example-2",$$slots:{default:[U1]},$$scope:{ctx:z}}}),_r=new Ce({}),vr=new X({props:{name:"class transformers.FunnelForSequenceClassification",anchor:"transformers.FunnelForSequenceClassification",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_funnel.py#L1275"}}),yr=new X({props:{name:"forward",anchor:"transformers.FunnelForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FunnelForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FunnelForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FunnelForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FunnelForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FunnelForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FunnelForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_funnel.py#L1286",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),co=new Pe({props:{$$slots:{default:[R1]},$$scope:{ctx:z}}}),po=new be({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example",$$slots:{default:[V1]},$$scope:{ctx:z}}}),uo=new be({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example-2",$$slots:{default:[H1]},$$scope:{ctx:z}}}),fo=new be({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example-3",$$slots:{default:[Y1]},$$scope:{ctx:z}}}),ho=new be({props:{anchor:"transformers.FunnelForSequenceClassification.forward.example-4",$$slots:{default:[K1]},$$scope:{ctx:z}}}),$r=new Ce({}),Er=new X({props:{name:"class transformers.FunnelForMultipleChoice",anchor:"transformers.FunnelForMultipleChoice",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_funnel.py#L1368"}}),Cr=new X({props:{name:"forward",anchor:"transformers.FunnelForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FunnelForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FunnelForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FunnelForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FunnelForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FunnelForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FunnelForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_funnel.py#L1377",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),go=new Pe({props:{$$slots:{default:[G1]},$$scope:{ctx:z}}}),_o=new be({props:{anchor:"transformers.FunnelForMultipleChoice.forward.example",$$slots:{default:[Z1]},$$scope:{ctx:z}}}),jr=new Ce({}),Lr=new X({props:{name:"class transformers.FunnelForTokenClassification",anchor:"transformers.FunnelForTokenClassification",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_funnel.py#L1452"}}),Ir=new X({props:{name:"forward",anchor:"transformers.FunnelForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FunnelForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FunnelForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FunnelForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FunnelForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FunnelForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FunnelForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_funnel.py#L1464",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),To=new Pe({props:{$$slots:{default:[X1]},$$scope:{ctx:z}}}),ko=new be({props:{anchor:"transformers.FunnelForTokenClassification.forward.example",$$slots:{default:[J1]},$$scope:{ctx:z}}}),Fo=new be({props:{anchor:"transformers.FunnelForTokenClassification.forward.example-2",$$slots:{default:[e$]},$$scope:{ctx:z}}}),Wr=new Ce({}),Br=new X({props:{name:"class transformers.FunnelForQuestionAnswering",anchor:"transformers.FunnelForQuestionAnswering",parameters:[{name:"config",val:": FunnelConfig"}],parametersDescription:[{anchor:"transformers.FunnelForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelConfig">FunnelConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_funnel.py#L1526"}}),Yr=new X({props:{name:"forward",anchor:"transformers.FunnelForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FunnelForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FunnelForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FunnelForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FunnelForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FunnelForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FunnelForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FunnelForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FunnelForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.FunnelForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_funnel.py#L1537",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),wo=new Pe({props:{$$slots:{default:[n$]},$$scope:{ctx:z}}}),yo=new be({props:{anchor:"transformers.FunnelForQuestionAnswering.forward.example",$$slots:{default:[t$]},$$scope:{ctx:z}}}),$o=new be({props:{anchor:"transformers.FunnelForQuestionAnswering.forward.example-2",$$slots:{default:[o$]},$$scope:{ctx:z}}}),Kr=new Ce({}),Gr=new X({props:{name:"class transformers.TFFunnelBaseModel",anchor:"transformers.TFFunnelBaseModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelBaseModel.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1095"}}),Mo=new Pe({props:{$$slots:{default:[s$]},$$scope:{ctx:z}}}),ta=new X({props:{name:"call",anchor:"transformers.TFFunnelBaseModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelBaseModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFunnelBaseModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFunnelBaseModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFunnelBaseModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFunnelBaseModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFunnelBaseModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFunnelBaseModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelBaseModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1100",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),zo=new Pe({props:{$$slots:{default:[r$]},$$scope:{ctx:z}}}),qo=new be({props:{anchor:"transformers.TFFunnelBaseModel.call.example",$$slots:{default:[a$]},$$scope:{ctx:z}}}),oa=new Ce({}),sa=new X({props:{name:"class transformers.TFFunnelModel",anchor:"transformers.TFFunnelModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelModel.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1142"}}),Po=new Pe({props:{$$slots:{default:[i$]},$$scope:{ctx:z}}}),ca=new X({props:{name:"call",anchor:"transformers.TFFunnelModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFunnelModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFunnelModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFunnelModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFunnelModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFunnelModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFunnelModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1147",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Co=new Pe({props:{$$slots:{default:[l$]},$$scope:{ctx:z}}}),jo=new be({props:{anchor:"transformers.TFFunnelModel.call.example",$$slots:{default:[d$]},$$scope:{ctx:z}}}),pa=new Ce({}),ua=new X({props:{name:"class transformers.TFFunnelForPreTraining",anchor:"transformers.TFFunnelForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForPreTraining.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1192"}}),Oo=new Pe({props:{$$slots:{default:[c$]},$$scope:{ctx:z}}}),va=new X({props:{name:"call",anchor:"transformers.TFFunnelForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFunnelForPreTraining.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFunnelForPreTraining.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFunnelForPreTraining.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFunnelForPreTraining.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFunnelForPreTraining.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFunnelForPreTraining.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1199",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput"
>transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Prediction scores of the head (scores for each token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput"
>transformers.models.funnel.modeling_tf_funnel.TFFunnelForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ao=new Pe({props:{$$slots:{default:[p$]},$$scope:{ctx:z}}}),Do=new be({props:{anchor:"transformers.TFFunnelForPreTraining.call.example",$$slots:{default:[u$]},$$scope:{ctx:z}}}),Ta=new Ce({}),ka=new X({props:{name:"class transformers.TFFunnelForMaskedLM",anchor:"transformers.TFFunnelForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForMaskedLM.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1259"}}),So=new Pe({props:{$$slots:{default:[f$]},$$scope:{ctx:z}}}),Ma=new X({props:{name:"call",anchor:"transformers.TFFunnelForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFunnelForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFunnelForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFunnelForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFunnelForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFunnelForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFunnelForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFunnelForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1273",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Io=new Pe({props:{$$slots:{default:[h$]},$$scope:{ctx:z}}}),Wo=new be({props:{anchor:"transformers.TFFunnelForMaskedLM.call.example",$$slots:{default:[m$]},$$scope:{ctx:z}}}),Bo=new be({props:{anchor:"transformers.TFFunnelForMaskedLM.call.example-2",$$slots:{default:[g$]},$$scope:{ctx:z}}}),za=new Ce({}),qa=new X({props:{name:"class transformers.TFFunnelForSequenceClassification",anchor:"transformers.TFFunnelForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForSequenceClassification.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1340"}}),Uo=new Pe({props:{$$slots:{default:[_$]},$$scope:{ctx:z}}}),Oa=new X({props:{name:"call",anchor:"transformers.TFFunnelForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFunnelForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFunnelForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFunnelForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFunnelForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFunnelForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFunnelForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFunnelForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1348",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ro=new Pe({props:{$$slots:{default:[v$]},$$scope:{ctx:z}}}),Vo=new be({props:{anchor:"transformers.TFFunnelForSequenceClassification.call.example",$$slots:{default:[T$]},$$scope:{ctx:z}}}),Ho=new be({props:{anchor:"transformers.TFFunnelForSequenceClassification.call.example-2",$$slots:{default:[k$]},$$scope:{ctx:z}}}),Aa=new Ce({}),Da=new X({props:{name:"class transformers.TFFunnelForMultipleChoice",anchor:"transformers.TFFunnelForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForMultipleChoice.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1416"}}),Ko=new Pe({props:{$$slots:{default:[F$]},$$scope:{ctx:z}}}),Qa=new X({props:{name:"call",anchor:"transformers.TFFunnelForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFunnelForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFunnelForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFunnelForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFunnelForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFunnelForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFunnelForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFunnelForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1433",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(batch_size, )</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Go=new Pe({props:{$$slots:{default:[b$]},$$scope:{ctx:z}}}),Zo=new be({props:{anchor:"transformers.TFFunnelForMultipleChoice.call.example",$$slots:{default:[w$]},$$scope:{ctx:z}}}),Ua=new Ce({}),Ra=new X({props:{name:"class transformers.TFFunnelForTokenClassification",anchor:"transformers.TFFunnelForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForTokenClassification.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1532"}}),Jo=new Pe({props:{$$slots:{default:[y$]},$$scope:{ctx:z}}}),Za=new X({props:{name:"call",anchor:"transformers.TFFunnelForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFunnelForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFunnelForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFunnelForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFunnelForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFunnelForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFunnelForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFunnelForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1543",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of unmasked labels, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),es=new Pe({props:{$$slots:{default:[$$]},$$scope:{ctx:z}}}),ns=new be({props:{anchor:"transformers.TFFunnelForTokenClassification.call.example",$$slots:{default:[E$]},$$scope:{ctx:z}}}),ts=new be({props:{anchor:"transformers.TFFunnelForTokenClassification.call.example-2",$$slots:{default:[M$]},$$scope:{ctx:z}}}),Xa=new Ce({}),Ja=new X({props:{name:"class transformers.TFFunnelForQuestionAnswering",anchor:"transformers.TFFunnelForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFunnelForQuestionAnswering.config",description:`<strong>config</strong> (<code>XxxConfig</code>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1610"}}),ss=new Pe({props:{$$slots:{default:[z$]},$$scope:{ctx:z}}}),ri=new X({props:{name:"call",anchor:"transformers.TFFunnelForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFunnelForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelTokenizer">FunnelTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFunnelForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFunnelForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFunnelForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFunnelForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFunnelForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFunnelForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFunnelForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFunnelForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFFunnelForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/funnel/modeling_tf_funnel.py#L1620",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelConfig"
>FunnelConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>start_positions</code> and <code>end_positions</code> are provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),rs=new Pe({props:{$$slots:{default:[q$]},$$scope:{ctx:z}}}),as=new be({props:{anchor:"transformers.TFFunnelForQuestionAnswering.call.example",$$slots:{default:[x$]},$$scope:{ctx:z}}}),is=new be({props:{anchor:"transformers.TFFunnelForQuestionAnswering.call.example-2",$$slots:{default:[P$]},$$scope:{ctx:z}}}),{c(){d=r("meta"),v=u(),c=r("h1"),p=r("a"),T=r("span"),F(l.$$.fragment),h=u(),q=r("span"),ce=o("Funnel Transformer"),K=u(),x=r("h2"),J=r("a"),N=r("span"),F(ne.$$.fragment),pe=u(),S=r("span"),ue=o("Overview"),ie=u(),Y=r("p"),O=o("The Funnel Transformer model was proposed in the paper "),te=r("a"),G=o(`Funnel-Transformer: Filtering out Sequential Redundancy for
Efficient Language Processing`),P=o(`. It is a bidirectional transformer model, like
BERT, but with a pooling operation after each block of layers, a bit like in traditional convolutional neural networks
(CNN) in computer vision.`),j=u(),oe=r("p"),Q=o("The abstract from the paper is the following:"),le=u(),se=r("p"),I=r("em"),fe=o(`With the success of language pretraining, it is highly desirable to develop more efficient architectures of good
scalability that can exploit the abundant unlabeled data at a lower cost. To improve the efficiency, we examine the
much-overlooked redundancy in maintaining a full-length token-level presentation, especially for tasks that only
require a single-vector presentation of the sequence. With this intuition, we propose Funnel-Transformer which
gradually compresses the sequence of hidden states to a shorter one and hence reduces the computation cost. More
importantly, by re-investing the saved FLOPs from length reduction in constructing a deeper or wider model, we further
improve the model capacity. In addition, to perform token-level predictions as required by common pretraining
objectives, Funnel-Transformer is able to recover a deep representation for each token from the reduced hidden sequence
via a decoder. Empirically, with comparable or fewer FLOPs, Funnel-Transformer outperforms the standard Transformer on
a wide variety of sequence-level prediction tasks, including text classification, language understanding, and reading
comprehension.`),de=u(),C=r("p"),he=o("Tips:"),B=u(),ee=r("ul"),ae=r("li"),U=o(`Since Funnel Transformer uses pooling, the sequence length of the hidden states changes after each block of layers.
The base model therefore has a final sequence length that is a quarter of the original one. This model can be used
directly for tasks that just require a sentence summary (like sequence classification or multiple choice). For other
tasks, the full model is used; this full model has a decoder that upsamples the final hidden states to the same
sequence length as the input.`),me=u(),W=r("li"),A=o(`The Funnel Transformer checkpoints are all available with a full version and a base version. The first ones should be
used for `),re=r("a"),R=o("FunnelModel"),ge=o(", "),g=r("a"),M=o("FunnelForPreTraining"),Z=o(`,
`),ve=r("a"),$e=o("FunnelForMaskedLM"),D=o(", "),Te=r("a"),Ee=o("FunnelForTokenClassification"),Me=o(` and
class:`),L=r("em"),V=o("~transformers.FunnelForQuestionAnswering"),ze=o(`. The second ones should be used for
`),ke=r("a"),H=o("FunnelBaseModel"),qe=o(", "),Fe=r("a"),_e=o("FunnelForSequenceClassification"),xe=o(` and
`),fi=r("a"),Zu=o("FunnelForMultipleChoice"),Xu=o("."),Wc=u(),An=r("p"),Ju=o("This model was contributed by "),Ts=r("a"),ef=o("sgugger"),nf=o(". The original code can be found "),ks=r("a"),tf=o("here"),of=o("."),Bc=u(),Vn=r("h2"),It=r("a"),El=r("span"),F(Fs.$$.fragment),sf=u(),Ml=r("span"),rf=o("FunnelConfig"),Qc=u(),jn=r("div"),F(bs.$$.fragment),af=u(),Ln=r("p"),lf=o("This is the configuration class to store the configuration of a "),hi=r("a"),df=o("FunnelModel"),cf=o(" or a "),mi=r("a"),pf=o("TFBertModel"),uf=o(`. It is used to
instantiate a Funnel Transformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Funnel
Transformer `),ws=r("a"),ff=o("funnel-transformer/small"),hf=o(" architecture."),mf=u(),Hn=r("p"),gf=o("Configuration objects inherit from "),gi=r("a"),_f=o("PretrainedConfig"),vf=o(` and can be used to control the model outputs. Read the
documentation from `),_i=r("a"),Tf=o("PretrainedConfig"),kf=o(" for more information."),Uc=u(),Yn=r("h2"),Wt=r("a"),zl=r("span"),F(ys.$$.fragment),Ff=u(),ql=r("span"),bf=o("FunnelTokenizer"),Rc=u(),je=r("div"),F($s.$$.fragment),wf=u(),xl=r("p"),yf=o("Construct a Funnel Transformer tokenizer."),$f=u(),Bt=r("p"),vi=r("a"),Ef=o("FunnelTokenizer"),Mf=o(" is identical to "),Ti=r("a"),zf=o("BertTokenizer"),qf=o(` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),xf=u(),Es=r("p"),Pf=o("Refer to superclass "),ki=r("a"),Cf=o("BertTokenizer"),jf=o(" for usage examples and documentation concerning parameters."),Lf=u(),Dn=r("div"),F(Ms.$$.fragment),Of=u(),Pl=r("p"),Af=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Df=u(),zs=r("ul"),Fi=r("li"),Nf=o("single sequence: "),Cl=r("code"),Sf=o("[CLS] X [SEP]"),If=u(),bi=r("li"),Wf=o("pair of sequences: "),jl=r("code"),Bf=o("[CLS] A [SEP] B [SEP]"),Qf=u(),Qt=r("div"),F(qs.$$.fragment),Uf=u(),xs=r("p"),Rf=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ll=r("code"),Vf=o("prepare_for_model"),Hf=o(" method."),Yf=u(),gn=r("div"),F(Ps.$$.fragment),Kf=u(),Ol=r("p"),Gf=o("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),Zf=u(),F(Ut.$$.fragment),Xf=u(),Kn=r("p"),Jf=o("If "),Al=r("code"),eh=o("token_ids_1"),nh=o(" is "),Dl=r("code"),th=o("None"),oh=o(", this method only returns the first portion of the mask (0s)."),sh=u(),wi=r("div"),F(Cs.$$.fragment),Vc=u(),Gn=r("h2"),Rt=r("a"),Nl=r("span"),F(js.$$.fragment),rh=u(),Sl=r("span"),ah=o("FunnelTokenizerFast"),Hc=u(),Xe=r("div"),F(Ls.$$.fragment),ih=u(),Os=r("p"),lh=o("Construct a \u201Cfast\u201D Funnel Transformer tokenizer (backed by HuggingFace\u2019s "),Il=r("em"),dh=o("tokenizers"),ch=o(" library)."),ph=u(),Vt=r("p"),yi=r("a"),uh=o("FunnelTokenizerFast"),fh=o(" is identical to "),$i=r("a"),hh=o("BertTokenizerFast"),mh=o(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),gh=u(),As=r("p"),_h=o("Refer to superclass "),Ei=r("a"),vh=o("BertTokenizerFast"),Th=o(" for usage examples and documentation concerning parameters."),kh=u(),_n=r("div"),F(Ds.$$.fragment),Fh=u(),Wl=r("p"),bh=o("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),wh=u(),F(Ht.$$.fragment),yh=u(),Zn=r("p"),$h=o("If "),Bl=r("code"),Eh=o("token_ids_1"),Mh=o(" is "),Ql=r("code"),zh=o("None"),qh=o(", this method only returns the first portion of the mask (0s)."),Yc=u(),Xn=r("h2"),Yt=r("a"),Ul=r("span"),F(Ns.$$.fragment),xh=u(),Rl=r("span"),Ph=o("Funnel specific outputs"),Kc=u(),Jn=r("div"),F(Ss.$$.fragment),Ch=u(),Is=r("p"),jh=o("Output type of "),Mi=r("a"),Lh=o("FunnelForPreTraining"),Oh=o("."),Gc=u(),et=r("div"),F(Ws.$$.fragment),Ah=u(),Bs=r("p"),Dh=o("Output type of "),zi=r("a"),Nh=o("FunnelForPreTraining"),Sh=o("."),Zc=u(),nt=r("h2"),Kt=r("a"),Vl=r("span"),F(Qs.$$.fragment),Ih=u(),Hl=r("span"),Wh=o("FunnelBaseModel"),Xc=u(),Re=r("div"),F(Us.$$.fragment),Bh=u(),Yl=r("p"),Qh=o(`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),Uh=u(),Rs=r("p"),Rh=o("The Funnel Transformer model was proposed in "),Vs=r("a"),Vh=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Hh=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Yh=u(),Hs=r("p"),Kh=o("This model inherits from "),qi=r("a"),Gh=o("PreTrainedModel"),Zh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xh=u(),Ys=r("p"),Jh=o("This model is also a PyTorch "),Ks=r("a"),em=o("torch.nn.Module"),nm=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tm=u(),vn=r("div"),F(Gs.$$.fragment),om=u(),tt=r("p"),sm=o("The "),xi=r("a"),rm=o("FunnelBaseModel"),am=o(" forward method, overrides the "),Kl=r("code"),im=o("__call__"),lm=o(" special method."),dm=u(),F(Gt.$$.fragment),cm=u(),F(Zt.$$.fragment),Jc=u(),ot=r("h2"),Xt=r("a"),Gl=r("span"),F(Zs.$$.fragment),pm=u(),Zl=r("span"),um=o("FunnelModel"),ep=u(),Ve=r("div"),F(Xs.$$.fragment),fm=u(),Xl=r("p"),hm=o("The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),mm=u(),Js=r("p"),gm=o("The Funnel Transformer model was proposed in "),er=r("a"),_m=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),vm=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Tm=u(),nr=r("p"),km=o("This model inherits from "),Pi=r("a"),Fm=o("PreTrainedModel"),bm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wm=u(),tr=r("p"),ym=o("This model is also a PyTorch "),or=r("a"),$m=o("torch.nn.Module"),Em=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mm=u(),Tn=r("div"),F(sr.$$.fragment),zm=u(),st=r("p"),qm=o("The "),Ci=r("a"),xm=o("FunnelModel"),Pm=o(" forward method, overrides the "),Jl=r("code"),Cm=o("__call__"),jm=o(" special method."),Lm=u(),F(Jt.$$.fragment),Om=u(),F(eo.$$.fragment),np=u(),rt=r("h2"),no=r("a"),ed=r("span"),F(rr.$$.fragment),Am=u(),nd=r("span"),Dm=o("FunnelModelForPreTraining"),tp=u(),at=r("div"),F(ar.$$.fragment),Nm=u(),kn=r("div"),F(ir.$$.fragment),Sm=u(),it=r("p"),Im=o("The "),ji=r("a"),Wm=o("FunnelForPreTraining"),Bm=o(" forward method, overrides the "),td=r("code"),Qm=o("__call__"),Um=o(" special method."),Rm=u(),F(to.$$.fragment),Vm=u(),F(oo.$$.fragment),op=u(),lt=r("h2"),so=r("a"),od=r("span"),F(lr.$$.fragment),Hm=u(),sd=r("span"),Ym=o("FunnelForMaskedLM"),sp=u(),He=r("div"),F(dr.$$.fragment),Km=u(),cr=r("p"),Gm=o("Funnel Transformer Model with a "),rd=r("code"),Zm=o("language modeling"),Xm=o(" head on top."),Jm=u(),pr=r("p"),eg=o("The Funnel Transformer model was proposed in "),ur=r("a"),ng=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),tg=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),og=u(),fr=r("p"),sg=o("This model inherits from "),Li=r("a"),rg=o("PreTrainedModel"),ag=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ig=u(),hr=r("p"),lg=o("This model is also a PyTorch "),mr=r("a"),dg=o("torch.nn.Module"),cg=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pg=u(),Je=r("div"),F(gr.$$.fragment),ug=u(),dt=r("p"),fg=o("The "),Oi=r("a"),hg=o("FunnelForMaskedLM"),mg=o(" forward method, overrides the "),ad=r("code"),gg=o("__call__"),_g=o(" special method."),vg=u(),F(ro.$$.fragment),Tg=u(),F(ao.$$.fragment),kg=u(),F(io.$$.fragment),rp=u(),ct=r("h2"),lo=r("a"),id=r("span"),F(_r.$$.fragment),Fg=u(),ld=r("span"),bg=o("FunnelForSequenceClassification"),ap=u(),Ye=r("div"),F(vr.$$.fragment),wg=u(),dd=r("p"),yg=o(`Funnel Transformer Model with a sequence classification/regression head on top (two linear layer on top of the
first timestep of the last hidden state) e.g. for GLUE tasks.`),$g=u(),Tr=r("p"),Eg=o("The Funnel Transformer model was proposed in "),kr=r("a"),Mg=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),zg=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),qg=u(),Fr=r("p"),xg=o("This model inherits from "),Ai=r("a"),Pg=o("PreTrainedModel"),Cg=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jg=u(),br=r("p"),Lg=o("This model is also a PyTorch "),wr=r("a"),Og=o("torch.nn.Module"),Ag=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dg=u(),Ue=r("div"),F(yr.$$.fragment),Ng=u(),pt=r("p"),Sg=o("The "),Di=r("a"),Ig=o("FunnelForSequenceClassification"),Wg=o(" forward method, overrides the "),cd=r("code"),Bg=o("__call__"),Qg=o(" special method."),Ug=u(),F(co.$$.fragment),Rg=u(),F(po.$$.fragment),Vg=u(),F(uo.$$.fragment),Hg=u(),F(fo.$$.fragment),Yg=u(),F(ho.$$.fragment),ip=u(),ut=r("h2"),mo=r("a"),pd=r("span"),F($r.$$.fragment),Kg=u(),ud=r("span"),Gg=o("FunnelForMultipleChoice"),lp=u(),Ke=r("div"),F(Er.$$.fragment),Zg=u(),fd=r("p"),Xg=o(`Funnel Transformer Model with a multiple choice classification head on top (two linear layer on top of the first
timestep of the last hidden state, and a softmax) e.g. for RocStories/SWAG tasks.`),Jg=u(),Mr=r("p"),e_=o("The Funnel Transformer model was proposed in "),zr=r("a"),n_=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),t_=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),o_=u(),qr=r("p"),s_=o("This model inherits from "),Ni=r("a"),r_=o("PreTrainedModel"),a_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),i_=u(),xr=r("p"),l_=o("This model is also a PyTorch "),Pr=r("a"),d_=o("torch.nn.Module"),c_=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),p_=u(),Fn=r("div"),F(Cr.$$.fragment),u_=u(),ft=r("p"),f_=o("The "),Si=r("a"),h_=o("FunnelForMultipleChoice"),m_=o(" forward method, overrides the "),hd=r("code"),g_=o("__call__"),__=o(" special method."),v_=u(),F(go.$$.fragment),T_=u(),F(_o.$$.fragment),dp=u(),ht=r("h2"),vo=r("a"),md=r("span"),F(jr.$$.fragment),k_=u(),gd=r("span"),F_=o("FunnelForTokenClassification"),cp=u(),Ge=r("div"),F(Lr.$$.fragment),b_=u(),_d=r("p"),w_=o(`Funnel Transformer Model with a token classification head on top (a linear layer on top of the hidden-states
output) e.g. for Named-Entity-Recognition (NER) tasks.`),y_=u(),Or=r("p"),$_=o("The Funnel Transformer model was proposed in "),Ar=r("a"),E_=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),M_=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),z_=u(),Dr=r("p"),q_=o("This model inherits from "),Ii=r("a"),x_=o("PreTrainedModel"),P_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),C_=u(),Nr=r("p"),j_=o("This model is also a PyTorch "),Sr=r("a"),L_=o("torch.nn.Module"),O_=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),A_=u(),en=r("div"),F(Ir.$$.fragment),D_=u(),mt=r("p"),N_=o("The "),Wi=r("a"),S_=o("FunnelForTokenClassification"),I_=o(" forward method, overrides the "),vd=r("code"),W_=o("__call__"),B_=o(" special method."),Q_=u(),F(To.$$.fragment),U_=u(),F(ko.$$.fragment),R_=u(),F(Fo.$$.fragment),pp=u(),gt=r("h2"),bo=r("a"),Td=r("span"),F(Wr.$$.fragment),V_=u(),kd=r("span"),H_=o("FunnelForQuestionAnswering"),up=u(),Ze=r("div"),F(Br.$$.fragment),Y_=u(),_t=r("p"),K_=o(`Funnel Transformer Model with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layer on top of the hidden-states output to compute `),Fd=r("code"),G_=o("span start logits"),Z_=o(" and "),bd=r("code"),X_=o("span end logits"),J_=o(")."),ev=u(),Qr=r("p"),nv=o("The Funnel Transformer model was proposed in "),Ur=r("a"),tv=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),ov=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),sv=u(),Rr=r("p"),rv=o("This model inherits from "),Bi=r("a"),av=o("PreTrainedModel"),iv=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lv=u(),Vr=r("p"),dv=o("This model is also a PyTorch "),Hr=r("a"),cv=o("torch.nn.Module"),pv=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),uv=u(),nn=r("div"),F(Yr.$$.fragment),fv=u(),vt=r("p"),hv=o("The "),Qi=r("a"),mv=o("FunnelForQuestionAnswering"),gv=o(" forward method, overrides the "),wd=r("code"),_v=o("__call__"),vv=o(" special method."),Tv=u(),F(wo.$$.fragment),kv=u(),F(yo.$$.fragment),Fv=u(),F($o.$$.fragment),fp=u(),Tt=r("h2"),Eo=r("a"),yd=r("span"),F(Kr.$$.fragment),bv=u(),$d=r("span"),wv=o("TFFunnelBaseModel"),hp=u(),Oe=r("div"),F(Gr.$$.fragment),yv=u(),Ed=r("p"),$v=o(`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),Ev=u(),Zr=r("p"),Mv=o("The Funnel Transformer model was proposed in "),Xr=r("a"),zv=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),qv=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),xv=u(),Jr=r("p"),Pv=o("This model inherits from "),Ui=r("a"),Cv=o("TFPreTrainedModel"),jv=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lv=u(),ea=r("p"),Ov=o("This model is also a "),na=r("a"),Av=o("tf.keras.Model"),Dv=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nv=u(),F(Mo.$$.fragment),Sv=u(),bn=r("div"),F(ta.$$.fragment),Iv=u(),kt=r("p"),Wv=o("The "),Ri=r("a"),Bv=o("TFFunnelBaseModel"),Qv=o(" forward method, overrides the "),Md=r("code"),Uv=o("__call__"),Rv=o(" special method."),Vv=u(),F(zo.$$.fragment),Hv=u(),F(qo.$$.fragment),mp=u(),Ft=r("h2"),xo=r("a"),zd=r("span"),F(oa.$$.fragment),Yv=u(),qd=r("span"),Kv=o("TFFunnelModel"),gp=u(),Ae=r("div"),F(sa.$$.fragment),Gv=u(),xd=r("p"),Zv=o("The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),Xv=u(),ra=r("p"),Jv=o("The Funnel Transformer model was proposed in "),aa=r("a"),eT=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),nT=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),tT=u(),ia=r("p"),oT=o("This model inherits from "),Vi=r("a"),sT=o("TFPreTrainedModel"),rT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aT=u(),la=r("p"),iT=o("This model is also a "),da=r("a"),lT=o("tf.keras.Model"),dT=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cT=u(),F(Po.$$.fragment),pT=u(),wn=r("div"),F(ca.$$.fragment),uT=u(),bt=r("p"),fT=o("The "),Hi=r("a"),hT=o("TFFunnelModel"),mT=o(" forward method, overrides the "),Pd=r("code"),gT=o("__call__"),_T=o(" special method."),vT=u(),F(Co.$$.fragment),TT=u(),F(jo.$$.fragment),_p=u(),wt=r("h2"),Lo=r("a"),Cd=r("span"),F(pa.$$.fragment),kT=u(),jd=r("span"),FT=o("TFFunnelModelForPreTraining"),vp=u(),De=r("div"),F(ua.$$.fragment),bT=u(),Ld=r("p"),wT=o("Funnel model with a binary classification head on top as used during pretraining for identifying generated tokens."),yT=u(),fa=r("p"),$T=o("The Funnel Transformer model was proposed in "),ha=r("a"),ET=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),MT=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),zT=u(),ma=r("p"),qT=o("This model inherits from "),Yi=r("a"),xT=o("TFPreTrainedModel"),PT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),CT=u(),ga=r("p"),jT=o("This model is also a "),_a=r("a"),LT=o("tf.keras.Model"),OT=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),AT=u(),F(Oo.$$.fragment),DT=u(),yn=r("div"),F(va.$$.fragment),NT=u(),yt=r("p"),ST=o("The "),Ki=r("a"),IT=o("TFFunnelForPreTraining"),WT=o(" forward method, overrides the "),Od=r("code"),BT=o("__call__"),QT=o(" special method."),UT=u(),F(Ao.$$.fragment),RT=u(),F(Do.$$.fragment),Tp=u(),$t=r("h2"),No=r("a"),Ad=r("span"),F(Ta.$$.fragment),VT=u(),Dd=r("span"),HT=o("TFFunnelForMaskedLM"),kp=u(),Ne=r("div"),F(ka.$$.fragment),YT=u(),Fa=r("p"),KT=o("Funnel Model with a "),Nd=r("code"),GT=o("language modeling"),ZT=o(" head on top."),XT=u(),ba=r("p"),JT=o("The Funnel Transformer model was proposed in "),wa=r("a"),ek=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),nk=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),tk=u(),ya=r("p"),ok=o("This model inherits from "),Gi=r("a"),sk=o("TFPreTrainedModel"),rk=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ak=u(),$a=r("p"),ik=o("This model is also a "),Ea=r("a"),lk=o("tf.keras.Model"),dk=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ck=u(),F(So.$$.fragment),pk=u(),tn=r("div"),F(Ma.$$.fragment),uk=u(),Et=r("p"),fk=o("The "),Zi=r("a"),hk=o("TFFunnelForMaskedLM"),mk=o(" forward method, overrides the "),Sd=r("code"),gk=o("__call__"),_k=o(" special method."),vk=u(),F(Io.$$.fragment),Tk=u(),F(Wo.$$.fragment),kk=u(),F(Bo.$$.fragment),Fp=u(),Mt=r("h2"),Qo=r("a"),Id=r("span"),F(za.$$.fragment),Fk=u(),Wd=r("span"),bk=o("TFFunnelForSequenceClassification"),bp=u(),Se=r("div"),F(qa.$$.fragment),wk=u(),Bd=r("p"),yk=o(`Funnel Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),$k=u(),xa=r("p"),Ek=o("The Funnel Transformer model was proposed in "),Pa=r("a"),Mk=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),zk=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),qk=u(),Ca=r("p"),xk=o("This model inherits from "),Xi=r("a"),Pk=o("TFPreTrainedModel"),Ck=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jk=u(),ja=r("p"),Lk=o("This model is also a "),La=r("a"),Ok=o("tf.keras.Model"),Ak=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dk=u(),F(Uo.$$.fragment),Nk=u(),on=r("div"),F(Oa.$$.fragment),Sk=u(),zt=r("p"),Ik=o("The "),Ji=r("a"),Wk=o("TFFunnelForSequenceClassification"),Bk=o(" forward method, overrides the "),Qd=r("code"),Qk=o("__call__"),Uk=o(" special method."),Rk=u(),F(Ro.$$.fragment),Vk=u(),F(Vo.$$.fragment),Hk=u(),F(Ho.$$.fragment),wp=u(),qt=r("h2"),Yo=r("a"),Ud=r("span"),F(Aa.$$.fragment),Yk=u(),Rd=r("span"),Kk=o("TFFunnelForMultipleChoice"),yp=u(),Ie=r("div"),F(Da.$$.fragment),Gk=u(),Vd=r("p"),Zk=o(`Funnel Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Xk=u(),Na=r("p"),Jk=o("The Funnel Transformer model was proposed in "),Sa=r("a"),eF=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),nF=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),tF=u(),Ia=r("p"),oF=o("This model inherits from "),el=r("a"),sF=o("TFPreTrainedModel"),rF=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aF=u(),Wa=r("p"),iF=o("This model is also a "),Ba=r("a"),lF=o("tf.keras.Model"),dF=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cF=u(),F(Ko.$$.fragment),pF=u(),$n=r("div"),F(Qa.$$.fragment),uF=u(),xt=r("p"),fF=o("The "),nl=r("a"),hF=o("TFFunnelForMultipleChoice"),mF=o(" forward method, overrides the "),Hd=r("code"),gF=o("__call__"),_F=o(" special method."),vF=u(),F(Go.$$.fragment),TF=u(),F(Zo.$$.fragment),$p=u(),Pt=r("h2"),Xo=r("a"),Yd=r("span"),F(Ua.$$.fragment),kF=u(),Kd=r("span"),FF=o("TFFunnelForTokenClassification"),Ep=u(),We=r("div"),F(Ra.$$.fragment),bF=u(),Gd=r("p"),wF=o(`Funnel Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),yF=u(),Va=r("p"),$F=o("The Funnel Transformer model was proposed in "),Ha=r("a"),EF=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),MF=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),zF=u(),Ya=r("p"),qF=o("This model inherits from "),tl=r("a"),xF=o("TFPreTrainedModel"),PF=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),CF=u(),Ka=r("p"),jF=o("This model is also a "),Ga=r("a"),LF=o("tf.keras.Model"),OF=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),AF=u(),F(Jo.$$.fragment),DF=u(),sn=r("div"),F(Za.$$.fragment),NF=u(),Ct=r("p"),SF=o("The "),ol=r("a"),IF=o("TFFunnelForTokenClassification"),WF=o(" forward method, overrides the "),Zd=r("code"),BF=o("__call__"),QF=o(" special method."),UF=u(),F(es.$$.fragment),RF=u(),F(ns.$$.fragment),VF=u(),F(ts.$$.fragment),Mp=u(),jt=r("h2"),os=r("a"),Xd=r("span"),F(Xa.$$.fragment),HF=u(),Jd=r("span"),YF=o("TFFunnelForQuestionAnswering"),zp=u(),Be=r("div"),F(Ja.$$.fragment),KF=u(),Lt=r("p"),GF=o(`Funnel Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ec=r("code"),ZF=o("span start logits"),XF=o(" and "),nc=r("code"),JF=o("span end logits"),eb=o(")."),nb=u(),ei=r("p"),tb=o("The Funnel Transformer model was proposed in "),ni=r("a"),ob=o(`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),sb=o(" by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),rb=u(),ti=r("p"),ab=o("This model inherits from "),sl=r("a"),ib=o("TFPreTrainedModel"),lb=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),db=u(),oi=r("p"),cb=o("This model is also a "),si=r("a"),pb=o("tf.keras.Model"),ub=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fb=u(),F(ss.$$.fragment),hb=u(),rn=r("div"),F(ri.$$.fragment),mb=u(),Ot=r("p"),gb=o("The "),rl=r("a"),_b=o("TFFunnelForQuestionAnswering"),vb=o(" forward method, overrides the "),tc=r("code"),Tb=o("__call__"),kb=o(" special method."),Fb=u(),F(rs.$$.fragment),bb=u(),F(as.$$.fragment),wb=u(),F(is.$$.fragment),this.h()},l(t){const k=C1('[data-svelte="svelte-1phssyn"]',document.head);d=a(k,"META",{name:!0,content:!0}),k.forEach(n),v=f(t),c=a(t,"H1",{class:!0});var ai=i(c);p=a(ai,"A",{id:!0,class:!0,href:!0});var oc=i(p);T=a(oc,"SPAN",{});var sc=i(T);b(l.$$.fragment,sc),sc.forEach(n),oc.forEach(n),h=f(ai),q=a(ai,"SPAN",{});var rc=i(q);ce=s(rc,"Funnel Transformer"),rc.forEach(n),ai.forEach(n),K=f(t),x=a(t,"H2",{class:!0});var ii=i(x);J=a(ii,"A",{id:!0,class:!0,href:!0});var ac=i(J);N=a(ac,"SPAN",{});var ic=i(N);b(ne.$$.fragment,ic),ic.forEach(n),ac.forEach(n),pe=f(ii),S=a(ii,"SPAN",{});var lc=i(S);ue=s(lc,"Overview"),lc.forEach(n),ii.forEach(n),ie=f(t),Y=a(t,"P",{});var li=i(Y);O=s(li,"The Funnel Transformer model was proposed in the paper "),te=a(li,"A",{href:!0,rel:!0});var dc=i(te);G=s(dc,`Funnel-Transformer: Filtering out Sequential Redundancy for
Efficient Language Processing`),dc.forEach(n),P=s(li,`. It is a bidirectional transformer model, like
BERT, but with a pooling operation after each block of layers, a bit like in traditional convolutional neural networks
(CNN) in computer vision.`),li.forEach(n),j=f(t),oe=a(t,"P",{});var cc=i(oe);Q=s(cc,"The abstract from the paper is the following:"),cc.forEach(n),le=f(t),se=a(t,"P",{});var pc=i(se);I=a(pc,"EM",{});var uc=i(I);fe=s(uc,`With the success of language pretraining, it is highly desirable to develop more efficient architectures of good
scalability that can exploit the abundant unlabeled data at a lower cost. To improve the efficiency, we examine the
much-overlooked redundancy in maintaining a full-length token-level presentation, especially for tasks that only
require a single-vector presentation of the sequence. With this intuition, we propose Funnel-Transformer which
gradually compresses the sequence of hidden states to a shorter one and hence reduces the computation cost. More
importantly, by re-investing the saved FLOPs from length reduction in constructing a deeper or wider model, we further
improve the model capacity. In addition, to perform token-level predictions as required by common pretraining
objectives, Funnel-Transformer is able to recover a deep representation for each token from the reduced hidden sequence
via a decoder. Empirically, with comparable or fewer FLOPs, Funnel-Transformer outperforms the standard Transformer on
a wide variety of sequence-level prediction tasks, including text classification, language understanding, and reading
comprehension.`),uc.forEach(n),pc.forEach(n),de=f(t),C=a(t,"P",{});var fc=i(C);he=s(fc,"Tips:"),fc.forEach(n),B=f(t),ee=a(t,"UL",{});var di=i(ee);ae=a(di,"LI",{});var hc=i(ae);U=s(hc,`Since Funnel Transformer uses pooling, the sequence length of the hidden states changes after each block of layers.
The base model therefore has a final sequence length that is a quarter of the original one. This model can be used
directly for tasks that just require a sentence summary (like sequence classification or multiple choice). For other
tasks, the full model is used; this full model has a decoder that upsamples the final hidden states to the same
sequence length as the input.`),hc.forEach(n),me=f(di),W=a(di,"LI",{});var Le=i(W);A=s(Le,`The Funnel Transformer checkpoints are all available with a full version and a base version. The first ones should be
used for `),re=a(Le,"A",{href:!0});var mc=i(re);R=s(mc,"FunnelModel"),mc.forEach(n),ge=s(Le,", "),g=a(Le,"A",{href:!0});var gc=i(g);M=s(gc,"FunnelForPreTraining"),gc.forEach(n),Z=s(Le,`,
`),ve=a(Le,"A",{href:!0});var _c=i(ve);$e=s(_c,"FunnelForMaskedLM"),_c.forEach(n),D=s(Le,", "),Te=a(Le,"A",{href:!0});var vc=i(Te);Ee=s(vc,"FunnelForTokenClassification"),vc.forEach(n),Me=s(Le,` and
class:`),L=a(Le,"EM",{});var Tc=i(L);V=s(Tc,"~transformers.FunnelForQuestionAnswering"),Tc.forEach(n),ze=s(Le,`. The second ones should be used for
`),ke=a(Le,"A",{href:!0});var kc=i(ke);H=s(kc,"FunnelBaseModel"),kc.forEach(n),qe=s(Le,", "),Fe=a(Le,"A",{href:!0});var Fc=i(Fe);_e=s(Fc,"FunnelForSequenceClassification"),Fc.forEach(n),xe=s(Le,` and
`),fi=a(Le,"A",{href:!0});var bc=i(fi);Zu=s(bc,"FunnelForMultipleChoice"),bc.forEach(n),Xu=s(Le,"."),Le.forEach(n),di.forEach(n),Wc=f(t),An=a(t,"P",{});var At=i(An);Ju=s(At,"This model was contributed by "),Ts=a(At,"A",{href:!0,rel:!0});var wc=i(Ts);ef=s(wc,"sgugger"),wc.forEach(n),nf=s(At,". The original code can be found "),ks=a(At,"A",{href:!0,rel:!0});var yc=i(ks);tf=s(yc,"here"),yc.forEach(n),of=s(At,"."),At.forEach(n),Bc=f(t),Vn=a(t,"H2",{class:!0});var ci=i(Vn);It=a(ci,"A",{id:!0,class:!0,href:!0});var $c=i(It);El=a($c,"SPAN",{});var Ec=i(El);b(Fs.$$.fragment,Ec),Ec.forEach(n),$c.forEach(n),sf=f(ci),Ml=a(ci,"SPAN",{});var Mc=i(Ml);rf=s(Mc,"FunnelConfig"),Mc.forEach(n),ci.forEach(n),Qc=f(t),jn=a(t,"DIV",{class:!0});var Dt=i(jn);b(bs.$$.fragment,Dt),af=f(Dt),Ln=a(Dt,"P",{});var On=i(Ln);lf=s(On,"This is the configuration class to store the configuration of a "),hi=a(On,"A",{href:!0});var zc=i(hi);df=s(zc,"FunnelModel"),zc.forEach(n),cf=s(On," or a "),mi=a(On,"A",{href:!0});var qc=i(mi);pf=s(qc,"TFBertModel"),qc.forEach(n),uf=s(On,`. It is used to
instantiate a Funnel Transformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Funnel
Transformer `),ws=a(On,"A",{href:!0,rel:!0});var xc=i(ws);ff=s(xc,"funnel-transformer/small"),xc.forEach(n),hf=s(On," architecture."),On.forEach(n),mf=f(Dt),Hn=a(Dt,"P",{});var Nt=i(Hn);gf=s(Nt,"Configuration objects inherit from "),gi=a(Nt,"A",{href:!0});var Pc=i(gi);_f=s(Pc,"PretrainedConfig"),Pc.forEach(n),vf=s(Nt,` and can be used to control the model outputs. Read the
documentation from `),_i=a(Nt,"A",{href:!0});var Cc=i(_i);Tf=s(Cc,"PretrainedConfig"),Cc.forEach(n),kf=s(Nt," for more information."),Nt.forEach(n),Dt.forEach(n),Uc=f(t),Yn=a(t,"H2",{class:!0});var pi=i(Yn);Wt=a(pi,"A",{id:!0,class:!0,href:!0});var jc=i(Wt);zl=a(jc,"SPAN",{});var Lc=i(zl);b(ys.$$.fragment,Lc),Lc.forEach(n),jc.forEach(n),Ff=f(pi),ql=a(pi,"SPAN",{});var Oc=i(ql);bf=s(Oc,"FunnelTokenizer"),Oc.forEach(n),pi.forEach(n),Rc=f(t),je=a(t,"DIV",{class:!0});var Qe=i(je);b($s.$$.fragment,Qe),wf=f(Qe),xl=a(Qe,"P",{});var Ac=i(xl);yf=s(Ac,"Construct a Funnel Transformer tokenizer."),Ac.forEach(n),$f=f(Qe),Bt=a(Qe,"P",{});var ls=i(Bt);vi=a(ls,"A",{href:!0});var Dc=i(vi);Ef=s(Dc,"FunnelTokenizer"),Dc.forEach(n),Mf=s(ls," is identical to "),Ti=a(ls,"A",{href:!0});var Nc=i(Ti);zf=s(Nc,"BertTokenizer"),Nc.forEach(n),qf=s(ls,` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),ls.forEach(n),xf=f(Qe),Es=a(Qe,"P",{});var ui=i(Es);Pf=s(ui,"Refer to superclass "),ki=a(ui,"A",{href:!0});var Sc=i(ki);Cf=s(Sc,"BertTokenizer"),Sc.forEach(n),jf=s(ui," for usage examples and documentation concerning parameters."),ui.forEach(n),Lf=f(Qe),Dn=a(Qe,"DIV",{class:!0});var St=i(Dn);b(Ms.$$.fragment,St),Of=f(St),Pl=a(St,"P",{});var Eb=i(Pl);Af=s(Eb,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Eb.forEach(n),Df=f(St),zs=a(St,"UL",{});var xp=i(zs);Fi=a(xp,"LI",{});var yb=i(Fi);Nf=s(yb,"single sequence: "),Cl=a(yb,"CODE",{});var Mb=i(Cl);Sf=s(Mb,"[CLS] X [SEP]"),Mb.forEach(n),yb.forEach(n),If=f(xp),bi=a(xp,"LI",{});var $b=i(bi);Wf=s($b,"pair of sequences: "),jl=a($b,"CODE",{});var zb=i(jl);Bf=s(zb,"[CLS] A [SEP] B [SEP]"),zb.forEach(n),$b.forEach(n),xp.forEach(n),St.forEach(n),Qf=f(Qe),Qt=a(Qe,"DIV",{class:!0});var Pp=i(Qt);b(qs.$$.fragment,Pp),Uf=f(Pp),xs=a(Pp,"P",{});var Cp=i(xs);Rf=s(Cp,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ll=a(Cp,"CODE",{});var qb=i(Ll);Vf=s(qb,"prepare_for_model"),qb.forEach(n),Hf=s(Cp," method."),Cp.forEach(n),Pp.forEach(n),Yf=f(Qe),gn=a(Qe,"DIV",{class:!0});var ds=i(gn);b(Ps.$$.fragment,ds),Kf=f(ds),Ol=a(ds,"P",{});var xb=i(Ol);Gf=s(xb,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),xb.forEach(n),Zf=f(ds),b(Ut.$$.fragment,ds),Xf=f(ds),Kn=a(ds,"P",{});var al=i(Kn);Jf=s(al,"If "),Al=a(al,"CODE",{});var Pb=i(Al);eh=s(Pb,"token_ids_1"),Pb.forEach(n),nh=s(al," is "),Dl=a(al,"CODE",{});var Cb=i(Dl);th=s(Cb,"None"),Cb.forEach(n),oh=s(al,", this method only returns the first portion of the mask (0s)."),al.forEach(n),ds.forEach(n),sh=f(Qe),wi=a(Qe,"DIV",{class:!0});var jb=i(wi);b(Cs.$$.fragment,jb),jb.forEach(n),Qe.forEach(n),Vc=f(t),Gn=a(t,"H2",{class:!0});var jp=i(Gn);Rt=a(jp,"A",{id:!0,class:!0,href:!0});var Lb=i(Rt);Nl=a(Lb,"SPAN",{});var Ob=i(Nl);b(js.$$.fragment,Ob),Ob.forEach(n),Lb.forEach(n),rh=f(jp),Sl=a(jp,"SPAN",{});var Ab=i(Sl);ah=s(Ab,"FunnelTokenizerFast"),Ab.forEach(n),jp.forEach(n),Hc=f(t),Xe=a(t,"DIV",{class:!0});var Nn=i(Xe);b(Ls.$$.fragment,Nn),ih=f(Nn),Os=a(Nn,"P",{});var Lp=i(Os);lh=s(Lp,"Construct a \u201Cfast\u201D Funnel Transformer tokenizer (backed by HuggingFace\u2019s "),Il=a(Lp,"EM",{});var Db=i(Il);dh=s(Db,"tokenizers"),Db.forEach(n),ch=s(Lp," library)."),Lp.forEach(n),ph=f(Nn),Vt=a(Nn,"P",{});var Ic=i(Vt);yi=a(Ic,"A",{href:!0});var Nb=i(yi);uh=s(Nb,"FunnelTokenizerFast"),Nb.forEach(n),fh=s(Ic," is identical to "),$i=a(Ic,"A",{href:!0});var Sb=i($i);hh=s(Sb,"BertTokenizerFast"),Sb.forEach(n),mh=s(Ic,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Ic.forEach(n),gh=f(Nn),As=a(Nn,"P",{});var Op=i(As);_h=s(Op,"Refer to superclass "),Ei=a(Op,"A",{href:!0});var Ib=i(Ei);vh=s(Ib,"BertTokenizerFast"),Ib.forEach(n),Th=s(Op," for usage examples and documentation concerning parameters."),Op.forEach(n),kh=f(Nn),_n=a(Nn,"DIV",{class:!0});var cs=i(_n);b(Ds.$$.fragment,cs),Fh=f(cs),Wl=a(cs,"P",{});var Wb=i(Wl);bh=s(Wb,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A Funnel"),Wb.forEach(n),wh=f(cs),b(Ht.$$.fragment,cs),yh=f(cs),Zn=a(cs,"P",{});var il=i(Zn);$h=s(il,"If "),Bl=a(il,"CODE",{});var Bb=i(Bl);Eh=s(Bb,"token_ids_1"),Bb.forEach(n),Mh=s(il," is "),Ql=a(il,"CODE",{});var Qb=i(Ql);zh=s(Qb,"None"),Qb.forEach(n),qh=s(il,", this method only returns the first portion of the mask (0s)."),il.forEach(n),cs.forEach(n),Nn.forEach(n),Yc=f(t),Xn=a(t,"H2",{class:!0});var Ap=i(Xn);Yt=a(Ap,"A",{id:!0,class:!0,href:!0});var Ub=i(Yt);Ul=a(Ub,"SPAN",{});var Rb=i(Ul);b(Ns.$$.fragment,Rb),Rb.forEach(n),Ub.forEach(n),xh=f(Ap),Rl=a(Ap,"SPAN",{});var Vb=i(Rl);Ph=s(Vb,"Funnel specific outputs"),Vb.forEach(n),Ap.forEach(n),Kc=f(t),Jn=a(t,"DIV",{class:!0});var Dp=i(Jn);b(Ss.$$.fragment,Dp),Ch=f(Dp),Is=a(Dp,"P",{});var Np=i(Is);jh=s(Np,"Output type of "),Mi=a(Np,"A",{href:!0});var Hb=i(Mi);Lh=s(Hb,"FunnelForPreTraining"),Hb.forEach(n),Oh=s(Np,"."),Np.forEach(n),Dp.forEach(n),Gc=f(t),et=a(t,"DIV",{class:!0});var Sp=i(et);b(Ws.$$.fragment,Sp),Ah=f(Sp),Bs=a(Sp,"P",{});var Ip=i(Bs);Dh=s(Ip,"Output type of "),zi=a(Ip,"A",{href:!0});var Yb=i(zi);Nh=s(Yb,"FunnelForPreTraining"),Yb.forEach(n),Sh=s(Ip,"."),Ip.forEach(n),Sp.forEach(n),Zc=f(t),nt=a(t,"H2",{class:!0});var Wp=i(nt);Kt=a(Wp,"A",{id:!0,class:!0,href:!0});var Kb=i(Kt);Vl=a(Kb,"SPAN",{});var Gb=i(Vl);b(Qs.$$.fragment,Gb),Gb.forEach(n),Kb.forEach(n),Ih=f(Wp),Hl=a(Wp,"SPAN",{});var Zb=i(Hl);Wh=s(Zb,"FunnelBaseModel"),Zb.forEach(n),Wp.forEach(n),Xc=f(t),Re=a(t,"DIV",{class:!0});var En=i(Re);b(Us.$$.fragment,En),Bh=f(En),Yl=a(En,"P",{});var Xb=i(Yl);Qh=s(Xb,`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),Xb.forEach(n),Uh=f(En),Rs=a(En,"P",{});var Bp=i(Rs);Rh=s(Bp,"The Funnel Transformer model was proposed in "),Vs=a(Bp,"A",{href:!0,rel:!0});var Jb=i(Vs);Vh=s(Jb,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Jb.forEach(n),Hh=s(Bp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Bp.forEach(n),Yh=f(En),Hs=a(En,"P",{});var Qp=i(Hs);Kh=s(Qp,"This model inherits from "),qi=a(Qp,"A",{href:!0});var ew=i(qi);Gh=s(ew,"PreTrainedModel"),ew.forEach(n),Zh=s(Qp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qp.forEach(n),Xh=f(En),Ys=a(En,"P",{});var Up=i(Ys);Jh=s(Up,"This model is also a PyTorch "),Ks=a(Up,"A",{href:!0,rel:!0});var nw=i(Ks);em=s(nw,"torch.nn.Module"),nw.forEach(n),nm=s(Up,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Up.forEach(n),tm=f(En),vn=a(En,"DIV",{class:!0});var ps=i(vn);b(Gs.$$.fragment,ps),om=f(ps),tt=a(ps,"P",{});var ll=i(tt);sm=s(ll,"The "),xi=a(ll,"A",{href:!0});var tw=i(xi);rm=s(tw,"FunnelBaseModel"),tw.forEach(n),am=s(ll," forward method, overrides the "),Kl=a(ll,"CODE",{});var ow=i(Kl);im=s(ow,"__call__"),ow.forEach(n),lm=s(ll," special method."),ll.forEach(n),dm=f(ps),b(Gt.$$.fragment,ps),cm=f(ps),b(Zt.$$.fragment,ps),ps.forEach(n),En.forEach(n),Jc=f(t),ot=a(t,"H2",{class:!0});var Rp=i(ot);Xt=a(Rp,"A",{id:!0,class:!0,href:!0});var sw=i(Xt);Gl=a(sw,"SPAN",{});var rw=i(Gl);b(Zs.$$.fragment,rw),rw.forEach(n),sw.forEach(n),pm=f(Rp),Zl=a(Rp,"SPAN",{});var aw=i(Zl);um=s(aw,"FunnelModel"),aw.forEach(n),Rp.forEach(n),ep=f(t),Ve=a(t,"DIV",{class:!0});var Mn=i(Ve);b(Xs.$$.fragment,Mn),fm=f(Mn),Xl=a(Mn,"P",{});var iw=i(Xl);hm=s(iw,"The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),iw.forEach(n),mm=f(Mn),Js=a(Mn,"P",{});var Vp=i(Js);gm=s(Vp,"The Funnel Transformer model was proposed in "),er=a(Vp,"A",{href:!0,rel:!0});var lw=i(er);_m=s(lw,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),lw.forEach(n),vm=s(Vp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Vp.forEach(n),Tm=f(Mn),nr=a(Mn,"P",{});var Hp=i(nr);km=s(Hp,"This model inherits from "),Pi=a(Hp,"A",{href:!0});var dw=i(Pi);Fm=s(dw,"PreTrainedModel"),dw.forEach(n),bm=s(Hp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hp.forEach(n),wm=f(Mn),tr=a(Mn,"P",{});var Yp=i(tr);ym=s(Yp,"This model is also a PyTorch "),or=a(Yp,"A",{href:!0,rel:!0});var cw=i(or);$m=s(cw,"torch.nn.Module"),cw.forEach(n),Em=s(Yp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yp.forEach(n),Mm=f(Mn),Tn=a(Mn,"DIV",{class:!0});var us=i(Tn);b(sr.$$.fragment,us),zm=f(us),st=a(us,"P",{});var dl=i(st);qm=s(dl,"The "),Ci=a(dl,"A",{href:!0});var pw=i(Ci);xm=s(pw,"FunnelModel"),pw.forEach(n),Pm=s(dl," forward method, overrides the "),Jl=a(dl,"CODE",{});var uw=i(Jl);Cm=s(uw,"__call__"),uw.forEach(n),jm=s(dl," special method."),dl.forEach(n),Lm=f(us),b(Jt.$$.fragment,us),Om=f(us),b(eo.$$.fragment,us),us.forEach(n),Mn.forEach(n),np=f(t),rt=a(t,"H2",{class:!0});var Kp=i(rt);no=a(Kp,"A",{id:!0,class:!0,href:!0});var fw=i(no);ed=a(fw,"SPAN",{});var hw=i(ed);b(rr.$$.fragment,hw),hw.forEach(n),fw.forEach(n),Am=f(Kp),nd=a(Kp,"SPAN",{});var mw=i(nd);Dm=s(mw,"FunnelModelForPreTraining"),mw.forEach(n),Kp.forEach(n),tp=f(t),at=a(t,"DIV",{class:!0});var Gp=i(at);b(ar.$$.fragment,Gp),Nm=f(Gp),kn=a(Gp,"DIV",{class:!0});var fs=i(kn);b(ir.$$.fragment,fs),Sm=f(fs),it=a(fs,"P",{});var cl=i(it);Im=s(cl,"The "),ji=a(cl,"A",{href:!0});var gw=i(ji);Wm=s(gw,"FunnelForPreTraining"),gw.forEach(n),Bm=s(cl," forward method, overrides the "),td=a(cl,"CODE",{});var _w=i(td);Qm=s(_w,"__call__"),_w.forEach(n),Um=s(cl," special method."),cl.forEach(n),Rm=f(fs),b(to.$$.fragment,fs),Vm=f(fs),b(oo.$$.fragment,fs),fs.forEach(n),Gp.forEach(n),op=f(t),lt=a(t,"H2",{class:!0});var Zp=i(lt);so=a(Zp,"A",{id:!0,class:!0,href:!0});var vw=i(so);od=a(vw,"SPAN",{});var Tw=i(od);b(lr.$$.fragment,Tw),Tw.forEach(n),vw.forEach(n),Hm=f(Zp),sd=a(Zp,"SPAN",{});var kw=i(sd);Ym=s(kw,"FunnelForMaskedLM"),kw.forEach(n),Zp.forEach(n),sp=f(t),He=a(t,"DIV",{class:!0});var zn=i(He);b(dr.$$.fragment,zn),Km=f(zn),cr=a(zn,"P",{});var Xp=i(cr);Gm=s(Xp,"Funnel Transformer Model with a "),rd=a(Xp,"CODE",{});var Fw=i(rd);Zm=s(Fw,"language modeling"),Fw.forEach(n),Xm=s(Xp," head on top."),Xp.forEach(n),Jm=f(zn),pr=a(zn,"P",{});var Jp=i(pr);eg=s(Jp,"The Funnel Transformer model was proposed in "),ur=a(Jp,"A",{href:!0,rel:!0});var bw=i(ur);ng=s(bw,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),bw.forEach(n),tg=s(Jp," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Jp.forEach(n),og=f(zn),fr=a(zn,"P",{});var eu=i(fr);sg=s(eu,"This model inherits from "),Li=a(eu,"A",{href:!0});var ww=i(Li);rg=s(ww,"PreTrainedModel"),ww.forEach(n),ag=s(eu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eu.forEach(n),ig=f(zn),hr=a(zn,"P",{});var nu=i(hr);lg=s(nu,"This model is also a PyTorch "),mr=a(nu,"A",{href:!0,rel:!0});var yw=i(mr);dg=s(yw,"torch.nn.Module"),yw.forEach(n),cg=s(nu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nu.forEach(n),pg=f(zn),Je=a(zn,"DIV",{class:!0});var Sn=i(Je);b(gr.$$.fragment,Sn),ug=f(Sn),dt=a(Sn,"P",{});var pl=i(dt);fg=s(pl,"The "),Oi=a(pl,"A",{href:!0});var $w=i(Oi);hg=s($w,"FunnelForMaskedLM"),$w.forEach(n),mg=s(pl," forward method, overrides the "),ad=a(pl,"CODE",{});var Ew=i(ad);gg=s(Ew,"__call__"),Ew.forEach(n),_g=s(pl," special method."),pl.forEach(n),vg=f(Sn),b(ro.$$.fragment,Sn),Tg=f(Sn),b(ao.$$.fragment,Sn),kg=f(Sn),b(io.$$.fragment,Sn),Sn.forEach(n),zn.forEach(n),rp=f(t),ct=a(t,"H2",{class:!0});var tu=i(ct);lo=a(tu,"A",{id:!0,class:!0,href:!0});var Mw=i(lo);id=a(Mw,"SPAN",{});var zw=i(id);b(_r.$$.fragment,zw),zw.forEach(n),Mw.forEach(n),Fg=f(tu),ld=a(tu,"SPAN",{});var qw=i(ld);bg=s(qw,"FunnelForSequenceClassification"),qw.forEach(n),tu.forEach(n),ap=f(t),Ye=a(t,"DIV",{class:!0});var qn=i(Ye);b(vr.$$.fragment,qn),wg=f(qn),dd=a(qn,"P",{});var xw=i(dd);yg=s(xw,`Funnel Transformer Model with a sequence classification/regression head on top (two linear layer on top of the
first timestep of the last hidden state) e.g. for GLUE tasks.`),xw.forEach(n),$g=f(qn),Tr=a(qn,"P",{});var ou=i(Tr);Eg=s(ou,"The Funnel Transformer model was proposed in "),kr=a(ou,"A",{href:!0,rel:!0});var Pw=i(kr);Mg=s(Pw,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Pw.forEach(n),zg=s(ou," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),ou.forEach(n),qg=f(qn),Fr=a(qn,"P",{});var su=i(Fr);xg=s(su,"This model inherits from "),Ai=a(su,"A",{href:!0});var Cw=i(Ai);Pg=s(Cw,"PreTrainedModel"),Cw.forEach(n),Cg=s(su,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),su.forEach(n),jg=f(qn),br=a(qn,"P",{});var ru=i(br);Lg=s(ru,"This model is also a PyTorch "),wr=a(ru,"A",{href:!0,rel:!0});var jw=i(wr);Og=s(jw,"torch.nn.Module"),jw.forEach(n),Ag=s(ru,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ru.forEach(n),Dg=f(qn),Ue=a(qn,"DIV",{class:!0});var an=i(Ue);b(yr.$$.fragment,an),Ng=f(an),pt=a(an,"P",{});var ul=i(pt);Sg=s(ul,"The "),Di=a(ul,"A",{href:!0});var Lw=i(Di);Ig=s(Lw,"FunnelForSequenceClassification"),Lw.forEach(n),Wg=s(ul," forward method, overrides the "),cd=a(ul,"CODE",{});var Ow=i(cd);Bg=s(Ow,"__call__"),Ow.forEach(n),Qg=s(ul," special method."),ul.forEach(n),Ug=f(an),b(co.$$.fragment,an),Rg=f(an),b(po.$$.fragment,an),Vg=f(an),b(uo.$$.fragment,an),Hg=f(an),b(fo.$$.fragment,an),Yg=f(an),b(ho.$$.fragment,an),an.forEach(n),qn.forEach(n),ip=f(t),ut=a(t,"H2",{class:!0});var au=i(ut);mo=a(au,"A",{id:!0,class:!0,href:!0});var Aw=i(mo);pd=a(Aw,"SPAN",{});var Dw=i(pd);b($r.$$.fragment,Dw),Dw.forEach(n),Aw.forEach(n),Kg=f(au),ud=a(au,"SPAN",{});var Nw=i(ud);Gg=s(Nw,"FunnelForMultipleChoice"),Nw.forEach(n),au.forEach(n),lp=f(t),Ke=a(t,"DIV",{class:!0});var xn=i(Ke);b(Er.$$.fragment,xn),Zg=f(xn),fd=a(xn,"P",{});var Sw=i(fd);Xg=s(Sw,`Funnel Transformer Model with a multiple choice classification head on top (two linear layer on top of the first
timestep of the last hidden state, and a softmax) e.g. for RocStories/SWAG tasks.`),Sw.forEach(n),Jg=f(xn),Mr=a(xn,"P",{});var iu=i(Mr);e_=s(iu,"The Funnel Transformer model was proposed in "),zr=a(iu,"A",{href:!0,rel:!0});var Iw=i(zr);n_=s(Iw,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Iw.forEach(n),t_=s(iu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),iu.forEach(n),o_=f(xn),qr=a(xn,"P",{});var lu=i(qr);s_=s(lu,"This model inherits from "),Ni=a(lu,"A",{href:!0});var Ww=i(Ni);r_=s(Ww,"PreTrainedModel"),Ww.forEach(n),a_=s(lu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lu.forEach(n),i_=f(xn),xr=a(xn,"P",{});var du=i(xr);l_=s(du,"This model is also a PyTorch "),Pr=a(du,"A",{href:!0,rel:!0});var Bw=i(Pr);d_=s(Bw,"torch.nn.Module"),Bw.forEach(n),c_=s(du,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),du.forEach(n),p_=f(xn),Fn=a(xn,"DIV",{class:!0});var hs=i(Fn);b(Cr.$$.fragment,hs),u_=f(hs),ft=a(hs,"P",{});var fl=i(ft);f_=s(fl,"The "),Si=a(fl,"A",{href:!0});var Qw=i(Si);h_=s(Qw,"FunnelForMultipleChoice"),Qw.forEach(n),m_=s(fl," forward method, overrides the "),hd=a(fl,"CODE",{});var Uw=i(hd);g_=s(Uw,"__call__"),Uw.forEach(n),__=s(fl," special method."),fl.forEach(n),v_=f(hs),b(go.$$.fragment,hs),T_=f(hs),b(_o.$$.fragment,hs),hs.forEach(n),xn.forEach(n),dp=f(t),ht=a(t,"H2",{class:!0});var cu=i(ht);vo=a(cu,"A",{id:!0,class:!0,href:!0});var Rw=i(vo);md=a(Rw,"SPAN",{});var Vw=i(md);b(jr.$$.fragment,Vw),Vw.forEach(n),Rw.forEach(n),k_=f(cu),gd=a(cu,"SPAN",{});var Hw=i(gd);F_=s(Hw,"FunnelForTokenClassification"),Hw.forEach(n),cu.forEach(n),cp=f(t),Ge=a(t,"DIV",{class:!0});var Pn=i(Ge);b(Lr.$$.fragment,Pn),b_=f(Pn),_d=a(Pn,"P",{});var Yw=i(_d);w_=s(Yw,`Funnel Transformer Model with a token classification head on top (a linear layer on top of the hidden-states
output) e.g. for Named-Entity-Recognition (NER) tasks.`),Yw.forEach(n),y_=f(Pn),Or=a(Pn,"P",{});var pu=i(Or);$_=s(pu,"The Funnel Transformer model was proposed in "),Ar=a(pu,"A",{href:!0,rel:!0});var Kw=i(Ar);E_=s(Kw,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Kw.forEach(n),M_=s(pu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),pu.forEach(n),z_=f(Pn),Dr=a(Pn,"P",{});var uu=i(Dr);q_=s(uu,"This model inherits from "),Ii=a(uu,"A",{href:!0});var Gw=i(Ii);x_=s(Gw,"PreTrainedModel"),Gw.forEach(n),P_=s(uu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uu.forEach(n),C_=f(Pn),Nr=a(Pn,"P",{});var fu=i(Nr);j_=s(fu,"This model is also a PyTorch "),Sr=a(fu,"A",{href:!0,rel:!0});var Zw=i(Sr);L_=s(Zw,"torch.nn.Module"),Zw.forEach(n),O_=s(fu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fu.forEach(n),A_=f(Pn),en=a(Pn,"DIV",{class:!0});var In=i(en);b(Ir.$$.fragment,In),D_=f(In),mt=a(In,"P",{});var hl=i(mt);N_=s(hl,"The "),Wi=a(hl,"A",{href:!0});var Xw=i(Wi);S_=s(Xw,"FunnelForTokenClassification"),Xw.forEach(n),I_=s(hl," forward method, overrides the "),vd=a(hl,"CODE",{});var Jw=i(vd);W_=s(Jw,"__call__"),Jw.forEach(n),B_=s(hl," special method."),hl.forEach(n),Q_=f(In),b(To.$$.fragment,In),U_=f(In),b(ko.$$.fragment,In),R_=f(In),b(Fo.$$.fragment,In),In.forEach(n),Pn.forEach(n),pp=f(t),gt=a(t,"H2",{class:!0});var hu=i(gt);bo=a(hu,"A",{id:!0,class:!0,href:!0});var ey=i(bo);Td=a(ey,"SPAN",{});var ny=i(Td);b(Wr.$$.fragment,ny),ny.forEach(n),ey.forEach(n),V_=f(hu),kd=a(hu,"SPAN",{});var ty=i(kd);H_=s(ty,"FunnelForQuestionAnswering"),ty.forEach(n),hu.forEach(n),up=f(t),Ze=a(t,"DIV",{class:!0});var Cn=i(Ze);b(Br.$$.fragment,Cn),Y_=f(Cn),_t=a(Cn,"P",{});var ml=i(_t);K_=s(ml,`Funnel Transformer Model with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layer on top of the hidden-states output to compute `),Fd=a(ml,"CODE",{});var oy=i(Fd);G_=s(oy,"span start logits"),oy.forEach(n),Z_=s(ml," and "),bd=a(ml,"CODE",{});var sy=i(bd);X_=s(sy,"span end logits"),sy.forEach(n),J_=s(ml,")."),ml.forEach(n),ev=f(Cn),Qr=a(Cn,"P",{});var mu=i(Qr);nv=s(mu,"The Funnel Transformer model was proposed in "),Ur=a(mu,"A",{href:!0,rel:!0});var ry=i(Ur);tv=s(ry,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),ry.forEach(n),ov=s(mu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),mu.forEach(n),sv=f(Cn),Rr=a(Cn,"P",{});var gu=i(Rr);rv=s(gu,"This model inherits from "),Bi=a(gu,"A",{href:!0});var ay=i(Bi);av=s(ay,"PreTrainedModel"),ay.forEach(n),iv=s(gu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gu.forEach(n),lv=f(Cn),Vr=a(Cn,"P",{});var _u=i(Vr);dv=s(_u,"This model is also a PyTorch "),Hr=a(_u,"A",{href:!0,rel:!0});var iy=i(Hr);cv=s(iy,"torch.nn.Module"),iy.forEach(n),pv=s(_u,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_u.forEach(n),uv=f(Cn),nn=a(Cn,"DIV",{class:!0});var Wn=i(nn);b(Yr.$$.fragment,Wn),fv=f(Wn),vt=a(Wn,"P",{});var gl=i(vt);hv=s(gl,"The "),Qi=a(gl,"A",{href:!0});var ly=i(Qi);mv=s(ly,"FunnelForQuestionAnswering"),ly.forEach(n),gv=s(gl," forward method, overrides the "),wd=a(gl,"CODE",{});var dy=i(wd);_v=s(dy,"__call__"),dy.forEach(n),vv=s(gl," special method."),gl.forEach(n),Tv=f(Wn),b(wo.$$.fragment,Wn),kv=f(Wn),b(yo.$$.fragment,Wn),Fv=f(Wn),b($o.$$.fragment,Wn),Wn.forEach(n),Cn.forEach(n),fp=f(t),Tt=a(t,"H2",{class:!0});var vu=i(Tt);Eo=a(vu,"A",{id:!0,class:!0,href:!0});var cy=i(Eo);yd=a(cy,"SPAN",{});var py=i(yd);b(Kr.$$.fragment,py),py.forEach(n),cy.forEach(n),bv=f(vu),$d=a(vu,"SPAN",{});var uy=i($d);wv=s(uy,"TFFunnelBaseModel"),uy.forEach(n),vu.forEach(n),hp=f(t),Oe=a(t,"DIV",{class:!0});var ln=i(Oe);b(Gr.$$.fragment,ln),yv=f(ln),Ed=a(ln,"P",{});var fy=i(Ed);$v=s(fy,`The base Funnel Transformer Model transformer outputting raw hidden-states without upsampling head (also called
decoder) or any task-specific head on top.`),fy.forEach(n),Ev=f(ln),Zr=a(ln,"P",{});var Tu=i(Zr);Mv=s(Tu,"The Funnel Transformer model was proposed in "),Xr=a(Tu,"A",{href:!0,rel:!0});var hy=i(Xr);zv=s(hy,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),hy.forEach(n),qv=s(Tu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Tu.forEach(n),xv=f(ln),Jr=a(ln,"P",{});var ku=i(Jr);Pv=s(ku,"This model inherits from "),Ui=a(ku,"A",{href:!0});var my=i(Ui);Cv=s(my,"TFPreTrainedModel"),my.forEach(n),jv=s(ku,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ku.forEach(n),Lv=f(ln),ea=a(ln,"P",{});var Fu=i(ea);Ov=s(Fu,"This model is also a "),na=a(Fu,"A",{href:!0,rel:!0});var gy=i(na);Av=s(gy,"tf.keras.Model"),gy.forEach(n),Dv=s(Fu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fu.forEach(n),Nv=f(ln),b(Mo.$$.fragment,ln),Sv=f(ln),bn=a(ln,"DIV",{class:!0});var ms=i(bn);b(ta.$$.fragment,ms),Iv=f(ms),kt=a(ms,"P",{});var _l=i(kt);Wv=s(_l,"The "),Ri=a(_l,"A",{href:!0});var _y=i(Ri);Bv=s(_y,"TFFunnelBaseModel"),_y.forEach(n),Qv=s(_l," forward method, overrides the "),Md=a(_l,"CODE",{});var vy=i(Md);Uv=s(vy,"__call__"),vy.forEach(n),Rv=s(_l," special method."),_l.forEach(n),Vv=f(ms),b(zo.$$.fragment,ms),Hv=f(ms),b(qo.$$.fragment,ms),ms.forEach(n),ln.forEach(n),mp=f(t),Ft=a(t,"H2",{class:!0});var bu=i(Ft);xo=a(bu,"A",{id:!0,class:!0,href:!0});var Ty=i(xo);zd=a(Ty,"SPAN",{});var ky=i(zd);b(oa.$$.fragment,ky),ky.forEach(n),Ty.forEach(n),Yv=f(bu),qd=a(bu,"SPAN",{});var Fy=i(qd);Kv=s(Fy,"TFFunnelModel"),Fy.forEach(n),bu.forEach(n),gp=f(t),Ae=a(t,"DIV",{class:!0});var dn=i(Ae);b(sa.$$.fragment,dn),Gv=f(dn),xd=a(dn,"P",{});var by=i(xd);Zv=s(by,"The bare Funnel Transformer Model transformer outputting raw hidden-states without any specific head on top."),by.forEach(n),Xv=f(dn),ra=a(dn,"P",{});var wu=i(ra);Jv=s(wu,"The Funnel Transformer model was proposed in "),aa=a(wu,"A",{href:!0,rel:!0});var wy=i(aa);eT=s(wy,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),wy.forEach(n),nT=s(wu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),wu.forEach(n),tT=f(dn),ia=a(dn,"P",{});var yu=i(ia);oT=s(yu,"This model inherits from "),Vi=a(yu,"A",{href:!0});var yy=i(Vi);sT=s(yy,"TFPreTrainedModel"),yy.forEach(n),rT=s(yu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yu.forEach(n),aT=f(dn),la=a(dn,"P",{});var $u=i(la);iT=s($u,"This model is also a "),da=a($u,"A",{href:!0,rel:!0});var $y=i(da);lT=s($y,"tf.keras.Model"),$y.forEach(n),dT=s($u,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$u.forEach(n),cT=f(dn),b(Po.$$.fragment,dn),pT=f(dn),wn=a(dn,"DIV",{class:!0});var gs=i(wn);b(ca.$$.fragment,gs),uT=f(gs),bt=a(gs,"P",{});var vl=i(bt);fT=s(vl,"The "),Hi=a(vl,"A",{href:!0});var Ey=i(Hi);hT=s(Ey,"TFFunnelModel"),Ey.forEach(n),mT=s(vl," forward method, overrides the "),Pd=a(vl,"CODE",{});var My=i(Pd);gT=s(My,"__call__"),My.forEach(n),_T=s(vl," special method."),vl.forEach(n),vT=f(gs),b(Co.$$.fragment,gs),TT=f(gs),b(jo.$$.fragment,gs),gs.forEach(n),dn.forEach(n),_p=f(t),wt=a(t,"H2",{class:!0});var Eu=i(wt);Lo=a(Eu,"A",{id:!0,class:!0,href:!0});var zy=i(Lo);Cd=a(zy,"SPAN",{});var qy=i(Cd);b(pa.$$.fragment,qy),qy.forEach(n),zy.forEach(n),kT=f(Eu),jd=a(Eu,"SPAN",{});var xy=i(jd);FT=s(xy,"TFFunnelModelForPreTraining"),xy.forEach(n),Eu.forEach(n),vp=f(t),De=a(t,"DIV",{class:!0});var cn=i(De);b(ua.$$.fragment,cn),bT=f(cn),Ld=a(cn,"P",{});var Py=i(Ld);wT=s(Py,"Funnel model with a binary classification head on top as used during pretraining for identifying generated tokens."),Py.forEach(n),yT=f(cn),fa=a(cn,"P",{});var Mu=i(fa);$T=s(Mu,"The Funnel Transformer model was proposed in "),ha=a(Mu,"A",{href:!0,rel:!0});var Cy=i(ha);ET=s(Cy,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Cy.forEach(n),MT=s(Mu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Mu.forEach(n),zT=f(cn),ma=a(cn,"P",{});var zu=i(ma);qT=s(zu,"This model inherits from "),Yi=a(zu,"A",{href:!0});var jy=i(Yi);xT=s(jy,"TFPreTrainedModel"),jy.forEach(n),PT=s(zu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zu.forEach(n),CT=f(cn),ga=a(cn,"P",{});var qu=i(ga);jT=s(qu,"This model is also a "),_a=a(qu,"A",{href:!0,rel:!0});var Ly=i(_a);LT=s(Ly,"tf.keras.Model"),Ly.forEach(n),OT=s(qu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qu.forEach(n),AT=f(cn),b(Oo.$$.fragment,cn),DT=f(cn),yn=a(cn,"DIV",{class:!0});var _s=i(yn);b(va.$$.fragment,_s),NT=f(_s),yt=a(_s,"P",{});var Tl=i(yt);ST=s(Tl,"The "),Ki=a(Tl,"A",{href:!0});var Oy=i(Ki);IT=s(Oy,"TFFunnelForPreTraining"),Oy.forEach(n),WT=s(Tl," forward method, overrides the "),Od=a(Tl,"CODE",{});var Ay=i(Od);BT=s(Ay,"__call__"),Ay.forEach(n),QT=s(Tl," special method."),Tl.forEach(n),UT=f(_s),b(Ao.$$.fragment,_s),RT=f(_s),b(Do.$$.fragment,_s),_s.forEach(n),cn.forEach(n),Tp=f(t),$t=a(t,"H2",{class:!0});var xu=i($t);No=a(xu,"A",{id:!0,class:!0,href:!0});var Dy=i(No);Ad=a(Dy,"SPAN",{});var Ny=i(Ad);b(Ta.$$.fragment,Ny),Ny.forEach(n),Dy.forEach(n),VT=f(xu),Dd=a(xu,"SPAN",{});var Sy=i(Dd);HT=s(Sy,"TFFunnelForMaskedLM"),Sy.forEach(n),xu.forEach(n),kp=f(t),Ne=a(t,"DIV",{class:!0});var pn=i(Ne);b(ka.$$.fragment,pn),YT=f(pn),Fa=a(pn,"P",{});var Pu=i(Fa);KT=s(Pu,"Funnel Model with a "),Nd=a(Pu,"CODE",{});var Iy=i(Nd);GT=s(Iy,"language modeling"),Iy.forEach(n),ZT=s(Pu," head on top."),Pu.forEach(n),XT=f(pn),ba=a(pn,"P",{});var Cu=i(ba);JT=s(Cu,"The Funnel Transformer model was proposed in "),wa=a(Cu,"A",{href:!0,rel:!0});var Wy=i(wa);ek=s(Wy,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Wy.forEach(n),nk=s(Cu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Cu.forEach(n),tk=f(pn),ya=a(pn,"P",{});var ju=i(ya);ok=s(ju,"This model inherits from "),Gi=a(ju,"A",{href:!0});var By=i(Gi);sk=s(By,"TFPreTrainedModel"),By.forEach(n),rk=s(ju,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ju.forEach(n),ak=f(pn),$a=a(pn,"P",{});var Lu=i($a);ik=s(Lu,"This model is also a "),Ea=a(Lu,"A",{href:!0,rel:!0});var Qy=i(Ea);lk=s(Qy,"tf.keras.Model"),Qy.forEach(n),dk=s(Lu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Lu.forEach(n),ck=f(pn),b(So.$$.fragment,pn),pk=f(pn),tn=a(pn,"DIV",{class:!0});var Bn=i(tn);b(Ma.$$.fragment,Bn),uk=f(Bn),Et=a(Bn,"P",{});var kl=i(Et);fk=s(kl,"The "),Zi=a(kl,"A",{href:!0});var Uy=i(Zi);hk=s(Uy,"TFFunnelForMaskedLM"),Uy.forEach(n),mk=s(kl," forward method, overrides the "),Sd=a(kl,"CODE",{});var Ry=i(Sd);gk=s(Ry,"__call__"),Ry.forEach(n),_k=s(kl," special method."),kl.forEach(n),vk=f(Bn),b(Io.$$.fragment,Bn),Tk=f(Bn),b(Wo.$$.fragment,Bn),kk=f(Bn),b(Bo.$$.fragment,Bn),Bn.forEach(n),pn.forEach(n),Fp=f(t),Mt=a(t,"H2",{class:!0});var Ou=i(Mt);Qo=a(Ou,"A",{id:!0,class:!0,href:!0});var Vy=i(Qo);Id=a(Vy,"SPAN",{});var Hy=i(Id);b(za.$$.fragment,Hy),Hy.forEach(n),Vy.forEach(n),Fk=f(Ou),Wd=a(Ou,"SPAN",{});var Yy=i(Wd);bk=s(Yy,"TFFunnelForSequenceClassification"),Yy.forEach(n),Ou.forEach(n),bp=f(t),Se=a(t,"DIV",{class:!0});var un=i(Se);b(qa.$$.fragment,un),wk=f(un),Bd=a(un,"P",{});var Ky=i(Bd);yk=s(Ky,`Funnel Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Ky.forEach(n),$k=f(un),xa=a(un,"P",{});var Au=i(xa);Ek=s(Au,"The Funnel Transformer model was proposed in "),Pa=a(Au,"A",{href:!0,rel:!0});var Gy=i(Pa);Mk=s(Gy,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),Gy.forEach(n),zk=s(Au," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Au.forEach(n),qk=f(un),Ca=a(un,"P",{});var Du=i(Ca);xk=s(Du,"This model inherits from "),Xi=a(Du,"A",{href:!0});var Zy=i(Xi);Pk=s(Zy,"TFPreTrainedModel"),Zy.forEach(n),Ck=s(Du,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Du.forEach(n),jk=f(un),ja=a(un,"P",{});var Nu=i(ja);Lk=s(Nu,"This model is also a "),La=a(Nu,"A",{href:!0,rel:!0});var Xy=i(La);Ok=s(Xy,"tf.keras.Model"),Xy.forEach(n),Ak=s(Nu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nu.forEach(n),Dk=f(un),b(Uo.$$.fragment,un),Nk=f(un),on=a(un,"DIV",{class:!0});var Qn=i(on);b(Oa.$$.fragment,Qn),Sk=f(Qn),zt=a(Qn,"P",{});var Fl=i(zt);Ik=s(Fl,"The "),Ji=a(Fl,"A",{href:!0});var Jy=i(Ji);Wk=s(Jy,"TFFunnelForSequenceClassification"),Jy.forEach(n),Bk=s(Fl," forward method, overrides the "),Qd=a(Fl,"CODE",{});var e1=i(Qd);Qk=s(e1,"__call__"),e1.forEach(n),Uk=s(Fl," special method."),Fl.forEach(n),Rk=f(Qn),b(Ro.$$.fragment,Qn),Vk=f(Qn),b(Vo.$$.fragment,Qn),Hk=f(Qn),b(Ho.$$.fragment,Qn),Qn.forEach(n),un.forEach(n),wp=f(t),qt=a(t,"H2",{class:!0});var Su=i(qt);Yo=a(Su,"A",{id:!0,class:!0,href:!0});var n1=i(Yo);Ud=a(n1,"SPAN",{});var t1=i(Ud);b(Aa.$$.fragment,t1),t1.forEach(n),n1.forEach(n),Yk=f(Su),Rd=a(Su,"SPAN",{});var o1=i(Rd);Kk=s(o1,"TFFunnelForMultipleChoice"),o1.forEach(n),Su.forEach(n),yp=f(t),Ie=a(t,"DIV",{class:!0});var fn=i(Ie);b(Da.$$.fragment,fn),Gk=f(fn),Vd=a(fn,"P",{});var s1=i(Vd);Zk=s(s1,`Funnel Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),s1.forEach(n),Xk=f(fn),Na=a(fn,"P",{});var Iu=i(Na);Jk=s(Iu,"The Funnel Transformer model was proposed in "),Sa=a(Iu,"A",{href:!0,rel:!0});var r1=i(Sa);eF=s(r1,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),r1.forEach(n),nF=s(Iu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Iu.forEach(n),tF=f(fn),Ia=a(fn,"P",{});var Wu=i(Ia);oF=s(Wu,"This model inherits from "),el=a(Wu,"A",{href:!0});var a1=i(el);sF=s(a1,"TFPreTrainedModel"),a1.forEach(n),rF=s(Wu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wu.forEach(n),aF=f(fn),Wa=a(fn,"P",{});var Bu=i(Wa);iF=s(Bu,"This model is also a "),Ba=a(Bu,"A",{href:!0,rel:!0});var i1=i(Ba);lF=s(i1,"tf.keras.Model"),i1.forEach(n),dF=s(Bu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bu.forEach(n),cF=f(fn),b(Ko.$$.fragment,fn),pF=f(fn),$n=a(fn,"DIV",{class:!0});var vs=i($n);b(Qa.$$.fragment,vs),uF=f(vs),xt=a(vs,"P",{});var bl=i(xt);fF=s(bl,"The "),nl=a(bl,"A",{href:!0});var l1=i(nl);hF=s(l1,"TFFunnelForMultipleChoice"),l1.forEach(n),mF=s(bl," forward method, overrides the "),Hd=a(bl,"CODE",{});var d1=i(Hd);gF=s(d1,"__call__"),d1.forEach(n),_F=s(bl," special method."),bl.forEach(n),vF=f(vs),b(Go.$$.fragment,vs),TF=f(vs),b(Zo.$$.fragment,vs),vs.forEach(n),fn.forEach(n),$p=f(t),Pt=a(t,"H2",{class:!0});var Qu=i(Pt);Xo=a(Qu,"A",{id:!0,class:!0,href:!0});var c1=i(Xo);Yd=a(c1,"SPAN",{});var p1=i(Yd);b(Ua.$$.fragment,p1),p1.forEach(n),c1.forEach(n),kF=f(Qu),Kd=a(Qu,"SPAN",{});var u1=i(Kd);FF=s(u1,"TFFunnelForTokenClassification"),u1.forEach(n),Qu.forEach(n),Ep=f(t),We=a(t,"DIV",{class:!0});var hn=i(We);b(Ra.$$.fragment,hn),bF=f(hn),Gd=a(hn,"P",{});var f1=i(Gd);wF=s(f1,`Funnel Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),f1.forEach(n),yF=f(hn),Va=a(hn,"P",{});var Uu=i(Va);$F=s(Uu,"The Funnel Transformer model was proposed in "),Ha=a(Uu,"A",{href:!0,rel:!0});var h1=i(Ha);EF=s(h1,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),h1.forEach(n),MF=s(Uu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Uu.forEach(n),zF=f(hn),Ya=a(hn,"P",{});var Ru=i(Ya);qF=s(Ru,"This model inherits from "),tl=a(Ru,"A",{href:!0});var m1=i(tl);xF=s(m1,"TFPreTrainedModel"),m1.forEach(n),PF=s(Ru,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ru.forEach(n),CF=f(hn),Ka=a(hn,"P",{});var Vu=i(Ka);jF=s(Vu,"This model is also a "),Ga=a(Vu,"A",{href:!0,rel:!0});var g1=i(Ga);LF=s(g1,"tf.keras.Model"),g1.forEach(n),OF=s(Vu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vu.forEach(n),AF=f(hn),b(Jo.$$.fragment,hn),DF=f(hn),sn=a(hn,"DIV",{class:!0});var Un=i(sn);b(Za.$$.fragment,Un),NF=f(Un),Ct=a(Un,"P",{});var wl=i(Ct);SF=s(wl,"The "),ol=a(wl,"A",{href:!0});var _1=i(ol);IF=s(_1,"TFFunnelForTokenClassification"),_1.forEach(n),WF=s(wl," forward method, overrides the "),Zd=a(wl,"CODE",{});var v1=i(Zd);BF=s(v1,"__call__"),v1.forEach(n),QF=s(wl," special method."),wl.forEach(n),UF=f(Un),b(es.$$.fragment,Un),RF=f(Un),b(ns.$$.fragment,Un),VF=f(Un),b(ts.$$.fragment,Un),Un.forEach(n),hn.forEach(n),Mp=f(t),jt=a(t,"H2",{class:!0});var Hu=i(jt);os=a(Hu,"A",{id:!0,class:!0,href:!0});var T1=i(os);Xd=a(T1,"SPAN",{});var k1=i(Xd);b(Xa.$$.fragment,k1),k1.forEach(n),T1.forEach(n),HF=f(Hu),Jd=a(Hu,"SPAN",{});var F1=i(Jd);YF=s(F1,"TFFunnelForQuestionAnswering"),F1.forEach(n),Hu.forEach(n),zp=f(t),Be=a(t,"DIV",{class:!0});var mn=i(Be);b(Ja.$$.fragment,mn),KF=f(mn),Lt=a(mn,"P",{});var yl=i(Lt);GF=s(yl,`Funnel Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ec=a(yl,"CODE",{});var b1=i(ec);ZF=s(b1,"span start logits"),b1.forEach(n),XF=s(yl," and "),nc=a(yl,"CODE",{});var w1=i(nc);JF=s(w1,"span end logits"),w1.forEach(n),eb=s(yl,")."),yl.forEach(n),nb=f(mn),ei=a(mn,"P",{});var Yu=i(ei);tb=s(Yu,"The Funnel Transformer model was proposed in "),ni=a(Yu,"A",{href:!0,rel:!0});var y1=i(ni);ob=s(y1,`Funnel-Transformer: Filtering out Sequential Redundancy for Efficient
Language Processing`),y1.forEach(n),sb=s(Yu," by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le."),Yu.forEach(n),rb=f(mn),ti=a(mn,"P",{});var Ku=i(ti);ab=s(Ku,"This model inherits from "),sl=a(Ku,"A",{href:!0});var $1=i(sl);ib=s($1,"TFPreTrainedModel"),$1.forEach(n),lb=s(Ku,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ku.forEach(n),db=f(mn),oi=a(mn,"P",{});var Gu=i(oi);cb=s(Gu,"This model is also a "),si=a(Gu,"A",{href:!0,rel:!0});var E1=i(si);pb=s(E1,"tf.keras.Model"),E1.forEach(n),ub=s(Gu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gu.forEach(n),fb=f(mn),b(ss.$$.fragment,mn),hb=f(mn),rn=a(mn,"DIV",{class:!0});var Rn=i(rn);b(ri.$$.fragment,Rn),mb=f(Rn),Ot=a(Rn,"P",{});var $l=i(Ot);gb=s($l,"The "),rl=a($l,"A",{href:!0});var M1=i(rl);_b=s(M1,"TFFunnelForQuestionAnswering"),M1.forEach(n),vb=s($l," forward method, overrides the "),tc=a($l,"CODE",{});var z1=i(tc);Tb=s(z1,"__call__"),z1.forEach(n),kb=s($l," special method."),$l.forEach(n),Fb=f(Rn),b(rs.$$.fragment,Rn),bb=f(Rn),b(as.$$.fragment,Rn),wb=f(Rn),b(is.$$.fragment,Rn),Rn.forEach(n),mn.forEach(n),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(j$)),m(p,"id","funnel-transformer"),m(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(p,"href","#funnel-transformer"),m(c,"class","relative group"),m(J,"id","overview"),m(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(J,"href","#overview"),m(x,"class","relative group"),m(te,"href","https://arxiv.org/abs/2006.03236"),m(te,"rel","nofollow"),m(re,"href","/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelModel"),m(g,"href","/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelForPreTraining"),m(ve,"href","/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelForMaskedLM"),m(Te,"href","/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelForTokenClassification"),m(ke,"href","/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelBaseModel"),m(Fe,"href","/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelForSequenceClassification"),m(fi,"href","/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelForMultipleChoice"),m(Ts,"href","https://huggingface.co/sgugger"),m(Ts,"rel","nofollow"),m(ks,"href","https://github.com/laiguokun/Funnel-Transformer"),m(ks,"rel","nofollow"),m(It,"id","transformers.FunnelConfig"),m(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(It,"href","#transformers.FunnelConfig"),m(Vn,"class","relative group"),m(hi,"href","/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelModel"),m(mi,"href","/docs/transformers/v4.18.0/en/model_doc/bert#transformers.TFBertModel"),m(ws,"href","https://huggingface.co/funnel-transformer/small"),m(ws,"rel","nofollow"),m(gi,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),m(_i,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),m(jn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Wt,"id","transformers.FunnelTokenizer"),m(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Wt,"href","#transformers.FunnelTokenizer"),m(Yn,"class","relative group"),m(vi,"href","/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelTokenizer"),m(Ti,"href","/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer"),m(ki,"href","/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer"),m(Dn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(gn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(wi,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Rt,"id","transformers.FunnelTokenizerFast"),m(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Rt,"href","#transformers.FunnelTokenizerFast"),m(Gn,"class","relative group"),m(yi,"href","/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelTokenizerFast"),m($i,"href","/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizerFast"),m(Ei,"href","/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizerFast"),m(_n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Yt,"id","transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput"),m(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Yt,"href","#transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput"),m(Xn,"class","relative group"),m(Mi,"href","/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelForPreTraining"),m(Jn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(zi,"href","/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelForPreTraining"),m(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Kt,"id","transformers.FunnelBaseModel"),m(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Kt,"href","#transformers.FunnelBaseModel"),m(nt,"class","relative group"),m(Vs,"href","https://arxiv.org/abs/2006.03236"),m(Vs,"rel","nofollow"),m(qi,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),m(Ks,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Ks,"rel","nofollow"),m(xi,"href","/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelBaseModel"),m(vn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xt,"id","transformers.FunnelModel"),m(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Xt,"href","#transformers.FunnelModel"),m(ot,"class","relative group"),m(er,"href","https://arxiv.org/abs/2006.03236"),m(er,"rel","nofollow"),m(Pi,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),m(or,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(or,"rel","nofollow"),m(Ci,"href","/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelModel"),m(Tn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(no,"id","transformers.FunnelForPreTraining"),m(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(no,"href","#transformers.FunnelForPreTraining"),m(rt,"class","relative group"),m(ji,"href","/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelForPreTraining"),m(kn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(so,"id","transformers.FunnelForMaskedLM"),m(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(so,"href","#transformers.FunnelForMaskedLM"),m(lt,"class","relative group"),m(ur,"href","https://arxiv.org/abs/2006.03236"),m(ur,"rel","nofollow"),m(Li,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),m(mr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(mr,"rel","nofollow"),m(Oi,"href","/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelForMaskedLM"),m(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(lo,"id","transformers.FunnelForSequenceClassification"),m(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(lo,"href","#transformers.FunnelForSequenceClassification"),m(ct,"class","relative group"),m(kr,"href","https://arxiv.org/abs/2006.03236"),m(kr,"rel","nofollow"),m(Ai,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),m(wr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(wr,"rel","nofollow"),m(Di,"href","/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelForSequenceClassification"),m(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(mo,"id","transformers.FunnelForMultipleChoice"),m(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(mo,"href","#transformers.FunnelForMultipleChoice"),m(ut,"class","relative group"),m(zr,"href","https://arxiv.org/abs/2006.03236"),m(zr,"rel","nofollow"),m(Ni,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),m(Pr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Pr,"rel","nofollow"),m(Si,"href","/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelForMultipleChoice"),m(Fn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(vo,"id","transformers.FunnelForTokenClassification"),m(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(vo,"href","#transformers.FunnelForTokenClassification"),m(ht,"class","relative group"),m(Ar,"href","https://arxiv.org/abs/2006.03236"),m(Ar,"rel","nofollow"),m(Ii,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),m(Sr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Sr,"rel","nofollow"),m(Wi,"href","/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelForTokenClassification"),m(en,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(bo,"id","transformers.FunnelForQuestionAnswering"),m(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(bo,"href","#transformers.FunnelForQuestionAnswering"),m(gt,"class","relative group"),m(Ur,"href","https://arxiv.org/abs/2006.03236"),m(Ur,"rel","nofollow"),m(Bi,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),m(Hr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Hr,"rel","nofollow"),m(Qi,"href","/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.FunnelForQuestionAnswering"),m(nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Eo,"id","transformers.TFFunnelBaseModel"),m(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Eo,"href","#transformers.TFFunnelBaseModel"),m(Tt,"class","relative group"),m(Xr,"href","https://arxiv.org/abs/2006.03236"),m(Xr,"rel","nofollow"),m(Ui,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),m(na,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(na,"rel","nofollow"),m(Ri,"href","/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.TFFunnelBaseModel"),m(bn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(xo,"id","transformers.TFFunnelModel"),m(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(xo,"href","#transformers.TFFunnelModel"),m(Ft,"class","relative group"),m(aa,"href","https://arxiv.org/abs/2006.03236"),m(aa,"rel","nofollow"),m(Vi,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),m(da,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(da,"rel","nofollow"),m(Hi,"href","/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.TFFunnelModel"),m(wn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Lo,"id","transformers.TFFunnelForPreTraining"),m(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Lo,"href","#transformers.TFFunnelForPreTraining"),m(wt,"class","relative group"),m(ha,"href","https://arxiv.org/abs/2006.03236"),m(ha,"rel","nofollow"),m(Yi,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),m(_a,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(_a,"rel","nofollow"),m(Ki,"href","/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.TFFunnelForPreTraining"),m(yn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(No,"id","transformers.TFFunnelForMaskedLM"),m(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(No,"href","#transformers.TFFunnelForMaskedLM"),m($t,"class","relative group"),m(wa,"href","https://arxiv.org/abs/2006.03236"),m(wa,"rel","nofollow"),m(Gi,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),m(Ea,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Ea,"rel","nofollow"),m(Zi,"href","/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.TFFunnelForMaskedLM"),m(tn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qo,"id","transformers.TFFunnelForSequenceClassification"),m(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Qo,"href","#transformers.TFFunnelForSequenceClassification"),m(Mt,"class","relative group"),m(Pa,"href","https://arxiv.org/abs/2006.03236"),m(Pa,"rel","nofollow"),m(Xi,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),m(La,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(La,"rel","nofollow"),m(Ji,"href","/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.TFFunnelForSequenceClassification"),m(on,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Yo,"id","transformers.TFFunnelForMultipleChoice"),m(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Yo,"href","#transformers.TFFunnelForMultipleChoice"),m(qt,"class","relative group"),m(Sa,"href","https://arxiv.org/abs/2006.03236"),m(Sa,"rel","nofollow"),m(el,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),m(Ba,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Ba,"rel","nofollow"),m(nl,"href","/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.TFFunnelForMultipleChoice"),m($n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xo,"id","transformers.TFFunnelForTokenClassification"),m(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Xo,"href","#transformers.TFFunnelForTokenClassification"),m(Pt,"class","relative group"),m(Ha,"href","https://arxiv.org/abs/2006.03236"),m(Ha,"rel","nofollow"),m(tl,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),m(Ga,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Ga,"rel","nofollow"),m(ol,"href","/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.TFFunnelForTokenClassification"),m(sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(os,"id","transformers.TFFunnelForQuestionAnswering"),m(os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(os,"href","#transformers.TFFunnelForQuestionAnswering"),m(jt,"class","relative group"),m(ni,"href","https://arxiv.org/abs/2006.03236"),m(ni,"rel","nofollow"),m(sl,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),m(si,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(si,"rel","nofollow"),m(rl,"href","/docs/transformers/v4.18.0/en/model_doc/funnel#transformers.TFFunnelForQuestionAnswering"),m(rn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,k){e(document.head,d),_(t,v,k),_(t,c,k),e(c,p),e(p,T),w(l,T,null),e(c,h),e(c,q),e(q,ce),_(t,K,k),_(t,x,k),e(x,J),e(J,N),w(ne,N,null),e(x,pe),e(x,S),e(S,ue),_(t,ie,k),_(t,Y,k),e(Y,O),e(Y,te),e(te,G),e(Y,P),_(t,j,k),_(t,oe,k),e(oe,Q),_(t,le,k),_(t,se,k),e(se,I),e(I,fe),_(t,de,k),_(t,C,k),e(C,he),_(t,B,k),_(t,ee,k),e(ee,ae),e(ae,U),e(ee,me),e(ee,W),e(W,A),e(W,re),e(re,R),e(W,ge),e(W,g),e(g,M),e(W,Z),e(W,ve),e(ve,$e),e(W,D),e(W,Te),e(Te,Ee),e(W,Me),e(W,L),e(L,V),e(W,ze),e(W,ke),e(ke,H),e(W,qe),e(W,Fe),e(Fe,_e),e(W,xe),e(W,fi),e(fi,Zu),e(W,Xu),_(t,Wc,k),_(t,An,k),e(An,Ju),e(An,Ts),e(Ts,ef),e(An,nf),e(An,ks),e(ks,tf),e(An,of),_(t,Bc,k),_(t,Vn,k),e(Vn,It),e(It,El),w(Fs,El,null),e(Vn,sf),e(Vn,Ml),e(Ml,rf),_(t,Qc,k),_(t,jn,k),w(bs,jn,null),e(jn,af),e(jn,Ln),e(Ln,lf),e(Ln,hi),e(hi,df),e(Ln,cf),e(Ln,mi),e(mi,pf),e(Ln,uf),e(Ln,ws),e(ws,ff),e(Ln,hf),e(jn,mf),e(jn,Hn),e(Hn,gf),e(Hn,gi),e(gi,_f),e(Hn,vf),e(Hn,_i),e(_i,Tf),e(Hn,kf),_(t,Uc,k),_(t,Yn,k),e(Yn,Wt),e(Wt,zl),w(ys,zl,null),e(Yn,Ff),e(Yn,ql),e(ql,bf),_(t,Rc,k),_(t,je,k),w($s,je,null),e(je,wf),e(je,xl),e(xl,yf),e(je,$f),e(je,Bt),e(Bt,vi),e(vi,Ef),e(Bt,Mf),e(Bt,Ti),e(Ti,zf),e(Bt,qf),e(je,xf),e(je,Es),e(Es,Pf),e(Es,ki),e(ki,Cf),e(Es,jf),e(je,Lf),e(je,Dn),w(Ms,Dn,null),e(Dn,Of),e(Dn,Pl),e(Pl,Af),e(Dn,Df),e(Dn,zs),e(zs,Fi),e(Fi,Nf),e(Fi,Cl),e(Cl,Sf),e(zs,If),e(zs,bi),e(bi,Wf),e(bi,jl),e(jl,Bf),e(je,Qf),e(je,Qt),w(qs,Qt,null),e(Qt,Uf),e(Qt,xs),e(xs,Rf),e(xs,Ll),e(Ll,Vf),e(xs,Hf),e(je,Yf),e(je,gn),w(Ps,gn,null),e(gn,Kf),e(gn,Ol),e(Ol,Gf),e(gn,Zf),w(Ut,gn,null),e(gn,Xf),e(gn,Kn),e(Kn,Jf),e(Kn,Al),e(Al,eh),e(Kn,nh),e(Kn,Dl),e(Dl,th),e(Kn,oh),e(je,sh),e(je,wi),w(Cs,wi,null),_(t,Vc,k),_(t,Gn,k),e(Gn,Rt),e(Rt,Nl),w(js,Nl,null),e(Gn,rh),e(Gn,Sl),e(Sl,ah),_(t,Hc,k),_(t,Xe,k),w(Ls,Xe,null),e(Xe,ih),e(Xe,Os),e(Os,lh),e(Os,Il),e(Il,dh),e(Os,ch),e(Xe,ph),e(Xe,Vt),e(Vt,yi),e(yi,uh),e(Vt,fh),e(Vt,$i),e($i,hh),e(Vt,mh),e(Xe,gh),e(Xe,As),e(As,_h),e(As,Ei),e(Ei,vh),e(As,Th),e(Xe,kh),e(Xe,_n),w(Ds,_n,null),e(_n,Fh),e(_n,Wl),e(Wl,bh),e(_n,wh),w(Ht,_n,null),e(_n,yh),e(_n,Zn),e(Zn,$h),e(Zn,Bl),e(Bl,Eh),e(Zn,Mh),e(Zn,Ql),e(Ql,zh),e(Zn,qh),_(t,Yc,k),_(t,Xn,k),e(Xn,Yt),e(Yt,Ul),w(Ns,Ul,null),e(Xn,xh),e(Xn,Rl),e(Rl,Ph),_(t,Kc,k),_(t,Jn,k),w(Ss,Jn,null),e(Jn,Ch),e(Jn,Is),e(Is,jh),e(Is,Mi),e(Mi,Lh),e(Is,Oh),_(t,Gc,k),_(t,et,k),w(Ws,et,null),e(et,Ah),e(et,Bs),e(Bs,Dh),e(Bs,zi),e(zi,Nh),e(Bs,Sh),_(t,Zc,k),_(t,nt,k),e(nt,Kt),e(Kt,Vl),w(Qs,Vl,null),e(nt,Ih),e(nt,Hl),e(Hl,Wh),_(t,Xc,k),_(t,Re,k),w(Us,Re,null),e(Re,Bh),e(Re,Yl),e(Yl,Qh),e(Re,Uh),e(Re,Rs),e(Rs,Rh),e(Rs,Vs),e(Vs,Vh),e(Rs,Hh),e(Re,Yh),e(Re,Hs),e(Hs,Kh),e(Hs,qi),e(qi,Gh),e(Hs,Zh),e(Re,Xh),e(Re,Ys),e(Ys,Jh),e(Ys,Ks),e(Ks,em),e(Ys,nm),e(Re,tm),e(Re,vn),w(Gs,vn,null),e(vn,om),e(vn,tt),e(tt,sm),e(tt,xi),e(xi,rm),e(tt,am),e(tt,Kl),e(Kl,im),e(tt,lm),e(vn,dm),w(Gt,vn,null),e(vn,cm),w(Zt,vn,null),_(t,Jc,k),_(t,ot,k),e(ot,Xt),e(Xt,Gl),w(Zs,Gl,null),e(ot,pm),e(ot,Zl),e(Zl,um),_(t,ep,k),_(t,Ve,k),w(Xs,Ve,null),e(Ve,fm),e(Ve,Xl),e(Xl,hm),e(Ve,mm),e(Ve,Js),e(Js,gm),e(Js,er),e(er,_m),e(Js,vm),e(Ve,Tm),e(Ve,nr),e(nr,km),e(nr,Pi),e(Pi,Fm),e(nr,bm),e(Ve,wm),e(Ve,tr),e(tr,ym),e(tr,or),e(or,$m),e(tr,Em),e(Ve,Mm),e(Ve,Tn),w(sr,Tn,null),e(Tn,zm),e(Tn,st),e(st,qm),e(st,Ci),e(Ci,xm),e(st,Pm),e(st,Jl),e(Jl,Cm),e(st,jm),e(Tn,Lm),w(Jt,Tn,null),e(Tn,Om),w(eo,Tn,null),_(t,np,k),_(t,rt,k),e(rt,no),e(no,ed),w(rr,ed,null),e(rt,Am),e(rt,nd),e(nd,Dm),_(t,tp,k),_(t,at,k),w(ar,at,null),e(at,Nm),e(at,kn),w(ir,kn,null),e(kn,Sm),e(kn,it),e(it,Im),e(it,ji),e(ji,Wm),e(it,Bm),e(it,td),e(td,Qm),e(it,Um),e(kn,Rm),w(to,kn,null),e(kn,Vm),w(oo,kn,null),_(t,op,k),_(t,lt,k),e(lt,so),e(so,od),w(lr,od,null),e(lt,Hm),e(lt,sd),e(sd,Ym),_(t,sp,k),_(t,He,k),w(dr,He,null),e(He,Km),e(He,cr),e(cr,Gm),e(cr,rd),e(rd,Zm),e(cr,Xm),e(He,Jm),e(He,pr),e(pr,eg),e(pr,ur),e(ur,ng),e(pr,tg),e(He,og),e(He,fr),e(fr,sg),e(fr,Li),e(Li,rg),e(fr,ag),e(He,ig),e(He,hr),e(hr,lg),e(hr,mr),e(mr,dg),e(hr,cg),e(He,pg),e(He,Je),w(gr,Je,null),e(Je,ug),e(Je,dt),e(dt,fg),e(dt,Oi),e(Oi,hg),e(dt,mg),e(dt,ad),e(ad,gg),e(dt,_g),e(Je,vg),w(ro,Je,null),e(Je,Tg),w(ao,Je,null),e(Je,kg),w(io,Je,null),_(t,rp,k),_(t,ct,k),e(ct,lo),e(lo,id),w(_r,id,null),e(ct,Fg),e(ct,ld),e(ld,bg),_(t,ap,k),_(t,Ye,k),w(vr,Ye,null),e(Ye,wg),e(Ye,dd),e(dd,yg),e(Ye,$g),e(Ye,Tr),e(Tr,Eg),e(Tr,kr),e(kr,Mg),e(Tr,zg),e(Ye,qg),e(Ye,Fr),e(Fr,xg),e(Fr,Ai),e(Ai,Pg),e(Fr,Cg),e(Ye,jg),e(Ye,br),e(br,Lg),e(br,wr),e(wr,Og),e(br,Ag),e(Ye,Dg),e(Ye,Ue),w(yr,Ue,null),e(Ue,Ng),e(Ue,pt),e(pt,Sg),e(pt,Di),e(Di,Ig),e(pt,Wg),e(pt,cd),e(cd,Bg),e(pt,Qg),e(Ue,Ug),w(co,Ue,null),e(Ue,Rg),w(po,Ue,null),e(Ue,Vg),w(uo,Ue,null),e(Ue,Hg),w(fo,Ue,null),e(Ue,Yg),w(ho,Ue,null),_(t,ip,k),_(t,ut,k),e(ut,mo),e(mo,pd),w($r,pd,null),e(ut,Kg),e(ut,ud),e(ud,Gg),_(t,lp,k),_(t,Ke,k),w(Er,Ke,null),e(Ke,Zg),e(Ke,fd),e(fd,Xg),e(Ke,Jg),e(Ke,Mr),e(Mr,e_),e(Mr,zr),e(zr,n_),e(Mr,t_),e(Ke,o_),e(Ke,qr),e(qr,s_),e(qr,Ni),e(Ni,r_),e(qr,a_),e(Ke,i_),e(Ke,xr),e(xr,l_),e(xr,Pr),e(Pr,d_),e(xr,c_),e(Ke,p_),e(Ke,Fn),w(Cr,Fn,null),e(Fn,u_),e(Fn,ft),e(ft,f_),e(ft,Si),e(Si,h_),e(ft,m_),e(ft,hd),e(hd,g_),e(ft,__),e(Fn,v_),w(go,Fn,null),e(Fn,T_),w(_o,Fn,null),_(t,dp,k),_(t,ht,k),e(ht,vo),e(vo,md),w(jr,md,null),e(ht,k_),e(ht,gd),e(gd,F_),_(t,cp,k),_(t,Ge,k),w(Lr,Ge,null),e(Ge,b_),e(Ge,_d),e(_d,w_),e(Ge,y_),e(Ge,Or),e(Or,$_),e(Or,Ar),e(Ar,E_),e(Or,M_),e(Ge,z_),e(Ge,Dr),e(Dr,q_),e(Dr,Ii),e(Ii,x_),e(Dr,P_),e(Ge,C_),e(Ge,Nr),e(Nr,j_),e(Nr,Sr),e(Sr,L_),e(Nr,O_),e(Ge,A_),e(Ge,en),w(Ir,en,null),e(en,D_),e(en,mt),e(mt,N_),e(mt,Wi),e(Wi,S_),e(mt,I_),e(mt,vd),e(vd,W_),e(mt,B_),e(en,Q_),w(To,en,null),e(en,U_),w(ko,en,null),e(en,R_),w(Fo,en,null),_(t,pp,k),_(t,gt,k),e(gt,bo),e(bo,Td),w(Wr,Td,null),e(gt,V_),e(gt,kd),e(kd,H_),_(t,up,k),_(t,Ze,k),w(Br,Ze,null),e(Ze,Y_),e(Ze,_t),e(_t,K_),e(_t,Fd),e(Fd,G_),e(_t,Z_),e(_t,bd),e(bd,X_),e(_t,J_),e(Ze,ev),e(Ze,Qr),e(Qr,nv),e(Qr,Ur),e(Ur,tv),e(Qr,ov),e(Ze,sv),e(Ze,Rr),e(Rr,rv),e(Rr,Bi),e(Bi,av),e(Rr,iv),e(Ze,lv),e(Ze,Vr),e(Vr,dv),e(Vr,Hr),e(Hr,cv),e(Vr,pv),e(Ze,uv),e(Ze,nn),w(Yr,nn,null),e(nn,fv),e(nn,vt),e(vt,hv),e(vt,Qi),e(Qi,mv),e(vt,gv),e(vt,wd),e(wd,_v),e(vt,vv),e(nn,Tv),w(wo,nn,null),e(nn,kv),w(yo,nn,null),e(nn,Fv),w($o,nn,null),_(t,fp,k),_(t,Tt,k),e(Tt,Eo),e(Eo,yd),w(Kr,yd,null),e(Tt,bv),e(Tt,$d),e($d,wv),_(t,hp,k),_(t,Oe,k),w(Gr,Oe,null),e(Oe,yv),e(Oe,Ed),e(Ed,$v),e(Oe,Ev),e(Oe,Zr),e(Zr,Mv),e(Zr,Xr),e(Xr,zv),e(Zr,qv),e(Oe,xv),e(Oe,Jr),e(Jr,Pv),e(Jr,Ui),e(Ui,Cv),e(Jr,jv),e(Oe,Lv),e(Oe,ea),e(ea,Ov),e(ea,na),e(na,Av),e(ea,Dv),e(Oe,Nv),w(Mo,Oe,null),e(Oe,Sv),e(Oe,bn),w(ta,bn,null),e(bn,Iv),e(bn,kt),e(kt,Wv),e(kt,Ri),e(Ri,Bv),e(kt,Qv),e(kt,Md),e(Md,Uv),e(kt,Rv),e(bn,Vv),w(zo,bn,null),e(bn,Hv),w(qo,bn,null),_(t,mp,k),_(t,Ft,k),e(Ft,xo),e(xo,zd),w(oa,zd,null),e(Ft,Yv),e(Ft,qd),e(qd,Kv),_(t,gp,k),_(t,Ae,k),w(sa,Ae,null),e(Ae,Gv),e(Ae,xd),e(xd,Zv),e(Ae,Xv),e(Ae,ra),e(ra,Jv),e(ra,aa),e(aa,eT),e(ra,nT),e(Ae,tT),e(Ae,ia),e(ia,oT),e(ia,Vi),e(Vi,sT),e(ia,rT),e(Ae,aT),e(Ae,la),e(la,iT),e(la,da),e(da,lT),e(la,dT),e(Ae,cT),w(Po,Ae,null),e(Ae,pT),e(Ae,wn),w(ca,wn,null),e(wn,uT),e(wn,bt),e(bt,fT),e(bt,Hi),e(Hi,hT),e(bt,mT),e(bt,Pd),e(Pd,gT),e(bt,_T),e(wn,vT),w(Co,wn,null),e(wn,TT),w(jo,wn,null),_(t,_p,k),_(t,wt,k),e(wt,Lo),e(Lo,Cd),w(pa,Cd,null),e(wt,kT),e(wt,jd),e(jd,FT),_(t,vp,k),_(t,De,k),w(ua,De,null),e(De,bT),e(De,Ld),e(Ld,wT),e(De,yT),e(De,fa),e(fa,$T),e(fa,ha),e(ha,ET),e(fa,MT),e(De,zT),e(De,ma),e(ma,qT),e(ma,Yi),e(Yi,xT),e(ma,PT),e(De,CT),e(De,ga),e(ga,jT),e(ga,_a),e(_a,LT),e(ga,OT),e(De,AT),w(Oo,De,null),e(De,DT),e(De,yn),w(va,yn,null),e(yn,NT),e(yn,yt),e(yt,ST),e(yt,Ki),e(Ki,IT),e(yt,WT),e(yt,Od),e(Od,BT),e(yt,QT),e(yn,UT),w(Ao,yn,null),e(yn,RT),w(Do,yn,null),_(t,Tp,k),_(t,$t,k),e($t,No),e(No,Ad),w(Ta,Ad,null),e($t,VT),e($t,Dd),e(Dd,HT),_(t,kp,k),_(t,Ne,k),w(ka,Ne,null),e(Ne,YT),e(Ne,Fa),e(Fa,KT),e(Fa,Nd),e(Nd,GT),e(Fa,ZT),e(Ne,XT),e(Ne,ba),e(ba,JT),e(ba,wa),e(wa,ek),e(ba,nk),e(Ne,tk),e(Ne,ya),e(ya,ok),e(ya,Gi),e(Gi,sk),e(ya,rk),e(Ne,ak),e(Ne,$a),e($a,ik),e($a,Ea),e(Ea,lk),e($a,dk),e(Ne,ck),w(So,Ne,null),e(Ne,pk),e(Ne,tn),w(Ma,tn,null),e(tn,uk),e(tn,Et),e(Et,fk),e(Et,Zi),e(Zi,hk),e(Et,mk),e(Et,Sd),e(Sd,gk),e(Et,_k),e(tn,vk),w(Io,tn,null),e(tn,Tk),w(Wo,tn,null),e(tn,kk),w(Bo,tn,null),_(t,Fp,k),_(t,Mt,k),e(Mt,Qo),e(Qo,Id),w(za,Id,null),e(Mt,Fk),e(Mt,Wd),e(Wd,bk),_(t,bp,k),_(t,Se,k),w(qa,Se,null),e(Se,wk),e(Se,Bd),e(Bd,yk),e(Se,$k),e(Se,xa),e(xa,Ek),e(xa,Pa),e(Pa,Mk),e(xa,zk),e(Se,qk),e(Se,Ca),e(Ca,xk),e(Ca,Xi),e(Xi,Pk),e(Ca,Ck),e(Se,jk),e(Se,ja),e(ja,Lk),e(ja,La),e(La,Ok),e(ja,Ak),e(Se,Dk),w(Uo,Se,null),e(Se,Nk),e(Se,on),w(Oa,on,null),e(on,Sk),e(on,zt),e(zt,Ik),e(zt,Ji),e(Ji,Wk),e(zt,Bk),e(zt,Qd),e(Qd,Qk),e(zt,Uk),e(on,Rk),w(Ro,on,null),e(on,Vk),w(Vo,on,null),e(on,Hk),w(Ho,on,null),_(t,wp,k),_(t,qt,k),e(qt,Yo),e(Yo,Ud),w(Aa,Ud,null),e(qt,Yk),e(qt,Rd),e(Rd,Kk),_(t,yp,k),_(t,Ie,k),w(Da,Ie,null),e(Ie,Gk),e(Ie,Vd),e(Vd,Zk),e(Ie,Xk),e(Ie,Na),e(Na,Jk),e(Na,Sa),e(Sa,eF),e(Na,nF),e(Ie,tF),e(Ie,Ia),e(Ia,oF),e(Ia,el),e(el,sF),e(Ia,rF),e(Ie,aF),e(Ie,Wa),e(Wa,iF),e(Wa,Ba),e(Ba,lF),e(Wa,dF),e(Ie,cF),w(Ko,Ie,null),e(Ie,pF),e(Ie,$n),w(Qa,$n,null),e($n,uF),e($n,xt),e(xt,fF),e(xt,nl),e(nl,hF),e(xt,mF),e(xt,Hd),e(Hd,gF),e(xt,_F),e($n,vF),w(Go,$n,null),e($n,TF),w(Zo,$n,null),_(t,$p,k),_(t,Pt,k),e(Pt,Xo),e(Xo,Yd),w(Ua,Yd,null),e(Pt,kF),e(Pt,Kd),e(Kd,FF),_(t,Ep,k),_(t,We,k),w(Ra,We,null),e(We,bF),e(We,Gd),e(Gd,wF),e(We,yF),e(We,Va),e(Va,$F),e(Va,Ha),e(Ha,EF),e(Va,MF),e(We,zF),e(We,Ya),e(Ya,qF),e(Ya,tl),e(tl,xF),e(Ya,PF),e(We,CF),e(We,Ka),e(Ka,jF),e(Ka,Ga),e(Ga,LF),e(Ka,OF),e(We,AF),w(Jo,We,null),e(We,DF),e(We,sn),w(Za,sn,null),e(sn,NF),e(sn,Ct),e(Ct,SF),e(Ct,ol),e(ol,IF),e(Ct,WF),e(Ct,Zd),e(Zd,BF),e(Ct,QF),e(sn,UF),w(es,sn,null),e(sn,RF),w(ns,sn,null),e(sn,VF),w(ts,sn,null),_(t,Mp,k),_(t,jt,k),e(jt,os),e(os,Xd),w(Xa,Xd,null),e(jt,HF),e(jt,Jd),e(Jd,YF),_(t,zp,k),_(t,Be,k),w(Ja,Be,null),e(Be,KF),e(Be,Lt),e(Lt,GF),e(Lt,ec),e(ec,ZF),e(Lt,XF),e(Lt,nc),e(nc,JF),e(Lt,eb),e(Be,nb),e(Be,ei),e(ei,tb),e(ei,ni),e(ni,ob),e(ei,sb),e(Be,rb),e(Be,ti),e(ti,ab),e(ti,sl),e(sl,ib),e(ti,lb),e(Be,db),e(Be,oi),e(oi,cb),e(oi,si),e(si,pb),e(oi,ub),e(Be,fb),w(ss,Be,null),e(Be,hb),e(Be,rn),w(ri,rn,null),e(rn,mb),e(rn,Ot),e(Ot,gb),e(Ot,rl),e(rl,_b),e(Ot,vb),e(Ot,tc),e(tc,Tb),e(Ot,kb),e(rn,Fb),w(rs,rn,null),e(rn,bb),w(as,rn,null),e(rn,wb),w(is,rn,null),qp=!0},p(t,[k]){const ai={};k&2&&(ai.$$scope={dirty:k,ctx:t}),Ut.$set(ai);const oc={};k&2&&(oc.$$scope={dirty:k,ctx:t}),Ht.$set(oc);const sc={};k&2&&(sc.$$scope={dirty:k,ctx:t}),Gt.$set(sc);const rc={};k&2&&(rc.$$scope={dirty:k,ctx:t}),Zt.$set(rc);const ii={};k&2&&(ii.$$scope={dirty:k,ctx:t}),Jt.$set(ii);const ac={};k&2&&(ac.$$scope={dirty:k,ctx:t}),eo.$set(ac);const ic={};k&2&&(ic.$$scope={dirty:k,ctx:t}),to.$set(ic);const lc={};k&2&&(lc.$$scope={dirty:k,ctx:t}),oo.$set(lc);const li={};k&2&&(li.$$scope={dirty:k,ctx:t}),ro.$set(li);const dc={};k&2&&(dc.$$scope={dirty:k,ctx:t}),ao.$set(dc);const cc={};k&2&&(cc.$$scope={dirty:k,ctx:t}),io.$set(cc);const pc={};k&2&&(pc.$$scope={dirty:k,ctx:t}),co.$set(pc);const uc={};k&2&&(uc.$$scope={dirty:k,ctx:t}),po.$set(uc);const fc={};k&2&&(fc.$$scope={dirty:k,ctx:t}),uo.$set(fc);const di={};k&2&&(di.$$scope={dirty:k,ctx:t}),fo.$set(di);const hc={};k&2&&(hc.$$scope={dirty:k,ctx:t}),ho.$set(hc);const Le={};k&2&&(Le.$$scope={dirty:k,ctx:t}),go.$set(Le);const mc={};k&2&&(mc.$$scope={dirty:k,ctx:t}),_o.$set(mc);const gc={};k&2&&(gc.$$scope={dirty:k,ctx:t}),To.$set(gc);const _c={};k&2&&(_c.$$scope={dirty:k,ctx:t}),ko.$set(_c);const vc={};k&2&&(vc.$$scope={dirty:k,ctx:t}),Fo.$set(vc);const Tc={};k&2&&(Tc.$$scope={dirty:k,ctx:t}),wo.$set(Tc);const kc={};k&2&&(kc.$$scope={dirty:k,ctx:t}),yo.$set(kc);const Fc={};k&2&&(Fc.$$scope={dirty:k,ctx:t}),$o.$set(Fc);const bc={};k&2&&(bc.$$scope={dirty:k,ctx:t}),Mo.$set(bc);const At={};k&2&&(At.$$scope={dirty:k,ctx:t}),zo.$set(At);const wc={};k&2&&(wc.$$scope={dirty:k,ctx:t}),qo.$set(wc);const yc={};k&2&&(yc.$$scope={dirty:k,ctx:t}),Po.$set(yc);const ci={};k&2&&(ci.$$scope={dirty:k,ctx:t}),Co.$set(ci);const $c={};k&2&&($c.$$scope={dirty:k,ctx:t}),jo.$set($c);const Ec={};k&2&&(Ec.$$scope={dirty:k,ctx:t}),Oo.$set(Ec);const Mc={};k&2&&(Mc.$$scope={dirty:k,ctx:t}),Ao.$set(Mc);const Dt={};k&2&&(Dt.$$scope={dirty:k,ctx:t}),Do.$set(Dt);const On={};k&2&&(On.$$scope={dirty:k,ctx:t}),So.$set(On);const zc={};k&2&&(zc.$$scope={dirty:k,ctx:t}),Io.$set(zc);const qc={};k&2&&(qc.$$scope={dirty:k,ctx:t}),Wo.$set(qc);const xc={};k&2&&(xc.$$scope={dirty:k,ctx:t}),Bo.$set(xc);const Nt={};k&2&&(Nt.$$scope={dirty:k,ctx:t}),Uo.$set(Nt);const Pc={};k&2&&(Pc.$$scope={dirty:k,ctx:t}),Ro.$set(Pc);const Cc={};k&2&&(Cc.$$scope={dirty:k,ctx:t}),Vo.$set(Cc);const pi={};k&2&&(pi.$$scope={dirty:k,ctx:t}),Ho.$set(pi);const jc={};k&2&&(jc.$$scope={dirty:k,ctx:t}),Ko.$set(jc);const Lc={};k&2&&(Lc.$$scope={dirty:k,ctx:t}),Go.$set(Lc);const Oc={};k&2&&(Oc.$$scope={dirty:k,ctx:t}),Zo.$set(Oc);const Qe={};k&2&&(Qe.$$scope={dirty:k,ctx:t}),Jo.$set(Qe);const Ac={};k&2&&(Ac.$$scope={dirty:k,ctx:t}),es.$set(Ac);const ls={};k&2&&(ls.$$scope={dirty:k,ctx:t}),ns.$set(ls);const Dc={};k&2&&(Dc.$$scope={dirty:k,ctx:t}),ts.$set(Dc);const Nc={};k&2&&(Nc.$$scope={dirty:k,ctx:t}),ss.$set(Nc);const ui={};k&2&&(ui.$$scope={dirty:k,ctx:t}),rs.$set(ui);const Sc={};k&2&&(Sc.$$scope={dirty:k,ctx:t}),as.$set(Sc);const St={};k&2&&(St.$$scope={dirty:k,ctx:t}),is.$set(St)},i(t){qp||(y(l.$$.fragment,t),y(ne.$$.fragment,t),y(Fs.$$.fragment,t),y(bs.$$.fragment,t),y(ys.$$.fragment,t),y($s.$$.fragment,t),y(Ms.$$.fragment,t),y(qs.$$.fragment,t),y(Ps.$$.fragment,t),y(Ut.$$.fragment,t),y(Cs.$$.fragment,t),y(js.$$.fragment,t),y(Ls.$$.fragment,t),y(Ds.$$.fragment,t),y(Ht.$$.fragment,t),y(Ns.$$.fragment,t),y(Ss.$$.fragment,t),y(Ws.$$.fragment,t),y(Qs.$$.fragment,t),y(Us.$$.fragment,t),y(Gs.$$.fragment,t),y(Gt.$$.fragment,t),y(Zt.$$.fragment,t),y(Zs.$$.fragment,t),y(Xs.$$.fragment,t),y(sr.$$.fragment,t),y(Jt.$$.fragment,t),y(eo.$$.fragment,t),y(rr.$$.fragment,t),y(ar.$$.fragment,t),y(ir.$$.fragment,t),y(to.$$.fragment,t),y(oo.$$.fragment,t),y(lr.$$.fragment,t),y(dr.$$.fragment,t),y(gr.$$.fragment,t),y(ro.$$.fragment,t),y(ao.$$.fragment,t),y(io.$$.fragment,t),y(_r.$$.fragment,t),y(vr.$$.fragment,t),y(yr.$$.fragment,t),y(co.$$.fragment,t),y(po.$$.fragment,t),y(uo.$$.fragment,t),y(fo.$$.fragment,t),y(ho.$$.fragment,t),y($r.$$.fragment,t),y(Er.$$.fragment,t),y(Cr.$$.fragment,t),y(go.$$.fragment,t),y(_o.$$.fragment,t),y(jr.$$.fragment,t),y(Lr.$$.fragment,t),y(Ir.$$.fragment,t),y(To.$$.fragment,t),y(ko.$$.fragment,t),y(Fo.$$.fragment,t),y(Wr.$$.fragment,t),y(Br.$$.fragment,t),y(Yr.$$.fragment,t),y(wo.$$.fragment,t),y(yo.$$.fragment,t),y($o.$$.fragment,t),y(Kr.$$.fragment,t),y(Gr.$$.fragment,t),y(Mo.$$.fragment,t),y(ta.$$.fragment,t),y(zo.$$.fragment,t),y(qo.$$.fragment,t),y(oa.$$.fragment,t),y(sa.$$.fragment,t),y(Po.$$.fragment,t),y(ca.$$.fragment,t),y(Co.$$.fragment,t),y(jo.$$.fragment,t),y(pa.$$.fragment,t),y(ua.$$.fragment,t),y(Oo.$$.fragment,t),y(va.$$.fragment,t),y(Ao.$$.fragment,t),y(Do.$$.fragment,t),y(Ta.$$.fragment,t),y(ka.$$.fragment,t),y(So.$$.fragment,t),y(Ma.$$.fragment,t),y(Io.$$.fragment,t),y(Wo.$$.fragment,t),y(Bo.$$.fragment,t),y(za.$$.fragment,t),y(qa.$$.fragment,t),y(Uo.$$.fragment,t),y(Oa.$$.fragment,t),y(Ro.$$.fragment,t),y(Vo.$$.fragment,t),y(Ho.$$.fragment,t),y(Aa.$$.fragment,t),y(Da.$$.fragment,t),y(Ko.$$.fragment,t),y(Qa.$$.fragment,t),y(Go.$$.fragment,t),y(Zo.$$.fragment,t),y(Ua.$$.fragment,t),y(Ra.$$.fragment,t),y(Jo.$$.fragment,t),y(Za.$$.fragment,t),y(es.$$.fragment,t),y(ns.$$.fragment,t),y(ts.$$.fragment,t),y(Xa.$$.fragment,t),y(Ja.$$.fragment,t),y(ss.$$.fragment,t),y(ri.$$.fragment,t),y(rs.$$.fragment,t),y(as.$$.fragment,t),y(is.$$.fragment,t),qp=!0)},o(t){$(l.$$.fragment,t),$(ne.$$.fragment,t),$(Fs.$$.fragment,t),$(bs.$$.fragment,t),$(ys.$$.fragment,t),$($s.$$.fragment,t),$(Ms.$$.fragment,t),$(qs.$$.fragment,t),$(Ps.$$.fragment,t),$(Ut.$$.fragment,t),$(Cs.$$.fragment,t),$(js.$$.fragment,t),$(Ls.$$.fragment,t),$(Ds.$$.fragment,t),$(Ht.$$.fragment,t),$(Ns.$$.fragment,t),$(Ss.$$.fragment,t),$(Ws.$$.fragment,t),$(Qs.$$.fragment,t),$(Us.$$.fragment,t),$(Gs.$$.fragment,t),$(Gt.$$.fragment,t),$(Zt.$$.fragment,t),$(Zs.$$.fragment,t),$(Xs.$$.fragment,t),$(sr.$$.fragment,t),$(Jt.$$.fragment,t),$(eo.$$.fragment,t),$(rr.$$.fragment,t),$(ar.$$.fragment,t),$(ir.$$.fragment,t),$(to.$$.fragment,t),$(oo.$$.fragment,t),$(lr.$$.fragment,t),$(dr.$$.fragment,t),$(gr.$$.fragment,t),$(ro.$$.fragment,t),$(ao.$$.fragment,t),$(io.$$.fragment,t),$(_r.$$.fragment,t),$(vr.$$.fragment,t),$(yr.$$.fragment,t),$(co.$$.fragment,t),$(po.$$.fragment,t),$(uo.$$.fragment,t),$(fo.$$.fragment,t),$(ho.$$.fragment,t),$($r.$$.fragment,t),$(Er.$$.fragment,t),$(Cr.$$.fragment,t),$(go.$$.fragment,t),$(_o.$$.fragment,t),$(jr.$$.fragment,t),$(Lr.$$.fragment,t),$(Ir.$$.fragment,t),$(To.$$.fragment,t),$(ko.$$.fragment,t),$(Fo.$$.fragment,t),$(Wr.$$.fragment,t),$(Br.$$.fragment,t),$(Yr.$$.fragment,t),$(wo.$$.fragment,t),$(yo.$$.fragment,t),$($o.$$.fragment,t),$(Kr.$$.fragment,t),$(Gr.$$.fragment,t),$(Mo.$$.fragment,t),$(ta.$$.fragment,t),$(zo.$$.fragment,t),$(qo.$$.fragment,t),$(oa.$$.fragment,t),$(sa.$$.fragment,t),$(Po.$$.fragment,t),$(ca.$$.fragment,t),$(Co.$$.fragment,t),$(jo.$$.fragment,t),$(pa.$$.fragment,t),$(ua.$$.fragment,t),$(Oo.$$.fragment,t),$(va.$$.fragment,t),$(Ao.$$.fragment,t),$(Do.$$.fragment,t),$(Ta.$$.fragment,t),$(ka.$$.fragment,t),$(So.$$.fragment,t),$(Ma.$$.fragment,t),$(Io.$$.fragment,t),$(Wo.$$.fragment,t),$(Bo.$$.fragment,t),$(za.$$.fragment,t),$(qa.$$.fragment,t),$(Uo.$$.fragment,t),$(Oa.$$.fragment,t),$(Ro.$$.fragment,t),$(Vo.$$.fragment,t),$(Ho.$$.fragment,t),$(Aa.$$.fragment,t),$(Da.$$.fragment,t),$(Ko.$$.fragment,t),$(Qa.$$.fragment,t),$(Go.$$.fragment,t),$(Zo.$$.fragment,t),$(Ua.$$.fragment,t),$(Ra.$$.fragment,t),$(Jo.$$.fragment,t),$(Za.$$.fragment,t),$(es.$$.fragment,t),$(ns.$$.fragment,t),$(ts.$$.fragment,t),$(Xa.$$.fragment,t),$(Ja.$$.fragment,t),$(ss.$$.fragment,t),$(ri.$$.fragment,t),$(rs.$$.fragment,t),$(as.$$.fragment,t),$(is.$$.fragment,t),qp=!1},d(t){n(d),t&&n(v),t&&n(c),E(l),t&&n(K),t&&n(x),E(ne),t&&n(ie),t&&n(Y),t&&n(j),t&&n(oe),t&&n(le),t&&n(se),t&&n(de),t&&n(C),t&&n(B),t&&n(ee),t&&n(Wc),t&&n(An),t&&n(Bc),t&&n(Vn),E(Fs),t&&n(Qc),t&&n(jn),E(bs),t&&n(Uc),t&&n(Yn),E(ys),t&&n(Rc),t&&n(je),E($s),E(Ms),E(qs),E(Ps),E(Ut),E(Cs),t&&n(Vc),t&&n(Gn),E(js),t&&n(Hc),t&&n(Xe),E(Ls),E(Ds),E(Ht),t&&n(Yc),t&&n(Xn),E(Ns),t&&n(Kc),t&&n(Jn),E(Ss),t&&n(Gc),t&&n(et),E(Ws),t&&n(Zc),t&&n(nt),E(Qs),t&&n(Xc),t&&n(Re),E(Us),E(Gs),E(Gt),E(Zt),t&&n(Jc),t&&n(ot),E(Zs),t&&n(ep),t&&n(Ve),E(Xs),E(sr),E(Jt),E(eo),t&&n(np),t&&n(rt),E(rr),t&&n(tp),t&&n(at),E(ar),E(ir),E(to),E(oo),t&&n(op),t&&n(lt),E(lr),t&&n(sp),t&&n(He),E(dr),E(gr),E(ro),E(ao),E(io),t&&n(rp),t&&n(ct),E(_r),t&&n(ap),t&&n(Ye),E(vr),E(yr),E(co),E(po),E(uo),E(fo),E(ho),t&&n(ip),t&&n(ut),E($r),t&&n(lp),t&&n(Ke),E(Er),E(Cr),E(go),E(_o),t&&n(dp),t&&n(ht),E(jr),t&&n(cp),t&&n(Ge),E(Lr),E(Ir),E(To),E(ko),E(Fo),t&&n(pp),t&&n(gt),E(Wr),t&&n(up),t&&n(Ze),E(Br),E(Yr),E(wo),E(yo),E($o),t&&n(fp),t&&n(Tt),E(Kr),t&&n(hp),t&&n(Oe),E(Gr),E(Mo),E(ta),E(zo),E(qo),t&&n(mp),t&&n(Ft),E(oa),t&&n(gp),t&&n(Ae),E(sa),E(Po),E(ca),E(Co),E(jo),t&&n(_p),t&&n(wt),E(pa),t&&n(vp),t&&n(De),E(ua),E(Oo),E(va),E(Ao),E(Do),t&&n(Tp),t&&n($t),E(Ta),t&&n(kp),t&&n(Ne),E(ka),E(So),E(Ma),E(Io),E(Wo),E(Bo),t&&n(Fp),t&&n(Mt),E(za),t&&n(bp),t&&n(Se),E(qa),E(Uo),E(Oa),E(Ro),E(Vo),E(Ho),t&&n(wp),t&&n(qt),E(Aa),t&&n(yp),t&&n(Ie),E(Da),E(Ko),E(Qa),E(Go),E(Zo),t&&n($p),t&&n(Pt),E(Ua),t&&n(Ep),t&&n(We),E(Ra),E(Jo),E(Za),E(es),E(ns),E(ts),t&&n(Mp),t&&n(jt),E(Xa),t&&n(zp),t&&n(Be),E(Ja),E(ss),E(ri),E(rs),E(as),E(is)}}}const j$={local:"funnel-transformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.FunnelConfig",title:"FunnelConfig"},{local:"transformers.FunnelTokenizer",title:"FunnelTokenizer"},{local:"transformers.FunnelTokenizerFast",title:"FunnelTokenizerFast"},{local:"transformers.models.funnel.modeling_funnel.FunnelForPreTrainingOutput",title:"Funnel specific outputs"},{local:"transformers.FunnelBaseModel",title:"FunnelBaseModel"},{local:"transformers.FunnelModel",title:"FunnelModel"},{local:"transformers.FunnelForPreTraining",title:"FunnelModelForPreTraining"},{local:"transformers.FunnelForMaskedLM",title:"FunnelForMaskedLM"},{local:"transformers.FunnelForSequenceClassification",title:"FunnelForSequenceClassification"},{local:"transformers.FunnelForMultipleChoice",title:"FunnelForMultipleChoice"},{local:"transformers.FunnelForTokenClassification",title:"FunnelForTokenClassification"},{local:"transformers.FunnelForQuestionAnswering",title:"FunnelForQuestionAnswering"},{local:"transformers.TFFunnelBaseModel",title:"TFFunnelBaseModel"},{local:"transformers.TFFunnelModel",title:"TFFunnelModel"},{local:"transformers.TFFunnelForPreTraining",title:"TFFunnelModelForPreTraining"},{local:"transformers.TFFunnelForMaskedLM",title:"TFFunnelForMaskedLM"},{local:"transformers.TFFunnelForSequenceClassification",title:"TFFunnelForSequenceClassification"},{local:"transformers.TFFunnelForMultipleChoice",title:"TFFunnelForMultipleChoice"},{local:"transformers.TFFunnelForTokenClassification",title:"TFFunnelForTokenClassification"},{local:"transformers.TFFunnelForQuestionAnswering",title:"TFFunnelForQuestionAnswering"}],title:"Funnel Transformer"};function L$(z){return j1(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class W$ extends q1{constructor(d){super();x1(this,d,L$,C$,P1,{})}}export{W$ as default,j$ as metadata};
