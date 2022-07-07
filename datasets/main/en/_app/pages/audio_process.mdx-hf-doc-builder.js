import{S as cs,i as is,s as us,e as t,k as u,w as x,t as n,M as hs,c as o,d as s,m as h,a as r,x as P,h as l,b as c,N as ps,G as a,g as i,y as z,L as ds,q as S,o as T,B as C,v as fs}from"../chunks/vendor-hf-doc-builder.js";import{I as Ia}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as ge}from"../chunks/CodeBlock-hf-doc-builder.js";function ms(Na){let _,ve,g,y,le,D,Be,pe,Je,ke,V,Ke,je,$,ce,Ve,Qe,I,Xe,Q,Ye,Ze,ye,b,ea,X,aa,sa,$e,v,w,ie,N,ta,ue,oa,be,f,ra,Y,na,la,Z,pa,ca,we,F,Ae,ee,ia,Ee,L,qe,k,ae,Fa,ua,se,La,xe,j,A,he,U,ha,de,da,Pe,d,fa,te,ma,_a,M,ga,va,O,ka,ja,ze,E,H,W,ya,fe,$a,ba,wa,G,Aa,R,B,Ea,me,qa,xa,Pa,J,Se,m,za,oe,Sa,Ta,_e,Ca,Da,Te,K,Ce;return D=new Ia({}),N=new Ia({}),F=new ge({props:{code:`from datasets import load_dataset, Audio

dataset = load_dataset("PolyAI/minds14", "en-US", split="train")
dataset = dataset.cast_column("audio", Audio(sampling_rate=16000))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, Audio

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;PolyAI/minds14&quot;</span>, <span class="hljs-string">&quot;en-US&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.cast_column(<span class="hljs-string">&quot;audio&quot;</span>, Audio(sampling_rate=<span class="hljs-number">16000</span>))`}}),L=new ge({props:{code:'dataset[0]["audio"]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>]
{<span class="hljs-string">&#x27;array&#x27;</span>: array([ <span class="hljs-number">2.3443763e-05</span>,  <span class="hljs-number">2.1729663e-04</span>,  <span class="hljs-number">2.2145823e-04</span>, ...,
         <span class="hljs-number">3.8356509e-05</span>, -<span class="hljs-number">7.3497440e-06</span>, -<span class="hljs-number">2.1754686e-05</span>], dtype=float32),
 <span class="hljs-string">&#x27;path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/f14948e0e84be638dd7943ac36518a4cf3324e8b7aa331c5ab11541518e9368c/en-US~JOINT_ACCOUNT/602ba55abb1e6d0fbce92065.wav&#x27;</span>,
 <span class="hljs-string">&#x27;sampling_rate&#x27;</span>: <span class="hljs-number">16000</span>}`}}),U=new Ia({}),G=new ge({props:{code:`from transformers import AutoTokenizer, AutoFeatureExtractor, AutoProcessor

model_checkpoint = "facebook/wav2vec2-large-xlsr-53"
tokenizer = AutoTokenizer("./vocab.json", unk_token="[UNK]", pad_token="[PAD]", word_delimiter_token="|")
feature_extractor = AutoFeatureExtractor.from_pretrained(model_checkpoint)
processor = AutoProcessor.from_pretrained(feature_extractor=feature_extractor, tokenizer=tokenizer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoFeatureExtractor, AutoProcessor

<span class="hljs-meta">&gt;&gt;&gt; </span>model_checkpoint = <span class="hljs-string">&quot;facebook/wav2vec2-large-xlsr-53&quot;</span>
<span class="hljs-comment"># after defining a vocab.json file you can instantiate a tokenizer object:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer(<span class="hljs-string">&quot;./vocab.json&quot;</span>, unk_token=<span class="hljs-string">&quot;[UNK]&quot;</span>, pad_token=<span class="hljs-string">&quot;[PAD]&quot;</span>, word_delimiter_token=<span class="hljs-string">&quot;|&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(model_checkpoint)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(feature_extractor=feature_extractor, tokenizer=tokenizer)`}}),J=new ge({props:{code:`from transformers import AutoProcessor

processor = AutoProcessor.from_pretrained("facebook/wav2vec2-base-960h")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)`}}),K=new ge({props:{code:`def prepare_dataset(batch):
    audio = batch["audio"]
    batch["input_values"] = processor(audio["array"], sampling_rate=audio["sampling_rate"]).input_values[0]
    batch["input_length"] = len(batch["input_values"])
    with processor.as_target_processor():
        batch["labels"] = processor(batch["sentence"]).input_ids
    return batch
dataset = dataset.map(prepare_dataset, remove_columns=dataset.column_names)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">prepare_dataset</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    audio = batch[<span class="hljs-string">&quot;audio&quot;</span>]
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;input_values&quot;</span>] = processor(audio[<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=audio[<span class="hljs-string">&quot;sampling_rate&quot;</span>]).input_values[<span class="hljs-number">0</span>]
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;input_length&quot;</span>] = <span class="hljs-built_in">len</span>(batch[<span class="hljs-string">&quot;input_values&quot;</span>])
<span class="hljs-meta">... </span>    <span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>        batch[<span class="hljs-string">&quot;labels&quot;</span>] = processor(batch[<span class="hljs-string">&quot;sentence&quot;</span>]).input_ids
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.<span class="hljs-built_in">map</span>(prepare_dataset, remove_columns=dataset.column_names)`}}),{c(){_=t("meta"),ve=u(),g=t("h1"),y=t("a"),le=t("span"),x(D.$$.fragment),Be=u(),pe=t("span"),Je=n("Process audio data"),ke=u(),V=t("p"),Ke=n("This guide shows specific methods for processing audio datasets. Learn how to:"),je=u(),$=t("ul"),ce=t("li"),Ve=n("Resample the sampling rate."),Qe=u(),I=t("li"),Xe=n("Use "),Q=t("a"),Ye=n("map()"),Ze=n(" with audio datasets."),ye=u(),b=t("p"),ea=n("For a guide on how to process any type of dataset, take a look at the "),X=t("a"),aa=n("general process guide"),sa=n("."),$e=u(),v=t("h2"),w=t("a"),ie=t("span"),x(N.$$.fragment),ta=u(),ue=t("span"),oa=n("Cast"),be=u(),f=t("p"),ra=n("The "),Y=t("a"),na=n("cast_column()"),la=n(" function is used to cast a column to another feature to be decoded. When you use this function with the "),Z=t("a"),pa=n("Audio"),ca=n(" feature, you can resample the sampling rate:"),we=u(),x(F.$$.fragment),Ae=u(),ee=t("p"),ia=n("Audio files are decoded and resampled on-the-fly, so the next time you access an example, the audio file is resampled to 16kHz:"),Ee=u(),x(L.$$.fragment),qe=u(),k=t("div"),ae=t("img"),ua=u(),se=t("img"),xe=u(),j=t("h2"),A=t("a"),he=t("span"),x(U.$$.fragment),ha=u(),de=t("span"),da=n("Map"),Pe=u(),d=t("p"),fa=n("The "),te=t("a"),ma=n("map()"),_a=n(" function helps preprocess your entire dataset at once. Depending on the type of model you\u2019re working with, you\u2019ll need to either load a "),M=t("a"),ga=n("feature extractor"),va=n(" or a "),O=t("a"),ka=n("processor"),ja=n("."),ze=u(),E=t("ul"),H=t("li"),W=t("p"),ya=n("For pretrained speech recognition models, load a feature extractor and tokenizer and combine them in a "),fe=t("code"),$a=n("processor"),ba=n(":"),wa=u(),x(G.$$.fragment),Aa=u(),R=t("li"),B=t("p"),Ea=n("For fine-tuned speech recognition models, you only need to load a "),me=t("code"),qa=n("processor"),xa=n(":"),Pa=u(),x(J.$$.fragment),Se=u(),m=t("p"),za=n("When you use "),oe=t("a"),Sa=n("map()"),Ta=n(" with your preprocessing function, include the "),_e=t("code"),Ca=n("audio"),Da=n(" column to ensure you\u2019re actually resampling the audio data:"),Te=u(),x(K.$$.fragment),this.h()},l(e){const p=hs('[data-svelte="svelte-1phssyn"]',document.head);_=o(p,"META",{name:!0,content:!0}),p.forEach(s),ve=h(e),g=o(e,"H1",{class:!0});var De=r(g);y=o(De,"A",{id:!0,class:!0,href:!0});var Ua=r(y);le=o(Ua,"SPAN",{});var Ma=r(le);P(D.$$.fragment,Ma),Ma.forEach(s),Ua.forEach(s),Be=h(De),pe=o(De,"SPAN",{});var Oa=r(pe);Je=l(Oa,"Process audio data"),Oa.forEach(s),De.forEach(s),ke=h(e),V=o(e,"P",{});var Ha=r(V);Ke=l(Ha,"This guide shows specific methods for processing audio datasets. Learn how to:"),Ha.forEach(s),je=h(e),$=o(e,"UL",{});var Ie=r($);ce=o(Ie,"LI",{});var Wa=r(ce);Ve=l(Wa,"Resample the sampling rate."),Wa.forEach(s),Qe=h(Ie),I=o(Ie,"LI",{});var Ne=r(I);Xe=l(Ne,"Use "),Q=o(Ne,"A",{href:!0});var Ga=r(Q);Ye=l(Ga,"map()"),Ga.forEach(s),Ze=l(Ne," with audio datasets."),Ne.forEach(s),Ie.forEach(s),ye=h(e),b=o(e,"P",{});var Fe=r(b);ea=l(Fe,"For a guide on how to process any type of dataset, take a look at the "),X=o(Fe,"A",{href:!0});var Ra=r(X);aa=l(Ra,"general process guide"),Ra.forEach(s),sa=l(Fe,"."),Fe.forEach(s),$e=h(e),v=o(e,"H2",{class:!0});var Le=r(v);w=o(Le,"A",{id:!0,class:!0,href:!0});var Ba=r(w);ie=o(Ba,"SPAN",{});var Ja=r(ie);P(N.$$.fragment,Ja),Ja.forEach(s),Ba.forEach(s),ta=h(Le),ue=o(Le,"SPAN",{});var Ka=r(ue);oa=l(Ka,"Cast"),Ka.forEach(s),Le.forEach(s),be=h(e),f=o(e,"P",{});var re=r(f);ra=l(re,"The "),Y=o(re,"A",{href:!0});var Va=r(Y);na=l(Va,"cast_column()"),Va.forEach(s),la=l(re," function is used to cast a column to another feature to be decoded. When you use this function with the "),Z=o(re,"A",{href:!0});var Qa=r(Z);pa=l(Qa,"Audio"),Qa.forEach(s),ca=l(re," feature, you can resample the sampling rate:"),re.forEach(s),we=h(e),P(F.$$.fragment,e),Ae=h(e),ee=o(e,"P",{});var Xa=r(ee);ia=l(Xa,"Audio files are decoded and resampled on-the-fly, so the next time you access an example, the audio file is resampled to 16kHz:"),Xa.forEach(s),Ee=h(e),P(L.$$.fragment,e),qe=h(e),k=o(e,"DIV",{class:!0});var Ue=r(k);ae=o(Ue,"IMG",{class:!0,src:!0}),ua=h(Ue),se=o(Ue,"IMG",{class:!0,src:!0}),Ue.forEach(s),xe=h(e),j=o(e,"H2",{class:!0});var Me=r(j);A=o(Me,"A",{id:!0,class:!0,href:!0});var Ya=r(A);he=o(Ya,"SPAN",{});var Za=r(he);P(U.$$.fragment,Za),Za.forEach(s),Ya.forEach(s),ha=h(Me),de=o(Me,"SPAN",{});var es=r(de);da=l(es,"Map"),es.forEach(s),Me.forEach(s),Pe=h(e),d=o(e,"P",{});var q=r(d);fa=l(q,"The "),te=o(q,"A",{href:!0});var as=r(te);ma=l(as,"map()"),as.forEach(s),_a=l(q," function helps preprocess your entire dataset at once. Depending on the type of model you\u2019re working with, you\u2019ll need to either load a "),M=o(q,"A",{href:!0,rel:!0});var ss=r(M);ga=l(ss,"feature extractor"),ss.forEach(s),va=l(q," or a "),O=o(q,"A",{href:!0,rel:!0});var ts=r(O);ka=l(ts,"processor"),ts.forEach(s),ja=l(q,"."),q.forEach(s),ze=h(e),E=o(e,"UL",{});var Oe=r(E);H=o(Oe,"LI",{});var He=r(H);W=o(He,"P",{});var We=r(W);ya=l(We,"For pretrained speech recognition models, load a feature extractor and tokenizer and combine them in a "),fe=o(We,"CODE",{});var os=r(fe);$a=l(os,"processor"),os.forEach(s),ba=l(We,":"),We.forEach(s),wa=h(He),P(G.$$.fragment,He),He.forEach(s),Aa=h(Oe),R=o(Oe,"LI",{});var Ge=r(R);B=o(Ge,"P",{});var Re=r(B);Ea=l(Re,"For fine-tuned speech recognition models, you only need to load a "),me=o(Re,"CODE",{});var rs=r(me);qa=l(rs,"processor"),rs.forEach(s),xa=l(Re,":"),Re.forEach(s),Pa=h(Ge),P(J.$$.fragment,Ge),Ge.forEach(s),Oe.forEach(s),Se=h(e),m=o(e,"P",{});var ne=r(m);za=l(ne,"When you use "),oe=o(ne,"A",{href:!0});var ns=r(oe);Sa=l(ns,"map()"),ns.forEach(s),Ta=l(ne," with your preprocessing function, include the "),_e=o(ne,"CODE",{});var ls=r(_e);Ca=l(ls,"audio"),ls.forEach(s),Da=l(ne," column to ensure you\u2019re actually resampling the audio data:"),ne.forEach(s),Te=h(e),P(K.$$.fragment,e),this.h()},h(){c(_,"name","hf:doc:metadata"),c(_,"content",JSON.stringify(_s)),c(y,"id","process-audio-data"),c(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(y,"href","#process-audio-data"),c(g,"class","relative group"),c(Q,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Dataset.map"),c(X,"href","./process"),c(w,"id","cast"),c(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(w,"href","#cast"),c(v,"class","relative group"),c(Y,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Dataset.cast_column"),c(Z,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Audio"),c(ae,"class","block dark:hidden"),ps(ae.src,Fa="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/resample.gif")||c(ae,"src",Fa),c(se,"class","hidden dark:block"),ps(se.src,La="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/resample-dark.gif")||c(se,"src",La),c(k,"class","flex justify-center"),c(A,"id","map"),c(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(A,"href","#map"),c(j,"class","relative group"),c(te,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Dataset.map"),c(M,"href","https://huggingface.co/docs/transformers/model_doc/auto#transformers.AutoFeatureExtractor"),c(M,"rel","nofollow"),c(O,"href","https://huggingface.co/docs/transformers/model_doc/auto#transformers.AutoProcessor"),c(O,"rel","nofollow"),c(oe,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Dataset.map")},m(e,p){a(document.head,_),i(e,ve,p),i(e,g,p),a(g,y),a(y,le),z(D,le,null),a(g,Be),a(g,pe),a(pe,Je),i(e,ke,p),i(e,V,p),a(V,Ke),i(e,je,p),i(e,$,p),a($,ce),a(ce,Ve),a($,Qe),a($,I),a(I,Xe),a(I,Q),a(Q,Ye),a(I,Ze),i(e,ye,p),i(e,b,p),a(b,ea),a(b,X),a(X,aa),a(b,sa),i(e,$e,p),i(e,v,p),a(v,w),a(w,ie),z(N,ie,null),a(v,ta),a(v,ue),a(ue,oa),i(e,be,p),i(e,f,p),a(f,ra),a(f,Y),a(Y,na),a(f,la),a(f,Z),a(Z,pa),a(f,ca),i(e,we,p),z(F,e,p),i(e,Ae,p),i(e,ee,p),a(ee,ia),i(e,Ee,p),z(L,e,p),i(e,qe,p),i(e,k,p),a(k,ae),a(k,ua),a(k,se),i(e,xe,p),i(e,j,p),a(j,A),a(A,he),z(U,he,null),a(j,ha),a(j,de),a(de,da),i(e,Pe,p),i(e,d,p),a(d,fa),a(d,te),a(te,ma),a(d,_a),a(d,M),a(M,ga),a(d,va),a(d,O),a(O,ka),a(d,ja),i(e,ze,p),i(e,E,p),a(E,H),a(H,W),a(W,ya),a(W,fe),a(fe,$a),a(W,ba),a(H,wa),z(G,H,null),a(E,Aa),a(E,R),a(R,B),a(B,Ea),a(B,me),a(me,qa),a(B,xa),a(R,Pa),z(J,R,null),i(e,Se,p),i(e,m,p),a(m,za),a(m,oe),a(oe,Sa),a(m,Ta),a(m,_e),a(_e,Ca),a(m,Da),i(e,Te,p),z(K,e,p),Ce=!0},p:ds,i(e){Ce||(S(D.$$.fragment,e),S(N.$$.fragment,e),S(F.$$.fragment,e),S(L.$$.fragment,e),S(U.$$.fragment,e),S(G.$$.fragment,e),S(J.$$.fragment,e),S(K.$$.fragment,e),Ce=!0)},o(e){T(D.$$.fragment,e),T(N.$$.fragment,e),T(F.$$.fragment,e),T(L.$$.fragment,e),T(U.$$.fragment,e),T(G.$$.fragment,e),T(J.$$.fragment,e),T(K.$$.fragment,e),Ce=!1},d(e){s(_),e&&s(ve),e&&s(g),C(D),e&&s(ke),e&&s(V),e&&s(je),e&&s($),e&&s(ye),e&&s(b),e&&s($e),e&&s(v),C(N),e&&s(be),e&&s(f),e&&s(we),C(F,e),e&&s(Ae),e&&s(ee),e&&s(Ee),C(L,e),e&&s(qe),e&&s(k),e&&s(xe),e&&s(j),C(U),e&&s(Pe),e&&s(d),e&&s(ze),e&&s(E),C(G),C(J),e&&s(Se),e&&s(m),e&&s(Te),C(K,e)}}}const _s={local:"process-audio-data",sections:[{local:"cast",title:"Cast"},{local:"map",title:"Map"}],title:"Process audio data"};function gs(Na){return fs(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ys extends cs{constructor(_){super();is(this,_,gs,ms,us,{})}}export{ys as default,_s as metadata};
