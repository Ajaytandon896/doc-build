import{S as Is,i as Vs,s as Gs,e as i,k as _,w as R,t as r,M as Hs,c,d as t,m as k,x as U,a as u,h as n,b as M,N as Ns,G as s,g as f,y as J,o as A,p as Os,q as y,B as K,v as Rs,n as Ss}from"../../chunks/vendor-hf-doc-builder.js";import{T as Us}from"../../chunks/Tip-hf-doc-builder.js";import{I as Js}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ue}from"../../chunks/CodeBlock-hf-doc-builder.js";import{C as Bs}from"../../chunks/CourseFloatingBanner-hf-doc-builder.js";import{F as Ks}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";function Qs(D){let o,d;return o=new Bs({props:{chapter:4,classNames:"absolute z-10 right-0 top-0",notebooks:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/fr/chapter4/section2_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/fr/chapter4/section2_tf.ipynb"}]}}),{c(){R(o.$$.fragment)},l(a){U(o.$$.fragment,a)},m(a,q){J(o,a,q),d=!0},i(a){d||(y(o.$$.fragment,a),d=!0)},o(a){A(o.$$.fragment,a),d=!1},d(a){K(o,a)}}}function Ws(D){let o,d;return o=new Bs({props:{chapter:4,classNames:"absolute z-10 right-0 top-0",notebooks:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/fr/chapter4/section2_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/fr/chapter4/section2_pt.ipynb"}]}}),{c(){R(o.$$.fragment)},l(a){U(o.$$.fragment,a)},m(a,q){J(o,a,q),d=!0},i(a){d||(y(o.$$.fragment,a),d=!0)},o(a){A(o.$$.fragment,a),d=!1},d(a){K(o,a)}}}function Xs(D){let o,d,a,q,h,g,P,z,L,N,I,w,$,x,j,C,V,T,E,O;return o=new ue({props:{code:`from transformers import CamembertTokenizer, TFCamembertForMaskedLM

tokenizer = CamembertTokenizer.from_pretrained("camembert-base")
model = TFCamembertForMaskedLM.from_pretrained("camembert-base")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, TFCamembertForMaskedLM

tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = TFCamembertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),E=new ue({props:{code:`from transformers import AutoTokenizer, TFAutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained("camembert-base")
model = TFAutoModelForMaskedLM.from_pretrained("camembert-base")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = TFAutoModelForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),{c(){R(o.$$.fragment),d=_(),a=i("p"),q=r("Cependant, nous recommandons d\u2019utiliser les classes "),h=i("a"),g=i("code"),P=r("TFAuto*"),z=r(" \xE0 la place, car elles sont par conception ind\xE9pendantes de l\u2019architecture. Alors que l\u2019exemple de code pr\xE9c\xE9dent limite les utilisateurs aux "),L=i("em"),N=r("checkpoints"),I=r(" chargeables dans l\u2019architecture CamemBERT, l\u2019utilisation des classes "),w=i("code"),$=r("TFAuto*"),x=r(" facilite le changement de "),j=i("em"),C=r("checkpoint"),V=r(" :"),T=_(),R(E.$$.fragment),this.h()},l(l){U(o.$$.fragment,l),d=k(l),a=c(l,"P",{});var m=u(a);q=n(m,"Cependant, nous recommandons d\u2019utiliser les classes "),h=c(m,"A",{href:!0,rel:!0});var X=u(h);g=c(X,"CODE",{});var Q=u(g);P=n(Q,"TFAuto*"),Q.forEach(t),X.forEach(t),z=n(m," \xE0 la place, car elles sont par conception ind\xE9pendantes de l\u2019architecture. Alors que l\u2019exemple de code pr\xE9c\xE9dent limite les utilisateurs aux "),L=c(m,"EM",{});var S=u(L);N=n(S,"checkpoints"),S.forEach(t),I=n(m," chargeables dans l\u2019architecture CamemBERT, l\u2019utilisation des classes "),w=c(m,"CODE",{});var B=u(w);$=n(B,"TFAuto*"),B.forEach(t),x=n(m," facilite le changement de "),j=c(m,"EM",{});var Y=u(j);C=n(Y,"checkpoint"),Y.forEach(t),V=n(m," :"),m.forEach(t),T=k(l),U(E.$$.fragment,l),this.h()},h(){M(h,"href","https://huggingface.co/transformers/model_doc/auto.html?highlight=auto#auto-classes"),M(h,"rel","nofollow")},m(l,m){J(o,l,m),f(l,d,m),f(l,a,m),s(a,q),s(a,h),s(h,g),s(g,P),s(a,z),s(a,L),s(L,N),s(a,I),s(a,w),s(w,$),s(a,x),s(a,j),s(j,C),s(a,V),f(l,T,m),J(E,l,m),O=!0},i(l){O||(y(o.$$.fragment,l),y(E.$$.fragment,l),O=!0)},o(l){A(o.$$.fragment,l),A(E.$$.fragment,l),O=!1},d(l){K(o,l),l&&t(d),l&&t(a),l&&t(T),K(E,l)}}}function Ys(D){let o,d,a,q,h,g,P,z,L,N,I,w,$,x,j,C,V,T,E,O;return o=new ue({props:{code:`from transformers import CamembertTokenizer, CamembertForMaskedLM

tokenizer = CamembertTokenizer.from_pretrained("camembert-base")
model = CamembertForMaskedLM.from_pretrained("camembert-base")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, CamembertForMaskedLM

tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = CamembertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),E=new ue({props:{code:`from transformers import AutoTokenizer, AutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained("camembert-base")
model = AutoModelForMaskedLM.from_pretrained("camembert-base")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = AutoModelForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),{c(){R(o.$$.fragment),d=_(),a=i("p"),q=r("Cependant, nous recommandons d\u2019utiliser les classes "),h=i("a"),g=i("code"),P=r("Auto*"),z=r(" \xE0 la place, car elles sont par conception ind\xE9pendantes de l\u2019architecture. Alors que l\u2019exemple de code pr\xE9c\xE9dent limite les utilisateurs aux "),L=i("em"),N=r("checkpoints"),I=r(" chargeables dans l\u2019architecture CamemBERT, l\u2019utilisation des classes "),w=i("code"),$=r("Auto*"),x=r(" facilite le changement de "),j=i("em"),C=r("checkpoint"),V=r(" :"),T=_(),R(E.$$.fragment),this.h()},l(l){U(o.$$.fragment,l),d=k(l),a=c(l,"P",{});var m=u(a);q=n(m,"Cependant, nous recommandons d\u2019utiliser les classes "),h=c(m,"A",{href:!0,rel:!0});var X=u(h);g=c(X,"CODE",{});var Q=u(g);P=n(Q,"Auto*"),Q.forEach(t),X.forEach(t),z=n(m," \xE0 la place, car elles sont par conception ind\xE9pendantes de l\u2019architecture. Alors que l\u2019exemple de code pr\xE9c\xE9dent limite les utilisateurs aux "),L=c(m,"EM",{});var S=u(L);N=n(S,"checkpoints"),S.forEach(t),I=n(m," chargeables dans l\u2019architecture CamemBERT, l\u2019utilisation des classes "),w=c(m,"CODE",{});var B=u(w);$=n(B,"Auto*"),B.forEach(t),x=n(m," facilite le changement de "),j=c(m,"EM",{});var Y=u(j);C=n(Y,"checkpoint"),Y.forEach(t),V=n(m," :"),m.forEach(t),T=k(l),U(E.$$.fragment,l),this.h()},h(){M(h,"href","https://huggingface.co/transformers/model_doc/auto.html?highlight=auto#auto-classes"),M(h,"rel","nofollow")},m(l,m){J(o,l,m),f(l,d,m),f(l,a,m),s(a,q),s(a,h),s(h,g),s(g,P),s(a,z),s(a,L),s(L,N),s(a,I),s(a,w),s(w,$),s(a,x),s(a,j),s(j,C),s(a,V),f(l,T,m),J(E,l,m),O=!0},i(l){O||(y(o.$$.fragment,l),y(E.$$.fragment,l),O=!0)},o(l){A(o.$$.fragment,l),A(E.$$.fragment,l),O=!1},d(l){K(o,l),l&&t(d),l&&t(a),l&&t(T),K(E,l)}}}function Zs(D){let o;return{c(){o=r("Lorsque vous utilisez un mod\xE8le pr\xE9-entra\xEEn\xE9, assurez-vous de v\xE9rifier comment il a \xE9t\xE9 entra\xEEn\xE9, sur quels jeux de donn\xE9es, ses limites et ses biais. Toutes ces informations doivent \xEAtre indiqu\xE9es dans sa carte.")},l(d){o=n(d,"Lorsque vous utilisez un mod\xE8le pr\xE9-entra\xEEn\xE9, assurez-vous de v\xE9rifier comment il a \xE9t\xE9 entra\xEEn\xE9, sur quels jeux de donn\xE9es, ses limites et ses biais. Toutes ces informations doivent \xEAtre indiqu\xE9es dans sa carte.")},m(d,a){f(d,o,a)},d(d){d&&t(o)}}}function et(D){let o,d,a,q,h,g,P,z,L,N,I,w,$,x,j,C,V,T,E,O,l,m,X,Q,S,B,Y,we,F,Ne,pe,Oe,Se,de,Be,Ie,fe,Ve,Ge,he,He,Re,Ce,se,ze,te,Le,b,Ue,be,Je,Ke,_e,Qe,We,ke,Xe,Ye,ge,Ze,es,ve,ss,ts,$e,as,rs,xe,ns,ls,Ee,os,is,qe,cs,ms,Te,ae,re,fs,Ae,Z,us,je,ps,ds,ye,G,H,ie,ee,Fe;a=new Ks({props:{fw:D[0]}}),z=new Js({});const hs=[Ws,Qs],ne=[];function bs(e,p){return e[0]==="pt"?0:1}$=bs(D),x=ne[$]=hs[$](D),se=new ue({props:{code:`from transformers import pipeline

camembert_fill_mask = pipeline("fill-mask", model="camembert-base")
results = camembert_fill_mask("Le camembert est <mask> :)")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

camembert_fill_mask = pipeline(<span class="hljs-string">&quot;fill-mask&quot;</span>, model=<span class="hljs-string">&quot;camembert-base&quot;</span>)
results = camembert_fill_mask(<span class="hljs-string">&quot;Le camembert est &lt;mask&gt; :)&quot;</span>)`}}),te=new ue({props:{code:`[
  {'sequence': 'Le camembert est d\xE9licieux :)', 'score': 0.49091005325317383, 'token': 7200, 'token_str': 'd\xE9licieux'}, 
  {'sequence': 'Le camembert est excellent :)', 'score': 0.1055697426199913, 'token': 2183, 'token_str': 'excellent'}, 
  {'sequence': 'Le camembert est succulent :)', 'score': 0.03453313186764717, 'token': 26202, 'token_str': 'succulent'}, 
  {'sequence': 'Le camembert est meilleur :)', 'score': 0.0330314114689827, 'token': 528, 'token_str': 'meilleur'}, 
  {'sequence': 'Le camembert est parfait :)', 'score': 0.03007650189101696, 'token': 1654, 'token_str': 'parfait'}
]`,highlighted:`[
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est d\xE9licieux :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.49091005325317383</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">7200</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;d\xE9licieux&#x27;</span>}, 
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est excellent :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.1055697426199913</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">2183</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;excellent&#x27;</span>}, 
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est succulent :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.03453313186764717</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">26202</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;succulent&#x27;</span>}, 
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est meilleur :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.0330314114689827</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">528</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;meilleur&#x27;</span>}, 
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est parfait :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.03007650189101696</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">1654</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;parfait&#x27;</span>}
]`}});const _s=[Ys,Xs],le=[];function ks(e,p){return e[0]==="pt"?0:1}return G=ks(D),H=le[G]=_s[G](D),ee=new Us({props:{$$slots:{default:[Zs]},$$scope:{ctx:D}}}),{c(){o=i("meta"),d=_(),R(a.$$.fragment),q=_(),h=i("h1"),g=i("a"),P=i("span"),R(z.$$.fragment),L=_(),N=i("span"),I=r("Utilisation de mod\xE8les pr\xE9-entra\xEEn\xE9s"),w=_(),x.c(),j=_(),C=i("p"),V=r("Le "),T=i("em"),E=r("Hub"),O=r(" rend simple la s\xE9lection d\u2019un mod\xE8le et permet alors que celui-ci puisse \xEAtre utilis\xE9 dans toute biblioth\xE8que en aval en seulement quelques lignes de code. Voyons comment utiliser concr\xE8tement l\u2019un de ces mod\xE8les et comment contribuer au d\xE9veloppement de la communaut\xE9."),l=_(),m=i("p"),X=r("Supposons que nous recherchions un mod\xE8le bas\xE9 sur le fran\xE7ais, capable de remplir des masques."),Q=_(),S=i("div"),B=i("img"),we=_(),F=i("p"),Ne=r("Nous choisissons le "),pe=i("em"),Oe=r("checkpoint"),Se=_(),de=i("code"),Be=r("camembert-base"),Ie=r(" pour essayer. L\u2019identifiant "),fe=i("code"),Ve=r("camembert-base"),Ge=r(" est tout ce dont nous avons besoin pour commencer \xE0 utiliser le mod\xE8le ! Comme vous l\u2019avez vu dans les chapitres pr\xE9c\xE9dents, nous pouvons l\u2019instancier en utilisant la fonction "),he=i("code"),He=r("pipeline()"),Re=r(" :"),Ce=_(),R(se.$$.fragment),ze=_(),R(te.$$.fragment),Le=_(),b=i("p"),Ue=r("Comme vous pouvez le constater, le chargement d\u2019un mod\xE8le dans un pipeline est extr\xEAmement simple. La seule chose \xE0 laquelle vous devez faire attention est que le "),be=i("em"),Je=r("checkpoint"),Ke=r(" choisi soit adapt\xE9 \xE0 la t\xE2che pour laquelle il va \xEAtre utilis\xE9. Par exemple, ici nous chargeons le "),_e=i("em"),Qe=r("checkpoint"),We=_(),ke=i("code"),Xe=r("camembert-base"),Ye=r(" dans le pipeline "),ge=i("code"),Ze=r("fill-mask"),es=r(", ce qui est tout \xE0 fait correct. Mais si nous chargerions ce "),ve=i("em"),ss=r("checkpoint"),ts=r(" dans le pipeline "),$e=i("code"),as=r("text-classification"),rs=r(", les r\xE9sultats n\u2019auraient aucun sens car la t\xEAte de "),xe=i("code"),ns=r("camembert-base"),ls=r(" n\u2019est pas adapt\xE9e \xE0 cette t\xE2che ! Nous recommandons d\u2019utiliser le s\xE9lecteur de t\xE2che dans l\u2019interface du "),Ee=i("em"),os=r("Hub"),is=r(" afin de s\xE9lectionner les "),qe=i("em"),cs=r("checkpoints"),ms=r(" appropri\xE9s :"),Te=_(),ae=i("div"),re=i("img"),Ae=_(),Z=i("p"),us=r("Vous pouvez \xE9galement instancier le "),je=i("em"),ps=r("checkpoint"),ds=r(" en utilisant directement l\u2019architecture du mod\xE8le :"),ye=_(),H.c(),ie=_(),R(ee.$$.fragment),this.h()},l(e){const p=Hs('[data-svelte="svelte-1phssyn"]',document.head);o=c(p,"META",{name:!0,content:!0}),p.forEach(t),d=k(e),U(a.$$.fragment,e),q=k(e),h=c(e,"H1",{class:!0});var oe=u(h);g=c(oe,"A",{id:!0,class:!0,href:!0});var ce=u(g);P=c(ce,"SPAN",{});var me=u(P);U(z.$$.fragment,me),me.forEach(t),ce.forEach(t),L=k(oe),N=c(oe,"SPAN",{});var Me=u(N);I=n(Me,"Utilisation de mod\xE8les pr\xE9-entra\xEEn\xE9s"),Me.forEach(t),oe.forEach(t),w=k(e),x.l(e),j=k(e),C=c(e,"P",{});var De=u(C);V=n(De,"Le "),T=c(De,"EM",{});var gs=u(T);E=n(gs,"Hub"),gs.forEach(t),O=n(De," rend simple la s\xE9lection d\u2019un mod\xE8le et permet alors que celui-ci puisse \xEAtre utilis\xE9 dans toute biblioth\xE8que en aval en seulement quelques lignes de code. Voyons comment utiliser concr\xE8tement l\u2019un de ces mod\xE8les et comment contribuer au d\xE9veloppement de la communaut\xE9."),De.forEach(t),l=k(e),m=c(e,"P",{});var vs=u(m);X=n(vs,"Supposons que nous recherchions un mod\xE8le bas\xE9 sur le fran\xE7ais, capable de remplir des masques."),vs.forEach(t),Q=k(e),S=c(e,"DIV",{class:!0});var $s=u(S);B=c($s,"IMG",{src:!0,alt:!0,width:!0}),$s.forEach(t),we=k(e),F=c(e,"P",{});var W=u(F);Ne=n(W,"Nous choisissons le "),pe=c(W,"EM",{});var xs=u(pe);Oe=n(xs,"checkpoint"),xs.forEach(t),Se=k(W),de=c(W,"CODE",{});var Es=u(de);Be=n(Es,"camembert-base"),Es.forEach(t),Ie=n(W," pour essayer. L\u2019identifiant "),fe=c(W,"CODE",{});var qs=u(fe);Ve=n(qs,"camembert-base"),qs.forEach(t),Ge=n(W," est tout ce dont nous avons besoin pour commencer \xE0 utiliser le mod\xE8le ! Comme vous l\u2019avez vu dans les chapitres pr\xE9c\xE9dents, nous pouvons l\u2019instancier en utilisant la fonction "),he=c(W,"CODE",{});var js=u(he);He=n(js,"pipeline()"),js.forEach(t),Re=n(W," :"),W.forEach(t),Ce=k(e),U(se.$$.fragment,e),ze=k(e),U(te.$$.fragment,e),Le=k(e),b=c(e,"P",{});var v=u(b);Ue=n(v,"Comme vous pouvez le constater, le chargement d\u2019un mod\xE8le dans un pipeline est extr\xEAmement simple. La seule chose \xE0 laquelle vous devez faire attention est que le "),be=c(v,"EM",{});var Ms=u(be);Je=n(Ms,"checkpoint"),Ms.forEach(t),Ke=n(v," choisi soit adapt\xE9 \xE0 la t\xE2che pour laquelle il va \xEAtre utilis\xE9. Par exemple, ici nous chargeons le "),_e=c(v,"EM",{});var ws=u(_e);Qe=n(ws,"checkpoint"),ws.forEach(t),We=k(v),ke=c(v,"CODE",{});var Cs=u(ke);Xe=n(Cs,"camembert-base"),Cs.forEach(t),Ye=n(v," dans le pipeline "),ge=c(v,"CODE",{});var zs=u(ge);Ze=n(zs,"fill-mask"),zs.forEach(t),es=n(v,", ce qui est tout \xE0 fait correct. Mais si nous chargerions ce "),ve=c(v,"EM",{});var Ls=u(ve);ss=n(Ls,"checkpoint"),Ls.forEach(t),ts=n(v," dans le pipeline "),$e=c(v,"CODE",{});var Ts=u($e);as=n(Ts,"text-classification"),Ts.forEach(t),rs=n(v,", les r\xE9sultats n\u2019auraient aucun sens car la t\xEAte de "),xe=c(v,"CODE",{});var As=u(xe);ns=n(As,"camembert-base"),As.forEach(t),ls=n(v," n\u2019est pas adapt\xE9e \xE0 cette t\xE2che ! Nous recommandons d\u2019utiliser le s\xE9lecteur de t\xE2che dans l\u2019interface du "),Ee=c(v,"EM",{});var ys=u(Ee);os=n(ys,"Hub"),ys.forEach(t),is=n(v," afin de s\xE9lectionner les "),qe=c(v,"EM",{});var Fs=u(qe);cs=n(Fs,"checkpoints"),Fs.forEach(t),ms=n(v," appropri\xE9s :"),v.forEach(t),Te=k(e),ae=c(e,"DIV",{class:!0});var Ds=u(ae);re=c(Ds,"IMG",{src:!0,alt:!0,width:!0}),Ds.forEach(t),Ae=k(e),Z=c(e,"P",{});var Pe=u(Z);us=n(Pe,"Vous pouvez \xE9galement instancier le "),je=c(Pe,"EM",{});var Ps=u(je);ps=n(Ps,"checkpoint"),Ps.forEach(t),ds=n(Pe," en utilisant directement l\u2019architecture du mod\xE8le :"),Pe.forEach(t),ye=k(e),H.l(e),ie=k(e),U(ee.$$.fragment,e),this.h()},h(){M(o,"name","hf:doc:metadata"),M(o,"content",JSON.stringify(st)),M(g,"id","utilisation-de-modles-prentrans"),M(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),M(g,"href","#utilisation-de-modles-prentrans"),M(h,"class","relative group"),Ns(B.src,Y="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter4/camembert.gif")||M(B,"src",Y),M(B,"alt","Selecting the Camembert model."),M(B,"width","80%"),M(S,"class","flex justify-center"),Ns(re.src,fs="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter4/tasks.png")||M(re,"src",fs),M(re,"alt","The task selector on the web interface."),M(re,"width","80%"),M(ae,"class","flex justify-center")},m(e,p){s(document.head,o),f(e,d,p),J(a,e,p),f(e,q,p),f(e,h,p),s(h,g),s(g,P),J(z,P,null),s(h,L),s(h,N),s(N,I),f(e,w,p),ne[$].m(e,p),f(e,j,p),f(e,C,p),s(C,V),s(C,T),s(T,E),s(C,O),f(e,l,p),f(e,m,p),s(m,X),f(e,Q,p),f(e,S,p),s(S,B),f(e,we,p),f(e,F,p),s(F,Ne),s(F,pe),s(pe,Oe),s(F,Se),s(F,de),s(de,Be),s(F,Ie),s(F,fe),s(fe,Ve),s(F,Ge),s(F,he),s(he,He),s(F,Re),f(e,Ce,p),J(se,e,p),f(e,ze,p),J(te,e,p),f(e,Le,p),f(e,b,p),s(b,Ue),s(b,be),s(be,Je),s(b,Ke),s(b,_e),s(_e,Qe),s(b,We),s(b,ke),s(ke,Xe),s(b,Ye),s(b,ge),s(ge,Ze),s(b,es),s(b,ve),s(ve,ss),s(b,ts),s(b,$e),s($e,as),s(b,rs),s(b,xe),s(xe,ns),s(b,ls),s(b,Ee),s(Ee,os),s(b,is),s(b,qe),s(qe,cs),s(b,ms),f(e,Te,p),f(e,ae,p),s(ae,re),f(e,Ae,p),f(e,Z,p),s(Z,us),s(Z,je),s(je,ps),s(Z,ds),f(e,ye,p),le[G].m(e,p),f(e,ie,p),J(ee,e,p),Fe=!0},p(e,[p]){const oe={};p&1&&(oe.fw=e[0]),a.$set(oe);let ce=$;$=bs(e),$!==ce&&(Ss(),A(ne[ce],1,1,()=>{ne[ce]=null}),Os(),x=ne[$],x||(x=ne[$]=hs[$](e),x.c()),y(x,1),x.m(j.parentNode,j));let me=G;G=ks(e),G!==me&&(Ss(),A(le[me],1,1,()=>{le[me]=null}),Os(),H=le[G],H||(H=le[G]=_s[G](e),H.c()),y(H,1),H.m(ie.parentNode,ie));const Me={};p&2&&(Me.$$scope={dirty:p,ctx:e}),ee.$set(Me)},i(e){Fe||(y(a.$$.fragment,e),y(z.$$.fragment,e),y(x),y(se.$$.fragment,e),y(te.$$.fragment,e),y(H),y(ee.$$.fragment,e),Fe=!0)},o(e){A(a.$$.fragment,e),A(z.$$.fragment,e),A(x),A(se.$$.fragment,e),A(te.$$.fragment,e),A(H),A(ee.$$.fragment,e),Fe=!1},d(e){t(o),e&&t(d),K(a,e),e&&t(q),e&&t(h),K(z),e&&t(w),ne[$].d(e),e&&t(j),e&&t(C),e&&t(l),e&&t(m),e&&t(Q),e&&t(S),e&&t(we),e&&t(F),e&&t(Ce),K(se,e),e&&t(ze),K(te,e),e&&t(Le),e&&t(b),e&&t(Te),e&&t(ae),e&&t(Ae),e&&t(Z),e&&t(ye),le[G].d(e),e&&t(ie),K(ee,e)}}}const st={local:"utilisation-de-modles-prentrans",title:"Utilisation de mod\xE8les pr\xE9-entra\xEEn\xE9s"};function tt(D,o,d){let a="pt";return Rs(()=>{const q=new URLSearchParams(window.location.search);d(0,a=q.get("fw")||"pt")}),[a]}class ct extends Is{constructor(o){super();Vs(this,o,tt,et,Gs,{})}}export{ct as default,st as metadata};
