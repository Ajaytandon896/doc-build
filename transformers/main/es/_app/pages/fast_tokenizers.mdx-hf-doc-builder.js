import{S as Ta,i as ba,s as Ea,e as t,k as p,w as C,t as i,M as Pa,c as r,d as a,m as c,a as n,x as F,h as l,b as m,G as o,g as d,y as L,L as wa,q as O,o as B,B as x,v as ya}from"../chunks/vendor-hf-doc-builder.js";import{I as aa}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as Ee}from"../chunks/CodeBlock-hf-doc-builder.js";function Sa(oa){let k,te,h,_,H,E,Pe,I,we,re,z,G,ye,Se,P,qe,Ae,ne,J,Ne,ie,w,le,U,Ce,de,g,j,R,y,Fe,Q,Le,pe,f,Oe,X,Be,xe,Y,Je,Ue,ce,S,me,$,De,D,Ke,Me,fe,v,T,Z,q,Ve,ee,We,ue,K,He,ke,A,he,u,Ie,ae,Ge,Re,oe,Qe,Xe,ze,N,ge,b,Ye,M,Ze,ea,ve;return E=new aa({}),w=new Ee({props:{code:`from tokenizers import Tokenizer
from tokenizers.models import BPE
from tokenizers.trainers import BpeTrainer
from tokenizers.pre_tokenizers import Whitespace

tokenizer = Tokenizer(BPE(unk_token="[UNK]"))
trainer = BpeTrainer(special_tokens=["[UNK]", "[CLS]", "[SEP]", "[PAD]", "[MASK]"])

tokenizer.pre_tokenizer = Whitespace()
files = [...]
tokenizer.train(files, trainer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> tokenizers <span class="hljs-keyword">import</span> Tokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> tokenizers.models <span class="hljs-keyword">import</span> BPE
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> tokenizers.trainers <span class="hljs-keyword">import</span> BpeTrainer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> tokenizers.pre_tokenizers <span class="hljs-keyword">import</span> Whitespace

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = Tokenizer(BPE(unk_token=<span class="hljs-string">&quot;[UNK]&quot;</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>trainer = BpeTrainer(special_tokens=[<span class="hljs-string">&quot;[UNK]&quot;</span>, <span class="hljs-string">&quot;[CLS]&quot;</span>, <span class="hljs-string">&quot;[SEP]&quot;</span>, <span class="hljs-string">&quot;[PAD]&quot;</span>, <span class="hljs-string">&quot;[MASK]&quot;</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.pre_tokenizer = Whitespace()
<span class="hljs-meta">&gt;&gt;&gt; </span>files = [...]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.train(files, trainer)`}}),y=new aa({}),S=new Ee({props:{code:`from transformers import PreTrainedTokenizerFast

fast_tokenizer = PreTrainedTokenizerFast(tokenizer_object=tokenizer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PreTrainedTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>fast_tokenizer = PreTrainedTokenizerFast(tokenizer_object=tokenizer)`}}),q=new aa({}),A=new Ee({props:{code:'tokenizer.save("tokenizer.json")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.save(<span class="hljs-string">&quot;tokenizer.json&quot;</span>)'}}),N=new Ee({props:{code:`from transformers import PreTrainedTokenizerFast

fast_tokenizer = PreTrainedTokenizerFast(tokenizer_file="tokenizer.json")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PreTrainedTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>fast_tokenizer = PreTrainedTokenizerFast(tokenizer_file=<span class="hljs-string">&quot;tokenizer.json&quot;</span>)`}}),{c(){k=t("meta"),te=p(),h=t("h1"),_=t("a"),H=t("span"),C(E.$$.fragment),Pe=p(),I=t("span"),we=i("Usa los tokenizadores de \u{1F917} Tokenizers"),re=p(),z=t("p"),G=t("code"),ye=i("PreTrainedTokenizerFast"),Se=i(" depende de la biblioteca "),P=t("a"),qe=i("\u{1F917} Tokenizers"),Ae=i(`. Los tokenizadores obtenidos desde la biblioteca \u{1F917} Tokenizers pueden ser
cargados de forma muy sencilla en los \u{1F917} Transformers.`),ne=p(),J=t("p"),Ne=i("Antes de entrar en detalles, comencemos creando un tokenizador dummy en unas cuantas l\xEDneas:"),ie=p(),C(w.$$.fragment),le=p(),U=t("p"),Ce=i(`Ahora tenemos un tokenizador entrenado en los archivos que definimos. Lo podemos seguir utilizando en ese entorno de ejecuci\xF3n (runtime en ingl\xE9s), o puedes guardarlo
en un archivo JSON para reutilizarlo en un futuro.`),de=p(),g=t("h2"),j=t("a"),R=t("span"),C(y.$$.fragment),Fe=p(),Q=t("span"),Le=i("Cargando directamente desde el objeto tokenizador"),pe=p(),f=t("p"),Oe=i(`Veamos c\xF3mo utilizar este objeto tokenizador en la biblioteca \u{1F917} Transformers. La clase
`),X=t("code"),Be=i("PreTrainedTokenizerFast"),xe=i(` permite una instanciaci\xF3n f\xE1cil, al aceptar el objeto
`),Y=t("em"),Je=i("tokenizer"),Ue=i(" instanciado como argumento:"),ce=p(),C(S.$$.fragment),me=p(),$=t("p"),De=i("Este objeto ya puede ser utilizado con todos los m\xE9todos compartidos por los tokenizadores de \u{1F917} Transformers! Visita la "),D=t("a"),Ke=i("p\xE1gina sobre tokenizadores"),Me=i(" para m\xE1s informaci\xF3n."),fe=p(),v=t("h2"),T=t("a"),Z=t("span"),C(q.$$.fragment),Ve=p(),ee=t("span"),We=i("Cargando desde un archivo JSON"),ue=p(),K=t("p"),He=i("Para cargar un tokenizador desde un archivo JSON, comencemos por guardar nuestro tokenizador:"),ke=p(),C(A.$$.fragment),he=p(),u=t("p"),Ie=i("La localizaci\xF3n (path en ingl\xE9s) donde este archivo es guardado puede ser incluida en el m\xE9todo de inicializaci\xF3n de "),ae=t("code"),Ge=i("PreTrainedTokenizerFast"),Re=i(`
utilizando el par\xE1metro `),oe=t("code"),Qe=i("tokenizer_file"),Xe=i(":"),ze=p(),C(N.$$.fragment),ge=p(),b=t("p"),Ye=i("Este objeto ya puede ser utilizado con todos los m\xE9todos compartidos por los tokenizadores de \u{1F917} Transformers! Visita la "),M=t("a"),Ze=i("p\xE1gina sobre tokenizadores"),ea=i(" para m\xE1s informaci\xF3n."),this.h()},l(e){const s=Pa('[data-svelte="svelte-1phssyn"]',document.head);k=r(s,"META",{name:!0,content:!0}),s.forEach(a),te=c(e),h=r(e,"H1",{class:!0});var _e=n(h);_=r(_e,"A",{id:!0,class:!0,href:!0});var sa=n(_);H=r(sa,"SPAN",{});var ta=n(H);F(E.$$.fragment,ta),ta.forEach(a),sa.forEach(a),Pe=c(_e),I=r(_e,"SPAN",{});var ra=n(I);we=l(ra,"Usa los tokenizadores de \u{1F917} Tokenizers"),ra.forEach(a),_e.forEach(a),re=c(e),z=r(e,"P",{});var se=n(z);G=r(se,"CODE",{});var na=n(G);ye=l(na,"PreTrainedTokenizerFast"),na.forEach(a),Se=l(se," depende de la biblioteca "),P=r(se,"A",{href:!0,rel:!0});var ia=n(P);qe=l(ia,"\u{1F917} Tokenizers"),ia.forEach(a),Ae=l(se,`. Los tokenizadores obtenidos desde la biblioteca \u{1F917} Tokenizers pueden ser
cargados de forma muy sencilla en los \u{1F917} Transformers.`),se.forEach(a),ne=c(e),J=r(e,"P",{});var la=n(J);Ne=l(la,"Antes de entrar en detalles, comencemos creando un tokenizador dummy en unas cuantas l\xEDneas:"),la.forEach(a),ie=c(e),F(w.$$.fragment,e),le=c(e),U=r(e,"P",{});var da=n(U);Ce=l(da,`Ahora tenemos un tokenizador entrenado en los archivos que definimos. Lo podemos seguir utilizando en ese entorno de ejecuci\xF3n (runtime en ingl\xE9s), o puedes guardarlo
en un archivo JSON para reutilizarlo en un futuro.`),da.forEach(a),de=c(e),g=r(e,"H2",{class:!0});var je=n(g);j=r(je,"A",{id:!0,class:!0,href:!0});var pa=n(j);R=r(pa,"SPAN",{});var ca=n(R);F(y.$$.fragment,ca),ca.forEach(a),pa.forEach(a),Fe=c(je),Q=r(je,"SPAN",{});var ma=n(Q);Le=l(ma,"Cargando directamente desde el objeto tokenizador"),ma.forEach(a),je.forEach(a),pe=c(e),f=r(e,"P",{});var V=n(f);Oe=l(V,`Veamos c\xF3mo utilizar este objeto tokenizador en la biblioteca \u{1F917} Transformers. La clase
`),X=r(V,"CODE",{});var fa=n(X);Be=l(fa,"PreTrainedTokenizerFast"),fa.forEach(a),xe=l(V,` permite una instanciaci\xF3n f\xE1cil, al aceptar el objeto
`),Y=r(V,"EM",{});var ua=n(Y);Je=l(ua,"tokenizer"),ua.forEach(a),Ue=l(V," instanciado como argumento:"),V.forEach(a),ce=c(e),F(S.$$.fragment,e),me=c(e),$=r(e,"P",{});var $e=n($);De=l($e,"Este objeto ya puede ser utilizado con todos los m\xE9todos compartidos por los tokenizadores de \u{1F917} Transformers! Visita la "),D=r($e,"A",{href:!0});var ka=n(D);Ke=l(ka,"p\xE1gina sobre tokenizadores"),ka.forEach(a),Me=l($e," para m\xE1s informaci\xF3n."),$e.forEach(a),fe=c(e),v=r(e,"H2",{class:!0});var Te=n(v);T=r(Te,"A",{id:!0,class:!0,href:!0});var ha=n(T);Z=r(ha,"SPAN",{});var za=n(Z);F(q.$$.fragment,za),za.forEach(a),ha.forEach(a),Ve=c(Te),ee=r(Te,"SPAN",{});var ga=n(ee);We=l(ga,"Cargando desde un archivo JSON"),ga.forEach(a),Te.forEach(a),ue=c(e),K=r(e,"P",{});var va=n(K);He=l(va,"Para cargar un tokenizador desde un archivo JSON, comencemos por guardar nuestro tokenizador:"),va.forEach(a),ke=c(e),F(A.$$.fragment,e),he=c(e),u=r(e,"P",{});var W=n(u);Ie=l(W,"La localizaci\xF3n (path en ingl\xE9s) donde este archivo es guardado puede ser incluida en el m\xE9todo de inicializaci\xF3n de "),ae=r(W,"CODE",{});var _a=n(ae);Ge=l(_a,"PreTrainedTokenizerFast"),_a.forEach(a),Re=l(W,`
utilizando el par\xE1metro `),oe=r(W,"CODE",{});var ja=n(oe);Qe=l(ja,"tokenizer_file"),ja.forEach(a),Xe=l(W,":"),W.forEach(a),ze=c(e),F(N.$$.fragment,e),ge=c(e),b=r(e,"P",{});var be=n(b);Ye=l(be,"Este objeto ya puede ser utilizado con todos los m\xE9todos compartidos por los tokenizadores de \u{1F917} Transformers! Visita la "),M=r(be,"A",{href:!0});var $a=n(M);Ze=l($a,"p\xE1gina sobre tokenizadores"),$a.forEach(a),ea=l(be," para m\xE1s informaci\xF3n."),be.forEach(a),this.h()},h(){m(k,"name","hf:doc:metadata"),m(k,"content",JSON.stringify(qa)),m(_,"id","usa-los-tokenizadores-de-tokenizers"),m(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(_,"href","#usa-los-tokenizadores-de-tokenizers"),m(h,"class","relative group"),m(P,"href","https://huggingface.co/docs/tokenizers"),m(P,"rel","nofollow"),m(j,"id","cargando-directamente-desde-el-objeto-tokenizador"),m(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(j,"href","#cargando-directamente-desde-el-objeto-tokenizador"),m(g,"class","relative group"),m(D,"href","main_classes/tokenizer"),m(T,"id","cargando-desde-un-archivo-json"),m(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(T,"href","#cargando-desde-un-archivo-json"),m(v,"class","relative group"),m(M,"href","main_classes/tokenizer")},m(e,s){o(document.head,k),d(e,te,s),d(e,h,s),o(h,_),o(_,H),L(E,H,null),o(h,Pe),o(h,I),o(I,we),d(e,re,s),d(e,z,s),o(z,G),o(G,ye),o(z,Se),o(z,P),o(P,qe),o(z,Ae),d(e,ne,s),d(e,J,s),o(J,Ne),d(e,ie,s),L(w,e,s),d(e,le,s),d(e,U,s),o(U,Ce),d(e,de,s),d(e,g,s),o(g,j),o(j,R),L(y,R,null),o(g,Fe),o(g,Q),o(Q,Le),d(e,pe,s),d(e,f,s),o(f,Oe),o(f,X),o(X,Be),o(f,xe),o(f,Y),o(Y,Je),o(f,Ue),d(e,ce,s),L(S,e,s),d(e,me,s),d(e,$,s),o($,De),o($,D),o(D,Ke),o($,Me),d(e,fe,s),d(e,v,s),o(v,T),o(T,Z),L(q,Z,null),o(v,Ve),o(v,ee),o(ee,We),d(e,ue,s),d(e,K,s),o(K,He),d(e,ke,s),L(A,e,s),d(e,he,s),d(e,u,s),o(u,Ie),o(u,ae),o(ae,Ge),o(u,Re),o(u,oe),o(oe,Qe),o(u,Xe),d(e,ze,s),L(N,e,s),d(e,ge,s),d(e,b,s),o(b,Ye),o(b,M),o(M,Ze),o(b,ea),ve=!0},p:wa,i(e){ve||(O(E.$$.fragment,e),O(w.$$.fragment,e),O(y.$$.fragment,e),O(S.$$.fragment,e),O(q.$$.fragment,e),O(A.$$.fragment,e),O(N.$$.fragment,e),ve=!0)},o(e){B(E.$$.fragment,e),B(w.$$.fragment,e),B(y.$$.fragment,e),B(S.$$.fragment,e),B(q.$$.fragment,e),B(A.$$.fragment,e),B(N.$$.fragment,e),ve=!1},d(e){a(k),e&&a(te),e&&a(h),x(E),e&&a(re),e&&a(z),e&&a(ne),e&&a(J),e&&a(ie),x(w,e),e&&a(le),e&&a(U),e&&a(de),e&&a(g),x(y),e&&a(pe),e&&a(f),e&&a(ce),x(S,e),e&&a(me),e&&a($),e&&a(fe),e&&a(v),x(q),e&&a(ue),e&&a(K),e&&a(ke),x(A,e),e&&a(he),e&&a(u),e&&a(ze),x(N,e),e&&a(ge),e&&a(b)}}}const qa={local:"usa-los-tokenizadores-de-tokenizers",sections:[{local:"cargando-directamente-desde-el-objeto-tokenizador",title:"Cargando directamente desde el objeto tokenizador "},{local:"cargando-desde-un-archivo-json",title:"Cargando desde un archivo JSON"}],title:"Usa los tokenizadores de \u{1F917} Tokenizers"};function Aa(oa){return ya(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class La extends Ta{constructor(k){super();ba(this,k,Aa,Sa,Ea,{})}}export{La as default,qa as metadata};
