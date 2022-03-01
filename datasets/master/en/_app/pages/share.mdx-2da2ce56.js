import{S as Ir,i as Sr,s as Fr,e as o,k as d,w as m,t as n,M as Dr,c as s,d as t,m as u,a as l,x as g,h as f,b as h,F as a,g as i,y as v,q as w,o as _,B as $}from"../chunks/vendor-e67aec41.js";import{T as Tr}from"../chunks/Tip-76459d1c.js";import{I as He}from"../chunks/IconCopyLink-ffd7f84e.js";import{C as V}from"../chunks/CodeBlock-ccf09204.js";function xr(Re){let c,k;return{c(){c=o("p"),k=n("The distinction between a Hub dataset and a dataset from GitHub only comes from the legacy sharing workflow. It does not involve any ranking, decisioning, or opinion regarding the contents of the dataset itself.")},l(p){c=s(p,"P",{});var y=l(c);k=f(y,"The distinction between a Hub dataset and a dataset from GitHub only comes from the legacy sharing workflow. It does not involve any ranking, decisioning, or opinion regarding the contents of the dataset itself."),y.forEach(t)},m(p,y){i(p,c,y),a(c,k)},d(p){p&&t(c)}}}function qr(Re){let c,k,p,y,Ye,W,qa,Je,Ca,St,je,Na,Ft,Ae,Oa,Dt,b,Be,Ma,Ga,Ve,za,Za,We,Ua,Ra,Ke,Ya,Ja,Qe,Ba,Tt,Le,Va,xt,Pe,qt,A,D,Xe,K,Wa,et,Ka,Ct,Ie,Qa,Nt,Se,Xa,Ot,T,eo,tt,to,ao,Mt,Fe,oo,Gt,De,so,zt,x,at,ro,lo,ot,io,Zt,q,no,Te,fo,uo,Ut,L,C,st,Q,ho,rt,po,Rt,H,co,X,yo,mo,ee,go,vo,Yt,xe,lt,wo,Jt,te,Bt,ae,it,_o,Vt,oe,Wt,N,$o,nt,bo,Eo,Kt,se,Qt,P,O,ft,re,ko,dt,Ho,Xt,le,ie,jo,ne,Ao,Lo,ea,fe,ta,M,Po,ut,Io,So,aa,I,G,ht,de,Fo,pt,Do,oa,ue,ct,To,sa,E,yt,z,mt,xo,qo,qe,Co,No,Oo,gt,he,Mo,Ce,Go,zo,Zo,vt,Z,wt,Uo,Ro,Ne,Yo,Jo,Bo,_t,Oe,$t,Vo,Wo,ra,S,U,bt,pe,Ko,Et,Qo,la,Me,Xo,ia,ce,ye,es,kt,ts,as,na,me,fa,ge,Ht,os,da,ve,ua,we,jt,ss,ha,_e,pa,Ge,rs,ca,$e,ya,F,R,At,be,ls,Lt,is,ma,ze,ns,ga,Y,va,Ze,fs,wa,J,ds,Ee,us,hs,_a;return W=new He({}),K=new He({}),Q=new He({}),te=new V({props:{codee:"huggingface-cli login,",highlighted:'huggingface-<span class="hljs-keyword">cli</span> login'}}),oe=new V({props:{codee:"huggingface-cli repo create your_dataset_name --type dataset,",highlighted:'huggingface-cli repo <span class="hljs-keyword">create</span> your_dataset_name --<span class="hljs-built_in">type</span> <span class="hljs-keyword">dataset</span>'}}),se=new V({props:{codee:"huggingface-cli repo create your_dataset_name --type dataset --organization your-org-name,",highlighted:'huggingface-cli repo <span class="hljs-keyword">create</span> your_dataset_name --<span class="hljs-built_in">type</span> <span class="hljs-keyword">dataset</span> --organization your-org-name'}}),re=new He({}),fe=new V({props:{codee:`# Make sure you have git-lfs installed
# (https://git-lfs.github.com/)
git lfs install

git clone https://huggingface.co/datasets/namespace/your_dataset_name,`,highlighted:`<span class="hljs-comment"># Make sure you have git-lfs installed</span>
<span class="hljs-comment"># (https://git-lfs.github.com/)</span>
git lfs install

git clone https:<span class="hljs-regexp">//</span>huggingface.co<span class="hljs-regexp">/datasets/</span>namespace/your_dataset_name`}}),de=new He({}),pe=new He({}),me=new V({props:{codee:`cp /somewhere/data/*.json .
git lfs track *.json
git add .gitattributes
git add *.json
git commit -m "add json files",`,highlighted:`cp <span class="hljs-string">/somewhere/data/</span>*<span class="hljs-string">.json</span> .
git lfs track *<span class="hljs-string">.json</span>
git add <span class="hljs-string">.gitattributes</span>
git add *<span class="hljs-string">.json</span>
git commit -m <span class="hljs-string">&quot;add json files&quot;</span>`}}),ve=new V({props:{codee:`cp /somewhere/data/dataset_infos.json .
cp /somewhere/data/load_script.py .
git add --all,`,highlighted:`<span class="hljs-title">cp</span> /somewhere/<span class="hljs-class"><span class="hljs-keyword">data</span>/dataset_infos.json .</span>
<span class="hljs-title">cp</span> /somewhere/<span class="hljs-class"><span class="hljs-keyword">data</span>/load_script.py .</span>
<span class="hljs-title">git</span> add <span class="hljs-comment">--all</span>`}}),_e=new V({props:{codee:`git status
git commit -m "First version of the your_dataset_name dataset."
git push,`,highlighted:`git <span class="hljs-built_in">status</span>
git commit -m <span class="hljs-string">&quot;First version of the your_dataset_name dataset.&quot;</span>
git <span class="hljs-built_in">push</span>`}}),$e=new V({props:{codee:'dataset = load_dataset("namespace/your_dataset_name"),',highlighted:'<span class="hljs-attribute">dataset</span> <span class="hljs-operator">=</span> load_dataset(<span class="hljs-string">&quot;namespace/your_dataset_name&quot;</span>)'}}),be=new He({}),Y=new Tr({props:{$$slots:{default:[xr]},$$scope:{ctx:Re}}}),{c(){c=o("meta"),k=d(),p=o("h1"),y=o("a"),Ye=o("span"),m(W.$$.fragment),qa=d(),Je=o("span"),Ca=n("Share"),St=d(),je=o("p"),Na=n("At Hugging Face, we are on a mission to democratize good Machine Learning and we believe in the value of open source. That\u2019s why we designed \u{1F917} Datasets so that anyone can share a dataset with the greater ML community. There are currently thousands of datasets in over 100 languages in the Hugging Face Hub, and the Hugging Face team always welcomes new contributions!"),Ft=d(),Ae=o("p"),Oa=n("Dataset repositories offer features such as:"),Dt=d(),b=o("ul"),Be=o("li"),Ma=n("Free dataset hosting"),Ga=d(),Ve=o("li"),za=n("Dataset versioning"),Za=d(),We=o("li"),Ua=n("Commit history and diffs"),Ra=d(),Ke=o("li"),Ya=n("Metadata for discoverability"),Ja=d(),Qe=o("li"),Ba=n("Dataset cards for documentation, licensing, limitations, etc."),Tt=d(),Le=o("p"),Va=n("This guide will show you how to share a dataset that can be easily accessed by anyone."),xt=d(),Pe=o("a"),qt=d(),A=o("h2"),D=o("a"),Xe=o("span"),m(K.$$.fragment),Wa=d(),et=o("span"),Ka=n("Add a dataset"),Ct=d(),Ie=o("p"),Qa=n(`You can share your dataset with the community with a dataset repository on the Hugging Face Hub.
It can also be a private dataset if you want to control who has access to it.`),Nt=d(),Se=o("p"),Xa=n("In a dataset repository, you can either host all your data files and/or use a dataset script."),Ot=d(),T=o("p"),eo=n(`The dataset script is optional if your dataset is in one of the following formats: CSV, JSON, JSON lines, text or Parquet.
The script also supports many kinds of compressed file types such as: GZ, BZ2, LZ4, LZMA or ZSTD.
For example, your dataset can be made of `),tt=o("code"),to=n(".json.gz"),ao=n(" files."),Mt=d(),Fe=o("p"),oo=n("On the other hand, if your dataset is not in a supported format or if you want more control over how your dataset is loaded, you can write your own dataset script."),Gt=d(),De=o("p"),so=n("When loading a dataset from the Hub:"),zt=d(),x=o("ul"),at=o("li"),ro=n("If there\u2019s no dataset script, all the files in the supported formats are loaded."),lo=d(),ot=o("li"),io=n("If there\u2019s a dataset script, it is downloaded and executed to download and prepare the dataset."),Zt=d(),q=o("p"),no=n("For more information on how to load a dataset from the Hub, see how to load from the "),Te=o("a"),fo=n("load-from-the-hub"),uo=n("."),Ut=d(),L=o("h3"),C=o("a"),st=o("span"),m(Q.$$.fragment),ho=d(),rt=o("span"),po=n("Create the repository"),Rt=d(),H=o("p"),co=n("Sharing a community dataset will require you to create an account on "),X=o("a"),yo=n("hf.co"),mo=n(` if you don\u2019t have one yet.
You can directly create a `),ee=o("a"),go=n("new dataset repository"),vo=n(" from your account on the Hugging Face Hub, but this guide will show you how to upload a dataset from the terminal."),Yt=d(),xe=o("ol"),lt=o("li"),wo=n("Make sure you are in the virtual environment where you installed Datasets, and run the following command:"),Jt=d(),m(te.$$.fragment),Bt=d(),ae=o("ol"),it=o("li"),_o=n("Login using your Hugging Face Hub credentials, and create a new dataset repository:"),Vt=d(),m(oe.$$.fragment),Wt=d(),N=o("p"),$o=n("Add the "),nt=o("code"),bo=n("-organization"),Eo=n(" flag to create a repository under a specific organization:"),Kt=d(),m(se.$$.fragment),Qt=d(),P=o("h3"),O=o("a"),ft=o("span"),m(re.$$.fragment),ko=d(),dt=o("span"),Ho=n("Clone the repository"),Xt=d(),le=o("ol"),ie=o("li"),jo=n("Install "),ne=o("a"),Ao=n("Git LFS"),Lo=n(" and clone your repository:"),ea=d(),m(fe.$$.fragment),ta=d(),M=o("p"),Po=n("Here the "),ut=o("code"),Io=n("namespace"),So=n(" is either your username or your organization name."),aa=d(),I=o("h3"),G=o("a"),ht=o("span"),m(de.$$.fragment),Fo=d(),pt=o("span"),Do=n("Prepare your files"),oa=d(),ue=o("ol"),ct=o("li"),To=n("Now is a good time to check your directory to ensure the only files you\u2019re uploading are:"),sa=d(),E=o("ul"),yt=o("li"),z=o("p"),mt=o("code"),xo=n("README.md"),qo=n(" is a Dataset card that describes the datasets contents, creation, and usage. To write a Dataset card, see the "),qe=o("a"),Co=n("dataset card"),No=n(" page."),Oo=d(),gt=o("li"),he=o("p"),Mo=n("The raw data files of the dataset (optional, if they are hosted elsewhere you can specify the URLs in the dataset script). If you don\u2019t need a dataset script, you can take a look at "),Ce=o("a"),Go=n("how to structure your dataset repository for your data files"),zo=n("."),Zo=d(),vt=o("li"),Z=o("p"),wt=o("code"),Uo=n("your_dataset_name.py"),Ro=n(" is your dataset loading script (optional if your data files are already in the supported formats csv/jsonl/json/parquet/txt). To create a dataset script, see the "),Ne=o("a"),Yo=n("dataset script"),Jo=n(" page."),Bo=d(),_t=o("li"),Oe=o("p"),$t=o("code"),Vo=n("dataset_infos.json"),Wo=n(" contains metadata about the dataset (required only if you have a dataset script, or if you want to specify custom feature types)."),ra=d(),S=o("h3"),U=o("a"),bt=o("span"),m(pe.$$.fragment),Ko=d(),Et=o("span"),Qo=n("Upload your files"),la=d(),Me=o("p"),Xo=n("You can directly upload your files from your repository on the Hugging Face Hub, but this guide will show you how to upload the files from the terminal."),ia=d(),ce=o("ol"),ye=o("li"),es=n("It is important to add the large data files first with "),kt=o("code"),ts=n("git lfs track"),as=n(" or else you will encounter an error later when you push your files:"),na=d(),m(me.$$.fragment),fa=d(),ge=o("ol"),Ht=o("li"),os=n("Add the dataset loading script and metadata file:"),da=d(),m(ve.$$.fragment),ua=d(),we=o("ol"),jt=o("li"),ss=n("Verify the files have been correctly staged. Then you can commit and push your files:"),ha=d(),m(_e.$$.fragment),pa=d(),Ge=o("p"),rs=n("Congratulations, your dataset has now been uploaded to the Hugging Face Hub where anyone can load it in a single line of code! \u{1F973}"),ca=d(),m($e.$$.fragment),ya=d(),F=o("h2"),R=o("a"),At=o("span"),m(be.$$.fragment),ls=d(),Lt=o("span"),is=n("Datasets on GitHub (legacy)"),ma=d(),ze=o("p"),ns=n(`Datasets used to be hosted on our GitHub repository, but all datasets have now been migrated to the Hugging Face Hub.
The legacy GitHub datasets were added originally on our GitHub repository and therefore don\u2019t have a namespace: \u201Csquad\u201D, \u201Cglue\u201D, etc. unlike the other datasets that are named \u201Cusername/dataset_name\u201D or \u201Corg/dataset_name\u201D.
Those datasets are still maintained, and if you\u2019d like to edit them, please open a Pull Request on the huggingface/datasets repository.
Sharing your dataset to the Hub is the recommended way of adding a dataset.`),ga=d(),m(Y.$$.fragment),va=d(),Ze=o("p"),fs=n("The code of these datasets are reviewed by the Hugging Face team, and they require test data in order to be regularly tested."),wa=d(),J=o("p"),ds=n("For more info, please take a look at the documentation on "),Ee=o("a"),us=n("How to add a new dataset in the huggingface/datasets repository"),hs=n("."),this.h()},l(e){const r=Dr('[data-svelte="svelte-1phssyn"]',document.head);c=s(r,"META",{name:!0,content:!0}),r.forEach(t),k=u(e),p=s(e,"H1",{class:!0});var ke=l(p);y=s(ke,"A",{id:!0,class:!0,href:!0});var cs=l(y);Ye=s(cs,"SPAN",{});var ys=l(Ye);g(W.$$.fragment,ys),ys.forEach(t),cs.forEach(t),qa=u(ke),Je=s(ke,"SPAN",{});var ms=l(Je);Ca=f(ms,"Share"),ms.forEach(t),ke.forEach(t),St=u(e),je=s(e,"P",{});var gs=l(je);Na=f(gs,"At Hugging Face, we are on a mission to democratize good Machine Learning and we believe in the value of open source. That\u2019s why we designed \u{1F917} Datasets so that anyone can share a dataset with the greater ML community. There are currently thousands of datasets in over 100 languages in the Hugging Face Hub, and the Hugging Face team always welcomes new contributions!"),gs.forEach(t),Ft=u(e),Ae=s(e,"P",{});var vs=l(Ae);Oa=f(vs,"Dataset repositories offer features such as:"),vs.forEach(t),Dt=u(e),b=s(e,"UL",{});var j=l(b);Be=s(j,"LI",{});var ws=l(Be);Ma=f(ws,"Free dataset hosting"),ws.forEach(t),Ga=u(j),Ve=s(j,"LI",{});var _s=l(Ve);za=f(_s,"Dataset versioning"),_s.forEach(t),Za=u(j),We=s(j,"LI",{});var $s=l(We);Ua=f($s,"Commit history and diffs"),$s.forEach(t),Ra=u(j),Ke=s(j,"LI",{});var bs=l(Ke);Ya=f(bs,"Metadata for discoverability"),bs.forEach(t),Ja=u(j),Qe=s(j,"LI",{});var Es=l(Qe);Ba=f(Es,"Dataset cards for documentation, licensing, limitations, etc."),Es.forEach(t),j.forEach(t),Tt=u(e),Le=s(e,"P",{});var ks=l(Le);Va=f(ks,"This guide will show you how to share a dataset that can be easily accessed by anyone."),ks.forEach(t),xt=u(e),Pe=s(e,"A",{id:!0}),l(Pe).forEach(t),qt=u(e),A=s(e,"H2",{class:!0});var $a=l(A);D=s($a,"A",{id:!0,class:!0,href:!0});var Hs=l(D);Xe=s(Hs,"SPAN",{});var js=l(Xe);g(K.$$.fragment,js),js.forEach(t),Hs.forEach(t),Wa=u($a),et=s($a,"SPAN",{});var As=l(et);Ka=f(As,"Add a dataset"),As.forEach(t),$a.forEach(t),Ct=u(e),Ie=s(e,"P",{});var Ls=l(Ie);Qa=f(Ls,`You can share your dataset with the community with a dataset repository on the Hugging Face Hub.
It can also be a private dataset if you want to control who has access to it.`),Ls.forEach(t),Nt=u(e),Se=s(e,"P",{});var Ps=l(Se);Xa=f(Ps,"In a dataset repository, you can either host all your data files and/or use a dataset script."),Ps.forEach(t),Ot=u(e),T=s(e,"P",{});var ba=l(T);eo=f(ba,`The dataset script is optional if your dataset is in one of the following formats: CSV, JSON, JSON lines, text or Parquet.
The script also supports many kinds of compressed file types such as: GZ, BZ2, LZ4, LZMA or ZSTD.
For example, your dataset can be made of `),tt=s(ba,"CODE",{});var Is=l(tt);to=f(Is,".json.gz"),Is.forEach(t),ao=f(ba," files."),ba.forEach(t),Mt=u(e),Fe=s(e,"P",{});var Ss=l(Fe);oo=f(Ss,"On the other hand, if your dataset is not in a supported format or if you want more control over how your dataset is loaded, you can write your own dataset script."),Ss.forEach(t),Gt=u(e),De=s(e,"P",{});var Fs=l(De);so=f(Fs,"When loading a dataset from the Hub:"),Fs.forEach(t),zt=u(e),x=s(e,"UL",{});var Ea=l(x);at=s(Ea,"LI",{});var Ds=l(at);ro=f(Ds,"If there\u2019s no dataset script, all the files in the supported formats are loaded."),Ds.forEach(t),lo=u(Ea),ot=s(Ea,"LI",{});var Ts=l(ot);io=f(Ts,"If there\u2019s a dataset script, it is downloaded and executed to download and prepare the dataset."),Ts.forEach(t),Ea.forEach(t),Zt=u(e),q=s(e,"P",{});var ka=l(q);no=f(ka,"For more information on how to load a dataset from the Hub, see how to load from the "),Te=s(ka,"A",{href:!0});var xs=l(Te);fo=f(xs,"load-from-the-hub"),xs.forEach(t),uo=f(ka,"."),ka.forEach(t),Ut=u(e),L=s(e,"H3",{class:!0});var Ha=l(L);C=s(Ha,"A",{id:!0,class:!0,href:!0});var qs=l(C);st=s(qs,"SPAN",{});var Cs=l(st);g(Q.$$.fragment,Cs),Cs.forEach(t),qs.forEach(t),ho=u(Ha),rt=s(Ha,"SPAN",{});var Ns=l(rt);po=f(Ns,"Create the repository"),Ns.forEach(t),Ha.forEach(t),Rt=u(e),H=s(e,"P",{});var Ue=l(H);co=f(Ue,"Sharing a community dataset will require you to create an account on "),X=s(Ue,"A",{href:!0,rel:!0});var Os=l(X);yo=f(Os,"hf.co"),Os.forEach(t),mo=f(Ue,` if you don\u2019t have one yet.
You can directly create a `),ee=s(Ue,"A",{href:!0,rel:!0});var Ms=l(ee);go=f(Ms,"new dataset repository"),Ms.forEach(t),vo=f(Ue," from your account on the Hugging Face Hub, but this guide will show you how to upload a dataset from the terminal."),Ue.forEach(t),Yt=u(e),xe=s(e,"OL",{});var Gs=l(xe);lt=s(Gs,"LI",{});var zs=l(lt);wo=f(zs,"Make sure you are in the virtual environment where you installed Datasets, and run the following command:"),zs.forEach(t),Gs.forEach(t),Jt=u(e),g(te.$$.fragment,e),Bt=u(e),ae=s(e,"OL",{start:!0});var Zs=l(ae);it=s(Zs,"LI",{});var Us=l(it);_o=f(Us,"Login using your Hugging Face Hub credentials, and create a new dataset repository:"),Us.forEach(t),Zs.forEach(t),Vt=u(e),g(oe.$$.fragment,e),Wt=u(e),N=s(e,"P",{});var ja=l(N);$o=f(ja,"Add the "),nt=s(ja,"CODE",{});var Rs=l(nt);bo=f(Rs,"-organization"),Rs.forEach(t),Eo=f(ja," flag to create a repository under a specific organization:"),ja.forEach(t),Kt=u(e),g(se.$$.fragment,e),Qt=u(e),P=s(e,"H3",{class:!0});var Aa=l(P);O=s(Aa,"A",{id:!0,class:!0,href:!0});var Ys=l(O);ft=s(Ys,"SPAN",{});var Js=l(ft);g(re.$$.fragment,Js),Js.forEach(t),Ys.forEach(t),ko=u(Aa),dt=s(Aa,"SPAN",{});var Bs=l(dt);Ho=f(Bs,"Clone the repository"),Bs.forEach(t),Aa.forEach(t),Xt=u(e),le=s(e,"OL",{start:!0});var Vs=l(le);ie=s(Vs,"LI",{});var La=l(ie);jo=f(La,"Install "),ne=s(La,"A",{href:!0,rel:!0});var Ws=l(ne);Ao=f(Ws,"Git LFS"),Ws.forEach(t),Lo=f(La," and clone your repository:"),La.forEach(t),Vs.forEach(t),ea=u(e),g(fe.$$.fragment,e),ta=u(e),M=s(e,"P",{});var Pa=l(M);Po=f(Pa,"Here the "),ut=s(Pa,"CODE",{});var Ks=l(ut);Io=f(Ks,"namespace"),Ks.forEach(t),So=f(Pa," is either your username or your organization name."),Pa.forEach(t),aa=u(e),I=s(e,"H3",{class:!0});var Ia=l(I);G=s(Ia,"A",{id:!0,class:!0,href:!0});var Qs=l(G);ht=s(Qs,"SPAN",{});var Xs=l(ht);g(de.$$.fragment,Xs),Xs.forEach(t),Qs.forEach(t),Fo=u(Ia),pt=s(Ia,"SPAN",{});var er=l(pt);Do=f(er,"Prepare your files"),er.forEach(t),Ia.forEach(t),oa=u(e),ue=s(e,"OL",{start:!0});var tr=l(ue);ct=s(tr,"LI",{});var ar=l(ct);To=f(ar,"Now is a good time to check your directory to ensure the only files you\u2019re uploading are:"),ar.forEach(t),tr.forEach(t),sa=u(e),E=s(e,"UL",{});var B=l(E);yt=s(B,"LI",{});var or=l(yt);z=s(or,"P",{});var Pt=l(z);mt=s(Pt,"CODE",{});var sr=l(mt);xo=f(sr,"README.md"),sr.forEach(t),qo=f(Pt," is a Dataset card that describes the datasets contents, creation, and usage. To write a Dataset card, see the "),qe=s(Pt,"A",{href:!0});var rr=l(qe);Co=f(rr,"dataset card"),rr.forEach(t),No=f(Pt," page."),Pt.forEach(t),or.forEach(t),Oo=u(B),gt=s(B,"LI",{});var lr=l(gt);he=s(lr,"P",{});var Sa=l(he);Mo=f(Sa,"The raw data files of the dataset (optional, if they are hosted elsewhere you can specify the URLs in the dataset script). If you don\u2019t need a dataset script, you can take a look at "),Ce=s(Sa,"A",{href:!0});var ir=l(Ce);Go=f(ir,"how to structure your dataset repository for your data files"),ir.forEach(t),zo=f(Sa,"."),Sa.forEach(t),lr.forEach(t),Zo=u(B),vt=s(B,"LI",{});var nr=l(vt);Z=s(nr,"P",{});var It=l(Z);wt=s(It,"CODE",{});var fr=l(wt);Uo=f(fr,"your_dataset_name.py"),fr.forEach(t),Ro=f(It," is your dataset loading script (optional if your data files are already in the supported formats csv/jsonl/json/parquet/txt). To create a dataset script, see the "),Ne=s(It,"A",{href:!0});var dr=l(Ne);Yo=f(dr,"dataset script"),dr.forEach(t),Jo=f(It," page."),It.forEach(t),nr.forEach(t),Bo=u(B),_t=s(B,"LI",{});var ur=l(_t);Oe=s(ur,"P",{});var ps=l(Oe);$t=s(ps,"CODE",{});var hr=l($t);Vo=f(hr,"dataset_infos.json"),hr.forEach(t),Wo=f(ps," contains metadata about the dataset (required only if you have a dataset script, or if you want to specify custom feature types)."),ps.forEach(t),ur.forEach(t),B.forEach(t),ra=u(e),S=s(e,"H3",{class:!0});var Fa=l(S);U=s(Fa,"A",{id:!0,class:!0,href:!0});var pr=l(U);bt=s(pr,"SPAN",{});var cr=l(bt);g(pe.$$.fragment,cr),cr.forEach(t),pr.forEach(t),Ko=u(Fa),Et=s(Fa,"SPAN",{});var yr=l(Et);Qo=f(yr,"Upload your files"),yr.forEach(t),Fa.forEach(t),la=u(e),Me=s(e,"P",{});var mr=l(Me);Xo=f(mr,"You can directly upload your files from your repository on the Hugging Face Hub, but this guide will show you how to upload the files from the terminal."),mr.forEach(t),ia=u(e),ce=s(e,"OL",{start:!0});var gr=l(ce);ye=s(gr,"LI",{});var Da=l(ye);es=f(Da,"It is important to add the large data files first with "),kt=s(Da,"CODE",{});var vr=l(kt);ts=f(vr,"git lfs track"),vr.forEach(t),as=f(Da," or else you will encounter an error later when you push your files:"),Da.forEach(t),gr.forEach(t),na=u(e),g(me.$$.fragment,e),fa=u(e),ge=s(e,"OL",{start:!0});var wr=l(ge);Ht=s(wr,"LI",{});var _r=l(Ht);os=f(_r,"Add the dataset loading script and metadata file:"),_r.forEach(t),wr.forEach(t),da=u(e),g(ve.$$.fragment,e),ua=u(e),we=s(e,"OL",{start:!0});var $r=l(we);jt=s($r,"LI",{});var br=l(jt);ss=f(br,"Verify the files have been correctly staged. Then you can commit and push your files:"),br.forEach(t),$r.forEach(t),ha=u(e),g(_e.$$.fragment,e),pa=u(e),Ge=s(e,"P",{});var Er=l(Ge);rs=f(Er,"Congratulations, your dataset has now been uploaded to the Hugging Face Hub where anyone can load it in a single line of code! \u{1F973}"),Er.forEach(t),ca=u(e),g($e.$$.fragment,e),ya=u(e),F=s(e,"H2",{class:!0});var Ta=l(F);R=s(Ta,"A",{id:!0,class:!0,href:!0});var kr=l(R);At=s(kr,"SPAN",{});var Hr=l(At);g(be.$$.fragment,Hr),Hr.forEach(t),kr.forEach(t),ls=u(Ta),Lt=s(Ta,"SPAN",{});var jr=l(Lt);is=f(jr,"Datasets on GitHub (legacy)"),jr.forEach(t),Ta.forEach(t),ma=u(e),ze=s(e,"P",{});var Ar=l(ze);ns=f(Ar,`Datasets used to be hosted on our GitHub repository, but all datasets have now been migrated to the Hugging Face Hub.
The legacy GitHub datasets were added originally on our GitHub repository and therefore don\u2019t have a namespace: \u201Csquad\u201D, \u201Cglue\u201D, etc. unlike the other datasets that are named \u201Cusername/dataset_name\u201D or \u201Corg/dataset_name\u201D.
Those datasets are still maintained, and if you\u2019d like to edit them, please open a Pull Request on the huggingface/datasets repository.
Sharing your dataset to the Hub is the recommended way of adding a dataset.`),Ar.forEach(t),ga=u(e),g(Y.$$.fragment,e),va=u(e),Ze=s(e,"P",{});var Lr=l(Ze);fs=f(Lr,"The code of these datasets are reviewed by the Hugging Face team, and they require test data in order to be regularly tested."),Lr.forEach(t),wa=u(e),J=s(e,"P",{});var xa=l(J);ds=f(xa,"For more info, please take a look at the documentation on "),Ee=s(xa,"A",{href:!0,rel:!0});var Pr=l(Ee);us=f(Pr,"How to add a new dataset in the huggingface/datasets repository"),Pr.forEach(t),hs=f(xa,"."),xa.forEach(t),this.h()},h(){h(c,"name","hf:doc:metadata"),h(c,"content",JSON.stringify(Cr)),h(y,"id","share"),h(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(y,"href","#share"),h(p,"class","relative group"),h(Pe,"id","upload_dataset_repo"),h(D,"id","add-a-dataset"),h(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(D,"href","#add-a-dataset"),h(A,"class","relative group"),h(Te,"href","#load-from-the-hub"),h(C,"id","create-the-repository"),h(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(C,"href","#create-the-repository"),h(L,"class","relative group"),h(X,"href","https://huggingface.co/join"),h(X,"rel","nofollow"),h(ee,"href","https://huggingface.co/login?next=%2Fnew-dataset"),h(ee,"rel","nofollow"),h(ae,"start","2"),h(O,"id","clone-the-repository"),h(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(O,"href","#clone-the-repository"),h(P,"class","relative group"),h(ne,"href","https://git-lfs.github.com/"),h(ne,"rel","nofollow"),h(le,"start","3"),h(G,"id","prepare-your-files"),h(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(G,"href","#prepare-your-files"),h(I,"class","relative group"),h(ue,"start","4"),h(qe,"href","dataset_card"),h(Ce,"href","repository_structure"),h(Ne,"href","dataset_script"),h(U,"id","upload-your-files"),h(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(U,"href","#upload-your-files"),h(S,"class","relative group"),h(ce,"start","5"),h(ge,"start","6"),h(we,"start","7"),h(R,"id","datasets-on-github-legacy"),h(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(R,"href","#datasets-on-github-legacy"),h(F,"class","relative group"),h(Ee,"href","https://github.com/huggingface/datasets/blob/master/ADD_NEW_DATASET.md"),h(Ee,"rel","nofollow")},m(e,r){a(document.head,c),i(e,k,r),i(e,p,r),a(p,y),a(y,Ye),v(W,Ye,null),a(p,qa),a(p,Je),a(Je,Ca),i(e,St,r),i(e,je,r),a(je,Na),i(e,Ft,r),i(e,Ae,r),a(Ae,Oa),i(e,Dt,r),i(e,b,r),a(b,Be),a(Be,Ma),a(b,Ga),a(b,Ve),a(Ve,za),a(b,Za),a(b,We),a(We,Ua),a(b,Ra),a(b,Ke),a(Ke,Ya),a(b,Ja),a(b,Qe),a(Qe,Ba),i(e,Tt,r),i(e,Le,r),a(Le,Va),i(e,xt,r),i(e,Pe,r),i(e,qt,r),i(e,A,r),a(A,D),a(D,Xe),v(K,Xe,null),a(A,Wa),a(A,et),a(et,Ka),i(e,Ct,r),i(e,Ie,r),a(Ie,Qa),i(e,Nt,r),i(e,Se,r),a(Se,Xa),i(e,Ot,r),i(e,T,r),a(T,eo),a(T,tt),a(tt,to),a(T,ao),i(e,Mt,r),i(e,Fe,r),a(Fe,oo),i(e,Gt,r),i(e,De,r),a(De,so),i(e,zt,r),i(e,x,r),a(x,at),a(at,ro),a(x,lo),a(x,ot),a(ot,io),i(e,Zt,r),i(e,q,r),a(q,no),a(q,Te),a(Te,fo),a(q,uo),i(e,Ut,r),i(e,L,r),a(L,C),a(C,st),v(Q,st,null),a(L,ho),a(L,rt),a(rt,po),i(e,Rt,r),i(e,H,r),a(H,co),a(H,X),a(X,yo),a(H,mo),a(H,ee),a(ee,go),a(H,vo),i(e,Yt,r),i(e,xe,r),a(xe,lt),a(lt,wo),i(e,Jt,r),v(te,e,r),i(e,Bt,r),i(e,ae,r),a(ae,it),a(it,_o),i(e,Vt,r),v(oe,e,r),i(e,Wt,r),i(e,N,r),a(N,$o),a(N,nt),a(nt,bo),a(N,Eo),i(e,Kt,r),v(se,e,r),i(e,Qt,r),i(e,P,r),a(P,O),a(O,ft),v(re,ft,null),a(P,ko),a(P,dt),a(dt,Ho),i(e,Xt,r),i(e,le,r),a(le,ie),a(ie,jo),a(ie,ne),a(ne,Ao),a(ie,Lo),i(e,ea,r),v(fe,e,r),i(e,ta,r),i(e,M,r),a(M,Po),a(M,ut),a(ut,Io),a(M,So),i(e,aa,r),i(e,I,r),a(I,G),a(G,ht),v(de,ht,null),a(I,Fo),a(I,pt),a(pt,Do),i(e,oa,r),i(e,ue,r),a(ue,ct),a(ct,To),i(e,sa,r),i(e,E,r),a(E,yt),a(yt,z),a(z,mt),a(mt,xo),a(z,qo),a(z,qe),a(qe,Co),a(z,No),a(E,Oo),a(E,gt),a(gt,he),a(he,Mo),a(he,Ce),a(Ce,Go),a(he,zo),a(E,Zo),a(E,vt),a(vt,Z),a(Z,wt),a(wt,Uo),a(Z,Ro),a(Z,Ne),a(Ne,Yo),a(Z,Jo),a(E,Bo),a(E,_t),a(_t,Oe),a(Oe,$t),a($t,Vo),a(Oe,Wo),i(e,ra,r),i(e,S,r),a(S,U),a(U,bt),v(pe,bt,null),a(S,Ko),a(S,Et),a(Et,Qo),i(e,la,r),i(e,Me,r),a(Me,Xo),i(e,ia,r),i(e,ce,r),a(ce,ye),a(ye,es),a(ye,kt),a(kt,ts),a(ye,as),i(e,na,r),v(me,e,r),i(e,fa,r),i(e,ge,r),a(ge,Ht),a(Ht,os),i(e,da,r),v(ve,e,r),i(e,ua,r),i(e,we,r),a(we,jt),a(jt,ss),i(e,ha,r),v(_e,e,r),i(e,pa,r),i(e,Ge,r),a(Ge,rs),i(e,ca,r),v($e,e,r),i(e,ya,r),i(e,F,r),a(F,R),a(R,At),v(be,At,null),a(F,ls),a(F,Lt),a(Lt,is),i(e,ma,r),i(e,ze,r),a(ze,ns),i(e,ga,r),v(Y,e,r),i(e,va,r),i(e,Ze,r),a(Ze,fs),i(e,wa,r),i(e,J,r),a(J,ds),a(J,Ee),a(Ee,us),a(J,hs),_a=!0},p(e,[r]){const ke={};r&2&&(ke.$$scope={dirty:r,ctx:e}),Y.$set(ke)},i(e){_a||(w(W.$$.fragment,e),w(K.$$.fragment,e),w(Q.$$.fragment,e),w(te.$$.fragment,e),w(oe.$$.fragment,e),w(se.$$.fragment,e),w(re.$$.fragment,e),w(fe.$$.fragment,e),w(de.$$.fragment,e),w(pe.$$.fragment,e),w(me.$$.fragment,e),w(ve.$$.fragment,e),w(_e.$$.fragment,e),w($e.$$.fragment,e),w(be.$$.fragment,e),w(Y.$$.fragment,e),_a=!0)},o(e){_(W.$$.fragment,e),_(K.$$.fragment,e),_(Q.$$.fragment,e),_(te.$$.fragment,e),_(oe.$$.fragment,e),_(se.$$.fragment,e),_(re.$$.fragment,e),_(fe.$$.fragment,e),_(de.$$.fragment,e),_(pe.$$.fragment,e),_(me.$$.fragment,e),_(ve.$$.fragment,e),_(_e.$$.fragment,e),_($e.$$.fragment,e),_(be.$$.fragment,e),_(Y.$$.fragment,e),_a=!1},d(e){t(c),e&&t(k),e&&t(p),$(W),e&&t(St),e&&t(je),e&&t(Ft),e&&t(Ae),e&&t(Dt),e&&t(b),e&&t(Tt),e&&t(Le),e&&t(xt),e&&t(Pe),e&&t(qt),e&&t(A),$(K),e&&t(Ct),e&&t(Ie),e&&t(Nt),e&&t(Se),e&&t(Ot),e&&t(T),e&&t(Mt),e&&t(Fe),e&&t(Gt),e&&t(De),e&&t(zt),e&&t(x),e&&t(Zt),e&&t(q),e&&t(Ut),e&&t(L),$(Q),e&&t(Rt),e&&t(H),e&&t(Yt),e&&t(xe),e&&t(Jt),$(te,e),e&&t(Bt),e&&t(ae),e&&t(Vt),$(oe,e),e&&t(Wt),e&&t(N),e&&t(Kt),$(se,e),e&&t(Qt),e&&t(P),$(re),e&&t(Xt),e&&t(le),e&&t(ea),$(fe,e),e&&t(ta),e&&t(M),e&&t(aa),e&&t(I),$(de),e&&t(oa),e&&t(ue),e&&t(sa),e&&t(E),e&&t(ra),e&&t(S),$(pe),e&&t(la),e&&t(Me),e&&t(ia),e&&t(ce),e&&t(na),$(me,e),e&&t(fa),e&&t(ge),e&&t(da),$(ve,e),e&&t(ua),e&&t(we),e&&t(ha),$(_e,e),e&&t(pa),e&&t(Ge),e&&t(ca),$($e,e),e&&t(ya),e&&t(F),$(be),e&&t(ma),e&&t(ze),e&&t(ga),$(Y,e),e&&t(va),e&&t(Ze),e&&t(wa),e&&t(J)}}}const Cr={local:"share",sections:[{local:"add-a-dataset",sections:[{local:"create-the-repository",title:"Create the repository"},{local:"clone-the-repository",title:"Clone the repository"},{local:"prepare-your-files",title:"Prepare your files"},{local:"upload-your-files",title:"Upload your files"}],title:"Add a dataset"},{local:"datasets-on-github-legacy",title:"Datasets on GitHub (legacy)"}],title:"Share"};function Nr(Re,c,k){let{fw:p}=c;return Re.$$set=y=>{"fw"in y&&k(0,p=y.fw)},[p]}class Zr extends Ir{constructor(c){super();Sr(this,c,Nr,qr,Fr,{fw:0})}}export{Zr as default,Cr as metadata};
