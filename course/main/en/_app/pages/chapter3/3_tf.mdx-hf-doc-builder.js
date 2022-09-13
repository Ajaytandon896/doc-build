import{S as ao,i as so,s as oo,e as r,k as c,w as g,t as o,M as no,c as l,d as t,m as u,x as y,a as i,h as n,b as w,G as a,g as h,y as $,q as v,o as b,B as k,v as ro}from"../../chunks/vendor-hf-doc-builder.js";import{T as aa}from"../../chunks/Tip-hf-doc-builder.js";import{Y as sa}from"../../chunks/Youtube-hf-doc-builder.js";import{I as oa}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as N}from"../../chunks/CodeBlock-hf-doc-builder.js";import{C as lo}from"../../chunks/CourseFloatingBanner-hf-doc-builder.js";import{F as io}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";function ho(M){let p,j,m,T,_;return{c(){p=r("p"),j=o("Note that \u{1F917} Transformers models have a special ability that most Keras models don\u2019t - they can automatically use an appropriate loss which they compute internally. They will use this loss by default if you don\u2019t set a loss argument in "),m=r("code"),T=o("compile()"),_=o(". Note that to use the internal loss you\u2019ll need to pass your labels as part of the input, not as a separate label, which is the normal way to use labels with Keras models. You\u2019ll see examples of this in Part 2 of the course, where defining the correct loss function can be tricky. For sequence classification, however, a standard Keras loss function works fine, so that\u2019s what we\u2019ll use here.")},l(d){p=l(d,"P",{});var E=i(p);j=n(E,"Note that \u{1F917} Transformers models have a special ability that most Keras models don\u2019t - they can automatically use an appropriate loss which they compute internally. They will use this loss by default if you don\u2019t set a loss argument in "),m=l(E,"CODE",{});var C=i(m);T=n(C,"compile()"),C.forEach(t),_=n(E,". Note that to use the internal loss you\u2019ll need to pass your labels as part of the input, not as a separate label, which is the normal way to use labels with Keras models. You\u2019ll see examples of this in Part 2 of the course, where defining the correct loss function can be tricky. For sequence classification, however, a standard Keras loss function works fine, so that\u2019s what we\u2019ll use here."),E.forEach(t)},m(d,E){h(d,p,E),a(p,j),a(p,m),a(m,T),a(p,_)},d(d){d&&t(p)}}}function po(M){let p,j,m,T,_,d,E,C;return{c(){p=r("p"),j=o("Note a very common pitfall here \u2014 you "),m=r("em"),T=o("can"),_=o(" just pass the name of the loss as a string to Keras, but by default Keras will assume that you have already applied a softmax to your outputs. Many models, however, output the values right before the softmax is applied, which are also known as the "),d=r("em"),E=o("logits"),C=o(". We need to tell the loss function that that\u2019s what our model does, and the only way to do that is to call it directly, rather than by name with a string.")},l(q){p=l(q,"P",{});var f=i(p);j=n(f,"Note a very common pitfall here \u2014 you "),m=l(f,"EM",{});var A=i(m);T=n(A,"can"),A.forEach(t),_=n(f," just pass the name of the loss as a string to Keras, but by default Keras will assume that you have already applied a softmax to your outputs. Many models, however, output the values right before the softmax is applied, which are also known as the "),d=l(f,"EM",{});var P=i(d);E=n(P,"logits"),P.forEach(t),C=n(f,". We need to tell the loss function that that\u2019s what our model does, and the only way to do that is to call it directly, rather than by name with a string."),f.forEach(t)},m(q,f){h(q,p,f),a(p,j),a(p,m),a(m,T),a(p,_),a(p,d),a(d,E),a(p,C)},d(q){q&&t(p)}}}function co(M){let p,j,m,T,_,d,E,C;return{c(){p=r("p"),j=o("The \u{1F917} Transformers library also has a "),m=r("code"),T=o("create_optimizer()"),_=o(" function that will create an "),d=r("code"),E=o("AdamW"),C=o(" optimizer with learning rate decay. This is a convenient shortcut that you\u2019ll see in detail in future sections of the course.")},l(q){p=l(q,"P",{});var f=i(p);j=n(f,"The \u{1F917} Transformers library also has a "),m=l(f,"CODE",{});var A=i(m);T=n(A,"create_optimizer()"),A.forEach(t),_=n(f," function that will create an "),d=l(f,"CODE",{});var P=i(d);E=n(P,"AdamW"),P.forEach(t),C=n(f," optimizer with learning rate decay. This is a convenient shortcut that you\u2019ll see in detail in future sections of the course."),f.forEach(t)},m(q,f){h(q,p,f),a(p,j),a(p,m),a(m,T),a(p,_),a(p,d),a(d,E),a(p,C)},d(q){q&&t(p)}}}function uo(M){let p,j,m,T,_,d,E,C,q,f;return{c(){p=r("p"),j=o("\u{1F4A1} If you want to automatically upload your model to the Hub during training, you can pass along a "),m=r("code"),T=o("PushToHubCallback"),_=o(" in the "),d=r("code"),E=o("model.fit()"),C=o(" method. We will learn more about this in "),q=r("a"),f=o("Chapter 4"),this.h()},l(A){p=l(A,"P",{});var P=i(p);j=n(P,"\u{1F4A1} If you want to automatically upload your model to the Hub during training, you can pass along a "),m=l(P,"CODE",{});var I=i(m);T=n(I,"PushToHubCallback"),I.forEach(t),_=n(P," in the "),d=l(P,"CODE",{});var ne=i(d);E=n(ne,"model.fit()"),ne.forEach(t),C=n(P," method. We will learn more about this in "),q=l(P,"A",{href:!0});var x=i(q);f=n(x,"Chapter 4"),x.forEach(t),P.forEach(t),this.h()},h(){w(q,"href","/course/chapter4/3")},m(A,P){h(A,p,P),a(p,j),a(p,m),a(m,T),a(p,_),a(p,d),a(d,E),a(p,C),a(p,q),a(q,f)},d(A){A&&t(p)}}}function mo(M){let p,j,m,T,_,d,E,C,q,f,A,P,I,ne,x,na,Ie,ra,la,re,ia,ha,ct,Ce,pa,ut,le,mt,H,B,Ke,ie,ca,Oe,ua,dt,qe,ma,ft,he,wt,Pe,da,_t,pe,gt,K,fa,ze,wa,_a,We,ga,ya,yt,ce,$t,L,$a,Ae,va,ba,vt,O,ka,He,Ea,ja,Ue,Ta,Ca,bt,Y,kt,ue,Et,J,jt,U,V,Ge,me,qa,Re,Pa,Tt,de,Ct,Q,za,Be,Aa,xa,qt,z,Fa,Le,Sa,Da,Ye,Ma,Na,Je,Ia,Ka,Ve,Oa,Wa,Qe,Ha,Ua,Pt,fe,zt,X,At,xe,Ga,xt,we,Ft,Fe,Ra,St,_e,Dt,Z,Mt,G,ee,Xe,ge,Ba,Ze,La,Nt,ye,It,W,Ya,et,Ja,Va,tt,Qa,Xa,Kt,$e,Ot,te,Za,at,es,ts,Wt,ve,Ht,be,Ut,F,as,st,ss,os,ot,ns,rs,nt,ls,is,Gt,ke,Rt,Ee,Bt,S,hs,je,ps,cs,rt,us,ms,lt,ds,fs,Lt,ae,ws,Se,_s,gs,Yt;return m=new io({props:{fw:M[0]}}),C=new oa({}),I=new lo({props:{chapter:3,classNames:"absolute z-10 right-0 top-0",notebooks:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/en/chapter3/section3_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/en/chapter3/section3_tf.ipynb"}]}}),le=new N({props:{code:`from datasets import load_dataset
from transformers import AutoTokenizer, DataCollatorWithPadding
import numpy as np

raw_datasets = load_dataset("glue", "mrpc")
checkpoint = "bert-base-uncased"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)


def tokenize_function(example):
    return tokenizer(example["sentence1"], example["sentence2"], truncation=True)


tokenized_datasets = raw_datasets.map(tokenize_function, batched=True)

data_collator = DataCollatorWithPadding(tokenizer=tokenizer, return_tensors="tf")

tf_train_dataset = tokenized_datasets["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "token_type_ids"],
    label_cols=["labels"],
    shuffle=True,
    collate_fn=data_collator,
    batch_size=8,
)

tf_validation_dataset = tokenized_datasets["validation"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "token_type_ids"],
    label_cols=["labels"],
    shuffle=False,
    collate_fn=data_collator,
    batch_size=8,
)`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, DataCollatorWithPadding
<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

raw_datasets = load_dataset(<span class="hljs-string">&quot;glue&quot;</span>, <span class="hljs-string">&quot;mrpc&quot;</span>)
checkpoint = <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(checkpoint)


<span class="hljs-keyword">def</span> <span class="hljs-title function_">tokenize_function</span>(<span class="hljs-params">example</span>):
    <span class="hljs-keyword">return</span> tokenizer(example[<span class="hljs-string">&quot;sentence1&quot;</span>], example[<span class="hljs-string">&quot;sentence2&quot;</span>], truncation=<span class="hljs-literal">True</span>)


tokenized_datasets = raw_datasets.<span class="hljs-built_in">map</span>(tokenize_function, batched=<span class="hljs-literal">True</span>)

data_collator = DataCollatorWithPadding(tokenizer=tokenizer, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

tf_train_dataset = tokenized_datasets[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;token_type_ids&quot;</span>],
    label_cols=[<span class="hljs-string">&quot;labels&quot;</span>],
    shuffle=<span class="hljs-literal">True</span>,
    collate_fn=data_collator,
    batch_size=<span class="hljs-number">8</span>,
)

tf_validation_dataset = tokenized_datasets[<span class="hljs-string">&quot;validation&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;token_type_ids&quot;</span>],
    label_cols=[<span class="hljs-string">&quot;labels&quot;</span>],
    shuffle=<span class="hljs-literal">False</span>,
    collate_fn=data_collator,
    batch_size=<span class="hljs-number">8</span>,
)`}}),ie=new oa({}),he=new sa({props:{id:"rnTGBy2ax1c"}}),pe=new sa({props:{id:"AUozVp78dhk"}}),ce=new N({props:{code:`from transformers import TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=2)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=<span class="hljs-number">2</span>)`}}),Y=new aa({props:{$$slots:{default:[ho]},$$scope:{ctx:M}}}),ue=new N({props:{code:`from tensorflow.keras.losses import SparseCategoricalCrossentropy

