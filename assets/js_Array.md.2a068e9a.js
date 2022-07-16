import{_ as s,c as a,o as n,a as l}from"./app.9f104738.js";const D=JSON.parse('{"title":"\u7A00\u758F\u6570\u7EC4","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7A00\u758F\u6570\u7EC4","slug":"\u7A00\u758F\u6570\u7EC4"},{"level":2,"title":"indexOf\u7F3A\u9677","slug":"indexof\u7F3A\u9677"}],"relativePath":"js/Array.md"}'),o={name:"js/Array.md"},p=l(`<h2 id="\u7A00\u758F\u6570\u7EC4" tabindex="-1">\u7A00\u758F\u6570\u7EC4 <a class="header-anchor" href="#\u7A00\u758F\u6570\u7EC4" aria-hidden="true">#</a></h2><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> []</span></span>
<span class="line"><span style="color:#A6ACCD;">arr[</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">arr[</span><span style="color:#F78C6C;">50</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">arr[</span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span></span>
<span class="line"></span></code></pre></div><p>arr\u5373\u4E3A\u4E00\u4E2A\u7A00\u758F\u6570\u7EC4\uFF0C\u7A00\u758F\u6570\u7EC4\u7684\u7279\u70B9\uFF1A</p><ul><li>for...of\u5FAA\u73AF\u4F1A\u6309\u7167length\u7684\u957F\u5EA6\u8FED\u4EE3</li><li>forEach/map/reduce\u7B49\u8FED\u4EE3api\u4F1A\u5FFD\u7565\u7A7A\u7F3A\u7684\u4F4D\u7F6E</li></ul><h2 id="indexof\u7F3A\u9677" tabindex="-1">indexOf\u7F3A\u9677 <a class="header-anchor" href="#indexof\u7F3A\u9677" aria-hidden="true">#</a></h2><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">NaN,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">indexOf</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">NaN</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// -1</span></span>
<span class="line"></span></code></pre></div><p><code>indexOf</code>\u5185\u90E8\u4F7F\u7528<code>===</code>\u8FDB\u884C\u6BD4\u8F83\uFF0C\u56E0\u4E3ANaN\u4E0D\u7B49\u4E8ENaN\uFF0C\u6240\u4EE5\u4F1A\u627E\u4E0D\u5230\u3002</p>`,7),e=[p];function r(c,t,C,A,i,y){return n(),a("div",null,e)}var F=s(o,[["render",r]]);export{D as __pageData,F as default};
