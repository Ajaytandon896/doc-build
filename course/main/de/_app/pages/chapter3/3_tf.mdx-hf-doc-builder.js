import{S as Ys,i as Qs,s as Xs,e as i,k as p,w as $,t as r,M as er,c as l,d as n,m as f,x as v,a as d,h as a,b as D,G as t,g as o,y as k,q as z,o as E,B as M,v as nr}from"../../chunks/vendor-hf-doc-builder.js";import{Y as at,T as pn}from"../../chunks/Youtube-hf-doc-builder.js";import{I as it}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as F}from"../../chunks/CodeBlock-hf-doc-builder.js";import{C as tr}from"../../chunks/CourseFloatingBanner-hf-doc-builder.js";import{F as sr}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";function rr(P){let u,b,m,_,g;return{c(){u=i("p"),b=r("\u{1F917} Transformer Modelle haben eine besondere F\xE4higkeit, die die meisten Keras Modelle nicht haben - sie k\xF6nnen automatisch einen geeigneten Verlust verwenden, der intern berechnet wird. Dieser Verlust wird standardm\xE4\xDFig verwendet, wenn in "),m=i("code"),_=r("compile()"),g=r(" kein Verlustargument angegeben wird. Um den internen Verlust zu verwenden, musst du deine Labels als Teil des Input \xFCbergeben und nicht als separates Label, wie es normalerweise bei Keras-Modellen der Fall ist. Beispiele daf\xFCr gibt es in Teil 2 des Kurses, wobei die Definition der richtigen Verlustfunktion schwierig sein kann. F\xFCr die Klassifizierung von Sequenzen eignet sich jedoch eine der Standardverlustfunktionen von Keras, die wir hier verwenden werden.")},l(c){u=l(c,"P",{});var h=d(u);b=a(h,"\u{1F917} Transformer Modelle haben eine besondere F\xE4higkeit, die die meisten Keras Modelle nicht haben - sie k\xF6nnen automatisch einen geeigneten Verlust verwenden, der intern berechnet wird. Dieser Verlust wird standardm\xE4\xDFig verwendet, wenn in "),m=l(h,"CODE",{});var j=d(m);_=a(j,"compile()"),j.forEach(n),g=a(h," kein Verlustargument angegeben wird. Um den internen Verlust zu verwenden, musst du deine Labels als Teil des Input \xFCbergeben und nicht als separates Label, wie es normalerweise bei Keras-Modellen der Fall ist. Beispiele daf\xFCr gibt es in Teil 2 des Kurses, wobei die Definition der richtigen Verlustfunktion schwierig sein kann. F\xFCr die Klassifizierung von Sequenzen eignet sich jedoch eine der Standardverlustfunktionen von Keras, die wir hier verwenden werden."),h.forEach(n)},m(c,h){o(c,u,h),t(u,b),t(u,m),t(m,_),t(u,g)},d(c){c&&n(u)}}}function ar(P){let u,b,m,_,g,c,h,j;return{c(){u=i("p"),b=r("Hier gibt es einen sehr h\xE4ufigen Stolperstein - du "),m=i("em"),_=r("kannst"),g=r(" Keras einfach den Namen des Verlusts als String \xFCbergeben, aber standardm\xE4\xDFig geht Keras davon aus, dass du bereits einen Softmax auf die Outputs angewendet hast. Viele Modelle geben jedoch die Werte direkt vor der Anwendung des Softmax als "),c=i("em"),h=r("Logits"),j=r(" aus. Hier ist es wichtig der Keras Verlustfunktion mitzuteilen, dass unser Modell genau diess tut, und das geht nur indem sie direkt aufgerufen wird, und nicht \xFCber den Namen mit einem String.")},l(T){u=l(T,"P",{});var w=d(u);b=a(w,"Hier gibt es einen sehr h\xE4ufigen Stolperstein - du "),m=l(w,"EM",{});var A=d(m);_=a(A,"kannst"),A.forEach(n),g=a(w," Keras einfach den Namen des Verlusts als String \xFCbergeben, aber standardm\xE4\xDFig geht Keras davon aus, dass du bereits einen Softmax auf die Outputs angewendet hast. Viele Modelle geben jedoch die Werte direkt vor der Anwendung des Softmax als "),c=l(w,"EM",{});var S=d(c);h=a(S,"Logits"),S.forEach(n),j=a(w," aus. Hier ist es wichtig der Keras Verlustfunktion mitzuteilen, dass unser Modell genau diess tut, und das geht nur indem sie direkt aufgerufen wird, und nicht \xFCber den Namen mit einem String."),w.forEach(n)},m(T,w){o(T,u,w),t(u,b),t(u,m),t(m,_),t(u,g),t(u,c),t(c,h),t(u,j)},d(T){T&&n(u)}}}function ir(P){let u,b,m,_,g,c,h,j;return{c(){u=i("p"),b=r("Die \u{1F917} Transformer Bibliothek hat eine "),m=i("code"),_=r("create_optimizer()"),g=r("-Funktion, die einen "),c=i("code"),h=r("AdamW"),j=r("-Optimierer mit Lernratenabfall erzeugt. Das ist eine praktisches Tool, auf das wir in den n\xE4chsten Abschnitten des Kurses im Detail eingehen werden.")},l(T){u=l(T,"P",{});var w=d(u);b=a(w,"Die \u{1F917} Transformer Bibliothek hat eine "),m=l(w,"CODE",{});var A=d(m);_=a(A,"create_optimizer()"),A.forEach(n),g=a(w,"-Funktion, die einen "),c=l(w,"CODE",{});var S=d(c);h=a(S,"AdamW"),S.forEach(n),j=a(w,"-Optimierer mit Lernratenabfall erzeugt. Das ist eine praktisches Tool, auf das wir in den n\xE4chsten Abschnitten des Kurses im Detail eingehen werden."),w.forEach(n)},m(T,w){o(T,u,w),t(u,b),t(u,m),t(m,_),t(u,g),t(u,c),t(c,h),t(u,j)},d(T){T&&n(u)}}}function lr(P){let u,b,m,_,g,c,h,j,T,w;return{c(){u=i("p"),b=r("\u{1F4A1} Wenn du dein Modell w\xE4hrend des Trainings automatisch in den Hub hochladen m\xF6chtest, kannst du in der Methode "),m=i("code"),_=r("model.fit()"),g=r(" einen "),c=i("code"),h=r("PushToHubCallback"),j=r(" mitgeben. Mehr dar\xFCber erfahren wir in "),T=i("a"),w=r("Kapitel 4"),this.h()},l(A){u=l(A,"P",{});var S=d(u);b=a(S,"\u{1F4A1} Wenn du dein Modell w\xE4hrend des Trainings automatisch in den Hub hochladen m\xF6chtest, kannst du in der Methode "),m=l(S,"CODE",{});var L=d(m);_=a(L,"model.fit()"),L.forEach(n),g=a(S," einen "),c=l(S,"CODE",{});var ae=d(c);h=a(ae,"PushToHubCallback"),ae.forEach(n),j=a(S," mitgeben. Mehr dar\xFCber erfahren wir in "),T=l(S,"A",{href:!0});var C=d(T);w=a(C,"Kapitel 4"),C.forEach(n),S.forEach(n),this.h()},h(){D(T,"href","/course/chapter4/3")},m(A,S){o(A,u,S),t(u,b),t(u,m),t(m,_),t(u,g),t(u,c),t(c,h),t(u,j),t(u,T),t(T,w)},d(A){A&&n(u)}}}function or(P){let u,b,m,_,g;return{c(){u=i("p"),b=r("\u270F\uFE0F "),m=i("strong"),_=r("Probier es aus!"),g=r(" Fein-tune ein Modell mit dem GLUE SST-2 Datensatz, indem du die Datenverarbeitung aus Abschnitt 2 verwendest.")},l(c){u=l(c,"P",{});var h=d(u);b=a(h,"\u270F\uFE0F "),m=l(h,"STRONG",{});var j=d(m);_=a(j,"Probier es aus!"),j.forEach(n),g=a(h," Fein-tune ein Modell mit dem GLUE SST-2 Datensatz, indem du die Datenverarbeitung aus Abschnitt 2 verwendest."),h.forEach(n)},m(c,h){o(c,u,h),t(u,b),t(u,m),t(m,_),t(u,g)},d(c){c&&n(u)}}}function dr(P){let u,b,m,_,g,c,h,j,T,w,A,S,L,ae,C,lt,Le,ot,dt,ie,ut,pt,fn,De,ft,mn,le,cn,W,N,Oe,oe,mt,Ve,ct,hn,Te,ht,gn,de,wn,Se,gt,bn,ue,_n,O,wt,ye,bt,_t,Be,$t,vt,$n,pe,vn,H,kt,Ae,zt,Et,kn,V,Mt,We,jt,Dt,xe,Tt,St,zn,I,En,fe,Mn,R,jn,x,Z,Ge,me,yt,Ue,At,Dn,ce,Tn,J,Pt,Ne,Ct,qt,Sn,y,Kt,He,Ft,Lt,Ie,Ot,Vt,Re,Bt,Wt,Ze,xt,Gt,Je,Ut,Nt,yn,he,An,Y,Pn,Pe,Ht,Cn,ge,qn,Q,It,Ye,Rt,Zt,Kn,we,Fn,X,Ln,G,ee,Qe,be,Jt,Xe,Yt,On,_e,Vn,B,Qt,en,Xt,es,nn,ns,ts,Bn,$e,Wn,ne,ss,tn,rs,as,xn,ve,Gn,ke,Un,te,is,sn,ls,os,Nn,ze,Hn,Ee,In,q,ds,Me,us,ps,rn,fs,ms,an,cs,hs,Rn,Ce,gs,Zn,se,Jn;return m=new sr({props:{fw:P[0]}}),j=new it({}),L=new tr({props:{chapter:3,classNames:"absolute z-10 right-0 top-0",notebooks:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/de/chapter3/section3_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/de/chapter3/section3_tf.ipynb"}]}}),le=new F({props:{code:`from datasets import load_dataset
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
)`}}),oe=new it({}),de=new at({props:{id:"rnTGBy2ax1c"}}),ue=new at({props:{id:"AUozVp78dhk"}}),pe=new F({props:{code:`from transformers import TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=2)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=<span class="hljs-number">2</span>)`}}),I=new pn({props:{$$slots:{default:[rr]},$$scope:{ctx:P}}}),fe=new F({props:{code:`from tensorflow.keras.losses import SparseCategoricalCrossentropy

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
)`}}),R=new pn({props:{warning:!0,$$slots:{default:[ar]},$$scope:{ctx:P}}}),me=new it({}),ce=new at({props:{id:"cpzq6ESSM5c"}}),he=new F({props:{code:`from tensorflow.keras.optimizers.schedules import PolynomialDecay

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

opt = Adam(learning_rate=lr_scheduler)`}}),Y=new pn({props:{$$slots:{default:[ir]},$$scope:{ctx:P}}}),ge=new F({props:{code:`import tensorflow as tf

model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=2)
loss = tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True)
model.compile(optimizer=opt, loss=loss, metrics=["accuracy"])`,highlighted:`<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=<span class="hljs-number">2</span>)
loss = tf.keras.losses.SparseCategoricalCrossentropy(from_logits=<span class="hljs-literal">True</span>)
model.<span class="hljs-built_in">compile</span>(optimizer=opt, loss=loss, metrics=[<span class="hljs-string">&quot;accuracy&quot;</span>])`}}),we=new F({props:{code:"model.fit(tf_train_dataset, validation_data=tf_validation_dataset, epochs=3)",highlighted:'model.fit(tf_train_dataset, validation_data=tf_validation_dataset, epochs=<span class="hljs-number">3</span>)'}}),X=new pn({props:{$$slots:{default:[lr]},$$scope:{ctx:P}}}),be=new it({}),_e=new at({props:{id:"nx10eh4CoOs"}}),$e=new F({props:{code:'preds = model.predict(tf_validation_dataset)["logits"]',highlighted:'preds = model.predict(tf_validation_dataset)[<span class="hljs-string">&quot;logits&quot;</span>]'}}),ve=new F({props:{code:`class_preds = np.argmax(preds, axis=1)
print(preds.shape, class_preds.shape)`,highlighted:`class_preds = np.argmax(preds, axis=<span class="hljs-number">1</span>)
<span class="hljs-built_in">print</span>(preds.shape, class_preds.shape)`}}),ke=new F({props:{code:"(408, 2) (408,)",highlighted:'(<span class="hljs-number">408</span>, <span class="hljs-number">2</span>) (<span class="hljs-number">408</span>,)'}}),ze=new F({props:{code:`import evaluate

metric = evaluate.load("glue", "mrpc")
metric.compute(predictions=class_preds, references=raw_datasets["validation"]["label"])`,highlighted:`<span class="hljs-keyword">import</span> evaluate

metric = evaluate.load(<span class="hljs-string">&quot;glue&quot;</span>, <span class="hljs-string">&quot;mrpc&quot;</span>)
metric.compute(predictions=class_preds, references=raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>][<span class="hljs-string">&quot;label&quot;</span>])`}}),Ee=new F({props:{code:"{'accuracy': 0.8578431372549019, 'f1': 0.8996539792387542}",highlighted:'{<span class="hljs-string">&#x27;accuracy&#x27;</span>: <span class="hljs-number">0.8578431372549019</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">0.8996539792387542</span>}'}}),se=new pn({props:{$$slots:{default:[or]},$$scope:{ctx:P}}}),{c(){u=i("meta"),b=p(),$(m.$$.fragment),_=p(),g=i("h1"),c=i("a"),h=i("span"),$(j.$$.fragment),T=p(),w=i("span"),A=r("Modell mit Keras fein-tunen"),S=p(),$(L.$$.fragment),ae=p(),C=i("p"),lt=r("Wenn du die Datenvorverarbeitung im letzten Abschnitt abgeschlossen hast, brauchst es nur noch wenige Schritte, um das Modell zu trainieren. Beachte jedoch, dass der Befehl "),Le=i("code"),ot=r("model.fit()"),dt=r(" auf einer CPU sehr langsam l\xE4uft. Wenn du keinen GPU hast, kannst du auf [Google Colab] ("),ie=i("a"),ut=r("https://colab.research.google.com/"),pt=r(") kostenlos auf GPUs und TPUs zugreifen."),fn=p(),De=i("p"),ft=r("Bei den folgenden Codebeispielen wird davon ausgegangen, dass du die Beispiele aus dem vorherigen Abschnitt bereits ausgef\xFChrt hast. Hier ist eine kurze Zusammenfassung, die aufzeigt was erwartet wird:"),mn=p(),$(le.$$.fragment),cn=p(),W=i("h3"),N=i("a"),Oe=i("span"),$(oe.$$.fragment),mt=p(),Ve=i("span"),ct=r("Training"),hn=p(),Te=i("p"),ht=r("Tensorflow Modelle, die von \u{1F917} Transformers importiert werden, sind bereits Keras Modelle. Hier ist eine kurze Einf\xFChrung in Keras."),gn=p(),$(de.$$.fragment),wn=p(),Se=i("p"),gt=r("Sobald wir die Daten haben, braucht es nur noch sehr wenig Arbeit, um mit dem Training zu beginnen."),bn=p(),$(ue.$$.fragment),_n=p(),O=i("p"),wt=r("Wie im "),ye=i("a"),bt=r("vorherigen Kapitel"),_t=r(" verwenden wir die Klasse "),Be=i("code"),$t=r("TFAutoModelForSequenceClassification"),vt=r(" mit zwei Labels:"),$n=p(),$(pe.$$.fragment),vn=p(),H=i("p"),kt=r("Im Gegensatz zu "),Ae=i("a"),zt=r("Kapitel 2"),Et=r(" wird eine Warnung angezeigt, nachdem das Modell instanziiert wurde. Das liegt daran, dass BERT nicht auf die Klassifizierung von Satzpaaren vortrainiert wurde. Deshalb wurde der Kopf des vortrainierten Modells verworfen und stattdessen ein neuer Kopf eingef\xFCgt, der f\xFCr die Klassifizierung von Sequenzen geeignet ist. Die Warnungen zeigen an, dass Teil der Gewichtung nicht verwendet wurden (die Gewichte f\xFCr den verworfenen Kopf) und dass einige andere zuf\xE4llig initialisiert wurden (die Gewichte f\xFCr den neuen Kopf). Abschlie\xDFend wirst du aufgefordert, das Modell zu trainieren, und genau das werden wir jetzt tun."),kn=p(),V=i("p"),Mt=r("Um das Modell mit unserem Datensatz fein-tunen zu k\xF6nnen, m\xFCssen wir das Modell "),We=i("code"),jt=r("kompilieren()"),Dt=r(" und unsere Daten an die "),xe=i("code"),Tt=r("fit()"),St=r("-Methode \xFCbergeben. Damit wird das Fein-tuning gestartet (dies sollte auf einer GPU ein paar Minuten dauern) und der Trainingsverlust sowie der Validierungsverlust am Ende jeder Epoche gemeldet."),zn=p(),$(I.$$.fragment),En=p(),$(fe.$$.fragment),Mn=p(),$(R.$$.fragment),jn=p(),x=i("h3"),Z=i("a"),Ge=i("span"),$(me.$$.fragment),yt=p(),Ue=i("span"),At=r("Verbesserung der Trainingsperformance"),Dn=p(),$(ce.$$.fragment),Tn=p(),J=i("p"),Pt=r("Wenn du den obigen Code ausprobierst, l\xE4uft er zwar, aber du wirst feststellen, dass der Verlust nur langsam oder sporadisch zur\xFCckgeht. Die Ursache hierf\xFCr ist die "),Ne=i("em"),Ct=r("Lernrate"),qt=r(". Wenn der Namen eines Optimierers als String an Keras \xFCbergeben wird, initialisiert Keras diesen Optimierer mit Standardwerten f\xFCr alle Parameter, einschlie\xDFlich der Lernrate. Aus langj\xE4hriger Erfahrung wissen wir, dass Transformer Modelle von einer wesentlich niedrigeren Lernrate profitieren als der Standardwert f\xFCr Adam. Dieser Standardwert liegt bei 1e-3, auch geschrieben als 10 hoch -3 oder 0,001. F\xFCr Transformer ist 5e-5 (0,00005), was etwa zwanzigmal niedriger ist, ist ein viel besserer Ausgangspunkt."),Sn=p(),y=i("p"),Kt=r("Zus\xE4tzlich zur Senkung der Lernrate haben wir noch einen zweiten Trick in petto: Wir k\xF6nnen die Lernrate langsam im Laufe des Trainings verringern. In der Literatur wird dies manchmal als "),He=i("em"),Ft=r("Decay"),Lt=r(" oder "),Ie=i("em"),Ot=r("Annealing"),Vt=r(" der Lernrate bezeichnet. In Keras kannst das am besten mit dem "),Re=i("em"),Bt=r("Lernraten-Scheduler"),Wt=r(" umgesetzt werden. Ein guter Scheduler ist "),Ze=i("code"),xt=r("PolynomialDecay"),Gt=r(" - trotz des Namens l\xE4sst er die Lernrate in den Standardeinstellungen einfach linear vom Anfangswert bis zum Endwert abfallen. Dies ist genau was wir wollen. Um einen Scheduler richtig zu nutzen, m\xFCssen wir ihm allerdings sagen, wie lange das Training dauern soll. Das berechnen wir im Folgenden als "),Je=i("code"),Ut=r("num_train_steps"),Nt=r("."),yn=p(),$(he.$$.fragment),An=p(),$(Y.$$.fragment),Pn=p(),Pe=i("p"),Ht=r("Somit haben wir einen neuen Optimierer definiert und k\xF6nnen ihn zum Training verwenden. Zuerst laden wir das Modell neu, um die \xC4nderungen an der Gewichtung aus dem letzten Trainingslauf zur\xFCckzusetzen, und dann k\xF6nnen wir es mit dem neuen Optimierer kompilieren:"),Cn=p(),$(ge.$$.fragment),qn=p(),Q=i("p"),It=r("Jetzt starten wir einen erneuten Trainingslauf mit "),Ye=i("code"),Rt=r("fit"),Zt=r(":"),Kn=p(),$(we.$$.fragment),Fn=p(),$(X.$$.fragment),Ln=p(),G=i("h3"),ee=i("a"),Qe=i("span"),$(be.$$.fragment),Jt=p(),Xe=i("span"),Yt=r("Modell-Vorhersagen"),On=p(),$(_e.$$.fragment),Vn=p(),B=i("p"),Qt=r("Trainieren und zusehen, wie der Verlust sinkt, ist ja ganz nett, aber was ist, wenn wir tats\xE4chlich die Ergebnisse des trainierten Modells erhalten wollen? Entweder um Metriken zu berechnen oder um das Modell in der Produktion einzusetzen. Daf\xFCr k\xF6nnen wir einfach die Methode "),en=i("code"),Xt=r("predict()"),es=r(" verwenden. Sie liefert uns die "),nn=i("em"),ns=r("Logits"),ts=r(" aus dem Ausgabekopf des Modells, und zwar eine pro Klasse."),Bn=p(),$($e.$$.fragment),Wn=p(),ne=i("p"),ss=r("Wir k\xF6nnen diese Logits in die Klassenvorhersagen des Modells umwandeln, indem wir "),tn=i("code"),rs=r("argmax"),as=r(" verwenden, um den h\xF6chsten Logit zu finden, der der wahrscheinlichsten Klasse entspricht:"),xn=p(),$(ve.$$.fragment),Gn=p(),$(ke.$$.fragment),Un=p(),te=i("p"),is=r("Nun k\xF6nnen wir diese Vorhersagen in "),sn=i("code"),ls=r("preds"),os=r(" nutzen, um einige Metriken zu berechnen! Wir k\xF6nnen die Metriken, die mit dem MRPC-Datensatz verbunden sind, genauso einfach laden, wie wir den Datensatz geladen haben, in diesem Fall mit der Funktion \u201Cevaluate.load()\u201C. Das zur\xFCckgegebene Objekt verf\xFCgt \xFCber eine Berechnungsmethode, mit der wir die Metrik berechnen k\xF6nnen:"),Nn=p(),$(ze.$$.fragment),Hn=p(),$(Ee.$$.fragment),In=p(),q=i("p"),ds=r("Die genauen Ergebnisse k\xF6nnen variieren, da die zuf\xE4llige Initialisierung des Modellkopfes die errechneten Metriken ver\xE4ndern kann. Das Modell erreicht \xFCber den Validierungsdaten eine Genauigkeit von 85,78 % und ein F1-Ma\xDF von 89,97. Dies sind die beiden Kennzahlen, die zur Bewertung der Ergebnisse des MRPC-Datensatzes f\xFCr das GLUE-Benchmark verwendet werden. In der Tabelle im [BERT-Paper] ("),Me=i("a"),us=r("https://arxiv.org/pdf/1810.04805.pdf"),ps=r(") wird f\xFCr das Basismodell ein F1-Ma\xDF von 88,9 angegeben. Dort wurde das "),rn=i("code"),fs=r("uncased"),ms=r(" Modell verwendet, w\xE4hrend wir hier das "),an=i("code"),cs=r("cased"),hs=r(" Modell verwenden, was das bessere Ergebnis erkl\xE4rt."),Rn=p(),Ce=i("p"),gs=r("Damit ist die Einf\xFChrung in das Fein-tunen mit der Keras-API abgeschlossen. Beispiele f\xFCr die g\xE4ngigsten CL-Aufgaben findest du in Kapitel 7."),Zn=p(),$(se.$$.fragment),this.h()},l(e){const s=er('[data-svelte="svelte-1phssyn"]',document.head);u=l(s,"META",{name:!0,content:!0}),s.forEach(n),b=f(e),v(m.$$.fragment,e),_=f(e),g=l(e,"H1",{class:!0});var je=d(g);c=l(je,"A",{id:!0,class:!0,href:!0});var ln=d(c);h=l(ln,"SPAN",{});var on=d(h);v(j.$$.fragment,on),on.forEach(n),ln.forEach(n),T=f(je),w=l(je,"SPAN",{});var dn=d(w);A=a(dn,"Modell mit Keras fein-tunen"),dn.forEach(n),je.forEach(n),S=f(e),v(L.$$.fragment,e),ae=f(e),C=l(e,"P",{});var U=d(C);lt=a(U,"Wenn du die Datenvorverarbeitung im letzten Abschnitt abgeschlossen hast, brauchst es nur noch wenige Schritte, um das Modell zu trainieren. Beachte jedoch, dass der Befehl "),Le=l(U,"CODE",{});var un=d(Le);ot=a(un,"model.fit()"),un.forEach(n),dt=a(U," auf einer CPU sehr langsam l\xE4uft. Wenn du keinen GPU hast, kannst du auf [Google Colab] ("),ie=l(U,"A",{href:!0,rel:!0});var ws=d(ie);ut=a(ws,"https://colab.research.google.com/"),ws.forEach(n),pt=a(U,") kostenlos auf GPUs und TPUs zugreifen."),U.forEach(n),fn=f(e),De=l(e,"P",{});var bs=d(De);ft=a(bs,"Bei den folgenden Codebeispielen wird davon ausgegangen, dass du die Beispiele aus dem vorherigen Abschnitt bereits ausgef\xFChrt hast. Hier ist eine kurze Zusammenfassung, die aufzeigt was erwartet wird:"),bs.forEach(n),mn=f(e),v(le.$$.fragment,e),cn=f(e),W=l(e,"H3",{class:!0});var Yn=d(W);N=l(Yn,"A",{id:!0,class:!0,href:!0});var _s=d(N);Oe=l(_s,"SPAN",{});var $s=d(Oe);v(oe.$$.fragment,$s),$s.forEach(n),_s.forEach(n),mt=f(Yn),Ve=l(Yn,"SPAN",{});var vs=d(Ve);ct=a(vs,"Training"),vs.forEach(n),Yn.forEach(n),hn=f(e),Te=l(e,"P",{});var ks=d(Te);ht=a(ks,"Tensorflow Modelle, die von \u{1F917} Transformers importiert werden, sind bereits Keras Modelle. Hier ist eine kurze Einf\xFChrung in Keras."),ks.forEach(n),gn=f(e),v(de.$$.fragment,e),wn=f(e),Se=l(e,"P",{});var zs=d(Se);gt=a(zs,"Sobald wir die Daten haben, braucht es nur noch sehr wenig Arbeit, um mit dem Training zu beginnen."),zs.forEach(n),bn=f(e),v(ue.$$.fragment,e),_n=f(e),O=l(e,"P",{});var qe=d(O);wt=a(qe,"Wie im "),ye=l(qe,"A",{href:!0});var Es=d(ye);bt=a(Es,"vorherigen Kapitel"),Es.forEach(n),_t=a(qe," verwenden wir die Klasse "),Be=l(qe,"CODE",{});var Ms=d(Be);$t=a(Ms,"TFAutoModelForSequenceClassification"),Ms.forEach(n),vt=a(qe," mit zwei Labels:"),qe.forEach(n),$n=f(e),v(pe.$$.fragment,e),vn=f(e),H=l(e,"P",{});var Qn=d(H);kt=a(Qn,"Im Gegensatz zu "),Ae=l(Qn,"A",{href:!0});var js=d(Ae);zt=a(js,"Kapitel 2"),js.forEach(n),Et=a(Qn," wird eine Warnung angezeigt, nachdem das Modell instanziiert wurde. Das liegt daran, dass BERT nicht auf die Klassifizierung von Satzpaaren vortrainiert wurde. Deshalb wurde der Kopf des vortrainierten Modells verworfen und stattdessen ein neuer Kopf eingef\xFCgt, der f\xFCr die Klassifizierung von Sequenzen geeignet ist. Die Warnungen zeigen an, dass Teil der Gewichtung nicht verwendet wurden (die Gewichte f\xFCr den verworfenen Kopf) und dass einige andere zuf\xE4llig initialisiert wurden (die Gewichte f\xFCr den neuen Kopf). Abschlie\xDFend wirst du aufgefordert, das Modell zu trainieren, und genau das werden wir jetzt tun."),Qn.forEach(n),kn=f(e),V=l(e,"P",{});var Ke=d(V);Mt=a(Ke,"Um das Modell mit unserem Datensatz fein-tunen zu k\xF6nnen, m\xFCssen wir das Modell "),We=l(Ke,"CODE",{});var Ds=d(We);jt=a(Ds,"kompilieren()"),Ds.forEach(n),Dt=a(Ke," und unsere Daten an die "),xe=l(Ke,"CODE",{});var Ts=d(xe);Tt=a(Ts,"fit()"),Ts.forEach(n),St=a(Ke,"-Methode \xFCbergeben. Damit wird das Fein-tuning gestartet (dies sollte auf einer GPU ein paar Minuten dauern) und der Trainingsverlust sowie der Validierungsverlust am Ende jeder Epoche gemeldet."),Ke.forEach(n),zn=f(e),v(I.$$.fragment,e),En=f(e),v(fe.$$.fragment,e),Mn=f(e),v(R.$$.fragment,e),jn=f(e),x=l(e,"H3",{class:!0});var Xn=d(x);Z=l(Xn,"A",{id:!0,class:!0,href:!0});var Ss=d(Z);Ge=l(Ss,"SPAN",{});var ys=d(Ge);v(me.$$.fragment,ys),ys.forEach(n),Ss.forEach(n),yt=f(Xn),Ue=l(Xn,"SPAN",{});var As=d(Ue);At=a(As,"Verbesserung der Trainingsperformance"),As.forEach(n),Xn.forEach(n),Dn=f(e),v(ce.$$.fragment,e),Tn=f(e),J=l(e,"P",{});var et=d(J);Pt=a(et,"Wenn du den obigen Code ausprobierst, l\xE4uft er zwar, aber du wirst feststellen, dass der Verlust nur langsam oder sporadisch zur\xFCckgeht. Die Ursache hierf\xFCr ist die "),Ne=l(et,"EM",{});var Ps=d(Ne);Ct=a(Ps,"Lernrate"),Ps.forEach(n),qt=a(et,". Wenn der Namen eines Optimierers als String an Keras \xFCbergeben wird, initialisiert Keras diesen Optimierer mit Standardwerten f\xFCr alle Parameter, einschlie\xDFlich der Lernrate. Aus langj\xE4hriger Erfahrung wissen wir, dass Transformer Modelle von einer wesentlich niedrigeren Lernrate profitieren als der Standardwert f\xFCr Adam. Dieser Standardwert liegt bei 1e-3, auch geschrieben als 10 hoch -3 oder 0,001. F\xFCr Transformer ist 5e-5 (0,00005), was etwa zwanzigmal niedriger ist, ist ein viel besserer Ausgangspunkt."),et.forEach(n),Sn=f(e),y=l(e,"P",{});var K=d(y);Kt=a(K,"Zus\xE4tzlich zur Senkung der Lernrate haben wir noch einen zweiten Trick in petto: Wir k\xF6nnen die Lernrate langsam im Laufe des Trainings verringern. In der Literatur wird dies manchmal als "),He=l(K,"EM",{});var Cs=d(He);Ft=a(Cs,"Decay"),Cs.forEach(n),Lt=a(K," oder "),Ie=l(K,"EM",{});var qs=d(Ie);Ot=a(qs,"Annealing"),qs.forEach(n),Vt=a(K," der Lernrate bezeichnet. In Keras kannst das am besten mit dem "),Re=l(K,"EM",{});var Ks=d(Re);Bt=a(Ks,"Lernraten-Scheduler"),Ks.forEach(n),Wt=a(K," umgesetzt werden. Ein guter Scheduler ist "),Ze=l(K,"CODE",{});var Fs=d(Ze);xt=a(Fs,"PolynomialDecay"),Fs.forEach(n),Gt=a(K," - trotz des Namens l\xE4sst er die Lernrate in den Standardeinstellungen einfach linear vom Anfangswert bis zum Endwert abfallen. Dies ist genau was wir wollen. Um einen Scheduler richtig zu nutzen, m\xFCssen wir ihm allerdings sagen, wie lange das Training dauern soll. Das berechnen wir im Folgenden als "),Je=l(K,"CODE",{});var Ls=d(Je);Ut=a(Ls,"num_train_steps"),Ls.forEach(n),Nt=a(K,"."),K.forEach(n),yn=f(e),v(he.$$.fragment,e),An=f(e),v(Y.$$.fragment,e),Pn=f(e),Pe=l(e,"P",{});var Os=d(Pe);Ht=a(Os,"Somit haben wir einen neuen Optimierer definiert und k\xF6nnen ihn zum Training verwenden. Zuerst laden wir das Modell neu, um die \xC4nderungen an der Gewichtung aus dem letzten Trainingslauf zur\xFCckzusetzen, und dann k\xF6nnen wir es mit dem neuen Optimierer kompilieren:"),Os.forEach(n),Cn=f(e),v(ge.$$.fragment,e),qn=f(e),Q=l(e,"P",{});var nt=d(Q);It=a(nt,"Jetzt starten wir einen erneuten Trainingslauf mit "),Ye=l(nt,"CODE",{});var Vs=d(Ye);Rt=a(Vs,"fit"),Vs.forEach(n),Zt=a(nt,":"),nt.forEach(n),Kn=f(e),v(we.$$.fragment,e),Fn=f(e),v(X.$$.fragment,e),Ln=f(e),G=l(e,"H3",{class:!0});var tt=d(G);ee=l(tt,"A",{id:!0,class:!0,href:!0});var Bs=d(ee);Qe=l(Bs,"SPAN",{});var Ws=d(Qe);v(be.$$.fragment,Ws),Ws.forEach(n),Bs.forEach(n),Jt=f(tt),Xe=l(tt,"SPAN",{});var xs=d(Xe);Yt=a(xs,"Modell-Vorhersagen"),xs.forEach(n),tt.forEach(n),On=f(e),v(_e.$$.fragment,e),Vn=f(e),B=l(e,"P",{});var Fe=d(B);Qt=a(Fe,"Trainieren und zusehen, wie der Verlust sinkt, ist ja ganz nett, aber was ist, wenn wir tats\xE4chlich die Ergebnisse des trainierten Modells erhalten wollen? Entweder um Metriken zu berechnen oder um das Modell in der Produktion einzusetzen. Daf\xFCr k\xF6nnen wir einfach die Methode "),en=l(Fe,"CODE",{});var Gs=d(en);Xt=a(Gs,"predict()"),Gs.forEach(n),es=a(Fe," verwenden. Sie liefert uns die "),nn=l(Fe,"EM",{});var Us=d(nn);ns=a(Us,"Logits"),Us.forEach(n),ts=a(Fe," aus dem Ausgabekopf des Modells, und zwar eine pro Klasse."),Fe.forEach(n),Bn=f(e),v($e.$$.fragment,e),Wn=f(e),ne=l(e,"P",{});var st=d(ne);ss=a(st,"Wir k\xF6nnen diese Logits in die Klassenvorhersagen des Modells umwandeln, indem wir "),tn=l(st,"CODE",{});var Ns=d(tn);rs=a(Ns,"argmax"),Ns.forEach(n),as=a(st," verwenden, um den h\xF6chsten Logit zu finden, der der wahrscheinlichsten Klasse entspricht:"),st.forEach(n),xn=f(e),v(ve.$$.fragment,e),Gn=f(e),v(ke.$$.fragment,e),Un=f(e),te=l(e,"P",{});var rt=d(te);is=a(rt,"Nun k\xF6nnen wir diese Vorhersagen in "),sn=l(rt,"CODE",{});var Hs=d(sn);ls=a(Hs,"preds"),Hs.forEach(n),os=a(rt," nutzen, um einige Metriken zu berechnen! Wir k\xF6nnen die Metriken, die mit dem MRPC-Datensatz verbunden sind, genauso einfach laden, wie wir den Datensatz geladen haben, in diesem Fall mit der Funktion \u201Cevaluate.load()\u201C. Das zur\xFCckgegebene Objekt verf\xFCgt \xFCber eine Berechnungsmethode, mit der wir die Metrik berechnen k\xF6nnen:"),rt.forEach(n),Nn=f(e),v(ze.$$.fragment,e),Hn=f(e),v(Ee.$$.fragment,e),In=f(e),q=l(e,"P",{});var re=d(q);ds=a(re,"Die genauen Ergebnisse k\xF6nnen variieren, da die zuf\xE4llige Initialisierung des Modellkopfes die errechneten Metriken ver\xE4ndern kann. Das Modell erreicht \xFCber den Validierungsdaten eine Genauigkeit von 85,78 % und ein F1-Ma\xDF von 89,97. Dies sind die beiden Kennzahlen, die zur Bewertung der Ergebnisse des MRPC-Datensatzes f\xFCr das GLUE-Benchmark verwendet werden. In der Tabelle im [BERT-Paper] ("),Me=l(re,"A",{href:!0,rel:!0});var Is=d(Me);us=a(Is,"https://arxiv.org/pdf/1810.04805.pdf"),Is.forEach(n),ps=a(re,") wird f\xFCr das Basismodell ein F1-Ma\xDF von 88,9 angegeben. Dort wurde das "),rn=l(re,"CODE",{});var Rs=d(rn);fs=a(Rs,"uncased"),Rs.forEach(n),ms=a(re," Modell verwendet, w\xE4hrend wir hier das "),an=l(re,"CODE",{});var Zs=d(an);cs=a(Zs,"cased"),Zs.forEach(n),hs=a(re," Modell verwenden, was das bessere Ergebnis erkl\xE4rt."),re.forEach(n),Rn=f(e),Ce=l(e,"P",{});var Js=d(Ce);gs=a(Js,"Damit ist die Einf\xFChrung in das Fein-tunen mit der Keras-API abgeschlossen. Beispiele f\xFCr die g\xE4ngigsten CL-Aufgaben findest du in Kapitel 7."),Js.forEach(n),Zn=f(e),v(se.$$.fragment,e),this.h()},h(){D(u,"name","hf:doc:metadata"),D(u,"content",JSON.stringify(ur)),D(c,"id","modell-mit-keras-feintunen"),D(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),D(c,"href","#modell-mit-keras-feintunen"),D(g,"class","relative group"),D(ie,"href","https://colab.research.google.com/"),D(ie,"rel","nofollow"),D(N,"id","training"),D(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),D(N,"href","#training"),D(W,"class","relative group"),D(ye,"href","/course/chapter2"),D(Ae,"href","/course/chapter2"),D(Z,"id","verbesserung-der-trainingsperformance"),D(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),D(Z,"href","#verbesserung-der-trainingsperformance"),D(x,"class","relative group"),D(ee,"id","modellvorhersagen"),D(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),D(ee,"href","#modellvorhersagen"),D(G,"class","relative group"),D(Me,"href","https://arxiv.org/pdf/1810.04805.pdf"),D(Me,"rel","nofollow")},m(e,s){t(document.head,u),o(e,b,s),k(m,e,s),o(e,_,s),o(e,g,s),t(g,c),t(c,h),k(j,h,null),t(g,T),t(g,w),t(w,A),o(e,S,s),k(L,e,s),o(e,ae,s),o(e,C,s),t(C,lt),t(C,Le),t(Le,ot),t(C,dt),t(C,ie),t(ie,ut),t(C,pt),o(e,fn,s),o(e,De,s),t(De,ft),o(e,mn,s),k(le,e,s),o(e,cn,s),o(e,W,s),t(W,N),t(N,Oe),k(oe,Oe,null),t(W,mt),t(W,Ve),t(Ve,ct),o(e,hn,s),o(e,Te,s),t(Te,ht),o(e,gn,s),k(de,e,s),o(e,wn,s),o(e,Se,s),t(Se,gt),o(e,bn,s),k(ue,e,s),o(e,_n,s),o(e,O,s),t(O,wt),t(O,ye),t(ye,bt),t(O,_t),t(O,Be),t(Be,$t),t(O,vt),o(e,$n,s),k(pe,e,s),o(e,vn,s),o(e,H,s),t(H,kt),t(H,Ae),t(Ae,zt),t(H,Et),o(e,kn,s),o(e,V,s),t(V,Mt),t(V,We),t(We,jt),t(V,Dt),t(V,xe),t(xe,Tt),t(V,St),o(e,zn,s),k(I,e,s),o(e,En,s),k(fe,e,s),o(e,Mn,s),k(R,e,s),o(e,jn,s),o(e,x,s),t(x,Z),t(Z,Ge),k(me,Ge,null),t(x,yt),t(x,Ue),t(Ue,At),o(e,Dn,s),k(ce,e,s),o(e,Tn,s),o(e,J,s),t(J,Pt),t(J,Ne),t(Ne,Ct),t(J,qt),o(e,Sn,s),o(e,y,s),t(y,Kt),t(y,He),t(He,Ft),t(y,Lt),t(y,Ie),t(Ie,Ot),t(y,Vt),t(y,Re),t(Re,Bt),t(y,Wt),t(y,Ze),t(Ze,xt),t(y,Gt),t(y,Je),t(Je,Ut),t(y,Nt),o(e,yn,s),k(he,e,s),o(e,An,s),k(Y,e,s),o(e,Pn,s),o(e,Pe,s),t(Pe,Ht),o(e,Cn,s),k(ge,e,s),o(e,qn,s),o(e,Q,s),t(Q,It),t(Q,Ye),t(Ye,Rt),t(Q,Zt),o(e,Kn,s),k(we,e,s),o(e,Fn,s),k(X,e,s),o(e,Ln,s),o(e,G,s),t(G,ee),t(ee,Qe),k(be,Qe,null),t(G,Jt),t(G,Xe),t(Xe,Yt),o(e,On,s),k(_e,e,s),o(e,Vn,s),o(e,B,s),t(B,Qt),t(B,en),t(en,Xt),t(B,es),t(B,nn),t(nn,ns),t(B,ts),o(e,Bn,s),k($e,e,s),o(e,Wn,s),o(e,ne,s),t(ne,ss),t(ne,tn),t(tn,rs),t(ne,as),o(e,xn,s),k(ve,e,s),o(e,Gn,s),k(ke,e,s),o(e,Un,s),o(e,te,s),t(te,is),t(te,sn),t(sn,ls),t(te,os),o(e,Nn,s),k(ze,e,s),o(e,Hn,s),k(Ee,e,s),o(e,In,s),o(e,q,s),t(q,ds),t(q,Me),t(Me,us),t(q,ps),t(q,rn),t(rn,fs),t(q,ms),t(q,an),t(an,cs),t(q,hs),o(e,Rn,s),o(e,Ce,s),t(Ce,gs),o(e,Zn,s),k(se,e,s),Jn=!0},p(e,[s]){const je={};s&1&&(je.fw=e[0]),m.$set(je);const ln={};s&2&&(ln.$$scope={dirty:s,ctx:e}),I.$set(ln);const on={};s&2&&(on.$$scope={dirty:s,ctx:e}),R.$set(on);const dn={};s&2&&(dn.$$scope={dirty:s,ctx:e}),Y.$set(dn);const U={};s&2&&(U.$$scope={dirty:s,ctx:e}),X.$set(U);const un={};s&2&&(un.$$scope={dirty:s,ctx:e}),se.$set(un)},i(e){Jn||(z(m.$$.fragment,e),z(j.$$.fragment,e),z(L.$$.fragment,e),z(le.$$.fragment,e),z(oe.$$.fragment,e),z(de.$$.fragment,e),z(ue.$$.fragment,e),z(pe.$$.fragment,e),z(I.$$.fragment,e),z(fe.$$.fragment,e),z(R.$$.fragment,e),z(me.$$.fragment,e),z(ce.$$.fragment,e),z(he.$$.fragment,e),z(Y.$$.fragment,e),z(ge.$$.fragment,e),z(we.$$.fragment,e),z(X.$$.fragment,e),z(be.$$.fragment,e),z(_e.$$.fragment,e),z($e.$$.fragment,e),z(ve.$$.fragment,e),z(ke.$$.fragment,e),z(ze.$$.fragment,e),z(Ee.$$.fragment,e),z(se.$$.fragment,e),Jn=!0)},o(e){E(m.$$.fragment,e),E(j.$$.fragment,e),E(L.$$.fragment,e),E(le.$$.fragment,e),E(oe.$$.fragment,e),E(de.$$.fragment,e),E(ue.$$.fragment,e),E(pe.$$.fragment,e),E(I.$$.fragment,e),E(fe.$$.fragment,e),E(R.$$.fragment,e),E(me.$$.fragment,e),E(ce.$$.fragment,e),E(he.$$.fragment,e),E(Y.$$.fragment,e),E(ge.$$.fragment,e),E(we.$$.fragment,e),E(X.$$.fragment,e),E(be.$$.fragment,e),E(_e.$$.fragment,e),E($e.$$.fragment,e),E(ve.$$.fragment,e),E(ke.$$.fragment,e),E(ze.$$.fragment,e),E(Ee.$$.fragment,e),E(se.$$.fragment,e),Jn=!1},d(e){n(u),e&&n(b),M(m,e),e&&n(_),e&&n(g),M(j),e&&n(S),M(L,e),e&&n(ae),e&&n(C),e&&n(fn),e&&n(De),e&&n(mn),M(le,e),e&&n(cn),e&&n(W),M(oe),e&&n(hn),e&&n(Te),e&&n(gn),M(de,e),e&&n(wn),e&&n(Se),e&&n(bn),M(ue,e),e&&n(_n),e&&n(O),e&&n($n),M(pe,e),e&&n(vn),e&&n(H),e&&n(kn),e&&n(V),e&&n(zn),M(I,e),e&&n(En),M(fe,e),e&&n(Mn),M(R,e),e&&n(jn),e&&n(x),M(me),e&&n(Dn),M(ce,e),e&&n(Tn),e&&n(J),e&&n(Sn),e&&n(y),e&&n(yn),M(he,e),e&&n(An),M(Y,e),e&&n(Pn),e&&n(Pe),e&&n(Cn),M(ge,e),e&&n(qn),e&&n(Q),e&&n(Kn),M(we,e),e&&n(Fn),M(X,e),e&&n(Ln),e&&n(G),M(be),e&&n(On),M(_e,e),e&&n(Vn),e&&n(B),e&&n(Bn),M($e,e),e&&n(Wn),e&&n(ne),e&&n(xn),M(ve,e),e&&n(Gn),M(ke,e),e&&n(Un),e&&n(te),e&&n(Nn),M(ze,e),e&&n(Hn),M(Ee,e),e&&n(In),e&&n(q),e&&n(Rn),e&&n(Ce),e&&n(Zn),M(se,e)}}}const ur={local:"modell-mit-keras-feintunen",sections:[{local:"training",title:"Training"},{local:"verbesserung-der-trainingsperformance",title:"Verbesserung der Trainingsperformance"},{local:"modellvorhersagen",title:"Modell-Vorhersagen"}],title:"Modell mit Keras fein-tunen"};function pr(P,u,b){let m="pt";return nr(()=>{const _=new URLSearchParams(window.location.search);b(0,m=_.get("fw")||"pt")}),[m]}class br extends Ys{constructor(u){super();Qs(this,u,pr,dr,Xs,{})}}export{br as default,ur as metadata};