model.compile(
    optimizer="adam",
    loss=SparseCategoricalCrossentropy(from_logits=True),
    metrics=["accuracy"],
)
model.fit(
    tf_train_dataset,
    validation_data=tf_validation_dataset,
)`,highlighted:`<span class="hljs-keyword">from</span> tensorflow.keras.losses <span class="hljs-keyword">import</span> SparseCategoricalCrossentropy

model.<span class="hljs-built_in">compile</span>(
    optimizer=<span class="hljs-string">&quot;adam&quot;</span>,
    loss=SparseCategoricalCrossentropy(from_logits=<span class="hljs-literal">True</span>),
    metrics=[<span class="hljs-string">&quot;accuracy&quot;</span>],
)
model.fit(
    tf_train_dataset,
    validation_data=tf_validation_dataset,
)`}}),J=new aa({props:{warning:!0,$$slots:{default:[po]},$$scope:{ctx:M}}}),me=new oa({}),de=new sa({props:{id:"cpzq6ESSM5c"}}),fe=new N({props:{code:`from tensorflow.keras.optimizers.schedules import PolynomialDecay

batch_size = 8
num_epochs = 3
# The number of training steps is the number of samples in the dataset, divided by the batch size then multiplied
# by the total number of epochs. Note that the tf_train_dataset here is a batched tf.data.Dataset,
# not the original Hugging Face Dataset, so its len() is already num_samples // batch_size.
num_train_steps = len(tf_train_dataset) * num_epochs
lr_scheduler = PolynomialDecay(
    initial_learning_rate=5e-5, end_learning_rate=0.0, decay_steps=num_train_steps
)
from tensorflow.keras.optimizers import Adam

