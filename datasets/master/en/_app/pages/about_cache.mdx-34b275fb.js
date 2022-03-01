import{S as St,i as Wt,s as Ct,e as o,k as u,w as G,t as r,M as It,c as i,d as t,m,a as l,x as K,h as n,b as c,F as s,g as f,y as Q,q as R,o as U,B as V}from"../chunks/vendor-e67aec41.js";import{T as Ht}from"../chunks/Tip-76459d1c.js";import{I as lt}from"../chunks/IconCopyLink-ffd7f84e.js";import{C as qt}from"../chunks/CodeBlock-ccf09204.js";function Ot(N){let h,v,p,y,w,d,_,$,j,H,A;return{c(){h=o("p"),v=r("Transforms are any of the processing methods from the "),p=o("a"),y=r("How-to Process"),w=r(" guides such as "),d=o("a"),_=r("datasets.Dataset.map()"),$=r(" or "),j=o("a"),H=r("datasets.Dataset.shuffle()"),A=r("."),this.h()},l(x){h=i(x,"P",{});var g=l(h);v=n(g,"Transforms are any of the processing methods from the "),p=i(g,"A",{href:!0});var k=l(p);y=n(k,"How-to Process"),k.forEach(t),w=n(g," guides such as "),d=i(g,"A",{href:!0});var E=l(d);_=n(E,"datasets.Dataset.map()"),E.forEach(t),$=n(g," or "),j=i(g,"A",{href:!0});var q=l(j);H=n(q,"datasets.Dataset.shuffle()"),q.forEach(t),A=n(g,"."),g.forEach(t),this.h()},h(){c(p,"href","./process"),c(d,"href","/docs/datasets/master/en/package_reference/main_classes#datasets.Dataset.map"),c(j,"href","/docs/datasets/master/en/package_reference/main_classes#datasets.Dataset.shuffle")},m(x,g){f(x,h,g),s(h,v),s(h,p),s(p,y),s(h,w),s(h,d),s(d,_),s(h,$),s(h,j),s(j,H),s(h,A)},d(x){x&&t(h)}}}function Nt(N){let h,v,p,y,w;return{c(){h=o("p"),v=r("When caching is disabled, use "),p=o("a"),y=r("datasets.Dataset.save_to_disk()"),w=r(" to save your transformed dataset or it will be deleted once the session ends."),this.h()},l(d){h=i(d,"P",{});var _=l(h);v=n(_,"When caching is disabled, use "),p=i(_,"A",{href:!0});var $=l(p);y=n($,"datasets.Dataset.save_to_disk()"),$.forEach(t),w=n(_," to save your transformed dataset or it will be deleted once the session ends."),_.forEach(t),this.h()},h(){c(p,"href","/docs/datasets/master/en/package_reference/main_classes#datasets.Dataset.save_to_disk")},m(d,_){f(d,h,_),s(h,v),s(h,p),s(p,y),s(h,w)},d(d){d&&t(h)}}}function Ft(N){let h,v,p,y,w,d,_,$,j,H,A,x,g,k,E,q,F,Se,ne,We,ue,X,Ce,me,S,ye,Z,Ie,ge,z,ve,D,Oe,M,Ne,Fe,B,ze,Me,_e,ee,Be,be,te,Ye,we,W,$e,T,C,oe,Y,Je,ie,Le,ke,b,Ge,le,Ke,Qe,he,Re,Ue,fe,Ve,Xe,pe,Ze,et,Ee,I,tt,se,st,at,je,J,Ae,O,rt,ce,nt,ot,De,ae,it,Pe;return d=new lt({}),F=new lt({}),S=new Ht({props:{$$slots:{default:[Ot]},$$scope:{ctx:N}}}),z=new qt({props:{codee:`from datasets import Dataset
dataset1 = Dataset.from_dict({"a": [0, 1, 2]})
dataset2 = dataset1.map(lambda x: {"a": x["a"] + 1})
print(dataset1._fingerprint, dataset2._fingerprint),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> Dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset1 = Dataset.from_dict({<span class="hljs-string">&quot;a&quot;</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>]})
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset2 = dataset1.<span class="hljs-built_in">map</span>(<span class="hljs-keyword">lambda</span> x: {<span class="hljs-string">&quot;a&quot;</span>: x[<span class="hljs-string">&quot;a&quot;</span>] + <span class="hljs-number">1</span>})
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(dataset1._fingerprint, dataset2._fingerprint)
d19493523d95e2dc 5b86abacd4b42434`}}),W=new Ht({props:{$$slots:{default:[Nt]},$$scope:{ctx:N}}}),Y=new lt({}),J=new qt({props:{codee:`from datasets.fingerprint import Hasher
my_func = lambda example: {"length": len(example["text"])}
print(Hasher.hash(my_func)),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets.fingerprint <span class="hljs-keyword">import</span> Hasher
<span class="hljs-meta">&gt;&gt;&gt; </span>my_func = <span class="hljs-keyword">lambda</span> example: {<span class="hljs-string">&quot;length&quot;</span>: <span class="hljs-built_in">len</span>(example[<span class="hljs-string">&quot;text&quot;</span>])}
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(Hasher.<span class="hljs-built_in">hash</span>(my_func))
<span class="hljs-string">&#x27;3d35e2b3e94c81d6&#x27;</span>`}}),{c(){h=o("meta"),v=u(),p=o("h1"),y=o("a"),w=o("span"),G(d.$$.fragment),_=u(),$=o("span"),j=r("The cache"),H=u(),A=o("p"),x=r("The cache is one of the reasons why \u{1F917} Datasets is so efficient. It stores previously downloaded and processed datasets so when you need to use them again, they are reloaded directly from the cache. This avoids having to download a dataset all over again, or reapplying processing functions. Even after you close and start another Python session, \u{1F917} Datasets will reload your dataset directly from the cache!"),g=u(),k=o("h2"),E=o("a"),q=o("span"),G(F.$$.fragment),Se=u(),ne=o("span"),We=r("Fingerprint"),ue=u(),X=o("p"),Ce=r("How does the cache keeps track of what transforms are applied to a dataset? Well, \u{1F917} Datasets assigns a fingerprint to the cache file. A fingerprint keeps track of the current state of a dataset. The initial fingerprint is computed using a hash from the Arrow table, or a hash of the Arrow files if the dataset is on disk. Subsequent fingerprints are computed by combining the fingerprint of the previous state, and a hash of the latest transform applied."),me=u(),G(S.$$.fragment),ye=u(),Z=o("p"),Ie=r("Here are what the actual fingerprints look like:"),ge=u(),G(z.$$.fragment),ve=u(),D=o("p"),Oe=r("In order for a transform to be hashable, it needs to be picklable by "),M=o("a"),Ne=r("dill"),Fe=r(" or "),B=o("a"),ze=r("pickle"),Me=r("."),_e=u(),ee=o("p"),Be=r("When you use a non-hashable transform, \u{1F917} Datasets uses a random fingerprint instead and raises a warning. The non-hashable transform is considered different from the previous transforms. As a result, \u{1F917} Datasets will recompute all the transforms. Make sure your transforms are serializable with pickle or dill to avoid this!"),be=u(),te=o("p"),Ye=r("An example of when \u{1F917} Datasets recomputes everything is when caching is disabled. When this happens, the cache files are generated every time and they get written to a temporary directory. Once your Python session ends, the cache files in the temporary directory are deleted. A random hash is assigned to these cache files, instead of a fingerprint."),we=u(),G(W.$$.fragment),$e=u(),T=o("h2"),C=o("a"),oe=o("span"),G(Y.$$.fragment),Je=u(),ie=o("span"),Le=r("Hashing"),ke=u(),b=o("p"),Ge=r("The fingerprint of a dataset is updated by hashing the function passed to "),le=o("code"),Ke=r("map"),Qe=r(" as well as the "),he=o("code"),Re=r("map"),Ue=r(" parameters ("),fe=o("code"),Ve=r("batch_size"),Xe=r(", "),pe=o("code"),Ze=r("remove_columns"),et=r(", etc.)."),Ee=u(),I=o("p"),tt=r("You can check the hash of any Python object using the "),se=o("a"),st=r("datasets.fingerprint.Hasher"),at=r(":"),je=u(),G(J.$$.fragment),Ae=u(),O=o("p"),rt=r("The hash is computed by dumping the object using a "),ce=o("code"),nt=r("dill"),ot=r(` pickler and hashing the dumped bytes.
The pickler recursively dumps all the variables used in your function, so any change you do to an object that is used in your function, will cause the hash to change.`),De=u(),ae=o("p"),it=r(`If one of your functions doesn\u2019t seem to have the same hash across sessions, it means at least one of its variables contains a Python object that is not deterministic.
When this happens, feel free to hash any object you find suspicious to try to find the object that caused the hash to change.
For example, if you use a list for which the order of its elements is not deterministic across sessions, then the hash won\u2019t be the same across sessions either.`),this.h()},l(e){const a=It('[data-svelte="svelte-1phssyn"]',document.head);h=i(a,"META",{name:!0,content:!0}),a.forEach(t),v=m(e),p=i(e,"H1",{class:!0});var L=l(p);y=i(L,"A",{id:!0,class:!0,href:!0});var de=l(y);w=i(de,"SPAN",{});var ht=l(w);K(d.$$.fragment,ht),ht.forEach(t),de.forEach(t),_=m(L),$=i(L,"SPAN",{});var ft=l($);j=n(ft,"The cache"),ft.forEach(t),L.forEach(t),H=m(e),A=i(e,"P",{});var pt=l(A);x=n(pt,"The cache is one of the reasons why \u{1F917} Datasets is so efficient. It stores previously downloaded and processed datasets so when you need to use them again, they are reloaded directly from the cache. This avoids having to download a dataset all over again, or reapplying processing functions. Even after you close and start another Python session, \u{1F917} Datasets will reload your dataset directly from the cache!"),pt.forEach(t),g=m(e),k=i(e,"H2",{class:!0});var xe=l(k);E=i(xe,"A",{id:!0,class:!0,href:!0});var ct=l(E);q=i(ct,"SPAN",{});var dt=l(q);K(F.$$.fragment,dt),dt.forEach(t),ct.forEach(t),Se=m(xe),ne=i(xe,"SPAN",{});var ut=l(ne);We=n(ut,"Fingerprint"),ut.forEach(t),xe.forEach(t),ue=m(e),X=i(e,"P",{});var mt=l(X);Ce=n(mt,"How does the cache keeps track of what transforms are applied to a dataset? Well, \u{1F917} Datasets assigns a fingerprint to the cache file. A fingerprint keeps track of the current state of a dataset. The initial fingerprint is computed using a hash from the Arrow table, or a hash of the Arrow files if the dataset is on disk. Subsequent fingerprints are computed by combining the fingerprint of the previous state, and a hash of the latest transform applied."),mt.forEach(t),me=m(e),K(S.$$.fragment,e),ye=m(e),Z=i(e,"P",{});var yt=l(Z);Ie=n(yt,"Here are what the actual fingerprints look like:"),yt.forEach(t),ge=m(e),K(z.$$.fragment,e),ve=m(e),D=i(e,"P",{});var re=l(D);Oe=n(re,"In order for a transform to be hashable, it needs to be picklable by "),M=i(re,"A",{href:!0,rel:!0});var gt=l(M);Ne=n(gt,"dill"),gt.forEach(t),Fe=n(re," or "),B=i(re,"A",{href:!0,rel:!0});var vt=l(B);ze=n(vt,"pickle"),vt.forEach(t),Me=n(re,"."),re.forEach(t),_e=m(e),ee=i(e,"P",{});var _t=l(ee);Be=n(_t,"When you use a non-hashable transform, \u{1F917} Datasets uses a random fingerprint instead and raises a warning. The non-hashable transform is considered different from the previous transforms. As a result, \u{1F917} Datasets will recompute all the transforms. Make sure your transforms are serializable with pickle or dill to avoid this!"),_t.forEach(t),be=m(e),te=i(e,"P",{});var bt=l(te);Ye=n(bt,"An example of when \u{1F917} Datasets recomputes everything is when caching is disabled. When this happens, the cache files are generated every time and they get written to a temporary directory. Once your Python session ends, the cache files in the temporary directory are deleted. A random hash is assigned to these cache files, instead of a fingerprint."),bt.forEach(t),we=m(e),K(W.$$.fragment,e),$e=m(e),T=i(e,"H2",{class:!0});var Te=l(T);C=i(Te,"A",{id:!0,class:!0,href:!0});var wt=l(C);oe=i(wt,"SPAN",{});var $t=l(oe);K(Y.$$.fragment,$t),$t.forEach(t),wt.forEach(t),Je=m(Te),ie=i(Te,"SPAN",{});var kt=l(ie);Le=n(kt,"Hashing"),kt.forEach(t),Te.forEach(t),ke=m(e),b=i(e,"P",{});var P=l(b);Ge=n(P,"The fingerprint of a dataset is updated by hashing the function passed to "),le=i(P,"CODE",{});var Et=l(le);Ke=n(Et,"map"),Et.forEach(t),Qe=n(P," as well as the "),he=i(P,"CODE",{});var jt=l(he);Re=n(jt,"map"),jt.forEach(t),Ue=n(P," parameters ("),fe=i(P,"CODE",{});var At=l(fe);Ve=n(At,"batch_size"),At.forEach(t),Xe=n(P,", "),pe=i(P,"CODE",{});var Dt=l(pe);Ze=n(Dt,"remove_columns"),Dt.forEach(t),et=n(P,", etc.)."),P.forEach(t),Ee=m(e),I=i(e,"P",{});var He=l(I);tt=n(He,"You can check the hash of any Python object using the "),se=i(He,"A",{href:!0});var Pt=l(se);st=n(Pt,"datasets.fingerprint.Hasher"),Pt.forEach(t),at=n(He,":"),He.forEach(t),je=m(e),K(J.$$.fragment,e),Ae=m(e),O=i(e,"P",{});var qe=l(O);rt=n(qe,"The hash is computed by dumping the object using a "),ce=i(qe,"CODE",{});var xt=l(ce);nt=n(xt,"dill"),xt.forEach(t),ot=n(qe,` pickler and hashing the dumped bytes.
The pickler recursively dumps all the variables used in your function, so any change you do to an object that is used in your function, will cause the hash to change.`),qe.forEach(t),De=m(e),ae=i(e,"P",{});var Tt=l(ae);it=n(Tt,`If one of your functions doesn\u2019t seem to have the same hash across sessions, it means at least one of its variables contains a Python object that is not deterministic.
When this happens, feel free to hash any object you find suspicious to try to find the object that caused the hash to change.
For example, if you use a list for which the order of its elements is not deterministic across sessions, then the hash won\u2019t be the same across sessions either.`),Tt.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(zt)),c(y,"id","the-cache"),c(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(y,"href","#the-cache"),c(p,"class","relative group"),c(E,"id","fingerprint"),c(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(E,"href","#fingerprint"),c(k,"class","relative group"),c(M,"href","https://dill.readthedocs.io/en/latest/"),c(M,"rel","nofollow"),c(B,"href","https://docs.python.org/3/library/pickle"),c(B,"rel","nofollow"),c(C,"id","hashing"),c(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(C,"href","#hashing"),c(T,"class","relative group"),c(se,"href","/docs/datasets/master/en/package_reference/main_classes#datasets.fingerprint.Hasher")},m(e,a){s(document.head,h),f(e,v,a),f(e,p,a),s(p,y),s(y,w),Q(d,w,null),s(p,_),s(p,$),s($,j),f(e,H,a),f(e,A,a),s(A,x),f(e,g,a),f(e,k,a),s(k,E),s(E,q),Q(F,q,null),s(k,Se),s(k,ne),s(ne,We),f(e,ue,a),f(e,X,a),s(X,Ce),f(e,me,a),Q(S,e,a),f(e,ye,a),f(e,Z,a),s(Z,Ie),f(e,ge,a),Q(z,e,a),f(e,ve,a),f(e,D,a),s(D,Oe),s(D,M),s(M,Ne),s(D,Fe),s(D,B),s(B,ze),s(D,Me),f(e,_e,a),f(e,ee,a),s(ee,Be),f(e,be,a),f(e,te,a),s(te,Ye),f(e,we,a),Q(W,e,a),f(e,$e,a),f(e,T,a),s(T,C),s(C,oe),Q(Y,oe,null),s(T,Je),s(T,ie),s(ie,Le),f(e,ke,a),f(e,b,a),s(b,Ge),s(b,le),s(le,Ke),s(b,Qe),s(b,he),s(he,Re),s(b,Ue),s(b,fe),s(fe,Ve),s(b,Xe),s(b,pe),s(pe,Ze),s(b,et),f(e,Ee,a),f(e,I,a),s(I,tt),s(I,se),s(se,st),s(I,at),f(e,je,a),Q(J,e,a),f(e,Ae,a),f(e,O,a),s(O,rt),s(O,ce),s(ce,nt),s(O,ot),f(e,De,a),f(e,ae,a),s(ae,it),Pe=!0},p(e,[a]){const L={};a&2&&(L.$$scope={dirty:a,ctx:e}),S.$set(L);const de={};a&2&&(de.$$scope={dirty:a,ctx:e}),W.$set(de)},i(e){Pe||(R(d.$$.fragment,e),R(F.$$.fragment,e),R(S.$$.fragment,e),R(z.$$.fragment,e),R(W.$$.fragment,e),R(Y.$$.fragment,e),R(J.$$.fragment,e),Pe=!0)},o(e){U(d.$$.fragment,e),U(F.$$.fragment,e),U(S.$$.fragment,e),U(z.$$.fragment,e),U(W.$$.fragment,e),U(Y.$$.fragment,e),U(J.$$.fragment,e),Pe=!1},d(e){t(h),e&&t(v),e&&t(p),V(d),e&&t(H),e&&t(A),e&&t(g),e&&t(k),V(F),e&&t(ue),e&&t(X),e&&t(me),V(S,e),e&&t(ye),e&&t(Z),e&&t(ge),V(z,e),e&&t(ve),e&&t(D),e&&t(_e),e&&t(ee),e&&t(be),e&&t(te),e&&t(we),V(W,e),e&&t($e),e&&t(T),V(Y),e&&t(ke),e&&t(b),e&&t(Ee),e&&t(I),e&&t(je),V(J,e),e&&t(Ae),e&&t(O),e&&t(De),e&&t(ae)}}}const zt={local:"the-cache",sections:[{local:"fingerprint",title:"Fingerprint"},{local:"hashing",title:"Hashing"}],title:"The cache"};function Mt(N,h,v){let{fw:p}=h;return N.$$set=y=>{"fw"in y&&v(0,p=y.fw)},[p]}class Gt extends St{constructor(h){super();Wt(this,h,Mt,Ft,Ct,{fw:0})}}export{Gt as default,zt as metadata};
