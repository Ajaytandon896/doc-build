import{S as cl,i as pl,s as ul,e as s,k as c,w as m,t as r,M as fl,c as a,d as o,m as p,a as l,x as d,h as i,b as u,F as t,g as h,y as g,L as ml,q as _,o as y,B as v,v as dl}from"../chunks/vendor-a09ded63.js";import{I as yo}from"../chunks/IconCopyLink-3f5556be.js";import{C as E}from"../chunks/CodeBlock-879da7fe.js";function gl(ua){let x,_t,q,S,Oe,W,vo,Ge,wo,yt,L,bo,Ie,$o,Eo,vt,k,J,ko,Ne,jo,xo,qo,z,Po,we,To,Ho,Ao,K,Co,Q,So,Lo,wt,be,Ro,bt,R,V,Ue,Do,Fo,X,Oo,P,Z,Go,Me,Io,No,Uo,ee,Mo,$e,Be,Bo,Yo,$t,T,D,Ye,te,Wo,We,Jo,Et,w,zo,Je,Ko,Qo,ze,Vo,Xo,Ke,Zo,es,kt,b,oe,ts,Qe,os,ss,as,se,ls,Ve,rs,is,ns,Xe,hs,cs,ae,ps,Ze,us,fs,jt,le,xt,Ee,ms,qt,re,Pt,F,ds,et,gs,_s,Tt,ie,Ht,O,ys,tt,vs,ws,At,ne,Ct,ke,bs,St,G,ot,he,st,$s,Es,at,ks,js,H,ce,lt,xs,qs,rt,Ps,Ts,pe,it,Hs,As,nt,Cs,Ss,ue,ht,Ls,Rs,ct,Ds,Lt,I,Fs,pt,Os,Gs,Rt,fe,Dt,A,N,ut,me,Is,ft,Ns,Ft,f,Us,je,Ms,Bs,xe,Ys,Ws,mt,Js,zs,qe,Ks,Qs,Pe,Vs,Xs,Ot,de,Gt,j,Zs,Te,ea,ta,He,oa,sa,It,ge,Nt,U,aa,Ae,la,ra,Ut,_e,Mt,C,M,dt,ye,ia,gt,na,Bt,Ce,ha,Yt,ve,Wt,Se,ca,Jt;return W=new yo({}),X=new E({props:{code:"huggingface-cli login",highlighted:"huggingface-cli login"}}),ee=new E({props:{code:`from huggingface_hub import notebook_login
notebook_login()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> notebook_login
<span class="hljs-meta">&gt;&gt;&gt; </span>notebook_login()`}}),te=new yo({}),le=new E({props:{code:`from huggingface_hub import Repository
with Repository(local_dir="text-files", clone_from="<user>/text-files").commit(commit_message="My first file :)"):
    with open("file.txt", "w+") as f:
        f.write(json.dumps({"hey": 8}))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> Repository
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> Repository(local_dir=<span class="hljs-string">&quot;text-files&quot;</span>, clone_from=<span class="hljs-string">&quot;&lt;user&gt;/text-files&quot;</span>).commit(commit_message=<span class="hljs-string">&quot;My first file :)&quot;</span>):
<span class="hljs-meta">... </span>    <span class="hljs-keyword">with</span> <span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;file.txt&quot;</span>, <span class="hljs-string">&quot;w+&quot;</span>) <span class="hljs-keyword">as</span> f:
<span class="hljs-meta">... </span>        f.write(json.dumps({<span class="hljs-string">&quot;hey&quot;</span>: <span class="hljs-number">8</span>}))`}}),re=new E({props:{code:`import torch
model = torch.nn.Transformer()
with Repository("torch-model", clone_from="<user>/torch-model", use_auth_token=True).commit(commit_message="My cool model :)"):
    torch.save(model.state_dict(), "model.pt")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span>model = torch.nn.Transformer()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> Repository(<span class="hljs-string">&quot;torch-model&quot;</span>, clone_from=<span class="hljs-string">&quot;&lt;user&gt;/torch-model&quot;</span>, use_auth_token=<span class="hljs-literal">True</span>).commit(commit_message=<span class="hljs-string">&quot;My cool model :)&quot;</span>):
<span class="hljs-meta">... </span>    torch.save(model.state_dict(), <span class="hljs-string">&quot;model.pt&quot;</span>)`}}),ie=new E({props:{code:'with repo.commit(commit_message="My cool model :)", blocking=False)',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> repo.commit(commit_message=<span class="hljs-string">&quot;My cool model :)&quot;</span>, blocking=<span class="hljs-literal">False</span>)'}}),ne=new E({props:{code:`last_command = repo.command_queue[-1]
last_command.status`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>last_command = repo.command_queue[-<span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>last_command.status`}}),fe=new E({props:{code:`# Inspect an error.
>>> last_command.stderr

# Check whether a push is completed or ongoing.
>>> last_command.is_done

# Check whether a push command has errored.
>>> last_command.failed`,highlighted:`<span class="hljs-comment"># Inspect an error.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>last_command.stderr

<span class="hljs-comment"># Check whether a push is completed or ongoing.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>last_command.is_done

<span class="hljs-comment"># Check whether a push command has errored.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>last_command.failed`}}),me=new yo({}),de=new E({props:{code:`from huggingface_hub import Repository
repo.git_pull()
repo.push_to_hub(commit_message="Commit my-awesome-file to the Hub")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> Repository
<span class="hljs-meta">&gt;&gt;&gt; </span>repo.git_pull()
<span class="hljs-meta">&gt;&gt;&gt; </span>repo.push_to_hub(commit_message=<span class="hljs-string">&quot;Commit my-awesome-file to the Hub&quot;</span>)`}}),ge=new E({props:{code:`repo.git_add("path/to/file")
repo.git_commit(commit_message="add my first model config file :)")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>repo.git_add(<span class="hljs-string">&quot;path/to/file&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>repo.git_commit(commit_message=<span class="hljs-string">&quot;add my first model config file :)&quot;</span>)`}}),_e=new E({props:{code:"repo.git_push()",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>repo.git_push()'}}),ye=new yo({}),ve=new E({props:{code:"huggingface-cli lfs-enable-largefiles",highlighted:"huggingface-cli lfs-enable-largefiles"}}),{c(){x=s("meta"),_t=c(),q=s("h1"),S=s("a"),Oe=s("span"),m(W.$$.fragment),vo=c(),Ge=s("span"),wo=r("Upload files to the Hub"),yt=c(),L=s("p"),bo=r("Sharing your files and work is a very important aspect of the Hub. The "),Ie=s("code"),$o=r("huggingface_hub"),Eo=r(" uses a Git-based workflow to upload files to the Hub. You can use these functions independently or integrate them into your own library, making it more convenient for your users to interact with the Hub. This guide will show you how to:"),vt=c(),k=s("ul"),J=s("li"),ko=r("Push files with a "),Ne=s("code"),jo=r("commit"),xo=r(" context manager."),qo=c(),z=s("li"),Po=r("Push files with the "),we=s("a"),To=r("push_to_hub()"),Ho=r(" function."),Ao=c(),K=s("li"),Co=r("Upload very large files with "),Q=s("a"),So=r("Git LFS"),Lo=r("."),wt=c(),be=s("p"),Ro=r("Whenever you want to upload files to the Hub, you need to log in to your Hugging Face account:"),bt=c(),R=s("ol"),V=s("li"),Ue=s("p"),Do=r("Log in to your Hugging Face account with the following command:"),Fo=c(),m(X.$$.fragment),Oo=c(),P=s("li"),Z=s("p"),Go=r("Alternatively, if you prefer working from a Jupyter or Colaboratory notebook, login with "),Me=s("code"),Io=r("notebook_login()"),No=r(":"),Uo=c(),m(ee.$$.fragment),Mo=c(),$e=s("p"),Be=s("code"),Bo=r("notebook_login()"),Yo=r(" will launch a widget in your notebook from which you can enter your Hugging Face credentials."),$t=c(),T=s("h2"),D=s("a"),Ye=s("span"),m(te.$$.fragment),Wo=c(),We=s("span"),Jo=r("commit context manager"),Et=c(),w=s("p"),zo=r("The "),Je=s("code"),Ko=r("commit"),Qo=r(" context manager handles four of the most common Git commands: pull, add, commit, and push. "),ze=s("code"),Vo=r("git-lfs"),Xo=r(" automatically tracks any file larger than 10MB. In the following example, the "),Ke=s("code"),Zo=r("commit"),es=r(" context manager:"),kt=c(),b=s("ol"),oe=s("li"),ts=r("Pulls from the "),Qe=s("code"),os=r("text-files"),ss=r(" repository."),as=c(),se=s("li"),ls=r("Adds a change made to "),Ve=s("code"),rs=r("file.txt"),is=r("."),ns=c(),Xe=s("li"),hs=r("Commits the change."),cs=c(),ae=s("li"),ps=r("Pushes the change to the "),Ze=s("code"),us=r("text-files"),fs=r(" repository."),jt=c(),m(le.$$.fragment),xt=c(),Ee=s("p"),ms=r("Here is another example of how to save and upload a file to a repository:"),qt=c(),m(re.$$.fragment),Pt=c(),F=s("p"),ds=r("Set "),et=s("code"),gs=r("blocking=False"),_s=r(" if you would like to push your commits asynchronously. Non-blocking behavior is helpful when you want to continue running your script while you push your commits."),Tt=c(),m(ie.$$.fragment),Ht=c(),O=s("p"),ys=r("You can check the status of your push with the "),tt=s("code"),vs=r("command_queue"),ws=r(" method:"),At=c(),m(ne.$$.fragment),Ct=c(),ke=s("p"),bs=r("Refer to the table below for the possible statuses:"),St=c(),G=s("table"),ot=s("thead"),he=s("tr"),st=s("th"),$s=r("Status"),Es=c(),at=s("th"),ks=r("Description"),js=c(),H=s("tbody"),ce=s("tr"),lt=s("td"),xs=r("-1"),qs=c(),rt=s("td"),Ps=r("The push is ongoing."),Ts=c(),pe=s("tr"),it=s("td"),Hs=r("0"),As=c(),nt=s("td"),Cs=r("The push has completed successfully."),Ss=c(),ue=s("tr"),ht=s("td"),Ls=r("Non-zero"),Rs=c(),ct=s("td"),Ds=r("An error has occurred."),Lt=c(),I=s("p"),Fs=r("When "),pt=s("code"),Os=r("blocking=False"),Gs=r(", commands are tracked, and your script will only exit when all pushes are completed, even if other errors occur in your script. Some additional useful commands for checking the status of a push include:"),Rt=c(),m(fe.$$.fragment),Dt=c(),A=s("h2"),N=s("a"),ut=s("span"),m(me.$$.fragment),Is=c(),ft=s("span"),Ns=r("push_to_hub"),Ft=c(),f=s("p"),Us=r("The "),je=s("a"),Ms=r("Repository"),Bs=r(" class also has a "),xe=s("a"),Ys=r("push_to_hub()"),Ws=r(" function to add files, make a commit, and push them to a repository. Unlike the "),mt=s("code"),Js=r("commit"),zs=r(" context manager, "),qe=s("a"),Ks=r("push_to_hub()"),Qs=r(" requires you to pull from a repository first, save the files, and then call "),Pe=s("a"),Vs=r("push_to_hub()"),Xs=r("."),Ot=c(),m(de.$$.fragment),Gt=c(),j=s("p"),Zs=r("However, if you aren\u2019t ready to push a file yet, you can still use "),Te=s("a"),ea=r("git_add()"),ta=r(" and "),He=s("a"),oa=r("git_commit()"),sa=r(" to add and commit your file:"),It=c(),m(ge.$$.fragment),Nt=c(),U=s("p"),aa=r("Once you\u2019re ready, you can push your file to your repository with "),Ae=s("a"),la=r("git_push()"),ra=r(":"),Ut=c(),m(_e.$$.fragment),Mt=c(),C=s("h2"),M=s("a"),dt=s("span"),m(ye.$$.fragment),ia=c(),gt=s("span"),na=r("Upload with Git LFS"),Bt=c(),Ce=s("p"),ha=r("For huge files (>5GB), you need to install a custom transfer agent for Git LFS:"),Yt=c(),m(ve.$$.fragment),Wt=c(),Se=s("p"),ca=r("You should install this for each model repository that contains a model file. Once installed, you are now able to push files larger than 5GB."),this.h()},l(e){const n=fl('[data-svelte="svelte-1phssyn"]',document.head);x=a(n,"META",{name:!0,content:!0}),n.forEach(o),_t=p(e),q=a(e,"H1",{class:!0});var zt=l(q);S=a(zt,"A",{id:!0,class:!0,href:!0});var fa=l(S);Oe=a(fa,"SPAN",{});var ma=l(Oe);d(W.$$.fragment,ma),ma.forEach(o),fa.forEach(o),vo=p(zt),Ge=a(zt,"SPAN",{});var da=l(Ge);wo=i(da,"Upload files to the Hub"),da.forEach(o),zt.forEach(o),yt=p(e),L=a(e,"P",{});var Kt=l(L);bo=i(Kt,"Sharing your files and work is a very important aspect of the Hub. The "),Ie=a(Kt,"CODE",{});var ga=l(Ie);$o=i(ga,"huggingface_hub"),ga.forEach(o),Eo=i(Kt," uses a Git-based workflow to upload files to the Hub. You can use these functions independently or integrate them into your own library, making it more convenient for your users to interact with the Hub. This guide will show you how to:"),Kt.forEach(o),vt=p(e),k=a(e,"UL",{});var Le=l(k);J=a(Le,"LI",{});var Qt=l(J);ko=i(Qt,"Push files with a "),Ne=a(Qt,"CODE",{});var _a=l(Ne);jo=i(_a,"commit"),_a.forEach(o),xo=i(Qt," context manager."),Qt.forEach(o),qo=p(Le),z=a(Le,"LI",{});var Vt=l(z);Po=i(Vt,"Push files with the "),we=a(Vt,"A",{href:!0});var ya=l(we);To=i(ya,"push_to_hub()"),ya.forEach(o),Ho=i(Vt," function."),Vt.forEach(o),Ao=p(Le),K=a(Le,"LI",{});var Xt=l(K);Co=i(Xt,"Upload very large files with "),Q=a(Xt,"A",{href:!0,rel:!0});var va=l(Q);So=i(va,"Git LFS"),va.forEach(o),Lo=i(Xt,"."),Xt.forEach(o),Le.forEach(o),wt=p(e),be=a(e,"P",{});var wa=l(be);Ro=i(wa,"Whenever you want to upload files to the Hub, you need to log in to your Hugging Face account:"),wa.forEach(o),bt=p(e),R=a(e,"OL",{});var Zt=l(R);V=a(Zt,"LI",{});var eo=l(V);Ue=a(eo,"P",{});var ba=l(Ue);Do=i(ba,"Log in to your Hugging Face account with the following command:"),ba.forEach(o),Fo=p(eo),d(X.$$.fragment,eo),eo.forEach(o),Oo=p(Zt),P=a(Zt,"LI",{});var Re=l(P);Z=a(Re,"P",{});var to=l(Z);Go=i(to,"Alternatively, if you prefer working from a Jupyter or Colaboratory notebook, login with "),Me=a(to,"CODE",{});var $a=l(Me);Io=i($a,"notebook_login()"),$a.forEach(o),No=i(to,":"),to.forEach(o),Uo=p(Re),d(ee.$$.fragment,Re),Mo=p(Re),$e=a(Re,"P",{});var pa=l($e);Be=a(pa,"CODE",{});var Ea=l(Be);Bo=i(Ea,"notebook_login()"),Ea.forEach(o),Yo=i(pa," will launch a widget in your notebook from which you can enter your Hugging Face credentials."),pa.forEach(o),Re.forEach(o),Zt.forEach(o),$t=p(e),T=a(e,"H2",{class:!0});var oo=l(T);D=a(oo,"A",{id:!0,class:!0,href:!0});var ka=l(D);Ye=a(ka,"SPAN",{});var ja=l(Ye);d(te.$$.fragment,ja),ja.forEach(o),ka.forEach(o),Wo=p(oo),We=a(oo,"SPAN",{});var xa=l(We);Jo=i(xa,"commit context manager"),xa.forEach(o),oo.forEach(o),Et=p(e),w=a(e,"P",{});var B=l(w);zo=i(B,"The "),Je=a(B,"CODE",{});var qa=l(Je);Ko=i(qa,"commit"),qa.forEach(o),Qo=i(B," context manager handles four of the most common Git commands: pull, add, commit, and push. "),ze=a(B,"CODE",{});var Pa=l(ze);Vo=i(Pa,"git-lfs"),Pa.forEach(o),Xo=i(B," automatically tracks any file larger than 10MB. In the following example, the "),Ke=a(B,"CODE",{});var Ta=l(Ke);Zo=i(Ta,"commit"),Ta.forEach(o),es=i(B," context manager:"),B.forEach(o),kt=p(e),b=a(e,"OL",{});var Y=l(b);oe=a(Y,"LI",{});var so=l(oe);ts=i(so,"Pulls from the "),Qe=a(so,"CODE",{});var Ha=l(Qe);os=i(Ha,"text-files"),Ha.forEach(o),ss=i(so," repository."),so.forEach(o),as=p(Y),se=a(Y,"LI",{});var ao=l(se);ls=i(ao,"Adds a change made to "),Ve=a(ao,"CODE",{});var Aa=l(Ve);rs=i(Aa,"file.txt"),Aa.forEach(o),is=i(ao,"."),ao.forEach(o),ns=p(Y),Xe=a(Y,"LI",{});var Ca=l(Xe);hs=i(Ca,"Commits the change."),Ca.forEach(o),cs=p(Y),ae=a(Y,"LI",{});var lo=l(ae);ps=i(lo,"Pushes the change to the "),Ze=a(lo,"CODE",{});var Sa=l(Ze);us=i(Sa,"text-files"),Sa.forEach(o),fs=i(lo," repository."),lo.forEach(o),Y.forEach(o),jt=p(e),d(le.$$.fragment,e),xt=p(e),Ee=a(e,"P",{});var La=l(Ee);ms=i(La,"Here is another example of how to save and upload a file to a repository:"),La.forEach(o),qt=p(e),d(re.$$.fragment,e),Pt=p(e),F=a(e,"P",{});var ro=l(F);ds=i(ro,"Set "),et=a(ro,"CODE",{});var Ra=l(et);gs=i(Ra,"blocking=False"),Ra.forEach(o),_s=i(ro," if you would like to push your commits asynchronously. Non-blocking behavior is helpful when you want to continue running your script while you push your commits."),ro.forEach(o),Tt=p(e),d(ie.$$.fragment,e),Ht=p(e),O=a(e,"P",{});var io=l(O);ys=i(io,"You can check the status of your push with the "),tt=a(io,"CODE",{});var Da=l(tt);vs=i(Da,"command_queue"),Da.forEach(o),ws=i(io," method:"),io.forEach(o),At=p(e),d(ne.$$.fragment,e),Ct=p(e),ke=a(e,"P",{});var Fa=l(ke);bs=i(Fa,"Refer to the table below for the possible statuses:"),Fa.forEach(o),St=p(e),G=a(e,"TABLE",{});var no=l(G);ot=a(no,"THEAD",{});var Oa=l(ot);he=a(Oa,"TR",{});var ho=l(he);st=a(ho,"TH",{});var Ga=l(st);$s=i(Ga,"Status"),Ga.forEach(o),Es=p(ho),at=a(ho,"TH",{});var Ia=l(at);ks=i(Ia,"Description"),Ia.forEach(o),ho.forEach(o),Oa.forEach(o),js=p(no),H=a(no,"TBODY",{});var De=l(H);ce=a(De,"TR",{});var co=l(ce);lt=a(co,"TD",{});var Na=l(lt);xs=i(Na,"-1"),Na.forEach(o),qs=p(co),rt=a(co,"TD",{});var Ua=l(rt);Ps=i(Ua,"The push is ongoing."),Ua.forEach(o),co.forEach(o),Ts=p(De),pe=a(De,"TR",{});var po=l(pe);it=a(po,"TD",{});var Ma=l(it);Hs=i(Ma,"0"),Ma.forEach(o),As=p(po),nt=a(po,"TD",{});var Ba=l(nt);Cs=i(Ba,"The push has completed successfully."),Ba.forEach(o),po.forEach(o),Ss=p(De),ue=a(De,"TR",{});var uo=l(ue);ht=a(uo,"TD",{});var Ya=l(ht);Ls=i(Ya,"Non-zero"),Ya.forEach(o),Rs=p(uo),ct=a(uo,"TD",{});var Wa=l(ct);Ds=i(Wa,"An error has occurred."),Wa.forEach(o),uo.forEach(o),De.forEach(o),no.forEach(o),Lt=p(e),I=a(e,"P",{});var fo=l(I);Fs=i(fo,"When "),pt=a(fo,"CODE",{});var Ja=l(pt);Os=i(Ja,"blocking=False"),Ja.forEach(o),Gs=i(fo,", commands are tracked, and your script will only exit when all pushes are completed, even if other errors occur in your script. Some additional useful commands for checking the status of a push include:"),fo.forEach(o),Rt=p(e),d(fe.$$.fragment,e),Dt=p(e),A=a(e,"H2",{class:!0});var mo=l(A);N=a(mo,"A",{id:!0,class:!0,href:!0});var za=l(N);ut=a(za,"SPAN",{});var Ka=l(ut);d(me.$$.fragment,Ka),Ka.forEach(o),za.forEach(o),Is=p(mo),ft=a(mo,"SPAN",{});var Qa=l(ft);Ns=i(Qa,"push_to_hub"),Qa.forEach(o),mo.forEach(o),Ft=p(e),f=a(e,"P",{});var $=l(f);Us=i($,"The "),je=a($,"A",{href:!0});var Va=l(je);Ms=i(Va,"Repository"),Va.forEach(o),Bs=i($," class also has a "),xe=a($,"A",{href:!0});var Xa=l(xe);Ys=i(Xa,"push_to_hub()"),Xa.forEach(o),Ws=i($," function to add files, make a commit, and push them to a repository. Unlike the "),mt=a($,"CODE",{});var Za=l(mt);Js=i(Za,"commit"),Za.forEach(o),zs=i($," context manager, "),qe=a($,"A",{href:!0});var el=l(qe);Ks=i(el,"push_to_hub()"),el.forEach(o),Qs=i($," requires you to pull from a repository first, save the files, and then call "),Pe=a($,"A",{href:!0});var tl=l(Pe);Vs=i(tl,"push_to_hub()"),tl.forEach(o),Xs=i($,"."),$.forEach(o),Ot=p(e),d(de.$$.fragment,e),Gt=p(e),j=a(e,"P",{});var Fe=l(j);Zs=i(Fe,"However, if you aren\u2019t ready to push a file yet, you can still use "),Te=a(Fe,"A",{href:!0});var ol=l(Te);ea=i(ol,"git_add()"),ol.forEach(o),ta=i(Fe," and "),He=a(Fe,"A",{href:!0});var sl=l(He);oa=i(sl,"git_commit()"),sl.forEach(o),sa=i(Fe," to add and commit your file:"),Fe.forEach(o),It=p(e),d(ge.$$.fragment,e),Nt=p(e),U=a(e,"P",{});var go=l(U);aa=i(go,"Once you\u2019re ready, you can push your file to your repository with "),Ae=a(go,"A",{href:!0});var al=l(Ae);la=i(al,"git_push()"),al.forEach(o),ra=i(go,":"),go.forEach(o),Ut=p(e),d(_e.$$.fragment,e),Mt=p(e),C=a(e,"H2",{class:!0});var _o=l(C);M=a(_o,"A",{id:!0,class:!0,href:!0});var ll=l(M);dt=a(ll,"SPAN",{});var rl=l(dt);d(ye.$$.fragment,rl),rl.forEach(o),ll.forEach(o),ia=p(_o),gt=a(_o,"SPAN",{});var il=l(gt);na=i(il,"Upload with Git LFS"),il.forEach(o),_o.forEach(o),Bt=p(e),Ce=a(e,"P",{});var nl=l(Ce);ha=i(nl,"For huge files (>5GB), you need to install a custom transfer agent for Git LFS:"),nl.forEach(o),Yt=p(e),d(ve.$$.fragment,e),Wt=p(e),Se=a(e,"P",{});var hl=l(Se);ca=i(hl,"You should install this for each model repository that contains a model file. Once installed, you are now able to push files larger than 5GB."),hl.forEach(o),this.h()},h(){u(x,"name","hf:doc:metadata"),u(x,"content",JSON.stringify(_l)),u(S,"id","upload-files-to-the-hub"),u(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(S,"href","#upload-files-to-the-hub"),u(q,"class","relative group"),u(we,"href","/docs/huggingface_hub/v0.6.0.rc0/en/package_reference/repository#huggingface_hub.Repository.push_to_hub"),u(Q,"href","https://git-lfs.github.com/"),u(Q,"rel","nofollow"),u(D,"id","commit-context-manager"),u(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(D,"href","#commit-context-manager"),u(T,"class","relative group"),u(N,"id","pushtohub"),u(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(N,"href","#pushtohub"),u(A,"class","relative group"),u(je,"href","/docs/huggingface_hub/v0.6.0.rc0/en/package_reference/repository#huggingface_hub.Repository"),u(xe,"href","/docs/huggingface_hub/v0.6.0.rc0/en/package_reference/repository#huggingface_hub.Repository.push_to_hub"),u(qe,"href","/docs/huggingface_hub/v0.6.0.rc0/en/package_reference/repository#huggingface_hub.Repository.push_to_hub"),u(Pe,"href","/docs/huggingface_hub/v0.6.0.rc0/en/package_reference/repository#huggingface_hub.Repository.push_to_hub"),u(Te,"href","/docs/huggingface_hub/v0.6.0.rc0/en/package_reference/repository#huggingface_hub.Repository.git_add"),u(He,"href","/docs/huggingface_hub/v0.6.0.rc0/en/package_reference/repository#huggingface_hub.Repository.git_commit"),u(Ae,"href","/docs/huggingface_hub/v0.6.0.rc0/en/package_reference/repository#huggingface_hub.Repository.git_push"),u(M,"id","upload-with-git-lfs"),u(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(M,"href","#upload-with-git-lfs"),u(C,"class","relative group")},m(e,n){t(document.head,x),h(e,_t,n),h(e,q,n),t(q,S),t(S,Oe),g(W,Oe,null),t(q,vo),t(q,Ge),t(Ge,wo),h(e,yt,n),h(e,L,n),t(L,bo),t(L,Ie),t(Ie,$o),t(L,Eo),h(e,vt,n),h(e,k,n),t(k,J),t(J,ko),t(J,Ne),t(Ne,jo),t(J,xo),t(k,qo),t(k,z),t(z,Po),t(z,we),t(we,To),t(z,Ho),t(k,Ao),t(k,K),t(K,Co),t(K,Q),t(Q,So),t(K,Lo),h(e,wt,n),h(e,be,n),t(be,Ro),h(e,bt,n),h(e,R,n),t(R,V),t(V,Ue),t(Ue,Do),t(V,Fo),g(X,V,null),t(R,Oo),t(R,P),t(P,Z),t(Z,Go),t(Z,Me),t(Me,Io),t(Z,No),t(P,Uo),g(ee,P,null),t(P,Mo),t(P,$e),t($e,Be),t(Be,Bo),t($e,Yo),h(e,$t,n),h(e,T,n),t(T,D),t(D,Ye),g(te,Ye,null),t(T,Wo),t(T,We),t(We,Jo),h(e,Et,n),h(e,w,n),t(w,zo),t(w,Je),t(Je,Ko),t(w,Qo),t(w,ze),t(ze,Vo),t(w,Xo),t(w,Ke),t(Ke,Zo),t(w,es),h(e,kt,n),h(e,b,n),t(b,oe),t(oe,ts),t(oe,Qe),t(Qe,os),t(oe,ss),t(b,as),t(b,se),t(se,ls),t(se,Ve),t(Ve,rs),t(se,is),t(b,ns),t(b,Xe),t(Xe,hs),t(b,cs),t(b,ae),t(ae,ps),t(ae,Ze),t(Ze,us),t(ae,fs),h(e,jt,n),g(le,e,n),h(e,xt,n),h(e,Ee,n),t(Ee,ms),h(e,qt,n),g(re,e,n),h(e,Pt,n),h(e,F,n),t(F,ds),t(F,et),t(et,gs),t(F,_s),h(e,Tt,n),g(ie,e,n),h(e,Ht,n),h(e,O,n),t(O,ys),t(O,tt),t(tt,vs),t(O,ws),h(e,At,n),g(ne,e,n),h(e,Ct,n),h(e,ke,n),t(ke,bs),h(e,St,n),h(e,G,n),t(G,ot),t(ot,he),t(he,st),t(st,$s),t(he,Es),t(he,at),t(at,ks),t(G,js),t(G,H),t(H,ce),t(ce,lt),t(lt,xs),t(ce,qs),t(ce,rt),t(rt,Ps),t(H,Ts),t(H,pe),t(pe,it),t(it,Hs),t(pe,As),t(pe,nt),t(nt,Cs),t(H,Ss),t(H,ue),t(ue,ht),t(ht,Ls),t(ue,Rs),t(ue,ct),t(ct,Ds),h(e,Lt,n),h(e,I,n),t(I,Fs),t(I,pt),t(pt,Os),t(I,Gs),h(e,Rt,n),g(fe,e,n),h(e,Dt,n),h(e,A,n),t(A,N),t(N,ut),g(me,ut,null),t(A,Is),t(A,ft),t(ft,Ns),h(e,Ft,n),h(e,f,n),t(f,Us),t(f,je),t(je,Ms),t(f,Bs),t(f,xe),t(xe,Ys),t(f,Ws),t(f,mt),t(mt,Js),t(f,zs),t(f,qe),t(qe,Ks),t(f,Qs),t(f,Pe),t(Pe,Vs),t(f,Xs),h(e,Ot,n),g(de,e,n),h(e,Gt,n),h(e,j,n),t(j,Zs),t(j,Te),t(Te,ea),t(j,ta),t(j,He),t(He,oa),t(j,sa),h(e,It,n),g(ge,e,n),h(e,Nt,n),h(e,U,n),t(U,aa),t(U,Ae),t(Ae,la),t(U,ra),h(e,Ut,n),g(_e,e,n),h(e,Mt,n),h(e,C,n),t(C,M),t(M,dt),g(ye,dt,null),t(C,ia),t(C,gt),t(gt,na),h(e,Bt,n),h(e,Ce,n),t(Ce,ha),h(e,Yt,n),g(ve,e,n),h(e,Wt,n),h(e,Se,n),t(Se,ca),Jt=!0},p:ml,i(e){Jt||(_(W.$$.fragment,e),_(X.$$.fragment,e),_(ee.$$.fragment,e),_(te.$$.fragment,e),_(le.$$.fragment,e),_(re.$$.fragment,e),_(ie.$$.fragment,e),_(ne.$$.fragment,e),_(fe.$$.fragment,e),_(me.$$.fragment,e),_(de.$$.fragment,e),_(ge.$$.fragment,e),_(_e.$$.fragment,e),_(ye.$$.fragment,e),_(ve.$$.fragment,e),Jt=!0)},o(e){y(W.$$.fragment,e),y(X.$$.fragment,e),y(ee.$$.fragment,e),y(te.$$.fragment,e),y(le.$$.fragment,e),y(re.$$.fragment,e),y(ie.$$.fragment,e),y(ne.$$.fragment,e),y(fe.$$.fragment,e),y(me.$$.fragment,e),y(de.$$.fragment,e),y(ge.$$.fragment,e),y(_e.$$.fragment,e),y(ye.$$.fragment,e),y(ve.$$.fragment,e),Jt=!1},d(e){o(x),e&&o(_t),e&&o(q),v(W),e&&o(yt),e&&o(L),e&&o(vt),e&&o(k),e&&o(wt),e&&o(be),e&&o(bt),e&&o(R),v(X),v(ee),e&&o($t),e&&o(T),v(te),e&&o(Et),e&&o(w),e&&o(kt),e&&o(b),e&&o(jt),v(le,e),e&&o(xt),e&&o(Ee),e&&o(qt),v(re,e),e&&o(Pt),e&&o(F),e&&o(Tt),v(ie,e),e&&o(Ht),e&&o(O),e&&o(At),v(ne,e),e&&o(Ct),e&&o(ke),e&&o(St),e&&o(G),e&&o(Lt),e&&o(I),e&&o(Rt),v(fe,e),e&&o(Dt),e&&o(A),v(me),e&&o(Ft),e&&o(f),e&&o(Ot),v(de,e),e&&o(Gt),e&&o(j),e&&o(It),v(ge,e),e&&o(Nt),e&&o(U),e&&o(Ut),v(_e,e),e&&o(Mt),e&&o(C),v(ye),e&&o(Bt),e&&o(Ce),e&&o(Yt),v(ve,e),e&&o(Wt),e&&o(Se)}}}const _l={local:"upload-files-to-the-hub",sections:[{local:"commit-context-manager",title:"commit context manager"},{local:"pushtohub",title:"push_to_hub"},{local:"upload-with-git-lfs",title:"Upload with Git LFS"}],title:"Upload files to the Hub"};function yl(ua){return dl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class $l extends cl{constructor(x){super();pl(this,x,yl,gl,ul,{})}}export{$l as default,_l as metadata};