opt = Adam(learning_rate=lr_scheduler)`,highlighted:`<span class="hljs-keyword">from</span> tensorflow.keras.optimizers.schedules <span class="hljs-keyword">import</span> PolynomialDecay

batch_size = <span class="hljs-number">8</span>
num_epochs = <span class="hljs-number">3</span>
<span class="hljs-comment"># The number of training steps is the number of samples in the dataset, divided by the batch size then multiplied</span>
<span class="hljs-comment"># by the total number of epochs. Note that the tf_train_dataset here is a batched tf.data.Dataset,</span>
<span class="hljs-comment"># not the original Hugging Face Dataset, so its len() is already num_samples // batch_size.</span>
num_train_steps = <span class="hljs-built_in">len</span>(tf_train_dataset) * num_epochs
lr_scheduler = PolynomialDecay(
    initial_learning_rate=<span class="hljs-number">5e-5</span>, end_learning_rate=<span class="hljs-number">0.0</span>, decay_steps=num_train_steps
)
<span class="hljs-keyword">from</span> tensorflow.keras.optimizers <span class="hljs-keyword">import</span> Adam

opt = Adam(learning_rate=lr_scheduler)`}}),X=new aa({props:{$$slots:{default:[co]},$$scope:{ctx:M}}}),we=new N({props:{code:`import tensorflow as tf

model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=2)
loss = tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True)
model.compile(optimizer=opt, loss=loss, metrics=["accuracy"])`,highlighted:`<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=<span class="hljs-number">2</span>)
loss = tf.keras.losses.SparseCategoricalCrossentropy(from_logits=<span class="hljs-literal">True</span>)
model.<span class="hljs-built_in">compile</span>(optimizer=opt, loss=loss, metrics=[<span class="hljs-string">&quot;accuracy&quot;</span>])`}}),_e=new N({props:{code:"model.fit(tf_train_dataset, validation_data=tf_validation_dataset, epochs=3)",highlighted:'model.fit(tf_train_dataset, validation_data=tf_validation_dataset, epochs=<span class="hljs-number">3</span>)'}}),Z=new aa({props:{$$slots:{default:[uo]},$$scope:{ctx:M}}}),ge=new oa({}),ye=new sa({props:{id:"nx10eh4CoOs"}}),$e=new N({props:{code:'preds = model.predict(tf_validation_dataset)["logits"]',highlighted:'preds = model.predict(tf_validation_dataset)[<span class="hljs-string">&quot;logits&quot;</span>]'}}),ve=new N({props:{code:`class_preds = np.argmax(preds, axis=1)
print(preds.shape, class_preds.shape)`,highlighted:`class_preds = np.argmax(preds, axis=<span class="hljs-number">1</span>)
<span class="hljs-built_in">print</span>(preds.shape, class_preds.shape)`}}),be=new N({props:{code:"(408, 2) (408,)",highlighted:'(<span class="hljs-number">408</span>, <span class="hljs-number">2</span>) (<span class="hljs-number">408</span>,)'}}),ke=new N({props:{code:`import evaluate

metric = evaluate.load("glue", "mrpc")
metric.compute(predictions=class_preds, references=raw_datasets["validation"]["label"])`,highlighted:`<span class="hljs-keyword">import</span> evaluate

