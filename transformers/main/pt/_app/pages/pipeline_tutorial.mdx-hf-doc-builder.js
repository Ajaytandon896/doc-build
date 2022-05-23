import{S as no,i as io,s as po,e as r,k as c,w as u,t,M as co,c as n,d as s,m,a as i,x as h,h as o,b as d,N as mo,G as a,g as p,y as g,q as v,o as $,B as _,v as fo}from"../chunks/vendor-hf-doc-builder.js";import{T as uo}from"../chunks/Tip-hf-doc-builder.js";import{I as ta,C as D}from"../chunks/CodeBlock-hf-doc-builder.js";function ho(oa){let f,H,x,w,M;return{c(){f=r("p"),H=t("Acesse a documenta\xE7\xE3o do "),x=r("code"),w=t("pipeline()"),M=t(" para obter uma lista completa de tarefas poss\xEDveis.")},l(k){f=n(k,"P",{});var b=i(f);H=o(b,"Acesse a documenta\xE7\xE3o do "),x=n(b,"CODE",{});var U=i(x);w=o(U,"pipeline()"),U.forEach(s),M=o(b," para obter uma lista completa de tarefas poss\xEDveis."),b.forEach(s)},m(k,b){p(k,f,b),a(f,H),a(f,x),a(x,w),a(f,M)},d(k){k&&s(f)}}}function go(oa){let f,H,x,w,M,k,b,U,Va,la,N,Wa,X,Xa,Ya,ra,P,Y,Za,Pe,es,as,ss,ye,ts,os,Z,ls,Ae,rs,ns,na,F,ia,O,I,ze,ee,is,Ce,ps,pa,q,cs,De,ms,ds,Me,fs,us,Oe,hs,gs,ca,xe,ae,vs,Se,$s,_s,ma,se,da,te,oe,xs,Le,Es,js,fa,le,ua,Ee,ks,ha,re,ga,E,ws,Te,qs,bs,He,Ps,ys,Ue,As,zs,Ne,Cs,Ds,va,ne,$a,S,R,Fe,ie,Ms,Ie,Os,_a,j,Ss,Re,Ls,Ts,pe,Hs,Us,Je,Ns,Fs,Ke,Is,Rs,xa,ce,Ea,J,Js,Be,Ks,Bs,ja,me,ka,K,Gs,Ge,Qs,Vs,wa,de,qa,L,B,Qe,fe,Ws,Ve,Xs,ba,y,Ys,We,Zs,et,Xe,at,st,Pa,A,tt,ue,ot,lt,Ye,rt,nt,ya,he,Aa,G,it,Ze,pt,ct,za,ge,Ca,T,Q,ea,ve,mt,aa,dt,Da,V,ft,sa,ut,ht,Ma,je,ke,gt,Oa,$e,Sa;return k=new ta({}),F=new uo({props:{$$slots:{default:[ho]},$$scope:{ctx:oa}}}),ee=new ta({}),se=new D({props:{code:`from transformers import pipeline

generator = pipeline(task="text-generation")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>generator = pipeline(task=<span class="hljs-string">&quot;text-generation&quot;</span>)`}}),le=new D({props:{code:'generator("Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone")',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>generator(<span class="hljs-string">&quot;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone&quot;</span>)
[{<span class="hljs-string">&#x27;generated_text&#x27;</span>: <span class="hljs-string">&#x27;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone, Seven for the Iron-priests at the door to the east, and thirteen for the Lord Kings at the end of the mountain&#x27;</span>}]`}}),re=new D({props:{code:`generator(
    [
        "Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone",
        "Nine for Mortal Men, doomed to die, One for the Dark Lord on his dark throne",
    ]
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>generator(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone&quot;</span>,
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;Nine for Mortal Men, doomed to die, One for the Dark Lord on his dark throne&quot;</span>,
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)`}}),ne=new D({props:{code:`generator(
    "Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone",
    num_return_sequences=2,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>generator(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone&quot;</span>,
<span class="hljs-meta">... </span>    num_return_sequences=<span class="hljs-number">2</span>,
<span class="hljs-meta">... </span>)`}}),ie=new ta({}),ce=new D({props:{code:`from transformers import AutoTokenizer, AutoModelForCausalLM

tokenizer = AutoTokenizer.from_pretrained("distilgpt2")
model = AutoModelForCausalLM.from_pretrained("distilgpt2")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;distilgpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;distilgpt2&quot;</span>)`}}),me=new D({props:{code:`from transformers import pipeline

generator = pipeline(task="text-generation", model=model, tokenizer=tokenizer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>generator = pipeline(task=<span class="hljs-string">&quot;text-generation&quot;</span>, model=model, tokenizer=tokenizer)`}}),de=new D({props:{code:'generator("Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone")',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>generator(<span class="hljs-string">&quot;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone&quot;</span>)
[{<span class="hljs-string">&#x27;generated_text&#x27;</span>: <span class="hljs-string">&#x27;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone, Seven for the Dragon-lords (for them to rule in a world ruled by their rulers, and all who live within the realm&#x27;</span>}]`}}),fe=new ta({}),he=new D({props:{code:`from transformers import pipeline

audio_classifier = pipeline(
    task="audio-classification", model="ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition"
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>audio_classifier = pipeline(
<span class="hljs-meta">... </span>    task=<span class="hljs-string">&quot;audio-classification&quot;</span>, model=<span class="hljs-string">&quot;ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition&quot;</span>
<span class="hljs-meta">... </span>)`}}),ge=new D({props:{code:'audio_classifier("jfk_moon_speech.wav")',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>audio_classifier(<span class="hljs-string">&quot;jfk_moon_speech.wav&quot;</span>)
[{<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;calm&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.13856211304664612</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;disgust&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.13148026168346405</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;happy&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.12635163962841034</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;angry&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.12439591437578201</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;fearful&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.12404385954141617</span>}]`}}),ve=new ta({}),$e=new D({props:{code:`from transformers import pipeline

vision_classifier = pipeline(task="image-classification")
vision_classifier(
    images="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/pipeline-cat-chonk.jpeg"
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>vision_classifier = pipeline(task=<span class="hljs-string">&quot;image-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>vision_classifier(
<span class="hljs-meta">... </span>    images=<span class="hljs-string">&quot;https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/pipeline-cat-chonk.jpeg&quot;</span>
<span class="hljs-meta">... </span>)
[{<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;lynx, catamount&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.4403027892112732</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;cougar, puma, catamount, mountain lion, painter, panther, Felis concolor&#x27;</span>,
  <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.03433405980467796</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;snow leopard, ounce, Panthera uncia&#x27;</span>,
  <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.032148055732250214</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;Egyptian cat&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.02353910356760025</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;tiger cat&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.023034192621707916</span>}]`}}),{c(){f=r("meta"),H=c(),x=r("h1"),w=r("a"),M=r("span"),u(k.$$.fragment),b=c(),U=r("span"),Va=t("Pipelines para infer\xEAncia"),la=c(),N=r("p"),Wa=t("Um [pipeline] simplifica o uso dos modelos no "),X=r("a"),Xa=t("Model Hub"),Ya=t(` para a infer\xEAncia de uma diversidade de tarefas,
como a gera\xE7\xE3o de texto, a segmenta\xE7\xE3o de imagens e a classifica\xE7\xE3o de \xE1udio.
Inclusive, se n\xE3o tem experi\xEAncia com alguma modalidade espec\xEDfica ou n\xE3o compreende o c\xF3digo que forma os modelos,
pode usar eles mesmo assim com o [pipeline]! Este tutorial te ensinar\xE1 a:`),ra=c(),P=r("ul"),Y=r("li"),Za=t("Utilizar um "),Pe=r("code"),es=t("pipeline()"),as=t(" para infer\xEAncia."),ss=c(),ye=r("li"),ts=t("Utilizar um tokenizador ou model espec\xEDfico."),os=c(),Z=r("li"),ls=t("Utilizar um "),Ae=r("code"),rs=t("pipeline()"),ns=t(" para tarefas de \xE1udio e vis\xE3o computacional."),na=c(),u(F.$$.fragment),ia=c(),O=r("h2"),I=r("a"),ze=r("span"),u(ee.$$.fragment),is=c(),Ce=r("span"),ps=t("Uso do pipeline"),pa=c(),q=r("p"),cs=t("Mesmo que cada tarefa tenha um "),De=r("code"),ms=t("pipeline()"),ds=t(" associado, \xE9 mais simples usar a abstra\xE7\xE3o geral do "),Me=r("code"),fs=t("pipeline()"),us=t(` que
cont\xE9m todos os pipelines das tarefas mais espec\xEDficas.
O `),Oe=r("code"),hs=t("pipeline()"),gs=t(` carrega automaticamenta um modelo predeterminado e um tokenizador com capacidade de infer\xEAncia para sua
tarefa.`),ca=c(),xe=r("ol"),ae=r("li"),vs=t("Comece carregando um "),Se=r("code"),$s=t("pipeline()"),_s=t(" e especifique uma tarefa de infer\xEAncia:"),ma=c(),u(se.$$.fragment),da=c(),te=r("ol"),oe=r("li"),xs=t("Passe seu dado de entrada, no caso um texto, ao "),Le=r("code"),Es=t("pipeline()"),js=t(":"),fa=c(),u(le.$$.fragment),ua=c(),Ee=r("p"),ks=t("Se tiver mais de uma entrada, passe-a como uma lista:"),ha=c(),u(re.$$.fragment),ga=c(),E=r("p"),ws=t("Qualquer par\xE2metro adicional para a sua tarefa tamb\xE9m pode ser inclu\xEDdo no "),Te=r("code"),qs=t("pipeline()"),bs=t(". A tarefa "),He=r("code"),Ps=t("text-generation"),ys=t(` tem um m\xE9todo
`),Ue=r("code"),As=t("generate()"),zs=t(` com v\xE1rios par\xE2metros para controlar a sa\xEDda.
Por exemplo, se quiser gerar mais de uma sa\xEDda, defina-a no par\xE2metro `),Ne=r("code"),Cs=t("num_return_sequences"),Ds=t(":"),va=c(),u(ne.$$.fragment),$a=c(),S=r("h3"),R=r("a"),Fe=r("span"),u(ie.$$.fragment),Ms=c(),Ie=r("span"),Os=t("Selecionando um modelo e um tokenizador"),_a=c(),j=r("p"),Ss=t("O "),Re=r("code"),Ls=t("pipeline()"),Ts=t(" aceita qualquer modelo do "),pe=r("a"),Hs=t("Model Hub"),Us=t(`. H\xE1 r\xF3tulos adicionais no Model Hub
que te permitem filtrar pelo modelo que gostaria de usar para sua tarefa. Uma vez que tiver escolhido o modelo apropriado,
carregue-o com as classes `),Je=r("code"),Ns=t("AutoModelFor"),Fs=t(" e [`AutoTokenizer\u2019] correspondentes. Por exemplo, carregue a classe "),Ke=r("code"),Is=t("AutoModelForCausalLM"),Rs=t(`
para uma tarefa de modelagem de linguagem causal:`),xa=c(),u(ce.$$.fragment),Ea=c(),J=r("p"),Js=t("Crie uma "),Be=r("code"),Ks=t("pipeline()"),Bs=t(" para a sua tarefa e especif\xEDque o modelo e o tokenizador que foram carregados:"),ja=c(),u(me.$$.fragment),ka=c(),K=r("p"),Gs=t("Passe seu texto de entrada ao "),Ge=r("code"),Qs=t("pipeline()"),Vs=t(" para gerar algum texto:"),wa=c(),u(de.$$.fragment),qa=c(),L=r("h2"),B=r("a"),Qe=r("span"),u(fe.$$.fragment),Ws=c(),Ve=r("span"),Xs=t("Pipeline de audio"),ba=c(),y=r("p"),Ys=t("A flexibilidade do "),We=r("code"),Zs=t("pipeline()"),et=t(` significa que tamb\xE9m pode-se extender \xE0s tarefas de \xE1udio.
La flexibilidad de `),Xe=r("code"),at=t("pipeline()"),st=t(" significa que tambi\xE9n se puede extender a tareas de audio."),Pa=c(),A=r("p"),tt=t(`Por exemplo, classifiquemos a emo\xE7\xE3o de um breve fragmento do famoso discurso de John F. Kennedy /home/rzimmerdev/dev/transformers/docs/source/pt/pipeline_tutorial.mdx
Encontre um modelo de `),ue=r("a"),ot=t("audio classification"),lt=t(` para
reconhecimento de emo\xE7\xF5es no Model Hub e carregue-o usando o `),Ye=r("code"),rt=t("pipeline()"),nt=t(":"),ya=c(),u(he.$$.fragment),Aa=c(),G=r("p"),it=t("Passe o arquivo de \xE1udio ao "),Ze=r("code"),pt=t("pipeline()"),ct=t(":"),za=c(),u(ge.$$.fragment),Ca=c(),T=r("h2"),Q=r("a"),ea=r("span"),u(ve.$$.fragment),mt=c(),aa=r("span"),dt=t("Pipeline de vis\xE3o computacional"),Da=c(),V=r("p"),ft=t("Finalmente, utilizar um "),sa=r("code"),ut=t("pipeline()"),ht=t(` para tarefas de vis\xE3o \xE9 praticamente a mesma coisa.
Especifique a sua tarefa de vis\xE3o e passe a sua imagem ao classificador.
A imagem pode ser um link ou uma rota local \xE0 imagem. Por exemplo, que esp\xE9cie de gato est\xE1 presente na imagem?`),Ma=c(),je=r("p"),ke=r("img"),Oa=c(),u($e.$$.fragment),this.h()},l(e){const l=co('[data-svelte="svelte-1phssyn"]',document.head);f=n(l,"META",{name:!0,content:!0}),l.forEach(s),H=m(e),x=n(e,"H1",{class:!0});var _e=i(x);w=n(_e,"A",{id:!0,class:!0,href:!0});var vt=i(w);M=n(vt,"SPAN",{});var $t=i(M);h(k.$$.fragment,$t),$t.forEach(s),vt.forEach(s),b=m(_e),U=n(_e,"SPAN",{});var _t=i(U);Va=o(_t,"Pipelines para infer\xEAncia"),_t.forEach(s),_e.forEach(s),la=m(e),N=n(e,"P",{});var La=i(N);Wa=o(La,"Um [pipeline] simplifica o uso dos modelos no "),X=n(La,"A",{href:!0,rel:!0});var xt=i(X);Xa=o(xt,"Model Hub"),xt.forEach(s),Ya=o(La,` para a infer\xEAncia de uma diversidade de tarefas,
como a gera\xE7\xE3o de texto, a segmenta\xE7\xE3o de imagens e a classifica\xE7\xE3o de \xE1udio.
Inclusive, se n\xE3o tem experi\xEAncia com alguma modalidade espec\xEDfica ou n\xE3o compreende o c\xF3digo que forma os modelos,
pode usar eles mesmo assim com o [pipeline]! Este tutorial te ensinar\xE1 a:`),La.forEach(s),ra=m(e),P=n(e,"UL",{});var we=i(P);Y=n(we,"LI",{});var Ta=i(Y);Za=o(Ta,"Utilizar um "),Pe=n(Ta,"CODE",{});var Et=i(Pe);es=o(Et,"pipeline()"),Et.forEach(s),as=o(Ta," para infer\xEAncia."),Ta.forEach(s),ss=m(we),ye=n(we,"LI",{});var jt=i(ye);ts=o(jt,"Utilizar um tokenizador ou model espec\xEDfico."),jt.forEach(s),os=m(we),Z=n(we,"LI",{});var Ha=i(Z);ls=o(Ha,"Utilizar um "),Ae=n(Ha,"CODE",{});var kt=i(Ae);rs=o(kt,"pipeline()"),kt.forEach(s),ns=o(Ha," para tarefas de \xE1udio e vis\xE3o computacional."),Ha.forEach(s),we.forEach(s),na=m(e),h(F.$$.fragment,e),ia=m(e),O=n(e,"H2",{class:!0});var Ua=i(O);I=n(Ua,"A",{id:!0,class:!0,href:!0});var wt=i(I);ze=n(wt,"SPAN",{});var qt=i(ze);h(ee.$$.fragment,qt),qt.forEach(s),wt.forEach(s),is=m(Ua),Ce=n(Ua,"SPAN",{});var bt=i(Ce);ps=o(bt,"Uso do pipeline"),bt.forEach(s),Ua.forEach(s),pa=m(e),q=n(e,"P",{});var W=i(q);cs=o(W,"Mesmo que cada tarefa tenha um "),De=n(W,"CODE",{});var Pt=i(De);ms=o(Pt,"pipeline()"),Pt.forEach(s),ds=o(W," associado, \xE9 mais simples usar a abstra\xE7\xE3o geral do "),Me=n(W,"CODE",{});var yt=i(Me);fs=o(yt,"pipeline()"),yt.forEach(s),us=o(W,` que
cont\xE9m todos os pipelines das tarefas mais espec\xEDficas.
O `),Oe=n(W,"CODE",{});var At=i(Oe);hs=o(At,"pipeline()"),At.forEach(s),gs=o(W,` carrega automaticamenta um modelo predeterminado e um tokenizador com capacidade de infer\xEAncia para sua
tarefa.`),W.forEach(s),ca=m(e),xe=n(e,"OL",{});var zt=i(xe);ae=n(zt,"LI",{});var Na=i(ae);vs=o(Na,"Comece carregando um "),Se=n(Na,"CODE",{});var Ct=i(Se);$s=o(Ct,"pipeline()"),Ct.forEach(s),_s=o(Na," e especifique uma tarefa de infer\xEAncia:"),Na.forEach(s),zt.forEach(s),ma=m(e),h(se.$$.fragment,e),da=m(e),te=n(e,"OL",{start:!0});var Dt=i(te);oe=n(Dt,"LI",{});var Fa=i(oe);xs=o(Fa,"Passe seu dado de entrada, no caso um texto, ao "),Le=n(Fa,"CODE",{});var Mt=i(Le);Es=o(Mt,"pipeline()"),Mt.forEach(s),js=o(Fa,":"),Fa.forEach(s),Dt.forEach(s),fa=m(e),h(le.$$.fragment,e),ua=m(e),Ee=n(e,"P",{});var Ot=i(Ee);ks=o(Ot,"Se tiver mais de uma entrada, passe-a como uma lista:"),Ot.forEach(s),ha=m(e),h(re.$$.fragment,e),ga=m(e),E=n(e,"P",{});var z=i(E);ws=o(z,"Qualquer par\xE2metro adicional para a sua tarefa tamb\xE9m pode ser inclu\xEDdo no "),Te=n(z,"CODE",{});var St=i(Te);qs=o(St,"pipeline()"),St.forEach(s),bs=o(z,". A tarefa "),He=n(z,"CODE",{});var Lt=i(He);Ps=o(Lt,"text-generation"),Lt.forEach(s),ys=o(z,` tem um m\xE9todo
`),Ue=n(z,"CODE",{});var Tt=i(Ue);As=o(Tt,"generate()"),Tt.forEach(s),zs=o(z,` com v\xE1rios par\xE2metros para controlar a sa\xEDda.
Por exemplo, se quiser gerar mais de uma sa\xEDda, defina-a no par\xE2metro `),Ne=n(z,"CODE",{});var Ht=i(Ne);Cs=o(Ht,"num_return_sequences"),Ht.forEach(s),Ds=o(z,":"),z.forEach(s),va=m(e),h(ne.$$.fragment,e),$a=m(e),S=n(e,"H3",{class:!0});var Ia=i(S);R=n(Ia,"A",{id:!0,class:!0,href:!0});var Ut=i(R);Fe=n(Ut,"SPAN",{});var Nt=i(Fe);h(ie.$$.fragment,Nt),Nt.forEach(s),Ut.forEach(s),Ms=m(Ia),Ie=n(Ia,"SPAN",{});var Ft=i(Ie);Os=o(Ft,"Selecionando um modelo e um tokenizador"),Ft.forEach(s),Ia.forEach(s),_a=m(e),j=n(e,"P",{});var C=i(j);Ss=o(C,"O "),Re=n(C,"CODE",{});var It=i(Re);Ls=o(It,"pipeline()"),It.forEach(s),Ts=o(C," aceita qualquer modelo do "),pe=n(C,"A",{href:!0,rel:!0});var Rt=i(pe);Hs=o(Rt,"Model Hub"),Rt.forEach(s),Us=o(C,`. H\xE1 r\xF3tulos adicionais no Model Hub
que te permitem filtrar pelo modelo que gostaria de usar para sua tarefa. Uma vez que tiver escolhido o modelo apropriado,
carregue-o com as classes `),Je=n(C,"CODE",{});var Jt=i(Je);Ns=o(Jt,"AutoModelFor"),Jt.forEach(s),Fs=o(C," e [`AutoTokenizer\u2019] correspondentes. Por exemplo, carregue a classe "),Ke=n(C,"CODE",{});var Kt=i(Ke);Is=o(Kt,"AutoModelForCausalLM"),Kt.forEach(s),Rs=o(C,`
para uma tarefa de modelagem de linguagem causal:`),C.forEach(s),xa=m(e),h(ce.$$.fragment,e),Ea=m(e),J=n(e,"P",{});var Ra=i(J);Js=o(Ra,"Crie uma "),Be=n(Ra,"CODE",{});var Bt=i(Be);Ks=o(Bt,"pipeline()"),Bt.forEach(s),Bs=o(Ra," para a sua tarefa e especif\xEDque o modelo e o tokenizador que foram carregados:"),Ra.forEach(s),ja=m(e),h(me.$$.fragment,e),ka=m(e),K=n(e,"P",{});var Ja=i(K);Gs=o(Ja,"Passe seu texto de entrada ao "),Ge=n(Ja,"CODE",{});var Gt=i(Ge);Qs=o(Gt,"pipeline()"),Gt.forEach(s),Vs=o(Ja," para gerar algum texto:"),Ja.forEach(s),wa=m(e),h(de.$$.fragment,e),qa=m(e),L=n(e,"H2",{class:!0});var Ka=i(L);B=n(Ka,"A",{id:!0,class:!0,href:!0});var Qt=i(B);Qe=n(Qt,"SPAN",{});var Vt=i(Qe);h(fe.$$.fragment,Vt),Vt.forEach(s),Qt.forEach(s),Ws=m(Ka),Ve=n(Ka,"SPAN",{});var Wt=i(Ve);Xs=o(Wt,"Pipeline de audio"),Wt.forEach(s),Ka.forEach(s),ba=m(e),y=n(e,"P",{});var qe=i(y);Ys=o(qe,"A flexibilidade do "),We=n(qe,"CODE",{});var Xt=i(We);Zs=o(Xt,"pipeline()"),Xt.forEach(s),et=o(qe,` significa que tamb\xE9m pode-se extender \xE0s tarefas de \xE1udio.
La flexibilidad de `),Xe=n(qe,"CODE",{});var Yt=i(Xe);at=o(Yt,"pipeline()"),Yt.forEach(s),st=o(qe," significa que tambi\xE9n se puede extender a tareas de audio."),qe.forEach(s),Pa=m(e),A=n(e,"P",{});var be=i(A);tt=o(be,`Por exemplo, classifiquemos a emo\xE7\xE3o de um breve fragmento do famoso discurso de John F. Kennedy /home/rzimmerdev/dev/transformers/docs/source/pt/pipeline_tutorial.mdx
Encontre um modelo de `),ue=n(be,"A",{href:!0,rel:!0});var Zt=i(ue);ot=o(Zt,"audio classification"),Zt.forEach(s),lt=o(be,` para
reconhecimento de emo\xE7\xF5es no Model Hub e carregue-o usando o `),Ye=n(be,"CODE",{});var eo=i(Ye);rt=o(eo,"pipeline()"),eo.forEach(s),nt=o(be,":"),be.forEach(s),ya=m(e),h(he.$$.fragment,e),Aa=m(e),G=n(e,"P",{});var Ba=i(G);it=o(Ba,"Passe o arquivo de \xE1udio ao "),Ze=n(Ba,"CODE",{});var ao=i(Ze);pt=o(ao,"pipeline()"),ao.forEach(s),ct=o(Ba,":"),Ba.forEach(s),za=m(e),h(ge.$$.fragment,e),Ca=m(e),T=n(e,"H2",{class:!0});var Ga=i(T);Q=n(Ga,"A",{id:!0,class:!0,href:!0});var so=i(Q);ea=n(so,"SPAN",{});var to=i(ea);h(ve.$$.fragment,to),to.forEach(s),so.forEach(s),mt=m(Ga),aa=n(Ga,"SPAN",{});var oo=i(aa);dt=o(oo,"Pipeline de vis\xE3o computacional"),oo.forEach(s),Ga.forEach(s),Da=m(e),V=n(e,"P",{});var Qa=i(V);ft=o(Qa,"Finalmente, utilizar um "),sa=n(Qa,"CODE",{});var lo=i(sa);ut=o(lo,"pipeline()"),lo.forEach(s),ht=o(Qa,` para tarefas de vis\xE3o \xE9 praticamente a mesma coisa.
Especifique a sua tarefa de vis\xE3o e passe a sua imagem ao classificador.
A imagem pode ser um link ou uma rota local \xE0 imagem. Por exemplo, que esp\xE9cie de gato est\xE1 presente na imagem?`),Qa.forEach(s),Ma=m(e),je=n(e,"P",{});var ro=i(je);ke=n(ro,"IMG",{src:!0,alt:!0}),ro.forEach(s),Oa=m(e),h($e.$$.fragment,e),this.h()},h(){d(f,"name","hf:doc:metadata"),d(f,"content",JSON.stringify(vo)),d(w,"id","pipelines-para-inferncia"),d(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(w,"href","#pipelines-para-inferncia"),d(x,"class","relative group"),d(X,"href","https://huggingface.co/models"),d(X,"rel","nofollow"),d(I,"id","uso-do-pipeline"),d(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(I,"href","#uso-do-pipeline"),d(O,"class","relative group"),d(te,"start","2"),d(R,"id","selecionando-um-modelo-e-um-tokenizador"),d(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(R,"href","#selecionando-um-modelo-e-um-tokenizador"),d(S,"class","relative group"),d(pe,"href","https://huggingface.co/models"),d(pe,"rel","nofollow"),d(B,"id","pipeline-de-audio"),d(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(B,"href","#pipeline-de-audio"),d(L,"class","relative group"),d(ue,"href","https://huggingface.co/models?pipeline_tag=audio-classification"),d(ue,"rel","nofollow"),d(Q,"id","pipeline-de-viso-computacional"),d(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Q,"href","#pipeline-de-viso-computacional"),d(T,"class","relative group"),mo(ke.src,gt="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/pipeline-cat-chonk.jpeg")||d(ke,"src",gt),d(ke,"alt","pipeline-cat-chonk")},m(e,l){a(document.head,f),p(e,H,l),p(e,x,l),a(x,w),a(w,M),g(k,M,null),a(x,b),a(x,U),a(U,Va),p(e,la,l),p(e,N,l),a(N,Wa),a(N,X),a(X,Xa),a(N,Ya),p(e,ra,l),p(e,P,l),a(P,Y),a(Y,Za),a(Y,Pe),a(Pe,es),a(Y,as),a(P,ss),a(P,ye),a(ye,ts),a(P,os),a(P,Z),a(Z,ls),a(Z,Ae),a(Ae,rs),a(Z,ns),p(e,na,l),g(F,e,l),p(e,ia,l),p(e,O,l),a(O,I),a(I,ze),g(ee,ze,null),a(O,is),a(O,Ce),a(Ce,ps),p(e,pa,l),p(e,q,l),a(q,cs),a(q,De),a(De,ms),a(q,ds),a(q,Me),a(Me,fs),a(q,us),a(q,Oe),a(Oe,hs),a(q,gs),p(e,ca,l),p(e,xe,l),a(xe,ae),a(ae,vs),a(ae,Se),a(Se,$s),a(ae,_s),p(e,ma,l),g(se,e,l),p(e,da,l),p(e,te,l),a(te,oe),a(oe,xs),a(oe,Le),a(Le,Es),a(oe,js),p(e,fa,l),g(le,e,l),p(e,ua,l),p(e,Ee,l),a(Ee,ks),p(e,ha,l),g(re,e,l),p(e,ga,l),p(e,E,l),a(E,ws),a(E,Te),a(Te,qs),a(E,bs),a(E,He),a(He,Ps),a(E,ys),a(E,Ue),a(Ue,As),a(E,zs),a(E,Ne),a(Ne,Cs),a(E,Ds),p(e,va,l),g(ne,e,l),p(e,$a,l),p(e,S,l),a(S,R),a(R,Fe),g(ie,Fe,null),a(S,Ms),a(S,Ie),a(Ie,Os),p(e,_a,l),p(e,j,l),a(j,Ss),a(j,Re),a(Re,Ls),a(j,Ts),a(j,pe),a(pe,Hs),a(j,Us),a(j,Je),a(Je,Ns),a(j,Fs),a(j,Ke),a(Ke,Is),a(j,Rs),p(e,xa,l),g(ce,e,l),p(e,Ea,l),p(e,J,l),a(J,Js),a(J,Be),a(Be,Ks),a(J,Bs),p(e,ja,l),g(me,e,l),p(e,ka,l),p(e,K,l),a(K,Gs),a(K,Ge),a(Ge,Qs),a(K,Vs),p(e,wa,l),g(de,e,l),p(e,qa,l),p(e,L,l),a(L,B),a(B,Qe),g(fe,Qe,null),a(L,Ws),a(L,Ve),a(Ve,Xs),p(e,ba,l),p(e,y,l),a(y,Ys),a(y,We),a(We,Zs),a(y,et),a(y,Xe),a(Xe,at),a(y,st),p(e,Pa,l),p(e,A,l),a(A,tt),a(A,ue),a(ue,ot),a(A,lt),a(A,Ye),a(Ye,rt),a(A,nt),p(e,ya,l),g(he,e,l),p(e,Aa,l),p(e,G,l),a(G,it),a(G,Ze),a(Ze,pt),a(G,ct),p(e,za,l),g(ge,e,l),p(e,Ca,l),p(e,T,l),a(T,Q),a(Q,ea),g(ve,ea,null),a(T,mt),a(T,aa),a(aa,dt),p(e,Da,l),p(e,V,l),a(V,ft),a(V,sa),a(sa,ut),a(V,ht),p(e,Ma,l),p(e,je,l),a(je,ke),p(e,Oa,l),g($e,e,l),Sa=!0},p(e,[l]){const _e={};l&2&&(_e.$$scope={dirty:l,ctx:e}),F.$set(_e)},i(e){Sa||(v(k.$$.fragment,e),v(F.$$.fragment,e),v(ee.$$.fragment,e),v(se.$$.fragment,e),v(le.$$.fragment,e),v(re.$$.fragment,e),v(ne.$$.fragment,e),v(ie.$$.fragment,e),v(ce.$$.fragment,e),v(me.$$.fragment,e),v(de.$$.fragment,e),v(fe.$$.fragment,e),v(he.$$.fragment,e),v(ge.$$.fragment,e),v(ve.$$.fragment,e),v($e.$$.fragment,e),Sa=!0)},o(e){$(k.$$.fragment,e),$(F.$$.fragment,e),$(ee.$$.fragment,e),$(se.$$.fragment,e),$(le.$$.fragment,e),$(re.$$.fragment,e),$(ne.$$.fragment,e),$(ie.$$.fragment,e),$(ce.$$.fragment,e),$(me.$$.fragment,e),$(de.$$.fragment,e),$(fe.$$.fragment,e),$(he.$$.fragment,e),$(ge.$$.fragment,e),$(ve.$$.fragment,e),$($e.$$.fragment,e),Sa=!1},d(e){s(f),e&&s(H),e&&s(x),_(k),e&&s(la),e&&s(N),e&&s(ra),e&&s(P),e&&s(na),_(F,e),e&&s(ia),e&&s(O),_(ee),e&&s(pa),e&&s(q),e&&s(ca),e&&s(xe),e&&s(ma),_(se,e),e&&s(da),e&&s(te),e&&s(fa),_(le,e),e&&s(ua),e&&s(Ee),e&&s(ha),_(re,e),e&&s(ga),e&&s(E),e&&s(va),_(ne,e),e&&s($a),e&&s(S),_(ie),e&&s(_a),e&&s(j),e&&s(xa),_(ce,e),e&&s(Ea),e&&s(J),e&&s(ja),_(me,e),e&&s(ka),e&&s(K),e&&s(wa),_(de,e),e&&s(qa),e&&s(L),_(fe),e&&s(ba),e&&s(y),e&&s(Pa),e&&s(A),e&&s(ya),_(he,e),e&&s(Aa),e&&s(G),e&&s(za),_(ge,e),e&&s(Ca),e&&s(T),_(ve),e&&s(Da),e&&s(V),e&&s(Ma),e&&s(je),e&&s(Oa),_($e,e)}}}const vo={local:"pipelines-para-inferncia",sections:[{local:"uso-do-pipeline",sections:[{local:"selecionando-um-modelo-e-um-tokenizador",title:"Selecionando um modelo e um tokenizador"}],title:"Uso do pipeline"},{local:"pipeline-de-audio",title:"Pipeline de audio"},{local:"pipeline-de-viso-computacional",title:"Pipeline de vis\xE3o computacional"}],title:"Pipelines para infer\xEAncia"};function $o(oa){return fo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class jo extends no{constructor(f){super();io(this,f,$o,go,po,{})}}export{jo as default,vo as metadata};
