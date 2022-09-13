import{S as Me,i as Pe,s as Te,e as r,k as g,w as H,t as o,M as Be,c as l,d as a,m as b,a as i,x as J,h as n,b as m,G as s,g as u,y as U,L as Le,q as Q,o as V,B as X,v as Re}from"../../chunks/vendor-hf-doc-builder.js";import{I as Ie}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as Ae}from"../../chunks/CodeBlock-hf-doc-builder.js";import{C as Ke}from"../../chunks/CourseFloatingBanner-hf-doc-builder.js";function Ne(ve){let f,L,h,v,S,w,Y,C,Z,R,y,I,c,ee,A,se,ae,M,te,oe,K,k,ne,P,re,le,N,_,G,j,O,p,ie,T,pe,ue,B,ce,de,q,me,fe,$,he,ge,W,x,be,z;return w=new Ie({}),y=new Ke({props:{chapter:1,classNames:"absolute z-10 right-0 top-0",notebooks:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/es/chapter1/section8.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/es/chapter1/section8.ipynb"}]}}),_=new Ae({props:{code:`from transformers import pipeline

unmasker = pipeline("fill-mask", model="bert-base-uncased")
result = unmasker("This man works as a [MASK].")
print([r["token_str"] for r in result])

result = unmasker("This woman works as a [MASK].")
print([r["token_str"] for r in result])`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

unmasker = pipeline(<span class="hljs-string">&quot;fill-mask&quot;</span>, model=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
result = unmasker(<span class="hljs-string">&quot;This man works as a [MASK].&quot;</span>)
<span class="hljs-built_in">print</span>([r[<span class="hljs-string">&quot;token_str&quot;</span>] <span class="hljs-keyword">for</span> r <span class="hljs-keyword">in</span> result])

result = unmasker(<span class="hljs-string">&quot;This woman works as a [MASK].&quot;</span>)
<span class="hljs-built_in">print</span>([r[<span class="hljs-string">&quot;token_str&quot;</span>] <span class="hljs-keyword">for</span> r <span class="hljs-keyword">in</span> result])`}}),j=new Ae({props:{code:`['lawyer', 'carpenter', 'doctor', 'waiter', 'mechanic']
['nurse', 'waitress', 'teacher', 'maid', 'prostitute']`,highlighted:`[<span class="hljs-string">&#x27;lawyer&#x27;</span>, <span class="hljs-string">&#x27;carpenter&#x27;</span>, <span class="hljs-string">&#x27;doctor&#x27;</span>, <span class="hljs-string">&#x27;waiter&#x27;</span>, <span class="hljs-string">&#x27;mechanic&#x27;</span>]
[<span class="hljs-string">&#x27;nurse&#x27;</span>, <span class="hljs-string">&#x27;waitress&#x27;</span>, <span class="hljs-string">&#x27;teacher&#x27;</span>, <span class="hljs-string">&#x27;maid&#x27;</span>, <span class="hljs-string">&#x27;prostitute&#x27;</span>]`}}),{c(){f=r("meta"),L=g(),h=r("h1"),v=r("a"),S=r("span"),H(w.$$.fragment),Y=g(),C=r("span"),Z=o("Sesgos y limitaciones"),R=g(),H(y.$$.fragment),I=g(),c=r("p"),ee=o("Si tu intenci\xF3n es usar modelos preentrenados o una versi\xF3n ajustada en producci\xF3n, ten en cuenta que a pesar de ser herramientas poderosas, tienen limitaciones. La m\xE1s importante de ellas es que, para permitir el preentrenamiento con grandes cantidades de datos, los investigadores suelen "),A=r("em"),se=o("raspar"),ae=o(" ("),M=r("em"),te=o("scrape"),oe=o(") todo el contenido que puedan encontrar, tomando lo mejor y lo peor que est\xE1 disponible en internet."),K=g(),k=r("p"),ne=o("Para dar un ejemplo r\xE1pido, volvamos al caso del pipeline "),P=r("code"),re=o("fill-mask"),le=o(" con el modelo BERT:"),N=g(),H(_.$$.fragment),G=g(),H(j.$$.fragment),O=g(),p=r("p"),ie=o("Cuando se le pide llenar la palabra faltante en estas dos oraciones, el modelo devuelve solo una respuesta agn\xF3stica de g\xE9nero ("),T=r("em"),pe=o("waiter/waitress"),ue=o("). Las otras son ocupaciones que se suelen asociar con un g\xE9nero espec\xEDfico \u2014 y si, prostituta es una de las primeras 5 posibilidades que el modelo asocia con \u201Cmujer\u201D y \u201Ctrabajo\u201D. Esto sucede a pesar de que BERT es uno de los pocos modelos de Transformadores que no se construyeron basados en datos "),B=r("em"),ce=o("raspados"),de=o(" de todo el internet, pero usando datos aparentemente neutrales (est\xE1 entrenado con los conjuntos de datos de "),q=r("a"),me=o("Wikipedia en Ingl\xE9s"),fe=o(" y "),$=r("a"),he=o("BookCorpus"),ge=o(")."),W=g(),x=r("p"),be=o("Cuando uses estas herramientas, debes tener en cuenta que el modelo original que est\xE1s usando puede muy f\xE1cilmente generar contenido sexista, racista u homof\xF3bico. Ajustar el modelo con tus datos no va a desaparecer este sesgo intr\xEDnseco."),this.h()},l(e){const t=Be('[data-svelte="svelte-1phssyn"]',document.head);f=l(t,"META",{name:!0,content:!0}),t.forEach(a),L=b(e),h=l(e,"H1",{class:!0});var D=i(h);v=l(D,"A",{id:!0,class:!0,href:!0});var ke=i(v);S=l(ke,"SPAN",{});var we=i(S);J(w.$$.fragment,we),we.forEach(a),ke.forEach(a),Y=b(D),C=l(D,"SPAN",{});var ye=i(C);Z=n(ye,"Sesgos y limitaciones"),ye.forEach(a),D.forEach(a),R=b(e),J(y.$$.fragment,e),I=b(e),c=l(e,"P",{});var E=i(c);ee=n(E,"Si tu intenci\xF3n es usar modelos preentrenados o una versi\xF3n ajustada en producci\xF3n, ten en cuenta que a pesar de ser herramientas poderosas, tienen limitaciones. La m\xE1s importante de ellas es que, para permitir el preentrenamiento con grandes cantidades de datos, los investigadores suelen "),A=l(E,"EM",{});var _e=i(A);se=n(_e,"raspar"),_e.forEach(a),ae=n(E," ("),M=l(E,"EM",{});var je=i(M);te=n(je,"scrape"),je.forEach(a),oe=n(E,") todo el contenido que puedan encontrar, tomando lo mejor y lo peor que est\xE1 disponible en internet."),E.forEach(a),K=b(e),k=l(e,"P",{});var F=i(k);ne=n(F,"Para dar un ejemplo r\xE1pido, volvamos al caso del pipeline "),P=l(F,"CODE",{});var qe=i(P);re=n(qe,"fill-mask"),qe.forEach(a),le=n(F," con el modelo BERT:"),F.forEach(a),N=b(e),J(_.$$.fragment,e),G=b(e),J(j.$$.fragment,e),O=b(e),p=l(e,"P",{});var d=i(p);ie=n(d,"Cuando se le pide llenar la palabra faltante en estas dos oraciones, el modelo devuelve solo una respuesta agn\xF3stica de g\xE9nero ("),T=l(d,"EM",{});var $e=i(T);pe=n($e,"waiter/waitress"),$e.forEach(a),ue=n(d,"). Las otras son ocupaciones que se suelen asociar con un g\xE9nero espec\xEDfico \u2014 y si, prostituta es una de las primeras 5 posibilidades que el modelo asocia con \u201Cmujer\u201D y \u201Ctrabajo\u201D. Esto sucede a pesar de que BERT es uno de los pocos modelos de Transformadores que no se construyeron basados en datos "),B=l(d,"EM",{});var xe=i(B);ce=n(xe,"raspados"),xe.forEach(a),de=n(d," de todo el internet, pero usando datos aparentemente neutrales (est\xE1 entrenado con los conjuntos de datos de "),q=l(d,"A",{href:!0,rel:!0});var Ee=i(q);me=n(Ee,"Wikipedia en Ingl\xE9s"),Ee.forEach(a),fe=n(d," y "),$=l(d,"A",{href:!0,rel:!0});var Se=i($);he=n(Se,"BookCorpus"),Se.forEach(a),ge=n(d,")."),d.forEach(a),W=b(e),x=l(e,"P",{});var Ce=i(x);be=n(Ce,"Cuando uses estas herramientas, debes tener en cuenta que el modelo original que est\xE1s usando puede muy f\xE1cilmente generar contenido sexista, racista u homof\xF3bico. Ajustar el modelo con tus datos no va a desaparecer este sesgo intr\xEDnseco."),Ce.forEach(a),this.h()},h(){m(f,"name","hf:doc:metadata"),m(f,"content",JSON.stringify(Ge)),m(v,"id","sesgos-y-limitaciones"),m(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(v,"href","#sesgos-y-limitaciones"),m(h,"class","relative group"),m(q,"href","https://huggingface.co/datasets/wikipedia"),m(q,"rel","nofollow"),m($,"href","https://huggingface.co/datasets/bookcorpus"),m($,"rel","nofollow")},m(e,t){s(document.head,f),u(e,L,t),u(e,h,t),s(h,v),s(v,S),U(w,S,null),s(h,Y),s(h,C),s(C,Z),u(e,R,t),U(y,e,t),u(e,I,t),u(e,c,t),s(c,ee),s(c,A),s(A,se),s(c,ae),s(c,M),s(M,te),s(c,oe),u(e,K,t),u(e,k,t),s(k,ne),s(k,P),s(P,re),s(k,le),u(e,N,t),U(_,e,t),u(e,G,t),U(j,e,t),u(e,O,t),u(e,p,t),s(p,ie),s(p,T),s(T,pe),s(p,ue),s(p,B),s(B,ce),s(p,de),s(p,q),s(q,me),s(p,fe),s(p,$),s($,he),s(p,ge),u(e,W,t),u(e,x,t),s(x,be),z=!0},p:Le,i(e){z||(Q(w.$$.fragment,e),Q(y.$$.fragment,e),Q(_.$$.fragment,e),Q(j.$$.fragment,e),z=!0)},o(e){V(w.$$.fragment,e),V(y.$$.fragment,e),V(_.$$.fragment,e),V(j.$$.fragment,e),z=!1},d(e){a(f),e&&a(L),e&&a(h),X(w),e&&a(R),X(y,e),e&&a(I),e&&a(c),e&&a(K),e&&a(k),e&&a(N),X(_,e),e&&a(G),X(j,e),e&&a(O),e&&a(p),e&&a(W),e&&a(x)}}}const Ge={local:"sesgos-y-limitaciones",title:"Sesgos y limitaciones"};function Oe(ve){return Re(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class He extends Me{constructor(f){super();Pe(this,f,Oe,Ne,Te,{})}}export{He as default,Ge as metadata};