metric = evaluate.load(<span class="hljs-string">&quot;glue&quot;</span>, <span class="hljs-string">&quot;mrpc&quot;</span>)
metric.compute(predictions=class_preds, references=raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>][<span class="hljs-string">&quot;label&quot;</span>])`}}),Ee=new N({props:{code:"{'accuracy': 0.8578431372549019, 'f1': 0.8996539792387542}",highlighted:'{<span class="hljs-string">&#x27;accuracy&#x27;</span>: <span class="hljs-number">0.8578431372549019</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">0.8996539792387542</span>}'}}),{c(){p=r("meta"),j=c(),g(m.$$.fragment),T=c(),_=r("h1"),d=r("a"),E=r("span"),g(C.$$.fragment),q=c(),f=r("span"),A=o("Fine-tuning a model with Keras"),P=c(),g(I.$$.fragment),ne=c(),x=r("p"),na=o("Once you\u2019ve done all the data preprocessing work in the last section, you have just a few steps left to train the model. Note, however, that the "),Ie=r("code"),ra=o("model.fit()"),la=o(" command will run very slowly on a CPU. If you don\u2019t have a GPU set up, you can get access to free GPUs or TPUs on "),re=r("a"),ia=o("Google Colab"),ha=o("."),ct=c(),Ce=r("p"),pa=o("The code examples below assume you have already executed the examples in the previous section. Here is a short summary recapping what you need:"),ut=c(),g(le.$$.fragment),mt=c(),H=r("h3"),B=r("a"),Ke=r("span"),g(ie.$$.fragment),ca=c(),Oe=r("span"),ua=o("Training"),dt=c(),qe=r("p"),ma=o("TensorFlow models imported from \u{1F917} Transformers are already Keras models. Here is a short introduction to Keras."),ft=c(),g(he.$$.fragment),wt=c(),Pe=r("p"),da=o("That means that once we have our data, very little work is required to begin training on it."),_t=c(),g(pe.$$.fragment),gt=c(),K=r("p"),fa=o("As in the "),ze=r("a"),wa=o("previous chapter"),_a=o(", we will use the "),We=r("code"),ga=o("TFAutoModelForSequenceClassification"),ya=o(" class, with two labels:"),yt=c(),g(ce.$$.fragment),$t=c(),L=r("p"),$a=o("You will notice that unlike in "),Ae=r("a"),va=o("Chapter 2"),ba=o(", you get a warning after instantiating this pretrained model. This is because BERT has not been pretrained on classifying pairs of sentences, so the head of the pretrained model has been discarded and a new head suitable for sequence classification has been inserted instead. The warnings indicate that some weights were not used (the ones corresponding to the dropped pretraining head) and that some others were randomly initialized (the ones for the new head). It concludes by encouraging you to train the model, which is exactly what we are going to do now."),vt=c(),O=r("p"),ka=o("To fine-tune the model on our dataset, we just have to "),He=r("code"),Ea=o("compile()"),ja=o(" our model and then pass our data to the "),Ue=r("code"),Ta=o("fit()"),Ca=o(" method. This will start the fine-tuning process (which should take a couple of minutes on a GPU) and report training loss as it goes, plus the validation loss at the end of each epoch."),bt=c(),g(Y.$$.fragment),kt=c(),g(ue.$$.fragment),Et=c(),g(J.$$.fragment),jt=c(),U=r("h3"),V=r("a"),Ge=r("span"),g(me.$$.fragment),qa=c(),Re=r("span"),Pa=o("Improving training performance"),Tt=c(),g(de.$$.fragment),Ct=c(),Q=r("p"),za=o(`If you try the above code, it certainly runs, but you\u2019ll find that the loss declines only slowly or sporadically. The primary cause
is the `),Be=r("em"),Aa=o("learning rate"),xa=o(`. As with the loss, when we pass Keras the name of an optimizer as a string, Keras initializes
that optimizer with default values for all parameters, including learning rate. From long experience, though, we know
that transformer models benefit from a much lower learning rate than the default for Adam, which is 1e-3, also written
as 10 to the power of -3, or 0.001. 5e-5 (0.00005), which is some twenty times lower, is a much better starting point.`),qt=c(),z=r("p"),Fa=o(`In addition to lowering the learning rate, we have a second trick up our sleeve: We can slowly reduce the learning rate
over the course of training. In the literature, you will sometimes see this referred to as `),Le=r("em"),Sa=o("decaying"),Da=o(" or "),Ye=r("em"),Ma=o("annealing"),Na=o(`
the learning rate. In Keras, the best way to do this is to use a `),Je=r("em"),Ia=o("learning rate scheduler"),Ka=o(`. A good one to use is
`),Ve=r("code"),Oa=o("PolynomialDecay"),Wa=o(` \u2014 despite the name, with default settings it simply linearly decays the learning rate from the initial
value to the final value over the course of training, which is exactly what we want. In order to use a scheduler correctly,
though, we need to tell it how long training is going to be. We compute that as `),Qe=r("code"),Ha=o("num_train_steps"),Ua=o(" below."),Pt=c(),g(fe.$$.fragment),zt=c(),g(X.$$.fragment),At=c(),xe=r("p"),Ga=o("Now we have our all-new optimizer, and we can try training with it. First, let\u2019s reload the model, to reset the changes to the weights from the training run we just did, and then we can compile it with the new optimizer:"),xt=c(),g(we.$$.fragment),Ft=c(),Fe=r("p"),Ra=o("Now, we fit again:"),St=c(),g(_e.$$.fragment),Dt=c(),g(Z.$$.fragment),Mt=c(),G=r("h3"),ee=r("a"),Xe=r("span"),g(ge.$$.fragment),Ba=c(),Ze=r("span"),La=o("Model predictions"),Nt=c(),g(ye.$$.fragment),It=c(),W=r("p"),Ya=o("Training and watching the loss go down is all very nice, but what if we want to actually get outputs from the trained model, either to compute some metrics, or to use the model in production? To do that, we can just use the "),et=r("code"),Ja=o("predict()"),Va=o(" method. This will return the "),tt=r("em"),Qa=o("logits"),Xa=o(" from the output head of the model, one per class."),Kt=c(),g($e.$$.fragment),Ot=c(),te=r("p"),Za=o("We can convert these logits into the model\u2019s class predictions by using "),at=r("code"),es=o("argmax"),ts=o(" to find the highest logit, which corresponds to the most likely class:"),Wt=c(),g(ve.$$.fragment),Ht=c(),g(be.$$.fragment),Ut=c(),F=r("p"),as=o("Now, let\u2019s use those "),st=r("code"),ss=o("preds"),os=o(" to compute some metrics! We can load the metrics associated with the MRPC dataset as easily as we loaded the dataset, this time with the "),ot=r("code"),ns=o("evaluate.load()"),rs=o(" function. The object returned has a "),nt=r("code"),ls=o("compute()"),is=o(" method we can use to do the metric calculation:"),Gt=c(),g(ke.$$.fragment),Rt=c(),g(Ee.$$.fragment),Bt=c(),S=r("p"),hs=o("The exact results you get may vary, as the random initialization of the model head might change the metrics it achieved. Here, we can see our model has an accuracy of 85.78% on the validation set and an F1 score of 89.97. Those are the two metrics used to evaluate results on the MRPC dataset for the GLUE benchmark. The table in the "),je=r("a"),ps=o("BERT paper"),cs=o(" reported an F1 score of 88.9 for the base model. That was the "),rt=r("code"),us=o("uncased"),ms=o(" model while we are currently using the "),lt=r("code"),ds=o("cased"),fs=o(" model, which explains the better result."),Lt=c(),ae=r("p"),ws=o("This concludes the introduction to fine-tuning using the Keras API. An example of doing this for most common NLP tasks will be given in "),Se=r("a"),_s=o("Chapter 7"),gs=o(". If you would like to hone your skills on the Keras API, try to fine-tune a model on the GLUE SST-2 dataset, using the data processing you did in section 2."),this.h()},l(e){const s=no('[data-svelte="svelte-1phssyn"]',document.head);p=l(s,"META",{name:!0,content:!0}),s.forEach(t),j=u(e),y(m.$$.fragment,e),T=u(e),_=l(e,"H1",{class:!0});var Te=i(_);d=l(Te,"A",{id:!0,class:!0,href:!0});var it=i(d);E=l(it,"SPAN",{});var ht=i(E);y(C.$$.fragment,ht),ht.forEach(t),it.forEach(t),q=u(Te),f=l(Te,"SPAN",{});var pt=i(f);A=n(pt,"Fine-tuning a model with Keras"),pt.forEach(t),Te.forEach(t),P=u(e),y(I.$$.fragment,e),ne=u(e),x=l(e,"P",{});var R=i(x);na=n(R,"Once you\u2019ve done all the data preprocessing work in the last section, you have just a few steps left to train the model. Note, however, that the "),Ie=l(R,"CODE",{});var ys=i(Ie);ra=n(ys,"model.fit()"),ys.forEach(t),la=n(R," command will run very slowly on a CPU. If you don\u2019t have a GPU set up, you can get access to free GPUs or TPUs on "),re=l(R,"A",{href:!0,rel:!0});var $s=i(re);ia=n($s,"Google Colab"),$s.forEach(t),ha=n(R,"."),R.forEach(t),ct=u(e),Ce=l(e,"P",{});var vs=i(Ce);pa=n(vs,"The code examples below assume you have already executed the examples in the previous section. Here is a short summary recapping what you need:"),vs.forEach(t),ut=u(e),y(le.$$.fragment,e),mt=u(e),H=l(e,"H3",{class:!0});var Jt=i(H);B=l(Jt,"A",{id:!0,class:!0,href:!0});var bs=i(B);Ke=l(bs,"SPAN",{});var ks=i(Ke);y(ie.$$.fragment,ks),ks.forEach(t),bs.forEach(t),ca=u(Jt),Oe=l(Jt,"SPAN",{});var Es=i(Oe);ua=n(Es,"Training"),Es.forEach(t),Jt.forEach(t),dt=u(e),qe=l(e,"P",{});var js=i(qe);ma=n(js,"TensorFlow models imported from \u{1F917} Transformers are already Keras models. Here is a short introduction to Keras."),js.forEach(t),ft=u(e),y(he.$$.fragment,e),wt=u(e),Pe=l(e,"P",{});var Ts=i(Pe);da=n(Ts,"That means that once we have our data, very little work is required to begin training on it."),Ts.forEach(t),_t=u(e),y(pe.$$.fragment,e),gt=u(e),K=l(e,"P",{});var De=i(K);fa=n(De,"As in the "),ze=l(De,"A",{href:!0});var Cs=i(ze);wa=n(Cs,"previous chapter"),Cs.forEach(t),_a=n(De,", we will use the "),We=l(De,"CODE",{});var qs=i(We);ga=n(qs,"TFAutoModelForSequenceClassification"),qs.forEach(t),ya=n(De," class, with two labels:"),De.forEach(t),yt=u(e),y(ce.$$.fragment,e),$t=u(e),L=l(e,"P",{});var Vt=i(L);$a=n(Vt,"You will notice that unlike in "),Ae=l(Vt,"A",{href:!0});var Ps=i(Ae);va=n(Ps,"Chapter 2"),Ps.forEach(t),ba=n(Vt,", you get a warning after instantiating this pretrained model. This is because BERT has not been pretrained on classifying pairs of sentences, so the head of the pretrained model has been discarded and a new head suitable for sequence classification has been inserted instead. The warnings indicate that some weights were not used (the ones corresponding to the dropped pretraining head) and that some others were randomly initialized (the ones for the new head). It concludes by encouraging you to train the model, which is exactly what we are going to do now."),Vt.forEach(t),vt=u(e),O=l(e,"P",{});var Me=i(O);ka=n(Me,"To fine-tune the model on our dataset, we just have to "),He=l(Me,"CODE",{});var zs=i(He);Ea=n(zs,"compile()"),zs.forEach(t),ja=n(Me," our model and then pass our data to the "),Ue=l(Me,"CODE",{});var As=i(Ue);Ta=n(As,"fit()"),As.forEach(t),Ca=n(Me," method. This will start the fine-tuning process (which should take a couple of minutes on a GPU) and report training loss as it goes, plus the validation loss at the end of each epoch."),Me.forEach(t),bt=u(e),y(Y.$$.fragment,e),kt=u(e),y(ue.$$.fragment,e),Et=u(e),y(J.$$.fragment,e),jt=u(e),U=l(e,"H3",{class:!0});var Qt=i(U);V=l(Qt,"A",{id:!0,class:!0,href:!0});var xs=i(V);Ge=l(xs,"SPAN",{});var Fs=i(Ge);y(me.$$.fragment,Fs),Fs.forEach(t),xs.forEach(t),qa=u(Qt),Re=l(Qt,"SPAN",{});var Ss=i(Re);Pa=n(Ss,"Improving training performance"),Ss.forEach(t),Qt.forEach(t),Tt=u(e),y(de.$$.fragment,e),Ct=u(e),Q=l(e,"P",{});var Xt=i(Q);za=n(Xt,`If you try the above code, it certainly runs, but you\u2019ll find that the loss declines only slowly or sporadically. The primary cause
is the `),Be=l(Xt,"EM",{});var Ds=i(Be);Aa=n(Ds,"learning rate"),Ds.forEach(t),xa=n(Xt,`. As with the loss, when we pass Keras the name of an optimizer as a string, Keras initializes
that optimizer with default values for all parameters, including learning rate. From long experience, though, we know
that transformer models benefit from a much lower learning rate than the default for Adam, which is 1e-3, also written
as 10 to the power of -3, or 0.001. 5e-5 (0.00005), which is some twenty times lower, is a much better starting point.`),Xt.forEach(t),qt=u(e),z=l(e,"P",{});var D=i(z);Fa=n(D,`In addition to lowering the learning rate, we have a second trick up our sleeve: We can slowly reduce the learning rate
over the course of training. In the literature, you will sometimes see this referred to as `),Le=l(D,"EM",{});var Ms=i(Le);Sa=n(Ms,"decaying"),Ms.forEach(t),Da=n(D," or "),Ye=l(D,"EM",{});var Ns=i(Ye);Ma=n(Ns,"annealing"),Ns.forEach(t),Na=n(D,`
the learning rate. In Keras, the best way to do this is to use a `),Je=l(D,"EM",{});var Is=i(Je);Ia=n(Is,"learning rate scheduler"),Is.forEach(t),Ka=n(D,`. A good one to use is
`),Ve=l(D,"CODE",{});var Ks=i(Ve);Oa=n(Ks,"PolynomialDecay"),Ks.forEach(t),Wa=n(D,` \u2014 despite the name, with default settings it simply linearly decays the learning rate from the initial
value to the final value over the course of training, which is exactly what we want. In order to use a scheduler correctly,
though, we need to tell it how long training is going to be. We compute that as `),Qe=l(D,"CODE",{});var Os=i(Qe);Ha=n(Os,"num_train_steps"),Os.forEach(t),Ua=n(D," below."),D.forEach(t),Pt=u(e),y(fe.$$.fragment,e),zt=u(e),y(X.$$.fragment,e),At=u(e),xe=l(e,"P",{});var Ws=i(xe);Ga=n(Ws,"Now we have our all-new optimizer, and we can try training with it. First, let\u2019s reload the model, to reset the changes to the weights from the training run we just did, and then we can compile it with the new optimizer:"),Ws.forEach(t),xt=u(e),y(we.$$.fragment,e),Ft=u(e),Fe=l(e,"P",{});var Hs=i(Fe);Ra=n(Hs,"Now, we fit again:"),Hs.forEach(t),St=u(e),y(_e.$$.fragment,e),Dt=u(e),y(Z.$$.fragment,e),Mt=u(e),G=l(e,"H3",{class:!0});var Zt=i(G);ee=l(Zt,"A",{id:!0,class:!0,href:!0});var Us=i(ee);Xe=l(Us,"SPAN",{});var Gs=i(Xe);y(ge.$$.fragment,Gs),Gs.forEach(t),Us.forEach(t),Ba=u(Zt),Ze=l(Zt,"SPAN",{});var Rs=i(Ze);La=n(Rs,"Model predictions"),Rs.forEach(t),Zt.forEach(t),Nt=u(e),y(ye.$$.fragment,e),It=u(e),W=l(e,"P",{});var Ne=i(W);Ya=n(Ne,"Training and watching the loss go down is all very nice, but what if we want to actually get outputs from the trained model, either to compute some metrics, or to use the model in production? To do that, we can just use the "),et=l(Ne,"CODE",{});var Bs=i(et);Ja=n(Bs,"predict()"),Bs.forEach(t),Va=n(Ne," method. This will return the "),tt=l(Ne,"EM",{});var Ls=i(tt);Qa=n(Ls,"logits"),Ls.forEach(t),Xa=n(Ne," from the output head of the model, one per class."),Ne.forEach(t),Kt=u(e),y($e.$$.fragment,e),Ot=u(e),te=l(e,"P",{});var ea=i(te);Za=n(ea,"We can convert these logits into the model\u2019s class predictions by using "),at=l(ea,"CODE",{});var Ys=i(at);es=n(Ys,"argmax"),Ys.forEach(t),ts=n(ea," to find the highest logit, which corresponds to the most likely class:"),ea.forEach(t),Wt=u(e),y(ve.$$.fragment,e),Ht=u(e),y(be.$$.fragment,e),Ut=u(e),F=l(e,"P",{});var se=i(F);as=n(se,"Now, let\u2019s use those "),st=l(se,"CODE",{});var Js=i(st);ss=n(Js,"preds"),Js.forEach(t),os=n(se," to compute some metrics! We can load the metrics associated with the MRPC dataset as easily as we loaded the dataset, this time with the "),ot=l(se,"CODE",{});var Vs=i(ot);ns=n(Vs,"evaluate.load()"),Vs.forEach(t),rs=n(se," function. The object returned has a "),nt=l(se,"CODE",{});var Qs=i(nt);ls=n(Qs,"compute()"),Qs.forEach(t),is=n(se," method we can use to do the metric calculation:"),se.forEach(t),Gt=u(e),y(ke.$$.fragment,e),Rt=u(e),y(Ee.$$.fragment,e),Bt=u(e),S=l(e,"P",{});var oe=i(S);hs=n(oe,"The exact results you get may vary, as the random initialization of the model head might change the metrics it achieved. Here, we can see our model has an accuracy of 85.78% on the validation set and an F1 score of 89.97. Those are the two metrics used to evaluate results on the MRPC dataset for the GLUE benchmark. The table in the "),je=l(oe,"A",{href:!0,rel:!0});var Xs=i(je);ps=n(Xs,"BERT paper"),Xs.forEach(t),cs=n(oe," reported an F1 score of 88.9 for the base model. That was the "),rt=l(oe,"CODE",{});var Zs=i(rt);us=n(Zs,"uncased"),Zs.forEach(t),ms=n(oe," model while we are currently using the "),lt=l(oe,"CODE",{});var eo=i(lt);ds=n(eo,"cased"),eo.forEach(t),fs=n(oe," model, which explains the better result."),oe.forEach(t),Lt=u(e),ae=l(e,"P",{});var ta=i(ae);ws=n(ta,"This concludes the introduction to fine-tuning using the Keras API. An example of doing this for most common NLP tasks will be given in "),Se=l(ta,"A",{href:!0});var to=i(Se);_s=n(to,"Chapter 7"),to.forEach(t),gs=n(ta,". If you would like to hone your skills on the Keras API, try to fine-tune a model on the GLUE SST-2 dataset, using the data processing you did in section 2."),ta.forEach(t),this.h()},h(){w(p,"name","hf:doc:metadata"),w(p,"content",JSON.stringify(fo)),w(d,"id","finetuning-a-model-with-keras"),w(d,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(d,"href","#finetuning-a-model-with-keras"),w(_,"class","relative group"),w(re,"href","https://colab.research.google.com/"),w(re,"rel","nofollow"),w(B,"id","training"),w(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(B,"href","#training"),w(H,"class","relative group"),w(ze,"href","/course/chapter2"),w(Ae,"href","/course/chapter2"),w(V,"id","improving-training-performance"),w(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(V,"href","#improving-training-performance"),w(U,"class","relative group"),w(ee,"id","model-predictions"),w(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(ee,"href","#model-predictions"),w(G,"class","relative group"),w(je,"href","https://arxiv.org/pdf/1810.04805.pdf"),w(je,"rel","nofollow"),w(Se,"href","/course/chapter7")},m(e,s){a(document.head,p),h(e,j,s),$(m,e,s),h(e,T,s),h(e,_,s),a(_,d),a(d,E),$(C,E,null),a(_,q),a(_,f),a(f,A),h(e,P,s),$(I,e,s),h(e,ne,s),h(e,x,s),a(x,na),a(x,Ie),a(Ie,ra),a(x,la),a(x,re),a(re,ia),a(x,ha),h(e,ct,s),h(e,Ce,s),a(Ce,pa),h(e,ut,s),$(le,e,s),h(e,mt,s),h(e,H,s),a(H,B),a(B,Ke),$(ie,Ke,null),a(H,ca),a(H,Oe),a(Oe,ua),h(e,dt,s),h(e,qe,s),a(qe,ma),h(e,ft,s),$(he,e,s),h(e,wt,s),h(e,Pe,s),a(Pe,da),h(e,_t,s),$(pe,e,s),h(e,gt,s),h(e,K,s),a(K,fa),a(K,ze),a(ze,wa),a(K,_a),a(K,We),a(We,ga),a(K,ya),h(e,yt,s),$(ce,e,s),h(e,$t,s),h(e,L,s),a(L,$a),a(L,Ae),a(Ae,va),a(L,ba),h(e,vt,s),h(e,O,s),a(O,ka),a(O,He),a(He,Ea),a(O,ja),a(O,Ue),a(Ue,Ta),a(O,Ca),h(e,bt,s),$(Y,e,s),h(e,kt,s),$(ue,e,s),h(e,Et,s),$(J,e,s),h(e,jt,s),h(e,U,s),a(U,V),a(V,Ge),$(me,Ge,null),a(U,qa),a(U,Re),a(Re,Pa),h(e,Tt,s),$(de,e,s),h(e,Ct,s),h(e,Q,s),a(Q,za),a(Q,Be),a(Be,Aa),a(Q,xa),h(e,qt,s),h(e,z,s),a(z,Fa),a(z,Le),a(Le,Sa),a(z,Da),a(z,Ye),a(Ye,Ma),a(z,Na),a(z,Je),a(Je,Ia),a(z,Ka),a(z,Ve),a(Ve,Oa),a(z,Wa),a(z,Qe),a(Qe,Ha),a(z,Ua),h(e,Pt,s),$(fe,e,s),h(e,zt,s),$(X,e,s),h(e,At,s),h(e,xe,s),a(xe,Ga),h(e,xt,s),$(we,e,s),h(e,Ft,s),h(e,Fe,s),a(Fe,Ra),h(e,St,s),$(_e,e,s),h(e,Dt,s),$(Z,e,s),h(e,Mt,s),h(e,G,s),a(G,ee),a(ee,Xe),$(ge,Xe,null),a(G,Ba),a(G,Ze),a(Ze,La),h(e,Nt,s),$(ye,e,s),h(e,It,s),h(e,W,s),a(W,Ya),a(W,et),a(et,Ja),a(W,Va),a(W,tt),a(tt,Qa),a(W,Xa),h(e,Kt,s),$($e,e,s),h(e,Ot,s),h(e,te,s),a(te,Za),a(te,at),a(at,es),a(te,ts),h(e,Wt,s),$(ve,e,s),h(e,Ht,s),$(be,e,s),h(e,Ut,s),h(e,F,s),a(F,as),a(F,st),a(st,ss),a(F,os),a(F,ot),a(ot,ns),a(F,rs),a(F,nt),a(nt,ls),a(F,is),h(e,Gt,s),$(ke,e,s),h(e,Rt,s),$(Ee,e,s),h(e,Bt,s),h(e,S,s),a(S,hs),a(S,je),a(je,ps),a(S,cs),a(S,rt),a(rt,us),a(S,ms),a(S,lt),a(lt,ds),a(S,fs),h(e,Lt,s),h(e,ae,s),a(ae,ws),a(ae,Se),a(Se,_s),a(ae,gs),Yt=!0},p(e,[s]){const Te={};s&1&&(Te.fw=e[0]),m.$set(Te);const it={};s&2&&(it.$$scope={dirty:s,ctx:e}),Y.$set(it);const ht={};s&2&&(ht.$$scope={dirty:s,ctx:e}),J.$set(ht);const pt={};s&2&&(pt.$$scope={dirty:s,ctx:e}),X.$set(pt);const R={};s&2&&(R.$$scope={dirty:s,ctx:e}),Z.$set(R)},i(e){Yt||(v(m.$$.fragment,e),v(C.$$.fragment,e),v(I.$$.fragment,e),v(le.$$.fragment,e),v(ie.$$.fragment,e),v(he.$$.fragment,e),v(pe.$$.fragment,e),v(ce.$$.fragment,e),v(Y.$$.fragment,e),v(ue.$$.fragment,e),v(J.$$.fragment,e),v(me.$$.fragment,e),v(de.$$.fragment,e),v(fe.$$.fragment,e),v(X.$$.fragment,e),v(we.$$.fragment,e),v(_e.$$.fragment,e),v(Z.$$.fragment,e),v(ge.$$.fragment,e),v(ye.$$.fragment,e),v($e.$$.fragment,e),v(ve.$$.fragment,e),v(be.$$.fragment,e),v(ke.$$.fragment,e),v(Ee.$$.fragment,e),Yt=!0)},o(e){b(m.$$.fragment,e),b(C.$$.fragment,e),b(I.$$.fragment,e),b(le.$$.fragment,e),b(ie.$$.fragment,e),b(he.$$.fragment,e),b(pe.$$.fragment,e),b(ce.$$.fragment,e),b(Y.$$.fragment,e),b(ue.$$.fragment,e),b(J.$$.fragment,e),b(me.$$.fragment,e),b(de.$$.fragment,e),b(fe.$$.fragment,e),b(X.$$.fragment,e),b(we.$$.fragment,e),b(_e.$$.fragment,e),b(Z.$$.fragment,e),b(ge.$$.fragment,e),b(ye.$$.fragment,e),b($e.$$.fragment,e),b(ve.$$.fragment,e),b(be.$$.fragment,e),b(ke.$$.fragment,e),b(Ee.$$.fragment,e),Yt=!1},d(e){t(p),e&&t(j),k(m,e),e&&t(T),e&&t(_),k(C),e&&t(P),k(I,e),e&&t(ne),e&&t(x),e&&t(ct),e&&t(Ce),e&&t(ut),k(le,e),e&&t(mt),e&&t(H),k(ie),e&&t(dt),e&&t(qe),e&&t(ft),k(he,e),e&&t(wt),e&&t(Pe),e&&t(_t),k(pe,e),e&&t(gt),e&&t(K),e&&t(yt),k(ce,e),e&&t($t),e&&t(L),e&&t(vt),e&&t(O),e&&t(bt),k(Y,e),e&&t(kt),k(ue,e),e&&t(Et),k(J,e),e&&t(jt),e&&t(U),k(me),e&&t(Tt),k(de,e),e&&t(Ct),e&&t(Q),e&&t(qt),e&&t(z),e&&t(Pt),k(fe,e),e&&t(zt),k(X,e),e&&t(At),e&&t(xe),e&&t(xt),k(we,e),e&&t(Ft),e&&t(Fe),e&&t(St),k(_e,e),e&&t(Dt),k(Z,e),e&&t(Mt),e&&t(G),k(ge),e&&t(Nt),k(ye,e),e&&t(It),e&&t(W),e&&t(Kt),k($e,e),e&&t(Ot),e&&t(te),e&&t(Wt),k(ve,e),e&&t(Ht),k(be,e),e&&t(Ut),e&&t(F),e&&t(Gt),k(ke,e),e&&t(Rt),k(Ee,e),e&&t(Bt),e&&t(S),e&&t(Lt),e&&t(ae)}}}const fo={local:"finetuning-a-model-with-keras",sections:[{local:"training",title:"Training"},{local:"improving-training-performance",title:"Improving training performance"},{local:"model-predictions",title:"Model predictions"}],title:"Fine-tuning a model with Keras"};function wo(M,p,j){let m="pt";return ro(()=>{const T=new URLSearchParams(window.location.search);j(0,m=T.get("fw")||"pt")}),[m]}class Eo extends ao{constructor(p){super();so(this,p,wo,mo,oo,{})}}export{Eo as default,fo as metadata};
