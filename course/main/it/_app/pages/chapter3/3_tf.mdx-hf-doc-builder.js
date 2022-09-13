import{S as Zo,i as ei,s as ai,e as l,k as c,w as _,t as i,M as ti,c as r,d as a,m,x as $,a as n,h as s,b as E,G as t,g as p,y as z,q as b,o as g,B as k,v as oi}from"../../chunks/vendor-hf-doc-builder.js";import{T as et}from"../../chunks/Tip-hf-doc-builder.js";import{Y as at}from"../../chunks/Youtube-hf-doc-builder.js";import{I as tt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as K}from"../../chunks/CodeBlock-hf-doc-builder.js";import{D as ii}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";import{F as si}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";function li(F){let d,q,u,P,v;return{c(){d=l("p"),q=i("I modelli \u{1F917} Transformers hanno un\u2019abilit\xE0 speciale che manca alla maggior parte dei modelli Keras \u2013 possono usare in maniera automatica una funzione obiettivo appropriata, calcolata internamente. Questa funzione obiettivo verr\xE0 usata di default a meno che non venga definito l\u2019argomento di funzione obiettivo nel metodo "),u=l("code"),P=i("compile()"),v=i(". Per usare la funzione obiettivo interna \xE8 necessario passare le etichette come parte dell\u2019input, non separatamente, che \xE8 l\u2019approccio normale con i modelli Keras. Verranno mostrati esempi di ci\xF2 nella Parte 2 del corso, dove definire la funzione obiettivo correttamente pu\xF2 essere difficile. Per la classificazione di sequenze, invece, la funzione obiettivo standard di Keras funziona bene, quindi verr\xE0 utilizzata quella.")},l(f){d=r(f,"P",{});var w=n(d);q=s(w,"I modelli \u{1F917} Transformers hanno un\u2019abilit\xE0 speciale che manca alla maggior parte dei modelli Keras \u2013 possono usare in maniera automatica una funzione obiettivo appropriata, calcolata internamente. Questa funzione obiettivo verr\xE0 usata di default a meno che non venga definito l\u2019argomento di funzione obiettivo nel metodo "),u=r(w,"CODE",{});var y=n(u);P=s(y,"compile()"),y.forEach(a),v=s(w,". Per usare la funzione obiettivo interna \xE8 necessario passare le etichette come parte dell\u2019input, non separatamente, che \xE8 l\u2019approccio normale con i modelli Keras. Verranno mostrati esempi di ci\xF2 nella Parte 2 del corso, dove definire la funzione obiettivo correttamente pu\xF2 essere difficile. Per la classificazione di sequenze, invece, la funzione obiettivo standard di Keras funziona bene, quindi verr\xE0 utilizzata quella."),w.forEach(a)},m(f,w){p(f,d,w),t(d,q),t(d,u),t(u,P),t(d,v)},d(f){f&&a(d)}}}function ri(F){let d,q,u,P,v,f,w,y;return{c(){d=l("p"),q=i("Attenzione ad un errore comune \u2014 si "),u=l("em"),P=i("pu\xF2"),v=i(" passare solo il nome della funzione obiettivo a Keras come una stringa, ma di default Keras si aspetta che softmax sia gi\xE0 stato applicato ai risultati. Molti modelli invece forniscono come risultato i valori prima dell\u2019applicazione del softmax, chiamati "),f=l("em"),w=i("logits"),y=i(". Bisogna informare la funzione obiettivo che il nostro modello fa esattamente questo, e il solo modo di farlo \xE8 invocandola direttamente, non tramite la stringa che rappresenta il suo nome.")},l(j){d=r(j,"P",{});var h=n(d);q=s(h,"Attenzione ad un errore comune \u2014 si "),u=r(h,"EM",{});var T=n(u);P=s(T,"pu\xF2"),T.forEach(a),v=s(h," passare solo il nome della funzione obiettivo a Keras come una stringa, ma di default Keras si aspetta che softmax sia gi\xE0 stato applicato ai risultati. Molti modelli invece forniscono come risultato i valori prima dell\u2019applicazione del softmax, chiamati "),f=r(h,"EM",{});var C=n(f);w=s(C,"logits"),C.forEach(a),y=s(h,". Bisogna informare la funzione obiettivo che il nostro modello fa esattamente questo, e il solo modo di farlo \xE8 invocandola direttamente, non tramite la stringa che rappresenta il suo nome."),h.forEach(a)},m(j,h){p(j,d,h),t(d,q),t(d,u),t(u,P),t(d,v),t(d,f),t(f,w),t(d,y)},d(j){j&&a(d)}}}function ni(F){let d,q,u,P,v,f,w,y;return{c(){d=l("p"),q=i("La libreria \u{1F917} Transformers fornisce anche una funzione "),u=l("code"),P=i("create_optimizer()"),v=i(" che crea un ottimizzatore "),f=l("code"),w=i("AdamW"),y=i(" con decadimento della learning rate. Questa pu\xF2 essere una scorciatoia utile che verr\xE0 presentata nel dettaglio nelle sezioni future del corso.")},l(j){d=r(j,"P",{});var h=n(d);q=s(h,"La libreria \u{1F917} Transformers fornisce anche una funzione "),u=r(h,"CODE",{});var T=n(u);P=s(T,"create_optimizer()"),T.forEach(a),v=s(h," che crea un ottimizzatore "),f=r(h,"CODE",{});var C=n(f);w=s(C,"AdamW"),C.forEach(a),y=s(h," con decadimento della learning rate. Questa pu\xF2 essere una scorciatoia utile che verr\xE0 presentata nel dettaglio nelle sezioni future del corso."),h.forEach(a)},m(j,h){p(j,d,h),t(d,q),t(d,u),t(u,P),t(d,v),t(d,f),t(f,w),t(d,y)},d(j){j&&a(d)}}}function pi(F){let d,q,u,P,v,f,w,y,j,h;return{c(){d=l("p"),q=i("\u{1F4A1} Se vuoi caricare il modello in maniera automatica all\u2019Hub durante l\u2019addestramento, puoi passare "),u=l("code"),P=i("PushToHubCallback"),v=i(" al metodo "),f=l("code"),w=i("model.fit()"),y=i(". Maggiori dettagli verranno forniti nel "),j=l("a"),h=i("Capitolo 4"),this.h()},l(T){d=r(T,"P",{});var C=n(d);q=s(C,"\u{1F4A1} Se vuoi caricare il modello in maniera automatica all\u2019Hub durante l\u2019addestramento, puoi passare "),u=r(C,"CODE",{});var O=n(u);P=s(O,"PushToHubCallback"),O.forEach(a),v=s(C," al metodo "),f=r(C,"CODE",{});var ie=n(f);w=s(ie,"model.fit()"),ie.forEach(a),y=s(C,". Maggiori dettagli verranno forniti nel "),j=r(C,"A",{href:!0});var S=n(j);h=s(S,"Capitolo 4"),S.forEach(a),C.forEach(a),this.h()},h(){E(j,"href","/course/chapter4/3")},m(T,C){p(T,d,C),t(d,q),t(d,u),t(u,P),t(d,v),t(d,f),t(f,w),t(d,y),t(d,j),t(j,h)},d(T){T&&a(d)}}}function di(F){let d,q,u,P,v,f,w,y,j,h,T,C,O,ie,S,ot,Ke,it,st,se,lt,rt,da,Pe,nt,ca,le,ma,U,B,Oe,re,pt,Le,dt,ua,ye,ct,fa,ne,ha,je,mt,va,pe,_a,L,ut,Ce,ft,ht,Ge,vt,_t,$a,de,za,R,$t,Ae,zt,bt,ba,G,gt,Ie,kt,Et,Ue,wt,qt,ga,W,ka,ce,Ea,V,wa,N,Y,Ne,me,Pt,Qe,yt,qa,ue,Pa,J,jt,He,Ct,At,ya,A,Tt,Be,St,Dt,Re,Mt,xt,We,Ft,Kt,Ve,Ot,Lt,Ye,Gt,It,ja,fe,Ca,X,Aa,Te,Ut,Ta,he,Sa,Se,Nt,Da,ve,Ma,Z,xa,Q,ee,Je,_e,Qt,Xe,Ht,Fa,$e,Ka,I,Bt,Ze,Rt,Wt,ea,Vt,Yt,Oa,ze,La,ae,Jt,aa,Xt,Zt,Ga,be,Ia,ge,Ua,D,eo,ta,ao,to,oa,oo,io,ia,so,lo,Na,ke,Qa,Ee,Ha,M,ro,we,no,po,sa,co,mo,la,uo,fo,Ba,De,ho,Ra;return u=new si({props:{fw:F[0]}}),y=new tt({}),O=new ii({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/it/chapter3/section3_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/it/chapter3/section3_tf.ipynb"}]}}),le=new K({props:{code:`from datasets import load_dataset
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
)`}}),re=new tt({}),ne=new at({props:{id:"rnTGBy2ax1c"}}),pe=new at({props:{id:"AUozVp78dhk"}}),de=new K({props:{code:`from transformers import TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=2)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=<span class="hljs-number">2</span>)`}}),W=new et({props:{$$slots:{default:[li]},$$scope:{ctx:F}}}),ce=new K({props:{code:`from tensorflow.keras.losses import SparseCategoricalCrossentropy

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
)`}}),V=new et({props:{warning:!0,$$slots:{default:[ri]},$$scope:{ctx:F}}}),me=new tt({}),ue=new at({props:{id:"cpzq6ESSM5c"}}),fe=new K({props:{code:`from tensorflow.keras.optimizers.schedules import PolynomialDecay

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

