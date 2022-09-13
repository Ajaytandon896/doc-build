import{S as ea,i as aa,s as oa,e as r,k as c,w as E,t as l,M as la,c as h,d as n,m as p,a as i,x as j,h as s,b as m,N as fe,G as e,g as o,y as q,L as sa,q as P,o as G,B as C,v as ra}from"../../chunks/vendor-hf-doc-builder.js";import{I as na}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as it}from"../../chunks/CodeBlock-hf-doc-builder.js";import{D as ha}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";function ia(de){let w,Ct,k,H,ct,A,gn,pt,fn,Ht,M,It,X,dn,Tt,W,mt,yn,Bt,K,bn,Nt,Q,vn,Dt,O,St,Y,wn,At,b,y,kn,ut,xn,_n,gt,$n,En,ft,jn,qn,Pn,u,Gn,dt,Cn,Hn,yt,In,Tn,bt,Bn,Nn,vt,Dn,Sn,An,x,Mn,wt,On,Ln,kt,Jn,Rn,Mt,I,Un,xt,L,Vn,Fn,Ot,g,ye,Lt,Z,zn,Jt,T,Xn,_t,Wn,Kn,Rt,J,Ut,f,be,Vt,tt,Qn,Ft,nt,Yn,zt,_,B,$t,R,Zn,Et,te,Xt,N,ne,jt,ee,ae,Wt,$,oe,qt,le,se,et,re,Kt,at,he,Qt,U,Yt,ot,ie,Zt,V,tn,F,nn,D,ce,Pt,pe,me,en,z,an,lt,ue,on,d,ve,ln,st,ge,sn;return A=new na({}),M=new ha({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/vi/chapter9/section2.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/vi/chapter9/section2.ipynb"}]}}),O=new it({props:{code:`import gradio as gr


def greet(name):
    return "Hello " + name


demo = gr.Interface(fn=greet, inputs="text", outputs="text")

demo.launch()`,highlighted:`<span class="hljs-keyword">import</span> gradio <span class="hljs-keyword">as</span> gr


<span class="hljs-keyword">def</span> <span class="hljs-title function_">greet</span>(<span class="hljs-params">name</span>):
    <span class="hljs-keyword">return</span> <span class="hljs-string">&quot;Hello &quot;</span> + name


demo = gr.Interface(fn=greet, inputs=<span class="hljs-string">&quot;text&quot;</span>, outputs=<span class="hljs-string">&quot;text&quot;</span>)

demo.launch()`}}),J=new it({props:{code:`import gradio as gr


def greet(name):
    return "Hello " + name


# Ch\xFAng t\xF4i kh\u1EDFi t\u1EA1o l\u1EDBp Textbox
textbox = gr.Textbox(label="Type your name here:", placeholder="John Doe", lines=2)

gr.Interface(fn=greet, inputs=textbox, outputs="text").launch()`,highlighted:`<span class="hljs-keyword">import</span> gradio <span class="hljs-keyword">as</span> gr


<span class="hljs-keyword">def</span> <span class="hljs-title function_">greet</span>(<span class="hljs-params">name</span>):
    <span class="hljs-keyword">return</span> <span class="hljs-string">&quot;Hello &quot;</span> + name


<span class="hljs-comment"># Ch\xFAng t\xF4i kh\u1EDFi t\u1EA1o l\u1EDBp Textbox</span>
textbox = gr.Textbox(label=<span class="hljs-string">&quot;Type your name here:&quot;</span>, placeholder=<span class="hljs-string">&quot;John Doe&quot;</span>, lines=<span class="hljs-number">2</span>)

gr.Interface(fn=greet, inputs=textbox, outputs=<span class="hljs-string">&quot;text&quot;</span>).launch()`}}),R=new na({}),U=new it({props:{code:`from transformers import pipeline

model = pipeline("text-generation")


def predict(prompt):
    completion = model(prompt)[0]["generated_text"]
    return completion`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

model = pipeline(<span class="hljs-string">&quot;text-generation&quot;</span>)


<span class="hljs-keyword">def</span> <span class="hljs-title function_">predict</span>(<span class="hljs-params">prompt</span>):
    completion = model(prompt)[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;generated_text&quot;</span>]
    <span class="hljs-keyword">return</span> completion`}}),V=new it({props:{code:'predict("My favorite programming language is")',highlighted:'<span class="hljs-function"><span class="hljs-title">predict</span><span class="hljs-params">(<span class="hljs-string">&quot;My favorite programming language is&quot;</span>)</span></span>'}}),F=new it({props:{code:">> My favorite programming language is Haskell. I really enjoyed the Haskell language, but it doesn't have all the features that can be applied to any other language. For example, all it does is compile to a byte array.",highlighted:'&gt;&gt; My favorite programming language <span class="hljs-keyword">is</span> Haskell. I really enjoyed <span class="hljs-keyword">the</span> Haskell language, <span class="hljs-keyword">but</span> <span class="hljs-keyword">it</span> doesn&#x27;t have all <span class="hljs-keyword">the</span> features <span class="hljs-keyword">that</span> can be applied <span class="hljs-keyword">to</span> any other language. For example, all <span class="hljs-keyword">it</span> <span class="hljs-keyword">does</span> <span class="hljs-keyword">is</span> compile <span class="hljs-keyword">to</span> a byte array.'}}),z=new it({props:{code:`import gradio as gr

gr.Interface(fn=predict, inputs="text", outputs="text").launch()`,highlighted:`<span class="hljs-keyword">import</span> gradio <span class="hljs-keyword">as</span> gr

gr.Interface(fn=predict, inputs=<span class="hljs-string">&quot;text&quot;</span>, outputs=<span class="hljs-string">&quot;text&quot;</span>).launch()`}}),{c(){w=r("meta"),Ct=c(),k=r("h1"),H=r("a"),ct=r("span"),E(A.$$.fragment),gn=c(),pt=r("span"),fn=l("X\xE2y d\u1EF1ng b\u1EA3n demo \u0111\u1EA7u ti\xEAn c\u1EE7a b\u1EA1n"),Ht=c(),E(M.$$.fragment),It=c(),X=r("p"),dn=l("H\xE3y b\u1EAFt \u0111\u1EA7u b\u1EB1ng c\xE1ch c\xE0i \u0111\u1EB7t Gradio! V\xEC n\xF3 l\xE0 m\u1ED9t g\xF3i Python, ch\u1EC9 c\u1EA7n ch\u1EA1y:"),Tt=c(),W=r("p"),mt=r("code"),yn=l("$ pip install gradio"),Bt=c(),K=r("p"),bn=l(`B\u1EA1n c\xF3 th\u1EC3 ch\u1EA1y Gradio \u1EDF b\u1EA5t c\u1EE9 \u0111\xE2u, t\u1EEB IDE Python y\xEAu th\xEDch c\u1EE7a b\u1EA1n, \u0111\u1EBFn notebook Jupyter ho\u1EB7c th\u1EADm ch\xED trong Google Colab \u{1F92F}!
V\xEC v\u1EADy, h\xE3y c\xE0i \u0111\u1EB7t Gradio \u1EDF b\u1EA5t c\u1EE9 \u0111\xE2u b\u1EA1n ch\u1EA1y Python!`),Nt=c(),Q=r("p"),vn=l("H\xE3y b\u1EAFt \u0111\u1EA7u v\u1EDBi m\u1ED9t v\xED d\u1EE5 \u201CHello World\u201D \u0111\u01A1n gi\u1EA3n \u0111\u1EC3 l\xE0m quen v\u1EDBi c\xFA ph\xE1p Gradio:"),Dt=c(),E(O.$$.fragment),St=c(),Y=r("p"),wn=l("H\xE3y xem qua \u0111o\u1EA1n m\xE3 tr\xEAn:"),At=c(),b=r("ul"),y=r("li"),kn=l("\u0110\u1EA7u ti\xEAn, ch\xFAng ta \u0111\u1ECBnh ngh\u0129a m\u1ED9t h\xE0m c\xF3 t\xEAn l\xE0 "),ut=r("code"),xn=l("welcome()"),_n=l(". Trong tr\u01B0\u1EDDng h\u1EE3p n\xE0y, n\xF3 l\xE0 m\u1ED9t h\xE0m \u0111\u01A1n gi\u1EA3n c\xF3 th\xEAm \u201CHello\u201D tr\u01B0\u1EDBc t\xEAn c\u1EE7a b\u1EA1n, nh\u01B0ng n\xF3 c\xF3 th\u1EC3 l\xE0 "),gt=r("em"),$n=l("b\u1EA5t k\u1EF3"),En=l(" h\xE0m Python n\xE0o n\xF3i chung. V\xED d\u1EE5: trong c\xE1c \u1EE9ng d\u1EE5ng h\u1ECDc m\xE1y, h\xE0m n\xE0y s\u1EBD "),ft=r("em"),jn=l("g\u1ECDi m\u1ED9t m\xF4 h\xECnh \u0111\u1EC3 \u0111\u01B0a ra d\u1EF1 \u0111o\xE1n"),qn=l(" tr\xEAn m\u1ED9t \u0111\u1EA7u v\xE0o v\xE0 tr\u1EA3 l\u1EA1i \u0111\u1EA7u ra."),Pn=c(),u=r("li"),Gn=l("Sau \u0111\xF3, ch\xFAng ta t\u1EA1o m\u1ED9t Giao di\u1EC7n Gradio v\u1EDBi ba tham s\u1ED1 "),dt=r("code"),Cn=l("fn"),Hn=l(", "),yt=r("code"),In=l("inputs"),Tn=l(", v\xE0 "),bt=r("code"),Bn=l("outputs"),Nn=l(". C\xE1c tham s\u1ED1 n\xE0y x\xE1c \u0111\u1ECBnh h\xE0m d\u1EF1 \u0111o\xE1n, c\u0169ng nh\u01B0 "),vt=r("em"),Dn=l("ki\u1EC3u"),Sn=l(" c\u1EE7a c\xE1c th\xE0nh ph\u1EA7n \u0111\u1EA7u v\xE0o v\xE0 \u0111\u1EA7u ra m\xE0 ta mu\u1ED1n. Trong tr\u01B0\u1EDDng h\u1EE3p c\u1EE7a m\xECnh, c\u1EA3 hai th\xE0nh ph\u1EA7n \u0111\u1EC1u l\xE0 c\xE1c h\u1ED9p v\u0103n b\u1EA3n \u0111\u01A1n gi\u1EA3n."),An=c(),x=r("li"),Mn=l("Sau \u0111\xF3, ch\xFAng ta g\u1ECDi ph\u01B0\u01A1ng th\u1EE9c "),wt=r("code"),On=l("launch()"),Ln=l(" tr\xEAn "),kt=r("code"),Jn=l("Interface"),Rn=l(" \u0111\xE3 t\u1EA1o."),Mt=c(),I=r("p"),Un=l("N\u1EBFu b\u1EA1n ch\u1EA1y \u0111o\u1EA1n m\xE3 n\xE0y, giao di\u1EC7n b\xEAn d\u01B0\u1EDBi s\u1EBD t\u1EF1 \u0111\u1ED9ng xu\u1EA5t hi\u1EC7n trong notebook Jupyter/Colab ho\u1EB7c b\u1EADt trong tr\xECnh duy\u1EC7t tr\xEAn "),xt=r("strong"),L=r("a"),Vn=l("http://localhost:7860"),Fn=l(" n\u1EBFu \u0111ang ch\u1EA1y t\u1EEB m\u1ED9t t\u1EADp l\u1EC7nh."),Ot=c(),g=r("iframe"),Lt=c(),Z=r("p"),zn=l("H\xE3y th\u1EED s\u1EED d\u1EE5ng GUI n\xE0y ngay b\xE2y gi\u1EDD v\u1EDBi t\xEAn c\u1EE7a ch\xEDnh b\u1EA1n ho\u1EB7c m\u1ED9t s\u1ED1 \u0111\u1EA7u v\xE0o kh\xE1c!"),Jt=c(),T=r("p"),Xn=l("B\u1EA1n s\u1EBD nh\u1EADn th\u1EA5y r\u1EB1ng trong GUI n\xE0y, Gradio t\u1EF1 \u0111\u1ED9ng suy ra t\xEAn c\u1EE7a tham s\u1ED1 \u0111\u1EA7u v\xE0o ("),_t=r("code"),Wn=l("name"),Kn=l(") v\xE0 l\u1EA5y n\xF3 l\xE0m nh\xE3n tr\xEAn \u0111\u1EA7u h\u1ED9p v\u0103n b\u1EA3n. \u0110i\u1EC1u g\xEC x\u1EA3y ra n\u1EBFu b\u1EA1n mu\u1ED1n thay \u0111\u1ED5i \u0111i\u1EC1u \u0111\xF3? Ho\u1EB7c n\u1EBFu b\u1EA1n mu\u1ED1n t\xF9y ch\u1EC9nh h\u1ED9p v\u0103n b\u1EA3n theo m\u1ED9t s\u1ED1 c\xE1ch kh\xE1c? Trong tr\u01B0\u1EDDng h\u1EE3p \u0111\xF3, b\u1EA1n c\xF3 th\u1EC3 kh\u1EDFi t\u1EA1o m\u1ED9t \u0111\u1ED1i t\u01B0\u1EE3ng l\u1EDBp \u0111\u1EA1i di\u1EC7n cho th\xE0nh ph\u1EA7n \u0111\u1EA7u v\xE0o."),Rt=c(),E(J.$$.fragment),Ut=c(),f=r("iframe"),Vt=c(),tt=r("p"),Qn=l("\u1EDE \u0111\xE2y, ch\xFAng ta \u0111\xE3 t\u1EA1o m\u1ED9t h\u1ED9p v\u0103n b\u1EA3n \u0111\u1EA7u v\xE0o v\u1EDBi nh\xE3n, tr\xECnh gi\u1EEF ch\u1ED7 v\xE0 m\u1ED9t s\u1ED1 d\xF2ng. B\u1EA1n c\xF3 th\u1EC3 l\xE0m t\u01B0\u01A1ng t\u1EF1 \u0111\u1ED1i v\u1EDBi h\u1ED9p v\u0103n b\u1EA3n \u0111\u1EA7u ra, nh\u01B0ng ch\xFAng ta s\u1EBD \u0111\u1EC3 l\u1EA1i \u0111i\u1EC1u \u0111\xF3 ngay b\xE2y gi\u1EDD."),Ft=c(),nt=r("p"),Yn=l(`Ch\xFAng ta th\u1EA5y r\u1EB1ng ch\u1EC9 v\u1EDBi m\u1ED9t v\xE0i d\xF2ng m\xE3, Gradio cho ph\xE9p b\u1EA1n t\u1EA1o m\u1ED9t giao di\u1EC7n \u0111\u01A1n gi\u1EA3n xung quanh b\u1EA5t k\u1EF3 ch\u1EE9c n\u0103ng n\xE0o
v\u1EDBi b\u1EA5t k\u1EF3 lo\u1EA1i \u0111\u1EA7u v\xE0o ho\u1EB7c \u0111\u1EA7u ra n\xE0o. Trong ph\u1EA7n n\xE0y, ch\xFAng ta \u0111\xE3 b\u1EAFt \u0111\u1EA7u v\u1EDBi h\u1ED9p v\u0103n b\u1EA3n \u0111\u01A1n gi\u1EA3n, nh\u01B0ng trong c\xE1c ph\u1EA7n ti\u1EBFp theo, ch\xFAng ta s\u1EBD \u0111\u1EC1 c\u1EADp \u0111\u1EBFn c\xE1c lo\u1EA1i \u0111\u1EA7u v\xE0o v\xE0 \u0111\u1EA7u ra kh\xE1c. B\xE2y gi\u1EDD ch\xFAng ta h\xE3y xem bao g\u1ED3m m\u1ED9t s\u1ED1 NLP trong m\u1ED9t \u1EE9ng d\u1EE5ng Gradio th\xEC sao.`),zt=c(),_=r("h2"),B=r("a"),$t=r("span"),E(R.$$.fragment),Zn=c(),Et=r("span"),te=l("\u{1F916} Bao g\u1ED3m c\xE1c d\u1EF1 \u0111o\xE1n m\xF4 h\xECnh"),Xt=c(),N=r("p"),ne=l("B\xE2y gi\u1EDD ch\xFAng ta h\xE3y x\xE2y d\u1EF1ng m\u1ED9t giao di\u1EC7n \u0111\u01A1n gi\u1EA3n cho ph\xE9p b\u1EA1n demo m\xF4 h\xECnh "),jt=r("strong"),ee=l("t\u1EA1o v\u0103n b\u1EA3n"),ae=l(" nh\u01B0 GPT-2."),Wt=c(),$=r("p"),oe=l("Ch\xFAng ta s\u1EBD t\u1EA3i m\xF4 h\xECnh c\u1EE7a m\xECnh b\u1EB1ng c\xE1ch s\u1EED d\u1EE5ng h\xE0m "),qt=r("code"),le=l("pipeline()"),se=l(` t\u1EEB \u{1F917} Transformers.
N\u1EBFu b\u1EA1n c\u1EA7n c\u1EADp nh\u1EADt nhanh, b\u1EA1n c\xF3 th\u1EC3 quay l\u1EA1i `),et=r("a"),re=l("ph\u1EA7n \u0111\xF3 trong Ch\u01B0\u01A1ng 1"),Kt=c(),at=r("p"),he=l("\u0110\u1EA7u ti\xEAn, ch\xFAng ta \u0111\u1ECBnh ngh\u0129a m\u1ED9t h\xE0m d\u1EF1 \u0111o\xE1n nh\u1EADn l\u1EDDi nh\u1EAFc v\u0103n b\u1EA3n v\xE0 tr\u1EA3 v\u1EC1 v\u0103n b\u1EA3n \u0111\xE3 ho\xE0n thi\u1EC7n:"),Qt=c(),E(U.$$.fragment),Yt=c(),ot=r("p"),ie=l("H\xE0m n\xE0y ho\xE0n th\xE0nh c\xE1c l\u1EDDi nh\u1EAFc m\xE0 b\u1EA1n cung c\u1EA5p v\xE0 b\u1EA1n c\xF3 th\u1EC3 ch\u1EA1y n\xF3 v\u1EDBi l\u1EDDi nh\u1EAFc \u0111\u1EA7u v\xE0o c\u1EE7a ri\xEAng m\xECnh \u0111\u1EC3 xem n\xF3 ho\u1EA1t \u0111\u1ED9ng nh\u01B0 th\u1EBF n\xE0o. \u0110\xE2y l\xE0 m\u1ED9t v\xED d\u1EE5 (b\u1EA1n c\xF3 th\u1EC3 nh\u1EADn \u0111\u01B0\u1EE3c m\u1ED9t k\u1EBFt qu\u1EA3 kh\xE1c):"),Zt=c(),E(V.$$.fragment),tn=c(),E(F.$$.fragment),nn=c(),D=r("p"),ce=l("B\xE2y gi\u1EDD ch\xFAng ta c\xF3 m\u1ED9t h\xE0m \u0111\u1EC3 t\u1EA1o c\xE1c d\u1EF1 \u0111o\xE1n, ch\xFAng ta c\xF3 th\u1EC3 t\u1EA1o v\xE0 kh\u1EDFi ch\u1EA1y m\u1ED9t "),Pt=r("code"),pe=l("Interface"),me=l(" theo c\xE1ch gi\u1ED1ng nh\u01B0 c\xE1ch ch\xFAng ta \u0111\xE3 l\xE0m tr\u01B0\u1EDBc \u0111\xF3:"),en=c(),E(z.$$.fragment),an=c(),lt=r("p"),ue=l("N\xF3 \u0111\xF3! B\xE2y gi\u1EDD b\u1EA1n c\xF3 th\u1EC3 s\u1EED d\u1EE5ng giao di\u1EC7n n\xE0y \u0111\u1EC3 t\u1EA1o v\u0103n b\u1EA3n b\u1EB1ng m\xF4 h\xECnh GPT-2 nh\u01B0 h\xECnh b\xEAn d\u01B0\u1EDBi \u{1F92F}."),on=c(),d=r("iframe"),ln=c(),st=r("p"),ge=l("H\xE3y ti\u1EBFp t\u1EE5c \u0111\u1ECDc \u0111\u1EC3 bi\u1EBFt c\xE1ch t\u1EA1o c\xE1c lo\u1EA1i demo kh\xE1c v\u1EDBi Gradio!"),this.h()},l(t){const a=la('[data-svelte="svelte-1phssyn"]',document.head);w=h(a,"META",{name:!0,content:!0}),a.forEach(n),Ct=p(t),k=h(t,"H1",{class:!0});var rn=i(k);H=h(rn,"A",{id:!0,class:!0,href:!0});var we=i(H);ct=h(we,"SPAN",{});var ke=i(ct);j(A.$$.fragment,ke),ke.forEach(n),we.forEach(n),gn=p(rn),pt=h(rn,"SPAN",{});var xe=i(pt);fn=s(xe,"X\xE2y d\u1EF1ng b\u1EA3n demo \u0111\u1EA7u ti\xEAn c\u1EE7a b\u1EA1n"),xe.forEach(n),rn.forEach(n),Ht=p(t),j(M.$$.fragment,t),It=p(t),X=h(t,"P",{});var _e=i(X);dn=s(_e,"H\xE3y b\u1EAFt \u0111\u1EA7u b\u1EB1ng c\xE1ch c\xE0i \u0111\u1EB7t Gradio! V\xEC n\xF3 l\xE0 m\u1ED9t g\xF3i Python, ch\u1EC9 c\u1EA7n ch\u1EA1y:"),_e.forEach(n),Tt=p(t),W=h(t,"P",{});var $e=i(W);mt=h($e,"CODE",{});var Ee=i(mt);yn=s(Ee,"$ pip install gradio"),Ee.forEach(n),$e.forEach(n),Bt=p(t),K=h(t,"P",{});var je=i(K);bn=s(je,`B\u1EA1n c\xF3 th\u1EC3 ch\u1EA1y Gradio \u1EDF b\u1EA5t c\u1EE9 \u0111\xE2u, t\u1EEB IDE Python y\xEAu th\xEDch c\u1EE7a b\u1EA1n, \u0111\u1EBFn notebook Jupyter ho\u1EB7c th\u1EADm ch\xED trong Google Colab \u{1F92F}!
V\xEC v\u1EADy, h\xE3y c\xE0i \u0111\u1EB7t Gradio \u1EDF b\u1EA5t c\u1EE9 \u0111\xE2u b\u1EA1n ch\u1EA1y Python!`),je.forEach(n),Nt=p(t),Q=h(t,"P",{});var qe=i(Q);vn=s(qe,"H\xE3y b\u1EAFt \u0111\u1EA7u v\u1EDBi m\u1ED9t v\xED d\u1EE5 \u201CHello World\u201D \u0111\u01A1n gi\u1EA3n \u0111\u1EC3 l\xE0m quen v\u1EDBi c\xFA ph\xE1p Gradio:"),qe.forEach(n),Dt=p(t),j(O.$$.fragment,t),St=p(t),Y=h(t,"P",{});var Pe=i(Y);wn=s(Pe,"H\xE3y xem qua \u0111o\u1EA1n m\xE3 tr\xEAn:"),Pe.forEach(n),At=p(t),b=h(t,"UL",{});var rt=i(b);y=h(rt,"LI",{});var S=i(y);kn=s(S,"\u0110\u1EA7u ti\xEAn, ch\xFAng ta \u0111\u1ECBnh ngh\u0129a m\u1ED9t h\xE0m c\xF3 t\xEAn l\xE0 "),ut=h(S,"CODE",{});var Ge=i(ut);xn=s(Ge,"welcome()"),Ge.forEach(n),_n=s(S,". Trong tr\u01B0\u1EDDng h\u1EE3p n\xE0y, n\xF3 l\xE0 m\u1ED9t h\xE0m \u0111\u01A1n gi\u1EA3n c\xF3 th\xEAm \u201CHello\u201D tr\u01B0\u1EDBc t\xEAn c\u1EE7a b\u1EA1n, nh\u01B0ng n\xF3 c\xF3 th\u1EC3 l\xE0 "),gt=h(S,"EM",{});var Ce=i(gt);$n=s(Ce,"b\u1EA5t k\u1EF3"),Ce.forEach(n),En=s(S," h\xE0m Python n\xE0o n\xF3i chung. V\xED d\u1EE5: trong c\xE1c \u1EE9ng d\u1EE5ng h\u1ECDc m\xE1y, h\xE0m n\xE0y s\u1EBD "),ft=h(S,"EM",{});var He=i(ft);jn=s(He,"g\u1ECDi m\u1ED9t m\xF4 h\xECnh \u0111\u1EC3 \u0111\u01B0a ra d\u1EF1 \u0111o\xE1n"),He.forEach(n),qn=s(S," tr\xEAn m\u1ED9t \u0111\u1EA7u v\xE0o v\xE0 tr\u1EA3 l\u1EA1i \u0111\u1EA7u ra."),S.forEach(n),Pn=p(rt),u=h(rt,"LI",{});var v=i(u);Gn=s(v,"Sau \u0111\xF3, ch\xFAng ta t\u1EA1o m\u1ED9t Giao di\u1EC7n Gradio v\u1EDBi ba tham s\u1ED1 "),dt=h(v,"CODE",{});var Ie=i(dt);Cn=s(Ie,"fn"),Ie.forEach(n),Hn=s(v,", "),yt=h(v,"CODE",{});var Te=i(yt);In=s(Te,"inputs"),Te.forEach(n),Tn=s(v,", v\xE0 "),bt=h(v,"CODE",{});var Be=i(bt);Bn=s(Be,"outputs"),Be.forEach(n),Nn=s(v,". C\xE1c tham s\u1ED1 n\xE0y x\xE1c \u0111\u1ECBnh h\xE0m d\u1EF1 \u0111o\xE1n, c\u0169ng nh\u01B0 "),vt=h(v,"EM",{});var Ne=i(vt);Dn=s(Ne,"ki\u1EC3u"),Ne.forEach(n),Sn=s(v," c\u1EE7a c\xE1c th\xE0nh ph\u1EA7n \u0111\u1EA7u v\xE0o v\xE0 \u0111\u1EA7u ra m\xE0 ta mu\u1ED1n. Trong tr\u01B0\u1EDDng h\u1EE3p c\u1EE7a m\xECnh, c\u1EA3 hai th\xE0nh ph\u1EA7n \u0111\u1EC1u l\xE0 c\xE1c h\u1ED9p v\u0103n b\u1EA3n \u0111\u01A1n gi\u1EA3n."),v.forEach(n),An=p(rt),x=h(rt,"LI",{});var ht=i(x);Mn=s(ht,"Sau \u0111\xF3, ch\xFAng ta g\u1ECDi ph\u01B0\u01A1ng th\u1EE9c "),wt=h(ht,"CODE",{});var De=i(wt);On=s(De,"launch()"),De.forEach(n),Ln=s(ht," tr\xEAn "),kt=h(ht,"CODE",{});var Se=i(kt);Jn=s(Se,"Interface"),Se.forEach(n),Rn=s(ht," \u0111\xE3 t\u1EA1o."),ht.forEach(n),rt.forEach(n),Mt=p(t),I=h(t,"P",{});var hn=i(I);Un=s(hn,"N\u1EBFu b\u1EA1n ch\u1EA1y \u0111o\u1EA1n m\xE3 n\xE0y, giao di\u1EC7n b\xEAn d\u01B0\u1EDBi s\u1EBD t\u1EF1 \u0111\u1ED9ng xu\u1EA5t hi\u1EC7n trong notebook Jupyter/Colab ho\u1EB7c b\u1EADt trong tr\xECnh duy\u1EC7t tr\xEAn "),xt=h(hn,"STRONG",{});var Ae=i(xt);L=h(Ae,"A",{href:!0,rel:!0});var Me=i(L);Vn=s(Me,"http://localhost:7860"),Me.forEach(n),Ae.forEach(n),Fn=s(hn," n\u1EBFu \u0111ang ch\u1EA1y t\u1EEB m\u1ED9t t\u1EADp l\u1EC7nh."),hn.forEach(n),Ot=p(t),g=h(t,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),i(g).forEach(n),Lt=p(t),Z=h(t,"P",{});var Oe=i(Z);zn=s(Oe,"H\xE3y th\u1EED s\u1EED d\u1EE5ng GUI n\xE0y ngay b\xE2y gi\u1EDD v\u1EDBi t\xEAn c\u1EE7a ch\xEDnh b\u1EA1n ho\u1EB7c m\u1ED9t s\u1ED1 \u0111\u1EA7u v\xE0o kh\xE1c!"),Oe.forEach(n),Jt=p(t),T=h(t,"P",{});var cn=i(T);Xn=s(cn,"B\u1EA1n s\u1EBD nh\u1EADn th\u1EA5y r\u1EB1ng trong GUI n\xE0y, Gradio t\u1EF1 \u0111\u1ED9ng suy ra t\xEAn c\u1EE7a tham s\u1ED1 \u0111\u1EA7u v\xE0o ("),_t=h(cn,"CODE",{});var Le=i(_t);Wn=s(Le,"name"),Le.forEach(n),Kn=s(cn,") v\xE0 l\u1EA5y n\xF3 l\xE0m nh\xE3n tr\xEAn \u0111\u1EA7u h\u1ED9p v\u0103n b\u1EA3n. \u0110i\u1EC1u g\xEC x\u1EA3y ra n\u1EBFu b\u1EA1n mu\u1ED1n thay \u0111\u1ED5i \u0111i\u1EC1u \u0111\xF3? Ho\u1EB7c n\u1EBFu b\u1EA1n mu\u1ED1n t\xF9y ch\u1EC9nh h\u1ED9p v\u0103n b\u1EA3n theo m\u1ED9t s\u1ED1 c\xE1ch kh\xE1c? Trong tr\u01B0\u1EDDng h\u1EE3p \u0111\xF3, b\u1EA1n c\xF3 th\u1EC3 kh\u1EDFi t\u1EA1o m\u1ED9t \u0111\u1ED1i t\u01B0\u1EE3ng l\u1EDBp \u0111\u1EA1i di\u1EC7n cho th\xE0nh ph\u1EA7n \u0111\u1EA7u v\xE0o."),cn.forEach(n),Rt=p(t),j(J.$$.fragment,t),Ut=p(t),f=h(t,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),i(f).forEach(n),Vt=p(t),tt=h(t,"P",{});var Je=i(tt);Qn=s(Je,"\u1EDE \u0111\xE2y, ch\xFAng ta \u0111\xE3 t\u1EA1o m\u1ED9t h\u1ED9p v\u0103n b\u1EA3n \u0111\u1EA7u v\xE0o v\u1EDBi nh\xE3n, tr\xECnh gi\u1EEF ch\u1ED7 v\xE0 m\u1ED9t s\u1ED1 d\xF2ng. B\u1EA1n c\xF3 th\u1EC3 l\xE0m t\u01B0\u01A1ng t\u1EF1 \u0111\u1ED1i v\u1EDBi h\u1ED9p v\u0103n b\u1EA3n \u0111\u1EA7u ra, nh\u01B0ng ch\xFAng ta s\u1EBD \u0111\u1EC3 l\u1EA1i \u0111i\u1EC1u \u0111\xF3 ngay b\xE2y gi\u1EDD."),Je.forEach(n),Ft=p(t),nt=h(t,"P",{});var Re=i(nt);Yn=s(Re,`Ch\xFAng ta th\u1EA5y r\u1EB1ng ch\u1EC9 v\u1EDBi m\u1ED9t v\xE0i d\xF2ng m\xE3, Gradio cho ph\xE9p b\u1EA1n t\u1EA1o m\u1ED9t giao di\u1EC7n \u0111\u01A1n gi\u1EA3n xung quanh b\u1EA5t k\u1EF3 ch\u1EE9c n\u0103ng n\xE0o
v\u1EDBi b\u1EA5t k\u1EF3 lo\u1EA1i \u0111\u1EA7u v\xE0o ho\u1EB7c \u0111\u1EA7u ra n\xE0o. Trong ph\u1EA7n n\xE0y, ch\xFAng ta \u0111\xE3 b\u1EAFt \u0111\u1EA7u v\u1EDBi h\u1ED9p v\u0103n b\u1EA3n \u0111\u01A1n gi\u1EA3n, nh\u01B0ng trong c\xE1c ph\u1EA7n ti\u1EBFp theo, ch\xFAng ta s\u1EBD \u0111\u1EC1 c\u1EADp \u0111\u1EBFn c\xE1c lo\u1EA1i \u0111\u1EA7u v\xE0o v\xE0 \u0111\u1EA7u ra kh\xE1c. B\xE2y gi\u1EDD ch\xFAng ta h\xE3y xem bao g\u1ED3m m\u1ED9t s\u1ED1 NLP trong m\u1ED9t \u1EE9ng d\u1EE5ng Gradio th\xEC sao.`),Re.forEach(n),zt=p(t),_=h(t,"H2",{class:!0});var pn=i(_);B=h(pn,"A",{id:!0,class:!0,href:!0});var Ue=i(B);$t=h(Ue,"SPAN",{});var Ve=i($t);j(R.$$.fragment,Ve),Ve.forEach(n),Ue.forEach(n),Zn=p(pn),Et=h(pn,"SPAN",{});var Fe=i(Et);te=s(Fe,"\u{1F916} Bao g\u1ED3m c\xE1c d\u1EF1 \u0111o\xE1n m\xF4 h\xECnh"),Fe.forEach(n),pn.forEach(n),Xt=p(t),N=h(t,"P",{});var mn=i(N);ne=s(mn,"B\xE2y gi\u1EDD ch\xFAng ta h\xE3y x\xE2y d\u1EF1ng m\u1ED9t giao di\u1EC7n \u0111\u01A1n gi\u1EA3n cho ph\xE9p b\u1EA1n demo m\xF4 h\xECnh "),jt=h(mn,"STRONG",{});var ze=i(jt);ee=s(ze,"t\u1EA1o v\u0103n b\u1EA3n"),ze.forEach(n),ae=s(mn," nh\u01B0 GPT-2."),mn.forEach(n),Wt=p(t),$=h(t,"P",{});var Gt=i($);oe=s(Gt,"Ch\xFAng ta s\u1EBD t\u1EA3i m\xF4 h\xECnh c\u1EE7a m\xECnh b\u1EB1ng c\xE1ch s\u1EED d\u1EE5ng h\xE0m "),qt=h(Gt,"CODE",{});var Xe=i(qt);le=s(Xe,"pipeline()"),Xe.forEach(n),se=s(Gt,` t\u1EEB \u{1F917} Transformers.
N\u1EBFu b\u1EA1n c\u1EA7n c\u1EADp nh\u1EADt nhanh, b\u1EA1n c\xF3 th\u1EC3 quay l\u1EA1i `),et=h(Gt,"A",{href:!0});var We=i(et);re=s(We,"ph\u1EA7n \u0111\xF3 trong Ch\u01B0\u01A1ng 1"),We.forEach(n),Gt.forEach(n),Kt=p(t),at=h(t,"P",{});var Ke=i(at);he=s(Ke,"\u0110\u1EA7u ti\xEAn, ch\xFAng ta \u0111\u1ECBnh ngh\u0129a m\u1ED9t h\xE0m d\u1EF1 \u0111o\xE1n nh\u1EADn l\u1EDDi nh\u1EAFc v\u0103n b\u1EA3n v\xE0 tr\u1EA3 v\u1EC1 v\u0103n b\u1EA3n \u0111\xE3 ho\xE0n thi\u1EC7n:"),Ke.forEach(n),Qt=p(t),j(U.$$.fragment,t),Yt=p(t),ot=h(t,"P",{});var Qe=i(ot);ie=s(Qe,"H\xE0m n\xE0y ho\xE0n th\xE0nh c\xE1c l\u1EDDi nh\u1EAFc m\xE0 b\u1EA1n cung c\u1EA5p v\xE0 b\u1EA1n c\xF3 th\u1EC3 ch\u1EA1y n\xF3 v\u1EDBi l\u1EDDi nh\u1EAFc \u0111\u1EA7u v\xE0o c\u1EE7a ri\xEAng m\xECnh \u0111\u1EC3 xem n\xF3 ho\u1EA1t \u0111\u1ED9ng nh\u01B0 th\u1EBF n\xE0o. \u0110\xE2y l\xE0 m\u1ED9t v\xED d\u1EE5 (b\u1EA1n c\xF3 th\u1EC3 nh\u1EADn \u0111\u01B0\u1EE3c m\u1ED9t k\u1EBFt qu\u1EA3 kh\xE1c):"),Qe.forEach(n),Zt=p(t),j(V.$$.fragment,t),tn=p(t),j(F.$$.fragment,t),nn=p(t),D=h(t,"P",{});var un=i(D);ce=s(un,"B\xE2y gi\u1EDD ch\xFAng ta c\xF3 m\u1ED9t h\xE0m \u0111\u1EC3 t\u1EA1o c\xE1c d\u1EF1 \u0111o\xE1n, ch\xFAng ta c\xF3 th\u1EC3 t\u1EA1o v\xE0 kh\u1EDFi ch\u1EA1y m\u1ED9t "),Pt=h(un,"CODE",{});var Ye=i(Pt);pe=s(Ye,"Interface"),Ye.forEach(n),me=s(un," theo c\xE1ch gi\u1ED1ng nh\u01B0 c\xE1ch ch\xFAng ta \u0111\xE3 l\xE0m tr\u01B0\u1EDBc \u0111\xF3:"),un.forEach(n),en=p(t),j(z.$$.fragment,t),an=p(t),lt=h(t,"P",{});var Ze=i(lt);ue=s(Ze,"N\xF3 \u0111\xF3! B\xE2y gi\u1EDD b\u1EA1n c\xF3 th\u1EC3 s\u1EED d\u1EE5ng giao di\u1EC7n n\xE0y \u0111\u1EC3 t\u1EA1o v\u0103n b\u1EA3n b\u1EB1ng m\xF4 h\xECnh GPT-2 nh\u01B0 h\xECnh b\xEAn d\u01B0\u1EDBi \u{1F92F}."),Ze.forEach(n),on=p(t),d=h(t,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),i(d).forEach(n),ln=p(t),st=h(t,"P",{});var ta=i(st);ge=s(ta,"H\xE3y ti\u1EBFp t\u1EE5c \u0111\u1ECDc \u0111\u1EC3 bi\u1EBFt c\xE1ch t\u1EA1o c\xE1c lo\u1EA1i demo kh\xE1c v\u1EDBi Gradio!"),ta.forEach(n),this.h()},h(){m(w,"name","hf:doc:metadata"),m(w,"content",JSON.stringify(ca)),m(H,"id","xy-dng-bn-demo-u-tin-ca-bn"),m(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(H,"href","#xy-dng-bn-demo-u-tin-ca-bn"),m(k,"class","relative group"),m(L,"href","http://localhost:7860/"),m(L,"rel","nofollow"),fe(g.src,ye="https://hf.space/gradioiframe/course-demos/hello-world/+")||m(g,"src",ye),m(g,"frameborder","0"),m(g,"height","250"),m(g,"title","Gradio app"),m(g,"class","container p-0 flex-grow space-iframe"),m(g,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),m(g,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),fe(f.src,be="https://hf.space/gradioiframe/course-demos/hello-world-custom/+")||m(f,"src",be),m(f,"frameborder","0"),m(f,"height","300"),m(f,"title","Gradio app"),m(f,"class","container p-0 flex-grow space-iframe"),m(f,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),m(f,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),m(B,"id","bao-gm-cc-d-on-m-hnh"),m(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(B,"href","#bao-gm-cc-d-on-m-hnh"),m(_,"class","relative group"),m(et,"href","/course/chapter1/3#text-generation"),fe(d.src,ve="https://hf.space/gradioiframe/course-demos/gpt-2/+")||m(d,"src",ve),m(d,"frameborder","0"),m(d,"height","300"),m(d,"title","Gradio app"),m(d,"class","container p-0 flex-grow space-iframe"),m(d,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),m(d,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads")},m(t,a){e(document.head,w),o(t,Ct,a),o(t,k,a),e(k,H),e(H,ct),q(A,ct,null),e(k,gn),e(k,pt),e(pt,fn),o(t,Ht,a),q(M,t,a),o(t,It,a),o(t,X,a),e(X,dn),o(t,Tt,a),o(t,W,a),e(W,mt),e(mt,yn),o(t,Bt,a),o(t,K,a),e(K,bn),o(t,Nt,a),o(t,Q,a),e(Q,vn),o(t,Dt,a),q(O,t,a),o(t,St,a),o(t,Y,a),e(Y,wn),o(t,At,a),o(t,b,a),e(b,y),e(y,kn),e(y,ut),e(ut,xn),e(y,_n),e(y,gt),e(gt,$n),e(y,En),e(y,ft),e(ft,jn),e(y,qn),e(b,Pn),e(b,u),e(u,Gn),e(u,dt),e(dt,Cn),e(u,Hn),e(u,yt),e(yt,In),e(u,Tn),e(u,bt),e(bt,Bn),e(u,Nn),e(u,vt),e(vt,Dn),e(u,Sn),e(b,An),e(b,x),e(x,Mn),e(x,wt),e(wt,On),e(x,Ln),e(x,kt),e(kt,Jn),e(x,Rn),o(t,Mt,a),o(t,I,a),e(I,Un),e(I,xt),e(xt,L),e(L,Vn),e(I,Fn),o(t,Ot,a),o(t,g,a),o(t,Lt,a),o(t,Z,a),e(Z,zn),o(t,Jt,a),o(t,T,a),e(T,Xn),e(T,_t),e(_t,Wn),e(T,Kn),o(t,Rt,a),q(J,t,a),o(t,Ut,a),o(t,f,a),o(t,Vt,a),o(t,tt,a),e(tt,Qn),o(t,Ft,a),o(t,nt,a),e(nt,Yn),o(t,zt,a),o(t,_,a),e(_,B),e(B,$t),q(R,$t,null),e(_,Zn),e(_,Et),e(Et,te),o(t,Xt,a),o(t,N,a),e(N,ne),e(N,jt),e(jt,ee),e(N,ae),o(t,Wt,a),o(t,$,a),e($,oe),e($,qt),e(qt,le),e($,se),e($,et),e(et,re),o(t,Kt,a),o(t,at,a),e(at,he),o(t,Qt,a),q(U,t,a),o(t,Yt,a),o(t,ot,a),e(ot,ie),o(t,Zt,a),q(V,t,a),o(t,tn,a),q(F,t,a),o(t,nn,a),o(t,D,a),e(D,ce),e(D,Pt),e(Pt,pe),e(D,me),o(t,en,a),q(z,t,a),o(t,an,a),o(t,lt,a),e(lt,ue),o(t,on,a),o(t,d,a),o(t,ln,a),o(t,st,a),e(st,ge),sn=!0},p:sa,i(t){sn||(P(A.$$.fragment,t),P(M.$$.fragment,t),P(O.$$.fragment,t),P(J.$$.fragment,t),P(R.$$.fragment,t),P(U.$$.fragment,t),P(V.$$.fragment,t),P(F.$$.fragment,t),P(z.$$.fragment,t),sn=!0)},o(t){G(A.$$.fragment,t),G(M.$$.fragment,t),G(O.$$.fragment,t),G(J.$$.fragment,t),G(R.$$.fragment,t),G(U.$$.fragment,t),G(V.$$.fragment,t),G(F.$$.fragment,t),G(z.$$.fragment,t),sn=!1},d(t){n(w),t&&n(Ct),t&&n(k),C(A),t&&n(Ht),C(M,t),t&&n(It),t&&n(X),t&&n(Tt),t&&n(W),t&&n(Bt),t&&n(K),t&&n(Nt),t&&n(Q),t&&n(Dt),C(O,t),t&&n(St),t&&n(Y),t&&n(At),t&&n(b),t&&n(Mt),t&&n(I),t&&n(Ot),t&&n(g),t&&n(Lt),t&&n(Z),t&&n(Jt),t&&n(T),t&&n(Rt),C(J,t),t&&n(Ut),t&&n(f),t&&n(Vt),t&&n(tt),t&&n(Ft),t&&n(nt),t&&n(zt),t&&n(_),C(R),t&&n(Xt),t&&n(N),t&&n(Wt),t&&n($),t&&n(Kt),t&&n(at),t&&n(Qt),C(U,t),t&&n(Yt),t&&n(ot),t&&n(Zt),C(V,t),t&&n(tn),C(F,t),t&&n(nn),t&&n(D),t&&n(en),C(z,t),t&&n(an),t&&n(lt),t&&n(on),t&&n(d),t&&n(ln),t&&n(st)}}}const ca={local:"xy-dng-bn-demo-u-tin-ca-bn",sections:[{local:"bao-gm-cc-d-on-m-hnh",title:"\u{1F916} Bao g\u1ED3m c\xE1c d\u1EF1 \u0111o\xE1n m\xF4 h\xECnh"}],title:"X\xE2y d\u1EF1ng b\u1EA3n demo \u0111\u1EA7u ti\xEAn c\u1EE7a b\u1EA1n"};function pa(de){return ra(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class da extends ea{constructor(w){super();aa(this,w,pa,ia,oa,{})}}export{da as default,ca as metadata};
