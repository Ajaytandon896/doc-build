import{S as yo,i as Eo,s as To,e as i,k as m,w as q,t as l,l as $o,M as Io,c as p,d as s,m as d,x as k,a as c,h as u,b as j,G as a,g as t,y as b,o as h,p as jo,q as g,B as _,v as xo,n as wo}from"../../chunks/vendor-hf-doc-builder.js";import{I as Qs}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as w}from"../../chunks/CodeBlock-hf-doc-builder.js";import{C as zo}from"../../chunks/CourseFloatingBanner-hf-doc-builder.js";import{F as Po}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";function Ao(z){let r,f;return r=new zo({props:{chapter:2,classNames:"absolute z-10 right-0 top-0",notebooks:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/pt/chapter2/section6_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/pt/chapter2/section6_tf.ipynb"}]}}),{c(){q(r.$$.fragment)},l(n){k(r.$$.fragment,n)},m(n,v){b(r,n,v),f=!0},i(n){f||(g(r.$$.fragment,n),f=!0)},o(n){h(r.$$.fragment,n),f=!1},d(n){_(r,n)}}}function So(z){let r,f;return r=new zo({props:{chapter:2,classNames:"absolute z-10 right-0 top-0",notebooks:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/pt/chapter2/section6_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/pt/chapter2/section6_pt.ipynb"}]}}),{c(){q(r.$$.fragment)},l(n){k(r.$$.fragment,n)},m(n,v){b(r,n,v),f=!0},i(n){f||(g(r.$$.fragment,n),f=!0)},o(n){h(r.$$.fragment,n),f=!1},d(n){_(r,n)}}}function Co(z){let r,f;return r=new w({props:{code:`import tensorflow as tf
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
output = model(**tokens)`}}),{c(){q(r.$$.fragment)},l(n){k(r.$$.fragment,n)},m(n,v){b(r,n,v),f=!0},i(n){f||(g(r.$$.fragment,n),f=!0)},o(n){h(r.$$.fragment,n),f=!1},d(n){_(r,n)}}}function Fo(z){let r,f;return r=new w({props:{code:`import torch
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
output = model(**tokens)`}}),{c(){q(r.$$.fragment)},l(n){k(r.$$.fragment,n)},m(n,v){b(r,n,v),f=!0},i(n){f||(g(r.$$.fragment,n),f=!0)},o(n){h(r.$$.fragment,n),f=!1},d(n){_(r,n)}}}function Do(z){let r,f,n,v,S,D,ge,B,ls,qe,ps,Ae,y,E,ae,ne,us,Se,H,cs,ke,ms,ds,Ce,M,Fe,x,fs,be,hs,gs,_e,qs,ks,De,te,bs,He,L,Ne,re,_s,Oe,G,Re,ie,vs,Be,U,Me,le,$s,Le,Q,Ge,$,js,ve,ws,zs,$e,ys,Es,je,Ts,Is,we,xs,Ps,Ue,V,Qe,C,N,ze,J,As,ye,Ss,Ve,pe,Cs,Je,K,Ke,W,We,ue,Fs,Xe,X,Ye,Y,Ze,P,Ds,Ee,Hs,Ns,Te,Os,Rs,es,F,O,Ie,Z,Bs,xe,Ms,ss,R,Ls,Pe,Gs,Us,os,T,I,ce,as;n=new Po({props:{fw:z[0]}}),B=new Qs({});const Vs=[So,Ao],ee=[];function Js(e,o){return e[0]==="pt"?0:1}y=Js(z),E=ee[y]=Vs[y](z),M=new w({props:{code:`from transformers import AutoTokenizer

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

model_inputs = tokenizer(sequences)`}}),U=new w({props:{code:`# Ir\xE1 preencher as sequ\xEAncias at\xE9 o comprimento m\xE1ximo da sequ\xEAncia
model_inputs = tokenizer(sequences, padding="longest")

# Ir\xE1 preencher as sequ\xEAncias at\xE9 o comprimento m\xE1ximo do modelo
# (512 para o modelo BERT ou DistilBERT)
model_inputs = tokenizer(sequences, padding="max_length")

# Ir\xE1 preencher as sequ\xEAncias at\xE9 o comprimento m\xE1ximo especificado
model_inputs = tokenizer(sequences, padding="max_length", max_length=8)`,highlighted:`<span class="hljs-comment"># Ir\xE1 preencher as sequ\xEAncias at\xE9 o comprimento m\xE1ximo da sequ\xEAncia</span>
model_inputs = tokenizer(sequences, padding=<span class="hljs-string">&quot;longest&quot;</span>)

<span class="hljs-comment"># Ir\xE1 preencher as sequ\xEAncias at\xE9 o comprimento m\xE1ximo do modelo</span>
<span class="hljs-comment"># (512 para o modelo BERT ou DistilBERT)</span>
model_inputs = tokenizer(sequences, padding=<span class="hljs-string">&quot;max_length&quot;</span>)

<span class="hljs-comment"># Ir\xE1 preencher as sequ\xEAncias at\xE9 o comprimento m\xE1ximo especificado</span>
model_inputs = tokenizer(sequences, padding=<span class="hljs-string">&quot;max_length&quot;</span>, max_length=<span class="hljs-number">8</span>)`}}),Q=new w({props:{code:`sequences = ["I've been waiting for a HuggingFace course my whole life.", "So have I!"]

# Ir\xE1 preencher as sequ\xEAncias at\xE9 o comprimento m\xE1ximo do modelo
# (512 para o modelo BERT ou DistilBERT)
model_inputs = tokenizer(sequences, truncation=True)

# Truncar\xE1 as sequ\xEAncias que s\xE3o mais longas do que o comprimento m\xE1ximo especificado
model_inputs = tokenizer(sequences, max_length=8, truncation=True)`,highlighted:`sequences = [<span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>, <span class="hljs-string">&quot;So have I!&quot;</span>]

<span class="hljs-comment"># Ir\xE1 preencher as sequ\xEAncias at\xE9 o comprimento m\xE1ximo do modelo</span>
<span class="hljs-comment"># (512 para o modelo BERT ou DistilBERT)</span>
model_inputs = tokenizer(sequences, truncation=<span class="hljs-literal">True</span>)

<span class="hljs-comment"># Truncar\xE1 as sequ\xEAncias que s\xE3o mais longas do que o comprimento m\xE1ximo especificado</span>
model_inputs = tokenizer(sequences, max_length=<span class="hljs-number">8</span>, truncation=<span class="hljs-literal">True</span>)`}}),V=new w({props:{code:`sequences = ["I've been waiting for a HuggingFace course my whole life.", "So have I!"]

# Retorna tensores PyTorch
model_inputs = tokenizer(sequences, padding=True, return_tensors="pt")

# Retorna tensores TensorFlow
model_inputs = tokenizer(sequences, padding=True, return_tensors="tf")

# Retorna NumPy arrays
model_inputs = tokenizer(sequences, padding=True, return_tensors="np")`,highlighted:`sequences = [<span class="hljs-string">&quot;I&#x27;ve been waiting for a HuggingFace course my whole life.&quot;</span>, <span class="hljs-string">&quot;So have I!&quot;</span>]

<span class="hljs-comment"># Retorna tensores PyTorch</span>
model_inputs = tokenizer(sequences, padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-comment"># Retorna tensores TensorFlow</span>
model_inputs = tokenizer(sequences, padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-comment"># Retorna NumPy arrays</span>
model_inputs = tokenizer(sequences, padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)`}}),J=new Qs({}),K=new w({props:{code:`sequence = "I've been waiting for a HuggingFace course my whole life."

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
<span class="hljs-string">&quot;i&#x27;ve been waiting for a huggingface course my whole life.&quot;</span>`}}),Z=new Qs({});const Ks=[Fo,Co],se=[];function Ws(e,o){return e[0]==="pt"?0:1}return T=Ws(z),I=se[T]=Ks[T](z),{c(){r=i("meta"),f=m(),q(n.$$.fragment),v=m(),S=i("h1"),D=i("a"),ge=i("span"),q(B.$$.fragment),ls=m(),qe=i("span"),ps=l("Colocando tudo junto"),Ae=m(),E.c(),ae=m(),ne=i("p"),us=l("Nas \xFAltimas se\xE7\xF5es, temos feito o nosso melhor para fazer a maior parte do trabalho \xE0 m\xE3o. Exploramos como funcionam os tokenizers e analisamos a tokeniza\xE7\xE3o, convers\xE3o para IDs de entrada, padding, truncagem e m\xE1scaras de aten\xE7\xE3o."),Se=m(),H=i("p"),cs=l("Entretanto, como vimos na se\xE7\xE3o 2, a API dos \u{1F917} Transformers pode tratar de tudo isso para n\xF3s com uma fun\xE7\xE3o de alto n\xEDvel, na qual mergulharemos aqui. Quando voc\xEA chama seu "),ke=i("code"),ms=l("tokenizer"),ds=l(" diretamente na frase, voc\xEA recebe de volta entradas que est\xE3o prontas para passar pelo seu modelo:"),Ce=m(),q(M.$$.fragment),Fe=m(),x=i("p"),fs=l("Aqui, a vari\xE1vel "),be=i("code"),hs=l("model_inputs"),gs=l(" cont\xE9m tudo o que \xE9 necess\xE1rio para que um modelo funcione bem. Para DistilBERT, isso inclui os IDs de entrada, bem como a m\xE1scara de aten\xE7\xE3o. Outros modelos que aceitam entradas adicionais tamb\xE9m ter\xE3o essas sa\xEDdas pelo objeto "),_e=i("code"),qs=l("tokenizer"),ks=l("."),De=m(),te=i("p"),bs=l("Como veremos em alguns exemplos abaixo, este m\xE9todo \xE9 muito poderoso. Primeiro, ele pode simbolizar uma \xFAnica sequ\xEAncia:"),He=m(),q(L.$$.fragment),Ne=m(),re=i("p"),_s=l("Tamb\xE9m lida com v\xE1rias sequ\xEAncias de cada vez, sem nenhuma mudan\xE7a na API:"),Oe=m(),q(G.$$.fragment),Re=m(),ie=i("p"),vs=l("Ela pode ser aplicada de acordo com v\xE1rios objetivos:"),Be=m(),q(U.$$.fragment),Me=m(),le=i("p"),$s=l("Tamb\xE9m pode truncar sequ\xEAncias:"),Le=m(),q(Q.$$.fragment),Ge=m(),$=i("p"),js=l("O objeto "),ve=i("code"),ws=l("tokenizer"),zs=l(" pode lidar com a convers\xE3o para tensores de estrutura espec\xEDficos, que podem ent\xE3o ser enviados diretamente para o modelo. Por exemplo, na seguinte amostra de c\xF3digo, estamos solicitando que o tokenizer retorne tensores de diferentes estruturas - "),$e=i("code"),ys=l('"pt"'),Es=l(" retorna tensores PyTorch, "),je=i("code"),Ts=l('"tf"'),Is=l(" retorna tensores TensorFlow, e "),we=i("code"),xs=l('"np"'),Ps=l(" retorna arrays NumPy:"),Ue=m(),q(V.$$.fragment),Qe=m(),C=i("h2"),N=i("a"),ze=i("span"),q(J.$$.fragment),As=m(),ye=i("span"),Ss=l("Tokens especiais"),Ve=m(),pe=i("p"),Cs=l("Se dermos uma olhada nos IDs de entrada devolvidos pelo tokenizer, veremos que eles s\xE3o um pouco diferentes do que t\xEDnhamos anteriormente:"),Je=m(),q(K.$$.fragment),Ke=m(),q(W.$$.fragment),We=m(),ue=i("p"),Fs=l("Um token ID foi adicionada no in\xEDcio e uma no final. Vamos decodificar as duas sequ\xEAncias de IDs acima para ver do que se trata:"),Xe=m(),q(X.$$.fragment),Ye=m(),q(Y.$$.fragment),Ze=m(),P=i("p"),Ds=l("O tokenizer acrescentou a palavra especial "),Ee=i("code"),Hs=l("[CLS]"),Ns=l(" no in\xEDcio e a palavra especial "),Te=i("code"),Os=l("[SEP]"),Rs=l(" no final. Isto porque o modelo foi pr\xE9-treinado com esses, ent\xE3o para obter os mesmos resultados para infer\xEAncia, precisamos adicion\xE1-los tamb\xE9m. Note que alguns modelos n\xE3o acrescentam palavras especiais, ou acrescentam palavras diferentes; os modelos tamb\xE9m podem acrescentar estas palavras especiais apenas no in\xEDcio, ou apenas no final. Em qualquer caso, o tokenizer sabe quais s\xE3o as palavras que s\xE3o esperadas e tratar\xE1 disso para voc\xEA."),es=m(),F=i("h2"),O=i("a"),Ie=i("span"),q(Z.$$.fragment),Bs=m(),xe=i("span"),Ms=l("Do tokenizer ao modelo"),ss=m(),R=i("p"),Ls=l("Agora que j\xE1 vimos todos os passos individuais que o objeto "),Pe=i("code"),Gs=l("tokenizer"),Us=l(" utiliza quando aplicado em textos, vamos ver uma \xFAltima vez como ele pode lidar com m\xFAltiplas sequ\xEAncias (padding!), sequ\xEAncias muito longas (truncagem!), e m\xFAltiplos tipos de tensores com seu API principal:"),os=m(),I.c(),ce=$o(),this.h()},l(e){const o=Io('[data-svelte="svelte-1phssyn"]',document.head);r=p(o,"META",{name:!0,content:!0}),o.forEach(s),f=d(e),k(n.$$.fragment,e),v=d(e),S=p(e,"H1",{class:!0});var oe=c(S);D=p(oe,"A",{id:!0,class:!0,href:!0});var me=c(D);ge=p(me,"SPAN",{});var de=c(ge);k(B.$$.fragment,de),de.forEach(s),me.forEach(s),ls=d(oe),qe=p(oe,"SPAN",{});var Xs=c(qe);ps=u(Xs,"Colocando tudo junto"),Xs.forEach(s),oe.forEach(s),Ae=d(e),E.l(e),ae=d(e),ne=p(e,"P",{});var Ys=c(ne);us=u(Ys,"Nas \xFAltimas se\xE7\xF5es, temos feito o nosso melhor para fazer a maior parte do trabalho \xE0 m\xE3o. Exploramos como funcionam os tokenizers e analisamos a tokeniza\xE7\xE3o, convers\xE3o para IDs de entrada, padding, truncagem e m\xE1scaras de aten\xE7\xE3o."),Ys.forEach(s),Se=d(e),H=p(e,"P",{});var ns=c(H);cs=u(ns,"Entretanto, como vimos na se\xE7\xE3o 2, a API dos \u{1F917} Transformers pode tratar de tudo isso para n\xF3s com uma fun\xE7\xE3o de alto n\xEDvel, na qual mergulharemos aqui. Quando voc\xEA chama seu "),ke=p(ns,"CODE",{});var Zs=c(ke);ms=u(Zs,"tokenizer"),Zs.forEach(s),ds=u(ns," diretamente na frase, voc\xEA recebe de volta entradas que est\xE3o prontas para passar pelo seu modelo:"),ns.forEach(s),Ce=d(e),k(M.$$.fragment,e),Fe=d(e),x=p(e,"P",{});var fe=c(x);fs=u(fe,"Aqui, a vari\xE1vel "),be=p(fe,"CODE",{});var eo=c(be);hs=u(eo,"model_inputs"),eo.forEach(s),gs=u(fe," cont\xE9m tudo o que \xE9 necess\xE1rio para que um modelo funcione bem. Para DistilBERT, isso inclui os IDs de entrada, bem como a m\xE1scara de aten\xE7\xE3o. Outros modelos que aceitam entradas adicionais tamb\xE9m ter\xE3o essas sa\xEDdas pelo objeto "),_e=p(fe,"CODE",{});var so=c(_e);qs=u(so,"tokenizer"),so.forEach(s),ks=u(fe,"."),fe.forEach(s),De=d(e),te=p(e,"P",{});var oo=c(te);bs=u(oo,"Como veremos em alguns exemplos abaixo, este m\xE9todo \xE9 muito poderoso. Primeiro, ele pode simbolizar uma \xFAnica sequ\xEAncia:"),oo.forEach(s),He=d(e),k(L.$$.fragment,e),Ne=d(e),re=p(e,"P",{});var ao=c(re);_s=u(ao,"Tamb\xE9m lida com v\xE1rias sequ\xEAncias de cada vez, sem nenhuma mudan\xE7a na API:"),ao.forEach(s),Oe=d(e),k(G.$$.fragment,e),Re=d(e),ie=p(e,"P",{});var no=c(ie);vs=u(no,"Ela pode ser aplicada de acordo com v\xE1rios objetivos:"),no.forEach(s),Be=d(e),k(U.$$.fragment,e),Me=d(e),le=p(e,"P",{});var to=c(le);$s=u(to,"Tamb\xE9m pode truncar sequ\xEAncias:"),to.forEach(s),Le=d(e),k(Q.$$.fragment,e),Ge=d(e),$=p(e,"P",{});var A=c($);js=u(A,"O objeto "),ve=p(A,"CODE",{});var ro=c(ve);ws=u(ro,"tokenizer"),ro.forEach(s),zs=u(A," pode lidar com a convers\xE3o para tensores de estrutura espec\xEDficos, que podem ent\xE3o ser enviados diretamente para o modelo. Por exemplo, na seguinte amostra de c\xF3digo, estamos solicitando que o tokenizer retorne tensores de diferentes estruturas - "),$e=p(A,"CODE",{});var io=c($e);ys=u(io,'"pt"'),io.forEach(s),Es=u(A," retorna tensores PyTorch, "),je=p(A,"CODE",{});var lo=c(je);Ts=u(lo,'"tf"'),lo.forEach(s),Is=u(A," retorna tensores TensorFlow, e "),we=p(A,"CODE",{});var po=c(we);xs=u(po,'"np"'),po.forEach(s),Ps=u(A," retorna arrays NumPy:"),A.forEach(s),Ue=d(e),k(V.$$.fragment,e),Qe=d(e),C=p(e,"H2",{class:!0});var ts=c(C);N=p(ts,"A",{id:!0,class:!0,href:!0});var uo=c(N);ze=p(uo,"SPAN",{});var co=c(ze);k(J.$$.fragment,co),co.forEach(s),uo.forEach(s),As=d(ts),ye=p(ts,"SPAN",{});var mo=c(ye);Ss=u(mo,"Tokens especiais"),mo.forEach(s),ts.forEach(s),Ve=d(e),pe=p(e,"P",{});var fo=c(pe);Cs=u(fo,"Se dermos uma olhada nos IDs de entrada devolvidos pelo tokenizer, veremos que eles s\xE3o um pouco diferentes do que t\xEDnhamos anteriormente:"),fo.forEach(s),Je=d(e),k(K.$$.fragment,e),Ke=d(e),k(W.$$.fragment,e),We=d(e),ue=p(e,"P",{});var ho=c(ue);Fs=u(ho,"Um token ID foi adicionada no in\xEDcio e uma no final. Vamos decodificar as duas sequ\xEAncias de IDs acima para ver do que se trata:"),ho.forEach(s),Xe=d(e),k(X.$$.fragment,e),Ye=d(e),k(Y.$$.fragment,e),Ze=d(e),P=p(e,"P",{});var he=c(P);Ds=u(he,"O tokenizer acrescentou a palavra especial "),Ee=p(he,"CODE",{});var go=c(Ee);Hs=u(go,"[CLS]"),go.forEach(s),Ns=u(he," no in\xEDcio e a palavra especial "),Te=p(he,"CODE",{});var qo=c(Te);Os=u(qo,"[SEP]"),qo.forEach(s),Rs=u(he," no final. Isto porque o modelo foi pr\xE9-treinado com esses, ent\xE3o para obter os mesmos resultados para infer\xEAncia, precisamos adicion\xE1-los tamb\xE9m. Note que alguns modelos n\xE3o acrescentam palavras especiais, ou acrescentam palavras diferentes; os modelos tamb\xE9m podem acrescentar estas palavras especiais apenas no in\xEDcio, ou apenas no final. Em qualquer caso, o tokenizer sabe quais s\xE3o as palavras que s\xE3o esperadas e tratar\xE1 disso para voc\xEA."),he.forEach(s),es=d(e),F=p(e,"H2",{class:!0});var rs=c(F);O=p(rs,"A",{id:!0,class:!0,href:!0});var ko=c(O);Ie=p(ko,"SPAN",{});var bo=c(Ie);k(Z.$$.fragment,bo),bo.forEach(s),ko.forEach(s),Bs=d(rs),xe=p(rs,"SPAN",{});var _o=c(xe);Ms=u(_o,"Do tokenizer ao modelo"),_o.forEach(s),rs.forEach(s),ss=d(e),R=p(e,"P",{});var is=c(R);Ls=u(is,"Agora que j\xE1 vimos todos os passos individuais que o objeto "),Pe=p(is,"CODE",{});var vo=c(Pe);Gs=u(vo,"tokenizer"),vo.forEach(s),Us=u(is," utiliza quando aplicado em textos, vamos ver uma \xFAltima vez como ele pode lidar com m\xFAltiplas sequ\xEAncias (padding!), sequ\xEAncias muito longas (truncagem!), e m\xFAltiplos tipos de tensores com seu API principal:"),is.forEach(s),os=d(e),I.l(e),ce=$o(),this.h()},h(){j(r,"name","hf:doc:metadata"),j(r,"content",JSON.stringify(Ho)),j(D,"id","colocando-tudo-junto"),j(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),j(D,"href","#colocando-tudo-junto"),j(S,"class","relative group"),j(N,"id","tokens-especiais"),j(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),j(N,"href","#tokens-especiais"),j(C,"class","relative group"),j(O,"id","do-tokenizer-ao-modelo"),j(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),j(O,"href","#do-tokenizer-ao-modelo"),j(F,"class","relative group")},m(e,o){a(document.head,r),t(e,f,o),b(n,e,o),t(e,v,o),t(e,S,o),a(S,D),a(D,ge),b(B,ge,null),a(S,ls),a(S,qe),a(qe,ps),t(e,Ae,o),ee[y].m(e,o),t(e,ae,o),t(e,ne,o),a(ne,us),t(e,Se,o),t(e,H,o),a(H,cs),a(H,ke),a(ke,ms),a(H,ds),t(e,Ce,o),b(M,e,o),t(e,Fe,o),t(e,x,o),a(x,fs),a(x,be),a(be,hs),a(x,gs),a(x,_e),a(_e,qs),a(x,ks),t(e,De,o),t(e,te,o),a(te,bs),t(e,He,o),b(L,e,o),t(e,Ne,o),t(e,re,o),a(re,_s),t(e,Oe,o),b(G,e,o),t(e,Re,o),t(e,ie,o),a(ie,vs),t(e,Be,o),b(U,e,o),t(e,Me,o),t(e,le,o),a(le,$s),t(e,Le,o),b(Q,e,o),t(e,Ge,o),t(e,$,o),a($,js),a($,ve),a(ve,ws),a($,zs),a($,$e),a($e,ys),a($,Es),a($,je),a(je,Ts),a($,Is),a($,we),a(we,xs),a($,Ps),t(e,Ue,o),b(V,e,o),t(e,Qe,o),t(e,C,o),a(C,N),a(N,ze),b(J,ze,null),a(C,As),a(C,ye),a(ye,Ss),t(e,Ve,o),t(e,pe,o),a(pe,Cs),t(e,Je,o),b(K,e,o),t(e,Ke,o),b(W,e,o),t(e,We,o),t(e,ue,o),a(ue,Fs),t(e,Xe,o),b(X,e,o),t(e,Ye,o),b(Y,e,o),t(e,Ze,o),t(e,P,o),a(P,Ds),a(P,Ee),a(Ee,Hs),a(P,Ns),a(P,Te),a(Te,Os),a(P,Rs),t(e,es,o),t(e,F,o),a(F,O),a(O,Ie),b(Z,Ie,null),a(F,Bs),a(F,xe),a(xe,Ms),t(e,ss,o),t(e,R,o),a(R,Ls),a(R,Pe),a(Pe,Gs),a(R,Us),t(e,os,o),se[T].m(e,o),t(e,ce,o),as=!0},p(e,[o]){const oe={};o&1&&(oe.fw=e[0]),n.$set(oe);let me=y;y=Js(e),y!==me&&(wo(),h(ee[me],1,1,()=>{ee[me]=null}),jo(),E=ee[y],E||(E=ee[y]=Vs[y](e),E.c()),g(E,1),E.m(ae.parentNode,ae));let de=T;T=Ws(e),T!==de&&(wo(),h(se[de],1,1,()=>{se[de]=null}),jo(),I=se[T],I||(I=se[T]=Ks[T](e),I.c()),g(I,1),I.m(ce.parentNode,ce))},i(e){as||(g(n.$$.fragment,e),g(B.$$.fragment,e),g(E),g(M.$$.fragment,e),g(L.$$.fragment,e),g(G.$$.fragment,e),g(U.$$.fragment,e),g(Q.$$.fragment,e),g(V.$$.fragment,e),g(J.$$.fragment,e),g(K.$$.fragment,e),g(W.$$.fragment,e),g(X.$$.fragment,e),g(Y.$$.fragment,e),g(Z.$$.fragment,e),g(I),as=!0)},o(e){h(n.$$.fragment,e),h(B.$$.fragment,e),h(E),h(M.$$.fragment,e),h(L.$$.fragment,e),h(G.$$.fragment,e),h(U.$$.fragment,e),h(Q.$$.fragment,e),h(V.$$.fragment,e),h(J.$$.fragment,e),h(K.$$.fragment,e),h(W.$$.fragment,e),h(X.$$.fragment,e),h(Y.$$.fragment,e),h(Z.$$.fragment,e),h(I),as=!1},d(e){s(r),e&&s(f),_(n,e),e&&s(v),e&&s(S),_(B),e&&s(Ae),ee[y].d(e),e&&s(ae),e&&s(ne),e&&s(Se),e&&s(H),e&&s(Ce),_(M,e),e&&s(Fe),e&&s(x),e&&s(De),e&&s(te),e&&s(He),_(L,e),e&&s(Ne),e&&s(re),e&&s(Oe),_(G,e),e&&s(Re),e&&s(ie),e&&s(Be),_(U,e),e&&s(Me),e&&s(le),e&&s(Le),_(Q,e),e&&s(Ge),e&&s($),e&&s(Ue),_(V,e),e&&s(Qe),e&&s(C),_(J),e&&s(Ve),e&&s(pe),e&&s(Je),_(K,e),e&&s(Ke),_(W,e),e&&s(We),e&&s(ue),e&&s(Xe),_(X,e),e&&s(Ye),_(Y,e),e&&s(Ze),e&&s(P),e&&s(es),e&&s(F),_(Z),e&&s(ss),e&&s(R),e&&s(os),se[T].d(e),e&&s(ce)}}}const Ho={local:"colocando-tudo-junto",sections:[{local:"tokens-especiais",title:"Tokens especiais"},{local:"do-tokenizer-ao-modelo",title:"Do tokenizer ao modelo"}],title:"Colocando tudo junto"};function No(z,r,f){let n="pt";return xo(()=>{const v=new URLSearchParams(window.location.search);f(0,n=v.get("fw")||"pt")}),[n]}class Go extends yo{constructor(r){super();Eo(this,r,No,Do,To,{})}}export{Go as default,Ho as metadata};
