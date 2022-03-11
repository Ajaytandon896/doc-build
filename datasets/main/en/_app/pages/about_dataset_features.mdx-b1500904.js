import{S as st,i as at,s as tt,e as l,k as h,w as U,t,M as nt,c as r,d as a,m as u,a as o,x as B,h as n,b as f,F as s,g as p,y as G,q as Q,o as H,B as J}from"../chunks/vendor-e67aec41.js";import{T as et}from"../chunks/Tip-76459d1c.js";import{I as lt}from"../chunks/IconCopyLink-ffd7f84e.js";import{C as es}from"../chunks/CodeBlock-e2bcf023.js";function rt(I){let c,j,d,m,E;return{c(){c=l("p"),j=t("Refer to "),d=l("a"),m=t("datasets.Value"),E=t(" for a full list of supported data types."),this.h()},l(_){c=r(_,"P",{});var g=o(c);j=n(g,"Refer to "),d=r(g,"A",{href:!0});var D=o(d);m=n(D,"datasets.Value"),D.forEach(a),E=n(g," for a full list of supported data types."),g.forEach(a),this.h()},h(){f(d,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Value")},m(_,g){p(_,c,g),s(c,j),s(c,d),s(d,m),s(c,E)},d(_){_&&a(c)}}}function ot(I){let c,j,d,m,E;return{c(){c=l("p"),j=t("See the "),d=l("a"),m=t("flatten"),E=t(" section to learn how you can extract the nested subfields as their own independent columns."),this.h()},l(_){c=r(_,"P",{});var g=o(c);j=n(g,"See the "),d=r(g,"A",{href:!0});var D=o(d);m=n(D,"flatten"),D.forEach(a),E=n(g," section to learn how you can extract the nested subfields as their own independent columns."),g.forEach(a),this.h()},h(){f(d,"href","#flatten")},m(_,g){p(_,c,g),s(c,j),s(c,d),s(d,m),s(c,E)},d(_){_&&a(c)}}}function it(I){let c,j,d,m,E,_,g,D,ss,Oe,$,K,as,ts,X,ns,ls,Z,rs,os,ee,is,ps,Fe,C,cs,se,ds,fs,me,hs,us,Ne,ae,ms,Pe,R,Se,q,_s,te,vs,ys,Ve,O,T,gs,_e,js,bs,ve,xs,Es,$s,k,ws,ye,Ds,ks,ge,Cs,As,je,Ts,Ls,Ie,w,qs,be,Os,Fs,xe,Ns,Ps,Ee,Ss,Vs,Re,F,ze,v,Is,ne,Rs,zs,$e,Ms,Ws,we,Ys,Us,De,Bs,Gs,le,Qs,Hs,re,Js,Ks,Me,N,Xs,oe,Zs,ea,We,z,Ye,y,sa,ke,aa,ta,ie,na,la,Ce,ra,oa,Ae,ia,pa,Te,ca,da,Le,fa,ha,Ue,P,Be,A,ua,pe,ma,_a,ce,va,ya,Ge,M,Qe,de,ga,He,W,Je;return _=new lt({}),R=new es({props:{code:`from datasets import load_dataset
dataset = load_dataset('glue', 'mrpc', split='train')
dataset.features`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>, split=<span class="hljs-string">&#x27;train&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.features
{<span class="hljs-string">&#x27;idx&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;int32&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
 <span class="hljs-string">&#x27;label&#x27;</span>: ClassLabel(num_classes=<span class="hljs-number">2</span>, names=[<span class="hljs-string">&#x27;not_equivalent&#x27;</span>, <span class="hljs-string">&#x27;equivalent&#x27;</span>], names_file=<span class="hljs-literal">None</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
 <span class="hljs-string">&#x27;sentence1&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
 <span class="hljs-string">&#x27;sentence2&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
}`}}),F=new et({props:{$$slots:{default:[rt]},$$scope:{ctx:I}}}),z=new es({props:{code:`from datasets import load_dataset
dataset = load_dataset('squad', split='train')
dataset.features`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&#x27;squad&#x27;</span>, split=<span class="hljs-string">&#x27;train&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.features
{<span class="hljs-string">&#x27;answers&#x27;</span>: <span class="hljs-type">Sequence</span>(feature={<span class="hljs-string">&#x27;text&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>), <span class="hljs-string">&#x27;answer_start&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;int32&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>)}, length=-<span class="hljs-number">1</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
<span class="hljs-string">&#x27;context&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
<span class="hljs-string">&#x27;id&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
<span class="hljs-string">&#x27;question&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
<span class="hljs-string">&#x27;title&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>)}`}}),P=new et({props:{$$slots:{default:[ot]},$$scope:{ctx:I}}}),M=new es({props:{code:"features = Features({'a': Array2D(shape=(1, 3), dtype='int32'))",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>features = Features({<span class="hljs-string">&#x27;a&#x27;</span>: Array2D(shape=(<span class="hljs-number">1</span>, <span class="hljs-number">3</span>), dtype=<span class="hljs-string">&#x27;int32&#x27;</span>))'}}),W=new es({props:{code:"features = Features({'a': Array3D(shape=(None, 5, 2), dtype='int32')})",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>features = Features({<span class="hljs-string">&#x27;a&#x27;</span>: Array3D(shape=(<span class="hljs-literal">None</span>, <span class="hljs-number">5</span>, <span class="hljs-number">2</span>), dtype=<span class="hljs-string">&#x27;int32&#x27;</span>)})'}}),{c(){c=l("meta"),j=h(),d=l("h1"),m=l("a"),E=l("span"),U(_.$$.fragment),g=h(),D=l("span"),ss=t("Dataset features"),Oe=h(),$=l("p"),K=l("a"),as=t("datasets.Features"),ts=t(" defines the internal structure of a dataset. It is used to specify the underlying serialization format. What\u2019s more interesting to you though is that "),X=l("a"),ns=t("datasets.Features"),ls=t(" contains high-level information about everything from the column names and types, to the "),Z=l("a"),rs=t("datasets.ClassLabel"),os=t(". You can think of "),ee=l("a"),is=t("datasets.Features"),ps=t(" as the backbone of a dataset."),Fe=h(),C=l("p"),cs=t("The "),se=l("a"),ds=t("datasets.Features"),fs=t(" format is simple: "),me=l("code"),hs=t("dict[column_name, column_type]"),us=t(". It is a dictionary of column name and column type pairs. The column type provides a wide range of options for describing the type of data you have."),Ne=h(),ae=l("p"),ms=t("Let\u2019s have a look at the features of the MRPC dataset from the GLUE benchmark:"),Pe=h(),U(R.$$.fragment),Se=h(),q=l("p"),_s=t("The "),te=l("a"),vs=t("datasets.Value"),ys=t(" feature tells \u{1F917} Datasets:"),Ve=h(),O=l("ul"),T=l("li"),gs=t("The "),_e=l("code"),js=t("idx"),bs=t(" data type is "),ve=l("code"),xs=t("int32"),Es=t("."),$s=h(),k=l("li"),ws=t("The "),ye=l("code"),Ds=t("sentence1"),ks=t(" and "),ge=l("code"),Cs=t("sentence2"),As=t(" data types are "),je=l("code"),Ts=t("string"),Ls=t("."),Ie=h(),w=l("p"),qs=t("\u{1F917} Datasets supports many other data types such as "),be=l("code"),Os=t("bool"),Fs=t(", "),xe=l("code"),Ns=t("float32"),Ps=t(" and "),Ee=l("code"),Ss=t("binary"),Vs=t(" to name just a few."),Re=h(),U(F.$$.fragment),ze=h(),v=l("p"),Is=t("The "),ne=l("a"),Rs=t("datasets.ClassLabel"),zs=t(" feature informs \u{1F917} Datasets the "),$e=l("code"),Ms=t("label"),Ws=t(" column contains two classes. The classes are labeled "),we=l("code"),Ys=t("not_equivalent"),Us=t(" and "),De=l("code"),Bs=t("equivalent"),Gs=t(". Labels are stored as integers in the dataset. When you retrieve the labels, "),le=l("a"),Qs=t("datasets.ClassLabel.int2str()"),Hs=t(" and "),re=l("a"),Js=t("datasets.ClassLabel.str2int()"),Ks=t(" carries out the conversion from integer value to label name, and vice versa."),Me=h(),N=l("p"),Xs=t("If your data type contains a list of objects, then you want to use the "),oe=l("a"),Zs=t("datasets.Sequence"),ea=t(" feature. Remember the SQuAD dataset?"),We=h(),U(z.$$.fragment),Ye=h(),y=l("p"),sa=t("The "),ke=l("code"),aa=t("answers"),ta=t(" field is constructed using the "),ie=l("a"),na=t("datasets.Sequence"),la=t(" feature because it contains two subfields, "),Ce=l("code"),ra=t("text"),oa=t(" and "),Ae=l("code"),ia=t("answer_start"),pa=t(", which are lists of "),Te=l("code"),ca=t("string"),da=t(" and "),Le=l("code"),fa=t("int32"),ha=t(", respectively."),Ue=h(),U(P.$$.fragment),Be=h(),A=l("p"),ua=t("The array feature type is useful for creating arrays of various sizes. You can create arrays with two dimensions using "),pe=l("a"),ma=t("datasets.Array2D"),_a=t(", and even arrays with five dimensions using "),ce=l("a"),va=t("datasets.Array5D"),ya=t("."),Ge=h(),U(M.$$.fragment),Qe=h(),de=l("p"),ga=t("The array type also allows the first dimension of the array to be dynamic. This is useful for handling sequences with variable lengths such as sentences, without having to pad or truncate the input to a uniform shape."),He=h(),U(W.$$.fragment),this.h()},l(e){const i=nt('[data-svelte="svelte-1phssyn"]',document.head);c=r(i,"META",{name:!0,content:!0}),i.forEach(a),j=u(e),d=r(e,"H1",{class:!0});var Y=o(d);m=r(Y,"A",{id:!0,class:!0,href:!0});var qe=o(m);E=r(qe,"SPAN",{});var ja=o(E);B(_.$$.fragment,ja),ja.forEach(a),qe.forEach(a),g=u(Y),D=r(Y,"SPAN",{});var ba=o(D);ss=n(ba,"Dataset features"),ba.forEach(a),Y.forEach(a),Oe=u(e),$=r(e,"P",{});var L=o($);K=r(L,"A",{href:!0});var xa=o(K);as=n(xa,"datasets.Features"),xa.forEach(a),ts=n(L," defines the internal structure of a dataset. It is used to specify the underlying serialization format. What\u2019s more interesting to you though is that "),X=r(L,"A",{href:!0});var Ea=o(X);ns=n(Ea,"datasets.Features"),Ea.forEach(a),ls=n(L," contains high-level information about everything from the column names and types, to the "),Z=r(L,"A",{href:!0});var $a=o(Z);rs=n($a,"datasets.ClassLabel"),$a.forEach(a),os=n(L,". You can think of "),ee=r(L,"A",{href:!0});var wa=o(ee);is=n(wa,"datasets.Features"),wa.forEach(a),ps=n(L," as the backbone of a dataset."),L.forEach(a),Fe=u(e),C=r(e,"P",{});var fe=o(C);cs=n(fe,"The "),se=r(fe,"A",{href:!0});var Da=o(se);ds=n(Da,"datasets.Features"),Da.forEach(a),fs=n(fe," format is simple: "),me=r(fe,"CODE",{});var ka=o(me);hs=n(ka,"dict[column_name, column_type]"),ka.forEach(a),us=n(fe,". It is a dictionary of column name and column type pairs. The column type provides a wide range of options for describing the type of data you have."),fe.forEach(a),Ne=u(e),ae=r(e,"P",{});var Ca=o(ae);ms=n(Ca,"Let\u2019s have a look at the features of the MRPC dataset from the GLUE benchmark:"),Ca.forEach(a),Pe=u(e),B(R.$$.fragment,e),Se=u(e),q=r(e,"P",{});var Ke=o(q);_s=n(Ke,"The "),te=r(Ke,"A",{href:!0});var Aa=o(te);vs=n(Aa,"datasets.Value"),Aa.forEach(a),ys=n(Ke," feature tells \u{1F917} Datasets:"),Ke.forEach(a),Ve=u(e),O=r(e,"UL",{});var Xe=o(O);T=r(Xe,"LI",{});var he=o(T);gs=n(he,"The "),_e=r(he,"CODE",{});var Ta=o(_e);js=n(Ta,"idx"),Ta.forEach(a),bs=n(he," data type is "),ve=r(he,"CODE",{});var La=o(ve);xs=n(La,"int32"),La.forEach(a),Es=n(he,"."),he.forEach(a),$s=u(Xe),k=r(Xe,"LI",{});var S=o(k);ws=n(S,"The "),ye=r(S,"CODE",{});var qa=o(ye);Ds=n(qa,"sentence1"),qa.forEach(a),ks=n(S," and "),ge=r(S,"CODE",{});var Oa=o(ge);Cs=n(Oa,"sentence2"),Oa.forEach(a),As=n(S," data types are "),je=r(S,"CODE",{});var Fa=o(je);Ts=n(Fa,"string"),Fa.forEach(a),Ls=n(S,"."),S.forEach(a),Xe.forEach(a),Ie=u(e),w=r(e,"P",{});var V=o(w);qs=n(V,"\u{1F917} Datasets supports many other data types such as "),be=r(V,"CODE",{});var Na=o(be);Os=n(Na,"bool"),Na.forEach(a),Fs=n(V,", "),xe=r(V,"CODE",{});var Pa=o(xe);Ns=n(Pa,"float32"),Pa.forEach(a),Ps=n(V," and "),Ee=r(V,"CODE",{});var Sa=o(Ee);Ss=n(Sa,"binary"),Sa.forEach(a),Vs=n(V," to name just a few."),V.forEach(a),Re=u(e),B(F.$$.fragment,e),ze=u(e),v=r(e,"P",{});var b=o(v);Is=n(b,"The "),ne=r(b,"A",{href:!0});var Va=o(ne);Rs=n(Va,"datasets.ClassLabel"),Va.forEach(a),zs=n(b," feature informs \u{1F917} Datasets the "),$e=r(b,"CODE",{});var Ia=o($e);Ms=n(Ia,"label"),Ia.forEach(a),Ws=n(b," column contains two classes. The classes are labeled "),we=r(b,"CODE",{});var Ra=o(we);Ys=n(Ra,"not_equivalent"),Ra.forEach(a),Us=n(b," and "),De=r(b,"CODE",{});var za=o(De);Bs=n(za,"equivalent"),za.forEach(a),Gs=n(b,". Labels are stored as integers in the dataset. When you retrieve the labels, "),le=r(b,"A",{href:!0});var Ma=o(le);Qs=n(Ma,"datasets.ClassLabel.int2str()"),Ma.forEach(a),Hs=n(b," and "),re=r(b,"A",{href:!0});var Wa=o(re);Js=n(Wa,"datasets.ClassLabel.str2int()"),Wa.forEach(a),Ks=n(b," carries out the conversion from integer value to label name, and vice versa."),b.forEach(a),Me=u(e),N=r(e,"P",{});var Ze=o(N);Xs=n(Ze,"If your data type contains a list of objects, then you want to use the "),oe=r(Ze,"A",{href:!0});var Ya=o(oe);Zs=n(Ya,"datasets.Sequence"),Ya.forEach(a),ea=n(Ze," feature. Remember the SQuAD dataset?"),Ze.forEach(a),We=u(e),B(z.$$.fragment,e),Ye=u(e),y=r(e,"P",{});var x=o(y);sa=n(x,"The "),ke=r(x,"CODE",{});var Ua=o(ke);aa=n(Ua,"answers"),Ua.forEach(a),ta=n(x," field is constructed using the "),ie=r(x,"A",{href:!0});var Ba=o(ie);na=n(Ba,"datasets.Sequence"),Ba.forEach(a),la=n(x," feature because it contains two subfields, "),Ce=r(x,"CODE",{});var Ga=o(Ce);ra=n(Ga,"text"),Ga.forEach(a),oa=n(x," and "),Ae=r(x,"CODE",{});var Qa=o(Ae);ia=n(Qa,"answer_start"),Qa.forEach(a),pa=n(x,", which are lists of "),Te=r(x,"CODE",{});var Ha=o(Te);ca=n(Ha,"string"),Ha.forEach(a),da=n(x," and "),Le=r(x,"CODE",{});var Ja=o(Le);fa=n(Ja,"int32"),Ja.forEach(a),ha=n(x,", respectively."),x.forEach(a),Ue=u(e),B(P.$$.fragment,e),Be=u(e),A=r(e,"P",{});var ue=o(A);ua=n(ue,"The array feature type is useful for creating arrays of various sizes. You can create arrays with two dimensions using "),pe=r(ue,"A",{href:!0});var Ka=o(pe);ma=n(Ka,"datasets.Array2D"),Ka.forEach(a),_a=n(ue,", and even arrays with five dimensions using "),ce=r(ue,"A",{href:!0});var Xa=o(ce);va=n(Xa,"datasets.Array5D"),Xa.forEach(a),ya=n(ue,"."),ue.forEach(a),Ge=u(e),B(M.$$.fragment,e),Qe=u(e),de=r(e,"P",{});var Za=o(de);ga=n(Za,"The array type also allows the first dimension of the array to be dynamic. This is useful for handling sequences with variable lengths such as sentences, without having to pad or truncate the input to a uniform shape."),Za.forEach(a),He=u(e),B(W.$$.fragment,e),this.h()},h(){f(c,"name","hf:doc:metadata"),f(c,"content",JSON.stringify(pt)),f(m,"id","dataset-features"),f(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(m,"href","#dataset-features"),f(d,"class","relative group"),f(K,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Features"),f(X,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Features"),f(Z,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.ClassLabel"),f(ee,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Features"),f(se,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Features"),f(te,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Value"),f(ne,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.ClassLabel"),f(le,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.ClassLabel.int2str"),f(re,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.ClassLabel.str2int"),f(oe,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Sequence"),f(ie,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Sequence"),f(pe,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Array2D"),f(ce,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Array5D")},m(e,i){s(document.head,c),p(e,j,i),p(e,d,i),s(d,m),s(m,E),G(_,E,null),s(d,g),s(d,D),s(D,ss),p(e,Oe,i),p(e,$,i),s($,K),s(K,as),s($,ts),s($,X),s(X,ns),s($,ls),s($,Z),s(Z,rs),s($,os),s($,ee),s(ee,is),s($,ps),p(e,Fe,i),p(e,C,i),s(C,cs),s(C,se),s(se,ds),s(C,fs),s(C,me),s(me,hs),s(C,us),p(e,Ne,i),p(e,ae,i),s(ae,ms),p(e,Pe,i),G(R,e,i),p(e,Se,i),p(e,q,i),s(q,_s),s(q,te),s(te,vs),s(q,ys),p(e,Ve,i),p(e,O,i),s(O,T),s(T,gs),s(T,_e),s(_e,js),s(T,bs),s(T,ve),s(ve,xs),s(T,Es),s(O,$s),s(O,k),s(k,ws),s(k,ye),s(ye,Ds),s(k,ks),s(k,ge),s(ge,Cs),s(k,As),s(k,je),s(je,Ts),s(k,Ls),p(e,Ie,i),p(e,w,i),s(w,qs),s(w,be),s(be,Os),s(w,Fs),s(w,xe),s(xe,Ns),s(w,Ps),s(w,Ee),s(Ee,Ss),s(w,Vs),p(e,Re,i),G(F,e,i),p(e,ze,i),p(e,v,i),s(v,Is),s(v,ne),s(ne,Rs),s(v,zs),s(v,$e),s($e,Ms),s(v,Ws),s(v,we),s(we,Ys),s(v,Us),s(v,De),s(De,Bs),s(v,Gs),s(v,le),s(le,Qs),s(v,Hs),s(v,re),s(re,Js),s(v,Ks),p(e,Me,i),p(e,N,i),s(N,Xs),s(N,oe),s(oe,Zs),s(N,ea),p(e,We,i),G(z,e,i),p(e,Ye,i),p(e,y,i),s(y,sa),s(y,ke),s(ke,aa),s(y,ta),s(y,ie),s(ie,na),s(y,la),s(y,Ce),s(Ce,ra),s(y,oa),s(y,Ae),s(Ae,ia),s(y,pa),s(y,Te),s(Te,ca),s(y,da),s(y,Le),s(Le,fa),s(y,ha),p(e,Ue,i),G(P,e,i),p(e,Be,i),p(e,A,i),s(A,ua),s(A,pe),s(pe,ma),s(A,_a),s(A,ce),s(ce,va),s(A,ya),p(e,Ge,i),G(M,e,i),p(e,Qe,i),p(e,de,i),s(de,ga),p(e,He,i),G(W,e,i),Je=!0},p(e,[i]){const Y={};i&2&&(Y.$$scope={dirty:i,ctx:e}),F.$set(Y);const qe={};i&2&&(qe.$$scope={dirty:i,ctx:e}),P.$set(qe)},i(e){Je||(Q(_.$$.fragment,e),Q(R.$$.fragment,e),Q(F.$$.fragment,e),Q(z.$$.fragment,e),Q(P.$$.fragment,e),Q(M.$$.fragment,e),Q(W.$$.fragment,e),Je=!0)},o(e){H(_.$$.fragment,e),H(R.$$.fragment,e),H(F.$$.fragment,e),H(z.$$.fragment,e),H(P.$$.fragment,e),H(M.$$.fragment,e),H(W.$$.fragment,e),Je=!1},d(e){a(c),e&&a(j),e&&a(d),J(_),e&&a(Oe),e&&a($),e&&a(Fe),e&&a(C),e&&a(Ne),e&&a(ae),e&&a(Pe),J(R,e),e&&a(Se),e&&a(q),e&&a(Ve),e&&a(O),e&&a(Ie),e&&a(w),e&&a(Re),J(F,e),e&&a(ze),e&&a(v),e&&a(Me),e&&a(N),e&&a(We),J(z,e),e&&a(Ye),e&&a(y),e&&a(Ue),J(P,e),e&&a(Be),e&&a(A),e&&a(Ge),J(M,e),e&&a(Qe),e&&a(de),e&&a(He),J(W,e)}}}const pt={local:"dataset-features",title:"Dataset features"};function ct(I,c,j){let{fw:d}=c;return I.$$set=m=>{"fw"in m&&j(0,d=m.fw)},[d]}class mt extends st{constructor(c){super();at(this,c,ct,it,tt,{fw:0})}}export{mt as default,pt as metadata};
