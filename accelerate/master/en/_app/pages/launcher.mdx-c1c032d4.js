import{S as ue,i as he,s as fe,e as i,k as A,w as R,t as f,M as pe,c as l,d as t,m as L,a as h,x as X,h as p,b as u,F as n,g as _,y as Z,q as ee,o as te,B as ne}from"../chunks/vendor-19e06bd2.js";import{T as me}from"../chunks/Tip-f0fa2d82.js";import{D as de}from"../chunks/Docstring-395e5a9c.js";import{I as ge}from"../chunks/IconCopyLink-3c713d38.js";function _e(C){let o,m,a,s,b;return{c(){o=i("p"),m=f("Your "),a=i("code"),s=f("Accelerator"),b=f(` object should only be defined inside the training function. This is because the
initialization should be done inside the launcher only.`)},l(c){o=l(c,"P",{});var d=h(o);m=p(d,"Your "),a=l(d,"CODE",{});var w=h(a);s=p(w,"Accelerator"),w.forEach(t),b=p(d,` object should only be defined inside the training function. This is because the
initialization should be done inside the launcher only.`),d.forEach(t)},m(c,d){_(c,o,d),n(o,m),n(o,a),n(a,s),n(o,b)},d(c){c&&t(o)}}}function be(C){let o,m,a,s,b,c,d,w,z,G,g,F,y,M,O,x,Y,B,N,$,H,E,J,V,D,k,I,v,P,W,q,Q,S;return c=new ge({}),k=new me({props:{warning:"&lcub;true}",$$slots:{default:[_e]},$$scope:{ctx:C}}}),P=new de({props:{name:"accelerate.notebook_launcher",anchor:"accelerate.notebook_launcher",parameters:[{name:"function",val:""},{name:"args",val:" = ()"},{name:"num_processes",val:" = None"},{name:"use_fp16",val:" = False"},{name:"mixed_precision",val:" = 'no'"},{name:"use_port",val:" = '29500'"}],source:"https://github.com/huggingface/accelerate/blob/master/src/accelerate/launchers.py#L28",parametersDescription:[{anchor:"accelerate.notebook_launcher.function",description:`<strong>function</strong> (<code>Callable</code>) &#x2014;
The training function to execute. If it accepts arguments, the first argument should be the index of the
process run.`,name:"function"},{anchor:"accelerate.notebook_launcher.args",description:`<strong>args</strong> (<code>Tuple</code>) &#x2014;
Tuple of arguments to pass to the function (it will receive <code>*args</code>).`,name:"args"},{anchor:"accelerate.notebook_launcher.num_processes",description:`<strong>num_processes</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The number of processes to use for training. Will default to 8 in Colab/Kaggle if a TPU is available, to
the number of GPUs available otherwise.`,name:"num_processes"},{anchor:"accelerate.notebook_launcher.mixed_precision",description:`<strong>mixed_precision</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;no&quot;</code>) &#x2014;
If <code>fp16</code> or <code>bf16</code>, will use mixed precision training on multi-GPU.`,name:"mixed_precision"},{anchor:"accelerate.notebook_launcher.use_port",description:`<strong>use_port</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;29500&quot;</code>) &#x2014;
The port to use to communicate between processes when launching a multi-GPU training.`,name:"use_port"}]}}),{c(){o=i("meta"),m=A(),a=i("h1"),s=i("a"),b=i("span"),R(c.$$.fragment),d=A(),w=i("span"),z=f("Notebook Launcher"),G=A(),g=i("p"),F=f("Launch your training function inside a notebook. Currently supports launching a training with TPUs on "),y=i("a"),M=f(`Google
Colab`),O=f(" and "),x=i("a"),Y=f("Kaggle kernels"),B=f(`, as well as training on
several GPUs (if the machine on which you are running your notebook has them).`),N=A(),$=i("p"),H=f("An example can be found in "),E=i("a"),J=f("this notebook"),V=f("."),D=A(),R(k.$$.fragment),I=A(),v=i("div"),R(P.$$.fragment),W=A(),q=i("p"),Q=f(`Launches a training function, using several processes if it\u2019s possible in the current environment (TPU with
multiple cores for instance).`),this.h()},l(e){const r=pe('[data-svelte="svelte-1phssyn"]',document.head);o=l(r,"META",{name:!0,content:!0}),r.forEach(t),m=L(e),a=l(e,"H1",{class:!0});var T=h(a);s=l(T,"A",{id:!0,class:!0,href:!0});var oe=h(s);b=l(oe,"SPAN",{});var ae=h(b);X(c.$$.fragment,ae),ae.forEach(t),oe.forEach(t),d=L(T),w=l(T,"SPAN",{});var re=h(w);z=p(re,"Notebook Launcher"),re.forEach(t),T.forEach(t),G=L(e),g=l(e,"P",{});var U=h(g);F=p(U,"Launch your training function inside a notebook. Currently supports launching a training with TPUs on "),y=l(U,"A",{href:!0,rel:!0});var se=h(y);M=p(se,`Google
Colab`),se.forEach(t),O=p(U," and "),x=l(U,"A",{href:!0,rel:!0});var ie=h(x);Y=p(ie,"Kaggle kernels"),ie.forEach(t),B=p(U,`, as well as training on
several GPUs (if the machine on which you are running your notebook has them).`),U.forEach(t),N=L(e),$=l(e,"P",{});var K=h($);H=p(K,"An example can be found in "),E=l(K,"A",{href:!0,rel:!0});var le=h(E);J=p(le,"this notebook"),le.forEach(t),V=p(K,"."),K.forEach(t),D=L(e),X(k.$$.fragment,e),I=L(e),v=l(e,"DIV",{class:!0});var j=h(v);X(P.$$.fragment,j),W=L(j),q=l(j,"P",{});var ce=h(q);Q=p(ce,`Launches a training function, using several processes if it\u2019s possible in the current environment (TPU with
multiple cores for instance).`),ce.forEach(t),j.forEach(t),this.h()},h(){u(o,"name","hf:doc:metadata"),u(o,"content",JSON.stringify(ve)),u(s,"id","accelerate.notebook_launcher"),u(s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(s,"href","#accelerate.notebook_launcher"),u(a,"class","relative group"),u(y,"href","https://colab.research.google.com/"),u(y,"rel","nofollow"),u(x,"href","https://www.kaggle.com/code"),u(x,"rel","nofollow"),u(E,"href","https://github.com/huggingface/notebooks/blob/master/examples/accelerate/simple_nlp_example.ipynb"),u(E,"rel","nofollow"),u(v,"class","docstring")},m(e,r){n(document.head,o),_(e,m,r),_(e,a,r),n(a,s),n(s,b),Z(c,b,null),n(a,d),n(a,w),n(w,z),_(e,G,r),_(e,g,r),n(g,F),n(g,y),n(y,M),n(g,O),n(g,x),n(x,Y),n(g,B),_(e,N,r),_(e,$,r),n($,H),n($,E),n(E,J),n($,V),_(e,D,r),Z(k,e,r),_(e,I,r),_(e,v,r),Z(P,v,null),n(v,W),n(v,q),n(q,Q),S=!0},p(e,[r]){const T={};r&2&&(T.$$scope={dirty:r,ctx:e}),k.$set(T)},i(e){S||(ee(c.$$.fragment,e),ee(k.$$.fragment,e),ee(P.$$.fragment,e),S=!0)},o(e){te(c.$$.fragment,e),te(k.$$.fragment,e),te(P.$$.fragment,e),S=!1},d(e){t(o),e&&t(m),e&&t(a),ne(c),e&&t(G),e&&t(g),e&&t(N),e&&t($),e&&t(D),ne(k,e),e&&t(I),e&&t(v),ne(P)}}}const ve={local:"accelerate.notebook_launcher",title:"Notebook Launcher"};function we(C,o,m){let{fw:a}=o;return C.$$set=s=>{"fw"in s&&m(0,a=s.fw)},[a]}class Ee extends ue{constructor(o){super();he(this,o,we,be,fe,{fw:0})}}export{Ee as default,ve as metadata};
