import{S as ir,i as lr,s as dr,e as a,k as h,w as b,t as i,M as cr,c as n,d as o,m as f,a as s,x as w,h as l,b as c,N as mr,G as e,g as _,y as P,q as $,o as y,B as D,v as pr,L as yo}from"../../chunks/vendor-hf-doc-builder.js";import{T as Po}from"../../chunks/Tip-hf-doc-builder.js";import{D as O}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Do}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ze}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as $o}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function hr(x){let d,v,u,m,T;return m=new Do({props:{code:`from transformers import DPTModel, DPTConfig

# Initializing a DPT dpt-large style configuration
configuration = DPTConfig()

# Initializing a model from the dpt-large style configuration
model = DPTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DPTModel, DPTConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a DPT dpt-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = DPTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the dpt-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DPTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),v=i("Example:"),u=h(),b(m.$$.fragment)},l(r){d=n(r,"P",{});var g=s(d);v=l(g,"Example:"),g.forEach(o),u=f(r),w(m.$$.fragment,r)},m(r,g){_(r,d,g),e(d,v),_(r,u,g),P(m,r,g),T=!0},p:yo,i(r){T||($(m.$$.fragment,r),T=!0)},o(r){y(m.$$.fragment,r),T=!1},d(r){r&&o(d),r&&o(u),D(m,r)}}}function fr(x){let d,v;return{c(){d=a("p"),v=i(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(u){d=n(u,"P",{});var m=s(d);v=l(m,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),m.forEach(o)},m(u,m){_(u,d,m),e(d,v)},d(u){u&&o(d)}}}function ur(x){let d,v,u,m,T;return{c(){d=a("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=i("Module"),T=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=n(r,"P",{});var g=s(d);v=l(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(g,"CODE",{});var k=s(u);m=l(k,"Module"),k.forEach(o),T=l(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(r,g){_(r,d,g),e(d,v),e(d,u),e(u,m),e(d,T)},d(r){r&&o(d)}}}function gr(x){let d,v,u,m,T;return m=new Do({props:{code:`from transformers import DPTFeatureExtractor, DPTModel
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = DPTFeatureExtractor.from_pretrained("Intel/dpt-large")
model = DPTModel.from_pretrained("Intel/dpt-large")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DPTFeatureExtractor, DPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DPTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;Intel/dpt-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DPTModel.from_pretrained(<span class="hljs-string">&quot;Intel/dpt-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">577</span>, <span class="hljs-number">1024</span>]`}}),{c(){d=a("p"),v=i("Example:"),u=h(),b(m.$$.fragment)},l(r){d=n(r,"P",{});var g=s(d);v=l(g,"Example:"),g.forEach(o),u=f(r),w(m.$$.fragment,r)},m(r,g){_(r,d,g),e(d,v),_(r,u,g),P(m,r,g),T=!0},p:yo,i(r){T||($(m.$$.fragment,r),T=!0)},o(r){y(m.$$.fragment,r),T=!1},d(r){r&&o(d),r&&o(u),D(m,r)}}}function _r(x){let d,v,u,m,T;return{c(){d=a("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=i("Module"),T=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=n(r,"P",{});var g=s(d);v=l(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(g,"CODE",{});var k=s(u);m=l(k,"Module"),k.forEach(o),T=l(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(r,g){_(r,d,g),e(d,v),e(d,u),e(u,m),e(d,T)},d(r){r&&o(d)}}}function Tr(x){let d,v,u,m,T;return m=new Do({props:{code:`from transformers import DPTFeatureExtractor, DPTForDepthEstimation
import torch
import numpy as np
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = DPTFeatureExtractor.from_pretrained("Intel/dpt-large")
model = DPTForDepthEstimation.from_pretrained("Intel/dpt-large")

# prepare image for the model
inputs = feature_extractor(images=image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)
    predicted_depth = outputs.predicted_depth

# interpolate to original size
prediction = torch.nn.functional.interpolate(
    predicted_depth.unsqueeze(1),
    size=image.size[::-1],
    mode="bicubic",
    align_corners=False,
)

# visualize the prediction
output = prediction.squeeze().cpu().numpy()
formatted = (output * 255 / np.max(output)).astype("uint8")
depth = Image.fromarray(formatted)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DPTFeatureExtractor, DPTForDepthEstimation
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DPTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;Intel/dpt-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DPTForDepthEstimation.from_pretrained(<span class="hljs-string">&quot;Intel/dpt-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prepare image for the model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)
<span class="hljs-meta">... </span>    predicted_depth = outputs.predicted_depth

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># interpolate to original size</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction = torch.nn.functional.interpolate(
<span class="hljs-meta">... </span>    predicted_depth.unsqueeze(<span class="hljs-number">1</span>),
<span class="hljs-meta">... </span>    size=image.size[::-<span class="hljs-number">1</span>],
<span class="hljs-meta">... </span>    mode=<span class="hljs-string">&quot;bicubic&quot;</span>,
<span class="hljs-meta">... </span>    align_corners=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># visualize the prediction</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>output = prediction.squeeze().cpu().numpy()
<span class="hljs-meta">&gt;&gt;&gt; </span>formatted = (output * <span class="hljs-number">255</span> / np.<span class="hljs-built_in">max</span>(output)).astype(<span class="hljs-string">&quot;uint8&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>depth = Image.fromarray(formatted)`}}),{c(){d=a("p"),v=i("Examples:"),u=h(),b(m.$$.fragment)},l(r){d=n(r,"P",{});var g=s(d);v=l(g,"Examples:"),g.forEach(o),u=f(r),w(m.$$.fragment,r)},m(r,g){_(r,d,g),e(d,v),_(r,u,g),P(m,r,g),T=!0},p:yo,i(r){T||($(m.$$.fragment,r),T=!0)},o(r){y(m.$$.fragment,r),T=!1},d(r){r&&o(d),r&&o(u),D(m,r)}}}function vr(x){let d,v,u,m,T;return{c(){d=a("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=i("Module"),T=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){d=n(r,"P",{});var g=s(d);v=l(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n(g,"CODE",{});var k=s(u);m=l(k,"Module"),k.forEach(o),T=l(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(r,g){_(r,d,g),e(d,v),e(d,u),e(u,m),e(d,T)},d(r){r&&o(d)}}}function br(x){let d,v,u,m,T;return m=new Do({props:{code:`from transformers import DPTFeatureExtractor, DPTForSemanticSegmentation
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = DPTFeatureExtractor.from_pretrained("Intel/dpt-large-ade")
model = DPTForSemanticSegmentation.from_pretrained("Intel/dpt-large-ade")

inputs = feature_extractor(images=image, return_tensors="pt")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DPTFeatureExtractor, DPTForSemanticSegmentation
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DPTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;Intel/dpt-large-ade&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DPTForSemanticSegmentation.from_pretrained(<span class="hljs-string">&quot;Intel/dpt-large-ade&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),v=i("Examples:"),u=h(),b(m.$$.fragment)},l(r){d=n(r,"P",{});var g=s(d);v=l(g,"Examples:"),g.forEach(o),u=f(r),w(m.$$.fragment,r)},m(r,g){_(r,d,g),e(d,v),_(r,u,g),P(m,r,g),T=!0},p:yo,i(r){T||($(m.$$.fragment,r),T=!0)},o(r){y(m.$$.fragment,r),T=!1},d(r){r&&o(d),r&&o(u),D(m,r)}}}function wr(x){let d,v,u,m,T,r,g,k,xo,Ut,V,Z,vt,we,Eo,bt,ko,Ht,q,Fo,Pe,jo,zo,Qe,Io,So,Kt,et,Co,Gt,tt,wt,Mo,Yt,Q,Tn,Jt,ee,qo,$e,Ao,Lo,Xt,A,No,ye,Oo,Vo,De,Ro,Wo,Zt,R,te,Pt,xe,Bo,$t,Uo,Qt,F,Ee,Ho,W,Ko,ot,Go,Yo,ke,Jo,Xo,Zo,B,Qo,at,ea,ta,nt,oa,aa,na,oe,eo,U,ae,yt,Fe,ra,Dt,sa,to,E,je,ia,xt,la,da,ze,ca,rt,ma,pa,ha,L,Ie,fa,Et,ua,ga,ne,_a,re,Se,Ta,Ce,va,st,ba,wa,oo,H,se,kt,Me,Pa,Ft,$a,ao,M,qe,ya,Ae,Da,Le,xa,Ea,ka,I,Ne,Fa,K,ja,it,za,Ia,jt,Sa,Ca,Ma,ie,qa,le,no,G,de,zt,Oe,Aa,It,La,ro,j,Ve,Na,St,Oa,Va,Re,Ra,We,Wa,Ba,Ua,S,Be,Ha,Y,Ka,lt,Ga,Ya,Ct,Ja,Xa,Za,ce,Qa,me,so,J,pe,Mt,Ue,en,qt,tn,io,z,He,on,At,an,nn,Ke,rn,Ge,sn,ln,dn,C,Ye,cn,X,mn,dt,pn,hn,Lt,fn,un,gn,he,_n,fe,lo;return r=new Ze({}),we=new Ze({}),xe=new Ze({}),Ee=new O({props:{name:"class transformers.DPTConfig",anchor:"transformers.DPTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"image_size",val:" = 384"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"backbone_out_indices",val:" = [2, 5, 8, 11]"},{name:"readout_type",val:" = 'project'"},{name:"reassemble_factors",val:" = [4, 2, 1, 0.5]"},{name:"neck_hidden_sizes",val:" = [96, 192, 384, 768]"},{name:"fusion_hidden_size",val:" = 256"},{name:"head_in_index",val:" = -1"},{name:"use_batch_norm_in_fusion_residual",val:" = False"},{name:"use_auxiliary_head",val:" = True"},{name:"auxiliary_loss_weight",val:" = 0.4"},{name:"semantic_loss_ignore_index",val:" = 255"},{name:"semantic_classifier_dropout",val:" = 0.1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DPTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.DPTConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.DPTConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.DPTConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.DPTConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.DPTConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.DPTConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.DPTConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DPTConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DPTConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 384) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.DPTConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.DPTConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.DPTConfig.qkv_bias",description:`<strong>qkv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to add a bias to the queries, keys and values.`,name:"qkv_bias"},{anchor:"transformers.DPTConfig.backbone_out_indices",description:`<strong>backbone_out_indices</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[2, 5, 8, 11]</code>) &#x2014;
Indices of the intermediate hidden states to use from backbone.`,name:"backbone_out_indices"},{anchor:"transformers.DPTConfig.readout_type",description:`<strong>readout_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;project&quot;</code>) &#x2014;
The readout type to use when processing the readout token (CLS token) of the intermediate hidden states of
the ViT backbone. Can be one of [<code>&quot;ignore&quot;</code>, <code>&quot;add&quot;</code>, <code>&quot;project&quot;</code>].</p>
<ul>
<li>&#x201C;ignore&#x201D; simply ignores the CLS token.</li>
<li>&#x201C;add&#x201D; passes the information from the CLS token to all other tokens by adding the representations.</li>
<li>&#x201C;project&#x201D; passes information to the other tokens by concatenating the readout to all other tokens before
projecting the
representation to the original feature dimension D using a linear layer followed by a GELU non-linearity.</li>
</ul>`,name:"readout_type"},{anchor:"transformers.DPTConfig.reassemble_factors",description:`<strong>reassemble_factors</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[4, 2, 1, 0.5]</code>) &#x2014;
The up/downsampling factors of the reassemble layers.`,name:"reassemble_factors"},{anchor:"transformers.DPTConfig.neck_hidden_sizes",description:`<strong>neck_hidden_sizes</strong> (<code>List[str]</code>, <em>optional</em>, defaults to [96, 192, 384, 768]) &#x2014;
The hidden sizes to project to for the feature maps of the backbone.`,name:"neck_hidden_sizes"},{anchor:"transformers.DPTConfig.fusion_hidden_size",description:`<strong>fusion_hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
The number of channels before fusion.`,name:"fusion_hidden_size"},{anchor:"transformers.DPTConfig.head_in_index",description:`<strong>head_in_index</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The index of the features to use in the heads.`,name:"head_in_index"},{anchor:"transformers.DPTConfig.use_batch_norm_in_fusion_residual",description:`<strong>use_batch_norm_in_fusion_residual</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use batch normalization in the pre-activate residual units of the fusion blocks.`,name:"use_batch_norm_in_fusion_residual"},{anchor:"transformers.DPTConfig.use_auxiliary_head",description:`<strong>use_auxiliary_head</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use an auxiliary head during training.`,name:"use_auxiliary_head"},{anchor:"transformers.DPTConfig.auxiliary_loss_weight",description:`<strong>auxiliary_loss_weight</strong> (<code>float</code>, <em>optional</em>, defaults to 0.4) &#x2014;
Weight of the cross-entropy loss of the auxiliary head.`,name:"auxiliary_loss_weight"},{anchor:"transformers.DPTConfig.semantic_loss_ignore_index",description:`<strong>semantic_loss_ignore_index</strong> (<code>int</code>, <em>optional</em>, defaults to 255) &#x2014;
The index that is ignored by the loss function of the semantic segmentation model.`,name:"semantic_loss_ignore_index"},{anchor:"transformers.DPTConfig.semantic_classifier_dropout",description:`<strong>semantic_classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the semantic classification head.`,name:"semantic_classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/dpt/configuration_dpt.py#L29"}}),oe=new $o({props:{anchor:"transformers.DPTConfig.example",$$slots:{default:[hr]},$$scope:{ctx:x}}}),Fe=new Ze({}),je=new O({props:{name:"class transformers.DPTFeatureExtractor",anchor:"transformers.DPTFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 384"},{name:"keep_aspect_ratio",val:" = False"},{name:"ensure_multiple_of",val:" = 1"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DPTFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.DPTFeatureExtractor.size",description:`<strong>size</strong> (&#x2018;int&#x2019; or <code>Tuple(int)</code>, <em>optional</em>, defaults to 384) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.DPTFeatureExtractor.ensure_multiple_of",description:`<strong>ensure_multiple_of</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Ensure that the input is resized to a multiple of this value. Only has an effect if <code>do_resize</code> is set to
<code>True</code>.`,name:"ensure_multiple_of"},{anchor:"transformers.DPTFeatureExtractor.keep_aspect_ratio",description:`<strong>keep_aspect_ratio</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to keep the aspect ratio of the input. Only has an effect if <code>do_resize</code> is set to <code>True</code>.`,name:"keep_aspect_ratio"},{anchor:"transformers.DPTFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.Resampling.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.Resampling.NEAREST</code>,
<code>PIL.Image.Resampling.BOX</code>, <code>PIL.Image.Resampling.BILINEAR</code>, <code>PIL.Image.Resampling.HAMMING</code>,
<code>PIL.Image.Resampling.BICUBIC</code> or <code>PIL.Image.Resampling.LANCZOS</code>. Only has an effect if <code>do_resize</code> is set
to <code>True</code>.`,name:"resample"},{anchor:"transformers.DPTFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with mean and standard deviation.`,name:"do_normalize"},{anchor:"transformers.DPTFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.DPTFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/dpt/feature_extraction_dpt.py#L41"}}),Ie=new O({props:{name:"__call__",anchor:"transformers.DPTFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[ForwardRef('PIL.Image.Image'), numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[ForwardRef('PIL.Image.Image')], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DPTFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.DPTFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/dpt/feature_extraction_dpt.py#L138",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),ne=new Po({props:{warning:!0,$$slots:{default:[fr]},$$scope:{ctx:x}}}),Se=new O({props:{name:"post_process_semantic_segmentation",anchor:"transformers.DPTFeatureExtractor.post_process_semantic_segmentation",parameters:[{name:"outputs",val:""},{name:"target_sizes",val:": typing.List[typing.Tuple] = None"}],parametersDescription:[{anchor:"transformers.DPTFeatureExtractor.post_process_semantic_segmentation.outputs",description:`<strong>outputs</strong> (<a href="/docs/transformers/main/en/model_doc/dpt#transformers.DPTForSemanticSegmentation">DPTForSemanticSegmentation</a>) &#x2014;
Raw outputs of the model.`,name:"outputs"},{anchor:"transformers.DPTFeatureExtractor.post_process_semantic_segmentation.target_sizes",description:`<strong>target_sizes</strong> (<code>List[Tuple]</code> of length <code>batch_size</code>, <em>optional</em>) &#x2014;
List of tuples corresponding to the requested final size (height, width) of each prediction. If left to
None, predictions will not be resized.`,name:"target_sizes"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/dpt/feature_extraction_dpt.py#L209",returnDescription:`
<p><code>List[torch.Tensor]</code> of length <code>batch_size</code>, where each item is a semantic
segmentation map of shape (height, width) corresponding to the target_sizes entry (if <code>target_sizes</code> is
specified). Each entry of each <code>torch.Tensor</code> correspond to a semantic class id.</p>
`,returnType:`
<p>semantic_segmentation</p>
`}}),Me=new Ze({}),qe=new O({props:{name:"class transformers.DPTModel",anchor:"transformers.DPTModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.DPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/dpt/modeling_dpt.py#L678"}}),Ne=new O({props:{name:"forward",anchor:"transformers.DPTModel.forward",parameters:[{name:"pixel_values",val:""},{name:"head_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.DPTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DPTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DPTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DPTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DPTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/dpt/modeling_dpt.py#L704",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/dpt#transformers.DPTConfig"
>DPTConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ie=new Po({props:{$$slots:{default:[ur]},$$scope:{ctx:x}}}),le=new $o({props:{anchor:"transformers.DPTModel.forward.example",$$slots:{default:[gr]},$$scope:{ctx:x}}}),Oe=new Ze({}),Ve=new O({props:{name:"class transformers.DPTForDepthEstimation",anchor:"transformers.DPTForDepthEstimation",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DPTForDepthEstimation.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/dpt/modeling_dpt.py#L859"}}),Be=new O({props:{name:"forward",anchor:"transformers.DPTForDepthEstimation.forward",parameters:[{name:"pixel_values",val:""},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.DPTForDepthEstimation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DPTForDepthEstimation.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DPTForDepthEstimation.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DPTForDepthEstimation.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DPTForDepthEstimation.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DPTForDepthEstimation.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Ground truth depth estimation maps for computing the loss.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/dpt/modeling_dpt.py#L874",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.DepthEstimatorOutput"
>transformers.modeling_outputs.DepthEstimatorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/dpt#transformers.DPTConfig"
>DPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>predicted_depth</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, height, width)</code>) \u2014 Predicted depth for each pixel.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, num_channels, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, patch_size, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.DepthEstimatorOutput"
>transformers.modeling_outputs.DepthEstimatorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ce=new Po({props:{$$slots:{default:[_r]},$$scope:{ctx:x}}}),me=new $o({props:{anchor:"transformers.DPTForDepthEstimation.forward.example",$$slots:{default:[Tr]},$$scope:{ctx:x}}}),Ue=new Ze({}),He=new O({props:{name:"class transformers.DPTForSemanticSegmentation",anchor:"transformers.DPTForSemanticSegmentation",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DPTForSemanticSegmentation.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/dpt/modeling_dpt.py#L1019"}}),Ye=new O({props:{name:"forward",anchor:"transformers.DPTForSemanticSegmentation.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.DPTForSemanticSegmentation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DPTForSemanticSegmentation.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DPTForSemanticSegmentation.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DPTForSemanticSegmentation.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DPTForSemanticSegmentation.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DPTForSemanticSegmentation.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Ground truth semantic segmentation maps for computing the loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code>, a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/dpt/modeling_dpt.py#L1035",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SemanticSegmenterOutput"
>transformers.modeling_outputs.SemanticSegmenterOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/dpt#transformers.DPTConfig"
>DPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels, logits_height, logits_width)</code>) \u2014 Classification scores for each pixel.</p>
<Tip warning={true}>
<p>The logits returned do not necessarily have the same size as the <code>pixel_values</code> passed as inputs. This is
to avoid doing two interpolations and lose some quality when a user needs to resize the logits to the
original image size as post-processing. You should always check your logits shape and resize as needed.</p>
</Tip>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, patch_size, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, patch_size, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SemanticSegmenterOutput"
>transformers.modeling_outputs.SemanticSegmenterOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),he=new Po({props:{$$slots:{default:[vr]},$$scope:{ctx:x}}}),fe=new $o({props:{anchor:"transformers.DPTForSemanticSegmentation.forward.example",$$slots:{default:[br]},$$scope:{ctx:x}}}),{c(){d=a("meta"),v=h(),u=a("h1"),m=a("a"),T=a("span"),b(r.$$.fragment),g=h(),k=a("span"),xo=i("DPT"),Ut=h(),V=a("h2"),Z=a("a"),vt=a("span"),b(we.$$.fragment),Eo=h(),bt=a("span"),ko=i("Overview"),Ht=h(),q=a("p"),Fo=i("The DPT model was proposed in "),Pe=a("a"),jo=i("Vision Transformers for Dense Prediction"),zo=i(` by Ren\xE9 Ranftl, Alexey Bochkovskiy, Vladlen Koltun.
DPT is a model that leverages the `),Qe=a("a"),Io=i("Vision Transformer (ViT)"),So=i(" as backbone for dense prediction tasks like semantic segmentation and depth estimation."),Kt=h(),et=a("p"),Co=i("The abstract from the paper is the following:"),Gt=h(),tt=a("p"),wt=a("em"),Mo=i("We introduce dense vision transformers, an architecture that leverages vision transformers in place of convolutional networks as a backbone for dense prediction tasks. We assemble tokens from various stages of the vision transformer into image-like representations at various resolutions and progressively combine them into full-resolution predictions using a convolutional decoder. The transformer backbone processes representations at a constant and relatively high resolution and has a global receptive field at every stage. These properties allow the dense vision transformer to provide finer-grained and more globally coherent predictions when compared to fully-convolutional networks. Our experiments show that this architecture yields substantial improvements on dense prediction tasks, especially when a large amount of training data is available. For monocular depth estimation, we observe an improvement of up to 28% in relative performance when compared to a state-of-the-art fully-convolutional network. When applied to semantic segmentation, dense vision transformers set a new state of the art on ADE20K with 49.02% mIoU. We further show that the architecture can be fine-tuned on smaller datasets such as NYUv2, KITTI, and Pascal Context where it also sets the new state of the art."),Yt=h(),Q=a("img"),Jt=h(),ee=a("small"),qo=i("DPT architecture. Taken from the "),$e=a("a"),Ao=i("original paper"),Lo=i("."),Xt=h(),A=a("p"),No=i("This model was contributed by "),ye=a("a"),Oo=i("nielsr"),Vo=i(". The original code can be found "),De=a("a"),Ro=i("here"),Wo=i("."),Zt=h(),R=a("h2"),te=a("a"),Pt=a("span"),b(xe.$$.fragment),Bo=h(),$t=a("span"),Uo=i("DPTConfig"),Qt=h(),F=a("div"),b(Ee.$$.fragment),Ho=h(),W=a("p"),Ko=i("This is the configuration class to store the configuration of a "),ot=a("a"),Go=i("DPTModel"),Yo=i(`. It is used to instantiate an DPT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DPT
`),ke=a("a"),Jo=i("Intel/dpt-large"),Xo=i(" architecture."),Zo=h(),B=a("p"),Qo=i("Configuration objects inherit from "),at=a("a"),ea=i("PretrainedConfig"),ta=i(` and can be used to control the model outputs. Read the
documentation from `),nt=a("a"),oa=i("PretrainedConfig"),aa=i(" for more information."),na=h(),b(oe.$$.fragment),eo=h(),U=a("h2"),ae=a("a"),yt=a("span"),b(Fe.$$.fragment),ra=h(),Dt=a("span"),sa=i("DPTFeatureExtractor"),to=h(),E=a("div"),b(je.$$.fragment),ia=h(),xt=a("p"),la=i("Constructs a DPT feature extractor."),da=h(),ze=a("p"),ca=i("This feature extractor inherits from "),rt=a("a"),ma=i("FeatureExtractionMixin"),pa=i(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),ha=h(),L=a("div"),b(Ie.$$.fragment),fa=h(),Et=a("p"),ua=i("Main method to prepare for the model one or several image(s)."),ga=h(),b(ne.$$.fragment),_a=h(),re=a("div"),b(Se.$$.fragment),Ta=h(),Ce=a("p"),va=i("Converts the output of "),st=a("a"),ba=i("DPTForSemanticSegmentation"),wa=i(" into semantic segmentation maps. Only supports PyTorch."),oo=h(),H=a("h2"),se=a("a"),kt=a("span"),b(Me.$$.fragment),Pa=h(),Ft=a("span"),$a=i("DPTModel"),ao=h(),M=a("div"),b(qe.$$.fragment),ya=h(),Ae=a("p"),Da=i(`The bare DPT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Le=a("a"),xa=i("torch.nn.Module"),Ea=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ka=h(),I=a("div"),b(Ne.$$.fragment),Fa=h(),K=a("p"),ja=i("The "),it=a("a"),za=i("DPTModel"),Ia=i(" forward method, overrides the "),jt=a("code"),Sa=i("__call__"),Ca=i(" special method."),Ma=h(),b(ie.$$.fragment),qa=h(),b(le.$$.fragment),no=h(),G=a("h2"),de=a("a"),zt=a("span"),b(Oe.$$.fragment),Aa=h(),It=a("span"),La=i("DPTForDepthEstimation"),ro=h(),j=a("div"),b(Ve.$$.fragment),Na=h(),St=a("p"),Oa=i("DPT Model with a depth estimation head on top (consisting of 3 convolutional layers) e.g. for KITTI, NYUv2."),Va=h(),Re=a("p"),Ra=i("This model is a PyTorch "),We=a("a"),Wa=i("torch.nn.Module"),Ba=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ua=h(),S=a("div"),b(Be.$$.fragment),Ha=h(),Y=a("p"),Ka=i("The "),lt=a("a"),Ga=i("DPTForDepthEstimation"),Ya=i(" forward method, overrides the "),Ct=a("code"),Ja=i("__call__"),Xa=i(" special method."),Za=h(),b(ce.$$.fragment),Qa=h(),b(me.$$.fragment),so=h(),J=a("h2"),pe=a("a"),Mt=a("span"),b(Ue.$$.fragment),en=h(),qt=a("span"),tn=i("DPTForSemanticSegmentation"),io=h(),z=a("div"),b(He.$$.fragment),on=h(),At=a("p"),an=i("DPT Model with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),nn=h(),Ke=a("p"),rn=i("This model is a PyTorch "),Ge=a("a"),sn=i("torch.nn.Module"),ln=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dn=h(),C=a("div"),b(Ye.$$.fragment),cn=h(),X=a("p"),mn=i("The "),dt=a("a"),pn=i("DPTForSemanticSegmentation"),hn=i(" forward method, overrides the "),Lt=a("code"),fn=i("__call__"),un=i(" special method."),gn=h(),b(he.$$.fragment),_n=h(),b(fe.$$.fragment),this.h()},l(t){const p=cr('[data-svelte="svelte-1phssyn"]',document.head);d=n(p,"META",{name:!0,content:!0}),p.forEach(o),v=f(t),u=n(t,"H1",{class:!0});var Je=s(u);m=n(Je,"A",{id:!0,class:!0,href:!0});var Nt=s(m);T=n(Nt,"SPAN",{});var Ot=s(T);w(r.$$.fragment,Ot),Ot.forEach(o),Nt.forEach(o),g=f(Je),k=n(Je,"SPAN",{});var Vt=s(k);xo=l(Vt,"DPT"),Vt.forEach(o),Je.forEach(o),Ut=f(t),V=n(t,"H2",{class:!0});var Xe=s(V);Z=n(Xe,"A",{id:!0,class:!0,href:!0});var Rt=s(Z);vt=n(Rt,"SPAN",{});var Wt=s(vt);w(we.$$.fragment,Wt),Wt.forEach(o),Rt.forEach(o),Eo=f(Xe),bt=n(Xe,"SPAN",{});var Bt=s(bt);ko=l(Bt,"Overview"),Bt.forEach(o),Xe.forEach(o),Ht=f(t),q=n(t,"P",{});var ct=s(q);Fo=l(ct,"The DPT model was proposed in "),Pe=n(ct,"A",{href:!0,rel:!0});var vn=s(Pe);jo=l(vn,"Vision Transformers for Dense Prediction"),vn.forEach(o),zo=l(ct,` by Ren\xE9 Ranftl, Alexey Bochkovskiy, Vladlen Koltun.
DPT is a model that leverages the `),Qe=n(ct,"A",{href:!0});var bn=s(Qe);Io=l(bn,"Vision Transformer (ViT)"),bn.forEach(o),So=l(ct," as backbone for dense prediction tasks like semantic segmentation and depth estimation."),ct.forEach(o),Kt=f(t),et=n(t,"P",{});var wn=s(et);Co=l(wn,"The abstract from the paper is the following:"),wn.forEach(o),Gt=f(t),tt=n(t,"P",{});var Pn=s(tt);wt=n(Pn,"EM",{});var $n=s(wt);Mo=l($n,"We introduce dense vision transformers, an architecture that leverages vision transformers in place of convolutional networks as a backbone for dense prediction tasks. We assemble tokens from various stages of the vision transformer into image-like representations at various resolutions and progressively combine them into full-resolution predictions using a convolutional decoder. The transformer backbone processes representations at a constant and relatively high resolution and has a global receptive field at every stage. These properties allow the dense vision transformer to provide finer-grained and more globally coherent predictions when compared to fully-convolutional networks. Our experiments show that this architecture yields substantial improvements on dense prediction tasks, especially when a large amount of training data is available. For monocular depth estimation, we observe an improvement of up to 28% in relative performance when compared to a state-of-the-art fully-convolutional network. When applied to semantic segmentation, dense vision transformers set a new state of the art on ADE20K with 49.02% mIoU. We further show that the architecture can be fine-tuned on smaller datasets such as NYUv2, KITTI, and Pascal Context where it also sets the new state of the art."),$n.forEach(o),Pn.forEach(o),Yt=f(t),Q=n(t,"IMG",{src:!0,alt:!0,width:!0}),Jt=f(t),ee=n(t,"SMALL",{});var co=s(ee);qo=l(co,"DPT architecture. Taken from the "),$e=n(co,"A",{href:!0,target:!0});var yn=s($e);Ao=l(yn,"original paper"),yn.forEach(o),Lo=l(co,"."),co.forEach(o),Xt=f(t),A=n(t,"P",{});var mt=s(A);No=l(mt,"This model was contributed by "),ye=n(mt,"A",{href:!0,rel:!0});var Dn=s(ye);Oo=l(Dn,"nielsr"),Dn.forEach(o),Vo=l(mt,". The original code can be found "),De=n(mt,"A",{href:!0,rel:!0});var xn=s(De);Ro=l(xn,"here"),xn.forEach(o),Wo=l(mt,"."),mt.forEach(o),Zt=f(t),R=n(t,"H2",{class:!0});var mo=s(R);te=n(mo,"A",{id:!0,class:!0,href:!0});var En=s(te);Pt=n(En,"SPAN",{});var kn=s(Pt);w(xe.$$.fragment,kn),kn.forEach(o),En.forEach(o),Bo=f(mo),$t=n(mo,"SPAN",{});var Fn=s($t);Uo=l(Fn,"DPTConfig"),Fn.forEach(o),mo.forEach(o),Qt=f(t),F=n(t,"DIV",{class:!0});var ue=s(F);w(Ee.$$.fragment,ue),Ho=f(ue),W=n(ue,"P",{});var pt=s(W);Ko=l(pt,"This is the configuration class to store the configuration of a "),ot=n(pt,"A",{href:!0});var jn=s(ot);Go=l(jn,"DPTModel"),jn.forEach(o),Yo=l(pt,`. It is used to instantiate an DPT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DPT
`),ke=n(pt,"A",{href:!0,rel:!0});var zn=s(ke);Jo=l(zn,"Intel/dpt-large"),zn.forEach(o),Xo=l(pt," architecture."),pt.forEach(o),Zo=f(ue),B=n(ue,"P",{});var ht=s(B);Qo=l(ht,"Configuration objects inherit from "),at=n(ht,"A",{href:!0});var In=s(at);ea=l(In,"PretrainedConfig"),In.forEach(o),ta=l(ht,` and can be used to control the model outputs. Read the
documentation from `),nt=n(ht,"A",{href:!0});var Sn=s(nt);oa=l(Sn,"PretrainedConfig"),Sn.forEach(o),aa=l(ht," for more information."),ht.forEach(o),na=f(ue),w(oe.$$.fragment,ue),ue.forEach(o),eo=f(t),U=n(t,"H2",{class:!0});var po=s(U);ae=n(po,"A",{id:!0,class:!0,href:!0});var Cn=s(ae);yt=n(Cn,"SPAN",{});var Mn=s(yt);w(Fe.$$.fragment,Mn),Mn.forEach(o),Cn.forEach(o),ra=f(po),Dt=n(po,"SPAN",{});var qn=s(Dt);sa=l(qn,"DPTFeatureExtractor"),qn.forEach(o),po.forEach(o),to=f(t),E=n(t,"DIV",{class:!0});var N=s(E);w(je.$$.fragment,N),ia=f(N),xt=n(N,"P",{});var An=s(xt);la=l(An,"Constructs a DPT feature extractor."),An.forEach(o),da=f(N),ze=n(N,"P",{});var ho=s(ze);ca=l(ho,"This feature extractor inherits from "),rt=n(ho,"A",{href:!0});var Ln=s(rt);ma=l(Ln,"FeatureExtractionMixin"),Ln.forEach(o),pa=l(ho,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),ho.forEach(o),ha=f(N),L=n(N,"DIV",{class:!0});var ft=s(L);w(Ie.$$.fragment,ft),fa=f(ft),Et=n(ft,"P",{});var Nn=s(Et);ua=l(Nn,"Main method to prepare for the model one or several image(s)."),Nn.forEach(o),ga=f(ft),w(ne.$$.fragment,ft),ft.forEach(o),_a=f(N),re=n(N,"DIV",{class:!0});var fo=s(re);w(Se.$$.fragment,fo),Ta=f(fo),Ce=n(fo,"P",{});var uo=s(Ce);va=l(uo,"Converts the output of "),st=n(uo,"A",{href:!0});var On=s(st);ba=l(On,"DPTForSemanticSegmentation"),On.forEach(o),wa=l(uo," into semantic segmentation maps. Only supports PyTorch."),uo.forEach(o),fo.forEach(o),N.forEach(o),oo=f(t),H=n(t,"H2",{class:!0});var go=s(H);se=n(go,"A",{id:!0,class:!0,href:!0});var Vn=s(se);kt=n(Vn,"SPAN",{});var Rn=s(kt);w(Me.$$.fragment,Rn),Rn.forEach(o),Vn.forEach(o),Pa=f(go),Ft=n(go,"SPAN",{});var Wn=s(Ft);$a=l(Wn,"DPTModel"),Wn.forEach(o),go.forEach(o),ao=f(t),M=n(t,"DIV",{class:!0});var ut=s(M);w(qe.$$.fragment,ut),ya=f(ut),Ae=n(ut,"P",{});var _o=s(Ae);Da=l(_o,`The bare DPT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Le=n(_o,"A",{href:!0,rel:!0});var Bn=s(Le);xa=l(Bn,"torch.nn.Module"),Bn.forEach(o),Ea=l(_o,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_o.forEach(o),ka=f(ut),I=n(ut,"DIV",{class:!0});var ge=s(I);w(Ne.$$.fragment,ge),Fa=f(ge),K=n(ge,"P",{});var gt=s(K);ja=l(gt,"The "),it=n(gt,"A",{href:!0});var Un=s(it);za=l(Un,"DPTModel"),Un.forEach(o),Ia=l(gt," forward method, overrides the "),jt=n(gt,"CODE",{});var Hn=s(jt);Sa=l(Hn,"__call__"),Hn.forEach(o),Ca=l(gt," special method."),gt.forEach(o),Ma=f(ge),w(ie.$$.fragment,ge),qa=f(ge),w(le.$$.fragment,ge),ge.forEach(o),ut.forEach(o),no=f(t),G=n(t,"H2",{class:!0});var To=s(G);de=n(To,"A",{id:!0,class:!0,href:!0});var Kn=s(de);zt=n(Kn,"SPAN",{});var Gn=s(zt);w(Oe.$$.fragment,Gn),Gn.forEach(o),Kn.forEach(o),Aa=f(To),It=n(To,"SPAN",{});var Yn=s(It);La=l(Yn,"DPTForDepthEstimation"),Yn.forEach(o),To.forEach(o),ro=f(t),j=n(t,"DIV",{class:!0});var _e=s(j);w(Ve.$$.fragment,_e),Na=f(_e),St=n(_e,"P",{});var Jn=s(St);Oa=l(Jn,"DPT Model with a depth estimation head on top (consisting of 3 convolutional layers) e.g. for KITTI, NYUv2."),Jn.forEach(o),Va=f(_e),Re=n(_e,"P",{});var vo=s(Re);Ra=l(vo,"This model is a PyTorch "),We=n(vo,"A",{href:!0,rel:!0});var Xn=s(We);Wa=l(Xn,"torch.nn.Module"),Xn.forEach(o),Ba=l(vo,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),vo.forEach(o),Ua=f(_e),S=n(_e,"DIV",{class:!0});var Te=s(S);w(Be.$$.fragment,Te),Ha=f(Te),Y=n(Te,"P",{});var _t=s(Y);Ka=l(_t,"The "),lt=n(_t,"A",{href:!0});var Zn=s(lt);Ga=l(Zn,"DPTForDepthEstimation"),Zn.forEach(o),Ya=l(_t," forward method, overrides the "),Ct=n(_t,"CODE",{});var Qn=s(Ct);Ja=l(Qn,"__call__"),Qn.forEach(o),Xa=l(_t," special method."),_t.forEach(o),Za=f(Te),w(ce.$$.fragment,Te),Qa=f(Te),w(me.$$.fragment,Te),Te.forEach(o),_e.forEach(o),so=f(t),J=n(t,"H2",{class:!0});var bo=s(J);pe=n(bo,"A",{id:!0,class:!0,href:!0});var er=s(pe);Mt=n(er,"SPAN",{});var tr=s(Mt);w(Ue.$$.fragment,tr),tr.forEach(o),er.forEach(o),en=f(bo),qt=n(bo,"SPAN",{});var or=s(qt);tn=l(or,"DPTForSemanticSegmentation"),or.forEach(o),bo.forEach(o),io=f(t),z=n(t,"DIV",{class:!0});var ve=s(z);w(He.$$.fragment,ve),on=f(ve),At=n(ve,"P",{});var ar=s(At);an=l(ar,"DPT Model with a semantic segmentation head on top e.g. for ADE20k, CityScapes."),ar.forEach(o),nn=f(ve),Ke=n(ve,"P",{});var wo=s(Ke);rn=l(wo,"This model is a PyTorch "),Ge=n(wo,"A",{href:!0,rel:!0});var nr=s(Ge);sn=l(nr,"torch.nn.Module"),nr.forEach(o),ln=l(wo,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),wo.forEach(o),dn=f(ve),C=n(ve,"DIV",{class:!0});var be=s(C);w(Ye.$$.fragment,be),cn=f(be),X=n(be,"P",{});var Tt=s(X);mn=l(Tt,"The "),dt=n(Tt,"A",{href:!0});var rr=s(dt);pn=l(rr,"DPTForSemanticSegmentation"),rr.forEach(o),hn=l(Tt," forward method, overrides the "),Lt=n(Tt,"CODE",{});var sr=s(Lt);fn=l(sr,"__call__"),sr.forEach(o),un=l(Tt," special method."),Tt.forEach(o),gn=f(be),w(he.$$.fragment,be),_n=f(be),w(fe.$$.fragment,be),be.forEach(o),ve.forEach(o),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(Pr)),c(m,"id","dpt"),c(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(m,"href","#dpt"),c(u,"class","relative group"),c(Z,"id","overview"),c(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Z,"href","#overview"),c(V,"class","relative group"),c(Pe,"href","https://arxiv.org/abs/2103.13413"),c(Pe,"rel","nofollow"),c(Qe,"href","vit"),mr(Q.src,Tn="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/dpt_architecture.jpg")||c(Q,"src",Tn),c(Q,"alt","drawing"),c(Q,"width","600"),c($e,"href","https://arxiv.org/abs/2103.13413"),c($e,"target","_blank"),c(ye,"href","https://huggingface.co/nielsr"),c(ye,"rel","nofollow"),c(De,"href","https://github.com/isl-org/DPT"),c(De,"rel","nofollow"),c(te,"id","transformers.DPTConfig"),c(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(te,"href","#transformers.DPTConfig"),c(R,"class","relative group"),c(ot,"href","/docs/transformers/main/en/model_doc/dpt#transformers.DPTModel"),c(ke,"href","https://huggingface.co/Intel/dpt-large"),c(ke,"rel","nofollow"),c(at,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(nt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ae,"id","transformers.DPTFeatureExtractor"),c(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ae,"href","#transformers.DPTFeatureExtractor"),c(U,"class","relative group"),c(rt,"href","/docs/transformers/main/en/internal/image_processing_utils#transformers.FeatureExtractionMixin"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(st,"href","/docs/transformers/main/en/model_doc/dpt#transformers.DPTForSemanticSegmentation"),c(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(se,"id","transformers.DPTModel"),c(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(se,"href","#transformers.DPTModel"),c(H,"class","relative group"),c(Le,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Le,"rel","nofollow"),c(it,"href","/docs/transformers/main/en/model_doc/dpt#transformers.DPTModel"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(de,"id","transformers.DPTForDepthEstimation"),c(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(de,"href","#transformers.DPTForDepthEstimation"),c(G,"class","relative group"),c(We,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(We,"rel","nofollow"),c(lt,"href","/docs/transformers/main/en/model_doc/dpt#transformers.DPTForDepthEstimation"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(pe,"id","transformers.DPTForSemanticSegmentation"),c(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(pe,"href","#transformers.DPTForSemanticSegmentation"),c(J,"class","relative group"),c(Ge,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ge,"rel","nofollow"),c(dt,"href","/docs/transformers/main/en/model_doc/dpt#transformers.DPTForSemanticSegmentation"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,p){e(document.head,d),_(t,v,p),_(t,u,p),e(u,m),e(m,T),P(r,T,null),e(u,g),e(u,k),e(k,xo),_(t,Ut,p),_(t,V,p),e(V,Z),e(Z,vt),P(we,vt,null),e(V,Eo),e(V,bt),e(bt,ko),_(t,Ht,p),_(t,q,p),e(q,Fo),e(q,Pe),e(Pe,jo),e(q,zo),e(q,Qe),e(Qe,Io),e(q,So),_(t,Kt,p),_(t,et,p),e(et,Co),_(t,Gt,p),_(t,tt,p),e(tt,wt),e(wt,Mo),_(t,Yt,p),_(t,Q,p),_(t,Jt,p),_(t,ee,p),e(ee,qo),e(ee,$e),e($e,Ao),e(ee,Lo),_(t,Xt,p),_(t,A,p),e(A,No),e(A,ye),e(ye,Oo),e(A,Vo),e(A,De),e(De,Ro),e(A,Wo),_(t,Zt,p),_(t,R,p),e(R,te),e(te,Pt),P(xe,Pt,null),e(R,Bo),e(R,$t),e($t,Uo),_(t,Qt,p),_(t,F,p),P(Ee,F,null),e(F,Ho),e(F,W),e(W,Ko),e(W,ot),e(ot,Go),e(W,Yo),e(W,ke),e(ke,Jo),e(W,Xo),e(F,Zo),e(F,B),e(B,Qo),e(B,at),e(at,ea),e(B,ta),e(B,nt),e(nt,oa),e(B,aa),e(F,na),P(oe,F,null),_(t,eo,p),_(t,U,p),e(U,ae),e(ae,yt),P(Fe,yt,null),e(U,ra),e(U,Dt),e(Dt,sa),_(t,to,p),_(t,E,p),P(je,E,null),e(E,ia),e(E,xt),e(xt,la),e(E,da),e(E,ze),e(ze,ca),e(ze,rt),e(rt,ma),e(ze,pa),e(E,ha),e(E,L),P(Ie,L,null),e(L,fa),e(L,Et),e(Et,ua),e(L,ga),P(ne,L,null),e(E,_a),e(E,re),P(Se,re,null),e(re,Ta),e(re,Ce),e(Ce,va),e(Ce,st),e(st,ba),e(Ce,wa),_(t,oo,p),_(t,H,p),e(H,se),e(se,kt),P(Me,kt,null),e(H,Pa),e(H,Ft),e(Ft,$a),_(t,ao,p),_(t,M,p),P(qe,M,null),e(M,ya),e(M,Ae),e(Ae,Da),e(Ae,Le),e(Le,xa),e(Ae,Ea),e(M,ka),e(M,I),P(Ne,I,null),e(I,Fa),e(I,K),e(K,ja),e(K,it),e(it,za),e(K,Ia),e(K,jt),e(jt,Sa),e(K,Ca),e(I,Ma),P(ie,I,null),e(I,qa),P(le,I,null),_(t,no,p),_(t,G,p),e(G,de),e(de,zt),P(Oe,zt,null),e(G,Aa),e(G,It),e(It,La),_(t,ro,p),_(t,j,p),P(Ve,j,null),e(j,Na),e(j,St),e(St,Oa),e(j,Va),e(j,Re),e(Re,Ra),e(Re,We),e(We,Wa),e(Re,Ba),e(j,Ua),e(j,S),P(Be,S,null),e(S,Ha),e(S,Y),e(Y,Ka),e(Y,lt),e(lt,Ga),e(Y,Ya),e(Y,Ct),e(Ct,Ja),e(Y,Xa),e(S,Za),P(ce,S,null),e(S,Qa),P(me,S,null),_(t,so,p),_(t,J,p),e(J,pe),e(pe,Mt),P(Ue,Mt,null),e(J,en),e(J,qt),e(qt,tn),_(t,io,p),_(t,z,p),P(He,z,null),e(z,on),e(z,At),e(At,an),e(z,nn),e(z,Ke),e(Ke,rn),e(Ke,Ge),e(Ge,sn),e(Ke,ln),e(z,dn),e(z,C),P(Ye,C,null),e(C,cn),e(C,X),e(X,mn),e(X,dt),e(dt,pn),e(X,hn),e(X,Lt),e(Lt,fn),e(X,un),e(C,gn),P(he,C,null),e(C,_n),P(fe,C,null),lo=!0},p(t,[p]){const Je={};p&2&&(Je.$$scope={dirty:p,ctx:t}),oe.$set(Je);const Nt={};p&2&&(Nt.$$scope={dirty:p,ctx:t}),ne.$set(Nt);const Ot={};p&2&&(Ot.$$scope={dirty:p,ctx:t}),ie.$set(Ot);const Vt={};p&2&&(Vt.$$scope={dirty:p,ctx:t}),le.$set(Vt);const Xe={};p&2&&(Xe.$$scope={dirty:p,ctx:t}),ce.$set(Xe);const Rt={};p&2&&(Rt.$$scope={dirty:p,ctx:t}),me.$set(Rt);const Wt={};p&2&&(Wt.$$scope={dirty:p,ctx:t}),he.$set(Wt);const Bt={};p&2&&(Bt.$$scope={dirty:p,ctx:t}),fe.$set(Bt)},i(t){lo||($(r.$$.fragment,t),$(we.$$.fragment,t),$(xe.$$.fragment,t),$(Ee.$$.fragment,t),$(oe.$$.fragment,t),$(Fe.$$.fragment,t),$(je.$$.fragment,t),$(Ie.$$.fragment,t),$(ne.$$.fragment,t),$(Se.$$.fragment,t),$(Me.$$.fragment,t),$(qe.$$.fragment,t),$(Ne.$$.fragment,t),$(ie.$$.fragment,t),$(le.$$.fragment,t),$(Oe.$$.fragment,t),$(Ve.$$.fragment,t),$(Be.$$.fragment,t),$(ce.$$.fragment,t),$(me.$$.fragment,t),$(Ue.$$.fragment,t),$(He.$$.fragment,t),$(Ye.$$.fragment,t),$(he.$$.fragment,t),$(fe.$$.fragment,t),lo=!0)},o(t){y(r.$$.fragment,t),y(we.$$.fragment,t),y(xe.$$.fragment,t),y(Ee.$$.fragment,t),y(oe.$$.fragment,t),y(Fe.$$.fragment,t),y(je.$$.fragment,t),y(Ie.$$.fragment,t),y(ne.$$.fragment,t),y(Se.$$.fragment,t),y(Me.$$.fragment,t),y(qe.$$.fragment,t),y(Ne.$$.fragment,t),y(ie.$$.fragment,t),y(le.$$.fragment,t),y(Oe.$$.fragment,t),y(Ve.$$.fragment,t),y(Be.$$.fragment,t),y(ce.$$.fragment,t),y(me.$$.fragment,t),y(Ue.$$.fragment,t),y(He.$$.fragment,t),y(Ye.$$.fragment,t),y(he.$$.fragment,t),y(fe.$$.fragment,t),lo=!1},d(t){o(d),t&&o(v),t&&o(u),D(r),t&&o(Ut),t&&o(V),D(we),t&&o(Ht),t&&o(q),t&&o(Kt),t&&o(et),t&&o(Gt),t&&o(tt),t&&o(Yt),t&&o(Q),t&&o(Jt),t&&o(ee),t&&o(Xt),t&&o(A),t&&o(Zt),t&&o(R),D(xe),t&&o(Qt),t&&o(F),D(Ee),D(oe),t&&o(eo),t&&o(U),D(Fe),t&&o(to),t&&o(E),D(je),D(Ie),D(ne),D(Se),t&&o(oo),t&&o(H),D(Me),t&&o(ao),t&&o(M),D(qe),D(Ne),D(ie),D(le),t&&o(no),t&&o(G),D(Oe),t&&o(ro),t&&o(j),D(Ve),D(Be),D(ce),D(me),t&&o(so),t&&o(J),D(Ue),t&&o(io),t&&o(z),D(He),D(Ye),D(he),D(fe)}}}const Pr={local:"dpt",sections:[{local:"overview",title:"Overview"},{local:"transformers.DPTConfig",title:"DPTConfig"},{local:"transformers.DPTFeatureExtractor",title:"DPTFeatureExtractor"},{local:"transformers.DPTModel",title:"DPTModel"},{local:"transformers.DPTForDepthEstimation",title:"DPTForDepthEstimation"},{local:"transformers.DPTForSemanticSegmentation",title:"DPTForSemanticSegmentation"}],title:"DPT"};function $r(x){return pr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class jr extends ir{constructor(d){super();lr(this,d,$r,wr,dr,{})}}export{jr as default,Pr as metadata};
