import{S as Tg,i as $g,s as wg,e as r,k as m,w as T,t as n,M as yg,c as a,d as t,m as h,a as i,x as $,h as s,b as k,G as e,g as _,y as w,q as y,o as C,B as F,v as Cg,L as we}from"../../chunks/vendor-hf-doc-builder.js";import{T as qe}from"../../chunks/Tip-hf-doc-builder.js";import{D as ne}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ye}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Se}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as $e}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Fg(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertModel, ConvBertConfig

# Initializing a ConvBERT convbert-base-uncased style configuration
configuration = ConvBertConfig()
# Initializing a model from the convbert-base-uncased style configuration
model = ConvBertModel(configuration)
# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertModel, ConvBertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ConvBERT convbert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ConvBertConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the convbert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertModel(configuration)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),g=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Bg(B){let d,g,c,p,v;return p=new ye({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),g=n("pair mask has the following format:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"pair mask has the following format:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Eg(B){let d,g,c,p,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Mg(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, ConvBertModel
import torch

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = ConvBertModel.from_pretrained("YituTech/conv-bert-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, ConvBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertModel.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function zg(B){let d,g,c,p,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function jg(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, ConvBertForMaskedLM
import torch

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = ConvBertForMaskedLM.from_pretrained("YituTech/conv-bert-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, ConvBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function qg(B){let d,g;return d=new ye({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function xg(B){let d,g,c,p,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Pg(B){let d,g,c,p,v;return p=new ye({props:{code:`import torch
from transformers import ConvBertTokenizer, ConvBertForSequenceClassification

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = ConvBertForSequenceClassification.from_pretrained("YituTech/conv-bert-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, ConvBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),g=n("Example of single-label classification:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example of single-label classification:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Og(B){let d,g;return d=new ye({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = ConvBertForSequenceClassification.from_pretrained("YituTech/conv-bert-base", num_labels=num_labels)

labels = torch.tensor([1])
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Ng(B){let d,g,c,p,v;return p=new ye({props:{code:`import torch
from transformers import ConvBertTokenizer, ConvBertForSequenceClassification

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = ConvBertForSequenceClassification.from_pretrained("YituTech/conv-bert-base", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, ConvBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),g=n("Example of multi-label classification:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example of multi-label classification:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Ag(B){let d,g;return d=new ye({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = ConvBertForSequenceClassification.from_pretrained(
    "YituTech/conv-bert-base", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Dg(B){let d,g,c,p,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Lg(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, ConvBertForMultipleChoice
import torch

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = ConvBertForMultipleChoice.from_pretrained("YituTech/conv-bert-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, ConvBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Sg(B){let d,g,c,p,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Ig(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, ConvBertForTokenClassification
import torch

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = ConvBertForTokenClassification.from_pretrained("YituTech/conv-bert-base")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, ConvBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

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
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Rg(B){let d,g;return d=new ye({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Wg(B){let d,g,c,p,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Ug(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, ConvBertForQuestionAnswering
import torch

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = ConvBertForQuestionAnswering.from_pretrained("YituTech/conv-bert-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, ConvBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Yg(B){let d,g;return d=new ye({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([14])
target_end_index = torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Hg(B){let d,g,c,p,v,l,f,M,de,K,z,X,S,ee,ce,I,pe,ae,Q,O,te,J,j,x,se,Y,ie,re,R,me,le,q,he,W,G,fe,L,ue,ge,P,_e,U,Z;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),v=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=m(),z=r("p"),X=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),pe=n("model(inputs)"),ae=n("."),Q=m(),O=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=m(),j=r("ul"),x=r("li"),se=n("a single Tensor with "),Y=r("code"),ie=n("input_ids"),re=n(" only and nothing else: "),R=r("code"),me=n("model(inputs_ids)"),le=m(),q=r("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),G=n("model([input_ids, attention_mask])"),fe=n(" or "),L=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ge=m(),P=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),Z=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(u),p=a(u,"UL",{});var V=i(p);v=a(V,"LI",{});var Be=i(v);l=s(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),f=h(V),M=a(V,"LI",{});var Ce=i(M);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=h(u),z=a(u,"P",{});var N=i(z);X=s(N,"This second option is useful when using "),S=a(N,"CODE",{});var Fe=i(S);ee=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),ce=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(N,"CODE",{});var oe=i(I);pe=s(oe,"model(inputs)"),oe.forEach(t),ae=s(N,"."),N.forEach(t),Q=h(u),O=a(u,"P",{});var be=i(O);te=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),J=h(u),j=a(u,"UL",{});var A=i(j);x=a(A,"LI",{});var D=i(x);se=s(D,"a single Tensor with "),Y=a(D,"CODE",{});var Ee=i(Y);ie=s(Ee,"input_ids"),Ee.forEach(t),re=s(D," only and nothing else: "),R=a(D,"CODE",{});var Te=i(R);me=s(Te,"model(inputs_ids)"),Te.forEach(t),D.forEach(t),le=h(A),q=a(A,"LI",{});var H=i(q);he=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(H,"CODE",{});var Me=i(W);G=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),fe=s(H," or "),L=a(H,"CODE",{});var ke=i(L);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),H.forEach(t),ge=h(A),P=a(A,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(ve,"CODE",{});var ze=i(U);Z=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),ve.forEach(t),A.forEach(t)},m(u,E){_(u,d,E),e(d,g),_(u,c,E),_(u,p,E),e(p,v),e(v,l),e(p,f),e(p,M),e(M,de),_(u,K,E),_(u,z,E),e(z,X),e(z,S),e(S,ee),e(z,ce),e(z,I),e(I,pe),e(z,ae),_(u,Q,E),_(u,O,E),e(O,te),_(u,J,E),_(u,j,E),e(j,x),e(x,se),e(x,Y),e(Y,ie),e(x,re),e(x,R),e(R,me),e(j,le),e(j,q),e(q,he),e(q,W),e(W,G),e(q,fe),e(q,L),e(L,ue),e(j,ge),e(j,P),e(P,_e),e(P,U),e(U,Z)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(K),u&&t(z),u&&t(Q),u&&t(O),u&&t(J),u&&t(j)}}}function Qg(B){let d,g,c,p,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Vg(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, TFConvBertModel
import tensorflow as tf

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = TFConvBertModel.from_pretrained("YituTech/conv-bert-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, TFConvBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFConvBertModel.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Kg(B){let d,g,c,p,v,l,f,M,de,K,z,X,S,ee,ce,I,pe,ae,Q,O,te,J,j,x,se,Y,ie,re,R,me,le,q,he,W,G,fe,L,ue,ge,P,_e,U,Z;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),v=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=m(),z=r("p"),X=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),pe=n("model(inputs)"),ae=n("."),Q=m(),O=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=m(),j=r("ul"),x=r("li"),se=n("a single Tensor with "),Y=r("code"),ie=n("input_ids"),re=n(" only and nothing else: "),R=r("code"),me=n("model(inputs_ids)"),le=m(),q=r("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),G=n("model([input_ids, attention_mask])"),fe=n(" or "),L=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ge=m(),P=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),Z=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(u),p=a(u,"UL",{});var V=i(p);v=a(V,"LI",{});var Be=i(v);l=s(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),f=h(V),M=a(V,"LI",{});var Ce=i(M);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=h(u),z=a(u,"P",{});var N=i(z);X=s(N,"This second option is useful when using "),S=a(N,"CODE",{});var Fe=i(S);ee=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),ce=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(N,"CODE",{});var oe=i(I);pe=s(oe,"model(inputs)"),oe.forEach(t),ae=s(N,"."),N.forEach(t),Q=h(u),O=a(u,"P",{});var be=i(O);te=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),J=h(u),j=a(u,"UL",{});var A=i(j);x=a(A,"LI",{});var D=i(x);se=s(D,"a single Tensor with "),Y=a(D,"CODE",{});var Ee=i(Y);ie=s(Ee,"input_ids"),Ee.forEach(t),re=s(D," only and nothing else: "),R=a(D,"CODE",{});var Te=i(R);me=s(Te,"model(inputs_ids)"),Te.forEach(t),D.forEach(t),le=h(A),q=a(A,"LI",{});var H=i(q);he=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(H,"CODE",{});var Me=i(W);G=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),fe=s(H," or "),L=a(H,"CODE",{});var ke=i(L);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),H.forEach(t),ge=h(A),P=a(A,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(ve,"CODE",{});var ze=i(U);Z=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),ve.forEach(t),A.forEach(t)},m(u,E){_(u,d,E),e(d,g),_(u,c,E),_(u,p,E),e(p,v),e(v,l),e(p,f),e(p,M),e(M,de),_(u,K,E),_(u,z,E),e(z,X),e(z,S),e(S,ee),e(z,ce),e(z,I),e(I,pe),e(z,ae),_(u,Q,E),_(u,O,E),e(O,te),_(u,J,E),_(u,j,E),e(j,x),e(x,se),e(x,Y),e(Y,ie),e(x,re),e(x,R),e(R,me),e(j,le),e(j,q),e(q,he),e(q,W),e(W,G),e(q,fe),e(q,L),e(L,ue),e(j,ge),e(j,P),e(P,_e),e(P,U),e(U,Z)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(K),u&&t(z),u&&t(Q),u&&t(O),u&&t(J),u&&t(j)}}}function Jg(B){let d,g,c,p,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Gg(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForMaskedLM
import tensorflow as tf

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = TFConvBertForMaskedLM.from_pretrained("YituTech/conv-bert-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, TFConvBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFConvBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Zg(B){let d,g;return d=new ye({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Xg(B){let d,g,c,p,v,l,f,M,de,K,z,X,S,ee,ce,I,pe,ae,Q,O,te,J,j,x,se,Y,ie,re,R,me,le,q,he,W,G,fe,L,ue,ge,P,_e,U,Z;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),v=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=m(),z=r("p"),X=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),pe=n("model(inputs)"),ae=n("."),Q=m(),O=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=m(),j=r("ul"),x=r("li"),se=n("a single Tensor with "),Y=r("code"),ie=n("input_ids"),re=n(" only and nothing else: "),R=r("code"),me=n("model(inputs_ids)"),le=m(),q=r("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),G=n("model([input_ids, attention_mask])"),fe=n(" or "),L=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ge=m(),P=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),Z=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(u),p=a(u,"UL",{});var V=i(p);v=a(V,"LI",{});var Be=i(v);l=s(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),f=h(V),M=a(V,"LI",{});var Ce=i(M);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=h(u),z=a(u,"P",{});var N=i(z);X=s(N,"This second option is useful when using "),S=a(N,"CODE",{});var Fe=i(S);ee=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),ce=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(N,"CODE",{});var oe=i(I);pe=s(oe,"model(inputs)"),oe.forEach(t),ae=s(N,"."),N.forEach(t),Q=h(u),O=a(u,"P",{});var be=i(O);te=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),J=h(u),j=a(u,"UL",{});var A=i(j);x=a(A,"LI",{});var D=i(x);se=s(D,"a single Tensor with "),Y=a(D,"CODE",{});var Ee=i(Y);ie=s(Ee,"input_ids"),Ee.forEach(t),re=s(D," only and nothing else: "),R=a(D,"CODE",{});var Te=i(R);me=s(Te,"model(inputs_ids)"),Te.forEach(t),D.forEach(t),le=h(A),q=a(A,"LI",{});var H=i(q);he=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(H,"CODE",{});var Me=i(W);G=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),fe=s(H," or "),L=a(H,"CODE",{});var ke=i(L);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),H.forEach(t),ge=h(A),P=a(A,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(ve,"CODE",{});var ze=i(U);Z=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),ve.forEach(t),A.forEach(t)},m(u,E){_(u,d,E),e(d,g),_(u,c,E),_(u,p,E),e(p,v),e(v,l),e(p,f),e(p,M),e(M,de),_(u,K,E),_(u,z,E),e(z,X),e(z,S),e(S,ee),e(z,ce),e(z,I),e(I,pe),e(z,ae),_(u,Q,E),_(u,O,E),e(O,te),_(u,J,E),_(u,j,E),e(j,x),e(x,se),e(x,Y),e(Y,ie),e(x,re),e(x,R),e(R,me),e(j,le),e(j,q),e(q,he),e(q,W),e(W,G),e(q,fe),e(q,L),e(L,ue),e(j,ge),e(j,P),e(P,_e),e(P,U),e(U,Z)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(K),u&&t(z),u&&t(Q),u&&t(O),u&&t(J),u&&t(j)}}}function e_(B){let d,g,c,p,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function t_(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForSequenceClassification
import tensorflow as tf

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = TFConvBertForSequenceClassification.from_pretrained("YituTech/conv-bert-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, TFConvBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFConvBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function o_(B){let d,g;return d=new ye({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFConvBertForSequenceClassification.from_pretrained("YituTech/conv-bert-base", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFConvBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function n_(B){let d,g,c,p,v,l,f,M,de,K,z,X,S,ee,ce,I,pe,ae,Q,O,te,J,j,x,se,Y,ie,re,R,me,le,q,he,W,G,fe,L,ue,ge,P,_e,U,Z;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),v=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=m(),z=r("p"),X=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),pe=n("model(inputs)"),ae=n("."),Q=m(),O=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=m(),j=r("ul"),x=r("li"),se=n("a single Tensor with "),Y=r("code"),ie=n("input_ids"),re=n(" only and nothing else: "),R=r("code"),me=n("model(inputs_ids)"),le=m(),q=r("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),G=n("model([input_ids, attention_mask])"),fe=n(" or "),L=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ge=m(),P=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),Z=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(u),p=a(u,"UL",{});var V=i(p);v=a(V,"LI",{});var Be=i(v);l=s(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),f=h(V),M=a(V,"LI",{});var Ce=i(M);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=h(u),z=a(u,"P",{});var N=i(z);X=s(N,"This second option is useful when using "),S=a(N,"CODE",{});var Fe=i(S);ee=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),ce=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(N,"CODE",{});var oe=i(I);pe=s(oe,"model(inputs)"),oe.forEach(t),ae=s(N,"."),N.forEach(t),Q=h(u),O=a(u,"P",{});var be=i(O);te=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),J=h(u),j=a(u,"UL",{});var A=i(j);x=a(A,"LI",{});var D=i(x);se=s(D,"a single Tensor with "),Y=a(D,"CODE",{});var Ee=i(Y);ie=s(Ee,"input_ids"),Ee.forEach(t),re=s(D," only and nothing else: "),R=a(D,"CODE",{});var Te=i(R);me=s(Te,"model(inputs_ids)"),Te.forEach(t),D.forEach(t),le=h(A),q=a(A,"LI",{});var H=i(q);he=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(H,"CODE",{});var Me=i(W);G=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),fe=s(H," or "),L=a(H,"CODE",{});var ke=i(L);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),H.forEach(t),ge=h(A),P=a(A,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(ve,"CODE",{});var ze=i(U);Z=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),ve.forEach(t),A.forEach(t)},m(u,E){_(u,d,E),e(d,g),_(u,c,E),_(u,p,E),e(p,v),e(v,l),e(p,f),e(p,M),e(M,de),_(u,K,E),_(u,z,E),e(z,X),e(z,S),e(S,ee),e(z,ce),e(z,I),e(I,pe),e(z,ae),_(u,Q,E),_(u,O,E),e(O,te),_(u,J,E),_(u,j,E),e(j,x),e(x,se),e(x,Y),e(Y,ie),e(x,re),e(x,R),e(R,me),e(j,le),e(j,q),e(q,he),e(q,W),e(W,G),e(q,fe),e(q,L),e(L,ue),e(j,ge),e(j,P),e(P,_e),e(P,U),e(U,Z)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(K),u&&t(z),u&&t(Q),u&&t(O),u&&t(J),u&&t(j)}}}function s_(B){let d,g,c,p,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function r_(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForMultipleChoice
import tensorflow as tf

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = TFConvBertForMultipleChoice.from_pretrained("YituTech/conv-bert-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, TFConvBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFConvBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function a_(B){let d,g,c,p,v,l,f,M,de,K,z,X,S,ee,ce,I,pe,ae,Q,O,te,J,j,x,se,Y,ie,re,R,me,le,q,he,W,G,fe,L,ue,ge,P,_e,U,Z;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),v=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=m(),z=r("p"),X=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),pe=n("model(inputs)"),ae=n("."),Q=m(),O=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=m(),j=r("ul"),x=r("li"),se=n("a single Tensor with "),Y=r("code"),ie=n("input_ids"),re=n(" only and nothing else: "),R=r("code"),me=n("model(inputs_ids)"),le=m(),q=r("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),G=n("model([input_ids, attention_mask])"),fe=n(" or "),L=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ge=m(),P=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),Z=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(u),p=a(u,"UL",{});var V=i(p);v=a(V,"LI",{});var Be=i(v);l=s(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),f=h(V),M=a(V,"LI",{});var Ce=i(M);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=h(u),z=a(u,"P",{});var N=i(z);X=s(N,"This second option is useful when using "),S=a(N,"CODE",{});var Fe=i(S);ee=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),ce=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(N,"CODE",{});var oe=i(I);pe=s(oe,"model(inputs)"),oe.forEach(t),ae=s(N,"."),N.forEach(t),Q=h(u),O=a(u,"P",{});var be=i(O);te=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),J=h(u),j=a(u,"UL",{});var A=i(j);x=a(A,"LI",{});var D=i(x);se=s(D,"a single Tensor with "),Y=a(D,"CODE",{});var Ee=i(Y);ie=s(Ee,"input_ids"),Ee.forEach(t),re=s(D," only and nothing else: "),R=a(D,"CODE",{});var Te=i(R);me=s(Te,"model(inputs_ids)"),Te.forEach(t),D.forEach(t),le=h(A),q=a(A,"LI",{});var H=i(q);he=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(H,"CODE",{});var Me=i(W);G=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),fe=s(H," or "),L=a(H,"CODE",{});var ke=i(L);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),H.forEach(t),ge=h(A),P=a(A,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(ve,"CODE",{});var ze=i(U);Z=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),ve.forEach(t),A.forEach(t)},m(u,E){_(u,d,E),e(d,g),_(u,c,E),_(u,p,E),e(p,v),e(v,l),e(p,f),e(p,M),e(M,de),_(u,K,E),_(u,z,E),e(z,X),e(z,S),e(S,ee),e(z,ce),e(z,I),e(I,pe),e(z,ae),_(u,Q,E),_(u,O,E),e(O,te),_(u,J,E),_(u,j,E),e(j,x),e(x,se),e(x,Y),e(Y,ie),e(x,re),e(x,R),e(R,me),e(j,le),e(j,q),e(q,he),e(q,W),e(W,G),e(q,fe),e(q,L),e(L,ue),e(j,ge),e(j,P),e(P,_e),e(P,U),e(U,Z)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(K),u&&t(z),u&&t(Q),u&&t(O),u&&t(J),u&&t(j)}}}function i_(B){let d,g,c,p,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function l_(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForTokenClassification
import tensorflow as tf

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = TFConvBertForTokenClassification.from_pretrained("YituTech/conv-bert-base")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, TFConvBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFConvBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

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
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function d_(B){let d,g;return d=new ye({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function c_(B){let d,g,c,p,v,l,f,M,de,K,z,X,S,ee,ce,I,pe,ae,Q,O,te,J,j,x,se,Y,ie,re,R,me,le,q,he,W,G,fe,L,ue,ge,P,_e,U,Z;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),v=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=m(),z=r("p"),X=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),pe=n("model(inputs)"),ae=n("."),Q=m(),O=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=m(),j=r("ul"),x=r("li"),se=n("a single Tensor with "),Y=r("code"),ie=n("input_ids"),re=n(" only and nothing else: "),R=r("code"),me=n("model(inputs_ids)"),le=m(),q=r("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),G=n("model([input_ids, attention_mask])"),fe=n(" or "),L=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ge=m(),P=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),Z=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(u),p=a(u,"UL",{});var V=i(p);v=a(V,"LI",{});var Be=i(v);l=s(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),f=h(V),M=a(V,"LI",{});var Ce=i(M);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=h(u),z=a(u,"P",{});var N=i(z);X=s(N,"This second option is useful when using "),S=a(N,"CODE",{});var Fe=i(S);ee=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),ce=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(N,"CODE",{});var oe=i(I);pe=s(oe,"model(inputs)"),oe.forEach(t),ae=s(N,"."),N.forEach(t),Q=h(u),O=a(u,"P",{});var be=i(O);te=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),J=h(u),j=a(u,"UL",{});var A=i(j);x=a(A,"LI",{});var D=i(x);se=s(D,"a single Tensor with "),Y=a(D,"CODE",{});var Ee=i(Y);ie=s(Ee,"input_ids"),Ee.forEach(t),re=s(D," only and nothing else: "),R=a(D,"CODE",{});var Te=i(R);me=s(Te,"model(inputs_ids)"),Te.forEach(t),D.forEach(t),le=h(A),q=a(A,"LI",{});var H=i(q);he=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(H,"CODE",{});var Me=i(W);G=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),fe=s(H," or "),L=a(H,"CODE",{});var ke=i(L);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),H.forEach(t),ge=h(A),P=a(A,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(ve,"CODE",{});var ze=i(U);Z=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),ve.forEach(t),A.forEach(t)},m(u,E){_(u,d,E),e(d,g),_(u,c,E),_(u,p,E),e(p,v),e(v,l),e(p,f),e(p,M),e(M,de),_(u,K,E),_(u,z,E),e(z,X),e(z,S),e(S,ee),e(z,ce),e(z,I),e(I,pe),e(z,ae),_(u,Q,E),_(u,O,E),e(O,te),_(u,J,E),_(u,j,E),e(j,x),e(x,se),e(x,Y),e(Y,ie),e(x,re),e(x,R),e(R,me),e(j,le),e(j,q),e(q,he),e(q,W),e(W,G),e(q,fe),e(q,L),e(L,ue),e(j,ge),e(j,P),e(P,_e),e(P,U),e(U,Z)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(K),u&&t(z),u&&t(Q),u&&t(O),u&&t(J),u&&t(j)}}}function p_(B){let d,g,c,p,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function m_(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForQuestionAnswering
import tensorflow as tf

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = TFConvBertForQuestionAnswering.from_pretrained("YituTech/conv-bert-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, TFConvBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFConvBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=r("p"),g=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function h_(B){let d,g;return d=new ye({props:{code:`# target is "nice puppet"
target_start_index = tf.constant([14])
target_end_index = tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function f_(B){let d,g,c,p,v,l,f,M,de,K,z,X,S,ee,ce,I,pe,ae,Q,O,te,J,j,x,se,Y,ie,re,R,me,le,q,he,W,G,fe,L,ue,ge,P,_e,U,Z,u,E,V,Be,Ce,N,Fe,oe,be,A,D,Ee,Te,H,Me,ke,ve,ze,Dl,Ct,Ll,Zs,Sl,Il,Xs,Rl,Wl,Ul,ro,Ei,Ft,ao,Hr,$n,Yl,Qr,Hl,Mi,xe,wn,Ql,mt,Vl,er,Kl,Jl,tr,Gl,Zl,or,Xl,ed,td,_t,yn,od,Vr,nd,sd,Cn,nr,rd,Kr,ad,id,sr,ld,Jr,dd,cd,io,Fn,pd,Bn,md,Gr,hd,fd,ud,tt,En,gd,Zr,_d,vd,lo,bd,Bt,kd,Xr,Td,$d,ea,wd,yd,Cd,rr,Mn,zi,Et,co,ta,zn,Fd,oa,Bd,ji,Je,jn,Ed,qn,Md,na,zd,jd,qd,po,ar,xd,Pd,ir,Od,Nd,Ad,xn,Dd,lr,Ld,Sd,qi,Mt,mo,sa,Pn,Id,ra,Rd,xi,ht,On,Wd,Nn,Ud,An,Yd,Hd,Qd,ot,Dn,Vd,zt,Kd,dr,Jd,Gd,aa,Zd,Xd,ec,ho,tc,fo,Pi,jt,uo,ia,Ln,oc,la,nc,Oi,ft,Sn,sc,qt,rc,da,ac,ic,In,lc,dc,cc,Re,Rn,pc,xt,mc,cr,hc,fc,ca,uc,gc,_c,go,vc,_o,bc,vo,Ni,Pt,bo,pa,Wn,kc,ma,Tc,Ai,Ge,Un,$c,ha,wc,yc,Yn,Cc,Hn,Fc,Bc,Ec,je,Qn,Mc,Ot,zc,pr,jc,qc,fa,xc,Pc,Oc,ko,Nc,To,Ac,$o,Dc,wo,Lc,yo,Di,Nt,Co,ua,Vn,Sc,ga,Ic,Li,Ze,Kn,Rc,_a,Wc,Uc,Jn,Yc,Gn,Hc,Qc,Vc,nt,Zn,Kc,At,Jc,mr,Gc,Zc,va,Xc,ep,tp,Fo,op,Bo,Si,Dt,Eo,ba,Xn,np,ka,sp,Ii,Xe,es,rp,Ta,ap,ip,ts,lp,os,dp,cp,pp,We,ns,mp,Lt,hp,hr,fp,up,$a,gp,_p,vp,Mo,bp,zo,kp,jo,Ri,St,qo,wa,ss,Tp,ya,$p,Wi,et,rs,wp,It,yp,Ca,Cp,Fp,Fa,Bp,Ep,Mp,as,zp,is,jp,qp,xp,Ue,ls,Pp,Rt,Op,fr,Np,Ap,Ba,Dp,Lp,Sp,xo,Ip,Po,Rp,Oo,Ui,Wt,No,Ea,ds,Wp,Ma,Up,Yi,Pe,cs,Yp,za,Hp,Qp,ps,Vp,ur,Kp,Jp,Gp,ms,Zp,hs,Xp,em,tm,Ao,om,st,fs,nm,Ut,sm,gr,rm,am,ja,im,lm,dm,Do,cm,Lo,Hi,Yt,So,qa,us,pm,xa,mm,Qi,Oe,gs,hm,_s,fm,Pa,um,gm,_m,vs,vm,_r,bm,km,Tm,bs,$m,ks,wm,ym,Cm,Io,Fm,Ye,Ts,Bm,Ht,Em,vr,Mm,zm,Oa,jm,qm,xm,Ro,Pm,Wo,Om,Uo,Vi,Qt,Yo,Na,$s,Nm,Aa,Am,Ki,Ne,ws,Dm,Da,Lm,Sm,ys,Im,br,Rm,Wm,Um,Cs,Ym,Fs,Hm,Qm,Vm,Ho,Km,He,Bs,Jm,Vt,Gm,kr,Zm,Xm,La,eh,th,oh,Qo,nh,Vo,sh,Ko,Ji,Kt,Jo,Sa,Es,rh,Ia,ah,Gi,Ae,Ms,ih,Ra,lh,dh,zs,ch,Tr,ph,mh,hh,js,fh,qs,uh,gh,_h,Go,vh,rt,xs,bh,Jt,kh,$r,Th,$h,Wa,wh,yh,Ch,Zo,Fh,Xo,Zi,Gt,en,Ua,Ps,Bh,Ya,Eh,Xi,De,Os,Mh,Ha,zh,jh,Ns,qh,wr,xh,Ph,Oh,As,Nh,Ds,Ah,Dh,Lh,tn,Sh,Qe,Ls,Ih,Zt,Rh,yr,Wh,Uh,Qa,Yh,Hh,Qh,on,Vh,nn,Kh,sn,el,Xt,rn,Va,Ss,Jh,Ka,Gh,tl,Le,Is,Zh,eo,Xh,Ja,ef,tf,Ga,of,nf,sf,Rs,rf,Cr,af,lf,df,Ws,cf,Us,pf,mf,hf,an,ff,Ve,Ys,uf,to,gf,Fr,_f,vf,Za,bf,kf,Tf,ln,$f,dn,wf,cn,ol;return l=new Se({}),ee=new Se({}),V=new Se({}),be=new ne({props:{name:"class transformers.ConvBertConfig",anchor:"transformers.ConvBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"is_encoder_decoder",val:" = False"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"embedding_size",val:" = 768"},{name:"head_ratio",val:" = 2"},{name:"conv_kernel_size",val:" = 9"},{name:"num_groups",val:" = 1"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ConvBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the ConvBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertModel">ConvBertModel</a> or <a href="/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertModel">TFConvBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.ConvBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.ConvBertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.ConvBertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.ConvBertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.ConvBertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.ConvBertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.ConvBertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.ConvBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.ConvBertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertModel">ConvBertModel</a> or <a href="/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertModel">TFConvBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.ConvBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.ConvBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.ConvBertConfig.head_ratio",description:`<strong>head_ratio</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Ratio gamma to reduce the number of attention heads.`,name:"head_ratio"},{anchor:"transformers.ConvBertConfig.num_groups",description:`<strong>num_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of groups for grouped linear layers for ConvBert model`,name:"num_groups"},{anchor:"transformers.ConvBertConfig.conv_kernel_size",description:`<strong>conv_kernel_size</strong> (<code>int</code>, <em>optional</em>, defaults to 9) &#x2014;
The size of the convolutional kernel.`,name:"conv_kernel_size"},{anchor:"transformers.ConvBertConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/configuration_convbert.py#L37"}}),ro=new $e({props:{anchor:"transformers.ConvBertConfig.example",$$slots:{default:[Fg]},$$scope:{ctx:B}}}),$n=new Se({}),wn=new ne({props:{name:"class transformers.ConvBertTokenizer",anchor:"transformers.ConvBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/tokenization_convbert.py#L48"}}),yn=new ne({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.ConvBertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.ConvBertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.ConvBertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L268",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Fn=new ne({props:{name:"get_special_tokens_mask",anchor:"transformers.ConvBertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.ConvBertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ConvBertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.ConvBertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L293",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),En=new ne({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.ConvBertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.ConvBertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ConvBertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L321",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),lo=new $e({props:{anchor:"transformers.ConvBertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Bg]},$$scope:{ctx:B}}}),Mn=new ne({props:{name:"save_vocabulary",anchor:"transformers.ConvBertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L350"}}),zn=new Se({}),jn=new ne({props:{name:"class transformers.ConvBertTokenizerFast",anchor:"transformers.ConvBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/tokenization_convbert_fast.py#L49"}}),Pn=new Se({}),On=new ne({props:{name:"class transformers.ConvBertModel",anchor:"transformers.ConvBertModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L773"}}),Dn=new ne({props:{name:"forward",anchor:"transformers.ConvBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L800",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ho=new qe({props:{$$slots:{default:[Eg]},$$scope:{ctx:B}}}),fo=new $e({props:{anchor:"transformers.ConvBertModel.forward.example",$$slots:{default:[Mg]},$$scope:{ctx:B}}}),Ln=new Se({}),Sn=new ne({props:{name:"class transformers.ConvBertForMaskedLM",anchor:"transformers.ConvBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L887"}}),Rn=new ne({props:{name:"forward",anchor:"transformers.ConvBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L904",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),go=new qe({props:{$$slots:{default:[zg]},$$scope:{ctx:B}}}),_o=new $e({props:{anchor:"transformers.ConvBertForMaskedLM.forward.example",$$slots:{default:[jg]},$$scope:{ctx:B}}}),vo=new $e({props:{anchor:"transformers.ConvBertForMaskedLM.forward.example-2",$$slots:{default:[qg]},$$scope:{ctx:B}}}),Wn=new Se({}),Un=new ne({props:{name:"class transformers.ConvBertForSequenceClassification",anchor:"transformers.ConvBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L997"}}),Qn=new ne({props:{name:"forward",anchor:"transformers.ConvBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L1008",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ko=new qe({props:{$$slots:{default:[xg]},$$scope:{ctx:B}}}),To=new $e({props:{anchor:"transformers.ConvBertForSequenceClassification.forward.example",$$slots:{default:[Pg]},$$scope:{ctx:B}}}),$o=new $e({props:{anchor:"transformers.ConvBertForSequenceClassification.forward.example-2",$$slots:{default:[Og]},$$scope:{ctx:B}}}),wo=new $e({props:{anchor:"transformers.ConvBertForSequenceClassification.forward.example-3",$$slots:{default:[Ng]},$$scope:{ctx:B}}}),yo=new $e({props:{anchor:"transformers.ConvBertForSequenceClassification.forward.example-4",$$slots:{default:[Ag]},$$scope:{ctx:B}}}),Vn=new Se({}),Kn=new ne({props:{name:"class transformers.ConvBertForMultipleChoice",anchor:"transformers.ConvBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L1093"}}),Zn=new ne({props:{name:"forward",anchor:"transformers.ConvBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L1104",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fo=new qe({props:{$$slots:{default:[Dg]},$$scope:{ctx:B}}}),Bo=new $e({props:{anchor:"transformers.ConvBertForMultipleChoice.forward.example",$$slots:{default:[Lg]},$$scope:{ctx:B}}}),Xn=new Se({}),es=new ne({props:{name:"class transformers.ConvBertForTokenClassification",anchor:"transformers.ConvBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L1187"}}),ns=new ne({props:{name:"forward",anchor:"transformers.ConvBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L1202",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mo=new qe({props:{$$slots:{default:[Sg]},$$scope:{ctx:B}}}),zo=new $e({props:{anchor:"transformers.ConvBertForTokenClassification.forward.example",$$slots:{default:[Ig]},$$scope:{ctx:B}}}),jo=new $e({props:{anchor:"transformers.ConvBertForTokenClassification.forward.example-2",$$slots:{default:[Rg]},$$scope:{ctx:B}}}),ss=new Se({}),rs=new ne({props:{name:"class transformers.ConvBertForQuestionAnswering",anchor:"transformers.ConvBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L1269"}}),ls=new ne({props:{name:"forward",anchor:"transformers.ConvBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L1280",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xo=new qe({props:{$$slots:{default:[Wg]},$$scope:{ctx:B}}}),Po=new $e({props:{anchor:"transformers.ConvBertForQuestionAnswering.forward.example",$$slots:{default:[Ug]},$$scope:{ctx:B}}}),Oo=new $e({props:{anchor:"transformers.ConvBertForQuestionAnswering.forward.example-2",$$slots:{default:[Yg]},$$scope:{ctx:B}}}),ds=new Se({}),cs=new ne({props:{name:"class transformers.TFConvBertModel",anchor:"transformers.TFConvBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L726"}}),Ao=new qe({props:{$$slots:{default:[Hg]},$$scope:{ctx:B}}}),fs=new ne({props:{name:"call",anchor:"transformers.TFConvBertModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFConvBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFConvBertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFConvBertModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFConvBertModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFConvBertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFConvBertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFConvBertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFConvBertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFConvBertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L732",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Do=new qe({props:{$$slots:{default:[Qg]},$$scope:{ctx:B}}}),Lo=new $e({props:{anchor:"transformers.TFConvBertModel.call.example",$$slots:{default:[Vg]},$$scope:{ctx:B}}}),us=new Se({}),gs=new ne({props:{name:"class transformers.TFConvBertForMaskedLM",anchor:"transformers.TFConvBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L828"}}),Io=new qe({props:{$$slots:{default:[Kg]},$$scope:{ctx:B}}}),Ts=new ne({props:{name:"call",anchor:"transformers.TFConvBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFConvBertForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFConvBertForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFConvBertForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFConvBertForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFConvBertForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFConvBertForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFConvBertForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFConvBertForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L849",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ro=new qe({props:{$$slots:{default:[Jg]},$$scope:{ctx:B}}}),Wo=new $e({props:{anchor:"transformers.TFConvBertForMaskedLM.call.example",$$slots:{default:[Gg]},$$scope:{ctx:B}}}),Uo=new $e({props:{anchor:"transformers.TFConvBertForMaskedLM.call.example-2",$$slots:{default:[Zg]},$$scope:{ctx:B}}}),$s=new Se({}),ws=new ne({props:{name:"class transformers.TFConvBertForSequenceClassification",anchor:"transformers.TFConvBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L950"}}),Ho=new qe({props:{$$slots:{default:[Xg]},$$scope:{ctx:B}}}),Bs=new ne({props:{name:"call",anchor:"transformers.TFConvBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFConvBertForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFConvBertForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFConvBertForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFConvBertForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFConvBertForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFConvBertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFConvBertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFConvBertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L957",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qo=new qe({props:{$$slots:{default:[e_]},$$scope:{ctx:B}}}),Vo=new $e({props:{anchor:"transformers.TFConvBertForSequenceClassification.call.example",$$slots:{default:[t_]},$$scope:{ctx:B}}}),Ko=new $e({props:{anchor:"transformers.TFConvBertForSequenceClassification.call.example-2",$$slots:{default:[o_]},$$scope:{ctx:B}}}),Es=new Se({}),Ms=new ne({props:{name:"class transformers.TFConvBertForMultipleChoice",anchor:"transformers.TFConvBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L1026"}}),Go=new qe({props:{$$slots:{default:[n_]},$$scope:{ctx:B}}}),xs=new ne({props:{name:"call",anchor:"transformers.TFConvBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFConvBertForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFConvBertForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFConvBertForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFConvBertForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFConvBertForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFConvBertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFConvBertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFConvBertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L1048",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Zo=new qe({props:{$$slots:{default:[s_]},$$scope:{ctx:B}}}),Xo=new $e({props:{anchor:"transformers.TFConvBertForMultipleChoice.call.example",$$slots:{default:[r_]},$$scope:{ctx:B}}}),Ps=new Se({}),Os=new ne({props:{name:"class transformers.TFConvBertForTokenClassification",anchor:"transformers.TFConvBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L1150"}}),tn=new qe({props:{$$slots:{default:[a_]},$$scope:{ctx:B}}}),Ls=new ne({props:{name:"call",anchor:"transformers.TFConvBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFConvBertForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFConvBertForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFConvBertForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFConvBertForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFConvBertForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFConvBertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFConvBertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFConvBertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L1164",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),on=new qe({props:{$$slots:{default:[i_]},$$scope:{ctx:B}}}),nn=new $e({props:{anchor:"transformers.TFConvBertForTokenClassification.call.example",$$slots:{default:[l_]},$$scope:{ctx:B}}}),sn=new $e({props:{anchor:"transformers.TFConvBertForTokenClassification.call.example-2",$$slots:{default:[d_]},$$scope:{ctx:B}}}),Ss=new Se({}),Is=new ne({props:{name:"class transformers.TFConvBertForQuestionAnswering",anchor:"transformers.TFConvBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L1232"}}),an=new qe({props:{$$slots:{default:[c_]},$$scope:{ctx:B}}}),Ys=new ne({props:{name:"call",anchor:"transformers.TFConvBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"end_positions",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L1242",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ln=new qe({props:{$$slots:{default:[p_]},$$scope:{ctx:B}}}),dn=new $e({props:{anchor:"transformers.TFConvBertForQuestionAnswering.call.example",$$slots:{default:[m_]},$$scope:{ctx:B}}}),cn=new $e({props:{anchor:"transformers.TFConvBertForQuestionAnswering.call.example-2",$$slots:{default:[h_]},$$scope:{ctx:B}}}),{c(){d=r("meta"),g=m(),c=r("h1"),p=r("a"),v=r("span"),T(l.$$.fragment),f=m(),M=r("span"),de=n("ConvBERT"),K=m(),z=r("h2"),X=r("a"),S=r("span"),T(ee.$$.fragment),ce=m(),I=r("span"),pe=n("Overview"),ae=m(),Q=r("p"),O=n("The ConvBERT model was proposed in "),te=r("a"),J=n("ConvBERT: Improving BERT with Span-based Dynamic Convolution"),j=n(` by Zihang Jiang, Weihao Yu, Daquan Zhou, Yunpeng Chen, Jiashi Feng, Shuicheng
Yan.`),x=m(),se=r("p"),Y=n("The abstract from the paper is the following:"),ie=m(),re=r("p"),R=r("em"),me=n(`Pre-trained language models like BERT and its variants have recently achieved impressive performance in various
natural language understanding tasks. However, BERT heavily relies on the global self-attention block and thus suffers
large memory footprint and computation cost. Although all its attention heads query on the whole input sequence for
generating the attention map from a global perspective, we observe some heads only need to learn local dependencies,
which means the existence of computation redundancy. We therefore propose a novel span-based dynamic convolution to
replace these self-attention heads to directly model local dependencies. The novel convolution heads, together with the
rest self-attention heads, form a new mixed attention block that is more efficient at both global and local context
learning. We equip BERT with this mixed attention design and build a ConvBERT model. Experiments have shown that
ConvBERT significantly outperforms BERT and its variants in various downstream tasks, with lower training cost and
fewer model parameters. Remarkably, ConvBERTbase model achieves 86.4 GLUE score, 0.7 higher than ELECTRAbase, while
using less than 1/4 training cost. Code and pre-trained models will be released.`),le=m(),q=r("p"),he=n("ConvBERT training tips are similar to those of BERT."),W=m(),G=r("p"),fe=n("This model was contributed by "),L=r("a"),ue=n("abhishek"),ge=n(`. The original implementation can be found
here: `),P=r("a"),_e=n("https://github.com/yitu-opensource/ConvBert"),U=m(),Z=r("h2"),u=r("a"),E=r("span"),T(V.$$.fragment),Be=m(),Ce=r("span"),N=n("ConvBertConfig"),Fe=m(),oe=r("div"),T(be.$$.fragment),A=m(),D=r("p"),Ee=n("This is the configuration class to store the configuration of a "),Te=r("a"),H=n("ConvBertModel"),Me=n(`. It is used to instantiate an
ConvBERT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the ConvBERT
`),ke=r("a"),ve=n("YituTech/conv-bert-base"),ze=n(" architecture."),Dl=m(),Ct=r("p"),Ll=n("Configuration objects inherit from "),Zs=r("a"),Sl=n("PretrainedConfig"),Il=n(` and can be used to control the model outputs. Read the
documentation from `),Xs=r("a"),Rl=n("PretrainedConfig"),Wl=n(" for more information."),Ul=m(),T(ro.$$.fragment),Ei=m(),Ft=r("h2"),ao=r("a"),Hr=r("span"),T($n.$$.fragment),Yl=m(),Qr=r("span"),Hl=n("ConvBertTokenizer"),Mi=m(),xe=r("div"),T(wn.$$.fragment),Ql=m(),mt=r("p"),Vl=n("Construct a ConvBERT tokenizer. "),er=r("a"),Kl=n("ConvBertTokenizer"),Jl=n(" is identical to "),tr=r("a"),Gl=n("BertTokenizer"),Zl=n(` and runs end-to-end
tokenization: punctuation splitting and wordpiece. Refer to superclass `),or=r("a"),Xl=n("BertTokenizer"),ed=n(` for usage examples and
documentation concerning parameters.`),td=m(),_t=r("div"),T(yn.$$.fragment),od=m(),Vr=r("p"),nd=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),sd=m(),Cn=r("ul"),nr=r("li"),rd=n("single sequence: "),Kr=r("code"),ad=n("[CLS] X [SEP]"),id=m(),sr=r("li"),ld=n("pair of sequences: "),Jr=r("code"),dd=n("[CLS] A [SEP] B [SEP]"),cd=m(),io=r("div"),T(Fn.$$.fragment),pd=m(),Bn=r("p"),md=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Gr=r("code"),hd=n("prepare_for_model"),fd=n(" method."),ud=m(),tt=r("div"),T(En.$$.fragment),gd=m(),Zr=r("p"),_d=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),vd=m(),T(lo.$$.fragment),bd=m(),Bt=r("p"),kd=n("If "),Xr=r("code"),Td=n("token_ids_1"),$d=n(" is "),ea=r("code"),wd=n("None"),yd=n(", this method only returns the first portion of the mask (0s)."),Cd=m(),rr=r("div"),T(Mn.$$.fragment),zi=m(),Et=r("h2"),co=r("a"),ta=r("span"),T(zn.$$.fragment),Fd=m(),oa=r("span"),Bd=n("ConvBertTokenizerFast"),ji=m(),Je=r("div"),T(jn.$$.fragment),Ed=m(),qn=r("p"),Md=n("Construct a \u201Cfast\u201D ConvBERT tokenizer (backed by HuggingFace\u2019s "),na=r("em"),zd=n("tokenizers"),jd=n(" library)."),qd=m(),po=r("p"),ar=r("a"),xd=n("ConvBertTokenizerFast"),Pd=n(" is identical to "),ir=r("a"),Od=n("BertTokenizerFast"),Nd=n(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Ad=m(),xn=r("p"),Dd=n("Refer to superclass "),lr=r("a"),Ld=n("BertTokenizerFast"),Sd=n(" for usage examples and documentation concerning parameters."),qi=m(),Mt=r("h2"),mo=r("a"),sa=r("span"),T(Pn.$$.fragment),Id=m(),ra=r("span"),Rd=n("ConvBertModel"),xi=m(),ht=r("div"),T(On.$$.fragment),Wd=m(),Nn=r("p"),Ud=n(`The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),An=r("a"),Yd=n("torch.nn.Module"),Hd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qd=m(),ot=r("div"),T(Dn.$$.fragment),Vd=m(),zt=r("p"),Kd=n("The "),dr=r("a"),Jd=n("ConvBertModel"),Gd=n(" forward method, overrides the "),aa=r("code"),Zd=n("__call__"),Xd=n(" special method."),ec=m(),T(ho.$$.fragment),tc=m(),T(fo.$$.fragment),Pi=m(),jt=r("h2"),uo=r("a"),ia=r("span"),T(Ln.$$.fragment),oc=m(),la=r("span"),nc=n("ConvBertForMaskedLM"),Oi=m(),ft=r("div"),T(Sn.$$.fragment),sc=m(),qt=r("p"),rc=n("ConvBERT Model with a "),da=r("code"),ac=n("language modeling"),ic=n(` head on top.
This model is a PyTorch `),In=r("a"),lc=n("torch.nn.Module"),dc=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cc=m(),Re=r("div"),T(Rn.$$.fragment),pc=m(),xt=r("p"),mc=n("The "),cr=r("a"),hc=n("ConvBertForMaskedLM"),fc=n(" forward method, overrides the "),ca=r("code"),uc=n("__call__"),gc=n(" special method."),_c=m(),T(go.$$.fragment),vc=m(),T(_o.$$.fragment),bc=m(),T(vo.$$.fragment),Ni=m(),Pt=r("h2"),bo=r("a"),pa=r("span"),T(Wn.$$.fragment),kc=m(),ma=r("span"),Tc=n("ConvBertForSequenceClassification"),Ai=m(),Ge=r("div"),T(Un.$$.fragment),$c=m(),ha=r("p"),wc=n(`ConvBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),yc=m(),Yn=r("p"),Cc=n("This model is a PyTorch "),Hn=r("a"),Fc=n("torch.nn.Module"),Bc=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ec=m(),je=r("div"),T(Qn.$$.fragment),Mc=m(),Ot=r("p"),zc=n("The "),pr=r("a"),jc=n("ConvBertForSequenceClassification"),qc=n(" forward method, overrides the "),fa=r("code"),xc=n("__call__"),Pc=n(" special method."),Oc=m(),T(ko.$$.fragment),Nc=m(),T(To.$$.fragment),Ac=m(),T($o.$$.fragment),Dc=m(),T(wo.$$.fragment),Lc=m(),T(yo.$$.fragment),Di=m(),Nt=r("h2"),Co=r("a"),ua=r("span"),T(Vn.$$.fragment),Sc=m(),ga=r("span"),Ic=n("ConvBertForMultipleChoice"),Li=m(),Ze=r("div"),T(Kn.$$.fragment),Rc=m(),_a=r("p"),Wc=n(`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Uc=m(),Jn=r("p"),Yc=n("This model is a PyTorch "),Gn=r("a"),Hc=n("torch.nn.Module"),Qc=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vc=m(),nt=r("div"),T(Zn.$$.fragment),Kc=m(),At=r("p"),Jc=n("The "),mr=r("a"),Gc=n("ConvBertForMultipleChoice"),Zc=n(" forward method, overrides the "),va=r("code"),Xc=n("__call__"),ep=n(" special method."),tp=m(),T(Fo.$$.fragment),op=m(),T(Bo.$$.fragment),Si=m(),Dt=r("h2"),Eo=r("a"),ba=r("span"),T(Xn.$$.fragment),np=m(),ka=r("span"),sp=n("ConvBertForTokenClassification"),Ii=m(),Xe=r("div"),T(es.$$.fragment),rp=m(),Ta=r("p"),ap=n(`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ip=m(),ts=r("p"),lp=n("This model is a PyTorch "),os=r("a"),dp=n("torch.nn.Module"),cp=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pp=m(),We=r("div"),T(ns.$$.fragment),mp=m(),Lt=r("p"),hp=n("The "),hr=r("a"),fp=n("ConvBertForTokenClassification"),up=n(" forward method, overrides the "),$a=r("code"),gp=n("__call__"),_p=n(" special method."),vp=m(),T(Mo.$$.fragment),bp=m(),T(zo.$$.fragment),kp=m(),T(jo.$$.fragment),Ri=m(),St=r("h2"),qo=r("a"),wa=r("span"),T(ss.$$.fragment),Tp=m(),ya=r("span"),$p=n("ConvBertForQuestionAnswering"),Wi=m(),et=r("div"),T(rs.$$.fragment),wp=m(),It=r("p"),yp=n(`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ca=r("code"),Cp=n("span start logits"),Fp=n(" and "),Fa=r("code"),Bp=n("span end logits"),Ep=n(")."),Mp=m(),as=r("p"),zp=n("This model is a PyTorch "),is=r("a"),jp=n("torch.nn.Module"),qp=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xp=m(),Ue=r("div"),T(ls.$$.fragment),Pp=m(),Rt=r("p"),Op=n("The "),fr=r("a"),Np=n("ConvBertForQuestionAnswering"),Ap=n(" forward method, overrides the "),Ba=r("code"),Dp=n("__call__"),Lp=n(" special method."),Sp=m(),T(xo.$$.fragment),Ip=m(),T(Po.$$.fragment),Rp=m(),T(Oo.$$.fragment),Ui=m(),Wt=r("h2"),No=r("a"),Ea=r("span"),T(ds.$$.fragment),Wp=m(),Ma=r("span"),Up=n("TFConvBertModel"),Yi=m(),Pe=r("div"),T(cs.$$.fragment),Yp=m(),za=r("p"),Hp=n("The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top."),Qp=m(),ps=r("p"),Vp=n("This model inherits from "),ur=r("a"),Kp=n("TFPreTrainedModel"),Jp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gp=m(),ms=r("p"),Zp=n("This model is also a "),hs=r("a"),Xp=n("tf.keras.Model"),em=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tm=m(),T(Ao.$$.fragment),om=m(),st=r("div"),T(fs.$$.fragment),nm=m(),Ut=r("p"),sm=n("The "),gr=r("a"),rm=n("TFConvBertModel"),am=n(" forward method, overrides the "),ja=r("code"),im=n("__call__"),lm=n(" special method."),dm=m(),T(Do.$$.fragment),cm=m(),T(Lo.$$.fragment),Hi=m(),Yt=r("h2"),So=r("a"),qa=r("span"),T(us.$$.fragment),pm=m(),xa=r("span"),mm=n("TFConvBertForMaskedLM"),Qi=m(),Oe=r("div"),T(gs.$$.fragment),hm=m(),_s=r("p"),fm=n("ConvBERT Model with a "),Pa=r("code"),um=n("language modeling"),gm=n(" head on top."),_m=m(),vs=r("p"),vm=n("This model inherits from "),_r=r("a"),bm=n("TFPreTrainedModel"),km=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tm=m(),bs=r("p"),$m=n("This model is also a "),ks=r("a"),wm=n("tf.keras.Model"),ym=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cm=m(),T(Io.$$.fragment),Fm=m(),Ye=r("div"),T(Ts.$$.fragment),Bm=m(),Ht=r("p"),Em=n("The "),vr=r("a"),Mm=n("TFConvBertForMaskedLM"),zm=n(" forward method, overrides the "),Oa=r("code"),jm=n("__call__"),qm=n(" special method."),xm=m(),T(Ro.$$.fragment),Pm=m(),T(Wo.$$.fragment),Om=m(),T(Uo.$$.fragment),Vi=m(),Qt=r("h2"),Yo=r("a"),Na=r("span"),T($s.$$.fragment),Nm=m(),Aa=r("span"),Am=n("TFConvBertForSequenceClassification"),Ki=m(),Ne=r("div"),T(ws.$$.fragment),Dm=m(),Da=r("p"),Lm=n("ConvBERT Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),Sm=m(),ys=r("p"),Im=n("This model inherits from "),br=r("a"),Rm=n("TFPreTrainedModel"),Wm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Um=m(),Cs=r("p"),Ym=n("This model is also a "),Fs=r("a"),Hm=n("tf.keras.Model"),Qm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vm=m(),T(Ho.$$.fragment),Km=m(),He=r("div"),T(Bs.$$.fragment),Jm=m(),Vt=r("p"),Gm=n("The "),kr=r("a"),Zm=n("TFConvBertForSequenceClassification"),Xm=n(" forward method, overrides the "),La=r("code"),eh=n("__call__"),th=n(" special method."),oh=m(),T(Qo.$$.fragment),nh=m(),T(Vo.$$.fragment),sh=m(),T(Ko.$$.fragment),Ji=m(),Kt=r("h2"),Jo=r("a"),Sa=r("span"),T(Es.$$.fragment),rh=m(),Ia=r("span"),ah=n("TFConvBertForMultipleChoice"),Gi=m(),Ae=r("div"),T(Ms.$$.fragment),ih=m(),Ra=r("p"),lh=n(`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),dh=m(),zs=r("p"),ch=n("This model inherits from "),Tr=r("a"),ph=n("TFPreTrainedModel"),mh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hh=m(),js=r("p"),fh=n("This model is also a "),qs=r("a"),uh=n("tf.keras.Model"),gh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_h=m(),T(Go.$$.fragment),vh=m(),rt=r("div"),T(xs.$$.fragment),bh=m(),Jt=r("p"),kh=n("The "),$r=r("a"),Th=n("TFConvBertForMultipleChoice"),$h=n(" forward method, overrides the "),Wa=r("code"),wh=n("__call__"),yh=n(" special method."),Ch=m(),T(Zo.$$.fragment),Fh=m(),T(Xo.$$.fragment),Zi=m(),Gt=r("h2"),en=r("a"),Ua=r("span"),T(Ps.$$.fragment),Bh=m(),Ya=r("span"),Eh=n("TFConvBertForTokenClassification"),Xi=m(),De=r("div"),T(Os.$$.fragment),Mh=m(),Ha=r("p"),zh=n(`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),jh=m(),Ns=r("p"),qh=n("This model inherits from "),wr=r("a"),xh=n("TFPreTrainedModel"),Ph=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oh=m(),As=r("p"),Nh=n("This model is also a "),Ds=r("a"),Ah=n("tf.keras.Model"),Dh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Lh=m(),T(tn.$$.fragment),Sh=m(),Qe=r("div"),T(Ls.$$.fragment),Ih=m(),Zt=r("p"),Rh=n("The "),yr=r("a"),Wh=n("TFConvBertForTokenClassification"),Uh=n(" forward method, overrides the "),Qa=r("code"),Yh=n("__call__"),Hh=n(" special method."),Qh=m(),T(on.$$.fragment),Vh=m(),T(nn.$$.fragment),Kh=m(),T(sn.$$.fragment),el=m(),Xt=r("h2"),rn=r("a"),Va=r("span"),T(Ss.$$.fragment),Jh=m(),Ka=r("span"),Gh=n("TFConvBertForQuestionAnswering"),tl=m(),Le=r("div"),T(Is.$$.fragment),Zh=m(),eo=r("p"),Xh=n(`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ja=r("code"),ef=n("span start logits"),tf=n(" and "),Ga=r("code"),of=n("span end logits"),nf=n(")."),sf=m(),Rs=r("p"),rf=n("This model inherits from "),Cr=r("a"),af=n("TFPreTrainedModel"),lf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),df=m(),Ws=r("p"),cf=n("This model is also a "),Us=r("a"),pf=n("tf.keras.Model"),mf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hf=m(),T(an.$$.fragment),ff=m(),Ve=r("div"),T(Ys.$$.fragment),uf=m(),to=r("p"),gf=n("The "),Fr=r("a"),_f=n("TFConvBertForQuestionAnswering"),vf=n(" forward method, overrides the "),Za=r("code"),bf=n("__call__"),kf=n(" special method."),Tf=m(),T(ln.$$.fragment),$f=m(),T(dn.$$.fragment),wf=m(),T(cn.$$.fragment),this.h()},l(o){const b=yg('[data-svelte="svelte-1phssyn"]',document.head);d=a(b,"META",{name:!0,content:!0}),b.forEach(t),g=h(o),c=a(o,"H1",{class:!0});var Hs=i(c);p=a(Hs,"A",{id:!0,class:!0,href:!0});var Xa=i(p);v=a(Xa,"SPAN",{});var ei=i(v);$(l.$$.fragment,ei),ei.forEach(t),Xa.forEach(t),f=h(Hs),M=a(Hs,"SPAN",{});var ti=i(M);de=s(ti,"ConvBERT"),ti.forEach(t),Hs.forEach(t),K=h(o),z=a(o,"H2",{class:!0});var Qs=i(z);X=a(Qs,"A",{id:!0,class:!0,href:!0});var oi=i(X);S=a(oi,"SPAN",{});var ni=i(S);$(ee.$$.fragment,ni),ni.forEach(t),oi.forEach(t),ce=h(Qs),I=a(Qs,"SPAN",{});var si=i(I);pe=s(si,"Overview"),si.forEach(t),Qs.forEach(t),ae=h(o),Q=a(o,"P",{});var Vs=i(Q);O=s(Vs,"The ConvBERT model was proposed in "),te=a(Vs,"A",{href:!0,rel:!0});var ri=i(te);J=s(ri,"ConvBERT: Improving BERT with Span-based Dynamic Convolution"),ri.forEach(t),j=s(Vs,` by Zihang Jiang, Weihao Yu, Daquan Zhou, Yunpeng Chen, Jiashi Feng, Shuicheng
Yan.`),Vs.forEach(t),x=h(o),se=a(o,"P",{});var ai=i(se);Y=s(ai,"The abstract from the paper is the following:"),ai.forEach(t),ie=h(o),re=a(o,"P",{});var ii=i(re);R=a(ii,"EM",{});var li=i(R);me=s(li,`Pre-trained language models like BERT and its variants have recently achieved impressive performance in various
natural language understanding tasks. However, BERT heavily relies on the global self-attention block and thus suffers
large memory footprint and computation cost. Although all its attention heads query on the whole input sequence for
generating the attention map from a global perspective, we observe some heads only need to learn local dependencies,
which means the existence of computation redundancy. We therefore propose a novel span-based dynamic convolution to
replace these self-attention heads to directly model local dependencies. The novel convolution heads, together with the
rest self-attention heads, form a new mixed attention block that is more efficient at both global and local context
learning. We equip BERT with this mixed attention design and build a ConvBERT model. Experiments have shown that
ConvBERT significantly outperforms BERT and its variants in various downstream tasks, with lower training cost and
fewer model parameters. Remarkably, ConvBERTbase model achieves 86.4 GLUE score, 0.7 higher than ELECTRAbase, while
using less than 1/4 training cost. Code and pre-trained models will be released.`),li.forEach(t),ii.forEach(t),le=h(o),q=a(o,"P",{});var di=i(q);he=s(di,"ConvBERT training tips are similar to those of BERT."),di.forEach(t),W=h(o),G=a(o,"P",{});var pn=i(G);fe=s(pn,"This model was contributed by "),L=a(pn,"A",{href:!0,rel:!0});var ci=i(L);ue=s(ci,"abhishek"),ci.forEach(t),ge=s(pn,`. The original implementation can be found
here: `),P=a(pn,"A",{href:!0,rel:!0});var pi=i(P);_e=s(pi,"https://github.com/yitu-opensource/ConvBert"),pi.forEach(t),pn.forEach(t),U=h(o),Z=a(o,"H2",{class:!0});var Ks=i(Z);u=a(Ks,"A",{id:!0,class:!0,href:!0});var mi=i(u);E=a(mi,"SPAN",{});var hi=i(E);$(V.$$.fragment,hi),hi.forEach(t),mi.forEach(t),Be=h(Ks),Ce=a(Ks,"SPAN",{});var fi=i(Ce);N=s(fi,"ConvBertConfig"),fi.forEach(t),Ks.forEach(t),Fe=h(o),oe=a(o,"DIV",{class:!0});var ut=i(oe);$(be.$$.fragment,ut),A=h(ut),D=a(ut,"P",{});var oo=i(D);Ee=s(oo,"This is the configuration class to store the configuration of a "),Te=a(oo,"A",{href:!0});var ui=i(Te);H=s(ui,"ConvBertModel"),ui.forEach(t),Me=s(oo,`. It is used to instantiate an
ConvBERT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the ConvBERT
`),ke=a(oo,"A",{href:!0,rel:!0});var gi=i(ke);ve=s(gi,"YituTech/conv-bert-base"),gi.forEach(t),ze=s(oo," architecture."),oo.forEach(t),Dl=h(ut),Ct=a(ut,"P",{});var no=i(Ct);Ll=s(no,"Configuration objects inherit from "),Zs=a(no,"A",{href:!0});var _i=i(Zs);Sl=s(_i,"PretrainedConfig"),_i.forEach(t),Il=s(no,` and can be used to control the model outputs. Read the
documentation from `),Xs=a(no,"A",{href:!0});var vi=i(Xs);Rl=s(vi,"PretrainedConfig"),vi.forEach(t),Wl=s(no," for more information."),no.forEach(t),Ul=h(ut),$(ro.$$.fragment,ut),ut.forEach(t),Ei=h(o),Ft=a(o,"H2",{class:!0});var Js=i(Ft);ao=a(Js,"A",{id:!0,class:!0,href:!0});var bi=i(ao);Hr=a(bi,"SPAN",{});var ki=i(Hr);$($n.$$.fragment,ki),ki.forEach(t),bi.forEach(t),Yl=h(Js),Qr=a(Js,"SPAN",{});var Ti=i(Qr);Hl=s(Ti,"ConvBertTokenizer"),Ti.forEach(t),Js.forEach(t),Mi=h(o),xe=a(o,"DIV",{class:!0});var Ie=i(xe);$(wn.$$.fragment,Ie),Ql=h(Ie),mt=a(Ie,"P",{});var gt=i(mt);Vl=s(gt,"Construct a ConvBERT tokenizer. "),er=a(gt,"A",{href:!0});var $i=i(er);Kl=s($i,"ConvBertTokenizer"),$i.forEach(t),Jl=s(gt," is identical to "),tr=a(gt,"A",{href:!0});var wi=i(tr);Gl=s(wi,"BertTokenizer"),wi.forEach(t),Zl=s(gt,` and runs end-to-end
tokenization: punctuation splitting and wordpiece. Refer to superclass `),or=a(gt,"A",{href:!0});var yi=i(or);Xl=s(yi,"BertTokenizer"),yi.forEach(t),ed=s(gt,` for usage examples and
documentation concerning parameters.`),gt.forEach(t),td=h(Ie),_t=a(Ie,"DIV",{class:!0});var so=i(_t);$(yn.$$.fragment,so),od=h(so),Vr=a(so,"P",{});var Ci=i(Vr);nd=s(Ci,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Ci.forEach(t),sd=h(so),Cn=a(so,"UL",{});var Gs=i(Cn);nr=a(Gs,"LI",{});var Br=i(nr);rd=s(Br,"single sequence: "),Kr=a(Br,"CODE",{});var Fi=i(Kr);ad=s(Fi,"[CLS] X [SEP]"),Fi.forEach(t),Br.forEach(t),id=h(Gs),sr=a(Gs,"LI",{});var yf=i(sr);ld=s(yf,"pair of sequences: "),Jr=a(yf,"CODE",{});var Cf=i(Jr);dd=s(Cf,"[CLS] A [SEP] B [SEP]"),Cf.forEach(t),yf.forEach(t),Gs.forEach(t),so.forEach(t),cd=h(Ie),io=a(Ie,"DIV",{class:!0});var nl=i(io);$(Fn.$$.fragment,nl),pd=h(nl),Bn=a(nl,"P",{});var sl=i(Bn);md=s(sl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Gr=a(sl,"CODE",{});var Ff=i(Gr);hd=s(Ff,"prepare_for_model"),Ff.forEach(t),fd=s(sl," method."),sl.forEach(t),nl.forEach(t),ud=h(Ie),tt=a(Ie,"DIV",{class:!0});var mn=i(tt);$(En.$$.fragment,mn),gd=h(mn),Zr=a(mn,"P",{});var Bf=i(Zr);_d=s(Bf,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),Bf.forEach(t),vd=h(mn),$(lo.$$.fragment,mn),bd=h(mn),Bt=a(mn,"P",{});var Er=i(Bt);kd=s(Er,"If "),Xr=a(Er,"CODE",{});var Ef=i(Xr);Td=s(Ef,"token_ids_1"),Ef.forEach(t),$d=s(Er," is "),ea=a(Er,"CODE",{});var Mf=i(ea);wd=s(Mf,"None"),Mf.forEach(t),yd=s(Er,", this method only returns the first portion of the mask (0s)."),Er.forEach(t),mn.forEach(t),Cd=h(Ie),rr=a(Ie,"DIV",{class:!0});var zf=i(rr);$(Mn.$$.fragment,zf),zf.forEach(t),Ie.forEach(t),zi=h(o),Et=a(o,"H2",{class:!0});var rl=i(Et);co=a(rl,"A",{id:!0,class:!0,href:!0});var jf=i(co);ta=a(jf,"SPAN",{});var qf=i(ta);$(zn.$$.fragment,qf),qf.forEach(t),jf.forEach(t),Fd=h(rl),oa=a(rl,"SPAN",{});var xf=i(oa);Bd=s(xf,"ConvBertTokenizerFast"),xf.forEach(t),rl.forEach(t),ji=h(o),Je=a(o,"DIV",{class:!0});var hn=i(Je);$(jn.$$.fragment,hn),Ed=h(hn),qn=a(hn,"P",{});var al=i(qn);Md=s(al,"Construct a \u201Cfast\u201D ConvBERT tokenizer (backed by HuggingFace\u2019s "),na=a(al,"EM",{});var Pf=i(na);zd=s(Pf,"tokenizers"),Pf.forEach(t),jd=s(al," library)."),al.forEach(t),qd=h(hn),po=a(hn,"P",{});var Bi=i(po);ar=a(Bi,"A",{href:!0});var Of=i(ar);xd=s(Of,"ConvBertTokenizerFast"),Of.forEach(t),Pd=s(Bi," is identical to "),ir=a(Bi,"A",{href:!0});var Nf=i(ir);Od=s(Nf,"BertTokenizerFast"),Nf.forEach(t),Nd=s(Bi,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Bi.forEach(t),Ad=h(hn),xn=a(hn,"P",{});var il=i(xn);Dd=s(il,"Refer to superclass "),lr=a(il,"A",{href:!0});var Af=i(lr);Ld=s(Af,"BertTokenizerFast"),Af.forEach(t),Sd=s(il," for usage examples and documentation concerning parameters."),il.forEach(t),hn.forEach(t),qi=h(o),Mt=a(o,"H2",{class:!0});var ll=i(Mt);mo=a(ll,"A",{id:!0,class:!0,href:!0});var Df=i(mo);sa=a(Df,"SPAN",{});var Lf=i(sa);$(Pn.$$.fragment,Lf),Lf.forEach(t),Df.forEach(t),Id=h(ll),ra=a(ll,"SPAN",{});var Sf=i(ra);Rd=s(Sf,"ConvBertModel"),Sf.forEach(t),ll.forEach(t),xi=h(o),ht=a(o,"DIV",{class:!0});var Mr=i(ht);$(On.$$.fragment,Mr),Wd=h(Mr),Nn=a(Mr,"P",{});var dl=i(Nn);Ud=s(dl,`The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),An=a(dl,"A",{href:!0,rel:!0});var If=i(An);Yd=s(If,"torch.nn.Module"),If.forEach(t),Hd=s(dl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dl.forEach(t),Qd=h(Mr),ot=a(Mr,"DIV",{class:!0});var fn=i(ot);$(Dn.$$.fragment,fn),Vd=h(fn),zt=a(fn,"P",{});var zr=i(zt);Kd=s(zr,"The "),dr=a(zr,"A",{href:!0});var Rf=i(dr);Jd=s(Rf,"ConvBertModel"),Rf.forEach(t),Gd=s(zr," forward method, overrides the "),aa=a(zr,"CODE",{});var Wf=i(aa);Zd=s(Wf,"__call__"),Wf.forEach(t),Xd=s(zr," special method."),zr.forEach(t),ec=h(fn),$(ho.$$.fragment,fn),tc=h(fn),$(fo.$$.fragment,fn),fn.forEach(t),Mr.forEach(t),Pi=h(o),jt=a(o,"H2",{class:!0});var cl=i(jt);uo=a(cl,"A",{id:!0,class:!0,href:!0});var Uf=i(uo);ia=a(Uf,"SPAN",{});var Yf=i(ia);$(Ln.$$.fragment,Yf),Yf.forEach(t),Uf.forEach(t),oc=h(cl),la=a(cl,"SPAN",{});var Hf=i(la);nc=s(Hf,"ConvBertForMaskedLM"),Hf.forEach(t),cl.forEach(t),Oi=h(o),ft=a(o,"DIV",{class:!0});var jr=i(ft);$(Sn.$$.fragment,jr),sc=h(jr),qt=a(jr,"P",{});var qr=i(qt);rc=s(qr,"ConvBERT Model with a "),da=a(qr,"CODE",{});var Qf=i(da);ac=s(Qf,"language modeling"),Qf.forEach(t),ic=s(qr,` head on top.
This model is a PyTorch `),In=a(qr,"A",{href:!0,rel:!0});var Vf=i(In);lc=s(Vf,"torch.nn.Module"),Vf.forEach(t),dc=s(qr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),qr.forEach(t),cc=h(jr),Re=a(jr,"DIV",{class:!0});var vt=i(Re);$(Rn.$$.fragment,vt),pc=h(vt),xt=a(vt,"P",{});var xr=i(xt);mc=s(xr,"The "),cr=a(xr,"A",{href:!0});var Kf=i(cr);hc=s(Kf,"ConvBertForMaskedLM"),Kf.forEach(t),fc=s(xr," forward method, overrides the "),ca=a(xr,"CODE",{});var Jf=i(ca);uc=s(Jf,"__call__"),Jf.forEach(t),gc=s(xr," special method."),xr.forEach(t),_c=h(vt),$(go.$$.fragment,vt),vc=h(vt),$(_o.$$.fragment,vt),bc=h(vt),$(vo.$$.fragment,vt),vt.forEach(t),jr.forEach(t),Ni=h(o),Pt=a(o,"H2",{class:!0});var pl=i(Pt);bo=a(pl,"A",{id:!0,class:!0,href:!0});var Gf=i(bo);pa=a(Gf,"SPAN",{});var Zf=i(pa);$(Wn.$$.fragment,Zf),Zf.forEach(t),Gf.forEach(t),kc=h(pl),ma=a(pl,"SPAN",{});var Xf=i(ma);Tc=s(Xf,"ConvBertForSequenceClassification"),Xf.forEach(t),pl.forEach(t),Ai=h(o),Ge=a(o,"DIV",{class:!0});var un=i(Ge);$(Un.$$.fragment,un),$c=h(un),ha=a(un,"P",{});var eu=i(ha);wc=s(eu,`ConvBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),eu.forEach(t),yc=h(un),Yn=a(un,"P",{});var ml=i(Yn);Cc=s(ml,"This model is a PyTorch "),Hn=a(ml,"A",{href:!0,rel:!0});var tu=i(Hn);Fc=s(tu,"torch.nn.Module"),tu.forEach(t),Bc=s(ml,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ml.forEach(t),Ec=h(un),je=a(un,"DIV",{class:!0});var Ke=i(je);$(Qn.$$.fragment,Ke),Mc=h(Ke),Ot=a(Ke,"P",{});var Pr=i(Ot);zc=s(Pr,"The "),pr=a(Pr,"A",{href:!0});var ou=i(pr);jc=s(ou,"ConvBertForSequenceClassification"),ou.forEach(t),qc=s(Pr," forward method, overrides the "),fa=a(Pr,"CODE",{});var nu=i(fa);xc=s(nu,"__call__"),nu.forEach(t),Pc=s(Pr," special method."),Pr.forEach(t),Oc=h(Ke),$(ko.$$.fragment,Ke),Nc=h(Ke),$(To.$$.fragment,Ke),Ac=h(Ke),$($o.$$.fragment,Ke),Dc=h(Ke),$(wo.$$.fragment,Ke),Lc=h(Ke),$(yo.$$.fragment,Ke),Ke.forEach(t),un.forEach(t),Di=h(o),Nt=a(o,"H2",{class:!0});var hl=i(Nt);Co=a(hl,"A",{id:!0,class:!0,href:!0});var su=i(Co);ua=a(su,"SPAN",{});var ru=i(ua);$(Vn.$$.fragment,ru),ru.forEach(t),su.forEach(t),Sc=h(hl),ga=a(hl,"SPAN",{});var au=i(ga);Ic=s(au,"ConvBertForMultipleChoice"),au.forEach(t),hl.forEach(t),Li=h(o),Ze=a(o,"DIV",{class:!0});var gn=i(Ze);$(Kn.$$.fragment,gn),Rc=h(gn),_a=a(gn,"P",{});var iu=i(_a);Wc=s(iu,`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),iu.forEach(t),Uc=h(gn),Jn=a(gn,"P",{});var fl=i(Jn);Yc=s(fl,"This model is a PyTorch "),Gn=a(fl,"A",{href:!0,rel:!0});var lu=i(Gn);Hc=s(lu,"torch.nn.Module"),lu.forEach(t),Qc=s(fl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fl.forEach(t),Vc=h(gn),nt=a(gn,"DIV",{class:!0});var _n=i(nt);$(Zn.$$.fragment,_n),Kc=h(_n),At=a(_n,"P",{});var Or=i(At);Jc=s(Or,"The "),mr=a(Or,"A",{href:!0});var du=i(mr);Gc=s(du,"ConvBertForMultipleChoice"),du.forEach(t),Zc=s(Or," forward method, overrides the "),va=a(Or,"CODE",{});var cu=i(va);Xc=s(cu,"__call__"),cu.forEach(t),ep=s(Or," special method."),Or.forEach(t),tp=h(_n),$(Fo.$$.fragment,_n),op=h(_n),$(Bo.$$.fragment,_n),_n.forEach(t),gn.forEach(t),Si=h(o),Dt=a(o,"H2",{class:!0});var ul=i(Dt);Eo=a(ul,"A",{id:!0,class:!0,href:!0});var pu=i(Eo);ba=a(pu,"SPAN",{});var mu=i(ba);$(Xn.$$.fragment,mu),mu.forEach(t),pu.forEach(t),np=h(ul),ka=a(ul,"SPAN",{});var hu=i(ka);sp=s(hu,"ConvBertForTokenClassification"),hu.forEach(t),ul.forEach(t),Ii=h(o),Xe=a(o,"DIV",{class:!0});var vn=i(Xe);$(es.$$.fragment,vn),rp=h(vn),Ta=a(vn,"P",{});var fu=i(Ta);ap=s(fu,`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),fu.forEach(t),ip=h(vn),ts=a(vn,"P",{});var gl=i(ts);lp=s(gl,"This model is a PyTorch "),os=a(gl,"A",{href:!0,rel:!0});var uu=i(os);dp=s(uu,"torch.nn.Module"),uu.forEach(t),cp=s(gl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),gl.forEach(t),pp=h(vn),We=a(vn,"DIV",{class:!0});var bt=i(We);$(ns.$$.fragment,bt),mp=h(bt),Lt=a(bt,"P",{});var Nr=i(Lt);hp=s(Nr,"The "),hr=a(Nr,"A",{href:!0});var gu=i(hr);fp=s(gu,"ConvBertForTokenClassification"),gu.forEach(t),up=s(Nr," forward method, overrides the "),$a=a(Nr,"CODE",{});var _u=i($a);gp=s(_u,"__call__"),_u.forEach(t),_p=s(Nr," special method."),Nr.forEach(t),vp=h(bt),$(Mo.$$.fragment,bt),bp=h(bt),$(zo.$$.fragment,bt),kp=h(bt),$(jo.$$.fragment,bt),bt.forEach(t),vn.forEach(t),Ri=h(o),St=a(o,"H2",{class:!0});var _l=i(St);qo=a(_l,"A",{id:!0,class:!0,href:!0});var vu=i(qo);wa=a(vu,"SPAN",{});var bu=i(wa);$(ss.$$.fragment,bu),bu.forEach(t),vu.forEach(t),Tp=h(_l),ya=a(_l,"SPAN",{});var ku=i(ya);$p=s(ku,"ConvBertForQuestionAnswering"),ku.forEach(t),_l.forEach(t),Wi=h(o),et=a(o,"DIV",{class:!0});var bn=i(et);$(rs.$$.fragment,bn),wp=h(bn),It=a(bn,"P",{});var Ar=i(It);yp=s(Ar,`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ca=a(Ar,"CODE",{});var Tu=i(Ca);Cp=s(Tu,"span start logits"),Tu.forEach(t),Fp=s(Ar," and "),Fa=a(Ar,"CODE",{});var $u=i(Fa);Bp=s($u,"span end logits"),$u.forEach(t),Ep=s(Ar,")."),Ar.forEach(t),Mp=h(bn),as=a(bn,"P",{});var vl=i(as);zp=s(vl,"This model is a PyTorch "),is=a(vl,"A",{href:!0,rel:!0});var wu=i(is);jp=s(wu,"torch.nn.Module"),wu.forEach(t),qp=s(vl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),vl.forEach(t),xp=h(bn),Ue=a(bn,"DIV",{class:!0});var kt=i(Ue);$(ls.$$.fragment,kt),Pp=h(kt),Rt=a(kt,"P",{});var Dr=i(Rt);Op=s(Dr,"The "),fr=a(Dr,"A",{href:!0});var yu=i(fr);Np=s(yu,"ConvBertForQuestionAnswering"),yu.forEach(t),Ap=s(Dr," forward method, overrides the "),Ba=a(Dr,"CODE",{});var Cu=i(Ba);Dp=s(Cu,"__call__"),Cu.forEach(t),Lp=s(Dr," special method."),Dr.forEach(t),Sp=h(kt),$(xo.$$.fragment,kt),Ip=h(kt),$(Po.$$.fragment,kt),Rp=h(kt),$(Oo.$$.fragment,kt),kt.forEach(t),bn.forEach(t),Ui=h(o),Wt=a(o,"H2",{class:!0});var bl=i(Wt);No=a(bl,"A",{id:!0,class:!0,href:!0});var Fu=i(No);Ea=a(Fu,"SPAN",{});var Bu=i(Ea);$(ds.$$.fragment,Bu),Bu.forEach(t),Fu.forEach(t),Wp=h(bl),Ma=a(bl,"SPAN",{});var Eu=i(Ma);Up=s(Eu,"TFConvBertModel"),Eu.forEach(t),bl.forEach(t),Yi=h(o),Pe=a(o,"DIV",{class:!0});var at=i(Pe);$(cs.$$.fragment,at),Yp=h(at),za=a(at,"P",{});var Mu=i(za);Hp=s(Mu,"The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top."),Mu.forEach(t),Qp=h(at),ps=a(at,"P",{});var kl=i(ps);Vp=s(kl,"This model inherits from "),ur=a(kl,"A",{href:!0});var zu=i(ur);Kp=s(zu,"TFPreTrainedModel"),zu.forEach(t),Jp=s(kl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kl.forEach(t),Gp=h(at),ms=a(at,"P",{});var Tl=i(ms);Zp=s(Tl,"This model is also a "),hs=a(Tl,"A",{href:!0,rel:!0});var ju=i(hs);Xp=s(ju,"tf.keras.Model"),ju.forEach(t),em=s(Tl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tl.forEach(t),tm=h(at),$(Ao.$$.fragment,at),om=h(at),st=a(at,"DIV",{class:!0});var kn=i(st);$(fs.$$.fragment,kn),nm=h(kn),Ut=a(kn,"P",{});var Lr=i(Ut);sm=s(Lr,"The "),gr=a(Lr,"A",{href:!0});var qu=i(gr);rm=s(qu,"TFConvBertModel"),qu.forEach(t),am=s(Lr," forward method, overrides the "),ja=a(Lr,"CODE",{});var xu=i(ja);im=s(xu,"__call__"),xu.forEach(t),lm=s(Lr," special method."),Lr.forEach(t),dm=h(kn),$(Do.$$.fragment,kn),cm=h(kn),$(Lo.$$.fragment,kn),kn.forEach(t),at.forEach(t),Hi=h(o),Yt=a(o,"H2",{class:!0});var $l=i(Yt);So=a($l,"A",{id:!0,class:!0,href:!0});var Pu=i(So);qa=a(Pu,"SPAN",{});var Ou=i(qa);$(us.$$.fragment,Ou),Ou.forEach(t),Pu.forEach(t),pm=h($l),xa=a($l,"SPAN",{});var Nu=i(xa);mm=s(Nu,"TFConvBertForMaskedLM"),Nu.forEach(t),$l.forEach(t),Qi=h(o),Oe=a(o,"DIV",{class:!0});var it=i(Oe);$(gs.$$.fragment,it),hm=h(it),_s=a(it,"P",{});var wl=i(_s);fm=s(wl,"ConvBERT Model with a "),Pa=a(wl,"CODE",{});var Au=i(Pa);um=s(Au,"language modeling"),Au.forEach(t),gm=s(wl," head on top."),wl.forEach(t),_m=h(it),vs=a(it,"P",{});var yl=i(vs);vm=s(yl,"This model inherits from "),_r=a(yl,"A",{href:!0});var Du=i(_r);bm=s(Du,"TFPreTrainedModel"),Du.forEach(t),km=s(yl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yl.forEach(t),Tm=h(it),bs=a(it,"P",{});var Cl=i(bs);$m=s(Cl,"This model is also a "),ks=a(Cl,"A",{href:!0,rel:!0});var Lu=i(ks);wm=s(Lu,"tf.keras.Model"),Lu.forEach(t),ym=s(Cl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cl.forEach(t),Cm=h(it),$(Io.$$.fragment,it),Fm=h(it),Ye=a(it,"DIV",{class:!0});var Tt=i(Ye);$(Ts.$$.fragment,Tt),Bm=h(Tt),Ht=a(Tt,"P",{});var Sr=i(Ht);Em=s(Sr,"The "),vr=a(Sr,"A",{href:!0});var Su=i(vr);Mm=s(Su,"TFConvBertForMaskedLM"),Su.forEach(t),zm=s(Sr," forward method, overrides the "),Oa=a(Sr,"CODE",{});var Iu=i(Oa);jm=s(Iu,"__call__"),Iu.forEach(t),qm=s(Sr," special method."),Sr.forEach(t),xm=h(Tt),$(Ro.$$.fragment,Tt),Pm=h(Tt),$(Wo.$$.fragment,Tt),Om=h(Tt),$(Uo.$$.fragment,Tt),Tt.forEach(t),it.forEach(t),Vi=h(o),Qt=a(o,"H2",{class:!0});var Fl=i(Qt);Yo=a(Fl,"A",{id:!0,class:!0,href:!0});var Ru=i(Yo);Na=a(Ru,"SPAN",{});var Wu=i(Na);$($s.$$.fragment,Wu),Wu.forEach(t),Ru.forEach(t),Nm=h(Fl),Aa=a(Fl,"SPAN",{});var Uu=i(Aa);Am=s(Uu,"TFConvBertForSequenceClassification"),Uu.forEach(t),Fl.forEach(t),Ki=h(o),Ne=a(o,"DIV",{class:!0});var lt=i(Ne);$(ws.$$.fragment,lt),Dm=h(lt),Da=a(lt,"P",{});var Yu=i(Da);Lm=s(Yu,"ConvBERT Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),Yu.forEach(t),Sm=h(lt),ys=a(lt,"P",{});var Bl=i(ys);Im=s(Bl,"This model inherits from "),br=a(Bl,"A",{href:!0});var Hu=i(br);Rm=s(Hu,"TFPreTrainedModel"),Hu.forEach(t),Wm=s(Bl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bl.forEach(t),Um=h(lt),Cs=a(lt,"P",{});var El=i(Cs);Ym=s(El,"This model is also a "),Fs=a(El,"A",{href:!0,rel:!0});var Qu=i(Fs);Hm=s(Qu,"tf.keras.Model"),Qu.forEach(t),Qm=s(El,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),El.forEach(t),Vm=h(lt),$(Ho.$$.fragment,lt),Km=h(lt),He=a(lt,"DIV",{class:!0});var $t=i(He);$(Bs.$$.fragment,$t),Jm=h($t),Vt=a($t,"P",{});var Ir=i(Vt);Gm=s(Ir,"The "),kr=a(Ir,"A",{href:!0});var Vu=i(kr);Zm=s(Vu,"TFConvBertForSequenceClassification"),Vu.forEach(t),Xm=s(Ir," forward method, overrides the "),La=a(Ir,"CODE",{});var Ku=i(La);eh=s(Ku,"__call__"),Ku.forEach(t),th=s(Ir," special method."),Ir.forEach(t),oh=h($t),$(Qo.$$.fragment,$t),nh=h($t),$(Vo.$$.fragment,$t),sh=h($t),$(Ko.$$.fragment,$t),$t.forEach(t),lt.forEach(t),Ji=h(o),Kt=a(o,"H2",{class:!0});var Ml=i(Kt);Jo=a(Ml,"A",{id:!0,class:!0,href:!0});var Ju=i(Jo);Sa=a(Ju,"SPAN",{});var Gu=i(Sa);$(Es.$$.fragment,Gu),Gu.forEach(t),Ju.forEach(t),rh=h(Ml),Ia=a(Ml,"SPAN",{});var Zu=i(Ia);ah=s(Zu,"TFConvBertForMultipleChoice"),Zu.forEach(t),Ml.forEach(t),Gi=h(o),Ae=a(o,"DIV",{class:!0});var dt=i(Ae);$(Ms.$$.fragment,dt),ih=h(dt),Ra=a(dt,"P",{});var Xu=i(Ra);lh=s(Xu,`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Xu.forEach(t),dh=h(dt),zs=a(dt,"P",{});var zl=i(zs);ch=s(zl,"This model inherits from "),Tr=a(zl,"A",{href:!0});var eg=i(Tr);ph=s(eg,"TFPreTrainedModel"),eg.forEach(t),mh=s(zl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zl.forEach(t),hh=h(dt),js=a(dt,"P",{});var jl=i(js);fh=s(jl,"This model is also a "),qs=a(jl,"A",{href:!0,rel:!0});var tg=i(qs);uh=s(tg,"tf.keras.Model"),tg.forEach(t),gh=s(jl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jl.forEach(t),_h=h(dt),$(Go.$$.fragment,dt),vh=h(dt),rt=a(dt,"DIV",{class:!0});var Tn=i(rt);$(xs.$$.fragment,Tn),bh=h(Tn),Jt=a(Tn,"P",{});var Rr=i(Jt);kh=s(Rr,"The "),$r=a(Rr,"A",{href:!0});var og=i($r);Th=s(og,"TFConvBertForMultipleChoice"),og.forEach(t),$h=s(Rr," forward method, overrides the "),Wa=a(Rr,"CODE",{});var ng=i(Wa);wh=s(ng,"__call__"),ng.forEach(t),yh=s(Rr," special method."),Rr.forEach(t),Ch=h(Tn),$(Zo.$$.fragment,Tn),Fh=h(Tn),$(Xo.$$.fragment,Tn),Tn.forEach(t),dt.forEach(t),Zi=h(o),Gt=a(o,"H2",{class:!0});var ql=i(Gt);en=a(ql,"A",{id:!0,class:!0,href:!0});var sg=i(en);Ua=a(sg,"SPAN",{});var rg=i(Ua);$(Ps.$$.fragment,rg),rg.forEach(t),sg.forEach(t),Bh=h(ql),Ya=a(ql,"SPAN",{});var ag=i(Ya);Eh=s(ag,"TFConvBertForTokenClassification"),ag.forEach(t),ql.forEach(t),Xi=h(o),De=a(o,"DIV",{class:!0});var ct=i(De);$(Os.$$.fragment,ct),Mh=h(ct),Ha=a(ct,"P",{});var ig=i(Ha);zh=s(ig,`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ig.forEach(t),jh=h(ct),Ns=a(ct,"P",{});var xl=i(Ns);qh=s(xl,"This model inherits from "),wr=a(xl,"A",{href:!0});var lg=i(wr);xh=s(lg,"TFPreTrainedModel"),lg.forEach(t),Ph=s(xl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xl.forEach(t),Oh=h(ct),As=a(ct,"P",{});var Pl=i(As);Nh=s(Pl,"This model is also a "),Ds=a(Pl,"A",{href:!0,rel:!0});var dg=i(Ds);Ah=s(dg,"tf.keras.Model"),dg.forEach(t),Dh=s(Pl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pl.forEach(t),Lh=h(ct),$(tn.$$.fragment,ct),Sh=h(ct),Qe=a(ct,"DIV",{class:!0});var wt=i(Qe);$(Ls.$$.fragment,wt),Ih=h(wt),Zt=a(wt,"P",{});var Wr=i(Zt);Rh=s(Wr,"The "),yr=a(Wr,"A",{href:!0});var cg=i(yr);Wh=s(cg,"TFConvBertForTokenClassification"),cg.forEach(t),Uh=s(Wr," forward method, overrides the "),Qa=a(Wr,"CODE",{});var pg=i(Qa);Yh=s(pg,"__call__"),pg.forEach(t),Hh=s(Wr," special method."),Wr.forEach(t),Qh=h(wt),$(on.$$.fragment,wt),Vh=h(wt),$(nn.$$.fragment,wt),Kh=h(wt),$(sn.$$.fragment,wt),wt.forEach(t),ct.forEach(t),el=h(o),Xt=a(o,"H2",{class:!0});var Ol=i(Xt);rn=a(Ol,"A",{id:!0,class:!0,href:!0});var mg=i(rn);Va=a(mg,"SPAN",{});var hg=i(Va);$(Ss.$$.fragment,hg),hg.forEach(t),mg.forEach(t),Jh=h(Ol),Ka=a(Ol,"SPAN",{});var fg=i(Ka);Gh=s(fg,"TFConvBertForQuestionAnswering"),fg.forEach(t),Ol.forEach(t),tl=h(o),Le=a(o,"DIV",{class:!0});var pt=i(Le);$(Is.$$.fragment,pt),Zh=h(pt),eo=a(pt,"P",{});var Ur=i(eo);Xh=s(Ur,`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ja=a(Ur,"CODE",{});var ug=i(Ja);ef=s(ug,"span start logits"),ug.forEach(t),tf=s(Ur," and "),Ga=a(Ur,"CODE",{});var gg=i(Ga);of=s(gg,"span end logits"),gg.forEach(t),nf=s(Ur,")."),Ur.forEach(t),sf=h(pt),Rs=a(pt,"P",{});var Nl=i(Rs);rf=s(Nl,"This model inherits from "),Cr=a(Nl,"A",{href:!0});var _g=i(Cr);af=s(_g,"TFPreTrainedModel"),_g.forEach(t),lf=s(Nl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nl.forEach(t),df=h(pt),Ws=a(pt,"P",{});var Al=i(Ws);cf=s(Al,"This model is also a "),Us=a(Al,"A",{href:!0,rel:!0});var vg=i(Us);pf=s(vg,"tf.keras.Model"),vg.forEach(t),mf=s(Al,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Al.forEach(t),hf=h(pt),$(an.$$.fragment,pt),ff=h(pt),Ve=a(pt,"DIV",{class:!0});var yt=i(Ve);$(Ys.$$.fragment,yt),uf=h(yt),to=a(yt,"P",{});var Yr=i(to);gf=s(Yr,"The "),Fr=a(Yr,"A",{href:!0});var bg=i(Fr);_f=s(bg,"TFConvBertForQuestionAnswering"),bg.forEach(t),vf=s(Yr," forward method, overrides the "),Za=a(Yr,"CODE",{});var kg=i(Za);bf=s(kg,"__call__"),kg.forEach(t),kf=s(Yr," special method."),Yr.forEach(t),Tf=h(yt),$(ln.$$.fragment,yt),$f=h(yt),$(dn.$$.fragment,yt),wf=h(yt),$(cn.$$.fragment,yt),yt.forEach(t),pt.forEach(t),this.h()},h(){k(d,"name","hf:doc:metadata"),k(d,"content",JSON.stringify(u_)),k(p,"id","convbert"),k(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(p,"href","#convbert"),k(c,"class","relative group"),k(X,"id","overview"),k(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(X,"href","#overview"),k(z,"class","relative group"),k(te,"href","https://arxiv.org/abs/2008.02496"),k(te,"rel","nofollow"),k(L,"href","https://huggingface.co/abhishek"),k(L,"rel","nofollow"),k(P,"href","https://github.com/yitu-opensource/ConvBert"),k(P,"rel","nofollow"),k(u,"id","transformers.ConvBertConfig"),k(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(u,"href","#transformers.ConvBertConfig"),k(Z,"class","relative group"),k(Te,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertModel"),k(ke,"href","https://huggingface.co/YituTech/conv-bert-base"),k(ke,"rel","nofollow"),k(Zs,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),k(Xs,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),k(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ao,"id","transformers.ConvBertTokenizer"),k(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(ao,"href","#transformers.ConvBertTokenizer"),k(Ft,"class","relative group"),k(er,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer"),k(tr,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),k(or,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),k(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(rr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(co,"id","transformers.ConvBertTokenizerFast"),k(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(co,"href","#transformers.ConvBertTokenizerFast"),k(Et,"class","relative group"),k(ar,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizerFast"),k(ir,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),k(lr,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),k(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(mo,"id","transformers.ConvBertModel"),k(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(mo,"href","#transformers.ConvBertModel"),k(Mt,"class","relative group"),k(An,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(An,"rel","nofollow"),k(dr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertModel"),k(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(uo,"id","transformers.ConvBertForMaskedLM"),k(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(uo,"href","#transformers.ConvBertForMaskedLM"),k(jt,"class","relative group"),k(In,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(In,"rel","nofollow"),k(cr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertForMaskedLM"),k(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(bo,"id","transformers.ConvBertForSequenceClassification"),k(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(bo,"href","#transformers.ConvBertForSequenceClassification"),k(Pt,"class","relative group"),k(Hn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Hn,"rel","nofollow"),k(pr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertForSequenceClassification"),k(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Co,"id","transformers.ConvBertForMultipleChoice"),k(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Co,"href","#transformers.ConvBertForMultipleChoice"),k(Nt,"class","relative group"),k(Gn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Gn,"rel","nofollow"),k(mr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertForMultipleChoice"),k(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Eo,"id","transformers.ConvBertForTokenClassification"),k(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Eo,"href","#transformers.ConvBertForTokenClassification"),k(Dt,"class","relative group"),k(os,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(os,"rel","nofollow"),k(hr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertForTokenClassification"),k(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(qo,"id","transformers.ConvBertForQuestionAnswering"),k(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(qo,"href","#transformers.ConvBertForQuestionAnswering"),k(St,"class","relative group"),k(is,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(is,"rel","nofollow"),k(fr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertForQuestionAnswering"),k(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(No,"id","transformers.TFConvBertModel"),k(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(No,"href","#transformers.TFConvBertModel"),k(Wt,"class","relative group"),k(ur,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(hs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(hs,"rel","nofollow"),k(gr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertModel"),k(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(So,"id","transformers.TFConvBertForMaskedLM"),k(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(So,"href","#transformers.TFConvBertForMaskedLM"),k(Yt,"class","relative group"),k(_r,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(ks,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(ks,"rel","nofollow"),k(vr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertForMaskedLM"),k(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Yo,"id","transformers.TFConvBertForSequenceClassification"),k(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Yo,"href","#transformers.TFConvBertForSequenceClassification"),k(Qt,"class","relative group"),k(br,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(Fs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Fs,"rel","nofollow"),k(kr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertForSequenceClassification"),k(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Jo,"id","transformers.TFConvBertForMultipleChoice"),k(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Jo,"href","#transformers.TFConvBertForMultipleChoice"),k(Kt,"class","relative group"),k(Tr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(qs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(qs,"rel","nofollow"),k($r,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertForMultipleChoice"),k(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(en,"id","transformers.TFConvBertForTokenClassification"),k(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(en,"href","#transformers.TFConvBertForTokenClassification"),k(Gt,"class","relative group"),k(wr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(Ds,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Ds,"rel","nofollow"),k(yr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertForTokenClassification"),k(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(rn,"id","transformers.TFConvBertForQuestionAnswering"),k(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(rn,"href","#transformers.TFConvBertForQuestionAnswering"),k(Xt,"class","relative group"),k(Cr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(Us,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Us,"rel","nofollow"),k(Fr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertForQuestionAnswering"),k(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,d),_(o,g,b),_(o,c,b),e(c,p),e(p,v),w(l,v,null),e(c,f),e(c,M),e(M,de),_(o,K,b),_(o,z,b),e(z,X),e(X,S),w(ee,S,null),e(z,ce),e(z,I),e(I,pe),_(o,ae,b),_(o,Q,b),e(Q,O),e(Q,te),e(te,J),e(Q,j),_(o,x,b),_(o,se,b),e(se,Y),_(o,ie,b),_(o,re,b),e(re,R),e(R,me),_(o,le,b),_(o,q,b),e(q,he),_(o,W,b),_(o,G,b),e(G,fe),e(G,L),e(L,ue),e(G,ge),e(G,P),e(P,_e),_(o,U,b),_(o,Z,b),e(Z,u),e(u,E),w(V,E,null),e(Z,Be),e(Z,Ce),e(Ce,N),_(o,Fe,b),_(o,oe,b),w(be,oe,null),e(oe,A),e(oe,D),e(D,Ee),e(D,Te),e(Te,H),e(D,Me),e(D,ke),e(ke,ve),e(D,ze),e(oe,Dl),e(oe,Ct),e(Ct,Ll),e(Ct,Zs),e(Zs,Sl),e(Ct,Il),e(Ct,Xs),e(Xs,Rl),e(Ct,Wl),e(oe,Ul),w(ro,oe,null),_(o,Ei,b),_(o,Ft,b),e(Ft,ao),e(ao,Hr),w($n,Hr,null),e(Ft,Yl),e(Ft,Qr),e(Qr,Hl),_(o,Mi,b),_(o,xe,b),w(wn,xe,null),e(xe,Ql),e(xe,mt),e(mt,Vl),e(mt,er),e(er,Kl),e(mt,Jl),e(mt,tr),e(tr,Gl),e(mt,Zl),e(mt,or),e(or,Xl),e(mt,ed),e(xe,td),e(xe,_t),w(yn,_t,null),e(_t,od),e(_t,Vr),e(Vr,nd),e(_t,sd),e(_t,Cn),e(Cn,nr),e(nr,rd),e(nr,Kr),e(Kr,ad),e(Cn,id),e(Cn,sr),e(sr,ld),e(sr,Jr),e(Jr,dd),e(xe,cd),e(xe,io),w(Fn,io,null),e(io,pd),e(io,Bn),e(Bn,md),e(Bn,Gr),e(Gr,hd),e(Bn,fd),e(xe,ud),e(xe,tt),w(En,tt,null),e(tt,gd),e(tt,Zr),e(Zr,_d),e(tt,vd),w(lo,tt,null),e(tt,bd),e(tt,Bt),e(Bt,kd),e(Bt,Xr),e(Xr,Td),e(Bt,$d),e(Bt,ea),e(ea,wd),e(Bt,yd),e(xe,Cd),e(xe,rr),w(Mn,rr,null),_(o,zi,b),_(o,Et,b),e(Et,co),e(co,ta),w(zn,ta,null),e(Et,Fd),e(Et,oa),e(oa,Bd),_(o,ji,b),_(o,Je,b),w(jn,Je,null),e(Je,Ed),e(Je,qn),e(qn,Md),e(qn,na),e(na,zd),e(qn,jd),e(Je,qd),e(Je,po),e(po,ar),e(ar,xd),e(po,Pd),e(po,ir),e(ir,Od),e(po,Nd),e(Je,Ad),e(Je,xn),e(xn,Dd),e(xn,lr),e(lr,Ld),e(xn,Sd),_(o,qi,b),_(o,Mt,b),e(Mt,mo),e(mo,sa),w(Pn,sa,null),e(Mt,Id),e(Mt,ra),e(ra,Rd),_(o,xi,b),_(o,ht,b),w(On,ht,null),e(ht,Wd),e(ht,Nn),e(Nn,Ud),e(Nn,An),e(An,Yd),e(Nn,Hd),e(ht,Qd),e(ht,ot),w(Dn,ot,null),e(ot,Vd),e(ot,zt),e(zt,Kd),e(zt,dr),e(dr,Jd),e(zt,Gd),e(zt,aa),e(aa,Zd),e(zt,Xd),e(ot,ec),w(ho,ot,null),e(ot,tc),w(fo,ot,null),_(o,Pi,b),_(o,jt,b),e(jt,uo),e(uo,ia),w(Ln,ia,null),e(jt,oc),e(jt,la),e(la,nc),_(o,Oi,b),_(o,ft,b),w(Sn,ft,null),e(ft,sc),e(ft,qt),e(qt,rc),e(qt,da),e(da,ac),e(qt,ic),e(qt,In),e(In,lc),e(qt,dc),e(ft,cc),e(ft,Re),w(Rn,Re,null),e(Re,pc),e(Re,xt),e(xt,mc),e(xt,cr),e(cr,hc),e(xt,fc),e(xt,ca),e(ca,uc),e(xt,gc),e(Re,_c),w(go,Re,null),e(Re,vc),w(_o,Re,null),e(Re,bc),w(vo,Re,null),_(o,Ni,b),_(o,Pt,b),e(Pt,bo),e(bo,pa),w(Wn,pa,null),e(Pt,kc),e(Pt,ma),e(ma,Tc),_(o,Ai,b),_(o,Ge,b),w(Un,Ge,null),e(Ge,$c),e(Ge,ha),e(ha,wc),e(Ge,yc),e(Ge,Yn),e(Yn,Cc),e(Yn,Hn),e(Hn,Fc),e(Yn,Bc),e(Ge,Ec),e(Ge,je),w(Qn,je,null),e(je,Mc),e(je,Ot),e(Ot,zc),e(Ot,pr),e(pr,jc),e(Ot,qc),e(Ot,fa),e(fa,xc),e(Ot,Pc),e(je,Oc),w(ko,je,null),e(je,Nc),w(To,je,null),e(je,Ac),w($o,je,null),e(je,Dc),w(wo,je,null),e(je,Lc),w(yo,je,null),_(o,Di,b),_(o,Nt,b),e(Nt,Co),e(Co,ua),w(Vn,ua,null),e(Nt,Sc),e(Nt,ga),e(ga,Ic),_(o,Li,b),_(o,Ze,b),w(Kn,Ze,null),e(Ze,Rc),e(Ze,_a),e(_a,Wc),e(Ze,Uc),e(Ze,Jn),e(Jn,Yc),e(Jn,Gn),e(Gn,Hc),e(Jn,Qc),e(Ze,Vc),e(Ze,nt),w(Zn,nt,null),e(nt,Kc),e(nt,At),e(At,Jc),e(At,mr),e(mr,Gc),e(At,Zc),e(At,va),e(va,Xc),e(At,ep),e(nt,tp),w(Fo,nt,null),e(nt,op),w(Bo,nt,null),_(o,Si,b),_(o,Dt,b),e(Dt,Eo),e(Eo,ba),w(Xn,ba,null),e(Dt,np),e(Dt,ka),e(ka,sp),_(o,Ii,b),_(o,Xe,b),w(es,Xe,null),e(Xe,rp),e(Xe,Ta),e(Ta,ap),e(Xe,ip),e(Xe,ts),e(ts,lp),e(ts,os),e(os,dp),e(ts,cp),e(Xe,pp),e(Xe,We),w(ns,We,null),e(We,mp),e(We,Lt),e(Lt,hp),e(Lt,hr),e(hr,fp),e(Lt,up),e(Lt,$a),e($a,gp),e(Lt,_p),e(We,vp),w(Mo,We,null),e(We,bp),w(zo,We,null),e(We,kp),w(jo,We,null),_(o,Ri,b),_(o,St,b),e(St,qo),e(qo,wa),w(ss,wa,null),e(St,Tp),e(St,ya),e(ya,$p),_(o,Wi,b),_(o,et,b),w(rs,et,null),e(et,wp),e(et,It),e(It,yp),e(It,Ca),e(Ca,Cp),e(It,Fp),e(It,Fa),e(Fa,Bp),e(It,Ep),e(et,Mp),e(et,as),e(as,zp),e(as,is),e(is,jp),e(as,qp),e(et,xp),e(et,Ue),w(ls,Ue,null),e(Ue,Pp),e(Ue,Rt),e(Rt,Op),e(Rt,fr),e(fr,Np),e(Rt,Ap),e(Rt,Ba),e(Ba,Dp),e(Rt,Lp),e(Ue,Sp),w(xo,Ue,null),e(Ue,Ip),w(Po,Ue,null),e(Ue,Rp),w(Oo,Ue,null),_(o,Ui,b),_(o,Wt,b),e(Wt,No),e(No,Ea),w(ds,Ea,null),e(Wt,Wp),e(Wt,Ma),e(Ma,Up),_(o,Yi,b),_(o,Pe,b),w(cs,Pe,null),e(Pe,Yp),e(Pe,za),e(za,Hp),e(Pe,Qp),e(Pe,ps),e(ps,Vp),e(ps,ur),e(ur,Kp),e(ps,Jp),e(Pe,Gp),e(Pe,ms),e(ms,Zp),e(ms,hs),e(hs,Xp),e(ms,em),e(Pe,tm),w(Ao,Pe,null),e(Pe,om),e(Pe,st),w(fs,st,null),e(st,nm),e(st,Ut),e(Ut,sm),e(Ut,gr),e(gr,rm),e(Ut,am),e(Ut,ja),e(ja,im),e(Ut,lm),e(st,dm),w(Do,st,null),e(st,cm),w(Lo,st,null),_(o,Hi,b),_(o,Yt,b),e(Yt,So),e(So,qa),w(us,qa,null),e(Yt,pm),e(Yt,xa),e(xa,mm),_(o,Qi,b),_(o,Oe,b),w(gs,Oe,null),e(Oe,hm),e(Oe,_s),e(_s,fm),e(_s,Pa),e(Pa,um),e(_s,gm),e(Oe,_m),e(Oe,vs),e(vs,vm),e(vs,_r),e(_r,bm),e(vs,km),e(Oe,Tm),e(Oe,bs),e(bs,$m),e(bs,ks),e(ks,wm),e(bs,ym),e(Oe,Cm),w(Io,Oe,null),e(Oe,Fm),e(Oe,Ye),w(Ts,Ye,null),e(Ye,Bm),e(Ye,Ht),e(Ht,Em),e(Ht,vr),e(vr,Mm),e(Ht,zm),e(Ht,Oa),e(Oa,jm),e(Ht,qm),e(Ye,xm),w(Ro,Ye,null),e(Ye,Pm),w(Wo,Ye,null),e(Ye,Om),w(Uo,Ye,null),_(o,Vi,b),_(o,Qt,b),e(Qt,Yo),e(Yo,Na),w($s,Na,null),e(Qt,Nm),e(Qt,Aa),e(Aa,Am),_(o,Ki,b),_(o,Ne,b),w(ws,Ne,null),e(Ne,Dm),e(Ne,Da),e(Da,Lm),e(Ne,Sm),e(Ne,ys),e(ys,Im),e(ys,br),e(br,Rm),e(ys,Wm),e(Ne,Um),e(Ne,Cs),e(Cs,Ym),e(Cs,Fs),e(Fs,Hm),e(Cs,Qm),e(Ne,Vm),w(Ho,Ne,null),e(Ne,Km),e(Ne,He),w(Bs,He,null),e(He,Jm),e(He,Vt),e(Vt,Gm),e(Vt,kr),e(kr,Zm),e(Vt,Xm),e(Vt,La),e(La,eh),e(Vt,th),e(He,oh),w(Qo,He,null),e(He,nh),w(Vo,He,null),e(He,sh),w(Ko,He,null),_(o,Ji,b),_(o,Kt,b),e(Kt,Jo),e(Jo,Sa),w(Es,Sa,null),e(Kt,rh),e(Kt,Ia),e(Ia,ah),_(o,Gi,b),_(o,Ae,b),w(Ms,Ae,null),e(Ae,ih),e(Ae,Ra),e(Ra,lh),e(Ae,dh),e(Ae,zs),e(zs,ch),e(zs,Tr),e(Tr,ph),e(zs,mh),e(Ae,hh),e(Ae,js),e(js,fh),e(js,qs),e(qs,uh),e(js,gh),e(Ae,_h),w(Go,Ae,null),e(Ae,vh),e(Ae,rt),w(xs,rt,null),e(rt,bh),e(rt,Jt),e(Jt,kh),e(Jt,$r),e($r,Th),e(Jt,$h),e(Jt,Wa),e(Wa,wh),e(Jt,yh),e(rt,Ch),w(Zo,rt,null),e(rt,Fh),w(Xo,rt,null),_(o,Zi,b),_(o,Gt,b),e(Gt,en),e(en,Ua),w(Ps,Ua,null),e(Gt,Bh),e(Gt,Ya),e(Ya,Eh),_(o,Xi,b),_(o,De,b),w(Os,De,null),e(De,Mh),e(De,Ha),e(Ha,zh),e(De,jh),e(De,Ns),e(Ns,qh),e(Ns,wr),e(wr,xh),e(Ns,Ph),e(De,Oh),e(De,As),e(As,Nh),e(As,Ds),e(Ds,Ah),e(As,Dh),e(De,Lh),w(tn,De,null),e(De,Sh),e(De,Qe),w(Ls,Qe,null),e(Qe,Ih),e(Qe,Zt),e(Zt,Rh),e(Zt,yr),e(yr,Wh),e(Zt,Uh),e(Zt,Qa),e(Qa,Yh),e(Zt,Hh),e(Qe,Qh),w(on,Qe,null),e(Qe,Vh),w(nn,Qe,null),e(Qe,Kh),w(sn,Qe,null),_(o,el,b),_(o,Xt,b),e(Xt,rn),e(rn,Va),w(Ss,Va,null),e(Xt,Jh),e(Xt,Ka),e(Ka,Gh),_(o,tl,b),_(o,Le,b),w(Is,Le,null),e(Le,Zh),e(Le,eo),e(eo,Xh),e(eo,Ja),e(Ja,ef),e(eo,tf),e(eo,Ga),e(Ga,of),e(eo,nf),e(Le,sf),e(Le,Rs),e(Rs,rf),e(Rs,Cr),e(Cr,af),e(Rs,lf),e(Le,df),e(Le,Ws),e(Ws,cf),e(Ws,Us),e(Us,pf),e(Ws,mf),e(Le,hf),w(an,Le,null),e(Le,ff),e(Le,Ve),w(Ys,Ve,null),e(Ve,uf),e(Ve,to),e(to,gf),e(to,Fr),e(Fr,_f),e(to,vf),e(to,Za),e(Za,bf),e(to,kf),e(Ve,Tf),w(ln,Ve,null),e(Ve,$f),w(dn,Ve,null),e(Ve,wf),w(cn,Ve,null),ol=!0},p(o,[b]){const Hs={};b&2&&(Hs.$$scope={dirty:b,ctx:o}),ro.$set(Hs);const Xa={};b&2&&(Xa.$$scope={dirty:b,ctx:o}),lo.$set(Xa);const ei={};b&2&&(ei.$$scope={dirty:b,ctx:o}),ho.$set(ei);const ti={};b&2&&(ti.$$scope={dirty:b,ctx:o}),fo.$set(ti);const Qs={};b&2&&(Qs.$$scope={dirty:b,ctx:o}),go.$set(Qs);const oi={};b&2&&(oi.$$scope={dirty:b,ctx:o}),_o.$set(oi);const ni={};b&2&&(ni.$$scope={dirty:b,ctx:o}),vo.$set(ni);const si={};b&2&&(si.$$scope={dirty:b,ctx:o}),ko.$set(si);const Vs={};b&2&&(Vs.$$scope={dirty:b,ctx:o}),To.$set(Vs);const ri={};b&2&&(ri.$$scope={dirty:b,ctx:o}),$o.$set(ri);const ai={};b&2&&(ai.$$scope={dirty:b,ctx:o}),wo.$set(ai);const ii={};b&2&&(ii.$$scope={dirty:b,ctx:o}),yo.$set(ii);const li={};b&2&&(li.$$scope={dirty:b,ctx:o}),Fo.$set(li);const di={};b&2&&(di.$$scope={dirty:b,ctx:o}),Bo.$set(di);const pn={};b&2&&(pn.$$scope={dirty:b,ctx:o}),Mo.$set(pn);const ci={};b&2&&(ci.$$scope={dirty:b,ctx:o}),zo.$set(ci);const pi={};b&2&&(pi.$$scope={dirty:b,ctx:o}),jo.$set(pi);const Ks={};b&2&&(Ks.$$scope={dirty:b,ctx:o}),xo.$set(Ks);const mi={};b&2&&(mi.$$scope={dirty:b,ctx:o}),Po.$set(mi);const hi={};b&2&&(hi.$$scope={dirty:b,ctx:o}),Oo.$set(hi);const fi={};b&2&&(fi.$$scope={dirty:b,ctx:o}),Ao.$set(fi);const ut={};b&2&&(ut.$$scope={dirty:b,ctx:o}),Do.$set(ut);const oo={};b&2&&(oo.$$scope={dirty:b,ctx:o}),Lo.$set(oo);const ui={};b&2&&(ui.$$scope={dirty:b,ctx:o}),Io.$set(ui);const gi={};b&2&&(gi.$$scope={dirty:b,ctx:o}),Ro.$set(gi);const no={};b&2&&(no.$$scope={dirty:b,ctx:o}),Wo.$set(no);const _i={};b&2&&(_i.$$scope={dirty:b,ctx:o}),Uo.$set(_i);const vi={};b&2&&(vi.$$scope={dirty:b,ctx:o}),Ho.$set(vi);const Js={};b&2&&(Js.$$scope={dirty:b,ctx:o}),Qo.$set(Js);const bi={};b&2&&(bi.$$scope={dirty:b,ctx:o}),Vo.$set(bi);const ki={};b&2&&(ki.$$scope={dirty:b,ctx:o}),Ko.$set(ki);const Ti={};b&2&&(Ti.$$scope={dirty:b,ctx:o}),Go.$set(Ti);const Ie={};b&2&&(Ie.$$scope={dirty:b,ctx:o}),Zo.$set(Ie);const gt={};b&2&&(gt.$$scope={dirty:b,ctx:o}),Xo.$set(gt);const $i={};b&2&&($i.$$scope={dirty:b,ctx:o}),tn.$set($i);const wi={};b&2&&(wi.$$scope={dirty:b,ctx:o}),on.$set(wi);const yi={};b&2&&(yi.$$scope={dirty:b,ctx:o}),nn.$set(yi);const so={};b&2&&(so.$$scope={dirty:b,ctx:o}),sn.$set(so);const Ci={};b&2&&(Ci.$$scope={dirty:b,ctx:o}),an.$set(Ci);const Gs={};b&2&&(Gs.$$scope={dirty:b,ctx:o}),ln.$set(Gs);const Br={};b&2&&(Br.$$scope={dirty:b,ctx:o}),dn.$set(Br);const Fi={};b&2&&(Fi.$$scope={dirty:b,ctx:o}),cn.$set(Fi)},i(o){ol||(y(l.$$.fragment,o),y(ee.$$.fragment,o),y(V.$$.fragment,o),y(be.$$.fragment,o),y(ro.$$.fragment,o),y($n.$$.fragment,o),y(wn.$$.fragment,o),y(yn.$$.fragment,o),y(Fn.$$.fragment,o),y(En.$$.fragment,o),y(lo.$$.fragment,o),y(Mn.$$.fragment,o),y(zn.$$.fragment,o),y(jn.$$.fragment,o),y(Pn.$$.fragment,o),y(On.$$.fragment,o),y(Dn.$$.fragment,o),y(ho.$$.fragment,o),y(fo.$$.fragment,o),y(Ln.$$.fragment,o),y(Sn.$$.fragment,o),y(Rn.$$.fragment,o),y(go.$$.fragment,o),y(_o.$$.fragment,o),y(vo.$$.fragment,o),y(Wn.$$.fragment,o),y(Un.$$.fragment,o),y(Qn.$$.fragment,o),y(ko.$$.fragment,o),y(To.$$.fragment,o),y($o.$$.fragment,o),y(wo.$$.fragment,o),y(yo.$$.fragment,o),y(Vn.$$.fragment,o),y(Kn.$$.fragment,o),y(Zn.$$.fragment,o),y(Fo.$$.fragment,o),y(Bo.$$.fragment,o),y(Xn.$$.fragment,o),y(es.$$.fragment,o),y(ns.$$.fragment,o),y(Mo.$$.fragment,o),y(zo.$$.fragment,o),y(jo.$$.fragment,o),y(ss.$$.fragment,o),y(rs.$$.fragment,o),y(ls.$$.fragment,o),y(xo.$$.fragment,o),y(Po.$$.fragment,o),y(Oo.$$.fragment,o),y(ds.$$.fragment,o),y(cs.$$.fragment,o),y(Ao.$$.fragment,o),y(fs.$$.fragment,o),y(Do.$$.fragment,o),y(Lo.$$.fragment,o),y(us.$$.fragment,o),y(gs.$$.fragment,o),y(Io.$$.fragment,o),y(Ts.$$.fragment,o),y(Ro.$$.fragment,o),y(Wo.$$.fragment,o),y(Uo.$$.fragment,o),y($s.$$.fragment,o),y(ws.$$.fragment,o),y(Ho.$$.fragment,o),y(Bs.$$.fragment,o),y(Qo.$$.fragment,o),y(Vo.$$.fragment,o),y(Ko.$$.fragment,o),y(Es.$$.fragment,o),y(Ms.$$.fragment,o),y(Go.$$.fragment,o),y(xs.$$.fragment,o),y(Zo.$$.fragment,o),y(Xo.$$.fragment,o),y(Ps.$$.fragment,o),y(Os.$$.fragment,o),y(tn.$$.fragment,o),y(Ls.$$.fragment,o),y(on.$$.fragment,o),y(nn.$$.fragment,o),y(sn.$$.fragment,o),y(Ss.$$.fragment,o),y(Is.$$.fragment,o),y(an.$$.fragment,o),y(Ys.$$.fragment,o),y(ln.$$.fragment,o),y(dn.$$.fragment,o),y(cn.$$.fragment,o),ol=!0)},o(o){C(l.$$.fragment,o),C(ee.$$.fragment,o),C(V.$$.fragment,o),C(be.$$.fragment,o),C(ro.$$.fragment,o),C($n.$$.fragment,o),C(wn.$$.fragment,o),C(yn.$$.fragment,o),C(Fn.$$.fragment,o),C(En.$$.fragment,o),C(lo.$$.fragment,o),C(Mn.$$.fragment,o),C(zn.$$.fragment,o),C(jn.$$.fragment,o),C(Pn.$$.fragment,o),C(On.$$.fragment,o),C(Dn.$$.fragment,o),C(ho.$$.fragment,o),C(fo.$$.fragment,o),C(Ln.$$.fragment,o),C(Sn.$$.fragment,o),C(Rn.$$.fragment,o),C(go.$$.fragment,o),C(_o.$$.fragment,o),C(vo.$$.fragment,o),C(Wn.$$.fragment,o),C(Un.$$.fragment,o),C(Qn.$$.fragment,o),C(ko.$$.fragment,o),C(To.$$.fragment,o),C($o.$$.fragment,o),C(wo.$$.fragment,o),C(yo.$$.fragment,o),C(Vn.$$.fragment,o),C(Kn.$$.fragment,o),C(Zn.$$.fragment,o),C(Fo.$$.fragment,o),C(Bo.$$.fragment,o),C(Xn.$$.fragment,o),C(es.$$.fragment,o),C(ns.$$.fragment,o),C(Mo.$$.fragment,o),C(zo.$$.fragment,o),C(jo.$$.fragment,o),C(ss.$$.fragment,o),C(rs.$$.fragment,o),C(ls.$$.fragment,o),C(xo.$$.fragment,o),C(Po.$$.fragment,o),C(Oo.$$.fragment,o),C(ds.$$.fragment,o),C(cs.$$.fragment,o),C(Ao.$$.fragment,o),C(fs.$$.fragment,o),C(Do.$$.fragment,o),C(Lo.$$.fragment,o),C(us.$$.fragment,o),C(gs.$$.fragment,o),C(Io.$$.fragment,o),C(Ts.$$.fragment,o),C(Ro.$$.fragment,o),C(Wo.$$.fragment,o),C(Uo.$$.fragment,o),C($s.$$.fragment,o),C(ws.$$.fragment,o),C(Ho.$$.fragment,o),C(Bs.$$.fragment,o),C(Qo.$$.fragment,o),C(Vo.$$.fragment,o),C(Ko.$$.fragment,o),C(Es.$$.fragment,o),C(Ms.$$.fragment,o),C(Go.$$.fragment,o),C(xs.$$.fragment,o),C(Zo.$$.fragment,o),C(Xo.$$.fragment,o),C(Ps.$$.fragment,o),C(Os.$$.fragment,o),C(tn.$$.fragment,o),C(Ls.$$.fragment,o),C(on.$$.fragment,o),C(nn.$$.fragment,o),C(sn.$$.fragment,o),C(Ss.$$.fragment,o),C(Is.$$.fragment,o),C(an.$$.fragment,o),C(Ys.$$.fragment,o),C(ln.$$.fragment,o),C(dn.$$.fragment,o),C(cn.$$.fragment,o),ol=!1},d(o){t(d),o&&t(g),o&&t(c),F(l),o&&t(K),o&&t(z),F(ee),o&&t(ae),o&&t(Q),o&&t(x),o&&t(se),o&&t(ie),o&&t(re),o&&t(le),o&&t(q),o&&t(W),o&&t(G),o&&t(U),o&&t(Z),F(V),o&&t(Fe),o&&t(oe),F(be),F(ro),o&&t(Ei),o&&t(Ft),F($n),o&&t(Mi),o&&t(xe),F(wn),F(yn),F(Fn),F(En),F(lo),F(Mn),o&&t(zi),o&&t(Et),F(zn),o&&t(ji),o&&t(Je),F(jn),o&&t(qi),o&&t(Mt),F(Pn),o&&t(xi),o&&t(ht),F(On),F(Dn),F(ho),F(fo),o&&t(Pi),o&&t(jt),F(Ln),o&&t(Oi),o&&t(ft),F(Sn),F(Rn),F(go),F(_o),F(vo),o&&t(Ni),o&&t(Pt),F(Wn),o&&t(Ai),o&&t(Ge),F(Un),F(Qn),F(ko),F(To),F($o),F(wo),F(yo),o&&t(Di),o&&t(Nt),F(Vn),o&&t(Li),o&&t(Ze),F(Kn),F(Zn),F(Fo),F(Bo),o&&t(Si),o&&t(Dt),F(Xn),o&&t(Ii),o&&t(Xe),F(es),F(ns),F(Mo),F(zo),F(jo),o&&t(Ri),o&&t(St),F(ss),o&&t(Wi),o&&t(et),F(rs),F(ls),F(xo),F(Po),F(Oo),o&&t(Ui),o&&t(Wt),F(ds),o&&t(Yi),o&&t(Pe),F(cs),F(Ao),F(fs),F(Do),F(Lo),o&&t(Hi),o&&t(Yt),F(us),o&&t(Qi),o&&t(Oe),F(gs),F(Io),F(Ts),F(Ro),F(Wo),F(Uo),o&&t(Vi),o&&t(Qt),F($s),o&&t(Ki),o&&t(Ne),F(ws),F(Ho),F(Bs),F(Qo),F(Vo),F(Ko),o&&t(Ji),o&&t(Kt),F(Es),o&&t(Gi),o&&t(Ae),F(Ms),F(Go),F(xs),F(Zo),F(Xo),o&&t(Zi),o&&t(Gt),F(Ps),o&&t(Xi),o&&t(De),F(Os),F(tn),F(Ls),F(on),F(nn),F(sn),o&&t(el),o&&t(Xt),F(Ss),o&&t(tl),o&&t(Le),F(Is),F(an),F(Ys),F(ln),F(dn),F(cn)}}}const u_={local:"convbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.ConvBertConfig",title:"ConvBertConfig"},{local:"transformers.ConvBertTokenizer",title:"ConvBertTokenizer"},{local:"transformers.ConvBertTokenizerFast",title:"ConvBertTokenizerFast"},{local:"transformers.ConvBertModel",title:"ConvBertModel"},{local:"transformers.ConvBertForMaskedLM",title:"ConvBertForMaskedLM"},{local:"transformers.ConvBertForSequenceClassification",title:"ConvBertForSequenceClassification"},{local:"transformers.ConvBertForMultipleChoice",title:"ConvBertForMultipleChoice"},{local:"transformers.ConvBertForTokenClassification",title:"ConvBertForTokenClassification"},{local:"transformers.ConvBertForQuestionAnswering",title:"ConvBertForQuestionAnswering"},{local:"transformers.TFConvBertModel",title:"TFConvBertModel"},{local:"transformers.TFConvBertForMaskedLM",title:"TFConvBertForMaskedLM"},{local:"transformers.TFConvBertForSequenceClassification",title:"TFConvBertForSequenceClassification"},{local:"transformers.TFConvBertForMultipleChoice",title:"TFConvBertForMultipleChoice"},{local:"transformers.TFConvBertForTokenClassification",title:"TFConvBertForTokenClassification"},{local:"transformers.TFConvBertForQuestionAnswering",title:"TFConvBertForQuestionAnswering"}],title:"ConvBERT"};function g_(B){return Cg(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class w_ extends Tg{constructor(d){super();$g(this,d,g_,f_,wg,{})}}export{w_ as default,u_ as metadata};
