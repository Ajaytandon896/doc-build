import{S as En,i as $n,s as Pn,e as n,k as c,w as x,t as a,M as xn,c as o,d as s,m as u,a as i,x as A,h as r,b as h,G as e,g as d,y as w,L as An,q as C,o as R,B as T,v as wn}from"../../chunks/vendor-hf-doc-builder.js";import{D as X}from"../../chunks/Docstring-hf-doc-builder.js";import{I as yn}from"../../chunks/IconCopyLink-hf-doc-builder.js";function Cn(ws){let y,Je,E,I,ye,W,mt,Ee,ft,ze,k,_t,Y,pt,bt,Ke,g,$e,Z,vt,Dt,Pe,ee,qt,yt,xe,te,Et,$t,Ae,se,Pt,xt,we,ne,At,wt,Ce,oe,Ct,Rt,Re,ie,Tt,It,Te,ae,kt,St,Ie,re,Lt,Qe,$,S,ke,N,Ht,Se,Wt,Xe,_,O,Nt,Le,Ot,Vt,He,jt,Ye,P,V,Ut,j,Mt,ce,Ft,Bt,Ze,f,U,Gt,We,Jt,zt,Ne,Kt,Qt,p,Oe,ue,Xt,Yt,Ve,he,Zt,es,je,le,ts,ss,Ue,ge,ns,et,b,M,os,Me,is,as,F,rs,de,cs,us,tt,v,B,hs,Fe,ls,gs,G,ds,me,ms,fs,st,D,J,_s,Be,ps,bs,z,vs,fe,Ds,qs,nt,q,K,ys,Ge,Es,$s,Q,Ps,_e,xs,As,ot;return W=new yn({}),N=new yn({}),O=new X({props:{name:"class huggingface_hub.Discussion",anchor:"huggingface_hub.Discussion",parameters:[{name:"title",val:": str"},{name:"status",val:": typing.Literal['open', 'closed', 'merged', 'draft']"},{name:"num",val:": int"},{name:"repo_id",val:": str"},{name:"repo_type",val:": str"},{name:"author",val:": str"},{name:"is_pull_request",val:": bool"},{name:"created_at",val:": datetime"}],parametersDescription:[{anchor:"huggingface_hub.Discussion.title",description:`<strong>title</strong> (<code>str</code>) &#x2014;
The title of the Discussion / Pull Request`,name:"title"},{anchor:"huggingface_hub.Discussion.status",description:`<strong>status</strong> (<code>str</code>) &#x2014;
The status of the Discussion / Pull Request.
It must be one of:<ul>
<li><code>&quot;open&quot;</code></li>
<li><code>&quot;closed&quot;</code></li>
<li><code>&quot;merged&quot;</code> (only for Pull Requests )</li>
<li><code>&quot;draft&quot;</code> (only for Pull Requests )</li>
</ul>`,name:"status"},{anchor:"huggingface_hub.Discussion.num",description:`<strong>num</strong> (<code>int</code>) &#x2014;
The number of the Discussion / Pull Request.`,name:"num"},{anchor:"huggingface_hub.Discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The id (<code>&quot;{namespace}/{repo_name}&quot;</code>) of the repo on which
the Discussion / Pull Request was open.`,name:"repo_id"},{anchor:"huggingface_hub.Discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>) &#x2014;
The type of the repo on which the Discussion / Pull Request was open.
Possible values are: <code>&quot;model&quot;</code>, <code>&quot;dataset&quot;</code>, <code>&quot;space&quot;</code>.`,name:"repo_type"},{anchor:"huggingface_hub.Discussion.author",description:`<strong>author</strong> (<code>str</code>) &#x2014;
The username of the Discussion / Pull Request author.
Can be <code>&quot;deleted&quot;</code> if the user has been deleted since.`,name:"author"},{anchor:"huggingface_hub.Discussion.is_pull_request",description:`<strong>is_pull_request</strong> (<code>bool</code>) &#x2014;
Wether or not this is a Pull Request.`,name:"is_pull_request"},{anchor:"huggingface_hub.Discussion.created_at",description:`<strong>created_at</strong> (<code>datetime</code>) &#x2014;
The <code>datetime</code> of creation of the Discussion / Pull Request.`,name:"created_at"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/community.py#L24"}}),V=new X({props:{name:"class huggingface_hub.DiscussionWithDetails",anchor:"huggingface_hub.DiscussionWithDetails",parameters:[{name:"title",val:": str"},{name:"status",val:": typing.Literal['open', 'closed', 'merged', 'draft']"},{name:"num",val:": int"},{name:"repo_id",val:": str"},{name:"repo_type",val:": str"},{name:"author",val:": str"},{name:"is_pull_request",val:": bool"},{name:"created_at",val:": datetime"},{name:"events",val:": typing.List[ForwardRef('DiscussionEvent')]"},{name:"conflicting_files",val:": typing.Optional[typing.List[str]]"},{name:"target_branch",val:": typing.Optional[str]"},{name:"merge_commit_oid",val:": typing.Optional[str]"},{name:"diff",val:": typing.Optional[str]"}],parametersDescription:[{anchor:"huggingface_hub.DiscussionWithDetails.title",description:`<strong>title</strong> (<code>str</code>) &#x2014;
The title of the Discussion / Pull Request`,name:"title"},{anchor:"huggingface_hub.DiscussionWithDetails.status",description:`<strong>status</strong> (<code>str</code>) &#x2014;
The status of the Discussion / Pull Request.
It can be one of:<ul>
<li><code>&quot;open&quot;</code></li>
<li><code>&quot;closed&quot;</code></li>
<li><code>&quot;merged&quot;</code> (only for Pull Requests )</li>
<li><code>&quot;draft&quot;</code> (only for Pull Requests )</li>
</ul>`,name:"status"},{anchor:"huggingface_hub.DiscussionWithDetails.num",description:`<strong>num</strong> (<code>int</code>) &#x2014;
The number of the Discussion / Pull Request.`,name:"num"},{anchor:"huggingface_hub.DiscussionWithDetails.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The id (<code>&quot;{namespace}/{repo_name}&quot;</code>) of the repo on which
the Discussion / Pull Request was open.`,name:"repo_id"},{anchor:"huggingface_hub.DiscussionWithDetails.repo_type",description:`<strong>repo_type</strong> (<code>str</code>) &#x2014;
The type of the repo on which the Discussion / Pull Request was open.
Possible values are: <code>&quot;model&quot;</code>, <code>&quot;dataset&quot;</code>, <code>&quot;space&quot;</code>.`,name:"repo_type"},{anchor:"huggingface_hub.DiscussionWithDetails.author",description:`<strong>author</strong> (<code>str</code>) &#x2014;
The username of the Discussion / Pull Request author.
Can be <code>&quot;deleted&quot;</code> if the user has been deleted since.`,name:"author"},{anchor:"huggingface_hub.DiscussionWithDetails.is_pull_request",description:`<strong>is_pull_request</strong> (<code>bool</code>) &#x2014;
Wether or not this is a Pull Request.`,name:"is_pull_request"},{anchor:"huggingface_hub.DiscussionWithDetails.created_at",description:`<strong>created_at</strong> (<code>datetime</code>) &#x2014;
The <code>datetime</code> of creation of the Discussion / Pull Request.`,name:"created_at"},{anchor:"huggingface_hub.DiscussionWithDetails.events",description:`<strong>events</strong> (<code>list</code> of <a href="/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionEvent">DiscussionEvent</a>) &#x2014;
The list of <code>DiscussionEvents</code> in this Discussion or Pull Request.`,name:"events"},{anchor:"huggingface_hub.DiscussionWithDetails.conflicting_files",description:`<strong>conflicting_files</strong> (<code>list</code> of <code>str</code>, <em>optional</em>) &#x2014;
A list of conflicting files if this is a Pull Request.
<code>None</code> if <code>self.is_pull_request</code> is <code>False</code>.`,name:"conflicting_files"},{anchor:"huggingface_hub.DiscussionWithDetails.target_branch",description:`<strong>target_branch</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The branch into which changes are to be merged if this is a
Pull Request . <code>None</code>  if <code>self.is_pull_request</code> is <code>False</code>.`,name:"target_branch"},{anchor:"huggingface_hub.DiscussionWithDetails.merge_commit_oid",description:`<strong>merge_commit_oid</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If this is a merged Pull Request , this is set to the OID / SHA of
the merge commit, <code>None</code> otherwise.`,name:"merge_commit_oid"},{anchor:"huggingface_hub.DiscussionWithDetails.diff",description:`<strong>diff</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The git diff if this is a Pull Request , <code>None</code> otherwise.`,name:"diff"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/community.py#L78"}}),U=new X({props:{name:"class huggingface_hub.DiscussionEvent",anchor:"huggingface_hub.DiscussionEvent",parameters:[{name:"id",val:": str"},{name:"type",val:": str"},{name:"created_at",val:": datetime"},{name:"author",val:": str"},{name:"_event",val:": dict"}],parametersDescription:[{anchor:"huggingface_hub.DiscussionEvent.id",description:`<strong>id</strong> (<code>str</code>) &#x2014;
The ID of the event. An hexadecimal string.`,name:"id"},{anchor:"huggingface_hub.DiscussionEvent.type",description:`<strong>type</strong> (<code>str</code>) &#x2014;
The type of the event.`,name:"type"},{anchor:"huggingface_hub.DiscussionEvent.created_at",description:`<strong>created_at</strong> (<code>datetime</code>) &#x2014;
A <a href="https://docs.python.org/3/library/datetime.html?highlight=datetime#datetime.datetime" rel="nofollow"><code>datetime</code></a>
object holding the creation timestamp for the event.`,name:"created_at"},{anchor:"huggingface_hub.DiscussionEvent.author",description:`<strong>author</strong> (<code>str</code>) &#x2014;
The username of the Discussion / Pull Request author.
Can be <code>&quot;deleted&quot;</code> if the user has been deleted since.`,name:"author"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/community.py#L130"}}),M=new X({props:{name:"class huggingface_hub.DiscussionComment",anchor:"huggingface_hub.DiscussionComment",parameters:[{name:"id",val:": str"},{name:"type",val:": str"},{name:"created_at",val:": datetime"},{name:"author",val:": str"},{name:"_event",val:": dict"},{name:"content",val:": str"},{name:"edited",val:": bool"},{name:"hidden",val:": bool"}],parametersDescription:[{anchor:"huggingface_hub.DiscussionComment.id",description:`<strong>id</strong> (<code>str</code>) &#x2014;
The ID of the event. An hexadecimal string.`,name:"id"},{anchor:"huggingface_hub.DiscussionComment.type",description:`<strong>type</strong> (<code>str</code>) &#x2014;
The type of the event.`,name:"type"},{anchor:"huggingface_hub.DiscussionComment.created_at",description:`<strong>created_at</strong> (<code>datetime</code>) &#x2014;
A <a href="https://docs.python.org/3/library/datetime.html?highlight=datetime#datetime.datetime" rel="nofollow"><code>datetime</code></a>
object holding the creation timestamp for the event.`,name:"created_at"},{anchor:"huggingface_hub.DiscussionComment.author",description:`<strong>author</strong> (<code>str</code>) &#x2014;
The username of the Discussion / Pull Request author.
Can be <code>&quot;deleted&quot;</code> if the user has been deleted since.`,name:"author"},{anchor:"huggingface_hub.DiscussionComment.content",description:`<strong>content</strong> (<code>str</code>) &#x2014;
The raw markdown content of the comment. Mentions, links and images are not rendered.`,name:"content"},{anchor:"huggingface_hub.DiscussionComment.edited",description:`<strong>edited</strong> (<code>bool</code>) &#x2014;
Wether or not this comment has been edited.`,name:"edited"},{anchor:"huggingface_hub.DiscussionComment.hidden",description:`<strong>hidden</strong> (<code>bool</code>) &#x2014;
Whether or not this comment has been hidden.`,name:"hidden"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/community.py#L163"}}),B=new X({props:{name:"class huggingface_hub.DiscussionStatusChange",anchor:"huggingface_hub.DiscussionStatusChange",parameters:[{name:"id",val:": str"},{name:"type",val:": str"},{name:"created_at",val:": datetime"},{name:"author",val:": str"},{name:"_event",val:": dict"},{name:"new_status",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.DiscussionStatusChange.id",description:`<strong>id</strong> (<code>str</code>) &#x2014;
The ID of the event. An hexadecimal string.`,name:"id"},{anchor:"huggingface_hub.DiscussionStatusChange.type",description:`<strong>type</strong> (<code>str</code>) &#x2014;
The type of the event.`,name:"type"},{anchor:"huggingface_hub.DiscussionStatusChange.created_at",description:`<strong>created_at</strong> (<code>datetime</code>) &#x2014;
A <a href="https://docs.python.org/3/library/datetime.html?highlight=datetime#datetime.datetime" rel="nofollow"><code>datetime</code></a>
object holding the creation timestamp for the event.`,name:"created_at"},{anchor:"huggingface_hub.DiscussionStatusChange.author",description:`<strong>author</strong> (<code>str</code>) &#x2014;
The username of the Discussion / Pull Request author.
Can be <code>&quot;deleted&quot;</code> if the user has been deleted since.`,name:"author"},{anchor:"huggingface_hub.DiscussionStatusChange.new_status",description:`<strong>new_status</strong> (<code>str</code>) &#x2014;
The status of the Discussion / Pull Request after the change.
It can be one of:<ul>
<li><code>&quot;open&quot;</code></li>
<li><code>&quot;closed&quot;</code></li>
<li><code>&quot;merged&quot;</code> (only for Pull Requests )</li>
</ul>`,name:"new_status"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/community.py#L218"}}),J=new X({props:{name:"class huggingface_hub.DiscussionCommit",anchor:"huggingface_hub.DiscussionCommit",parameters:[{name:"id",val:": str"},{name:"type",val:": str"},{name:"created_at",val:": datetime"},{name:"author",val:": str"},{name:"_event",val:": dict"},{name:"summary",val:": str"},{name:"oid",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.DiscussionCommit.id",description:`<strong>id</strong> (<code>str</code>) &#x2014;
The ID of the event. An hexadecimal string.`,name:"id"},{anchor:"huggingface_hub.DiscussionCommit.type",description:`<strong>type</strong> (<code>str</code>) &#x2014;
The type of the event.`,name:"type"},{anchor:"huggingface_hub.DiscussionCommit.created_at",description:`<strong>created_at</strong> (<code>datetime</code>) &#x2014;
A <a href="https://docs.python.org/3/library/datetime.html?highlight=datetime#datetime.datetime" rel="nofollow"><code>datetime</code></a>
object holding the creation timestamp for the event.`,name:"created_at"},{anchor:"huggingface_hub.DiscussionCommit.author",description:`<strong>author</strong> (<code>str</code>) &#x2014;
The username of the Discussion / Pull Request author.
Can be <code>&quot;deleted&quot;</code> if the user has been deleted since.`,name:"author"},{anchor:"huggingface_hub.DiscussionCommit.summary",description:`<strong>summary</strong> (<code>str</code>) &#x2014;
The summary of the commit.`,name:"summary"},{anchor:"huggingface_hub.DiscussionCommit.oid",description:`<strong>oid</strong> (<code>str</code>) &#x2014;
The OID / SHA of the commit, as a hexadecimal string.`,name:"oid"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/community.py#L246"}}),K=new X({props:{name:"class huggingface_hub.DiscussionTitleChange",anchor:"huggingface_hub.DiscussionTitleChange",parameters:[{name:"id",val:": str"},{name:"type",val:": str"},{name:"created_at",val:": datetime"},{name:"author",val:": str"},{name:"_event",val:": dict"},{name:"old_title",val:": str"},{name:"new_title",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.DiscussionTitleChange.id",description:`<strong>id</strong> (<code>str</code>) &#x2014;
The ID of the event. An hexadecimal string.`,name:"id"},{anchor:"huggingface_hub.DiscussionTitleChange.type",description:`<strong>type</strong> (<code>str</code>) &#x2014;
The type of the event.`,name:"type"},{anchor:"huggingface_hub.DiscussionTitleChange.created_at",description:`<strong>created_at</strong> (<code>datetime</code>) &#x2014;
A <a href="https://docs.python.org/3/library/datetime.html?highlight=datetime#datetime.datetime" rel="nofollow"><code>datetime</code></a>
object holding the creation timestamp for the event.`,name:"created_at"},{anchor:"huggingface_hub.DiscussionTitleChange.author",description:`<strong>author</strong> (<code>str</code>) &#x2014;
The username of the Discussion / Pull Request author.
Can be <code>&quot;deleted&quot;</code> if the user has been deleted since.`,name:"author"},{anchor:"huggingface_hub.DiscussionTitleChange.old_title",description:`<strong>old_title</strong> (<code>str</code>) &#x2014;
The previous title for the Discussion / Pull Request.`,name:"old_title"},{anchor:"huggingface_hub.DiscussionTitleChange.new_title",description:`<strong>new_title</strong> (<code>str</code>) &#x2014;
The new title.`,name:"new_title"}],source:"https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/community.py#L273"}}),{c(){y=n("meta"),Je=c(),E=n("h1"),I=n("a"),ye=n("span"),x(W.$$.fragment),mt=c(),Ee=n("span"),ft=a("Interacting with Discussions and Pull Requests"),ze=c(),k=n("p"),_t=a("Check the "),Y=n("a"),pt=a("HfApi"),bt=a(` documentation page for the reference of methods enabling
interaction with Pull Requests and Discussions on the Hub.`),Ke=c(),g=n("ul"),$e=n("li"),Z=n("a"),vt=a("get_repo_discussions()"),Dt=c(),Pe=n("li"),ee=n("a"),qt=a("get_discussion_details()"),yt=c(),xe=n("li"),te=n("a"),Et=a("create_discussion()"),$t=c(),Ae=n("li"),se=n("a"),Pt=a("create_pull_request()"),xt=c(),we=n("li"),ne=n("a"),At=a("rename_discussion()"),wt=c(),Ce=n("li"),oe=n("a"),Ct=a("comment_discussion()"),Rt=c(),Re=n("li"),ie=n("a"),Tt=a("edit_discussion_comment()"),It=c(),Te=n("li"),ae=n("a"),kt=a("change_discussion_status()"),St=c(),Ie=n("li"),re=n("a"),Lt=a("merge_pull_request()"),Qe=c(),$=n("h2"),S=n("a"),ke=n("span"),x(N.$$.fragment),Ht=c(),Se=n("span"),Wt=a("Data structures"),Xe=c(),_=n("div"),x(O.$$.fragment),Nt=c(),Le=n("p"),Ot=a("A Discussion or Pull Request on the Hub."),Vt=c(),He=n("p"),jt=a("This dataclass is not intended to be instantiated directly."),Ye=c(),P=n("div"),x(V.$$.fragment),Ut=c(),j=n("p"),Mt=a("Subclass of "),ce=n("a"),Ft=a("Discussion"),Bt=a("."),Ze=c(),f=n("div"),x(U.$$.fragment),Gt=c(),We=n("p"),Jt=a("An event in a Discussion or Pull Request."),zt=c(),Ne=n("p"),Kt=a("Use concrete classes:"),Qt=c(),p=n("ul"),Oe=n("li"),ue=n("a"),Xt=a("DiscussionComment"),Yt=c(),Ve=n("li"),he=n("a"),Zt=a("DiscussionStatusChange"),es=c(),je=n("li"),le=n("a"),ts=a("DiscussionCommit"),ss=c(),Ue=n("li"),ge=n("a"),ns=a("DiscussionTitleChange"),et=c(),b=n("div"),x(M.$$.fragment),os=c(),Me=n("p"),is=a("A comment in a Discussion / Pull Request."),as=c(),F=n("p"),rs=a("Subclass of "),de=n("a"),cs=a("DiscussionEvent"),us=a("."),tt=c(),v=n("div"),x(B.$$.fragment),hs=c(),Fe=n("p"),ls=a("A change of status in a Discussion / Pull Request."),gs=c(),G=n("p"),ds=a("Subclass of "),me=n("a"),ms=a("DiscussionEvent"),fs=a("."),st=c(),D=n("div"),x(J.$$.fragment),_s=c(),Be=n("p"),ps=a("A commit in a Pull Request."),bs=c(),z=n("p"),vs=a("Subclass of "),fe=n("a"),Ds=a("DiscussionEvent"),qs=a("."),nt=c(),q=n("div"),x(K.$$.fragment),ys=c(),Ge=n("p"),Es=a("A rename event in a Discussion / Pull Request."),$s=c(),Q=n("p"),Ps=a("Subclass of "),_e=n("a"),xs=a("DiscussionEvent"),As=a("."),this.h()},l(t){const l=xn('[data-svelte="svelte-1phssyn"]',document.head);y=o(l,"META",{name:!0,content:!0}),l.forEach(s),Je=u(t),E=o(t,"H1",{class:!0});var it=i(E);I=o(it,"A",{id:!0,class:!0,href:!0});var Cs=i(I);ye=o(Cs,"SPAN",{});var Rs=i(ye);A(W.$$.fragment,Rs),Rs.forEach(s),Cs.forEach(s),mt=u(it),Ee=o(it,"SPAN",{});var Ts=i(Ee);ft=r(Ts,"Interacting with Discussions and Pull Requests"),Ts.forEach(s),it.forEach(s),ze=u(t),k=o(t,"P",{});var at=i(k);_t=r(at,"Check the "),Y=o(at,"A",{href:!0});var Is=i(Y);pt=r(Is,"HfApi"),Is.forEach(s),bt=r(at,` documentation page for the reference of methods enabling
interaction with Pull Requests and Discussions on the Hub.`),at.forEach(s),Ke=u(t),g=o(t,"UL",{});var m=i(g);$e=o(m,"LI",{});var ks=i($e);Z=o(ks,"A",{href:!0});var Ss=i(Z);vt=r(Ss,"get_repo_discussions()"),Ss.forEach(s),ks.forEach(s),Dt=u(m),Pe=o(m,"LI",{});var Ls=i(Pe);ee=o(Ls,"A",{href:!0});var Hs=i(ee);qt=r(Hs,"get_discussion_details()"),Hs.forEach(s),Ls.forEach(s),yt=u(m),xe=o(m,"LI",{});var Ws=i(xe);te=o(Ws,"A",{href:!0});var Ns=i(te);Et=r(Ns,"create_discussion()"),Ns.forEach(s),Ws.forEach(s),$t=u(m),Ae=o(m,"LI",{});var Os=i(Ae);se=o(Os,"A",{href:!0});var Vs=i(se);Pt=r(Vs,"create_pull_request()"),Vs.forEach(s),Os.forEach(s),xt=u(m),we=o(m,"LI",{});var js=i(we);ne=o(js,"A",{href:!0});var Us=i(ne);At=r(Us,"rename_discussion()"),Us.forEach(s),js.forEach(s),wt=u(m),Ce=o(m,"LI",{});var Ms=i(Ce);oe=o(Ms,"A",{href:!0});var Fs=i(oe);Ct=r(Fs,"comment_discussion()"),Fs.forEach(s),Ms.forEach(s),Rt=u(m),Re=o(m,"LI",{});var Bs=i(Re);ie=o(Bs,"A",{href:!0});var Gs=i(ie);Tt=r(Gs,"edit_discussion_comment()"),Gs.forEach(s),Bs.forEach(s),It=u(m),Te=o(m,"LI",{});var Js=i(Te);ae=o(Js,"A",{href:!0});var zs=i(ae);kt=r(zs,"change_discussion_status()"),zs.forEach(s),Js.forEach(s),St=u(m),Ie=o(m,"LI",{});var Ks=i(Ie);re=o(Ks,"A",{href:!0});var Qs=i(re);Lt=r(Qs,"merge_pull_request()"),Qs.forEach(s),Ks.forEach(s),m.forEach(s),Qe=u(t),$=o(t,"H2",{class:!0});var rt=i($);S=o(rt,"A",{id:!0,class:!0,href:!0});var Xs=i(S);ke=o(Xs,"SPAN",{});var Ys=i(ke);A(N.$$.fragment,Ys),Ys.forEach(s),Xs.forEach(s),Ht=u(rt),Se=o(rt,"SPAN",{});var Zs=i(Se);Wt=r(Zs,"Data structures"),Zs.forEach(s),rt.forEach(s),Xe=u(t),_=o(t,"DIV",{class:!0});var pe=i(_);A(O.$$.fragment,pe),Nt=u(pe),Le=o(pe,"P",{});var en=i(Le);Ot=r(en,"A Discussion or Pull Request on the Hub."),en.forEach(s),Vt=u(pe),He=o(pe,"P",{});var tn=i(He);jt=r(tn,"This dataclass is not intended to be instantiated directly."),tn.forEach(s),pe.forEach(s),Ye=u(t),P=o(t,"DIV",{class:!0});var ct=i(P);A(V.$$.fragment,ct),Ut=u(ct),j=o(ct,"P",{});var ut=i(j);Mt=r(ut,"Subclass of "),ce=o(ut,"A",{href:!0});var sn=i(ce);Ft=r(sn,"Discussion"),sn.forEach(s),Bt=r(ut,"."),ut.forEach(s),ct.forEach(s),Ze=u(t),f=o(t,"DIV",{class:!0});var L=i(f);A(U.$$.fragment,L),Gt=u(L),We=o(L,"P",{});var nn=i(We);Jt=r(nn,"An event in a Discussion or Pull Request."),nn.forEach(s),zt=u(L),Ne=o(L,"P",{});var on=i(Ne);Kt=r(on,"Use concrete classes:"),on.forEach(s),Qt=u(L),p=o(L,"UL",{});var H=i(p);Oe=o(H,"LI",{});var an=i(Oe);ue=o(an,"A",{href:!0});var rn=i(ue);Xt=r(rn,"DiscussionComment"),rn.forEach(s),an.forEach(s),Yt=u(H),Ve=o(H,"LI",{});var cn=i(Ve);he=o(cn,"A",{href:!0});var un=i(he);Zt=r(un,"DiscussionStatusChange"),un.forEach(s),cn.forEach(s),es=u(H),je=o(H,"LI",{});var hn=i(je);le=o(hn,"A",{href:!0});var ln=i(le);ts=r(ln,"DiscussionCommit"),ln.forEach(s),hn.forEach(s),ss=u(H),Ue=o(H,"LI",{});var gn=i(Ue);ge=o(gn,"A",{href:!0});var dn=i(ge);ns=r(dn,"DiscussionTitleChange"),dn.forEach(s),gn.forEach(s),H.forEach(s),L.forEach(s),et=u(t),b=o(t,"DIV",{class:!0});var be=i(b);A(M.$$.fragment,be),os=u(be),Me=o(be,"P",{});var mn=i(Me);is=r(mn,"A comment in a Discussion / Pull Request."),mn.forEach(s),as=u(be),F=o(be,"P",{});var ht=i(F);rs=r(ht,"Subclass of "),de=o(ht,"A",{href:!0});var fn=i(de);cs=r(fn,"DiscussionEvent"),fn.forEach(s),us=r(ht,"."),ht.forEach(s),be.forEach(s),tt=u(t),v=o(t,"DIV",{class:!0});var ve=i(v);A(B.$$.fragment,ve),hs=u(ve),Fe=o(ve,"P",{});var _n=i(Fe);ls=r(_n,"A change of status in a Discussion / Pull Request."),_n.forEach(s),gs=u(ve),G=o(ve,"P",{});var lt=i(G);ds=r(lt,"Subclass of "),me=o(lt,"A",{href:!0});var pn=i(me);ms=r(pn,"DiscussionEvent"),pn.forEach(s),fs=r(lt,"."),lt.forEach(s),ve.forEach(s),st=u(t),D=o(t,"DIV",{class:!0});var De=i(D);A(J.$$.fragment,De),_s=u(De),Be=o(De,"P",{});var bn=i(Be);ps=r(bn,"A commit in a Pull Request."),bn.forEach(s),bs=u(De),z=o(De,"P",{});var gt=i(z);vs=r(gt,"Subclass of "),fe=o(gt,"A",{href:!0});var vn=i(fe);Ds=r(vn,"DiscussionEvent"),vn.forEach(s),qs=r(gt,"."),gt.forEach(s),De.forEach(s),nt=u(t),q=o(t,"DIV",{class:!0});var qe=i(q);A(K.$$.fragment,qe),ys=u(qe),Ge=o(qe,"P",{});var Dn=i(Ge);Es=r(Dn,"A rename event in a Discussion / Pull Request."),Dn.forEach(s),$s=u(qe),Q=o(qe,"P",{});var dt=i(Q);Ps=r(dt,"Subclass of "),_e=o(dt,"A",{href:!0});var qn=i(_e);xs=r(qn,"DiscussionEvent"),qn.forEach(s),As=r(dt,"."),dt.forEach(s),qe.forEach(s),this.h()},h(){h(y,"name","hf:doc:metadata"),h(y,"content",JSON.stringify(Rn)),h(I,"id","interacting-with-discussions-and-pull-requests"),h(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(I,"href","#interacting-with-discussions-and-pull-requests"),h(E,"class","relative group"),h(Y,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi"),h(Z,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.get_repo_discussions"),h(ee,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.get_discussion_details"),h(te,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_discussion"),h(se,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.create_pull_request"),h(ne,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.rename_discussion"),h(oe,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.comment_discussion"),h(ie,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.edit_discussion_comment"),h(ae,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.change_discussion_status"),h(re,"href","/docs/huggingface_hub/main/en/package_reference/hf_api#huggingface_hub.HfApi.merge_pull_request"),h(S,"id","huggingface_hub.Discussion"),h(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(S,"href","#huggingface_hub.Discussion"),h($,"class","relative group"),h(_,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ce,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.Discussion"),h(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ue,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionComment"),h(he,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionStatusChange"),h(le,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionCommit"),h(ge,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionTitleChange"),h(f,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(de,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionEvent"),h(b,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(me,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionEvent"),h(v,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(fe,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionEvent"),h(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(_e,"href","/docs/huggingface_hub/main/en/package_reference/community#huggingface_hub.DiscussionEvent"),h(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,l){e(document.head,y),d(t,Je,l),d(t,E,l),e(E,I),e(I,ye),w(W,ye,null),e(E,mt),e(E,Ee),e(Ee,ft),d(t,ze,l),d(t,k,l),e(k,_t),e(k,Y),e(Y,pt),e(k,bt),d(t,Ke,l),d(t,g,l),e(g,$e),e($e,Z),e(Z,vt),e(g,Dt),e(g,Pe),e(Pe,ee),e(ee,qt),e(g,yt),e(g,xe),e(xe,te),e(te,Et),e(g,$t),e(g,Ae),e(Ae,se),e(se,Pt),e(g,xt),e(g,we),e(we,ne),e(ne,At),e(g,wt),e(g,Ce),e(Ce,oe),e(oe,Ct),e(g,Rt),e(g,Re),e(Re,ie),e(ie,Tt),e(g,It),e(g,Te),e(Te,ae),e(ae,kt),e(g,St),e(g,Ie),e(Ie,re),e(re,Lt),d(t,Qe,l),d(t,$,l),e($,S),e(S,ke),w(N,ke,null),e($,Ht),e($,Se),e(Se,Wt),d(t,Xe,l),d(t,_,l),w(O,_,null),e(_,Nt),e(_,Le),e(Le,Ot),e(_,Vt),e(_,He),e(He,jt),d(t,Ye,l),d(t,P,l),w(V,P,null),e(P,Ut),e(P,j),e(j,Mt),e(j,ce),e(ce,Ft),e(j,Bt),d(t,Ze,l),d(t,f,l),w(U,f,null),e(f,Gt),e(f,We),e(We,Jt),e(f,zt),e(f,Ne),e(Ne,Kt),e(f,Qt),e(f,p),e(p,Oe),e(Oe,ue),e(ue,Xt),e(p,Yt),e(p,Ve),e(Ve,he),e(he,Zt),e(p,es),e(p,je),e(je,le),e(le,ts),e(p,ss),e(p,Ue),e(Ue,ge),e(ge,ns),d(t,et,l),d(t,b,l),w(M,b,null),e(b,os),e(b,Me),e(Me,is),e(b,as),e(b,F),e(F,rs),e(F,de),e(de,cs),e(F,us),d(t,tt,l),d(t,v,l),w(B,v,null),e(v,hs),e(v,Fe),e(Fe,ls),e(v,gs),e(v,G),e(G,ds),e(G,me),e(me,ms),e(G,fs),d(t,st,l),d(t,D,l),w(J,D,null),e(D,_s),e(D,Be),e(Be,ps),e(D,bs),e(D,z),e(z,vs),e(z,fe),e(fe,Ds),e(z,qs),d(t,nt,l),d(t,q,l),w(K,q,null),e(q,ys),e(q,Ge),e(Ge,Es),e(q,$s),e(q,Q),e(Q,Ps),e(Q,_e),e(_e,xs),e(Q,As),ot=!0},p:An,i(t){ot||(C(W.$$.fragment,t),C(N.$$.fragment,t),C(O.$$.fragment,t),C(V.$$.fragment,t),C(U.$$.fragment,t),C(M.$$.fragment,t),C(B.$$.fragment,t),C(J.$$.fragment,t),C(K.$$.fragment,t),ot=!0)},o(t){R(W.$$.fragment,t),R(N.$$.fragment,t),R(O.$$.fragment,t),R(V.$$.fragment,t),R(U.$$.fragment,t),R(M.$$.fragment,t),R(B.$$.fragment,t),R(J.$$.fragment,t),R(K.$$.fragment,t),ot=!1},d(t){s(y),t&&s(Je),t&&s(E),T(W),t&&s(ze),t&&s(k),t&&s(Ke),t&&s(g),t&&s(Qe),t&&s($),T(N),t&&s(Xe),t&&s(_),T(O),t&&s(Ye),t&&s(P),T(V),t&&s(Ze),t&&s(f),T(U),t&&s(et),t&&s(b),T(M),t&&s(tt),t&&s(v),T(B),t&&s(st),t&&s(D),T(J),t&&s(nt),t&&s(q),T(K)}}}const Rn={local:"interacting-with-discussions-and-pull-requests",sections:[{local:"huggingface_hub.Discussion",title:"Data structures"}],title:"Interacting with Discussions and Pull Requests"};function Tn(ws){return wn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ln extends En{constructor(y){super();$n(this,y,Tn,Cn,Pn,{})}}export{Ln as default,Rn as metadata};
