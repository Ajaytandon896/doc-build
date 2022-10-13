import{S as tt,i as nt,s as it,e as n,k as u,w as H,t as r,M as rt,c as i,d as o,m as g,a as s,x as R,h as a,b as f,G as e,g as C,y as j,q as K,o as Q,B as X,v as at}from"../../chunks/vendor-hf-doc-builder.js";import{T as et}from"../../chunks/Tip-hf-doc-builder.js";import{D as Ao}from"../../chunks/Docstring-hf-doc-builder.js";import{I as ot}from"../../chunks/IconCopyLink-hf-doc-builder.js";function st(Y){let l,w,d,_,x,c,v,y;return{c(){l=n("p"),w=r("It is required to be logged in ("),d=n("code"),_=r("huggingface-cli login"),x=r(") when you want to use private or "),c=n("a"),v=r(`gated
models`),y=r("."),this.h()},l(A){l=i(A,"P",{});var $=s(l);w=a($,"It is required to be logged in ("),d=i($,"CODE",{});var p=s(d);_=a(p,"huggingface-cli login"),p.forEach(o),x=a($,") when you want to use private or "),c=i($,"A",{href:!0,rel:!0});var Z=s(c);v=a(Z,`gated
models`),Z.forEach(o),y=a($,"."),$.forEach(o),this.h()},h(){f(c,"href","https://huggingface.co/docs/hub/models-gated#gated-models"),f(c,"rel","nofollow")},m(A,$){C(A,l,$),e(l,w),e(l,d),e(d,_),e(l,x),e(l,c),e(c,v),e(l,y)},d(A){A&&o(l)}}}function lt(Y){let l,w,d,_,x;return{c(){l=n("p"),w=r("Activate the special "),d=n("a"),_=r("\u201Coffline-mode\u201D"),x=r(` to
use this method in a firewalled environment.`),this.h()},l(c){l=i(c,"P",{});var v=s(l);w=a(v,"Activate the special "),d=i(v,"A",{href:!0,rel:!0});var y=s(d);_=a(y,"\u201Coffline-mode\u201D"),y.forEach(o),x=a(v,` to
use this method in a firewalled environment.`),v.forEach(o),this.h()},h(){f(d,"href","https://huggingface.co/transformers/installation.html#offline-mode"),f(d,"rel","nofollow")},m(c,v){C(c,l,v),e(l,w),e(l,d),e(d,_),e(l,x)},d(c){c&&o(l)}}}function ft(Y){let l,w,d,_,x,c,v,y,A,$,p,Z,ee,Oe,Te,oe,Ne,qe,te,Fe,ze,ce,Je,Ue,Me,ne,Ve,ke,P,I,he,F,We,ue,Be,Ae,h,z,Ge,S,He,ge,Re,je,ie,Ke,Qe,Xe,J,me,re,Ye,Ze,pe,ae,eo,oo,_e,to,no,U,M,ve,io,ro,be,ao,so,se,lo,fo,co,L,xe,ho,uo,$e,go,mo,po,E,V,_o,we,vo,bo,O,xo,T,$o,N,W,wo,D,yo,ye,Eo,Co,le,Mo,ko,Pe;return c=new ot({}),F=new ot({}),z=new Ao({props:{name:"class diffusers.ConfigMixin",anchor:"diffusers.ConfigMixin",parameters:[],source:"https://github.com/huggingface/diffusers/blob/v0.5.1/src/diffusers/configuration_utils.py#L39"}}),V=new Ao({props:{name:"from_config",anchor:"diffusers.ConfigMixin.from_config",parameters:[{name:"pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike]"},{name:"return_unused_kwargs",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"diffusers.ConfigMixin.from_config.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>, <em>optional</em>) &#x2014;
Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a model repo on huggingface.co. Valid model ids should have an
organization name, like <code>google/ddpm-celebahq-256</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using <a href="/docs/diffusers/v0.5.1/en/api/configuration#diffusers.ConfigMixin.save_config">save_config()</a>, e.g.,
<code>./my_model_directory/</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"},{anchor:"diffusers.ConfigMixin.from_config.cache_dir",description:`<strong>cache_dir</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Path to a directory in which a downloaded pretrained model configuration should be cached if the
standard cache should not be used.`,name:"cache_dir"},{anchor:"diffusers.ConfigMixin.from_config.ignore_mismatched_sizes",description:`<strong>ignore_mismatched_sizes</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to raise an error if some of the weights from the checkpoint do not have the same size
as the weights of the model (if for instance, you are instantiating a model with 10 labels from a
checkpoint with 3 labels).`,name:"ignore_mismatched_sizes"},{anchor:"diffusers.ConfigMixin.from_config.force_download",description:`<strong>force_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to force the (re-)download of the model weights and configuration files, overriding the
cached versions if they exist.`,name:"force_download"},{anchor:"diffusers.ConfigMixin.from_config.resume_download",description:`<strong>resume_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to delete incompletely received files. Will attempt to resume the download if such a
file exists.`,name:"resume_download"},{anchor:"diffusers.ConfigMixin.from_config.proxies",description:`<strong>proxies</strong> (<code>Dict[str, str]</code>, <em>optional</em>) &#x2014;
A dictionary of proxy servers to use by protocol or endpoint, e.g., <code>{&apos;http&apos;: &apos;foo.bar:3128&apos;, &apos;http://hostname&apos;: &apos;foo.bar:4012&apos;}</code>. The proxies are used on each request.`,name:"proxies"},{anchor:"diffusers.ConfigMixin.from_config.output_loading_info(bool,",description:`<strong>output_loading_info(<code>bool</code>,</strong> <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to also return a dictionary containing missing keys, unexpected keys and error messages.`,name:"output_loading_info(bool,"},{anchor:"diffusers.ConfigMixin.from_config.local_files_only(bool,",description:`<strong>local_files_only(<code>bool</code>,</strong> <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to only look at local files (i.e., do not try to download the model).`,name:"local_files_only(bool,"},{anchor:"diffusers.ConfigMixin.from_config.use_auth_token",description:`<strong>use_auth_token</strong> (<code>str</code> or <em>bool</em>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote files. If <code>True</code>, will use the token generated
when running <code>transformers-cli login</code> (stored in <code>~/.huggingface</code>).`,name:"use_auth_token"},{anchor:"diffusers.ConfigMixin.from_config.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;main&quot;</code>) &#x2014;
The specific model version to use. It can be a branch name, a tag name, or a commit id, since we use a
git-based system for storing models and other artifacts on huggingface.co, so <code>revision</code> can be any
identifier allowed by git.`,name:"revision"},{anchor:"diffusers.ConfigMixin.from_config.subfolder",description:`<strong>subfolder</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&quot;</code>) &#x2014;
In case the relevant files are located inside a subfolder of the model repo (either remote in
huggingface.co or downloaded locally), you can specify the folder name here.`,name:"subfolder"}],source:"https://github.com/huggingface/diffusers/blob/v0.5.1/src/diffusers/configuration_utils.py#L101"}}),O=new et({props:{$$slots:{default:[st]},$$scope:{ctx:Y}}}),T=new et({props:{$$slots:{default:[lt]},$$scope:{ctx:Y}}}),W=new Ao({props:{name:"save_config",anchor:"diffusers.ConfigMixin.save_config",parameters:[{name:"save_directory",val:": typing.Union[str, os.PathLike]"},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"diffusers.ConfigMixin.save_config.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the configuration JSON file will be saved (will be created if it does not exist).`,name:"save_directory"}],source:"https://github.com/huggingface/diffusers/blob/v0.5.1/src/diffusers/configuration_utils.py#L81"}}),{c(){l=n("meta"),w=u(),d=n("h1"),_=n("a"),x=n("span"),H(c.$$.fragment),v=u(),y=n("span"),A=r("Configuration"),$=u(),p=n("p"),Z=r("In Diffusers, schedulers of type "),ee=n("a"),Oe=r("schedulers.scheduling_utils.SchedulerMixin"),Te=r(", and models of type "),oe=n("a"),Ne=r("ModelMixin"),qe=r(" inherit from "),te=n("a"),Fe=r("ConfigMixin"),ze=r(` which conveniently takes care of storing all parameters that are
passed to the respective `),ce=n("code"),Je=r("__init__"),Ue=r(" methods in a JSON-configuration file."),Me=u(),ne=n("p"),Ve=r("TODO(PVP) - add example and better info here"),ke=u(),P=n("h2"),I=n("a"),he=n("span"),H(F.$$.fragment),We=u(),ue=n("span"),Be=r("ConfigMixin"),Ae=u(),h=n("div"),H(z.$$.fragment),Ge=u(),S=n("p"),He=r("Base class for all configuration classes. Stores all configuration parameters under "),ge=n("code"),Re=r("self.config"),je=r(` Also handles all
methods for loading/downloading/saving classes inheriting from `),ie=n("a"),Ke=r("ConfigMixin"),Qe=r(" with"),Xe=u(),J=n("ul"),me=n("li"),re=n("a"),Ye=r("from_config()"),Ze=u(),pe=n("li"),ae=n("a"),eo=r("save_config()"),oo=u(),_e=n("p"),to=r("Class attributes:"),no=u(),U=n("ul"),M=n("li"),ve=n("strong"),io=r("config_name"),ro=r(" ("),be=n("code"),ao=r("str"),so=r(`) \u2014 A filename under which the config should stored when calling
`),se=n("a"),lo=r("save_config()"),fo=r(" (should be overridden by parent class)."),co=u(),L=n("li"),xe=n("strong"),ho=r("ignore_for_config"),uo=r(" ("),$e=n("code"),go=r("List[str]"),mo=r(`) \u2014 A list of attributes that should not be saved in the config (should be
overridden by parent class).`),po=u(),E=n("div"),H(V.$$.fragment),_o=u(),we=n("p"),vo=r("Instantiate a Python class from a pre-defined JSON-file."),bo=u(),H(O.$$.fragment),xo=u(),H(T.$$.fragment),$o=u(),N=n("div"),H(W.$$.fragment),wo=u(),D=n("p"),yo=r("Save a configuration object to the directory "),ye=n("code"),Eo=r("save_directory"),Co=r(`, so that it can be re-loaded using the
`),le=n("a"),Mo=r("from_config()"),ko=r(" class method."),this.h()},l(t){const m=rt('[data-svelte="svelte-1phssyn"]',document.head);l=i(m,"META",{name:!0,content:!0}),m.forEach(o),w=g(t),d=i(t,"H1",{class:!0});var B=s(d);_=i(B,"A",{id:!0,class:!0,href:!0});var Ee=s(_);x=i(Ee,"SPAN",{});var Po=s(x);R(c.$$.fragment,Po),Po.forEach(o),Ee.forEach(o),v=g(B),y=i(B,"SPAN",{});var So=s(y);A=a(So,"Configuration"),So.forEach(o),B.forEach(o),$=g(t),p=i(t,"P",{});var k=s(p);Z=a(k,"In Diffusers, schedulers of type "),ee=i(k,"A",{href:!0});var Do=s(ee);Oe=a(Do,"schedulers.scheduling_utils.SchedulerMixin"),Do.forEach(o),Te=a(k,", and models of type "),oe=i(k,"A",{href:!0});var Io=s(oe);Ne=a(Io,"ModelMixin"),Io.forEach(o),qe=a(k," inherit from "),te=i(k,"A",{href:!0});var Lo=s(te);Fe=a(Lo,"ConfigMixin"),Lo.forEach(o),ze=a(k,` which conveniently takes care of storing all parameters that are
passed to the respective `),ce=i(k,"CODE",{});var Oo=s(ce);Je=a(Oo,"__init__"),Oo.forEach(o),Ue=a(k," methods in a JSON-configuration file."),k.forEach(o),Me=g(t),ne=i(t,"P",{});var To=s(ne);Ve=a(To,"TODO(PVP) - add example and better info here"),To.forEach(o),ke=g(t),P=i(t,"H2",{class:!0});var Se=s(P);I=i(Se,"A",{id:!0,class:!0,href:!0});var No=s(I);he=i(No,"SPAN",{});var qo=s(he);R(F.$$.fragment,qo),qo.forEach(o),No.forEach(o),We=g(Se),ue=i(Se,"SPAN",{});var Fo=s(ue);Be=a(Fo,"ConfigMixin"),Fo.forEach(o),Se.forEach(o),Ae=g(t),h=i(t,"DIV",{class:!0});var b=s(h);R(z.$$.fragment,b),Ge=g(b),S=i(b,"P",{});var fe=s(S);He=a(fe,"Base class for all configuration classes. Stores all configuration parameters under "),ge=i(fe,"CODE",{});var zo=s(ge);Re=a(zo,"self.config"),zo.forEach(o),je=a(fe,` Also handles all
methods for loading/downloading/saving classes inheriting from `),ie=i(fe,"A",{href:!0});var Jo=s(ie);Ke=a(Jo,"ConfigMixin"),Jo.forEach(o),Qe=a(fe," with"),fe.forEach(o),Xe=g(b),J=i(b,"UL",{});var De=s(J);me=i(De,"LI",{});var Uo=s(me);re=i(Uo,"A",{href:!0});var Vo=s(re);Ye=a(Vo,"from_config()"),Vo.forEach(o),Uo.forEach(o),Ze=g(De),pe=i(De,"LI",{});var Wo=s(pe);ae=i(Wo,"A",{href:!0});var Bo=s(ae);eo=a(Bo,"save_config()"),Bo.forEach(o),Wo.forEach(o),De.forEach(o),oo=g(b),_e=i(b,"P",{});var Go=s(_e);to=a(Go,"Class attributes:"),Go.forEach(o),no=g(b),U=i(b,"UL",{});var Ie=s(U);M=i(Ie,"LI",{});var G=s(M);ve=i(G,"STRONG",{});var Ho=s(ve);io=a(Ho,"config_name"),Ho.forEach(o),ro=a(G," ("),be=i(G,"CODE",{});var Ro=s(be);ao=a(Ro,"str"),Ro.forEach(o),so=a(G,`) \u2014 A filename under which the config should stored when calling
`),se=i(G,"A",{href:!0});var jo=s(se);lo=a(jo,"save_config()"),jo.forEach(o),fo=a(G," (should be overridden by parent class)."),G.forEach(o),co=g(Ie),L=i(Ie,"LI",{});var Ce=s(L);xe=i(Ce,"STRONG",{});var Ko=s(xe);ho=a(Ko,"ignore_for_config"),Ko.forEach(o),uo=a(Ce," ("),$e=i(Ce,"CODE",{});var Qo=s($e);go=a(Qo,"List[str]"),Qo.forEach(o),mo=a(Ce,`) \u2014 A list of attributes that should not be saved in the config (should be
overridden by parent class).`),Ce.forEach(o),Ie.forEach(o),po=g(b),E=i(b,"DIV",{class:!0});var q=s(E);R(V.$$.fragment,q),_o=g(q),we=i(q,"P",{});var Xo=s(we);vo=a(Xo,"Instantiate a Python class from a pre-defined JSON-file."),Xo.forEach(o),bo=g(q),R(O.$$.fragment,q),xo=g(q),R(T.$$.fragment,q),q.forEach(o),$o=g(b),N=i(b,"DIV",{class:!0});var Le=s(N);R(W.$$.fragment,Le),wo=g(Le),D=i(Le,"P",{});var de=s(D);yo=a(de,"Save a configuration object to the directory "),ye=i(de,"CODE",{});var Yo=s(ye);Eo=a(Yo,"save_directory"),Yo.forEach(o),Co=a(de,`, so that it can be re-loaded using the
`),le=i(de,"A",{href:!0});var Zo=s(le);Mo=a(Zo,"from_config()"),Zo.forEach(o),ko=a(de," class method."),de.forEach(o),Le.forEach(o),b.forEach(o),this.h()},h(){f(l,"name","hf:doc:metadata"),f(l,"content",JSON.stringify(dt)),f(_,"id","configuration"),f(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(_,"href","#configuration"),f(d,"class","relative group"),f(ee,"href","/docs/diffusers/v0.5.1/en/api/schedulers#diffusers.SchedulerMixin"),f(oe,"href","/docs/diffusers/v0.5.1/en/api/models#diffusers.ModelMixin"),f(te,"href","/docs/diffusers/v0.5.1/en/api/configuration#diffusers.ConfigMixin"),f(I,"id","diffusers.ConfigMixin"),f(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(I,"href","#diffusers.ConfigMixin"),f(P,"class","relative group"),f(ie,"href","/docs/diffusers/v0.5.1/en/api/configuration#diffusers.ConfigMixin"),f(re,"href","/docs/diffusers/v0.5.1/en/api/configuration#diffusers.ConfigMixin.from_config"),f(ae,"href","/docs/diffusers/v0.5.1/en/api/configuration#diffusers.ConfigMixin.save_config"),f(se,"href","/docs/diffusers/v0.5.1/en/api/configuration#diffusers.ConfigMixin.save_config"),f(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(le,"href","/docs/diffusers/v0.5.1/en/api/configuration#diffusers.ConfigMixin.from_config"),f(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(h,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,m){e(document.head,l),C(t,w,m),C(t,d,m),e(d,_),e(_,x),j(c,x,null),e(d,v),e(d,y),e(y,A),C(t,$,m),C(t,p,m),e(p,Z),e(p,ee),e(ee,Oe),e(p,Te),e(p,oe),e(oe,Ne),e(p,qe),e(p,te),e(te,Fe),e(p,ze),e(p,ce),e(ce,Je),e(p,Ue),C(t,Me,m),C(t,ne,m),e(ne,Ve),C(t,ke,m),C(t,P,m),e(P,I),e(I,he),j(F,he,null),e(P,We),e(P,ue),e(ue,Be),C(t,Ae,m),C(t,h,m),j(z,h,null),e(h,Ge),e(h,S),e(S,He),e(S,ge),e(ge,Re),e(S,je),e(S,ie),e(ie,Ke),e(S,Qe),e(h,Xe),e(h,J),e(J,me),e(me,re),e(re,Ye),e(J,Ze),e(J,pe),e(pe,ae),e(ae,eo),e(h,oo),e(h,_e),e(_e,to),e(h,no),e(h,U),e(U,M),e(M,ve),e(ve,io),e(M,ro),e(M,be),e(be,ao),e(M,so),e(M,se),e(se,lo),e(M,fo),e(U,co),e(U,L),e(L,xe),e(xe,ho),e(L,uo),e(L,$e),e($e,go),e(L,mo),e(h,po),e(h,E),j(V,E,null),e(E,_o),e(E,we),e(we,vo),e(E,bo),j(O,E,null),e(E,xo),j(T,E,null),e(h,$o),e(h,N),j(W,N,null),e(N,wo),e(N,D),e(D,yo),e(D,ye),e(ye,Eo),e(D,Co),e(D,le),e(le,Mo),e(D,ko),Pe=!0},p(t,[m]){const B={};m&2&&(B.$$scope={dirty:m,ctx:t}),O.$set(B);const Ee={};m&2&&(Ee.$$scope={dirty:m,ctx:t}),T.$set(Ee)},i(t){Pe||(K(c.$$.fragment,t),K(F.$$.fragment,t),K(z.$$.fragment,t),K(V.$$.fragment,t),K(O.$$.fragment,t),K(T.$$.fragment,t),K(W.$$.fragment,t),Pe=!0)},o(t){Q(c.$$.fragment,t),Q(F.$$.fragment,t),Q(z.$$.fragment,t),Q(V.$$.fragment,t),Q(O.$$.fragment,t),Q(T.$$.fragment,t),Q(W.$$.fragment,t),Pe=!1},d(t){o(l),t&&o(w),t&&o(d),X(c),t&&o($),t&&o(p),t&&o(Me),t&&o(ne),t&&o(ke),t&&o(P),X(F),t&&o(Ae),t&&o(h),X(z),X(V),X(O),X(T),X(W)}}}const dt={local:"configuration",sections:[{local:"diffusers.ConfigMixin",title:"ConfigMixin"}],title:"Configuration"};function ct(Y){return at(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class pt extends tt{constructor(l){super();nt(this,l,ct,ft,it,{})}}export{pt as default,dt as metadata};
