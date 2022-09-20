import{_ as s,c as n,o as a,a as l}from"./app.def37181.js";const i=JSON.parse('{"title":"for...in","description":"","frontmatter":{},"headers":[{"level":2,"title":"for...in","slug":"for-in"},{"level":2,"title":"Object.keys","slug":"object-keys"}],"relativePath":"js/\u5BF9\u8C61\u8FED\u4EE3.md"}'),p={name:"js/\u5BF9\u8C61\u8FED\u4EE3.md"},o=l(`<h2 id="for-in" tabindex="-1">for...in <a class="header-anchor" href="#for-in" aria-hidden="true">#</a></h2><p><code>for...in</code>\u8FED\u4EE3\u7684\u7279\u70B9\uFF1A</p><ul><li>\u53EA\u8FED\u4EE3\u53EF\u679A\u4E3E\u5C5E\u6027</li><li>\u8FFD\u6EAF\u539F\u578B\u94FE</li><li>\u8DF3\u8FC7<code>Symbol</code>\u5C5E\u6027</li><li>\u4F18\u5148\u6309\u7167\u5927\u5C0F\u8FED\u4EE3\u6570\u503C\u7C7B\u578B\u7684\u5C5E\u6027</li></ul><p><strong>\u53EA\u8FED\u4EE3\u53EF\u679A\u4E3E\u5C5E\u6027\uFF1A</strong></p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> o </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xpzheng</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">defineProperties</span><span style="color:#A6ACCD;">(o</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">22</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enumerable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">gender</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enumerable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> key </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> o) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// =&gt; name gender</span></span>
<span class="line"></span></code></pre></div><p><strong>\u8FFD\u6EAF\u539F\u578B\u94FE</strong></p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> o </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xpzheng</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> p </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">(o)</span></span>
<span class="line"><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">22</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> key </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> p) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// =&gt; age name</span></span>
<span class="line"></span></code></pre></div><p>\u65E2\u7136<code>for..in</code>\u4F1A\u8FFD\u6EAF\u539F\u578B\u94FE\uFF0C\u4E3A\u4EC0\u4E48<code>Object.prototype</code>\u4E2D\u5B9A\u4E49\u7684\u5C5E\u6027\u6CA1\u6709\u88AB\u67E5\u627E\u51FA\u6765\uFF1F \u56E0\u4E3A<code>Object.prototype</code>\u4E2D\u7684\u5C5E\u6027\u7684<code>enumerable</code>\u4E3Afalse\u3002</p><p><strong>\u4F18\u5148\u8FED\u4EE3\u6570\u503C\u7C7B\u5C5E\u6027\uFF1A</strong></p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> o </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xpzheng</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> key </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> o) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1 2 3 name</span></span>
<span class="line"></span></code></pre></div><p>\u4E4B\u6240\u4EE5\u4F1A\u6709\u8FD9\u6837\u7684\u7279\u6027\uFF0C\u662F\u56E0\u4E3A\u6709\u4E00\u4E9B\u7C7B\u6570\u7EC4\u5BF9\u8C61\uFF0C\u5176\u5C5E\u6027\u540D\u4E3A\u6570\u503C\uFF0C\u4E3A\u4E86\u5C3D\u91CF\u6A21\u62DF\u6570\u7EC4\u6309\u7167\u7D22\u5F15\u5927\u5C0F\u8FED\u4EE3\u7684\u7279\u6027\uFF0C<code>for...in</code> \u5728\u8FED\u4EE3\u65F6\u9009\u62E9\u4E86\u8FD9\u79CD\u505A\u6CD5\u3002</p><h2 id="object-keys" tabindex="-1">Object.keys <a class="header-anchor" href="#object-keys" aria-hidden="true">#</a></h2><p><code>Object.keys</code>\u4E0E<code>for...in</code>\u7684\u552F\u4E00\u533A\u522B\u5728\u4E8E\uFF0C<code>for...in</code>\u4F1A\u5BFB\u627E\u539F\u578B\u94FE\u4E0A\u5C5E\u6027\uFF0C\u800C<code>Object.keys</code>\u4E0D\u4F1A\u3002</p>`,13),e=[o];function c(t,r,y,D,F,C){return a(),n("div",null,e)}var d=s(p,[["render",c]]);export{i as __pageData,d as default};