opt = Adam(learning_rate=lr_scheduler)`}}),X=new et({props:{$$slots:{default:[ni]},$$scope:{ctx:F}}}),he=new K({props:{code:`import tensorflow as tf

model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=2)
loss = tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True)
model.compile(optimizer=opt, loss=loss, metrics=["accuracy"])`,highlighted:`<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

model = TFAutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=<span class="hljs-number">2</span>)
loss = tf.keras.losses.SparseCategoricalCrossentropy(from_logits=<span class="hljs-literal">True</span>)
model.<span class="hljs-built_in">compile</span>(optimizer=opt, loss=loss, metrics=[<span class="hljs-string">&quot;accuracy&quot;</span>])`}}),ve=new K({props:{code:"model.fit(tf_train_dataset, validation_data=tf_validation_dataset, epochs=3)",highlighted:'model.fit(tf_train_dataset, validation_data=tf_validation_dataset, epochs=<span class="hljs-number">3</span>)'}}),Z=new et({props:{$$slots:{default:[pi]},$$scope:{ctx:F}}}),_e=new tt({}),$e=new at({props:{id:"nx10eh4CoOs"}}),ze=new K({props:{code:'preds = model.predict(tf_validation_dataset)["logits"]',highlighted:'preds = model.predict(tf_validation_dataset)[<span class="hljs-string">&quot;logits&quot;</span>]'}}),be=new K({props:{code:`class_preds = np.argmax(preds, axis=1)
print(preds.shape, class_preds.shape)`,highlighted:`class_preds = np.argmax(preds, axis=<span class="hljs-number">1</span>)
<span class="hljs-built_in">print</span>(preds.shape, class_preds.shape)`}}),ge=new K({props:{code:"(408, 2) (408,)",highlighted:'(<span class="hljs-number">408</span>, <span class="hljs-number">2</span>) (<span class="hljs-number">408</span>,)'}}),ke=new K({props:{code:`from datasets import load_metric

