import{S as ro,i as no,s as oo,e as n,k as i,w as c,t as f,M as ao,c as o,d as r,m as l,a,x as h,h as m,b as s,G as t,g as d,y as g,L as so,q as u,o as _,B as v,v as io}from"../../chunks/vendor-hf-doc-builder.js";import{D as b}from"../../chunks/Docstring-hf-doc-builder.js";import{I as Ee}from"../../chunks/IconCopyLink-hf-doc-builder.js";function lo(hn){let C,mt,P,D,Me,te,Jt,Ie,Kt,pt,A,Qt,We,Yt,Zt,dt,M,er,Ce,tr,rr,ct,k,I,Le,re,nr,Xe,or,ht,Pe,ar,gt,E,ke,sr,Ne,ir,lr,Te,fr,Se,mr,pr,Fe,dr,qe,cr,ut,N,W,Ve,ne,hr,ze,gr,_t,x,oe,ur,He,_r,vr,L,ae,xr,Ge,$r,br,X,se,yr,Be,wr,Or,V,ie,Er,Ue,Cr,Pr,z,le,kr,je,Nr,vt,T,H,Re,fe,Tr,Je,Sr,xt,O,me,Fr,G,pe,qr,Ke,Dr,Ar,B,de,Mr,ce,Ir,Qe,Wr,Lr,$t,S,U,Ye,he,Xr,Ze,Vr,bt,ge,ue,yt,F,j,et,_e,zr,tt,Hr,wt,R,Gr,rt,Br,Ur,Ot,q,J,nt,ve,jr,ot,Rr,Et,$,xe,Jr,K,$e,Kr,at,Qr,Yr,Q,be,Zr,st,en,tn,Y,ye,rn,it,nn,on,Z,we,an,lt,sn,ln,ee,Oe,fn,ft,mn,Ct;return te=new Ee({}),re=new Ee({}),ne=new Ee({}),oe=new b({props:{name:"class transformers.onnx.OnnxConfig",anchor:"transformers.onnx.OnnxConfig",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"},{name:"patching_specs",val:": typing.List[transformers.onnx.config.PatchingSpec] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/onnx/config.py#L67"}}),ae=new b({props:{name:"flatten_output_collection_property",anchor:"transformers.onnx.OnnxConfig.flatten_output_collection_property",parameters:[{name:"name",val:": str"},{name:"field",val:": typing.Iterable[typing.Any]"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/onnx/config.py#L361",returnDescription:`
<p>Outputs with flattened structure and key mapping this new structure.</p>
`,returnType:`
<p>(Dict[str, Any])</p>
`}}),se=new b({props:{name:"from_model_config",anchor:"transformers.onnx.OnnxConfig.from_model_config",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/onnx/config.py#L123",returnDescription:`
<p>OnnxConfig for this model</p>
`}}),ie=new b({props:{name:"generate_dummy_inputs",anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs",parameters:[{name:"preprocessor",val:": typing.Union[ForwardRef('PreTrainedTokenizerBase'), ForwardRef('FeatureExtractionMixin')]"},{name:"batch_size",val:": int = -1"},{name:"seq_length",val:": int = -1"},{name:"num_choices",val:": int = -1"},{name:"is_pair",val:": bool = False"},{name:"framework",val:": typing.Optional[transformers.utils.generic.TensorType] = None"},{name:"num_channels",val:": int = 3"},{name:"image_width",val:": int = 40"},{name:"image_height",val:": int = 40"},{name:"tokenizer",val:": PreTrainedTokenizerBase = None"}],parametersDescription:[{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.batch_size",description:`<strong>batch_size</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The batch size to export the model for (-1 means dynamic axis).`,name:"batch_size"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.num_choices",description:`<strong>num_choices</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The number of candidate answers provided for multiple choice task (-1 means dynamic axis).`,name:"num_choices"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.seq_length",description:`<strong>seq_length</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The sequence length to export the model for (-1 means dynamic axis).`,name:"seq_length"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.is_pair",description:`<strong>is_pair</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Indicate if the input is a pair (sentence 1, sentence 2)`,name:"is_pair"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.framework",description:`<strong>framework</strong> (<code>TensorType</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The framework (PyTorch or TensorFlow) that the tokenizer will generate tensors for.`,name:"framework"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of channels of the generated images.`,name:"num_channels"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.image_width",description:`<strong>image_width</strong> (<code>int</code>, <em>optional</em>, defaults to 40) &#x2014;
The width of the generated images.`,name:"image_width"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.image_height",description:`<strong>image_height</strong> (<code>int</code>, <em>optional</em>, defaults to 40) &#x2014;
The height of the generated images.`,name:"image_height"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/onnx/config.py#L263",returnDescription:`
<p>Mapping[str, Tensor] holding the kwargs to provide to the model\u2019s forward function</p>
`}}),le=new b({props:{name:"use_external_data_format",anchor:"transformers.onnx.OnnxConfig.use_external_data_format",parameters:[{name:"num_parameters",val:": int"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/onnx/config.py#L237",returnDescription:`
<p>True if model.num_parameters() * size_of(float32) >= 2Gb False otherwise</p>
`}}),fe=new Ee({}),me=new b({props:{name:"class transformers.onnx.OnnxConfigWithPast",anchor:"transformers.onnx.OnnxConfigWithPast",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"},{name:"patching_specs",val:": typing.List[transformers.onnx.config.PatchingSpec] = None"},{name:"use_past",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/onnx/config.py#L380"}}),pe=new b({props:{name:"fill_with_past_key_values_",anchor:"transformers.onnx.OnnxConfigWithPast.fill_with_past_key_values_",parameters:[{name:"inputs_or_outputs",val:": typing.Mapping[str, typing.Mapping[int, str]]"},{name:"direction",val:": str"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/onnx/config.py#L488"}}),de=new b({props:{name:"with_past",anchor:"transformers.onnx.OnnxConfigWithPast.with_past",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/onnx/config.py#L391",returnDescription:`
<p>OnnxConfig with <code>.use_past = True</code></p>
`}}),he=new Ee({}),ue=new b({props:{name:"class transformers.onnx.OnnxSeq2SeqConfigWithPast",anchor:"transformers.onnx.OnnxSeq2SeqConfigWithPast",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"},{name:"patching_specs",val:": typing.List[transformers.onnx.config.PatchingSpec] = None"},{name:"use_past",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/onnx/config.py#L521"}}),_e=new Ee({}),ve=new Ee({}),xe=new b({props:{name:"class transformers.onnx.FeaturesManager",anchor:"transformers.onnx.FeaturesManager",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/onnx/features.py#L76"}}),$e=new b({props:{name:"check_supported_model_or_raise",anchor:"transformers.onnx.FeaturesManager.check_supported_model_or_raise",parameters:[{name:"model",val:": typing.Union[transformers.modeling_utils.PreTrainedModel, transformers.modeling_tf_utils.TFPreTrainedModel]"},{name:"feature",val:": str = 'default'"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/onnx/features.py#L534",returnDescription:`
<p>(str) The type of the model (OnnxConfig) The OnnxConfig instance holding the model export properties.</p>
`}}),be=new b({props:{name:"get_config",anchor:"transformers.onnx.FeaturesManager.get_config",parameters:[{name:"model_type",val:": str"},{name:"feature",val:": str"}],parametersDescription:[{anchor:"transformers.onnx.FeaturesManager.get_config.model_type",description:`<strong>model_type</strong> (<code>str</code>) &#x2014;
The model type to retrieve the config for.`,name:"model_type"},{anchor:"transformers.onnx.FeaturesManager.get_config.feature",description:`<strong>feature</strong> (<code>str</code>) &#x2014;
The feature to retrieve the config for.`,name:"feature"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/onnx/features.py#L559",returnDescription:`
<p>config for the combination</p>
`,returnType:`
<p><code>OnnxConfig</code></p>
`}}),ye=new b({props:{name:"get_model_class_for_feature",anchor:"transformers.onnx.FeaturesManager.get_model_class_for_feature",parameters:[{name:"feature",val:": str"},{name:"framework",val:": str = 'pt'"}],parametersDescription:[{anchor:"transformers.onnx.FeaturesManager.get_model_class_for_feature.feature",description:`<strong>feature</strong> (<code>str</code>) &#x2014;
The feature required.`,name:"feature"},{anchor:"transformers.onnx.FeaturesManager.get_model_class_for_feature.framework",description:`<strong>framework</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;pt&quot;</code>) &#x2014;
The framework to use for the export.`,name:"framework"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/onnx/features.py#L479",returnDescription:`
<p>The AutoModel class corresponding to the feature.</p>
`}}),we=new b({props:{name:"get_model_from_feature",anchor:"transformers.onnx.FeaturesManager.get_model_from_feature",parameters:[{name:"feature",val:": str"},{name:"model",val:": str"},{name:"framework",val:": str = 'pt'"},{name:"cache_dir",val:": str = None"}],parametersDescription:[{anchor:"transformers.onnx.FeaturesManager.get_model_from_feature.feature",description:`<strong>feature</strong> (<code>str</code>) &#x2014;
The feature required.`,name:"feature"},{anchor:"transformers.onnx.FeaturesManager.get_model_from_feature.model",description:`<strong>model</strong> (<code>str</code>) &#x2014;
The name of the model to export.`,name:"model"},{anchor:"transformers.onnx.FeaturesManager.get_model_from_feature.framework",description:`<strong>framework</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;pt&quot;</code>) &#x2014;
The framework to use for the export.`,name:"framework"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/onnx/features.py#L505",returnDescription:`
<p>The instance of the model.</p>
`}}),Oe=new b({props:{name:"get_supported_features_for_model_type",anchor:"transformers.onnx.FeaturesManager.get_supported_features_for_model_type",parameters:[{name:"model_type",val:": str"},{name:"model_name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"transformers.onnx.FeaturesManager.get_supported_features_for_model_type.model_type",description:`<strong>model_type</strong> (<code>str</code>) &#x2014;
The model type to retrieve the supported features for.`,name:"model_type"},{anchor:"transformers.onnx.FeaturesManager.get_supported_features_for_model_type.model_name",description:`<strong>model_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The name attribute of the model object, only used for the exception message.`,name:"model_name"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/onnx/features.py#L434",returnDescription:`
<p>The dictionary mapping each feature to a corresponding OnnxConfig constructor.</p>
`}}),{c(){C=n("meta"),mt=i(),P=n("h1"),D=n("a"),Me=n("span"),c(te.$$.fragment),Jt=i(),Ie=n("span"),Kt=f("Exporting \u{1F917} Transformers models to ONNX"),pt=i(),A=n("p"),Qt=f("\u{1F917} Transformers provides a "),We=n("code"),Yt=f("transformers.onnx"),Zt=f(` package that enables you to
convert model checkpoints to an ONNX graph by leveraging configuration objects.`),dt=i(),M=n("p"),er=f("See the "),Ce=n("a"),tr=f("guide"),rr=f(` on exporting \u{1F917} Transformers models for more
details.`),ct=i(),k=n("h2"),I=n("a"),Le=n("span"),c(re.$$.fragment),nr=i(),Xe=n("span"),or=f("ONNX Configurations"),ht=i(),Pe=n("p"),ar=f(`We provide three abstract classes that you should inherit from, depending on the
type of model architecture you wish to export:`),gt=i(),E=n("ul"),ke=n("li"),sr=f("Encoder-based models inherit from "),Ne=n("a"),ir=f("OnnxConfig"),lr=i(),Te=n("li"),fr=f("Decoder-based models inherit from "),Se=n("a"),mr=f("OnnxConfigWithPast"),pr=i(),Fe=n("li"),dr=f("Encoder-decoder models inherit from "),qe=n("a"),cr=f("OnnxSeq2SeqConfigWithPast"),ut=i(),N=n("h3"),W=n("a"),Ve=n("span"),c(ne.$$.fragment),hr=i(),ze=n("span"),gr=f("OnnxConfig"),_t=i(),x=n("div"),c(oe.$$.fragment),ur=i(),He=n("p"),_r=f("Base class for ONNX exportable model describing metadata on how to export the model through the ONNX format."),vr=i(),L=n("div"),c(ae.$$.fragment),xr=i(),Ge=n("p"),$r=f(`Flatten any potential nested structure expanding the name of the field with the index of the element within the
structure.`),br=i(),X=n("div"),c(se.$$.fragment),yr=i(),Be=n("p"),wr=f("Instantiate a OnnxConfig for a specific model"),Or=i(),V=n("div"),c(ie.$$.fragment),Er=i(),Ue=n("p"),Cr=f("Generate inputs to provide to the ONNX exporter for the specific framework"),Pr=i(),z=n("div"),c(le.$$.fragment),kr=i(),je=n("p"),Nr=f("Flag indicating if the model requires using external data format"),vt=i(),T=n("h3"),H=n("a"),Re=n("span"),c(fe.$$.fragment),Tr=i(),Je=n("span"),Sr=f("OnnxConfigWithPast"),xt=i(),O=n("div"),c(me.$$.fragment),Fr=i(),G=n("div"),c(pe.$$.fragment),qr=i(),Ke=n("p"),Dr=f("Fill the input_or_ouputs mapping with past_key_values dynamic axes considering."),Ar=i(),B=n("div"),c(de.$$.fragment),Mr=i(),ce=n("p"),Ir=f("Instantiate a OnnxConfig with "),Qe=n("code"),Wr=f("use_past"),Lr=f(" attribute set to True"),$t=i(),S=n("h3"),U=n("a"),Ye=n("span"),c(he.$$.fragment),Xr=i(),Ze=n("span"),Vr=f("OnnxSeq2SeqConfigWithPast"),bt=i(),ge=n("div"),c(ue.$$.fragment),yt=i(),F=n("h2"),j=n("a"),et=n("span"),c(_e.$$.fragment),zr=i(),tt=n("span"),Hr=f("ONNX Features"),wt=i(),R=n("p"),Gr=f("Each ONNX configuration is associated with a set of "),rt=n("em"),Br=f("features"),Ur=f(` that enable you
to export models for different types of topologies or tasks.`),Ot=i(),q=n("h3"),J=n("a"),nt=n("span"),c(ve.$$.fragment),jr=i(),ot=n("span"),Rr=f("FeaturesManager"),Et=i(),$=n("div"),c(xe.$$.fragment),Jr=i(),K=n("div"),c($e.$$.fragment),Kr=i(),at=n("p"),Qr=f("Check whether or not the model has the requested features."),Yr=i(),Q=n("div"),c(be.$$.fragment),Zr=i(),st=n("p"),en=f("Gets the OnnxConfig for a model_type and feature combination."),tn=i(),Y=n("div"),c(ye.$$.fragment),rn=i(),it=n("p"),nn=f("Attempts to retrieve an AutoModel class from a feature name."),on=i(),Z=n("div"),c(we.$$.fragment),an=i(),lt=n("p"),sn=f("Attempts to retrieve a model from a model\u2019s name and the feature to be enabled."),ln=i(),ee=n("div"),c(Oe.$$.fragment),fn=i(),ft=n("p"),mn=f("Tries to retrieve the feature -> OnnxConfig constructor map from the model type."),this.h()},l(e){const p=ao('[data-svelte="svelte-1phssyn"]',document.head);C=o(p,"META",{name:!0,content:!0}),p.forEach(r),mt=l(e),P=o(e,"H1",{class:!0});var Pt=a(P);D=o(Pt,"A",{id:!0,class:!0,href:!0});var gn=a(D);Me=o(gn,"SPAN",{});var un=a(Me);h(te.$$.fragment,un),un.forEach(r),gn.forEach(r),Jt=l(Pt),Ie=o(Pt,"SPAN",{});var _n=a(Ie);Kt=m(_n,"Exporting \u{1F917} Transformers models to ONNX"),_n.forEach(r),Pt.forEach(r),pt=l(e),A=o(e,"P",{});var kt=a(A);Qt=m(kt,"\u{1F917} Transformers provides a "),We=o(kt,"CODE",{});var vn=a(We);Yt=m(vn,"transformers.onnx"),vn.forEach(r),Zt=m(kt,` package that enables you to
convert model checkpoints to an ONNX graph by leveraging configuration objects.`),kt.forEach(r),dt=l(e),M=o(e,"P",{});var Nt=a(M);er=m(Nt,"See the "),Ce=o(Nt,"A",{href:!0});var xn=a(Ce);tr=m(xn,"guide"),xn.forEach(r),rr=m(Nt,` on exporting \u{1F917} Transformers models for more
details.`),Nt.forEach(r),ct=l(e),k=o(e,"H2",{class:!0});var Tt=a(k);I=o(Tt,"A",{id:!0,class:!0,href:!0});var $n=a(I);Le=o($n,"SPAN",{});var bn=a(Le);h(re.$$.fragment,bn),bn.forEach(r),$n.forEach(r),nr=l(Tt),Xe=o(Tt,"SPAN",{});var yn=a(Xe);or=m(yn,"ONNX Configurations"),yn.forEach(r),Tt.forEach(r),ht=l(e),Pe=o(e,"P",{});var wn=a(Pe);ar=m(wn,`We provide three abstract classes that you should inherit from, depending on the
type of model architecture you wish to export:`),wn.forEach(r),gt=l(e),E=o(e,"UL",{});var De=a(E);ke=o(De,"LI",{});var pn=a(ke);sr=m(pn,"Encoder-based models inherit from "),Ne=o(pn,"A",{href:!0});var On=a(Ne);ir=m(On,"OnnxConfig"),On.forEach(r),pn.forEach(r),lr=l(De),Te=o(De,"LI",{});var dn=a(Te);fr=m(dn,"Decoder-based models inherit from "),Se=o(dn,"A",{href:!0});var En=a(Se);mr=m(En,"OnnxConfigWithPast"),En.forEach(r),dn.forEach(r),pr=l(De),Fe=o(De,"LI",{});var cn=a(Fe);dr=m(cn,"Encoder-decoder models inherit from "),qe=o(cn,"A",{href:!0});var Cn=a(qe);cr=m(Cn,"OnnxSeq2SeqConfigWithPast"),Cn.forEach(r),cn.forEach(r),De.forEach(r),ut=l(e),N=o(e,"H3",{class:!0});var St=a(N);W=o(St,"A",{id:!0,class:!0,href:!0});var Pn=a(W);Ve=o(Pn,"SPAN",{});var kn=a(Ve);h(ne.$$.fragment,kn),kn.forEach(r),Pn.forEach(r),hr=l(St),ze=o(St,"SPAN",{});var Nn=a(ze);gr=m(Nn,"OnnxConfig"),Nn.forEach(r),St.forEach(r),_t=l(e),x=o(e,"DIV",{class:!0});var y=a(x);h(oe.$$.fragment,y),ur=l(y),He=o(y,"P",{});var Tn=a(He);_r=m(Tn,"Base class for ONNX exportable model describing metadata on how to export the model through the ONNX format."),Tn.forEach(r),vr=l(y),L=o(y,"DIV",{class:!0});var Ft=a(L);h(ae.$$.fragment,Ft),xr=l(Ft),Ge=o(Ft,"P",{});var Sn=a(Ge);$r=m(Sn,`Flatten any potential nested structure expanding the name of the field with the index of the element within the
structure.`),Sn.forEach(r),Ft.forEach(r),br=l(y),X=o(y,"DIV",{class:!0});var qt=a(X);h(se.$$.fragment,qt),yr=l(qt),Be=o(qt,"P",{});var Fn=a(Be);wr=m(Fn,"Instantiate a OnnxConfig for a specific model"),Fn.forEach(r),qt.forEach(r),Or=l(y),V=o(y,"DIV",{class:!0});var Dt=a(V);h(ie.$$.fragment,Dt),Er=l(Dt),Ue=o(Dt,"P",{});var qn=a(Ue);Cr=m(qn,"Generate inputs to provide to the ONNX exporter for the specific framework"),qn.forEach(r),Dt.forEach(r),Pr=l(y),z=o(y,"DIV",{class:!0});var At=a(z);h(le.$$.fragment,At),kr=l(At),je=o(At,"P",{});var Dn=a(je);Nr=m(Dn,"Flag indicating if the model requires using external data format"),Dn.forEach(r),At.forEach(r),y.forEach(r),vt=l(e),T=o(e,"H3",{class:!0});var Mt=a(T);H=o(Mt,"A",{id:!0,class:!0,href:!0});var An=a(H);Re=o(An,"SPAN",{});var Mn=a(Re);h(fe.$$.fragment,Mn),Mn.forEach(r),An.forEach(r),Tr=l(Mt),Je=o(Mt,"SPAN",{});var In=a(Je);Sr=m(In,"OnnxConfigWithPast"),In.forEach(r),Mt.forEach(r),xt=l(e),O=o(e,"DIV",{class:!0});var Ae=a(O);h(me.$$.fragment,Ae),Fr=l(Ae),G=o(Ae,"DIV",{class:!0});var It=a(G);h(pe.$$.fragment,It),qr=l(It),Ke=o(It,"P",{});var Wn=a(Ke);Dr=m(Wn,"Fill the input_or_ouputs mapping with past_key_values dynamic axes considering."),Wn.forEach(r),It.forEach(r),Ar=l(Ae),B=o(Ae,"DIV",{class:!0});var Wt=a(B);h(de.$$.fragment,Wt),Mr=l(Wt),ce=o(Wt,"P",{});var Lt=a(ce);Ir=m(Lt,"Instantiate a OnnxConfig with "),Qe=o(Lt,"CODE",{});var Ln=a(Qe);Wr=m(Ln,"use_past"),Ln.forEach(r),Lr=m(Lt," attribute set to True"),Lt.forEach(r),Wt.forEach(r),Ae.forEach(r),$t=l(e),S=o(e,"H3",{class:!0});var Xt=a(S);U=o(Xt,"A",{id:!0,class:!0,href:!0});var Xn=a(U);Ye=o(Xn,"SPAN",{});var Vn=a(Ye);h(he.$$.fragment,Vn),Vn.forEach(r),Xn.forEach(r),Xr=l(Xt),Ze=o(Xt,"SPAN",{});var zn=a(Ze);Vr=m(zn,"OnnxSeq2SeqConfigWithPast"),zn.forEach(r),Xt.forEach(r),bt=l(e),ge=o(e,"DIV",{class:!0});var Hn=a(ge);h(ue.$$.fragment,Hn),Hn.forEach(r),yt=l(e),F=o(e,"H2",{class:!0});var Vt=a(F);j=o(Vt,"A",{id:!0,class:!0,href:!0});var Gn=a(j);et=o(Gn,"SPAN",{});var Bn=a(et);h(_e.$$.fragment,Bn),Bn.forEach(r),Gn.forEach(r),zr=l(Vt),tt=o(Vt,"SPAN",{});var Un=a(tt);Hr=m(Un,"ONNX Features"),Un.forEach(r),Vt.forEach(r),wt=l(e),R=o(e,"P",{});var zt=a(R);Gr=m(zt,"Each ONNX configuration is associated with a set of "),rt=o(zt,"EM",{});var jn=a(rt);Br=m(jn,"features"),jn.forEach(r),Ur=m(zt,` that enable you
to export models for different types of topologies or tasks.`),zt.forEach(r),Ot=l(e),q=o(e,"H3",{class:!0});var Ht=a(q);J=o(Ht,"A",{id:!0,class:!0,href:!0});var Rn=a(J);nt=o(Rn,"SPAN",{});var Jn=a(nt);h(ve.$$.fragment,Jn),Jn.forEach(r),Rn.forEach(r),jr=l(Ht),ot=o(Ht,"SPAN",{});var Kn=a(ot);Rr=m(Kn,"FeaturesManager"),Kn.forEach(r),Ht.forEach(r),Et=l(e),$=o(e,"DIV",{class:!0});var w=a($);h(xe.$$.fragment,w),Jr=l(w),K=o(w,"DIV",{class:!0});var Gt=a(K);h($e.$$.fragment,Gt),Kr=l(Gt),at=o(Gt,"P",{});var Qn=a(at);Qr=m(Qn,"Check whether or not the model has the requested features."),Qn.forEach(r),Gt.forEach(r),Yr=l(w),Q=o(w,"DIV",{class:!0});var Bt=a(Q);h(be.$$.fragment,Bt),Zr=l(Bt),st=o(Bt,"P",{});var Yn=a(st);en=m(Yn,"Gets the OnnxConfig for a model_type and feature combination."),Yn.forEach(r),Bt.forEach(r),tn=l(w),Y=o(w,"DIV",{class:!0});var Ut=a(Y);h(ye.$$.fragment,Ut),rn=l(Ut),it=o(Ut,"P",{});var Zn=a(it);nn=m(Zn,"Attempts to retrieve an AutoModel class from a feature name."),Zn.forEach(r),Ut.forEach(r),on=l(w),Z=o(w,"DIV",{class:!0});var jt=a(Z);h(we.$$.fragment,jt),an=l(jt),lt=o(jt,"P",{});var eo=a(lt);sn=m(eo,"Attempts to retrieve a model from a model\u2019s name and the feature to be enabled."),eo.forEach(r),jt.forEach(r),ln=l(w),ee=o(w,"DIV",{class:!0});var Rt=a(ee);h(Oe.$$.fragment,Rt),fn=l(Rt),ft=o(Rt,"P",{});var to=a(ft);mn=m(to,"Tries to retrieve the feature -> OnnxConfig constructor map from the model type."),to.forEach(r),Rt.forEach(r),w.forEach(r),this.h()},h(){s(C,"name","hf:doc:metadata"),s(C,"content",JSON.stringify(fo)),s(D,"id","exporting-transformers-models-to-onnx"),s(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(D,"href","#exporting-transformers-models-to-onnx"),s(P,"class","relative group"),s(Ce,"href","../serialization"),s(I,"id","onnx-configurations"),s(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(I,"href","#onnx-configurations"),s(k,"class","relative group"),s(Ne,"href","/docs/transformers/main/en/main_classes/onnx#transformers.onnx.OnnxConfig"),s(Se,"href","/docs/transformers/main/en/main_classes/onnx#transformers.onnx.OnnxConfigWithPast"),s(qe,"href","/docs/transformers/main/en/main_classes/onnx#transformers.onnx.OnnxSeq2SeqConfigWithPast"),s(W,"id","transformers.onnx.OnnxConfig"),s(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(W,"href","#transformers.onnx.OnnxConfig"),s(N,"class","relative group"),s(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(H,"id","transformers.onnx.OnnxConfigWithPast"),s(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(H,"href","#transformers.onnx.OnnxConfigWithPast"),s(T,"class","relative group"),s(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(U,"id","transformers.onnx.OnnxSeq2SeqConfigWithPast"),s(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(U,"href","#transformers.onnx.OnnxSeq2SeqConfigWithPast"),s(S,"class","relative group"),s(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(j,"id","onnx-features"),s(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(j,"href","#onnx-features"),s(F,"class","relative group"),s(J,"id","transformers.onnx.FeaturesManager"),s(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(J,"href","#transformers.onnx.FeaturesManager"),s(q,"class","relative group"),s(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,p){t(document.head,C),d(e,mt,p),d(e,P,p),t(P,D),t(D,Me),g(te,Me,null),t(P,Jt),t(P,Ie),t(Ie,Kt),d(e,pt,p),d(e,A,p),t(A,Qt),t(A,We),t(We,Yt),t(A,Zt),d(e,dt,p),d(e,M,p),t(M,er),t(M,Ce),t(Ce,tr),t(M,rr),d(e,ct,p),d(e,k,p),t(k,I),t(I,Le),g(re,Le,null),t(k,nr),t(k,Xe),t(Xe,or),d(e,ht,p),d(e,Pe,p),t(Pe,ar),d(e,gt,p),d(e,E,p),t(E,ke),t(ke,sr),t(ke,Ne),t(Ne,ir),t(E,lr),t(E,Te),t(Te,fr),t(Te,Se),t(Se,mr),t(E,pr),t(E,Fe),t(Fe,dr),t(Fe,qe),t(qe,cr),d(e,ut,p),d(e,N,p),t(N,W),t(W,Ve),g(ne,Ve,null),t(N,hr),t(N,ze),t(ze,gr),d(e,_t,p),d(e,x,p),g(oe,x,null),t(x,ur),t(x,He),t(He,_r),t(x,vr),t(x,L),g(ae,L,null),t(L,xr),t(L,Ge),t(Ge,$r),t(x,br),t(x,X),g(se,X,null),t(X,yr),t(X,Be),t(Be,wr),t(x,Or),t(x,V),g(ie,V,null),t(V,Er),t(V,Ue),t(Ue,Cr),t(x,Pr),t(x,z),g(le,z,null),t(z,kr),t(z,je),t(je,Nr),d(e,vt,p),d(e,T,p),t(T,H),t(H,Re),g(fe,Re,null),t(T,Tr),t(T,Je),t(Je,Sr),d(e,xt,p),d(e,O,p),g(me,O,null),t(O,Fr),t(O,G),g(pe,G,null),t(G,qr),t(G,Ke),t(Ke,Dr),t(O,Ar),t(O,B),g(de,B,null),t(B,Mr),t(B,ce),t(ce,Ir),t(ce,Qe),t(Qe,Wr),t(ce,Lr),d(e,$t,p),d(e,S,p),t(S,U),t(U,Ye),g(he,Ye,null),t(S,Xr),t(S,Ze),t(Ze,Vr),d(e,bt,p),d(e,ge,p),g(ue,ge,null),d(e,yt,p),d(e,F,p),t(F,j),t(j,et),g(_e,et,null),t(F,zr),t(F,tt),t(tt,Hr),d(e,wt,p),d(e,R,p),t(R,Gr),t(R,rt),t(rt,Br),t(R,Ur),d(e,Ot,p),d(e,q,p),t(q,J),t(J,nt),g(ve,nt,null),t(q,jr),t(q,ot),t(ot,Rr),d(e,Et,p),d(e,$,p),g(xe,$,null),t($,Jr),t($,K),g($e,K,null),t(K,Kr),t(K,at),t(at,Qr),t($,Yr),t($,Q),g(be,Q,null),t(Q,Zr),t(Q,st),t(st,en),t($,tn),t($,Y),g(ye,Y,null),t(Y,rn),t(Y,it),t(it,nn),t($,on),t($,Z),g(we,Z,null),t(Z,an),t(Z,lt),t(lt,sn),t($,ln),t($,ee),g(Oe,ee,null),t(ee,fn),t(ee,ft),t(ft,mn),Ct=!0},p:so,i(e){Ct||(u(te.$$.fragment,e),u(re.$$.fragment,e),u(ne.$$.fragment,e),u(oe.$$.fragment,e),u(ae.$$.fragment,e),u(se.$$.fragment,e),u(ie.$$.fragment,e),u(le.$$.fragment,e),u(fe.$$.fragment,e),u(me.$$.fragment,e),u(pe.$$.fragment,e),u(de.$$.fragment,e),u(he.$$.fragment,e),u(ue.$$.fragment,e),u(_e.$$.fragment,e),u(ve.$$.fragment,e),u(xe.$$.fragment,e),u($e.$$.fragment,e),u(be.$$.fragment,e),u(ye.$$.fragment,e),u(we.$$.fragment,e),u(Oe.$$.fragment,e),Ct=!0)},o(e){_(te.$$.fragment,e),_(re.$$.fragment,e),_(ne.$$.fragment,e),_(oe.$$.fragment,e),_(ae.$$.fragment,e),_(se.$$.fragment,e),_(ie.$$.fragment,e),_(le.$$.fragment,e),_(fe.$$.fragment,e),_(me.$$.fragment,e),_(pe.$$.fragment,e),_(de.$$.fragment,e),_(he.$$.fragment,e),_(ue.$$.fragment,e),_(_e.$$.fragment,e),_(ve.$$.fragment,e),_(xe.$$.fragment,e),_($e.$$.fragment,e),_(be.$$.fragment,e),_(ye.$$.fragment,e),_(we.$$.fragment,e),_(Oe.$$.fragment,e),Ct=!1},d(e){r(C),e&&r(mt),e&&r(P),v(te),e&&r(pt),e&&r(A),e&&r(dt),e&&r(M),e&&r(ct),e&&r(k),v(re),e&&r(ht),e&&r(Pe),e&&r(gt),e&&r(E),e&&r(ut),e&&r(N),v(ne),e&&r(_t),e&&r(x),v(oe),v(ae),v(se),v(ie),v(le),e&&r(vt),e&&r(T),v(fe),e&&r(xt),e&&r(O),v(me),v(pe),v(de),e&&r($t),e&&r(S),v(he),e&&r(bt),e&&r(ge),v(ue),e&&r(yt),e&&r(F),v(_e),e&&r(wt),e&&r(R),e&&r(Ot),e&&r(q),v(ve),e&&r(Et),e&&r($),v(xe),v($e),v(be),v(ye),v(we),v(Oe)}}}const fo={local:"exporting-transformers-models-to-onnx",sections:[{local:"onnx-configurations",sections:[{local:"transformers.onnx.OnnxConfig",title:"OnnxConfig"},{local:"transformers.onnx.OnnxConfigWithPast",title:"OnnxConfigWithPast"},{local:"transformers.onnx.OnnxSeq2SeqConfigWithPast",title:"OnnxSeq2SeqConfigWithPast"}],title:"ONNX Configurations"},{local:"onnx-features",sections:[{local:"transformers.onnx.FeaturesManager",title:"FeaturesManager"}],title:"ONNX Features"}],title:"Exporting \u{1F917} Transformers models to ONNX"};function mo(hn){return io(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class go extends ro{constructor(C){super();no(this,C,mo,lo,oo,{})}}export{go as default,fo as metadata};
