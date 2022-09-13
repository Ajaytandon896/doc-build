import{S as zt,i as Tt,s as Et,e as r,k as p,w as k,t as a,l as qt,M as St,c as l,d as n,m,x as b,a as u,h,b as y,G as s,g as i,y as v,o as f,p as yt,q as d,B as _,v as xt,n as wt}from"../../chunks/vendor-hf-doc-builder.js";import{I as Jn}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as w}from"../../chunks/CodeBlock-hf-doc-builder.js";import{C as jt}from"../../chunks/CourseFloatingBanner-hf-doc-builder.js";import{F as It}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";import"../../chunks/DocNotebookDropdown-hf-doc-builder.js";function At(j){let c,g;return c=new jt({props:{chapter:2,classNames:"absolute z-10 right-0 top-0",notebooks:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/vi/chapter2/section6_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/vi/chapter2/section6_tf.ipynb"}]}}),{c(){k(c.$$.fragment)},l(o){b(c.$$.fragment,o)},m(o,$){v(c,o,$),g=!0},i(o){g||(d(c.$$.fragment,o),g=!0)},o(o){f(c.$$.fragment,o),g=!1},d(o){_(c,o)}}}function Ct(j){let c,g;return c=new jt({props:{chapter:2,classNames:"absolute z-10 right-0 top-0",notebooks:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/vi/chapter2/section6_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/vi/chapter2/section6_pt.ipynb"}]}}),{c(){k(c.$$.fragment)},l(o){b(c.$$.fragment,o)},m(o,$){v(c,o,$),g=!0},i(o){g||(d(c.$$.fragment,o),g=!0)},o(o){f(c.$$.fragment,o),g=!1},d(o){_(c,o)}}}function Pt(j){let c,g;return c=new w({props:{code:`import tensorflow as tf
from transformers import AutoTokenizer, TFAutoModelForSequenceClassification

checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint)
sequences = ["I've been waiting for a HuggingFace course my whole life.", "So have I!"]

tokens = tokenizer(sequences, padding=True, truncation=True, return_tensors="tf")
output = model(**tokens)`,highlighted:`<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAutoModelForSequenceClassification

checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint)
sequences = [<span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>, <span class="hljs-string">&quot;So have I!&quot;</span>]

tokens = tokenizer(sequences, padding=<span class="hljs-literal">True</span>, truncation=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
output = model(**tokens)`}}),{c(){k(c.$$.fragment)},l(o){b(c.$$.fragment,o)},m(o,$){v(c,o,$),g=!0},i(o){g||(d(c.$$.fragment,o),g=!0)},o(o){f(c.$$.fragment,o),g=!1},d(o){_(c,o)}}}function Ft(j){let c,g;return c=new w({props:{code:`import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification

checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = AutoModelForSequenceClassification.from_pretrained(checkpoint)
sequences = ["I've been waiting for a HuggingFace course my whole life.", "So have I!"]

tokens = tokenizer(sequences, padding=True, truncation=True, return_tensors="pt")
output = model(**tokens)`,highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForSequenceClassification

checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = AutoModelForSequenceClassification.from_pretrained(checkpoint)
sequences = [<span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>, <span class="hljs-string">&quot;So have I!&quot;</span>]

tokens = tokenizer(sequences, padding=<span class="hljs-literal">True</span>, truncation=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
output = model(**tokens)`}}),{c(){k(c.$$.fragment)},l(o){b(c.$$.fragment,o)},m(o,$){v(c,o,$),g=!0},i(o){g||(d(c.$$.fragment,o),g=!0)},o(o){f(c.$$.fragment,o),g=!1},d(o){_(c,o)}}}function Dt(j){let c,g,o,$,C,D,de,O,ln,ke,hn,Ae,z,T,se,oe,un,Ce,N,pn,be,mn,gn,Pe,R,Fe,x,fn,ve,dn,kn,_e,bn,vn,De,ie,_n,Ne,L,He,ce,$n,Be,G,Me,re,qn,Oe,K,Re,ae,yn,Le,V,Ge,q,wn,$e,jn,zn,qe,Tn,En,ye,Sn,xn,we,In,An,Ke,J,Ve,P,H,je,U,Cn,ze,Pn,Je,le,Fn,Ue,Q,Qe,W,We,he,Dn,Xe,X,Ye,Y,Ze,I,Nn,Te,Hn,Bn,Ee,Mn,On,en,F,B,Se,Z,Rn,xe,Ln,nn,M,Gn,Ie,Kn,Vn,tn,E,S,ue,sn;o=new It({props:{fw:j[0]}}),O=new Jn({});const Un=[Ct,At],ee=[];function Qn(e,t){return e[0]==="pt"?0:1}z=Qn(j),T=ee[z]=Un[z](j),R=new w({props:{code:`from transformers import AutoTokenizer

checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)

sequence = "I've been waiting for a HuggingFace course my whole life."

model_inputs = tokenizer(sequence)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(checkpoint)

sequence = <span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>

model_inputs = tokenizer(sequence)`}}),L=new w({props:{code:`sequence = "I've been waiting for a HuggingFace course my whole life."

model_inputs = tokenizer(sequence)`,highlighted:`sequence = <span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>

model_inputs = tokenizer(sequence)`}}),G=new w({props:{code:`sequences = ["I've been waiting for a HuggingFace course my whole life.", "So have I!"]

model_inputs = tokenizer(sequences)`,highlighted:`sequences = [<span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>, <span class="hljs-string">&quot;So have I!&quot;</span>]

model_inputs = tokenizer(sequences)`}}),K=new w({props:{code:`# S\u1EBD \u0111\u1EC7m th\xEAm v\xE0o chu\u1ED7i sao cho \u0111\u1ED9 d\xE0i b\u1EB1ng \u0111\u1ED9 d\xE0i t\u1ED1i \u0111a c\u1EE7a chu\u1ED7i
model_inputs = tokenizer(sequences, padding="longest")

# S\u1EBD \u0111\u1EC7m th\xEAm v\xE0o chu\u1ED7i sao cho \u0111\u1ED9 d\xE0i b\u1EB1ng \u0111\u1ED9 d\xE0i t\u1ED1i \u0111a c\u1EE7a m\xF4 h\xECnh
# (512 cho BERT ho\u1EB7c DistilBERT)
model_inputs = tokenizer(sequences, padding="max_length")

# S\u1EBD \u0111\u1EC7m th\xEAm v\xE0o chu\u1ED7i sao cho \u0111\u1ED9 d\xE0i b\u1EB1ng \u0111\u1ED9 d\xE0i t\u1ED1i \u0111a \u0111\u01B0\u1EE3c ch\u1EC9 \u0111\u1ECBnh
model_inputs = tokenizer(sequences, padding="max_length", max_length=8)`,highlighted:`<span class="hljs-comment"># S\u1EBD \u0111\u1EC7m th\xEAm v\xE0o chu\u1ED7i sao cho \u0111\u1ED9 d\xE0i b\u1EB1ng \u0111\u1ED9 d\xE0i t\u1ED1i \u0111a c\u1EE7a chu\u1ED7i</span>
model_inputs = tokenizer(sequences, padding=<span class="hljs-string">&quot;longest&quot;</span>)

<span class="hljs-comment"># S\u1EBD \u0111\u1EC7m th\xEAm v\xE0o chu\u1ED7i sao cho \u0111\u1ED9 d\xE0i b\u1EB1ng \u0111\u1ED9 d\xE0i t\u1ED1i \u0111a c\u1EE7a m\xF4 h\xECnh</span>
<span class="hljs-comment"># (512 cho BERT ho\u1EB7c DistilBERT)</span>
model_inputs = tokenizer(sequences, padding=<span class="hljs-string">&quot;max_length&quot;</span>)

<span class="hljs-comment"># S\u1EBD \u0111\u1EC7m th\xEAm v\xE0o chu\u1ED7i sao cho \u0111\u1ED9 d\xE0i b\u1EB1ng \u0111\u1ED9 d\xE0i t\u1ED1i \u0111a \u0111\u01B0\u1EE3c ch\u1EC9 \u0111\u1ECBnh</span>
model_inputs = tokenizer(sequences, padding=<span class="hljs-string">&quot;max_length&quot;</span>, max_length=<span class="hljs-number">8</span>)`}}),V=new w({props:{code:`sequences = ["I've been waiting for a HuggingFace course my whole life.", "So have I!"]

# S\u1EBD c\u1EAFt b\u1EDBt chu\u1ED7i cho b\u1EB1ng \u0111\u1ED9 d\xE0i t\u1ED1i \u0111a c\u1EE7a m\xF4 h\xECnh
# (512 cho BERT ho\u1EB7c DistilBERT)
model_inputs = tokenizer(sequences, truncation=True)

# S\u1EBD c\u1EAFt b\u1EDBt chu\u1ED7i c\xF3 \u0111\u1ED9 d\xE0i d\xE0i h\u01A1n \u0111\u1ED9 d\xE0i t\u1ED1i \u0111a \u0111\u01B0\u1EE3c ch\u1EC9 \u0111\u1ECBnh
model_inputs = tokenizer(sequences, max_length=8, truncation=True)`,highlighted:`sequences = [<span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>, <span class="hljs-string">&quot;So have I!&quot;</span>]

<span class="hljs-comment"># S\u1EBD c\u1EAFt b\u1EDBt chu\u1ED7i cho b\u1EB1ng \u0111\u1ED9 d\xE0i t\u1ED1i \u0111a c\u1EE7a m\xF4 h\xECnh</span>
<span class="hljs-comment"># (512 cho BERT ho\u1EB7c DistilBERT)</span>
model_inputs = tokenizer(sequences, truncation=<span class="hljs-literal">True</span>)

<span class="hljs-comment"># S\u1EBD c\u1EAFt b\u1EDBt chu\u1ED7i c\xF3 \u0111\u1ED9 d\xE0i d\xE0i h\u01A1n \u0111\u1ED9 d\xE0i t\u1ED1i \u0111a \u0111\u01B0\u1EE3c ch\u1EC9 \u0111\u1ECBnh</span>
model_inputs = tokenizer(sequences, max_length=<span class="hljs-number">8</span>, truncation=<span class="hljs-literal">True</span>)`}}),J=new w({props:{code:`sequences = ["I've been waiting for a HuggingFace course my whole life.", "So have I!"]

# Tr\u1EA3 v\u1EC1 tensor PyTorch
model_inputs = tokenizer(sequences, padding=True, return_tensors="pt")

# Tr\u1EA3 v\u1EC1 tensor TensorFlow
model_inputs = tokenizer(sequences, padding=True, return_tensors="tf")

# Tr\u1EA3 v\u1EC1 m\u1EA3ng NumPy
model_inputs = tokenizer(sequences, padding=True, return_tensors="np")`,highlighted:`sequences = [<span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>, <span class="hljs-string">&quot;So have I!&quot;</span>]

<span class="hljs-comment"># Tr\u1EA3 v\u1EC1 tensor PyTorch</span>
model_inputs = tokenizer(sequences, padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-comment"># Tr\u1EA3 v\u1EC1 tensor TensorFlow</span>
model_inputs = tokenizer(sequences, padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-comment"># Tr\u1EA3 v\u1EC1 m\u1EA3ng NumPy</span>
model_inputs = tokenizer(sequences, padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)`}}),U=new Jn({}),Q=new w({props:{code:`sequence = "I've been waiting for a HuggingFace course my whole life."

model_inputs = tokenizer(sequence)
print(model_inputs["input_ids"])

tokens = tokenizer.tokenize(sequence)
ids = tokenizer.convert_tokens_to_ids(tokens)
print(ids)`,highlighted:`sequence = <span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>

model_inputs = tokenizer(sequence)
<span class="hljs-built_in">print</span>(model_inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])

tokens = tokenizer.tokenize(sequence)
ids = tokenizer.convert_tokens_to_ids(tokens)
<span class="hljs-built_in">print</span>(ids)`}}),W=new w({props:{code:`[101, 1045, 1005, 2310, 2042, 3403, 2005, 1037, 17662, 12172, 2607, 2026, 2878, 2166, 1012, 102]
[1045, 1005, 2310, 2042, 3403, 2005, 1037, 17662, 12172, 2607, 2026, 2878, 2166, 1012]`,highlighted:`[<span class="hljs-number">101</span>, <span class="hljs-number">1045</span>, <span class="hljs-number">1005</span>, <span class="hljs-number">2310</span>, <span class="hljs-number">2042</span>, <span class="hljs-number">3403</span>, <span class="hljs-number">2005</span>, <span class="hljs-number">1037</span>, <span class="hljs-number">17662</span>, <span class="hljs-number">12172</span>, <span class="hljs-number">2607</span>, <span class="hljs-number">2026</span>, <span class="hljs-number">2878</span>, <span class="hljs-number">2166</span>, <span class="hljs-number">1012</span>, <span class="hljs-number">102</span>]
[<span class="hljs-number">1045</span>, <span class="hljs-number">1005</span>, <span class="hljs-number">2310</span>, <span class="hljs-number">2042</span>, <span class="hljs-number">3403</span>, <span class="hljs-number">2005</span>, <span class="hljs-number">1037</span>, <span class="hljs-number">17662</span>, <span class="hljs-number">12172</span>, <span class="hljs-number">2607</span>, <span class="hljs-number">2026</span>, <span class="hljs-number">2878</span>, <span class="hljs-number">2166</span>, <span class="hljs-number">1012</span>]`}}),X=new w({props:{code:`print(tokenizer.decode(model_inputs["input_ids"]))
print(tokenizer.decode(ids))`,highlighted:`<span class="hljs-built_in">print</span>(tokenizer.decode(model_inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]))
<span class="hljs-built_in">print</span>(tokenizer.decode(ids))`}}),Y=new w({props:{code:`"[CLS] i've been waiting for a huggingface course my whole life. [SEP]"
"i've been waiting for a huggingface course my whole life."`,highlighted:`<span class="hljs-string">&quot;[CLS] i&#x27;ve been waiting for a huggingface course my whole life. [SEP]&quot;</span>
<span class="hljs-string">&quot;i&#x27;ve been waiting for a huggingface course my whole life.&quot;</span>`}}),Z=new Jn({});const Wn=[Ft,Pt],ne=[];function Xn(e,t){return e[0]==="pt"?0:1}return E=Xn(j),S=ne[E]=Wn[E](j),{c(){c=r("meta"),g=p(),k(o.$$.fragment),$=p(),C=r("h1"),D=r("a"),de=r("span"),k(O.$$.fragment),ln=p(),ke=r("span"),hn=a("K\u1EBFt h\u1EE3p l\u1EA1i"),Ae=p(),T.c(),se=p(),oe=r("p"),un=a("Trong v\xE0i ph\u1EA7n tr\u01B0\u1EDBc, ch\xFAng ta \u0111\xE3 c\u1ED1 g\u1EAFng h\u1EBFt s\u1EE9c \u0111\u1EC3 l\xE0m h\u1EA7u h\u1EBFt c\xE1c t\xE1c v\u1EE5 b\u1EB1ng tay. Ch\xFAng ta \u0111\xE3 kh\xE1m ph\xE1 c\xE1ch th\u1EE9c ho\u1EA1t \u0111\u1ED9ng c\u1EE7a c\xE1c c\xF4ng c\u1EE5 tokenize v\xE0 xem x\xE9t qu\xE1 tr\xECnh tokenize, chuy\u1EC3n \u0111\u1ED5i d\u1EEF li\u1EC7u sang ID \u0111\u1EA7u v\xE0o, \u0111\u1EC7m, c\u1EAFt b\u1EDBt v\xE0 c\xE1c l\u1EDBp che attention."),Ce=p(),N=r("p"),pn=a("Tuy nhi\xEAn, nh\u01B0 ch\xFAng ta \u0111\xE3 th\u1EA5y trong ph\u1EA7n 2, API \u{1F917} Transformers c\xF3 th\u1EC3 x\u1EED l\xFD t\u1EA5t c\u1EA3 nh\u1EEFng \u0111i\u1EC1u n\xE0y cho ch\xFAng ta b\u1EB1ng m\u1ED9t ch\u1EE9c n\u0103ng c\u1EA5p cao m\xE0 ch\xFAng ta s\u1EBD \u0111i s\xE2u v\xE0o \u0111\xE2y. Khi b\u1EA1n g\u1ECDi tr\u1EF1c ti\u1EBFp "),be=r("code"),mn=a("tokenizer"),gn=a(" tr\xEAn c\xE2u, b\u1EA1n s\u1EBD nh\u1EADn l\u1EA1i \u0111\u01B0\u1EE3c c\xE1c th\xF4ng tin \u0111\u1EA7u v\xE0o s\u1EB5n s\xE0ng chuy\u1EC3n qua m\xF4 h\xECnh c\u1EE7a b\u1EA1n:"),Pe=p(),k(R.$$.fragment),Fe=p(),x=r("p"),fn=a("\u1EDE \u0111\xE2y, bi\u1EBFn "),ve=r("code"),dn=a("model_inputs"),kn=a(" ch\u1EE9a m\u1ECDi th\u1EE9 c\u1EA7n thi\u1EBFt \u0111\u1EC3 m\u1ED9t m\xF4 h\xECnh ho\u1EA1t \u0111\u1ED9ng t\u1ED1t. \u0110\u1ED1i v\u1EDBi DistilBERT, \u0111i\u1EC1u \u0111\xF3 bao g\u1ED3m c\xE1c ID \u0111\u1EA7u v\xE0o c\u0169ng nh\u01B0 l\u1EDBp che attention. C\xE1c m\xF4 h\xECnh kh\xE1c ch\u1EA5p nh\u1EADn \u0111\u1EA7u v\xE0o b\u1ED5 sung c\u0169ng s\u1EBD c\xF3 \u0111\u1EA7u ra \u0111\xF3 t\u1EEB \u0111\u1ED1i t\u01B0\u1EE3ng "),_e=r("code"),bn=a("tokenizer"),vn=a("."),De=p(),ie=r("p"),_n=a("Nh\u01B0 ch\xFAng ta s\u1EBD th\u1EA5y trong m\u1ED9t s\u1ED1 v\xED d\u1EE5 b\xEAn d\u01B0\u1EDBi, ph\u01B0\u01A1ng ph\xE1p n\xE0y r\u1EA5t m\u1EA1nh m\u1EBD. \u0110\u1EA7u ti\xEAn, n\xF3 c\xF3 th\u1EC3 m\xE3 h\xF3a m\u1ED9t chu\u1ED7i duy nh\u1EA5t:"),Ne=p(),k(L.$$.fragment),He=p(),ce=r("p"),$n=a("N\xF3 c\u0169ng x\u1EED l\xFD nhi\u1EC1u chu\u1ED7i c\xF9ng m\u1ED9t l\xFAc m\xE0 kh\xF4ng c\u1EA7n thay \u0111\u1ED5i trong API:"),Be=p(),k(G.$$.fragment),Me=p(),re=r("p"),qn=a("N\xF3 c\xF3 th\u1EC3 \u0111\u1EC7m th\xEAm tu\u1EF3 theo m\u1ED9t s\u1ED1 m\u1EE5c ti\xEAu nh\u01B0 sau:"),Oe=p(),k(K.$$.fragment),Re=p(),ae=r("p"),yn=a("N\xF3 c\u0169ng c\xF3 th\u1EC3 c\u1EAFt b\u1EDBt c\xE1c chu\u1ED7i:"),Le=p(),k(V.$$.fragment),Ge=p(),q=r("p"),wn=a("\u0110\u1ED1i t\u01B0\u1EE3ng "),$e=r("code"),jn=a("tokenizer"),zn=a(" c\xF3 th\u1EC3 x\u1EED l\xFD vi\u1EC7c chuy\u1EC3n \u0111\u1ED5i sang c\xE1c tensor c\u1EE5 th\u1EC3, sau \u0111\xF3 c\xF3 th\u1EC3 \u0111\u01B0\u1EE3c g\u1EEDi tr\u1EF1c ti\u1EBFp \u0111\u1EBFn m\xF4 h\xECnh. V\xED d\u1EE5: trong \u0111o\u1EA1n m\xE3 sau, ch\xFAng t\xF4i \u0111ang nh\u1EAFc tokenizer tr\u1EA3 v\u1EC1 tensors t\u1EEB c\xE1c khung kh\xE1c nhau - "),qe=r("code"),Tn=a('"pt"'),En=a(" tr\u1EA3 v\u1EC1 tensors PyTorch, "),ye=r("code"),Sn=a('"tf"'),xn=a(" tr\u1EA3 v\u1EC1 tensors TensorFlow v\xE0 "),we=r("code"),In=a('"np"'),An=a(" tr\u1EA3 v\u1EC1 m\u1EA3ng NumPy:"),Ke=p(),k(J.$$.fragment),Ve=p(),P=r("h2"),H=r("a"),je=r("span"),k(U.$$.fragment),Cn=p(),ze=r("span"),Pn=a("C\xE1c token \u0111\u1EB7c bi\u1EC7t"),Je=p(),le=r("p"),Fn=a("N\u1EBFu ch\xFAng ta xem x\xE9t c\xE1c ID \u0111\u1EA7u v\xE0o \u0111\u01B0\u1EE3c tr\u1EA3 v\u1EC1 b\u1EDFi tokenizer, ch\xFAng ta s\u1EBD th\u1EA5y ch\xFAng h\u01A1i kh\xE1c m\u1ED9t ch\xFAt so v\u1EDBi nh\u1EEFng g\xEC ch\xFAng ta \u0111\xE3 c\xF3 tr\u01B0\u1EDBc \u0111\xF3:"),Ue=p(),k(Q.$$.fragment),Qe=p(),k(W.$$.fragment),We=p(),he=r("p"),Dn=a("M\u1ED9t token ID \u0111\xE3 \u0111\u01B0\u1EE3c th\xEAm v\xE0o v\u1ECB tr\xED \u0111\u1EA7u v\xE0 cu\u1ED1i. H\xE3y gi\u1EA3i m\xE3 hai chu\u1ED7i ID \u1EDF tr\xEAn \u0111\u1EC3 xem n\xF3 l\xE0 g\xEC:"),Xe=p(),k(X.$$.fragment),Ye=p(),k(Y.$$.fragment),Ze=p(),I=r("p"),Nn=a("Tokenizer \u0111\xE3 th\xEAm t\u1EEB \u0111\u1EB7c bi\u1EC7t "),Te=r("code"),Hn=a("[CLS]"),Bn=a(" v\xE0o \u0111\u1EA7u v\xE0 t\u1EEB \u0111\u1EB7c bi\u1EC7t "),Ee=r("code"),Mn=a("[SEP]"),On=a(" \u1EDF cu\u1ED1i. \u0110i\u1EC1u n\xE0y l\xE0 do m\xF4 h\xECnh \u0111\xE3 \u0111\u01B0\u1EE3c hu\u1EA5n luy\u1EC7n tr\u01B0\u1EDBc v\u1EDBi ch\xFAng, v\xEC v\u1EADy \u0111\u1EC3 c\xF3 \u0111\u01B0\u1EE3c k\u1EBFt qu\u1EA3 t\u01B0\u01A1ng t\u1EF1 \u0111\u1EC3 lu\u1EADn suy, ch\xFAng ta c\u0169ng c\u1EA7n th\xEAm ch\xFAng v\xE0o. L\u01B0u \xFD r\u1EB1ng m\u1ED9t s\u1ED1 m\xF4 h\xECnh kh\xF4ng th\xEAm c\xE1c t\u1EEB \u0111\u1EB7c bi\u1EC7t ho\u1EB7c th\xEAm c\xE1c t\u1EEB kh\xE1c; m\xF4 h\xECnh c\u0169ng c\xF3 th\u1EC3 ch\u1EC9 th\xEAm nh\u1EEFng t\u1EEB \u0111\u1EB7c bi\u1EC7t n\xE0y v\xE0o \u0111\u1EA7u ho\u1EB7c ch\u1EC9 \u1EDF cu\u1ED1i. Trong m\u1ECDi tr\u01B0\u1EDDng h\u1EE3p, tokenizer bi\u1EBFt c\xE1i n\xE0o \u0111\u01B0\u1EE3c mong \u0111\u1EE3i v\xE0 s\u1EBD gi\u1EA3i quy\u1EBFt vi\u1EC7c n\xE0y cho b\u1EA1n."),en=p(),F=r("h2"),B=r("a"),Se=r("span"),k(Z.$$.fragment),Rn=p(),xe=r("span"),Ln=a("T\u1ED5ng k\u1EBFt: T\u1EEB tokenizer \u0111\u1EBFn m\xF4 h\xECnh"),nn=p(),M=r("p"),Gn=a("Gi\u1EDD ch\xFAng ta \u0111\xE3 th\u1EA5y t\u1EA5t c\u1EA3 c\xE1c b\u01B0\u1EDBc ri\xEAng l\u1EBB m\xE0 "),Ie=r("code"),Kn=a("tokenizer"),Vn=a(" s\u1EED d\u1EE5ng khi \xE1p d\u1EE5ng l\xEAn v\u0103n b\u1EA3n, ch\xFAng ta h\xE3y xem l\u1EA7n cu\u1ED1i c\xE1ch n\xF3 c\xF3 th\u1EC3 x\u1EED l\xFD nhi\u1EC1u chu\u1ED7i (\u0111\u1EC7m th\xEAm!), chu\u1ED7i r\u1EA5t d\xE0i (c\u1EAFt ng\u1EAFn!) V\xE0 nhi\u1EC1u ki\u1EC3u tensor v\u1EDBi API ch\xEDnh c\u1EE7a n\xF3:"),tn=p(),S.c(),ue=qt(),this.h()},l(e){const t=St('[data-svelte="svelte-1phssyn"]',document.head);c=l(t,"META",{name:!0,content:!0}),t.forEach(n),g=m(e),b(o.$$.fragment,e),$=m(e),C=l(e,"H1",{class:!0});var te=u(C);D=l(te,"A",{id:!0,class:!0,href:!0});var pe=u(D);de=l(pe,"SPAN",{});var me=u(de);b(O.$$.fragment,me),me.forEach(n),pe.forEach(n),ln=m(te),ke=l(te,"SPAN",{});var Yn=u(ke);hn=h(Yn,"K\u1EBFt h\u1EE3p l\u1EA1i"),Yn.forEach(n),te.forEach(n),Ae=m(e),T.l(e),se=m(e),oe=l(e,"P",{});var Zn=u(oe);un=h(Zn,"Trong v\xE0i ph\u1EA7n tr\u01B0\u1EDBc, ch\xFAng ta \u0111\xE3 c\u1ED1 g\u1EAFng h\u1EBFt s\u1EE9c \u0111\u1EC3 l\xE0m h\u1EA7u h\u1EBFt c\xE1c t\xE1c v\u1EE5 b\u1EB1ng tay. Ch\xFAng ta \u0111\xE3 kh\xE1m ph\xE1 c\xE1ch th\u1EE9c ho\u1EA1t \u0111\u1ED9ng c\u1EE7a c\xE1c c\xF4ng c\u1EE5 tokenize v\xE0 xem x\xE9t qu\xE1 tr\xECnh tokenize, chuy\u1EC3n \u0111\u1ED5i d\u1EEF li\u1EC7u sang ID \u0111\u1EA7u v\xE0o, \u0111\u1EC7m, c\u1EAFt b\u1EDBt v\xE0 c\xE1c l\u1EDBp che attention."),Zn.forEach(n),Ce=m(e),N=l(e,"P",{});var on=u(N);pn=h(on,"Tuy nhi\xEAn, nh\u01B0 ch\xFAng ta \u0111\xE3 th\u1EA5y trong ph\u1EA7n 2, API \u{1F917} Transformers c\xF3 th\u1EC3 x\u1EED l\xFD t\u1EA5t c\u1EA3 nh\u1EEFng \u0111i\u1EC1u n\xE0y cho ch\xFAng ta b\u1EB1ng m\u1ED9t ch\u1EE9c n\u0103ng c\u1EA5p cao m\xE0 ch\xFAng ta s\u1EBD \u0111i s\xE2u v\xE0o \u0111\xE2y. Khi b\u1EA1n g\u1ECDi tr\u1EF1c ti\u1EBFp "),be=l(on,"CODE",{});var et=u(be);mn=h(et,"tokenizer"),et.forEach(n),gn=h(on," tr\xEAn c\xE2u, b\u1EA1n s\u1EBD nh\u1EADn l\u1EA1i \u0111\u01B0\u1EE3c c\xE1c th\xF4ng tin \u0111\u1EA7u v\xE0o s\u1EB5n s\xE0ng chuy\u1EC3n qua m\xF4 h\xECnh c\u1EE7a b\u1EA1n:"),on.forEach(n),Pe=m(e),b(R.$$.fragment,e),Fe=m(e),x=l(e,"P",{});var ge=u(x);fn=h(ge,"\u1EDE \u0111\xE2y, bi\u1EBFn "),ve=l(ge,"CODE",{});var nt=u(ve);dn=h(nt,"model_inputs"),nt.forEach(n),kn=h(ge," ch\u1EE9a m\u1ECDi th\u1EE9 c\u1EA7n thi\u1EBFt \u0111\u1EC3 m\u1ED9t m\xF4 h\xECnh ho\u1EA1t \u0111\u1ED9ng t\u1ED1t. \u0110\u1ED1i v\u1EDBi DistilBERT, \u0111i\u1EC1u \u0111\xF3 bao g\u1ED3m c\xE1c ID \u0111\u1EA7u v\xE0o c\u0169ng nh\u01B0 l\u1EDBp che attention. C\xE1c m\xF4 h\xECnh kh\xE1c ch\u1EA5p nh\u1EADn \u0111\u1EA7u v\xE0o b\u1ED5 sung c\u0169ng s\u1EBD c\xF3 \u0111\u1EA7u ra \u0111\xF3 t\u1EEB \u0111\u1ED1i t\u01B0\u1EE3ng "),_e=l(ge,"CODE",{});var tt=u(_e);bn=h(tt,"tokenizer"),tt.forEach(n),vn=h(ge,"."),ge.forEach(n),De=m(e),ie=l(e,"P",{});var st=u(ie);_n=h(st,"Nh\u01B0 ch\xFAng ta s\u1EBD th\u1EA5y trong m\u1ED9t s\u1ED1 v\xED d\u1EE5 b\xEAn d\u01B0\u1EDBi, ph\u01B0\u01A1ng ph\xE1p n\xE0y r\u1EA5t m\u1EA1nh m\u1EBD. \u0110\u1EA7u ti\xEAn, n\xF3 c\xF3 th\u1EC3 m\xE3 h\xF3a m\u1ED9t chu\u1ED7i duy nh\u1EA5t:"),st.forEach(n),Ne=m(e),b(L.$$.fragment,e),He=m(e),ce=l(e,"P",{});var ot=u(ce);$n=h(ot,"N\xF3 c\u0169ng x\u1EED l\xFD nhi\u1EC1u chu\u1ED7i c\xF9ng m\u1ED9t l\xFAc m\xE0 kh\xF4ng c\u1EA7n thay \u0111\u1ED5i trong API:"),ot.forEach(n),Be=m(e),b(G.$$.fragment,e),Me=m(e),re=l(e,"P",{});var it=u(re);qn=h(it,"N\xF3 c\xF3 th\u1EC3 \u0111\u1EC7m th\xEAm tu\u1EF3 theo m\u1ED9t s\u1ED1 m\u1EE5c ti\xEAu nh\u01B0 sau:"),it.forEach(n),Oe=m(e),b(K.$$.fragment,e),Re=m(e),ae=l(e,"P",{});var ct=u(ae);yn=h(ct,"N\xF3 c\u0169ng c\xF3 th\u1EC3 c\u1EAFt b\u1EDBt c\xE1c chu\u1ED7i:"),ct.forEach(n),Le=m(e),b(V.$$.fragment,e),Ge=m(e),q=l(e,"P",{});var A=u(q);wn=h(A,"\u0110\u1ED1i t\u01B0\u1EE3ng "),$e=l(A,"CODE",{});var rt=u($e);jn=h(rt,"tokenizer"),rt.forEach(n),zn=h(A," c\xF3 th\u1EC3 x\u1EED l\xFD vi\u1EC7c chuy\u1EC3n \u0111\u1ED5i sang c\xE1c tensor c\u1EE5 th\u1EC3, sau \u0111\xF3 c\xF3 th\u1EC3 \u0111\u01B0\u1EE3c g\u1EEDi tr\u1EF1c ti\u1EBFp \u0111\u1EBFn m\xF4 h\xECnh. V\xED d\u1EE5: trong \u0111o\u1EA1n m\xE3 sau, ch\xFAng t\xF4i \u0111ang nh\u1EAFc tokenizer tr\u1EA3 v\u1EC1 tensors t\u1EEB c\xE1c khung kh\xE1c nhau - "),qe=l(A,"CODE",{});var at=u(qe);Tn=h(at,'"pt"'),at.forEach(n),En=h(A," tr\u1EA3 v\u1EC1 tensors PyTorch, "),ye=l(A,"CODE",{});var lt=u(ye);Sn=h(lt,'"tf"'),lt.forEach(n),xn=h(A," tr\u1EA3 v\u1EC1 tensors TensorFlow v\xE0 "),we=l(A,"CODE",{});var ht=u(we);In=h(ht,'"np"'),ht.forEach(n),An=h(A," tr\u1EA3 v\u1EC1 m\u1EA3ng NumPy:"),A.forEach(n),Ke=m(e),b(J.$$.fragment,e),Ve=m(e),P=l(e,"H2",{class:!0});var cn=u(P);H=l(cn,"A",{id:!0,class:!0,href:!0});var ut=u(H);je=l(ut,"SPAN",{});var pt=u(je);b(U.$$.fragment,pt),pt.forEach(n),ut.forEach(n),Cn=m(cn),ze=l(cn,"SPAN",{});var mt=u(ze);Pn=h(mt,"C\xE1c token \u0111\u1EB7c bi\u1EC7t"),mt.forEach(n),cn.forEach(n),Je=m(e),le=l(e,"P",{});var gt=u(le);Fn=h(gt,"N\u1EBFu ch\xFAng ta xem x\xE9t c\xE1c ID \u0111\u1EA7u v\xE0o \u0111\u01B0\u1EE3c tr\u1EA3 v\u1EC1 b\u1EDFi tokenizer, ch\xFAng ta s\u1EBD th\u1EA5y ch\xFAng h\u01A1i kh\xE1c m\u1ED9t ch\xFAt so v\u1EDBi nh\u1EEFng g\xEC ch\xFAng ta \u0111\xE3 c\xF3 tr\u01B0\u1EDBc \u0111\xF3:"),gt.forEach(n),Ue=m(e),b(Q.$$.fragment,e),Qe=m(e),b(W.$$.fragment,e),We=m(e),he=l(e,"P",{});var ft=u(he);Dn=h(ft,"M\u1ED9t token ID \u0111\xE3 \u0111\u01B0\u1EE3c th\xEAm v\xE0o v\u1ECB tr\xED \u0111\u1EA7u v\xE0 cu\u1ED1i. H\xE3y gi\u1EA3i m\xE3 hai chu\u1ED7i ID \u1EDF tr\xEAn \u0111\u1EC3 xem n\xF3 l\xE0 g\xEC:"),ft.forEach(n),Xe=m(e),b(X.$$.fragment,e),Ye=m(e),b(Y.$$.fragment,e),Ze=m(e),I=l(e,"P",{});var fe=u(I);Nn=h(fe,"Tokenizer \u0111\xE3 th\xEAm t\u1EEB \u0111\u1EB7c bi\u1EC7t "),Te=l(fe,"CODE",{});var dt=u(Te);Hn=h(dt,"[CLS]"),dt.forEach(n),Bn=h(fe," v\xE0o \u0111\u1EA7u v\xE0 t\u1EEB \u0111\u1EB7c bi\u1EC7t "),Ee=l(fe,"CODE",{});var kt=u(Ee);Mn=h(kt,"[SEP]"),kt.forEach(n),On=h(fe," \u1EDF cu\u1ED1i. \u0110i\u1EC1u n\xE0y l\xE0 do m\xF4 h\xECnh \u0111\xE3 \u0111\u01B0\u1EE3c hu\u1EA5n luy\u1EC7n tr\u01B0\u1EDBc v\u1EDBi ch\xFAng, v\xEC v\u1EADy \u0111\u1EC3 c\xF3 \u0111\u01B0\u1EE3c k\u1EBFt qu\u1EA3 t\u01B0\u01A1ng t\u1EF1 \u0111\u1EC3 lu\u1EADn suy, ch\xFAng ta c\u0169ng c\u1EA7n th\xEAm ch\xFAng v\xE0o. L\u01B0u \xFD r\u1EB1ng m\u1ED9t s\u1ED1 m\xF4 h\xECnh kh\xF4ng th\xEAm c\xE1c t\u1EEB \u0111\u1EB7c bi\u1EC7t ho\u1EB7c th\xEAm c\xE1c t\u1EEB kh\xE1c; m\xF4 h\xECnh c\u0169ng c\xF3 th\u1EC3 ch\u1EC9 th\xEAm nh\u1EEFng t\u1EEB \u0111\u1EB7c bi\u1EC7t n\xE0y v\xE0o \u0111\u1EA7u ho\u1EB7c ch\u1EC9 \u1EDF cu\u1ED1i. Trong m\u1ECDi tr\u01B0\u1EDDng h\u1EE3p, tokenizer bi\u1EBFt c\xE1i n\xE0o \u0111\u01B0\u1EE3c mong \u0111\u1EE3i v\xE0 s\u1EBD gi\u1EA3i quy\u1EBFt vi\u1EC7c n\xE0y cho b\u1EA1n."),fe.forEach(n),en=m(e),F=l(e,"H2",{class:!0});var rn=u(F);B=l(rn,"A",{id:!0,class:!0,href:!0});var bt=u(B);Se=l(bt,"SPAN",{});var vt=u(Se);b(Z.$$.fragment,vt),vt.forEach(n),bt.forEach(n),Rn=m(rn),xe=l(rn,"SPAN",{});var _t=u(xe);Ln=h(_t,"T\u1ED5ng k\u1EBFt: T\u1EEB tokenizer \u0111\u1EBFn m\xF4 h\xECnh"),_t.forEach(n),rn.forEach(n),nn=m(e),M=l(e,"P",{});var an=u(M);Gn=h(an,"Gi\u1EDD ch\xFAng ta \u0111\xE3 th\u1EA5y t\u1EA5t c\u1EA3 c\xE1c b\u01B0\u1EDBc ri\xEAng l\u1EBB m\xE0 "),Ie=l(an,"CODE",{});var $t=u(Ie);Kn=h($t,"tokenizer"),$t.forEach(n),Vn=h(an," s\u1EED d\u1EE5ng khi \xE1p d\u1EE5ng l\xEAn v\u0103n b\u1EA3n, ch\xFAng ta h\xE3y xem l\u1EA7n cu\u1ED1i c\xE1ch n\xF3 c\xF3 th\u1EC3 x\u1EED l\xFD nhi\u1EC1u chu\u1ED7i (\u0111\u1EC7m th\xEAm!), chu\u1ED7i r\u1EA5t d\xE0i (c\u1EAFt ng\u1EAFn!) V\xE0 nhi\u1EC1u ki\u1EC3u tensor v\u1EDBi API ch\xEDnh c\u1EE7a n\xF3:"),an.forEach(n),tn=m(e),S.l(e),ue=qt(),this.h()},h(){y(c,"name","hf:doc:metadata"),y(c,"content",JSON.stringify(Nt)),y(D,"id","kt-hp-li"),y(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),y(D,"href","#kt-hp-li"),y(C,"class","relative group"),y(H,"id","cc-token-c-bit"),y(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),y(H,"href","#cc-token-c-bit"),y(P,"class","relative group"),y(B,"id","tng-kt-t-tokenizer-n-m-hnh"),y(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),y(B,"href","#tng-kt-t-tokenizer-n-m-hnh"),y(F,"class","relative group")},m(e,t){s(document.head,c),i(e,g,t),v(o,e,t),i(e,$,t),i(e,C,t),s(C,D),s(D,de),v(O,de,null),s(C,ln),s(C,ke),s(ke,hn),i(e,Ae,t),ee[z].m(e,t),i(e,se,t),i(e,oe,t),s(oe,un),i(e,Ce,t),i(e,N,t),s(N,pn),s(N,be),s(be,mn),s(N,gn),i(e,Pe,t),v(R,e,t),i(e,Fe,t),i(e,x,t),s(x,fn),s(x,ve),s(ve,dn),s(x,kn),s(x,_e),s(_e,bn),s(x,vn),i(e,De,t),i(e,ie,t),s(ie,_n),i(e,Ne,t),v(L,e,t),i(e,He,t),i(e,ce,t),s(ce,$n),i(e,Be,t),v(G,e,t),i(e,Me,t),i(e,re,t),s(re,qn),i(e,Oe,t),v(K,e,t),i(e,Re,t),i(e,ae,t),s(ae,yn),i(e,Le,t),v(V,e,t),i(e,Ge,t),i(e,q,t),s(q,wn),s(q,$e),s($e,jn),s(q,zn),s(q,qe),s(qe,Tn),s(q,En),s(q,ye),s(ye,Sn),s(q,xn),s(q,we),s(we,In),s(q,An),i(e,Ke,t),v(J,e,t),i(e,Ve,t),i(e,P,t),s(P,H),s(H,je),v(U,je,null),s(P,Cn),s(P,ze),s(ze,Pn),i(e,Je,t),i(e,le,t),s(le,Fn),i(e,Ue,t),v(Q,e,t),i(e,Qe,t),v(W,e,t),i(e,We,t),i(e,he,t),s(he,Dn),i(e,Xe,t),v(X,e,t),i(e,Ye,t),v(Y,e,t),i(e,Ze,t),i(e,I,t),s(I,Nn),s(I,Te),s(Te,Hn),s(I,Bn),s(I,Ee),s(Ee,Mn),s(I,On),i(e,en,t),i(e,F,t),s(F,B),s(B,Se),v(Z,Se,null),s(F,Rn),s(F,xe),s(xe,Ln),i(e,nn,t),i(e,M,t),s(M,Gn),s(M,Ie),s(Ie,Kn),s(M,Vn),i(e,tn,t),ne[E].m(e,t),i(e,ue,t),sn=!0},p(e,[t]){const te={};t&1&&(te.fw=e[0]),o.$set(te);let pe=z;z=Qn(e),z!==pe&&(wt(),f(ee[pe],1,1,()=>{ee[pe]=null}),yt(),T=ee[z],T||(T=ee[z]=Un[z](e),T.c()),d(T,1),T.m(se.parentNode,se));let me=E;E=Xn(e),E!==me&&(wt(),f(ne[me],1,1,()=>{ne[me]=null}),yt(),S=ne[E],S||(S=ne[E]=Wn[E](e),S.c()),d(S,1),S.m(ue.parentNode,ue))},i(e){sn||(d(o.$$.fragment,e),d(O.$$.fragment,e),d(T),d(R.$$.fragment,e),d(L.$$.fragment,e),d(G.$$.fragment,e),d(K.$$.fragment,e),d(V.$$.fragment,e),d(J.$$.fragment,e),d(U.$$.fragment,e),d(Q.$$.fragment,e),d(W.$$.fragment,e),d(X.$$.fragment,e),d(Y.$$.fragment,e),d(Z.$$.fragment,e),d(S),sn=!0)},o(e){f(o.$$.fragment,e),f(O.$$.fragment,e),f(T),f(R.$$.fragment,e),f(L.$$.fragment,e),f(G.$$.fragment,e),f(K.$$.fragment,e),f(V.$$.fragment,e),f(J.$$.fragment,e),f(U.$$.fragment,e),f(Q.$$.fragment,e),f(W.$$.fragment,e),f(X.$$.fragment,e),f(Y.$$.fragment,e),f(Z.$$.fragment,e),f(S),sn=!1},d(e){n(c),e&&n(g),_(o,e),e&&n($),e&&n(C),_(O),e&&n(Ae),ee[z].d(e),e&&n(se),e&&n(oe),e&&n(Ce),e&&n(N),e&&n(Pe),_(R,e),e&&n(Fe),e&&n(x),e&&n(De),e&&n(ie),e&&n(Ne),_(L,e),e&&n(He),e&&n(ce),e&&n(Be),_(G,e),e&&n(Me),e&&n(re),e&&n(Oe),_(K,e),e&&n(Re),e&&n(ae),e&&n(Le),_(V,e),e&&n(Ge),e&&n(q),e&&n(Ke),_(J,e),e&&n(Ve),e&&n(P),_(U),e&&n(Je),e&&n(le),e&&n(Ue),_(Q,e),e&&n(Qe),_(W,e),e&&n(We),e&&n(he),e&&n(Xe),_(X,e),e&&n(Ye),_(Y,e),e&&n(Ze),e&&n(I),e&&n(en),e&&n(F),_(Z),e&&n(nn),e&&n(M),e&&n(tn),ne[E].d(e),e&&n(ue)}}}const Nt={local:"kt-hp-li",sections:[{local:"cc-token-c-bit",title:"C\xE1c token \u0111\u1EB7c bi\u1EC7t"},{local:"tng-kt-t-tokenizer-n-m-hnh",title:"T\u1ED5ng k\u1EBFt: T\u1EEB tokenizer \u0111\u1EBFn m\xF4 h\xECnh"}],title:"K\u1EBFt h\u1EE3p l\u1EA1i"};function Ht(j,c,g){let o="pt";return xt(()=>{const $=new URLSearchParams(window.location.search);g(0,o=$.get("fw")||"pt")}),[o]}class Kt extends zt{constructor(c){super();Tt(this,c,Ht,Dt,Et,{})}}export{Kt as default,Nt as metadata};
