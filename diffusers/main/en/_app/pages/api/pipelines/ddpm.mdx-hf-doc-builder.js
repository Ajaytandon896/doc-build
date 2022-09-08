import{S as zt,i as Jt,s as Rt,e as r,k as l,w as W,t as f,M as Ft,c as i,d as t,m as d,a as o,x as V,h,b as n,G as a,g as p,y as Y,L as jt,q as K,o as Q,B as X,v as Bt}from"../../../chunks/vendor-hf-doc-builder.js";import{D as Ut}from"../../../chunks/Docstring-hf-doc-builder.js";import{I as Se}from"../../../chunks/IconCopyLink-hf-doc-builder.js";function Wt(ht){let u,ue,m,P,Z,M,Ne,ee,Oe,me,v,y,te,x,Le,ae,qe,ve,T,I,Ce,He,ge,H,Ge,be,G,Ue,_e,w,ze,k,Je,Re,De,g,$,re,S,Fe,ie,je,Pe,E,oe,b,ne,Be,We,se,Ve,Ye,U,Ke,Qe,le,_,de,N,Xe,Ze,fe,he,et,tt,z,at,ye,D,A,pe,O,rt,ce,it,we,c,L,ot,q,nt,J,st,lt,dt,R,C,$e;return M=new Se({}),x=new Se({}),S=new Se({}),O=new Se({}),L=new Ut({props:{name:"class diffusers.DDPMPipeline",anchor:"diffusers.DDPMPipeline",parameters:[{name:"unet",val:""},{name:"scheduler",val:""}],parametersDescription:[{anchor:"diffusers.DDPMPipeline.unet",description:"<strong>unet</strong> (<code>UNet2DModel</code>) &#x2014; U-Net architecture to denoise the encoded image.",name:"unet"},{anchor:"diffusers.DDPMPipeline.scheduler",description:`<strong>scheduler</strong> (<a href="/docs/diffusers/main/en/api/schedulers#diffusers.SchedulerMixin">SchedulerMixin</a>) &#x2014;
A scheduler to be used in combination with <code>unet</code> to denoise the encoded image. Can be one of
<a href="/docs/diffusers/main/en/api/schedulers#diffusers.DDPMScheduler">DDPMScheduler</a>, or <a href="/docs/diffusers/main/en/api/schedulers#diffusers.DDIMScheduler">DDIMScheduler</a>.`,name:"scheduler"}],source:"https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/ddpm/pipeline_ddpm.py#L25"}}),C=new Ut({props:{name:"__call__",anchor:"diffusers.DDPMPipeline.__call__",parameters:[{name:"batch_size",val:": int = 1"},{name:"generator",val:": typing.Optional[torch._C.Generator] = None"},{name:"output_type",val:": typing.Optional[str] = 'pil'"},{name:"return_dict",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"diffusers.DDPMPipeline.__call__.batch_size",description:`<strong>batch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of images to generate.`,name:"batch_size"},{anchor:"diffusers.DDPMPipeline.__call__.generator",description:`<strong>generator</strong> (<code>torch.Generator</code>, <em>optional</em>) &#x2014;
A <a href="https://pytorch.org/docs/stable/generated/torch.Generator.html" rel="nofollow">torch generator</a> to make generation
deterministic.`,name:"generator"},{anchor:"diffusers.DDPMPipeline.__call__.output_type",description:`<strong>output_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;pil&quot;</code>) &#x2014;
The output format of the generate image. Choose between
<a href="https://pillow.readthedocs.io/en/stable/" rel="nofollow">PIL</a>: <em>PIL.Image.Image</em> or <em>nd.array</em>.`,name:"output_type"},{anchor:"diffusers.DDPMPipeline.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to return a [<em>~pipeline_utils.ImagePipelineOutput</em>] instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/ddpm/pipeline_ddpm.py#L42"}}),{c(){u=r("meta"),ue=l(),m=r("h1"),P=r("a"),Z=r("span"),W(M.$$.fragment),Ne=l(),ee=r("span"),Oe=f("DDPM"),me=l(),v=r("h2"),y=r("a"),te=r("span"),W(x.$$.fragment),Le=l(),ae=r("span"),qe=f("Overview"),ve=l(),T=r("p"),I=r("a"),Ce=f("Denoising Diffusion Probabilistic Models"),He=f(`
(DDPM) by Jonathan Ho, Ajay Jain and Pieter Abbeel proposes the diffusion based model of the same name, but in the context of the \u{1F917} Diffusers library, DDPM refers to the discrete denoising scheduler from the paper as well as the pipeline.`),ge=l(),H=r("p"),Ge=f("The abstract of the paper is the following:"),be=l(),G=r("p"),Ue=f("We present high quality image synthesis results using diffusion probabilistic models, a class of latent variable models inspired by considerations from nonequilibrium thermodynamics. Our best results are obtained by training on a weighted variational bound designed according to a novel connection between diffusion probabilistic models and denoising score matching with Langevin dynamics, and our models naturally admit a progressive lossy decompression scheme that can be interpreted as a generalization of autoregressive decoding. On the unconditional CIFAR10 dataset, we obtain an Inception score of 9.46 and a state-of-the-art FID score of 3.17. On 256x256 LSUN, we obtain sample quality similar to ProgressiveGAN."),_e=l(),w=r("p"),ze=f("The original codebase of this paper can be found "),k=r("a"),Je=f("here"),Re=f("."),De=l(),g=r("h2"),$=r("a"),re=r("span"),W(S.$$.fragment),Fe=l(),ie=r("span"),je=f("Available Pipelines:"),Pe=l(),E=r("table"),oe=r("thead"),b=r("tr"),ne=r("th"),Be=f("Pipeline"),We=l(),se=r("th"),Ve=f("Tasks"),Ye=l(),U=r("th"),Ke=f("Colab"),Qe=l(),le=r("tbody"),_=r("tr"),de=r("td"),N=r("a"),Xe=f("pipeline_ddpm.py"),Ze=l(),fe=r("td"),he=r("em"),et=f("Unconditional Image Generation"),tt=l(),z=r("td"),at=f("-"),ye=l(),D=r("h2"),A=r("a"),pe=r("span"),W(O.$$.fragment),rt=l(),ce=r("span"),it=f("API"),we=l(),c=r("div"),W(L.$$.fragment),ot=l(),q=r("p"),nt=f("This model inherits from "),J=r("a"),st=f("DiffusionPipeline"),lt=f(`. Check the superclass documentation for the generic methods the
library implements for all the pipelines (such as downloading or saving, running on a particular device, etc.)`),dt=l(),R=r("div"),W(C.$$.fragment),this.h()},l(e){const s=Ft('[data-svelte="svelte-1phssyn"]',document.head);u=i(s,"META",{name:!0,content:!0}),s.forEach(t),ue=d(e),m=i(e,"H1",{class:!0});var Ee=o(m);P=i(Ee,"A",{id:!0,class:!0,href:!0});var pt=o(P);Z=i(pt,"SPAN",{});var ct=o(Z);V(M.$$.fragment,ct),ct.forEach(t),pt.forEach(t),Ne=d(Ee),ee=i(Ee,"SPAN",{});var ut=o(ee);Oe=h(ut,"DDPM"),ut.forEach(t),Ee.forEach(t),me=d(e),v=i(e,"H2",{class:!0});var Ae=o(v);y=i(Ae,"A",{id:!0,class:!0,href:!0});var mt=o(y);te=i(mt,"SPAN",{});var vt=o(te);V(x.$$.fragment,vt),vt.forEach(t),mt.forEach(t),Le=d(Ae),ae=i(Ae,"SPAN",{});var gt=o(ae);qe=h(gt,"Overview"),gt.forEach(t),Ae.forEach(t),ve=d(e),T=i(e,"P",{});var ft=o(T);I=i(ft,"A",{href:!0,rel:!0});var bt=o(I);Ce=h(bt,"Denoising Diffusion Probabilistic Models"),bt.forEach(t),He=h(ft,`
(DDPM) by Jonathan Ho, Ajay Jain and Pieter Abbeel proposes the diffusion based model of the same name, but in the context of the \u{1F917} Diffusers library, DDPM refers to the discrete denoising scheduler from the paper as well as the pipeline.`),ft.forEach(t),ge=d(e),H=i(e,"P",{});var _t=o(H);Ge=h(_t,"The abstract of the paper is the following:"),_t.forEach(t),be=d(e),G=i(e,"P",{});var Dt=o(G);Ue=h(Dt,"We present high quality image synthesis results using diffusion probabilistic models, a class of latent variable models inspired by considerations from nonequilibrium thermodynamics. Our best results are obtained by training on a weighted variational bound designed according to a novel connection between diffusion probabilistic models and denoising score matching with Langevin dynamics, and our models naturally admit a progressive lossy decompression scheme that can be interpreted as a generalization of autoregressive decoding. On the unconditional CIFAR10 dataset, we obtain an Inception score of 9.46 and a state-of-the-art FID score of 3.17. On 256x256 LSUN, we obtain sample quality similar to ProgressiveGAN."),Dt.forEach(t),_e=d(e),w=i(e,"P",{});var Me=o(w);ze=h(Me,"The original codebase of this paper can be found "),k=i(Me,"A",{href:!0,rel:!0});var Pt=o(k);Je=h(Pt,"here"),Pt.forEach(t),Re=h(Me,"."),Me.forEach(t),De=d(e),g=i(e,"H2",{class:!0});var xe=o(g);$=i(xe,"A",{id:!0,class:!0,href:!0});var yt=o($);re=i(yt,"SPAN",{});var wt=o(re);V(S.$$.fragment,wt),wt.forEach(t),yt.forEach(t),Fe=d(xe),ie=i(xe,"SPAN",{});var $t=o(ie);je=h($t,"Available Pipelines:"),$t.forEach(t),xe.forEach(t),Pe=d(e),E=i(e,"TABLE",{});var Te=o(E);oe=i(Te,"THEAD",{});var Et=o(oe);b=i(Et,"TR",{});var F=o(b);ne=i(F,"TH",{});var At=o(ne);Be=h(At,"Pipeline"),At.forEach(t),We=d(F),se=i(F,"TH",{});var Mt=o(se);Ve=h(Mt,"Tasks"),Mt.forEach(t),Ye=d(F),U=i(F,"TH",{align:!0});var xt=o(U);Ke=h(xt,"Colab"),xt.forEach(t),F.forEach(t),Et.forEach(t),Qe=d(Te),le=i(Te,"TBODY",{});var Tt=o(le);_=i(Tt,"TR",{});var j=o(_);de=i(j,"TD",{});var It=o(de);N=i(It,"A",{href:!0,rel:!0});var kt=o(N);Xe=h(kt,"pipeline_ddpm.py"),kt.forEach(t),It.forEach(t),Ze=d(j),fe=i(j,"TD",{});var St=o(fe);he=i(St,"EM",{});var Nt=o(he);et=h(Nt,"Unconditional Image Generation"),Nt.forEach(t),St.forEach(t),tt=d(j),z=i(j,"TD",{align:!0});var Ot=o(z);at=h(Ot,"-"),Ot.forEach(t),j.forEach(t),Tt.forEach(t),Te.forEach(t),ye=d(e),D=i(e,"H2",{class:!0});var Ie=o(D);A=i(Ie,"A",{id:!0,class:!0,href:!0});var Lt=o(A);pe=i(Lt,"SPAN",{});var qt=o(pe);V(O.$$.fragment,qt),qt.forEach(t),Lt.forEach(t),rt=d(Ie),ce=i(Ie,"SPAN",{});var Ct=o(ce);it=h(Ct,"API"),Ct.forEach(t),Ie.forEach(t),we=d(e),c=i(e,"DIV",{class:!0});var B=o(c);V(L.$$.fragment,B),ot=d(B),q=i(B,"P",{});var ke=o(q);nt=h(ke,"This model inherits from "),J=i(ke,"A",{href:!0});var Ht=o(J);st=h(Ht,"DiffusionPipeline"),Ht.forEach(t),lt=h(ke,`. Check the superclass documentation for the generic methods the
library implements for all the pipelines (such as downloading or saving, running on a particular device, etc.)`),ke.forEach(t),dt=d(B),R=i(B,"DIV",{class:!0});var Gt=o(R);V(C.$$.fragment,Gt),Gt.forEach(t),B.forEach(t),this.h()},h(){n(u,"name","hf:doc:metadata"),n(u,"content",JSON.stringify(Vt)),n(P,"id","ddpm"),n(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(P,"href","#ddpm"),n(m,"class","relative group"),n(y,"id","overview"),n(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(y,"href","#overview"),n(v,"class","relative group"),n(I,"href","https://arxiv.org/abs/2006.11239"),n(I,"rel","nofollow"),n(k,"href","https://github.com/hojonathanho/diffusion"),n(k,"rel","nofollow"),n($,"id","available-pipelines"),n($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n($,"href","#available-pipelines"),n(g,"class","relative group"),n(U,"align","center"),n(N,"href","https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/ddpm/pipeline_ddpm.py"),n(N,"rel","nofollow"),n(z,"align","center"),n(A,"id","diffusers.DDPMPipeline"),n(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(A,"href","#diffusers.DDPMPipeline"),n(D,"class","relative group"),n(J,"href","/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.DiffusionPipeline"),n(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),n(c,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,s){a(document.head,u),p(e,ue,s),p(e,m,s),a(m,P),a(P,Z),Y(M,Z,null),a(m,Ne),a(m,ee),a(ee,Oe),p(e,me,s),p(e,v,s),a(v,y),a(y,te),Y(x,te,null),a(v,Le),a(v,ae),a(ae,qe),p(e,ve,s),p(e,T,s),a(T,I),a(I,Ce),a(T,He),p(e,ge,s),p(e,H,s),a(H,Ge),p(e,be,s),p(e,G,s),a(G,Ue),p(e,_e,s),p(e,w,s),a(w,ze),a(w,k),a(k,Je),a(w,Re),p(e,De,s),p(e,g,s),a(g,$),a($,re),Y(S,re,null),a(g,Fe),a(g,ie),a(ie,je),p(e,Pe,s),p(e,E,s),a(E,oe),a(oe,b),a(b,ne),a(ne,Be),a(b,We),a(b,se),a(se,Ve),a(b,Ye),a(b,U),a(U,Ke),a(E,Qe),a(E,le),a(le,_),a(_,de),a(de,N),a(N,Xe),a(_,Ze),a(_,fe),a(fe,he),a(he,et),a(_,tt),a(_,z),a(z,at),p(e,ye,s),p(e,D,s),a(D,A),a(A,pe),Y(O,pe,null),a(D,rt),a(D,ce),a(ce,it),p(e,we,s),p(e,c,s),Y(L,c,null),a(c,ot),a(c,q),a(q,nt),a(q,J),a(J,st),a(q,lt),a(c,dt),a(c,R),Y(C,R,null),$e=!0},p:jt,i(e){$e||(K(M.$$.fragment,e),K(x.$$.fragment,e),K(S.$$.fragment,e),K(O.$$.fragment,e),K(L.$$.fragment,e),K(C.$$.fragment,e),$e=!0)},o(e){Q(M.$$.fragment,e),Q(x.$$.fragment,e),Q(S.$$.fragment,e),Q(O.$$.fragment,e),Q(L.$$.fragment,e),Q(C.$$.fragment,e),$e=!1},d(e){t(u),e&&t(ue),e&&t(m),X(M),e&&t(me),e&&t(v),X(x),e&&t(ve),e&&t(T),e&&t(ge),e&&t(H),e&&t(be),e&&t(G),e&&t(_e),e&&t(w),e&&t(De),e&&t(g),X(S),e&&t(Pe),e&&t(E),e&&t(ye),e&&t(D),X(O),e&&t(we),e&&t(c),X(L),X(C)}}}const Vt={local:"ddpm",sections:[{local:"overview",title:"Overview"},{local:"available-pipelines",title:"Available Pipelines:"},{local:"diffusers.DDPMPipeline",title:"API"}],title:"DDPM"};function Yt(ht){return Bt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Zt extends zt{constructor(u){super();Jt(this,u,Yt,Wt,Rt,{})}}export{Zt as default,Vt as metadata};