metric = load_metric("glue", "mrpc")
metric.compute(predictions=class_preds, references=raw_datasets["validation"]["label"])`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_metric

metric = load_metric(<span class="hljs-string">&quot;glue&quot;</span>, <span class="hljs-string">&quot;mrpc&quot;</span>)
metric.compute(predictions=class_preds, references=raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>][<span class="hljs-string">&quot;label&quot;</span>])`}}),Ee=new K({props:{code:"{'accuracy': 0.8578431372549019, 'f1': 0.8996539792387542}",highlighted:'{<span class="hljs-string">&#x27;accuracy&#x27;</span>: <span class="hljs-number">0.8578431372549019</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">0.8996539792387542</span>}'}}),{c(){d=l("meta"),q=c(),_(u.$$.fragment),P=c(),v=l("h1"),f=l("a"),w=l("span"),_(y.$$.fragment),j=c(),h=l("span"),T=i("Affinare un modell usando Keras"),C=c(),_(O.$$.fragment),ie=c(),S=l("p"),ot=i("Dopo tutto il lavoro di preprocessing nella sezione precedente, rimangono giusto gli ultimi passi per addestrare il modello. Attenzione tuttavia che il comando "),Ke=l("code"),it=i("model.fit()"),st=i(" sar\xE0 molto lento su una CPU. Se non avete una GPU a disposizione, potete avere accesso gratuitamente a GPU o TPU su "),se=l("a"),lt=i("Google Colab"),rt=i("."),da=c(),Pe=l("p"),nt=i("Gli esempi di codice qui sotto partono dal presupposto che gli esempi nella sezione precedente siano gi\xE0 stati eseguiti. Ecco un breve riassunto di cosa serve:"),ca=c(),_(le.$$.fragment),ma=c(),U=l("h3"),B=l("a"),Oe=l("span"),_(re.$$.fragment),pt=c(),Le=l("span"),dt=i("Addestramento"),ua=c(),ye=l("p"),ct=i("I modelli di TensorFlow importati da \u{1F917} Transformers sono gi\xE0 dei modelli Keras. Ecco una breve introduzione a Keras."),fa=c(),_(ne.$$.fragment),ha=c(),je=l("p"),mt=i("Ci\xF2 significa che una volta che si hanno i dati, \xE8 richiesto poco lavoro aggiuntivo per cominciare l\u2019addestramento."),va=c(),_(pe.$$.fragment),_a=c(),L=l("p"),ut=i("Come nel "),Ce=l("a"),ft=i("capitolo precedente"),ht=i(", verr\xE0 utilizzata la classe "),Ge=l("code"),vt=i("TFAutoModelForSequenceClassification"),_t=i(" con due etichette:"),$a=c(),_(de.$$.fragment),za=c(),R=l("p"),$t=i("Diversamente dal "),Ae=l("a"),zt=i("Capitolo 2"),bt=i(", un avviso di avvertimento verr\xE0 visualizzato dopo aver istanziato questo modello pre-addestrato. Ci\xF2 avviene perch\xE9 BERT non \xE8 stato pre-addestrato per classificare coppie di frasi, quindi la testa del modello pre-addestrato viene scartata e una nuova testa adeguata per il compito di classificazione di sequenze \xE8 stata inserita. Gli avvertimenti indicano che alcuni pesi non verranno usati (quelli corrispondenti alla testa scartata del modello pre-addestrato) e che altri pesi sono stati inizializzati con valori casuali (quelli per la nuova testa). L\u2019avvertimento viene concluso con un\u2019esortazione ad addestrare il modello, che \xE8 esattamente ci\xF2 che stiamo per fare."),ba=c(),G=l("p"),gt=i("Per affinare il modello sul dataset, bisogna solo chiamare "),Ie=l("code"),kt=i("compile()"),Et=i(" (compila) sul modello e passare i dati al metodo "),Ue=l("code"),wt=i("fit()"),qt=i(". Ci\xF2 far\xE0 partire il processo di affinamento (che dovrebbe richiedere un paio di minuti su una GPU) e fare il report della funzione obiettivo di addestramento, in aggiunta alla funzione obiettivo di validazione alla fine di ogni epoca."),ga=c(),_(W.$$.fragment),ka=c(),_(ce.$$.fragment),Ea=c(),_(V.$$.fragment),wa=c(),N=l("h3"),Y=l("a"),Ne=l("span"),_(me.$$.fragment),Pt=c(),Qe=l("span"),yt=i("Migliorare la performance di addestramento"),qa=c(),_(ue.$$.fragment),Pa=c(),J=l("p"),jt=i("Il codice presentato qui sopra sicuramente funziona, ma la funzione obiettivo scende in maniera molto lenta e sporadica. La causa principale di ci\xF2 \xE8 la "),He=l("em"),Ct=i("learning rate"),At=i(" (tasso di apprendimento). Come con la funzione obiettivo, quando si passa il nome di un ottimizzatore a Keras tramite una stringa, Keras inizializza quell\u2019ottimizzatore con i valori di default per tutti i parametri, inclusa la learning rate. Grazie alla nostra esperienza, per\xF2, sappiamo che i modelli transformer beneficiano da una learning rate molto pi\xF9 bassa del valore di default per Adam, che \xE8 1e-3, scritto anche come 10 alla -3, o 0.001. Il valore 5e-5 (0.00005), circa venti volte pi\xF9 basso, \xE8 un punto di partenza migliore."),ya=c(),A=l("p"),Tt=i("In aggiunta a diminuire la learning rate, abbiamo un secondo asso nella manica: possiamo ridurre lentamente la learning rate durante l\u2019addestramento. Nella letteratura, questo approccio viene spesso indicato come "),Be=l("em"),St=i("decaying"),Dt=i(" (decadimento) o "),Re=l("em"),Mt=i("annealing"),xt=i(" (ricottura) della learning rate. In Keras, il modo migliore per ottenere ci\xF2 \xE8 attraverso un "),We=l("em"),Ft=i("learning rate scheduler"),Kt=i(" (pianificatore del tasso di addestramento). Un buon esempio \xE8 "),Ve=l("code"),Ot=i("PolynomialDecay"),Lt=i(" (decadimento polinomiale) \u2014 nonostante il nome, con le impostazioni di default ha un semplice decadimento lineare dal valore iniziale a quello finale durante l\u2019addestramento, che \xE8 esattamente ci\xF2 che cerchiamo. Per utilizzare lo scheduler in maniera corretta, per\xF2, bisogna dirgli quanto lungo sar\xE0 l\u2019addestramento. Lo calcoliamo tramite la variabile "),Ye=l("code"),Gt=i("num_train_steps"),It=i(" nell\u2019esempio qui sotto."),ja=c(),_(fe.$$.fragment),Ca=c(),_(X.$$.fragment),Aa=c(),Te=l("p"),Ut=i("Adesso che abbiamo il nostro ottimizzatore nuovo di zecca, possiamo provare con un addestramento. Per prima cosa, ricarichiamo il modello, per resettare i cambiamenti ai pesi dall\u2019addestramento precedente, dopodich\xE9 lo possiamo compilare con nuovo ottimizzatore."),Ta=c(),_(he.$$.fragment),Sa=c(),Se=l("p"),Nt=i("Ora chiamiamo di nuovo fit"),Da=c(),_(ve.$$.fragment),Ma=c(),_(Z.$$.fragment),xa=c(),Q=l("h3"),ee=l("a"),Je=l("span"),_(_e.$$.fragment),Qt=c(),Xe=l("span"),Ht=i("Predizioni del modello"),Fa=c(),_($e.$$.fragment),Ka=c(),I=l("p"),Bt=i("Vedere la funzione obiettivo che diminuisce durante l\u2019addestramento \xE8 bello, ma se volessimo ottenere dei risultati dal modello addestrato, ad esempio per calcolare delle metriche o per usare il modello in produzione? Per questo, si pu\xF2 usare il metodo "),Ze=l("code"),Rt=i("predict()"),Wt=i(". Questo metodo restituisce i `"),ea=l("em"),Vt=i("logits"),Yt=i(" dalla testa del modello, uno per classe."),Oa=c(),_(ze.$$.fragment),La=c(),ae=l("p"),Jt=i("I logits possono essere convertiti nelle predizioni delle classi del modello usando "),aa=l("code"),Xt=i("argmax"),Zt=i(" per trovare il logit pi\xF9 grande, che corrisponde alla classe pi\xF9 probabile."),Ga=c(),_(be.$$.fragment),Ia=c(),_(ge.$$.fragment),Ua=c(),D=l("p"),eo=i("Ora usiamo le "),ta=l("code"),ao=i("preds"),to=i(" per calcolare delle metriche! Si possono caricare le metriche associate al dataset MRPC in maniera facile tanto quanto caricare il dataset in s\xE9, usando la funzione "),oa=l("code"),oo=i("load_metric()"),io=i(". L\u2019oggetto restituito ha un metodo "),ia=l("code"),so=i("compute()"),lo=i(" che pu\xF2 essere usato per calcolare le metriche."),Na=c(),_(ke.$$.fragment),Qa=c(),_(Ee.$$.fragment),Ha=c(),M=l("p"),ro=i("L\u2019esatto valore dei risultati ottenuti pu\xF2 variare, poich\xE9 l\u2019inizializzazione casuale della testa del modello pu\xF2 cambiare le metriche ottenute. Qui vediamo che il nostro modello ha una accuratezza del 87.78% sul validation set e valore F1 di 89.97. Queste sono le due metriche utilizzare per valutare risultati sul dataset MRPC per il benchmark GLUE. La tabella nell\u2019"),we=l("a"),no=i("articolo du BERT"),po=i(" riportava un valore F1 di 88.9 per il modello di base. Quello era il modello "),sa=l("code"),co=i("uncased"),mo=i(", mentre qui stiamo usando il modello "),la=l("code"),uo=i("cased"),fo=i(", il che spiega i migliori risultati."),Ba=c(),De=l("p"),ho=i("Questo conclude l\u2019introduzione all\u2019affinamento usando l\u2019API Keras. Un esempio per i compiti di NLP pi\xF9 comuni verr\xE0 fornito nel Capitolo 7. Per migliorare le vostre abilit\xE0 con l\u2019API Keras, provate ad affinare un modello sul dataset GLUE SST-2, usando il processing dei dati spiegato nella sezione 2."),this.h()},l(e){const o=ti('[data-svelte="svelte-1phssyn"]',document.head);d=r(o,"META",{name:!0,content:!0}),o.forEach(a),q=m(e),$(u.$$.fragment,e),P=m(e),v=r(e,"H1",{class:!0});var qe=n(v);f=r(qe,"A",{id:!0,class:!0,href:!0});var ra=n(f);w=r(ra,"SPAN",{});var na=n(w);$(y.$$.fragment,na),na.forEach(a),ra.forEach(a),j=m(qe),h=r(qe,"SPAN",{});var pa=n(h);T=s(pa,"Affinare un modell usando Keras"),pa.forEach(a),qe.forEach(a),C=m(e),$(O.$$.fragment,e),ie=m(e),S=r(e,"P",{});var H=n(S);ot=s(H,"Dopo tutto il lavoro di preprocessing nella sezione precedente, rimangono giusto gli ultimi passi per addestrare il modello. Attenzione tuttavia che il comando "),Ke=r(H,"CODE",{});var vo=n(Ke);it=s(vo,"model.fit()"),vo.forEach(a),st=s(H," sar\xE0 molto lento su una CPU. Se non avete una GPU a disposizione, potete avere accesso gratuitamente a GPU o TPU su "),se=r(H,"A",{href:!0,rel:!0});var _o=n(se);lt=s(_o,"Google Colab"),_o.forEach(a),rt=s(H,"."),H.forEach(a),da=m(e),Pe=r(e,"P",{});var $o=n(Pe);nt=s($o,"Gli esempi di codice qui sotto partono dal presupposto che gli esempi nella sezione precedente siano gi\xE0 stati eseguiti. Ecco un breve riassunto di cosa serve:"),$o.forEach(a),ca=m(e),$(le.$$.fragment,e),ma=m(e),U=r(e,"H3",{class:!0});var Wa=n(U);B=r(Wa,"A",{id:!0,class:!0,href:!0});var zo=n(B);Oe=r(zo,"SPAN",{});var bo=n(Oe);$(re.$$.fragment,bo),bo.forEach(a),zo.forEach(a),pt=m(Wa),Le=r(Wa,"SPAN",{});var go=n(Le);dt=s(go,"Addestramento"),go.forEach(a),Wa.forEach(a),ua=m(e),ye=r(e,"P",{});var ko=n(ye);ct=s(ko,"I modelli di TensorFlow importati da \u{1F917} Transformers sono gi\xE0 dei modelli Keras. Ecco una breve introduzione a Keras."),ko.forEach(a),fa=m(e),$(ne.$$.fragment,e),ha=m(e),je=r(e,"P",{});var Eo=n(je);mt=s(Eo,"Ci\xF2 significa che una volta che si hanno i dati, \xE8 richiesto poco lavoro aggiuntivo per cominciare l\u2019addestramento."),Eo.forEach(a),va=m(e),$(pe.$$.fragment,e),_a=m(e),L=r(e,"P",{});var Me=n(L);ut=s(Me,"Come nel "),Ce=r(Me,"A",{href:!0});var wo=n(Ce);ft=s(wo,"capitolo precedente"),wo.forEach(a),ht=s(Me,", verr\xE0 utilizzata la classe "),Ge=r(Me,"CODE",{});var qo=n(Ge);vt=s(qo,"TFAutoModelForSequenceClassification"),qo.forEach(a),_t=s(Me," con due etichette:"),Me.forEach(a),$a=m(e),$(de.$$.fragment,e),za=m(e),R=r(e,"P",{});var Va=n(R);$t=s(Va,"Diversamente dal "),Ae=r(Va,"A",{href:!0});var Po=n(Ae);zt=s(Po,"Capitolo 2"),Po.forEach(a),bt=s(Va,", un avviso di avvertimento verr\xE0 visualizzato dopo aver istanziato questo modello pre-addestrato. Ci\xF2 avviene perch\xE9 BERT non \xE8 stato pre-addestrato per classificare coppie di frasi, quindi la testa del modello pre-addestrato viene scartata e una nuova testa adeguata per il compito di classificazione di sequenze \xE8 stata inserita. Gli avvertimenti indicano che alcuni pesi non verranno usati (quelli corrispondenti alla testa scartata del modello pre-addestrato) e che altri pesi sono stati inizializzati con valori casuali (quelli per la nuova testa). L\u2019avvertimento viene concluso con un\u2019esortazione ad addestrare il modello, che \xE8 esattamente ci\xF2 che stiamo per fare."),Va.forEach(a),ba=m(e),G=r(e,"P",{});var xe=n(G);gt=s(xe,"Per affinare il modello sul dataset, bisogna solo chiamare "),Ie=r(xe,"CODE",{});var yo=n(Ie);kt=s(yo,"compile()"),yo.forEach(a),Et=s(xe," (compila) sul modello e passare i dati al metodo "),Ue=r(xe,"CODE",{});var jo=n(Ue);wt=s(jo,"fit()"),jo.forEach(a),qt=s(xe,". Ci\xF2 far\xE0 partire il processo di affinamento (che dovrebbe richiedere un paio di minuti su una GPU) e fare il report della funzione obiettivo di addestramento, in aggiunta alla funzione obiettivo di validazione alla fine di ogni epoca."),xe.forEach(a),ga=m(e),$(W.$$.fragment,e),ka=m(e),$(ce.$$.fragment,e),Ea=m(e),$(V.$$.fragment,e),wa=m(e),N=r(e,"H3",{class:!0});var Ya=n(N);Y=r(Ya,"A",{id:!0,class:!0,href:!0});var Co=n(Y);Ne=r(Co,"SPAN",{});var Ao=n(Ne);$(me.$$.fragment,Ao),Ao.forEach(a),Co.forEach(a),Pt=m(Ya),Qe=r(Ya,"SPAN",{});var To=n(Qe);yt=s(To,"Migliorare la performance di addestramento"),To.forEach(a),Ya.forEach(a),qa=m(e),$(ue.$$.fragment,e),Pa=m(e),J=r(e,"P",{});var Ja=n(J);jt=s(Ja,"Il codice presentato qui sopra sicuramente funziona, ma la funzione obiettivo scende in maniera molto lenta e sporadica. La causa principale di ci\xF2 \xE8 la "),He=r(Ja,"EM",{});var So=n(He);Ct=s(So,"learning rate"),So.forEach(a),At=s(Ja," (tasso di apprendimento). Come con la funzione obiettivo, quando si passa il nome di un ottimizzatore a Keras tramite una stringa, Keras inizializza quell\u2019ottimizzatore con i valori di default per tutti i parametri, inclusa la learning rate. Grazie alla nostra esperienza, per\xF2, sappiamo che i modelli transformer beneficiano da una learning rate molto pi\xF9 bassa del valore di default per Adam, che \xE8 1e-3, scritto anche come 10 alla -3, o 0.001. Il valore 5e-5 (0.00005), circa venti volte pi\xF9 basso, \xE8 un punto di partenza migliore."),Ja.forEach(a),ya=m(e),A=r(e,"P",{});var x=n(A);Tt=s(x,"In aggiunta a diminuire la learning rate, abbiamo un secondo asso nella manica: possiamo ridurre lentamente la learning rate durante l\u2019addestramento. Nella letteratura, questo approccio viene spesso indicato come "),Be=r(x,"EM",{});var Do=n(Be);St=s(Do,"decaying"),Do.forEach(a),Dt=s(x," (decadimento) o "),Re=r(x,"EM",{});var Mo=n(Re);Mt=s(Mo,"annealing"),Mo.forEach(a),xt=s(x," (ricottura) della learning rate. In Keras, il modo migliore per ottenere ci\xF2 \xE8 attraverso un "),We=r(x,"EM",{});var xo=n(We);Ft=s(xo,"learning rate scheduler"),xo.forEach(a),Kt=s(x," (pianificatore del tasso di addestramento). Un buon esempio \xE8 "),Ve=r(x,"CODE",{});var Fo=n(Ve);Ot=s(Fo,"PolynomialDecay"),Fo.forEach(a),Lt=s(x," (decadimento polinomiale) \u2014 nonostante il nome, con le impostazioni di default ha un semplice decadimento lineare dal valore iniziale a quello finale durante l\u2019addestramento, che \xE8 esattamente ci\xF2 che cerchiamo. Per utilizzare lo scheduler in maniera corretta, per\xF2, bisogna dirgli quanto lungo sar\xE0 l\u2019addestramento. Lo calcoliamo tramite la variabile "),Ye=r(x,"CODE",{});var Ko=n(Ye);Gt=s(Ko,"num_train_steps"),Ko.forEach(a),It=s(x," nell\u2019esempio qui sotto."),x.forEach(a),ja=m(e),$(fe.$$.fragment,e),Ca=m(e),$(X.$$.fragment,e),Aa=m(e),Te=r(e,"P",{});var Oo=n(Te);Ut=s(Oo,"Adesso che abbiamo il nostro ottimizzatore nuovo di zecca, possiamo provare con un addestramento. Per prima cosa, ricarichiamo il modello, per resettare i cambiamenti ai pesi dall\u2019addestramento precedente, dopodich\xE9 lo possiamo compilare con nuovo ottimizzatore."),Oo.forEach(a),Ta=m(e),$(he.$$.fragment,e),Sa=m(e),Se=r(e,"P",{});var Lo=n(Se);Nt=s(Lo,"Ora chiamiamo di nuovo fit"),Lo.forEach(a),Da=m(e),$(ve.$$.fragment,e),Ma=m(e),$(Z.$$.fragment,e),xa=m(e),Q=r(e,"H3",{class:!0});var Xa=n(Q);ee=r(Xa,"A",{id:!0,class:!0,href:!0});var Go=n(ee);Je=r(Go,"SPAN",{});var Io=n(Je);$(_e.$$.fragment,Io),Io.forEach(a),Go.forEach(a),Qt=m(Xa),Xe=r(Xa,"SPAN",{});var Uo=n(Xe);Ht=s(Uo,"Predizioni del modello"),Uo.forEach(a),Xa.forEach(a),Fa=m(e),$($e.$$.fragment,e),Ka=m(e),I=r(e,"P",{});var Fe=n(I);Bt=s(Fe,"Vedere la funzione obiettivo che diminuisce durante l\u2019addestramento \xE8 bello, ma se volessimo ottenere dei risultati dal modello addestrato, ad esempio per calcolare delle metriche o per usare il modello in produzione? Per questo, si pu\xF2 usare il metodo "),Ze=r(Fe,"CODE",{});var No=n(Ze);Rt=s(No,"predict()"),No.forEach(a),Wt=s(Fe,". Questo metodo restituisce i `"),ea=r(Fe,"EM",{});var Qo=n(ea);Vt=s(Qo,"logits"),Qo.forEach(a),Yt=s(Fe," dalla testa del modello, uno per classe."),Fe.forEach(a),Oa=m(e),$(ze.$$.fragment,e),La=m(e),ae=r(e,"P",{});var Za=n(ae);Jt=s(Za,"I logits possono essere convertiti nelle predizioni delle classi del modello usando "),aa=r(Za,"CODE",{});var Ho=n(aa);Xt=s(Ho,"argmax"),Ho.forEach(a),Zt=s(Za," per trovare il logit pi\xF9 grande, che corrisponde alla classe pi\xF9 probabile."),Za.forEach(a),Ga=m(e),$(be.$$.fragment,e),Ia=m(e),$(ge.$$.fragment,e),Ua=m(e),D=r(e,"P",{});var te=n(D);eo=s(te,"Ora usiamo le "),ta=r(te,"CODE",{});var Bo=n(ta);ao=s(Bo,"preds"),Bo.forEach(a),to=s(te," per calcolare delle metriche! Si possono caricare le metriche associate al dataset MRPC in maniera facile tanto quanto caricare il dataset in s\xE9, usando la funzione "),oa=r(te,"CODE",{});var Ro=n(oa);oo=s(Ro,"load_metric()"),Ro.forEach(a),io=s(te,". L\u2019oggetto restituito ha un metodo "),ia=r(te,"CODE",{});var Wo=n(ia);so=s(Wo,"compute()"),Wo.forEach(a),lo=s(te," che pu\xF2 essere usato per calcolare le metriche."),te.forEach(a),Na=m(e),$(ke.$$.fragment,e),Qa=m(e),$(Ee.$$.fragment,e),Ha=m(e),M=r(e,"P",{});var oe=n(M);ro=s(oe,"L\u2019esatto valore dei risultati ottenuti pu\xF2 variare, poich\xE9 l\u2019inizializzazione casuale della testa del modello pu\xF2 cambiare le metriche ottenute. Qui vediamo che il nostro modello ha una accuratezza del 87.78% sul validation set e valore F1 di 89.97. Queste sono le due metriche utilizzare per valutare risultati sul dataset MRPC per il benchmark GLUE. La tabella nell\u2019"),we=r(oe,"A",{href:!0,rel:!0});var Vo=n(we);no=s(Vo,"articolo du BERT"),Vo.forEach(a),po=s(oe," riportava un valore F1 di 88.9 per il modello di base. Quello era il modello "),sa=r(oe,"CODE",{});var Yo=n(sa);co=s(Yo,"uncased"),Yo.forEach(a),mo=s(oe,", mentre qui stiamo usando il modello "),la=r(oe,"CODE",{});var Jo=n(la);uo=s(Jo,"cased"),Jo.forEach(a),fo=s(oe,", il che spiega i migliori risultati."),oe.forEach(a),Ba=m(e),De=r(e,"P",{});var Xo=n(De);ho=s(Xo,"Questo conclude l\u2019introduzione all\u2019affinamento usando l\u2019API Keras. Un esempio per i compiti di NLP pi\xF9 comuni verr\xE0 fornito nel Capitolo 7. Per migliorare le vostre abilit\xE0 con l\u2019API Keras, provate ad affinare un modello sul dataset GLUE SST-2, usando il processing dei dati spiegato nella sezione 2."),Xo.forEach(a),this.h()},h(){E(d,"name","hf:doc:metadata"),E(d,"content",JSON.stringify(ci)),E(f,"id","affinare-un-modell-usando-keras"),E(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),E(f,"href","#affinare-un-modell-usando-keras"),E(v,"class","relative group"),E(se,"href","https://colab.research.google.com/"),E(se,"rel","nofollow"),E(B,"id","addestramento"),E(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),E(B,"href","#addestramento"),E(U,"class","relative group"),E(Ce,"href","/course/chapter2"),E(Ae,"href","/course/chapter2"),E(Y,"id","migliorare-la-performance-di-addestramento"),E(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),E(Y,"href","#migliorare-la-performance-di-addestramento"),E(N,"class","relative group"),E(ee,"id","predizioni-del-modello"),E(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),E(ee,"href","#predizioni-del-modello"),E(Q,"class","relative group"),E(we,"href","https://arxiv.org/pdf/1810.04805.pdf"),E(we,"rel","nofollow")},m(e,o){t(document.head,d),p(e,q,o),z(u,e,o),p(e,P,o),p(e,v,o),t(v,f),t(f,w),z(y,w,null),t(v,j),t(v,h),t(h,T),p(e,C,o),z(O,e,o),p(e,ie,o),p(e,S,o),t(S,ot),t(S,Ke),t(Ke,it),t(S,st),t(S,se),t(se,lt),t(S,rt),p(e,da,o),p(e,Pe,o),t(Pe,nt),p(e,ca,o),z(le,e,o),p(e,ma,o),p(e,U,o),t(U,B),t(B,Oe),z(re,Oe,null),t(U,pt),t(U,Le),t(Le,dt),p(e,ua,o),p(e,ye,o),t(ye,ct),p(e,fa,o),z(ne,e,o),p(e,ha,o),p(e,je,o),t(je,mt),p(e,va,o),z(pe,e,o),p(e,_a,o),p(e,L,o),t(L,ut),t(L,Ce),t(Ce,ft),t(L,ht),t(L,Ge),t(Ge,vt),t(L,_t),p(e,$a,o),z(de,e,o),p(e,za,o),p(e,R,o),t(R,$t),t(R,Ae),t(Ae,zt),t(R,bt),p(e,ba,o),p(e,G,o),t(G,gt),t(G,Ie),t(Ie,kt),t(G,Et),t(G,Ue),t(Ue,wt),t(G,qt),p(e,ga,o),z(W,e,o),p(e,ka,o),z(ce,e,o),p(e,Ea,o),z(V,e,o),p(e,wa,o),p(e,N,o),t(N,Y),t(Y,Ne),z(me,Ne,null),t(N,Pt),t(N,Qe),t(Qe,yt),p(e,qa,o),z(ue,e,o),p(e,Pa,o),p(e,J,o),t(J,jt),t(J,He),t(He,Ct),t(J,At),p(e,ya,o),p(e,A,o),t(A,Tt),t(A,Be),t(Be,St),t(A,Dt),t(A,Re),t(Re,Mt),t(A,xt),t(A,We),t(We,Ft),t(A,Kt),t(A,Ve),t(Ve,Ot),t(A,Lt),t(A,Ye),t(Ye,Gt),t(A,It),p(e,ja,o),z(fe,e,o),p(e,Ca,o),z(X,e,o),p(e,Aa,o),p(e,Te,o),t(Te,Ut),p(e,Ta,o),z(he,e,o),p(e,Sa,o),p(e,Se,o),t(Se,Nt),p(e,Da,o),z(ve,e,o),p(e,Ma,o),z(Z,e,o),p(e,xa,o),p(e,Q,o),t(Q,ee),t(ee,Je),z(_e,Je,null),t(Q,Qt),t(Q,Xe),t(Xe,Ht),p(e,Fa,o),z($e,e,o),p(e,Ka,o),p(e,I,o),t(I,Bt),t(I,Ze),t(Ze,Rt),t(I,Wt),t(I,ea),t(ea,Vt),t(I,Yt),p(e,Oa,o),z(ze,e,o),p(e,La,o),p(e,ae,o),t(ae,Jt),t(ae,aa),t(aa,Xt),t(ae,Zt),p(e,Ga,o),z(be,e,o),p(e,Ia,o),z(ge,e,o),p(e,Ua,o),p(e,D,o),t(D,eo),t(D,ta),t(ta,ao),t(D,to),t(D,oa),t(oa,oo),t(D,io),t(D,ia),t(ia,so),t(D,lo),p(e,Na,o),z(ke,e,o),p(e,Qa,o),z(Ee,e,o),p(e,Ha,o),p(e,M,o),t(M,ro),t(M,we),t(we,no),t(M,po),t(M,sa),t(sa,co),t(M,mo),t(M,la),t(la,uo),t(M,fo),p(e,Ba,o),p(e,De,o),t(De,ho),Ra=!0},p(e,[o]){const qe={};o&1&&(qe.fw=e[0]),u.$set(qe);const ra={};o&2&&(ra.$$scope={dirty:o,ctx:e}),W.$set(ra);const na={};o&2&&(na.$$scope={dirty:o,ctx:e}),V.$set(na);const pa={};o&2&&(pa.$$scope={dirty:o,ctx:e}),X.$set(pa);const H={};o&2&&(H.$$scope={dirty:o,ctx:e}),Z.$set(H)},i(e){Ra||(b(u.$$.fragment,e),b(y.$$.fragment,e),b(O.$$.fragment,e),b(le.$$.fragment,e),b(re.$$.fragment,e),b(ne.$$.fragment,e),b(pe.$$.fragment,e),b(de.$$.fragment,e),b(W.$$.fragment,e),b(ce.$$.fragment,e),b(V.$$.fragment,e),b(me.$$.fragment,e),b(ue.$$.fragment,e),b(fe.$$.fragment,e),b(X.$$.fragment,e),b(he.$$.fragment,e),b(ve.$$.fragment,e),b(Z.$$.fragment,e),b(_e.$$.fragment,e),b($e.$$.fragment,e),b(ze.$$.fragment,e),b(be.$$.fragment,e),b(ge.$$.fragment,e),b(ke.$$.fragment,e),b(Ee.$$.fragment,e),Ra=!0)},o(e){g(u.$$.fragment,e),g(y.$$.fragment,e),g(O.$$.fragment,e),g(le.$$.fragment,e),g(re.$$.fragment,e),g(ne.$$.fragment,e),g(pe.$$.fragment,e),g(de.$$.fragment,e),g(W.$$.fragment,e),g(ce.$$.fragment,e),g(V.$$.fragment,e),g(me.$$.fragment,e),g(ue.$$.fragment,e),g(fe.$$.fragment,e),g(X.$$.fragment,e),g(he.$$.fragment,e),g(ve.$$.fragment,e),g(Z.$$.fragment,e),g(_e.$$.fragment,e),g($e.$$.fragment,e),g(ze.$$.fragment,e),g(be.$$.fragment,e),g(ge.$$.fragment,e),g(ke.$$.fragment,e),g(Ee.$$.fragment,e),Ra=!1},d(e){a(d),e&&a(q),k(u,e),e&&a(P),e&&a(v),k(y),e&&a(C),k(O,e),e&&a(ie),e&&a(S),e&&a(da),e&&a(Pe),e&&a(ca),k(le,e),e&&a(ma),e&&a(U),k(re),e&&a(ua),e&&a(ye),e&&a(fa),k(ne,e),e&&a(ha),e&&a(je),e&&a(va),k(pe,e),e&&a(_a),e&&a(L),e&&a($a),k(de,e),e&&a(za),e&&a(R),e&&a(ba),e&&a(G),e&&a(ga),k(W,e),e&&a(ka),k(ce,e),e&&a(Ea),k(V,e),e&&a(wa),e&&a(N),k(me),e&&a(qa),k(ue,e),e&&a(Pa),e&&a(J),e&&a(ya),e&&a(A),e&&a(ja),k(fe,e),e&&a(Ca),k(X,e),e&&a(Aa),e&&a(Te),e&&a(Ta),k(he,e),e&&a(Sa),e&&a(Se),e&&a(Da),k(ve,e),e&&a(Ma),k(Z,e),e&&a(xa),e&&a(Q),k(_e),e&&a(Fa),k($e,e),e&&a(Ka),e&&a(I),e&&a(Oa),k(ze,e),e&&a(La),e&&a(ae),e&&a(Ga),k(be,e),e&&a(Ia),k(ge,e),e&&a(Ua),e&&a(D),e&&a(Na),k(ke,e),e&&a(Qa),k(Ee,e),e&&a(Ha),e&&a(M),e&&a(Ba),e&&a(De)}}}const ci={local:"affinare-un-modell-usando-keras",sections:[{local:"addestramento",title:"Addestramento"},{local:"migliorare-la-performance-di-addestramento",title:"Migliorare la performance di addestramento"},{local:"predizioni-del-modello",title:"Predizioni del modello"}],title:"Affinare un modell usando Keras"};function mi(F,d,q){let u="pt";return oi(()=>{const P=new URLSearchParams(window.location.search);q(0,u=P.get("fw")||"pt")}),[u]}class bi extends Zo{constructor(d){super();ei(this,d,mi,di,ai,{})}}export{bi as default,ci as metadata};
