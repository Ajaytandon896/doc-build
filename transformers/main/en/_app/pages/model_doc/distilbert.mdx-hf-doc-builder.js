import{S as Z2,i as eF,s as tF,e as o,k as p,w as T,t as a,M as sF,c as n,d as t,m as h,a as r,x as $,h as i,b as f,G as e,g as b,y as w,q as y,o as F,B as D,v as oF,L as ae}from"../../chunks/vendor-hf-doc-builder.js";import{T as be}from"../../chunks/Tip-hf-doc-builder.js";import{D as H}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ie}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Te}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as re}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function nF(x){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertModel, DistilBertConfig

# Initializing a DistilBERT configuration
configuration = DistilBertConfig()

# Initializing a model from the configuration
model = DistilBertModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertModel, DistilBertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a DistilBERT configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = DistilBertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=o("p"),g=a("Examples:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Examples:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),D(m,l)}}}function rF(x){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var B=r(c);m=i(B,"Module"),B.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function aF(x){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, DistilBertModel
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertModel.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertModel.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),D(m,l)}}}function iF(x){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var B=r(c);m=i(B,"Module"),B.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function lF(x){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMaskedLM
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),D(m,l)}}}function dF(x){let d,g;return d=new ie({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){D(d,c)}}}function cF(x){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var B=r(c);m=i(B,"Module"),B.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function pF(x){let d,g,c,m,_;return m=new ie({props:{code:`import torch
from transformers import DistilBertTokenizer, DistilBertForSequenceClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=o("p"),g=a("Example of single-label classification:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example of single-label classification:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),D(m,l)}}}function hF(x){let d,g;return d=new ie({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){D(d,c)}}}function mF(x){let d,g,c,m,_;return m=new ie({props:{code:`import torch
from transformers import DistilBertTokenizer, DistilBertForSequenceClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=o("p"),g=a("Example of multi-label classification:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example of multi-label classification:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),D(m,l)}}}function uF(x){let d,g;return d=new ie({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DistilBertForSequenceClassification.from_pretrained(
    "distilbert-base-uncased", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){D(d,c)}}}function fF(x){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var B=r(c);m=i(B,"Module"),B.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function gF(x){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMultipleChoice
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-cased")
model = DistilBertForMultipleChoice.from_pretrained("distilbert-base-cased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([[prompt, choice0], [prompt, choice1]], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;distilbert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([[prompt, choice0], [prompt, choice1]], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=o("p"),g=a("Examples:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Examples:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),D(m,l)}}}function _F(x){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var B=r(c);m=i(B,"Module"),B.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function bF(x){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, DistilBertForTokenClassification
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

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
`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),D(m,l)}}}function kF(x){let d,g;return d=new ie({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){D(d,c)}}}function vF(x){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var B=r(c);m=i(B,"Module"),B.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function TF(x){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, DistilBertForQuestionAnswering
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForQuestionAnswering.from_pretrained("distilbert-base-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),D(m,l)}}}function $F(x){let d,g;return d=new ie({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){D(d,c)}}}function wF(x){let d,g,c,m,_,l,u,B,he,K,E,G,S,X,me,I,ue,le,N,P,Y,V,z,j,fe,W,se,ge,Q,de,ee,A,ce,L,oe,_e,q,te,R,pe;return{c(){d=o("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),m=o("ul"),_=o("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),u=p(),B=o("li"),he=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=p(),E=o("p"),G=a("This second option is useful when using "),S=o("code"),X=a("tf.keras.Model.fit"),me=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),ue=a("model(inputs)"),le=a("."),N=p(),P=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),V=p(),z=o("ul"),j=o("li"),fe=a("a single Tensor with "),W=o("code"),se=a("input_ids"),ge=a(" only and nothing else: "),Q=o("code"),de=a("model(inputs_ids)"),ee=p(),A=o("li"),ce=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=o("code"),oe=a("model([input_ids, attention_mask])"),_e=p(),q=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),pe=a('model({"input_ids": input_ids})')},l(v){d=n(v,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(v),m=n(v,"UL",{});var J=r(m);_=n(J,"LI",{});var ke=r(_);l=i(ke,"having all inputs as keyword arguments (like PyTorch models), or"),ke.forEach(t),u=h(J),B=n(J,"LI",{});var $e=r(B);he=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),K=h(v),E=n(v,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ve=r(S);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),me=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);ue=i(we,"model(inputs)"),we.forEach(t),le=i(O,"."),O.forEach(t),N=h(v),P=n(v,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),V=h(v),z=n(v,"UL",{});var C=r(z);j=n(C,"LI",{});var U=r(j);fe=i(U,"a single Tensor with "),W=n(U,"CODE",{});var Fe=r(W);se=i(Fe,"input_ids"),Fe.forEach(t),ge=i(U," only and nothing else: "),Q=n(U,"CODE",{});var De=r(Q);de=i(De,"model(inputs_ids)"),De.forEach(t),U.forEach(t),ee=h(C),A=n(C,"LI",{});var Z=r(A);ce=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var xe=r(L);oe=i(xe,"model([input_ids, attention_mask])"),xe.forEach(t),Z.forEach(t),_e=h(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(ne,"CODE",{});var Be=r(R);pe=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(v,M){b(v,d,M),e(d,g),b(v,c,M),b(v,m,M),e(m,_),e(_,l),e(m,u),e(m,B),e(B,he),b(v,K,M),b(v,E,M),e(E,G),e(E,S),e(S,X),e(E,me),e(E,I),e(I,ue),e(E,le),b(v,N,M),b(v,P,M),e(P,Y),b(v,V,M),b(v,z,M),e(z,j),e(j,fe),e(j,W),e(W,se),e(j,ge),e(j,Q),e(Q,de),e(z,ee),e(z,A),e(A,ce),e(A,L),e(L,oe),e(z,_e),e(z,q),e(q,te),e(q,R),e(R,pe)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(K),v&&t(E),v&&t(N),v&&t(P),v&&t(V),v&&t(z)}}}function yF(x){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var B=r(c);m=i(B,"Module"),B.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function FF(x){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertModel
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertModel.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertModel.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),D(m,l)}}}function DF(x){let d,g,c,m,_,l,u,B,he,K,E,G,S,X,me,I,ue,le,N,P,Y,V,z,j,fe,W,se,ge,Q,de,ee,A,ce,L,oe,_e,q,te,R,pe;return{c(){d=o("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),m=o("ul"),_=o("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),u=p(),B=o("li"),he=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=p(),E=o("p"),G=a("This second option is useful when using "),S=o("code"),X=a("tf.keras.Model.fit"),me=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),ue=a("model(inputs)"),le=a("."),N=p(),P=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),V=p(),z=o("ul"),j=o("li"),fe=a("a single Tensor with "),W=o("code"),se=a("input_ids"),ge=a(" only and nothing else: "),Q=o("code"),de=a("model(inputs_ids)"),ee=p(),A=o("li"),ce=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=o("code"),oe=a("model([input_ids, attention_mask])"),_e=p(),q=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),pe=a('model({"input_ids": input_ids})')},l(v){d=n(v,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(v),m=n(v,"UL",{});var J=r(m);_=n(J,"LI",{});var ke=r(_);l=i(ke,"having all inputs as keyword arguments (like PyTorch models), or"),ke.forEach(t),u=h(J),B=n(J,"LI",{});var $e=r(B);he=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),K=h(v),E=n(v,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ve=r(S);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),me=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);ue=i(we,"model(inputs)"),we.forEach(t),le=i(O,"."),O.forEach(t),N=h(v),P=n(v,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),V=h(v),z=n(v,"UL",{});var C=r(z);j=n(C,"LI",{});var U=r(j);fe=i(U,"a single Tensor with "),W=n(U,"CODE",{});var Fe=r(W);se=i(Fe,"input_ids"),Fe.forEach(t),ge=i(U," only and nothing else: "),Q=n(U,"CODE",{});var De=r(Q);de=i(De,"model(inputs_ids)"),De.forEach(t),U.forEach(t),ee=h(C),A=n(C,"LI",{});var Z=r(A);ce=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var xe=r(L);oe=i(xe,"model([input_ids, attention_mask])"),xe.forEach(t),Z.forEach(t),_e=h(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(ne,"CODE",{});var Be=r(R);pe=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(v,M){b(v,d,M),e(d,g),b(v,c,M),b(v,m,M),e(m,_),e(_,l),e(m,u),e(m,B),e(B,he),b(v,K,M),b(v,E,M),e(E,G),e(E,S),e(S,X),e(E,me),e(E,I),e(I,ue),e(E,le),b(v,N,M),b(v,P,M),e(P,Y),b(v,V,M),b(v,z,M),e(z,j),e(j,fe),e(j,W),e(W,se),e(j,ge),e(j,Q),e(Q,de),e(z,ee),e(z,A),e(A,ce),e(A,L),e(L,oe),e(z,_e),e(z,q),e(q,te),e(q,R),e(R,pe)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(K),v&&t(E),v&&t(N),v&&t(P),v&&t(V),v&&t(z)}}}function xF(x){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var B=r(c);m=i(B,"Module"),B.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function BF(x){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMaskedLM
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),D(m,l)}}}function MF(x){let d,g;return d=new ie({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){D(d,c)}}}function EF(x){let d,g,c,m,_,l,u,B,he,K,E,G,S,X,me,I,ue,le,N,P,Y,V,z,j,fe,W,se,ge,Q,de,ee,A,ce,L,oe,_e,q,te,R,pe;return{c(){d=o("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),m=o("ul"),_=o("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),u=p(),B=o("li"),he=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=p(),E=o("p"),G=a("This second option is useful when using "),S=o("code"),X=a("tf.keras.Model.fit"),me=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),ue=a("model(inputs)"),le=a("."),N=p(),P=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),V=p(),z=o("ul"),j=o("li"),fe=a("a single Tensor with "),W=o("code"),se=a("input_ids"),ge=a(" only and nothing else: "),Q=o("code"),de=a("model(inputs_ids)"),ee=p(),A=o("li"),ce=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=o("code"),oe=a("model([input_ids, attention_mask])"),_e=p(),q=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),pe=a('model({"input_ids": input_ids})')},l(v){d=n(v,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(v),m=n(v,"UL",{});var J=r(m);_=n(J,"LI",{});var ke=r(_);l=i(ke,"having all inputs as keyword arguments (like PyTorch models), or"),ke.forEach(t),u=h(J),B=n(J,"LI",{});var $e=r(B);he=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),K=h(v),E=n(v,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ve=r(S);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),me=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);ue=i(we,"model(inputs)"),we.forEach(t),le=i(O,"."),O.forEach(t),N=h(v),P=n(v,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),V=h(v),z=n(v,"UL",{});var C=r(z);j=n(C,"LI",{});var U=r(j);fe=i(U,"a single Tensor with "),W=n(U,"CODE",{});var Fe=r(W);se=i(Fe,"input_ids"),Fe.forEach(t),ge=i(U," only and nothing else: "),Q=n(U,"CODE",{});var De=r(Q);de=i(De,"model(inputs_ids)"),De.forEach(t),U.forEach(t),ee=h(C),A=n(C,"LI",{});var Z=r(A);ce=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var xe=r(L);oe=i(xe,"model([input_ids, attention_mask])"),xe.forEach(t),Z.forEach(t),_e=h(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(ne,"CODE",{});var Be=r(R);pe=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(v,M){b(v,d,M),e(d,g),b(v,c,M),b(v,m,M),e(m,_),e(_,l),e(m,u),e(m,B),e(B,he),b(v,K,M),b(v,E,M),e(E,G),e(E,S),e(S,X),e(E,me),e(E,I),e(I,ue),e(E,le),b(v,N,M),b(v,P,M),e(P,Y),b(v,V,M),b(v,z,M),e(z,j),e(j,fe),e(j,W),e(W,se),e(j,ge),e(j,Q),e(Q,de),e(z,ee),e(z,A),e(A,ce),e(A,L),e(L,oe),e(z,_e),e(z,q),e(q,te),e(q,R),e(R,pe)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(K),v&&t(E),v&&t(N),v&&t(P),v&&t(V),v&&t(z)}}}function zF(x){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var B=r(c);m=i(B,"Module"),B.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function jF(x){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForSequenceClassification
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),D(m,l)}}}function CF(x){let d,g;return d=new ie({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFDistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){D(d,c)}}}function qF(x){let d,g,c,m,_,l,u,B,he,K,E,G,S,X,me,I,ue,le,N,P,Y,V,z,j,fe,W,se,ge,Q,de,ee,A,ce,L,oe,_e,q,te,R,pe;return{c(){d=o("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),m=o("ul"),_=o("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),u=p(),B=o("li"),he=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=p(),E=o("p"),G=a("This second option is useful when using "),S=o("code"),X=a("tf.keras.Model.fit"),me=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),ue=a("model(inputs)"),le=a("."),N=p(),P=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),V=p(),z=o("ul"),j=o("li"),fe=a("a single Tensor with "),W=o("code"),se=a("input_ids"),ge=a(" only and nothing else: "),Q=o("code"),de=a("model(inputs_ids)"),ee=p(),A=o("li"),ce=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=o("code"),oe=a("model([input_ids, attention_mask])"),_e=p(),q=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),pe=a('model({"input_ids": input_ids})')},l(v){d=n(v,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(v),m=n(v,"UL",{});var J=r(m);_=n(J,"LI",{});var ke=r(_);l=i(ke,"having all inputs as keyword arguments (like PyTorch models), or"),ke.forEach(t),u=h(J),B=n(J,"LI",{});var $e=r(B);he=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),K=h(v),E=n(v,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ve=r(S);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),me=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);ue=i(we,"model(inputs)"),we.forEach(t),le=i(O,"."),O.forEach(t),N=h(v),P=n(v,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),V=h(v),z=n(v,"UL",{});var C=r(z);j=n(C,"LI",{});var U=r(j);fe=i(U,"a single Tensor with "),W=n(U,"CODE",{});var Fe=r(W);se=i(Fe,"input_ids"),Fe.forEach(t),ge=i(U," only and nothing else: "),Q=n(U,"CODE",{});var De=r(Q);de=i(De,"model(inputs_ids)"),De.forEach(t),U.forEach(t),ee=h(C),A=n(C,"LI",{});var Z=r(A);ce=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var xe=r(L);oe=i(xe,"model([input_ids, attention_mask])"),xe.forEach(t),Z.forEach(t),_e=h(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(ne,"CODE",{});var Be=r(R);pe=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(v,M){b(v,d,M),e(d,g),b(v,c,M),b(v,m,M),e(m,_),e(_,l),e(m,u),e(m,B),e(B,he),b(v,K,M),b(v,E,M),e(E,G),e(E,S),e(S,X),e(E,me),e(E,I),e(I,ue),e(E,le),b(v,N,M),b(v,P,M),e(P,Y),b(v,V,M),b(v,z,M),e(z,j),e(j,fe),e(j,W),e(W,se),e(j,ge),e(j,Q),e(Q,de),e(z,ee),e(z,A),e(A,ce),e(A,L),e(L,oe),e(z,_e),e(z,q),e(q,te),e(q,R),e(R,pe)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(K),v&&t(E),v&&t(N),v&&t(P),v&&t(V),v&&t(z)}}}function PF(x){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var B=r(c);m=i(B,"Module"),B.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function AF(x){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMultipleChoice
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForMultipleChoice.from_pretrained("distilbert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),D(m,l)}}}function OF(x){let d,g,c,m,_,l,u,B,he,K,E,G,S,X,me,I,ue,le,N,P,Y,V,z,j,fe,W,se,ge,Q,de,ee,A,ce,L,oe,_e,q,te,R,pe;return{c(){d=o("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),m=o("ul"),_=o("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),u=p(),B=o("li"),he=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=p(),E=o("p"),G=a("This second option is useful when using "),S=o("code"),X=a("tf.keras.Model.fit"),me=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),ue=a("model(inputs)"),le=a("."),N=p(),P=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),V=p(),z=o("ul"),j=o("li"),fe=a("a single Tensor with "),W=o("code"),se=a("input_ids"),ge=a(" only and nothing else: "),Q=o("code"),de=a("model(inputs_ids)"),ee=p(),A=o("li"),ce=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=o("code"),oe=a("model([input_ids, attention_mask])"),_e=p(),q=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),pe=a('model({"input_ids": input_ids})')},l(v){d=n(v,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(v),m=n(v,"UL",{});var J=r(m);_=n(J,"LI",{});var ke=r(_);l=i(ke,"having all inputs as keyword arguments (like PyTorch models), or"),ke.forEach(t),u=h(J),B=n(J,"LI",{});var $e=r(B);he=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),K=h(v),E=n(v,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ve=r(S);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),me=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);ue=i(we,"model(inputs)"),we.forEach(t),le=i(O,"."),O.forEach(t),N=h(v),P=n(v,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),V=h(v),z=n(v,"UL",{});var C=r(z);j=n(C,"LI",{});var U=r(j);fe=i(U,"a single Tensor with "),W=n(U,"CODE",{});var Fe=r(W);se=i(Fe,"input_ids"),Fe.forEach(t),ge=i(U," only and nothing else: "),Q=n(U,"CODE",{});var De=r(Q);de=i(De,"model(inputs_ids)"),De.forEach(t),U.forEach(t),ee=h(C),A=n(C,"LI",{});var Z=r(A);ce=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var xe=r(L);oe=i(xe,"model([input_ids, attention_mask])"),xe.forEach(t),Z.forEach(t),_e=h(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(ne,"CODE",{});var Be=r(R);pe=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(v,M){b(v,d,M),e(d,g),b(v,c,M),b(v,m,M),e(m,_),e(_,l),e(m,u),e(m,B),e(B,he),b(v,K,M),b(v,E,M),e(E,G),e(E,S),e(S,X),e(E,me),e(E,I),e(I,ue),e(E,le),b(v,N,M),b(v,P,M),e(P,Y),b(v,V,M),b(v,z,M),e(z,j),e(j,fe),e(j,W),e(W,se),e(j,ge),e(j,Q),e(Q,de),e(z,ee),e(z,A),e(A,ce),e(A,L),e(L,oe),e(z,_e),e(z,q),e(q,te),e(q,R),e(R,pe)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(K),v&&t(E),v&&t(N),v&&t(P),v&&t(V),v&&t(z)}}}function NF(x){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var B=r(c);m=i(B,"Module"),B.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function LF(x){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForTokenClassification
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

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
`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),D(m,l)}}}function SF(x){let d,g;return d=new ie({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){D(d,c)}}}function IF(x){let d,g,c,m,_,l,u,B,he,K,E,G,S,X,me,I,ue,le,N,P,Y,V,z,j,fe,W,se,ge,Q,de,ee,A,ce,L,oe,_e,q,te,R,pe;return{c(){d=o("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=p(),m=o("ul"),_=o("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),u=p(),B=o("li"),he=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=p(),E=o("p"),G=a("This second option is useful when using "),S=o("code"),X=a("tf.keras.Model.fit"),me=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),ue=a("model(inputs)"),le=a("."),N=p(),P=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),V=p(),z=o("ul"),j=o("li"),fe=a("a single Tensor with "),W=o("code"),se=a("input_ids"),ge=a(" only and nothing else: "),Q=o("code"),de=a("model(inputs_ids)"),ee=p(),A=o("li"),ce=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=o("code"),oe=a("model([input_ids, attention_mask])"),_e=p(),q=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),pe=a('model({"input_ids": input_ids})')},l(v){d=n(v,"P",{});var M=r(d);g=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),c=h(v),m=n(v,"UL",{});var J=r(m);_=n(J,"LI",{});var ke=r(_);l=i(ke,"having all inputs as keyword arguments (like PyTorch models), or"),ke.forEach(t),u=h(J),B=n(J,"LI",{});var $e=r(B);he=i($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),J.forEach(t),K=h(v),E=n(v,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ve=r(S);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),me=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);ue=i(we,"model(inputs)"),we.forEach(t),le=i(O,"."),O.forEach(t),N=h(v),P=n(v,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),V=h(v),z=n(v,"UL",{});var C=r(z);j=n(C,"LI",{});var U=r(j);fe=i(U,"a single Tensor with "),W=n(U,"CODE",{});var Fe=r(W);se=i(Fe,"input_ids"),Fe.forEach(t),ge=i(U," only and nothing else: "),Q=n(U,"CODE",{});var De=r(Q);de=i(De,"model(inputs_ids)"),De.forEach(t),U.forEach(t),ee=h(C),A=n(C,"LI",{});var Z=r(A);ce=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var xe=r(L);oe=i(xe,"model([input_ids, attention_mask])"),xe.forEach(t),Z.forEach(t),_e=h(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=n(ne,"CODE",{});var Be=r(R);pe=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(v,M){b(v,d,M),e(d,g),b(v,c,M),b(v,m,M),e(m,_),e(_,l),e(m,u),e(m,B),e(B,he),b(v,K,M),b(v,E,M),e(E,G),e(E,S),e(S,X),e(E,me),e(E,I),e(I,ue),e(E,le),b(v,N,M),b(v,P,M),e(P,Y),b(v,V,M),b(v,z,M),e(z,j),e(j,fe),e(j,W),e(W,se),e(j,ge),e(j,Q),e(Q,de),e(z,ee),e(z,A),e(A,ce),e(A,L),e(L,oe),e(z,_e),e(z,q),e(q,te),e(q,R),e(R,pe)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(K),v&&t(E),v&&t(N),v&&t(P),v&&t(V),v&&t(z)}}}function WF(x){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var B=r(c);m=i(B,"Module"),B.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function QF(x){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForQuestionAnswering
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForQuestionAnswering.from_pretrained("distilbert-base-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),D(m,l)}}}function RF(x){let d,g;return d=new ie({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:ae,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){D(d,c)}}}function UF(x){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var B=r(c);m=i(B,"Module"),B.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function HF(x){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertModel

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertModel.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertModel.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),D(m,l)}}}function KF(x){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var B=r(c);m=i(B,"Module"),B.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function VF(x){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMaskedLM

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),D(m,l)}}}function JF(x){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var B=r(c);m=i(B,"Module"),B.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function GF(x){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForSequenceClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),D(m,l)}}}function XF(x){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var B=r(c);m=i(B,"Module"),B.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function YF(x){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMultipleChoice

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForMultipleChoice.from_pretrained("distilbert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="jax", padding=True)
outputs = model(**{k: v[None, :] for k, v in encoding.items()})

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),D(m,l)}}}function ZF(x){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var B=r(c);m=i(B,"Module"),B.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function eD(x){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForTokenClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),D(m,l)}}}function tD(x){let d,g,c,m,_;return{c(){d=o("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),m=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(u,"CODE",{});var B=r(c);m=i(B,"Module"),B.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function sD(x){let d,g,c,m,_;return m=new ie({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForQuestionAnswering

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForQuestionAnswering.from_pretrained("distilbert-base-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=o("p"),g=a("Example:"),c=p(),T(m.$$.fragment)},l(l){d=n(l,"P",{});var u=r(d);g=i(u,"Example:"),u.forEach(t),c=h(l),$(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,c,u),w(m,l,u),_=!0},p:ae,i(l){_||(y(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),D(m,l)}}}function oD(x){let d,g,c,m,_,l,u,B,he,K,E,G,S,X,me,I,ue,le,N,P,Y,V,z,j,fe,W,se,ge,Q,de,ee,A,ce,L,oe,_e,q,te,R,pe,v,M,J,ke,$e,O,ve,we,ye,C,U,Fe,De,Z,xe,ne,Be,wm,Bp,pt,ym,jn,Fm,Dm,Cn,xm,Bm,qn,Mm,Em,Mp,es,Rs,Cl,Pn,zm,ql,jm,Ep,lt,An,Cm,Bt,qm,Di,Pm,Am,xi,Om,Nm,On,Lm,Sm,Im,ts,Wm,Bi,Qm,Rm,Mi,Um,Hm,Km,Us,zp,ss,Hs,Pl,Nn,Vm,Al,Jm,jp,dt,Ln,Gm,Ol,Xm,Ym,Ks,Ei,Zm,eu,zi,tu,su,ou,Sn,nu,ji,ru,au,Cp,os,Vs,Nl,In,iu,Ll,lu,qp,ct,Wn,du,Qn,cu,Sl,pu,hu,mu,Js,Ci,uu,fu,qi,gu,_u,bu,Rn,ku,Pi,vu,Tu,Pp,ns,Gs,Il,Un,$u,Wl,wu,Ap,We,Hn,yu,Ql,Fu,Du,Kn,xu,Ai,Bu,Mu,Eu,Vn,zu,Jn,ju,Cu,qu,ht,Gn,Pu,rs,Au,Oi,Ou,Nu,Rl,Lu,Su,Iu,Xs,Wu,Ys,Op,as,Zs,Ul,Xn,Qu,Hl,Ru,Np,Qe,Yn,Uu,Zn,Hu,Kl,Ku,Vu,Ju,er,Gu,Ni,Xu,Yu,Zu,tr,ef,sr,tf,sf,of,Ve,or,nf,is,rf,Li,af,lf,Vl,df,cf,pf,eo,hf,to,mf,so,Lp,ls,oo,Jl,nr,uf,Gl,ff,Sp,Re,rr,gf,Xl,_f,bf,ar,kf,Si,vf,Tf,$f,ir,wf,lr,yf,Ff,Df,Pe,dr,xf,ds,Bf,Ii,Mf,Ef,Yl,zf,jf,Cf,no,qf,ro,Pf,ao,Af,io,Of,lo,Ip,cs,co,Zl,cr,Nf,ed,Lf,Wp,Ue,pr,Sf,td,If,Wf,hr,Qf,Wi,Rf,Uf,Hf,mr,Kf,ur,Vf,Jf,Gf,mt,fr,Xf,ps,Yf,Qi,Zf,eg,sd,tg,sg,og,po,ng,ho,Qp,hs,mo,od,gr,rg,nd,ag,Rp,He,_r,ig,rd,lg,dg,br,cg,Ri,pg,hg,mg,kr,ug,vr,fg,gg,_g,Je,Tr,bg,ms,kg,Ui,vg,Tg,ad,$g,wg,yg,uo,Fg,fo,Dg,go,Up,us,_o,id,$r,xg,ld,Bg,Hp,Ke,wr,Mg,fs,Eg,dd,zg,jg,cd,Cg,qg,Pg,yr,Ag,Hi,Og,Ng,Lg,Fr,Sg,Dr,Ig,Wg,Qg,Ge,xr,Rg,gs,Ug,Ki,Hg,Kg,pd,Vg,Jg,Gg,bo,Xg,ko,Yg,vo,Kp,_s,To,hd,Br,Zg,md,e_,Vp,Ae,Mr,t_,ud,s_,o_,Er,n_,Vi,r_,a_,i_,zr,l_,jr,d_,c_,p_,$o,h_,ut,Cr,m_,bs,u_,Ji,f_,g_,fd,__,b_,k_,wo,v_,yo,Jp,ks,Fo,gd,qr,T_,_d,$_,Gp,Oe,Pr,w_,Ar,y_,bd,F_,D_,x_,Or,B_,Gi,M_,E_,z_,Nr,j_,Lr,C_,q_,P_,Do,A_,Xe,Sr,O_,vs,N_,Xi,L_,S_,kd,I_,W_,Q_,xo,R_,Bo,U_,Mo,Xp,Ts,Eo,vd,Ir,H_,Td,K_,Yp,Ne,Wr,V_,$d,J_,G_,Qr,X_,Yi,Y_,Z_,eb,Rr,tb,Ur,sb,ob,nb,zo,rb,Ye,Hr,ab,$s,ib,Zi,lb,db,wd,cb,pb,hb,jo,mb,Co,ub,qo,Zp,ws,Po,yd,Kr,fb,Fd,gb,eh,Le,Vr,_b,Dd,bb,kb,Jr,vb,el,Tb,$b,wb,Gr,yb,Xr,Fb,Db,xb,Ao,Bb,ft,Yr,Mb,ys,Eb,tl,zb,jb,xd,Cb,qb,Pb,Oo,Ab,No,th,Fs,Lo,Bd,Zr,Ob,Md,Nb,sh,Se,ea,Lb,Ed,Sb,Ib,ta,Wb,sl,Qb,Rb,Ub,sa,Hb,oa,Kb,Vb,Jb,So,Gb,Ze,na,Xb,Ds,Yb,ol,Zb,ek,zd,tk,sk,ok,Io,nk,Wo,rk,Qo,oh,xs,Ro,jd,ra,ak,Cd,ik,nh,Ie,aa,lk,Bs,dk,qd,ck,pk,Pd,hk,mk,uk,ia,fk,nl,gk,_k,bk,la,kk,da,vk,Tk,$k,Uo,wk,et,ca,yk,Ms,Fk,rl,Dk,xk,Ad,Bk,Mk,Ek,Ho,zk,Ko,jk,Vo,rh,Es,Jo,Od,pa,Ck,Nd,qk,ah,Me,ha,Pk,Ld,Ak,Ok,ma,Nk,al,Lk,Sk,Ik,ua,Wk,fa,Qk,Rk,Uk,Sd,Hk,Kk,Mt,Id,ga,Vk,Jk,Wd,_a,Gk,Xk,Qd,ba,Yk,Zk,Rd,ka,ev,tv,gt,va,sv,zs,ov,Ud,nv,rv,Hd,av,iv,lv,Go,dv,Xo,ih,js,Yo,Kd,Ta,cv,Vd,pv,lh,Ee,$a,hv,wa,mv,Jd,uv,fv,gv,ya,_v,il,bv,kv,vv,Fa,Tv,Da,$v,wv,yv,Gd,Fv,Dv,Et,Xd,xa,xv,Bv,Yd,Ba,Mv,Ev,Zd,Ma,zv,jv,ec,Ea,Cv,qv,_t,za,Pv,Cs,Av,tc,Ov,Nv,sc,Lv,Sv,Iv,Zo,Wv,en,dh,qs,tn,oc,ja,Qv,nc,Rv,ch,ze,Ca,Uv,rc,Hv,Kv,qa,Vv,ll,Jv,Gv,Xv,Pa,Yv,Aa,Zv,eT,tT,ac,sT,oT,zt,ic,Oa,nT,rT,lc,Na,aT,iT,dc,La,lT,dT,cc,Sa,cT,pT,bt,Ia,hT,Ps,mT,pc,uT,fT,hc,gT,_T,bT,sn,kT,on,ph,As,nn,mc,Wa,vT,uc,TT,hh,je,Qa,$T,fc,wT,yT,Ra,FT,dl,DT,xT,BT,Ua,MT,Ha,ET,zT,jT,gc,CT,qT,jt,_c,Ka,PT,AT,bc,Va,OT,NT,kc,Ja,LT,ST,vc,Ga,IT,WT,kt,Xa,QT,Os,RT,Tc,UT,HT,$c,KT,VT,JT,rn,GT,an,mh,Ns,ln,wc,Ya,XT,yc,YT,uh,Ce,Za,ZT,Fc,e$,t$,ei,s$,cl,o$,n$,r$,ti,a$,si,i$,l$,d$,Dc,c$,p$,Ct,xc,oi,h$,m$,Bc,ni,u$,f$,Mc,ri,g$,_$,Ec,ai,b$,k$,vt,ii,v$,Ls,T$,zc,$$,w$,jc,y$,F$,D$,dn,x$,cn,fh,Ss,pn,Cc,li,B$,qc,M$,gh,qe,di,E$,Is,z$,Pc,j$,C$,Ac,q$,P$,A$,ci,O$,pl,N$,L$,S$,pi,I$,hi,W$,Q$,R$,Oc,U$,H$,qt,Nc,mi,K$,V$,Lc,ui,J$,G$,Sc,fi,X$,Y$,Ic,gi,Z$,ew,Tt,_i,tw,Ws,sw,Wc,ow,nw,Qc,rw,aw,iw,hn,lw,mn,_h;return l=new Te({}),X=new Te({}),Pn=new Te({}),An=new H({props:{name:"class transformers.DistilBertConfig",anchor:"transformers.DistilBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"max_position_embeddings",val:" = 512"},{name:"sinusoidal_pos_embds",val:" = False"},{name:"n_layers",val:" = 6"},{name:"n_heads",val:" = 12"},{name:"dim",val:" = 768"},{name:"hidden_dim",val:" = 3072"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation",val:" = 'gelu'"},{name:"initializer_range",val:" = 0.02"},{name:"qa_dropout",val:" = 0.1"},{name:"seq_classif_dropout",val:" = 0.2"},{name:"pad_token_id",val:" = 0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DistilBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the DistilBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertModel">DistilBertModel</a> or <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertModel">TFDistilBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.DistilBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.DistilBertConfig.sinusoidal_pos_embds",description:`<strong>sinusoidal_pos_embds</strong> (<code>boolean</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use sinusoidal positional embeddings.`,name:"sinusoidal_pos_embds"},{anchor:"transformers.DistilBertConfig.n_layers",description:`<strong>n_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layers"},{anchor:"transformers.DistilBertConfig.n_heads",description:`<strong>n_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_heads"},{anchor:"transformers.DistilBertConfig.dim",description:`<strong>dim</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"dim"},{anchor:"transformers.DistilBertConfig.hidden_dim",description:`<strong>hidden_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
The size of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"hidden_dim"},{anchor:"transformers.DistilBertConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.DistilBertConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.DistilBertConfig.activation",description:`<strong>activation</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation"},{anchor:"transformers.DistilBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DistilBertConfig.qa_dropout",description:`<strong>qa_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilities used in the question answering model <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering">DistilBertForQuestionAnswering</a>.`,name:"qa_dropout"},{anchor:"transformers.DistilBertConfig.seq_classif_dropout",description:`<strong>seq_classif_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.2) &#x2014;
The dropout probabilities used in the sequence classification and the multiple choice model
<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification">DistilBertForSequenceClassification</a>.`,name:"seq_classif_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/configuration_distilbert.py#L45"}}),Us=new re({props:{anchor:"transformers.DistilBertConfig.example",$$slots:{default:[nF]},$$scope:{ctx:x}}}),Nn=new Te({}),Ln=new H({props:{name:"class transformers.DistilBertTokenizer",anchor:"transformers.DistilBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/tokenization_distilbert.py#L62"}}),In=new Te({}),Wn=new H({props:{name:"class transformers.DistilBertTokenizerFast",anchor:"transformers.DistilBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/tokenization_distilbert_fast.py#L79"}}),Un=new Te({}),Hn=new H({props:{name:"class transformers.DistilBertModel",anchor:"transformers.DistilBertModel",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L453"}}),Gn=new H({props:{name:"forward",anchor:"transformers.DistilBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L525",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),Xs=new be({props:{$$slots:{default:[rF]},$$scope:{ctx:x}}}),Ys=new re({props:{anchor:"transformers.DistilBertModel.forward.example",$$slots:{default:[aF]},$$scope:{ctx:x}}}),Xn=new Te({}),Yn=new H({props:{name:"class transformers.DistilBertForMaskedLM",anchor:"transformers.DistilBertForMaskedLM",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L581"}}),or=new H({props:{name:"forward",anchor:"transformers.DistilBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L623",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),eo=new be({props:{$$slots:{default:[iF]},$$scope:{ctx:x}}}),to=new re({props:{anchor:"transformers.DistilBertForMaskedLM.forward.example",$$slots:{default:[lF]},$$scope:{ctx:x}}}),so=new re({props:{anchor:"transformers.DistilBertForMaskedLM.forward.example-2",$$slots:{default:[dF]},$$scope:{ctx:x}}}),nr=new Te({}),rr=new H({props:{name:"class transformers.DistilBertForSequenceClassification",anchor:"transformers.DistilBertForSequenceClassification",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L687"}}),dr=new H({props:{name:"forward",anchor:"transformers.DistilBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L721",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),no=new be({props:{$$slots:{default:[cF]},$$scope:{ctx:x}}}),ro=new re({props:{anchor:"transformers.DistilBertForSequenceClassification.forward.example",$$slots:{default:[pF]},$$scope:{ctx:x}}}),ao=new re({props:{anchor:"transformers.DistilBertForSequenceClassification.forward.example-2",$$slots:{default:[hF]},$$scope:{ctx:x}}}),io=new re({props:{anchor:"transformers.DistilBertForSequenceClassification.forward.example-3",$$slots:{default:[mF]},$$scope:{ctx:x}}}),lo=new re({props:{anchor:"transformers.DistilBertForSequenceClassification.forward.example-4",$$slots:{default:[uF]},$$scope:{ctx:x}}}),cr=new Te({}),pr=new H({props:{name:"class transformers.DistilBertForMultipleChoice",anchor:"transformers.DistilBertForMultipleChoice",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L1017"}}),fr=new H({props:{name:"forward",anchor:"transformers.DistilBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L1049",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),po=new be({props:{$$slots:{default:[fF]},$$scope:{ctx:x}}}),ho=new re({props:{anchor:"transformers.DistilBertForMultipleChoice.forward.example",$$slots:{default:[gF]},$$scope:{ctx:x}}}),gr=new Te({}),_r=new H({props:{name:"class transformers.DistilBertForTokenClassification",anchor:"transformers.DistilBertForTokenClassification",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L922"}}),Tr=new H({props:{name:"forward",anchor:"transformers.DistilBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L954",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),uo=new be({props:{$$slots:{default:[_F]},$$scope:{ctx:x}}}),fo=new re({props:{anchor:"transformers.DistilBertForTokenClassification.forward.example",$$slots:{default:[bF]},$$scope:{ctx:x}}}),go=new re({props:{anchor:"transformers.DistilBertForTokenClassification.forward.example-2",$$slots:{default:[kF]},$$scope:{ctx:x}}}),$r=new Te({}),wr=new H({props:{name:"class transformers.DistilBertForQuestionAnswering",anchor:"transformers.DistilBertForQuestionAnswering",parameters:[{name:"config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L805"}}),xr=new H({props:{name:"forward",anchor:"transformers.DistilBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_distilbert.py#L837",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),bo=new be({props:{$$slots:{default:[vF]},$$scope:{ctx:x}}}),ko=new re({props:{anchor:"transformers.DistilBertForQuestionAnswering.forward.example",$$slots:{default:[TF]},$$scope:{ctx:x}}}),vo=new re({props:{anchor:"transformers.DistilBertForQuestionAnswering.forward.example-2",$$slots:{default:[$F]},$$scope:{ctx:x}}}),Br=new Te({}),Mr=new H({props:{name:"class transformers.TFDistilBertModel",anchor:"transformers.TFDistilBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L522"}}),$o=new be({props:{$$slots:{default:[wF]},$$scope:{ctx:x}}}),Cr=new H({props:{name:"call",anchor:"transformers.TFDistilBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L527",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),wo=new be({props:{$$slots:{default:[yF]},$$scope:{ctx:x}}}),yo=new re({props:{anchor:"transformers.TFDistilBertModel.call.example",$$slots:{default:[FF]},$$scope:{ctx:x}}}),qr=new Te({}),Pr=new H({props:{name:"class transformers.TFDistilBertForMaskedLM",anchor:"transformers.TFDistilBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L609"}}),Do=new be({props:{$$slots:{default:[DF]},$$scope:{ctx:x}}}),Sr=new H({props:{name:"call",anchor:"transformers.TFDistilBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L629",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),xo=new be({props:{$$slots:{default:[xF]},$$scope:{ctx:x}}}),Bo=new re({props:{anchor:"transformers.TFDistilBertForMaskedLM.call.example",$$slots:{default:[BF]},$$scope:{ctx:x}}}),Mo=new re({props:{anchor:"transformers.TFDistilBertForMaskedLM.call.example-2",$$slots:{default:[MF]},$$scope:{ctx:x}}}),Ir=new Te({}),Wr=new H({props:{name:"class transformers.TFDistilBertForSequenceClassification",anchor:"transformers.TFDistilBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L699"}}),zo=new be({props:{$$slots:{default:[EF]},$$scope:{ctx:x}}}),Hr=new H({props:{name:"call",anchor:"transformers.TFDistilBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L716",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),jo=new be({props:{$$slots:{default:[zF]},$$scope:{ctx:x}}}),Co=new re({props:{anchor:"transformers.TFDistilBertForSequenceClassification.call.example",$$slots:{default:[jF]},$$scope:{ctx:x}}}),qo=new re({props:{anchor:"transformers.TFDistilBertForSequenceClassification.call.example-2",$$slots:{default:[CF]},$$scope:{ctx:x}}}),Kr=new Te({}),Vr=new H({props:{name:"class transformers.TFDistilBertForMultipleChoice",anchor:"transformers.TFDistilBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L862"}}),Ao=new be({props:{$$slots:{default:[qF]},$$scope:{ctx:x}}}),Yr=new H({props:{name:"call",anchor:"transformers.TFDistilBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L888",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),Oo=new be({props:{$$slots:{default:[PF]},$$scope:{ctx:x}}}),No=new re({props:{anchor:"transformers.TFDistilBertForMultipleChoice.call.example",$$slots:{default:[AF]},$$scope:{ctx:x}}}),Zr=new Te({}),ea=new H({props:{name:"class transformers.TFDistilBertForTokenClassification",anchor:"transformers.TFDistilBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L786"}}),So=new be({props:{$$slots:{default:[OF]},$$scope:{ctx:x}}}),na=new H({props:{name:"call",anchor:"transformers.TFDistilBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L797",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),Io=new be({props:{$$slots:{default:[NF]},$$scope:{ctx:x}}}),Wo=new re({props:{anchor:"transformers.TFDistilBertForTokenClassification.call.example",$$slots:{default:[LF]},$$scope:{ctx:x}}}),Qo=new re({props:{anchor:"transformers.TFDistilBertForTokenClassification.call.example-2",$$slots:{default:[SF]},$$scope:{ctx:x}}}),ra=new Te({}),aa=new H({props:{name:"class transformers.TFDistilBertForQuestionAnswering",anchor:"transformers.TFDistilBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L987"}}),Uo=new be({props:{$$slots:{default:[IF]},$$scope:{ctx:x}}}),ca=new H({props:{name:"call",anchor:"transformers.TFDistilBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_tf_distilbert.py#L998",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),Ho=new be({props:{$$slots:{default:[WF]},$$scope:{ctx:x}}}),Ko=new re({props:{anchor:"transformers.TFDistilBertForQuestionAnswering.call.example",$$slots:{default:[QF]},$$scope:{ctx:x}}}),Vo=new re({props:{anchor:"transformers.TFDistilBertForQuestionAnswering.call.example-2",$$slots:{default:[RF]},$$scope:{ctx:x}}}),pa=new Te({}),ha=new H({props:{name:"class transformers.FlaxDistilBertModel",anchor:"transformers.FlaxDistilBertModel",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L535"}}),va=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458"}}),Go=new be({props:{$$slots:{default:[UF]},$$scope:{ctx:x}}}),Xo=new re({props:{anchor:"transformers.FlaxDistilBertModel.__call__.example",$$slots:{default:[HF]},$$scope:{ctx:x}}}),Ta=new Te({}),$a=new H({props:{name:"class transformers.FlaxDistilBertForMaskedLM",anchor:"transformers.FlaxDistilBertForMaskedLM",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L608"}}),za=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zo=new be({props:{$$slots:{default:[KF]},$$scope:{ctx:x}}}),en=new re({props:{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.example",$$slots:{default:[VF]},$$scope:{ctx:x}}}),ja=new Te({}),Ca=new H({props:{name:"class transformers.FlaxDistilBertForSequenceClassification",anchor:"transformers.FlaxDistilBertForSequenceClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L677"}}),Ia=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),sn=new be({props:{$$slots:{default:[JF]},$$scope:{ctx:x}}}),on=new re({props:{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.example",$$slots:{default:[GF]},$$scope:{ctx:x}}}),Wa=new Te({}),Qa=new H({props:{name:"class transformers.FlaxDistilBertForMultipleChoice",anchor:"transformers.FlaxDistilBertForMultipleChoice",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L757"}}),Xa=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rn=new be({props:{$$slots:{default:[XF]},$$scope:{ctx:x}}}),an=new re({props:{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.example",$$slots:{default:[YF]},$$scope:{ctx:x}}}),Ya=new Te({}),Za=new H({props:{name:"class transformers.FlaxDistilBertForTokenClassification",anchor:"transformers.FlaxDistilBertForTokenClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L823"}}),ii=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),dn=new be({props:{$$slots:{default:[ZF]},$$scope:{ctx:x}}}),cn=new re({props:{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.example",$$slots:{default:[eD]},$$scope:{ctx:x}}}),li=new Te({}),di=new H({props:{name:"class transformers.FlaxDistilBertForQuestionAnswering",anchor:"transformers.FlaxDistilBertForQuestionAnswering",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L893"}}),_i=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/distilbert/modeling_flax_distilbert.py#L458",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>start_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),hn=new be({props:{$$slots:{default:[tD]},$$scope:{ctx:x}}}),mn=new re({props:{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.example",$$slots:{default:[sD]},$$scope:{ctx:x}}}),{c(){d=o("meta"),g=p(),c=o("h1"),m=o("a"),_=o("span"),T(l.$$.fragment),u=p(),B=o("span"),he=a("DistilBERT"),K=p(),E=o("h2"),G=o("a"),S=o("span"),T(X.$$.fragment),me=p(),I=o("span"),ue=a("Overview"),le=p(),N=o("p"),P=a("The DistilBERT model was proposed in the blog post "),Y=o("a"),V=a(`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),z=a(", and the paper "),j=o("a"),fe=a(`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),W=a(`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),se=o("em"),ge=a("bert-base-uncased"),Q=a(`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),de=p(),ee=o("p"),A=a("The abstract from the paper is the following:"),ce=p(),L=o("p"),oe=o("em"),_e=a(`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),q=p(),te=o("p"),R=a("Tips:"),pe=p(),v=o("ul"),M=o("li"),J=a("DistilBERT doesn\u2019t have "),ke=o("code"),$e=a("token_type_ids"),O=a(`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),ve=o("code"),we=a("tokenizer.sep_token"),ye=a(" (or "),C=o("code"),U=a("[SEP]"),Fe=a(")."),De=p(),Z=o("li"),xe=a("DistilBERT doesn\u2019t have options to select the input positions ("),ne=o("code"),Be=a("position_ids"),wm=a(` input). This could be added if
necessary though, just let us know if you need this option.`),Bp=p(),pt=o("p"),ym=a("This model was contributed by "),jn=o("a"),Fm=a("victorsanh"),Dm=a(`. This model jax version was
contributed by `),Cn=o("a"),xm=a("kamalkraj"),Bm=a(". The original code can be found "),qn=o("a"),Mm=a("here"),Em=a("."),Mp=p(),es=o("h2"),Rs=o("a"),Cl=o("span"),T(Pn.$$.fragment),zm=p(),ql=o("span"),jm=a("DistilBertConfig"),Ep=p(),lt=o("div"),T(An.$$.fragment),Cm=p(),Bt=o("p"),qm=a("This is the configuration class to store the configuration of a "),Di=o("a"),Pm=a("DistilBertModel"),Am=a(" or a "),xi=o("a"),Om=a("TFDistilBertModel"),Nm=a(`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),On=o("a"),Lm=a("distilbert-base-uncased"),Sm=a(" architecture."),Im=p(),ts=o("p"),Wm=a("Configuration objects inherit from "),Bi=o("a"),Qm=a("PretrainedConfig"),Rm=a(` and can be used to control the model outputs. Read the
documentation from `),Mi=o("a"),Um=a("PretrainedConfig"),Hm=a(" for more information."),Km=p(),T(Us.$$.fragment),zp=p(),ss=o("h2"),Hs=o("a"),Pl=o("span"),T(Nn.$$.fragment),Vm=p(),Al=o("span"),Jm=a("DistilBertTokenizer"),jp=p(),dt=o("div"),T(Ln.$$.fragment),Gm=p(),Ol=o("p"),Xm=a("Construct a DistilBERT tokenizer."),Ym=p(),Ks=o("p"),Ei=o("a"),Zm=a("DistilBertTokenizer"),eu=a(" is identical to "),zi=o("a"),tu=a("BertTokenizer"),su=a(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),ou=p(),Sn=o("p"),nu=a("Refer to superclass "),ji=o("a"),ru=a("BertTokenizer"),au=a(" for usage examples and documentation concerning parameters."),Cp=p(),os=o("h2"),Vs=o("a"),Nl=o("span"),T(In.$$.fragment),iu=p(),Ll=o("span"),lu=a("DistilBertTokenizerFast"),qp=p(),ct=o("div"),T(Wn.$$.fragment),du=p(),Qn=o("p"),cu=a("Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),Sl=o("em"),pu=a("tokenizers"),hu=a(" library)."),mu=p(),Js=o("p"),Ci=o("a"),uu=a("DistilBertTokenizerFast"),fu=a(" is identical to "),qi=o("a"),gu=a("BertTokenizerFast"),_u=a(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),bu=p(),Rn=o("p"),ku=a("Refer to superclass "),Pi=o("a"),vu=a("BertTokenizerFast"),Tu=a(" for usage examples and documentation concerning parameters."),Pp=p(),ns=o("h2"),Gs=o("a"),Il=o("span"),T(Un.$$.fragment),$u=p(),Wl=o("span"),wu=a("DistilBertModel"),Ap=p(),We=o("div"),T(Hn.$$.fragment),yu=p(),Ql=o("p"),Fu=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),Du=p(),Kn=o("p"),xu=a("This model inherits from "),Ai=o("a"),Bu=a("PreTrainedModel"),Mu=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Eu=p(),Vn=o("p"),zu=a("This model is also a PyTorch "),Jn=o("a"),ju=a("torch.nn.Module"),Cu=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qu=p(),ht=o("div"),T(Gn.$$.fragment),Pu=p(),rs=o("p"),Au=a("The "),Oi=o("a"),Ou=a("DistilBertModel"),Nu=a(" forward method, overrides the "),Rl=o("code"),Lu=a("__call__"),Su=a(" special method."),Iu=p(),T(Xs.$$.fragment),Wu=p(),T(Ys.$$.fragment),Op=p(),as=o("h2"),Zs=o("a"),Ul=o("span"),T(Xn.$$.fragment),Qu=p(),Hl=o("span"),Ru=a("DistilBertForMaskedLM"),Np=p(),Qe=o("div"),T(Yn.$$.fragment),Uu=p(),Zn=o("p"),Hu=a("DistilBert Model with a "),Kl=o("code"),Ku=a("masked language modeling"),Vu=a(" head on top."),Ju=p(),er=o("p"),Gu=a("This model inherits from "),Ni=o("a"),Xu=a("PreTrainedModel"),Yu=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zu=p(),tr=o("p"),ef=a("This model is also a PyTorch "),sr=o("a"),tf=a("torch.nn.Module"),sf=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),of=p(),Ve=o("div"),T(or.$$.fragment),nf=p(),is=o("p"),rf=a("The "),Li=o("a"),af=a("DistilBertForMaskedLM"),lf=a(" forward method, overrides the "),Vl=o("code"),df=a("__call__"),cf=a(" special method."),pf=p(),T(eo.$$.fragment),hf=p(),T(to.$$.fragment),mf=p(),T(so.$$.fragment),Lp=p(),ls=o("h2"),oo=o("a"),Jl=o("span"),T(nr.$$.fragment),uf=p(),Gl=o("span"),ff=a("DistilBertForSequenceClassification"),Sp=p(),Re=o("div"),T(rr.$$.fragment),gf=p(),Xl=o("p"),_f=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),bf=p(),ar=o("p"),kf=a("This model inherits from "),Si=o("a"),vf=a("PreTrainedModel"),Tf=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$f=p(),ir=o("p"),wf=a("This model is also a PyTorch "),lr=o("a"),yf=a("torch.nn.Module"),Ff=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Df=p(),Pe=o("div"),T(dr.$$.fragment),xf=p(),ds=o("p"),Bf=a("The "),Ii=o("a"),Mf=a("DistilBertForSequenceClassification"),Ef=a(" forward method, overrides the "),Yl=o("code"),zf=a("__call__"),jf=a(" special method."),Cf=p(),T(no.$$.fragment),qf=p(),T(ro.$$.fragment),Pf=p(),T(ao.$$.fragment),Af=p(),T(io.$$.fragment),Of=p(),T(lo.$$.fragment),Ip=p(),cs=o("h2"),co=o("a"),Zl=o("span"),T(cr.$$.fragment),Nf=p(),ed=o("span"),Lf=a("DistilBertForMultipleChoice"),Wp=p(),Ue=o("div"),T(pr.$$.fragment),Sf=p(),td=o("p"),If=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Wf=p(),hr=o("p"),Qf=a("This model inherits from "),Wi=o("a"),Rf=a("PreTrainedModel"),Uf=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hf=p(),mr=o("p"),Kf=a("This model is also a PyTorch "),ur=o("a"),Vf=a("torch.nn.Module"),Jf=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gf=p(),mt=o("div"),T(fr.$$.fragment),Xf=p(),ps=o("p"),Yf=a("The "),Qi=o("a"),Zf=a("DistilBertForMultipleChoice"),eg=a(" forward method, overrides the "),sd=o("code"),tg=a("__call__"),sg=a(" special method."),og=p(),T(po.$$.fragment),ng=p(),T(ho.$$.fragment),Qp=p(),hs=o("h2"),mo=o("a"),od=o("span"),T(gr.$$.fragment),rg=p(),nd=o("span"),ag=a("DistilBertForTokenClassification"),Rp=p(),He=o("div"),T(_r.$$.fragment),ig=p(),rd=o("p"),lg=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),dg=p(),br=o("p"),cg=a("This model inherits from "),Ri=o("a"),pg=a("PreTrainedModel"),hg=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mg=p(),kr=o("p"),ug=a("This model is also a PyTorch "),vr=o("a"),fg=a("torch.nn.Module"),gg=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_g=p(),Je=o("div"),T(Tr.$$.fragment),bg=p(),ms=o("p"),kg=a("The "),Ui=o("a"),vg=a("DistilBertForTokenClassification"),Tg=a(" forward method, overrides the "),ad=o("code"),$g=a("__call__"),wg=a(" special method."),yg=p(),T(uo.$$.fragment),Fg=p(),T(fo.$$.fragment),Dg=p(),T(go.$$.fragment),Up=p(),us=o("h2"),_o=o("a"),id=o("span"),T($r.$$.fragment),xg=p(),ld=o("span"),Bg=a("DistilBertForQuestionAnswering"),Hp=p(),Ke=o("div"),T(wr.$$.fragment),Mg=p(),fs=o("p"),Eg=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),dd=o("code"),zg=a("span start logits"),jg=a(" and "),cd=o("code"),Cg=a("span end logits"),qg=a(")."),Pg=p(),yr=o("p"),Ag=a("This model inherits from "),Hi=o("a"),Og=a("PreTrainedModel"),Ng=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lg=p(),Fr=o("p"),Sg=a("This model is also a PyTorch "),Dr=o("a"),Ig=a("torch.nn.Module"),Wg=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qg=p(),Ge=o("div"),T(xr.$$.fragment),Rg=p(),gs=o("p"),Ug=a("The "),Ki=o("a"),Hg=a("DistilBertForQuestionAnswering"),Kg=a(" forward method, overrides the "),pd=o("code"),Vg=a("__call__"),Jg=a(" special method."),Gg=p(),T(bo.$$.fragment),Xg=p(),T(ko.$$.fragment),Yg=p(),T(vo.$$.fragment),Kp=p(),_s=o("h2"),To=o("a"),hd=o("span"),T(Br.$$.fragment),Zg=p(),md=o("span"),e_=a("TFDistilBertModel"),Vp=p(),Ae=o("div"),T(Mr.$$.fragment),t_=p(),ud=o("p"),s_=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),o_=p(),Er=o("p"),n_=a("This model inherits from "),Vi=o("a"),r_=a("TFPreTrainedModel"),a_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),i_=p(),zr=o("p"),l_=a("This model is also a "),jr=o("a"),d_=a("tf.keras.Model"),c_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),p_=p(),T($o.$$.fragment),h_=p(),ut=o("div"),T(Cr.$$.fragment),m_=p(),bs=o("p"),u_=a("The "),Ji=o("a"),f_=a("TFDistilBertModel"),g_=a(" forward method, overrides the "),fd=o("code"),__=a("__call__"),b_=a(" special method."),k_=p(),T(wo.$$.fragment),v_=p(),T(yo.$$.fragment),Jp=p(),ks=o("h2"),Fo=o("a"),gd=o("span"),T(qr.$$.fragment),T_=p(),_d=o("span"),$_=a("TFDistilBertForMaskedLM"),Gp=p(),Oe=o("div"),T(Pr.$$.fragment),w_=p(),Ar=o("p"),y_=a("DistilBert Model with a "),bd=o("code"),F_=a("masked language modeling"),D_=a(" head on top."),x_=p(),Or=o("p"),B_=a("This model inherits from "),Gi=o("a"),M_=a("TFPreTrainedModel"),E_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),z_=p(),Nr=o("p"),j_=a("This model is also a "),Lr=o("a"),C_=a("tf.keras.Model"),q_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),P_=p(),T(Do.$$.fragment),A_=p(),Xe=o("div"),T(Sr.$$.fragment),O_=p(),vs=o("p"),N_=a("The "),Xi=o("a"),L_=a("TFDistilBertForMaskedLM"),S_=a(" forward method, overrides the "),kd=o("code"),I_=a("__call__"),W_=a(" special method."),Q_=p(),T(xo.$$.fragment),R_=p(),T(Bo.$$.fragment),U_=p(),T(Mo.$$.fragment),Xp=p(),Ts=o("h2"),Eo=o("a"),vd=o("span"),T(Ir.$$.fragment),H_=p(),Td=o("span"),K_=a("TFDistilBertForSequenceClassification"),Yp=p(),Ne=o("div"),T(Wr.$$.fragment),V_=p(),$d=o("p"),J_=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),G_=p(),Qr=o("p"),X_=a("This model inherits from "),Yi=o("a"),Y_=a("TFPreTrainedModel"),Z_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eb=p(),Rr=o("p"),tb=a("This model is also a "),Ur=o("a"),sb=a("tf.keras.Model"),ob=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nb=p(),T(zo.$$.fragment),rb=p(),Ye=o("div"),T(Hr.$$.fragment),ab=p(),$s=o("p"),ib=a("The "),Zi=o("a"),lb=a("TFDistilBertForSequenceClassification"),db=a(" forward method, overrides the "),wd=o("code"),cb=a("__call__"),pb=a(" special method."),hb=p(),T(jo.$$.fragment),mb=p(),T(Co.$$.fragment),ub=p(),T(qo.$$.fragment),Zp=p(),ws=o("h2"),Po=o("a"),yd=o("span"),T(Kr.$$.fragment),fb=p(),Fd=o("span"),gb=a("TFDistilBertForMultipleChoice"),eh=p(),Le=o("div"),T(Vr.$$.fragment),_b=p(),Dd=o("p"),bb=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),kb=p(),Jr=o("p"),vb=a("This model inherits from "),el=o("a"),Tb=a("TFPreTrainedModel"),$b=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wb=p(),Gr=o("p"),yb=a("This model is also a "),Xr=o("a"),Fb=a("tf.keras.Model"),Db=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xb=p(),T(Ao.$$.fragment),Bb=p(),ft=o("div"),T(Yr.$$.fragment),Mb=p(),ys=o("p"),Eb=a("The "),tl=o("a"),zb=a("TFDistilBertForMultipleChoice"),jb=a(" forward method, overrides the "),xd=o("code"),Cb=a("__call__"),qb=a(" special method."),Pb=p(),T(Oo.$$.fragment),Ab=p(),T(No.$$.fragment),th=p(),Fs=o("h2"),Lo=o("a"),Bd=o("span"),T(Zr.$$.fragment),Ob=p(),Md=o("span"),Nb=a("TFDistilBertForTokenClassification"),sh=p(),Se=o("div"),T(ea.$$.fragment),Lb=p(),Ed=o("p"),Sb=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Ib=p(),ta=o("p"),Wb=a("This model inherits from "),sl=o("a"),Qb=a("TFPreTrainedModel"),Rb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ub=p(),sa=o("p"),Hb=a("This model is also a "),oa=o("a"),Kb=a("tf.keras.Model"),Vb=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jb=p(),T(So.$$.fragment),Gb=p(),Ze=o("div"),T(na.$$.fragment),Xb=p(),Ds=o("p"),Yb=a("The "),ol=o("a"),Zb=a("TFDistilBertForTokenClassification"),ek=a(" forward method, overrides the "),zd=o("code"),tk=a("__call__"),sk=a(" special method."),ok=p(),T(Io.$$.fragment),nk=p(),T(Wo.$$.fragment),rk=p(),T(Qo.$$.fragment),oh=p(),xs=o("h2"),Ro=o("a"),jd=o("span"),T(ra.$$.fragment),ak=p(),Cd=o("span"),ik=a("TFDistilBertForQuestionAnswering"),nh=p(),Ie=o("div"),T(aa.$$.fragment),lk=p(),Bs=o("p"),dk=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),qd=o("code"),ck=a("span start logits"),pk=a(" and "),Pd=o("code"),hk=a("span end logits"),mk=a(")."),uk=p(),ia=o("p"),fk=a("This model inherits from "),nl=o("a"),gk=a("TFPreTrainedModel"),_k=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bk=p(),la=o("p"),kk=a("This model is also a "),da=o("a"),vk=a("tf.keras.Model"),Tk=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$k=p(),T(Uo.$$.fragment),wk=p(),et=o("div"),T(ca.$$.fragment),yk=p(),Ms=o("p"),Fk=a("The "),rl=o("a"),Dk=a("TFDistilBertForQuestionAnswering"),xk=a(" forward method, overrides the "),Ad=o("code"),Bk=a("__call__"),Mk=a(" special method."),Ek=p(),T(Ho.$$.fragment),zk=p(),T(Ko.$$.fragment),jk=p(),T(Vo.$$.fragment),rh=p(),Es=o("h2"),Jo=o("a"),Od=o("span"),T(pa.$$.fragment),Ck=p(),Nd=o("span"),qk=a("FlaxDistilBertModel"),ah=p(),Me=o("div"),T(ha.$$.fragment),Pk=p(),Ld=o("p"),Ak=a("The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),Ok=p(),ma=o("p"),Nk=a("This model inherits from "),al=o("a"),Lk=a("FlaxPreTrainedModel"),Sk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ik=p(),ua=o("p"),Wk=a("This model is also a Flax Linen "),fa=o("a"),Qk=a("flax.linen.Module"),Rk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Uk=p(),Sd=o("p"),Hk=a("Finally, this model supports inherent JAX features such as:"),Kk=p(),Mt=o("ul"),Id=o("li"),ga=o("a"),Vk=a("Just-In-Time (JIT) compilation"),Jk=p(),Wd=o("li"),_a=o("a"),Gk=a("Automatic Differentiation"),Xk=p(),Qd=o("li"),ba=o("a"),Yk=a("Vectorization"),Zk=p(),Rd=o("li"),ka=o("a"),ev=a("Parallelization"),tv=p(),gt=o("div"),T(va.$$.fragment),sv=p(),zs=o("p"),ov=a("The "),Ud=o("code"),nv=a("FlaxDistilBertPreTrainedModel"),rv=a(" forward method, overrides the "),Hd=o("code"),av=a("__call__"),iv=a(" special method."),lv=p(),T(Go.$$.fragment),dv=p(),T(Xo.$$.fragment),ih=p(),js=o("h2"),Yo=o("a"),Kd=o("span"),T(Ta.$$.fragment),cv=p(),Vd=o("span"),pv=a("FlaxDistilBertForMaskedLM"),lh=p(),Ee=o("div"),T($a.$$.fragment),hv=p(),wa=o("p"),mv=a("DistilBert Model with a "),Jd=o("code"),uv=a("language modeling"),fv=a(" head on top."),gv=p(),ya=o("p"),_v=a("This model inherits from "),il=o("a"),bv=a("FlaxPreTrainedModel"),kv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),vv=p(),Fa=o("p"),Tv=a("This model is also a Flax Linen "),Da=o("a"),$v=a("flax.linen.Module"),wv=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),yv=p(),Gd=o("p"),Fv=a("Finally, this model supports inherent JAX features such as:"),Dv=p(),Et=o("ul"),Xd=o("li"),xa=o("a"),xv=a("Just-In-Time (JIT) compilation"),Bv=p(),Yd=o("li"),Ba=o("a"),Mv=a("Automatic Differentiation"),Ev=p(),Zd=o("li"),Ma=o("a"),zv=a("Vectorization"),jv=p(),ec=o("li"),Ea=o("a"),Cv=a("Parallelization"),qv=p(),_t=o("div"),T(za.$$.fragment),Pv=p(),Cs=o("p"),Av=a("The "),tc=o("code"),Ov=a("FlaxDistilBertPreTrainedModel"),Nv=a(" forward method, overrides the "),sc=o("code"),Lv=a("__call__"),Sv=a(" special method."),Iv=p(),T(Zo.$$.fragment),Wv=p(),T(en.$$.fragment),dh=p(),qs=o("h2"),tn=o("a"),oc=o("span"),T(ja.$$.fragment),Qv=p(),nc=o("span"),Rv=a("FlaxDistilBertForSequenceClassification"),ch=p(),ze=o("div"),T(Ca.$$.fragment),Uv=p(),rc=o("p"),Hv=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Kv=p(),qa=o("p"),Vv=a("This model inherits from "),ll=o("a"),Jv=a("FlaxPreTrainedModel"),Gv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Xv=p(),Pa=o("p"),Yv=a("This model is also a Flax Linen "),Aa=o("a"),Zv=a("flax.linen.Module"),eT=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),tT=p(),ac=o("p"),sT=a("Finally, this model supports inherent JAX features such as:"),oT=p(),zt=o("ul"),ic=o("li"),Oa=o("a"),nT=a("Just-In-Time (JIT) compilation"),rT=p(),lc=o("li"),Na=o("a"),aT=a("Automatic Differentiation"),iT=p(),dc=o("li"),La=o("a"),lT=a("Vectorization"),dT=p(),cc=o("li"),Sa=o("a"),cT=a("Parallelization"),pT=p(),bt=o("div"),T(Ia.$$.fragment),hT=p(),Ps=o("p"),mT=a("The "),pc=o("code"),uT=a("FlaxDistilBertPreTrainedModel"),fT=a(" forward method, overrides the "),hc=o("code"),gT=a("__call__"),_T=a(" special method."),bT=p(),T(sn.$$.fragment),kT=p(),T(on.$$.fragment),ph=p(),As=o("h2"),nn=o("a"),mc=o("span"),T(Wa.$$.fragment),vT=p(),uc=o("span"),TT=a("FlaxDistilBertForMultipleChoice"),hh=p(),je=o("div"),T(Qa.$$.fragment),$T=p(),fc=o("p"),wT=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),yT=p(),Ra=o("p"),FT=a("This model inherits from "),dl=o("a"),DT=a("FlaxPreTrainedModel"),xT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),BT=p(),Ua=o("p"),MT=a("This model is also a Flax Linen "),Ha=o("a"),ET=a("flax.linen.Module"),zT=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),jT=p(),gc=o("p"),CT=a("Finally, this model supports inherent JAX features such as:"),qT=p(),jt=o("ul"),_c=o("li"),Ka=o("a"),PT=a("Just-In-Time (JIT) compilation"),AT=p(),bc=o("li"),Va=o("a"),OT=a("Automatic Differentiation"),NT=p(),kc=o("li"),Ja=o("a"),LT=a("Vectorization"),ST=p(),vc=o("li"),Ga=o("a"),IT=a("Parallelization"),WT=p(),kt=o("div"),T(Xa.$$.fragment),QT=p(),Os=o("p"),RT=a("The "),Tc=o("code"),UT=a("FlaxDistilBertPreTrainedModel"),HT=a(" forward method, overrides the "),$c=o("code"),KT=a("__call__"),VT=a(" special method."),JT=p(),T(rn.$$.fragment),GT=p(),T(an.$$.fragment),mh=p(),Ns=o("h2"),ln=o("a"),wc=o("span"),T(Ya.$$.fragment),XT=p(),yc=o("span"),YT=a("FlaxDistilBertForTokenClassification"),uh=p(),Ce=o("div"),T(Za.$$.fragment),ZT=p(),Fc=o("p"),e$=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),t$=p(),ei=o("p"),s$=a("This model inherits from "),cl=o("a"),o$=a("FlaxPreTrainedModel"),n$=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),r$=p(),ti=o("p"),a$=a("This model is also a Flax Linen "),si=o("a"),i$=a("flax.linen.Module"),l$=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),d$=p(),Dc=o("p"),c$=a("Finally, this model supports inherent JAX features such as:"),p$=p(),Ct=o("ul"),xc=o("li"),oi=o("a"),h$=a("Just-In-Time (JIT) compilation"),m$=p(),Bc=o("li"),ni=o("a"),u$=a("Automatic Differentiation"),f$=p(),Mc=o("li"),ri=o("a"),g$=a("Vectorization"),_$=p(),Ec=o("li"),ai=o("a"),b$=a("Parallelization"),k$=p(),vt=o("div"),T(ii.$$.fragment),v$=p(),Ls=o("p"),T$=a("The "),zc=o("code"),$$=a("FlaxDistilBertPreTrainedModel"),w$=a(" forward method, overrides the "),jc=o("code"),y$=a("__call__"),F$=a(" special method."),D$=p(),T(dn.$$.fragment),x$=p(),T(cn.$$.fragment),fh=p(),Ss=o("h2"),pn=o("a"),Cc=o("span"),T(li.$$.fragment),B$=p(),qc=o("span"),M$=a("FlaxDistilBertForQuestionAnswering"),gh=p(),qe=o("div"),T(di.$$.fragment),E$=p(),Is=o("p"),z$=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Pc=o("code"),j$=a("span start logits"),C$=a(" and "),Ac=o("code"),q$=a("span end logits"),P$=a(")."),A$=p(),ci=o("p"),O$=a("This model inherits from "),pl=o("a"),N$=a("FlaxPreTrainedModel"),L$=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),S$=p(),pi=o("p"),I$=a("This model is also a Flax Linen "),hi=o("a"),W$=a("flax.linen.Module"),Q$=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),R$=p(),Oc=o("p"),U$=a("Finally, this model supports inherent JAX features such as:"),H$=p(),qt=o("ul"),Nc=o("li"),mi=o("a"),K$=a("Just-In-Time (JIT) compilation"),V$=p(),Lc=o("li"),ui=o("a"),J$=a("Automatic Differentiation"),G$=p(),Sc=o("li"),fi=o("a"),X$=a("Vectorization"),Y$=p(),Ic=o("li"),gi=o("a"),Z$=a("Parallelization"),ew=p(),Tt=o("div"),T(_i.$$.fragment),tw=p(),Ws=o("p"),sw=a("The "),Wc=o("code"),ow=a("FlaxDistilBertPreTrainedModel"),nw=a(" forward method, overrides the "),Qc=o("code"),rw=a("__call__"),aw=a(" special method."),iw=p(),T(hn.$$.fragment),lw=p(),T(mn.$$.fragment),this.h()},l(s){const k=sF('[data-svelte="svelte-1phssyn"]',document.head);d=n(k,"META",{name:!0,content:!0}),k.forEach(t),g=h(s),c=n(s,"H1",{class:!0});var bi=r(c);m=n(bi,"A",{id:!0,class:!0,href:!0});var Rc=r(m);_=n(Rc,"SPAN",{});var Uc=r(_);$(l.$$.fragment,Uc),Uc.forEach(t),Rc.forEach(t),u=h(bi),B=n(bi,"SPAN",{});var Hc=r(B);he=i(Hc,"DistilBERT"),Hc.forEach(t),bi.forEach(t),K=h(s),E=n(s,"H2",{class:!0});var ki=r(E);G=n(ki,"A",{id:!0,class:!0,href:!0});var Kc=r(G);S=n(Kc,"SPAN",{});var Vc=r(S);$(X.$$.fragment,Vc),Vc.forEach(t),Kc.forEach(t),me=h(ki),I=n(ki,"SPAN",{});var Jc=r(I);ue=i(Jc,"Overview"),Jc.forEach(t),ki.forEach(t),le=h(s),N=n(s,"P",{});var Pt=r(N);P=i(Pt,"The DistilBERT model was proposed in the blog post "),Y=n(Pt,"A",{href:!0,rel:!0});var Gc=r(Y);V=i(Gc,`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),Gc.forEach(t),z=i(Pt,", and the paper "),j=n(Pt,"A",{href:!0,rel:!0});var Xc=r(j);fe=i(Xc,`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),Xc.forEach(t),W=i(Pt,`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),se=n(Pt,"EM",{});var Yc=r(se);ge=i(Yc,"bert-base-uncased"),Yc.forEach(t),Q=i(Pt,`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),Pt.forEach(t),de=h(s),ee=n(s,"P",{});var Zc=r(ee);A=i(Zc,"The abstract from the paper is the following:"),Zc.forEach(t),ce=h(s),L=n(s,"P",{});var ep=r(L);oe=n(ep,"EM",{});var tp=r(oe);_e=i(tp,`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),tp.forEach(t),ep.forEach(t),q=h(s),te=n(s,"P",{});var sp=r(te);R=i(sp,"Tips:"),sp.forEach(t),pe=h(s),v=n(s,"UL",{});var vi=r(v);M=n(vi,"LI",{});var At=r(M);J=i(At,"DistilBERT doesn\u2019t have "),ke=n(At,"CODE",{});var op=r(ke);$e=i(op,"token_type_ids"),op.forEach(t),O=i(At,`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),ve=n(At,"CODE",{});var np=r(ve);we=i(np,"tokenizer.sep_token"),np.forEach(t),ye=i(At," (or "),C=n(At,"CODE",{});var rp=r(C);U=i(rp,"[SEP]"),rp.forEach(t),Fe=i(At,")."),At.forEach(t),De=h(vi),Z=n(vi,"LI",{});var Ti=r(Z);xe=i(Ti,"DistilBERT doesn\u2019t have options to select the input positions ("),ne=n(Ti,"CODE",{});var ap=r(ne);Be=i(ap,"position_ids"),ap.forEach(t),wm=i(Ti,` input). This could be added if
necessary though, just let us know if you need this option.`),Ti.forEach(t),vi.forEach(t),Bp=h(s),pt=n(s,"P",{});var Ot=r(pt);ym=i(Ot,"This model was contributed by "),jn=n(Ot,"A",{href:!0,rel:!0});var ip=r(jn);Fm=i(ip,"victorsanh"),ip.forEach(t),Dm=i(Ot,`. This model jax version was
contributed by `),Cn=n(Ot,"A",{href:!0,rel:!0});var lp=r(Cn);xm=i(lp,"kamalkraj"),lp.forEach(t),Bm=i(Ot,". The original code can be found "),qn=n(Ot,"A",{href:!0,rel:!0});var dp=r(qn);Mm=i(dp,"here"),dp.forEach(t),Em=i(Ot,"."),Ot.forEach(t),Mp=h(s),es=n(s,"H2",{class:!0});var $i=r(es);Rs=n($i,"A",{id:!0,class:!0,href:!0});var cp=r(Rs);Cl=n(cp,"SPAN",{});var pp=r(Cl);$(Pn.$$.fragment,pp),pp.forEach(t),cp.forEach(t),zm=h($i),ql=n($i,"SPAN",{});var hp=r(ql);jm=i(hp,"DistilBertConfig"),hp.forEach(t),$i.forEach(t),Ep=h(s),lt=n(s,"DIV",{class:!0});var Nt=r(lt);$(An.$$.fragment,Nt),Cm=h(Nt),Bt=n(Nt,"P",{});var Lt=r(Bt);qm=i(Lt,"This is the configuration class to store the configuration of a "),Di=n(Lt,"A",{href:!0});var mp=r(Di);Pm=i(mp,"DistilBertModel"),mp.forEach(t),Am=i(Lt," or a "),xi=n(Lt,"A",{href:!0});var up=r(xi);Om=i(up,"TFDistilBertModel"),up.forEach(t),Nm=i(Lt,`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),On=n(Lt,"A",{href:!0,rel:!0});var fp=r(On);Lm=i(fp,"distilbert-base-uncased"),fp.forEach(t),Sm=i(Lt," architecture."),Lt.forEach(t),Im=h(Nt),ts=n(Nt,"P",{});var Qs=r(ts);Wm=i(Qs,"Configuration objects inherit from "),Bi=n(Qs,"A",{href:!0});var gp=r(Bi);Qm=i(gp,"PretrainedConfig"),gp.forEach(t),Rm=i(Qs,` and can be used to control the model outputs. Read the
documentation from `),Mi=n(Qs,"A",{href:!0});var _p=r(Mi);Um=i(_p,"PretrainedConfig"),_p.forEach(t),Hm=i(Qs," for more information."),Qs.forEach(t),Km=h(Nt),$(Us.$$.fragment,Nt),Nt.forEach(t),zp=h(s),ss=n(s,"H2",{class:!0});var wi=r(ss);Hs=n(wi,"A",{id:!0,class:!0,href:!0});var bp=r(Hs);Pl=n(bp,"SPAN",{});var kp=r(Pl);$(Nn.$$.fragment,kp),kp.forEach(t),bp.forEach(t),Vm=h(wi),Al=n(wi,"SPAN",{});var vp=r(Al);Jm=i(vp,"DistilBertTokenizer"),vp.forEach(t),wi.forEach(t),jp=h(s),dt=n(s,"DIV",{class:!0});var St=r(dt);$(Ln.$$.fragment,St),Gm=h(St),Ol=n(St,"P",{});var Tp=r(Ol);Xm=i(Tp,"Construct a DistilBERT tokenizer."),Tp.forEach(t),Ym=h(St),Ks=n(St,"P",{});var un=r(Ks);Ei=n(un,"A",{href:!0});var $p=r(Ei);Zm=i($p,"DistilBertTokenizer"),$p.forEach(t),eu=i(un," is identical to "),zi=n(un,"A",{href:!0});var wp=r(zi);tu=i(wp,"BertTokenizer"),wp.forEach(t),su=i(un,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),un.forEach(t),ou=h(St),Sn=n(St,"P",{});var yi=r(Sn);nu=i(yi,"Refer to superclass "),ji=n(yi,"A",{href:!0});var yp=r(ji);ru=i(yp,"BertTokenizer"),yp.forEach(t),au=i(yi," for usage examples and documentation concerning parameters."),yi.forEach(t),St.forEach(t),Cp=h(s),os=n(s,"H2",{class:!0});var Fi=r(os);Vs=n(Fi,"A",{id:!0,class:!0,href:!0});var Fp=r(Vs);Nl=n(Fp,"SPAN",{});var Dp=r(Nl);$(In.$$.fragment,Dp),Dp.forEach(t),Fp.forEach(t),iu=h(Fi),Ll=n(Fi,"SPAN",{});var dw=r(Ll);lu=i(dw,"DistilBertTokenizerFast"),dw.forEach(t),Fi.forEach(t),qp=h(s),ct=n(s,"DIV",{class:!0});var fn=r(ct);$(Wn.$$.fragment,fn),du=h(fn),Qn=n(fn,"P",{});var bh=r(Qn);cu=i(bh,"Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),Sl=n(bh,"EM",{});var cw=r(Sl);pu=i(cw,"tokenizers"),cw.forEach(t),hu=i(bh," library)."),bh.forEach(t),mu=h(fn),Js=n(fn,"P",{});var xp=r(Js);Ci=n(xp,"A",{href:!0});var pw=r(Ci);uu=i(pw,"DistilBertTokenizerFast"),pw.forEach(t),fu=i(xp," is identical to "),qi=n(xp,"A",{href:!0});var hw=r(qi);gu=i(hw,"BertTokenizerFast"),hw.forEach(t),_u=i(xp,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),xp.forEach(t),bu=h(fn),Rn=n(fn,"P",{});var kh=r(Rn);ku=i(kh,"Refer to superclass "),Pi=n(kh,"A",{href:!0});var mw=r(Pi);vu=i(mw,"BertTokenizerFast"),mw.forEach(t),Tu=i(kh," for usage examples and documentation concerning parameters."),kh.forEach(t),fn.forEach(t),Pp=h(s),ns=n(s,"H2",{class:!0});var vh=r(ns);Gs=n(vh,"A",{id:!0,class:!0,href:!0});var uw=r(Gs);Il=n(uw,"SPAN",{});var fw=r(Il);$(Un.$$.fragment,fw),fw.forEach(t),uw.forEach(t),$u=h(vh),Wl=n(vh,"SPAN",{});var gw=r(Wl);wu=i(gw,"DistilBertModel"),gw.forEach(t),vh.forEach(t),Ap=h(s),We=n(s,"DIV",{class:!0});var It=r(We);$(Hn.$$.fragment,It),yu=h(It),Ql=n(It,"P",{});var _w=r(Ql);Fu=i(_w,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),_w.forEach(t),Du=h(It),Kn=n(It,"P",{});var Th=r(Kn);xu=i(Th,"This model inherits from "),Ai=n(Th,"A",{href:!0});var bw=r(Ai);Bu=i(bw,"PreTrainedModel"),bw.forEach(t),Mu=i(Th,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Th.forEach(t),Eu=h(It),Vn=n(It,"P",{});var $h=r(Vn);zu=i($h,"This model is also a PyTorch "),Jn=n($h,"A",{href:!0,rel:!0});var kw=r(Jn);ju=i(kw,"torch.nn.Module"),kw.forEach(t),Cu=i($h,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$h.forEach(t),qu=h(It),ht=n(It,"DIV",{class:!0});var gn=r(ht);$(Gn.$$.fragment,gn),Pu=h(gn),rs=n(gn,"P",{});var hl=r(rs);Au=i(hl,"The "),Oi=n(hl,"A",{href:!0});var vw=r(Oi);Ou=i(vw,"DistilBertModel"),vw.forEach(t),Nu=i(hl," forward method, overrides the "),Rl=n(hl,"CODE",{});var Tw=r(Rl);Lu=i(Tw,"__call__"),Tw.forEach(t),Su=i(hl," special method."),hl.forEach(t),Iu=h(gn),$(Xs.$$.fragment,gn),Wu=h(gn),$(Ys.$$.fragment,gn),gn.forEach(t),It.forEach(t),Op=h(s),as=n(s,"H2",{class:!0});var wh=r(as);Zs=n(wh,"A",{id:!0,class:!0,href:!0});var $w=r(Zs);Ul=n($w,"SPAN",{});var ww=r(Ul);$(Xn.$$.fragment,ww),ww.forEach(t),$w.forEach(t),Qu=h(wh),Hl=n(wh,"SPAN",{});var yw=r(Hl);Ru=i(yw,"DistilBertForMaskedLM"),yw.forEach(t),wh.forEach(t),Np=h(s),Qe=n(s,"DIV",{class:!0});var Wt=r(Qe);$(Yn.$$.fragment,Wt),Uu=h(Wt),Zn=n(Wt,"P",{});var yh=r(Zn);Hu=i(yh,"DistilBert Model with a "),Kl=n(yh,"CODE",{});var Fw=r(Kl);Ku=i(Fw,"masked language modeling"),Fw.forEach(t),Vu=i(yh," head on top."),yh.forEach(t),Ju=h(Wt),er=n(Wt,"P",{});var Fh=r(er);Gu=i(Fh,"This model inherits from "),Ni=n(Fh,"A",{href:!0});var Dw=r(Ni);Xu=i(Dw,"PreTrainedModel"),Dw.forEach(t),Yu=i(Fh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fh.forEach(t),Zu=h(Wt),tr=n(Wt,"P",{});var Dh=r(tr);ef=i(Dh,"This model is also a PyTorch "),sr=n(Dh,"A",{href:!0,rel:!0});var xw=r(sr);tf=i(xw,"torch.nn.Module"),xw.forEach(t),sf=i(Dh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dh.forEach(t),of=h(Wt),Ve=n(Wt,"DIV",{class:!0});var Qt=r(Ve);$(or.$$.fragment,Qt),nf=h(Qt),is=n(Qt,"P",{});var ml=r(is);rf=i(ml,"The "),Li=n(ml,"A",{href:!0});var Bw=r(Li);af=i(Bw,"DistilBertForMaskedLM"),Bw.forEach(t),lf=i(ml," forward method, overrides the "),Vl=n(ml,"CODE",{});var Mw=r(Vl);df=i(Mw,"__call__"),Mw.forEach(t),cf=i(ml," special method."),ml.forEach(t),pf=h(Qt),$(eo.$$.fragment,Qt),hf=h(Qt),$(to.$$.fragment,Qt),mf=h(Qt),$(so.$$.fragment,Qt),Qt.forEach(t),Wt.forEach(t),Lp=h(s),ls=n(s,"H2",{class:!0});var xh=r(ls);oo=n(xh,"A",{id:!0,class:!0,href:!0});var Ew=r(oo);Jl=n(Ew,"SPAN",{});var zw=r(Jl);$(nr.$$.fragment,zw),zw.forEach(t),Ew.forEach(t),uf=h(xh),Gl=n(xh,"SPAN",{});var jw=r(Gl);ff=i(jw,"DistilBertForSequenceClassification"),jw.forEach(t),xh.forEach(t),Sp=h(s),Re=n(s,"DIV",{class:!0});var Rt=r(Re);$(rr.$$.fragment,Rt),gf=h(Rt),Xl=n(Rt,"P",{});var Cw=r(Xl);_f=i(Cw,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Cw.forEach(t),bf=h(Rt),ar=n(Rt,"P",{});var Bh=r(ar);kf=i(Bh,"This model inherits from "),Si=n(Bh,"A",{href:!0});var qw=r(Si);vf=i(qw,"PreTrainedModel"),qw.forEach(t),Tf=i(Bh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bh.forEach(t),$f=h(Rt),ir=n(Rt,"P",{});var Mh=r(ir);wf=i(Mh,"This model is also a PyTorch "),lr=n(Mh,"A",{href:!0,rel:!0});var Pw=r(lr);yf=i(Pw,"torch.nn.Module"),Pw.forEach(t),Ff=i(Mh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mh.forEach(t),Df=h(Rt),Pe=n(Rt,"DIV",{class:!0});var tt=r(Pe);$(dr.$$.fragment,tt),xf=h(tt),ds=n(tt,"P",{});var ul=r(ds);Bf=i(ul,"The "),Ii=n(ul,"A",{href:!0});var Aw=r(Ii);Mf=i(Aw,"DistilBertForSequenceClassification"),Aw.forEach(t),Ef=i(ul," forward method, overrides the "),Yl=n(ul,"CODE",{});var Ow=r(Yl);zf=i(Ow,"__call__"),Ow.forEach(t),jf=i(ul," special method."),ul.forEach(t),Cf=h(tt),$(no.$$.fragment,tt),qf=h(tt),$(ro.$$.fragment,tt),Pf=h(tt),$(ao.$$.fragment,tt),Af=h(tt),$(io.$$.fragment,tt),Of=h(tt),$(lo.$$.fragment,tt),tt.forEach(t),Rt.forEach(t),Ip=h(s),cs=n(s,"H2",{class:!0});var Eh=r(cs);co=n(Eh,"A",{id:!0,class:!0,href:!0});var Nw=r(co);Zl=n(Nw,"SPAN",{});var Lw=r(Zl);$(cr.$$.fragment,Lw),Lw.forEach(t),Nw.forEach(t),Nf=h(Eh),ed=n(Eh,"SPAN",{});var Sw=r(ed);Lf=i(Sw,"DistilBertForMultipleChoice"),Sw.forEach(t),Eh.forEach(t),Wp=h(s),Ue=n(s,"DIV",{class:!0});var Ut=r(Ue);$(pr.$$.fragment,Ut),Sf=h(Ut),td=n(Ut,"P",{});var Iw=r(td);If=i(Iw,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Iw.forEach(t),Wf=h(Ut),hr=n(Ut,"P",{});var zh=r(hr);Qf=i(zh,"This model inherits from "),Wi=n(zh,"A",{href:!0});var Ww=r(Wi);Rf=i(Ww,"PreTrainedModel"),Ww.forEach(t),Uf=i(zh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zh.forEach(t),Hf=h(Ut),mr=n(Ut,"P",{});var jh=r(mr);Kf=i(jh,"This model is also a PyTorch "),ur=n(jh,"A",{href:!0,rel:!0});var Qw=r(ur);Vf=i(Qw,"torch.nn.Module"),Qw.forEach(t),Jf=i(jh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jh.forEach(t),Gf=h(Ut),mt=n(Ut,"DIV",{class:!0});var _n=r(mt);$(fr.$$.fragment,_n),Xf=h(_n),ps=n(_n,"P",{});var fl=r(ps);Yf=i(fl,"The "),Qi=n(fl,"A",{href:!0});var Rw=r(Qi);Zf=i(Rw,"DistilBertForMultipleChoice"),Rw.forEach(t),eg=i(fl," forward method, overrides the "),sd=n(fl,"CODE",{});var Uw=r(sd);tg=i(Uw,"__call__"),Uw.forEach(t),sg=i(fl," special method."),fl.forEach(t),og=h(_n),$(po.$$.fragment,_n),ng=h(_n),$(ho.$$.fragment,_n),_n.forEach(t),Ut.forEach(t),Qp=h(s),hs=n(s,"H2",{class:!0});var Ch=r(hs);mo=n(Ch,"A",{id:!0,class:!0,href:!0});var Hw=r(mo);od=n(Hw,"SPAN",{});var Kw=r(od);$(gr.$$.fragment,Kw),Kw.forEach(t),Hw.forEach(t),rg=h(Ch),nd=n(Ch,"SPAN",{});var Vw=r(nd);ag=i(Vw,"DistilBertForTokenClassification"),Vw.forEach(t),Ch.forEach(t),Rp=h(s),He=n(s,"DIV",{class:!0});var Ht=r(He);$(_r.$$.fragment,Ht),ig=h(Ht),rd=n(Ht,"P",{});var Jw=r(rd);lg=i(Jw,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Jw.forEach(t),dg=h(Ht),br=n(Ht,"P",{});var qh=r(br);cg=i(qh,"This model inherits from "),Ri=n(qh,"A",{href:!0});var Gw=r(Ri);pg=i(Gw,"PreTrainedModel"),Gw.forEach(t),hg=i(qh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qh.forEach(t),mg=h(Ht),kr=n(Ht,"P",{});var Ph=r(kr);ug=i(Ph,"This model is also a PyTorch "),vr=n(Ph,"A",{href:!0,rel:!0});var Xw=r(vr);fg=i(Xw,"torch.nn.Module"),Xw.forEach(t),gg=i(Ph,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ph.forEach(t),_g=h(Ht),Je=n(Ht,"DIV",{class:!0});var Kt=r(Je);$(Tr.$$.fragment,Kt),bg=h(Kt),ms=n(Kt,"P",{});var gl=r(ms);kg=i(gl,"The "),Ui=n(gl,"A",{href:!0});var Yw=r(Ui);vg=i(Yw,"DistilBertForTokenClassification"),Yw.forEach(t),Tg=i(gl," forward method, overrides the "),ad=n(gl,"CODE",{});var Zw=r(ad);$g=i(Zw,"__call__"),Zw.forEach(t),wg=i(gl," special method."),gl.forEach(t),yg=h(Kt),$(uo.$$.fragment,Kt),Fg=h(Kt),$(fo.$$.fragment,Kt),Dg=h(Kt),$(go.$$.fragment,Kt),Kt.forEach(t),Ht.forEach(t),Up=h(s),us=n(s,"H2",{class:!0});var Ah=r(us);_o=n(Ah,"A",{id:!0,class:!0,href:!0});var ey=r(_o);id=n(ey,"SPAN",{});var ty=r(id);$($r.$$.fragment,ty),ty.forEach(t),ey.forEach(t),xg=h(Ah),ld=n(Ah,"SPAN",{});var sy=r(ld);Bg=i(sy,"DistilBertForQuestionAnswering"),sy.forEach(t),Ah.forEach(t),Hp=h(s),Ke=n(s,"DIV",{class:!0});var Vt=r(Ke);$(wr.$$.fragment,Vt),Mg=h(Vt),fs=n(Vt,"P",{});var _l=r(fs);Eg=i(_l,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),dd=n(_l,"CODE",{});var oy=r(dd);zg=i(oy,"span start logits"),oy.forEach(t),jg=i(_l," and "),cd=n(_l,"CODE",{});var ny=r(cd);Cg=i(ny,"span end logits"),ny.forEach(t),qg=i(_l,")."),_l.forEach(t),Pg=h(Vt),yr=n(Vt,"P",{});var Oh=r(yr);Ag=i(Oh,"This model inherits from "),Hi=n(Oh,"A",{href:!0});var ry=r(Hi);Og=i(ry,"PreTrainedModel"),ry.forEach(t),Ng=i(Oh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oh.forEach(t),Lg=h(Vt),Fr=n(Vt,"P",{});var Nh=r(Fr);Sg=i(Nh,"This model is also a PyTorch "),Dr=n(Nh,"A",{href:!0,rel:!0});var ay=r(Dr);Ig=i(ay,"torch.nn.Module"),ay.forEach(t),Wg=i(Nh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nh.forEach(t),Qg=h(Vt),Ge=n(Vt,"DIV",{class:!0});var Jt=r(Ge);$(xr.$$.fragment,Jt),Rg=h(Jt),gs=n(Jt,"P",{});var bl=r(gs);Ug=i(bl,"The "),Ki=n(bl,"A",{href:!0});var iy=r(Ki);Hg=i(iy,"DistilBertForQuestionAnswering"),iy.forEach(t),Kg=i(bl," forward method, overrides the "),pd=n(bl,"CODE",{});var ly=r(pd);Vg=i(ly,"__call__"),ly.forEach(t),Jg=i(bl," special method."),bl.forEach(t),Gg=h(Jt),$(bo.$$.fragment,Jt),Xg=h(Jt),$(ko.$$.fragment,Jt),Yg=h(Jt),$(vo.$$.fragment,Jt),Jt.forEach(t),Vt.forEach(t),Kp=h(s),_s=n(s,"H2",{class:!0});var Lh=r(_s);To=n(Lh,"A",{id:!0,class:!0,href:!0});var dy=r(To);hd=n(dy,"SPAN",{});var cy=r(hd);$(Br.$$.fragment,cy),cy.forEach(t),dy.forEach(t),Zg=h(Lh),md=n(Lh,"SPAN",{});var py=r(md);e_=i(py,"TFDistilBertModel"),py.forEach(t),Lh.forEach(t),Vp=h(s),Ae=n(s,"DIV",{class:!0});var $t=r(Ae);$(Mr.$$.fragment,$t),t_=h($t),ud=n($t,"P",{});var hy=r(ud);s_=i(hy,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),hy.forEach(t),o_=h($t),Er=n($t,"P",{});var Sh=r(Er);n_=i(Sh,"This model inherits from "),Vi=n(Sh,"A",{href:!0});var my=r(Vi);r_=i(my,"TFPreTrainedModel"),my.forEach(t),a_=i(Sh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sh.forEach(t),i_=h($t),zr=n($t,"P",{});var Ih=r(zr);l_=i(Ih,"This model is also a "),jr=n(Ih,"A",{href:!0,rel:!0});var uy=r(jr);d_=i(uy,"tf.keras.Model"),uy.forEach(t),c_=i(Ih,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ih.forEach(t),p_=h($t),$($o.$$.fragment,$t),h_=h($t),ut=n($t,"DIV",{class:!0});var bn=r(ut);$(Cr.$$.fragment,bn),m_=h(bn),bs=n(bn,"P",{});var kl=r(bs);u_=i(kl,"The "),Ji=n(kl,"A",{href:!0});var fy=r(Ji);f_=i(fy,"TFDistilBertModel"),fy.forEach(t),g_=i(kl," forward method, overrides the "),fd=n(kl,"CODE",{});var gy=r(fd);__=i(gy,"__call__"),gy.forEach(t),b_=i(kl," special method."),kl.forEach(t),k_=h(bn),$(wo.$$.fragment,bn),v_=h(bn),$(yo.$$.fragment,bn),bn.forEach(t),$t.forEach(t),Jp=h(s),ks=n(s,"H2",{class:!0});var Wh=r(ks);Fo=n(Wh,"A",{id:!0,class:!0,href:!0});var _y=r(Fo);gd=n(_y,"SPAN",{});var by=r(gd);$(qr.$$.fragment,by),by.forEach(t),_y.forEach(t),T_=h(Wh),_d=n(Wh,"SPAN",{});var ky=r(_d);$_=i(ky,"TFDistilBertForMaskedLM"),ky.forEach(t),Wh.forEach(t),Gp=h(s),Oe=n(s,"DIV",{class:!0});var wt=r(Oe);$(Pr.$$.fragment,wt),w_=h(wt),Ar=n(wt,"P",{});var Qh=r(Ar);y_=i(Qh,"DistilBert Model with a "),bd=n(Qh,"CODE",{});var vy=r(bd);F_=i(vy,"masked language modeling"),vy.forEach(t),D_=i(Qh," head on top."),Qh.forEach(t),x_=h(wt),Or=n(wt,"P",{});var Rh=r(Or);B_=i(Rh,"This model inherits from "),Gi=n(Rh,"A",{href:!0});var Ty=r(Gi);M_=i(Ty,"TFPreTrainedModel"),Ty.forEach(t),E_=i(Rh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rh.forEach(t),z_=h(wt),Nr=n(wt,"P",{});var Uh=r(Nr);j_=i(Uh,"This model is also a "),Lr=n(Uh,"A",{href:!0,rel:!0});var $y=r(Lr);C_=i($y,"tf.keras.Model"),$y.forEach(t),q_=i(Uh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Uh.forEach(t),P_=h(wt),$(Do.$$.fragment,wt),A_=h(wt),Xe=n(wt,"DIV",{class:!0});var Gt=r(Xe);$(Sr.$$.fragment,Gt),O_=h(Gt),vs=n(Gt,"P",{});var vl=r(vs);N_=i(vl,"The "),Xi=n(vl,"A",{href:!0});var wy=r(Xi);L_=i(wy,"TFDistilBertForMaskedLM"),wy.forEach(t),S_=i(vl," forward method, overrides the "),kd=n(vl,"CODE",{});var yy=r(kd);I_=i(yy,"__call__"),yy.forEach(t),W_=i(vl," special method."),vl.forEach(t),Q_=h(Gt),$(xo.$$.fragment,Gt),R_=h(Gt),$(Bo.$$.fragment,Gt),U_=h(Gt),$(Mo.$$.fragment,Gt),Gt.forEach(t),wt.forEach(t),Xp=h(s),Ts=n(s,"H2",{class:!0});var Hh=r(Ts);Eo=n(Hh,"A",{id:!0,class:!0,href:!0});var Fy=r(Eo);vd=n(Fy,"SPAN",{});var Dy=r(vd);$(Ir.$$.fragment,Dy),Dy.forEach(t),Fy.forEach(t),H_=h(Hh),Td=n(Hh,"SPAN",{});var xy=r(Td);K_=i(xy,"TFDistilBertForSequenceClassification"),xy.forEach(t),Hh.forEach(t),Yp=h(s),Ne=n(s,"DIV",{class:!0});var yt=r(Ne);$(Wr.$$.fragment,yt),V_=h(yt),$d=n(yt,"P",{});var By=r($d);J_=i(By,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),By.forEach(t),G_=h(yt),Qr=n(yt,"P",{});var Kh=r(Qr);X_=i(Kh,"This model inherits from "),Yi=n(Kh,"A",{href:!0});var My=r(Yi);Y_=i(My,"TFPreTrainedModel"),My.forEach(t),Z_=i(Kh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kh.forEach(t),eb=h(yt),Rr=n(yt,"P",{});var Vh=r(Rr);tb=i(Vh,"This model is also a "),Ur=n(Vh,"A",{href:!0,rel:!0});var Ey=r(Ur);sb=i(Ey,"tf.keras.Model"),Ey.forEach(t),ob=i(Vh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vh.forEach(t),nb=h(yt),$(zo.$$.fragment,yt),rb=h(yt),Ye=n(yt,"DIV",{class:!0});var Xt=r(Ye);$(Hr.$$.fragment,Xt),ab=h(Xt),$s=n(Xt,"P",{});var Tl=r($s);ib=i(Tl,"The "),Zi=n(Tl,"A",{href:!0});var zy=r(Zi);lb=i(zy,"TFDistilBertForSequenceClassification"),zy.forEach(t),db=i(Tl," forward method, overrides the "),wd=n(Tl,"CODE",{});var jy=r(wd);cb=i(jy,"__call__"),jy.forEach(t),pb=i(Tl," special method."),Tl.forEach(t),hb=h(Xt),$(jo.$$.fragment,Xt),mb=h(Xt),$(Co.$$.fragment,Xt),ub=h(Xt),$(qo.$$.fragment,Xt),Xt.forEach(t),yt.forEach(t),Zp=h(s),ws=n(s,"H2",{class:!0});var Jh=r(ws);Po=n(Jh,"A",{id:!0,class:!0,href:!0});var Cy=r(Po);yd=n(Cy,"SPAN",{});var qy=r(yd);$(Kr.$$.fragment,qy),qy.forEach(t),Cy.forEach(t),fb=h(Jh),Fd=n(Jh,"SPAN",{});var Py=r(Fd);gb=i(Py,"TFDistilBertForMultipleChoice"),Py.forEach(t),Jh.forEach(t),eh=h(s),Le=n(s,"DIV",{class:!0});var Ft=r(Le);$(Vr.$$.fragment,Ft),_b=h(Ft),Dd=n(Ft,"P",{});var Ay=r(Dd);bb=i(Ay,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Ay.forEach(t),kb=h(Ft),Jr=n(Ft,"P",{});var Gh=r(Jr);vb=i(Gh,"This model inherits from "),el=n(Gh,"A",{href:!0});var Oy=r(el);Tb=i(Oy,"TFPreTrainedModel"),Oy.forEach(t),$b=i(Gh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gh.forEach(t),wb=h(Ft),Gr=n(Ft,"P",{});var Xh=r(Gr);yb=i(Xh,"This model is also a "),Xr=n(Xh,"A",{href:!0,rel:!0});var Ny=r(Xr);Fb=i(Ny,"tf.keras.Model"),Ny.forEach(t),Db=i(Xh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xh.forEach(t),xb=h(Ft),$(Ao.$$.fragment,Ft),Bb=h(Ft),ft=n(Ft,"DIV",{class:!0});var kn=r(ft);$(Yr.$$.fragment,kn),Mb=h(kn),ys=n(kn,"P",{});var $l=r(ys);Eb=i($l,"The "),tl=n($l,"A",{href:!0});var Ly=r(tl);zb=i(Ly,"TFDistilBertForMultipleChoice"),Ly.forEach(t),jb=i($l," forward method, overrides the "),xd=n($l,"CODE",{});var Sy=r(xd);Cb=i(Sy,"__call__"),Sy.forEach(t),qb=i($l," special method."),$l.forEach(t),Pb=h(kn),$(Oo.$$.fragment,kn),Ab=h(kn),$(No.$$.fragment,kn),kn.forEach(t),Ft.forEach(t),th=h(s),Fs=n(s,"H2",{class:!0});var Yh=r(Fs);Lo=n(Yh,"A",{id:!0,class:!0,href:!0});var Iy=r(Lo);Bd=n(Iy,"SPAN",{});var Wy=r(Bd);$(Zr.$$.fragment,Wy),Wy.forEach(t),Iy.forEach(t),Ob=h(Yh),Md=n(Yh,"SPAN",{});var Qy=r(Md);Nb=i(Qy,"TFDistilBertForTokenClassification"),Qy.forEach(t),Yh.forEach(t),sh=h(s),Se=n(s,"DIV",{class:!0});var Dt=r(Se);$(ea.$$.fragment,Dt),Lb=h(Dt),Ed=n(Dt,"P",{});var Ry=r(Ed);Sb=i(Ry,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Ry.forEach(t),Ib=h(Dt),ta=n(Dt,"P",{});var Zh=r(ta);Wb=i(Zh,"This model inherits from "),sl=n(Zh,"A",{href:!0});var Uy=r(sl);Qb=i(Uy,"TFPreTrainedModel"),Uy.forEach(t),Rb=i(Zh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zh.forEach(t),Ub=h(Dt),sa=n(Dt,"P",{});var em=r(sa);Hb=i(em,"This model is also a "),oa=n(em,"A",{href:!0,rel:!0});var Hy=r(oa);Kb=i(Hy,"tf.keras.Model"),Hy.forEach(t),Vb=i(em,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),em.forEach(t),Jb=h(Dt),$(So.$$.fragment,Dt),Gb=h(Dt),Ze=n(Dt,"DIV",{class:!0});var Yt=r(Ze);$(na.$$.fragment,Yt),Xb=h(Yt),Ds=n(Yt,"P",{});var wl=r(Ds);Yb=i(wl,"The "),ol=n(wl,"A",{href:!0});var Ky=r(ol);Zb=i(Ky,"TFDistilBertForTokenClassification"),Ky.forEach(t),ek=i(wl," forward method, overrides the "),zd=n(wl,"CODE",{});var Vy=r(zd);tk=i(Vy,"__call__"),Vy.forEach(t),sk=i(wl," special method."),wl.forEach(t),ok=h(Yt),$(Io.$$.fragment,Yt),nk=h(Yt),$(Wo.$$.fragment,Yt),rk=h(Yt),$(Qo.$$.fragment,Yt),Yt.forEach(t),Dt.forEach(t),oh=h(s),xs=n(s,"H2",{class:!0});var tm=r(xs);Ro=n(tm,"A",{id:!0,class:!0,href:!0});var Jy=r(Ro);jd=n(Jy,"SPAN",{});var Gy=r(jd);$(ra.$$.fragment,Gy),Gy.forEach(t),Jy.forEach(t),ak=h(tm),Cd=n(tm,"SPAN",{});var Xy=r(Cd);ik=i(Xy,"TFDistilBertForQuestionAnswering"),Xy.forEach(t),tm.forEach(t),nh=h(s),Ie=n(s,"DIV",{class:!0});var xt=r(Ie);$(aa.$$.fragment,xt),lk=h(xt),Bs=n(xt,"P",{});var yl=r(Bs);dk=i(yl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),qd=n(yl,"CODE",{});var Yy=r(qd);ck=i(Yy,"span start logits"),Yy.forEach(t),pk=i(yl," and "),Pd=n(yl,"CODE",{});var Zy=r(Pd);hk=i(Zy,"span end logits"),Zy.forEach(t),mk=i(yl,")."),yl.forEach(t),uk=h(xt),ia=n(xt,"P",{});var sm=r(ia);fk=i(sm,"This model inherits from "),nl=n(sm,"A",{href:!0});var e1=r(nl);gk=i(e1,"TFPreTrainedModel"),e1.forEach(t),_k=i(sm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sm.forEach(t),bk=h(xt),la=n(xt,"P",{});var om=r(la);kk=i(om,"This model is also a "),da=n(om,"A",{href:!0,rel:!0});var t1=r(da);vk=i(t1,"tf.keras.Model"),t1.forEach(t),Tk=i(om,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),om.forEach(t),$k=h(xt),$(Uo.$$.fragment,xt),wk=h(xt),et=n(xt,"DIV",{class:!0});var Zt=r(et);$(ca.$$.fragment,Zt),yk=h(Zt),Ms=n(Zt,"P",{});var Fl=r(Ms);Fk=i(Fl,"The "),rl=n(Fl,"A",{href:!0});var s1=r(rl);Dk=i(s1,"TFDistilBertForQuestionAnswering"),s1.forEach(t),xk=i(Fl," forward method, overrides the "),Ad=n(Fl,"CODE",{});var o1=r(Ad);Bk=i(o1,"__call__"),o1.forEach(t),Mk=i(Fl," special method."),Fl.forEach(t),Ek=h(Zt),$(Ho.$$.fragment,Zt),zk=h(Zt),$(Ko.$$.fragment,Zt),jk=h(Zt),$(Vo.$$.fragment,Zt),Zt.forEach(t),xt.forEach(t),rh=h(s),Es=n(s,"H2",{class:!0});var nm=r(Es);Jo=n(nm,"A",{id:!0,class:!0,href:!0});var n1=r(Jo);Od=n(n1,"SPAN",{});var r1=r(Od);$(pa.$$.fragment,r1),r1.forEach(t),n1.forEach(t),Ck=h(nm),Nd=n(nm,"SPAN",{});var a1=r(Nd);qk=i(a1,"FlaxDistilBertModel"),a1.forEach(t),nm.forEach(t),ah=h(s),Me=n(s,"DIV",{class:!0});var st=r(Me);$(ha.$$.fragment,st),Pk=h(st),Ld=n(st,"P",{});var i1=r(Ld);Ak=i(i1,"The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),i1.forEach(t),Ok=h(st),ma=n(st,"P",{});var rm=r(ma);Nk=i(rm,"This model inherits from "),al=n(rm,"A",{href:!0});var l1=r(al);Lk=i(l1,"FlaxPreTrainedModel"),l1.forEach(t),Sk=i(rm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),rm.forEach(t),Ik=h(st),ua=n(st,"P",{});var am=r(ua);Wk=i(am,"This model is also a Flax Linen "),fa=n(am,"A",{href:!0,rel:!0});var d1=r(fa);Qk=i(d1,"flax.linen.Module"),d1.forEach(t),Rk=i(am,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),am.forEach(t),Uk=h(st),Sd=n(st,"P",{});var c1=r(Sd);Hk=i(c1,"Finally, this model supports inherent JAX features such as:"),c1.forEach(t),Kk=h(st),Mt=n(st,"UL",{});var vn=r(Mt);Id=n(vn,"LI",{});var p1=r(Id);ga=n(p1,"A",{href:!0,rel:!0});var h1=r(ga);Vk=i(h1,"Just-In-Time (JIT) compilation"),h1.forEach(t),p1.forEach(t),Jk=h(vn),Wd=n(vn,"LI",{});var m1=r(Wd);_a=n(m1,"A",{href:!0,rel:!0});var u1=r(_a);Gk=i(u1,"Automatic Differentiation"),u1.forEach(t),m1.forEach(t),Xk=h(vn),Qd=n(vn,"LI",{});var f1=r(Qd);ba=n(f1,"A",{href:!0,rel:!0});var g1=r(ba);Yk=i(g1,"Vectorization"),g1.forEach(t),f1.forEach(t),Zk=h(vn),Rd=n(vn,"LI",{});var _1=r(Rd);ka=n(_1,"A",{href:!0,rel:!0});var b1=r(ka);ev=i(b1,"Parallelization"),b1.forEach(t),_1.forEach(t),vn.forEach(t),tv=h(st),gt=n(st,"DIV",{class:!0});var Tn=r(gt);$(va.$$.fragment,Tn),sv=h(Tn),zs=n(Tn,"P",{});var Dl=r(zs);ov=i(Dl,"The "),Ud=n(Dl,"CODE",{});var k1=r(Ud);nv=i(k1,"FlaxDistilBertPreTrainedModel"),k1.forEach(t),rv=i(Dl," forward method, overrides the "),Hd=n(Dl,"CODE",{});var v1=r(Hd);av=i(v1,"__call__"),v1.forEach(t),iv=i(Dl," special method."),Dl.forEach(t),lv=h(Tn),$(Go.$$.fragment,Tn),dv=h(Tn),$(Xo.$$.fragment,Tn),Tn.forEach(t),st.forEach(t),ih=h(s),js=n(s,"H2",{class:!0});var im=r(js);Yo=n(im,"A",{id:!0,class:!0,href:!0});var T1=r(Yo);Kd=n(T1,"SPAN",{});var $1=r(Kd);$(Ta.$$.fragment,$1),$1.forEach(t),T1.forEach(t),cv=h(im),Vd=n(im,"SPAN",{});var w1=r(Vd);pv=i(w1,"FlaxDistilBertForMaskedLM"),w1.forEach(t),im.forEach(t),lh=h(s),Ee=n(s,"DIV",{class:!0});var ot=r(Ee);$($a.$$.fragment,ot),hv=h(ot),wa=n(ot,"P",{});var lm=r(wa);mv=i(lm,"DistilBert Model with a "),Jd=n(lm,"CODE",{});var y1=r(Jd);uv=i(y1,"language modeling"),y1.forEach(t),fv=i(lm," head on top."),lm.forEach(t),gv=h(ot),ya=n(ot,"P",{});var dm=r(ya);_v=i(dm,"This model inherits from "),il=n(dm,"A",{href:!0});var F1=r(il);bv=i(F1,"FlaxPreTrainedModel"),F1.forEach(t),kv=i(dm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),dm.forEach(t),vv=h(ot),Fa=n(ot,"P",{});var cm=r(Fa);Tv=i(cm,"This model is also a Flax Linen "),Da=n(cm,"A",{href:!0,rel:!0});var D1=r(Da);$v=i(D1,"flax.linen.Module"),D1.forEach(t),wv=i(cm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),cm.forEach(t),yv=h(ot),Gd=n(ot,"P",{});var x1=r(Gd);Fv=i(x1,"Finally, this model supports inherent JAX features such as:"),x1.forEach(t),Dv=h(ot),Et=n(ot,"UL",{});var $n=r(Et);Xd=n($n,"LI",{});var B1=r(Xd);xa=n(B1,"A",{href:!0,rel:!0});var M1=r(xa);xv=i(M1,"Just-In-Time (JIT) compilation"),M1.forEach(t),B1.forEach(t),Bv=h($n),Yd=n($n,"LI",{});var E1=r(Yd);Ba=n(E1,"A",{href:!0,rel:!0});var z1=r(Ba);Mv=i(z1,"Automatic Differentiation"),z1.forEach(t),E1.forEach(t),Ev=h($n),Zd=n($n,"LI",{});var j1=r(Zd);Ma=n(j1,"A",{href:!0,rel:!0});var C1=r(Ma);zv=i(C1,"Vectorization"),C1.forEach(t),j1.forEach(t),jv=h($n),ec=n($n,"LI",{});var q1=r(ec);Ea=n(q1,"A",{href:!0,rel:!0});var P1=r(Ea);Cv=i(P1,"Parallelization"),P1.forEach(t),q1.forEach(t),$n.forEach(t),qv=h(ot),_t=n(ot,"DIV",{class:!0});var wn=r(_t);$(za.$$.fragment,wn),Pv=h(wn),Cs=n(wn,"P",{});var xl=r(Cs);Av=i(xl,"The "),tc=n(xl,"CODE",{});var A1=r(tc);Ov=i(A1,"FlaxDistilBertPreTrainedModel"),A1.forEach(t),Nv=i(xl," forward method, overrides the "),sc=n(xl,"CODE",{});var O1=r(sc);Lv=i(O1,"__call__"),O1.forEach(t),Sv=i(xl," special method."),xl.forEach(t),Iv=h(wn),$(Zo.$$.fragment,wn),Wv=h(wn),$(en.$$.fragment,wn),wn.forEach(t),ot.forEach(t),dh=h(s),qs=n(s,"H2",{class:!0});var pm=r(qs);tn=n(pm,"A",{id:!0,class:!0,href:!0});var N1=r(tn);oc=n(N1,"SPAN",{});var L1=r(oc);$(ja.$$.fragment,L1),L1.forEach(t),N1.forEach(t),Qv=h(pm),nc=n(pm,"SPAN",{});var S1=r(nc);Rv=i(S1,"FlaxDistilBertForSequenceClassification"),S1.forEach(t),pm.forEach(t),ch=h(s),ze=n(s,"DIV",{class:!0});var nt=r(ze);$(Ca.$$.fragment,nt),Uv=h(nt),rc=n(nt,"P",{});var I1=r(rc);Hv=i(I1,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),I1.forEach(t),Kv=h(nt),qa=n(nt,"P",{});var hm=r(qa);Vv=i(hm,"This model inherits from "),ll=n(hm,"A",{href:!0});var W1=r(ll);Jv=i(W1,"FlaxPreTrainedModel"),W1.forEach(t),Gv=i(hm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),hm.forEach(t),Xv=h(nt),Pa=n(nt,"P",{});var mm=r(Pa);Yv=i(mm,"This model is also a Flax Linen "),Aa=n(mm,"A",{href:!0,rel:!0});var Q1=r(Aa);Zv=i(Q1,"flax.linen.Module"),Q1.forEach(t),eT=i(mm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),mm.forEach(t),tT=h(nt),ac=n(nt,"P",{});var R1=r(ac);sT=i(R1,"Finally, this model supports inherent JAX features such as:"),R1.forEach(t),oT=h(nt),zt=n(nt,"UL",{});var yn=r(zt);ic=n(yn,"LI",{});var U1=r(ic);Oa=n(U1,"A",{href:!0,rel:!0});var H1=r(Oa);nT=i(H1,"Just-In-Time (JIT) compilation"),H1.forEach(t),U1.forEach(t),rT=h(yn),lc=n(yn,"LI",{});var K1=r(lc);Na=n(K1,"A",{href:!0,rel:!0});var V1=r(Na);aT=i(V1,"Automatic Differentiation"),V1.forEach(t),K1.forEach(t),iT=h(yn),dc=n(yn,"LI",{});var J1=r(dc);La=n(J1,"A",{href:!0,rel:!0});var G1=r(La);lT=i(G1,"Vectorization"),G1.forEach(t),J1.forEach(t),dT=h(yn),cc=n(yn,"LI",{});var X1=r(cc);Sa=n(X1,"A",{href:!0,rel:!0});var Y1=r(Sa);cT=i(Y1,"Parallelization"),Y1.forEach(t),X1.forEach(t),yn.forEach(t),pT=h(nt),bt=n(nt,"DIV",{class:!0});var Fn=r(bt);$(Ia.$$.fragment,Fn),hT=h(Fn),Ps=n(Fn,"P",{});var Bl=r(Ps);mT=i(Bl,"The "),pc=n(Bl,"CODE",{});var Z1=r(pc);uT=i(Z1,"FlaxDistilBertPreTrainedModel"),Z1.forEach(t),fT=i(Bl," forward method, overrides the "),hc=n(Bl,"CODE",{});var e2=r(hc);gT=i(e2,"__call__"),e2.forEach(t),_T=i(Bl," special method."),Bl.forEach(t),bT=h(Fn),$(sn.$$.fragment,Fn),kT=h(Fn),$(on.$$.fragment,Fn),Fn.forEach(t),nt.forEach(t),ph=h(s),As=n(s,"H2",{class:!0});var um=r(As);nn=n(um,"A",{id:!0,class:!0,href:!0});var t2=r(nn);mc=n(t2,"SPAN",{});var s2=r(mc);$(Wa.$$.fragment,s2),s2.forEach(t),t2.forEach(t),vT=h(um),uc=n(um,"SPAN",{});var o2=r(uc);TT=i(o2,"FlaxDistilBertForMultipleChoice"),o2.forEach(t),um.forEach(t),hh=h(s),je=n(s,"DIV",{class:!0});var rt=r(je);$(Qa.$$.fragment,rt),$T=h(rt),fc=n(rt,"P",{});var n2=r(fc);wT=i(n2,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),n2.forEach(t),yT=h(rt),Ra=n(rt,"P",{});var fm=r(Ra);FT=i(fm,"This model inherits from "),dl=n(fm,"A",{href:!0});var r2=r(dl);DT=i(r2,"FlaxPreTrainedModel"),r2.forEach(t),xT=i(fm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fm.forEach(t),BT=h(rt),Ua=n(rt,"P",{});var gm=r(Ua);MT=i(gm,"This model is also a Flax Linen "),Ha=n(gm,"A",{href:!0,rel:!0});var a2=r(Ha);ET=i(a2,"flax.linen.Module"),a2.forEach(t),zT=i(gm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),gm.forEach(t),jT=h(rt),gc=n(rt,"P",{});var i2=r(gc);CT=i(i2,"Finally, this model supports inherent JAX features such as:"),i2.forEach(t),qT=h(rt),jt=n(rt,"UL",{});var Dn=r(jt);_c=n(Dn,"LI",{});var l2=r(_c);Ka=n(l2,"A",{href:!0,rel:!0});var d2=r(Ka);PT=i(d2,"Just-In-Time (JIT) compilation"),d2.forEach(t),l2.forEach(t),AT=h(Dn),bc=n(Dn,"LI",{});var c2=r(bc);Va=n(c2,"A",{href:!0,rel:!0});var p2=r(Va);OT=i(p2,"Automatic Differentiation"),p2.forEach(t),c2.forEach(t),NT=h(Dn),kc=n(Dn,"LI",{});var h2=r(kc);Ja=n(h2,"A",{href:!0,rel:!0});var m2=r(Ja);LT=i(m2,"Vectorization"),m2.forEach(t),h2.forEach(t),ST=h(Dn),vc=n(Dn,"LI",{});var u2=r(vc);Ga=n(u2,"A",{href:!0,rel:!0});var f2=r(Ga);IT=i(f2,"Parallelization"),f2.forEach(t),u2.forEach(t),Dn.forEach(t),WT=h(rt),kt=n(rt,"DIV",{class:!0});var xn=r(kt);$(Xa.$$.fragment,xn),QT=h(xn),Os=n(xn,"P",{});var Ml=r(Os);RT=i(Ml,"The "),Tc=n(Ml,"CODE",{});var g2=r(Tc);UT=i(g2,"FlaxDistilBertPreTrainedModel"),g2.forEach(t),HT=i(Ml," forward method, overrides the "),$c=n(Ml,"CODE",{});var _2=r($c);KT=i(_2,"__call__"),_2.forEach(t),VT=i(Ml," special method."),Ml.forEach(t),JT=h(xn),$(rn.$$.fragment,xn),GT=h(xn),$(an.$$.fragment,xn),xn.forEach(t),rt.forEach(t),mh=h(s),Ns=n(s,"H2",{class:!0});var _m=r(Ns);ln=n(_m,"A",{id:!0,class:!0,href:!0});var b2=r(ln);wc=n(b2,"SPAN",{});var k2=r(wc);$(Ya.$$.fragment,k2),k2.forEach(t),b2.forEach(t),XT=h(_m),yc=n(_m,"SPAN",{});var v2=r(yc);YT=i(v2,"FlaxDistilBertForTokenClassification"),v2.forEach(t),_m.forEach(t),uh=h(s),Ce=n(s,"DIV",{class:!0});var at=r(Ce);$(Za.$$.fragment,at),ZT=h(at),Fc=n(at,"P",{});var T2=r(Fc);e$=i(T2,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),T2.forEach(t),t$=h(at),ei=n(at,"P",{});var bm=r(ei);s$=i(bm,"This model inherits from "),cl=n(bm,"A",{href:!0});var $2=r(cl);o$=i($2,"FlaxPreTrainedModel"),$2.forEach(t),n$=i(bm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),bm.forEach(t),r$=h(at),ti=n(at,"P",{});var km=r(ti);a$=i(km,"This model is also a Flax Linen "),si=n(km,"A",{href:!0,rel:!0});var w2=r(si);i$=i(w2,"flax.linen.Module"),w2.forEach(t),l$=i(km,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),km.forEach(t),d$=h(at),Dc=n(at,"P",{});var y2=r(Dc);c$=i(y2,"Finally, this model supports inherent JAX features such as:"),y2.forEach(t),p$=h(at),Ct=n(at,"UL",{});var Bn=r(Ct);xc=n(Bn,"LI",{});var F2=r(xc);oi=n(F2,"A",{href:!0,rel:!0});var D2=r(oi);h$=i(D2,"Just-In-Time (JIT) compilation"),D2.forEach(t),F2.forEach(t),m$=h(Bn),Bc=n(Bn,"LI",{});var x2=r(Bc);ni=n(x2,"A",{href:!0,rel:!0});var B2=r(ni);u$=i(B2,"Automatic Differentiation"),B2.forEach(t),x2.forEach(t),f$=h(Bn),Mc=n(Bn,"LI",{});var M2=r(Mc);ri=n(M2,"A",{href:!0,rel:!0});var E2=r(ri);g$=i(E2,"Vectorization"),E2.forEach(t),M2.forEach(t),_$=h(Bn),Ec=n(Bn,"LI",{});var z2=r(Ec);ai=n(z2,"A",{href:!0,rel:!0});var j2=r(ai);b$=i(j2,"Parallelization"),j2.forEach(t),z2.forEach(t),Bn.forEach(t),k$=h(at),vt=n(at,"DIV",{class:!0});var Mn=r(vt);$(ii.$$.fragment,Mn),v$=h(Mn),Ls=n(Mn,"P",{});var El=r(Ls);T$=i(El,"The "),zc=n(El,"CODE",{});var C2=r(zc);$$=i(C2,"FlaxDistilBertPreTrainedModel"),C2.forEach(t),w$=i(El," forward method, overrides the "),jc=n(El,"CODE",{});var q2=r(jc);y$=i(q2,"__call__"),q2.forEach(t),F$=i(El," special method."),El.forEach(t),D$=h(Mn),$(dn.$$.fragment,Mn),x$=h(Mn),$(cn.$$.fragment,Mn),Mn.forEach(t),at.forEach(t),fh=h(s),Ss=n(s,"H2",{class:!0});var vm=r(Ss);pn=n(vm,"A",{id:!0,class:!0,href:!0});var P2=r(pn);Cc=n(P2,"SPAN",{});var A2=r(Cc);$(li.$$.fragment,A2),A2.forEach(t),P2.forEach(t),B$=h(vm),qc=n(vm,"SPAN",{});var O2=r(qc);M$=i(O2,"FlaxDistilBertForQuestionAnswering"),O2.forEach(t),vm.forEach(t),gh=h(s),qe=n(s,"DIV",{class:!0});var it=r(qe);$(di.$$.fragment,it),E$=h(it),Is=n(it,"P",{});var zl=r(Is);z$=i(zl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Pc=n(zl,"CODE",{});var N2=r(Pc);j$=i(N2,"span start logits"),N2.forEach(t),C$=i(zl," and "),Ac=n(zl,"CODE",{});var L2=r(Ac);q$=i(L2,"span end logits"),L2.forEach(t),P$=i(zl,")."),zl.forEach(t),A$=h(it),ci=n(it,"P",{});var Tm=r(ci);O$=i(Tm,"This model inherits from "),pl=n(Tm,"A",{href:!0});var S2=r(pl);N$=i(S2,"FlaxPreTrainedModel"),S2.forEach(t),L$=i(Tm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Tm.forEach(t),S$=h(it),pi=n(it,"P",{});var $m=r(pi);I$=i($m,"This model is also a Flax Linen "),hi=n($m,"A",{href:!0,rel:!0});var I2=r(hi);W$=i(I2,"flax.linen.Module"),I2.forEach(t),Q$=i($m,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),$m.forEach(t),R$=h(it),Oc=n(it,"P",{});var W2=r(Oc);U$=i(W2,"Finally, this model supports inherent JAX features such as:"),W2.forEach(t),H$=h(it),qt=n(it,"UL",{});var En=r(qt);Nc=n(En,"LI",{});var Q2=r(Nc);mi=n(Q2,"A",{href:!0,rel:!0});var R2=r(mi);K$=i(R2,"Just-In-Time (JIT) compilation"),R2.forEach(t),Q2.forEach(t),V$=h(En),Lc=n(En,"LI",{});var U2=r(Lc);ui=n(U2,"A",{href:!0,rel:!0});var H2=r(ui);J$=i(H2,"Automatic Differentiation"),H2.forEach(t),U2.forEach(t),G$=h(En),Sc=n(En,"LI",{});var K2=r(Sc);fi=n(K2,"A",{href:!0,rel:!0});var V2=r(fi);X$=i(V2,"Vectorization"),V2.forEach(t),K2.forEach(t),Y$=h(En),Ic=n(En,"LI",{});var J2=r(Ic);gi=n(J2,"A",{href:!0,rel:!0});var G2=r(gi);Z$=i(G2,"Parallelization"),G2.forEach(t),J2.forEach(t),En.forEach(t),ew=h(it),Tt=n(it,"DIV",{class:!0});var zn=r(Tt);$(_i.$$.fragment,zn),tw=h(zn),Ws=n(zn,"P",{});var jl=r(Ws);sw=i(jl,"The "),Wc=n(jl,"CODE",{});var X2=r(Wc);ow=i(X2,"FlaxDistilBertPreTrainedModel"),X2.forEach(t),nw=i(jl," forward method, overrides the "),Qc=n(jl,"CODE",{});var Y2=r(Qc);rw=i(Y2,"__call__"),Y2.forEach(t),aw=i(jl," special method."),jl.forEach(t),iw=h(zn),$(hn.$$.fragment,zn),lw=h(zn),$(mn.$$.fragment,zn),zn.forEach(t),it.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(nD)),f(m,"id","distilbert"),f(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(m,"href","#distilbert"),f(c,"class","relative group"),f(G,"id","overview"),f(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(G,"href","#overview"),f(E,"class","relative group"),f(Y,"href","https://medium.com/huggingface/distilbert-8cf3380435b5"),f(Y,"rel","nofollow"),f(j,"href","https://arxiv.org/abs/1910.01108"),f(j,"rel","nofollow"),f(jn,"href","https://huggingface.co/victorsanh"),f(jn,"rel","nofollow"),f(Cn,"href","https://huggingface.co/kamalkraj"),f(Cn,"rel","nofollow"),f(qn,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/distillation"),f(qn,"rel","nofollow"),f(Rs,"id","transformers.DistilBertConfig"),f(Rs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Rs,"href","#transformers.DistilBertConfig"),f(es,"class","relative group"),f(Di,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertModel"),f(xi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertModel"),f(On,"href","https://huggingface.co/distilbert-base-uncased"),f(On,"rel","nofollow"),f(Bi,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(Mi,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Hs,"id","transformers.DistilBertTokenizer"),f(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Hs,"href","#transformers.DistilBertTokenizer"),f(ss,"class","relative group"),f(Ei,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizer"),f(zi,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),f(ji,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),f(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Vs,"id","transformers.DistilBertTokenizerFast"),f(Vs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Vs,"href","#transformers.DistilBertTokenizerFast"),f(os,"class","relative group"),f(Ci,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertTokenizerFast"),f(qi,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),f(Pi,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),f(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Gs,"id","transformers.DistilBertModel"),f(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Gs,"href","#transformers.DistilBertModel"),f(ns,"class","relative group"),f(Ai,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Jn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Jn,"rel","nofollow"),f(Oi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertModel"),f(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Zs,"id","transformers.DistilBertForMaskedLM"),f(Zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Zs,"href","#transformers.DistilBertForMaskedLM"),f(as,"class","relative group"),f(Ni,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(sr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(sr,"rel","nofollow"),f(Li,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForMaskedLM"),f(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(oo,"id","transformers.DistilBertForSequenceClassification"),f(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(oo,"href","#transformers.DistilBertForSequenceClassification"),f(ls,"class","relative group"),f(Si,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(lr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(lr,"rel","nofollow"),f(Ii,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification"),f(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(co,"id","transformers.DistilBertForMultipleChoice"),f(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(co,"href","#transformers.DistilBertForMultipleChoice"),f(cs,"class","relative group"),f(Wi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(ur,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ur,"rel","nofollow"),f(Qi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForMultipleChoice"),f(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(mo,"id","transformers.DistilBertForTokenClassification"),f(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(mo,"href","#transformers.DistilBertForTokenClassification"),f(hs,"class","relative group"),f(Ri,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(vr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(vr,"rel","nofollow"),f(Ui,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForTokenClassification"),f(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(_o,"id","transformers.DistilBertForQuestionAnswering"),f(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(_o,"href","#transformers.DistilBertForQuestionAnswering"),f(us,"class","relative group"),f(Hi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Dr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Dr,"rel","nofollow"),f(Ki,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering"),f(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(To,"id","transformers.TFDistilBertModel"),f(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(To,"href","#transformers.TFDistilBertModel"),f(_s,"class","relative group"),f(Vi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(jr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(jr,"rel","nofollow"),f(Ji,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertModel"),f(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Fo,"id","transformers.TFDistilBertForMaskedLM"),f(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Fo,"href","#transformers.TFDistilBertForMaskedLM"),f(ks,"class","relative group"),f(Gi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Lr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Lr,"rel","nofollow"),f(Xi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForMaskedLM"),f(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Eo,"id","transformers.TFDistilBertForSequenceClassification"),f(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Eo,"href","#transformers.TFDistilBertForSequenceClassification"),f(Ts,"class","relative group"),f(Yi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Ur,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Ur,"rel","nofollow"),f(Zi,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForSequenceClassification"),f(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Po,"id","transformers.TFDistilBertForMultipleChoice"),f(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Po,"href","#transformers.TFDistilBertForMultipleChoice"),f(ws,"class","relative group"),f(el,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Xr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Xr,"rel","nofollow"),f(tl,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForMultipleChoice"),f(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Lo,"id","transformers.TFDistilBertForTokenClassification"),f(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Lo,"href","#transformers.TFDistilBertForTokenClassification"),f(Fs,"class","relative group"),f(sl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(oa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(oa,"rel","nofollow"),f(ol,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForTokenClassification"),f(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ro,"id","transformers.TFDistilBertForQuestionAnswering"),f(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ro,"href","#transformers.TFDistilBertForQuestionAnswering"),f(xs,"class","relative group"),f(nl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(da,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(da,"rel","nofollow"),f(rl,"href","/docs/transformers/main/en/model_doc/distilbert#transformers.TFDistilBertForQuestionAnswering"),f(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Jo,"id","transformers.FlaxDistilBertModel"),f(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Jo,"href","#transformers.FlaxDistilBertModel"),f(Es,"class","relative group"),f(al,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(fa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(fa,"rel","nofollow"),f(ga,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(ga,"rel","nofollow"),f(_a,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(_a,"rel","nofollow"),f(ba,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(ba,"rel","nofollow"),f(ka,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(ka,"rel","nofollow"),f(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Yo,"id","transformers.FlaxDistilBertForMaskedLM"),f(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Yo,"href","#transformers.FlaxDistilBertForMaskedLM"),f(js,"class","relative group"),f(il,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Da,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Da,"rel","nofollow"),f(xa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(xa,"rel","nofollow"),f(Ba,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Ba,"rel","nofollow"),f(Ma,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ma,"rel","nofollow"),f(Ea,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Ea,"rel","nofollow"),f(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(tn,"id","transformers.FlaxDistilBertForSequenceClassification"),f(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(tn,"href","#transformers.FlaxDistilBertForSequenceClassification"),f(qs,"class","relative group"),f(ll,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Aa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Aa,"rel","nofollow"),f(Oa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Oa,"rel","nofollow"),f(Na,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Na,"rel","nofollow"),f(La,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(La,"rel","nofollow"),f(Sa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Sa,"rel","nofollow"),f(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nn,"id","transformers.FlaxDistilBertForMultipleChoice"),f(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(nn,"href","#transformers.FlaxDistilBertForMultipleChoice"),f(As,"class","relative group"),f(dl,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Ha,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Ha,"rel","nofollow"),f(Ka,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Ka,"rel","nofollow"),f(Va,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Va,"rel","nofollow"),f(Ja,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ja,"rel","nofollow"),f(Ga,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Ga,"rel","nofollow"),f(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ln,"id","transformers.FlaxDistilBertForTokenClassification"),f(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ln,"href","#transformers.FlaxDistilBertForTokenClassification"),f(Ns,"class","relative group"),f(cl,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(si,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(si,"rel","nofollow"),f(oi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(oi,"rel","nofollow"),f(ni,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(ni,"rel","nofollow"),f(ri,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(ri,"rel","nofollow"),f(ai,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(ai,"rel","nofollow"),f(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pn,"id","transformers.FlaxDistilBertForQuestionAnswering"),f(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(pn,"href","#transformers.FlaxDistilBertForQuestionAnswering"),f(Ss,"class","relative group"),f(pl,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(hi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(hi,"rel","nofollow"),f(mi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(mi,"rel","nofollow"),f(ui,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(ui,"rel","nofollow"),f(fi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(fi,"rel","nofollow"),f(gi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(gi,"rel","nofollow"),f(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,k){e(document.head,d),b(s,g,k),b(s,c,k),e(c,m),e(m,_),w(l,_,null),e(c,u),e(c,B),e(B,he),b(s,K,k),b(s,E,k),e(E,G),e(G,S),w(X,S,null),e(E,me),e(E,I),e(I,ue),b(s,le,k),b(s,N,k),e(N,P),e(N,Y),e(Y,V),e(N,z),e(N,j),e(j,fe),e(N,W),e(N,se),e(se,ge),e(N,Q),b(s,de,k),b(s,ee,k),e(ee,A),b(s,ce,k),b(s,L,k),e(L,oe),e(oe,_e),b(s,q,k),b(s,te,k),e(te,R),b(s,pe,k),b(s,v,k),e(v,M),e(M,J),e(M,ke),e(ke,$e),e(M,O),e(M,ve),e(ve,we),e(M,ye),e(M,C),e(C,U),e(M,Fe),e(v,De),e(v,Z),e(Z,xe),e(Z,ne),e(ne,Be),e(Z,wm),b(s,Bp,k),b(s,pt,k),e(pt,ym),e(pt,jn),e(jn,Fm),e(pt,Dm),e(pt,Cn),e(Cn,xm),e(pt,Bm),e(pt,qn),e(qn,Mm),e(pt,Em),b(s,Mp,k),b(s,es,k),e(es,Rs),e(Rs,Cl),w(Pn,Cl,null),e(es,zm),e(es,ql),e(ql,jm),b(s,Ep,k),b(s,lt,k),w(An,lt,null),e(lt,Cm),e(lt,Bt),e(Bt,qm),e(Bt,Di),e(Di,Pm),e(Bt,Am),e(Bt,xi),e(xi,Om),e(Bt,Nm),e(Bt,On),e(On,Lm),e(Bt,Sm),e(lt,Im),e(lt,ts),e(ts,Wm),e(ts,Bi),e(Bi,Qm),e(ts,Rm),e(ts,Mi),e(Mi,Um),e(ts,Hm),e(lt,Km),w(Us,lt,null),b(s,zp,k),b(s,ss,k),e(ss,Hs),e(Hs,Pl),w(Nn,Pl,null),e(ss,Vm),e(ss,Al),e(Al,Jm),b(s,jp,k),b(s,dt,k),w(Ln,dt,null),e(dt,Gm),e(dt,Ol),e(Ol,Xm),e(dt,Ym),e(dt,Ks),e(Ks,Ei),e(Ei,Zm),e(Ks,eu),e(Ks,zi),e(zi,tu),e(Ks,su),e(dt,ou),e(dt,Sn),e(Sn,nu),e(Sn,ji),e(ji,ru),e(Sn,au),b(s,Cp,k),b(s,os,k),e(os,Vs),e(Vs,Nl),w(In,Nl,null),e(os,iu),e(os,Ll),e(Ll,lu),b(s,qp,k),b(s,ct,k),w(Wn,ct,null),e(ct,du),e(ct,Qn),e(Qn,cu),e(Qn,Sl),e(Sl,pu),e(Qn,hu),e(ct,mu),e(ct,Js),e(Js,Ci),e(Ci,uu),e(Js,fu),e(Js,qi),e(qi,gu),e(Js,_u),e(ct,bu),e(ct,Rn),e(Rn,ku),e(Rn,Pi),e(Pi,vu),e(Rn,Tu),b(s,Pp,k),b(s,ns,k),e(ns,Gs),e(Gs,Il),w(Un,Il,null),e(ns,$u),e(ns,Wl),e(Wl,wu),b(s,Ap,k),b(s,We,k),w(Hn,We,null),e(We,yu),e(We,Ql),e(Ql,Fu),e(We,Du),e(We,Kn),e(Kn,xu),e(Kn,Ai),e(Ai,Bu),e(Kn,Mu),e(We,Eu),e(We,Vn),e(Vn,zu),e(Vn,Jn),e(Jn,ju),e(Vn,Cu),e(We,qu),e(We,ht),w(Gn,ht,null),e(ht,Pu),e(ht,rs),e(rs,Au),e(rs,Oi),e(Oi,Ou),e(rs,Nu),e(rs,Rl),e(Rl,Lu),e(rs,Su),e(ht,Iu),w(Xs,ht,null),e(ht,Wu),w(Ys,ht,null),b(s,Op,k),b(s,as,k),e(as,Zs),e(Zs,Ul),w(Xn,Ul,null),e(as,Qu),e(as,Hl),e(Hl,Ru),b(s,Np,k),b(s,Qe,k),w(Yn,Qe,null),e(Qe,Uu),e(Qe,Zn),e(Zn,Hu),e(Zn,Kl),e(Kl,Ku),e(Zn,Vu),e(Qe,Ju),e(Qe,er),e(er,Gu),e(er,Ni),e(Ni,Xu),e(er,Yu),e(Qe,Zu),e(Qe,tr),e(tr,ef),e(tr,sr),e(sr,tf),e(tr,sf),e(Qe,of),e(Qe,Ve),w(or,Ve,null),e(Ve,nf),e(Ve,is),e(is,rf),e(is,Li),e(Li,af),e(is,lf),e(is,Vl),e(Vl,df),e(is,cf),e(Ve,pf),w(eo,Ve,null),e(Ve,hf),w(to,Ve,null),e(Ve,mf),w(so,Ve,null),b(s,Lp,k),b(s,ls,k),e(ls,oo),e(oo,Jl),w(nr,Jl,null),e(ls,uf),e(ls,Gl),e(Gl,ff),b(s,Sp,k),b(s,Re,k),w(rr,Re,null),e(Re,gf),e(Re,Xl),e(Xl,_f),e(Re,bf),e(Re,ar),e(ar,kf),e(ar,Si),e(Si,vf),e(ar,Tf),e(Re,$f),e(Re,ir),e(ir,wf),e(ir,lr),e(lr,yf),e(ir,Ff),e(Re,Df),e(Re,Pe),w(dr,Pe,null),e(Pe,xf),e(Pe,ds),e(ds,Bf),e(ds,Ii),e(Ii,Mf),e(ds,Ef),e(ds,Yl),e(Yl,zf),e(ds,jf),e(Pe,Cf),w(no,Pe,null),e(Pe,qf),w(ro,Pe,null),e(Pe,Pf),w(ao,Pe,null),e(Pe,Af),w(io,Pe,null),e(Pe,Of),w(lo,Pe,null),b(s,Ip,k),b(s,cs,k),e(cs,co),e(co,Zl),w(cr,Zl,null),e(cs,Nf),e(cs,ed),e(ed,Lf),b(s,Wp,k),b(s,Ue,k),w(pr,Ue,null),e(Ue,Sf),e(Ue,td),e(td,If),e(Ue,Wf),e(Ue,hr),e(hr,Qf),e(hr,Wi),e(Wi,Rf),e(hr,Uf),e(Ue,Hf),e(Ue,mr),e(mr,Kf),e(mr,ur),e(ur,Vf),e(mr,Jf),e(Ue,Gf),e(Ue,mt),w(fr,mt,null),e(mt,Xf),e(mt,ps),e(ps,Yf),e(ps,Qi),e(Qi,Zf),e(ps,eg),e(ps,sd),e(sd,tg),e(ps,sg),e(mt,og),w(po,mt,null),e(mt,ng),w(ho,mt,null),b(s,Qp,k),b(s,hs,k),e(hs,mo),e(mo,od),w(gr,od,null),e(hs,rg),e(hs,nd),e(nd,ag),b(s,Rp,k),b(s,He,k),w(_r,He,null),e(He,ig),e(He,rd),e(rd,lg),e(He,dg),e(He,br),e(br,cg),e(br,Ri),e(Ri,pg),e(br,hg),e(He,mg),e(He,kr),e(kr,ug),e(kr,vr),e(vr,fg),e(kr,gg),e(He,_g),e(He,Je),w(Tr,Je,null),e(Je,bg),e(Je,ms),e(ms,kg),e(ms,Ui),e(Ui,vg),e(ms,Tg),e(ms,ad),e(ad,$g),e(ms,wg),e(Je,yg),w(uo,Je,null),e(Je,Fg),w(fo,Je,null),e(Je,Dg),w(go,Je,null),b(s,Up,k),b(s,us,k),e(us,_o),e(_o,id),w($r,id,null),e(us,xg),e(us,ld),e(ld,Bg),b(s,Hp,k),b(s,Ke,k),w(wr,Ke,null),e(Ke,Mg),e(Ke,fs),e(fs,Eg),e(fs,dd),e(dd,zg),e(fs,jg),e(fs,cd),e(cd,Cg),e(fs,qg),e(Ke,Pg),e(Ke,yr),e(yr,Ag),e(yr,Hi),e(Hi,Og),e(yr,Ng),e(Ke,Lg),e(Ke,Fr),e(Fr,Sg),e(Fr,Dr),e(Dr,Ig),e(Fr,Wg),e(Ke,Qg),e(Ke,Ge),w(xr,Ge,null),e(Ge,Rg),e(Ge,gs),e(gs,Ug),e(gs,Ki),e(Ki,Hg),e(gs,Kg),e(gs,pd),e(pd,Vg),e(gs,Jg),e(Ge,Gg),w(bo,Ge,null),e(Ge,Xg),w(ko,Ge,null),e(Ge,Yg),w(vo,Ge,null),b(s,Kp,k),b(s,_s,k),e(_s,To),e(To,hd),w(Br,hd,null),e(_s,Zg),e(_s,md),e(md,e_),b(s,Vp,k),b(s,Ae,k),w(Mr,Ae,null),e(Ae,t_),e(Ae,ud),e(ud,s_),e(Ae,o_),e(Ae,Er),e(Er,n_),e(Er,Vi),e(Vi,r_),e(Er,a_),e(Ae,i_),e(Ae,zr),e(zr,l_),e(zr,jr),e(jr,d_),e(zr,c_),e(Ae,p_),w($o,Ae,null),e(Ae,h_),e(Ae,ut),w(Cr,ut,null),e(ut,m_),e(ut,bs),e(bs,u_),e(bs,Ji),e(Ji,f_),e(bs,g_),e(bs,fd),e(fd,__),e(bs,b_),e(ut,k_),w(wo,ut,null),e(ut,v_),w(yo,ut,null),b(s,Jp,k),b(s,ks,k),e(ks,Fo),e(Fo,gd),w(qr,gd,null),e(ks,T_),e(ks,_d),e(_d,$_),b(s,Gp,k),b(s,Oe,k),w(Pr,Oe,null),e(Oe,w_),e(Oe,Ar),e(Ar,y_),e(Ar,bd),e(bd,F_),e(Ar,D_),e(Oe,x_),e(Oe,Or),e(Or,B_),e(Or,Gi),e(Gi,M_),e(Or,E_),e(Oe,z_),e(Oe,Nr),e(Nr,j_),e(Nr,Lr),e(Lr,C_),e(Nr,q_),e(Oe,P_),w(Do,Oe,null),e(Oe,A_),e(Oe,Xe),w(Sr,Xe,null),e(Xe,O_),e(Xe,vs),e(vs,N_),e(vs,Xi),e(Xi,L_),e(vs,S_),e(vs,kd),e(kd,I_),e(vs,W_),e(Xe,Q_),w(xo,Xe,null),e(Xe,R_),w(Bo,Xe,null),e(Xe,U_),w(Mo,Xe,null),b(s,Xp,k),b(s,Ts,k),e(Ts,Eo),e(Eo,vd),w(Ir,vd,null),e(Ts,H_),e(Ts,Td),e(Td,K_),b(s,Yp,k),b(s,Ne,k),w(Wr,Ne,null),e(Ne,V_),e(Ne,$d),e($d,J_),e(Ne,G_),e(Ne,Qr),e(Qr,X_),e(Qr,Yi),e(Yi,Y_),e(Qr,Z_),e(Ne,eb),e(Ne,Rr),e(Rr,tb),e(Rr,Ur),e(Ur,sb),e(Rr,ob),e(Ne,nb),w(zo,Ne,null),e(Ne,rb),e(Ne,Ye),w(Hr,Ye,null),e(Ye,ab),e(Ye,$s),e($s,ib),e($s,Zi),e(Zi,lb),e($s,db),e($s,wd),e(wd,cb),e($s,pb),e(Ye,hb),w(jo,Ye,null),e(Ye,mb),w(Co,Ye,null),e(Ye,ub),w(qo,Ye,null),b(s,Zp,k),b(s,ws,k),e(ws,Po),e(Po,yd),w(Kr,yd,null),e(ws,fb),e(ws,Fd),e(Fd,gb),b(s,eh,k),b(s,Le,k),w(Vr,Le,null),e(Le,_b),e(Le,Dd),e(Dd,bb),e(Le,kb),e(Le,Jr),e(Jr,vb),e(Jr,el),e(el,Tb),e(Jr,$b),e(Le,wb),e(Le,Gr),e(Gr,yb),e(Gr,Xr),e(Xr,Fb),e(Gr,Db),e(Le,xb),w(Ao,Le,null),e(Le,Bb),e(Le,ft),w(Yr,ft,null),e(ft,Mb),e(ft,ys),e(ys,Eb),e(ys,tl),e(tl,zb),e(ys,jb),e(ys,xd),e(xd,Cb),e(ys,qb),e(ft,Pb),w(Oo,ft,null),e(ft,Ab),w(No,ft,null),b(s,th,k),b(s,Fs,k),e(Fs,Lo),e(Lo,Bd),w(Zr,Bd,null),e(Fs,Ob),e(Fs,Md),e(Md,Nb),b(s,sh,k),b(s,Se,k),w(ea,Se,null),e(Se,Lb),e(Se,Ed),e(Ed,Sb),e(Se,Ib),e(Se,ta),e(ta,Wb),e(ta,sl),e(sl,Qb),e(ta,Rb),e(Se,Ub),e(Se,sa),e(sa,Hb),e(sa,oa),e(oa,Kb),e(sa,Vb),e(Se,Jb),w(So,Se,null),e(Se,Gb),e(Se,Ze),w(na,Ze,null),e(Ze,Xb),e(Ze,Ds),e(Ds,Yb),e(Ds,ol),e(ol,Zb),e(Ds,ek),e(Ds,zd),e(zd,tk),e(Ds,sk),e(Ze,ok),w(Io,Ze,null),e(Ze,nk),w(Wo,Ze,null),e(Ze,rk),w(Qo,Ze,null),b(s,oh,k),b(s,xs,k),e(xs,Ro),e(Ro,jd),w(ra,jd,null),e(xs,ak),e(xs,Cd),e(Cd,ik),b(s,nh,k),b(s,Ie,k),w(aa,Ie,null),e(Ie,lk),e(Ie,Bs),e(Bs,dk),e(Bs,qd),e(qd,ck),e(Bs,pk),e(Bs,Pd),e(Pd,hk),e(Bs,mk),e(Ie,uk),e(Ie,ia),e(ia,fk),e(ia,nl),e(nl,gk),e(ia,_k),e(Ie,bk),e(Ie,la),e(la,kk),e(la,da),e(da,vk),e(la,Tk),e(Ie,$k),w(Uo,Ie,null),e(Ie,wk),e(Ie,et),w(ca,et,null),e(et,yk),e(et,Ms),e(Ms,Fk),e(Ms,rl),e(rl,Dk),e(Ms,xk),e(Ms,Ad),e(Ad,Bk),e(Ms,Mk),e(et,Ek),w(Ho,et,null),e(et,zk),w(Ko,et,null),e(et,jk),w(Vo,et,null),b(s,rh,k),b(s,Es,k),e(Es,Jo),e(Jo,Od),w(pa,Od,null),e(Es,Ck),e(Es,Nd),e(Nd,qk),b(s,ah,k),b(s,Me,k),w(ha,Me,null),e(Me,Pk),e(Me,Ld),e(Ld,Ak),e(Me,Ok),e(Me,ma),e(ma,Nk),e(ma,al),e(al,Lk),e(ma,Sk),e(Me,Ik),e(Me,ua),e(ua,Wk),e(ua,fa),e(fa,Qk),e(ua,Rk),e(Me,Uk),e(Me,Sd),e(Sd,Hk),e(Me,Kk),e(Me,Mt),e(Mt,Id),e(Id,ga),e(ga,Vk),e(Mt,Jk),e(Mt,Wd),e(Wd,_a),e(_a,Gk),e(Mt,Xk),e(Mt,Qd),e(Qd,ba),e(ba,Yk),e(Mt,Zk),e(Mt,Rd),e(Rd,ka),e(ka,ev),e(Me,tv),e(Me,gt),w(va,gt,null),e(gt,sv),e(gt,zs),e(zs,ov),e(zs,Ud),e(Ud,nv),e(zs,rv),e(zs,Hd),e(Hd,av),e(zs,iv),e(gt,lv),w(Go,gt,null),e(gt,dv),w(Xo,gt,null),b(s,ih,k),b(s,js,k),e(js,Yo),e(Yo,Kd),w(Ta,Kd,null),e(js,cv),e(js,Vd),e(Vd,pv),b(s,lh,k),b(s,Ee,k),w($a,Ee,null),e(Ee,hv),e(Ee,wa),e(wa,mv),e(wa,Jd),e(Jd,uv),e(wa,fv),e(Ee,gv),e(Ee,ya),e(ya,_v),e(ya,il),e(il,bv),e(ya,kv),e(Ee,vv),e(Ee,Fa),e(Fa,Tv),e(Fa,Da),e(Da,$v),e(Fa,wv),e(Ee,yv),e(Ee,Gd),e(Gd,Fv),e(Ee,Dv),e(Ee,Et),e(Et,Xd),e(Xd,xa),e(xa,xv),e(Et,Bv),e(Et,Yd),e(Yd,Ba),e(Ba,Mv),e(Et,Ev),e(Et,Zd),e(Zd,Ma),e(Ma,zv),e(Et,jv),e(Et,ec),e(ec,Ea),e(Ea,Cv),e(Ee,qv),e(Ee,_t),w(za,_t,null),e(_t,Pv),e(_t,Cs),e(Cs,Av),e(Cs,tc),e(tc,Ov),e(Cs,Nv),e(Cs,sc),e(sc,Lv),e(Cs,Sv),e(_t,Iv),w(Zo,_t,null),e(_t,Wv),w(en,_t,null),b(s,dh,k),b(s,qs,k),e(qs,tn),e(tn,oc),w(ja,oc,null),e(qs,Qv),e(qs,nc),e(nc,Rv),b(s,ch,k),b(s,ze,k),w(Ca,ze,null),e(ze,Uv),e(ze,rc),e(rc,Hv),e(ze,Kv),e(ze,qa),e(qa,Vv),e(qa,ll),e(ll,Jv),e(qa,Gv),e(ze,Xv),e(ze,Pa),e(Pa,Yv),e(Pa,Aa),e(Aa,Zv),e(Pa,eT),e(ze,tT),e(ze,ac),e(ac,sT),e(ze,oT),e(ze,zt),e(zt,ic),e(ic,Oa),e(Oa,nT),e(zt,rT),e(zt,lc),e(lc,Na),e(Na,aT),e(zt,iT),e(zt,dc),e(dc,La),e(La,lT),e(zt,dT),e(zt,cc),e(cc,Sa),e(Sa,cT),e(ze,pT),e(ze,bt),w(Ia,bt,null),e(bt,hT),e(bt,Ps),e(Ps,mT),e(Ps,pc),e(pc,uT),e(Ps,fT),e(Ps,hc),e(hc,gT),e(Ps,_T),e(bt,bT),w(sn,bt,null),e(bt,kT),w(on,bt,null),b(s,ph,k),b(s,As,k),e(As,nn),e(nn,mc),w(Wa,mc,null),e(As,vT),e(As,uc),e(uc,TT),b(s,hh,k),b(s,je,k),w(Qa,je,null),e(je,$T),e(je,fc),e(fc,wT),e(je,yT),e(je,Ra),e(Ra,FT),e(Ra,dl),e(dl,DT),e(Ra,xT),e(je,BT),e(je,Ua),e(Ua,MT),e(Ua,Ha),e(Ha,ET),e(Ua,zT),e(je,jT),e(je,gc),e(gc,CT),e(je,qT),e(je,jt),e(jt,_c),e(_c,Ka),e(Ka,PT),e(jt,AT),e(jt,bc),e(bc,Va),e(Va,OT),e(jt,NT),e(jt,kc),e(kc,Ja),e(Ja,LT),e(jt,ST),e(jt,vc),e(vc,Ga),e(Ga,IT),e(je,WT),e(je,kt),w(Xa,kt,null),e(kt,QT),e(kt,Os),e(Os,RT),e(Os,Tc),e(Tc,UT),e(Os,HT),e(Os,$c),e($c,KT),e(Os,VT),e(kt,JT),w(rn,kt,null),e(kt,GT),w(an,kt,null),b(s,mh,k),b(s,Ns,k),e(Ns,ln),e(ln,wc),w(Ya,wc,null),e(Ns,XT),e(Ns,yc),e(yc,YT),b(s,uh,k),b(s,Ce,k),w(Za,Ce,null),e(Ce,ZT),e(Ce,Fc),e(Fc,e$),e(Ce,t$),e(Ce,ei),e(ei,s$),e(ei,cl),e(cl,o$),e(ei,n$),e(Ce,r$),e(Ce,ti),e(ti,a$),e(ti,si),e(si,i$),e(ti,l$),e(Ce,d$),e(Ce,Dc),e(Dc,c$),e(Ce,p$),e(Ce,Ct),e(Ct,xc),e(xc,oi),e(oi,h$),e(Ct,m$),e(Ct,Bc),e(Bc,ni),e(ni,u$),e(Ct,f$),e(Ct,Mc),e(Mc,ri),e(ri,g$),e(Ct,_$),e(Ct,Ec),e(Ec,ai),e(ai,b$),e(Ce,k$),e(Ce,vt),w(ii,vt,null),e(vt,v$),e(vt,Ls),e(Ls,T$),e(Ls,zc),e(zc,$$),e(Ls,w$),e(Ls,jc),e(jc,y$),e(Ls,F$),e(vt,D$),w(dn,vt,null),e(vt,x$),w(cn,vt,null),b(s,fh,k),b(s,Ss,k),e(Ss,pn),e(pn,Cc),w(li,Cc,null),e(Ss,B$),e(Ss,qc),e(qc,M$),b(s,gh,k),b(s,qe,k),w(di,qe,null),e(qe,E$),e(qe,Is),e(Is,z$),e(Is,Pc),e(Pc,j$),e(Is,C$),e(Is,Ac),e(Ac,q$),e(Is,P$),e(qe,A$),e(qe,ci),e(ci,O$),e(ci,pl),e(pl,N$),e(ci,L$),e(qe,S$),e(qe,pi),e(pi,I$),e(pi,hi),e(hi,W$),e(pi,Q$),e(qe,R$),e(qe,Oc),e(Oc,U$),e(qe,H$),e(qe,qt),e(qt,Nc),e(Nc,mi),e(mi,K$),e(qt,V$),e(qt,Lc),e(Lc,ui),e(ui,J$),e(qt,G$),e(qt,Sc),e(Sc,fi),e(fi,X$),e(qt,Y$),e(qt,Ic),e(Ic,gi),e(gi,Z$),e(qe,ew),e(qe,Tt),w(_i,Tt,null),e(Tt,tw),e(Tt,Ws),e(Ws,sw),e(Ws,Wc),e(Wc,ow),e(Ws,nw),e(Ws,Qc),e(Qc,rw),e(Ws,aw),e(Tt,iw),w(hn,Tt,null),e(Tt,lw),w(mn,Tt,null),_h=!0},p(s,[k]){const bi={};k&2&&(bi.$$scope={dirty:k,ctx:s}),Us.$set(bi);const Rc={};k&2&&(Rc.$$scope={dirty:k,ctx:s}),Xs.$set(Rc);const Uc={};k&2&&(Uc.$$scope={dirty:k,ctx:s}),Ys.$set(Uc);const Hc={};k&2&&(Hc.$$scope={dirty:k,ctx:s}),eo.$set(Hc);const ki={};k&2&&(ki.$$scope={dirty:k,ctx:s}),to.$set(ki);const Kc={};k&2&&(Kc.$$scope={dirty:k,ctx:s}),so.$set(Kc);const Vc={};k&2&&(Vc.$$scope={dirty:k,ctx:s}),no.$set(Vc);const Jc={};k&2&&(Jc.$$scope={dirty:k,ctx:s}),ro.$set(Jc);const Pt={};k&2&&(Pt.$$scope={dirty:k,ctx:s}),ao.$set(Pt);const Gc={};k&2&&(Gc.$$scope={dirty:k,ctx:s}),io.$set(Gc);const Xc={};k&2&&(Xc.$$scope={dirty:k,ctx:s}),lo.$set(Xc);const Yc={};k&2&&(Yc.$$scope={dirty:k,ctx:s}),po.$set(Yc);const Zc={};k&2&&(Zc.$$scope={dirty:k,ctx:s}),ho.$set(Zc);const ep={};k&2&&(ep.$$scope={dirty:k,ctx:s}),uo.$set(ep);const tp={};k&2&&(tp.$$scope={dirty:k,ctx:s}),fo.$set(tp);const sp={};k&2&&(sp.$$scope={dirty:k,ctx:s}),go.$set(sp);const vi={};k&2&&(vi.$$scope={dirty:k,ctx:s}),bo.$set(vi);const At={};k&2&&(At.$$scope={dirty:k,ctx:s}),ko.$set(At);const op={};k&2&&(op.$$scope={dirty:k,ctx:s}),vo.$set(op);const np={};k&2&&(np.$$scope={dirty:k,ctx:s}),$o.$set(np);const rp={};k&2&&(rp.$$scope={dirty:k,ctx:s}),wo.$set(rp);const Ti={};k&2&&(Ti.$$scope={dirty:k,ctx:s}),yo.$set(Ti);const ap={};k&2&&(ap.$$scope={dirty:k,ctx:s}),Do.$set(ap);const Ot={};k&2&&(Ot.$$scope={dirty:k,ctx:s}),xo.$set(Ot);const ip={};k&2&&(ip.$$scope={dirty:k,ctx:s}),Bo.$set(ip);const lp={};k&2&&(lp.$$scope={dirty:k,ctx:s}),Mo.$set(lp);const dp={};k&2&&(dp.$$scope={dirty:k,ctx:s}),zo.$set(dp);const $i={};k&2&&($i.$$scope={dirty:k,ctx:s}),jo.$set($i);const cp={};k&2&&(cp.$$scope={dirty:k,ctx:s}),Co.$set(cp);const pp={};k&2&&(pp.$$scope={dirty:k,ctx:s}),qo.$set(pp);const hp={};k&2&&(hp.$$scope={dirty:k,ctx:s}),Ao.$set(hp);const Nt={};k&2&&(Nt.$$scope={dirty:k,ctx:s}),Oo.$set(Nt);const Lt={};k&2&&(Lt.$$scope={dirty:k,ctx:s}),No.$set(Lt);const mp={};k&2&&(mp.$$scope={dirty:k,ctx:s}),So.$set(mp);const up={};k&2&&(up.$$scope={dirty:k,ctx:s}),Io.$set(up);const fp={};k&2&&(fp.$$scope={dirty:k,ctx:s}),Wo.$set(fp);const Qs={};k&2&&(Qs.$$scope={dirty:k,ctx:s}),Qo.$set(Qs);const gp={};k&2&&(gp.$$scope={dirty:k,ctx:s}),Uo.$set(gp);const _p={};k&2&&(_p.$$scope={dirty:k,ctx:s}),Ho.$set(_p);const wi={};k&2&&(wi.$$scope={dirty:k,ctx:s}),Ko.$set(wi);const bp={};k&2&&(bp.$$scope={dirty:k,ctx:s}),Vo.$set(bp);const kp={};k&2&&(kp.$$scope={dirty:k,ctx:s}),Go.$set(kp);const vp={};k&2&&(vp.$$scope={dirty:k,ctx:s}),Xo.$set(vp);const St={};k&2&&(St.$$scope={dirty:k,ctx:s}),Zo.$set(St);const Tp={};k&2&&(Tp.$$scope={dirty:k,ctx:s}),en.$set(Tp);const un={};k&2&&(un.$$scope={dirty:k,ctx:s}),sn.$set(un);const $p={};k&2&&($p.$$scope={dirty:k,ctx:s}),on.$set($p);const wp={};k&2&&(wp.$$scope={dirty:k,ctx:s}),rn.$set(wp);const yi={};k&2&&(yi.$$scope={dirty:k,ctx:s}),an.$set(yi);const yp={};k&2&&(yp.$$scope={dirty:k,ctx:s}),dn.$set(yp);const Fi={};k&2&&(Fi.$$scope={dirty:k,ctx:s}),cn.$set(Fi);const Fp={};k&2&&(Fp.$$scope={dirty:k,ctx:s}),hn.$set(Fp);const Dp={};k&2&&(Dp.$$scope={dirty:k,ctx:s}),mn.$set(Dp)},i(s){_h||(y(l.$$.fragment,s),y(X.$$.fragment,s),y(Pn.$$.fragment,s),y(An.$$.fragment,s),y(Us.$$.fragment,s),y(Nn.$$.fragment,s),y(Ln.$$.fragment,s),y(In.$$.fragment,s),y(Wn.$$.fragment,s),y(Un.$$.fragment,s),y(Hn.$$.fragment,s),y(Gn.$$.fragment,s),y(Xs.$$.fragment,s),y(Ys.$$.fragment,s),y(Xn.$$.fragment,s),y(Yn.$$.fragment,s),y(or.$$.fragment,s),y(eo.$$.fragment,s),y(to.$$.fragment,s),y(so.$$.fragment,s),y(nr.$$.fragment,s),y(rr.$$.fragment,s),y(dr.$$.fragment,s),y(no.$$.fragment,s),y(ro.$$.fragment,s),y(ao.$$.fragment,s),y(io.$$.fragment,s),y(lo.$$.fragment,s),y(cr.$$.fragment,s),y(pr.$$.fragment,s),y(fr.$$.fragment,s),y(po.$$.fragment,s),y(ho.$$.fragment,s),y(gr.$$.fragment,s),y(_r.$$.fragment,s),y(Tr.$$.fragment,s),y(uo.$$.fragment,s),y(fo.$$.fragment,s),y(go.$$.fragment,s),y($r.$$.fragment,s),y(wr.$$.fragment,s),y(xr.$$.fragment,s),y(bo.$$.fragment,s),y(ko.$$.fragment,s),y(vo.$$.fragment,s),y(Br.$$.fragment,s),y(Mr.$$.fragment,s),y($o.$$.fragment,s),y(Cr.$$.fragment,s),y(wo.$$.fragment,s),y(yo.$$.fragment,s),y(qr.$$.fragment,s),y(Pr.$$.fragment,s),y(Do.$$.fragment,s),y(Sr.$$.fragment,s),y(xo.$$.fragment,s),y(Bo.$$.fragment,s),y(Mo.$$.fragment,s),y(Ir.$$.fragment,s),y(Wr.$$.fragment,s),y(zo.$$.fragment,s),y(Hr.$$.fragment,s),y(jo.$$.fragment,s),y(Co.$$.fragment,s),y(qo.$$.fragment,s),y(Kr.$$.fragment,s),y(Vr.$$.fragment,s),y(Ao.$$.fragment,s),y(Yr.$$.fragment,s),y(Oo.$$.fragment,s),y(No.$$.fragment,s),y(Zr.$$.fragment,s),y(ea.$$.fragment,s),y(So.$$.fragment,s),y(na.$$.fragment,s),y(Io.$$.fragment,s),y(Wo.$$.fragment,s),y(Qo.$$.fragment,s),y(ra.$$.fragment,s),y(aa.$$.fragment,s),y(Uo.$$.fragment,s),y(ca.$$.fragment,s),y(Ho.$$.fragment,s),y(Ko.$$.fragment,s),y(Vo.$$.fragment,s),y(pa.$$.fragment,s),y(ha.$$.fragment,s),y(va.$$.fragment,s),y(Go.$$.fragment,s),y(Xo.$$.fragment,s),y(Ta.$$.fragment,s),y($a.$$.fragment,s),y(za.$$.fragment,s),y(Zo.$$.fragment,s),y(en.$$.fragment,s),y(ja.$$.fragment,s),y(Ca.$$.fragment,s),y(Ia.$$.fragment,s),y(sn.$$.fragment,s),y(on.$$.fragment,s),y(Wa.$$.fragment,s),y(Qa.$$.fragment,s),y(Xa.$$.fragment,s),y(rn.$$.fragment,s),y(an.$$.fragment,s),y(Ya.$$.fragment,s),y(Za.$$.fragment,s),y(ii.$$.fragment,s),y(dn.$$.fragment,s),y(cn.$$.fragment,s),y(li.$$.fragment,s),y(di.$$.fragment,s),y(_i.$$.fragment,s),y(hn.$$.fragment,s),y(mn.$$.fragment,s),_h=!0)},o(s){F(l.$$.fragment,s),F(X.$$.fragment,s),F(Pn.$$.fragment,s),F(An.$$.fragment,s),F(Us.$$.fragment,s),F(Nn.$$.fragment,s),F(Ln.$$.fragment,s),F(In.$$.fragment,s),F(Wn.$$.fragment,s),F(Un.$$.fragment,s),F(Hn.$$.fragment,s),F(Gn.$$.fragment,s),F(Xs.$$.fragment,s),F(Ys.$$.fragment,s),F(Xn.$$.fragment,s),F(Yn.$$.fragment,s),F(or.$$.fragment,s),F(eo.$$.fragment,s),F(to.$$.fragment,s),F(so.$$.fragment,s),F(nr.$$.fragment,s),F(rr.$$.fragment,s),F(dr.$$.fragment,s),F(no.$$.fragment,s),F(ro.$$.fragment,s),F(ao.$$.fragment,s),F(io.$$.fragment,s),F(lo.$$.fragment,s),F(cr.$$.fragment,s),F(pr.$$.fragment,s),F(fr.$$.fragment,s),F(po.$$.fragment,s),F(ho.$$.fragment,s),F(gr.$$.fragment,s),F(_r.$$.fragment,s),F(Tr.$$.fragment,s),F(uo.$$.fragment,s),F(fo.$$.fragment,s),F(go.$$.fragment,s),F($r.$$.fragment,s),F(wr.$$.fragment,s),F(xr.$$.fragment,s),F(bo.$$.fragment,s),F(ko.$$.fragment,s),F(vo.$$.fragment,s),F(Br.$$.fragment,s),F(Mr.$$.fragment,s),F($o.$$.fragment,s),F(Cr.$$.fragment,s),F(wo.$$.fragment,s),F(yo.$$.fragment,s),F(qr.$$.fragment,s),F(Pr.$$.fragment,s),F(Do.$$.fragment,s),F(Sr.$$.fragment,s),F(xo.$$.fragment,s),F(Bo.$$.fragment,s),F(Mo.$$.fragment,s),F(Ir.$$.fragment,s),F(Wr.$$.fragment,s),F(zo.$$.fragment,s),F(Hr.$$.fragment,s),F(jo.$$.fragment,s),F(Co.$$.fragment,s),F(qo.$$.fragment,s),F(Kr.$$.fragment,s),F(Vr.$$.fragment,s),F(Ao.$$.fragment,s),F(Yr.$$.fragment,s),F(Oo.$$.fragment,s),F(No.$$.fragment,s),F(Zr.$$.fragment,s),F(ea.$$.fragment,s),F(So.$$.fragment,s),F(na.$$.fragment,s),F(Io.$$.fragment,s),F(Wo.$$.fragment,s),F(Qo.$$.fragment,s),F(ra.$$.fragment,s),F(aa.$$.fragment,s),F(Uo.$$.fragment,s),F(ca.$$.fragment,s),F(Ho.$$.fragment,s),F(Ko.$$.fragment,s),F(Vo.$$.fragment,s),F(pa.$$.fragment,s),F(ha.$$.fragment,s),F(va.$$.fragment,s),F(Go.$$.fragment,s),F(Xo.$$.fragment,s),F(Ta.$$.fragment,s),F($a.$$.fragment,s),F(za.$$.fragment,s),F(Zo.$$.fragment,s),F(en.$$.fragment,s),F(ja.$$.fragment,s),F(Ca.$$.fragment,s),F(Ia.$$.fragment,s),F(sn.$$.fragment,s),F(on.$$.fragment,s),F(Wa.$$.fragment,s),F(Qa.$$.fragment,s),F(Xa.$$.fragment,s),F(rn.$$.fragment,s),F(an.$$.fragment,s),F(Ya.$$.fragment,s),F(Za.$$.fragment,s),F(ii.$$.fragment,s),F(dn.$$.fragment,s),F(cn.$$.fragment,s),F(li.$$.fragment,s),F(di.$$.fragment,s),F(_i.$$.fragment,s),F(hn.$$.fragment,s),F(mn.$$.fragment,s),_h=!1},d(s){t(d),s&&t(g),s&&t(c),D(l),s&&t(K),s&&t(E),D(X),s&&t(le),s&&t(N),s&&t(de),s&&t(ee),s&&t(ce),s&&t(L),s&&t(q),s&&t(te),s&&t(pe),s&&t(v),s&&t(Bp),s&&t(pt),s&&t(Mp),s&&t(es),D(Pn),s&&t(Ep),s&&t(lt),D(An),D(Us),s&&t(zp),s&&t(ss),D(Nn),s&&t(jp),s&&t(dt),D(Ln),s&&t(Cp),s&&t(os),D(In),s&&t(qp),s&&t(ct),D(Wn),s&&t(Pp),s&&t(ns),D(Un),s&&t(Ap),s&&t(We),D(Hn),D(Gn),D(Xs),D(Ys),s&&t(Op),s&&t(as),D(Xn),s&&t(Np),s&&t(Qe),D(Yn),D(or),D(eo),D(to),D(so),s&&t(Lp),s&&t(ls),D(nr),s&&t(Sp),s&&t(Re),D(rr),D(dr),D(no),D(ro),D(ao),D(io),D(lo),s&&t(Ip),s&&t(cs),D(cr),s&&t(Wp),s&&t(Ue),D(pr),D(fr),D(po),D(ho),s&&t(Qp),s&&t(hs),D(gr),s&&t(Rp),s&&t(He),D(_r),D(Tr),D(uo),D(fo),D(go),s&&t(Up),s&&t(us),D($r),s&&t(Hp),s&&t(Ke),D(wr),D(xr),D(bo),D(ko),D(vo),s&&t(Kp),s&&t(_s),D(Br),s&&t(Vp),s&&t(Ae),D(Mr),D($o),D(Cr),D(wo),D(yo),s&&t(Jp),s&&t(ks),D(qr),s&&t(Gp),s&&t(Oe),D(Pr),D(Do),D(Sr),D(xo),D(Bo),D(Mo),s&&t(Xp),s&&t(Ts),D(Ir),s&&t(Yp),s&&t(Ne),D(Wr),D(zo),D(Hr),D(jo),D(Co),D(qo),s&&t(Zp),s&&t(ws),D(Kr),s&&t(eh),s&&t(Le),D(Vr),D(Ao),D(Yr),D(Oo),D(No),s&&t(th),s&&t(Fs),D(Zr),s&&t(sh),s&&t(Se),D(ea),D(So),D(na),D(Io),D(Wo),D(Qo),s&&t(oh),s&&t(xs),D(ra),s&&t(nh),s&&t(Ie),D(aa),D(Uo),D(ca),D(Ho),D(Ko),D(Vo),s&&t(rh),s&&t(Es),D(pa),s&&t(ah),s&&t(Me),D(ha),D(va),D(Go),D(Xo),s&&t(ih),s&&t(js),D(Ta),s&&t(lh),s&&t(Ee),D($a),D(za),D(Zo),D(en),s&&t(dh),s&&t(qs),D(ja),s&&t(ch),s&&t(ze),D(Ca),D(Ia),D(sn),D(on),s&&t(ph),s&&t(As),D(Wa),s&&t(hh),s&&t(je),D(Qa),D(Xa),D(rn),D(an),s&&t(mh),s&&t(Ns),D(Ya),s&&t(uh),s&&t(Ce),D(Za),D(ii),D(dn),D(cn),s&&t(fh),s&&t(Ss),D(li),s&&t(gh),s&&t(qe),D(di),D(_i),D(hn),D(mn)}}}const nD={local:"distilbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.DistilBertConfig",title:"DistilBertConfig"},{local:"transformers.DistilBertTokenizer",title:"DistilBertTokenizer"},{local:"transformers.DistilBertTokenizerFast",title:"DistilBertTokenizerFast"},{local:"transformers.DistilBertModel",title:"DistilBertModel"},{local:"transformers.DistilBertForMaskedLM",title:"DistilBertForMaskedLM"},{local:"transformers.DistilBertForSequenceClassification",title:"DistilBertForSequenceClassification"},{local:"transformers.DistilBertForMultipleChoice",title:"DistilBertForMultipleChoice"},{local:"transformers.DistilBertForTokenClassification",title:"DistilBertForTokenClassification"},{local:"transformers.DistilBertForQuestionAnswering",title:"DistilBertForQuestionAnswering"},{local:"transformers.TFDistilBertModel",title:"TFDistilBertModel"},{local:"transformers.TFDistilBertForMaskedLM",title:"TFDistilBertForMaskedLM"},{local:"transformers.TFDistilBertForSequenceClassification",title:"TFDistilBertForSequenceClassification"},{local:"transformers.TFDistilBertForMultipleChoice",title:"TFDistilBertForMultipleChoice"},{local:"transformers.TFDistilBertForTokenClassification",title:"TFDistilBertForTokenClassification"},{local:"transformers.TFDistilBertForQuestionAnswering",title:"TFDistilBertForQuestionAnswering"},{local:"transformers.FlaxDistilBertModel",title:"FlaxDistilBertModel"},{local:"transformers.FlaxDistilBertForMaskedLM",title:"FlaxDistilBertForMaskedLM"},{local:"transformers.FlaxDistilBertForSequenceClassification",title:"FlaxDistilBertForSequenceClassification"},{local:"transformers.FlaxDistilBertForMultipleChoice",title:"FlaxDistilBertForMultipleChoice"},{local:"transformers.FlaxDistilBertForTokenClassification",title:"FlaxDistilBertForTokenClassification"},{local:"transformers.FlaxDistilBertForQuestionAnswering",title:"FlaxDistilBertForQuestionAnswering"}],title:"DistilBERT"};function rD(x){return oF(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class hD extends Z2{constructor(d){super();eF(this,d,rD,oD,tF,{})}}export{hD as default,nD as metadata};
