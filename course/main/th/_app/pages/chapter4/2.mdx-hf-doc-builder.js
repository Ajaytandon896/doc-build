import{S as is,i as ms,s as ps,e as f,k as _,w as N,t as l,M as fs,c as u,d as s,m as g,x as B,a as d,h as c,b as x,N as os,G as a,g as p,y as H,o as C,p as ns,q,B as I,v as us,n as ls}from"../../chunks/vendor-hf-doc-builder.js";import{T as hs}from"../../chunks/Tip-hf-doc-builder.js";import{I as bs}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ne}from"../../chunks/CodeBlock-hf-doc-builder.js";import{C as cs}from"../../chunks/CourseFloatingBanner-hf-doc-builder.js";import{F as ds}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";function ks(y){let o,i;return o=new cs({props:{chapter:4,classNames:"absolute z-10 right-0 top-0",notebooks:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/th/chapter4/section2_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/th/chapter4/section2_tf.ipynb"}]}}),{c(){N(o.$$.fragment)},l(t){B(o.$$.fragment,t)},m(t,$){H(o,t,$),i=!0},i(t){i||(q(o.$$.fragment,t),i=!0)},o(t){C(o.$$.fragment,t),i=!1},d(t){I(o,t)}}}function _s(y){let o,i;return o=new cs({props:{chapter:4,classNames:"absolute z-10 right-0 top-0",notebooks:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/th/chapter4/section2_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/th/chapter4/section2_pt.ipynb"}]}}),{c(){N(o.$$.fragment)},l(t){B(o.$$.fragment,t)},m(t,$){H(o,t,$),i=!0},i(t){i||(q(o.$$.fragment,t),i=!0)},o(t){C(o.$$.fragment,t),i=!1},d(t){I(o,t)}}}function gs(y){let o,i,t,$,h,w,j,E,D,v,O,F,k,b,M;return o=new ne({props:{code:`from transformers import CamembertTokenizer, TFCamembertForMaskedLM

tokenizer = CamembertTokenizer.from_pretrained("camembert-base")
model = TFCamembertForMaskedLM.from_pretrained("camembert-base")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, TFCamembertForMaskedLM

tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = TFCamembertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),b=new ne({props:{code:`from transformers import AutoTokenizer, TFAutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained("camembert-base")
model = TFAutoModelForMaskedLM.from_pretrained("camembert-base")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = TFAutoModelForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),{c(){N(o.$$.fragment),i=_(),t=f("p"),$=l("\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E44\u0E23\u0E01\u0E47\u0E15\u0E32\u0E21 \u0E40\u0E23\u0E32\u0E41\u0E19\u0E30\u0E19\u0E33\u0E43\u0E2B\u0E49\u0E43\u0E0A\u0E49 "),h=f("a"),w=l("\u0E04\u0E25\u0E32\u0E2A "),j=f("code"),E=l("TFAuto*"),D=l(" \u0E41\u0E17\u0E19 \u0E40\u0E1E\u0E23\u0E32\u0E30\u0E27\u0E48\u0E32\u0E21\u0E31\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E25\u0E32\u0E2A\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E0A\u0E49\u0E44\u0E14\u0E49\u0E01\u0E31\u0E1A\u0E2A\u0E16\u0E32\u0E1B\u0E31\u0E15\u0E22\u0E01\u0E23\u0E23\u0E21\u0E2B\u0E25\u0E32\u0E22\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17 (design architecture-agnostic) \u0E43\u0E19\u0E02\u0E13\u0E30\u0E17\u0E35\u0E48\u0E42\u0E04\u0E49\u0E14\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49\u0E08\u0E33\u0E01\u0E31\u0E14\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E01\u0E31\u0E1A checkpoints \u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E42\u0E2B\u0E25\u0E14\u0E44\u0E14\u0E49\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E01\u0E31\u0E1A\u0E2A\u0E16\u0E32\u0E1B\u0E31\u0E15\u0E22\u0E01\u0E23\u0E23\u0E21\u0E41\u0E1A\u0E1A CamemBERT \u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E04\u0E25\u0E32\u0E2A "),v=f("code"),O=l("TFAuto*"),F=l(" \u0E19\u0E31\u0E49\u0E19\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19 checkpoints \u0E40\u0E1B\u0E47\u0E19\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E07\u0E48\u0E32\u0E22:"),k=_(),N(b.$$.fragment),this.h()},l(r){B(o.$$.fragment,r),i=g(r),t=u(r,"P",{});var m=d(t);$=c(m,"\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E44\u0E23\u0E01\u0E47\u0E15\u0E32\u0E21 \u0E40\u0E23\u0E32\u0E41\u0E19\u0E30\u0E19\u0E33\u0E43\u0E2B\u0E49\u0E43\u0E0A\u0E49 "),h=u(m,"A",{href:!0,rel:!0});var A=d(h);w=c(A,"\u0E04\u0E25\u0E32\u0E2A "),j=u(A,"CODE",{});var L=d(j);E=c(L,"TFAuto*"),L.forEach(s),A.forEach(s),D=c(m," \u0E41\u0E17\u0E19 \u0E40\u0E1E\u0E23\u0E32\u0E30\u0E27\u0E48\u0E32\u0E21\u0E31\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E25\u0E32\u0E2A\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E0A\u0E49\u0E44\u0E14\u0E49\u0E01\u0E31\u0E1A\u0E2A\u0E16\u0E32\u0E1B\u0E31\u0E15\u0E22\u0E01\u0E23\u0E23\u0E21\u0E2B\u0E25\u0E32\u0E22\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17 (design architecture-agnostic) \u0E43\u0E19\u0E02\u0E13\u0E30\u0E17\u0E35\u0E48\u0E42\u0E04\u0E49\u0E14\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49\u0E08\u0E33\u0E01\u0E31\u0E14\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E01\u0E31\u0E1A checkpoints \u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E42\u0E2B\u0E25\u0E14\u0E44\u0E14\u0E49\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E01\u0E31\u0E1A\u0E2A\u0E16\u0E32\u0E1B\u0E31\u0E15\u0E22\u0E01\u0E23\u0E23\u0E21\u0E41\u0E1A\u0E1A CamemBERT \u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E04\u0E25\u0E32\u0E2A "),v=u(m,"CODE",{});var R=d(v);O=c(R,"TFAuto*"),R.forEach(s),F=c(m," \u0E19\u0E31\u0E49\u0E19\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19 checkpoints \u0E40\u0E1B\u0E47\u0E19\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E07\u0E48\u0E32\u0E22:"),m.forEach(s),k=g(r),B(b.$$.fragment,r),this.h()},h(){x(h,"href","https://huggingface.co/transformers/model_doc/auto.html?highlight=auto#auto-classes"),x(h,"rel","nofollow")},m(r,m){H(o,r,m),p(r,i,m),p(r,t,m),a(t,$),a(t,h),a(h,w),a(h,j),a(j,E),a(t,D),a(t,v),a(v,O),a(t,F),p(r,k,m),H(b,r,m),M=!0},i(r){M||(q(o.$$.fragment,r),q(b.$$.fragment,r),M=!0)},o(r){C(o.$$.fragment,r),C(b.$$.fragment,r),M=!1},d(r){I(o,r),r&&s(i),r&&s(t),r&&s(k),I(b,r)}}}function $s(y){let o,i,t,$,h,w,j,E,D,v,O,F,k,b,M;return o=new ne({props:{code:`from transformers import CamembertTokenizer, CamembertForMaskedLM

tokenizer = CamembertTokenizer.from_pretrained("camembert-base")
model = CamembertForMaskedLM.from_pretrained("camembert-base")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, CamembertForMaskedLM

tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = CamembertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),b=new ne({props:{code:`from transformers import AutoTokenizer, AutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained("camembert-base")
model = AutoModelForMaskedLM.from_pretrained("camembert-base")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = AutoModelForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),{c(){N(o.$$.fragment),i=_(),t=f("p"),$=l("\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E44\u0E23\u0E01\u0E47\u0E15\u0E32\u0E21 \u0E40\u0E23\u0E32\u0E41\u0E19\u0E30\u0E19\u0E33\u0E43\u0E2B\u0E49\u0E43\u0E0A\u0E49 "),h=f("a"),w=l("\u0E04\u0E25\u0E32\u0E2A "),j=f("code"),E=l("Auto*"),D=l(" \u0E41\u0E17\u0E19 \u0E40\u0E1E\u0E23\u0E32\u0E30\u0E27\u0E48\u0E32\u0E21\u0E31\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E25\u0E32\u0E2A\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E0A\u0E49\u0E44\u0E14\u0E49\u0E01\u0E31\u0E1A\u0E2A\u0E16\u0E32\u0E1B\u0E31\u0E15\u0E22\u0E01\u0E23\u0E23\u0E21\u0E2B\u0E25\u0E32\u0E22\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17 (design architecture-agnostic) \u0E43\u0E19\u0E02\u0E13\u0E30\u0E17\u0E35\u0E48\u0E42\u0E04\u0E49\u0E14\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49\u0E08\u0E33\u0E01\u0E31\u0E14\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E01\u0E31\u0E1A checkpoints \u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E42\u0E2B\u0E25\u0E14\u0E44\u0E14\u0E49\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E01\u0E31\u0E1A\u0E2A\u0E16\u0E32\u0E1B\u0E31\u0E15\u0E22\u0E01\u0E23\u0E23\u0E21\u0E41\u0E1A\u0E1A CamemBERT \u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E04\u0E25\u0E32\u0E2A "),v=f("code"),O=l("Auto*"),F=l(" \u0E19\u0E31\u0E49\u0E19\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19 checkpoints \u0E40\u0E1B\u0E47\u0E19\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E07\u0E48\u0E32\u0E22:"),k=_(),N(b.$$.fragment),this.h()},l(r){B(o.$$.fragment,r),i=g(r),t=u(r,"P",{});var m=d(t);$=c(m,"\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E44\u0E23\u0E01\u0E47\u0E15\u0E32\u0E21 \u0E40\u0E23\u0E32\u0E41\u0E19\u0E30\u0E19\u0E33\u0E43\u0E2B\u0E49\u0E43\u0E0A\u0E49 "),h=u(m,"A",{href:!0,rel:!0});var A=d(h);w=c(A,"\u0E04\u0E25\u0E32\u0E2A "),j=u(A,"CODE",{});var L=d(j);E=c(L,"Auto*"),L.forEach(s),A.forEach(s),D=c(m," \u0E41\u0E17\u0E19 \u0E40\u0E1E\u0E23\u0E32\u0E30\u0E27\u0E48\u0E32\u0E21\u0E31\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E25\u0E32\u0E2A\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E0A\u0E49\u0E44\u0E14\u0E49\u0E01\u0E31\u0E1A\u0E2A\u0E16\u0E32\u0E1B\u0E31\u0E15\u0E22\u0E01\u0E23\u0E23\u0E21\u0E2B\u0E25\u0E32\u0E22\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17 (design architecture-agnostic) \u0E43\u0E19\u0E02\u0E13\u0E30\u0E17\u0E35\u0E48\u0E42\u0E04\u0E49\u0E14\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49\u0E08\u0E33\u0E01\u0E31\u0E14\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E01\u0E31\u0E1A checkpoints \u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E42\u0E2B\u0E25\u0E14\u0E44\u0E14\u0E49\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E01\u0E31\u0E1A\u0E2A\u0E16\u0E32\u0E1B\u0E31\u0E15\u0E22\u0E01\u0E23\u0E23\u0E21\u0E41\u0E1A\u0E1A CamemBERT \u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E04\u0E25\u0E32\u0E2A "),v=u(m,"CODE",{});var R=d(v);O=c(R,"Auto*"),R.forEach(s),F=c(m," \u0E19\u0E31\u0E49\u0E19\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19 checkpoints \u0E40\u0E1B\u0E47\u0E19\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E07\u0E48\u0E32\u0E22:"),m.forEach(s),k=g(r),B(b.$$.fragment,r),this.h()},h(){x(h,"href","https://huggingface.co/transformers/model_doc/auto.html?highlight=auto#auto-classes"),x(h,"rel","nofollow")},m(r,m){H(o,r,m),p(r,i,m),p(r,t,m),a(t,$),a(t,h),a(h,w),a(h,j),a(j,E),a(t,D),a(t,v),a(v,O),a(t,F),p(r,k,m),H(b,r,m),M=!0},i(r){M||(q(o.$$.fragment,r),q(b.$$.fragment,r),M=!0)},o(r){C(o.$$.fragment,r),C(b.$$.fragment,r),M=!1},d(r){I(o,r),r&&s(i),r&&s(t),r&&s(k),I(b,r)}}}function xs(y){let o;return{c(){o=l("\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E42\u0E21\u0E40\u0E14\u0E25\u0E17\u0E35\u0E48\u0E1C\u0E48\u0E32\u0E19\u0E01\u0E32\u0E23\u0E40\u0E17\u0E23\u0E19\u0E21\u0E32\u0E41\u0E25\u0E49\u0E27 (pretrained model) \u0E04\u0E38\u0E13\u0E04\u0E27\u0E23\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E43\u0E2B\u0E49\u0E21\u0E31\u0E48\u0E19\u0E43\u0E08\u0E27\u0E48\u0E32\u0E21\u0E31\u0E19\u0E16\u0E39\u0E01\u0E40\u0E17\u0E23\u0E19\u0E21\u0E32\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E44\u0E23 \u0E01\u0E31\u0E1A\u0E0A\u0E38\u0E14\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E2B\u0E19 \u0E02\u0E35\u0E14\u0E08\u0E33\u0E01\u0E31\u0E14 (limits) \u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E25\u0E33\u0E40\u0E2D\u0E35\u0E22\u0E07 (biases) \u0E04\u0E37\u0E2D\u0E2D\u0E30\u0E44\u0E23 \u0E0B\u0E36\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E19\u0E35\u0E49\u0E04\u0E27\u0E23\u0E16\u0E39\u0E01\u0E23\u0E30\u0E1A\u0E38\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E01\u0E32\u0E23\u0E4C\u0E14\u0E42\u0E21\u0E40\u0E14\u0E25 (model card)")},l(i){o=c(i,"\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E42\u0E21\u0E40\u0E14\u0E25\u0E17\u0E35\u0E48\u0E1C\u0E48\u0E32\u0E19\u0E01\u0E32\u0E23\u0E40\u0E17\u0E23\u0E19\u0E21\u0E32\u0E41\u0E25\u0E49\u0E27 (pretrained model) \u0E04\u0E38\u0E13\u0E04\u0E27\u0E23\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E43\u0E2B\u0E49\u0E21\u0E31\u0E48\u0E19\u0E43\u0E08\u0E27\u0E48\u0E32\u0E21\u0E31\u0E19\u0E16\u0E39\u0E01\u0E40\u0E17\u0E23\u0E19\u0E21\u0E32\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E44\u0E23 \u0E01\u0E31\u0E1A\u0E0A\u0E38\u0E14\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E2B\u0E19 \u0E02\u0E35\u0E14\u0E08\u0E33\u0E01\u0E31\u0E14 (limits) \u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E25\u0E33\u0E40\u0E2D\u0E35\u0E22\u0E07 (biases) \u0E04\u0E37\u0E2D\u0E2D\u0E30\u0E44\u0E23 \u0E0B\u0E36\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E19\u0E35\u0E49\u0E04\u0E27\u0E23\u0E16\u0E39\u0E01\u0E23\u0E30\u0E1A\u0E38\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E01\u0E32\u0E23\u0E4C\u0E14\u0E42\u0E21\u0E40\u0E14\u0E25 (model card)")},m(i,t){p(i,o,t)},d(i){i&&s(o)}}}function js(y){let o,i,t,$,h,w,j,E,D,v,O,F,k,b,M,r,m,A,L,R,be,U,K,He,de,z,we,le,Me,Ee,ce,Ce,qe,ie,Te,ye,ke,Q,_e,W,ge,T,Fe,me,Ae,Le,pe,ze,De,fe,Oe,Pe,ue,Se,Ne,$e,X,Y,Ie,xe,te,Be,je,P,S,re,V,ve;t=new ds({props:{fw:y[0]}}),E=new bs({});const Ge=[_s,ks],Z=[];function Re(e,n){return e[0]==="pt"?0:1}k=Re(y),b=Z[k]=Ge[k](y),Q=new ne({props:{code:`from transformers import pipeline

camembert_fill_mask = pipeline("fill-mask", model="camembert-base")
results = camembert_fill_mask("Le camembert est <mask> :)")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

camembert_fill_mask = pipeline(<span class="hljs-string">&quot;fill-mask&quot;</span>, model=<span class="hljs-string">&quot;camembert-base&quot;</span>)
results = camembert_fill_mask(<span class="hljs-string">&quot;Le camembert est &lt;mask&gt; :)&quot;</span>)`}}),W=new ne({props:{code:`[
  {'sequence': 'Le camembert est d\xE9licieux :)', 'score': 0.49091005325317383, 'token': 7200, 'token_str': 'd\xE9licieux'}, 
  {'sequence': 'Le camembert est excellent :)', 'score': 0.1055697426199913, 'token': 2183, 'token_str': 'excellent'}, 
  {'sequence': 'Le camembert est succulent :)', 'score': 0.03453313186764717, 'token': 26202, 'token_str': 'succulent'}, 
  {'sequence': 'Le camembert est meilleur :)', 'score': 0.0330314114689827, 'token': 528, 'token_str': 'meilleur'}, 
  {'sequence': 'Le camembert est parfait :)', 'score': 0.03007650189101696, 'token': 1654, 'token_str': 'parfait'}
]`,highlighted:`[
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est d\xE9licieux :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.49091005325317383</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">7200</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;d\xE9licieux&#x27;</span>}, 
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est excellent :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.1055697426199913</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">2183</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;excellent&#x27;</span>}, 
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est succulent :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.03453313186764717</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">26202</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;succulent&#x27;</span>}, 
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est meilleur :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.0330314114689827</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">528</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;meilleur&#x27;</span>}, 
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est parfait :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.03007650189101696</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">1654</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;parfait&#x27;</span>}
]`}});const Ve=[$s,gs],ee=[];function Je(e,n){return e[0]==="pt"?0:1}return P=Je(y),S=ee[P]=Ve[P](y),V=new hs({props:{$$slots:{default:[xs]},$$scope:{ctx:y}}}),{c(){o=f("meta"),i=_(),N(t.$$.fragment),$=_(),h=f("h1"),w=f("a"),j=f("span"),N(E.$$.fragment),D=_(),v=f("span"),O=l("\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E42\u0E21\u0E40\u0E14\u0E25\u0E17\u0E35\u0E48\u0E1C\u0E48\u0E32\u0E19\u0E01\u0E32\u0E23\u0E40\u0E17\u0E23\u0E19\u0E21\u0E32\u0E41\u0E25\u0E49\u0E27 (pretrained models)"),F=_(),b.c(),M=_(),r=f("p"),m=l("Model Hub \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E43\u0E0A\u0E49\u0E42\u0E21\u0E40\u0E14\u0E25\u0E17\u0E35\u0E48\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E07\u0E48\u0E32\u0E22\u0E02\u0E19\u0E32\u0E14\u0E17\u0E35\u0E48\u0E27\u0E48\u0E32 \u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E21\u0E31\u0E19\u0E04\u0E39\u0E48\u0E01\u0E31\u0E1A library \u0E1B\u0E25\u0E32\u0E22\u0E19\u0E49\u0E33\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E44\u0E14\u0E49\u0E43\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E42\u0E04\u0E49\u0E14\u0E40\u0E1E\u0E35\u0E22\u0E07\u0E44\u0E21\u0E48\u0E01\u0E35\u0E48\u0E1A\u0E23\u0E23\u0E17\u0E31\u0E14\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 \u0E21\u0E32\u0E14\u0E39\u0E27\u0E34\u0E18\u0E35\u0E43\u0E0A\u0E49\u0E42\u0E21\u0E40\u0E14\u0E25\u0E1E\u0E27\u0E01\u0E19\u0E35\u0E49\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E04\u0E27\u0E32\u0E21\u0E0A\u0E48\u0E27\u0E22\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E01\u0E31\u0E1A\u0E0A\u0E38\u0E21\u0E0A\u0E19\u0E01\u0E31\u0E19\u0E14\u0E35\u0E01\u0E27\u0E48\u0E32"),A=_(),L=f("p"),R=l("\u0E2A\u0E21\u0E21\u0E38\u0E15\u0E34\u0E27\u0E48\u0E32\u0E40\u0E23\u0E32\u0E01\u0E33\u0E25\u0E31\u0E07\u0E21\u0E2D\u0E07\u0E2B\u0E32\u0E42\u0E21\u0E40\u0E14\u0E25\u0E20\u0E32\u0E29\u0E32\u0E1D\u0E23\u0E31\u0E48\u0E07\u0E40\u0E28\u0E2A\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E15\u0E34\u0E21\u0E04\u0E33\u0E17\u0E35\u0E48\u0E2B\u0E32\u0E22\u0E44\u0E1B\u0E44\u0E14\u0E49 (mask filling)"),be=_(),U=f("div"),K=f("img"),de=_(),z=f("p"),we=l("\u0E40\u0E23\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01 "),le=f("code"),Me=l("camembert-base"),Ee=l(" checkpoint \u0E21\u0E32\u0E25\u0E2D\u0E07\u0E43\u0E0A\u0E49 \u0E15\u0E31\u0E27\u0E23\u0E30\u0E1A\u0E38 "),ce=f("code"),Ce=l("camembert-base"),qe=l(" \u0E04\u0E37\u0E2D\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E17\u0E35\u0E48\u0E40\u0E23\u0E32\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E34\u0E48\u0E21\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19! \u0E2D\u0E22\u0E48\u0E32\u0E07\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E44\u0E14\u0E49\u0E40\u0E2B\u0E47\u0E19\u0E44\u0E1B\u0E41\u0E25\u0E49\u0E27\u0E43\u0E19\u0E1A\u0E17\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49 \u0E40\u0E23\u0E32\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E21\u0E31\u0E19\u0E44\u0E14\u0E49\u0E14\u0E49\u0E27\u0E22\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07 "),ie=f("code"),Te=l("pipeline()"),ye=l(":"),ke=_(),N(Q.$$.fragment),_e=_(),N(W.$$.fragment),ge=_(),T=f("p"),Fe=l("\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E40\u0E2B\u0E47\u0E19 \u0E01\u0E32\u0E23\u0E42\u0E2B\u0E25\u0E14\u0E42\u0E21\u0E40\u0E14\u0E25\u0E43\u0E19 pipeline \u0E19\u0E31\u0E49\u0E19\u0E07\u0E48\u0E32\u0E22\u0E21\u0E32\u0E01\u0E46 \u0E2A\u0E34\u0E48\u0E07\u0E40\u0E14\u0E35\u0E22\u0E27\u0E17\u0E35\u0E48\u0E04\u0E27\u0E23\u0E23\u0E30\u0E27\u0E31\u0E07\u0E04\u0E37\u0E2D checkpoint \u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E19\u0E31\u0E49\u0E19\u0E04\u0E27\u0E23\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E21\u0E01\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E2D\u0E07\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E08\u0E30\u0E17\u0E33 \u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E0A\u0E48\u0E19 \u0E43\u0E19\u0E07\u0E32\u0E19\u0E19\u0E35\u0E49\u0E40\u0E23\u0E32\u0E42\u0E2B\u0E25\u0E14 "),me=f("code"),Ae=l("camembert-base"),Le=l(" checkpoint \u0E43\u0E19 "),pe=f("code"),ze=l("fill-mask"),De=l(" pipeline \u0E0B\u0E36\u0E48\u0E07\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E01\u0E31\u0E1A\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E40\u0E23\u0E32\u0E08\u0E30\u0E43\u0E0A\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E41\u0E19\u0E48\u0E19\u0E2D\u0E19 \u0E41\u0E15\u0E48\u0E16\u0E49\u0E32\u0E40\u0E23\u0E32\u0E42\u0E2B\u0E25\u0E14 checkpoint \u0E19\u0E35\u0E49\u0E43\u0E19 "),fe=f("code"),Oe=l("text-classification"),Pe=l(" pipeline \u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C\u0E08\u0E30\u0E44\u0E21\u0E48\u0E2A\u0E21\u0E40\u0E2B\u0E15\u0E38\u0E2A\u0E21\u0E1C\u0E25 \u0E40\u0E1E\u0E23\u0E32\u0E30\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E02\u0E2D\u0E07 "),ue=f("code"),Se=l("camembert-base"),Ne=l(" \u0E44\u0E21\u0E48\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E21\u0E01\u0E31\u0E1A\u0E07\u0E32\u0E19\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E19\u0E35\u0E49! \u0E40\u0E23\u0E32\u0E41\u0E19\u0E30\u0E19\u0E33\u0E43\u0E2B\u0E49\u0E43\u0E0A\u0E49\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E07\u0E32\u0E19 (task selector) \u0E43\u0E19\u0E2D\u0E34\u0E19\u0E40\u0E15\u0E2D\u0E23\u0E4C\u0E40\u0E1F\u0E0B\u0E02\u0E2D\u0E07 Hugging Face Hub \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E37\u0E2D\u0E01 checkpoints \u0E17\u0E35\u0E48\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E21"),$e=_(),X=f("div"),Y=f("img"),xe=_(),te=f("p"),Be=l("\u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E0A\u0E49 checkpoint \u0E42\u0E14\u0E22\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E2A\u0E16\u0E32\u0E1B\u0E31\u0E15\u0E22\u0E01\u0E23\u0E23\u0E21\u0E42\u0E21\u0E40\u0E14\u0E25 (model architecture) \u0E44\u0E14\u0E49\u0E42\u0E14\u0E22\u0E15\u0E23\u0E07\u0E14\u0E49\u0E27\u0E22:"),je=_(),S.c(),re=_(),N(V.$$.fragment),this.h()},l(e){const n=fs('[data-svelte="svelte-1phssyn"]',document.head);o=u(n,"META",{name:!0,content:!0}),n.forEach(s),i=g(e),B(t.$$.fragment,e),$=g(e),h=u(e,"H1",{class:!0});var se=d(h);w=u(se,"A",{id:!0,class:!0,href:!0});var ae=d(w);j=u(ae,"SPAN",{});var oe=d(j);B(E.$$.fragment,oe),oe.forEach(s),ae.forEach(s),D=g(se),v=u(se,"SPAN",{});var he=d(v);O=c(he,"\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E42\u0E21\u0E40\u0E14\u0E25\u0E17\u0E35\u0E48\u0E1C\u0E48\u0E32\u0E19\u0E01\u0E32\u0E23\u0E40\u0E17\u0E23\u0E19\u0E21\u0E32\u0E41\u0E25\u0E49\u0E27 (pretrained models)"),he.forEach(s),se.forEach(s),F=g(e),b.l(e),M=g(e),r=u(e,"P",{});var Ue=d(r);m=c(Ue,"Model Hub \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E43\u0E0A\u0E49\u0E42\u0E21\u0E40\u0E14\u0E25\u0E17\u0E35\u0E48\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E07\u0E48\u0E32\u0E22\u0E02\u0E19\u0E32\u0E14\u0E17\u0E35\u0E48\u0E27\u0E48\u0E32 \u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E21\u0E31\u0E19\u0E04\u0E39\u0E48\u0E01\u0E31\u0E1A library \u0E1B\u0E25\u0E32\u0E22\u0E19\u0E49\u0E33\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E44\u0E14\u0E49\u0E43\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E42\u0E04\u0E49\u0E14\u0E40\u0E1E\u0E35\u0E22\u0E07\u0E44\u0E21\u0E48\u0E01\u0E35\u0E48\u0E1A\u0E23\u0E23\u0E17\u0E31\u0E14\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 \u0E21\u0E32\u0E14\u0E39\u0E27\u0E34\u0E18\u0E35\u0E43\u0E0A\u0E49\u0E42\u0E21\u0E40\u0E14\u0E25\u0E1E\u0E27\u0E01\u0E19\u0E35\u0E49\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E04\u0E27\u0E32\u0E21\u0E0A\u0E48\u0E27\u0E22\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E01\u0E31\u0E1A\u0E0A\u0E38\u0E21\u0E0A\u0E19\u0E01\u0E31\u0E19\u0E14\u0E35\u0E01\u0E27\u0E48\u0E32"),Ue.forEach(s),A=g(e),L=u(e,"P",{});var Ke=d(L);R=c(Ke,"\u0E2A\u0E21\u0E21\u0E38\u0E15\u0E34\u0E27\u0E48\u0E32\u0E40\u0E23\u0E32\u0E01\u0E33\u0E25\u0E31\u0E07\u0E21\u0E2D\u0E07\u0E2B\u0E32\u0E42\u0E21\u0E40\u0E14\u0E25\u0E20\u0E32\u0E29\u0E32\u0E1D\u0E23\u0E31\u0E48\u0E07\u0E40\u0E28\u0E2A\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E15\u0E34\u0E21\u0E04\u0E33\u0E17\u0E35\u0E48\u0E2B\u0E32\u0E22\u0E44\u0E1B\u0E44\u0E14\u0E49 (mask filling)"),Ke.forEach(s),be=g(e),U=u(e,"DIV",{class:!0});var Qe=d(U);K=u(Qe,"IMG",{src:!0,alt:!0,width:!0}),Qe.forEach(s),de=g(e),z=u(e,"P",{});var J=d(z);we=c(J,"\u0E40\u0E23\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01 "),le=u(J,"CODE",{});var We=d(le);Me=c(We,"camembert-base"),We.forEach(s),Ee=c(J," checkpoint \u0E21\u0E32\u0E25\u0E2D\u0E07\u0E43\u0E0A\u0E49 \u0E15\u0E31\u0E27\u0E23\u0E30\u0E1A\u0E38 "),ce=u(J,"CODE",{});var Xe=d(ce);Ce=c(Xe,"camembert-base"),Xe.forEach(s),qe=c(J," \u0E04\u0E37\u0E2D\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E17\u0E35\u0E48\u0E40\u0E23\u0E32\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E34\u0E48\u0E21\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19! \u0E2D\u0E22\u0E48\u0E32\u0E07\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E44\u0E14\u0E49\u0E40\u0E2B\u0E47\u0E19\u0E44\u0E1B\u0E41\u0E25\u0E49\u0E27\u0E43\u0E19\u0E1A\u0E17\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49 \u0E40\u0E23\u0E32\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E21\u0E31\u0E19\u0E44\u0E14\u0E49\u0E14\u0E49\u0E27\u0E22\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07 "),ie=u(J,"CODE",{});var Ye=d(ie);Te=c(Ye,"pipeline()"),Ye.forEach(s),ye=c(J,":"),J.forEach(s),ke=g(e),B(Q.$$.fragment,e),_e=g(e),B(W.$$.fragment,e),ge=g(e),T=u(e,"P",{});var G=d(T);Fe=c(G,"\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E40\u0E2B\u0E47\u0E19 \u0E01\u0E32\u0E23\u0E42\u0E2B\u0E25\u0E14\u0E42\u0E21\u0E40\u0E14\u0E25\u0E43\u0E19 pipeline \u0E19\u0E31\u0E49\u0E19\u0E07\u0E48\u0E32\u0E22\u0E21\u0E32\u0E01\u0E46 \u0E2A\u0E34\u0E48\u0E07\u0E40\u0E14\u0E35\u0E22\u0E27\u0E17\u0E35\u0E48\u0E04\u0E27\u0E23\u0E23\u0E30\u0E27\u0E31\u0E07\u0E04\u0E37\u0E2D checkpoint \u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E19\u0E31\u0E49\u0E19\u0E04\u0E27\u0E23\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E21\u0E01\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E2D\u0E07\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E08\u0E30\u0E17\u0E33 \u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E0A\u0E48\u0E19 \u0E43\u0E19\u0E07\u0E32\u0E19\u0E19\u0E35\u0E49\u0E40\u0E23\u0E32\u0E42\u0E2B\u0E25\u0E14 "),me=u(G,"CODE",{});var Ze=d(me);Ae=c(Ze,"camembert-base"),Ze.forEach(s),Le=c(G," checkpoint \u0E43\u0E19 "),pe=u(G,"CODE",{});var es=d(pe);ze=c(es,"fill-mask"),es.forEach(s),De=c(G," pipeline \u0E0B\u0E36\u0E48\u0E07\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E01\u0E31\u0E1A\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E40\u0E23\u0E32\u0E08\u0E30\u0E43\u0E0A\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E41\u0E19\u0E48\u0E19\u0E2D\u0E19 \u0E41\u0E15\u0E48\u0E16\u0E49\u0E32\u0E40\u0E23\u0E32\u0E42\u0E2B\u0E25\u0E14 checkpoint \u0E19\u0E35\u0E49\u0E43\u0E19 "),fe=u(G,"CODE",{});var ss=d(fe);Oe=c(ss,"text-classification"),ss.forEach(s),Pe=c(G," pipeline \u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C\u0E08\u0E30\u0E44\u0E21\u0E48\u0E2A\u0E21\u0E40\u0E2B\u0E15\u0E38\u0E2A\u0E21\u0E1C\u0E25 \u0E40\u0E1E\u0E23\u0E32\u0E30\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E02\u0E2D\u0E07 "),ue=u(G,"CODE",{});var ts=d(ue);Se=c(ts,"camembert-base"),ts.forEach(s),Ne=c(G," \u0E44\u0E21\u0E48\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E21\u0E01\u0E31\u0E1A\u0E07\u0E32\u0E19\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E19\u0E35\u0E49! \u0E40\u0E23\u0E32\u0E41\u0E19\u0E30\u0E19\u0E33\u0E43\u0E2B\u0E49\u0E43\u0E0A\u0E49\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E07\u0E32\u0E19 (task selector) \u0E43\u0E19\u0E2D\u0E34\u0E19\u0E40\u0E15\u0E2D\u0E23\u0E4C\u0E40\u0E1F\u0E0B\u0E02\u0E2D\u0E07 Hugging Face Hub \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E37\u0E2D\u0E01 checkpoints \u0E17\u0E35\u0E48\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E21"),G.forEach(s),$e=g(e),X=u(e,"DIV",{class:!0});var rs=d(X);Y=u(rs,"IMG",{src:!0,alt:!0,width:!0}),rs.forEach(s),xe=g(e),te=u(e,"P",{});var as=d(te);Be=c(as,"\u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E0A\u0E49 checkpoint \u0E42\u0E14\u0E22\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E2A\u0E16\u0E32\u0E1B\u0E31\u0E15\u0E22\u0E01\u0E23\u0E23\u0E21\u0E42\u0E21\u0E40\u0E14\u0E25 (model architecture) \u0E44\u0E14\u0E49\u0E42\u0E14\u0E22\u0E15\u0E23\u0E07\u0E14\u0E49\u0E27\u0E22:"),as.forEach(s),je=g(e),S.l(e),re=g(e),B(V.$$.fragment,e),this.h()},h(){x(o,"name","hf:doc:metadata"),x(o,"content",JSON.stringify(vs)),x(w,"id","pretrained-models"),x(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),x(w,"href","#pretrained-models"),x(h,"class","relative group"),os(K.src,He="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter4/camembert.gif")||x(K,"src",He),x(K,"alt","Selecting the Camembert model."),x(K,"width","80%"),x(U,"class","flex justify-center"),os(Y.src,Ie="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter4/tasks.png")||x(Y,"src",Ie),x(Y,"alt","The task selector on the web interface."),x(Y,"width","80%"),x(X,"class","flex justify-center")},m(e,n){a(document.head,o),p(e,i,n),H(t,e,n),p(e,$,n),p(e,h,n),a(h,w),a(w,j),H(E,j,null),a(h,D),a(h,v),a(v,O),p(e,F,n),Z[k].m(e,n),p(e,M,n),p(e,r,n),a(r,m),p(e,A,n),p(e,L,n),a(L,R),p(e,be,n),p(e,U,n),a(U,K),p(e,de,n),p(e,z,n),a(z,we),a(z,le),a(le,Me),a(z,Ee),a(z,ce),a(ce,Ce),a(z,qe),a(z,ie),a(ie,Te),a(z,ye),p(e,ke,n),H(Q,e,n),p(e,_e,n),H(W,e,n),p(e,ge,n),p(e,T,n),a(T,Fe),a(T,me),a(me,Ae),a(T,Le),a(T,pe),a(pe,ze),a(T,De),a(T,fe),a(fe,Oe),a(T,Pe),a(T,ue),a(ue,Se),a(T,Ne),p(e,$e,n),p(e,X,n),a(X,Y),p(e,xe,n),p(e,te,n),a(te,Be),p(e,je,n),ee[P].m(e,n),p(e,re,n),H(V,e,n),ve=!0},p(e,[n]){const se={};n&1&&(se.fw=e[0]),t.$set(se);let ae=k;k=Re(e),k!==ae&&(ls(),C(Z[ae],1,1,()=>{Z[ae]=null}),ns(),b=Z[k],b||(b=Z[k]=Ge[k](e),b.c()),q(b,1),b.m(M.parentNode,M));let oe=P;P=Je(e),P!==oe&&(ls(),C(ee[oe],1,1,()=>{ee[oe]=null}),ns(),S=ee[P],S||(S=ee[P]=Ve[P](e),S.c()),q(S,1),S.m(re.parentNode,re));const he={};n&2&&(he.$$scope={dirty:n,ctx:e}),V.$set(he)},i(e){ve||(q(t.$$.fragment,e),q(E.$$.fragment,e),q(b),q(Q.$$.fragment,e),q(W.$$.fragment,e),q(S),q(V.$$.fragment,e),ve=!0)},o(e){C(t.$$.fragment,e),C(E.$$.fragment,e),C(b),C(Q.$$.fragment,e),C(W.$$.fragment,e),C(S),C(V.$$.fragment,e),ve=!1},d(e){s(o),e&&s(i),I(t,e),e&&s($),e&&s(h),I(E),e&&s(F),Z[k].d(e),e&&s(M),e&&s(r),e&&s(A),e&&s(L),e&&s(be),e&&s(U),e&&s(de),e&&s(z),e&&s(ke),I(Q,e),e&&s(_e),I(W,e),e&&s(ge),e&&s(T),e&&s($e),e&&s(X),e&&s(xe),e&&s(te),e&&s(je),ee[P].d(e),e&&s(re),I(V,e)}}}const vs={local:"pretrained-models",title:"\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E42\u0E21\u0E40\u0E14\u0E25\u0E17\u0E35\u0E48\u0E1C\u0E48\u0E32\u0E19\u0E01\u0E32\u0E23\u0E40\u0E17\u0E23\u0E19\u0E21\u0E32\u0E41\u0E25\u0E49\u0E27 (pretrained models)"};function ws(y,o,i){let t="pt";return us(()=>{const $=new URLSearchParams(window.location.search);i(0,t=$.get("fw")||"pt")}),[t]}class Fs extends is{constructor(o){super();ms(this,o,ws,js,ps,{})}}export{Fs as default,vs as metadata};
