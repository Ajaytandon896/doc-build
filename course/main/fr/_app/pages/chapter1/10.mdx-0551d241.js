import{S as ts,i as rs,s as ss,e as n,k as p,w as c,t as $,M as ns,c as a,d as t,m as u,a as i,x as m,h as g,b as o,F as r,g as l,y as d,L as as,q as f,o as h,B as v,v as is}from"../../chunks/vendor-1e8b365d.js";import{I as x}from"../../chunks/IconCopyLink-483c28ba.js";import{C as fr}from"../../chunks/CodeBlock-e5764662.js";import{Q as q}from"../../chunks/Question-31426fe2.js";function os(hr){let b,Oe,w,L,ye,K,Ut,_e,Tt,Ge,qe,Qt,We,be,Mt,Xe,y,U,Ee,O,Ft,_,It,ke,Bt,Rt,Ae,Dt,Vt,Ye,G,Ze,E,T,Se,W,Jt,Pe,Kt,et,X,tt,Y,rt,k,Q,ze,Z,Ot,Ne,Gt,st,ee,nt,te,at,A,M,Ce,re,Wt,He,Xt,it,se,ot,ne,lt,S,F,je,ae,Yt,Le,Zt,pt,ie,ut,P,I,Ue,oe,er,Te,tr,ct,le,mt,z,B,Qe,pe,rr,Me,sr,dt,ue,ft,N,R,Fe,ce,nr,me,ar,Ie,ir,or,ht,de,vt,C,D,Be,fe,lr,Re,pr,$t,he,gt,H,V,De,ve,ur,Ve,cr,xt,$e,qt,j,J,Je,ge,mr,Ke,dr,bt,xe,wt;return K=new x({}),O=new x({}),G=new q({props:{choices:[{text:"R\xE9sum\xE9 de texte",explain:'Regardez \xE0 nouveau sur la <a href="https://huggingface.co/roberta-large-mnli">page roberta-large-mnli</a>.'},{text:"Classification de texte",explain:"Pour \xEAtre plus pr\xE9cis, il classifie si deux phrases sont logiquement li\xE9es entre elles parmis trois possibilit\xE9s (contradiction, neutre, lien). Il s'agit d'une t\xE2che aussi appel\xE9e <em>inference de langage naturel</em>.",correct:!0},{text:"G\xE9n\xE9ration de texte",explain:'Regardez \xE0 nouveau sur la <a href="https://huggingface.co/roberta-large-mnli">page roberta-large-mnli</a>.'}]}}),W=new x({}),X=new fr({props:{code:`from transformers import pipeline

ner = pipeline("ner", grouped_entities=True)
ner(
    "My name is Sylvain and I work at Hugging Face in Brooklyn."
)  # Je m'appelle Sylvain et je travaille \xE0 Hugging Face \xE0 Brooklyn.`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

ner = pipeline(<span class="hljs-string">&quot;ner&quot;</span>, grouped_entities=<span class="hljs-literal">True</span>)
ner(
    <span class="hljs-string">&quot;My name is Sylvain and I work at Hugging Face in Brooklyn.&quot;</span>
)  <span class="hljs-comment"># Je m&#x27;appelle Sylvain et je travaille \xE0 Hugging Face \xE0 Brooklyn.</span>`}}),Y=new q({props:{choices:[{text:'Il renvoie les scores de classification pour cette phrase, avec les labels "positive" ou "negative".',explain:"Cela correspondrait au pipeline <code>d'analyse de sentiment</code> (<i>sentiment-analysis</i> dans la documentation d'Hugging-Face)."},{text:"Il renvoie un texte g\xE9n\xE9r\xE9 qui compl\xE8te cette phrase.",explain:"Cela correspondrait au pipeline de <code>g\xE9n\xE9ration de texte</code> (<i>text-generation</i> dans la documentation d'Hugging-Face)."},{text:"Il renvoie les entit\xE9s nomm\xE9es dans cette phrase, telles que les personnes, les organisations ou lieux.",explain:'De plus, avec <code>grouped_entities=True</code>, cela regroupe les mots appartenant \xE0 la m\xEAme entit\xE9, comme par exemple "Hugging Face".',correct:!0}]}}),Z=new x({}),ee=new fr({props:{code:`from transformers import pipeline

filler = pipeline("fill-mask", model="bert-base-cased")
result = filler("...")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

filler = pipeline(<span class="hljs-string">&quot;fill-mask&quot;</span>, model=<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
result = filler(<span class="hljs-string">&quot;...&quot;</span>)`}}),te=new q({props:{choices:[{text:"This &#60;mask> has been waiting for you. # Ce &#60;mask> vous attend.",explain:"Regardez la description du mod\xE8le <code>bert-base-cased</code> et essayez de trouver votre erreur."},{text:"This [MASK] has been waiting for you. # Ce [MASK] vous attend.",explain:"Le mod\xE8le utilise [MASK] comme mot-masque.",correct:!0},{text:"This man has been waiting for you. # Cet homme vous attend.",explain:"Ce pipeline permet de remplacer les mot manquants donc il a besoin d'un mot-masque."}]}}),re=new x({}),se=new fr({props:{code:`from transformers import pipeline

classifier = pipeline("zero-shot-classification")
result = classifier(
    "This is a course about the Transformers library"
)  # C'est un cours sur la biblioth\xE8que Transformers`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

classifier = pipeline(<span class="hljs-string">&quot;zero-shot-classification&quot;</span>)
result = classifier(
    <span class="hljs-string">&quot;This is a course about the Transformers library&quot;</span>
)  <span class="hljs-comment"># C&#x27;est un cours sur la biblioth\xE8que Transformers</span>`}}),ne=new q({props:{choices:[{text:"Ce pipeline n\xE9cessite que des \xE9tiquettes soient donn\xE9es pour classifier ce texte.",explain:"Le code doit inclure <code>candidate_labels=[...]</code>.",correct:!0},{text:"Ce pipeline n\xE9cessite que des phrases soient donn\xE9es, pas juste une phrase.",explain:"Bien que ce pipeline puisse prendre une liste de phrases \xE0 traiter (comme tous les autres pipelines)."},{text:"La biblioth\xE8que \u{1F917} <i>Transformers</i> est cass\xE9e, comme d'habitude.",explain:"Nous n'avons aucun commentaire pour cette r\xE9ponse !"},{text:"Ce pipeline n\xE9cessite des phrases plus longues, celle-ci est trop courte.",explain:"Notez que si un texte est tr\xE8s long, il est tronqu\xE9 par le pipeline."}]}}),ae=new x({}),ie=new q({props:{choices:[{text:"Transf\xE9rer les connaissances d'un mod\xE8le pr\xE9-entra\xEEn\xE9 vers un nouveau mod\xE8le en entra\xEEnant ce second mod\xE8le sur le m\xEAme jeu de donn\xE9es.",explain:"Non, cela donnerait deux versions du m\xEAme mod\xE8le."},{text:"Transf\xE9rer les connaissances d'un mod\xE8le pr\xE9-entra\xEEn\xE9 vers un nouveau mod\xE8le en initialisant ce second mod\xE8le avec les poids du premier.",explain:"Quand le second mod\xE8le est entra\xEEn\xE9 sur une nouvelle t\xE2che, il transf\xE8re les connaissances du premier mod\xE8le.",correct:!0},{text:"Transf\xE9rer les connaissances d'un mod\xE8le pr\xE9-entra\xEEn\xE9 vers un nouveau mod\xE8le en construisant le second mod\xE8le avec la m\xEAme architecture que le premier.",explain:"L'architecture correspond uniquement \xE0 la structure du mod\xE8le, pas \xE0 ses connaissances. Il n'y a donc pas de connaissances \xE0 transf\xE9rer dans ce cas."}]}}),oe=new x({}),le=new q({props:{choices:[{text:"Vrai",explain:"Le pr\xE9-entra\xEEnement est <em>autosupervis\xE9</em>, ce qui signifie que les \xE9tiquettes sont cr\xE9\xE9es automatiquement \xE0 partir des donn\xE9es d'entr\xE9e (comme pr\xE9dire le mot suivant ou remplacer des mots masqu\xE9s).",correct:!0},{text:"Faux",explain:"Ce n'est pas la bonne r\xE9ponse."}]}}),pe=new x({}),ue=new q({props:{choices:[{text:"Si un mod\xE8le est un b\xE2timent, son architecture est le plan de construction et les poids repr\xE9sentent les personnes qui vivent dedans.",explain:"Si on suit cette m\xE9taphore, les poids seraient plut\xF4t les briques et les mat\xE9riaux utilis\xE9s pour construire le b\xE2timent."},{text:"Une architecture est une carte pour construire un mod\xE8le et les poids sont les villes repr\xE9sent\xE9es sur la carte.",explain:"Le probl\xE8me avec cette m\xE9taphore est que la carte repr\xE9sente une r\xE9alit\xE9 existante (il n'y a qu'une seule ville nomm\xE9e Paris en France). Pour une architecture donn\xE9e, plusieurs poids sont possibles."},{text:"Une architecture est une succession de fonctions math\xE9matiques permettant de construire un mod\xE8le et les poids sont les param\xE8tres de ces fonctions.",explain:"Le m\xEAme ensemble de fonctions math\xE9matiques peut \xEAtre utilis\xE9 pour construire plusieurs mod\xE8les avec diff\xE9rents param\xE8tres (poids).",correct:!0}]}}),ce=new x({}),de=new q({props:{choices:[{text:"Un mod\xE8le bas\xE9 sur l'encodeur",explain:"Un mod\xE8le bas\xE9 sur l'encodeur g\xE9n\xE8re une repr\xE9sentation de la phrase enti\xE8re qui est plus adapt\xE9e \xE0 des t\xE2ches de classification."},{text:"Un mod\xE8le bas\xE9 sur le d\xE9codeur",explain:"Les mod\xE8les bas\xE9s sur le d\xE9codeur sont bien pour g\xE9n\xE9rer du texte \xE0 partir d'une instruction.",correct:!0},{text:"Un mod\xE8le de s\xE9quence-\xE0-s\xE9quence",explain:"Les mod\xE8les de s\xE9quence-\xE0-s\xE9quence sont davantage adapt\xE9s aux t\xE2ches qui n\xE9cessitent de g\xE9n\xE9rer des phrases \xE0 partir d'un texte donn\xE9 en entr\xE9e, pas un texte g\xE9n\xE9r\xE9 \xE0 partir d'une instruction."}]}}),fe=new x({}),he=new q({props:{choices:[{text:"Un mod\xE8le bas\xE9 sur l'encodeur",explain:"Un mod\xE8le bas\xE9 sur l'encodeur g\xE9n\xE8re une repr\xE9sentation de la phrase enti\xE8re qui est plus adapt\xE9e \xE0 des t\xE2ches de classification."},{text:"Un mod\xE8le bas\xE9 sur le d\xE9codeur",explain:"Les mod\xE8les bas\xE9s sur le d\xE9codeur sont bien pour g\xE9n\xE9rer du texte (comme les r\xE9sum\xE9s) mais ils n'ont pas la capacit\xE9 d'exploiter un contexte comme un texte entier pour en faire un r\xE9sum\xE9."},{text:"Un mod\xE8le de s\xE9quence-\xE0-s\xE9quence",explain:"Les mod\xE8les de s\xE9quence-\xE0-s\xE9quence sont parfaitement adapt\xE9s \xE0 une t\xE2che de r\xE9sum\xE9.",correct:!0}]}}),ve=new x({}),$e=new q({props:{choices:[{text:"Un mod\xE8le bas\xE9 sur l'encodeur",explain:"Un mod\xE8le bas\xE9 sur un encodeur g\xE9n\xE8re une repr\xE9sentation de la phrase enti\xE8re et est donc parfaitement adapt\xE9 \xE0 des t\xE2ches de classification.",correct:!0},{text:"Un mod\xE8le bas\xE9 sur le d\xE9codeur",explain:"Les mod\xE8les bas\xE9s sur le d\xE9codeur sont bons pour g\xE9n\xE9rer des textes et non pour extraire une \xE9tiquette d'une phrase."},{text:"Un mod\xE8le de s\xE9quence-\xE0-s\xE9quence",explain:"Les mod\xE8les de s\xE9quence-\xE0-s\xE9quence sont davantage adapt\xE9s pour des t\xE2ches qui n\xE9cessitent de g\xE9n\xE9rer des phrases \xE0 partir d'un texte donn\xE9 en entr\xE9e, non pour extraire une \xE9tiquette \xE0 partir d'une phrase."}]}}),ge=new x({}),xe=new q({props:{choices:[{text:"Le mod\xE8le est une version <i>finetun\xE9e</i> d'un mod\xE8le pr\xE9-entra\xEEn\xE9 et il a conserv\xE9 ses biais.",explain:"Avec l'apprentissage par transfert, les biais du mod\xE8le pr\xE9-entra\xEEn\xE9 perdurent dans le mod\xE8le <i>finetun\xE9</i>.",correct:!0},{text:"Le mod\xE8le a \xE9t\xE9 entra\xEEn\xE9 sur des donn\xE9es qui sont biais\xE9es.",explain:"Ceci repr\xE9sente la source de biais la plus \xE9vidente mais n'est pas la seule possible.",correct:!0},{text:"La m\xE9trique optimis\xE9e lors de l'entra\xEEnement du mod\xE8le est biais\xE9e.",explain:"Une source moins \xE9vidente est la fa\xE7on dont le mod\xE8le est entra\xEEn\xE9. Votre mod\xE8le va de fa\xE7on aveugle optimiser la m\xE9trique que vous avez s\xE9lectionn\xE9e, sans prendre aucun recul.",correct:!0}]}}),{c(){b=n("meta"),Oe=p(),w=n("h1"),L=n("a"),ye=n("span"),c(K.$$.fragment),Ut=p(),_e=n("span"),Tt=$("Quiz de fin de chapitre"),Ge=p(),qe=n("p"),Qt=$("Ce chapitre a couvert un grand nombre de notions ! Ne vous inqui\xE9tez pas si vous n\u2019avez pas compris tous les d\xE9tails, les chapitres suivants vous aideront \xE0 comprendre comment les choses fonctionnent concr\xE8tement."),We=p(),be=n("p"),Mt=$("Mais avant d\u2019aller plus loin, prenons un instant pour voir ce que vous avez appris dans ce chapitre !"),Xe=p(),y=n("h3"),U=n("a"),Ee=n("span"),c(O.$$.fragment),Ft=p(),_=n("span"),It=$("1. Explorez le "),ke=n("em"),Bt=$("Hub"),Rt=$(" et cherchez le mod\xE8le "),Ae=n("code"),Dt=$("roberta-large-mnli"),Vt=$(". Quelle t\xE2che accomplit-il ?"),Ye=p(),c(G.$$.fragment),Ze=p(),E=n("h3"),T=n("a"),Se=n("span"),c(W.$$.fragment),Jt=p(),Pe=n("span"),Kt=$("2. Que renvoie le code suivant ?"),et=p(),c(X.$$.fragment),tt=p(),c(Y.$$.fragment),rt=p(),k=n("h3"),Q=n("a"),ze=n("span"),c(Z.$$.fragment),Ot=p(),Ne=n("span"),Gt=$("3. Que remplace \xAB \u2026 \xBB dans ce code ?"),st=p(),c(ee.$$.fragment),nt=p(),c(te.$$.fragment),at=p(),A=n("h3"),M=n("a"),Ce=n("span"),c(re.$$.fragment),Wt=p(),He=n("span"),Xt=$("4. Pourquoi ce code ne fonctionne-t-il pas ?"),it=p(),c(se.$$.fragment),ot=p(),c(ne.$$.fragment),lt=p(),S=n("h3"),F=n("a"),je=n("span"),c(ae.$$.fragment),Yt=p(),Le=n("span"),Zt=$("5. Que signifie \xAB apprentissage par transfert \xBB ?"),pt=p(),c(ie.$$.fragment),ut=p(),P=n("h3"),I=n("a"),Ue=n("span"),c(oe.$$.fragment),er=p(),Te=n("span"),tr=$("6. Vrai ou faux ? Un mod\xE8le de langage n\u2019a g\xE9n\xE9ralement pas besoin d\u2019\xE9tiquettes pour son pr\xE9-entra\xEEnement."),ct=p(),c(le.$$.fragment),mt=p(),z=n("h3"),B=n("a"),Qe=n("span"),c(pe.$$.fragment),rr=p(),Me=n("span"),sr=$("7. S\xE9lectionnez la phrase qui d\xE9crit le mieux les termes \xAB mod\xE8le \xBB, \xAB architecture \xBB et \xAB poids \xBB."),dt=p(),c(ue.$$.fragment),ft=p(),N=n("h3"),R=n("a"),Fe=n("span"),c(ce.$$.fragment),nr=p(),me=n("span"),ar=$("8. Parmi ces types de mod\xE8les, quel est le plus appropri\xE9 pour g\xE9n\xE9rer du texte \xE0 partir d\u2019une instruction ("),Ie=n("em"),ir=$("prompt"),or=$(") ?"),ht=p(),c(de.$$.fragment),vt=p(),C=n("h3"),D=n("a"),Be=n("span"),c(fe.$$.fragment),lr=p(),Re=n("span"),pr=$("9. Parmi ces types de mod\xE8les, quel est le plus appropri\xE9 pour le r\xE9sum\xE9 de texte ?"),$t=p(),c(he.$$.fragment),gt=p(),H=n("h3"),V=n("a"),De=n("span"),c(ve.$$.fragment),ur=p(),Ve=n("span"),cr=$("10. Quel type de mod\xE8le utiliseriez-vous pour classifier des entr\xE9es de texte en fonction de certains labels ?"),xt=p(),c($e.$$.fragment),qt=p(),j=n("h3"),J=n("a"),Je=n("span"),c(ge.$$.fragment),mr=p(),Ke=n("span"),dr=$("11. De quelle source possible peut \xEAtre le biais observ\xE9 dans un mod\xE8le ?"),bt=p(),c(xe.$$.fragment),this.h()},l(e){const s=ns('[data-svelte="svelte-1phssyn"]',document.head);b=a(s,"META",{name:!0,content:!0}),s.forEach(t),Oe=u(e),w=a(e,"H1",{class:!0});var yt=i(w);L=a(yt,"A",{id:!0,class:!0,href:!0});var vr=i(L);ye=a(vr,"SPAN",{});var $r=i(ye);m(K.$$.fragment,$r),$r.forEach(t),vr.forEach(t),Ut=u(yt),_e=a(yt,"SPAN",{});var gr=i(_e);Tt=g(gr,"Quiz de fin de chapitre"),gr.forEach(t),yt.forEach(t),Ge=u(e),qe=a(e,"P",{});var xr=i(qe);Qt=g(xr,"Ce chapitre a couvert un grand nombre de notions ! Ne vous inqui\xE9tez pas si vous n\u2019avez pas compris tous les d\xE9tails, les chapitres suivants vous aideront \xE0 comprendre comment les choses fonctionnent concr\xE8tement."),xr.forEach(t),We=u(e),be=a(e,"P",{});var qr=i(be);Mt=g(qr,"Mais avant d\u2019aller plus loin, prenons un instant pour voir ce que vous avez appris dans ce chapitre !"),qr.forEach(t),Xe=u(e),y=a(e,"H3",{class:!0});var _t=i(y);U=a(_t,"A",{id:!0,class:!0,href:!0});var br=i(U);Ee=a(br,"SPAN",{});var wr=i(Ee);m(O.$$.fragment,wr),wr.forEach(t),br.forEach(t),Ft=u(_t),_=a(_t,"SPAN",{});var we=i(_);It=g(we,"1. Explorez le "),ke=a(we,"EM",{});var yr=i(ke);Bt=g(yr,"Hub"),yr.forEach(t),Rt=g(we," et cherchez le mod\xE8le "),Ae=a(we,"CODE",{});var _r=i(Ae);Dt=g(_r,"roberta-large-mnli"),_r.forEach(t),Vt=g(we,". Quelle t\xE2che accomplit-il ?"),we.forEach(t),_t.forEach(t),Ye=u(e),m(G.$$.fragment,e),Ze=u(e),E=a(e,"H3",{class:!0});var Et=i(E);T=a(Et,"A",{id:!0,class:!0,href:!0});var Er=i(T);Se=a(Er,"SPAN",{});var kr=i(Se);m(W.$$.fragment,kr),kr.forEach(t),Er.forEach(t),Jt=u(Et),Pe=a(Et,"SPAN",{});var Ar=i(Pe);Kt=g(Ar,"2. Que renvoie le code suivant ?"),Ar.forEach(t),Et.forEach(t),et=u(e),m(X.$$.fragment,e),tt=u(e),m(Y.$$.fragment,e),rt=u(e),k=a(e,"H3",{class:!0});var kt=i(k);Q=a(kt,"A",{id:!0,class:!0,href:!0});var Sr=i(Q);ze=a(Sr,"SPAN",{});var Pr=i(ze);m(Z.$$.fragment,Pr),Pr.forEach(t),Sr.forEach(t),Ot=u(kt),Ne=a(kt,"SPAN",{});var zr=i(Ne);Gt=g(zr,"3. Que remplace \xAB \u2026 \xBB dans ce code ?"),zr.forEach(t),kt.forEach(t),st=u(e),m(ee.$$.fragment,e),nt=u(e),m(te.$$.fragment,e),at=u(e),A=a(e,"H3",{class:!0});var At=i(A);M=a(At,"A",{id:!0,class:!0,href:!0});var Nr=i(M);Ce=a(Nr,"SPAN",{});var Cr=i(Ce);m(re.$$.fragment,Cr),Cr.forEach(t),Nr.forEach(t),Wt=u(At),He=a(At,"SPAN",{});var Hr=i(He);Xt=g(Hr,"4. Pourquoi ce code ne fonctionne-t-il pas ?"),Hr.forEach(t),At.forEach(t),it=u(e),m(se.$$.fragment,e),ot=u(e),m(ne.$$.fragment,e),lt=u(e),S=a(e,"H3",{class:!0});var St=i(S);F=a(St,"A",{id:!0,class:!0,href:!0});var jr=i(F);je=a(jr,"SPAN",{});var Lr=i(je);m(ae.$$.fragment,Lr),Lr.forEach(t),jr.forEach(t),Yt=u(St),Le=a(St,"SPAN",{});var Ur=i(Le);Zt=g(Ur,"5. Que signifie \xAB apprentissage par transfert \xBB ?"),Ur.forEach(t),St.forEach(t),pt=u(e),m(ie.$$.fragment,e),ut=u(e),P=a(e,"H3",{class:!0});var Pt=i(P);I=a(Pt,"A",{id:!0,class:!0,href:!0});var Tr=i(I);Ue=a(Tr,"SPAN",{});var Qr=i(Ue);m(oe.$$.fragment,Qr),Qr.forEach(t),Tr.forEach(t),er=u(Pt),Te=a(Pt,"SPAN",{});var Mr=i(Te);tr=g(Mr,"6. Vrai ou faux ? Un mod\xE8le de langage n\u2019a g\xE9n\xE9ralement pas besoin d\u2019\xE9tiquettes pour son pr\xE9-entra\xEEnement."),Mr.forEach(t),Pt.forEach(t),ct=u(e),m(le.$$.fragment,e),mt=u(e),z=a(e,"H3",{class:!0});var zt=i(z);B=a(zt,"A",{id:!0,class:!0,href:!0});var Fr=i(B);Qe=a(Fr,"SPAN",{});var Ir=i(Qe);m(pe.$$.fragment,Ir),Ir.forEach(t),Fr.forEach(t),rr=u(zt),Me=a(zt,"SPAN",{});var Br=i(Me);sr=g(Br,"7. S\xE9lectionnez la phrase qui d\xE9crit le mieux les termes \xAB mod\xE8le \xBB, \xAB architecture \xBB et \xAB poids \xBB."),Br.forEach(t),zt.forEach(t),dt=u(e),m(ue.$$.fragment,e),ft=u(e),N=a(e,"H3",{class:!0});var Nt=i(N);R=a(Nt,"A",{id:!0,class:!0,href:!0});var Rr=i(R);Fe=a(Rr,"SPAN",{});var Dr=i(Fe);m(ce.$$.fragment,Dr),Dr.forEach(t),Rr.forEach(t),nr=u(Nt),me=a(Nt,"SPAN",{});var Ct=i(me);ar=g(Ct,"8. Parmi ces types de mod\xE8les, quel est le plus appropri\xE9 pour g\xE9n\xE9rer du texte \xE0 partir d\u2019une instruction ("),Ie=a(Ct,"EM",{});var Vr=i(Ie);ir=g(Vr,"prompt"),Vr.forEach(t),or=g(Ct,") ?"),Ct.forEach(t),Nt.forEach(t),ht=u(e),m(de.$$.fragment,e),vt=u(e),C=a(e,"H3",{class:!0});var Ht=i(C);D=a(Ht,"A",{id:!0,class:!0,href:!0});var Jr=i(D);Be=a(Jr,"SPAN",{});var Kr=i(Be);m(fe.$$.fragment,Kr),Kr.forEach(t),Jr.forEach(t),lr=u(Ht),Re=a(Ht,"SPAN",{});var Or=i(Re);pr=g(Or,"9. Parmi ces types de mod\xE8les, quel est le plus appropri\xE9 pour le r\xE9sum\xE9 de texte ?"),Or.forEach(t),Ht.forEach(t),$t=u(e),m(he.$$.fragment,e),gt=u(e),H=a(e,"H3",{class:!0});var jt=i(H);V=a(jt,"A",{id:!0,class:!0,href:!0});var Gr=i(V);De=a(Gr,"SPAN",{});var Wr=i(De);m(ve.$$.fragment,Wr),Wr.forEach(t),Gr.forEach(t),ur=u(jt),Ve=a(jt,"SPAN",{});var Xr=i(Ve);cr=g(Xr,"10. Quel type de mod\xE8le utiliseriez-vous pour classifier des entr\xE9es de texte en fonction de certains labels ?"),Xr.forEach(t),jt.forEach(t),xt=u(e),m($e.$$.fragment,e),qt=u(e),j=a(e,"H3",{class:!0});var Lt=i(j);J=a(Lt,"A",{id:!0,class:!0,href:!0});var Yr=i(J);Je=a(Yr,"SPAN",{});var Zr=i(Je);m(ge.$$.fragment,Zr),Zr.forEach(t),Yr.forEach(t),mr=u(Lt),Ke=a(Lt,"SPAN",{});var es=i(Ke);dr=g(es,"11. De quelle source possible peut \xEAtre le biais observ\xE9 dans un mod\xE8le ?"),es.forEach(t),Lt.forEach(t),bt=u(e),m(xe.$$.fragment,e),this.h()},h(){o(b,"name","hf:doc:metadata"),o(b,"content",JSON.stringify(ls)),o(L,"id","quiz-de-fin-de-chapitre"),o(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(L,"href","#quiz-de-fin-de-chapitre"),o(w,"class","relative group"),o(U,"id","1.-explorez-le-<em>hub</em>-et-cherchez-le-mod\xE8le-<code>roberta-large-mnli</code>.-quelle-t\xE2che-accomplit-il-?"),o(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(U,"href","#1.-explorez-le-<em>hub</em>-et-cherchez-le-mod\xE8le-<code>roberta-large-mnli</code>.-quelle-t\xE2che-accomplit-il-?"),o(y,"class","relative group"),o(T,"id","2.-que-renvoie-le-code-suivant-?"),o(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(T,"href","#2.-que-renvoie-le-code-suivant-?"),o(E,"class","relative group"),o(Q,"id","3.-que-remplace-\xAB-\u2026-\xBB-dans-ce-code-?"),o(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(Q,"href","#3.-que-remplace-\xAB-\u2026-\xBB-dans-ce-code-?"),o(k,"class","relative group"),o(M,"id","4.-pourquoi-ce-code-ne-fonctionne-t-il-pas-?"),o(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(M,"href","#4.-pourquoi-ce-code-ne-fonctionne-t-il-pas-?"),o(A,"class","relative group"),o(F,"id","5.-que-signifie-\xAB-apprentissage-par-transfert-\xBB-?"),o(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(F,"href","#5.-que-signifie-\xAB-apprentissage-par-transfert-\xBB-?"),o(S,"class","relative group"),o(I,"id","6.-vrai-ou-faux-?-un-mod\xE8le-de-langage-n\u2019a-g\xE9n\xE9ralement-pas-besoin-d\u2019\xE9tiquettes-pour-son-pr\xE9-entra\xEEnement."),o(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(I,"href","#6.-vrai-ou-faux-?-un-mod\xE8le-de-langage-n\u2019a-g\xE9n\xE9ralement-pas-besoin-d\u2019\xE9tiquettes-pour-son-pr\xE9-entra\xEEnement."),o(P,"class","relative group"),o(B,"id","7.-s\xE9lectionnez-la-phrase-qui-d\xE9crit-le-mieux-les-termes-\xAB-mod\xE8le-\xBB,-\xAB-architecture-\xBB-et-\xAB-poids-\xBB."),o(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(B,"href","#7.-s\xE9lectionnez-la-phrase-qui-d\xE9crit-le-mieux-les-termes-\xAB-mod\xE8le-\xBB,-\xAB-architecture-\xBB-et-\xAB-poids-\xBB."),o(z,"class","relative group"),o(R,"id","8.-parmi-ces-types-de-mod\xE8les,-quel-est-le-plus-appropri\xE9-pour-g\xE9n\xE9rer-du-texte-\xE0-partir-d\u2019une-instruction-(<em>prompt</em>)-?"),o(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(R,"href","#8.-parmi-ces-types-de-mod\xE8les,-quel-est-le-plus-appropri\xE9-pour-g\xE9n\xE9rer-du-texte-\xE0-partir-d\u2019une-instruction-(<em>prompt</em>)-?"),o(N,"class","relative group"),o(D,"id","9.-parmi-ces-types-de-mod\xE8les,-quel-est-le-plus-appropri\xE9-pour-le-r\xE9sum\xE9-de-texte-?"),o(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(D,"href","#9.-parmi-ces-types-de-mod\xE8les,-quel-est-le-plus-appropri\xE9-pour-le-r\xE9sum\xE9-de-texte-?"),o(C,"class","relative group"),o(V,"id","10.-quel-type-de-mod\xE8le-utiliseriez-vous-pour-classifier-des-entr\xE9es-de-texte-en-fonction-de-certains-labels-?"),o(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(V,"href","#10.-quel-type-de-mod\xE8le-utiliseriez-vous-pour-classifier-des-entr\xE9es-de-texte-en-fonction-de-certains-labels-?"),o(H,"class","relative group"),o(J,"id","11.-de-quelle-source-possible-peut-\xEAtre-le-biais-observ\xE9-dans-un-mod\xE8le-?"),o(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(J,"href","#11.-de-quelle-source-possible-peut-\xEAtre-le-biais-observ\xE9-dans-un-mod\xE8le-?"),o(j,"class","relative group")},m(e,s){r(document.head,b),l(e,Oe,s),l(e,w,s),r(w,L),r(L,ye),d(K,ye,null),r(w,Ut),r(w,_e),r(_e,Tt),l(e,Ge,s),l(e,qe,s),r(qe,Qt),l(e,We,s),l(e,be,s),r(be,Mt),l(e,Xe,s),l(e,y,s),r(y,U),r(U,Ee),d(O,Ee,null),r(y,Ft),r(y,_),r(_,It),r(_,ke),r(ke,Bt),r(_,Rt),r(_,Ae),r(Ae,Dt),r(_,Vt),l(e,Ye,s),d(G,e,s),l(e,Ze,s),l(e,E,s),r(E,T),r(T,Se),d(W,Se,null),r(E,Jt),r(E,Pe),r(Pe,Kt),l(e,et,s),d(X,e,s),l(e,tt,s),d(Y,e,s),l(e,rt,s),l(e,k,s),r(k,Q),r(Q,ze),d(Z,ze,null),r(k,Ot),r(k,Ne),r(Ne,Gt),l(e,st,s),d(ee,e,s),l(e,nt,s),d(te,e,s),l(e,at,s),l(e,A,s),r(A,M),r(M,Ce),d(re,Ce,null),r(A,Wt),r(A,He),r(He,Xt),l(e,it,s),d(se,e,s),l(e,ot,s),d(ne,e,s),l(e,lt,s),l(e,S,s),r(S,F),r(F,je),d(ae,je,null),r(S,Yt),r(S,Le),r(Le,Zt),l(e,pt,s),d(ie,e,s),l(e,ut,s),l(e,P,s),r(P,I),r(I,Ue),d(oe,Ue,null),r(P,er),r(P,Te),r(Te,tr),l(e,ct,s),d(le,e,s),l(e,mt,s),l(e,z,s),r(z,B),r(B,Qe),d(pe,Qe,null),r(z,rr),r(z,Me),r(Me,sr),l(e,dt,s),d(ue,e,s),l(e,ft,s),l(e,N,s),r(N,R),r(R,Fe),d(ce,Fe,null),r(N,nr),r(N,me),r(me,ar),r(me,Ie),r(Ie,ir),r(me,or),l(e,ht,s),d(de,e,s),l(e,vt,s),l(e,C,s),r(C,D),r(D,Be),d(fe,Be,null),r(C,lr),r(C,Re),r(Re,pr),l(e,$t,s),d(he,e,s),l(e,gt,s),l(e,H,s),r(H,V),r(V,De),d(ve,De,null),r(H,ur),r(H,Ve),r(Ve,cr),l(e,xt,s),d($e,e,s),l(e,qt,s),l(e,j,s),r(j,J),r(J,Je),d(ge,Je,null),r(j,mr),r(j,Ke),r(Ke,dr),l(e,bt,s),d(xe,e,s),wt=!0},p:as,i(e){wt||(f(K.$$.fragment,e),f(O.$$.fragment,e),f(G.$$.fragment,e),f(W.$$.fragment,e),f(X.$$.fragment,e),f(Y.$$.fragment,e),f(Z.$$.fragment,e),f(ee.$$.fragment,e),f(te.$$.fragment,e),f(re.$$.fragment,e),f(se.$$.fragment,e),f(ne.$$.fragment,e),f(ae.$$.fragment,e),f(ie.$$.fragment,e),f(oe.$$.fragment,e),f(le.$$.fragment,e),f(pe.$$.fragment,e),f(ue.$$.fragment,e),f(ce.$$.fragment,e),f(de.$$.fragment,e),f(fe.$$.fragment,e),f(he.$$.fragment,e),f(ve.$$.fragment,e),f($e.$$.fragment,e),f(ge.$$.fragment,e),f(xe.$$.fragment,e),wt=!0)},o(e){h(K.$$.fragment,e),h(O.$$.fragment,e),h(G.$$.fragment,e),h(W.$$.fragment,e),h(X.$$.fragment,e),h(Y.$$.fragment,e),h(Z.$$.fragment,e),h(ee.$$.fragment,e),h(te.$$.fragment,e),h(re.$$.fragment,e),h(se.$$.fragment,e),h(ne.$$.fragment,e),h(ae.$$.fragment,e),h(ie.$$.fragment,e),h(oe.$$.fragment,e),h(le.$$.fragment,e),h(pe.$$.fragment,e),h(ue.$$.fragment,e),h(ce.$$.fragment,e),h(de.$$.fragment,e),h(fe.$$.fragment,e),h(he.$$.fragment,e),h(ve.$$.fragment,e),h($e.$$.fragment,e),h(ge.$$.fragment,e),h(xe.$$.fragment,e),wt=!1},d(e){t(b),e&&t(Oe),e&&t(w),v(K),e&&t(Ge),e&&t(qe),e&&t(We),e&&t(be),e&&t(Xe),e&&t(y),v(O),e&&t(Ye),v(G,e),e&&t(Ze),e&&t(E),v(W),e&&t(et),v(X,e),e&&t(tt),v(Y,e),e&&t(rt),e&&t(k),v(Z),e&&t(st),v(ee,e),e&&t(nt),v(te,e),e&&t(at),e&&t(A),v(re),e&&t(it),v(se,e),e&&t(ot),v(ne,e),e&&t(lt),e&&t(S),v(ae),e&&t(pt),v(ie,e),e&&t(ut),e&&t(P),v(oe),e&&t(ct),v(le,e),e&&t(mt),e&&t(z),v(pe),e&&t(dt),v(ue,e),e&&t(ft),e&&t(N),v(ce),e&&t(ht),v(de,e),e&&t(vt),e&&t(C),v(fe),e&&t($t),v(he,e),e&&t(gt),e&&t(H),v(ve),e&&t(xt),v($e,e),e&&t(qt),e&&t(j),v(ge),e&&t(bt),v(xe,e)}}}const ls={local:"quiz-de-fin-de-chapitre",title:"Quiz de fin de chapitre"};function ps(hr){return is(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class fs extends ts{constructor(b){super();rs(this,b,ps,os,ss,{})}}export{fs as default,ls as metadata};
