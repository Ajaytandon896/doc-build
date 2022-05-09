import{S as $l,i as wl,s as bl,e as r,k as c,w as u,t as l,M as El,c as a,d as o,m as h,a as s,x as g,h as i,b as f,F as t,g as n,y as m,L as kl,q as y,o as _,B as d,v as jl}from"../chunks/vendor-a09ded63.js";import{I as B}from"../chunks/IconCopyLink-3f5556be.js";import{C as v}from"../chunks/CodeBlock-879da7fe.js";function Al(ps){let C,Yt,S,M,st,ie,ar,lt,sr,Jt,Te,lr,zt,E,it,ir,pr,pt,nr,cr,pe,hr,Fe,fr,ur,Kt,Le,gr,Qt,U,ne,nt,mr,yr,ce,_r,x,he,dr,ct,vr,$r,wr,fe,br,Ge,ht,Er,kr,Vt,H,W,ft,ue,jr,ut,Ar,Xt,$,Pr,Ie,Rr,qr,gt,Cr,Sr,mt,xr,Hr,yt,Nr,Dr,Zt,ge,eo,k,Or,Be,Tr,Fr,_t,Lr,Gr,to,me,oo,Y,Ir,dt,Br,Mr,ro,ye,ao,J,Ur,Me,Wr,Yr,so,N,z,vt,_e,Jr,$t,zr,lo,K,Kr,Ue,Qr,Vr,io,Q,Xr,wt,Zr,ea,po,de,no,V,ta,bt,oa,ra,co,ve,ho,D,X,Et,$e,aa,kt,sa,fo,We,la,uo,we,go,O,Z,jt,be,ia,At,pa,mo,w,na,Ye,ca,ha,Je,fa,ua,Ee,ga,ma,ze,ya,_a,yo,T,ee,Pt,ke,da,Rt,va,_o,te,$a,Ke,wa,ba,vo,je,$o,F,oe,qt,Ae,Ea,Ct,ka,wo,j,ja,St,Aa,Pa,xt,Ra,qa,bo,Pe,Eo,L,Ht,Ca,Sa,Nt,xa,Ha,ko,Re,jo,A,Na,Dt,Da,Oa,Qe,Ta,Fa,Ao,qe,Po,P,La,Ot,Ga,Ia,Tt,Ba,Ma,Ro,Ce,qo,G,re,Ft,Se,Ua,Lt,Wa,Co,b,Ya,Ve,Ja,za,Gt,Ka,Qa,It,Va,Xa,So,xe,xo,I,ae,Bt,He,Za,Mt,es,Ho,Ne,Xe,ts,os,No,De,Do,se,rs,Ut,as,ss,Oo,Oe,To;return ie=new B({}),ce=new v({props:{code:"huggingface-cli login",highlighted:"huggingface-cli login"}}),fe=new v({props:{code:`from huggingface_hub import notebook_login
notebook_login()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> notebook_login
<span class="hljs-meta">&gt;&gt;&gt; </span>notebook_login()`}}),ue=new B({}),ge=new v({props:{code:`from huggingface_hub import create_repo
create_repo("lysandre/test-model")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> create_repo
<span class="hljs-meta">&gt;&gt;&gt; </span>create_repo(<span class="hljs-string">&quot;lysandre/test-model&quot;</span>)
<span class="hljs-string">&#x27;https://huggingface.co/lysandre/test-model&#x27;</span>`}}),me=new v({props:{code:`from huggingface_hub import create_repo
create_repo("lysandre/test-dataset", repo_type="dataset")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> create_repo
<span class="hljs-meta">&gt;&gt;&gt; </span>create_repo(<span class="hljs-string">&quot;lysandre/test-dataset&quot;</span>, repo_type=<span class="hljs-string">&quot;dataset&quot;</span>)
<span class="hljs-string">&#x27;https://huggingface.co/lysandre/test-dataset&#x27;</span>`}}),ye=new v({props:{code:`from huggingface_hub import create_repo
create_repo("lysandre/test-private", private=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> create_repo
<span class="hljs-meta">&gt;&gt;&gt; </span>create_repo(<span class="hljs-string">&quot;lysandre/test-private&quot;</span>, private=<span class="hljs-literal">True</span>)`}}),_e=new B({}),de=new v({props:{code:"delete_repo(repo_id=name)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>delete_repo(repo_id=name)'}}),ve=new v({props:{code:'delete_repo(repo_id=REPO_NAME, repo_type="dataset")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>delete_repo(repo_id=REPO_NAME, repo_type=<span class="hljs-string">&quot;dataset&quot;</span>)'}}),$e=new B({}),we=new v({props:{code:`from huggingface_hub import update_repo_visibility
update_repo_visibility(name=REPO_NAME, private=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> update_repo_visibility
<span class="hljs-meta">&gt;&gt;&gt; </span>update_repo_visibility(name=REPO_NAME, private=<span class="hljs-literal">True</span>)`}}),be=new B({}),ke=new B({}),je=new v({props:{code:`from huggingface_hub import Repository
repo = Repository(local_dir="<path>/<to>/<folder>")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> Repository
<span class="hljs-meta">&gt;&gt;&gt; </span>repo = Repository(local_dir=<span class="hljs-string">&quot;&lt;path&gt;/&lt;to&gt;/&lt;folder&gt;&quot;</span>)`}}),Ae=new B({}),Pe=new v({props:{code:`from huggingface_hub import Repository
repo = Repository(local_dir="w2v2", clone_from="facebook/wav2vec2-large-960h-lv60")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> Repository
<span class="hljs-meta">&gt;&gt;&gt; </span>repo = Repository(local_dir=<span class="hljs-string">&quot;w2v2&quot;</span>, clone_from=<span class="hljs-string">&quot;facebook/wav2vec2-large-960h-lv60&quot;</span>)`}}),Re=new v({props:{code:'repo = Repository(local_dir="huggingface-hub", clone_from="https://huggingface.co/facebook/wav2vec2-large-960h-lv60")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>repo = Repository(local_dir=<span class="hljs-string">&quot;huggingface-hub&quot;</span>, clone_from=<span class="hljs-string">&quot;https://huggingface.co/facebook/wav2vec2-large-960h-lv60&quot;</span>)'}}),qe=new v({props:{code:`repo_url = create_repo(repo_id="repo_name")
repo = Repository(local_dir="repo_local_path", clone_from=repo_url)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>repo_url = create_repo(repo_id=<span class="hljs-string">&quot;repo_name&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>repo = Repository(local_dir=<span class="hljs-string">&quot;repo_local_path&quot;</span>, clone_from=repo_url)`}}),Ce=new v({props:{code:`repo = Repository(
  "my-dataset", 
  clone_from="<user>/<dataset_id>", 
  use_auth_token=True, 
  repo_type="dataset",
  git_user="MyName",
  git_email="me@cool.mail"
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>repo = Repository(
<span class="hljs-meta">... </span>  <span class="hljs-string">&quot;my-dataset&quot;</span>, 
<span class="hljs-meta">... </span>  clone_from=<span class="hljs-string">&quot;&lt;user&gt;/&lt;dataset_id&gt;&quot;</span>, 
<span class="hljs-meta">... </span>  use_auth_token=<span class="hljs-literal">True</span>, 
<span class="hljs-meta">... </span>  repo_type=<span class="hljs-string">&quot;dataset&quot;</span>,
<span class="hljs-meta">... </span>  git_user=<span class="hljs-string">&quot;MyName&quot;</span>,
<span class="hljs-meta">... </span>  git_email=<span class="hljs-string">&quot;me@cool.mail&quot;</span>
<span class="hljs-meta">... </span>)`}}),Se=new B({}),xe=new v({props:{code:`from huggingface_hub import Repository
repo = Repository(local_dir="huggingface-hub", clone_from="<user>/<dataset_id>", revision='branch1')
repo.git_checkout("branch2")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> Repository
<span class="hljs-meta">&gt;&gt;&gt; </span>repo = Repository(local_dir=<span class="hljs-string">&quot;huggingface-hub&quot;</span>, clone_from=<span class="hljs-string">&quot;&lt;user&gt;/&lt;dataset_id&gt;&quot;</span>, revision=<span class="hljs-string">&#x27;branch1&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>repo.git_checkout(<span class="hljs-string">&quot;branch2&quot;</span>)`}}),He=new B({}),De=new v({props:{code:`from huggingface_hub import Repository
repo.git_pull()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> Repository
<span class="hljs-meta">&gt;&gt;&gt; </span>repo.git_pull()`}}),Oe=new v({props:{code:"repo.git_pull(rebase=True)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>repo.git_pull(rebase=<span class="hljs-literal">True</span>)'}}),{c(){C=r("meta"),Yt=c(),S=r("h1"),M=r("a"),st=r("span"),u(ie.$$.fragment),ar=c(),lt=r("span"),sr=l("Create and manage a repository"),Jt=c(),Te=r("p"),lr=l("A repository is a space for you to store your model or dataset files. This guide will show you how to:"),zt=c(),E=r("ul"),it=r("li"),ir=l("Create and delete a repository."),pr=c(),pt=r("li"),nr=l("Adjust repository visibility."),cr=c(),pe=r("li"),hr=l("Use the "),Fe=r("a"),fr=l("Repository"),ur=l(" class for common Git operations like clone, branch, and pull."),Kt=c(),Le=r("p"),gr=l("If you want to create a repository on the Hub, you need to log in to your Hugging Face account:"),Qt=c(),U=r("ol"),ne=r("li"),nt=r("p"),mr=l("Log in to your Hugging Face account with the following command:"),yr=c(),u(ce.$$.fragment),_r=c(),x=r("li"),he=r("p"),dr=l("Alternatively, if you prefer working from a Jupyter or Colaboratory notebook, login with "),ct=r("code"),vr=l("notebook_login()"),$r=l(":"),wr=c(),u(fe.$$.fragment),br=c(),Ge=r("p"),ht=r("code"),Er=l("notebook_login()"),kr=l(" will launch a widget in your notebook from which you can enter your Hugging Face credentials."),Vt=c(),H=r("h2"),W=r("a"),ft=r("span"),u(ue.$$.fragment),jr=c(),ut=r("span"),Ar=l("Create a repository"),Xt=c(),$=r("p"),Pr=l("Create an empty repository with "),Ie=r("a"),Rr=l("create_repo()"),qr=l(" and give it a name with the "),gt=r("code"),Cr=l("repo_id"),Sr=l(" parameter. The "),mt=r("code"),xr=l("repo_id"),Hr=l(" is your namespace followed by the repository name: "),yt=r("code"),Nr=l("{username_or_org}/{repo_name}"),Dr=l("."),Zt=c(),u(ge.$$.fragment),eo=c(),k=r("p"),Or=l("By default, "),Be=r("a"),Tr=l("create_repo()"),Fr=l(" creates a model repository. But you can use the "),_t=r("code"),Lr=l("repo_type"),Gr=l(" parameter to specify another repository type. For example, if you want to create a dataset repository:"),to=c(),u(me.$$.fragment),oo=c(),Y=r("p"),Ir=l("When you create a repository, you can set your repository visibility with the "),dt=r("code"),Br=l("private"),Mr=l(" parameter. For example, if you want to create a private repository:"),ro=c(),u(ye.$$.fragment),ao=c(),J=r("p"),Ur=l("If you want to change the repository visibility at a later time, you can use the "),Me=r("a"),Wr=l("update_repo_visibility()"),Yr=l(" function."),so=c(),N=r("h2"),z=r("a"),vt=r("span"),u(_e.$$.fragment),Jr=c(),$t=r("span"),zr=l("Delete a repository"),lo=c(),K=r("p"),Kr=l("Delete a repository with "),Ue=r("a"),Qr=l("delete_repo()"),Vr=l(". Make sure you want to delete a repository because this is an irreversible process!"),io=c(),Q=r("p"),Xr=l("Specify the "),wt=r("code"),Zr=l("repo_id"),ea=l(" of the repository you want to delete:"),po=c(),u(de.$$.fragment),no=c(),V=r("p"),ta=l("You can also specify the repository type to delete by adding the "),bt=r("code"),oa=l("repo_type"),ra=l(" parameter:"),co=c(),u(ve.$$.fragment),ho=c(),D=r("h2"),X=r("a"),Et=r("span"),u($e.$$.fragment),aa=c(),kt=r("span"),sa=l("Change repository visibility"),fo=c(),We=r("p"),la=l("A repository can be public or private. A private repository is only visible to you or members of the organization in which the repository is located. Change a repository to private as shown in the following:"),uo=c(),u(we.$$.fragment),go=c(),O=r("h2"),Z=r("a"),jt=r("span"),u(be.$$.fragment),ia=c(),At=r("span"),pa=l("The Repository class"),mo=c(),w=r("p"),na=l("The "),Ye=r("a"),ca=l("Repository"),ha=l(" class allows you to interact with files and repositories on the Hub with functions similar to Git commands. "),Je=r("a"),fa=l("Repository"),ua=l(" is a wrapper over Git and Git-LFS methods, so make sure you have Git-LFS installed (see "),Ee=r("a"),ga=l("here"),ma=l(" for installation instructions) and set up before you begin. With "),ze=r("a"),ya=l("Repository"),_a=l(", you can use the Git commands you already know and love."),yo=c(),T=r("h3"),ee=r("a"),Pt=r("span"),u(ke.$$.fragment),da=c(),Rt=r("span"),va=l("Use a local repository"),_o=c(),te=r("p"),$a=l("Instantiate a "),Ke=r("a"),wa=l("Repository"),ba=l(" object with a path to a local repository:"),vo=c(),u(je.$$.fragment),$o=c(),F=r("h3"),oe=r("a"),qt=r("span"),u(Ae.$$.fragment),Ea=c(),Ct=r("span"),ka=l("Clone"),wo=c(),j=r("p"),ja=l("The "),St=r("code"),Aa=l("clone_from"),Pa=l(" parameter clones a repository from a Hugging Face repository ID to a local directory specified by the "),xt=r("code"),Ra=l("local_dir"),qa=l(" argument:"),bo=c(),u(Pe.$$.fragment),Eo=c(),L=r("p"),Ht=r("code"),Ca=l("clone_from"),Sa=l(" can also clone a repository from a specified directory using a URL (if you are working offline, this parameter should be "),Nt=r("code"),xa=l("None"),Ha=l("):"),ko=c(),u(Re.$$.fragment),jo=c(),A=r("p"),Na=l("You can combine the "),Dt=r("code"),Da=l("clone_from"),Oa=l(" parameter with "),Qe=r("a"),Ta=l("create_repo()"),Fa=l(" to create and clone a repository:"),Ao=c(),u(qe.$$.fragment),Po=c(),P=r("p"),La=l("You can also attribute a Git username and email to a cloned repository by specifying the "),Ot=r("code"),Ga=l("git_user"),Ia=l(" and "),Tt=r("code"),Ba=l("git_email"),Ma=l(" parameters when you clone a repository. When users commit to that repository, Git will be aware of the commit author."),Ro=c(),u(Ce.$$.fragment),qo=c(),G=r("h3"),re=r("a"),Ft=r("span"),u(Se.$$.fragment),Ua=c(),Lt=r("span"),Wa=l("Branch"),Co=c(),b=r("p"),Ya=l("Branches are important for collaboration and experimentation without impacting your current files and code. Switch between branches with "),Ve=r("a"),Ja=l("git_checkout()"),za=l(". For example, if you want to switch from "),Gt=r("code"),Ka=l("branch1"),Qa=l(" to "),It=r("code"),Va=l("branch2"),Xa=l(":"),So=c(),u(xe.$$.fragment),xo=c(),I=r("h3"),ae=r("a"),Bt=r("span"),u(He.$$.fragment),Za=c(),Mt=r("span"),es=l("Pull"),Ho=c(),Ne=r("p"),Xe=r("a"),ts=l("git_pull()"),os=l(" allows you to update a current local branch with changes from a remote repository:"),No=c(),u(De.$$.fragment),Do=c(),se=r("p"),rs=l("Set "),Ut=r("code"),as=l("rebase=True"),ss=l(" if you want your local commits to occur after your branch is updated with the new commits from the remote:"),Oo=c(),u(Oe.$$.fragment),this.h()},l(e){const p=El('[data-svelte="svelte-1phssyn"]',document.head);C=a(p,"META",{name:!0,content:!0}),p.forEach(o),Yt=h(e),S=a(e,"H1",{class:!0});var Fo=s(S);M=a(Fo,"A",{id:!0,class:!0,href:!0});var ns=s(M);st=a(ns,"SPAN",{});var cs=s(st);g(ie.$$.fragment,cs),cs.forEach(o),ns.forEach(o),ar=h(Fo),lt=a(Fo,"SPAN",{});var hs=s(lt);sr=i(hs,"Create and manage a repository"),hs.forEach(o),Fo.forEach(o),Jt=h(e),Te=a(e,"P",{});var fs=s(Te);lr=i(fs,"A repository is a space for you to store your model or dataset files. This guide will show you how to:"),fs.forEach(o),zt=h(e),E=a(e,"UL",{});var Ze=s(E);it=a(Ze,"LI",{});var us=s(it);ir=i(us,"Create and delete a repository."),us.forEach(o),pr=h(Ze),pt=a(Ze,"LI",{});var gs=s(pt);nr=i(gs,"Adjust repository visibility."),gs.forEach(o),cr=h(Ze),pe=a(Ze,"LI",{});var Lo=s(pe);hr=i(Lo,"Use the "),Fe=a(Lo,"A",{href:!0});var ms=s(Fe);fr=i(ms,"Repository"),ms.forEach(o),ur=i(Lo," class for common Git operations like clone, branch, and pull."),Lo.forEach(o),Ze.forEach(o),Kt=h(e),Le=a(e,"P",{});var ys=s(Le);gr=i(ys,"If you want to create a repository on the Hub, you need to log in to your Hugging Face account:"),ys.forEach(o),Qt=h(e),U=a(e,"OL",{});var Go=s(U);ne=a(Go,"LI",{});var Io=s(ne);nt=a(Io,"P",{});var _s=s(nt);mr=i(_s,"Log in to your Hugging Face account with the following command:"),_s.forEach(o),yr=h(Io),g(ce.$$.fragment,Io),Io.forEach(o),_r=h(Go),x=a(Go,"LI",{});var et=s(x);he=a(et,"P",{});var Bo=s(he);dr=i(Bo,"Alternatively, if you prefer working from a Jupyter or Colaboratory notebook, login with "),ct=a(Bo,"CODE",{});var ds=s(ct);vr=i(ds,"notebook_login()"),ds.forEach(o),$r=i(Bo,":"),Bo.forEach(o),wr=h(et),g(fe.$$.fragment,et),br=h(et),Ge=a(et,"P",{});var ls=s(Ge);ht=a(ls,"CODE",{});var vs=s(ht);Er=i(vs,"notebook_login()"),vs.forEach(o),kr=i(ls," will launch a widget in your notebook from which you can enter your Hugging Face credentials."),ls.forEach(o),et.forEach(o),Go.forEach(o),Vt=h(e),H=a(e,"H2",{class:!0});var Mo=s(H);W=a(Mo,"A",{id:!0,class:!0,href:!0});var $s=s(W);ft=a($s,"SPAN",{});var ws=s(ft);g(ue.$$.fragment,ws),ws.forEach(o),$s.forEach(o),jr=h(Mo),ut=a(Mo,"SPAN",{});var bs=s(ut);Ar=i(bs,"Create a repository"),bs.forEach(o),Mo.forEach(o),Xt=h(e),$=a(e,"P",{});var R=s($);Pr=i(R,"Create an empty repository with "),Ie=a(R,"A",{href:!0});var Es=s(Ie);Rr=i(Es,"create_repo()"),Es.forEach(o),qr=i(R," and give it a name with the "),gt=a(R,"CODE",{});var ks=s(gt);Cr=i(ks,"repo_id"),ks.forEach(o),Sr=i(R," parameter. The "),mt=a(R,"CODE",{});var js=s(mt);xr=i(js,"repo_id"),js.forEach(o),Hr=i(R," is your namespace followed by the repository name: "),yt=a(R,"CODE",{});var As=s(yt);Nr=i(As,"{username_or_org}/{repo_name}"),As.forEach(o),Dr=i(R,"."),R.forEach(o),Zt=h(e),g(ge.$$.fragment,e),eo=h(e),k=a(e,"P",{});var tt=s(k);Or=i(tt,"By default, "),Be=a(tt,"A",{href:!0});var Ps=s(Be);Tr=i(Ps,"create_repo()"),Ps.forEach(o),Fr=i(tt," creates a model repository. But you can use the "),_t=a(tt,"CODE",{});var Rs=s(_t);Lr=i(Rs,"repo_type"),Rs.forEach(o),Gr=i(tt," parameter to specify another repository type. For example, if you want to create a dataset repository:"),tt.forEach(o),to=h(e),g(me.$$.fragment,e),oo=h(e),Y=a(e,"P",{});var Uo=s(Y);Ir=i(Uo,"When you create a repository, you can set your repository visibility with the "),dt=a(Uo,"CODE",{});var qs=s(dt);Br=i(qs,"private"),qs.forEach(o),Mr=i(Uo," parameter. For example, if you want to create a private repository:"),Uo.forEach(o),ro=h(e),g(ye.$$.fragment,e),ao=h(e),J=a(e,"P",{});var Wo=s(J);Ur=i(Wo,"If you want to change the repository visibility at a later time, you can use the "),Me=a(Wo,"A",{href:!0});var Cs=s(Me);Wr=i(Cs,"update_repo_visibility()"),Cs.forEach(o),Yr=i(Wo," function."),Wo.forEach(o),so=h(e),N=a(e,"H2",{class:!0});var Yo=s(N);z=a(Yo,"A",{id:!0,class:!0,href:!0});var Ss=s(z);vt=a(Ss,"SPAN",{});var xs=s(vt);g(_e.$$.fragment,xs),xs.forEach(o),Ss.forEach(o),Jr=h(Yo),$t=a(Yo,"SPAN",{});var Hs=s($t);zr=i(Hs,"Delete a repository"),Hs.forEach(o),Yo.forEach(o),lo=h(e),K=a(e,"P",{});var Jo=s(K);Kr=i(Jo,"Delete a repository with "),Ue=a(Jo,"A",{href:!0});var Ns=s(Ue);Qr=i(Ns,"delete_repo()"),Ns.forEach(o),Vr=i(Jo,". Make sure you want to delete a repository because this is an irreversible process!"),Jo.forEach(o),io=h(e),Q=a(e,"P",{});var zo=s(Q);Xr=i(zo,"Specify the "),wt=a(zo,"CODE",{});var Ds=s(wt);Zr=i(Ds,"repo_id"),Ds.forEach(o),ea=i(zo," of the repository you want to delete:"),zo.forEach(o),po=h(e),g(de.$$.fragment,e),no=h(e),V=a(e,"P",{});var Ko=s(V);ta=i(Ko,"You can also specify the repository type to delete by adding the "),bt=a(Ko,"CODE",{});var Os=s(bt);oa=i(Os,"repo_type"),Os.forEach(o),ra=i(Ko," parameter:"),Ko.forEach(o),co=h(e),g(ve.$$.fragment,e),ho=h(e),D=a(e,"H2",{class:!0});var Qo=s(D);X=a(Qo,"A",{id:!0,class:!0,href:!0});var Ts=s(X);Et=a(Ts,"SPAN",{});var Fs=s(Et);g($e.$$.fragment,Fs),Fs.forEach(o),Ts.forEach(o),aa=h(Qo),kt=a(Qo,"SPAN",{});var Ls=s(kt);sa=i(Ls,"Change repository visibility"),Ls.forEach(o),Qo.forEach(o),fo=h(e),We=a(e,"P",{});var Gs=s(We);la=i(Gs,"A repository can be public or private. A private repository is only visible to you or members of the organization in which the repository is located. Change a repository to private as shown in the following:"),Gs.forEach(o),uo=h(e),g(we.$$.fragment,e),go=h(e),O=a(e,"H2",{class:!0});var Vo=s(O);Z=a(Vo,"A",{id:!0,class:!0,href:!0});var Is=s(Z);jt=a(Is,"SPAN",{});var Bs=s(jt);g(be.$$.fragment,Bs),Bs.forEach(o),Is.forEach(o),ia=h(Vo),At=a(Vo,"SPAN",{});var Ms=s(At);pa=i(Ms,"The Repository class"),Ms.forEach(o),Vo.forEach(o),mo=h(e),w=a(e,"P",{});var q=s(w);na=i(q,"The "),Ye=a(q,"A",{href:!0});var Us=s(Ye);ca=i(Us,"Repository"),Us.forEach(o),ha=i(q," class allows you to interact with files and repositories on the Hub with functions similar to Git commands. "),Je=a(q,"A",{href:!0});var Ws=s(Je);fa=i(Ws,"Repository"),Ws.forEach(o),ua=i(q," is a wrapper over Git and Git-LFS methods, so make sure you have Git-LFS installed (see "),Ee=a(q,"A",{href:!0,rel:!0});var Ys=s(Ee);ga=i(Ys,"here"),Ys.forEach(o),ma=i(q," for installation instructions) and set up before you begin. With "),ze=a(q,"A",{href:!0});var Js=s(ze);ya=i(Js,"Repository"),Js.forEach(o),_a=i(q,", you can use the Git commands you already know and love."),q.forEach(o),yo=h(e),T=a(e,"H3",{class:!0});var Xo=s(T);ee=a(Xo,"A",{id:!0,class:!0,href:!0});var zs=s(ee);Pt=a(zs,"SPAN",{});var Ks=s(Pt);g(ke.$$.fragment,Ks),Ks.forEach(o),zs.forEach(o),da=h(Xo),Rt=a(Xo,"SPAN",{});var Qs=s(Rt);va=i(Qs,"Use a local repository"),Qs.forEach(o),Xo.forEach(o),_o=h(e),te=a(e,"P",{});var Zo=s(te);$a=i(Zo,"Instantiate a "),Ke=a(Zo,"A",{href:!0});var Vs=s(Ke);wa=i(Vs,"Repository"),Vs.forEach(o),ba=i(Zo," object with a path to a local repository:"),Zo.forEach(o),vo=h(e),g(je.$$.fragment,e),$o=h(e),F=a(e,"H3",{class:!0});var er=s(F);oe=a(er,"A",{id:!0,class:!0,href:!0});var Xs=s(oe);qt=a(Xs,"SPAN",{});var Zs=s(qt);g(Ae.$$.fragment,Zs),Zs.forEach(o),Xs.forEach(o),Ea=h(er),Ct=a(er,"SPAN",{});var el=s(Ct);ka=i(el,"Clone"),el.forEach(o),er.forEach(o),wo=h(e),j=a(e,"P",{});var ot=s(j);ja=i(ot,"The "),St=a(ot,"CODE",{});var tl=s(St);Aa=i(tl,"clone_from"),tl.forEach(o),Pa=i(ot," parameter clones a repository from a Hugging Face repository ID to a local directory specified by the "),xt=a(ot,"CODE",{});var ol=s(xt);Ra=i(ol,"local_dir"),ol.forEach(o),qa=i(ot," argument:"),ot.forEach(o),bo=h(e),g(Pe.$$.fragment,e),Eo=h(e),L=a(e,"P",{});var Wt=s(L);Ht=a(Wt,"CODE",{});var rl=s(Ht);Ca=i(rl,"clone_from"),rl.forEach(o),Sa=i(Wt," can also clone a repository from a specified directory using a URL (if you are working offline, this parameter should be "),Nt=a(Wt,"CODE",{});var al=s(Nt);xa=i(al,"None"),al.forEach(o),Ha=i(Wt,"):"),Wt.forEach(o),ko=h(e),g(Re.$$.fragment,e),jo=h(e),A=a(e,"P",{});var rt=s(A);Na=i(rt,"You can combine the "),Dt=a(rt,"CODE",{});var sl=s(Dt);Da=i(sl,"clone_from"),sl.forEach(o),Oa=i(rt," parameter with "),Qe=a(rt,"A",{href:!0});var ll=s(Qe);Ta=i(ll,"create_repo()"),ll.forEach(o),Fa=i(rt," to create and clone a repository:"),rt.forEach(o),Ao=h(e),g(qe.$$.fragment,e),Po=h(e),P=a(e,"P",{});var at=s(P);La=i(at,"You can also attribute a Git username and email to a cloned repository by specifying the "),Ot=a(at,"CODE",{});var il=s(Ot);Ga=i(il,"git_user"),il.forEach(o),Ia=i(at," and "),Tt=a(at,"CODE",{});var pl=s(Tt);Ba=i(pl,"git_email"),pl.forEach(o),Ma=i(at," parameters when you clone a repository. When users commit to that repository, Git will be aware of the commit author."),at.forEach(o),Ro=h(e),g(Ce.$$.fragment,e),qo=h(e),G=a(e,"H3",{class:!0});var tr=s(G);re=a(tr,"A",{id:!0,class:!0,href:!0});var nl=s(re);Ft=a(nl,"SPAN",{});var cl=s(Ft);g(Se.$$.fragment,cl),cl.forEach(o),nl.forEach(o),Ua=h(tr),Lt=a(tr,"SPAN",{});var hl=s(Lt);Wa=i(hl,"Branch"),hl.forEach(o),tr.forEach(o),Co=h(e),b=a(e,"P",{});var le=s(b);Ya=i(le,"Branches are important for collaboration and experimentation without impacting your current files and code. Switch between branches with "),Ve=a(le,"A",{href:!0});var fl=s(Ve);Ja=i(fl,"git_checkout()"),fl.forEach(o),za=i(le,". For example, if you want to switch from "),Gt=a(le,"CODE",{});var ul=s(Gt);Ka=i(ul,"branch1"),ul.forEach(o),Qa=i(le," to "),It=a(le,"CODE",{});var gl=s(It);Va=i(gl,"branch2"),gl.forEach(o),Xa=i(le,":"),le.forEach(o),So=h(e),g(xe.$$.fragment,e),xo=h(e),I=a(e,"H3",{class:!0});var or=s(I);ae=a(or,"A",{id:!0,class:!0,href:!0});var ml=s(ae);Bt=a(ml,"SPAN",{});var yl=s(Bt);g(He.$$.fragment,yl),yl.forEach(o),ml.forEach(o),Za=h(or),Mt=a(or,"SPAN",{});var _l=s(Mt);es=i(_l,"Pull"),_l.forEach(o),or.forEach(o),Ho=h(e),Ne=a(e,"P",{});var is=s(Ne);Xe=a(is,"A",{href:!0});var dl=s(Xe);ts=i(dl,"git_pull()"),dl.forEach(o),os=i(is," allows you to update a current local branch with changes from a remote repository:"),is.forEach(o),No=h(e),g(De.$$.fragment,e),Do=h(e),se=a(e,"P",{});var rr=s(se);rs=i(rr,"Set "),Ut=a(rr,"CODE",{});var vl=s(Ut);as=i(vl,"rebase=True"),vl.forEach(o),ss=i(rr," if you want your local commits to occur after your branch is updated with the new commits from the remote:"),rr.forEach(o),Oo=h(e),g(Oe.$$.fragment,e),this.h()},h(){f(C,"name","hf:doc:metadata"),f(C,"content",JSON.stringify(Pl)),f(M,"id","create-and-manage-a-repository"),f(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(M,"href","#create-and-manage-a-repository"),f(S,"class","relative group"),f(Fe,"href","/docs/huggingface_hub/v0.6.0.rc0/en/package_reference/repository#huggingface_hub.Repository"),f(W,"id","create-a-repository"),f(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(W,"href","#create-a-repository"),f(H,"class","relative group"),f(Ie,"href","/docs/huggingface_hub/v0.6.0.rc0/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo"),f(Be,"href","/docs/huggingface_hub/v0.6.0.rc0/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo"),f(Me,"href","/docs/huggingface_hub/v0.6.0.rc0/en/package_reference/hf_api#huggingface_hub.HfApi.update_repo_visibility"),f(z,"id","delete-a-repository"),f(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(z,"href","#delete-a-repository"),f(N,"class","relative group"),f(Ue,"href","/docs/huggingface_hub/v0.6.0.rc0/en/package_reference/hf_api#huggingface_hub.HfApi.delete_repo"),f(X,"id","change-repository-visibility"),f(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(X,"href","#change-repository-visibility"),f(D,"class","relative group"),f(Z,"id","the-repository-class"),f(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Z,"href","#the-repository-class"),f(O,"class","relative group"),f(Ye,"href","/docs/huggingface_hub/v0.6.0.rc0/en/package_reference/repository#huggingface_hub.Repository"),f(Je,"href","/docs/huggingface_hub/v0.6.0.rc0/en/package_reference/repository#huggingface_hub.Repository"),f(Ee,"href","https://git-lfs.github.com/"),f(Ee,"rel","nofollow"),f(ze,"href","/docs/huggingface_hub/v0.6.0.rc0/en/package_reference/repository#huggingface_hub.Repository"),f(ee,"id","use-a-local-repository"),f(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ee,"href","#use-a-local-repository"),f(T,"class","relative group"),f(Ke,"href","/docs/huggingface_hub/v0.6.0.rc0/en/package_reference/repository#huggingface_hub.Repository"),f(oe,"id","clone"),f(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(oe,"href","#clone"),f(F,"class","relative group"),f(Qe,"href","/docs/huggingface_hub/v0.6.0.rc0/en/package_reference/hf_api#huggingface_hub.HfApi.create_repo"),f(re,"id","branch"),f(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(re,"href","#branch"),f(G,"class","relative group"),f(Ve,"href","/docs/huggingface_hub/v0.6.0.rc0/en/package_reference/repository#huggingface_hub.Repository.git_checkout"),f(ae,"id","pull"),f(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ae,"href","#pull"),f(I,"class","relative group"),f(Xe,"href","/docs/huggingface_hub/v0.6.0.rc0/en/package_reference/repository#huggingface_hub.Repository.git_pull")},m(e,p){t(document.head,C),n(e,Yt,p),n(e,S,p),t(S,M),t(M,st),m(ie,st,null),t(S,ar),t(S,lt),t(lt,sr),n(e,Jt,p),n(e,Te,p),t(Te,lr),n(e,zt,p),n(e,E,p),t(E,it),t(it,ir),t(E,pr),t(E,pt),t(pt,nr),t(E,cr),t(E,pe),t(pe,hr),t(pe,Fe),t(Fe,fr),t(pe,ur),n(e,Kt,p),n(e,Le,p),t(Le,gr),n(e,Qt,p),n(e,U,p),t(U,ne),t(ne,nt),t(nt,mr),t(ne,yr),m(ce,ne,null),t(U,_r),t(U,x),t(x,he),t(he,dr),t(he,ct),t(ct,vr),t(he,$r),t(x,wr),m(fe,x,null),t(x,br),t(x,Ge),t(Ge,ht),t(ht,Er),t(Ge,kr),n(e,Vt,p),n(e,H,p),t(H,W),t(W,ft),m(ue,ft,null),t(H,jr),t(H,ut),t(ut,Ar),n(e,Xt,p),n(e,$,p),t($,Pr),t($,Ie),t(Ie,Rr),t($,qr),t($,gt),t(gt,Cr),t($,Sr),t($,mt),t(mt,xr),t($,Hr),t($,yt),t(yt,Nr),t($,Dr),n(e,Zt,p),m(ge,e,p),n(e,eo,p),n(e,k,p),t(k,Or),t(k,Be),t(Be,Tr),t(k,Fr),t(k,_t),t(_t,Lr),t(k,Gr),n(e,to,p),m(me,e,p),n(e,oo,p),n(e,Y,p),t(Y,Ir),t(Y,dt),t(dt,Br),t(Y,Mr),n(e,ro,p),m(ye,e,p),n(e,ao,p),n(e,J,p),t(J,Ur),t(J,Me),t(Me,Wr),t(J,Yr),n(e,so,p),n(e,N,p),t(N,z),t(z,vt),m(_e,vt,null),t(N,Jr),t(N,$t),t($t,zr),n(e,lo,p),n(e,K,p),t(K,Kr),t(K,Ue),t(Ue,Qr),t(K,Vr),n(e,io,p),n(e,Q,p),t(Q,Xr),t(Q,wt),t(wt,Zr),t(Q,ea),n(e,po,p),m(de,e,p),n(e,no,p),n(e,V,p),t(V,ta),t(V,bt),t(bt,oa),t(V,ra),n(e,co,p),m(ve,e,p),n(e,ho,p),n(e,D,p),t(D,X),t(X,Et),m($e,Et,null),t(D,aa),t(D,kt),t(kt,sa),n(e,fo,p),n(e,We,p),t(We,la),n(e,uo,p),m(we,e,p),n(e,go,p),n(e,O,p),t(O,Z),t(Z,jt),m(be,jt,null),t(O,ia),t(O,At),t(At,pa),n(e,mo,p),n(e,w,p),t(w,na),t(w,Ye),t(Ye,ca),t(w,ha),t(w,Je),t(Je,fa),t(w,ua),t(w,Ee),t(Ee,ga),t(w,ma),t(w,ze),t(ze,ya),t(w,_a),n(e,yo,p),n(e,T,p),t(T,ee),t(ee,Pt),m(ke,Pt,null),t(T,da),t(T,Rt),t(Rt,va),n(e,_o,p),n(e,te,p),t(te,$a),t(te,Ke),t(Ke,wa),t(te,ba),n(e,vo,p),m(je,e,p),n(e,$o,p),n(e,F,p),t(F,oe),t(oe,qt),m(Ae,qt,null),t(F,Ea),t(F,Ct),t(Ct,ka),n(e,wo,p),n(e,j,p),t(j,ja),t(j,St),t(St,Aa),t(j,Pa),t(j,xt),t(xt,Ra),t(j,qa),n(e,bo,p),m(Pe,e,p),n(e,Eo,p),n(e,L,p),t(L,Ht),t(Ht,Ca),t(L,Sa),t(L,Nt),t(Nt,xa),t(L,Ha),n(e,ko,p),m(Re,e,p),n(e,jo,p),n(e,A,p),t(A,Na),t(A,Dt),t(Dt,Da),t(A,Oa),t(A,Qe),t(Qe,Ta),t(A,Fa),n(e,Ao,p),m(qe,e,p),n(e,Po,p),n(e,P,p),t(P,La),t(P,Ot),t(Ot,Ga),t(P,Ia),t(P,Tt),t(Tt,Ba),t(P,Ma),n(e,Ro,p),m(Ce,e,p),n(e,qo,p),n(e,G,p),t(G,re),t(re,Ft),m(Se,Ft,null),t(G,Ua),t(G,Lt),t(Lt,Wa),n(e,Co,p),n(e,b,p),t(b,Ya),t(b,Ve),t(Ve,Ja),t(b,za),t(b,Gt),t(Gt,Ka),t(b,Qa),t(b,It),t(It,Va),t(b,Xa),n(e,So,p),m(xe,e,p),n(e,xo,p),n(e,I,p),t(I,ae),t(ae,Bt),m(He,Bt,null),t(I,Za),t(I,Mt),t(Mt,es),n(e,Ho,p),n(e,Ne,p),t(Ne,Xe),t(Xe,ts),t(Ne,os),n(e,No,p),m(De,e,p),n(e,Do,p),n(e,se,p),t(se,rs),t(se,Ut),t(Ut,as),t(se,ss),n(e,Oo,p),m(Oe,e,p),To=!0},p:kl,i(e){To||(y(ie.$$.fragment,e),y(ce.$$.fragment,e),y(fe.$$.fragment,e),y(ue.$$.fragment,e),y(ge.$$.fragment,e),y(me.$$.fragment,e),y(ye.$$.fragment,e),y(_e.$$.fragment,e),y(de.$$.fragment,e),y(ve.$$.fragment,e),y($e.$$.fragment,e),y(we.$$.fragment,e),y(be.$$.fragment,e),y(ke.$$.fragment,e),y(je.$$.fragment,e),y(Ae.$$.fragment,e),y(Pe.$$.fragment,e),y(Re.$$.fragment,e),y(qe.$$.fragment,e),y(Ce.$$.fragment,e),y(Se.$$.fragment,e),y(xe.$$.fragment,e),y(He.$$.fragment,e),y(De.$$.fragment,e),y(Oe.$$.fragment,e),To=!0)},o(e){_(ie.$$.fragment,e),_(ce.$$.fragment,e),_(fe.$$.fragment,e),_(ue.$$.fragment,e),_(ge.$$.fragment,e),_(me.$$.fragment,e),_(ye.$$.fragment,e),_(_e.$$.fragment,e),_(de.$$.fragment,e),_(ve.$$.fragment,e),_($e.$$.fragment,e),_(we.$$.fragment,e),_(be.$$.fragment,e),_(ke.$$.fragment,e),_(je.$$.fragment,e),_(Ae.$$.fragment,e),_(Pe.$$.fragment,e),_(Re.$$.fragment,e),_(qe.$$.fragment,e),_(Ce.$$.fragment,e),_(Se.$$.fragment,e),_(xe.$$.fragment,e),_(He.$$.fragment,e),_(De.$$.fragment,e),_(Oe.$$.fragment,e),To=!1},d(e){o(C),e&&o(Yt),e&&o(S),d(ie),e&&o(Jt),e&&o(Te),e&&o(zt),e&&o(E),e&&o(Kt),e&&o(Le),e&&o(Qt),e&&o(U),d(ce),d(fe),e&&o(Vt),e&&o(H),d(ue),e&&o(Xt),e&&o($),e&&o(Zt),d(ge,e),e&&o(eo),e&&o(k),e&&o(to),d(me,e),e&&o(oo),e&&o(Y),e&&o(ro),d(ye,e),e&&o(ao),e&&o(J),e&&o(so),e&&o(N),d(_e),e&&o(lo),e&&o(K),e&&o(io),e&&o(Q),e&&o(po),d(de,e),e&&o(no),e&&o(V),e&&o(co),d(ve,e),e&&o(ho),e&&o(D),d($e),e&&o(fo),e&&o(We),e&&o(uo),d(we,e),e&&o(go),e&&o(O),d(be),e&&o(mo),e&&o(w),e&&o(yo),e&&o(T),d(ke),e&&o(_o),e&&o(te),e&&o(vo),d(je,e),e&&o($o),e&&o(F),d(Ae),e&&o(wo),e&&o(j),e&&o(bo),d(Pe,e),e&&o(Eo),e&&o(L),e&&o(ko),d(Re,e),e&&o(jo),e&&o(A),e&&o(Ao),d(qe,e),e&&o(Po),e&&o(P),e&&o(Ro),d(Ce,e),e&&o(qo),e&&o(G),d(Se),e&&o(Co),e&&o(b),e&&o(So),d(xe,e),e&&o(xo),e&&o(I),d(He),e&&o(Ho),e&&o(Ne),e&&o(No),d(De,e),e&&o(Do),e&&o(se),e&&o(Oo),d(Oe,e)}}}const Pl={local:"create-and-manage-a-repository",sections:[{local:"create-a-repository",title:"Create a repository"},{local:"delete-a-repository",title:"Delete a repository"},{local:"change-repository-visibility",title:"Change repository visibility"},{local:"the-repository-class",sections:[{local:"use-a-local-repository",title:"Use a local repository"},{local:"clone",title:"Clone"},{local:"branch",title:"Branch"},{local:"pull",title:"Pull"}],title:"The Repository class "}],title:"Create and manage a repository"};function Rl(ps){return jl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xl extends $l{constructor(C){super();wl(this,C,Rl,Al,bl,{})}}export{xl as default,Pl as metadata};
